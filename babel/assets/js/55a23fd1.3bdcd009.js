"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8096],{35318:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return b}});var r=t(27378);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(t),d=a,b=p["".concat(u,".").concat(d)]||p[d]||m[d]||i;return t?r.createElement(b,l(l({ref:n},c),{},{components:t})):r.createElement(b,l({ref:n},c))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},39798:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(27378),a=t(38944),i="tabItem_wHwb";function l(e){var n=e.children,t=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,l),hidden:t},n)}},23930:function(e,n,t){t.d(n,{Z:function(){return N}});var r=t(25773),a=t(27378),i=t(38944),l=t(83457),o=t(3620),u=t(30654),s=t(70784),c=t(71819);function p(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function m(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:p(t);return function(e){var n=(0,s.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function d(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function b(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,i=(0,o.k6)(),l=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:r});return[(0,u._X)(l),(0,a.useCallback)((function(e){if(l){var n=new URLSearchParams(i.location.search);n.set(l,e),i.replace(Object.assign({},i.location,{search:n.toString()}))}}),[l,i])]}function f(e){var n,t,r,i,l=e.defaultValue,o=e.queryString,u=void 0!==o&&o,s=e.groupId,p=m(e),f=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:p})})),g=f[0],v=f[1],y=b({queryString:u,groupId:s}),h=y[0],k=y[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),t=(0,c.Nk)(n),r=t[0],i=t[1],[r,(0,a.useCallback)((function(e){n&&i.set(e)}),[n,i])]),N=w[0],j=w[1],x=function(){var e=null!=h?h:N;return d({value:e,tabValues:p})?e:null}();return(0,a.useLayoutEffect)((function(){x&&v(x)}),[x]),{selectedValue:g,selectValue:(0,a.useCallback)((function(e){if(!d({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);v(e),k(e),j(e)}),[k,j,p]),tabValues:p}}var g=t(76457),v="tabList_J5MA",y="tabItem_l0OV";function h(e){var n=e.className,t=e.block,o=e.selectedValue,u=e.selectValue,s=e.tabValues,c=[],p=(0,l.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var n=e.currentTarget,t=c.indexOf(n),r=s[t].value;r!==o&&(p(n),u(r))},d=function(e){var n,t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var r,a=c.indexOf(e.currentTarget)+1;t=null!=(r=c[a])?r:c[0];break;case"ArrowLeft":var i,l=c.indexOf(e.currentTarget)-1;t=null!=(i=c[l])?i:c[c.length-1]}null==(n=t)||n.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n)},s.map((function(e){var n=e.value,t=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,key:n,ref:function(e){return c.push(e)},onKeyDown:d,onClick:m},l,{className:(0,i.Z)("tabs__item",y,null==l?void 0:l.className,{"tabs__item--active":o===n})}),null!=t?t:n)})))}function k(e){var n=e.lazy,t=e.children,r=e.selectedValue;if(t=Array.isArray(t)?t:[t],n){var i=t.find((function(e){return e.props.value===r}));return i?(0,a.cloneElement)(i,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},t.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})})))}function w(e){var n=f(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",v)},a.createElement(h,(0,r.Z)({},e,n)),a.createElement(k,(0,r.Z)({},e,n)))}function N(e){var n=(0,g.Z)();return a.createElement(w,(0,r.Z)({key:String(n)},e))}},27364:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var r=t(25773),a=t(30808),i=(t(27378),t(35318)),l=t(23930),o=t(39798),u=["components"],s={id:"babel-plugin-syntax-dynamic-import",title:"@babel/plugin-syntax-dynamic-import",sidebar_label:"syntax-dynamic-import"},c=void 0,p={unversionedId:"babel-plugin-syntax-dynamic-import",id:"babel-plugin-syntax-dynamic-import",title:"@babel/plugin-syntax-dynamic-import",description:"NOTE: This plugin is included in @babel/preset-env, in ES2020",source:"@site/../docs/plugin-syntax-dynamic-import.md",sourceDirName:".",slug:"/babel-plugin-syntax-dynamic-import",permalink:"/babel-website/docs/babel-plugin-syntax-dynamic-import",draft:!1,editUrl:"https://github.com/babel/website/edit/main/docs/../docs/plugin-syntax-dynamic-import.md",tags:[],version:"current",frontMatter:{id:"babel-plugin-syntax-dynamic-import",title:"@babel/plugin-syntax-dynamic-import",sidebar_label:"syntax-dynamic-import"},sidebar:"plugins",previous:{title:"syntax-bigint",permalink:"/babel-website/docs/babel-plugin-syntax-bigint"},next:{title:"syntax-import-meta",permalink:"/babel-website/docs/babel-plugin-syntax-import-meta"}},m={},d=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"With a configuration file (Recommended)",id:"with-a-configuration-file-recommended",level:3},{value:"Via CLI",id:"via-cli",level:3},{value:"Via Node API",id:"via-node-api",level:3},{value:"Working with Webpack and @babel/preset-env",id:"working-with-webpack-and-babelpreset-env",level:2}],b={toc:d};function f(e){var n=e.components,t=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"NOTE"),": This plugin is included in ",(0,i.kt)("inlineCode",{parentName:"p"},"@babel/preset-env"),", in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposals/blob/master/finished-proposals.md"},"ES2020"))),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --save-dev @babel/plugin-syntax-dynamic-import\n"))),(0,i.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add --dev @babel/plugin-syntax-dynamic-import\n")))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"with-a-configuration-file-recommended"},"With a configuration file (Recommended)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="babel.config.json"',title:'"babel.config.json"'},'{\n  "plugins": ["@babel/plugin-syntax-dynamic-import"]\n}\n')),(0,i.kt)("h3",{id:"via-cli"},"Via CLI"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Shell"',title:'"Shell"'},"babel --plugins @babel/plugin-syntax-dynamic-import script.js\n")),(0,i.kt)("h3",{id:"via-node-api"},"Via Node API"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'require("@babel/core").transformSync("code", {\n  plugins: ["@babel/plugin-syntax-dynamic-import"],\n});\n')),(0,i.kt)("h2",{id:"working-with-webpack-and-babelpreset-env"},"Working with Webpack and @babel/preset-env"),(0,i.kt)("p",null,"Currently, ",(0,i.kt)("inlineCode",{parentName:"p"},"@babel/preset-env")," is unaware that using ",(0,i.kt)("inlineCode",{parentName:"p"},"import()")," with ",(0,i.kt)("a",{parentName:"p",href:"https://webpack.js.org/guides/code-splitting/#dynamic-imports"},"Webpack relies on ",(0,i.kt)("inlineCode",{parentName:"a"},"Promise")," internally"),". Environments which do not have builtin support for ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),", like Internet Explorer, will require both the ",(0,i.kt)("inlineCode",{parentName:"p"},"promise")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"iterator")," polyfills be added manually."),(0,i.kt)("p",null,"For example, with ",(0,i.kt)("inlineCode",{parentName:"p"},"core-js@3"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="webpack.config.js"',title:'"webpack.config.js"'},'const config = {\n  entry: [\n    "core-js/modules/es.promise",\n    "core-js/modules/es.array.iterator",\n    path.resolve(__dirname, "src/main.js"),\n  ],\n  // ...\n};\n')),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/main.js"',title:'"src/main.js"'},'import "core-js/modules/es.promise";\nimport "core-js/modules/es.array.iterator";\n\n// ...\n')),(0,i.kt)("p",null,"This is the same for ",(0,i.kt)("inlineCode",{parentName:"p"},"core-js@2"),", except the imports paths are slightly different:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="webpack.config.js"',title:'"webpack.config.js"'},'const config = {\n  entry: [\n    "core-js/modules/es6.promise",\n    "core-js/modules/es6.array.iterator",\n    path.resolve(__dirname, "src/main.js"),\n  ],\n  // ...\n};\n')),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/main.js"',title:'"src/main.js"'},'import "core-js/modules/es6.promise";\nimport "core-js/modules/es6.array.iterator";\n\n// ...\n')))}f.isMDXComponent=!0}}]);