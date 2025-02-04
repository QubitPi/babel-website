"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["4786"],{61130:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>c,default:()=>p,assets:()=>d,toc:()=>u,frontMatter:()=>o});var r=JSON.parse('{"id":"babel-preset-stage-1","title":"@babel/preset-stage-1","description":"As of Babel v7, all the stage presets have been deprecated.","source":"@site/../docs/preset-stage-1.md","sourceDirName":".","slug":"/babel-preset-stage-1","permalink":"/docs/babel-preset-stage-1","draft":false,"unlisted":false,"editUrl":"https://github.com/babel/website/edit/main/docs/../docs/preset-stage-1.md","tags":[],"version":"current","frontMatter":{"id":"babel-preset-stage-1","title":"@babel/preset-stage-1","sidebar_label":"stage-1"}}'),a=n("24246"),s=n("80980"),l=n("95181"),i=n("38049");let o={id:"babel-preset-stage-1",title:"@babel/preset-stage-1",sidebar_label:"stage-1"},c=void 0,d={},u=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"With a configuration file (Recommended)",id:"with-a-configuration-file-recommended",level:3},{value:"Via CLI",id:"via-cli",level:3},{value:"Via Node API",id:"via-node-api",level:3},{value:"Options",id:"options",level:2},{value:"<code>loose</code>",id:"loose",level:3},{value:"<code>useBuiltIns</code>",id:"usebuiltins",level:3},{value:"<code>decoratorsLegacy</code>",id:"decoratorslegacy",level:3},{value:"References",id:"references",level:2}];function h(e){let t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.admonition,{type:"danger",children:[(0,a.jsxs)(t.p,{children:["As of Babel v7, all the stage presets have been deprecated.\nCheck ",(0,a.jsx)(t.a,{href:"/blog/2018/07/27/removing-babels-stage-presets",children:"the blog post"})," for more information."]}),(0,a.jsxs)(t.p,{children:["For upgrade instructions, see ",(0,a.jsx)(t.a,{href:"https://github.com/babel/babel/blob/master/packages/babel-preset-stage-1/README.md",children:"the README"}),"."]})]}),"\n",(0,a.jsx)(t.p,{children:"The gist of Stage 1 is:"}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Stage 1"}),": proposal"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"What is it?"})," A formal proposal for the feature."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"What\u2019s required?"})," A so-called champion must be identified who is responsible for the proposal. Either the champion or a co-champion must be a member of TC39 (source). The problem solved by the proposal must be described in prose. The solution must be described via examples, an API and a discussion of semantics and algorithms. Lastly, potential obstacles for the proposal must be identified, such as interactions with other features and implementation challenges. Implementation-wise, polyfills and demos are needed."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"What\u2019s next?"})," By accepting a proposal for stage 1, TC39 declares its willingness to examine, discuss and contribute to the proposal. Going forward, major changes to the proposal are expected"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"install",children:"Install"}),"\n",(0,a.jsxs)(l.Z,{groupId:"npm2yarn",children:[(0,a.jsx)(i.Z,{value:"npm",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"npm install --save-dev @babel/preset-stage-1\n"})})}),(0,a.jsx)(i.Z,{value:"yarn",label:"Yarn",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"yarn add --dev @babel/preset-stage-1\n"})})}),(0,a.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"pnpm add --save-dev @babel/preset-stage-1\n"})})})]}),"\n",(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(t.h3,{id:"with-a-configuration-file-recommended",children:"With a configuration file (Recommended)"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",metastring:'title="babel.config.json"',children:'{\n  "presets": ["@babel/preset-stage-1"]\n}\n'})}),"\n",(0,a.jsx)(t.h3,{id:"via-cli",children:"Via CLI"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sh",metastring:'title="Shell"',children:"babel script.js --presets @babel/preset-stage-1\n"})}),"\n",(0,a.jsx)(t.h3,{id:"via-node-api",children:"Via Node API"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",metastring:'title="JavaScript"',children:'require("@babel/core").transformSync("code", {\n  presets: ["@babel/preset-stage-1"]\n});\n'})}),"\n",(0,a.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,a.jsx)(t.h3,{id:"loose",children:(0,a.jsx)(t.code,{children:"loose"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"boolean"}),", defaults to ",(0,a.jsx)(t.code,{children:"false"}),"."]}),"\n",(0,a.jsx)(t.p,{children:'Enable "loose" transformations for any plugins in this preset that allow them.'}),"\n",(0,a.jsx)(t.h3,{id:"usebuiltins",children:(0,a.jsx)(t.code,{children:"useBuiltIns"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"boolean"}),", defaults to ",(0,a.jsx)(t.code,{children:"false"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"Will use the native built-in instead of trying to polyfill behavior for any plugins that require one."}),"\n",(0,a.jsx)(t.h3,{id:"decoratorslegacy",children:(0,a.jsx)(t.code,{children:"decoratorsLegacy"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"boolean"}),", defaults to ",(0,a.jsx)(t.code,{children:"false"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"Use the legacy (stage 1) decorators syntax and behavior."}),"\n",(0,a.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:['Chapter "',(0,a.jsx)(t.a,{href:"http://exploringjs.com/es2016-es2017/ch_tc39-process.html",children:"The TC39 process for ECMAScript features"}),'" in "Exploring ES2016 and ES2017" by Axel Rauschmayer']}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},38049:function(e,t,n){n.d(t,{Z:()=>l});var r=n("24246");n("27378");var a=n("90496");let s="tabItem_wHwb";function l(e){let{children:t,hidden:n,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(s,l),hidden:n,children:t})}},95181:function(e,t,n){n.d(t,{Z:()=>j});var r=n("24246"),a=n("27378"),s=n("90496"),l=n("85403"),i=n("3620"),o=n("77090"),c=n("76180"),d=n("23418"),u=n("19073");function h(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||a.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:t,tabValues:n}=e;return n.some(e=>e.value===t)}var b=n("3344");let f="tabList_J5MA",m="tabItem_l0OV";function g(e){let{className:t,block:n,selectedValue:a,selectValue:i,tabValues:o}=e,c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),u=e=>{let t=e.currentTarget,n=o[c.indexOf(t)].value;n!==a&&(d(t),i(n))},h=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{let n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1]}}t?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:o.map(e=>{let{value:t,label:n,attributes:l}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>c.push(e),onKeyDown:h,onClick:u,...l,className:(0,s.Z)("tabs__item",m,l?.className,{"tabs__item--active":a===t}),children:n??t},t)})})}function x(e){let{lazy:t,children:n,selectedValue:l}=e,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){let e=i.find(e=>e.props.value===l);return e?(0,a.cloneElement)(e,{className:(0,s.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:i.map((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==l}))})}function v(e){let t=function(e){let{defaultValue:t,queryString:n=!1,groupId:r}=e,s=function(e){let{values:t,children:n}=e;return(0,a.useMemo)(()=>{let e=t??h(n).map(e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}});return!function(e){let t=(0,d.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,n])}(e),[l,b]=(0,a.useState)(()=>(function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let r=n.find(e=>e.default)??n[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:t,tabValues:s})),[f,m]=function(e){let{queryString:t=!1,groupId:n}=e,r=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n}),l=(0,c._X)(s);return[l,(0,a.useCallback)(e=>{if(!s)return;let t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})},[s,r])]}({queryString:n,groupId:r}),[g,x]=function(e){var t;let{groupId:n}=e;let r=(t=n)?`docusaurus.tab.${t}`:null,[s,l]=(0,u.Nk)(r);return[s,(0,a.useCallback)(e=>{if(!!r)l.set(e)},[r,l])]}({groupId:r}),v=(()=>{let e=f??g;return p({value:e,tabValues:s})?e:null})();return(0,o.Z)(()=>{v&&b(v)},[v]),{selectedValue:l,selectValue:(0,a.useCallback)(e=>{if(!p({value:e,tabValues:s}))throw Error(`Can't select invalid tab value=${e}`);b(e),m(e),x(e)},[m,x,s]),tabValues:s}}(e);return(0,r.jsxs)("div",{className:(0,s.Z)("tabs-container",f),children:[(0,r.jsx)(g,{...t,...e}),(0,r.jsx)(x,{...t,...e})]})}function j(e){let t=(0,b.Z)();return(0,r.jsx)(v,{...e,children:h(e.children)},String(t))}},80980:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return l}});var r=n(27378);let a={},s=r.createContext(a);function l(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);