"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7339"],{46080:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>u,default:()=>p,assets:()=>c,toc:()=>d,frontMatter:()=>o});var i=JSON.parse('{"id":"babel-plugin-syntax-bigint","title":"@babel/plugin-syntax-bigint","description":"This plugin is included in @babel/preset-env, in ES2020","source":"@site/../docs/plugin-syntax-bigint.md","sourceDirName":".","slug":"/babel-plugin-syntax-bigint","permalink":"/babel-website/docs/babel-plugin-syntax-bigint","draft":false,"unlisted":false,"editUrl":"https://github.com/babel/website/edit/main/docs/../docs/plugin-syntax-bigint.md","tags":[],"version":"current","frontMatter":{"id":"babel-plugin-syntax-bigint","title":"@babel/plugin-syntax-bigint","sidebar_label":"syntax-bigint"},"sidebar":"docs","previous":{"title":"optional-chaining","permalink":"/babel-website/docs/babel-plugin-transform-optional-chaining"},"next":{"title":"syntax-dynamic-import","permalink":"/babel-website/docs/babel-plugin-syntax-dynamic-import"}}'),a=t("24246"),l=t("80980"),r=t("95181"),s=t("38049");let o={id:"babel-plugin-syntax-bigint",title:"@babel/plugin-syntax-bigint",sidebar_label:"syntax-bigint"},u=void 0,c={},d=[{value:"Syntax only",id:"syntax-only",level:4},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"With a configuration file (Recommended)",id:"with-a-configuration-file-recommended",level:3},{value:"Via CLI",id:"via-cli",level:3},{value:"Via Node API",id:"via-node-api",level:3},{value:"References",id:"references",level:2}];function b(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["This plugin is included in ",(0,a.jsx)(n.code,{children:"@babel/preset-env"}),", in ",(0,a.jsx)(n.a,{href:"https://github.com/tc39/proposals/blob/master/finished-proposals.md",children:"ES2020"})]})}),"\n",(0,a.jsxs)(n.admonition,{type:"note",children:[(0,a.jsx)(n.h4,{id:"syntax-only",children:"Syntax only"}),(0,a.jsxs)(n.p,{children:["This plugin only enables parsing of this feature. Babel doesn't support transforming BigInts. One recommendation is to use the JSBI library and eventually run ",(0,a.jsx)(n.code,{children:"babel-plugin-transform-jsbi-to-bigint"})," to codemod it to BigInt in the future."]})]}),"\n",(0,a.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsxs)(r.Z,{groupId:"npm2yarn",children:[(0,a.jsx)(s.Z,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"npm install --save-dev @babel/plugin-syntax-bigint\n"})})}),(0,a.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"yarn add --dev @babel/plugin-syntax-bigint\n"})})}),(0,a.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"pnpm add --save-dev @babel/plugin-syntax-bigint\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n.h3,{id:"with-a-configuration-file-recommended",children:"With a configuration file (Recommended)"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",metastring:'title="babel.config.json"',children:'{\n  "plugins": ["@babel/plugin-syntax-bigint"]\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"via-cli",children:"Via CLI"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"babel --plugins @babel/plugin-syntax-bigint script.js\n"})}),"\n",(0,a.jsx)(n.h3,{id:"via-node-api",children:"Via Node API"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'require("@babel/core").transformSync("code", {\n  plugins: ["@babel/plugin-syntax-bigint"],\n});\n'})}),"\n",(0,a.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/tc39/proposal-bigint",children:"proposal-bigint"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://v8.dev/features/bigint#polyfilling-transpiling",children:"BigInt from v8.dev"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/GoogleChromeLabs/babel-plugin-transform-jsbi-to-bigint",children:"babel-plugin-transform-jsbi-to-bigint"})}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(b,{...e})}):b(e)}},38049:function(e,n,t){t.d(n,{Z:()=>r});var i=t("24246");t("27378");var a=t("90496");let l="tabItem_wHwb";function r(e){let{children:n,hidden:t,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(l,r),hidden:t,children:n})}},95181:function(e,n,t){t.d(n,{Z:()=>y});var i=t("24246"),a=t("27378"),l=t("90496"),r=t("85403"),s=t("3620"),o=t("77090"),u=t("76180"),c=t("23418"),d=t("19073");function b(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||a.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var h=t("3344");let g="tabList_J5MA",f="tabItem_l0OV";function m(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:o}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),d=e=>{let n=e.currentTarget,t=o[u.indexOf(n)].value;t!==a&&(c(n),s(t))},b=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{let t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1]}}n?.focus()};return(0,i.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n),children:o.map(e=>{let{value:n,label:t,attributes:r}=e;return(0,i.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>u.push(e),onKeyDown:b,onClick:d,...r,className:(0,l.Z)("tabs__item",f,r?.className,{"tabs__item--active":a===n}),children:t??n},n)})})}function x(e){let{lazy:n,children:t,selectedValue:r}=e,s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=s.find(e=>e.props.value===r);return e?(0,a.cloneElement)(e,{className:(0,l.Z)("margin-top--md",e.props.className)}):null}return(0,i.jsx)("div",{className:"margin-top--md",children:s.map((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r}))})}function v(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:i}=e,l=function(e){let{values:n,children:t}=e;return(0,a.useMemo)(()=>{let e=n??b(t).map(e=>{let{props:{value:n,label:t,attributes:i,default:a}}=e;return{value:n,label:t,attributes:i,default:a}});return!function(e){let n=(0,c.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[r,h]=(0,a.useState)(()=>(function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let i=t.find(e=>e.default)??t[0];if(!i)throw Error("Unexpected error: 0 tabValues");return i.value})({defaultValue:n,tabValues:l})),[g,f]=function(e){let{queryString:n=!1,groupId:t}=e,i=(0,s.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t}),r=(0,u._X)(l);return[r,(0,a.useCallback)(e=>{if(!l)return;let n=new URLSearchParams(i.location.search);n.set(l,e),i.replace({...i.location,search:n.toString()})},[l,i])]}({queryString:t,groupId:i}),[m,x]=function(e){var n;let{groupId:t}=e;let i=(n=t)?`docusaurus.tab.${n}`:null,[l,r]=(0,d.Nk)(i);return[l,(0,a.useCallback)(e=>{if(!!i)r.set(e)},[i,r])]}({groupId:i}),v=(()=>{let e=g??m;return p({value:e,tabValues:l})?e:null})();return(0,o.Z)(()=>{v&&h(v)},[v]),{selectedValue:r,selectValue:(0,a.useCallback)(e=>{if(!p({value:e,tabValues:l}))throw Error(`Can't select invalid tab value=${e}`);h(e),f(e),x(e)},[f,x,l]),tabValues:l}}(e);return(0,i.jsxs)("div",{className:(0,l.Z)("tabs-container",g),children:[(0,i.jsx)(m,{...n,...e}),(0,i.jsx)(x,{...n,...e})]})}function y(e){let n=(0,h.Z)();return(0,i.jsx)(v,{...e,children:b(e.children)},String(n))}},80980:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return r}});var i=t(27378);let a={},l=i.createContext(a);function r(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);