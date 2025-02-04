"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["5992"],{47575:function(e,n,o){o.r(n),o.d(n,{metadata:()=>r,contentTitle:()=>d,default:()=>p,assets:()=>c,toc:()=>u,frontMatter:()=>a});var r=JSON.parse('{"id":"babel-plugin-transform-modules-commonjs","title":"@babel/plugin-transform-modules-commonjs","description":"History","source":"@site/../docs/plugin-transform-modules-commonjs.md","sourceDirName":".","slug":"/babel-plugin-transform-modules-commonjs","permalink":"/babel-website/docs/babel-plugin-transform-modules-commonjs","draft":false,"unlisted":false,"editUrl":"https://github.com/babel/website/edit/main/docs/../docs/plugin-transform-modules-commonjs.md","tags":[],"version":"current","frontMatter":{"id":"babel-plugin-transform-modules-commonjs","title":"@babel/plugin-transform-modules-commonjs","sidebar_label":"Common JS"},"sidebar":"plugins","previous":{"title":"AMD","permalink":"/babel-website/docs/babel-plugin-transform-modules-amd"},"next":{"title":"SystemJS","permalink":"/babel-website/docs/babel-plugin-transform-modules-systemjs"}}'),t=o("24246"),i=o("80980"),s=o("95181"),l=o("38049");let a={id:"babel-plugin-transform-modules-commonjs",title:"@babel/plugin-transform-modules-commonjs",sidebar_label:"Common JS"},d=void 0,c={},u=[{value:"Example",id:"example",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"With a configuration file (Recommended)",id:"with-a-configuration-file-recommended",level:3},{value:"Via CLI",id:"via-cli",level:3},{value:"Via Node API",id:"via-node-api",level:3},{value:"Options",id:"options",level:2},{value:"<code>importInterop</code>",id:"importinterop",level:3},{value:"<code>&quot;babel&quot;</code>",id:"babel",level:4},{value:"<code>&quot;node&quot;</code>",id:"node",level:4},{value:"<code>&quot;none&quot;</code>",id:"none",level:4},{value:"<code>loose</code>",id:"loose",level:3},{value:"<code>strict</code>",id:"strict",level:3},{value:"<code>lazy</code>",id:"lazy",level:3},{value:"<code>noInterop</code>",id:"nointerop",level:3},{value:"Relevant <code>assumptions</code>",id:"relevant-assumptions",level:2}];function h(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{Details:o}=n;return!o&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o,{children:[(0,t.jsx)("summary",{children:"History"}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Version"}),(0,t.jsx)(n.th,{children:"Changes"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"v7.14.0"})}),(0,t.jsxs)(n.td,{children:["Implemented the ",(0,t.jsx)(n.code,{children:"importInterop"})," option"]})]})})]})]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["This plugin is included in ",(0,t.jsx)(n.code,{children:"@babel/preset-env"})," under the ",(0,t.jsx)(n.code,{children:"modules"})," option"]})}),"\n",(0,t.jsxs)(n.p,{children:["This plugin transforms ECMAScript modules to ",(0,t.jsx)(n.a,{href:"http://wiki.commonjs.org/wiki/Modules/1.1",children:"CommonJS"}),". Note that only the ",(0,t.jsx)(n.em,{children:"syntax"})," of import/export statements (",(0,t.jsx)(n.code,{children:'import "./mod.js"'}),") and import expressions (",(0,t.jsx)(n.code,{children:"import('./mod.js')"}),") is transformed, as Babel is unaware of different resolution algorithms between implementations of ECMAScript modules and CommonJS."]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"In"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:"export default 42;\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Out"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'Object.defineProperty(exports, "__esModule", {\n  value: true,\n});\n\nexports.default = 42;\n'})}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(s.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(l.Z,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"npm install --save-dev @babel/plugin-transform-modules-commonjs\n"})})}),(0,t.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"yarn add --dev @babel/plugin-transform-modules-commonjs\n"})})}),(0,t.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"pnpm add --save-dev @babel/plugin-transform-modules-commonjs\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.h3,{id:"with-a-configuration-file-recommended",children:"With a configuration file (Recommended)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'// without options\n{\n  "plugins": ["@babel/plugin-transform-modules-commonjs"]\n}\n\n// with options\n{\n  "plugins": [\n    ["@babel/plugin-transform-modules-commonjs", {\n      "allowTopLevelThis": true\n    }]\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"via-cli",children:"Via CLI"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"babel --plugins @babel/plugin-transform-modules-commonjs script.js\n"})}),"\n",(0,t.jsx)(n.h3,{id:"via-node-api",children:"Via Node API"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'require("@babel/core").transformSync("code", {\n  plugins: ["@babel/plugin-transform-modules-commonjs"],\n});\n'})}),"\n",(0,t.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,t.jsx)(n.h3,{id:"importinterop",children:(0,t.jsx)(n.code,{children:"importInterop"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:'"babel" | "node" | "none"'}),", or ",(0,t.jsx)(n.code,{children:'(specifier: string, requestingFilename: string | undefined) => "babel" | "node" | "none"'}),". Defaults to ",(0,t.jsx)(n.code,{children:'"babel"'}),"."]}),"\n",(0,t.jsx)(n.p,{children:"CommonJS modules and ECMAScript modules are not fully compatible. However, compilers, bundlers and JavaScript\nruntimes developed different strategies to make them work together as well as possible."}),"\n",(0,t.jsxs)(n.p,{children:["This option specify which interop strategy Babel should use. When it's a function, Babel calls it passing the import specifier and the importer path. For example, when compiling a ",(0,t.jsx)(n.code,{children:"/full/path/to/foo.js"})," file containing ",(0,t.jsx)(n.code,{children:"import { a } from 'b'"}),", Babel will call it with parameters ",(0,t.jsx)(n.code,{children:"('b', '/full/path/to/foo.js')"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"babel",children:(0,t.jsx)(n.code,{children:'"babel"'})}),"\n",(0,t.jsxs)(n.p,{children:["When using exports with babel a non-enumerable ",(0,t.jsx)(n.code,{children:"__esModule"})," property is exported. This property is then used to determine if the import ",(0,t.jsx)(n.em,{children:"is"})," the default export or if it ",(0,t.jsx)(n.em,{children:"contains"})," the default export."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'import foo from "foo";\nimport { bar } from "bar";\nfoo;\nbar;\n\n// Is compiled to ...\n\n"use strict";\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar _foo = _interopRequireDefault(require("foo"));\nvar _bar = require("bar");\n\n_foo.default;\n_bar.bar;\n'})}),"\n",(0,t.jsx)(n.p,{children:"When this import interop is used, if both the imported and the importer module are compiled with Babel they behave as if none of them was compiled."}),"\n",(0,t.jsx)(n.p,{children:"This is the default behavior."}),"\n",(0,t.jsx)(n.h4,{id:"node",children:(0,t.jsx)(n.code,{children:'"node"'})}),"\n",(0,t.jsxs)(n.p,{children:["When importing CommonJS files (either directly written in CommonJS, or generated with a compiler) Node.js always binds the ",(0,t.jsx)(n.code,{children:"default"})," export to the value of ",(0,t.jsx)(n.code,{children:"module.exports"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'import foo from "foo";\nimport { bar } from "bar";\nfoo;\nbar;\n\n// Is compiled to ...\n\n"use strict";\n\nvar _foo = require("foo");\nvar _bar = require("bar");\n\n_foo;\n_bar.bar;\n'})}),"\n",(0,t.jsxs)(n.p,{children:["This is not exactly the same as what Node.js does since Babel allows accessing any property of ",(0,t.jsx)(n.code,{children:"module.exports"})," as a named export, while Node.js only allows importing ",(0,t.jsx)(n.em,{children:"statically analyzable"})," properties of ",(0,t.jsx)(n.code,{children:"module.exports"}),". However, any import working in Node.js will also work when compiled with Babel using ",(0,t.jsx)(n.code,{children:'importInterop: "node"'}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"none",children:(0,t.jsx)(n.code,{children:'"none"'})}),"\n",(0,t.jsxs)(n.p,{children:["If you know that the imported file has been transformed with a compiler that stores the ",(0,t.jsx)(n.code,{children:"default"})," export on ",(0,t.jsx)(n.code,{children:"exports.default"})," (such as Babel), you can safely omit the ",(0,t.jsx)(n.code,{children:"_interopRequireDefault"})," helper."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'import foo from "foo";\nimport { bar } from "bar";\nfoo;\nbar;\n\n// Is compiled to ...\n\n"use strict";\n\nvar _foo = require("foo");\nvar _bar = require("bar");\n\n_foo.default;\n_bar.bar;\n'})}),"\n",(0,t.jsx)(n.h3,{id:"loose",children:(0,t.jsx)(n.code,{children:"loose"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"boolean"}),", defaults to ",(0,t.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["By default, when using exports with babel a non-enumerable ",(0,t.jsx)(n.code,{children:"__esModule"})," property\nis exported."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'var foo = (exports.foo = 5);\n\nObject.defineProperty(exports, "__esModule", {\n  value: true,\n});\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["Consider migrating to the top level ",(0,t.jsx)(n.a,{href:"/babel-website/docs/assumptions#enumerablemodulemeta",children:(0,t.jsx)(n.code,{children:"enumerableModuleMeta"})})," assumption."]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="babel.config.json"',children:'{\n  "assumptions": {\n    "enumerableModuleMeta": true\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In environments that don't support this you can enable the ",(0,t.jsx)(n.code,{children:"enumerableModuleMeta"})," assumption, instead of using ",(0,t.jsx)(n.code,{children:"Object.defineProperty"})," an assignment will be used instead."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:"var foo = (exports.foo = 5);\nexports.__esModule = true;\n"})}),"\n",(0,t.jsx)(n.h3,{id:"strict",children:(0,t.jsx)(n.code,{children:"strict"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"boolean"}),", defaults to ",(0,t.jsx)(n.code,{children:"false"})]}),"\n",(0,t.jsxs)(n.p,{children:["By default, when using exports with babel a non-enumerable ",(0,t.jsx)(n.code,{children:"__esModule"})," property\nis exported. In some cases this property is used to determine if the import ",(0,t.jsx)(n.em,{children:"is"})," the\ndefault export or if it ",(0,t.jsx)(n.em,{children:"contains"})," the default export."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'var foo = (exports.foo = 5);\n\nObject.defineProperty(exports, "__esModule", {\n  value: true,\n});\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In order to prevent the ",(0,t.jsx)(n.code,{children:"__esModule"})," property from being exported, you can set\nthe ",(0,t.jsx)(n.code,{children:"strict"})," option to ",(0,t.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"lazy",children:(0,t.jsx)(n.code,{children:"lazy"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"boolean"}),", ",(0,t.jsx)(n.code,{children:"Array<string>"}),", or ",(0,t.jsx)(n.code,{children:"(string) => boolean"}),", defaults to ",(0,t.jsx)(n.code,{children:"false"})]}),"\n",(0,t.jsxs)(n.p,{children:["Changes Babel's compiled ",(0,t.jsx)(n.code,{children:"import"})," statements to be lazily evaluated when their\nimported bindings are used for the first time."]}),"\n",(0,t.jsx)(n.p,{children:"This can improve initial load time of your module because evaluating\ndependencies up front is sometimes entirely un-necessary. This is especially\nthe case when implementing a library module."}),"\n",(0,t.jsxs)(n.p,{children:["The value of ",(0,t.jsx)(n.code,{children:"lazy"})," has a few possible effects:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"false"})," - No lazy initialization of any imported module."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"true"})," - Do not lazy-initialize local ",(0,t.jsx)(n.code,{children:"./foo"})," imports, but lazy-init ",(0,t.jsx)(n.code,{children:"foo"})," dependencies."]}),"\n",(0,t.jsx)(n.p,{children:"Local paths are much more likely to have circular dependencies, which may break if loaded lazily,\nso they are not lazy by default, whereas dependencies between independent modules are rarely cyclical."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Array<string>"})," - Lazy-initialize all imports with source matching one of the given strings."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"(string) => boolean"})," - Pass a callback that will be called to decide if a given source string should be lazy-loaded."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The two cases where imports can never be lazy are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:'import "foo";'})}),"\n",(0,t.jsx)(n.p,{children:"Side-effect imports are automatically non-lazy since their very existence means\nthat there is no binding to later kick off initialization."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:'export * from "foo"'})}),"\n",(0,t.jsx)(n.p,{children:"Re-exporting all names requires up-front execution because otherwise there is no\nway to know what names need to be exported."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["You can read more about configuring plugin options ",(0,t.jsx)(n.a,{href:"https://babeljs.io/docs/en/plugins#plugin-options",children:"here"})]})}),"\n",(0,t.jsx)(n.h3,{id:"nointerop",children:(0,t.jsx)(n.code,{children:"noInterop"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"boolean"}),", defaults to ",(0,t.jsx)(n.code,{children:"false"})]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Deprecated"}),": Use the ",(0,t.jsx)(n.code,{children:"importInterop"})," option instead."]})}),"\n",(0,t.jsxs)(n.p,{children:["When set to ",(0,t.jsx)(n.code,{children:"true"}),", this option has the same behavior as setting ",(0,t.jsx)(n.code,{children:'importInterop: "none"'}),"."]}),"\n",(0,t.jsxs)(n.h2,{id:"relevant-assumptions",children:["Relevant ",(0,t.jsx)(n.a,{href:"https://babeljs.io/docs/en/assumptions",children:(0,t.jsx)(n.code,{children:"assumptions"})})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://babeljs.io/docs/en/assumptions#enumerablemodulemeta",children:(0,t.jsx)(n.code,{children:"enumerableModuleMeta"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://babeljs.io/docs/en/assumptions#noincompletensimportdetection",children:(0,t.jsx)(n.code,{children:"noIncompleteNsImportDetection"})})}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},38049:function(e,n,o){o.d(n,{Z:()=>s});var r=o("24246");o("27378");var t=o("90496");let i="tabItem_wHwb";function s(e){let{children:n,hidden:o,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.Z)(i,s),hidden:o,children:n})}},95181:function(e,n,o){o.d(n,{Z:()=>v});var r=o("24246"),t=o("27378"),i=o("90496"),s=o("85403"),l=o("3620"),a=o("77090"),d=o("76180"),c=o("23418"),u=o("19073");function h(e){return t.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||t.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:n,tabValues:o}=e;return o.some(e=>e.value===n)}var m=o("3344");let j="tabList_J5MA",x="tabItem_l0OV";function f(e){let{className:n,block:o,selectedValue:t,selectValue:l,tabValues:a}=e,d=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),u=e=>{let n=e.currentTarget,o=a[d.indexOf(n)].value;o!==t&&(c(n),l(o))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let o=d.indexOf(e.currentTarget)+1;n=d[o]??d[0];break}case"ArrowLeft":{let o=d.indexOf(e.currentTarget)-1;n=d[o]??d[d.length-1]}}n?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},n),children:a.map(e=>{let{value:n,label:o,attributes:s}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>d.push(e),onKeyDown:h,onClick:u,...s,className:(0,i.Z)("tabs__item",x,s?.className,{"tabs__item--active":t===n}),children:o??n},n)})})}function b(e){let{lazy:n,children:o,selectedValue:s}=e,l=(Array.isArray(o)?o:[o]).filter(Boolean);if(n){let e=l.find(e=>e.props.value===s);return e?(0,t.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:l.map((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s}))})}function g(e){let n=function(e){let{defaultValue:n,queryString:o=!1,groupId:r}=e,i=function(e){let{values:n,children:o}=e;return(0,t.useMemo)(()=>{let e=n??h(o).map(e=>{let{props:{value:n,label:o,attributes:r,default:t}}=e;return{value:n,label:o,attributes:r,default:t}});return!function(e){let n=(0,c.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,o])}(e),[s,m]=(0,t.useState)(()=>(function(e){let{defaultValue:n,tabValues:o}=e;if(0===o.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:o}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${o.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let r=o.find(e=>e.default)??o[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:n,tabValues:i})),[j,x]=function(e){let{queryString:n=!1,groupId:o}=e,r=(0,l.k6)(),i=function(e){let{queryString:n=!1,groupId:o}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!o)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:n,groupId:o}),s=(0,d._X)(i);return[s,(0,t.useCallback)(e=>{if(!i)return;let n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})},[i,r])]}({queryString:o,groupId:r}),[f,b]=function(e){var n;let{groupId:o}=e;let r=(n=o)?`docusaurus.tab.${n}`:null,[i,s]=(0,u.Nk)(r);return[i,(0,t.useCallback)(e=>{if(!!r)s.set(e)},[r,s])]}({groupId:r}),g=(()=>{let e=j??f;return p({value:e,tabValues:i})?e:null})();return(0,a.Z)(()=>{g&&m(g)},[g]),{selectedValue:s,selectValue:(0,t.useCallback)(e=>{if(!p({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);m(e),x(e),b(e)},[x,b,i]),tabValues:i}}(e);return(0,r.jsxs)("div",{className:(0,i.Z)("tabs-container",j),children:[(0,r.jsx)(f,{...n,...e}),(0,r.jsx)(b,{...n,...e})]})}function v(e){let n=(0,m.Z)();return(0,r.jsx)(g,{...e,children:h(e.children)},String(n))}},80980:function(e,n,o){o.d(n,{Z:function(){return l},a:function(){return s}});var r=o(27378);let t={},i=r.createContext(t);function s(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);