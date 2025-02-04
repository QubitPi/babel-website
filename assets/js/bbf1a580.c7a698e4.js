"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["3326"],{30038:function(e,r,l){l.r(r),l.d(r,{metadata:()=>n,contentTitle:()=>u,default:()=>f,assets:()=>c,toc:()=>d,frontMatter:()=>s});var n=JSON.parse('{"id":"babel-plugin-proposal-export-default-from","title":"@babel/plugin-proposal-export-default-from","description":"Example","source":"@site/../docs/plugin-proposal-export-default-from.md","sourceDirName":".","slug":"/babel-plugin-proposal-export-default-from","permalink":"/babel-website/docs/babel-plugin-proposal-export-default-from","draft":false,"unlisted":false,"editUrl":"https://github.com/babel/website/edit/main/docs/../docs/plugin-proposal-export-default-from.md","tags":[],"version":"current","frontMatter":{"id":"babel-plugin-proposal-export-default-from","title":"@babel/plugin-proposal-export-default-from","sidebar_label":"export-default-from"},"sidebar":"plugins","previous":{"title":"do-expressions","permalink":"/babel-website/docs/babel-plugin-proposal-do-expressions"},"next":{"title":"function-bind","permalink":"/babel-website/docs/babel-plugin-proposal-function-bind"}}'),a=l("24246"),t=l("80980"),o=l("95181"),i=l("38049");let s={id:"babel-plugin-proposal-export-default-from",title:"@babel/plugin-proposal-export-default-from",sidebar_label:"export-default-from"},u=void 0,c={},d=[{value:"Example",id:"example",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"With a configuration file (Recommended)",id:"with-a-configuration-file-recommended",level:3},{value:"Via CLI",id:"via-cli",level:3},{value:"Via Node API",id:"via-node-api",level:3},{value:"References",id:"references",level:2}];function p(e){let r={a:"a",code:"code",del:"del",h2:"h2",h3:"h3",li:"li",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",metastring:'title="JavaScript"',children:'export v from "mod";\n'})}),"\n",(0,a.jsx)(r.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsxs)(o.Z,{groupId:"npm2yarn",children:[(0,a.jsx)(i.Z,{value:"npm",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",children:"npm install --save-dev @babel/plugin-proposal-export-default-from\n"})})}),(0,a.jsx)(i.Z,{value:"yarn",label:"Yarn",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",children:"yarn add --dev @babel/plugin-proposal-export-default-from\n"})})}),(0,a.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",children:"pnpm add --save-dev @babel/plugin-proposal-export-default-from\n"})})})]}),"\n",(0,a.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(r.h3,{id:"with-a-configuration-file-recommended",children:"With a configuration file (Recommended)"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-json",metastring:'title="babel.config.json"',children:'{\n  "plugins": ["@babel/plugin-proposal-export-default-from"]\n}\n'})}),"\n",(0,a.jsx)(r.h3,{id:"via-cli",children:"Via CLI"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sh",metastring:'title="Shell"',children:"babel --plugins @babel/plugin-proposal-export-default-from script.js\n"})}),"\n",(0,a.jsx)(r.h3,{id:"via-node-api",children:"Via Node API"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",metastring:'title="JavaScript"',children:'require("@babel/core").transformSync("code", {\n  plugins: ["@babel/plugin-proposal-export-default-from"],\n});\n'})}),"\n",(0,a.jsx)(r.h2,{id:"references",children:"References"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.del,{children:(0,a.jsx)(r.a,{href:"https://github.com/leebyron/ecmascript-more-export-from",children:"Proposal: Additional export-from statements in ES7"})})," (Withdrawn)"]}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"https://github.com/leebyron/ecmascript-export-default-from",children:"ECMAScript Proposal: export default from"})}),"\n"]})]})}function f(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},38049:function(e,r,l){l.d(r,{Z:()=>o});var n=l("24246");l("27378");var a=l("90496");let t="tabItem_wHwb";function o(e){let{children:r,hidden:l,className:o}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,a.Z)(t,o),hidden:l,children:r})}},95181:function(e,r,l){l.d(r,{Z:()=>j});var n=l("24246"),a=l("27378"),t=l("90496"),o=l("85403"),i=l("3620"),s=l("77090"),u=l("76180"),c=l("23418"),d=l("19073");function p(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||a.isValidElement(e)&&function(e){let{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function f(e){let{value:r,tabValues:l}=e;return l.some(e=>e.value===r)}var m=l("3344");let h="tabList_J5MA",b="tabItem_l0OV";function x(e){let{className:r,block:l,selectedValue:a,selectValue:i,tabValues:s}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{let r=e.currentTarget,l=s[u.indexOf(r)].value;l!==a&&(c(r),i(l))},p=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let l=u.indexOf(e.currentTarget)+1;r=u[l]??u[0];break}case"ArrowLeft":{let l=u.indexOf(e.currentTarget)-1;r=u[l]??u[u.length-1]}}r?.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":l},r),children:s.map(e=>{let{value:r,label:l,attributes:o}=e;return(0,n.jsx)("li",{role:"tab",tabIndex:a===r?0:-1,"aria-selected":a===r,ref:e=>u.push(e),onKeyDown:p,onClick:d,...o,className:(0,t.Z)("tabs__item",b,o?.className,{"tabs__item--active":a===r}),children:l??r},r)})})}function g(e){let{lazy:r,children:l,selectedValue:o}=e,i=(Array.isArray(l)?l:[l]).filter(Boolean);if(r){let e=i.find(e=>e.props.value===o);return e?(0,a.cloneElement)(e,{className:(0,t.Z)("margin-top--md",e.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:i.map((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==o}))})}function v(e){let r=function(e){let{defaultValue:r,queryString:l=!1,groupId:n}=e,t=function(e){let{values:r,children:l}=e;return(0,a.useMemo)(()=>{let e=r??p(l).map(e=>{let{props:{value:r,label:l,attributes:n,default:a}}=e;return{value:r,label:l,attributes:n,default:a}});return!function(e){let r=(0,c.lx)(e,(e,r)=>e.value===r.value);if(r.length>0)throw Error(`Docusaurus error: Duplicate values "${r.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[r,l])}(e),[o,m]=(0,a.useState)(()=>(function(e){let{defaultValue:r,tabValues:l}=e;if(0===l.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!f({value:r,tabValues:l}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${l.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}let n=l.find(e=>e.default)??l[0];if(!n)throw Error("Unexpected error: 0 tabValues");return n.value})({defaultValue:r,tabValues:t})),[h,b]=function(e){let{queryString:r=!1,groupId:l}=e,n=(0,i.k6)(),t=function(e){let{queryString:r=!1,groupId:l}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!l)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:r,groupId:l}),o=(0,u._X)(t);return[o,(0,a.useCallback)(e=>{if(!t)return;let r=new URLSearchParams(n.location.search);r.set(t,e),n.replace({...n.location,search:r.toString()})},[t,n])]}({queryString:l,groupId:n}),[x,g]=function(e){var r;let{groupId:l}=e;let n=(r=l)?`docusaurus.tab.${r}`:null,[t,o]=(0,d.Nk)(n);return[t,(0,a.useCallback)(e=>{if(!!n)o.set(e)},[n,o])]}({groupId:n}),v=(()=>{let e=h??x;return f({value:e,tabValues:t})?e:null})();return(0,s.Z)(()=>{v&&m(v)},[v]),{selectedValue:o,selectValue:(0,a.useCallback)(e=>{if(!f({value:e,tabValues:t}))throw Error(`Can't select invalid tab value=${e}`);m(e),b(e),g(e)},[b,g,t]),tabValues:t}}(e);return(0,n.jsxs)("div",{className:(0,t.Z)("tabs-container",h),children:[(0,n.jsx)(x,{...r,...e}),(0,n.jsx)(g,{...r,...e})]})}function j(e){let r=(0,m.Z)();return(0,n.jsx)(v,{...e,children:p(e.children)},String(r))}},80980:function(e,r,l){l.d(r,{Z:function(){return i},a:function(){return o}});var n=l(27378);let a={},t=n.createContext(a);function o(e){let r=n.useContext(t);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);