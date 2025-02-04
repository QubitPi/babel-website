"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["9094"],{30621:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>m,assets:()=>u,toc:()=>d,frontMatter:()=>o});var r=JSON.parse('{"id":"babel-plugin-transform-react-jsx-development","title":"@babel/plugin-transform-react-jsx-development","description":"This plugin is included in @babel/preset-react","source":"@site/../docs/plugin-transform-react-jsx-development.md","sourceDirName":".","slug":"/babel-plugin-transform-react-jsx-development","permalink":"/babel-website/docs/babel-plugin-transform-react-jsx-development","draft":false,"unlisted":false,"editUrl":"https://github.com/babel/website/edit/main/docs/../docs/plugin-transform-react-jsx-development.md","tags":[],"version":"current","frontMatter":{"id":"babel-plugin-transform-react-jsx-development","title":"@babel/plugin-transform-react-jsx-development","sidebar_label":"transform-react-jsx-development"},"sidebar":"docs","previous":{"title":"transform-react-jsx","permalink":"/babel-website/docs/babel-plugin-transform-react-jsx"},"next":{"title":"@babel/preset-typescript","permalink":"/babel-website/docs/babel-preset-typescript"}}'),a=t("24246"),l=t("80980"),s=t("95181"),i=t("38049");let o={id:"babel-plugin-transform-react-jsx-development",title:"@babel/plugin-transform-react-jsx-development",sidebar_label:"transform-react-jsx-development"},c=void 0,u={},d=[{value:"Example",id:"example",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"With a configuration file (Recommended)",id:"with-a-configuration-file-recommended",level:3},{value:"Via CLI",id:"via-cli",level:3},{value:"Via Node API",id:"via-node-api",level:3},{value:"Options",id:"options",level:2}];function p(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["This plugin is included in ",(0,a.jsx)(n.code,{children:"@babel/preset-react"})]})}),"\n",(0,a.jsxs)(n.p,{children:["This plugin is a developer version of ",(0,a.jsx)(n.a,{href:"/babel-website/docs/babel-plugin-transform-react-jsx",children:(0,a.jsx)(n.code,{children:"@babel/plugin-transform-react-jsx"})}),". It is designed to provide enhanced validation error messages and precise code location information for debugging React apps. Note that this plugin is intended to be used in a development environment, as it generates significantly more outputs than the production build."]}),"\n",(0,a.jsxs)(n.p,{children:["If you are using ",(0,a.jsx)(n.a,{href:"/babel-website/docs/babel-preset-react",children:(0,a.jsx)(n.code,{children:"@babel/preset-react"})}),", it will be automatically enabled by the ",(0,a.jsx)(n.a,{href:"/babel-website/docs/babel-preset-react#development",children:(0,a.jsx)(n.code,{children:"development"})})," option so you don't have to install it."]}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"In"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="input.jsx"',children:'const profile = (\n  <div>\n    <img src="avatar.png" className="profile" />\n    <h3>{[user.firstName, user.lastName].join(" ")}</h3>\n  </div>\n);\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Out"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="output.js"',children:'import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";\n\nconst _jsxFileName = "input.jsx";\nconst profile = _jsxDEV("div", {\n  children: [\n    _jsxDEV("img", {\n      src: "avatar.png",\n      className: "profile",\n    }, undefined, false, { fileName: _jsxFileName, lineNumber: 3, columnNumber: 5 }, this),\n    _jsxDEV("h3", {\n      children: [user.firstName, user.lastName].join(" "),\n    }, undefined, false, { fileName: _jsxFileName, lineNumber: 4, columnNumber: 5 }, this),\n  ]},\n  undefined, false, { fileName: _jsxFileName, lineNumber: 2, columnNumber: 3 }, this\n);\n'})}),"\n",(0,a.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsxs)(s.Z,{groupId:"npm2yarn",children:[(0,a.jsx)(i.Z,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"npm install --save-dev @babel/plugin-transform-react-jsx-development\n"})})}),(0,a.jsx)(i.Z,{value:"yarn",label:"Yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"yarn add --dev @babel/plugin-transform-react-jsx-development\n"})})}),(0,a.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"pnpm add --save-dev @babel/plugin-transform-react-jsx-development\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n.h3,{id:"with-a-configuration-file-recommended",children:"With a configuration file (Recommended)"}),"\n",(0,a.jsx)(n.p,{children:"Without options:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",metastring:'title="babel.config.json"',children:'{\n  "plugins": ["@babel/plugin-transform-react-jsx-development"]\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"With options:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",metastring:'title="babel.config.json"',children:'{\n  "plugins": [\n    [\n      "@babel/plugin-transform-react-jsx-development",\n      {\n        "throwIfNamespace": false, // defaults to true\n        "runtime": "automatic", // defaults to classic\n        "importSource": "custom-jsx-library" // defaults to react\n      }\n    ]\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"via-cli",children:"Via CLI"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"babel --plugins @babel/plugin-transform-react-jsx-development script.js\n"})}),"\n",(0,a.jsx)(n.h3,{id:"via-node-api",children:"Via Node API"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'require("@babel/core").transformSync("code", {\n  plugins: ["@babel/plugin-transform-react-jsx-development"],\n});\n'})}),"\n",(0,a.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,a.jsxs)(n.p,{children:["It accepts the same options as ",(0,a.jsx)(n.a,{href:"/babel-website/docs/babel-plugin-transform-react-jsx#options",children:(0,a.jsx)(n.code,{children:"@babel/plugin-transform-react-jsx"})}),"."]})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},38049:function(e,n,t){t.d(n,{Z:()=>s});var r=t("24246");t("27378");var a=t("90496");let l="tabItem_wHwb";function s(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(l,s),hidden:t,children:n})}},95181:function(e,n,t){t.d(n,{Z:()=>g});var r=t("24246"),a=t("27378"),l=t("90496"),s=t("85403"),i=t("3620"),o=t("77090"),c=t("76180"),u=t("23418"),d=t("19073");function p(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||a.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function m(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var h=t("3344");let b="tabList_J5MA",f="tabItem_l0OV";function x(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:o}=e,c=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),d=e=>{let n=e.currentTarget,t=o[c.indexOf(n)].value;t!==a&&(u(n),i(t))},p=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{let t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1]}}n?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n),children:o.map(e=>{let{value:n,label:t,attributes:s}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:p,onClick:d,...s,className:(0,l.Z)("tabs__item",f,s?.className,{"tabs__item--active":a===n}),children:t??n},n)})})}function j(e){let{lazy:n,children:t,selectedValue:s}=e,i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=i.find(e=>e.props.value===s);return e?(0,a.cloneElement)(e,{className:(0,l.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:i.map((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s}))})}function v(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:r}=e,l=function(e){let{values:n,children:t}=e;return(0,a.useMemo)(()=>{let e=n??p(t).map(e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}});return!function(e){let n=(0,u.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[s,h]=(0,a.useState)(()=>(function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let r=t.find(e=>e.default)??t[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:n,tabValues:l})),[b,f]=function(e){let{queryString:n=!1,groupId:t}=e,r=(0,i.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t}),s=(0,c._X)(l);return[s,(0,a.useCallback)(e=>{if(!l)return;let n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})},[l,r])]}({queryString:t,groupId:r}),[x,j]=function(e){var n;let{groupId:t}=e;let r=(n=t)?`docusaurus.tab.${n}`:null,[l,s]=(0,d.Nk)(r);return[l,(0,a.useCallback)(e=>{if(!!r)s.set(e)},[r,s])]}({groupId:r}),v=(()=>{let e=b??x;return m({value:e,tabValues:l})?e:null})();return(0,o.Z)(()=>{v&&h(v)},[v]),{selectedValue:s,selectValue:(0,a.useCallback)(e=>{if(!m({value:e,tabValues:l}))throw Error(`Can't select invalid tab value=${e}`);h(e),f(e),j(e)},[f,j,l]),tabValues:l}}(e);return(0,r.jsxs)("div",{className:(0,l.Z)("tabs-container",b),children:[(0,r.jsx)(x,{...n,...e}),(0,r.jsx)(j,{...n,...e})]})}function g(e){let n=(0,h.Z)();return(0,r.jsx)(v,{...e,children:p(e.children)},String(n))}},80980:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return s}});var r=t(27378);let a={},l=r.createContext(a);function s(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);