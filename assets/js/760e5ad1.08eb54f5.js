"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["202"],{11449:function(e,r,t){t.r(r),t.d(r,{metadata:()=>n,contentTitle:()=>u,default:()=>h,assets:()=>c,toc:()=>d,frontMatter:()=>o});var n=JSON.parse('{"id":"babel-preset-es2017","title":"@babel/preset-es2017","description":"As of Babel v6, all the yearly presets have been deprecated.","source":"@site/../docs/preset-es2017.md","sourceDirName":".","slug":"/babel-preset-es2017","permalink":"/docs/babel-preset-es2017","draft":false,"unlisted":false,"editUrl":"https://github.com/babel/website/edit/main/docs/../docs/preset-es2017.md","tags":[],"version":"current","frontMatter":{"id":"babel-preset-es2017","title":"@babel/preset-es2017","sidebar_label":"es2017"}}'),a=t("24246"),l=t("80980"),s=t("95181"),i=t("38049");let o={id:"babel-preset-es2017",title:"@babel/preset-es2017",sidebar_label:"es2017"},u=void 0,c={},d=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"With a configuration file (Recommended)",id:"with-a-configuration-file-recommended",level:3},{value:"Via CLI",id:"via-cli",level:3},{value:"Via Node API",id:"via-node-api",level:3}];function p(e){let r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.admonition,{type:"danger",children:(0,a.jsxs)(r.p,{children:["As of Babel v6, all the yearly presets have been deprecated.\nWe recommend using ",(0,a.jsx)(r.a,{href:"/docs/babel-preset-env",children:(0,a.jsx)(r.code,{children:"@babel/preset-env"})})," instead."]})}),"\n",(0,a.jsx)(r.h2,{id:"install",children:"Install"}),"\n",(0,a.jsxs)(s.Z,{groupId:"npm2yarn",children:[(0,a.jsx)(i.Z,{value:"npm",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",children:"npm install --save-dev @babel/preset-es2017\n"})})}),(0,a.jsx)(i.Z,{value:"yarn",label:"Yarn",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",children:"yarn add --dev @babel/preset-es2017\n"})})}),(0,a.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",children:"pnpm add --save-dev @babel/preset-es2017\n"})})})]}),"\n",(0,a.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(r.h3,{id:"with-a-configuration-file-recommended",children:"With a configuration file (Recommended)"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-json",metastring:'title="babel.config.json"',children:'{\n  "presets": ["@babel/preset-es2017"]\n}\n'})}),"\n",(0,a.jsx)(r.h3,{id:"via-cli",children:"Via CLI"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sh",metastring:'title="Shell"',children:"babel script.js --presets @babel/preset-es2017\n"})}),"\n",(0,a.jsx)(r.h3,{id:"via-node-api",children:"Via Node API"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",metastring:'title="JavaScript"',children:'require("@babel/core").transformSync("code", {\n  presets: ["@babel/preset-es2017"]\n});\n'})})]})}function h(e={}){let{wrapper:r}={...(0,l.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},38049:function(e,r,t){t.d(r,{Z:()=>s});var n=t("24246");t("27378");var a=t("90496");let l="tabItem_wHwb";function s(e){let{children:r,hidden:t,className:s}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,a.Z)(l,s),hidden:t,children:r})}},95181:function(e,r,t){t.d(r,{Z:()=>j});var n=t("24246"),a=t("27378"),l=t("90496"),s=t("85403"),i=t("3620"),o=t("77090"),u=t("76180"),c=t("23418"),d=t("19073");function p(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||a.isValidElement(e)&&function(e){let{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:r,tabValues:t}=e;return t.some(e=>e.value===r)}var b=t("3344");let f="tabList_J5MA",m="tabItem_l0OV";function v(e){let{className:r,block:t,selectedValue:a,selectValue:i,tabValues:o}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{let r=e.currentTarget,t=o[u.indexOf(r)].value;t!==a&&(c(r),i(t))},p=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let t=u.indexOf(e.currentTarget)+1;r=u[t]??u[0];break}case"ArrowLeft":{let t=u.indexOf(e.currentTarget)-1;r=u[t]??u[u.length-1]}}r?.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},r),children:o.map(e=>{let{value:r,label:t,attributes:s}=e;return(0,n.jsx)("li",{role:"tab",tabIndex:a===r?0:-1,"aria-selected":a===r,ref:e=>u.push(e),onKeyDown:p,onClick:d,...s,className:(0,l.Z)("tabs__item",m,s?.className,{"tabs__item--active":a===r}),children:t??r},r)})})}function g(e){let{lazy:r,children:t,selectedValue:s}=e,i=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){let e=i.find(e=>e.props.value===s);return e?(0,a.cloneElement)(e,{className:(0,l.Z)("margin-top--md",e.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:i.map((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==s}))})}function x(e){let r=function(e){let{defaultValue:r,queryString:t=!1,groupId:n}=e,l=function(e){let{values:r,children:t}=e;return(0,a.useMemo)(()=>{let e=r??p(t).map(e=>{let{props:{value:r,label:t,attributes:n,default:a}}=e;return{value:r,label:t,attributes:n,default:a}});return!function(e){let r=(0,c.lx)(e,(e,r)=>e.value===r.value);if(r.length>0)throw Error(`Docusaurus error: Duplicate values "${r.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[r,t])}(e),[s,b]=(0,a.useState)(()=>(function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}let n=t.find(e=>e.default)??t[0];if(!n)throw Error("Unexpected error: 0 tabValues");return n.value})({defaultValue:r,tabValues:l})),[f,m]=function(e){let{queryString:r=!1,groupId:t}=e,n=(0,i.k6)(),l=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t}),s=(0,u._X)(l);return[s,(0,a.useCallback)(e=>{if(!l)return;let r=new URLSearchParams(n.location.search);r.set(l,e),n.replace({...n.location,search:r.toString()})},[l,n])]}({queryString:t,groupId:n}),[v,g]=function(e){var r;let{groupId:t}=e;let n=(r=t)?`docusaurus.tab.${r}`:null,[l,s]=(0,d.Nk)(n);return[l,(0,a.useCallback)(e=>{if(!!n)s.set(e)},[n,s])]}({groupId:n}),x=(()=>{let e=f??v;return h({value:e,tabValues:l})?e:null})();return(0,o.Z)(()=>{x&&b(x)},[x]),{selectedValue:s,selectValue:(0,a.useCallback)(e=>{if(!h({value:e,tabValues:l}))throw Error(`Can't select invalid tab value=${e}`);b(e),m(e),g(e)},[m,g,l]),tabValues:l}}(e);return(0,n.jsxs)("div",{className:(0,l.Z)("tabs-container",f),children:[(0,n.jsx)(v,{...r,...e}),(0,n.jsx)(g,{...r,...e})]})}function j(e){let r=(0,b.Z)();return(0,n.jsx)(x,{...e,children:p(e.children)},String(r))}},80980:function(e,r,t){t.d(r,{Z:function(){return i},a:function(){return s}});var n=t(27378);let a={},l=n.createContext(a);function s(e){let r=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(l.Provider,{value:r},e.children)}}}]);