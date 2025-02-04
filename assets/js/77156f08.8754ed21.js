"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["1635"],{22509:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>c,default:()=>h,assets:()=>d,toc:()=>u,frontMatter:()=>o});var i=JSON.parse('{"id":"babel-plugin-syntax-typescript","title":"@babel/plugin-syntax-typescript","description":"Syntax only","source":"@site/../docs/plugin-syntax-typescript.md","sourceDirName":".","slug":"/babel-plugin-syntax-typescript","permalink":"/babel-website/docs/babel-plugin-syntax-typescript","draft":false,"unlisted":false,"editUrl":"https://github.com/babel/website/edit/main/docs/../docs/plugin-syntax-typescript.md","tags":[],"version":"current","frontMatter":{"id":"babel-plugin-syntax-typescript","title":"@babel/plugin-syntax-typescript","sidebar_label":"syntax-typescript"}}'),l=t("24246"),s=t("80980"),a=t("95181"),r=t("38049");let o={id:"babel-plugin-syntax-typescript",title:"@babel/plugin-syntax-typescript",sidebar_label:"syntax-typescript"},c=void 0,d={},u=[{value:"Syntax only",id:"syntax-only",level:4},{value:"Usage",id:"usage",level:2},{value:"With a configuration file (Recommended)",id:"with-a-configuration-file-recommended",level:3},{value:"Via CLI",id:"via-cli",level:3},{value:"Via Node API",id:"via-node-api",level:3},{value:"Options",id:"options",level:2},{value:"<code>disallowAmbiguousJSXLike</code>",id:"disallowambiguousjsxlike",level:3},{value:"<code>dts</code>",id:"dts",level:3},{value:"<code>isTSX</code>",id:"istsx",level:3}];function p(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.admonition,{type:"note",children:[(0,l.jsx)(n.h4,{id:"syntax-only",children:"Syntax only"}),(0,l.jsxs)(n.p,{children:["Using this plugin directly only enables Babel to parse this syntax. If you want to remove TypeScript syntax then use the ",(0,l.jsx)(n.a,{href:"/babel-website/docs/babel-plugin-transform-typescript",children:"typescript"})," plugin or ",(0,l.jsx)(n.a,{href:"/babel-website/docs/babel-preset-typescript",children:"typescript"})," preset to ",(0,l.jsx)(n.em,{children:"both"})," parse and transform this syntax."]})]}),"\n",(0,l.jsxs)(a.Z,{groupId:"npm2yarn",children:[(0,l.jsx)(r.Z,{value:"npm",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"npm install --save-dev @babel/plugin-syntax-typescript\n"})})}),(0,l.jsx)(r.Z,{value:"yarn",label:"Yarn",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"yarn add --dev @babel/plugin-syntax-typescript\n"})})}),(0,l.jsx)(r.Z,{value:"pnpm",label:"pnpm",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"pnpm add --save-dev @babel/plugin-syntax-typescript\n"})})})]}),"\n",(0,l.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(n.h3,{id:"with-a-configuration-file-recommended",children:"With a configuration file (Recommended)"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",metastring:'title="babel.config.json"',children:'{\n  "plugins": ["@babel/plugin-syntax-typescript"]\n}\n'})}),"\n",(0,l.jsx)(n.h3,{id:"via-cli",children:"Via CLI"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"babel --plugins @babel/plugin-syntax-typescript script.js\n"})}),"\n",(0,l.jsx)(n.h3,{id:"via-node-api",children:"Via Node API"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'require("@babel/core").transformSync("code", {\n  plugins: ["@babel/plugin-syntax-typescript"],\n});\n'})}),"\n",(0,l.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,l.jsx)(n.h3,{id:"disallowambiguousjsxlike",children:(0,l.jsx)(n.code,{children:"disallowAmbiguousJSXLike"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"boolean"}),", defaults to ",(0,l.jsx)(n.code,{children:"false"})]}),"\n",(0,l.jsxs)(n.p,{children:["Added in: ",(0,l.jsx)(n.code,{children:"v7.16.0"})]}),"\n",(0,l.jsxs)(n.p,{children:["Even when JSX parsing is not enabled, this option disallows using syntax that would be ambiguous with JSX (",(0,l.jsx)(n.code,{children:"<X> y"})," type assertions and ",(0,l.jsx)(n.code,{children:"<X>() => {}"})," type arguments). It matches the ",(0,l.jsx)(n.code,{children:"tsc"})," behavior when parsing ",(0,l.jsx)(n.code,{children:".mts"})," and ",(0,l.jsx)(n.code,{children:".mjs"})," files."]}),"\n",(0,l.jsx)(n.h3,{id:"dts",children:(0,l.jsx)(n.code,{children:"dts"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"boolean"}),", defaults to ",(0,l.jsx)(n.code,{children:"false"})]}),"\n",(0,l.jsxs)(n.p,{children:["Added in: ",(0,l.jsx)(n.code,{children:"v7.20.0"})]}),"\n",(0,l.jsxs)(n.p,{children:["This option will enable parsing within a TypeScript ambient context, where certain syntax have different rules (like ",(0,l.jsx)(n.code,{children:".d.ts"})," files and inside ",(0,l.jsx)(n.code,{children:"declare module"})," blocks). Please see ",(0,l.jsx)(n.a,{href:"https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html",children:"Official Handbook"})," and ",(0,l.jsx)(n.a,{href:"https://basarat.gitbook.io/typescript/type-system/intro",children:"TypeScript Deep Dive"})," for more information about ambient contexts."]}),"\n",(0,l.jsx)(n.h3,{id:"istsx",children:(0,l.jsx)(n.code,{children:"isTSX"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"boolean"}),", defaults to ",(0,l.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Forcibly enables ",(0,l.jsx)(n.code,{children:"jsx"})," parsing. Otherwise angle brackets will be treated as typescript's legacy type assertion ",(0,l.jsx)(n.code,{children:"var foo = <string>bar;"})]}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsxs)(n.p,{children:["You can read more about configuring plugin options ",(0,l.jsx)(n.a,{href:"https://babeljs.io/docs/en/plugins#plugin-options",children:"here"})]})})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},38049:function(e,n,t){t.d(n,{Z:()=>a});var i=t("24246");t("27378");var l=t("90496");let s="tabItem_wHwb";function a(e){let{children:n,hidden:t,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,l.Z)(s,a),hidden:t,children:n})}},95181:function(e,n,t){t.d(n,{Z:()=>j});var i=t("24246"),l=t("27378"),s=t("90496"),a=t("85403"),r=t("3620"),o=t("77090"),c=t("76180"),d=t("23418"),u=t("19073");function p(e){return l.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||l.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var b=t("3344");let x="tabList_J5MA",f="tabItem_l0OV";function m(e){let{className:n,block:t,selectedValue:l,selectValue:r,tabValues:o}=e,c=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.o5)(),u=e=>{let n=e.currentTarget,t=o[c.indexOf(n)].value;t!==l&&(d(n),r(t))},p=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{let t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1]}}n?.focus()};return(0,i.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:o.map(e=>{let{value:n,label:t,attributes:a}=e;return(0,i.jsx)("li",{role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:e=>c.push(e),onKeyDown:p,onClick:u,...a,className:(0,s.Z)("tabs__item",f,a?.className,{"tabs__item--active":l===n}),children:t??n},n)})})}function y(e){let{lazy:n,children:t,selectedValue:a}=e,r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=r.find(e=>e.props.value===a);return e?(0,l.cloneElement)(e,{className:(0,s.Z)("margin-top--md",e.props.className)}):null}return(0,i.jsx)("div",{className:"margin-top--md",children:r.map((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==a}))})}function g(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:i}=e,s=function(e){let{values:n,children:t}=e;return(0,l.useMemo)(()=>{let e=n??p(t).map(e=>{let{props:{value:n,label:t,attributes:i,default:l}}=e;return{value:n,label:t,attributes:i,default:l}});return!function(e){let n=(0,d.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[a,b]=(0,l.useState)(()=>(function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let i=t.find(e=>e.default)??t[0];if(!i)throw Error("Unexpected error: 0 tabValues");return i.value})({defaultValue:n,tabValues:s})),[x,f]=function(e){let{queryString:n=!1,groupId:t}=e,i=(0,r.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t}),a=(0,c._X)(s);return[a,(0,l.useCallback)(e=>{if(!s)return;let n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})},[s,i])]}({queryString:t,groupId:i}),[m,y]=function(e){var n;let{groupId:t}=e;let i=(n=t)?`docusaurus.tab.${n}`:null,[s,a]=(0,u.Nk)(i);return[s,(0,l.useCallback)(e=>{if(!!i)a.set(e)},[i,a])]}({groupId:i}),g=(()=>{let e=x??m;return h({value:e,tabValues:s})?e:null})();return(0,o.Z)(()=>{g&&b(g)},[g]),{selectedValue:a,selectValue:(0,l.useCallback)(e=>{if(!h({value:e,tabValues:s}))throw Error(`Can't select invalid tab value=${e}`);b(e),f(e),y(e)},[f,y,s]),tabValues:s}}(e);return(0,i.jsxs)("div",{className:(0,s.Z)("tabs-container",x),children:[(0,i.jsx)(m,{...n,...e}),(0,i.jsx)(y,{...n,...e})]})}function j(e){let n=(0,b.Z)();return(0,i.jsx)(g,{...e,children:p(e.children)},String(n))}},80980:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return a}});var i=t(27378);let l={},s=i.createContext(l);function a(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);