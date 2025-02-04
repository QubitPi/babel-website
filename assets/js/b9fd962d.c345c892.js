"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["4732"],{37320:function(e,n,r){r.r(n),r.d(n,{metadata:()=>i,contentTitle:()=>c,default:()=>p,assets:()=>o,toc:()=>h,frontMatter:()=>d});var i=JSON.parse('{"id":"babel-preset-minify","title":"babel-preset-minify","description":"+ Install","source":"@site/../docs/preset-minify.md","sourceDirName":".","slug":"/babel-preset-minify","permalink":"/docs/babel-preset-minify","draft":false,"unlisted":false,"editUrl":"https://github.com/babel/website/edit/main/docs/../docs/preset-minify.md","tags":[],"version":"current","frontMatter":{"id":"babel-preset-minify","title":"babel-preset-minify","sidebar_label":"minify"}}'),l=r("24246"),s=r("80980"),t=r("95181"),a=r("38049");let d={id:"babel-preset-minify",title:"babel-preset-minify",sidebar_label:"minify"},c=void 0,o={},h=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"With a configuration file (Recommended)",id:"with-a-configuration-file-recommended",level:3},{value:"Via CLI",id:"via-cli",level:3},{value:"Via Node API",id:"via-node-api",level:3},{value:"Options",id:"options",level:2},{value:"1-1 mapping with plugin",id:"1-1-mapping-with-plugin",level:4},{value:"The same option passed to multiple plugins",id:"the-same-option-passed-to-multiple-plugins",level:4}];function u(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#install",children:"Install"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#usage",children:"Usage"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#options",children:"Options"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,l.jsxs)(t.Z,{groupId:"npm2yarn",children:[(0,l.jsx)(a.Z,{value:"npm",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"npm install babel-preset-minify --save-dev\n"})})}),(0,l.jsx)(a.Z,{value:"yarn",label:"Yarn",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"yarn add babel-preset-minify --dev\n"})})}),(0,l.jsx)(a.Z,{value:"pnpm",label:"pnpm",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"pnpm add babel-preset-minify --save-dev\n"})})})]}),"\n",(0,l.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(n.h3,{id:"with-a-configuration-file-recommended",children:"With a configuration file (Recommended)"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",metastring:'title="babel.config.json"',children:'{\n  "presets": ["minify"]\n}\n'})}),"\n",(0,l.jsx)(n.p,{children:"or pass in options -"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",metastring:'title="babel.config.json"',children:'{\n  "presets": [["minify", {\n    "mangle": {\n      "exclude": ["MyCustomError"]\n    },\n    "unsafe": {\n      "typeConstructors": false\n    },\n    "keepFnName": true\n  }]]\n}\n'})}),"\n",(0,l.jsx)(n.h3,{id:"via-cli",children:"Via CLI"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"babel script.js --presets minify\n"})}),"\n",(0,l.jsx)(n.h3,{id:"via-node-api",children:"Via Node API"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'require("@babel/core").transformSync("code", {\n  presets: ["minify"]\n});\n'})}),"\n",(0,l.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,l.jsx)(n.p,{children:"Two types of options:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"1-1 mapping with plugin"}),"\n",(0,l.jsx)(n.li,{children:"The same option passed to multiple plugins"}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"1-1-mapping-with-plugin",children:"1-1 mapping with plugin"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"false"})," - disable plugin"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"true"})," - enable plugin"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"{ ...pluginOpts }"})," - enable plugin and pass pluginOpts to plugin"]}),"\n"]}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"OptionName"}),(0,l.jsx)(n.th,{children:"Plugin"}),(0,l.jsx)(n.th,{children:"DefaultValue"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"booleans"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"babel-plugin-transform-minify-booleans",children:"transform-minify-booleans"})}),(0,l.jsx)(n.td,{children:"true"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"builtIns"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"babel-plugin-minify-builtins",children:"minify-builtins"})}),(0,l.jsx)(n.td,{children:"true"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"consecutiveAdds"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"babel-plugin-transform-inline-consecutive-adds",children:"transform-inline-consecutive-adds"})}),(0,l.jsx)(n.td,{children:"true"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"deadcode"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"babel-plugin-minify-dead-code-elimination",children:"minify-dead-code-elimination"})}),(0,l.jsx)(n.td,{children:"true"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"evaluate"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"babel-plugin-minify-constant-folding",children:"minify-constant-folding"})}),(0,l.jsx)(n.td,{children:"true"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"flipComparisons"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"babel-plugin-minify-flip-comparisons",children:"minify-flip-comparisons"})}),(0,l.jsx)(n.td,{children:"true"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"guards"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"babel-plugin-minify-guarded-expressions",children:"minify-guarded-expressions"})}),(0,l.jsx)(n.td,{children:"true"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"infinity"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"babel-plugin-minify-infinity",children:"minify-infinity"})}),(0,l.jsx)(n.td,{children:"true"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"mangle"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"babel-plugin-minify-mangle-names",children:"minify-mangle-names"})}),(0,l.jsx)(n.td,{children:"true"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"memberExpressions"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"babel-plugin-transform-member-expression-literals",children:"transform-member-expression-literals"})}),(0,l.jsx)(n.td,{children:"true"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"mergeVars"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"babel-plugin-transform-merge-sibling-variables",children:"transform-merge-sibling-variables"})}),(0,l.jsx)(n.td,{children:"true"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"numericLiterals"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"babel-plugin-minify-numeric-literals",children:"minify-numeric-literals"})}),(0,l.jsx)(n.td,{children:"true"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"propertyLiterals"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"babel-plugin-transform-property-literals",children:"transform-property-literals"})}),(0,l.jsx)(n.td,{children:"true"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"regexpConstructors"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"babel-plugin-transform-regexp-constructors",children:"transform-regexp-constructors"})}),(0,l.jsx)(n.td,{children:"true"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"removeConsole"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"babel-plugin-transform-remove-console",children:"transform-remove-console"})}),(0,l.jsx)(n.td,{children:"false"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"removeDebugger"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"babel-plugin-transform-remove-debugger",children:"transform-remove-debugger"})}),(0,l.jsx)(n.td,{children:"false"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"removeUndefined"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"babel-plugin-transform-remove-undefined",children:"transform-remove-undefined"})}),(0,l.jsx)(n.td,{children:"true"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"replace"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"babel-plugin-minify-replace",children:"minify-replace"})}),(0,l.jsx)(n.td,{children:"true"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"simplify"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"babel-plugin-minify-simplify",children:"minify-simplify"})}),(0,l.jsx)(n.td,{children:"true"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"simplifyComparisons"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"babel-plugin-transform-simplify-comparison-operators",children:"transform-simplify-comparison-operators"})}),(0,l.jsx)(n.td,{children:"true"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"typeConstructors"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"babel-plugin-minify-type-constructors",children:"minify-type-constructors"})}),(0,l.jsx)(n.td,{children:"true"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"undefinedToVoid"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"babel-plugin-transform-undefined-to-void",children:"transform-undefined-to-void"})}),(0,l.jsx)(n.td,{children:"true"})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"the-same-option-passed-to-multiple-plugins",children:"The same option passed to multiple plugins"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"When multiple plugins require the same option, it's easier to declare it in one place. These options are passed on to two or more plugins."}),"\n"]}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"OptionName"}),(0,l.jsx)(n.th,{children:"Plugins"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"keepFnName"}),(0,l.jsxs)(n.td,{children:["Passed to ",(0,l.jsx)(n.a,{href:"babel-plugin-minify-mangle-names",children:"mangle"})," & ",(0,l.jsx)(n.a,{href:"babel-plugin-minify-dead-code-elimination",children:"deadcode"})]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"keepClassName"}),(0,l.jsxs)(n.td,{children:["Passed to ",(0,l.jsx)(n.a,{href:"babel-plugin-minify-mangle-names",children:"mangle"})," & ",(0,l.jsx)(n.a,{href:"babel-plugin-minify-dead-code-elimination",children:"deadcode"})]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"tdz"}),(0,l.jsxs)(n.td,{children:["Passed to ",(0,l.jsx)(n.a,{href:"babel-plugin-minify-builtins",children:"builtIns"}),", ",(0,l.jsx)(n.a,{href:"babel-plugin-minify-constant-folding",children:"evaluate"}),", ",(0,l.jsx)(n.a,{href:"babel-plugin-minify-dead-code-elimination",children:"deadcode"}),", ",(0,l.jsx)(n.a,{href:"babel-plugin-transform-remove-undefined",children:"removeUndefined"})]})]})]})]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Examples"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",metastring:'title="babel.config.json"',children:'{\n  "presets": [["minify", {\n    "evaluate": false,\n    "mangle": true\n  }]]\n}\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",metastring:'title="babel.config.json"',children:'{\n  "presets": [["minify", {\n    "mangle": {\n      "exclude": ["ParserError", "NetworkError"]\n    }\n  }]]\n}\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",metastring:'title="babel.config.json"',children:'{\n  "presets": [["minify", {\n    "keepFnName": true\n  }]]\n}\n// is the same as\n{\n  "presets": [["minify", {\n    "mangle": {\n      "keepFnName": true\n    },\n    "deadcode": {\n      "keepFnName": true\n    }\n  }]]\n}\n'})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["You can read more about configuring preset options ",(0,l.jsx)(n.a,{href:"https://babeljs.io/docs/en/presets#preset-options",children:"here"})]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},38049:function(e,n,r){r.d(n,{Z:()=>t});var i=r("24246");r("27378");var l=r("90496");let s="tabItem_wHwb";function t(e){let{children:n,hidden:r,className:t}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,l.Z)(s,t),hidden:r,children:n})}},95181:function(e,n,r){r.d(n,{Z:()=>y});var i=r("24246"),l=r("27378"),s=r("90496"),t=r("85403"),a=r("3620"),d=r("77090"),c=r("76180"),o=r("23418"),h=r("19073");function u(e){return l.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||l.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:n,tabValues:r}=e;return r.some(e=>e.value===n)}var m=r("3344");let f="tabList_J5MA",x="tabItem_l0OV";function j(e){let{className:n,block:r,selectedValue:l,selectValue:a,tabValues:d}=e,c=[],{blockElementScrollPositionUntilNextRender:o}=(0,t.o5)(),h=e=>{let n=e.currentTarget,r=d[c.indexOf(n)].value;r!==l&&(o(n),a(r))},u=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{let r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{let r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1]}}n?.focus()};return(0,i.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},n),children:d.map(e=>{let{value:n,label:r,attributes:t}=e;return(0,i.jsx)("li",{role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:e=>c.push(e),onKeyDown:u,onClick:h,...t,className:(0,s.Z)("tabs__item",x,t?.className,{"tabs__item--active":l===n}),children:r??n},n)})})}function b(e){let{lazy:n,children:r,selectedValue:t}=e,a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){let e=a.find(e=>e.props.value===t);return e?(0,l.cloneElement)(e,{className:(0,s.Z)("margin-top--md",e.props.className)}):null}return(0,i.jsx)("div",{className:"margin-top--md",children:a.map((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==t}))})}function g(e){let n=function(e){let{defaultValue:n,queryString:r=!1,groupId:i}=e,s=function(e){let{values:n,children:r}=e;return(0,l.useMemo)(()=>{let e=n??u(r).map(e=>{let{props:{value:n,label:r,attributes:i,default:l}}=e;return{value:n,label:r,attributes:i,default:l}});return!function(e){let n=(0,o.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,r])}(e),[t,m]=(0,l.useState)(()=>(function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let i=r.find(e=>e.default)??r[0];if(!i)throw Error("Unexpected error: 0 tabValues");return i.value})({defaultValue:n,tabValues:s})),[f,x]=function(e){let{queryString:n=!1,groupId:r}=e,i=(0,a.k6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r}),t=(0,c._X)(s);return[t,(0,l.useCallback)(e=>{if(!s)return;let n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})},[s,i])]}({queryString:r,groupId:i}),[j,b]=function(e){var n;let{groupId:r}=e;let i=(n=r)?`docusaurus.tab.${n}`:null,[s,t]=(0,h.Nk)(i);return[s,(0,l.useCallback)(e=>{if(!!i)t.set(e)},[i,t])]}({groupId:i}),g=(()=>{let e=f??j;return p({value:e,tabValues:s})?e:null})();return(0,d.Z)(()=>{g&&m(g)},[g]),{selectedValue:t,selectValue:(0,l.useCallback)(e=>{if(!p({value:e,tabValues:s}))throw Error(`Can't select invalid tab value=${e}`);m(e),x(e),b(e)},[x,b,s]),tabValues:s}}(e);return(0,i.jsxs)("div",{className:(0,s.Z)("tabs-container",f),children:[(0,i.jsx)(j,{...n,...e}),(0,i.jsx)(b,{...n,...e})]})}function y(e){let n=(0,m.Z)();return(0,i.jsx)(g,{...e,children:u(e.children)},String(n))}},80980:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return t}});var i=r(27378);let l={},s=i.createContext(l);function t(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);