// Globals pre-loaded by Worker
import { compareVersions } from "./Utils";

declare const Babel: any;
declare const prettier: any;
declare const prettierPlugins: any;

import Transitions from "./Transitions";
import type {
  BabelPresets,
  CompileConfig,
  Transition,
  SupportedFileExtension,
} from "./types";

type Return = {
  compiled: string | undefined | null;
  compileErrorMessage: string | undefined | null;
  meta: {
    compiledSize: number;
    rawSize: number;
  };
  sourceMap: string | undefined | null;
  transitions: Array<Transition>;
};

const DEFAULT_PRETTIER_CONFIG = {
  bracketSpacing: true,
  jsxBracketSameLine: false,
  parser: "babel",
  printWidth: 80,
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "none",
  useTabs: false,
};

function guessFileExtension(presets: BabelPresets): SupportedFileExtension {
  let ext = ".js";
  if (presets.includes("typescript")) {
    ext = ".ts";
  }
  if (presets.includes("react")) {
    ext = (ext + "x") as any;
  }
  return ext as SupportedFileExtension;
}

export default function compile(code: string, config: CompileConfig): Return {
  const { envConfig, presetsOptions } = config;

  let compiled = null;
  let compileErrorMessage = null;
  let sourceMap = null;
  let useBuiltIns: false | "entry" | "usage" = false;
  let corejs = "3.42";
  const transitions = new Transitions();
  const meta = {
    compiledSize: 0,
    rawSize: new Blob([code], { type: "text/plain" }).size,
  };

  let presetEnvOptions: {
    targets: any;
    modules: any;
    forceAllTransforms: boolean;
    shippedProposals: boolean;
    useBuiltIns: false | "entry" | "usage";
    corejs: string;
    spec?: boolean;
    loose?: boolean;
    bugfixes?: boolean;
  };

  if (envConfig && envConfig.isEnvPresetEnabled) {
    const targets: any = {};
    const { forceAllTransforms, shippedProposals, modules } = envConfig;

    if (envConfig.browsers) {
      targets.browsers = envConfig.browsers
        .split(",")
        .map((value) => value.trim())
        .filter((value) => value);
    }
    if (envConfig.isElectronEnabled) {
      targets.electron = envConfig.electron;
    }
    if (envConfig.isBuiltInsEnabled) {
      useBuiltIns = (!config.evaluate && envConfig.builtIns) as
        | false
        | "entry"
        | "usage";
      if (envConfig.corejs) {
        corejs = envConfig.corejs;
      }
    }
    if (envConfig.isNodeEnabled) {
      targets.node = envConfig.node;
    }

    presetEnvOptions = {
      targets,
      modules,
      forceAllTransforms,
      shippedProposals,
      useBuiltIns,
      corejs: undefined,
    };

    if (Babel.version && compareVersions(Babel.version, "8.0.0") === -1) {
      presetEnvOptions.spec = envConfig.isSpecEnabled;
      presetEnvOptions.loose = envConfig.isLooseEnabled;
    }

    if (useBuiltIns) {
      presetEnvOptions.corejs = corejs;
    }

    if (
      envConfig.isBugfixesEnabled &&
      Babel.version &&
      compareVersions(Babel.version, "7.9.0") !== -1 &&
      compareVersions(Babel.version, "8.0.0") < 0
    ) {
      presetEnvOptions.bugfixes = envConfig.isBugfixesEnabled;
    }
  }

  try {
    const babelConfig = {
      babelrc: false,
      filename: "repl" + guessFileExtension(config.presets),
      sourceMap: config.sourceMap,

      presets: config.presets.map((preset) => {
        if (typeof preset !== "string") return preset;
        if (preset === "env") {
          return ["env", presetEnvOptions];
        }
        if (
          Babel.version &&
          compareVersions(Babel.version, "8.0.0") < 0 &&
          preset === "typescript"
        ) {
          return [
            "typescript",
            {
              allowDeclareFields: true,
              allowNamespaces: true,
            },
          ];
        }

        if (/^stage-[0-3]$/.test(preset)) {
          const version = presetsOptions.decoratorsVersion;
          const decoratorsLegacy = version === "legacy" || undefined;

          const decoratorsBeforeExport = [
            "legacy",
            "2022-03",
            "2023-01",
            "2023-05",
            "2023-11",
          ].includes(version)
            ? undefined
            : presetsOptions.decoratorsBeforeExport;

          return [
            preset,
            {
              // pass decoratorsLegacy for Babel < 7.17
              decoratorsLegacy,
              decoratorsVersion: decoratorsLegacy ? undefined : version,
              decoratorsBeforeExport,
              pipelineProposal: presetsOptions.pipelineProposal,
            },
          ];
        }
        if (preset === "react") {
          return [
            "react",
            {
              runtime: presetsOptions.reactRuntime,
            },
          ];
        }
        return preset;
      }),
      plugins: config.plugins,
      sourceType: config.sourceType,
      wrapPluginVisitorMethod: config.getTransitions
        ? transitions.wrapPluginVisitorMethod
        : undefined,
    };

    if (Babel.version && compareVersions(Babel.version, "7.13.0") >= 0) {
      (babelConfig as any).assumptions = envConfig?.assumptions ?? {};
    }

    const transformed = Babel.transform(code, babelConfig);
    compiled = transformed.code;

    if (config.getTransitions) {
      transitions.addExitTransition(compiled);
    }

    if (config.sourceMap) {
      try {
        sourceMap = JSON.stringify(transformed.map);
      } catch (error) {
        console.error(`Source Map generation failed: ${error}`);
      }
    }

    if (
      config.prettify &&
      typeof prettier !== "undefined" &&
      typeof prettierPlugins !== "undefined"
    ) {
      // TODO Don't re-parse; just pass Prettier the AST we already have.
      // This will have to wait until we've updated to Babel 7 since Prettier uses it.
      // Prettier doesn't handle ASTs from Babel 6.
      // if (
      //   prettier.__debug !== undefined &&
      //   typeof prettier.__debug.formatAST === 'function'
      // ) {
      //   compiled = prettier.__debug.formatAST(transformed.ast, DEFAULT_PRETTIER_CONFIG);
      // } else {
      compiled = prettier.format(compiled, {
        ...DEFAULT_PRETTIER_CONFIG,
        plugins: prettierPlugins,
      });
      // }
    }
    meta.compiledSize = new Blob([compiled], { type: "text/plain" }).size;
  } catch (error) {
    compiled = null;
    compileErrorMessage = error.message;
    sourceMap = null;
  }

  return {
    compiled,
    compileErrorMessage,
    meta,
    sourceMap,
    transitions: transitions.getValue(),
  };
}
