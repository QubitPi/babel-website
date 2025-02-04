"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["2963"],{68906:function(e,n,a){a.r(n),a.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>h,assets:()=>u,toc:()=>d,frontMatter:()=>s});var t=JSON.parse('{"id":"babel-plugin-transform-optional-catch-binding","title":"@babel/plugin-transform-optional-catch-binding","description":"This plugin is included in @babel/preset-env, in ES2019","source":"@site/../docs/plugin-transform-optional-catch-binding.md","sourceDirName":".","slug":"/babel-plugin-transform-optional-catch-binding","permalink":"/babel-website/docs/babel-plugin-transform-optional-catch-binding","draft":false,"unlisted":false,"editUrl":"https://github.com/babel/website/edit/main/docs/../docs/plugin-transform-optional-catch-binding.md","tags":[],"version":"current","frontMatter":{"id":"babel-plugin-transform-optional-catch-binding","title":"@babel/plugin-transform-optional-catch-binding","sidebar_label":"optional-catch-binding"},"sidebar":"docs","previous":{"title":"syntax-import-meta","permalink":"/babel-website/docs/babel-plugin-syntax-import-meta"},"next":{"title":"json-strings","permalink":"/babel-website/docs/babel-plugin-transform-json-strings"}}'),l=a("24246"),r=a("80980"),i=a("95181"),o=a("38049");let s={id:"babel-plugin-transform-optional-catch-binding",title:"@babel/plugin-transform-optional-catch-binding",sidebar_label:"optional-catch-binding"},c=void 0,u={},d=[{value:"Examples",id:"examples",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"With a configuration file (Recommended)",id:"with-a-configuration-file-recommended",level:3},{value:"Via CLI",id:"via-cli",level:3},{value:"Via Node API",id:"via-node-api",level:3},{value:"References",id:"references",level:2}];function p(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.admonition,{type:"info",children:(0,l.jsxs)(n.p,{children:["This plugin is included in ",(0,l.jsx)(n.code,{children:"@babel/preset-env"}),", in ",(0,l.jsx)(n.a,{href:"https://github.com/tc39/proposals/blob/master/finished-proposals.md",children:"ES2019"})]})}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:"try {\n  throw 0;\n} catch {\n  doSomethingWhichDoesNotCareAboutTheValueThrown();\n}\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:"try {\n  throw 0;\n} catch {\n  doSomethingWhichDoesNotCareAboutTheValueThrown();\n} finally {\n  doSomeCleanup();\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,l.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,l.jsx)(o.Z,{value:"npm",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"npm install --save-dev @babel/plugin-transform-optional-catch-binding\n"})})}),(0,l.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"yarn add --dev @babel/plugin-transform-optional-catch-binding\n"})})}),(0,l.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"pnpm add --save-dev @babel/plugin-transform-optional-catch-binding\n"})})})]}),"\n",(0,l.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(n.h3,{id:"with-a-configuration-file-recommended",children:"With a configuration file (Recommended)"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",metastring:'title="babel.config.json"',children:'{\n  "plugins": ["@babel/plugin-transform-optional-catch-binding"]\n}\n'})}),"\n",(0,l.jsx)(n.h3,{id:"via-cli",children:"Via CLI"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"babel --plugins @babel/plugin-transform-optional-catch-binding script.js\n"})}),"\n",(0,l.jsx)(n.h3,{id:"via-node-api",children:"Via Node API"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'require("@babel/core").transformSync("code", {\n  plugins: ["@babel/plugin-transform-optional-catch-binding"],\n});\n'})}),"\n",(0,l.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://github.com/babel/proposals/issues/7",children:"Proposal: Optional Catch Binding for ECMAScript"})}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},38049:function(e,n,a){a.d(n,{Z:()=>i});var t=a("24246");a("27378");var l=a("90496");let r="tabItem_wHwb";function i(e){let{children:n,hidden:a,className:i}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:a,children:n})}},95181:function(e,n,a){a.d(n,{Z:()=>j});var t=a("24246"),l=a("27378"),r=a("90496"),i=a("85403"),o=a("3620"),s=a("77090"),c=a("76180"),u=a("23418"),d=a("19073");function p(e){return l.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||l.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:n,tabValues:a}=e;return a.some(e=>e.value===n)}var b=a("3344");let m="tabList_J5MA",f="tabItem_l0OV";function g(e){let{className:n,block:a,selectedValue:l,selectValue:o,tabValues:s}=e,c=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),d=e=>{let n=e.currentTarget,a=s[c.indexOf(n)].value;a!==l&&(u(n),o(a))},p=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let a=c.indexOf(e.currentTarget)+1;n=c[a]??c[0];break}case"ArrowLeft":{let a=c.indexOf(e.currentTarget)-1;n=c[a]??c[c.length-1]}}n?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},n),children:s.map(e=>{let{value:n,label:a,attributes:i}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:e=>c.push(e),onKeyDown:p,onClick:d,...i,className:(0,r.Z)("tabs__item",f,i?.className,{"tabs__item--active":l===n}),children:a??n},n)})})}function v(e){let{lazy:n,children:a,selectedValue:i}=e,o=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){let e=o.find(e=>e.props.value===i);return e?(0,l.cloneElement)(e,{className:(0,r.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:o.map((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==i}))})}function x(e){let n=function(e){let{defaultValue:n,queryString:a=!1,groupId:t}=e,r=function(e){let{values:n,children:a}=e;return(0,l.useMemo)(()=>{let e=n??p(a).map(e=>{let{props:{value:n,label:a,attributes:t,default:l}}=e;return{value:n,label:a,attributes:t,default:l}});return!function(e){let n=(0,u.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,a])}(e),[i,b]=(0,l.useState)(()=>(function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:a}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let t=a.find(e=>e.default)??a[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:n,tabValues:r})),[m,f]=function(e){let{queryString:n=!1,groupId:a}=e,t=(0,o.k6)(),r=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a}),i=(0,c._X)(r);return[i,(0,l.useCallback)(e=>{if(!r)return;let n=new URLSearchParams(t.location.search);n.set(r,e),t.replace({...t.location,search:n.toString()})},[r,t])]}({queryString:a,groupId:t}),[g,v]=function(e){var n;let{groupId:a}=e;let t=(n=a)?`docusaurus.tab.${n}`:null,[r,i]=(0,d.Nk)(t);return[r,(0,l.useCallback)(e=>{if(!!t)i.set(e)},[t,i])]}({groupId:t}),x=(()=>{let e=m??g;return h({value:e,tabValues:r})?e:null})();return(0,s.Z)(()=>{x&&b(x)},[x]),{selectedValue:i,selectValue:(0,l.useCallback)(e=>{if(!h({value:e,tabValues:r}))throw Error(`Can't select invalid tab value=${e}`);b(e),f(e),v(e)},[f,v,r]),tabValues:r}}(e);return(0,t.jsxs)("div",{className:(0,r.Z)("tabs-container",m),children:[(0,t.jsx)(g,{...n,...e}),(0,t.jsx)(v,{...n,...e})]})}function j(e){let n=(0,b.Z)();return(0,t.jsx)(x,{...e,children:p(e.children)},String(n))}},80980:function(e,n,a){a.d(n,{Z:function(){return o},a:function(){return i}});var t=a(27378);let l={},r=t.createContext(l);function i(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);