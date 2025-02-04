"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["1435"],{90455:function(e,r,n){n.r(r),n.d(r,{metadata:()=>t,contentTitle:()=>u,default:()=>m,assets:()=>c,toc:()=>d,frontMatter:()=>o});var t=JSON.parse('{"id":"babel-plugin-transform-property-mutators","title":"@babel/plugin-transform-property-mutators","description":"This plugin is included in @babel/preset-env","source":"@site/../docs/plugin-transform-property-mutators.md","sourceDirName":".","slug":"/babel-plugin-transform-property-mutators","permalink":"/babel-website/docs/babel-plugin-transform-property-mutators","draft":false,"unlisted":false,"editUrl":"https://github.com/babel/website/edit/main/docs/../docs/plugin-transform-property-mutators.md","tags":[],"version":"current","frontMatter":{"id":"babel-plugin-transform-property-mutators","title":"@babel/plugin-transform-property-mutators","sidebar_label":"property-mutators"},"sidebar":"docs","previous":{"title":"unicode-regex","permalink":"/babel-website/docs/babel-plugin-transform-unicode-regex"},"next":{"title":"member-expression-literals","permalink":"/babel-website/docs/babel-plugin-transform-member-expression-literals"}}'),a=n("24246"),l=n("80980"),i=n("95181"),s=n("38049");let o={id:"babel-plugin-transform-property-mutators",title:"@babel/plugin-transform-property-mutators",sidebar_label:"property-mutators"},u=void 0,c={},d=[{value:"Example",id:"example",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"With a configuration file (Recommended)",id:"with-a-configuration-file-recommended",level:3},{value:"Via CLI",id:"via-cli",level:3},{value:"Via Node API",id:"via-node-api",level:3}];function p(e){let r={admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.admonition,{type:"info",children:(0,a.jsxs)(r.p,{children:["This plugin is included in ",(0,a.jsx)(r.code,{children:"@babel/preset-env"})]})}),"\n",(0,a.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"In"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",metastring:'title="JavaScript"',children:"var foo = {\n  get bar() {\n    return this._bar;\n  },\n  set bar(value) {\n    this._bar = value;\n  },\n};\n"})}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"Out"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",metastring:'title="JavaScript"',children:"var foo = Object.defineProperties(\n  {},\n  {\n    bar: {\n      get: function() {\n        return this._bar;\n      },\n      set: function(value) {\n        this._bar = value;\n      },\n      configurable: true,\n      enumerable: true,\n    },\n  }\n);\n"})}),"\n",(0,a.jsx)(r.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,a.jsx)(s.Z,{value:"npm",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",children:"npm install --save-dev @babel/plugin-transform-property-mutators\n"})})}),(0,a.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",children:"yarn add --dev @babel/plugin-transform-property-mutators\n"})})}),(0,a.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",children:"pnpm add --save-dev @babel/plugin-transform-property-mutators\n"})})})]}),"\n",(0,a.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(r.h3,{id:"with-a-configuration-file-recommended",children:"With a configuration file (Recommended)"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-json",metastring:'title="babel.config.json"',children:'{\n  "plugins": ["@babel/plugin-transform-property-mutators"]\n}\n'})}),"\n",(0,a.jsx)(r.h3,{id:"via-cli",children:"Via CLI"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sh",metastring:'title="Shell"',children:"babel --plugins @babel/plugin-transform-property-mutators script.js\n"})}),"\n",(0,a.jsx)(r.h3,{id:"via-node-api",children:"Via Node API"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",metastring:'title="JavaScript"',children:'require("@babel/core").transformSync("code", {\n  plugins: ["@babel/plugin-transform-property-mutators"],\n});\n'})})]})}function m(e={}){let{wrapper:r}={...(0,l.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},38049:function(e,r,n){n.d(r,{Z:()=>i});var t=n("24246");n("27378");var a=n("90496");let l="tabItem_wHwb";function i(e){let{children:r,hidden:n,className:i}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:n,children:r})}},95181:function(e,r,n){n.d(r,{Z:()=>j});var t=n("24246"),a=n("27378"),l=n("90496"),i=n("85403"),s=n("3620"),o=n("77090"),u=n("76180"),c=n("23418"),d=n("19073");function p(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||a.isValidElement(e)&&function(e){let{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function m(e){let{value:r,tabValues:n}=e;return n.some(e=>e.value===r)}var b=n("3344");let h="tabList_J5MA",f="tabItem_l0OV";function g(e){let{className:r,block:n,selectedValue:a,selectValue:s,tabValues:o}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{let r=e.currentTarget,n=o[u.indexOf(r)].value;n!==a&&(c(r),s(n))},p=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let n=u.indexOf(e.currentTarget)+1;r=u[n]??u[0];break}case"ArrowLeft":{let n=u.indexOf(e.currentTarget)-1;r=u[n]??u[u.length-1]}}r?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},r),children:o.map(e=>{let{value:r,label:n,attributes:i}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:a===r?0:-1,"aria-selected":a===r,ref:e=>u.push(e),onKeyDown:p,onClick:d,...i,className:(0,l.Z)("tabs__item",f,i?.className,{"tabs__item--active":a===r}),children:n??r},r)})})}function v(e){let{lazy:r,children:n,selectedValue:i}=e,s=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){let e=s.find(e=>e.props.value===i);return e?(0,a.cloneElement)(e,{className:(0,l.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:s.map((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==i}))})}function x(e){let r=function(e){let{defaultValue:r,queryString:n=!1,groupId:t}=e,l=function(e){let{values:r,children:n}=e;return(0,a.useMemo)(()=>{let e=r??p(n).map(e=>{let{props:{value:r,label:n,attributes:t,default:a}}=e;return{value:r,label:n,attributes:t,default:a}});return!function(e){let r=(0,c.lx)(e,(e,r)=>e.value===r.value);if(r.length>0)throw Error(`Docusaurus error: Duplicate values "${r.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[r,n])}(e),[i,b]=(0,a.useState)(()=>(function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}let t=n.find(e=>e.default)??n[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:r,tabValues:l})),[h,f]=function(e){let{queryString:r=!1,groupId:n}=e,t=(0,s.k6)(),l=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n}),i=(0,u._X)(l);return[i,(0,a.useCallback)(e=>{if(!l)return;let r=new URLSearchParams(t.location.search);r.set(l,e),t.replace({...t.location,search:r.toString()})},[l,t])]}({queryString:n,groupId:t}),[g,v]=function(e){var r;let{groupId:n}=e;let t=(r=n)?`docusaurus.tab.${r}`:null,[l,i]=(0,d.Nk)(t);return[l,(0,a.useCallback)(e=>{if(!!t)i.set(e)},[t,i])]}({groupId:t}),x=(()=>{let e=h??g;return m({value:e,tabValues:l})?e:null})();return(0,o.Z)(()=>{x&&b(x)},[x]),{selectedValue:i,selectValue:(0,a.useCallback)(e=>{if(!m({value:e,tabValues:l}))throw Error(`Can't select invalid tab value=${e}`);b(e),f(e),v(e)},[f,v,l]),tabValues:l}}(e);return(0,t.jsxs)("div",{className:(0,l.Z)("tabs-container",h),children:[(0,t.jsx)(g,{...r,...e}),(0,t.jsx)(v,{...r,...e})]})}function j(e){let r=(0,b.Z)();return(0,t.jsx)(x,{...e,children:p(e.children)},String(r))}},80980:function(e,r,n){n.d(r,{Z:function(){return s},a:function(){return i}});var t=n(27378);let a={},l=t.createContext(a);function i(e){let r=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(l.Provider,{value:r},e.children)}}}]);