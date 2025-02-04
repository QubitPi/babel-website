"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["2289"],{37683:function(e,n,a){a.r(n),a.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>p,assets:()=>u,toc:()=>d,frontMatter:()=>o});var t=JSON.parse('{"id":"babel-plugin-syntax-optional-catch-binding","title":"@babel/plugin-syntax-optional-catch-binding","description":"Syntax only","source":"@site/../docs/plugin-syntax-optional-catch-binding.md","sourceDirName":".","slug":"/babel-plugin-syntax-optional-catch-binding","permalink":"/docs/babel-plugin-syntax-optional-catch-binding","draft":false,"unlisted":false,"editUrl":"https://github.com/babel/website/edit/main/docs/../docs/plugin-syntax-optional-catch-binding.md","tags":[],"version":"current","frontMatter":{"id":"babel-plugin-syntax-optional-catch-binding","title":"@babel/plugin-syntax-optional-catch-binding","sidebar_label":"syntax-optional-catch-binding"}}'),l=a("24246"),i=a("80980"),r=a("95181"),s=a("38049");let o={id:"babel-plugin-syntax-optional-catch-binding",title:"@babel/plugin-syntax-optional-catch-binding",sidebar_label:"syntax-optional-catch-binding"},c=void 0,u={},d=[{value:"Syntax only",id:"syntax-only",level:4},{value:"Example",id:"example",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"With a configuration file (Recommended)",id:"with-a-configuration-file-recommended",level:3},{value:"Via CLI",id:"via-cli",level:3},{value:"Via Node API",id:"via-node-api",level:3},{value:"References",id:"references",level:2}];function h(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.admonition,{type:"note",children:[(0,l.jsx)(n.h4,{id:"syntax-only",children:"Syntax only"}),(0,l.jsxs)(n.p,{children:["It's unlikely you want to use this plugin directly as it only enables Babel to parse this syntax. Instead, use ",(0,l.jsx)(n.a,{href:"/docs/babel-plugin-transform-optional-catch-binding",children:"plugin-transform-optional-catch-binding"})," to ",(0,l.jsx)(n.em,{children:"both"})," parse and transform this syntax."]})]}),"\n",(0,l.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Syntax"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'try {\n  throw 0;\n} catch {\n  doSomethingWhichDoesNotCareAboutTheValueThrown();\n  console.log("Yay, code executes!");\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,l.jsxs)(r.Z,{groupId:"npm2yarn",children:[(0,l.jsx)(s.Z,{value:"npm",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"npm install --save-dev @babel/plugin-syntax-optional-catch-binding\n"})})}),(0,l.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"yarn add --dev @babel/plugin-syntax-optional-catch-binding\n"})})}),(0,l.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"pnpm add --save-dev @babel/plugin-syntax-optional-catch-binding\n"})})})]}),"\n",(0,l.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(n.h3,{id:"with-a-configuration-file-recommended",children:"With a configuration file (Recommended)"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",metastring:'title="babel.config.json"',children:'{\n  "plugins": ["@babel/plugin-syntax-optional-catch-binding"]\n}\n'})}),"\n",(0,l.jsx)(n.h3,{id:"via-cli",children:"Via CLI"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"babel --plugins @babel/plugin-syntax-optional-catch-binding script.js\n"})}),"\n",(0,l.jsx)(n.h3,{id:"via-node-api",children:"Via Node API"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'require("@babel/core").transformSync("code", {\n  plugins: ["@babel/plugin-syntax-optional-catch-binding"]\n});\n'})}),"\n",(0,l.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://github.com/babel/proposals/issues/7",children:"Proposal: Optional Catch Binding for ECMAScript"})}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},38049:function(e,n,a){a.d(n,{Z:()=>r});var t=a("24246");a("27378");var l=a("90496");let i="tabItem_wHwb";function r(e){let{children:n,hidden:a,className:r}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,l.Z)(i,r),hidden:a,children:n})}},95181:function(e,n,a){a.d(n,{Z:()=>y});var t=a("24246"),l=a("27378"),i=a("90496"),r=a("85403"),s=a("3620"),o=a("77090"),c=a("76180"),u=a("23418"),d=a("19073");function h(e){return l.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||l.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:n,tabValues:a}=e;return a.some(e=>e.value===n)}var b=a("3344");let g="tabList_J5MA",m="tabItem_l0OV";function f(e){let{className:n,block:a,selectedValue:l,selectValue:s,tabValues:o}=e,c=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.o5)(),d=e=>{let n=e.currentTarget,a=o[c.indexOf(n)].value;a!==l&&(u(n),s(a))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let a=c.indexOf(e.currentTarget)+1;n=c[a]??c[0];break}case"ArrowLeft":{let a=c.indexOf(e.currentTarget)-1;n=c[a]??c[c.length-1]}}n?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},n),children:o.map(e=>{let{value:n,label:a,attributes:r}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:e=>c.push(e),onKeyDown:h,onClick:d,...r,className:(0,i.Z)("tabs__item",m,r?.className,{"tabs__item--active":l===n}),children:a??n},n)})})}function x(e){let{lazy:n,children:a,selectedValue:r}=e,s=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){let e=s.find(e=>e.props.value===r);return e?(0,l.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:s.map((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==r}))})}function v(e){let n=function(e){let{defaultValue:n,queryString:a=!1,groupId:t}=e,i=function(e){let{values:n,children:a}=e;return(0,l.useMemo)(()=>{let e=n??h(a).map(e=>{let{props:{value:n,label:a,attributes:t,default:l}}=e;return{value:n,label:a,attributes:t,default:l}});return!function(e){let n=(0,u.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,a])}(e),[r,b]=(0,l.useState)(()=>(function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let t=a.find(e=>e.default)??a[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:n,tabValues:i})),[g,m]=function(e){let{queryString:n=!1,groupId:a}=e,t=(0,s.k6)(),i=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a}),r=(0,c._X)(i);return[r,(0,l.useCallback)(e=>{if(!i)return;let n=new URLSearchParams(t.location.search);n.set(i,e),t.replace({...t.location,search:n.toString()})},[i,t])]}({queryString:a,groupId:t}),[f,x]=function(e){var n;let{groupId:a}=e;let t=(n=a)?`docusaurus.tab.${n}`:null,[i,r]=(0,d.Nk)(t);return[i,(0,l.useCallback)(e=>{if(!!t)r.set(e)},[t,r])]}({groupId:t}),v=(()=>{let e=g??f;return p({value:e,tabValues:i})?e:null})();return(0,o.Z)(()=>{v&&b(v)},[v]),{selectedValue:r,selectValue:(0,l.useCallback)(e=>{if(!p({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);b(e),m(e),x(e)},[m,x,i]),tabValues:i}}(e);return(0,t.jsxs)("div",{className:(0,i.Z)("tabs-container",g),children:[(0,t.jsx)(f,{...n,...e}),(0,t.jsx)(x,{...n,...e})]})}function y(e){let n=(0,b.Z)();return(0,t.jsx)(v,{...e,children:h(e.children)},String(n))}},80980:function(e,n,a){a.d(n,{Z:function(){return s},a:function(){return r}});var t=a(27378);let l={},i=t.createContext(l);function r(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);