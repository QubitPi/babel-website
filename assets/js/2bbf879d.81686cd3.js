"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3491],{35318:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return b}});var a=t(27378);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return t?a.createElement(b,l(l({ref:n},c),{},{components:t})):a.createElement(b,l({ref:n},c))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},39798:function(e,n,t){t.d(n,{Z:function(){return l}});var a=t(27378),r=t(38944),i={tabItem:"tabItem_wHwb"};function l(e){var n=e.children,t=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,l),hidden:t},n)}},23930:function(e,n,t){t.d(n,{Z:function(){return N}});var a=t(25773),r=t(27378),i=t(38944),l=t(83457),o=t(3620),s=t(30654),u=t(70784),c=t(71819);function p(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function d(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:p(t);return function(e){var n=(0,u.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function m(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function b(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,i=(0,o.k6)(),l=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((function(e){if(l){var n=new URLSearchParams(i.location.search);n.set(l,e),i.replace(Object.assign({},i.location,{search:n.toString()}))}}),[l,i])]}function f(e){var n,t,a,i,l=e.defaultValue,o=e.queryString,s=void 0!==o&&o,u=e.groupId,p=d(e),f=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:l,tabValues:p})})),g=f[0],h=f[1],k=b({queryString:s,groupId:u}),v=k[0],y=k[1],N=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),t=(0,c.Nk)(n),a=t[0],i=t[1],[a,(0,r.useCallback)((function(e){n&&i.set(e)}),[n,i])]),w=N[0],j=N[1],C=function(){var e=null!=v?v:w;return m({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){C&&h(C)}),[C]),{selectedValue:g,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);h(e),y(e),j(e)}),[y,j,p]),tabValues:p}}var g=t(76457),h={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};function k(e){var n=e.className,t=e.block,o=e.selectedValue,s=e.selectValue,u=e.tabValues,c=[],p=(0,l.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=c.indexOf(n),a=u[t].value;a!==o&&(p(n),s(a))},m=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;t=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var i,l=c.indexOf(e.currentTarget)-1;t=null!=(i=c[l])?i:c[c.length-1]}null==(n=t)||n.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n)},u.map((function(e){var n=e.value,t=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,key:n,ref:function(e){return c.push(e)},onKeyDown:m,onClick:d},l,{className:(0,i.Z)("tabs__item",h.tabItem,null==l?void 0:l.className,{"tabs__item--active":o===n})}),null!=t?t:n)})))}function v(e){var n=e.lazy,t=e.children,a=e.selectedValue;if(t=Array.isArray(t)?t:[t],n){var i=t.find((function(e){return e.props.value===a}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},t.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})})))}function y(e){var n=f(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",h.tabList)},r.createElement(k,(0,a.Z)({},e,n)),r.createElement(v,(0,a.Z)({},e,n)))}function N(e){var n=(0,g.Z)();return r.createElement(y,(0,a.Z)({key:String(n)},e))}},21809:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return b}});var a=t(25773),r=t(30808),i=(t(27378),t(35318)),l=t(36538),o=t(23930),s=t(39798),u=["components"],c={id:"configuration",title:"Configure Babel"},p=void 0,d={unversionedId:"configuration",id:"configuration",title:"Configure Babel",description:"Babel can be configured! Many other tools have similar configs: ESLint (.eslintrc), Prettier (.prettierrc).",source:"@site/../docs/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/babel-website/docs/configuration",draft:!1,editUrl:"https://github.com/babel/website/edit/main/docs/../docs/configuration.md",tags:[],version:"current",frontMatter:{id:"configuration",title:"Configure Babel"},sidebar:"docs",previous:{title:"Usage Guide",permalink:"/babel-website/docs/usage"},next:{title:"Learn ES2015",permalink:"/babel-website/docs/learn"}},m={},b=[{value:"What&#39;s your use case?",id:"whats-your-use-case",level:2},{value:"<code>babel.config.json</code>",id:"babelconfigjson",level:3},{value:"<code>.babelrc.json</code>",id:"babelrcjson",level:3},{value:"<code>package.json</code>",id:"packagejson",level:3},{value:"JavaScript configuration files",id:"javascript-configuration-files",level:3},{value:"Using the CLI (<code>@babel/cli</code>)",id:"using-the-cli-babelcli",level:2},{value:"Using the API (<code>@babel/core</code>)",id:"using-the-api-babelcore",level:2},{value:"Print effective configs",id:"print-effective-configs",level:2},{value:"How Babel merges config items",id:"how-babel-merges-config-items",level:3},{value:"Option (except plugin/preset) merging",id:"option-except-pluginpreset-merging",level:4},{value:"Plugin/Preset merging",id:"pluginpreset-merging",level:4}],f={toc:b},g="wrapper";function h(e){var n=e.components,t=(0,r.Z)(e,u);return(0,i.kt)(g,(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Babel can be configured! Many other tools have similar configs: ESLint (",(0,i.kt)("inlineCode",{parentName:"p"},".eslintrc"),"), Prettier (",(0,i.kt)("inlineCode",{parentName:"p"},".prettierrc"),")."),(0,i.kt)("p",null,"All Babel API ",(0,i.kt)("a",{parentName:"p",href:"/babel-website/docs/options"},"options")," are allowed. However, if the option requires JavaScript, you may want to use a JavaScript ",(0,i.kt)("a",{parentName:"p",href:"/babel-website/docs/config-files"},"configuration file"),"."),(0,i.kt)("h2",{id:"whats-your-use-case"},"What's your use case?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You are using a monorepo?"),(0,i.kt)("li",{parentName:"ul"},"You want to compile ",(0,i.kt)("inlineCode",{parentName:"li"},"node_modules"),"?")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"#babelconfigjson"},(0,i.kt)("inlineCode",{parentName:"a"},"babel.config.json"))," is for you!")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You have a configuration that only applies to a single part of your project?")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"#babelrcjson"},(0,i.kt)("inlineCode",{parentName:"a"},".babelrc.json"))," is for you!")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Guy Fieri is your hero?")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"We recommend using the ",(0,i.kt)("a",{parentName:"p",href:"/babel-website/docs/config-files#project-wide-configuration"},(0,i.kt)("inlineCode",{parentName:"a"},"babel.config.json"))," format. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/babel/babel/blob/main/babel.config.js"},"Babel itself is using it"),".")),(0,i.kt)("h3",{id:"babelconfigjson"},(0,i.kt)("inlineCode",{parentName:"h3"},"babel.config.json")),(0,i.kt)("p",null,"Create a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"babel.config.json")," with the following content at the root of your project (where the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," is)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="babel.config.json"',title:'"babel.config.json"'},'{\n  "presets": [...],\n  "plugins": [...]\n}\n')),(0,i.kt)("p",null,"Check out the ",(0,i.kt)("a",{parentName:"p",href:"/babel-website/docs/config-files#project-wide-configuration"},(0,i.kt)("inlineCode",{parentName:"a"},"babel.config.json")," documentation")," to see more configuration options."),(0,i.kt)("h3",{id:"babelrcjson"},(0,i.kt)("inlineCode",{parentName:"h3"},".babelrc.json")),(0,i.kt)("p",null,"Create a file called ",(0,i.kt)("inlineCode",{parentName:"p"},".babelrc.json")," with the following content in your project."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title=".babelrc.json"',title:'".babelrc.json"'},'{\n  "presets": [...],\n  "plugins": [...]\n}\n')),(0,i.kt)("p",null,"Check out the ",(0,i.kt)("a",{parentName:"p",href:"/babel-website/docs/config-files#file-relative-configuration"},".babelrc documentation")," to see more configuration options."),(0,i.kt)("h3",{id:"packagejson"},(0,i.kt)("inlineCode",{parentName:"h3"},"package.json")),(0,i.kt)("p",null,"Alternatively, you can choose to specify your ",(0,i.kt)("a",{parentName:"p",href:"#babelrcjson"},(0,i.kt)("inlineCode",{parentName:"a"},".babelrc.json"))," config from within ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," using the ",(0,i.kt)("inlineCode",{parentName:"p"},"babel")," key like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  "name": "my-package",\n  "version": "1.0.0",\n  "babel": {\n    "presets": [ ... ],\n    "plugins": [ ... ],\n  }\n}\n')),(0,i.kt)("h3",{id:"javascript-configuration-files"},"JavaScript configuration files"),(0,i.kt)("p",null,"You can also write ",(0,i.kt)("inlineCode",{parentName:"p"},"babel.config.js")," and ",(0,i.kt)("inlineCode",{parentName:"p"},".babelrc.js")," files using JavaScript:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="babel.config.js"',title:'"babel.config.js"'},"module.exports = function (api) {\n  api.cache(true);\n\n  const presets = [ ... ];\n  const plugins = [ ... ];\n\n  return {\n    presets,\n    plugins\n  };\n}\n")),(0,i.kt)("p",null,"You are allowed to access any Node.js APIs, for example a dynamic configuration based on the process environment:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="babel.config.js"',title:'"babel.config.js"'},'module.exports = function (api) {\n  api.cache(true);\n\n  const presets = [ ... ];\n  const plugins = [ ... ];\n\n  if (process.env["ENV"] === "prod") {\n    plugins.push(...);\n  }\n\n  return {\n    presets,\n    plugins\n  };\n}\n')),(0,i.kt)("p",null,"You can read more about JavaScript configuration files in the ",(0,i.kt)("a",{parentName:"p",href:"/babel-website/docs/config-files"},"dedicated documentation")),(0,i.kt)("h2",{id:"using-the-cli-babelcli"},"Using the CLI (",(0,i.kt)("inlineCode",{parentName:"h2"},"@babel/cli"),")"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Shell"',title:'"Shell"'},"babel --plugins @babel/plugin-transform-arrow-functions script.js\n")),(0,i.kt)("p",null,"Check out the ",(0,i.kt)("a",{parentName:"p",href:"/babel-website/docs/babel-cli"},"babel-cli documentation")," to see more configuration options."),(0,i.kt)("h2",{id:"using-the-api-babelcore"},"Using the API (",(0,i.kt)("inlineCode",{parentName:"h2"},"@babel/core"),")"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'require("@babel/core").transformSync("code", {\n  plugins: ["@babel/plugin-transform-arrow-functions"],\n});\n')),(0,i.kt)("p",null,"Check out the ",(0,i.kt)("a",{parentName:"p",href:"/babel-website/docs/babel-core"},"babel-core documentation")," to see more configuration options."),(0,i.kt)("h2",{id:"print-effective-configs"},"Print effective configs"),(0,i.kt)("p",null,"You can tell Babel to print effective configs on a given input path"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"shell",label:"Shell",default:!0,mdxType:"TabItem"},(0,i.kt)(l.Z,{language:"bash",mdxType:"CodeBlock"},"\n# *nix or WSL\nBABEL_SHOW_CONFIG_FOR=./src/myComponent.jsx npm start\n")),(0,i.kt)(s.Z,{value:"powershell",label:"powershell",mdxType:"TabItem"},(0,i.kt)(l.Z,{language:"powershell",mdxType:"CodeBlock"},'\n$env:BABEL_SHOW_CONFIG_FOR = ".srcmyComponent.jsx"; npm start\n'))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"BABEL_SHOW_CONFIG_FOR")," accepts both absolute and relative ",(0,i.kt)("em",{parentName:"p"},"file")," paths. If it is a relative path, it will be resolved from ",(0,i.kt)("a",{parentName:"p",href:"/babel-website/docs/options#cwd"},(0,i.kt)("inlineCode",{parentName:"a"},"cwd")),"."),(0,i.kt)("p",null,"Once Babel processes the input file specified by ",(0,i.kt)("inlineCode",{parentName:"p"},"BABEL_SHOW_CONFIG_FOR"),", Babel will print effective configs to the console. Here is an example output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Babel configs on "/path/to/cwd/src/index.js" (ascending priority):\nconfig /path/to/cwd/babel.config.json\n{\n  "sourceType": "script",\n  "plugins": [\n    "@foo/babel-plugin-1"\n  ],\n  "extends": "./my-extended.js"\n}\n\nconfig /path/to/cwd/babel.config.json .env["test"]\n{\n  "plugins": [\n    [\n      "@foo/babel-plugin-3",\n      {\n        "noDocumentAll": true\n      },\n    ]\n  ]\n}\n\nconfig /path/to/cwd/babel.config.json .overrides[0]\n{\n  "test": "src/index.js",\n  "sourceMaps": true\n}\n\nconfig /path/to/cwd/.babelrc\n{}\n\nprogrammatic options from @babel/cli\n{\n  "sourceFileName": "./src/index.js",\n  "presets": [\n    "@babel/preset-env"\n  ],\n  "configFile": "./my-config.js",\n  "caller": {\n    "name": "@babel/cli"\n  },\n  "filename": "./src/index.js"\n}\n')),(0,i.kt)("p",null,"Babel will print effective config sources ordered by ascending priority. Using the example above, the priority is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"babel.config.json < .babelrc < programmatic options from @babel/cli\n")),(0,i.kt)("p",null,"In other words, ",(0,i.kt)("inlineCode",{parentName:"p"},"babel.config.json")," is overwritten by ",(0,i.kt)("inlineCode",{parentName:"p"},".babelrc"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},".babelrc")," is overwritten by programmatic options."),(0,i.kt)("p",null,"For each config source, Babel prints applicable config items (e.g. ",(0,i.kt)("a",{parentName:"p",href:"/babel-website/docs/options#overrides"},(0,i.kt)("inlineCode",{parentName:"a"},"overrides"))," and ",(0,i.kt)("a",{parentName:"p",href:"/babel-website/docs/options#env"},(0,i.kt)("inlineCode",{parentName:"a"},"env")),") in the order of ascending priority. Generally each config sources has at least one config item -- the root content of configs. If you have configured ",(0,i.kt)("inlineCode",{parentName:"p"},"overrides")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"env"),", Babel will not print them in the root, but will instead output a separate config item titled as ",(0,i.kt)("inlineCode",{parentName:"p"},".overrides[index]"),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"index")," is the position of the item. This helps determine whether the item is effective on the input and which configs it will override."),(0,i.kt)("p",null,"If your input is ignored by ",(0,i.kt)("inlineCode",{parentName:"p"},"ignore")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"only"),", Babel will print that this file is ignored."),(0,i.kt)("h3",{id:"how-babel-merges-config-items"},"How Babel merges config items"),(0,i.kt)("p",null,"Babel's configuration merging is relatively straightforward. Options will overwrite existing options\nwhen they are present and their value is not ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),". There are, however, a few special cases:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For ",(0,i.kt)("inlineCode",{parentName:"li"},"assumptions"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"parserOpts")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"generatorOpts"),", objects are merged, rather than replaced."),(0,i.kt)("li",{parentName:"ul"},"For ",(0,i.kt)("inlineCode",{parentName:"li"},"plugins")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"presets"),", they are replaced based on the identity of the plugin/preset object/function itself combined with the name of the entry.")),(0,i.kt)("h4",{id:"option-except-pluginpreset-merging"},"Option (except plugin/preset) merging"),(0,i.kt)("p",null,"As an example, consider a config with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'{\n  sourceType: "script",\n  assumptions: {\n    setClassFields: true,\n    iterableIsArray: false\n  },\n  env: {\n    test: {\n      sourceType: "module",\n      assumptions: {\n        iterableIsArray: true,\n      },\n    }\n  }\n};\n')),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"test"),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"sourceType")," option will be replaced and the ",(0,i.kt)("inlineCode",{parentName:"p"},"assumptions")," option will be merged. The effective config is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'{\n  sourceType: "module", // sourceType: "script" is overwritten\n  assumptions: {\n    setClassFields: true,\n    iterableIsArray: true, // assumptions are merged by Object.assign\n  },\n}\n')),(0,i.kt)("h4",{id:"pluginpreset-merging"},"Plugin/Preset merging"),(0,i.kt)("p",null,"As an example, consider a config with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"plugins: [\n  './other',\n  ['./plug', { thing: true, field1: true }]\n],\noverrides: [{\n  plugins: [\n    ['./plug', { thing: false, field2: true }],\n  ]\n}]\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"overrides")," item will be merged on top of the top-level options. Importantly, the ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins"),"\narray as a whole doesn't just replace the top-level one. The merging logic will see that ",(0,i.kt)("inlineCode",{parentName:"p"},'"./plug"'),"\nis the same plugin in both cases, and ",(0,i.kt)("inlineCode",{parentName:"p"},"{ thing: false, field2: true }")," will replace the original\noptions, resulting in a config as"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"plugins: [\n  './other',\n  ['./plug', { thing: false, field2: true }],\n],\n")),(0,i.kt)("p",null,"Since merging is based on identity + name, it is considered an error to use the same plugin with\nthe same name twice in the same ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"presets")," array. For example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'plugins: ["./plug", "./plug"];\n')),(0,i.kt)("p",null,"is considered an error, because it's identical to ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins: ['./plug']"),". Additionally, even"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'plugins: [["./plug", { one: true }], ["./plug", { two: true }]];\n')),(0,i.kt)("p",null,"is considered an error, because the second one would just always replace the first one."),(0,i.kt)("p",null,"If you actually ",(0,i.kt)("em",{parentName:"p"},"do")," want to instantiate two separate instances of a plugin, you must assign each one\na name to disambiguate them. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'plugins: [\n  ["./plug", { one: true }, "first-instance-name"],\n  ["./plug", { two: true }, "second-instance-name"],\n];\n')),(0,i.kt)("p",null,"because each instance has been given a unique name and thus a unique identity."))}h.isMDXComponent=!0}}]);