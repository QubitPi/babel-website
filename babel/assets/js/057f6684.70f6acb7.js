"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8990],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,d=p["".concat(i,".").concat(m)]||p[m]||f[m]||l;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[p]="string"==typeof e?e:a,o[1]=u;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39798:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(27378),a=n(38944),l="tabItem_wHwb";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},23930:function(e,t,n){n.d(t,{Z:function(){return E}});var r=n(25773),a=n(27378),l=n(38944),o=n(83457),u=n(3620),i=n(30654),s=n(70784),c=n(71819);function p(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function f(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function d(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,l=(0,u.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,i._X)(o),(0,a.useCallback)((function(e){if(o){var t=new URLSearchParams(l.location.search);t.set(o,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[o,l])]}function b(e){var t,n,r,l,o=e.defaultValue,u=e.queryString,i=void 0!==u&&u,s=e.groupId,p=f(e),b=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:p})})),v=b[0],g=b[1],h=d({queryString:i,groupId:s}),y=h[0],w=h[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,c.Nk)(t),r=n[0],l=n[1],[r,(0,a.useCallback)((function(e){t&&l.set(e)}),[t,l])]),E=k[0],N=k[1],O=function(){var e=null!=y?y:E;return m({value:e,tabValues:p})?e:null}();return(0,a.useLayoutEffect)((function(){O&&g(O)}),[O]),{selectedValue:v,selectValue:(0,a.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);g(e),w(e),N(e)}),[w,N,p]),tabValues:p}}var v=n(76457),g="tabList_J5MA",h="tabItem_l0OV";function y(e){var t=e.className,n=e.block,u=e.selectedValue,i=e.selectValue,s=e.tabValues,c=[],p=(0,o.o5)().blockElementScrollPositionUntilNextRender,f=function(e){var t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==u&&(p(t),i(r))},m=function(e){var t,n=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":var r,a=c.indexOf(e.currentTarget)+1;n=null!=(r=c[a])?r:c[0];break;case"ArrowLeft":var l,o=c.indexOf(e.currentTarget)-1;n=null!=(l=c[o])?l:c[c.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:f},o,{className:(0,l.Z)("tabs__item",h,null==o?void 0:o.className,{"tabs__item--active":u===t})}),null!=n?n:t)})))}function w(e){var t=e.lazy,n=e.children,r=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var l=n.find((function(e){return e.props.value===r}));return l?(0,a.cloneElement)(l,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function k(e){var t=b(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",g)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(w,(0,r.Z)({},e,t)))}function E(e){var t=(0,v.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}},91927:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var r=n(25773),a=n(30808),l=(n(27378),n(35318)),o=n(23930),u=n(39798),i=["components"],s={id:"babel-plugin-transform-flow-comments",title:"@babel/plugin-transform-flow-comments",sidebar_label:"flow-comments"},c=void 0,p={unversionedId:"babel-plugin-transform-flow-comments",id:"babel-plugin-transform-flow-comments",title:"@babel/plugin-transform-flow-comments",description:"You should be able to use this plugin instead of @babel/plugin-flow-strip-types to preserve the / @flow / directive and still use flow.",source:"@site/../docs/plugin-transform-flow-comments.md",sourceDirName:".",slug:"/babel-plugin-transform-flow-comments",permalink:"/babel-website/docs/babel-plugin-transform-flow-comments",draft:!1,editUrl:"https://github.com/babel/website/edit/main/docs/../docs/plugin-transform-flow-comments.md",tags:[],version:"current",frontMatter:{id:"babel-plugin-transform-flow-comments",title:"@babel/plugin-transform-flow-comments",sidebar_label:"flow-comments"}},f={},m=[{value:"Example",id:"example",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"With a configuration file (Recommended)",id:"with-a-configuration-file-recommended",level:3},{value:"Via CLI",id:"via-cli",level:3},{value:"Via Node API",id:"via-node-api",level:3}],d={toc:m};function b(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"You should be able to use this plugin instead of ",(0,l.kt)("inlineCode",{parentName:"p"},"@babel/plugin-flow-strip-types")," to preserve the ",(0,l.kt)("inlineCode",{parentName:"p"},"/* @flow */")," directive and still use flow."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://flow.org/blog/2015/02/20/Flow-Comments.html"},"Flow Comments Blog Post")),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"In")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'function foo(bar?) {}\nfunction foo2(bar?: string) {}\nfunction foo(x: number): string {}\ntype B = {\n  name: string,\n};\nexport type GraphQLFormattedError = number;\nimport type A, { B, C } from "./types";\nimport typeof D, { E, F } from "./types";\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Out")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"\"use strict\";\n\nfunction foo(bar /*:: ?*/) {}\nfunction foo2(bar /*:: ?: string*/) {}\nfunction foo(x /*: number*/) /*: string*/ {}\n/*:: type B = {\n  name: string;\n};*/\n/*:: export type GraphQLFormattedError = number;*/\n/*:: import type A, { B, C } from './types';*/\n/*:: import typeof D, { E, F } from './types';*/\n")),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --save-dev @babel/plugin-transform-flow-comments\n"))),(0,l.kt)(u.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add --dev @babel/plugin-transform-flow-comments\n")))),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("h3",{id:"with-a-configuration-file-recommended"},"With a configuration file (Recommended)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="babel.config.json"',title:'"babel.config.json"'},'{\n  "plugins": ["@babel/plugin-transform-flow-comments"]\n}\n')),(0,l.kt)("h3",{id:"via-cli"},"Via CLI"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Shell"',title:'"Shell"'},"babel --plugins @babel/plugin-transform-flow-comments script.js\n")),(0,l.kt)("h3",{id:"via-node-api"},"Via Node API"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'require("@babel/core").transformSync("code", {\n  plugins: ["@babel/plugin-transform-flow-comments"],\n});\n')))}b.isMDXComponent=!0}}]);