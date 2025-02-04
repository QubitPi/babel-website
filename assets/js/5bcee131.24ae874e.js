"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["703"],{7969:function(e,n,t){t.r(n),t.d(n,{metadata:()=>l,contentTitle:()=>d,default:()=>p,assets:()=>c,toc:()=>h,frontMatter:()=>o});var l=JSON.parse('{"id":"babel-node","title":"@babel/node","description":"babel-node is a CLI that works exactly the same as the Node.js CLI, with the added benefit of compiling with Babel presets and plugins before running it.","source":"@site/../docs/node.md","sourceDirName":".","slug":"/babel-node","permalink":"/babel-website/docs/babel-node","draft":false,"unlisted":false,"editUrl":"https://github.com/babel/website/edit/main/docs/../docs/node.md","tags":[],"version":"current","frontMatter":{"id":"babel-node","title":"@babel/node","sidebar_label":"node"}}'),r=t("24246"),s=t("80980"),a=t("95181"),i=t("38049");let o={id:"babel-node",title:"@babel/node",sidebar_label:"node"},d=void 0,c={},h=[{value:"Install",id:"install",level:2},{value:"Not meant for production use",id:"not-meant-for-production-use",level:4},{value:"ES6-style module-loading may not function as expected",id:"es6-style-module-loading-may-not-function-as-expected",level:4},{value:"Usage",id:"usage",level:3},{value:"Options",id:"options",level:3}];function u(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"babel-node is a CLI that works exactly the same as the Node.js CLI, with the added benefit of compiling with Babel presets and plugins before running it."}),"\n",(0,r.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,r.jsxs)(a.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(i.Z,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"npm install --save-dev @babel/core @babel/node\n"})})}),(0,r.jsx)(i.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"yarn add --dev @babel/core @babel/node\n"})})}),(0,r.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"pnpm add --save-dev @babel/core @babel/node\n"})})})]}),"\n",(0,r.jsxs)(n.admonition,{type:"caution",children:[(0,r.jsx)(n.h4,{id:"not-meant-for-production-use",children:"Not meant for production use"}),(0,r.jsxs)(n.p,{children:["You should not be using ",(0,r.jsx)(n.code,{children:"babel-node"})," in production. It is unnecessarily heavy, with high memory usage due to the cache being stored in memory. You will also always experience a startup performance penalty as the entire app needs to be compiled on the fly."]}),(0,r.jsxs)(n.p,{children:["Check out the ",(0,r.jsx)(n.a,{href:"https://github.com/babel/example-node-server",children:"example Node.js server with Babel"})," for an idea of how to use Babel in a production deployment."]}),(0,r.jsx)(n.h4,{id:"es6-style-module-loading-may-not-function-as-expected",children:"ES6-style module-loading may not function as expected"}),(0,r.jsxs)(n.p,{children:["Due to technical limitations ES6-style module-loading is not fully supported in a ",(0,r.jsx)(n.code,{children:"babel-node REPL"}),"."]})]}),"\n",(0,r.jsx)(n.p,{children:"babel comes with a second CLI which works exactly the same as Node.js's CLI, only\nit will compile ES6 code before running it."}),"\n",(0,r.jsx)(n.p,{children:"Launch a REPL (Read-Eval-Print-Loop)."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["You should install ",(0,r.jsx)(n.code,{children:"@babel/node"})," and ",(0,r.jsx)(n.code,{children:"@babel/core"})," first before ",(0,r.jsx)(n.code,{children:"npx babel-node"}),", otherwise ",(0,r.jsx)(n.code,{children:"npx"})," will install out-of-dated legacy ",(0,r.jsx)(n.code,{children:"babel-node"})," 6.x."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"npx babel-node\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If you prefer not to install ",(0,r.jsx)(n.code,{children:"@babel/node"})," and ",(0,r.jsx)(n.code,{children:"@babel/core"}),", you can install them on-the-fly:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"npx -p @babel/core -p @babel/node babel-node\n"})}),"\n",(0,r.jsx)(n.p,{children:"Evaluate code."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:'npx babel-node -e "class Test { }"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Compile and run ",(0,r.jsx)(n.code,{children:"test.js"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"npx babel-node test\n"})}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.p,{children:["Use ",(0,r.jsx)(n.code,{children:"rlwrap"})," to get a REPL with input history"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"rlwrap npx babel-node\n"})}),(0,r.jsxs)(n.p,{children:["On some platforms (like OSX), extra arguments may be required for ",(0,r.jsx)(n.code,{children:"rlwrap"})," to function properly, eg:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"NODE_NO_READLINE=1 rlwrap --always-readline npx babel-node\n"})})]}),"\n",(0,r.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"babel-node [options] [ -e script | [--] script.js ] [arguments]\n"})}),"\n",(0,r.jsx)(n.p,{children:"When arguments for user script have names conflicting with node options, double dash placed before script name can be used to resolve ambiguities"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"npx babel-node --inspect --presets @babel/preset-env -- script.js --inspect\n"})}),"\n",(0,r.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Option"}),(0,r.jsx)(n.th,{children:"Default"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"-e, --eval [script]"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Evaluate script"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"-p, --print"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Evaluate script and print result"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"-i, --ignore [regex]"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"node_modules"})}),(0,r.jsxs)(n.td,{children:["Ignore all files that match this regex when using the require hook. If both ",(0,r.jsx)(n.code,{children:"-i"})," and ",(0,r.jsx)(n.code,{children:"-o"})," are omitted, files outside the current working directory are also ignored."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"-o, --only [regex]"})}),(0,r.jsx)(n.td,{children:"current working directory"}),(0,r.jsxs)(n.td,{children:["Only include (and exclude all other) files that match this regex when using the require hook. If both ",(0,r.jsx)(n.code,{children:"-i"})," and ",(0,r.jsx)(n.code,{children:"-o"})," are omitted, files outside the current working directory are also ignored."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"-x, --extensions"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'".js",".jsx",".es6",".es","cjs"'})}),(0,r.jsx)(n.td,{children:"List of extensions to hook into"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--presets"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"[]"})}),(0,r.jsxs)(n.td,{children:["Comma-separated list of ",(0,r.jsx)(n.a,{href:"/babel-website/docs/presets",children:"presets"})," (a set of plugins) to load and use."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--plugins"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"[]"})}),(0,r.jsxs)(n.td,{children:["Comma-separated list of ",(0,r.jsx)(n.a,{href:"/babel-website/docs/plugins",children:"plugins"})," to load and use."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--config-file [path]"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"[]"})}),(0,r.jsxs)(n.td,{children:["Path to the babel config file to use. Defaults to working directory ",(0,r.jsx)(n.code,{children:"babel.config.json"})," or ",(0,r.jsx)(n.code,{children:"babel.config.js"}),". The following options in config files are not supported: ",(0,r.jsx)(n.code,{children:"ignore"}),", ",(0,r.jsx)(n.code,{children:"only"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--env-name [name]"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"[]"})}),(0,r.jsx)(n.td,{children:"The name of the 'env' to use when loading configs and plugins. Defaults to the value of BABEL_ENV, or else NODE_ENV, or else 'development'."})]})]})]})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},38049:function(e,n,t){t.d(n,{Z:()=>a});var l=t("24246");t("27378");var r=t("90496");let s="tabItem_wHwb";function a(e){let{children:n,hidden:t,className:a}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s,a),hidden:t,children:n})}},95181:function(e,n,t){t.d(n,{Z:()=>v});var l=t("24246"),r=t("27378"),s=t("90496"),a=t("85403"),i=t("3620"),o=t("77090"),d=t("76180"),c=t("23418"),h=t("19073");function u(e){return r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||r.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var x=t("3344");let b="tabList_J5MA",j="tabItem_l0OV";function m(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:o}=e,d=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),h=e=>{let n=e.currentTarget,t=o[d.indexOf(n)].value;t!==r&&(c(n),i(t))},u=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{let t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{let t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1]}}n?.focus()};return(0,l.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:o.map(e=>{let{value:n,label:t,attributes:a}=e;return(0,l.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>d.push(e),onKeyDown:u,onClick:h,...a,className:(0,s.Z)("tabs__item",j,a?.className,{"tabs__item--active":r===n}),children:t??n},n)})})}function f(e){let{lazy:n,children:t,selectedValue:a}=e,i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=i.find(e=>e.props.value===a);return e?(0,r.cloneElement)(e,{className:(0,s.Z)("margin-top--md",e.props.className)}):null}return(0,l.jsx)("div",{className:"margin-top--md",children:i.map((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))})}function g(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:l}=e,s=function(e){let{values:n,children:t}=e;return(0,r.useMemo)(()=>{let e=n??u(t).map(e=>{let{props:{value:n,label:t,attributes:l,default:r}}=e;return{value:n,label:t,attributes:l,default:r}});return!function(e){let n=(0,c.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[a,x]=(0,r.useState)(()=>(function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let l=t.find(e=>e.default)??t[0];if(!l)throw Error("Unexpected error: 0 tabValues");return l.value})({defaultValue:n,tabValues:s})),[b,j]=function(e){let{queryString:n=!1,groupId:t}=e,l=(0,i.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t}),a=(0,d._X)(s);return[a,(0,r.useCallback)(e=>{if(!s)return;let n=new URLSearchParams(l.location.search);n.set(s,e),l.replace({...l.location,search:n.toString()})},[s,l])]}({queryString:t,groupId:l}),[m,f]=function(e){var n;let{groupId:t}=e;let l=(n=t)?`docusaurus.tab.${n}`:null,[s,a]=(0,h.Nk)(l);return[s,(0,r.useCallback)(e=>{if(!!l)a.set(e)},[l,a])]}({groupId:l}),g=(()=>{let e=b??m;return p({value:e,tabValues:s})?e:null})();return(0,o.Z)(()=>{g&&x(g)},[g]),{selectedValue:a,selectValue:(0,r.useCallback)(e=>{if(!p({value:e,tabValues:s}))throw Error(`Can't select invalid tab value=${e}`);x(e),j(e),f(e)},[j,f,s]),tabValues:s}}(e);return(0,l.jsxs)("div",{className:(0,s.Z)("tabs-container",b),children:[(0,l.jsx)(m,{...n,...e}),(0,l.jsx)(f,{...n,...e})]})}function v(e){let n=(0,x.Z)();return(0,l.jsx)(g,{...e,children:u(e.children)},String(n))}},80980:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return a}});var l=t(27378);let r={},s=l.createContext(r);function a(e){let n=l.useContext(s);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);