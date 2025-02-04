"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["1857"],{59278:function(e,r,t){t.r(r),t.d(r,{metadata:()=>n,contentTitle:()=>s,default:()=>h,assets:()=>c,toc:()=>d,frontMatter:()=>u});var n=JSON.parse('{"id":"babel-helper-remove-or-void","title":"babel-helper-remove-or-void","description":"","source":"@site/../docs/helper-remove-or-void.md","sourceDirName":".","slug":"/babel-helper-remove-or-void","permalink":"/docs/babel-helper-remove-or-void","draft":false,"unlisted":false,"editUrl":"https://github.com/babel/website/edit/main/docs/../docs/helper-remove-or-void.md","tags":[],"version":"current","frontMatter":{"id":"babel-helper-remove-or-void","title":"babel-helper-remove-or-void","sidebar_label":"babel-helper-remove-or-void"}}'),a=t("24246"),l=t("80980"),o=t("95181"),i=t("38049");let u={id:"babel-helper-remove-or-void",title:"babel-helper-remove-or-void",sidebar_label:"babel-helper-remove-or-void"},s=void 0,c={},d=[];function p(e){let r={code:"code",pre:"pre",...(0,l.a)(),...e.components};return(0,a.jsxs)(o.Z,{groupId:"npm2yarn",children:[(0,a.jsx)(i.Z,{value:"npm",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",children:"npm install babel-helper-remove-or-void --save-dev\n"})})}),(0,a.jsx)(i.Z,{value:"yarn",label:"Yarn",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",children:"yarn add babel-helper-remove-or-void --dev\n"})})}),(0,a.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",children:"pnpm add babel-helper-remove-or-void --save-dev\n"})})})]})}function h(e={}){let{wrapper:r}={...(0,l.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},38049:function(e,r,t){t.d(r,{Z:()=>o});var n=t("24246");t("27378");var a=t("90496");let l="tabItem_wHwb";function o(e){let{children:r,hidden:t,className:o}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:t,children:r})}},95181:function(e,r,t){t.d(r,{Z:()=>j});var n=t("24246"),a=t("27378"),l=t("90496"),o=t("85403"),i=t("3620"),u=t("77090"),s=t("76180"),c=t("23418"),d=t("19073");function p(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||a.isValidElement(e)&&function(e){let{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:r,tabValues:t}=e;return t.some(e=>e.value===r)}var v=t("3344");let m="tabList_J5MA",b="tabItem_l0OV";function f(e){let{className:r,block:t,selectedValue:a,selectValue:i,tabValues:u}=e,s=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{let r=e.currentTarget,t=u[s.indexOf(r)].value;t!==a&&(c(r),i(t))},p=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let t=s.indexOf(e.currentTarget)+1;r=s[t]??s[0];break}case"ArrowLeft":{let t=s.indexOf(e.currentTarget)-1;r=s[t]??s[s.length-1]}}r?.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},r),children:u.map(e=>{let{value:r,label:t,attributes:o}=e;return(0,n.jsx)("li",{role:"tab",tabIndex:a===r?0:-1,"aria-selected":a===r,ref:e=>s.push(e),onKeyDown:p,onClick:d,...o,className:(0,l.Z)("tabs__item",b,o?.className,{"tabs__item--active":a===r}),children:t??r},r)})})}function x(e){let{lazy:r,children:t,selectedValue:o}=e,i=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){let e=i.find(e=>e.props.value===o);return e?(0,a.cloneElement)(e,{className:(0,l.Z)("margin-top--md",e.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:i.map((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==o}))})}function g(e){let r=function(e){let{defaultValue:r,queryString:t=!1,groupId:n}=e,l=function(e){let{values:r,children:t}=e;return(0,a.useMemo)(()=>{let e=r??p(t).map(e=>{let{props:{value:r,label:t,attributes:n,default:a}}=e;return{value:r,label:t,attributes:n,default:a}});return!function(e){let r=(0,c.lx)(e,(e,r)=>e.value===r.value);if(r.length>0)throw Error(`Docusaurus error: Duplicate values "${r.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[r,t])}(e),[o,v]=(0,a.useState)(()=>(function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}let n=t.find(e=>e.default)??t[0];if(!n)throw Error("Unexpected error: 0 tabValues");return n.value})({defaultValue:r,tabValues:l})),[m,b]=function(e){let{queryString:r=!1,groupId:t}=e,n=(0,i.k6)(),l=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t}),o=(0,s._X)(l);return[o,(0,a.useCallback)(e=>{if(!l)return;let r=new URLSearchParams(n.location.search);r.set(l,e),n.replace({...n.location,search:r.toString()})},[l,n])]}({queryString:t,groupId:n}),[f,x]=function(e){var r;let{groupId:t}=e;let n=(r=t)?`docusaurus.tab.${r}`:null,[l,o]=(0,d.Nk)(n);return[l,(0,a.useCallback)(e=>{if(!!n)o.set(e)},[n,o])]}({groupId:n}),g=(()=>{let e=m??f;return h({value:e,tabValues:l})?e:null})();return(0,u.Z)(()=>{g&&v(g)},[g]),{selectedValue:o,selectValue:(0,a.useCallback)(e=>{if(!h({value:e,tabValues:l}))throw Error(`Can't select invalid tab value=${e}`);v(e),b(e),x(e)},[b,x,l]),tabValues:l}}(e);return(0,n.jsxs)("div",{className:(0,l.Z)("tabs-container",m),children:[(0,n.jsx)(f,{...r,...e}),(0,n.jsx)(x,{...r,...e})]})}function j(e){let r=(0,v.Z)();return(0,n.jsx)(g,{...e,children:p(e.children)},String(r))}},80980:function(e,r,t){t.d(r,{Z:function(){return i},a:function(){return o}});var n=t(27378);let a={},l=n.createContext(a);function o(e){let r=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(l.Provider,{value:r},e.children)}}}]);