"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["4847"],{90777:function(e,n,r){r.r(n),r.d(n,{metadata:()=>a,contentTitle:()=>u,default:()=>g,assets:()=>c,toc:()=>d,frontMatter:()=>o});var a=JSON.parse('{"id":"babel-plugin-transform-duplicate-named-capturing-groups-regex","title":"@babel/plugin-transform-duplicate-named-capturing-groups-regex","description":"This plugin is included in @babel/preset-env, in ES2025.","source":"@site/../docs/plugin-transform-duplicate-named-capturing-groups-regex.md","sourceDirName":".","slug":"/babel-plugin-transform-duplicate-named-capturing-groups-regex","permalink":"/docs/babel-plugin-transform-duplicate-named-capturing-groups-regex","draft":false,"unlisted":false,"editUrl":"https://github.com/babel/website/edit/main/docs/../docs/plugin-transform-duplicate-named-capturing-groups-regex.md","tags":[],"version":"current","frontMatter":{"id":"babel-plugin-transform-duplicate-named-capturing-groups-regex","title":"@babel/plugin-transform-duplicate-named-capturing-groups-regex","sidebar_label":"duplicate-named-capturing-groups-regex"},"sidebar":"docs","previous":{"title":"@babel/preset-env","permalink":"/docs/babel-preset-env"},"next":{"title":"json-modules","permalink":"/docs/babel-plugin-transform-json-modules"}}'),t=r("24246"),l=r("80980"),i=r("95181"),s=r("38049");let o={id:"babel-plugin-transform-duplicate-named-capturing-groups-regex",title:"@babel/plugin-transform-duplicate-named-capturing-groups-regex",sidebar_label:"duplicate-named-capturing-groups-regex"},u=void 0,c={},d=[{value:"Examples",id:"examples",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"With a configuration file (Recommended)",id:"with-a-configuration-file-recommended",level:3},{value:"Via CLI",id:"via-cli",level:3},{value:"Via Node API",id:"via-node-api",level:3},{value:"Options",id:"options",level:2},{value:"<code>runtime</code>",id:"runtime",level:3},{value:"References",id:"references",level:2}];function p(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["This plugin is included in ",(0,t.jsx)(n.code,{children:"@babel/preset-env"}),", in ",(0,t.jsx)(n.a,{href:"https://github.com/tc39/proposals/blob/master/finished-proposals.md",children:"ES2025"}),"."]})}),"\n",(0,t.jsxs)(n.p,{children:["This plugin transforms regular expression ",(0,t.jsx)(n.em,{children:"literals"})," to support duplicate named capturing groups. It does not patch the ",(0,t.jsx)(n.code,{children:"new RegExp"})," constructor, since its arguments cannot be pre-transformed statically: to handle runtime behavior of functions/classes, you will need to use a polyfill instead."]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"In"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'var re = /(?<year>\\d{4})-(?<month>\\d{2})|(?<month>\\d{2})-(?<year>\\d{4})/;\n\nconsole.log(re.exec("02-1999").groups.year);\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Out"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'var re = _wrapRegExp(/(\\d{4})-(\\d{2})|(\\d{2})-(\\d{4})/, {\n  year: [1, 4],\n  month: [2, 3],\n});\n\nconsole.log(re.exec("02-1999").groups.year);\n'})}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(s.Z,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"npm install --save-dev @babel/plugin-transform-duplicate-named-capturing-groups-regex\n"})})}),(0,t.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"yarn add --dev @babel/plugin-transform-duplicate-named-capturing-groups-regex\n"})})}),(0,t.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"pnpm add --save-dev @babel/plugin-transform-duplicate-named-capturing-groups-regex\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.h3,{id:"with-a-configuration-file-recommended",children:"With a configuration file (Recommended)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="babel.config.json"',children:'{\n  "plugins": ["@babel/plugin-transform-duplicate-named-capturing-groups-regex"]\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"via-cli",children:"Via CLI"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"babel --plugins @babel/plugin-transform-duplicate-named-capturing-groups-regex script.js\n"})}),"\n",(0,t.jsx)(n.h3,{id:"via-node-api",children:"Via Node API"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'require("@babel/core").transformSync("code", {\n  plugins: ["@babel/plugin-transform-duplicate-named-capturing-groups-regex"],\n});\n'})}),"\n",(0,t.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,t.jsx)(n.h3,{id:"runtime",children:(0,t.jsx)(n.code,{children:"runtime"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"boolean"}),", defaults to ",(0,t.jsx)(n.code,{children:"true"})]}),"\n",(0,t.jsxs)(n.p,{children:["When this option is disabled, Babel doesn't wrap RegExps with the ",(0,t.jsx)(n.code,{children:"_wrapRegExp"})," helper.\nThe output only supports internal group references, and not runtime properties:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'var stringRe = /(?:(?<quote>")|(?<quote>\')).*?\\k<quote>/;\n\nstringRe.test("\'foo\'"); // "true", works\nstringRe.exec("\'foo\'").groups.quote; // undefined\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["You can read more about configuring plugin options ",(0,t.jsx)(n.a,{href:"https://babeljs.io/docs/en/plugins#plugin-options",children:"here"})]})}),"\n",(0,t.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/tc39/proposal-duplicate-named-capturing-groups",children:"Proposal: Duplicate named capturing groups"})}),"\n"]})]})}function g(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},38049:function(e,n,r){r.d(n,{Z:()=>i});var a=r("24246");r("27378");var t=r("90496");let l="tabItem_wHwb";function i(e){let{children:n,hidden:r,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.Z)(l,i),hidden:r,children:n})}},95181:function(e,n,r){r.d(n,{Z:()=>j});var a=r("24246"),t=r("27378"),l=r("90496"),i=r("85403"),s=r("3620"),o=r("77090"),u=r("76180"),c=r("23418"),d=r("19073");function p(e){return t.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||t.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function g(e){let{value:n,tabValues:r}=e;return r.some(e=>e.value===n)}var h=r("3344");let m="tabList_J5MA",f="tabItem_l0OV";function b(e){let{className:n,block:r,selectedValue:t,selectValue:s,tabValues:o}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{let n=e.currentTarget,r=o[u.indexOf(n)].value;r!==t&&(c(n),s(r))},p=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let r=u.indexOf(e.currentTarget)+1;n=u[r]??u[0];break}case"ArrowLeft":{let r=u.indexOf(e.currentTarget)-1;n=u[r]??u[u.length-1]}}n?.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},n),children:o.map(e=>{let{value:n,label:r,attributes:i}=e;return(0,a.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>u.push(e),onKeyDown:p,onClick:d,...i,className:(0,l.Z)("tabs__item",f,i?.className,{"tabs__item--active":t===n}),children:r??n},n)})})}function x(e){let{lazy:n,children:r,selectedValue:i}=e,s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){let e=s.find(e=>e.props.value===i);return e?(0,t.cloneElement)(e,{className:(0,l.Z)("margin-top--md",e.props.className)}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:s.map((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==i}))})}function v(e){let n=function(e){let{defaultValue:n,queryString:r=!1,groupId:a}=e,l=function(e){let{values:n,children:r}=e;return(0,t.useMemo)(()=>{let e=n??p(r).map(e=>{let{props:{value:n,label:r,attributes:a,default:t}}=e;return{value:n,label:r,attributes:a,default:t}});return!function(e){let n=(0,c.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,r])}(e),[i,h]=(0,t.useState)(()=>(function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let a=r.find(e=>e.default)??r[0];if(!a)throw Error("Unexpected error: 0 tabValues");return a.value})({defaultValue:n,tabValues:l})),[m,f]=function(e){let{queryString:n=!1,groupId:r}=e,a=(0,s.k6)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r}),i=(0,u._X)(l);return[i,(0,t.useCallback)(e=>{if(!l)return;let n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})},[l,a])]}({queryString:r,groupId:a}),[b,x]=function(e){var n;let{groupId:r}=e;let a=(n=r)?`docusaurus.tab.${n}`:null,[l,i]=(0,d.Nk)(a);return[l,(0,t.useCallback)(e=>{if(!!a)i.set(e)},[a,i])]}({groupId:a}),v=(()=>{let e=m??b;return g({value:e,tabValues:l})?e:null})();return(0,o.Z)(()=>{v&&h(v)},[v]),{selectedValue:i,selectValue:(0,t.useCallback)(e=>{if(!g({value:e,tabValues:l}))throw Error(`Can't select invalid tab value=${e}`);h(e),f(e),x(e)},[f,x,l]),tabValues:l}}(e);return(0,a.jsxs)("div",{className:(0,l.Z)("tabs-container",m),children:[(0,a.jsx)(b,{...n,...e}),(0,a.jsx)(x,{...n,...e})]})}function j(e){let n=(0,h.Z)();return(0,a.jsx)(v,{...e,children:p(e.children)},String(n))}},80980:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return i}});var a=r(27378);let t={},l=a.createContext(t);function i(e){let n=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);