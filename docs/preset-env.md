---
id: babel-preset-env
title: "@babel/preset-env"
---

`@babel/preset-env` is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s). This both makes your life easier and JavaScript bundles smaller!

- [Install](#install)
- [How Does it Work?](#how-does-it-work)
- [Browserslist Integration](#browserslist-integration)
- [Options](#options)

## Install

```shell npm2yarn
npm install --save-dev @babel/preset-env
```

## How Does it Work?

`@babel/preset-env` would not be possible if not for a number of awesome open-source projects, like [`browserslist`](https://github.com/browserslist/browserslist), [`compat-table`](https://github.com/kangax/compat-table), and [`electron-to-chromium`](https://github.com/Kilian/electron-to-chromium).

We leverage these data sources to maintain [mappings of which version](https://github.com/babel/babel/blob/main/packages/babel-compat-data/data/plugins.json) of our supported target environments gained support of a JavaScript syntax or browser feature, as well as a mapping of those syntaxes and features to Babel transform plugins and core-js polyfills.

:::note
`@babel/preset-env` won't include any JavaScript syntax proposals less than Stage 3 because at that stage in the TC39 process, it wouldn't be implemented by any browsers anyway. Those would need to be included manually. The `shippedProposals` option will include Stage 3 proposals that some browsers have already implemented.
:::

`@babel/preset-env` takes any [target environments you've specified](#targets) and checks them against its mappings to compile a list of plugins and passes it to Babel.

## Browserslist Integration

For browser- or Electron-based projects, we recommend using a [`.browserslistrc`](https://github.com/browserslist/browserslist) file to specify targets. You may already have this configuration file as it is used by many tools in the ecosystem, like [autoprefixer](https://github.com/postcss/autoprefixer), [stylelint](https://stylelint.io/), [eslint-plugin-compat](https://github.com/amilajack/eslint-plugin-compat) and many others.

By default `@babel/preset-env` will use [browserslist config sources](https://github.com/ai/browserslist#queries) _unless_ either the [targets](#targets) or [ignoreBrowserslistConfig](#ignorebrowserslistconfig) options are set.

:::tip
If you are relying on browserslist's defaults query (either explicitly or by having no browserslist config), you will want to check out the [No targets](options.md#no-targets) section for information on preset-env's behavior.
:::

For example, to only include polyfills and code transforms needed for users whose browsers have >0.25% market share (ignoring browsers without security updates like IE 10 and BlackBerry):

```json title="babel.config.json"
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "entry",
        "corejs": "3.22"
      }
    ]
  ]
}
```

```text title=".browserslistrc"
> 0.25%
not dead
```

or

```json title="package.json"
{ "browserslist": "> 0.25%, not dead" }
```

:::note
Please note that since `v7.4.5` the browserslist query is resolved with [`mobileToDesktop: true`](https://github.com/browserslist/browserslist#js-api).
For example, if you want to create a snapshot of a query run `npx browserslist --mobile-to-desktop ">0.25%, not dead"`.
:::

## Options

For more information on setting options for a preset, refer to the [preset options](presets.md#preset-options) documentation.

### `targets`

`string | Array<string> | { [string]: string }`, defaults to the top-level `targets` option if no browserslist-related option is specified in `@babel/preset-env`'s docs, otherwise to `{}`.

For usage, refer to the [`targets` option](options.md#targets) documentation.

### `bugfixes`

:::babel8

`boolean`, defaults to `true`.

:::

:::babel7

`boolean`, defaults to `false`.

:::

Added in: `v7.9.0`

::::babel7

:::note
This option will be enabled by default in Babel 8.
:::

::::

By default, `@babel/preset-env` (and Babel plugins in general) grouped ECMAScript syntax features into collections of closely related smaller features. These groups can be large and include a lot of edge cases, for example "function arguments" includes destructured, default and rest parameters. From this grouping information, Babel enables or disables each group based on the browser support target you specify to `@babel/preset-env`’s `targets` option.

When this option is enabled, `@babel/preset-env` tries to compile the broken syntax to the closest _non-broken modern syntax_ supported by your target browsers. Depending on your `targets` and on how many modern syntax you are using, this can lead to a significant size reduction in the compiled app. This option merges the features of [`@babel/preset-modules`](https://github.com/babel/preset-modules) without having to use another preset.

::::babel8

### `loose`, `spec`

:::danger
These options have been removed in Babel 8. Consider migrating to the top level [`assumptions`](assumptions.md), available since Babel 7.13. See ["Migrating from `@babel/preset-env`'s `"loose"` and `"spec"` modes"](assumptions.md#migrating-from-babelpreset-envs-loose-and-spec-modes) for the equivalent assumptions-based configuration, ready to be copied and pasted as a starting point.
:::

::::

::::babel7

### `spec`

`boolean`, defaults to `false`.

Enable more spec compliant, but potentially slower, transformations for any plugins in this preset that support them.

:::caution
This option has been deprecated and will be removed in Babel 8. Consider migrating to the top level [`assumptions`](assumptions.md) available since Babel 7.13. See ["Migrating from `@babel/preset-env`'s `"loose"` and `"spec"` modes"](assumptions.md#migrating-from-babelpreset-envs-loose-and-spec-modes) for the equivalent assumptions-based configuration, ready to be copied and pasted as a starting point.
:::

### `loose`

`boolean`, defaults to `false`.

Enable ["loose" transformations](http://2ality.com/2015/12/babel6-loose-mode.html) for any plugins in this preset that allow them.

:::caution
This option has been deprecated and will be removed in Babel 8. Consider migrating to the top level [`assumptions`](assumptions.md) available since Babel 7.13. See ["Migrating from `@babel/preset-env`'s `"loose"` and `"spec"` modes"](assumptions.md#migrating-from-babelpreset-envs-loose-and-spec-modes) for the equivalent assumptions-based configuration, ready to be copied and pasted as a starting point.
:::

::::

### `modules`

`"amd" | "umd" | "systemjs" | "commonjs" | "cjs" | "auto" | false`, defaults to `"auto"`.

Enable transformation of ES module syntax to another module type. Note that `cjs` is just an alias for `commonjs`.

Setting this to `false` will preserve ES modules. Use this only if you intend to ship native ES Modules to browsers. If you are using a bundler with Babel, the default `modules: "auto"` is always preferred.

#### `modules: "auto"`

By default `@babel/preset-env` uses [`caller`](options.md#caller) data to determine whether ES modules and module features (e.g. `import()`) should be transformed. Generally `caller` data will be specified in the bundler plugins (e.g. `babel-loader`, `@rollup/plugin-babel`) and thus it is not recommended to pass `caller` data yourself -- The passed `caller` may overwrite the one from bundler plugins and in the future you may get suboptimal results if bundlers supports new module features.

### `debug`

`boolean`, defaults to `false`.

Outputs to `console.log` the polyfills and transform plugins enabled by `preset-env` and, if applicable, which one of your targets that needed it.

### `include`

`Array<string|RegExp>`, defaults to `[]`.

<details>
  <summary>History</summary>

| Version | Changes |
| --- | --- |
| `v7.4.0` | Support injecting `core-js@3` polyfills |
</details>

An array of plugins to always include.

Valid options include any:

:::babel7

- [Babel plugins](https://github.com/babel/babel/blob/main/packages/babel-preset-env/src/available-plugins.ts) - both full and shorthand names are supported, for example the following are functionally equivalent:
  * `@babel/plugin-transform-spread`
  * `@babel/transform-spread`
  * `babel-transform-spread`
  * `transform-spread`
- Built-ins (both for [core-js@3](https://github.com/babel/babel/blob/master/packages/babel-preset-env/src/polyfills/corejs3/built-in-definitions.js) and [core-js@2](https://github.com/babel/babel/blob/master/packages/babel-preset-env/src/polyfills/corejs2/built-in-definitions.js), such as `es.map`, `es.set`, or `es.object.assign`.

:::

:::babel8

- [Babel plugins](https://github.com/babel/babel/blob/main/packages/babel-preset-env/src/available-plugins.ts) - both full and shorthand names are supported, for example the following are functionally equivalent:
  * `@babel/plugin-transform-optional-chaining`
  * `@babel/transform-optional-chaining`
  * `transform-optional-chaining`
- [core-js@3](https://github.com/babel/babel/blob/master/packages/babel-preset-env/src/polyfills/corejs3/built-in-definitions.js) polyfills, such as `es.map`, `es.set`, or `es.object.assign`.

:::

Plugin names can be fully or partially specified (or using `RegExp`).

Acceptable inputs:

- Full name (`string`): `"es.math.sign"`
- Partial name (`string`): `"es.math.*"` (resolves to all plugins with `es.math` prefix)
- `RegExp` Object: `/^transform-.*$/` or `new RegExp("^transform-modules-.*")`

Note that the above `.` is the `RegExp` equivalent to match any character, and not the actual `'.'` character. Also note that to match any character `.*` is used in `RegExp` as opposed to `*` in `glob` format.

This option is useful if there is a bug in a native implementation, or a combination of a non-supported feature + a supported one doesn't work.

For example, Node 4 supports native classes but not spread. If `super` is used with a spread argument, then the `@babel/plugin-transform-classes` transform needs to be `include`d, as it is not possible to transpile a spread with `super` otherwise.

:::note
The `include` and `exclude` options _only_ work with the [plugins included with this preset](https://github.com/babel/babel/blob/main/packages/babel-preset-env/src/available-plugins.ts); so, for example, including `@babel/plugin-proposal-do-expressions` or excluding `@babel/plugin-proposal-function-bind` will throw errors. To use a plugin _not_ included with this preset, add them to your ["plugins"](options.md#plugins) directly.
:::

### `exclude`

`Array<string|RegExp>`, defaults to `[]`.

An array of plugins to always exclude/remove.

The possible options are the same as the `include` option.

This option is useful for excluding a transform like `@babel/plugin-transform-regenerator`, for example if you are using another plugin like [fast-async](https://github.com/MatAtBread/fast-async) instead of [Babel's async-to-gen](plugin-transform-async-generator-functions.md).

### `useBuiltIns`

`"usage"` | `"entry"` | `false`, defaults to `false`.

This option configures how `@babel/preset-env` handles polyfills.

When either the `usage` or `entry` options are used, `@babel/preset-env` will add direct references to `core-js` modules as bare imports (or requires). This means `core-js` will be resolved relative to the file itself and needs to be accessible.

:::babel7

Since `@babel/polyfill` was deprecated in 7.4.0, we recommend directly adding `core-js` and setting the version via the [`corejs`](#corejs) option.

```shell npm2yarn
npm install core-js@3 --save

# or

npm install core-js@2 --save
```

:::

:::babel8

When auto-injecting polyfills using `@babel/preset-env`, you must add `core-js` to your dependencies:

```shell npm2yarn
npm install core-js
```

:::

#### `useBuiltIns: 'entry'`

<details>
  <summary>History</summary>

| Version | Changes |
| --- | --- |
| `v7.4.0` | It replaces `"core-js/stable"` and `"regenerator-runtime/runtime"` entry imports |
| `v7.0.0` | It replaces `"@babel/polyfill"` entry imports |
</details>

::::tip
Only use `import "core-js";` once in your whole app.

:::babel7
If you are using `@babel/polyfill`, it already includes `core-js`: importing it twice will throw an error.
:::

Multiple imports or requires of those packages might cause global collisions and other issues that are hard to trace.
We recommend creating a single entry file that only contains the `import` statements.
::::

This option enables a new plugin that replaces the `import "core-js/stable";` and `require("core-js");` statements with individual imports to different `core-js` entry points based on environment.

**In**

```js title="JavaScript"
import "core-js";
```

**Out (different based on environment)**

```js title="JavaScript"
import "core-js/modules/es.string.pad-start";
import "core-js/modules/es.string.pad-end";
```

Importing `"core-js"` loads polyfills for every possible ECMAScript feature: what if you know that you only need some of them? When using `core-js@3`, `@babel/preset-env` is able to optimize every single `core-js` entrypoint and their combinations. For example, you might want to only polyfill array methods and new `Math` proposals:

**In**

```js title="JavaScript"
import "core-js/es/array";
import "core-js/proposals/math-extensions";
```

**Out (different based on environment)**

```js title="JavaScript"
import "core-js/modules/es.array.unscopables.flat";
import "core-js/modules/es.array.unscopables.flat-map";
import "core-js/modules/esnext.math.clamp";
import "core-js/modules/esnext.math.deg-per-rad";
import "core-js/modules/esnext.math.degrees";
import "core-js/modules/esnext.math.fscale";
import "core-js/modules/esnext.math.rad-per-deg";
import "core-js/modules/esnext.math.radians";
import "core-js/modules/esnext.math.scale";
```

You can read [core-js](https://github.com/zloirock/core-js)'s documentation for more information about the different entry points.

::::babel7

:::note
When using `core-js@2` (either explicitly using the [`corejs: "2"`](#corejs) option or implicitly), `@babel/preset-env` will also transform imports and requires of `@babel/polyfill`.
This behavior is deprecated because it isn't possible to use `@babel/polyfill` with different `core-js` versions.
:::

::::

#### `useBuiltIns: 'usage'`

Adds specific imports for polyfills when they are used in each file. We take advantage of the fact that a bundler will load the same polyfill only once.

**In**

```js title="a.js"
var a = new Promise();
```

```js title="b.js"
var b = new Map();
```

**Out (if environment doesn't support it)**

```js title="a.js"
import "core-js/modules/es.promise";
var a = new Promise();
```

```js title="b.js"
import "core-js/modules/es.map";
var b = new Map();
```

**Out (if environment supports it)**

```js title="a.js"
var a = new Promise();
```

```js title="b.js"
var b = new Map();
```

#### `useBuiltIns: false`

Don't add polyfills automatically per file, and don't transform `import "core-js"` or `import "@babel/polyfill"` to individual polyfills.

### `corejs`

Added in: `v7.4.0`

:::babel7

`string` or `{ version: string, proposals: boolean }`, defaults to `"2.0"`. The `version` string can be any supported `core-js` versions. For example, `"3.33"` or `"2.0"`.

This option only has an effect when used alongside `useBuiltIns: usage` or `useBuiltIns: entry`, and ensures `@babel/preset-env` injects the polyfills supported by your `core-js` version. It is recommended to specify the minor version otherwise `"3"` will be interpreted as `"3.0"` which may not include polyfills for the latest features.

:::

:::babel8

`string` or `{ version: string, proposals: boolean }`, defaults to `"3.0"`. The `version` string can be any supported `core-js` versions with a minor version. For example, `"3.33"`.

This option only has an effect when used alongside `useBuiltIns: usage` or `useBuiltIns: entry`, and ensures `@babel/preset-env` injects the polyfills supported by your `core-js` version.

:::

By default, only polyfills for stable ECMAScript features are injected: if you want to polyfill proposals, you have three different options:

- when using `useBuiltIns: "entry"`, you can directly import a [proposal polyfill](https://github.com/zloirock/core-js/tree/master/packages/core-js/proposals): `import "core-js/proposals/string-replace-all"`.
- when using `useBuiltIns: "usage"` you have two different alternatives:
  - set the [`shippedProposals`](#shippedproposals) option to `true`. This will enable polyfills and transforms for proposal which have already been shipped in browsers for a while.
  - use `corejs: { version: "3.8", proposals: true }`. This will enable polyfilling of every proposal supported by `core-js@3.8`.

### `forceAllTransforms`

`boolean`, defaults to `false`.

<details>
  <summary><b>Example</b></summary>

With Babel 7's [JavaScript config file](config-files#javascript) support, you can force all transforms to be run if env is set to `production`.

```js title="babel.config.js"
module.exports = function(api) {
  return {
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            chrome: 59,
            edge: 13,
            firefox: 50,
          },
          // for uglifyjs...
          forceAllTransforms: api.env("production"),
        },
      ],
    ],
  };
};
```

</details>

:::danger
`targets.uglify` is deprecated and will be removed in the next major in
favor of this.
:::

By default, this preset will run all the transforms needed for the targeted
environment(s). Enable this option if you want to force running _all_
transforms, which is useful if the output will be run through UglifyJS or an
environment that only supports ES5.

:::tip
If you require an alternative minifier which _does_ support ES6 syntax,
we recommend [Terser](https://www.npmjs.com/package/terser).
:::

### `configPath`

`string`, defaults to `process.cwd()`

The starting point where the config search for browserslist will start, and ascend to the system root until found.

### `ignoreBrowserslistConfig`

`boolean`, defaults to `false`

Toggles whether or not [browserslist config sources](https://github.com/ai/browserslist#queries) are used, which includes searching for any browserslist files or referencing the browserslist key inside package.json. This is useful for projects that use a browserslist config for files that won't be compiled with Babel.

### `browserslistEnv`

Added in: `v7.10.0`
`string`, defaults to `undefined`

The [Browserslist environment](https://github.com/browserslist/browserslist#configuring-for-different-environments) to use.

### `shippedProposals`

`boolean`, defaults to `false`

<details>
  <summary>History</summary>

| Version | Changes |
| --- | --- |
| `v7.14.0` | Include private field brand checks |
| `v7.12.0` | Include class static block and import assertions |
| `v7.10.0` | Include class properties and private methods |
| `v7.9.0` | Include numeric separator |
</details>

Toggles enabling support for builtin/feature proposals that have shipped in browsers. If your target environments have native support for a feature proposal, its matching parser syntax plugin is enabled instead of performing any transform. Note that this _does not_ enable the same transformations as [`@babel/preset-stage-3`](preset-stage-3.md), since proposals can continue to change before landing in browsers.

The following are currently supported:

**Builtins** injected when using `useBuiltIns: "usage"`

- [esnext.global-this](https://github.com/tc39/proposal-global) (only supported by `core-js@3`)
- [esnext.string.match-all](https://github.com/tc39/proposal-string-matchall) (only supported by `core-js@3`)

**Features**

- [Import attributes](https://github.com/tc39/proposal-import-attributes) (parsing only)

**Materialized Features**
These features were behind `shippedProposals` flag in older Babel versions. They are now generally available.

- [class properties](https://github.com/tc39/proposal-class-fields)
- [Class static block](https://github.com/tc39/proposal-class-static-block)
- [numeric separator](https://github.com/tc39/proposal-numeric-separator)
- [Private field brand checks](https://github.com/tc39/proposal-private-fields-in-in)
- [private methods](https://github.com/tc39/proposal-private-methods)

> You can read more about configuring preset options [here](https://babeljs.io/docs/en/presets#preset-options)

## Caveats

### Ineffective browserslist queries

While `op_mini all` is a valid browserslist query, preset-env currently ignores it due to [lack of support data](https://github.com/kangax/compat-table/issues/1057) for Opera Mini.
