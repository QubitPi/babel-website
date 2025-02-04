"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["3430"],{12104:function(e,n,a){a.r(n),a.d(n,{metadata:()=>l,contentTitle:()=>u,default:()=>h,assets:()=>c,toc:()=>d,frontMatter:()=>o});var l=JSON.parse('{"id":"babel-plugin-syntax-nullish-coalescing-operator","title":"@babel/plugin-syntax-nullish-coalescing-operator","description":"Syntax only","source":"@site/../docs/plugin-syntax-nullish-coalescing-operator.md","sourceDirName":".","slug":"/babel-plugin-syntax-nullish-coalescing-operator","permalink":"/babel-website/docs/babel-plugin-syntax-nullish-coalescing-operator","draft":false,"unlisted":false,"editUrl":"https://github.com/babel/website/edit/main/docs/../docs/plugin-syntax-nullish-coalescing-operator.md","tags":[],"version":"current","frontMatter":{"id":"babel-plugin-syntax-nullish-coalescing-operator","title":"@babel/plugin-syntax-nullish-coalescing-operator","sidebar_label":"syntax-nullish-coalescing-operator"}}'),t=a("24246"),r=a("80980"),i=a("95181"),s=a("38049");let o={id:"babel-plugin-syntax-nullish-coalescing-operator",title:"@babel/plugin-syntax-nullish-coalescing-operator",sidebar_label:"syntax-nullish-coalescing-operator"},u=void 0,c={},d=[{value:"Syntax only",id:"syntax-only",level:4},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"With a configuration file (Recommended)",id:"with-a-configuration-file-recommended",level:3},{value:"Via CLI",id:"via-cli",level:3},{value:"Via Node API",id:"via-node-api",level:3}];function p(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.h4,{id:"syntax-only",children:"Syntax only"}),(0,t.jsxs)(n.p,{children:["It's unlikely you want to use this plugin directly as it only enables Babel to parse this syntax. Instead, use ",(0,t.jsx)(n.a,{href:"/babel-website/docs/babel-plugin-transform-nullish-coalescing-operator",children:"plugin-transform-nullish-coalescing-operator"})," to ",(0,t.jsx)(n.em,{children:"both"})," parse and transform this syntax."]})]}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(s.Z,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"npm install --save-dev @babel/plugin-syntax-nullish-coalescing-operator\n"})})}),(0,t.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"yarn add --dev @babel/plugin-syntax-nullish-coalescing-operator\n"})})}),(0,t.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"pnpm add --save-dev @babel/plugin-syntax-nullish-coalescing-operator\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.h3,{id:"with-a-configuration-file-recommended",children:"With a configuration file (Recommended)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="babel.config.json"',children:'{\n  "plugins": ["@babel/plugin-syntax-nullish-coalescing-operator"]\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"via-cli",children:"Via CLI"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"babel --plugins @babel/plugin-syntax-nullish-coalescing-operator script.js\n"})}),"\n",(0,t.jsx)(n.h3,{id:"via-node-api",children:"Via Node API"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'require("@babel/core").transformSync("code", {\n  plugins: ["@babel/plugin-syntax-nullish-coalescing-operator"]\n});\n'})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},38049:function(e,n,a){a.d(n,{Z:()=>i});var l=a("24246");a("27378");var t=a("90496");let r="tabItem_wHwb";function i(e){let{children:n,hidden:a,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r,i),hidden:a,children:n})}},95181:function(e,n,a){a.d(n,{Z:()=>y});var l=a("24246"),t=a("27378"),r=a("90496"),i=a("85403"),s=a("3620"),o=a("77090"),u=a("76180"),c=a("23418"),d=a("19073");function p(e){return t.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||t.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:n,tabValues:a}=e;return a.some(e=>e.value===n)}var b=a("3344");let f="tabList_J5MA",m="tabItem_l0OV";function g(e){let{className:n,block:a,selectedValue:t,selectValue:s,tabValues:o}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{let n=e.currentTarget,a=o[u.indexOf(n)].value;a!==t&&(c(n),s(a))},p=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let a=u.indexOf(e.currentTarget)+1;n=u[a]??u[0];break}case"ArrowLeft":{let a=u.indexOf(e.currentTarget)-1;n=u[a]??u[u.length-1]}}n?.focus()};return(0,l.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},n),children:o.map(e=>{let{value:n,label:a,attributes:i}=e;return(0,l.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>u.push(e),onKeyDown:p,onClick:d,...i,className:(0,r.Z)("tabs__item",m,i?.className,{"tabs__item--active":t===n}),children:a??n},n)})})}function x(e){let{lazy:n,children:a,selectedValue:i}=e,s=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){let e=s.find(e=>e.props.value===i);return e?(0,t.cloneElement)(e,{className:(0,r.Z)("margin-top--md",e.props.className)}):null}return(0,l.jsx)("div",{className:"margin-top--md",children:s.map((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==i}))})}function v(e){let n=function(e){let{defaultValue:n,queryString:a=!1,groupId:l}=e,r=function(e){let{values:n,children:a}=e;return(0,t.useMemo)(()=>{let e=n??p(a).map(e=>{let{props:{value:n,label:a,attributes:l,default:t}}=e;return{value:n,label:a,attributes:l,default:t}});return!function(e){let n=(0,c.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,a])}(e),[i,b]=(0,t.useState)(()=>(function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:a}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let l=a.find(e=>e.default)??a[0];if(!l)throw Error("Unexpected error: 0 tabValues");return l.value})({defaultValue:n,tabValues:r})),[f,m]=function(e){let{queryString:n=!1,groupId:a}=e,l=(0,s.k6)(),r=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a}),i=(0,u._X)(r);return[i,(0,t.useCallback)(e=>{if(!r)return;let n=new URLSearchParams(l.location.search);n.set(r,e),l.replace({...l.location,search:n.toString()})},[r,l])]}({queryString:a,groupId:l}),[g,x]=function(e){var n;let{groupId:a}=e;let l=(n=a)?`docusaurus.tab.${n}`:null,[r,i]=(0,d.Nk)(l);return[r,(0,t.useCallback)(e=>{if(!!l)i.set(e)},[l,i])]}({groupId:l}),v=(()=>{let e=f??g;return h({value:e,tabValues:r})?e:null})();return(0,o.Z)(()=>{v&&b(v)},[v]),{selectedValue:i,selectValue:(0,t.useCallback)(e=>{if(!h({value:e,tabValues:r}))throw Error(`Can't select invalid tab value=${e}`);b(e),m(e),x(e)},[m,x,r]),tabValues:r}}(e);return(0,l.jsxs)("div",{className:(0,r.Z)("tabs-container",f),children:[(0,l.jsx)(g,{...n,...e}),(0,l.jsx)(x,{...n,...e})]})}function y(e){let n=(0,b.Z)();return(0,l.jsx)(v,{...e,children:p(e.children)},String(n))}},80980:function(e,n,a){a.d(n,{Z:function(){return s},a:function(){return i}});var l=a(27378);let t={},r=l.createContext(t);function i(e){let n=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);