"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5419],{35318:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return f}});var n=t(27378);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=c(t),d=a,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||l;return t?n.createElement(f,u(u({ref:r},s),{},{components:t})):n.createElement(f,u({ref:r},s))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,u=new Array(l);u[0]=d;var o={};for(var i in r)hasOwnProperty.call(r,i)&&(o[i]=r[i]);o.originalType=e,o[p]="string"==typeof e?e:a,u[1]=o;for(var c=2;c<l;c++)u[c]=t[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},39798:function(e,r,t){t.d(r,{Z:function(){return u}});var n=t(27378),a=t(38944),l={tabItem:"tabItem_wHwb"};function u(e){var r=e.children,t=e.hidden,u=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,u),hidden:t},r)}},23930:function(e,r,t){t.d(r,{Z:function(){return w}});var n=t(25773),a=t(27378),l=t(38944),u=t(83457),o=t(3620),i=t(30654),c=t(70784),s=t(71819);function p(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes,default:r.default}}))}function m(e){var r=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=r?r:p(t);return function(e){var r=(0,c.l)(e,(function(e,r){return e.value===r.value}));if(r.length>0)throw new Error('Docusaurus error: Duplicate values "'+r.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[r,t])}function d(e){var r=e.value;return e.tabValues.some((function(e){return e.value===r}))}function f(e){var r=e.queryString,t=void 0!==r&&r,n=e.groupId,l=(0,o.k6)(),u=function(e){var r=e.queryString,t=void 0!==r&&r,n=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,i._X)(u),(0,a.useCallback)((function(e){if(u){var r=new URLSearchParams(l.location.search);r.set(u,e),l.replace(Object.assign({},l.location,{search:r.toString()}))}}),[u,l])]}function b(e){var r,t,n,l,u=e.defaultValue,o=e.queryString,i=void 0!==o&&o,c=e.groupId,p=m(e),b=(0,a.useState)((function(){return function(e){var r,t=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(r=n.find((function(e){return e.default})))?r:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:u,tabValues:p})})),g=b[0],v=b[1],h=f({queryString:i,groupId:c}),y=h[0],k=h[1],w=(r=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),t=(0,s.Nk)(r),n=t[0],l=t[1],[n,(0,a.useCallback)((function(e){r&&l.set(e)}),[r,l])]),E=w[0],N=w[1],O=function(){var e=null!=y?y:E;return d({value:e,tabValues:p})?e:null}();return(0,a.useLayoutEffect)((function(){O&&v(O)}),[O]),{selectedValue:g,selectValue:(0,a.useCallback)((function(e){if(!d({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);v(e),k(e),N(e)}),[k,N,p]),tabValues:p}}var g=t(76457),v={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};function h(e){var r=e.className,t=e.block,o=e.selectedValue,i=e.selectValue,c=e.tabValues,s=[],p=(0,u.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var r=e.currentTarget,t=s.indexOf(r),n=c[t].value;n!==o&&(p(r),i(n))},d=function(e){var r,t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var n,a=s.indexOf(e.currentTarget)+1;t=null!=(n=s[a])?n:s[0];break;case"ArrowLeft":var l,u=s.indexOf(e.currentTarget)-1;t=null!=(l=s[u])?l:s[s.length-1]}null==(r=t)||r.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},r)},c.map((function(e){var r=e.value,t=e.label,u=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===r?0:-1,"aria-selected":o===r,key:r,ref:function(e){return s.push(e)},onKeyDown:d,onClick:m},u,{className:(0,l.Z)("tabs__item",v.tabItem,null==u?void 0:u.className,{"tabs__item--active":o===r})}),null!=t?t:r)})))}function y(e){var r=e.lazy,t=e.children,n=e.selectedValue;if(t=Array.isArray(t)?t:[t],r){var l=t.find((function(e){return e.props.value===n}));return l?(0,a.cloneElement)(l,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},t.map((function(e,r){return(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==n})})))}function k(e){var r=b(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",v.tabList)},a.createElement(h,(0,n.Z)({},e,r)),a.createElement(y,(0,n.Z)({},e,r)))}function w(e){var r=(0,g.Z)();return a.createElement(k,(0,n.Z)({key:String(r)},e))}},53332:function(e,r,t){t.r(r),t.d(r,{assets:function(){return m},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return d}});var n=t(25773),a=t(30808),l=(t(27378),t(35318)),u=t(23930),o=t(39798),i=["components"],c={id:"babel-plugin-transform-remove-debugger",title:"babel-plugin-transform-remove-debugger",sidebar_label:"remove-debugger"},s=void 0,p={unversionedId:"babel-plugin-transform-remove-debugger",id:"babel-plugin-transform-remove-debugger",title:"babel-plugin-transform-remove-debugger",description:"Example",source:"@site/../docs/plugin-transform-remove-debugger.md",sourceDirName:".",slug:"/babel-plugin-transform-remove-debugger",permalink:"/babel-website/docs/babel-plugin-transform-remove-debugger",draft:!1,editUrl:"https://github.com/babel/website/edit/main/docs/../docs/plugin-transform-remove-debugger.md",tags:[],version:"current",frontMatter:{id:"babel-plugin-transform-remove-debugger",title:"babel-plugin-transform-remove-debugger",sidebar_label:"remove-debugger"}},m={},d=[{value:"Example",id:"example",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"With a configuration file (Recommended)",id:"with-a-configuration-file-recommended",level:3},{value:"Via CLI",id:"via-cli",level:3},{value:"Via Node API",id:"via-node-api",level:3}],f={toc:d},b="wrapper";function g(e){var r=e.components,t=(0,a.Z)(e,i);return(0,l.kt)(b,(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"In")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"debugger;\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Out")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"")),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)(u.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install babel-plugin-transform-remove-debugger --save-dev\n"))),(0,l.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add babel-plugin-transform-remove-debugger --dev\n")))),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("h3",{id:"with-a-configuration-file-recommended"},"With a configuration file (Recommended)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="babel.config.json"',title:'"babel.config.json"'},'{\n  "plugins": ["transform-remove-debugger"]\n}\n')),(0,l.kt)("h3",{id:"via-cli"},"Via CLI"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Shell"',title:'"Shell"'},"babel --plugins transform-remove-debugger script.js\n")),(0,l.kt)("h3",{id:"via-node-api"},"Via Node API"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'require("@babel/core").transformSync("code", {\n  plugins: ["transform-remove-debugger"],\n});\n')))}g.isMDXComponent=!0}}]);