"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["8429"],{63714:function(e,n,i){i.r(n),i.d(n,{metadata:()=>l,contentTitle:()=>o,default:()=>u,assets:()=>d,toc:()=>h,frontMatter:()=>a});var l=JSON.parse('{"id":"babel-cli","title":"@babel/cli","description":"Babel comes with a built-in CLI which can be used to compile files from the command line.","source":"@site/../docs/cli.md","sourceDirName":".","slug":"/babel-cli","permalink":"/docs/babel-cli","draft":false,"unlisted":false,"editUrl":"https://github.com/babel/website/edit/main/docs/../docs/cli.md","tags":[],"version":"current","frontMatter":{"id":"babel-cli","title":"@babel/cli"},"sidebar":"docs","previous":{"title":"Editors","permalink":"/docs/editors"},"next":{"title":"@babel/polyfill","permalink":"/docs/babel-polyfill"}}'),s=i("24246"),r=i("80980"),t=i("95181"),c=i("38049");let a={id:"babel-cli",title:"@babel/cli"},o=void 0,d={},h=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Print Usage",id:"print-usage",level:3},{value:"Compile Files",id:"compile-files",level:3},{value:"Compile with Source Maps",id:"compile-with-source-maps",level:3},{value:"Compile Directories",id:"compile-directories",level:3},{value:"Directories with TypeScript Files",id:"directories-with-typescript-files",level:4},{value:"Ignore files",id:"ignore-files",level:3},{value:"Copy files",id:"copy-files",level:3},{value:"Piping Files",id:"piping-files",level:3},{value:"Using Plugins",id:"using-plugins",level:3},{value:"Using Presets",id:"using-presets",level:3},{value:"Using Config Files",id:"using-config-files",level:3},{value:"Ignoring .babelrc.json or .babelrc",id:"ignoring-babelrcjson-or-babelrc",level:4},{value:"Custom config path",id:"custom-config-path",level:4},{value:"Set File Extensions",id:"set-file-extensions",level:3},{value:"Advanced Usage",id:"advanced-usage",level:3}];function p(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components},{Details:i}=n;return!i&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Babel comes with a built-in CLI which can be used to compile files from the command line."}),"\n",(0,s.jsxs)(n.p,{children:["In addition, various entry point scripts live in the top-level package at ",(0,s.jsx)(n.code,{children:"@babel/cli/bin"}),". There is a shell-executable utility script, ",(0,s.jsx)(n.code,{children:"babel-external-helpers.js"}),", and the main Babel cli script, ",(0,s.jsx)(n.code,{children:"babel.js"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,s.jsxs)(n.p,{children:["While you ",(0,s.jsx)(n.em,{children:"can"})," install Babel CLI globally on your machine, it's much better\nto install it ",(0,s.jsx)(n.strong,{children:"locally"})," project by project."]}),"\n",(0,s.jsx)(n.p,{children:"There are two primary reasons for this."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Different projects on the same machine can depend on different versions of\nBabel allowing you to update them individually."}),"\n",(0,s.jsx)(n.li,{children:"Not having an implicit dependency on the environment you are working in\nmakes your project far more portable and easier to setup."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"We can install Babel CLI locally by running:"}),"\n",(0,s.jsxs)(t.Z,{groupId:"npm2yarn",children:[(0,s.jsx)(c.Z,{value:"npm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"npm install --save-dev @babel/core @babel/cli\n"})})}),(0,s.jsx)(c.Z,{value:"yarn",label:"Yarn",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"yarn add --dev @babel/core @babel/cli\n"})})}),(0,s.jsx)(c.Z,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"pnpm add --save-dev @babel/core @babel/cli\n"})})})]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["If you do not have a ",(0,s.jsx)(n.code,{children:"package.json"}),", create one before installing. This will ensure proper interaction with the ",(0,s.jsx)(n.code,{children:"npx"})," command."]})}),"\n",(0,s.jsxs)(n.p,{children:["After that finishes installing, your ",(0,s.jsx)(n.code,{children:"package.json"})," file should include:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:'{\n  "devDependencies": {\n+   "@babel/cli": "^7.0.0",\n+   "@babel/core": "^7.0.0"\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Please install ",(0,s.jsx)(n.code,{children:"@babel/cli"})," and ",(0,s.jsx)(n.code,{children:"@babel/core"})," first before ",(0,s.jsx)(n.code,{children:"npx babel"}),", otherwise ",(0,s.jsx)(n.code,{children:"npx"})," will install out-of-dated ",(0,s.jsx)(n.code,{children:"babel"})," 6.x. Other than ",(0,s.jsx)(n.a,{href:"https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b",children:"npx"}),", you can also drop it inside of an ",(0,s.jsx)(n.a,{href:"https://docs.npmjs.com/cli/run-script",children:"npm run script"})," or you may instead execute with the relative path instead. ",(0,s.jsx)(n.code,{children:"./node_modules/.bin/babel"})]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"npx babel script.js\n"})}),"\n",(0,s.jsx)(n.h3,{id:"print-usage",children:"Print Usage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"npx babel --help\n"})}),"\n",(0,s.jsx)(n.h3,{id:"compile-files",children:"Compile Files"}),"\n",(0,s.jsxs)(n.p,{children:["Compile the file ",(0,s.jsx)(n.code,{children:"script.js"})," and ",(0,s.jsx)(n.strong,{children:"output to stdout"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"npx babel script.js\n# output...\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If you would like to ",(0,s.jsx)(n.strong,{children:"output to a file"})," you may use ",(0,s.jsx)(n.code,{children:"--out-file"})," or ",(0,s.jsx)(n.code,{children:"-o"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"npx babel script.js --out-file script-compiled.js\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To compile a file ",(0,s.jsx)(n.strong,{children:"every time that you change it"}),", use the ",(0,s.jsx)(n.code,{children:"--watch"})," or ",(0,s.jsx)(n.code,{children:"-w"})," option:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"npx babel script.js --watch --out-file script-compiled.js\n"})}),"\n",(0,s.jsx)(n.h3,{id:"compile-with-source-maps",children:"Compile with Source Maps"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Since v7.19.3, if this parameter is not specified, ",(0,s.jsx)(n.code,{children:"@babel/cli"})," will follow the ",(0,s.jsx)(n.a,{href:"https://babeljs.io/docs/en/config-files",children:"configuration files"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["If you would then like to add a ",(0,s.jsx)(n.strong,{children:"source map file"})," you can use\n",(0,s.jsx)(n.code,{children:"--source-maps"})," or ",(0,s.jsx)(n.code,{children:"-s"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"npx babel script.js --out-file script-compiled.js --source-maps\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Or, if you'd rather have ",(0,s.jsx)(n.strong,{children:"inline source maps"}),", use ",(0,s.jsx)(n.code,{children:"--source-maps inline"})," instead."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"npx babel script.js --out-file script-compiled.js --source-maps inline\n"})}),"\n",(0,s.jsx)(n.h3,{id:"compile-directories",children:"Compile Directories"}),"\n",(0,s.jsxs)(n.p,{children:["Compile the entire ",(0,s.jsx)(n.code,{children:"src"})," directory and output it to the ",(0,s.jsx)(n.code,{children:"lib"})," directory by using either ",(0,s.jsx)(n.code,{children:"--out-dir"})," or ",(0,s.jsx)(n.code,{children:"-d"}),". This doesn't overwrite any other files or directories in ",(0,s.jsx)(n.code,{children:"lib"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"npx babel src --out-dir lib\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Compile the entire ",(0,s.jsx)(n.code,{children:"src"})," directory and output it as a single concatenated file."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"npx babel src --out-file script-compiled.js\n"})}),"\n",(0,s.jsx)(n.h4,{id:"directories-with-typescript-files",children:"Directories with TypeScript Files"}),"\n",(0,s.jsxs)(n.p,{children:["Use the ",(0,s.jsx)(n.code,{children:"--extensions"})," option to specify what file extensions Babel should handle when compiling the entire ",(0,s.jsx)(n.code,{children:"src"})," directory. The default ",(0,s.jsx)(n.code,{children:"--extensions"})," can be accessed from ",(0,s.jsx)(n.a,{href:"/docs/babel-core#default_extensions",children:(0,s.jsx)(n.code,{children:"Babel.DEFAULT_EXTENSIONS"})}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"npx babel src --out-dir lib \\\n  --extensions .ts,.js,.tsx,.jsx,.cjs,.mjs \\\n  --presets=@babel/preset-typescript,@babel/preset-env,@babel/preset-react\n"})}),"\n",(0,s.jsx)(n.h3,{id:"ignore-files",children:"Ignore files"}),"\n",(0,s.jsx)(n.p,{children:"Ignore spec and test files"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:'npx babel src --out-dir lib --ignore "src/**/*.spec.js","src/**/*.test.js"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"copy-files",children:"Copy files"}),"\n",(0,s.jsx)(n.p,{children:"Copy files that will not be compiled"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"npx babel src --out-dir lib --copy-files\n"})}),"\n",(0,s.jsx)(n.p,{children:"If you don't want to copy ignored JavaScript files:"}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"History"}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Version"}),(0,s.jsx)(n.th,{children:"Changes"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"v7.8.0"}),(0,s.jsxs)(n.td,{children:["Added ",(0,s.jsx)(n.code,{children:"--copy-ignored"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"v7.8.4"}),(0,s.jsxs)(n.td,{children:["Change ",(0,s.jsx)(n.code,{children:"copyeIgnored"})," option default to ",(0,s.jsx)(n.code,{children:"true"}),", it can be disabled by ",(0,s.jsx)(n.code,{children:"--no-copy-ignored"})]})]})]})]})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"npx babel src --out-dir lib --copy-files --no-copy-ignored\n"})}),"\n",(0,s.jsx)(n.h3,{id:"piping-files",children:"Piping Files"}),"\n",(0,s.jsxs)(n.p,{children:["Pipe a file in via stdin and output it to ",(0,s.jsx)(n.code,{children:"script-compiled.js"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"npx babel --out-file script-compiled.js < script.js\n"})}),"\n",(0,s.jsx)(n.h3,{id:"using-plugins",children:"Using Plugins"}),"\n",(0,s.jsxs)(n.p,{children:["Use the ",(0,s.jsx)(n.code,{children:"--plugins"})," option to specify plugins to use in compilation"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"npx babel script.js --out-file script-compiled.js --plugins=@babel/transform-class-properties,@babel/transform-modules-amd\n"})}),"\n",(0,s.jsx)(n.h3,{id:"using-presets",children:"Using Presets"}),"\n",(0,s.jsxs)(n.p,{children:["Use the ",(0,s.jsx)(n.code,{children:"--presets"})," option to specify presets to use in compilation"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"npx babel script.js --out-file script-compiled.js --presets=@babel/preset-env,@babel/flow\n"})}),"\n",(0,s.jsx)(n.h3,{id:"using-config-files",children:"Using Config Files"}),"\n",(0,s.jsx)(n.h4,{id:"ignoring-babelrcjson-or-babelrc",children:"Ignoring .babelrc.json or .babelrc"}),"\n",(0,s.jsxs)(n.p,{children:["Ignore the configuration from the project's ",(0,s.jsx)(n.code,{children:".babelrc"})," or ",(0,s.jsx)(n.code,{children:".babelrc.json"})," file and use the cli options e.g. for a custom build"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"npx babel --no-babelrc script.js --out-file script-compiled.js --presets=@babel/preset-env,@babel/preset-react\n"})}),"\n",(0,s.jsx)(n.h4,{id:"custom-config-path",children:"Custom config path"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"npx babel --config-file /path/to/my/babel.config.json --out-dir dist ./src\n"})}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"/docs/config-files",children:"here"})," for more information about config files."]}),"\n",(0,s.jsx)(n.h3,{id:"set-file-extensions",children:"Set File Extensions"}),"\n",(0,s.jsxs)(n.p,{children:["Added in: ",(0,s.jsx)(n.code,{children:"v7.8.0"})]}),"\n",(0,s.jsxs)(n.p,{children:["By default, the transpiled file will use the ",(0,s.jsx)(n.code,{children:".js"})," extension."]}),"\n",(0,s.jsxs)(n.p,{children:["You can control the output file extension with ",(0,s.jsx)(n.code,{children:"--out-file-extension"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"npx babel src --out-dir lib --out-file-extension .mjs\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can also preserve the input file extension with ",(0,s.jsx)(n.code,{children:"--keep-file-extension"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"npx babel src-with-mjs-and-cjs --out-dir lib --keep-file-extension\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Note that ",(0,s.jsx)(n.code,{children:"--keep-file-extension"})," and ",(0,s.jsx)(n.code,{children:"--out-file-extension"})," cannot be used together."]}),"\n",(0,s.jsx)(n.h3,{id:"advanced-usage",children:"Advanced Usage"}),"\n",(0,s.jsxs)(n.p,{children:["There are many more options available, see ",(0,s.jsx)(n.a,{href:"/docs/options",children:"options"}),", ",(0,s.jsx)(n.code,{children:"babel --help"})," and other sections for more information."]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},38049:function(e,n,i){i.d(n,{Z:()=>t});var l=i("24246");i("27378");var s=i("90496");let r="tabItem_wHwb";function t(e){let{children:n,hidden:i,className:t}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,s.Z)(r,t),hidden:i,children:n})}},95181:function(e,n,i){i.d(n,{Z:()=>v});var l=i("24246"),s=i("27378"),r=i("90496"),t=i("85403"),c=i("3620"),a=i("77090"),o=i("76180"),d=i("23418"),h=i("19073");function p(e){return s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||s.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function u(e){let{value:n,tabValues:i}=e;return i.some(e=>e.value===n)}var x=i("3344");let j="tabList_J5MA",b="tabItem_l0OV";function m(e){let{className:n,block:i,selectedValue:s,selectValue:c,tabValues:a}=e,o=[],{blockElementScrollPositionUntilNextRender:d}=(0,t.o5)(),h=e=>{let n=e.currentTarget,i=a[o.indexOf(n)].value;i!==s&&(d(n),c(i))},p=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{let i=o.indexOf(e.currentTarget)+1;n=o[i]??o[0];break}case"ArrowLeft":{let i=o.indexOf(e.currentTarget)-1;n=o[i]??o[o.length-1]}}n?.focus()};return(0,l.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},n),children:a.map(e=>{let{value:n,label:i,attributes:t}=e;return(0,l.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>o.push(e),onKeyDown:p,onClick:h,...t,className:(0,r.Z)("tabs__item",b,t?.className,{"tabs__item--active":s===n}),children:i??n},n)})})}function f(e){let{lazy:n,children:i,selectedValue:t}=e,c=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){let e=c.find(e=>e.props.value===t);return e?(0,s.cloneElement)(e,{className:(0,r.Z)("margin-top--md",e.props.className)}):null}return(0,l.jsx)("div",{className:"margin-top--md",children:c.map((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t}))})}function g(e){let n=function(e){let{defaultValue:n,queryString:i=!1,groupId:l}=e,r=function(e){let{values:n,children:i}=e;return(0,s.useMemo)(()=>{let e=n??p(i).map(e=>{let{props:{value:n,label:i,attributes:l,default:s}}=e;return{value:n,label:i,attributes:l,default:s}});return!function(e){let n=(0,d.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,i])}(e),[t,x]=(0,s.useState)(()=>(function(e){let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:i}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let l=i.find(e=>e.default)??i[0];if(!l)throw Error("Unexpected error: 0 tabValues");return l.value})({defaultValue:n,tabValues:r})),[j,b]=function(e){let{queryString:n=!1,groupId:i}=e,l=(0,c.k6)(),r=function(e){let{queryString:n=!1,groupId:i}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:n,groupId:i}),t=(0,o._X)(r);return[t,(0,s.useCallback)(e=>{if(!r)return;let n=new URLSearchParams(l.location.search);n.set(r,e),l.replace({...l.location,search:n.toString()})},[r,l])]}({queryString:i,groupId:l}),[m,f]=function(e){var n;let{groupId:i}=e;let l=(n=i)?`docusaurus.tab.${n}`:null,[r,t]=(0,h.Nk)(l);return[r,(0,s.useCallback)(e=>{if(!!l)t.set(e)},[l,t])]}({groupId:l}),g=(()=>{let e=j??m;return u({value:e,tabValues:r})?e:null})();return(0,a.Z)(()=>{g&&x(g)},[g]),{selectedValue:t,selectValue:(0,s.useCallback)(e=>{if(!u({value:e,tabValues:r}))throw Error(`Can't select invalid tab value=${e}`);x(e),b(e),f(e)},[b,f,r]),tabValues:r}}(e);return(0,l.jsxs)("div",{className:(0,r.Z)("tabs-container",j),children:[(0,l.jsx)(m,{...n,...e}),(0,l.jsx)(f,{...n,...e})]})}function v(e){let n=(0,x.Z)();return(0,l.jsx)(g,{...e,children:p(e.children)},String(n))}},80980:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return t}});var l=i(27378);let s={},r=l.createContext(s);function t(e){let n=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);