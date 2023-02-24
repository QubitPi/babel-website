"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3316],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return b}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,u=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,b=p["".concat(o,".").concat(f)]||p[f]||d[f]||u;return n?r.createElement(b,l(l({ref:t},c),{},{components:n})):r.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=n.length,l=new Array(u);l[0]=f;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<u;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},39798:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(27378),a=n(38944),u="tabItem_wHwb";function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(u,l),hidden:n},t)}},23930:function(e,t,n){n.d(t,{Z:function(){return x}});var r=n(25773),a=n(27378),u=n(38944),l=n(83457),i=n(3620),o=n(30654),s=n(70784),c=n(71819);function p(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function b(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,u=(0,i.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,o._X)(l),(0,a.useCallback)((function(e){if(l){var t=new URLSearchParams(u.location.search);t.set(l,e),u.replace(Object.assign({},u.location,{search:t.toString()}))}}),[l,u])]}function v(e){var t,n,r,u,l=e.defaultValue,i=e.queryString,o=void 0!==i&&i,s=e.groupId,p=d(e),v=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:p})})),m=v[0],g=v[1],y=b({queryString:o,groupId:s}),h=y[0],k=y[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,c.Nk)(t),r=n[0],u=n[1],[r,(0,a.useCallback)((function(e){t&&u.set(e)}),[t,u])]),x=w[0],E=w[1],N=function(){var e=null!=h?h:x;return f({value:e,tabValues:p})?e:null}();return(0,a.useLayoutEffect)((function(){N&&g(N)}),[N]),{selectedValue:m,selectValue:(0,a.useCallback)((function(e){if(!f({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);g(e),k(e),E(e)}),[k,E,p]),tabValues:p}}var m=n(76457),g="tabList_J5MA",y="tabItem_l0OV";function h(e){var t=e.className,n=e.block,i=e.selectedValue,o=e.selectValue,s=e.tabValues,c=[],p=(0,l.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==i&&(p(t),o(r))},f=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,a=c.indexOf(e.currentTarget)+1;n=null!=(r=c[a])?r:c[0];break;case"ArrowLeft":var u,l=c.indexOf(e.currentTarget)-1;n=null!=(u=c[l])?u:c[c.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":n},t)},s.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return c.push(e)},onKeyDown:f,onClick:d},l,{className:(0,u.Z)("tabs__item",y,null==l?void 0:l.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function k(e){var t=e.lazy,n=e.children,r=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var u=n.find((function(e){return e.props.value===r}));return u?(0,a.cloneElement)(u,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function w(e){var t=v(e);return a.createElement("div",{className:(0,u.Z)("tabs-container",g)},a.createElement(h,(0,r.Z)({},e,t)),a.createElement(k,(0,r.Z)({},e,t)))}function x(e){var t=(0,m.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},94711:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return f}});var r=n(25773),a=n(30808),u=(n(27378),n(35318)),l=n(23930),i=n(39798),o=["components"],s={id:"babel-plugin-syntax-destructuring-private",title:"@babel/plugin-syntax-destructuring-private",sidebar_label:"syntax-destructuring-private"},c=void 0,p={unversionedId:"babel-plugin-syntax-destructuring-private",id:"babel-plugin-syntax-destructuring-private",title:"@babel/plugin-syntax-destructuring-private",description:"Allow parsing of destructuring private fields",source:"@site/../docs/plugin-syntax-destructuring-private.md",sourceDirName:".",slug:"/babel-plugin-syntax-destructuring-private",permalink:"/babel-website/docs/babel-plugin-syntax-destructuring-private",draft:!1,editUrl:"https://github.com/babel/website/edit/main/docs/../docs/plugin-syntax-destructuring-private.md",tags:[],version:"current",frontMatter:{id:"babel-plugin-syntax-destructuring-private",title:"@babel/plugin-syntax-destructuring-private",sidebar_label:"syntax-destructuring-private"}},d={},f=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"With a configuration file (Recommended)",id:"with-a-configuration-file-recommended",level:3},{value:"Via CLI",id:"via-cli",level:3},{value:"Via Node API",id:"via-node-api",level:3}],b={toc:f};function v(e){var t=e.components,n=(0,a.Z)(e,o);return(0,u.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("blockquote",null,(0,u.kt)("p",{parentName:"blockquote"},"Allow parsing of destructuring private fields")),(0,u.kt)("blockquote",null,(0,u.kt)("h4",{parentName:"blockquote",id:"syntax-only"},"Syntax only"),(0,u.kt)("p",{parentName:"blockquote"},"It's unlikely you want to use this plugin directly as it only enables Babel to parse this syntax. Instead, use ",(0,u.kt)("a",{parentName:"p",href:"/babel-website/docs/babel-plugin-proposal-destructuring-private"},"plugin-proposal-destructuring-private")," to ",(0,u.kt)("em",{parentName:"p"},"both")," parse and transform this syntax.")),(0,u.kt)("h2",{id:"installation"},"Installation"),(0,u.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,u.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --save-dev @babel/plugin-syntax-destructuring-private\n"))),(0,u.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add --dev @babel/plugin-syntax-destructuring-private\n")))),(0,u.kt)("h2",{id:"usage"},"Usage"),(0,u.kt)("h3",{id:"with-a-configuration-file-recommended"},"With a configuration file (Recommended)"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="babel.config.json"',title:'"babel.config.json"'},'{\n  "plugins": ["@babel/plugin-syntax-destructuring-private"]\n}\n')),(0,u.kt)("h3",{id:"via-cli"},"Via CLI"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Shell"',title:'"Shell"'},"babel --plugins @babel/plugin-syntax-destructuring-private script.js\n")),(0,u.kt)("h3",{id:"via-node-api"},"Via Node API"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'require("@babel/core").transformSync("code", {\n  plugins: ["@babel/plugin-syntax-destructuring-private"],\n});\n')))}v.isMDXComponent=!0}}]);