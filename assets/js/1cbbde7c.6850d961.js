"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7859"],{55195:function(e,n,r){r.r(n),r.d(n,{metadata:()=>l,contentTitle:()=>u,default:()=>m,assets:()=>c,toc:()=>d,frontMatter:()=>o});var l=JSON.parse('{"id":"babel-plugin-transform-node-env-inline","title":"babel-plugin-transform-node-env-inline","description":"Example","source":"@site/../docs/plugin-transform-node-env-inline.md","sourceDirName":".","slug":"/babel-plugin-transform-node-env-inline","permalink":"/babel-website/docs/babel-plugin-transform-node-env-inline","draft":false,"unlisted":false,"editUrl":"https://github.com/babel/website/edit/main/docs/../docs/plugin-transform-node-env-inline.md","tags":[],"version":"current","frontMatter":{"id":"babel-plugin-transform-node-env-inline","title":"babel-plugin-transform-node-env-inline","sidebar_label":"node-env-inline"}}'),a=r("24246"),t=r("80980"),i=r("95181"),s=r("38049");let o={id:"babel-plugin-transform-node-env-inline",title:"babel-plugin-transform-node-env-inline",sidebar_label:"node-env-inline"},u=void 0,c={},d=[{value:"Example",id:"example",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"With a configuration file (Recommended)",id:"with-a-configuration-file-recommended",level:3},{value:"Via CLI",id:"via-cli",level:3},{value:"Via Node API",id:"via-node-api",level:3}];function p(e){let n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"In"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'process.env.NODE_ENV === "development";\nprocess.env.NODE_ENV === "production";\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Out"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"NODE_ENV=development babel in.js --plugins transform-node-env-inline\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:"true;\nfalse;\n"})}),"\n",(0,a.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,a.jsx)(s.Z,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"npm install babel-plugin-transform-node-env-inline --save-dev\n"})})}),(0,a.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"yarn add babel-plugin-transform-node-env-inline --dev\n"})})}),(0,a.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"pnpm add babel-plugin-transform-node-env-inline --save-dev\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n.h3,{id:"with-a-configuration-file-recommended",children:"With a configuration file (Recommended)"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",metastring:'title="babel.config.json"',children:'{\n  "plugins": ["transform-node-env-inline"]\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"via-cli",children:"Via CLI"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"babel --plugins transform-node-env-inline script.js\n"})}),"\n",(0,a.jsx)(n.h3,{id:"via-node-api",children:"Via Node API"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'require("@babel/core").transformSync("code", {\n  plugins: ["transform-node-env-inline"],\n});\n'})})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},38049:function(e,n,r){r.d(n,{Z:()=>i});var l=r("24246");r("27378");var a=r("90496");let t="tabItem_wHwb";function i(e){let{children:n,hidden:r,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.Z)(t,i),hidden:r,children:n})}},95181:function(e,n,r){r.d(n,{Z:()=>j});var l=r("24246"),a=r("27378"),t=r("90496"),i=r("85403"),s=r("3620"),o=r("77090"),u=r("76180"),c=r("23418"),d=r("19073");function p(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||a.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function m(e){let{value:n,tabValues:r}=e;return r.some(e=>e.value===n)}var h=r("3344");let f="tabList_J5MA",v="tabItem_l0OV";function b(e){let{className:n,block:r,selectedValue:a,selectValue:s,tabValues:o}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{let n=e.currentTarget,r=o[u.indexOf(n)].value;r!==a&&(c(n),s(r))},p=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let r=u.indexOf(e.currentTarget)+1;n=u[r]??u[0];break}case"ArrowLeft":{let r=u.indexOf(e.currentTarget)-1;n=u[r]??u[u.length-1]}}n?.focus()};return(0,l.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":r},n),children:o.map(e=>{let{value:n,label:r,attributes:i}=e;return(0,l.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>u.push(e),onKeyDown:p,onClick:d,...i,className:(0,t.Z)("tabs__item",v,i?.className,{"tabs__item--active":a===n}),children:r??n},n)})})}function g(e){let{lazy:n,children:r,selectedValue:i}=e,s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){let e=s.find(e=>e.props.value===i);return e?(0,a.cloneElement)(e,{className:(0,t.Z)("margin-top--md",e.props.className)}):null}return(0,l.jsx)("div",{className:"margin-top--md",children:s.map((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i}))})}function x(e){let n=function(e){let{defaultValue:n,queryString:r=!1,groupId:l}=e,t=function(e){let{values:n,children:r}=e;return(0,a.useMemo)(()=>{let e=n??p(r).map(e=>{let{props:{value:n,label:r,attributes:l,default:a}}=e;return{value:n,label:r,attributes:l,default:a}});return!function(e){let n=(0,c.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,r])}(e),[i,h]=(0,a.useState)(()=>(function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let l=r.find(e=>e.default)??r[0];if(!l)throw Error("Unexpected error: 0 tabValues");return l.value})({defaultValue:n,tabValues:t})),[f,v]=function(e){let{queryString:n=!1,groupId:r}=e,l=(0,s.k6)(),t=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r}),i=(0,u._X)(t);return[i,(0,a.useCallback)(e=>{if(!t)return;let n=new URLSearchParams(l.location.search);n.set(t,e),l.replace({...l.location,search:n.toString()})},[t,l])]}({queryString:r,groupId:l}),[b,g]=function(e){var n;let{groupId:r}=e;let l=(n=r)?`docusaurus.tab.${n}`:null,[t,i]=(0,d.Nk)(l);return[t,(0,a.useCallback)(e=>{if(!!l)i.set(e)},[l,i])]}({groupId:l}),x=(()=>{let e=f??b;return m({value:e,tabValues:t})?e:null})();return(0,o.Z)(()=>{x&&h(x)},[x]),{selectedValue:i,selectValue:(0,a.useCallback)(e=>{if(!m({value:e,tabValues:t}))throw Error(`Can't select invalid tab value=${e}`);h(e),v(e),g(e)},[v,g,t]),tabValues:t}}(e);return(0,l.jsxs)("div",{className:(0,t.Z)("tabs-container",f),children:[(0,l.jsx)(b,{...n,...e}),(0,l.jsx)(g,{...n,...e})]})}function j(e){let n=(0,h.Z)();return(0,l.jsx)(x,{...e,children:p(e.children)},String(n))}},80980:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return i}});var l=r(27378);let a={},t=l.createContext(a);function i(e){let n=l.useContext(t);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);