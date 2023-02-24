"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8266],{35318:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return f}});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,f=p["".concat(o,".").concat(d)]||p[d]||b[d]||l;return a?n.createElement(f,i(i({ref:t},s),{},{components:a})):n.createElement(f,i({ref:t},s))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[p]="string"==typeof e?e:r,i[1]=u;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},39798:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(27378),r=a(38944),l={tabItem:"tabItem_wHwb"};function i(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:a},t)}},23930:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(25773),r=a(27378),l=a(38944),i=a(83457),u=a(3620),o=a(30654),c=a(70784),s=a(71819);function p(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function b(e){var t=e.values,a=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(a);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,l=(0,u.k6)(),i=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,o._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(l.location.search);t.set(i,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[i,l])]}function m(e){var t,a,n,l,i=e.defaultValue,u=e.queryString,o=void 0!==u&&u,c=e.groupId,p=b(e),m=(0,r.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!d({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:p})})),v=m[0],g=m[1],y=f({queryString:o,groupId:c}),h=y[0],k=y[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),a=(0,s.Nk)(t),n=a[0],l=a[1],[n,(0,r.useCallback)((function(e){t&&l.set(e)}),[t,l])]),x=w[0],E=w[1],I=function(){var e=null!=h?h:x;return d({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){I&&g(I)}),[I]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!d({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);g(e),k(e),E(e)}),[k,E,p]),tabValues:p}}var v=a(76457),g={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};function y(e){var t=e.className,a=e.block,u=e.selectedValue,o=e.selectValue,c=e.tabValues,s=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,b=function(e){var t=e.currentTarget,a=s.indexOf(t),n=c[a].value;n!==u&&(p(t),o(n))},d=function(e){var t,a=null;switch(e.key){case"Enter":b(e);break;case"ArrowRight":var n,r=s.indexOf(e.currentTarget)+1;a=null!=(n=s[r])?n:s[0];break;case"ArrowLeft":var l,i=s.indexOf(e.currentTarget)-1;a=null!=(l=s[i])?l:s[s.length-1]}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},c.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:function(e){return s.push(e)},onKeyDown:d,onClick:b},i,{className:(0,l.Z)("tabs__item",g.tabItem,null==i?void 0:i.className,{"tabs__item--active":u===t})}),null!=a?a:t)})))}function h(e){var t=e.lazy,a=e.children,n=e.selectedValue;if(a=Array.isArray(a)?a:[a],t){var l=a.find((function(e){return e.props.value===n}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function k(e){var t=m(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(h,(0,n.Z)({},e,t)))}function w(e){var t=(0,v.Z)();return r.createElement(k,(0,n.Z)({key:String(t)},e))}},12231:function(e,t,a){a.r(t),a.d(t,{assets:function(){return b},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return d}});var n=a(25773),r=a(30808),l=(a(27378),a(35318)),i=a(23930),u=a(39798),o=["components"],c={id:"babel-plugin-syntax-partial-application",title:"@babel/plugin-syntax-partial-application",sidebar_label:"syntax-partial-application"},s=void 0,p={unversionedId:"babel-plugin-syntax-partial-application",id:"babel-plugin-syntax-partial-application",title:"@babel/plugin-syntax-partial-application",description:"#### Syntax only",source:"@site/../docs/plugin-syntax-partial-application.md",sourceDirName:".",slug:"/babel-plugin-syntax-partial-application",permalink:"/babel-website/docs/babel-plugin-syntax-partial-application",draft:!1,editUrl:"https://github.com/babel/website/edit/main/docs/../docs/plugin-syntax-partial-application.md",tags:[],version:"current",frontMatter:{id:"babel-plugin-syntax-partial-application",title:"@babel/plugin-syntax-partial-application",sidebar_label:"syntax-partial-application"}},b={},d=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"With a configuration file (Recommended)",id:"with-a-configuration-file-recommended",level:3},{value:"Via CLI",id:"via-cli",level:3},{value:"Via Node API",id:"via-node-api",level:3}],f={toc:d},m="wrapper";function v(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)(m,(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("h4",{parentName:"blockquote",id:"syntax-only"},"Syntax only"),(0,l.kt)("p",{parentName:"blockquote"},"It's unlikely you want to use this plugin directly as it only enables Babel to parse this syntax. Instead, use ",(0,l.kt)("a",{parentName:"p",href:"/babel-website/docs/babel-plugin-proposal-partial-application"},"plugin-proposal-partial-application")," to ",(0,l.kt)("em",{parentName:"p"},"both")," parse and transform this syntax.")),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --save-dev @babel/plugin-syntax-partial-application\n"))),(0,l.kt)(u.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add --dev @babel/plugin-syntax-partial-application\n")))),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("h3",{id:"with-a-configuration-file-recommended"},"With a configuration file (Recommended)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="babel.config.json"',title:'"babel.config.json"'},'{\n  "plugins": ["@babel/plugin-syntax-partial-application"]\n}\n')),(0,l.kt)("h3",{id:"via-cli"},"Via CLI"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Shell"',title:'"Shell"'},"babel --plugins @babel/plugin-syntax-partial-application script.js\n")),(0,l.kt)("h3",{id:"via-node-api"},"Via Node API"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'require("@babel/core").transformSync("code", {\n  plugins: ["@babel/plugin-syntax-partial-application"]\n});\n')))}v.isMDXComponent=!0}}]);