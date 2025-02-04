"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["4516"],{59425:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>u,default:()=>h,assets:()=>c,toc:()=>d,frontMatter:()=>o});var t=JSON.parse('{"id":"babel-plugin-transform-unicode-sets-regex","title":"@babel/plugin-transform-unicode-sets-regex","description":"This plugin is included in @babel/preset-env, in ES2024","source":"@site/../docs/plugin-transform-unicode-sets-regex.md","sourceDirName":".","slug":"/babel-plugin-transform-unicode-sets-regex","permalink":"/babel-website/docs/babel-plugin-transform-unicode-sets-regex","draft":false,"unlisted":false,"editUrl":"https://github.com/babel/website/edit/main/docs/../docs/plugin-transform-unicode-sets-regex.md","tags":[],"version":"current","frontMatter":{"id":"babel-plugin-transform-unicode-sets-regex","title":"@babel/plugin-transform-unicode-sets-regex","sidebar_label":"unicode-sets-regex"},"sidebar":"docs","previous":{"title":"syntax-import-attributes","permalink":"/babel-website/docs/babel-plugin-syntax-import-attributes"},"next":{"title":"class-properties","permalink":"/babel-website/docs/babel-plugin-transform-class-properties"}}'),s=r("24246"),i=r("80980"),l=r("95181"),a=r("38049");let o={id:"babel-plugin-transform-unicode-sets-regex",title:"@babel/plugin-transform-unicode-sets-regex",sidebar_label:"unicode-sets-regex"},u=void 0,c={},d=[{value:"Example",id:"example",level:2},{value:"Intersection",id:"intersection",level:3},{value:"Difference",id:"difference",level:3},{value:"Property of Strings",id:"property-of-strings",level:3},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"With a configuration file (Recommended)",id:"with-a-configuration-file-recommended",level:3},{value:"Via CLI",id:"via-cli",level:3},{value:"Via Node API",id:"via-node-api",level:3}];function p(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["This plugin is included in ",(0,s.jsx)(n.code,{children:"@babel/preset-env"}),", in ",(0,s.jsx)(n.a,{href:"https://github.com/tc39/proposals/blob/master/finished-proposals.md",children:"ES2024"})]})}),"\n",(0,s.jsxs)(n.p,{children:["This plugin transforms regular expressions using the ",(0,s.jsx)(n.code,{children:"v"})," flag, introduced by the ",(0,s.jsx)(n.a,{href:"https://github.com/tc39/proposal-regexp-set-notation",children:"RegExp set notation + properties of strings"})," proposal, to regular expressions that use the ",(0,s.jsx)(n.code,{children:"u"})," flag."]}),"\n",(0,s.jsxs)(n.p,{children:["It only transforms ",(0,s.jsx)(n.code,{children:"/.../v"})," syntax and it does not patch the ",(0,s.jsx)(n.code,{children:"new RegExp"})," constructor, since its arguments cannot be pre-transformed statically: to handle runtime behavior of functions/classes, you will need to use a polyfill instead."]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.h3,{id:"intersection",children:"Intersection"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="input.js"',children:"/[\\p{ASCII}&&\\p{Decimal_Number}]/v;\n"})}),"\n",(0,s.jsx)(n.p,{children:"will be transformed to"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="output.js"',children:"/[0-9]/u;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"difference",children:"Difference"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="input.js"',children:"// Non-ASCII white spaces\n/[\\p{White_Space}--\\p{ASCII}]/v;\n"})}),"\n",(0,s.jsx)(n.p,{children:"will be transformed to"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="output.js"',children:"/[\\x85\\xA0\\u1680\\u2000-\\u200A\\u2028\\u2029\\u202F\\u205F\\u3000]/u;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"property-of-strings",children:"Property of Strings"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="input.js"',children:'/^\\p{Emoji_Keycap_Sequence}$/v.test("*\\uFE0F\\u20E3");\n// true\n'})}),"\n",(0,s.jsx)(n.p,{children:"will be transformed to"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="output.js"',children:'/^(?:\\*\uFE0F\u20E3|#\uFE0F\u20E3|0\uFE0F\u20E3|1\uFE0F\u20E3|2\uFE0F\u20E3|3\uFE0F\u20E3|4\uFE0F\u20E3|5\uFE0F\u20E3|6\uFE0F\u20E3|7\uFE0F\u20E3|8\uFE0F\u20E3|9\uFE0F\u20E3)$/u.test("*\\uFE0F\\u20E3");\n// true\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Here is ",(0,s.jsx)(n.a,{href:"https://github.com/tc39/proposal-regexp-unicode-sequence-properties#proposed-solution",children:"a list of supported properties"}),". Note that using property of strings with ",(0,s.jsx)(n.code,{children:"u"}),"-flag will error."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="input.js"',children:"// highlight-error-next-line\n/\\p{Emoji_Keycap_Sequence}/u;\n// Error: Properties of strings are only supported when using the unicodeSets (v) flag.\n"})}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(l.Z,{groupId:"npm2yarn",children:[(0,s.jsx)(a.Z,{value:"npm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"npm install --save-dev @babel/plugin-transform-unicode-sets-regex\n"})})}),(0,s.jsx)(a.Z,{value:"yarn",label:"Yarn",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"yarn add --dev @babel/plugin-transform-unicode-sets-regex\n"})})}),(0,s.jsx)(a.Z,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"pnpm add --save-dev @babel/plugin-transform-unicode-sets-regex\n"})})})]}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.h3,{id:"with-a-configuration-file-recommended",children:"With a configuration file (Recommended)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title="babel.config.json"',children:'{\n  "plugins": ["@babel/plugin-transform-unicode-sets-regex"]\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"via-cli",children:"Via CLI"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"babel --plugins @babel/plugin-transform-unicode-sets-regex script.js\n"})}),"\n",(0,s.jsx)(n.h3,{id:"via-node-api",children:"Via Node API"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'require("@babel/core").transformSync("code", {\n  plugins: ["@babel/plugin-transform-unicode-sets-regex"],\n});\n'})})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},38049:function(e,n,r){r.d(n,{Z:()=>l});var t=r("24246");r("27378");var s=r("90496");let i="tabItem_wHwb";function l(e){let{children:n,hidden:r,className:l}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,s.Z)(i,l),hidden:r,children:n})}},95181:function(e,n,r){r.d(n,{Z:()=>v});var t=r("24246"),s=r("27378"),i=r("90496"),l=r("85403"),a=r("3620"),o=r("77090"),u=r("76180"),c=r("23418"),d=r("19073");function p(e){return s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||s.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:n,tabValues:r}=e;return r.some(e=>e.value===n)}var m=r("3344");let f="tabList_J5MA",g="tabItem_l0OV";function b(e){let{className:n,block:r,selectedValue:s,selectValue:a,tabValues:o}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{let n=e.currentTarget,r=o[u.indexOf(n)].value;r!==s&&(c(n),a(r))},p=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let r=u.indexOf(e.currentTarget)+1;n=u[r]??u[0];break}case"ArrowLeft":{let r=u.indexOf(e.currentTarget)-1;n=u[r]??u[u.length-1]}}n?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},n),children:o.map(e=>{let{value:n,label:r,attributes:l}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>u.push(e),onKeyDown:p,onClick:d,...l,className:(0,i.Z)("tabs__item",g,l?.className,{"tabs__item--active":s===n}),children:r??n},n)})})}function x(e){let{lazy:n,children:r,selectedValue:l}=e,a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){let e=a.find(e=>e.props.value===l);return e?(0,s.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:a.map((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==l}))})}function j(e){let n=function(e){let{defaultValue:n,queryString:r=!1,groupId:t}=e,i=function(e){let{values:n,children:r}=e;return(0,s.useMemo)(()=>{let e=n??p(r).map(e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}});return!function(e){let n=(0,c.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,r])}(e),[l,m]=(0,s.useState)(()=>(function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let t=r.find(e=>e.default)??r[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:n,tabValues:i})),[f,g]=function(e){let{queryString:n=!1,groupId:r}=e,t=(0,a.k6)(),i=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r}),l=(0,u._X)(i);return[l,(0,s.useCallback)(e=>{if(!i)return;let n=new URLSearchParams(t.location.search);n.set(i,e),t.replace({...t.location,search:n.toString()})},[i,t])]}({queryString:r,groupId:t}),[b,x]=function(e){var n;let{groupId:r}=e;let t=(n=r)?`docusaurus.tab.${n}`:null,[i,l]=(0,d.Nk)(t);return[i,(0,s.useCallback)(e=>{if(!!t)l.set(e)},[t,l])]}({groupId:t}),j=(()=>{let e=f??b;return h({value:e,tabValues:i})?e:null})();return(0,o.Z)(()=>{j&&m(j)},[j]),{selectedValue:l,selectValue:(0,s.useCallback)(e=>{if(!h({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);m(e),g(e),x(e)},[g,x,i]),tabValues:i}}(e);return(0,t.jsxs)("div",{className:(0,i.Z)("tabs-container",f),children:[(0,t.jsx)(b,{...n,...e}),(0,t.jsx)(x,{...n,...e})]})}function v(e){let n=(0,m.Z)();return(0,t.jsx)(j,{...e,children:p(e.children)},String(n))}},80980:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return l}});var t=r(27378);let s={},i=t.createContext(s);function l(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);