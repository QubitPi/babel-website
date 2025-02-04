"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["3487"],{10513:function(e,n,a){a.r(n),a.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>p,assets:()=>u,toc:()=>d,frontMatter:()=>o});var t=JSON.parse('{"id":"babel-plugin-transform-instanceof","title":"@babel/plugin-transform-instanceof","description":"Example","source":"@site/../docs/plugin-transform-instanceof.md","sourceDirName":".","slug":"/babel-plugin-transform-instanceof","permalink":"/babel-website/docs/babel-plugin-transform-instanceof","draft":false,"unlisted":false,"editUrl":"https://github.com/babel/website/edit/main/docs/../docs/plugin-transform-instanceof.md","tags":[],"version":"current","frontMatter":{"id":"babel-plugin-transform-instanceof","title":"@babel/plugin-transform-instanceof","sidebar_label":"instanceof"},"sidebar":"docs","previous":{"title":"function-name","permalink":"/babel-website/docs/babel-plugin-transform-function-name"},"next":{"title":"literals","permalink":"/babel-website/docs/babel-plugin-transform-literals"}}'),r=a("24246"),l=a("80980"),i=a("95181"),s=a("38049");let o={id:"babel-plugin-transform-instanceof",title:"@babel/plugin-transform-instanceof",sidebar_label:"instanceof"},c=void 0,u={},d=[{value:"Example",id:"example",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"With a configuration file (Recommended)",id:"with-a-configuration-file-recommended",level:3},{value:"Via CLI",id:"via-cli",level:3},{value:"Via Node API",id:"via-node-api",level:3},{value:"References",id:"references",level:2}];function f(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"In"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:"foo instanceof Bar;\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Out"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'function _instanceof(left, right) {\n  if (\n    right != null &&\n    typeof Symbol !== "undefined" &&\n    right[Symbol.hasInstance]\n  ) {\n    return right[Symbol.hasInstance](left);\n  } else {\n    return left instanceof right;\n  }\n}\n\n_instanceof(foo, Bar);\n'})}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(s.Z,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"npm install --save-dev @babel/plugin-transform-instanceof\n"})})}),(0,r.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"yarn add --dev @babel/plugin-transform-instanceof\n"})})}),(0,r.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"pnpm add --save-dev @babel/plugin-transform-instanceof\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.h3,{id:"with-a-configuration-file-recommended",children:"With a configuration file (Recommended)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="babel.config.json"',children:'{\n  "plugins": ["@babel/plugin-transform-instanceof"]\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"via-cli",children:"Via CLI"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"babel --plugins @babel/plugin-transform-instanceof script.js\n"})}),"\n",(0,r.jsx)(n.h3,{id:"via-node-api",children:"Via Node API"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'require("@babel/core").transformSync("code", {\n  plugins: ["@babel/plugin-transform-instanceof"],\n});\n'})}),"\n",(0,r.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.ecma-international.org/ecma-262/6.0/#sec-instanceofoperator",children:"ES6 Spec: InstanceOf Operator Semantics"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance",children:"MDN: Symbol.hasInstance"})}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},38049:function(e,n,a){a.d(n,{Z:()=>i});var t=a("24246");a("27378");var r=a("90496");let l="tabItem_wHwb";function i(e){let{children:n,hidden:a,className:i}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a,children:n})}},95181:function(e,n,a){a.d(n,{Z:()=>j});var t=a("24246"),r=a("27378"),l=a("90496"),i=a("85403"),s=a("3620"),o=a("77090"),c=a("76180"),u=a("23418"),d=a("19073");function f(e){return r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||r.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:n,tabValues:a}=e;return a.some(e=>e.value===n)}var h=a("3344");let m="tabList_J5MA",b="tabItem_l0OV";function g(e){let{className:n,block:a,selectedValue:r,selectValue:s,tabValues:o}=e,c=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),d=e=>{let n=e.currentTarget,a=o[c.indexOf(n)].value;a!==r&&(u(n),s(a))},f=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let a=c.indexOf(e.currentTarget)+1;n=c[a]??c[0];break}case"ArrowLeft":{let a=c.indexOf(e.currentTarget)-1;n=c[a]??c[c.length-1]}}n?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},n),children:o.map(e=>{let{value:n,label:a,attributes:i}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:f,onClick:d,...i,className:(0,l.Z)("tabs__item",b,i?.className,{"tabs__item--active":r===n}),children:a??n},n)})})}function v(e){let{lazy:n,children:a,selectedValue:i}=e,s=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){let e=s.find(e=>e.props.value===i);return e?(0,r.cloneElement)(e,{className:(0,l.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:s.map((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i}))})}function x(e){let n=function(e){let{defaultValue:n,queryString:a=!1,groupId:t}=e,l=function(e){let{values:n,children:a}=e;return(0,r.useMemo)(()=>{let e=n??f(a).map(e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}});return!function(e){let n=(0,u.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,a])}(e),[i,h]=(0,r.useState)(()=>(function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let t=a.find(e=>e.default)??a[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:n,tabValues:l})),[m,b]=function(e){let{queryString:n=!1,groupId:a}=e,t=(0,s.k6)(),l=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a}),i=(0,c._X)(l);return[i,(0,r.useCallback)(e=>{if(!l)return;let n=new URLSearchParams(t.location.search);n.set(l,e),t.replace({...t.location,search:n.toString()})},[l,t])]}({queryString:a,groupId:t}),[g,v]=function(e){var n;let{groupId:a}=e;let t=(n=a)?`docusaurus.tab.${n}`:null,[l,i]=(0,d.Nk)(t);return[l,(0,r.useCallback)(e=>{if(!!t)i.set(e)},[t,i])]}({groupId:t}),x=(()=>{let e=m??g;return p({value:e,tabValues:l})?e:null})();return(0,o.Z)(()=>{x&&h(x)},[x]),{selectedValue:i,selectValue:(0,r.useCallback)(e=>{if(!p({value:e,tabValues:l}))throw Error(`Can't select invalid tab value=${e}`);h(e),b(e),v(e)},[b,v,l]),tabValues:l}}(e);return(0,t.jsxs)("div",{className:(0,l.Z)("tabs-container",m),children:[(0,t.jsx)(g,{...n,...e}),(0,t.jsx)(v,{...n,...e})]})}function j(e){let n=(0,h.Z)();return(0,t.jsx)(x,{...e,children:f(e.children)},String(n))}},80980:function(e,n,a){a.d(n,{Z:function(){return s},a:function(){return i}});var t=a(27378);let r={},l=t.createContext(r);function i(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);