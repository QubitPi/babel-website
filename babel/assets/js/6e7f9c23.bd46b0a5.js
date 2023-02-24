"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2153],{35318:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return b}});var a=t(27378);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),s=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(i.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(t),d=r,b=p["".concat(i,".").concat(d)]||p[d]||f[d]||l;return t?a.createElement(b,u(u({ref:n},c),{},{components:t})):a.createElement(b,u({ref:n},c))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,u=new Array(l);u[0]=d;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[p]="string"==typeof e?e:r,u[1]=o;for(var s=2;s<l;s++)u[s]=t[s];return a.createElement.apply(null,u)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},39798:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(27378),r=t(38944),l="tabItem_wHwb";function u(e){var n=e.children,t=e.hidden,u=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,u),hidden:t},n)}},23930:function(e,n,t){t.d(n,{Z:function(){return w}});var a=t(25773),r=t(27378),l=t(38944),u=t(83457),o=t(3620),i=t(30654),s=t(70784),c=t(71819);function p(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function f(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:p(t);return function(e){var n=(0,s.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function d(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function b(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,l=(0,o.k6)(),u=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:a});return[(0,i._X)(u),(0,r.useCallback)((function(e){if(u){var n=new URLSearchParams(l.location.search);n.set(u,e),l.replace(Object.assign({},l.location,{search:n.toString()}))}}),[u,l])]}function m(e){var n,t,a,l,u=e.defaultValue,o=e.queryString,i=void 0!==o&&o,s=e.groupId,p=f(e),m=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:u,tabValues:p})})),g=m[0],y=m[1],v=b({queryString:i,groupId:s}),h=v[0],k=v[1],x=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),t=(0,c.Nk)(n),a=t[0],l=t[1],[a,(0,r.useCallback)((function(e){n&&l.set(e)}),[n,l])]),w=x[0],N=x[1],E=function(){var e=null!=h?h:w;return d({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){E&&y(E)}),[E]),{selectedValue:g,selectValue:(0,r.useCallback)((function(e){if(!d({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);y(e),k(e),N(e)}),[k,N,p]),tabValues:p}}var g=t(76457),y="tabList_J5MA",v="tabItem_l0OV";function h(e){var n=e.className,t=e.block,o=e.selectedValue,i=e.selectValue,s=e.tabValues,c=[],p=(0,u.o5)().blockElementScrollPositionUntilNextRender,f=function(e){var n=e.currentTarget,t=c.indexOf(n),a=s[t].value;a!==o&&(p(n),i(a))},d=function(e){var n,t=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;t=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var l,u=c.indexOf(e.currentTarget)-1;t=null!=(l=c[u])?l:c[c.length-1]}null==(n=t)||n.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n)},s.map((function(e){var n=e.value,t=e.label,u=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,key:n,ref:function(e){return c.push(e)},onKeyDown:d,onClick:f},u,{className:(0,l.Z)("tabs__item",v,null==u?void 0:u.className,{"tabs__item--active":o===n})}),null!=t?t:n)})))}function k(e){var n=e.lazy,t=e.children,a=e.selectedValue;if(t=Array.isArray(t)?t:[t],n){var l=t.find((function(e){return e.props.value===a}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},t.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})})))}function x(e){var n=m(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",y)},r.createElement(h,(0,a.Z)({},e,n)),r.createElement(k,(0,a.Z)({},e,n)))}function w(e){var n=(0,g.Z)();return r.createElement(x,(0,a.Z)({key:String(n)},e))}},84638:function(e,n,t){t.r(n),t.d(n,{assets:function(){return f},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=t(25773),r=t(30808),l=(t(27378),t(35318)),u=t(23930),o=t(39798),i=["components"],s={id:"babel-plugin-syntax-async-generators",title:"@babel/plugin-syntax-async-generators",sidebar_label:"syntax-async-generators"},c=void 0,p={unversionedId:"babel-plugin-syntax-async-generators",id:"babel-plugin-syntax-async-generators",title:"@babel/plugin-syntax-async-generators",description:"#### Syntax only",source:"@site/../docs/plugin-syntax-async-generators.md",sourceDirName:".",slug:"/babel-plugin-syntax-async-generators",permalink:"/babel-website/docs/babel-plugin-syntax-async-generators",draft:!1,editUrl:"https://github.com/babel/website/edit/main/docs/../docs/plugin-syntax-async-generators.md",tags:[],version:"current",frontMatter:{id:"babel-plugin-syntax-async-generators",title:"@babel/plugin-syntax-async-generators",sidebar_label:"syntax-async-generators"}},f={},d=[{value:"Example",id:"example",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"With a configuration file (Recommended)",id:"with-a-configuration-file-recommended",level:3},{value:"Via CLI",id:"via-cli",level:3},{value:"Via Node API",id:"via-node-api",level:3},{value:"References",id:"references",level:2}],b={toc:d};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("h4",{parentName:"blockquote",id:"syntax-only"},"Syntax only"),(0,l.kt)("p",{parentName:"blockquote"},"It's unlikely you want to use this plugin directly as it only enables Babel to parse this syntax. Instead, use ",(0,l.kt)("a",{parentName:"p",href:"/babel-website/docs/babel-plugin-proposal-async-generator-functions"},"plugin-proposal-async-generators")," to ",(0,l.kt)("em",{parentName:"p"},"both")," parse and transform this syntax.")),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"async function* agf() {\n  await 1;\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"async function f() {\n  for await (let x of y) {\n    g(x);\n  }\n}\n")),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)(u.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --save-dev @babel/plugin-syntax-async-generators\n"))),(0,l.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add --dev @babel/plugin-syntax-async-generators\n")))),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("h3",{id:"with-a-configuration-file-recommended"},"With a configuration file (Recommended)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="babel.config.json"',title:'"babel.config.json"'},'{\n  "plugins": ["@babel/plugin-syntax-async-generators"]\n}\n')),(0,l.kt)("h3",{id:"via-cli"},"Via CLI"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Shell"',title:'"Shell"'},"babel --plugins @babel/plugin-syntax-async-generators script.js\n")),(0,l.kt)("h3",{id:"via-node-api"},"Via Node API"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'require("@babel/core").transformSync("code", {\n  plugins: ["@babel/plugin-syntax-async-generators"]\n});\n')),(0,l.kt)("h2",{id:"references"},"References"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-async-iteration"},"Proposal: Asynchronous iteration for ECMAScript"))))}m.isMDXComponent=!0}}]);