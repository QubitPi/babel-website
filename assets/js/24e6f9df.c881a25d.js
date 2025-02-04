"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["3758"],{34756:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>c,default:()=>h,assets:()=>u,toc:()=>d,frontMatter:()=>o});var a=JSON.parse('{"id":"babel-plugin-syntax-explicit-resource-management","title":"@babel/plugin-syntax-explicit-resource-management","description":"Syntax only","source":"@site/../docs/plugin-syntax-explicit-resource-management.md","sourceDirName":".","slug":"/babel-plugin-syntax-explicit-resource-management","permalink":"/docs/babel-plugin-syntax-explicit-resource-management","draft":false,"unlisted":false,"editUrl":"https://github.com/babel/website/edit/main/docs/../docs/plugin-syntax-explicit-resource-management.md","tags":[],"version":"current","frontMatter":{"id":"babel-plugin-syntax-explicit-resource-management","title":"@babel/plugin-syntax-explicit-resource-management","sidebar_label":"syntax-explicit-resource-management"}}'),r=t("24246"),l=t("80980"),i=t("95181"),s=t("38049");let o={id:"babel-plugin-syntax-explicit-resource-management",title:"@babel/plugin-syntax-explicit-resource-management",sidebar_label:"syntax-explicit-resource-management"},c=void 0,u={},d=[{value:"Syntax only",id:"syntax-only",level:4},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"With a configuration file (Recommended)",id:"with-a-configuration-file-recommended",level:3},{value:"Via CLI",id:"via-cli",level:3},{value:"Via Node API",id:"via-node-api",level:3},{value:"Reference",id:"reference",level:2}];function p(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{Details:t}=n;return!t&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsx)(n.h4,{id:"syntax-only",children:"Syntax only"}),(0,r.jsxs)(n.p,{children:["It's unlikely you want to use this plugin directly as it only enables Babel to parse this syntax. Instead, use ",(0,r.jsx)(n.a,{href:"/docs/babel-plugin-proposal-explicit-resource-management",children:"plugin-proposal-explicit-resource-management"})," to ",(0,r.jsx)(n.em,{children:"both"})," parse and transform this syntax."]})]}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"History"}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Version"}),(0,r.jsx)(n.th,{children:"Changes"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"v7.22.0"}),(0,r.jsxs)(n.td,{children:["Supports ",(0,r.jsx)(n.code,{children:"await using"})]})]})})]})]}),"\n",(0,r.jsx)(n.p,{children:"This plugin enables Babel to parse using declarations:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:"using handler = await read();\nawait using handler = await read();\n"})}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(s.Z,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"npm install --save-dev @babel/plugin-syntax-explicit-resource-management\n"})})}),(0,r.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"yarn add --dev @babel/plugin-syntax-explicit-resource-management\n"})})}),(0,r.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"pnpm add --save-dev @babel/plugin-syntax-explicit-resource-management\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.h3,{id:"with-a-configuration-file-recommended",children:"With a configuration file (Recommended)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="babel.config.json"',children:'{\n  "plugins": ["@babel/plugin-syntax-explicit-resource-management"]\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"via-cli",children:"Via CLI"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"babel --plugins @babel/plugin-syntax-explicit-resource-management script.js\n"})}),"\n",(0,r.jsx)(n.h3,{id:"via-node-api",children:"Via Node API"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'require("@babel/core").transformSync("code", {\n  plugins: ["@babel/plugin-syntax-explicit-resource-management"]\n});\n'})}),"\n",(0,r.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/tc39/proposal-explicit-resource-management",children:"Proposal: ECMAScript Explicit Resource Management"})}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},38049:function(e,n,t){t.d(n,{Z:()=>i});var a=t("24246");t("27378");var r=t("90496");let l="tabItem_wHwb";function i(e){let{children:n,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:t,children:n})}},95181:function(e,n,t){t.d(n,{Z:()=>y});var a=t("24246"),r=t("27378"),l=t("90496"),i=t("85403"),s=t("3620"),o=t("77090"),c=t("76180"),u=t("23418"),d=t("19073");function p(e){return r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||r.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var m=t("3344");let x="tabList_J5MA",b="tabItem_l0OV";function g(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:o}=e,c=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),d=e=>{let n=e.currentTarget,t=o[c.indexOf(n)].value;t!==r&&(u(n),s(t))},p=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{let t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1]}}n?.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n),children:o.map(e=>{let{value:n,label:t,attributes:i}=e;return(0,a.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:p,onClick:d,...i,className:(0,l.Z)("tabs__item",b,i?.className,{"tabs__item--active":r===n}),children:t??n},n)})})}function f(e){let{lazy:n,children:t,selectedValue:i}=e,s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=s.find(e=>e.props.value===i);return e?(0,r.cloneElement)(e,{className:(0,l.Z)("margin-top--md",e.props.className)}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:s.map((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i}))})}function v(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:a}=e,l=function(e){let{values:n,children:t}=e;return(0,r.useMemo)(()=>{let e=n??p(t).map(e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}});return!function(e){let n=(0,u.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[i,m]=(0,r.useState)(()=>(function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let a=t.find(e=>e.default)??t[0];if(!a)throw Error("Unexpected error: 0 tabValues");return a.value})({defaultValue:n,tabValues:l})),[x,b]=function(e){let{queryString:n=!1,groupId:t}=e,a=(0,s.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t}),i=(0,c._X)(l);return[i,(0,r.useCallback)(e=>{if(!l)return;let n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})},[l,a])]}({queryString:t,groupId:a}),[g,f]=function(e){var n;let{groupId:t}=e;let a=(n=t)?`docusaurus.tab.${n}`:null,[l,i]=(0,d.Nk)(a);return[l,(0,r.useCallback)(e=>{if(!!a)i.set(e)},[a,i])]}({groupId:a}),v=(()=>{let e=x??g;return h({value:e,tabValues:l})?e:null})();return(0,o.Z)(()=>{v&&m(v)},[v]),{selectedValue:i,selectValue:(0,r.useCallback)(e=>{if(!h({value:e,tabValues:l}))throw Error(`Can't select invalid tab value=${e}`);m(e),b(e),f(e)},[b,f,l]),tabValues:l}}(e);return(0,a.jsxs)("div",{className:(0,l.Z)("tabs-container",x),children:[(0,a.jsx)(g,{...n,...e}),(0,a.jsx)(f,{...n,...e})]})}function y(e){let n=(0,m.Z)();return(0,a.jsx)(v,{...e,children:p(e.children)},String(n))}},80980:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return i}});var a=t(27378);let r={},l=a.createContext(r);function i(e){let n=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);