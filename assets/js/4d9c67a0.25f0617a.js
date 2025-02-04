"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["2511"],{73410:function(e,n,l){l.r(n),l.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>p,assets:()=>d,toc:()=>h,frontMatter:()=>a});var r=JSON.parse('{"id":"babel-plugin-transform-runtime","title":"@babel/plugin-transform-runtime","description":"A plugin that enables the re-use of Babel\'s injected helper code to save on codesize.","source":"@site/../docs/plugin-transform-runtime.md","sourceDirName":".","slug":"/babel-plugin-transform-runtime","permalink":"/docs/babel-plugin-transform-runtime","draft":false,"unlisted":false,"editUrl":"https://github.com/babel/website/edit/main/docs/../docs/plugin-transform-runtime.md","tags":[],"version":"current","frontMatter":{"id":"babel-plugin-transform-runtime","title":"@babel/plugin-transform-runtime"},"sidebar":"docs","previous":{"title":"@babel/polyfill","permalink":"/docs/babel-polyfill"},"next":{"title":"@babel/register","permalink":"/docs/babel-register"}}'),s=l("24246"),i=l("80980"),t=l("95181"),o=l("38049");let a={id:"babel-plugin-transform-runtime",title:"@babel/plugin-transform-runtime"},c=void 0,d={},h=[{value:"Installation",id:"installation",level:2},{value:"Why?",id:"why",level:2},{value:"Usage",id:"usage",level:2},{value:"With a configuration file (Recommended)",id:"with-a-configuration-file-recommended",level:3},{value:"Via CLI",id:"via-cli",level:3},{value:"Via Node API",id:"via-node-api",level:3},{value:"Options",id:"options",level:2},{value:"<code>absoluteRuntime</code>",id:"absoluteruntime",level:3},{value:"<code>corejs</code>",id:"corejs",level:3},{value:"<code>helpers</code>",id:"helpers",level:3},{value:"<code>moduleName</code>",id:"modulename",level:3},{value:"<code>regenerator</code>",id:"regenerator",level:3},{value:"<code>useESModules</code>",id:"useesmodules",level:3},{value:"<code>version</code>",id:"version",level:3},{value:"Technical details",id:"technical-details",level:2},{value:"Regenerator aliasing",id:"regenerator-aliasing",level:3},{value:"<code>core-js</code> aliasing",id:"core-js-aliasing",level:3},{value:"Helper aliasing",id:"helper-aliasing",level:3},{value:"Removed options",id:"removed-options",level:2}];function u(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{Details:l}=n;return!l&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"A plugin that enables the re-use of Babel's injected helper code to save on codesize."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Instance methods such as ",(0,s.jsx)(n.code,{children:'"foobar".includes("foo")'})," will only work with ",(0,s.jsx)(n.code,{children:"core-js@3"}),". If you need to polyfill them, you can directly import ",(0,s.jsx)(n.code,{children:'"core-js"'})," or use ",(0,s.jsx)(n.code,{children:"@babel/preset-env"}),"'s ",(0,s.jsx)(n.code,{children:"useBuiltIns"})," option."]})}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(n.p,{children:"Install it as development dependency."}),"\n",(0,s.jsxs)(t.Z,{groupId:"npm2yarn",children:[(0,s.jsx)(o.Z,{value:"npm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"npm install --save-dev @babel/plugin-transform-runtime\n"})})}),(0,s.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"yarn add --dev @babel/plugin-transform-runtime\n"})})}),(0,s.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"pnpm add --save-dev @babel/plugin-transform-runtime\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["and ",(0,s.jsx)(n.a,{href:"/docs/babel-runtime",children:(0,s.jsx)(n.code,{children:"@babel/runtime"})}),' as a production dependency (since it\'s for the "runtime").']}),"\n",(0,s.jsxs)(t.Z,{groupId:"npm2yarn",children:[(0,s.jsx)(o.Z,{value:"npm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"npm install --save @babel/runtime\n"})})}),(0,s.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"yarn add @babel/runtime\n"})})}),(0,s.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"pnpm add @babel/runtime\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"The transformation plugin is typically used only in development, but the runtime itself will be depended on by your deployed code. See the examples below for more details."}),"\n",(0,s.jsx)(n.admonition,{type:"danger",children:(0,s.jsxs)(n.p,{children:["When this plugin is enabled, the ",(0,s.jsx)(n.code,{children:"useBuiltIns"})," option in ",(0,s.jsx)(n.code,{children:"@babel/preset-env"})," must not be set. Otherwise, this plugin may not able to completely sandbox the environment."]})}),"\n",(0,s.jsx)(n.h2,{id:"why",children:"Why?"}),"\n",(0,s.jsxs)(n.p,{children:["Babel uses very small helpers for common functions such as ",(0,s.jsx)(n.code,{children:"_extend"}),". By default this will be added to every file that requires it. This duplication is sometimes unnecessary, especially when your application is spread out over multiple files."]}),"\n",(0,s.jsxs)(n.p,{children:["This is where the ",(0,s.jsx)(n.code,{children:"@babel/plugin-transform-runtime"})," plugin comes in: all of the helpers will reference the module ",(0,s.jsx)(n.code,{children:"@babel/runtime"})," to avoid duplication across your compiled output. The runtime will be compiled into your build."]}),"\n",(0,s.jsxs)(n.p,{children:["Another purpose of this transformer is to create a sandboxed environment for your code. If you directly import ",(0,s.jsx)(n.a,{href:"https://github.com/zloirock/core-js",children:"core-js"})," or ",(0,s.jsx)(n.a,{href:"/docs/babel-polyfill",children:"@babel/polyfill"})," and the built-ins it provides such as ",(0,s.jsx)(n.code,{children:"Promise"}),", ",(0,s.jsx)(n.code,{children:"Set"})," and ",(0,s.jsx)(n.code,{children:"Map"}),", those will pollute the global scope. While this might be ok for an app or a command line tool, it becomes a problem if your code is a library which you intend to publish for others to use or if you can't exactly control the environment in which your code will run."]}),"\n",(0,s.jsxs)(n.p,{children:["The transformer will alias these built-ins to ",(0,s.jsx)(n.code,{children:"core-js"})," so you can use them seamlessly without having to require the polyfill."]}),"\n",(0,s.jsxs)(n.p,{children:["See the ",(0,s.jsx)(n.a,{href:"#technical-details",children:"technical details"})," section for more information on how this works and the types of transformations that occur."]}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.h3,{id:"with-a-configuration-file-recommended",children:"With a configuration file (Recommended)"}),"\n",(0,s.jsx)(n.p,{children:"Without options:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title="babel.config.json"',children:'{\n  "plugins": ["@babel/plugin-transform-runtime"]\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"With options (and their defaults):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title="babel.config.json"',children:'{\n  "plugins": [\n    [\n      "@babel/plugin-transform-runtime",\n      {\n        "absoluteRuntime": false,\n        "corejs": false,\n        "helpers": true,\n        "regenerator": true,\n        "version": "7.0.0-beta.0"\n      }\n    ]\n  ]\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The plugin defaults to assuming that all polyfillable APIs will be provided by the user. Otherwise the ",(0,s.jsx)(n.a,{href:"#corejs",children:(0,s.jsx)(n.code,{children:"corejs"})})," option needs to be specified."]}),"\n",(0,s.jsx)(n.h3,{id:"via-cli",children:"Via CLI"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"babel --plugins @babel/plugin-transform-runtime script.js\n"})}),"\n",(0,s.jsx)(n.h3,{id:"via-node-api",children:"Via Node API"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'require("@babel/core").transformSync("code", {\n  plugins: ["@babel/plugin-transform-runtime"],\n});\n'})}),"\n",(0,s.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,s.jsx)(n.h3,{id:"absoluteruntime",children:(0,s.jsx)(n.code,{children:"absoluteRuntime"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"boolean"})," or ",(0,s.jsx)(n.code,{children:"string"}),", defaults to ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["This allows users to run ",(0,s.jsx)(n.code,{children:"transform-runtime"})," broadly across a whole project. By default, ",(0,s.jsx)(n.code,{children:"transform-runtime"})," imports from ",(0,s.jsx)(n.code,{children:"@babel/runtime/foo"})," directly, but that only works if ",(0,s.jsx)(n.code,{children:"@babel/runtime"})," is in the ",(0,s.jsx)(n.code,{children:"node_modules"})," of the file that is being compiled. This can be problematic for nested ",(0,s.jsx)(n.code,{children:"node_modules"}),", npm-linked modules, or CLIs that reside outside the user's project, among other cases. To avoid worrying about how the runtime module's location is resolved, this allows users to resolve the runtime once up front, and then insert absolute paths to the runtime into the output code."]}),"\n",(0,s.jsx)(n.p,{children:"Using absolute paths is not desirable if files are compiled for use at a later time, but in contexts where a file is compiled and then immediately consumed, they can be quite helpful."}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["You can read more about configuring plugin options ",(0,s.jsx)(n.a,{href:"https://babeljs.io/docs/en/plugins#plugin-options",children:"here"})]})}),"\n",(0,s.jsx)(n.h3,{id:"corejs",children:(0,s.jsx)(n.code,{children:"corejs"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"false"}),", ",(0,s.jsx)(n.code,{children:"2"}),", ",(0,s.jsx)(n.code,{children:"3"})," or ",(0,s.jsx)(n.code,{children:"{ version: 2 | 3, proposals: boolean }"}),", defaults to ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["e.g. ",(0,s.jsx)(n.code,{children:"['@babel/plugin-transform-runtime', { corejs: 3 }],"})]}),"\n",(0,s.jsxs)(l,{children:[(0,s.jsx)("summary",{children:"History"}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Version"}),(0,s.jsx)(n.th,{children:"Changes"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"v7.4.0"})}),(0,s.jsxs)(n.td,{children:["Supports ",(0,s.jsx)(n.code,{children:"{ proposals: boolean }"})]})]})})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Specifying a number will rewrite the helpers that need polyfillable APIs to reference helpers from that (major) version of ",(0,s.jsx)(n.code,{children:"core-js"})," instead\nPlease note that ",(0,s.jsx)(n.code,{children:"corejs: 2"})," only supports global variables (e.g. ",(0,s.jsx)(n.code,{children:"Promise"}),") and static properties (e.g. ",(0,s.jsx)(n.code,{children:"Array.from"}),"), while ",(0,s.jsx)(n.code,{children:"corejs: 3"})," also supports instance properties (e.g. ",(0,s.jsx)(n.code,{children:"[].includes"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["By default, ",(0,s.jsx)(n.code,{children:"@babel/plugin-transform-runtime"})," doesn't polyfill proposals. If you are using ",(0,s.jsx)(n.code,{children:"corejs: 3"}),", you can opt into this by enabling using the ",(0,s.jsx)(n.code,{children:"proposals: true"})," option."]}),"\n",(0,s.jsx)(n.p,{children:"This option requires changing the dependency used to provide the necessary runtime helpers:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.th,{children:[(0,s.jsx)(n.code,{children:"corejs"})," option"]}),(0,s.jsx)(n.th,{children:"Install command"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"npm install --save @babel/runtime"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"2"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"npm install --save @babel/runtime-corejs2"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"3"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"npm install --save @babel/runtime-corejs3"})})]})]})]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"corejs"})," option will be removed in Babel 8. To inject polyfills, you can use ",(0,s.jsx)(n.a,{href:"https://github.com/babel/babel-polyfills/blob/main/packages/babel-plugin-polyfill-corejs3/README.md",children:(0,s.jsx)(n.code,{children:"babel-plugin-polyfill-corejs3"})})," or ",(0,s.jsx)(n.a,{href:"https://github.com/babel/babel-polyfills/blob/main/packages/babel-plugin-polyfill-corejs2/README.md",children:(0,s.jsx)(n.code,{children:"babel-plugin-polyfill-corejs2"})})," directly."]})}),"\n",(0,s.jsx)(n.h3,{id:"helpers",children:(0,s.jsx)(n.code,{children:"helpers"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"boolean"}),", defaults to ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Toggles whether or not inlined Babel helpers (",(0,s.jsx)(n.code,{children:"classCallCheck"}),", ",(0,s.jsx)(n.code,{children:"extends"}),", etc.) are replaced with calls to ",(0,s.jsx)(n.code,{children:"@babel/runtime"})," (or equivalent package)."]}),"\n",(0,s.jsxs)(n.p,{children:["For more information, see ",(0,s.jsx)(n.a,{href:"#helper-aliasing",children:"Helper aliasing"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"helpers"})," option will be removed in Babel 8, as this plugin will only be used to inject helpers (including ",(0,s.jsx)(n.code,{children:"regeneratorRuntime"}),", which will be handled as any other Babel helper)."]})}),"\n",(0,s.jsx)(n.h3,{id:"modulename",children:(0,s.jsx)(n.code,{children:"moduleName"})}),"\n",(0,s.jsxs)(l,{children:[(0,s.jsx)("summary",{children:"History"}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Version"}),(0,s.jsx)(n.th,{children:"Changes"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"v7.24.0"})}),(0,s.jsxs)(n.td,{children:["Added ",(0,s.jsx)(n.code,{children:"moduleName"})," option"]})]})})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"string"}),", defaults to ",(0,s.jsx)(n.code,{children:"@babel/runtime"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["This option controls which package of helpers ",(0,s.jsx)(n.code,{children:"@babel/plugin-transform-runtime"})," will use when injecting imports. It uses the following priority:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"moduleName"})," option, if specified"]}),"\n",(0,s.jsxs)(n.li,{children:["Helpers module suggested by any ",(0,s.jsx)(n.code,{children:"babel-plugin-polyfill-*"})," plugin","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"babel-plugin-polyfill-corejs3"})," suggests ",(0,s.jsx)(n.code,{children:"@babel/runtime-corejs3"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"babel-plugin-polyfill-corejs2"})," suggests ",(0,s.jsx)(n.code,{children:"@babel/runtime-corejs2"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Fallback to ",(0,s.jsx)(n.code,{children:"@babel/runtime"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Note that specifying the ",(0,s.jsx)(n.a,{href:"#corejs",children:(0,s.jsx)(n.code,{children:"corejs"})})," option will internally enable the corresponding ",(0,s.jsx)(n.code,{children:"babel-plugin-polyfill-corejs*"})," plugin, thus it has an effect on the final module name."]}),"\n",(0,s.jsx)(n.h3,{id:"regenerator",children:(0,s.jsx)(n.code,{children:"regenerator"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"boolean"}),", defaults to ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"In older Babel version, this option used to toggles whether or not generator functions were transformed to use a regenerator runtime that does not pollute the global scope."}),"\n",(0,s.jsxs)(n.p,{children:["For more information, see ",(0,s.jsx)(n.a,{href:"#regenerator-aliasing",children:"Regenerator aliasing"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"regenerator"})," option will be removed in Babel 8, as it will not be necessary anymore."]})}),"\n",(0,s.jsx)(n.h3,{id:"useesmodules",children:(0,s.jsx)(n.code,{children:"useESModules"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"boolean"}),", defaults to ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,s.jsxs)(l,{children:[(0,s.jsx)("summary",{children:"History"}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Version"}),(0,s.jsx)(n.th,{children:"Changes"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"v7.13.0"})}),(0,s.jsx)(n.td,{children:"This option has been deprecated"})]})})]})]}),"\n",(0,s.jsxs)(n.p,{children:["When enabled, the transform will use helpers that do not get run through\n",(0,s.jsx)(n.code,{children:"@babel/plugin-transform-modules-commonjs"}),". This allows for smaller builds in module\nsystems like webpack, since it doesn't need to preserve commonjs semantics."]}),"\n",(0,s.jsxs)(n.p,{children:["For example, here is the ",(0,s.jsx)(n.code,{children:"classCallCheck"})," helper with ",(0,s.jsx)(n.code,{children:"useESModules"})," disabled:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'exports.__esModule = true;\n\nexports.default = function(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError("Cannot call a class as a function");\n  }\n};\n'})}),"\n",(0,s.jsx)(n.p,{children:"And, with it enabled:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'export default function(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError("Cannot call a class as a function");\n  }\n}\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"useESModules"})," option has been deprecated and will be removed in Babel 8: starting from version ",(0,s.jsx)(n.code,{children:"7.13.0"}),", ",(0,s.jsx)(n.code,{children:"@babel/runtime"}),"'s ",(0,s.jsx)(n.code,{children:"package.json"})," uses ",(0,s.jsx)(n.code,{children:'"exports"'})," option to automatically choose between CJS and ESM helpers."]})}),"\n",(0,s.jsx)(n.h3,{id:"version",children:(0,s.jsx)(n.code,{children:"version"})}),"\n",(0,s.jsxs)(n.p,{children:["By default transform-runtime assumes that ",(0,s.jsx)(n.code,{children:"@babel/runtime@7.0.0"})," is installed. If you have later versions of\n",(0,s.jsx)(n.code,{children:"@babel/runtime"})," (or their corejs counterparts e.g. ",(0,s.jsx)(n.code,{children:"@babel/runtime-corejs3"}),") installed or listed as a dependency, transform-runtime can use more advanced features."]}),"\n",(0,s.jsxs)(n.p,{children:["For example if you depend on ",(0,s.jsx)(n.code,{children:"@babel/runtime@^7.24.0"})," you can transpile your code with"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title="babel.config.json"',children:'{\n  "plugins": [\n    ["@babel/plugin-transform-runtime", {\n      "version": "^7.24.0"\n    }]\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"which results in a smaller bundle size."}),"\n",(0,s.jsx)(n.h2,{id:"technical-details",children:"Technical details"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"transform-runtime"})," transformer plugin does three things:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Automatically requires ",(0,s.jsx)(n.code,{children:"@babel/runtime/regenerator"})," when you use generators/async functions (toggleable with the ",(0,s.jsx)(n.code,{children:"regenerator"})," option)."]}),"\n",(0,s.jsxs)(n.li,{children:["Can use ",(0,s.jsx)(n.code,{children:"core-js"})," for helpers if necessary instead of assuming it will be polyfilled by the user (toggleable with the ",(0,s.jsx)(n.code,{children:"corejs"})," option)"]}),"\n",(0,s.jsxs)(n.li,{children:["Automatically removes the inline Babel helpers and uses the module ",(0,s.jsx)(n.code,{children:"@babel/runtime/helpers"})," instead (toggleable with the ",(0,s.jsx)(n.code,{children:"helpers"})," option)."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["What does this actually mean though? Basically, you can use built-ins such as ",(0,s.jsx)(n.code,{children:"Promise"}),", ",(0,s.jsx)(n.code,{children:"Set"}),", ",(0,s.jsx)(n.code,{children:"Symbol"}),", etc., as well use all the Babel features that require a polyfill seamlessly, without global pollution, making it extremely suitable for libraries."]}),"\n",(0,s.jsxs)(n.p,{children:["Make sure you include ",(0,s.jsx)(n.code,{children:"@babel/runtime"})," as a dependency."]}),"\n",(0,s.jsx)(n.h3,{id:"regenerator-aliasing",children:"Regenerator aliasing"}),"\n",(0,s.jsx)(n.p,{children:"Whenever you use a generator function or async function:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:"function* foo() {}\n"})}),"\n",(0,s.jsx)(n.p,{children:"the following is generated:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'"use strict";\n\nvar _marked = [foo].map(regeneratorRuntime.mark);\n\nfunction foo() {\n  return regeneratorRuntime.wrap(\n    function foo$(_context) {\n      while (1) {\n        switch ((_context.prev = _context.next)) {\n          case 0:\n          case "end":\n            return _context.stop();\n        }\n      }\n    },\n    _marked[0],\n    this\n  );\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"This isn't ideal since it relies on the regenerator runtime being included, which\npollutes the global scope."}),"\n",(0,s.jsxs)(n.p,{children:["With the ",(0,s.jsx)(n.code,{children:"runtime"})," transformer, however, it is compiled to:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'"use strict";\n\nvar _regenerator = require("@babel/runtime/regenerator");\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar _marked = [foo].map(_regenerator2.default.mark);\n\nfunction foo() {\n  return _regenerator2.default.wrap(\n    function foo$(_context) {\n      while (1) {\n        switch ((_context.prev = _context.next)) {\n          case 0:\n          case "end":\n            return _context.stop();\n        }\n      }\n    },\n    _marked[0],\n    this\n  );\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"This means that you can use the regenerator runtime without polluting your current environment."}),"\n",(0,s.jsxs)(n.h3,{id:"core-js-aliasing",children:[(0,s.jsx)(n.code,{children:"core-js"})," aliasing"]}),"\n",(0,s.jsxs)(n.p,{children:["Sometimes you may want to use new built-ins such as ",(0,s.jsx)(n.code,{children:"Map"}),", ",(0,s.jsx)(n.code,{children:"Set"}),", ",(0,s.jsx)(n.code,{children:"Promise"})," etc. Your only way\nto use these is usually to include a globally polluting polyfill."]}),"\n",(0,s.jsxs)(n.p,{children:["This is with the ",(0,s.jsx)(n.code,{children:"corejs"})," option."]}),"\n",(0,s.jsx)(n.p,{children:"The plugin transforms the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'var sym = Symbol();\n\nvar promise = Promise.resolve();\n\nvar check = arr.includes("yeah!");\n\nconsole.log(arr[Symbol.iterator]());\n'})}),"\n",(0,s.jsx)(n.p,{children:"into the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'import _getIterator from "@babel/runtime-corejs3/core-js/get-iterator";\nimport _includesInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/includes";\nimport _Promise from "@babel/runtime-corejs3/core-js-stable/promise";\nimport _Symbol from "@babel/runtime-corejs3/core-js-stable/symbol";\n\nvar sym = _Symbol();\n\nvar promise = _Promise.resolve();\n\nvar check = _includesInstanceProperty(arr).call(arr, "yeah!");\n\nconsole.log(_getIterator(arr));\n'})}),"\n",(0,s.jsx)(n.p,{children:"This means is that you can seamlessly use these native built-ins and methods\nwithout worrying about where they come from."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"NOTE:"})," Instance methods such as ",(0,s.jsx)(n.code,{children:'"foobar".includes("foo")'})," will only work when using ",(0,s.jsx)(n.code,{children:"corejs: 3"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"helper-aliasing",children:"Helper aliasing"}),"\n",(0,s.jsxs)(n.p,{children:["Usually Babel will place helpers at the top of your file to do common tasks to avoid\nduplicating the code around in the current file. Sometimes these helpers can get a\nlittle bulky and add unnecessary duplication across files. The ",(0,s.jsx)(n.code,{children:"runtime"}),"\ntransformer replaces all the helper calls to a module."]}),"\n",(0,s.jsx)(n.p,{children:"That means that the following code:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:"class Person {}\n"})}),"\n",(0,s.jsx)(n.p,{children:"usually turns into:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'"use strict";\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError("Cannot call a class as a function");\n  }\n}\n\nvar Person = function Person() {\n  _classCallCheck(this, Person);\n};\n'})}),"\n",(0,s.jsxs)(n.p,{children:["the ",(0,s.jsx)(n.code,{children:"runtime"})," transformer however turns this into:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'"use strict";\n\nvar _classCallCheck2 = require("@babel/runtime/helpers/classCallCheck");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar Person = function Person() {\n  (0, _classCallCheck3.default)(this, Person);\n};\n'})}),"\n",(0,s.jsx)(n.h2,{id:"removed-options",children:"Removed options"}),"\n",(0,s.jsx)(n.p,{children:"The following options were removed in Babel 7.0.0:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"useBuiltIns"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"polyfill"})}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},38049:function(e,n,l){l.d(n,{Z:()=>t});var r=l("24246");l("27378");var s=l("90496");let i="tabItem_wHwb";function t(e){let{children:n,hidden:l,className:t}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)(i,t),hidden:l,children:n})}},95181:function(e,n,l){l.d(n,{Z:()=>y});var r=l("24246"),s=l("27378"),i=l("90496"),t=l("85403"),o=l("3620"),a=l("77090"),c=l("76180"),d=l("23418"),h=l("19073");function u(e){return s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||s.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:n,tabValues:l}=e;return l.some(e=>e.value===n)}var j=l("3344");let m="tabList_J5MA",x="tabItem_l0OV";function b(e){let{className:n,block:l,selectedValue:s,selectValue:o,tabValues:a}=e,c=[],{blockElementScrollPositionUntilNextRender:d}=(0,t.o5)(),h=e=>{let n=e.currentTarget,l=a[c.indexOf(n)].value;l!==s&&(d(n),o(l))},u=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{let l=c.indexOf(e.currentTarget)+1;n=c[l]??c[0];break}case"ArrowLeft":{let l=c.indexOf(e.currentTarget)-1;n=c[l]??c[c.length-1]}}n?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":l},n),children:a.map(e=>{let{value:n,label:l,attributes:t}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>c.push(e),onKeyDown:u,onClick:h,...t,className:(0,i.Z)("tabs__item",x,t?.className,{"tabs__item--active":s===n}),children:l??n},n)})})}function f(e){let{lazy:n,children:l,selectedValue:t}=e,o=(Array.isArray(l)?l:[l]).filter(Boolean);if(n){let e=o.find(e=>e.props.value===t);return e?(0,s.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:o.map((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t}))})}function g(e){let n=function(e){let{defaultValue:n,queryString:l=!1,groupId:r}=e,i=function(e){let{values:n,children:l}=e;return(0,s.useMemo)(()=>{let e=n??u(l).map(e=>{let{props:{value:n,label:l,attributes:r,default:s}}=e;return{value:n,label:l,attributes:r,default:s}});return!function(e){let n=(0,d.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,l])}(e),[t,j]=(0,s.useState)(()=>(function(e){let{defaultValue:n,tabValues:l}=e;if(0===l.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:l}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${l.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let r=l.find(e=>e.default)??l[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:n,tabValues:i})),[m,x]=function(e){let{queryString:n=!1,groupId:l}=e,r=(0,o.k6)(),i=function(e){let{queryString:n=!1,groupId:l}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!l)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:n,groupId:l}),t=(0,c._X)(i);return[t,(0,s.useCallback)(e=>{if(!i)return;let n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})},[i,r])]}({queryString:l,groupId:r}),[b,f]=function(e){var n;let{groupId:l}=e;let r=(n=l)?`docusaurus.tab.${n}`:null,[i,t]=(0,h.Nk)(r);return[i,(0,s.useCallback)(e=>{if(!!r)t.set(e)},[r,t])]}({groupId:r}),g=(()=>{let e=m??b;return p({value:e,tabValues:i})?e:null})();return(0,a.Z)(()=>{g&&j(g)},[g]),{selectedValue:t,selectValue:(0,s.useCallback)(e=>{if(!p({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);j(e),x(e),f(e)},[x,f,i]),tabValues:i}}(e);return(0,r.jsxs)("div",{className:(0,i.Z)("tabs-container",m),children:[(0,r.jsx)(b,{...n,...e}),(0,r.jsx)(f,{...n,...e})]})}function y(e){let n=(0,j.Z)();return(0,r.jsx)(g,{...e,children:u(e.children)},String(n))}},80980:function(e,n,l){l.d(n,{Z:function(){return o},a:function(){return t}});var r=l(27378);let s={},i=r.createContext(s);function t(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);