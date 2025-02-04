"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["1329"],{85553:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>h,assets:()=>d,toc:()=>u,frontMatter:()=>o});var t=JSON.parse('{"id":"babel-standalone","title":"@babel/standalone","description":"@babel/standalone provides a standalone build of Babel for use in browsers and other non-Node.js environments.","source":"@site/../docs/standalone.md","sourceDirName":".","slug":"/babel-standalone","permalink":"/docs/babel-standalone","draft":false,"unlisted":false,"editUrl":"https://github.com/babel/website/edit/main/docs/../docs/standalone.md","tags":[],"version":"current","frontMatter":{"id":"babel-standalone","title":"@babel/standalone"},"sidebar":"docs","previous":{"title":"@babel/register","permalink":"/docs/babel-register"},"next":{"title":"@babel/parser","permalink":"/docs/babel-parser"}}'),a=s("24246"),l=s("80980"),r=s("95181"),i=s("38049");let o={id:"babel-standalone",title:"@babel/standalone"},c=void 0,d={},u=[{value:"When (not) to use @babel/standalone",id:"when-not-to-use-babelstandalone",level:2},{value:"Installation",id:"installation",level:2},{value:"Script Tags",id:"script-tags",level:2},{value:"Attributes",id:"attributes",level:3},{value:"<code>data-type</code>",id:"data-type",level:4},{value:"<code>data-presets</code>",id:"data-presets",level:4},{value:"<code>data-plugins</code>",id:"data-plugins",level:4},{value:"<code>src</code>",id:"src",level:4},{value:"<code>async</code>",id:"async",level:4},{value:"API",id:"api",level:2},{value:"Internal packages",id:"internal-packages",level:3},{value:"Customization",id:"customization",level:2},{value:"custom plugins",id:"custom-plugins",level:3},{value:"custom presets: passing options to built-in presets/plugins",id:"custom-presets-passing-options-to-built-in-presetsplugins",level:3}];function p(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"@babel/standalone"})," provides a standalone build of Babel for use in browsers and other non-Node.js environments."]}),"\n",(0,a.jsx)(n.h2,{id:"when-not-to-use-babelstandalone",children:"When (not) to use @babel/standalone"}),"\n",(0,a.jsxs)(n.p,{children:["If you're using Babel in production, you should normally not use ",(0,a.jsx)(n.code,{children:"@babel/standalone"}),". Instead, you should use a build system running on Node.js, such as Webpack, Rollup, or Parcel, to transpile your JS ahead of time."]}),"\n",(0,a.jsx)(n.p,{children:"However, there are some valid use cases for @babel/standalone:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["It provides an easy, convenient way to prototype with Babel. Using ",(0,a.jsx)(n.code,{children:"@babel/standalone"}),", you can get started using Babel with just a simple script tag in your HTML."]}),"\n",(0,a.jsxs)(n.li,{children:["Sites that compile user-provided JavaScript in real-time, like ",(0,a.jsx)(n.a,{href:"https://jsfiddle.net/",children:"JSFiddle"}),", ",(0,a.jsx)(n.a,{href:"https://jsbin.com/",children:"JS Bin"}),", the ",(0,a.jsx)(n.a,{href:"http://babeljs.io/repl/",children:"REPL on the Babel site"}),", ",(0,a.jsx)(n.a,{href:"https://jsitor.com",children:"JSitor"}),", etc."]}),"\n",(0,a.jsx)(n.li,{children:"Apps that embed a JavaScript engine such as V8 directly, and want to use Babel for compilation"}),"\n",(0,a.jsx)(n.li,{children:"Apps that want to use JavaScript as a scripting language for extending the app itself, including all the goodies that modern ES provides."}),"\n",(0,a.jsxs)(n.li,{children:["Other non-Node.js environments (",(0,a.jsx)(n.a,{href:"http://reactjs.net/",children:"ReactJS.NET"}),", ",(0,a.jsx)(n.a,{href:"https://github.com/babel/ruby-babel-transpiler",children:"ruby-babel-transpiler"}),", ",(0,a.jsx)(n.a,{href:"https://github.com/talyssonoc/php-babel-transpiler",children:"php-babel-transpiler"}),", etc)."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsxs)(n.p,{children:["There are several ways to get a copy of ",(0,a.jsx)(n.code,{children:"@babel/standalone"}),". Pick whichever one you like:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Use it via ",(0,a.jsx)(n.a,{href:"https://unpkg.com/@babel/standalone/babel.min.js",children:"UNPKG"}),". This is a simple way to embed it on a webpage without having to do any other setup.","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<script src="https://unpkg.com/@babel/standalone/babel.min.js"><\/script>\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Install it manually:","\n",(0,a.jsxs)(r.Z,{groupId:"npm2yarn",children:[(0,a.jsx)(i.Z,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"npm install --save @babel/standalone\n"})})}),(0,a.jsx)(i.Z,{value:"yarn",label:"Yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"yarn add @babel/standalone\n"})})}),(0,a.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"pnpm add @babel/standalone\n"})})})]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"script-tags",children:"Script Tags"}),"\n",(0,a.jsxs)(n.p,{children:["When loaded in a browser, ",(0,a.jsx)(n.code,{children:"@babel/standalone"})," will automatically compile and execute all script tags with type ",(0,a.jsx)(n.code,{children:"text/babel"})," or ",(0,a.jsx)(n.code,{children:"text/jsx"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<div id="output"></div>\n\x3c!-- Load Babel --\x3e\n<script src="https://unpkg.com/@babel/standalone/babel.min.js"><\/script>\n\x3c!-- Your custom script here --\x3e\n<script type="text/babel">\n  const getMessage = () => "Hello World";\n  document.getElementById("output").innerHTML = getMessage();\n<\/script>\n'})}),"\n",(0,a.jsx)(n.h3,{id:"attributes",children:"Attributes"}),"\n",(0,a.jsx)(n.h4,{id:"data-type",children:(0,a.jsx)(n.code,{children:"data-type"})}),"\n",(0,a.jsxs)(n.p,{children:["Added in: ",(0,a.jsx)(n.code,{children:"v7.10.0"})]}),"\n",(0,a.jsxs)(n.p,{children:["If you want to use your browser's native support for ES Modules, you'd normally need to set a ",(0,a.jsx)(n.code,{children:'type="module"'})," attribute on your script tag."]}),"\n",(0,a.jsxs)(n.p,{children:["With ",(0,a.jsx)(n.code,{children:"@babel/standalone"}),", set a ",(0,a.jsx)(n.code,{children:'data-type="module"'})," attribute instead, like this:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<script type="text/babel" data-type="module">\n'})}),"\n",(0,a.jsx)(n.h4,{id:"data-presets",children:(0,a.jsx)(n.code,{children:"data-presets"})}),"\n",(0,a.jsxs)(n.p,{children:["Use the ",(0,a.jsx)(n.code,{children:"data-presets"})," attributes to enable builtin Babel presets. Multiple values are comma separated:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<script type="text/babel" data-presets="env,react">\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Most popular presets are: ",(0,a.jsx)(n.a,{href:"/docs/babel-preset-env",children:(0,a.jsx)(n.code,{children:"env"})}),", ",(0,a.jsx)(n.a,{href:"/docs/babel-preset-react",children:(0,a.jsx)(n.code,{children:"react"})}),", ",(0,a.jsx)(n.a,{href:"/docs/babel-preset-typescript",children:(0,a.jsx)(n.code,{children:"typescript"})}),", ",(0,a.jsx)(n.a,{href:"/docs/babel-preset-flow",children:(0,a.jsx)(n.code,{children:"flow"})}),". You can also use ",(0,a.jsx)(n.code,{children:"Babel.availablePresets"})," to query available presets."]}),"\n",(0,a.jsxs)(n.p,{children:["If you want to pass additional options, refer to the ",(0,a.jsx)(n.a,{href:"#custom-presets-passing-options-to-built-in-presetsplugins",children:"custom presets"})," section."]}),"\n",(0,a.jsx)(n.h4,{id:"data-plugins",children:(0,a.jsx)(n.code,{children:"data-plugins"})}),"\n",(0,a.jsxs)(n.p,{children:["Use the ",(0,a.jsx)(n.code,{children:"data-plugins"})," attribute to enable builtin Babel plugins. Multiple values are comma separated."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<script type="text/babel" data-plugins="transform-class-properties">\n'})}),"\n",(0,a.jsxs)(n.p,{children:["See ",(0,a.jsx)(n.a,{href:"https://github.com/babel/babel/blob/main/packages/babel-standalone/src/generated/plugins.ts",children:"here"})," for a list of builtin plugins in ",(0,a.jsx)(n.code,{children:"@babel/standalone"}),". You can also access the list from ",(0,a.jsx)(n.code,{children:"Babel.availablePlugins"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["If you want to add custom plugins, refer to the ",(0,a.jsx)(n.a,{href:"#custom-plugins",children:"custom plugins"})," section."]}),"\n",(0,a.jsx)(n.h4,{id:"src",children:(0,a.jsx)(n.code,{children:"src"})}),"\n",(0,a.jsxs)(n.p,{children:["Loading external scripts via ",(0,a.jsx)(n.code,{children:"src"})," attribute is supported too:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<script type="text/babel" src="foo.js"><\/script>\n'})}),"\n",(0,a.jsx)(n.h4,{id:"async",children:(0,a.jsx)(n.code,{children:"async"})}),"\n",(0,a.jsxs)(n.p,{children:["You can also set the ",(0,a.jsx)(n.code,{children:"async"})," attribute for external scripts."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<script type="text/babel" src="foo.js" async><\/script>\n'})}),"\n",(0,a.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,a.jsxs)(n.p,{children:["Load ",(0,a.jsx)(n.code,{children:"babel.js"})," or ",(0,a.jsx)(n.code,{children:"babel.min.js"})," in your environment. This will expose ",(0,a.jsx)(n.a,{href:"http://babeljs.io/docs/usage/api/",children:"Babel's API"})," in a ",(0,a.jsx)(n.code,{children:"Babel"})," object:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'var input = \'const getMessage = () => "Hello World";\';\nvar output = Babel.transform(input, { presets: ["env"] }).code;\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Note that ",(0,a.jsx)(n.a,{href:"/docs/config-files",children:"config files"})," don't work in ",(0,a.jsx)(n.code,{children:"@babel/standalone"}),", as no file system access is available. The presets and/or plugins to use ",(0,a.jsx)(n.strong,{children:"must"})," be specified in the options passed to ",(0,a.jsx)(n.code,{children:"Babel.transform"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"internal-packages",children:"Internal packages"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"@babel/standalone"})," exposes some internal Babel packages on the ",(0,a.jsx)(n.code,{children:"Babel.packages"})," object:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"Babel.packages.generator"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"Babel.packages.parser"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"Babel.packages.template"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"Babel.packages.traverse"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"Babel.packages.types"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"customization",children:"Customization"}),"\n",(0,a.jsx)(n.h3,{id:"custom-plugins",children:"custom plugins"}),"\n",(0,a.jsxs)(n.p,{children:["Custom plugins and presets can be added using the ",(0,a.jsx)(n.code,{children:"registerPlugin"})," and ",(0,a.jsx)(n.code,{children:"registerPreset"})," methods respectively:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'// Simple plugin that converts every identifier to "LOL"\nfunction lolizer() {\n  return {\n    visitor: {\n      Identifier(path) {\n        path.node.name = "LOL";\n      },\n    },\n  };\n}\nBabel.registerPlugin("lolizer", lolizer);\n'})}),"\n",(0,a.jsx)(n.p,{children:"Once registered, you can either use the custom plugin in an inline script:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<script type="text/babel" data-plugins="lolizer">\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Or you can use the plugin with ",(0,a.jsx)(n.code,{children:"Babel.transform"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'var output = Babel.transform("function helloWorld() { alert(hello); }", {\n  plugins: ["lolizer"],\n});\n// Returns "function LOL() { LOL(LOL); }"\n'})}),"\n",(0,a.jsx)(n.h3,{id:"custom-presets-passing-options-to-built-in-presetsplugins",children:"custom presets: passing options to built-in presets/plugins"}),"\n",(0,a.jsx)(n.p,{children:"If you want to pass options to builtin plugins and presets, you can create a new preset and pass these options inside the preset."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'// Define a preset\nBabel.registerPreset("env-plus", {\n  presets: [[Babel.availablePresets["env"], { loose: true }]],\n  plugins: [\n    [\n      Babel.availablePlugins["proposal-decorators"],\n      { version: "2023-01" },\n    ],\n  ],\n});\n'})}),"\n",(0,a.jsx)(n.p,{children:"Once registered, you can use this preset in an inline script:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<script type="text/babel" data-presets="env-plus">\n'})})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},38049:function(e,n,s){s.d(n,{Z:()=>r});var t=s("24246");s("27378");var a=s("90496");let l="tabItem_wHwb";function r(e){let{children:n,hidden:s,className:r}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,a.Z)(l,r),hidden:s,children:n})}},95181:function(e,n,s){s.d(n,{Z:()=>v});var t=s("24246"),a=s("27378"),l=s("90496"),r=s("85403"),i=s("3620"),o=s("77090"),c=s("76180"),d=s("23418"),u=s("19073");function p(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||a.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:n,tabValues:s}=e;return s.some(e=>e.value===n)}var b=s("3344");let j="tabList_J5MA",x="tabItem_l0OV";function m(e){let{className:n,block:s,selectedValue:a,selectValue:i,tabValues:o}=e,c=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.o5)(),u=e=>{let n=e.currentTarget,s=o[c.indexOf(n)].value;s!==a&&(d(n),i(s))},p=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let s=c.indexOf(e.currentTarget)+1;n=c[s]??c[0];break}case"ArrowLeft":{let s=c.indexOf(e.currentTarget)-1;n=c[s]??c[c.length-1]}}n?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},n),children:o.map(e=>{let{value:n,label:s,attributes:r}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:p,onClick:u,...r,className:(0,l.Z)("tabs__item",x,r?.className,{"tabs__item--active":a===n}),children:s??n},n)})})}function g(e){let{lazy:n,children:s,selectedValue:r}=e,i=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){let e=i.find(e=>e.props.value===r);return e?(0,a.cloneElement)(e,{className:(0,l.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:i.map((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r}))})}function f(e){let n=function(e){let{defaultValue:n,queryString:s=!1,groupId:t}=e,l=function(e){let{values:n,children:s}=e;return(0,a.useMemo)(()=>{let e=n??p(s).map(e=>{let{props:{value:n,label:s,attributes:t,default:a}}=e;return{value:n,label:s,attributes:t,default:a}});return!function(e){let n=(0,d.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,s])}(e),[r,b]=(0,a.useState)(()=>(function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:s}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let t=s.find(e=>e.default)??s[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:n,tabValues:l})),[j,x]=function(e){let{queryString:n=!1,groupId:s}=e,t=(0,i.k6)(),l=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s}),r=(0,c._X)(l);return[r,(0,a.useCallback)(e=>{if(!l)return;let n=new URLSearchParams(t.location.search);n.set(l,e),t.replace({...t.location,search:n.toString()})},[l,t])]}({queryString:s,groupId:t}),[m,g]=function(e){var n;let{groupId:s}=e;let t=(n=s)?`docusaurus.tab.${n}`:null,[l,r]=(0,u.Nk)(t);return[l,(0,a.useCallback)(e=>{if(!!t)r.set(e)},[t,r])]}({groupId:t}),f=(()=>{let e=j??m;return h({value:e,tabValues:l})?e:null})();return(0,o.Z)(()=>{f&&b(f)},[f]),{selectedValue:r,selectValue:(0,a.useCallback)(e=>{if(!h({value:e,tabValues:l}))throw Error(`Can't select invalid tab value=${e}`);b(e),x(e),g(e)},[x,g,l]),tabValues:l}}(e);return(0,t.jsxs)("div",{className:(0,l.Z)("tabs-container",j),children:[(0,t.jsx)(m,{...n,...e}),(0,t.jsx)(g,{...n,...e})]})}function v(e){let n=(0,b.Z)();return(0,t.jsx)(f,{...e,children:p(e.children)},String(n))}},80980:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return r}});var t=s(27378);let a={},l=t.createContext(a);function r(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);