"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["9670"],{54338:function(e,n,i){i.r(n),i.d(n,{metadata:()=>a,contentTitle:()=>d,default:()=>p,assets:()=>c,toc:()=>u,frontMatter:()=>s});var a=JSON.parse('{"id":"babel-plugin-minify-dead-code-elimination","title":"babel-plugin-minify-dead-code-elimination","description":"Example","source":"@site/../docs/plugin-minify-dead-code-elimination.md","sourceDirName":".","slug":"/babel-plugin-minify-dead-code-elimination","permalink":"/docs/babel-plugin-minify-dead-code-elimination","draft":false,"unlisted":false,"editUrl":"https://github.com/babel/website/edit/main/docs/../docs/plugin-minify-dead-code-elimination.md","tags":[],"version":"current","frontMatter":{"id":"babel-plugin-minify-dead-code-elimination","title":"babel-plugin-minify-dead-code-elimination","sidebar_label":"minify-dead-code-elimination"}}'),l=i("24246"),t=i("80980"),r=i("95181"),o=i("38049");let s={id:"babel-plugin-minify-dead-code-elimination",title:"babel-plugin-minify-dead-code-elimination",sidebar_label:"minify-dead-code-elimination"},d=void 0,c={},u=[{value:"Example",id:"example",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"With a configuration file (Recommended)",id:"with-a-configuration-file-recommended",level:3},{value:"Via CLI",id:"via-cli",level:3},{value:"Via Node API",id:"via-node-api",level:3},{value:"Options",id:"options",level:2}];function m(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"In"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:"function foo() {var x = 1;}\nfunction bar() { var x = f(); }\nfunction baz() {\n  var x = 1;\n  console.log(x);\n  function unused() {\n    return 5;\n  }\n}\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Out"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:"function foo() {}\nfunction bar() { f(); }\nfunction baz() {\n  console.log(1);\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,l.jsxs)(r.Z,{groupId:"npm2yarn",children:[(0,l.jsx)(o.Z,{value:"npm",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"npm install babel-plugin-minify-dead-code-elimination --save-dev\n"})})}),(0,l.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"yarn add babel-plugin-minify-dead-code-elimination --dev\n"})})}),(0,l.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"pnpm add babel-plugin-minify-dead-code-elimination --save-dev\n"})})})]}),"\n",(0,l.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(n.h3,{id:"with-a-configuration-file-recommended",children:"With a configuration file (Recommended)"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",metastring:'title="JSON"',children:'// without options\n{\n  "plugins": ["minify-dead-code-elimination"]\n}\n\n// with options\n{\n  "plugins": ["minify-dead-code-elimination", { "optimizeRawSize": true }]\n}\n'})}),"\n",(0,l.jsx)(n.h3,{id:"via-cli",children:"Via CLI"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"babel --plugins minify-dead-code-elimination script.js\n"})}),"\n",(0,l.jsx)(n.h3,{id:"via-node-api",children:"Via Node API"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'require("@babel/core").transformSync("code", {\n  plugins: ["minify-dead-code-elimination"]\n});\n'})}),"\n",(0,l.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"keepFnName"})," - prevent plugin from removing function name. Useful for code depending on ",(0,l.jsx)(n.code,{children:"fn.name"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"keepFnArgs"})," - prevent plugin from removing function args. Useful for code depending on ",(0,l.jsx)(n.code,{children:"fn.length"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"keepClassName"})," - prevent plugin from removing class name. Useful for code depending on ",(0,l.jsx)(n.code,{children:"cls.name"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"tdz"})," - Account for TDZ (Temporal Dead Zone)"]}),"\n"]}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsxs)(n.p,{children:["You can read more about configuring plugin options ",(0,l.jsx)(n.a,{href:"https://babeljs.io/docs/en/plugins#plugin-options",children:"here"})]})})]})}function p(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(m,{...e})}):m(e)}},38049:function(e,n,i){i.d(n,{Z:()=>r});var a=i("24246");i("27378");var l=i("90496");let t="tabItem_wHwb";function r(e){let{children:n,hidden:i,className:r}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,l.Z)(t,r),hidden:i,children:n})}},95181:function(e,n,i){i.d(n,{Z:()=>j});var a=i("24246"),l=i("27378"),t=i("90496"),r=i("85403"),o=i("3620"),s=i("77090"),d=i("76180"),c=i("23418"),u=i("19073");function m(e){return l.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||l.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:n,tabValues:i}=e;return i.some(e=>e.value===n)}var f=i("3344");let h="tabList_J5MA",g="tabItem_l0OV";function b(e){let{className:n,block:i,selectedValue:l,selectValue:o,tabValues:s}=e,d=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),u=e=>{let n=e.currentTarget,i=s[d.indexOf(n)].value;i!==l&&(c(n),o(i))},m=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let i=d.indexOf(e.currentTarget)+1;n=d[i]??d[0];break}case"ArrowLeft":{let i=d.indexOf(e.currentTarget)-1;n=d[i]??d[d.length-1]}}n?.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":i},n),children:s.map(e=>{let{value:n,label:i,attributes:r}=e;return(0,a.jsx)("li",{role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:e=>d.push(e),onKeyDown:m,onClick:u,...r,className:(0,t.Z)("tabs__item",g,r?.className,{"tabs__item--active":l===n}),children:i??n},n)})})}function v(e){let{lazy:n,children:i,selectedValue:r}=e,o=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){let e=o.find(e=>e.props.value===r);return e?(0,l.cloneElement)(e,{className:(0,t.Z)("margin-top--md",e.props.className)}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:o.map((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==r}))})}function x(e){let n=function(e){let{defaultValue:n,queryString:i=!1,groupId:a}=e,t=function(e){let{values:n,children:i}=e;return(0,l.useMemo)(()=>{let e=n??m(i).map(e=>{let{props:{value:n,label:i,attributes:a,default:l}}=e;return{value:n,label:i,attributes:a,default:l}});return!function(e){let n=(0,c.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,i])}(e),[r,f]=(0,l.useState)(()=>(function(e){let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:i}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let a=i.find(e=>e.default)??i[0];if(!a)throw Error("Unexpected error: 0 tabValues");return a.value})({defaultValue:n,tabValues:t})),[h,g]=function(e){let{queryString:n=!1,groupId:i}=e,a=(0,o.k6)(),t=function(e){let{queryString:n=!1,groupId:i}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:n,groupId:i}),r=(0,d._X)(t);return[r,(0,l.useCallback)(e=>{if(!t)return;let n=new URLSearchParams(a.location.search);n.set(t,e),a.replace({...a.location,search:n.toString()})},[t,a])]}({queryString:i,groupId:a}),[b,v]=function(e){var n;let{groupId:i}=e;let a=(n=i)?`docusaurus.tab.${n}`:null,[t,r]=(0,u.Nk)(a);return[t,(0,l.useCallback)(e=>{if(!!a)r.set(e)},[a,r])]}({groupId:a}),x=(()=>{let e=h??b;return p({value:e,tabValues:t})?e:null})();return(0,s.Z)(()=>{x&&f(x)},[x]),{selectedValue:r,selectValue:(0,l.useCallback)(e=>{if(!p({value:e,tabValues:t}))throw Error(`Can't select invalid tab value=${e}`);f(e),g(e),v(e)},[g,v,t]),tabValues:t}}(e);return(0,a.jsxs)("div",{className:(0,t.Z)("tabs-container",h),children:[(0,a.jsx)(b,{...n,...e}),(0,a.jsx)(v,{...n,...e})]})}function j(e){let n=(0,f.Z)();return(0,a.jsx)(x,{...e,children:m(e.children)},String(n))}},80980:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return r}});var a=i(27378);let l={},t=a.createContext(l);function r(e){let n=a.useContext(t);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);