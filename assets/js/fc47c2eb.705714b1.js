"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7702"],{76010:function(e,n,t){t.r(n),t.d(n,{metadata:()=>l,contentTitle:()=>u,default:()=>f,assets:()=>c,toc:()=>d,frontMatter:()=>s});var l=JSON.parse('{"id":"babel-plugin-proposal-function-sent","title":"@babel/plugin-proposal-function-sent","description":"Example","source":"@site/../docs/plugin-proposal-function-sent.md","sourceDirName":".","slug":"/babel-plugin-proposal-function-sent","permalink":"/docs/babel-plugin-proposal-function-sent","draft":false,"unlisted":false,"editUrl":"https://github.com/babel/website/edit/main/docs/../docs/plugin-proposal-function-sent.md","tags":[],"version":"current","frontMatter":{"id":"babel-plugin-proposal-function-sent","title":"@babel/plugin-proposal-function-sent","sidebar_label":"function-sent"},"sidebar":"plugins","previous":{"title":"function-bind","permalink":"/docs/babel-plugin-proposal-function-bind"},"next":{"title":"import-defer","permalink":"/docs/babel-plugin-proposal-import-defer"}}'),r=t("24246"),a=t("80980"),i=t("95181"),o=t("38049");let s={id:"babel-plugin-proposal-function-sent",title:"@babel/plugin-proposal-function-sent",sidebar_label:"function-sent"},u=void 0,c={},d=[{value:"Example",id:"example",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"With a configuration file (Recommended)",id:"with-a-configuration-file-recommended",level:3},{value:"Via CLI",id:"via-cli",level:3},{value:"Via Node API",id:"via-node-api",level:3},{value:"References",id:"references",level:2}];function p(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'function* generator() {\n  console.log("Sent", function.sent);\n  console.log("Yield", yield);\n}\n\nconst iterator = generator();\niterator.next(1); // Logs "Sent 1"\niterator.next(2); // Logs "Yield 2"\n'})}),"\n",(0,r.jsx)(n.p,{children:"Is compiled roughly to"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'let generator = _skipFirstGeneratorNext(function*() {\n  const _functionSent = yield;\n  console.log("Sent", _functionSent);\n  console.log("Yield", yield);\n});\n\nconst iterator = generator();\niterator.next(1); // Logs "Sent 1"\niterator.next(2); // Logs "Yield 2"\n'})}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(o.Z,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"npm install --save-dev @babel/plugin-proposal-function-sent\n"})})}),(0,r.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"yarn add --dev @babel/plugin-proposal-function-sent\n"})})}),(0,r.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"pnpm add --save-dev @babel/plugin-proposal-function-sent\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.h3,{id:"with-a-configuration-file-recommended",children:"With a configuration file (Recommended)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="babel.config.json"',children:'{\n  "plugins": ["@babel/plugin-proposal-function-sent"]\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"via-cli",children:"Via CLI"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"babel --plugins @babel/plugin-proposal-function-sent script.js\n"})}),"\n",(0,r.jsx)(n.h3,{id:"via-node-api",children:"Via Node API"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'require("@babel/core").transformSync("code", {\n  plugins: ["@babel/plugin-proposal-function-sent"],\n});\n'})}),"\n",(0,r.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/tc39/proposal-function.sent",children:"Proposal: Generator function.sent Meta Property"})}),"\n"]})]})}function f(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},38049:function(e,n,t){t.d(n,{Z:()=>i});var l=t("24246");t("27378");var r=t("90496");let a="tabItem_wHwb";function i(e){let{children:n,hidden:t,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a,i),hidden:t,children:n})}},95181:function(e,n,t){t.d(n,{Z:()=>j});var l=t("24246"),r=t("27378"),a=t("90496"),i=t("85403"),o=t("3620"),s=t("77090"),u=t("76180"),c=t("23418"),d=t("19073");function p(e){return r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||r.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function f(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var h=t("3344");let m="tabList_J5MA",b="tabItem_l0OV";function g(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:s}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{let n=e.currentTarget,t=s[u.indexOf(n)].value;t!==r&&(c(n),o(t))},p=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{let t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1]}}n?.focus()};return(0,l.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:s.map(e=>{let{value:n,label:t,attributes:i}=e;return(0,l.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>u.push(e),onKeyDown:p,onClick:d,...i,className:(0,a.Z)("tabs__item",b,i?.className,{"tabs__item--active":r===n}),children:t??n},n)})})}function v(e){let{lazy:n,children:t,selectedValue:i}=e,o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=o.find(e=>e.props.value===i);return e?(0,r.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,l.jsx)("div",{className:"margin-top--md",children:o.map((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i}))})}function x(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:l}=e,a=function(e){let{values:n,children:t}=e;return(0,r.useMemo)(()=>{let e=n??p(t).map(e=>{let{props:{value:n,label:t,attributes:l,default:r}}=e;return{value:n,label:t,attributes:l,default:r}});return!function(e){let n=(0,c.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[i,h]=(0,r.useState)(()=>(function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let l=t.find(e=>e.default)??t[0];if(!l)throw Error("Unexpected error: 0 tabValues");return l.value})({defaultValue:n,tabValues:a})),[m,b]=function(e){let{queryString:n=!1,groupId:t}=e,l=(0,o.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t}),i=(0,u._X)(a);return[i,(0,r.useCallback)(e=>{if(!a)return;let n=new URLSearchParams(l.location.search);n.set(a,e),l.replace({...l.location,search:n.toString()})},[a,l])]}({queryString:t,groupId:l}),[g,v]=function(e){var n;let{groupId:t}=e;let l=(n=t)?`docusaurus.tab.${n}`:null,[a,i]=(0,d.Nk)(l);return[a,(0,r.useCallback)(e=>{if(!!l)i.set(e)},[l,i])]}({groupId:l}),x=(()=>{let e=m??g;return f({value:e,tabValues:a})?e:null})();return(0,s.Z)(()=>{x&&h(x)},[x]),{selectedValue:i,selectValue:(0,r.useCallback)(e=>{if(!f({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);h(e),b(e),v(e)},[b,v,a]),tabValues:a}}(e);return(0,l.jsxs)("div",{className:(0,a.Z)("tabs-container",m),children:[(0,l.jsx)(g,{...n,...e}),(0,l.jsx)(v,{...n,...e})]})}function j(e){let n=(0,h.Z)();return(0,l.jsx)(x,{...e,children:p(e.children)},String(n))}},80980:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return i}});var l=t(27378);let r={},a=l.createContext(r);function i(e){let n=l.useContext(a);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);