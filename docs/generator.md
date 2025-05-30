---
id: babel-generator
title: "@babel/generator"
---

> Turns Babel AST into code.

## Install

```shell npm2yarn
npm install --save-dev @babel/generator
```

## Usage

```js title="JavaScript"
import { parse } from "@babel/parser";
import { generate } from "@babel/generator";

const code = "class Example {}";
const ast = parse(code);

const output = generate(
  ast,
  {
    /* options */
  },
  code
);
```

:::info
The symbols like white spaces or new line characters are not preserved in the AST. When Babel generator prints code from the AST, the output format is not guaranteed.
:::

### Parser plugins support
Babel generator supports all the listed [Babel parser plugins](./parser.md#plugins) except `estree`. Note that parser plugins do not transform the code. For example,
if you pass JSX `<div></div>` to babel generator, the result will still contain the `div` JSX element.

```js title="JavaScript"
import { parse } from "@babel/parser";
import { generate } from "@babel/generator";

const code = "const Example = () => <div>example</div>";
const ast = parse(code, { plugins: ["jsx" ] });

const output = generate(
  ast,
).code;

// true
output.includes("<div>");
```

## API

Babel generator contains exactly one function `generate`. It can be imported in different ways.

```js title="JavaScript"
const generate = require("@babel/generator");
const { generate } = require("@babel/generator");
import { generate } from "@babel/generator";
```

### Options

<details>
  <summary>History</summary>

| Version | Changes |
| --- | --- |
| v7.26.0 | Added `experimental_preserveFormat` |
| v7.22.0 | Added `importAttributesKeyword` |
| v7.21.0 | Added `inputSourceMap` |
</details>

Options for formatting output:

| name                     | type                | default         | description                                                                                                                                                                                                                                                        |
| -----------------------  | ------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| auxiliaryCommentAfter    | string              |                 | Optional string to add as a block comment at the end of the output file                                                                                                                                                                                            |
| auxiliaryCommentBefore   | string              |                 | Optional string to add as a block comment at the start of the output file                                                                                                                                                                                          |
| comments                 | boolean             | `true`          | Should comments be included in output                                                                                                                                                                                                                              |
| compact                  | boolean or `'auto'` | `opts.minified` | Set to `true` to avoid adding whitespace for formatting                                                                                                                                                                                                            |
| concise                  | boolean             | `false`         | Set to `true` to reduce whitespace (but not as much as `opts.compact`)                                                                                                                                                                                             |
| decoratorsBeforeExport   | boolean             |                 | Set to `true` to print decorators before `export` in output.                                                                                                                                                                                                       |
| filename                 | string              |                 | Used in warning messages                                                                                                                                                                                                                                           |
| importAttributesKeyword  | `"with"`, `"assert"`, or `"with-legacy"` | | The import attributes/assertions syntax to use. `"with"` for `import "..." with { type: "json" }`, `"assert"` for `import "..." assert { type: "json" }`, and `"with-legacy"` for `import "..." with type: "json"`. When not specified, `@babel/generator` will try to match the style in the input code based on the AST shape. |
| jsescOption              | object              |                 | Use `jsesc` to process literals. `jsesc` is applied to numbers only if `jsescOption.numbers` (added in `v7.9.0`) is present. You can customize `jsesc` by [passing options](https://github.com/mathiasbynens/jsesc#api) to it.                                     |
| jsonCompatibleStrings    | boolean             | `false`         | Set to true to run `jsesc` with "json": true to print "\u00A9" vs. "©";                                                                                                                                                                                            |
| minified                 | boolean             | `false`         | Should the output be minified                                                                                                                                                                                                                                      |
| retainFunctionParens     | boolean             | `false`         | Retain parens around function expressions (could be used to change engine parsing behavior)                                                                                                                                                                        |
| retainLines              | boolean             | `false`         | Attempt to use the same line numbers in the output code as in the source code (helps preserve stack traces)                                                                                                                                                        |
| shouldPrintComment       | function            | `opts.comments` | Function that takes a comment (as a string) and returns `true` if the comment should be included in the output. By default, comments are included if `opts.comments` is `true` or if `opts.minified` is `false` and the comment contains `@preserve` or `@license` |
| recordAndTupleSyntaxType | `'hash'` or `'bar'` | `'hash'`        | For use with the recordAndTuple token.
| topicToken               | `'%'` or `'#'`      |                 | The token to use with [Hack-pipe topic references](plugin-proposal-pipeline-operator.md). This is required when there are any `TopicReference` nodes.

Options for source maps:

| name           | type             | default | description                                                                                                            |
| -------------- | ---------------- | ------- | ---------------------------------------------------------------------------------------------------------------------- |
| sourceMaps     | boolean          | `false` | Enable generating source maps                                                                                          |
| inputSourceMap | string or object |         | The input source map                                                                                                   |
| sourceRoot     | string           |         | A root for all relative URLs in the source map                                                                         |
| sourceFileName | string           |         | The filename for the source code (i.e. the code in the `code` argument). This will only be used if `code` is a string. |

Experimental options:

:::warning
The behavior of experimental options could have breaking changes in _minor_ versions.
:::

| name                        | type    | default | description | experimental reason |
| --------------------------- | ------- | ------- | ----------- | ------------------- |
| experimental_preserveFormat | boolean | `false` | When set to `true`, the generator will try to preserve location of all the nodes and tokens that are present both in the input and output code. To use this option, you currently need to enable the `retainLines: true` generator option, and the `tokens: true` and `createParenthesizedExpressions: true` parser options. | This option will graduate to stable once it supports a mode that does not require preserving line numbers, but just relative positions of tokens. |

### Result

The `generate` API returns an object containing the source code and the source map information when the `sourceMaps` option is enabled. Its fields are:

- `code: string` - The output source code from the provided AST
- `map: EncodedSourceMap | null` - The output source map in [encoded form](https://github.com/jridgewell/gen-mapping/blob/75eff9d01ef5da5477e316ec0f4f917ebe08dd96/src/types.ts#L13). It is lazily-evaluated
- `decodedMap: DecodedSourceMap | undefined` - The output source map in [decoded form](https://github.com/jridgewell/gen-mapping/blob/75eff9d01ef5da5477e316ec0f4f917ebe08dd96/src/types.ts#L17). It is lazily-evaluated
- `rawMappings: Mapping[]` - A high-level [mapping object](https://github.com/jridgewell/gen-mapping/blob/75eff9d01ef5da5477e316ec0f4f917ebe08dd96/src/types.ts#L26) for every recorded segments in order to generate the source map. It is lazily-evaluated

## AST from Multiple Sources

In most cases, Babel does a 1:1 transformation of input-file to output-file. However,
you may be dealing with AST constructed from multiple sources - JS files, templates, etc.
If this is the case, and you want the sourcemaps to reflect the correct sources, you'll need
to pass an object to `generate` as the `code` parameter. Keys
should be the source filenames, and values should be the source content.

Here's an example of what that might look like:

```js title="JavaScript"
import { parse } from "@babel/parser";
import { generate } from "@babel/generator";

const a = "var a = 1;";
const b = "var b = 2;";
const astA = parse(a, { sourceFilename: "a.js" });
const astB = parse(b, { sourceFilename: "b.js" });
const ast = {
  type: "Program",
  body: [].concat(astA.program.body, astB.program.body),
};

const { code, map } = generate(
  ast,
  { sourceMaps: true },
  {
    "a.js": a,
    "b.js": b,
  }
);

// Sourcemap will point to both a.js and b.js where appropriate.
```
