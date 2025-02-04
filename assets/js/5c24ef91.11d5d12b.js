"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["1573"],{59910:function(e,n,a){a.r(n),a.d(n,{metadata:()=>t,contentTitle:()=>u,default:()=>h,assets:()=>c,toc:()=>d,frontMatter:()=>o});var t=JSON.parse('{"id":"babel-plugin-syntax-class-properties","title":"@babel/plugin-syntax-class-properties","description":"Syntax only","source":"@site/../docs/plugin-syntax-class-properties.md","sourceDirName":".","slug":"/babel-plugin-syntax-class-properties","permalink":"/docs/babel-plugin-syntax-class-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/babel/website/edit/main/docs/../docs/plugin-syntax-class-properties.md","tags":[],"version":"current","frontMatter":{"id":"babel-plugin-syntax-class-properties","title":"@babel/plugin-syntax-class-properties","sidebar_label":"syntax-class-properties"}}'),r=a("24246"),l=a("80980"),s=a("95181"),i=a("38049");let o={id:"babel-plugin-syntax-class-properties",title:"@babel/plugin-syntax-class-properties",sidebar_label:"syntax-class-properties"},u=void 0,c={},d=[{value:"Syntax only",id:"syntax-only",level:4},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"With a configuration file (Recommended)",id:"with-a-configuration-file-recommended",level:3},{value:"Via CLI",id:"via-cli",level:3},{value:"Via Node API",id:"via-node-api",level:3}];function p(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsx)(n.h4,{id:"syntax-only",children:"Syntax only"}),(0,r.jsxs)(n.p,{children:["It's unlikely you want to use this plugin directly as it only enables Babel to parse this syntax. Instead, use ",(0,r.jsx)(n.a,{href:"/docs/babel-plugin-transform-class-properties",children:"plugin-transform-class-properties"})," to ",(0,r.jsx)(n.em,{children:"both"})," parse and transform this syntax."]})]}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(s.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(i.Z,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"npm install --save-dev @babel/plugin-syntax-class-properties\n"})})}),(0,r.jsx)(i.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"yarn add --dev @babel/plugin-syntax-class-properties\n"})})}),(0,r.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"pnpm add --save-dev @babel/plugin-syntax-class-properties\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.h3,{id:"with-a-configuration-file-recommended",children:"With a configuration file (Recommended)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="babel.config.json"',children:'{\n  "plugins": ["@babel/plugin-syntax-class-properties"]\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"via-cli",children:"Via CLI"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"babel --plugins @babel/plugin-syntax-class-properties script.js\n"})}),"\n",(0,r.jsx)(n.h3,{id:"via-node-api",children:"Via Node API"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'require("@babel/core").transformSync("code", {\n  plugins: ["@babel/plugin-syntax-class-properties"]\n});\n'})})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},38049:function(e,n,a){a.d(n,{Z:()=>s});var t=a("24246");a("27378");var r=a("90496");let l="tabItem_wHwb";function s(e){let{children:n,hidden:a,className:s}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,r.Z)(l,s),hidden:a,children:n})}},95181:function(e,n,a){a.d(n,{Z:()=>y});var t=a("24246"),r=a("27378"),l=a("90496"),s=a("85403"),i=a("3620"),o=a("77090"),u=a("76180"),c=a("23418"),d=a("19073");function p(e){return r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||r.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:n,tabValues:a}=e;return a.some(e=>e.value===n)}var b=a("3344");let f="tabList_J5MA",m="tabItem_l0OV";function x(e){let{className:n,block:a,selectedValue:r,selectValue:i,tabValues:o}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{let n=e.currentTarget,a=o[u.indexOf(n)].value;a!==r&&(c(n),i(a))},p=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let a=u.indexOf(e.currentTarget)+1;n=u[a]??u[0];break}case"ArrowLeft":{let a=u.indexOf(e.currentTarget)-1;n=u[a]??u[u.length-1]}}n?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},n),children:o.map(e=>{let{value:n,label:a,attributes:s}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>u.push(e),onKeyDown:p,onClick:d,...s,className:(0,l.Z)("tabs__item",m,s?.className,{"tabs__item--active":r===n}),children:a??n},n)})})}function g(e){let{lazy:n,children:a,selectedValue:s}=e,i=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){let e=i.find(e=>e.props.value===s);return e?(0,r.cloneElement)(e,{className:(0,l.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:i.map((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s}))})}function v(e){let n=function(e){let{defaultValue:n,queryString:a=!1,groupId:t}=e,l=function(e){let{values:n,children:a}=e;return(0,r.useMemo)(()=>{let e=n??p(a).map(e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}});return!function(e){let n=(0,c.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,a])}(e),[s,b]=(0,r.useState)(()=>(function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:a}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let t=a.find(e=>e.default)??a[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:n,tabValues:l})),[f,m]=function(e){let{queryString:n=!1,groupId:a}=e,t=(0,i.k6)(),l=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a}),s=(0,u._X)(l);return[s,(0,r.useCallback)(e=>{if(!l)return;let n=new URLSearchParams(t.location.search);n.set(l,e),t.replace({...t.location,search:n.toString()})},[l,t])]}({queryString:a,groupId:t}),[x,g]=function(e){var n;let{groupId:a}=e;let t=(n=a)?`docusaurus.tab.${n}`:null,[l,s]=(0,d.Nk)(t);return[l,(0,r.useCallback)(e=>{if(!!t)s.set(e)},[t,s])]}({groupId:t}),v=(()=>{let e=f??x;return h({value:e,tabValues:l})?e:null})();return(0,o.Z)(()=>{v&&b(v)},[v]),{selectedValue:s,selectValue:(0,r.useCallback)(e=>{if(!h({value:e,tabValues:l}))throw Error(`Can't select invalid tab value=${e}`);b(e),m(e),g(e)},[m,g,l]),tabValues:l}}(e);return(0,t.jsxs)("div",{className:(0,l.Z)("tabs-container",f),children:[(0,t.jsx)(x,{...n,...e}),(0,t.jsx)(g,{...n,...e})]})}function y(e){let n=(0,b.Z)();return(0,t.jsx)(v,{...e,children:p(e.children)},String(n))}},80980:function(e,n,a){a.d(n,{Z:function(){return i},a:function(){return s}});var t=a(27378);let r={},l=t.createContext(r);function s(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);