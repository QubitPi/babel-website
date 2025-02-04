"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["6148"],{93807:function(e,n,r){r.r(n),r.d(n,{metadata:()=>a,contentTitle:()=>c,default:()=>h,assets:()=>d,toc:()=>u,frontMatter:()=>o});var a=JSON.parse('{"id":"babel-plugin-transform-spread","title":"@babel/plugin-transform-spread","description":"This plugin is included in @babel/preset-env","source":"@site/../docs/plugin-transform-spread.md","sourceDirName":".","slug":"/babel-plugin-transform-spread","permalink":"/docs/babel-plugin-transform-spread","draft":false,"unlisted":false,"editUrl":"https://github.com/babel/website/edit/main/docs/../docs/plugin-transform-spread.md","tags":[],"version":"current","frontMatter":{"id":"babel-plugin-transform-spread","title":"@babel/plugin-transform-spread","sidebar_label":"spread"},"sidebar":"docs","previous":{"title":"shorthand-properties","permalink":"/docs/babel-plugin-transform-shorthand-properties"},"next":{"title":"sticky-regex","permalink":"/docs/babel-plugin-transform-sticky-regex"}}'),l=r("24246"),s=r("80980"),i=r("95181"),t=r("38049");let o={id:"babel-plugin-transform-spread",title:"@babel/plugin-transform-spread",sidebar_label:"spread"},c=void 0,d={},u=[{value:"Example",id:"example",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"With a configuration file (Recommended)",id:"with-a-configuration-file-recommended",level:3},{value:"Via CLI",id:"via-cli",level:3},{value:"Via Node API",id:"via-node-api",level:3},{value:"Options",id:"options",level:2},{value:"<code>loose</code>",id:"loose",level:3},{value:"<code>allowArrayLike</code>",id:"allowarraylike",level:3},{value:"References",id:"references",level:2}];function p(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.admonition,{type:"info",children:(0,l.jsxs)(n.p,{children:["This plugin is included in ",(0,l.jsx)(n.code,{children:"@babel/preset-env"})]})}),"\n",(0,l.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"In"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'var a = ["a", "b", "c"];\n\nvar b = [...a, "foo"];\n\nvar c = foo(...a);\n'})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Out"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'var a = ["a", "b", "c"];\n\nvar b = a.concat(["foo"]);\n\nvar c = foo.apply(void 0, a);\n'})}),"\n",(0,l.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,l.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,l.jsx)(t.Z,{value:"npm",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"npm install --save-dev @babel/plugin-transform-spread\n"})})}),(0,l.jsx)(t.Z,{value:"yarn",label:"Yarn",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"yarn add --dev @babel/plugin-transform-spread\n"})})}),(0,l.jsx)(t.Z,{value:"pnpm",label:"pnpm",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"pnpm add --save-dev @babel/plugin-transform-spread\n"})})})]}),"\n",(0,l.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(n.h3,{id:"with-a-configuration-file-recommended",children:"With a configuration file (Recommended)"}),"\n",(0,l.jsx)(n.p,{children:"Without options:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",metastring:'title="babel.config.json"',children:'{\n  "plugins": ["@babel/plugin-transform-spread"]\n}\n'})}),"\n",(0,l.jsx)(n.p,{children:"With options:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",metastring:'title="babel.config.json"',children:'{\n  "plugins": [\n    [\n      "@babel/plugin-transform-spread",\n      {\n        "loose": true\n      }\n    ]\n  ]\n}\n'})}),"\n",(0,l.jsx)(n.h3,{id:"via-cli",children:"Via CLI"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"babel --plugins @babel/plugin-transform-spread script.js\n"})}),"\n",(0,l.jsx)(n.h3,{id:"via-node-api",children:"Via Node API"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'require("@babel/core").transformSync("code", {\n  plugins: ["@babel/plugin-transform-spread"],\n});\n'})}),"\n",(0,l.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,l.jsx)(n.h3,{id:"loose",children:(0,l.jsx)(n.code,{children:"loose"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"boolean"}),", defaults to ",(0,l.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["In loose mode, ",(0,l.jsx)(n.strong,{children:"all"})," iterables are assumed to be arrays."]}),"\n",(0,l.jsx)(n.admonition,{type:"caution",children:(0,l.jsxs)(n.p,{children:["Consider migrating to the top level ",(0,l.jsx)(n.a,{href:"/docs/assumptions#iterableisarray",children:(0,l.jsx)(n.code,{children:"iterableIsArray"})})," assumption."]})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",metastring:'title="babel.config.json"',children:'{\n  "assumptions": {\n    "iterableIsArray": true\n  }\n}\n'})}),"\n",(0,l.jsxs)(n.p,{children:["Under the ",(0,l.jsx)(n.code,{children:"iterableIsArray"}),' assumption, Babel preserves "holes" when spreading an array (for example, ',(0,l.jsx)(n.code,{children:"[ ...Array(2) ]"})," produces ",(0,l.jsx)(n.code,{children:"[ (hole), (hole) ]"}),"). Set ",(0,l.jsx)(n.code,{children:"iterableIsArray"})," to ",(0,l.jsx)(n.code,{children:"false"})," to avoid this behaviour."]}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsxs)(n.p,{children:["You can read more about configuring plugin options ",(0,l.jsx)(n.a,{href:"https://babeljs.io/docs/en/plugins#plugin-options",children:"here"})]})}),"\n",(0,l.jsx)(n.h3,{id:"allowarraylike",children:(0,l.jsx)(n.code,{children:"allowArrayLike"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"boolean"}),", defaults to ",(0,l.jsx)(n.code,{children:"false"})]}),"\n",(0,l.jsxs)(n.p,{children:["Added in: ",(0,l.jsx)(n.code,{children:"v7.10.0"})]}),"\n",(0,l.jsx)(n.p,{children:"This option allows spreading array-like objects as if they were arrays."}),"\n",(0,l.jsx)(n.admonition,{type:"caution",children:(0,l.jsxs)(n.p,{children:["Consider migrating to the top level ",(0,l.jsx)(n.a,{href:"/docs/assumptions#arraylikeisiterable",children:(0,l.jsx)(n.code,{children:"arrayLikeIsIterable"})})," assumption."]})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",metastring:'title="babel.config.json"',children:'{\n  "assumptions": {\n    "arrayLikeIsIterable": true\n  }\n}\n'})}),"\n",(0,l.jsxs)(n.p,{children:["An array-like object is an object with a ",(0,l.jsx)(n.code,{children:"length"})," property: for example, ",(0,l.jsx)(n.code,{children:'{ 0: "a", 1: "b", length: 2 }'}),'. Note that, like real arrays, array-like objects can have "holes": ',(0,l.jsx)(n.code,{children:'{ 1: "a", length: 3 }'})," is equivalent to ",(0,l.jsx)(n.code,{children:'[ (hole), "a", (hole) ]'}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["While it is ",(0,l.jsx)(n.em,{children:"not"})," spec-compliant to spread array-like objects as if they were arrays, there are many objects that would be ",(0,l.jsx)(n.em,{children:"iterables"})," in modern browsers with ",(0,l.jsx)(n.code,{children:"Symbol.iterator"})," support. Some notable examples are the DOM collections, like ",(0,l.jsx)(n.code,{children:'document.querySelectorAll("img.big")'}),", which are the main use case for this option."]}),"\n",(0,l.jsxs)(n.p,{children:["Please note that Babel allows spreading ",(0,l.jsx)(n.code,{children:"arguments"})," in old engines even if this option is disabled, because it's defined as ",(0,l.jsx)(n.em,{children:"iterable"})," in the ECMAScript specification."]}),"\n",(0,l.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax",children:"MDN: Spread syntax"})}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},38049:function(e,n,r){r.d(n,{Z:()=>i});var a=r("24246");r("27378");var l=r("90496");let s="tabItem_wHwb";function i(e){let{children:n,hidden:r,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,l.Z)(s,i),hidden:r,children:n})}},95181:function(e,n,r){r.d(n,{Z:()=>v});var a=r("24246"),l=r("27378"),s=r("90496"),i=r("85403"),t=r("3620"),o=r("77090"),c=r("76180"),d=r("23418"),u=r("19073");function p(e){return l.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||l.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:n,tabValues:r}=e;return r.some(e=>e.value===n)}var m=r("3344");let b="tabList_J5MA",f="tabItem_l0OV";function j(e){let{className:n,block:r,selectedValue:l,selectValue:t,tabValues:o}=e,c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),u=e=>{let n=e.currentTarget,r=o[c.indexOf(n)].value;r!==l&&(d(n),t(r))},p=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{let r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1]}}n?.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},n),children:o.map(e=>{let{value:n,label:r,attributes:i}=e;return(0,a.jsx)("li",{role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:e=>c.push(e),onKeyDown:p,onClick:u,...i,className:(0,s.Z)("tabs__item",f,i?.className,{"tabs__item--active":l===n}),children:r??n},n)})})}function x(e){let{lazy:n,children:r,selectedValue:i}=e,t=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){let e=t.find(e=>e.props.value===i);return e?(0,l.cloneElement)(e,{className:(0,s.Z)("margin-top--md",e.props.className)}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:t.map((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==i}))})}function g(e){let n=function(e){let{defaultValue:n,queryString:r=!1,groupId:a}=e,s=function(e){let{values:n,children:r}=e;return(0,l.useMemo)(()=>{let e=n??p(r).map(e=>{let{props:{value:n,label:r,attributes:a,default:l}}=e;return{value:n,label:r,attributes:a,default:l}});return!function(e){let n=(0,d.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,r])}(e),[i,m]=(0,l.useState)(()=>(function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let a=r.find(e=>e.default)??r[0];if(!a)throw Error("Unexpected error: 0 tabValues");return a.value})({defaultValue:n,tabValues:s})),[b,f]=function(e){let{queryString:n=!1,groupId:r}=e,a=(0,t.k6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r}),i=(0,c._X)(s);return[i,(0,l.useCallback)(e=>{if(!s)return;let n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})},[s,a])]}({queryString:r,groupId:a}),[j,x]=function(e){var n;let{groupId:r}=e;let a=(n=r)?`docusaurus.tab.${n}`:null,[s,i]=(0,u.Nk)(a);return[s,(0,l.useCallback)(e=>{if(!!a)i.set(e)},[a,i])]}({groupId:a}),g=(()=>{let e=b??j;return h({value:e,tabValues:s})?e:null})();return(0,o.Z)(()=>{g&&m(g)},[g]),{selectedValue:i,selectValue:(0,l.useCallback)(e=>{if(!h({value:e,tabValues:s}))throw Error(`Can't select invalid tab value=${e}`);m(e),f(e),x(e)},[f,x,s]),tabValues:s}}(e);return(0,a.jsxs)("div",{className:(0,s.Z)("tabs-container",b),children:[(0,a.jsx)(j,{...n,...e}),(0,a.jsx)(x,{...n,...e})]})}function v(e){let n=(0,m.Z)();return(0,a.jsx)(g,{...e,children:p(e.children)},String(n))}},80980:function(e,n,r){r.d(n,{Z:function(){return t},a:function(){return i}});var a=r(27378);let l={},s=a.createContext(l);function i(e){let n=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);