"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["2729"],{5230:function(e,r,n){n.r(r),n.d(r,{metadata:()=>s,contentTitle:()=>c,default:()=>u,assets:()=>d,toc:()=>h,frontMatter:()=>i});var s=JSON.parse('{"id":"babel-plugin-proposal-decorators","title":"@babel/plugin-proposal-decorators","description":"Example","source":"@site/../docs/plugin-proposal-decorators.md","sourceDirName":".","slug":"/babel-plugin-proposal-decorators","permalink":"/babel-website/docs/babel-plugin-proposal-decorators","draft":false,"unlisted":false,"editUrl":"https://github.com/babel/website/edit/main/docs/../docs/plugin-proposal-decorators.md","tags":[],"version":"current","frontMatter":{"id":"babel-plugin-proposal-decorators","title":"@babel/plugin-proposal-decorators","sidebar_label":"decorators"},"sidebar":"plugins","previous":{"title":"UMD","permalink":"/babel-website/docs/babel-plugin-transform-modules-umd"},"next":{"title":"explicit-resource-management","permalink":"/babel-website/docs/babel-plugin-proposal-explicit-resource-management"}}'),a=n("24246"),o=n("80980"),t=n("95181"),l=n("38049");let i={id:"babel-plugin-proposal-decorators",title:"@babel/plugin-proposal-decorators",sidebar_label:"decorators"},c=void 0,d={},h=[{value:"Example",id:"example",level:2},{value:"Simple class decorator",id:"simple-class-decorator",level:3},{value:"Class decorator",id:"class-decorator",level:3},{value:"Class method decorator",id:"class-function-decorator",level:3},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"With a configuration file (Recommended)",id:"with-a-configuration-file-recommended",level:3},{value:"Via Node API",id:"via-node-api",level:3},{value:"Options",id:"options",level:2},{value:"<code>version</code>",id:"version",level:3},{value:"<code>decoratorsBeforeExport</code>",id:"decoratorsbeforeexport",level:3},{value:"<code>legacy</code>",id:"legacy",level:3},{value:"NOTE: Compatibility with <code>@babel/plugin-transform-class-properties</code>",id:"note-compatibility-with-babelplugin-transform-class-properties",level:4},{value:"<code>Symbol.metadata</code> notes",id:"symbolmetadata-notes",level:2},{value:"References",id:"references",level:2}];function p(e){let r={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components},{Details:n}=r;return!n&&function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(r.h3,{id:"simple-class-decorator",children:"Simple class decorator"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",metastring:'title="JavaScript"',children:"@annotation\nclass MyClass {}\n\nfunction annotation(target) {\n  target.annotated = true;\n}\n"})}),"\n",(0,a.jsx)(r.h3,{id:"class-decorator",children:"Class decorator"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",metastring:'title="JavaScript"',children:"@isTestable(true)\nclass MyClass {}\n\nfunction isTestable(value) {\n  return function decorator(target) {\n    target.isTestable = value;\n  };\n}\n"})}),"\n",(0,a.jsx)(r.h3,{id:"class-function-decorator",children:"Class method decorator"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",metastring:'title="JavaScript"',children:'class C {\n  message = "hello!";\n\n  @bound\n  m() {\n    console.log(this.message);\n  }\n}\n\nfunction bound(value, { name, addInitializer }) {\n  addInitializer(function () {\n    this[name] = this[name].bind(this);\n  });\n}\n'})}),"\n",(0,a.jsx)(r.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsxs)(t.Z,{groupId:"npm2yarn",children:[(0,a.jsx)(l.Z,{value:"npm",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",children:"npm install --save-dev @babel/plugin-proposal-decorators\n"})})}),(0,a.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",children:"yarn add --dev @babel/plugin-proposal-decorators\n"})})}),(0,a.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",children:"pnpm add --save-dev @babel/plugin-proposal-decorators\n"})})})]}),"\n",(0,a.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(r.h3,{id:"with-a-configuration-file-recommended",children:"With a configuration file (Recommended)"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-json",metastring:'title="babel.config.json"',children:'{\n  "plugins": [\n    ["@babel/plugin-proposal-decorators", { "version": "2023-11" }]\n  ]\n}\n'})}),"\n",(0,a.jsx)(r.h3,{id:"via-node-api",children:"Via Node API"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",metastring:'title="JavaScript"',children:'require("@babel/core").transformSync("code", {\n  plugins: [\n    ["@babel/plugin-proposal-decorators", { version: "2023-11" }],\n  ]\n});\n'})}),"\n",(0,a.jsx)(r.h2,{id:"options",children:"Options"}),"\n",(0,a.jsxs)(n,{children:[(0,a.jsx)("summary",{children:"History"}),(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Version"}),(0,a.jsx)(r.th,{children:"Changes"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"v7.24.0"})}),(0,a.jsxs)(r.td,{children:["Added support for ",(0,a.jsx)(r.code,{children:'version: "2023-11"'})]})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"v7.22.0"})}),(0,a.jsxs)(r.td,{children:["Added support for ",(0,a.jsx)(r.code,{children:'version: "2023-05"'})]})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"v7.21.0"})}),(0,a.jsxs)(r.td,{children:["Added support for ",(0,a.jsx)(r.code,{children:'version: "2023-01"'})]})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"v7.19.0"})}),(0,a.jsxs)(r.td,{children:["Added support for ",(0,a.jsx)(r.code,{children:'version: "2022-03"'})]})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"v7.17.0"})}),(0,a.jsxs)(r.td,{children:["Added the ",(0,a.jsx)(r.code,{children:"version"})," option with support for ",(0,a.jsx)(r.code,{children:'"2021-12"'}),", ",(0,a.jsx)(r.code,{children:'"2018-09"'})," and ",(0,a.jsx)(r.code,{children:'"legacy"'})]})]})]})]})]}),"\n",(0,a.jsx)(r.h3,{id:"version",children:(0,a.jsx)(r.code,{children:"version"})}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:'"2023-11"'}),", ",(0,a.jsx)(r.code,{children:'"2023-05"'}),", ",(0,a.jsx)(r.code,{children:'"2023-01"'}),", ",(0,a.jsx)(r.code,{children:'"2022-03"'}),", ",(0,a.jsx)(r.code,{children:'"2021-12"'}),", ",(0,a.jsx)(r.code,{children:'"2018-09"'})," or ",(0,a.jsx)(r.code,{children:'"legacy"'}),"."]}),"\n",(0,a.jsx)(r.p,{children:"Selects the decorators proposal to use:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.code,{children:'"2023-11"'})," is the proposal version after the updates that reached consensus in the November 2023 TC39 meetings, intergrating ",(0,a.jsx)(r.a,{href:"https://github.com/pzuraq/ecma262/pull/12",children:"this change"})]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.code,{children:'"2023-05"'})," is the proposal version after the updates that reached consensus in the March and May 2023 TC39 meetings, integrating ",(0,a.jsx)(r.a,{href:"https://github.com/pzuraq/ecma262/compare/e86128e13b63a3c2efc3728f76c8332756752b02...c4465e44d514c6c1dba810487ec2721ccd6b08f9",children:"these changes"}),"."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.code,{children:'"2023-01"'})," is the proposal version after the updates that reached consensus in the January 2023 TC39 meeting, integrating ",(0,a.jsx)(r.a,{href:"https://github.com/pzuraq/ecma262/pull/4",children:(0,a.jsx)(r.code,{children:"pzuraq/ecma262#4"})}),"."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.code,{children:'"2022-03"'})," is the proposal version that reached consensus for Stage 3 in the March 2022 TC39 meeting. You can read more about it at ",(0,a.jsx)(r.a,{href:"https://github.com/tc39/proposal-decorators/tree/8ca65c046dd5e9aa3846a1fe5df343a6f7efd9f8",children:(0,a.jsx)(r.code,{children:"tc39/proposal-decorators@8ca65c046d"})}),"."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.code,{children:'"2021-12"'})," is the proposal version as it was presented to TC39 in Dec 2021. You can read more about it at ",(0,a.jsx)(r.a,{href:"https://github.com/tc39/proposal-decorators/tree/d6c056fa061646178c34f361bad33d583316dc85",children:(0,a.jsx)(r.code,{children:"tc39/proposal-decorators@d6c056fa06"})}),"."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.code,{children:'"2018-09"'})," is the proposal version that was initially promoted to Stage 2 presented to TC39 in Sept 2018.  You can read more about it at ",(0,a.jsx)(r.a,{href:"https://github.com/tc39/proposal-decorators/tree/7fa580b40f2c19c561511ea2c978e307ae689a1b",children:(0,a.jsx)(r.code,{children:"tc39/proposal-decorators@7fa580b40f"})}),"."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.code,{children:"legacy"})," is the legacy Stage 1 proposal, defined at ",(0,a.jsx)(r.a,{href:"https://github.com/wycats/javascript-decorators/blob/e1bf8d41bfa2591d949dd3bbf013514c8904b913/README.md",children:(0,a.jsx)(r.code,{children:"wycats/javascript-decorators@e1bf8d41bf"})}),". The legacy mode will not have feature updates, and there are known ",(0,a.jsx)(r.a,{href:"https://github.com/babel/babel/issues/8864#issuecomment-688535867",children:"discrepancies between Babel and TypeScript"}),". It's recommended to migrate to the ",(0,a.jsx)(r.code,{children:'"2023-11"'})," proposal."]}),"\n"]}),"\n",(0,a.jsx)(r.admonition,{type:"caution",children:(0,a.jsxs)(r.p,{children:["Babel 8 will only support ",(0,a.jsx)(r.code,{children:'"2023-11"'})," and ",(0,a.jsx)(r.code,{children:'"legacy"'}),". If you are using a different decorators version, it's recommended to migrate to ",(0,a.jsx)(r.code,{children:'"2023-11"'}),"."]})}),"\n",(0,a.jsxs)(r.p,{children:["The spec repo provides a brief ",(0,a.jsx)(r.a,{href:"https://github.com/tc39/proposal-decorators#how-does-this-proposal-compare-to-other-versions-of-decorators",children:"summary of the differences between these versions"}),"."]}),"\n",(0,a.jsxs)(r.p,{children:["If you specify the ",(0,a.jsx)(r.code,{children:"decoratorsBeforeExport"})," option, ",(0,a.jsx)(r.code,{children:"version"})," defaults to ",(0,a.jsx)(r.code,{children:'"2018-09"'}),", otherwise it is a required option."]}),"\n",(0,a.jsx)(r.h3,{id:"decoratorsbeforeexport",children:(0,a.jsx)(r.code,{children:"decoratorsBeforeExport"})}),"\n",(0,a.jsx)(r.p,{children:"This option:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["is disallowed when using ",(0,a.jsx)(r.code,{children:'version: "legacy"'}),", ",(0,a.jsx)(r.code,{children:'version: "2022-03"'}),", ",(0,a.jsx)(r.code,{children:'version: "2023-01"'}),", ",(0,a.jsx)(r.code,{children:'version: "2023-05"'})," or ",(0,a.jsx)(r.code,{children:'version: "2023-11"'}),";"]}),"\n",(0,a.jsxs)(r.li,{children:["is required when using ",(0,a.jsx)(r.code,{children:'version: "2018-09"'}),";"]}),"\n",(0,a.jsxs)(r.li,{children:["is optional and defaults to ",(0,a.jsx)(r.code,{children:"false"})," when using ",(0,a.jsx)(r.code,{children:'version: "2021-12"'}),"."]}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.code,{children:"boolean"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",metastring:'title="JavaScript"',children:"// decoratorsBeforeExport: false\nexport @decorator class Bar {}\n\n// decoratorsBeforeExport: true\n@decorator\nexport class Foo {}\n"})}),"\n",(0,a.jsxs)(r.p,{children:["This option was originally added to help tc39 collect feedback from the community by allowing experimentation with the proposed syntaxes. The proposal has now settled on allowing decorators either before or after ",(0,a.jsx)(r.code,{children:"export"}),"."]}),"\n",(0,a.jsx)(r.h3,{id:"legacy",children:(0,a.jsx)(r.code,{children:"legacy"})}),"\n",(0,a.jsx)(r.admonition,{title:"Deprecated",type:"danger",children:(0,a.jsxs)(r.p,{children:["Use ",(0,a.jsx)(r.code,{children:'version: "legacy"'})," instead. This option is a legacy alias."]})}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"boolean"}),", defaults to ",(0,a.jsx)(r.code,{children:"false"}),"."]}),"\n",(0,a.jsx)(r.p,{children:"Use the legacy (stage 1) decorators syntax and behavior."}),"\n",(0,a.jsxs)(r.h4,{id:"note-compatibility-with-babelplugin-transform-class-properties",children:["NOTE: Compatibility with ",(0,a.jsx)(r.code,{children:"@babel/plugin-transform-class-properties"})]}),"\n",(0,a.jsx)(r.p,{children:"If you are including your plugins manually and using class elements transforms such as"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.code,{children:"@babel/plugin-transform-class-properties"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.code,{children:"@babel/plugin-transform-private-methods"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.code,{children:"@babel/plugin-transform-private-property-in-object"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.code,{children:"@babel/plugin-transform-class-static-block"})}),"\n"]}),"\n",(0,a.jsxs)(r.p,{children:["make sure that ",(0,a.jsx)(r.code,{children:"@babel/plugin-proposal-decorators"})," comes ",(0,a.jsx)(r.em,{children:"before"})," them."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-diff",metastring:'title="babel.config.json"',children:'{\n  "plugins": [\n-   "@babel/plugin-transform-class-properties",\n    ["@babel/plugin-proposal-decorators", { "version": "2023-11" }]\n+   "@babel/plugin-transform-class-properties"\n  ]\n}\n'})}),"\n",(0,a.jsxs)(r.p,{children:["If you are already using ",(0,a.jsx)(r.code,{children:"@babel/preset-env"})," and Stage 3 decorators, you can safely remove the\nclass elements transform, Babel will automatically apply decorators transform before any presets:"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-diff",metastring:'title="babel.config.json"',children:'{\n  "presets": [\n    ["@babel/preset-env"],\n  ],\n  "plugins": [\n-   "@babel/plugin-transform-class-properties",\n    ["@babel/plugin-proposal-decorators", { "version": "2023-11" }]\n  ]\n}\n'})}),"\n",(0,a.jsxs)(r.p,{children:["If you are using ",(0,a.jsx)(r.code,{children:"@babel/preset-env"})," and legacy decorators, you must ensure the class elements transform is enabled regardless of your targets, because Babel only supports compiling legacy decorators when also compiling class properties:"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-diff",metastring:'title="babel.config.json"',children:'{\n  "presets": [\n    ["@babel/preset-env", {\n+     "include": [\n+       "@babel/plugin-transform-class-properties"\n+     ]\n    }],\n  ],\n  "plugins": [\n-   "@babel/plugin-transform-class-properties",\n    ["@babel/plugin-proposal-decorators", { "version": "legacy" }]\n  ]\n}\n'})}),"\n",(0,a.jsxs)(r.p,{children:["The ",(0,a.jsx)(r.code,{children:"include"})," option will enable the transforms included in ",(0,a.jsx)(r.code,{children:"@babel/preset-env"})," so you can safely remove them from your ",(0,a.jsx)(r.code,{children:"package.json"}),"."]}),"\n",(0,a.jsx)(r.admonition,{type:"tip",children:(0,a.jsxs)(r.p,{children:["You can read more about configuring plugin options ",(0,a.jsx)(r.a,{href:"https://babeljs.io/docs/en/plugins#plugin-options",children:"here"})]})}),"\n",(0,a.jsxs)(r.h2,{id:"symbolmetadata-notes",children:[(0,a.jsx)(r.code,{children:"Symbol.metadata"})," notes"]}),"\n",(0,a.jsxs)(r.p,{children:["When using decorators which either access or modify the metadata in the decorator context, you need to use ",(0,a.jsx)(r.code,{children:"Symbol.metadata"}),". When ",(0,a.jsx)(r.code,{children:"Symbol.metadata"})," is not available, Babel defaults to ",(0,a.jsx)(r.code,{children:'Symbol.for("Symbol.metadata")'}),": this may be incompatible with other packages that use a different fallback."]}),"\n",(0,a.jsxs)(r.p,{children:["To ensure that ",(0,a.jsx)(r.code,{children:"Symbol.metadata"})," is available globally and matches the symbol used by the Babel decorators plugin during transpilation, you will need to either include a polyfill that defines it, or define it yourself:"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",metastring:'title="symbol-metadata-polyfill.js"',children:'Symbol.metadata = Symbol.for("Symbol.metadata");\n'})}),"\n",(0,a.jsxs)(r.p,{children:["You can also use a third-party polyfill, such as ",(0,a.jsx)(r.code,{children:"core-js/proposals/decorator-metadata-v2.js"}),". Make sure that the polyfill is executed before any code that uses decorators or accesses ",(0,a.jsx)(r.code,{children:"Symbol.metadata"}),"."]}),"\n",(0,a.jsx)(r.h2,{id:"references",children:"References"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"https://github.com/tc39/proposal-decorators",children:"Proposal: JavaScript Decorators"})}),"\n"]})]})}function u(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},38049:function(e,r,n){n.d(r,{Z:()=>t});var s=n("24246");n("27378");var a=n("90496");let o="tabItem_wHwb";function t(e){let{children:r,hidden:n,className:t}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(o,t),hidden:n,children:r})}},95181:function(e,r,n){n.d(r,{Z:()=>v});var s=n("24246"),a=n("27378"),o=n("90496"),t=n("85403"),l=n("3620"),i=n("77090"),c=n("76180"),d=n("23418"),h=n("19073");function p(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||a.isValidElement(e)&&function(e){let{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function u(e){let{value:r,tabValues:n}=e;return n.some(e=>e.value===r)}var b=n("3344");let m="tabList_J5MA",x="tabItem_l0OV";function j(e){let{className:r,block:n,selectedValue:a,selectValue:l,tabValues:i}=e,c=[],{blockElementScrollPositionUntilNextRender:d}=(0,t.o5)(),h=e=>{let r=e.currentTarget,n=i[c.indexOf(r)].value;n!==a&&(d(r),l(n))},p=e=>{let r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{let n=c.indexOf(e.currentTarget)+1;r=c[n]??c[0];break}case"ArrowLeft":{let n=c.indexOf(e.currentTarget)-1;r=c[n]??c[c.length-1]}}r?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},r),children:i.map(e=>{let{value:r,label:n,attributes:t}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:a===r?0:-1,"aria-selected":a===r,ref:e=>c.push(e),onKeyDown:p,onClick:h,...t,className:(0,o.Z)("tabs__item",x,t?.className,{"tabs__item--active":a===r}),children:n??r},r)})})}function f(e){let{lazy:r,children:n,selectedValue:t}=e,l=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){let e=l.find(e=>e.props.value===t);return e?(0,a.cloneElement)(e,{className:(0,o.Z)("margin-top--md",e.props.className)}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:l.map((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==t}))})}function g(e){let r=function(e){let{defaultValue:r,queryString:n=!1,groupId:s}=e,o=function(e){let{values:r,children:n}=e;return(0,a.useMemo)(()=>{let e=r??p(n).map(e=>{let{props:{value:r,label:n,attributes:s,default:a}}=e;return{value:r,label:n,attributes:s,default:a}});return!function(e){let r=(0,d.lx)(e,(e,r)=>e.value===r.value);if(r.length>0)throw Error(`Docusaurus error: Duplicate values "${r.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[r,n])}(e),[t,b]=(0,a.useState)(()=>(function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!u({value:r,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}let s=n.find(e=>e.default)??n[0];if(!s)throw Error("Unexpected error: 0 tabValues");return s.value})({defaultValue:r,tabValues:o})),[m,x]=function(e){let{queryString:r=!1,groupId:n}=e,s=(0,l.k6)(),o=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n}),t=(0,c._X)(o);return[t,(0,a.useCallback)(e=>{if(!o)return;let r=new URLSearchParams(s.location.search);r.set(o,e),s.replace({...s.location,search:r.toString()})},[o,s])]}({queryString:n,groupId:s}),[j,f]=function(e){var r;let{groupId:n}=e;let s=(r=n)?`docusaurus.tab.${r}`:null,[o,t]=(0,h.Nk)(s);return[o,(0,a.useCallback)(e=>{if(!!s)t.set(e)},[s,t])]}({groupId:s}),g=(()=>{let e=m??j;return u({value:e,tabValues:o})?e:null})();return(0,i.Z)(()=>{g&&b(g)},[g]),{selectedValue:t,selectValue:(0,a.useCallback)(e=>{if(!u({value:e,tabValues:o}))throw Error(`Can't select invalid tab value=${e}`);b(e),x(e),f(e)},[x,f,o]),tabValues:o}}(e);return(0,s.jsxs)("div",{className:(0,o.Z)("tabs-container",m),children:[(0,s.jsx)(j,{...r,...e}),(0,s.jsx)(f,{...r,...e})]})}function v(e){let r=(0,b.Z)();return(0,s.jsx)(g,{...e,children:p(e.children)},String(r))}},80980:function(e,r,n){n.d(r,{Z:function(){return l},a:function(){return t}});var s=n(27378);let a={},o=s.createContext(a);function t(e){let r=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);