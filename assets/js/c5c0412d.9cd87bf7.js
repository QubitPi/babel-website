"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["5702"],{2687:function(e,n,a){a.r(n),a.d(n,{metadata:()=>t,contentTitle:()=>u,default:()=>p,assets:()=>c,toc:()=>d,frontMatter:()=>o});var t=JSON.parse('{"id":"babel-plugin-syntax-jsx","title":"@babel/plugin-syntax-jsx","description":"Syntax only","source":"@site/../docs/plugin-syntax-jsx.md","sourceDirName":".","slug":"/babel-plugin-syntax-jsx","permalink":"/docs/babel-plugin-syntax-jsx","draft":false,"unlisted":false,"editUrl":"https://github.com/babel/website/edit/main/docs/../docs/plugin-syntax-jsx.md","tags":[],"version":"current","frontMatter":{"id":"babel-plugin-syntax-jsx","title":"@babel/plugin-syntax-jsx","sidebar_label":"syntax-jsx"}}'),l=a("24246"),r=a("80980"),s=a("95181"),i=a("38049");let o={id:"babel-plugin-syntax-jsx",title:"@babel/plugin-syntax-jsx",sidebar_label:"syntax-jsx"},u=void 0,c={},d=[{value:"Syntax only",id:"syntax-only",level:4},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"With a configuration file (Recommended)",id:"with-a-configuration-file-recommended",level:3},{value:"Via CLI",id:"via-cli",level:3},{value:"Via Node API",id:"via-node-api",level:3}];function h(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.admonition,{type:"note",children:[(0,l.jsx)(n.h4,{id:"syntax-only",children:"Syntax only"}),(0,l.jsxs)(n.p,{children:["Using this plugin directly only enables Babel to parse this syntax. If you want to transform JSX syntax then use the ",(0,l.jsx)(n.a,{href:"/docs/babel-plugin-transform-react-jsx",children:"transform-react-jsx"})," plugin or ",(0,l.jsx)(n.a,{href:"/docs/babel-preset-react",children:"react"})," preset to ",(0,l.jsx)(n.em,{children:"both"})," parse and transform this syntax."]})]}),"\n",(0,l.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,l.jsxs)(s.Z,{groupId:"npm2yarn",children:[(0,l.jsx)(i.Z,{value:"npm",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"npm install --save-dev @babel/plugin-syntax-jsx\n"})})}),(0,l.jsx)(i.Z,{value:"yarn",label:"Yarn",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"yarn add --dev @babel/plugin-syntax-jsx\n"})})}),(0,l.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"pnpm add --save-dev @babel/plugin-syntax-jsx\n"})})})]}),"\n",(0,l.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(n.h3,{id:"with-a-configuration-file-recommended",children:"With a configuration file (Recommended)"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",metastring:'title="babel.config.json"',children:'{\n  "plugins": ["@babel/plugin-syntax-jsx"]\n}\n'})}),"\n",(0,l.jsx)(n.h3,{id:"via-cli",children:"Via CLI"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"babel --plugins @babel/plugin-syntax-jsx script.js\n"})}),"\n",(0,l.jsx)(n.h3,{id:"via-node-api",children:"Via Node API"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'require("@babel/core").transformSync("code", {\n  plugins: ["@babel/plugin-syntax-jsx"],\n});\n'})})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},38049:function(e,n,a){a.d(n,{Z:()=>s});var t=a("24246");a("27378");var l=a("90496");let r="tabItem_wHwb";function s(e){let{children:n,hidden:a,className:s}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,l.Z)(r,s),hidden:a,children:n})}},95181:function(e,n,a){a.d(n,{Z:()=>j});var t=a("24246"),l=a("27378"),r=a("90496"),s=a("85403"),i=a("3620"),o=a("77090"),u=a("76180"),c=a("23418"),d=a("19073");function h(e){return l.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||l.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:n,tabValues:a}=e;return a.some(e=>e.value===n)}var x=a("3344");let f="tabList_J5MA",b="tabItem_l0OV";function m(e){let{className:n,block:a,selectedValue:l,selectValue:i,tabValues:o}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{let n=e.currentTarget,a=o[u.indexOf(n)].value;a!==l&&(c(n),i(a))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let a=u.indexOf(e.currentTarget)+1;n=u[a]??u[0];break}case"ArrowLeft":{let a=u.indexOf(e.currentTarget)-1;n=u[a]??u[u.length-1]}}n?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},n),children:o.map(e=>{let{value:n,label:a,attributes:s}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:e=>u.push(e),onKeyDown:h,onClick:d,...s,className:(0,r.Z)("tabs__item",b,s?.className,{"tabs__item--active":l===n}),children:a??n},n)})})}function g(e){let{lazy:n,children:a,selectedValue:s}=e,i=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){let e=i.find(e=>e.props.value===s);return e?(0,l.cloneElement)(e,{className:(0,r.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:i.map((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==s}))})}function v(e){let n=function(e){let{defaultValue:n,queryString:a=!1,groupId:t}=e,r=function(e){let{values:n,children:a}=e;return(0,l.useMemo)(()=>{let e=n??h(a).map(e=>{let{props:{value:n,label:a,attributes:t,default:l}}=e;return{value:n,label:a,attributes:t,default:l}});return!function(e){let n=(0,c.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,a])}(e),[s,x]=(0,l.useState)(()=>(function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let t=a.find(e=>e.default)??a[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:n,tabValues:r})),[f,b]=function(e){let{queryString:n=!1,groupId:a}=e,t=(0,i.k6)(),r=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a}),s=(0,u._X)(r);return[s,(0,l.useCallback)(e=>{if(!r)return;let n=new URLSearchParams(t.location.search);n.set(r,e),t.replace({...t.location,search:n.toString()})},[r,t])]}({queryString:a,groupId:t}),[m,g]=function(e){var n;let{groupId:a}=e;let t=(n=a)?`docusaurus.tab.${n}`:null,[r,s]=(0,d.Nk)(t);return[r,(0,l.useCallback)(e=>{if(!!t)s.set(e)},[t,s])]}({groupId:t}),v=(()=>{let e=f??m;return p({value:e,tabValues:r})?e:null})();return(0,o.Z)(()=>{v&&x(v)},[v]),{selectedValue:s,selectValue:(0,l.useCallback)(e=>{if(!p({value:e,tabValues:r}))throw Error(`Can't select invalid tab value=${e}`);x(e),b(e),g(e)},[b,g,r]),tabValues:r}}(e);return(0,t.jsxs)("div",{className:(0,r.Z)("tabs-container",f),children:[(0,t.jsx)(m,{...n,...e}),(0,t.jsx)(g,{...n,...e})]})}function j(e){let n=(0,x.Z)();return(0,t.jsx)(v,{...e,children:h(e.children)},String(n))}},80980:function(e,n,a){a.d(n,{Z:function(){return i},a:function(){return s}});var t=a(27378);let l={},r=t.createContext(l);function s(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);