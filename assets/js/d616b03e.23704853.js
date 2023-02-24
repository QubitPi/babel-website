"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[348],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,f=p["".concat(o,".").concat(d)]||p[d]||b[d]||i;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[p]="string"==typeof e?e:r,l[1]=u;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39798:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(27378),r=n(38944),i={tabItem:"tabItem_wHwb"};function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,l),hidden:n},t)}},23930:function(e,t,n){n.d(t,{Z:function(){return w}});var a=n(25773),r=n(27378),i=n(38944),l=n(83457),u=n(3620),o=n(30654),s=n(70784),c=n(71819);function p(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function b(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,i=(0,u.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,o._X)(l),(0,r.useCallback)((function(e){if(l){var t=new URLSearchParams(i.location.search);t.set(l,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[l,i])]}function m(e){var t,n,a,i,l=e.defaultValue,u=e.queryString,o=void 0!==u&&u,s=e.groupId,p=b(e),m=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:l,tabValues:p})})),g=m[0],v=m[1],y=f({queryString:o,groupId:s}),h=y[0],k=y[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,c.Nk)(t),a=n[0],i=n[1],[a,(0,r.useCallback)((function(e){t&&i.set(e)}),[t,i])]),x=w[0],N=w[1],E=function(){var e=null!=h?h:x;return d({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){E&&v(E)}),[E]),{selectedValue:g,selectValue:(0,r.useCallback)((function(e){if(!d({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);v(e),k(e),N(e)}),[k,N,p]),tabValues:p}}var g=n(76457),v={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};function y(e){var t=e.className,n=e.block,u=e.selectedValue,o=e.selectValue,s=e.tabValues,c=[],p=(0,l.o5)().blockElementScrollPositionUntilNextRender,b=function(e){var t=e.currentTarget,n=c.indexOf(t),a=s[n].value;a!==u&&(p(t),o(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":b(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;n=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var i,l=c.indexOf(e.currentTarget)-1;n=null!=(i=c[l])?i:c[c.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},s.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:function(e){return c.push(e)},onKeyDown:d,onClick:b},l,{className:(0,i.Z)("tabs__item",v.tabItem,null==l?void 0:l.className,{"tabs__item--active":u===t})}),null!=n?n:t)})))}function h(e){var t=e.lazy,n=e.children,a=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var i=n.find((function(e){return e.props.value===a}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function k(e){var t=m(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",v.tabList)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(h,(0,a.Z)({},e,t)))}function w(e){var t=(0,g.Z)();return r.createElement(k,(0,a.Z)({key:String(t)},e))}},39532:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=n(25773),r=n(30808),i=(n(27378),n(35318)),l=n(23930),u=n(39798),o=["components"],s={id:"babel-plugin-syntax-bigint",title:"@babel/plugin-syntax-bigint",sidebar_label:"syntax-bigint"},c=void 0,p={unversionedId:"babel-plugin-syntax-bigint",id:"babel-plugin-syntax-bigint",title:"@babel/plugin-syntax-bigint",description:"NOTE: This plugin is included in @babel/preset-env, in ES2020",source:"@site/../docs/plugin-syntax-bigint.md",sourceDirName:".",slug:"/babel-plugin-syntax-bigint",permalink:"/babel-website/docs/babel-plugin-syntax-bigint",draft:!1,editUrl:"https://github.com/babel/website/edit/main/docs/../docs/plugin-syntax-bigint.md",tags:[],version:"current",frontMatter:{id:"babel-plugin-syntax-bigint",title:"@babel/plugin-syntax-bigint",sidebar_label:"syntax-bigint"},sidebar:"plugins",previous:{title:"optional-chaining",permalink:"/babel-website/docs/babel-plugin-proposal-optional-chaining"},next:{title:"syntax-dynamic-import",permalink:"/babel-website/docs/babel-plugin-syntax-dynamic-import"}},b={},d=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"With a configuration file (Recommended)",id:"with-a-configuration-file-recommended",level:3},{value:"Via CLI",id:"via-cli",level:3},{value:"Via Node API",id:"via-node-api",level:3},{value:"References",id:"references",level:2}],f={toc:d},m="wrapper";function g(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)(m,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"NOTE"),": This plugin is included in ",(0,i.kt)("inlineCode",{parentName:"p"},"@babel/preset-env"),", in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposals/blob/master/finished-proposals.md"},"ES2020")),(0,i.kt)("h4",{parentName:"blockquote",id:"syntax-only"},"Syntax only"),(0,i.kt)("p",{parentName:"blockquote"},"This plugin only enables parsing of this feature. Babel doesn't support transforming BigInts. One recommendation is to use the JSBI library and eventually run ",(0,i.kt)("inlineCode",{parentName:"p"},"babel-plugin-transform-jsbi-to-bigint")," to codemod it to BigInt in the future.")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,i.kt)(u.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --save-dev @babel/plugin-syntax-bigint\n"))),(0,i.kt)(u.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add --dev @babel/plugin-syntax-bigint\n")))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"with-a-configuration-file-recommended"},"With a configuration file (Recommended)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="babel.config.json"',title:'"babel.config.json"'},'{\n  "plugins": ["@babel/plugin-syntax-bigint"]\n}\n')),(0,i.kt)("h3",{id:"via-cli"},"Via CLI"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Shell"',title:'"Shell"'},"babel --plugins @babel/plugin-syntax-bigint script.js\n")),(0,i.kt)("h3",{id:"via-node-api"},"Via Node API"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'require("@babel/core").transformSync("code", {\n  plugins: ["@babel/plugin-syntax-bigint"],\n});\n')),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-bigint"},"proposal-bigint")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://v8.dev/features/bigint#polyfilling-transpiling"},"BigInt from v8.dev")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/GoogleChromeLabs/babel-plugin-transform-jsbi-to-bigint"},"babel-plugin-transform-jsbi-to-bigint"))))}g.isMDXComponent=!0}}]);