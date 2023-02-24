"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9440],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||l;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},39798:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(27378),r=n(38944),l="tabItem_wHwb";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},23930:function(e,t,n){n.d(t,{Z:function(){return N}});var a=n(25773),r=n(27378),l=n(38944),o=n(83457),i=n(3620),u=n(30654),s=n(70784),c=n(71819);function p(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,l=(0,i.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,u._X)(o),(0,r.useCallback)((function(e){if(o){var t=new URLSearchParams(l.location.search);t.set(o,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[o,l])]}function b(e){var t,n,a,l,o=e.defaultValue,i=e.queryString,u=void 0!==i&&i,s=e.groupId,p=d(e),b=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:p})})),v=b[0],g=b[1],h=m({queryString:u,groupId:s}),k=h[0],y=h[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,c.Nk)(t),a=n[0],l=n[1],[a,(0,r.useCallback)((function(e){t&&l.set(e)}),[t,l])]),N=w[0],O=w[1],E=function(){var e=null!=k?k:N;return f({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){E&&g(E)}),[E]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!f({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);g(e),y(e),O(e)}),[y,O,p]),tabValues:p}}var v=n(76457),g="tabList_J5MA",h="tabItem_l0OV";function k(e){var t=e.className,n=e.block,i=e.selectedValue,u=e.selectValue,s=e.tabValues,c=[],p=(0,o.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=c.indexOf(t),a=s[n].value;a!==i&&(p(t),u(a))},f=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;n=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var l,o=c.indexOf(e.currentTarget)-1;n=null!=(l=c[o])?l:c[c.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return c.push(e)},onKeyDown:f,onClick:d},o,{className:(0,l.Z)("tabs__item",h,null==o?void 0:o.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,a=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var l=n.find((function(e){return e.props.value===a}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function w(e){var t=b(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function N(e){var t=(0,v.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},26775:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return f}});var a=n(25773),r=n(30808),l=(n(27378),n(35318)),o=n(23930),i=n(39798),u=["components"],s={id:"babel-preset-flow",title:"@babel/preset-flow"},c=void 0,p={unversionedId:"babel-preset-flow",id:"babel-preset-flow",title:"@babel/preset-flow",description:"This preset is recommended if you use Flow, a static type checker for JavaScript code. It includes the following plugins:",source:"@site/../docs/preset-flow.md",sourceDirName:".",slug:"/babel-preset-flow",permalink:"/babel-website/docs/babel-preset-flow",draft:!1,editUrl:"https://github.com/babel/website/edit/main/docs/../docs/preset-flow.md",tags:[],version:"current",frontMatter:{id:"babel-preset-flow",title:"@babel/preset-flow"},sidebar:"docs",previous:{title:"@babel/preset-typescript",permalink:"/babel-website/docs/babel-preset-typescript"},next:{title:"Roadmap",permalink:"/babel-website/docs/roadmap"}},d={},f=[{value:"Example",id:"example",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"With a configuration file (Recommended)",id:"with-a-configuration-file-recommended",level:3},{value:"Via CLI",id:"via-cli",level:3},{value:"Via Node API",id:"via-node-api",level:3},{value:"Options",id:"options",level:2},{value:"<code>all</code>",id:"all",level:3},{value:"<code>allowDeclareFields</code>",id:"allowdeclarefields",level:3}],m={toc:f};function b(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This preset is recommended if you use ",(0,l.kt)("a",{parentName:"p",href:"https://flow.org/en/docs/getting-started/"},"Flow"),", a static type checker for JavaScript code. It includes the following plugins:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/babel-website/docs/babel-plugin-transform-flow-strip-types"},"@babel/plugin-transform-flow-strip-types"))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"In")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"function foo(one: any, two: number, three?): string {}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Out")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"function foo(one, two, three) {}\n")),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --save-dev @babel/preset-flow\n"))),(0,l.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add --dev @babel/preset-flow\n")))),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("h3",{id:"with-a-configuration-file-recommended"},"With a configuration file (Recommended)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="babel.config.json"',title:'"babel.config.json"'},'{\n  "presets": ["@babel/preset-flow"]\n}\n')),(0,l.kt)("h3",{id:"via-cli"},"Via CLI"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Shell"',title:'"Shell"'},"babel --presets @babel/preset-flow script.js\n")),(0,l.kt)("h3",{id:"via-node-api"},"Via Node API"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'require("@babel/core").transformSync("code", {\n  presets: ["@babel/preset-flow"],\n});\n')),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"all"},(0,l.kt)("inlineCode",{parentName:"h3"},"all")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),", defaults to ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,l.kt)("p",null,"Flow will only parse Flow-specific features if a ",(0,l.kt)("inlineCode",{parentName:"p"},"@flow")," pragma is present atop the file, or the ",(0,l.kt)("a",{parentName:"p",href:"https://flow.org/en/docs/config/options/#toc-all-boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"all")," option")," is\nset inside the ",(0,l.kt)("inlineCode",{parentName:"p"},".flowconfig"),"."),(0,l.kt)("p",null,"If you are using the ",(0,l.kt)("inlineCode",{parentName:"p"},"all")," option in your Flow config, be sure to set this option to ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," to get matching behavior."),(0,l.kt)("p",null,"For example, without either of the above set, the following call expression with a type argument:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"f<T>(e)\n")),(0,l.kt)("p",null,"Would get parsed as a nested binary expression:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"f < T > e;\n")),(0,l.kt)("h3",{id:"allowdeclarefields"},(0,l.kt)("inlineCode",{parentName:"h3"},"allowDeclareFields")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),", defaults to ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("p",null,"Added in: ",(0,l.kt)("inlineCode",{parentName:"p"},"v7.9.0")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"NOTE: This will be enabled by default in Babel 8")),(0,l.kt)("p",null,"When enabled, type-only class fields are only removed if they are prefixed with the ",(0,l.kt)("inlineCode",{parentName:"p"},"declare")," modifier:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"class A {\n  declare foo: string; // Removed\n  bar: string; // Initialized to undefined\n}\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"You can read more about configuring preset options ",(0,l.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/presets#preset-options"},"here"))))}b.isMDXComponent=!0}}]);