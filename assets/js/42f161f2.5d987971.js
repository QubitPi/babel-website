"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7402],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},b="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),b=s(n),d=r,f=b["".concat(o,".").concat(d)]||b[d]||p[d]||l;return n?a.createElement(f,u(u({ref:t},c),{},{components:n})):a.createElement(f,u({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,u=new Array(l);u[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[b]="string"==typeof e?e:r,u[1]=i;for(var s=2;s<l;s++)u[s]=n[s];return a.createElement.apply(null,u)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39798:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(27378),r=n(38944),l={tabItem:"tabItem_wHwb"};function u(e){var t=e.children,n=e.hidden,u=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,u),hidden:n},t)}},23930:function(e,t,n){n.d(t,{Z:function(){return w}});var a=n(25773),r=n(27378),l=n(38944),u=n(83457),i=n(3620),o=n(30654),s=n(70784),c=n(71819);function b(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:b(n);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,l=(0,i.k6)(),u=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,o._X)(u),(0,r.useCallback)((function(e){if(u){var t=new URLSearchParams(l.location.search);t.set(u,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[u,l])]}function m(e){var t,n,a,l,u=e.defaultValue,i=e.queryString,o=void 0!==i&&i,s=e.groupId,b=p(e),m=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:u,tabValues:b})})),v=m[0],g=m[1],y=f({queryString:o,groupId:s}),h=y[0],k=y[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,c.Nk)(t),a=n[0],l=n[1],[a,(0,r.useCallback)((function(e){t&&l.set(e)}),[t,l])]),x=w[0],E=w[1],I=function(){var e=null!=h?h:x;return d({value:e,tabValues:b})?e:null}();return(0,r.useLayoutEffect)((function(){I&&g(I)}),[I]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!d({value:e,tabValues:b}))throw new Error("Can't select invalid tab value="+e);g(e),k(e),E(e)}),[k,E,b]),tabValues:b}}var v=n(76457),g={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};function y(e){var t=e.className,n=e.block,i=e.selectedValue,o=e.selectValue,s=e.tabValues,c=[],b=(0,u.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,n=c.indexOf(t),a=s[n].value;a!==i&&(b(t),o(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;n=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var l,u=c.indexOf(e.currentTarget)-1;n=null!=(l=c[u])?l:c[c.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((function(e){var t=e.value,n=e.label,u=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return c.push(e)},onKeyDown:d,onClick:p},u,{className:(0,l.Z)("tabs__item",g.tabItem,null==u?void 0:u.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function h(e){var t=e.lazy,n=e.children,a=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var l=n.find((function(e){return e.props.value===a}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function k(e){var t=m(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(h,(0,a.Z)({},e,t)))}function w(e){var t=(0,v.Z)();return r.createElement(k,(0,a.Z)({key:String(t)},e))}},2567:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return s},metadata:function(){return b},toc:function(){return d}});var a=n(25773),r=n(30808),l=(n(27378),n(35318)),u=n(23930),i=n(39798),o=["components"],s={id:"babel-plugin-syntax-class-static-block",title:"@babel/plugin-syntax-class-static-block",sidebar_label:"syntax-class-static-block"},c=void 0,b={unversionedId:"babel-plugin-syntax-class-static-block",id:"babel-plugin-syntax-class-static-block",title:"@babel/plugin-syntax-class-static-block",description:"#### Syntax only",source:"@site/../docs/plugin-syntax-class-static-block.md",sourceDirName:".",slug:"/babel-plugin-syntax-class-static-block",permalink:"/babel-website/docs/babel-plugin-syntax-class-static-block",draft:!1,editUrl:"https://github.com/babel/website/edit/main/docs/../docs/plugin-syntax-class-static-block.md",tags:[],version:"current",frontMatter:{id:"babel-plugin-syntax-class-static-block",title:"@babel/plugin-syntax-class-static-block",sidebar_label:"syntax-class-static-block"}},p={},d=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"With a configuration file (Recommended)",id:"with-a-configuration-file-recommended",level:3},{value:"Via CLI",id:"via-cli",level:3},{value:"Via Node API",id:"via-node-api",level:3}],f={toc:d},m="wrapper";function v(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)(m,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("h4",{parentName:"blockquote",id:"syntax-only"},"Syntax only"),(0,l.kt)("p",{parentName:"blockquote"},"It's unlikely you want to use this plugin directly as it only enables Babel to parse this syntax. Instead, use ",(0,l.kt)("a",{parentName:"p",href:"/babel-website/docs/babel-plugin-proposal-class-static-block"},"plugin-proposal-class-static-block")," to ",(0,l.kt)("em",{parentName:"p"},"both")," parse and transform this syntax.")),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)(u.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --save-dev @babel/plugin-syntax-class-static-block\n"))),(0,l.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add --dev @babel/plugin-syntax-class-static-block\n")))),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("h3",{id:"with-a-configuration-file-recommended"},"With a configuration file (Recommended)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="babel.config.json"',title:'"babel.config.json"'},'{\n  "plugins": ["@babel/plugin-syntax-class-static-block"]\n}\n')),(0,l.kt)("h3",{id:"via-cli"},"Via CLI"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Shell"',title:'"Shell"'},"babel --plugins @babel/plugin-syntax-class-static-block script.js\n")),(0,l.kt)("h3",{id:"via-node-api"},"Via Node API"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'require("@babel/core").transformSync("code", {\n  plugins: ["@babel/plugin-syntax-class-static-block"],\n});\n')))}v.isMDXComponent=!0}}]);