"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["6439"],{21760:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>p,assets:()=>u,toc:()=>d,frontMatter:()=>o});var t=JSON.parse('{"id":"babel-plugin-transform-dotall-regex","title":"@babel/plugin-transform-dotall-regex","description":"This plugin is included in @babel/preset-env, in ES2018","source":"@site/../docs/plugin-transform-dotall-regex.md","sourceDirName":".","slug":"/babel-plugin-transform-dotall-regex","permalink":"/babel-website/docs/babel-plugin-transform-dotall-regex","draft":false,"unlisted":false,"editUrl":"https://github.com/babel/website/edit/main/docs/../docs/plugin-transform-dotall-regex.md","tags":[],"version":"current","frontMatter":{"id":"babel-plugin-transform-dotall-regex","title":"@babel/plugin-transform-dotall-regex","sidebar_label":"dotall-regex"},"sidebar":"docs","previous":{"title":"unicode-property-regex","permalink":"/babel-website/docs/babel-plugin-transform-unicode-property-regex"},"next":{"title":"named-capturing-groups-regex","permalink":"/babel-website/docs/babel-plugin-transform-named-capturing-groups-regex"}}'),l=r("24246"),a=r("80980"),i=r("95181"),s=r("38049");let o={id:"babel-plugin-transform-dotall-regex",title:"@babel/plugin-transform-dotall-regex",sidebar_label:"dotall-regex"},c=void 0,u={},d=[{value:"Example",id:"example",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"With a configuration file (Recommended)",id:"with-a-configuration-file-recommended",level:3},{value:"Via CLI",id:"via-cli",level:3},{value:"Via Node.js API",id:"via-nodejs-api",level:3},{value:"Author",id:"author",level:2}];function h(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.admonition,{type:"info",children:(0,l.jsxs)(n.p,{children:["This plugin is included in ",(0,l.jsx)(n.code,{children:"@babel/preset-env"}),", in ",(0,l.jsx)(n.a,{href:"https://github.com/tc39/proposals/blob/master/finished-proposals.md",children:"ES2018"})]})}),"\n",(0,l.jsxs)(n.p,{children:["This plugin transforms regular expression ",(0,l.jsx)(n.em,{children:"literals"})," to support the ",(0,l.jsx)(n.code,{children:"/s"})," flag. It does not patch the ",(0,l.jsx)(n.code,{children:"new RegExp"})," constructor, since its arguments cannot be pre-transformed statically: to handle runtime behavior of functions/classes, you will need to use a polyfill instead."]}),"\n",(0,l.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"In"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:"/./s;\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Out"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:"/[\\0-\\uFFFF]/;\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"In"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:"/./su;\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Out"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:"/[\\0-\\u{10FFFF}]/u;\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://mothereff.in/regexpu#input=const+regex+%3D+/foo.bar/s%3B%0Aconsole.log%28%0A++regex.test%28%27foo%5Cnbar%27%29%0A%29%3B%0A//+%E2%86%92+true&dotAllFlag=1",children:"Here\u2019s an online demo."})}),"\n",(0,l.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,l.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,l.jsx)(s.Z,{value:"npm",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"npm install --save-dev @babel/plugin-transform-dotall-regex\n"})})}),(0,l.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"yarn add --dev @babel/plugin-transform-dotall-regex\n"})})}),(0,l.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"pnpm add --save-dev @babel/plugin-transform-dotall-regex\n"})})})]}),"\n",(0,l.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(n.h3,{id:"with-a-configuration-file-recommended",children:"With a configuration file (Recommended)"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:".babelrc"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",metastring:'title="babel.config.json"',children:'{\n  "plugins": ["@babel/plugin-transform-dotall-regex"]\n}\n'})}),"\n",(0,l.jsx)(n.h3,{id:"via-cli",children:"Via CLI"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"$ babel --plugins @babel/plugin-transform-dotall-regex script.js\n"})}),"\n",(0,l.jsx)(n.h3,{id:"via-nodejs-api",children:"Via Node.js API"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'require("@babel/core").transformSync(code, {\n  plugins: ["@babel/plugin-transform-dotall-regex"],\n});\n'})}),"\n",(0,l.jsx)(n.h2,{id:"author",children:"Author"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsx)(n.tr,{children:(0,l.jsx)(n.th,{children:(0,l.jsx)(n.a,{href:"https://twitter.com/mathias",title:"Follow @mathias on Twitter",children:(0,l.jsx)(n.img,{src:"https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70",alt:"twitter/mathias"})})})})}),(0,l.jsx)(n.tbody,{children:(0,l.jsx)(n.tr,{children:(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"https://mathiasbynens.be/",children:"Mathias Bynens"})})})})]})]})}function p(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},38049:function(e,n,r){r.d(n,{Z:()=>i});var t=r("24246");r("27378");var l=r("90496");let a="tabItem_wHwb";function i(e){let{children:n,hidden:r,className:i}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,l.Z)(a,i),hidden:r,children:n})}},95181:function(e,n,r){r.d(n,{Z:()=>v});var t=r("24246"),l=r("27378"),a=r("90496"),i=r("85403"),s=r("3620"),o=r("77090"),c=r("76180"),u=r("23418"),d=r("19073");function h(e){return l.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||l.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:n,tabValues:r}=e;return r.some(e=>e.value===n)}var m=r("3344");let g="tabList_J5MA",b="tabItem_l0OV";function f(e){let{className:n,block:r,selectedValue:l,selectValue:s,tabValues:o}=e,c=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),d=e=>{let n=e.currentTarget,r=o[c.indexOf(n)].value;r!==l&&(u(n),s(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{let r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1]}}n?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:o.map(e=>{let{value:n,label:r,attributes:i}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:e=>c.push(e),onKeyDown:h,onClick:d,...i,className:(0,a.Z)("tabs__item",b,i?.className,{"tabs__item--active":l===n}),children:r??n},n)})})}function x(e){let{lazy:n,children:r,selectedValue:i}=e,s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){let e=s.find(e=>e.props.value===i);return e?(0,l.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:s.map((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==i}))})}function j(e){let n=function(e){let{defaultValue:n,queryString:r=!1,groupId:t}=e,a=function(e){let{values:n,children:r}=e;return(0,l.useMemo)(()=>{let e=n??h(r).map(e=>{let{props:{value:n,label:r,attributes:t,default:l}}=e;return{value:n,label:r,attributes:t,default:l}});return!function(e){let n=(0,u.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,r])}(e),[i,m]=(0,l.useState)(()=>(function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let t=r.find(e=>e.default)??r[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:n,tabValues:a})),[g,b]=function(e){let{queryString:n=!1,groupId:r}=e,t=(0,s.k6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r}),i=(0,c._X)(a);return[i,(0,l.useCallback)(e=>{if(!a)return;let n=new URLSearchParams(t.location.search);n.set(a,e),t.replace({...t.location,search:n.toString()})},[a,t])]}({queryString:r,groupId:t}),[f,x]=function(e){var n;let{groupId:r}=e;let t=(n=r)?`docusaurus.tab.${n}`:null,[a,i]=(0,d.Nk)(t);return[a,(0,l.useCallback)(e=>{if(!!t)i.set(e)},[t,i])]}({groupId:t}),j=(()=>{let e=g??f;return p({value:e,tabValues:a})?e:null})();return(0,o.Z)(()=>{j&&m(j)},[j]),{selectedValue:i,selectValue:(0,l.useCallback)(e=>{if(!p({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);m(e),b(e),x(e)},[b,x,a]),tabValues:a}}(e);return(0,t.jsxs)("div",{className:(0,a.Z)("tabs-container",g),children:[(0,t.jsx)(f,{...n,...e}),(0,t.jsx)(x,{...n,...e})]})}function v(e){let n=(0,m.Z)();return(0,t.jsx)(j,{...e,children:h(e.children)},String(n))}},80980:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return i}});var t=r(27378);let l={},a=t.createContext(l);function i(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);