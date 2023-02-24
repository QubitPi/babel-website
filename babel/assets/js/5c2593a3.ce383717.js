"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7519],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39798:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(27378),r=n(38944),l="tabItem_wHwb";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},23930:function(e,t,n){n.d(t,{Z:function(){return N}});var a=n(25773),r=n(27378),l=n(38944),i=n(83457),o=n(3620),s=n(30654),u=n(70784),c=n(71819);function p(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,l=(0,o.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,s._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(l.location.search);t.set(i,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[i,l])]}function b(e){var t,n,a,l,i=e.defaultValue,o=e.queryString,s=void 0!==o&&o,u=e.groupId,p=d(e),b=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:p})})),h=b[0],g=b[1],v=f({queryString:s,groupId:u}),y=v[0],k=v[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,c.Nk)(t),a=n[0],l=n[1],[a,(0,r.useCallback)((function(e){t&&l.set(e)}),[t,l])]),N=w[0],C=w[1],E=function(){var e=null!=y?y:N;return m({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){E&&g(E)}),[E]),{selectedValue:h,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);g(e),k(e),C(e)}),[k,C,p]),tabValues:p}}var h=n(76457),g="tabList_J5MA",v="tabItem_l0OV";function y(e){var t=e.className,n=e.block,o=e.selectedValue,s=e.selectValue,u=e.tabValues,c=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==o&&(p(t),s(a))},m=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;n=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var l,i=c.indexOf(e.currentTarget)-1;n=null!=(l=c[i])?l:c[c.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:d},i,{className:(0,l.Z)("tabs__item",v,null==i?void 0:i.className,{"tabs__item--active":o===t})}),null!=n?n:t)})))}function k(e){var t=e.lazy,n=e.children,a=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var l=n.find((function(e){return e.props.value===a}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function w(e){var t=b(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function N(e){var t=(0,h.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},73052:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var a=n(25773),r=n(30808),l=(n(27378),n(35318)),i=n(23930),o=n(39798),s=["components"],u={id:"babel-register",title:"@babel/register"},c=void 0,p={unversionedId:"babel-register",id:"babel-register",title:"@babel/register",description:"One of the ways you can use Babel is through the require hook. The require hook",source:"@site/../docs/register.md",sourceDirName:".",slug:"/babel-register",permalink:"/babel-website/docs/babel-register",draft:!1,editUrl:"https://github.com/babel/website/edit/main/docs/../docs/register.md",tags:[],version:"current",frontMatter:{id:"babel-register",title:"@babel/register"},sidebar:"docs",previous:{title:"@babel/plugin-transform-runtime",permalink:"/babel-website/docs/babel-plugin-transform-runtime"},next:{title:"@babel/standalone",permalink:"/babel-website/docs/babel-standalone"}},d={},m=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Ignores <code>node_modules</code> by default",id:"ignores-node_modules-by-default",level:3},{value:"Specifying options",id:"specifying-options",level:2},{value:"Environment variables",id:"environment-variables",level:2},{value:"BABEL_CACHE_PATH",id:"babel_cache_path",level:3},{value:"BABEL_DISABLE_CACHE",id:"babel_disable_cache",level:3},{value:"Compiling plugins and presets on the fly",id:"compiling-plugins-and-presets-on-the-fly",level:2},{value:"Experimental Babel 8 implementation",id:"experimental-babel-8-implementation",level:2}],f={toc:m};function b(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"One of the ways you can use Babel is through the require hook. The require hook\nwill bind itself to node's ",(0,l.kt)("inlineCode",{parentName:"p"},"require")," and automatically compile files on the\nfly. This is equivalent to CoffeeScript's\n",(0,l.kt)("a",{parentName:"p",href:"http://coffeescript.org/v2/annotated-source/register.html"},"coffee-script/register"),"."),(0,l.kt)("h2",{id:"install"},"Install"),(0,l.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @babel/core @babel/register --save-dev\n"))),(0,l.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @babel/core @babel/register --dev\n")))),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'require("@babel/register");\n')),(0,l.kt)("p",null,"All subsequent files required by node with the extensions ",(0,l.kt)("inlineCode",{parentName:"p"},".es6"),", ",(0,l.kt)("inlineCode",{parentName:"p"},".es"),", ",(0,l.kt)("inlineCode",{parentName:"p"},".jsx"),",\n",(0,l.kt)("inlineCode",{parentName:"p"},".mjs"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},".js")," will be transformed by Babel."),(0,l.kt)("blockquote",{class:"alert alert--info"},(0,l.kt)("h4",null,"Polyfill not included"),(0,l.kt)("p",null,"You must include the [polyfill](/babel-website/docs/babel-polyfill) separately when using features that require it, like generators.")),(0,l.kt)("h3",{id:"ignores-node_modules-by-default"},"Ignores ",(0,l.kt)("inlineCode",{parentName:"h3"},"node_modules")," by default"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"NOTE:")," By default all requires to ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules")," will be ignored. You can\noverride this by passing an ignore regex via:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'require("@babel/register")({\n  // This will override `node_modules` ignoring - you can alternatively pass\n  // an array of strings to be explicitly matched or a regex / glob\n  ignore: [],\n});\n')),(0,l.kt)("h2",{id:"specifying-options"},"Specifying options"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'require("@babel/register")({\n  // Array of ignore conditions, either a regex or a function. (Optional)\n  // File paths that match any condition are not compiled.\n  ignore: [\n    // When a file path matches this regex then it is **not** compiled\n    /regex/,\n\n    // The file\'s path is also passed to any ignore functions. It will\n    // **not** be compiled if `true` is returned.\n    function(filepath) {\n      return filepath !== "/path/to/es6-file.js";\n    },\n  ],\n\n  // Array of accept conditions, either a regex or a function. (Optional)\n  // File paths that match all conditions are compiled.\n  only: [\n    // File paths that **don\'t** match this regex are not compiled\n    /my_es6_folder/,\n\n    // File paths that **do not** return true are not compiled\n    function(filepath) {\n      return filepath === "/path/to/es6-file.js";\n    },\n  ],\n\n  // Setting this will remove the currently hooked extensions of `.es6`, `.es`, `.jsx`, `.mjs`\n  // and .js so you\'ll have to add them back if you want them to be used again.\n  extensions: [".es6", ".es", ".jsx", ".js", ".mjs"],\n\n  // Setting this to false will disable the cache.\n  cache: true,\n});\n')),(0,l.kt)("p",null,"You can pass in all other ",(0,l.kt)("a",{parentName:"p",href:"/babel-website/docs/options"},"options")," as well, including ",(0,l.kt)("inlineCode",{parentName:"p"},"plugins")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"presets"),".\nNote that ",(0,l.kt)("a",{parentName:"p",href:"/babel-website/docs/config-files"},"config files")," will also be loaded and the programmatic\nconfig will be merged over top of the file config options. ",(0,l.kt)("inlineCode",{parentName:"p"},"@babel/register")," does not support\n",(0,l.kt)("inlineCode",{parentName:"p"},"ignore")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"only")," in config files."),(0,l.kt)("h2",{id:"environment-variables"},"Environment variables"),(0,l.kt)("p",null,"By default ",(0,l.kt)("inlineCode",{parentName:"p"},"@babel/node")," cli and ",(0,l.kt)("inlineCode",{parentName:"p"},"@babel/register")," will save to a json cache in your\ntemporary directory."),(0,l.kt)("p",null,"This will heavily improve with the startup and compilation of your files. There\nare however scenarios where you want to change this behaviour and there are\nenvironment variables exposed to allow you to do this."),(0,l.kt)("h3",{id:"babel_cache_path"},"BABEL_CACHE_PATH"),(0,l.kt)("p",null,"Specify a different cache location."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Shell"',title:'"Shell"'},"BABEL_CACHE_PATH=/foo/my-cache.json babel-node script.js\n")),(0,l.kt)("h3",{id:"babel_disable_cache"},"BABEL_DISABLE_CACHE"),(0,l.kt)("p",null,"Disable the cache."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Shell"',title:'"Shell"'},"BABEL_DISABLE_CACHE=1 babel-node script.js\n")),(0,l.kt)("h2",{id:"compiling-plugins-and-presets-on-the-fly"},"Compiling plugins and presets on the fly"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"@babel/register")," uses Node's ",(0,l.kt)("inlineCode",{parentName:"p"},"require()")," hook system to compile files\non the fly when they are loaded. While this is quite helpful overall, it means\nthat there can be confusing cases where code within a ",(0,l.kt)("inlineCode",{parentName:"p"},"require()")," hook causes\n",(0,l.kt)("em",{parentName:"p"},"more")," calls to ",(0,l.kt)("inlineCode",{parentName:"p"},"require"),", causing a dependency cycle. In Babel's case for\ninstance, this could mean that in the process of Babel trying to compile a\nuser's file, Babel could end up trying to compile itself ",(0,l.kt)("em",{parentName:"p"},"as it is loading"),"."),(0,l.kt)("p",null,"To avoid this problem, this module explicitly disallows re-entrant compilation,\ne.g. Babel's own compilation logic explicitly cannot trigger further compilation\nof any other files on the fly. The downside of this is that if you want to\ndefine a plugin or preset that is itself live-compiled, the process is\ncomplicated."),(0,l.kt)("p",null,"The crux of it is that your own code needs to load the plugin/preset first.\nAssuming the plugin/preset loads all of its dependencies up front, what you'll\nwant to do is:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'require("@babel/register")({\n  // ...\n});\n\nrequire("./my-plugin");\n')),(0,l.kt)("p",null,"Because it is your own code that triggered the load, and not the logic within\n",(0,l.kt)("inlineCode",{parentName:"p"},"@babel/register")," itself, this should successfully compile any plugin/preset\nthat loads synchronously."),(0,l.kt)("h2",{id:"experimental-babel-8-implementation"},"Experimental Babel 8 implementation"),(0,l.kt)("p",null,"You can also test the new experimental implementation that will be enabled by default in Babel 8, using"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'require("@babel/register/experimental-worker");\n')),(0,l.kt)("p",null,"It internally runs Babel asynchronously, so it's compatible with ",(0,l.kt)("a",{parentName:"p",href:"/babel-website/docs/config-files#configuration-file-types"},(0,l.kt)("inlineCode",{parentName:"a"},".mjs")," configuration files"),". You can already use it as a replacement of ",(0,l.kt)("inlineCode",{parentName:"p"},"@babel/register")," with a few caveats:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If you programmatically specify ",(0,l.kt)("inlineCode",{parentName:"li"},"@babel/register")," options (using ",(0,l.kt)("inlineCode",{parentName:"li"},'require("@babel/register")({ /* ... options */ })'),"), you must make sure that they are serializable. This means that you cannot pass plugin functions defined inline, but you must move them to a separate ",(0,l.kt)("inlineCode",{parentName:"li"},"./my-plugin.js")," file or to a ",(0,l.kt)("inlineCode",{parentName:"li"},"babel.config.js")," file."),(0,l.kt)("li",{parentName:"ul"},"The new implementation is still experimental: it ",(0,l.kt)("em",{parentName:"li"},"should")," have the same features as the existing one, but there may be some new bugs and regressions.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"@babel/register")," does ",(0,l.kt)("em",{parentName:"p"},"not")," support compiling native Node.js ES modules on the fly, since currently there is no stable API for intercepting ES modules loading."))}b.isMDXComponent=!0}}]);