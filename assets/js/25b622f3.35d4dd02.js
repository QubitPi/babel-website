"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["5294"],{28545:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>u,default:()=>h,assets:()=>c,toc:()=>d,frontMatter:()=>o});var t=JSON.parse('{"id":"babel-plugin-transform-json-strings","title":"@babel/plugin-transform-json-strings","description":"This plugin is included in @babel/preset-env, in ES2019","source":"@site/../docs/plugin-transform-json-strings.md","sourceDirName":".","slug":"/babel-plugin-transform-json-strings","permalink":"/docs/babel-plugin-transform-json-strings","draft":false,"unlisted":false,"editUrl":"https://github.com/babel/website/edit/main/docs/../docs/plugin-transform-json-strings.md","tags":[],"version":"current","frontMatter":{"id":"babel-plugin-transform-json-strings","title":"@babel/plugin-transform-json-strings","sidebar_label":"json-strings"},"sidebar":"docs","previous":{"title":"optional-catch-binding","permalink":"/docs/babel-plugin-transform-optional-catch-binding"},"next":{"title":"async-generator-functions","permalink":"/docs/babel-plugin-transform-async-generator-functions"}}'),a=r("24246"),s=r("80980"),l=r("95181"),i=r("38049");let o={id:"babel-plugin-transform-json-strings",title:"@babel/plugin-transform-json-strings",sidebar_label:"json-strings"},u=void 0,c={},d=[{value:"Examples",id:"examples",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"With a configuration file (Recommended)",id:"with-a-configuration-file-recommended",level:3},{value:"Via CLI",id:"via-cli",level:3},{value:"Via Node API",id:"via-node-api",level:3},{value:"References",id:"references",level:2}];function p(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["This plugin is included in ",(0,a.jsx)(n.code,{children:"@babel/preset-env"}),", in ",(0,a.jsx)(n.a,{href:"https://github.com/tc39/proposals/blob/master/finished-proposals.md",children:"ES2019"})]})}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"In"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:"const ex = \"before\u2028after\";\n//                ^ There's a U+2028 char between 'before' and 'after'\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Out"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:"const ex = \"before\\u2028after\";\n//                ^ There's a U+2028 char between 'before' and 'after'\n"})}),"\n",(0,a.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsxs)(l.Z,{groupId:"npm2yarn",children:[(0,a.jsx)(i.Z,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"npm install --save-dev @babel/plugin-transform-json-strings\n"})})}),(0,a.jsx)(i.Z,{value:"yarn",label:"Yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"yarn add --dev @babel/plugin-transform-json-strings\n"})})}),(0,a.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"pnpm add --save-dev @babel/plugin-transform-json-strings\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n.h3,{id:"with-a-configuration-file-recommended",children:"With a configuration file (Recommended)"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",metastring:'title="babel.config.json"',children:'{\n  "plugins": ["@babel/plugin-transform-json-strings"]\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"via-cli",children:"Via CLI"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"babel --plugins @babel/plugin-transform-json-strings script.js\n"})}),"\n",(0,a.jsx)(n.h3,{id:"via-node-api",children:"Via Node API"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'require("@babel/core").transformSync("code", {\n  plugins: ["@babel/plugin-transform-json-strings"],\n});\n'})}),"\n",(0,a.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/babel/proposals/issues/43",children:"Proposal: Subsume JSON strings"})}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},38049:function(e,n,r){r.d(n,{Z:()=>l});var t=r("24246");r("27378");var a=r("90496");let s="tabItem_wHwb";function l(e){let{children:n,hidden:r,className:l}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,a.Z)(s,l),hidden:r,children:n})}},95181:function(e,n,r){r.d(n,{Z:()=>x});var t=r("24246"),a=r("27378"),s=r("90496"),l=r("85403"),i=r("3620"),o=r("77090"),u=r("76180"),c=r("23418"),d=r("19073");function p(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||a.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:n,tabValues:r}=e;return r.some(e=>e.value===n)}var f=r("3344");let m="tabList_J5MA",b="tabItem_l0OV";function g(e){let{className:n,block:r,selectedValue:a,selectValue:i,tabValues:o}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{let n=e.currentTarget,r=o[u.indexOf(n)].value;r!==a&&(c(n),i(r))},p=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let r=u.indexOf(e.currentTarget)+1;n=u[r]??u[0];break}case"ArrowLeft":{let r=u.indexOf(e.currentTarget)-1;n=u[r]??u[u.length-1]}}n?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},n),children:o.map(e=>{let{value:n,label:r,attributes:l}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>u.push(e),onKeyDown:p,onClick:d,...l,className:(0,s.Z)("tabs__item",b,l?.className,{"tabs__item--active":a===n}),children:r??n},n)})})}function j(e){let{lazy:n,children:r,selectedValue:l}=e,i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){let e=i.find(e=>e.props.value===l);return e?(0,a.cloneElement)(e,{className:(0,s.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:i.map((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==l}))})}function v(e){let n=function(e){let{defaultValue:n,queryString:r=!1,groupId:t}=e,s=function(e){let{values:n,children:r}=e;return(0,a.useMemo)(()=>{let e=n??p(r).map(e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}});return!function(e){let n=(0,c.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,r])}(e),[l,f]=(0,a.useState)(()=>(function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let t=r.find(e=>e.default)??r[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:n,tabValues:s})),[m,b]=function(e){let{queryString:n=!1,groupId:r}=e,t=(0,i.k6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r}),l=(0,u._X)(s);return[l,(0,a.useCallback)(e=>{if(!s)return;let n=new URLSearchParams(t.location.search);n.set(s,e),t.replace({...t.location,search:n.toString()})},[s,t])]}({queryString:r,groupId:t}),[g,j]=function(e){var n;let{groupId:r}=e;let t=(n=r)?`docusaurus.tab.${n}`:null,[s,l]=(0,d.Nk)(t);return[s,(0,a.useCallback)(e=>{if(!!t)l.set(e)},[t,l])]}({groupId:t}),v=(()=>{let e=m??g;return h({value:e,tabValues:s})?e:null})();return(0,o.Z)(()=>{v&&f(v)},[v]),{selectedValue:l,selectValue:(0,a.useCallback)(e=>{if(!h({value:e,tabValues:s}))throw Error(`Can't select invalid tab value=${e}`);f(e),b(e),j(e)},[b,j,s]),tabValues:s}}(e);return(0,t.jsxs)("div",{className:(0,s.Z)("tabs-container",m),children:[(0,t.jsx)(g,{...n,...e}),(0,t.jsx)(j,{...n,...e})]})}function x(e){let n=(0,f.Z)();return(0,t.jsx)(v,{...e,children:p(e.children)},String(n))}},80980:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return l}});var t=r(27378);let a={},s=t.createContext(a);function l(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);