"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["3570"],{48090:function(e,n,r){r.r(n),r.d(n,{metadata:()=>a,contentTitle:()=>c,default:()=>m,assets:()=>d,toc:()=>u,frontMatter:()=>o});var a=JSON.parse('{"id":"babel-plugin-syntax-dynamic-import","title":"@babel/plugin-syntax-dynamic-import","description":"This plugin is included in @babel/preset-env, in ES2020.","source":"@site/../docs/plugin-syntax-dynamic-import.md","sourceDirName":".","slug":"/babel-plugin-syntax-dynamic-import","permalink":"/docs/babel-plugin-syntax-dynamic-import","draft":false,"unlisted":false,"editUrl":"https://github.com/babel/website/edit/main/docs/../docs/plugin-syntax-dynamic-import.md","tags":[],"version":"current","frontMatter":{"id":"babel-plugin-syntax-dynamic-import","title":"@babel/plugin-syntax-dynamic-import","sidebar_label":"syntax-dynamic-import"},"sidebar":"docs","previous":{"title":"syntax-bigint","permalink":"/docs/babel-plugin-syntax-bigint"},"next":{"title":"syntax-import-meta","permalink":"/docs/babel-plugin-syntax-import-meta"}}'),t=r("24246"),i=r("80980"),l=r("95181"),s=r("38049");let o={id:"babel-plugin-syntax-dynamic-import",title:"@babel/plugin-syntax-dynamic-import",sidebar_label:"syntax-dynamic-import"},c=void 0,d={},u=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"With a configuration file (Recommended)",id:"with-a-configuration-file-recommended",level:3},{value:"Via CLI",id:"via-cli",level:3},{value:"Via Node API",id:"via-node-api",level:3},{value:"Working with Webpack and @babel/preset-env",id:"working-with-webpack-and-babelpreset-env",level:2}];function p(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["This plugin is included in ",(0,t.jsx)(n.code,{children:"@babel/preset-env"}),", in ",(0,t.jsx)(n.a,{href:"https://github.com/tc39/proposals/blob/master/finished-proposals.md",children:"ES2020"}),"."]})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["You can safely remove this plugin from your Babel config if using ",(0,t.jsx)(n.code,{children:"@babel/core"})," 7.8.0 or above."]})}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(l.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(s.Z,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"npm install --save-dev @babel/plugin-syntax-dynamic-import\n"})})}),(0,t.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"yarn add --dev @babel/plugin-syntax-dynamic-import\n"})})}),(0,t.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"pnpm add --save-dev @babel/plugin-syntax-dynamic-import\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.h3,{id:"with-a-configuration-file-recommended",children:"With a configuration file (Recommended)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="babel.config.json"',children:'{\n  "plugins": ["@babel/plugin-syntax-dynamic-import"]\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"via-cli",children:"Via CLI"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"babel --plugins @babel/plugin-syntax-dynamic-import script.js\n"})}),"\n",(0,t.jsx)(n.h3,{id:"via-node-api",children:"Via Node API"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'require("@babel/core").transformSync("code", {\n  plugins: ["@babel/plugin-syntax-dynamic-import"],\n});\n'})}),"\n",(0,t.jsx)(n.h2,{id:"working-with-webpack-and-babelpreset-env",children:"Working with Webpack and @babel/preset-env"}),"\n",(0,t.jsxs)(n.p,{children:["Currently, ",(0,t.jsx)(n.code,{children:"@babel/preset-env"})," is unaware that using ",(0,t.jsx)(n.code,{children:"import()"})," with ",(0,t.jsxs)(n.a,{href:"https://webpack.js.org/guides/code-splitting/#dynamic-imports",children:["Webpack relies on ",(0,t.jsx)(n.code,{children:"Promise"})," internally"]}),". Environments which do not have builtin support for ",(0,t.jsx)(n.code,{children:"Promise"}),", like Internet Explorer, will require both the ",(0,t.jsx)(n.code,{children:"promise"})," and ",(0,t.jsx)(n.code,{children:"iterator"})," polyfills be added manually."]}),"\n",(0,t.jsxs)(n.p,{children:["For example, with ",(0,t.jsx)(n.code,{children:"core-js@3"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="webpack.config.js"',children:'const config = {\n  entry: [\n    "core-js/modules/es.promise",\n    "core-js/modules/es.array.iterator",\n    path.resolve(__dirname, "src/main.js"),\n  ],\n  // ...\n};\n'})}),"\n",(0,t.jsx)(n.p,{children:"or"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="src/main.js"',children:'import "core-js/modules/es.promise";\nimport "core-js/modules/es.array.iterator";\n\n// ...\n'})}),"\n",(0,t.jsxs)(n.p,{children:["This is the same for ",(0,t.jsx)(n.code,{children:"core-js@2"}),", except the imports paths are slightly different:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="webpack.config.js"',children:'const config = {\n  entry: [\n    "core-js/modules/es6.promise",\n    "core-js/modules/es6.array.iterator",\n    path.resolve(__dirname, "src/main.js"),\n  ],\n  // ...\n};\n'})}),"\n",(0,t.jsx)(n.p,{children:"or"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="src/main.js"',children:'import "core-js/modules/es6.promise";\nimport "core-js/modules/es6.array.iterator";\n\n// ...\n'})})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},38049:function(e,n,r){r.d(n,{Z:()=>l});var a=r("24246");r("27378");var t=r("90496");let i="tabItem_wHwb";function l(e){let{children:n,hidden:r,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.Z)(i,l),hidden:r,children:n})}},95181:function(e,n,r){r.d(n,{Z:()=>v});var a=r("24246"),t=r("27378"),i=r("90496"),l=r("85403"),s=r("3620"),o=r("77090"),c=r("76180"),d=r("23418"),u=r("19073");function p(e){return t.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||t.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function m(e){let{value:n,tabValues:r}=e;return r.some(e=>e.value===n)}var h=r("3344");let b="tabList_J5MA",f="tabItem_l0OV";function g(e){let{className:n,block:r,selectedValue:t,selectValue:s,tabValues:o}=e,c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),u=e=>{let n=e.currentTarget,r=o[c.indexOf(n)].value;r!==t&&(d(n),s(r))},p=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{let r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1]}}n?.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},n),children:o.map(e=>{let{value:n,label:r,attributes:l}=e;return(0,a.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:p,onClick:u,...l,className:(0,i.Z)("tabs__item",f,l?.className,{"tabs__item--active":t===n}),children:r??n},n)})})}function x(e){let{lazy:n,children:r,selectedValue:l}=e,s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){let e=s.find(e=>e.props.value===l);return e?(0,t.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:s.map((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==l}))})}function j(e){let n=function(e){let{defaultValue:n,queryString:r=!1,groupId:a}=e,i=function(e){let{values:n,children:r}=e;return(0,t.useMemo)(()=>{let e=n??p(r).map(e=>{let{props:{value:n,label:r,attributes:a,default:t}}=e;return{value:n,label:r,attributes:a,default:t}});return!function(e){let n=(0,d.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,r])}(e),[l,h]=(0,t.useState)(()=>(function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let a=r.find(e=>e.default)??r[0];if(!a)throw Error("Unexpected error: 0 tabValues");return a.value})({defaultValue:n,tabValues:i})),[b,f]=function(e){let{queryString:n=!1,groupId:r}=e,a=(0,s.k6)(),i=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r}),l=(0,c._X)(i);return[l,(0,t.useCallback)(e=>{if(!i)return;let n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})},[i,a])]}({queryString:r,groupId:a}),[g,x]=function(e){var n;let{groupId:r}=e;let a=(n=r)?`docusaurus.tab.${n}`:null,[i,l]=(0,u.Nk)(a);return[i,(0,t.useCallback)(e=>{if(!!a)l.set(e)},[a,l])]}({groupId:a}),j=(()=>{let e=b??g;return m({value:e,tabValues:i})?e:null})();return(0,o.Z)(()=>{j&&h(j)},[j]),{selectedValue:l,selectValue:(0,t.useCallback)(e=>{if(!m({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);h(e),f(e),x(e)},[f,x,i]),tabValues:i}}(e);return(0,a.jsxs)("div",{className:(0,i.Z)("tabs-container",b),children:[(0,a.jsx)(g,{...n,...e}),(0,a.jsx)(x,{...n,...e})]})}function v(e){let n=(0,h.Z)();return(0,a.jsx)(j,{...e,children:p(e.children)},String(n))}},80980:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return l}});var a=r(27378);let t={},i=a.createContext(t);function l(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);