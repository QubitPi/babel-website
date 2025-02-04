"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["5174"],{8303:function(e,n,l){l.r(n),l.d(n,{metadata:()=>t,contentTitle:()=>d,default:()=>h,assets:()=>c,toc:()=>u,frontMatter:()=>a});var t=JSON.parse('{"id":"babel-plugin-transform-modules-umd","title":"@babel/plugin-transform-modules-umd","description":"History","source":"@site/../docs/plugin-transform-modules-umd.md","sourceDirName":".","slug":"/babel-plugin-transform-modules-umd","permalink":"/docs/babel-plugin-transform-modules-umd","draft":false,"unlisted":false,"editUrl":"https://github.com/babel/website/edit/main/docs/../docs/plugin-transform-modules-umd.md","tags":[],"version":"current","frontMatter":{"id":"babel-plugin-transform-modules-umd","title":"@babel/plugin-transform-modules-umd","sidebar_label":"UMD"},"sidebar":"plugins","previous":{"title":"SystemJS","permalink":"/docs/babel-plugin-transform-modules-systemjs"},"next":{"title":"decorators","permalink":"/docs/babel-plugin-proposal-decorators"}}'),r=l("24246"),s=l("80980"),o=l("95181"),i=l("38049");let a={id:"babel-plugin-transform-modules-umd",title:"@babel/plugin-transform-modules-umd",sidebar_label:"UMD"},d=void 0,c={},u=[{value:"Example",id:"example",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"With a configuration file (Recommended)",id:"with-a-configuration-file-recommended",level:3},{value:"Default semantics",id:"default-semantics",level:4},{value:"More flexible semantics with <code>exactGlobals: true</code>",id:"more-flexible-semantics-with-exactglobals-true",level:4},{value:"Via CLI",id:"via-cli",level:3},{value:"Via Node API",id:"via-node-api",level:3},{value:"Options",id:"options",level:2},{value:"<code>moduleIds</code>",id:"moduleids",level:3},{value:"<code>moduleId</code>",id:"moduleid",level:3},{value:"<code>getModuleId</code>",id:"getmoduleid",level:3},{value:"<code>moduleRoot</code>",id:"moduleroot",level:3}];function m(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components},{Details:l}=n;return!l&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l,{children:[(0,r.jsx)("summary",{children:"History"}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Version"}),(0,r.jsx)(n.th,{children:"Changes"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"v7.14.0"})}),(0,r.jsxs)(n.td,{children:["Implemented the ",(0,r.jsx)(n.code,{children:"importInterop"})," option"]})]})})]})]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["This plugin is included in ",(0,r.jsx)(n.code,{children:"@babel/preset-env"})," under the ",(0,r.jsx)(n.code,{children:"modules"})," option"]})}),"\n",(0,r.jsxs)(n.p,{children:["This plugin transforms ES2015 modules to ",(0,r.jsx)(n.a,{href:"https://github.com/umdjs/umd",children:"UMD"}),". Note that only the ",(0,r.jsx)(n.em,{children:"syntax"})," of import/export statements (",(0,r.jsx)(n.code,{children:'import "./mod.js"'}),") is transformed, as Babel is unaware of different resolution algorithms between implementations of ES2015 modules and UMD."]}),"\n",(0,r.jsxs)(n.p,{children:["\u26A0\uFE0F This plugin does not support dynamic import (",(0,r.jsx)(n.code,{children:"import('./lazy.js')"}),")."]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"In"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:"export default 42;\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Out"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'(function(global, factory) {\n  if (typeof define === "function" && define.amd) {\n    define(["exports"], factory);\n  } else if (typeof exports !== "undefined") {\n    factory(exports);\n  } else {\n    var mod = {\n      exports: {},\n    };\n    factory(mod.exports);\n    global.actual = mod.exports;\n  }\n})(this, function(exports) {\n  "use strict";\n\n  Object.defineProperty(exports, "__esModule", {\n    value: true,\n  });\n\n  exports.default = 42;\n});\n'})}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(o.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(i.Z,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"npm install --save-dev @babel/plugin-transform-modules-umd\n"})})}),(0,r.jsx)(i.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"yarn add --dev @babel/plugin-transform-modules-umd\n"})})}),(0,r.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"pnpm add --save-dev @babel/plugin-transform-modules-umd\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.h3,{id:"with-a-configuration-file-recommended",children:"With a configuration file (Recommended)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="babel.config.json"',children:'{\n  "plugins": ["@babel/plugin-transform-modules-umd"]\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["You can also override the names of particular libraries when this module is\nrunning in the browser. For example the ",(0,r.jsx)(n.code,{children:"es6-promise"})," library exposes itself\nas ",(0,r.jsx)(n.code,{children:"global.Promise"})," rather than ",(0,r.jsx)(n.code,{children:"global.es6Promise"}),". This can be accommodated by:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="babel.config.json"',children:'{\n  "plugins": [\n    [\n      "@babel/plugin-transform-modules-umd",\n      {\n        "globals": {\n          "es6-promise": "Promise"\n        }\n      }\n    ]\n  ]\n}\n'})}),"\n",(0,r.jsx)(n.h4,{id:"default-semantics",children:"Default semantics"}),"\n",(0,r.jsx)(n.p,{children:"There are a few things to note about the default semantics."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"First"}),", this transform uses the\n",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Basename",children:"basename"})," of each import to generate\nthe global names in the UMD output. This means that if you're importing\nmultiple modules with the same basename, like:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'import fooBar1 from "foo-bar";\nimport fooBar2 from "./mylib/foo-bar";\n'})}),"\n",(0,r.jsx)(n.p,{children:"it will transpile into two references to the same browser global:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:"factory(global.fooBar, global.fooBar);\n"})}),"\n",(0,r.jsx)(n.p,{children:"If you set the plugin options to:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="JSON"',children:'{\n  "globals": {\n    "foo-bar": "fooBAR",\n    "./mylib/foo-bar": "mylib.fooBar"\n  }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"it will still transpile both to one browser global:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:"factory(global.fooBAR, global.fooBAR);\n"})}),"\n",(0,r.jsx)(n.p,{children:"because again the transform is only using the basename of the import."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"Second"}),", the specified override will still be passed to the ",(0,r.jsx)(n.code,{children:"toIdentifier"}),"\nfunction in ",(0,r.jsx)(n.a,{href:"https://github.com/babel/babel/blob/main/packages/babel-types/src/converters",children:"babel-types/src/converters"}),".\nThis means that if you specify an override as a member expression like:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="JSON"',children:'{\n  "globals": {\n    "fizzbuzz": "fizz.buzz"\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["this will ",(0,r.jsx)(n.em,{children:"not"})," transpile to ",(0,r.jsx)(n.code,{children:"factory(global.fizz.buzz)"}),". Instead, it will\ntranspile to ",(0,r.jsx)(n.code,{children:"factory(global.fizzBuzz)"})," based on the logic in ",(0,r.jsx)(n.code,{children:"toIdentifier"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"Third"}),", you cannot override the exported global name."]}),"\n",(0,r.jsxs)(n.h4,{id:"more-flexible-semantics-with-exactglobals-true",children:["More flexible semantics with ",(0,r.jsx)(n.code,{children:"exactGlobals: true"})]}),"\n",(0,r.jsxs)(n.p,{children:["All of these behaviors can limit the flexibility of the ",(0,r.jsx)(n.code,{children:"globals"})," map. To\nremove these limitations, you can set the ",(0,r.jsx)(n.code,{children:"exactGlobals"})," option to ",(0,r.jsx)(n.code,{children:"true"}),".\nDoing this instructs the plugin to:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"always use the full import string instead of the basename when generating\nthe global names"}),"\n",(0,r.jsxs)(n.li,{children:["skip passing ",(0,r.jsx)(n.code,{children:"globals"})," overrides to the ",(0,r.jsx)(n.code,{children:"toIdentifier"})," function. Instead,\nthey are used exactly as written, so you will get errors if you do not use\nvalid identifiers or valid uncomputed (dot) member expressions."]}),"\n",(0,r.jsxs)(n.li,{children:["allow the exported global name to be overridden via the ",(0,r.jsx)(n.code,{children:"globals"})," map. Any\noverride must again be a valid identifier or valid member expression."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Thus, if you set ",(0,r.jsx)(n.code,{children:"exactGlobals"})," to ",(0,r.jsx)(n.code,{children:"true"})," and do not pass any overrides, the\nfirst example of:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'import fooBar1 from "foo-bar";\nimport fooBar2 from "./mylib/foo-bar";\n'})}),"\n",(0,r.jsx)(n.p,{children:"will transpile to:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:"factory(global.fooBar, global.mylibFooBar);\n"})}),"\n",(0,r.jsx)(n.p,{children:"And if you set the plugin options to:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="JSON"',children:'{\n  "globals": {\n    "foo-bar": "fooBAR",\n    "./mylib/foo-bar": "mylib.fooBar"\n  },\n  "exactGlobals": true\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"then it'll transpile to:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:"factory(global.fooBAR, global.mylib.fooBar);\n"})}),"\n",(0,r.jsx)(n.p,{children:"Finally, with the plugin options set to:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="babel.config.json"',children:'{\n  "plugins": [\n    "@babel/plugin-external-helpers",\n    [\n      "@babel/plugin-transform-modules-umd",\n      {\n        "globals": {\n          "my/custom/module/name": "My.Custom.Module.Name"\n        },\n        "exactGlobals": true\n      }\n    ]\n  ],\n  "moduleId": "my/custom/module/name"\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"it will transpile to:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:"factory(mod.exports);\nglobal.My = global.My || {};\nglobal.My.Custom = global.My.Custom || {};\nglobal.My.Custom.Module = global.My.Custom.Module || {};\nglobal.My.Custom.Module.Name = mod.exports;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"via-cli",children:"Via CLI"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"babel --plugins @babel/plugin-transform-modules-umd script.js\n"})}),"\n",(0,r.jsx)(n.h3,{id:"via-node-api",children:"Via Node API"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'require("@babel/core").transformSync("code", {\n  plugins: ["@babel/plugin-transform-modules-umd"],\n});\n'})}),"\n",(0,r.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,r.jsx)(n.h3,{id:"moduleids",children:(0,r.jsx)(n.code,{children:"moduleIds"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"boolean"})," defaults to ",(0,r.jsx)(n.code,{children:"!!moduleId"})]}),"\n",(0,r.jsxs)(n.p,{children:["Added in: ",(0,r.jsx)(n.code,{children:"v7.9.0"})]}),"\n",(0,r.jsx)(n.p,{children:"Enables module ID generation."}),"\n",(0,r.jsx)(n.h3,{id:"moduleid",children:(0,r.jsx)(n.code,{children:"moduleId"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"string"})}),"\n",(0,r.jsxs)(n.p,{children:["Added in: ",(0,r.jsx)(n.code,{children:"v7.9.0"})]}),"\n",(0,r.jsxs)(n.p,{children:["A hard-coded ID to use for the module. Cannot be used alongside ",(0,r.jsx)(n.code,{children:"getModuleId"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"getmoduleid",children:(0,r.jsx)(n.code,{children:"getModuleId"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"(name: string) => string"})}),"\n",(0,r.jsxs)(n.p,{children:["Added in: ",(0,r.jsx)(n.code,{children:"v7.9.0"})]}),"\n",(0,r.jsxs)(n.p,{children:["Given the babel-generated module name, return the name to use. Returning\na falsy value will use the original ",(0,r.jsx)(n.code,{children:"name"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"moduleroot",children:(0,r.jsx)(n.code,{children:"moduleRoot"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"string"})}),"\n",(0,r.jsxs)(n.p,{children:["Added in: ",(0,r.jsx)(n.code,{children:"v7.9.0"})]}),"\n",(0,r.jsx)(n.p,{children:"A root path to include on generated module names."}),"\n",(0,r.jsxs)(n.p,{children:["For options not listed here, see options for ",(0,r.jsx)(n.a,{href:"/docs/babel-plugin-transform-modules-commonjs#options",children:(0,r.jsx)(n.code,{children:"@babel/plugin-transform-modules-commonjs"})}),"."]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},38049:function(e,n,l){l.d(n,{Z:()=>o});var t=l("24246");l("27378");var r=l("90496");let s="tabItem_wHwb";function o(e){let{children:n,hidden:l,className:o}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s,o),hidden:l,children:n})}},95181:function(e,n,l){l.d(n,{Z:()=>v});var t=l("24246"),r=l("27378"),s=l("90496"),o=l("85403"),i=l("3620"),a=l("77090"),d=l("76180"),c=l("23418"),u=l("19073");function m(e){return r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||r.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:n,tabValues:l}=e;return l.some(e=>e.value===n)}var p=l("3344");let b="tabList_J5MA",f="tabItem_l0OV";function x(e){let{className:n,block:l,selectedValue:r,selectValue:i,tabValues:a}=e,d=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),u=e=>{let n=e.currentTarget,l=a[d.indexOf(n)].value;l!==r&&(c(n),i(l))},m=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let l=d.indexOf(e.currentTarget)+1;n=d[l]??d[0];break}case"ArrowLeft":{let l=d.indexOf(e.currentTarget)-1;n=d[l]??d[d.length-1]}}n?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":l},n),children:a.map(e=>{let{value:n,label:l,attributes:o}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>d.push(e),onKeyDown:m,onClick:u,...o,className:(0,s.Z)("tabs__item",f,o?.className,{"tabs__item--active":r===n}),children:l??n},n)})})}function g(e){let{lazy:n,children:l,selectedValue:o}=e,i=(Array.isArray(l)?l:[l]).filter(Boolean);if(n){let e=i.find(e=>e.props.value===o);return e?(0,r.cloneElement)(e,{className:(0,s.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:i.map((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o}))})}function j(e){let n=function(e){let{defaultValue:n,queryString:l=!1,groupId:t}=e,s=function(e){let{values:n,children:l}=e;return(0,r.useMemo)(()=>{let e=n??m(l).map(e=>{let{props:{value:n,label:l,attributes:t,default:r}}=e;return{value:n,label:l,attributes:t,default:r}});return!function(e){let n=(0,c.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,l])}(e),[o,p]=(0,r.useState)(()=>(function(e){let{defaultValue:n,tabValues:l}=e;if(0===l.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:l}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${l.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let t=l.find(e=>e.default)??l[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:n,tabValues:s})),[b,f]=function(e){let{queryString:n=!1,groupId:l}=e,t=(0,i.k6)(),s=function(e){let{queryString:n=!1,groupId:l}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!l)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:n,groupId:l}),o=(0,d._X)(s);return[o,(0,r.useCallback)(e=>{if(!s)return;let n=new URLSearchParams(t.location.search);n.set(s,e),t.replace({...t.location,search:n.toString()})},[s,t])]}({queryString:l,groupId:t}),[x,g]=function(e){var n;let{groupId:l}=e;let t=(n=l)?`docusaurus.tab.${n}`:null,[s,o]=(0,u.Nk)(t);return[s,(0,r.useCallback)(e=>{if(!!t)o.set(e)},[t,o])]}({groupId:t}),j=(()=>{let e=b??x;return h({value:e,tabValues:s})?e:null})();return(0,a.Z)(()=>{j&&p(j)},[j]),{selectedValue:o,selectValue:(0,r.useCallback)(e=>{if(!h({value:e,tabValues:s}))throw Error(`Can't select invalid tab value=${e}`);p(e),f(e),g(e)},[f,g,s]),tabValues:s}}(e);return(0,t.jsxs)("div",{className:(0,s.Z)("tabs-container",b),children:[(0,t.jsx)(x,{...n,...e}),(0,t.jsx)(g,{...n,...e})]})}function v(e){let n=(0,p.Z)();return(0,t.jsx)(j,{...e,children:m(e.children)},String(n))}},80980:function(e,n,l){l.d(n,{Z:function(){return i},a:function(){return o}});var t=l(27378);let r={},s=t.createContext(r);function o(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);