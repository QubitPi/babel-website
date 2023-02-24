"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2365],{35318:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var a=t(27378);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),c=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(u.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=c(t),d=r,m=p["".concat(u,".").concat(d)]||p[d]||f[d]||l;return t?a.createElement(m,i(i({ref:n},s),{},{components:t})):a.createElement(m,i({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},39798:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(27378),r=t(38944),l="tabItem_wHwb";function i(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:t},n)}},23930:function(e,n,t){t.d(n,{Z:function(){return N}});var a=t(25773),r=t(27378),l=t(38944),i=t(83457),o=t(3620),u=t(30654),c=t(70784),s=t(71819);function p(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function f(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:p(t);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function d(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function m(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,l=(0,o.k6)(),i=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:a});return[(0,u._X)(i),(0,r.useCallback)((function(e){if(i){var n=new URLSearchParams(l.location.search);n.set(i,e),l.replace(Object.assign({},l.location,{search:n.toString()}))}}),[i,l])]}function b(e){var n,t,a,l,i=e.defaultValue,o=e.queryString,u=void 0!==o&&o,c=e.groupId,p=f(e),b=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:p})})),g=b[0],v=b[1],h=m({queryString:u,groupId:c}),y=h[0],k=h[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),t=(0,s.Nk)(n),a=t[0],l=t[1],[a,(0,r.useCallback)((function(e){n&&l.set(e)}),[n,l])]),N=w[0],E=w[1],O=function(){var e=null!=y?y:N;return d({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){O&&v(O)}),[O]),{selectedValue:g,selectValue:(0,r.useCallback)((function(e){if(!d({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);v(e),k(e),E(e)}),[k,E,p]),tabValues:p}}var g=t(76457),v="tabList_J5MA",h="tabItem_l0OV";function y(e){var n=e.className,t=e.block,o=e.selectedValue,u=e.selectValue,c=e.tabValues,s=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,f=function(e){var n=e.currentTarget,t=s.indexOf(n),a=c[t].value;a!==o&&(p(n),u(a))},d=function(e){var n,t=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":var a,r=s.indexOf(e.currentTarget)+1;t=null!=(a=s[r])?a:s[0];break;case"ArrowLeft":var l,i=s.indexOf(e.currentTarget)-1;t=null!=(l=s[i])?l:s[s.length-1]}null==(n=t)||n.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n)},c.map((function(e){var n=e.value,t=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,key:n,ref:function(e){return s.push(e)},onKeyDown:d,onClick:f},i,{className:(0,l.Z)("tabs__item",h,null==i?void 0:i.className,{"tabs__item--active":o===n})}),null!=t?t:n)})))}function k(e){var n=e.lazy,t=e.children,a=e.selectedValue;if(t=Array.isArray(t)?t:[t],n){var l=t.find((function(e){return e.props.value===a}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},t.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})})))}function w(e){var n=b(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",v)},r.createElement(y,(0,a.Z)({},e,n)),r.createElement(k,(0,a.Z)({},e,n)))}function N(e){var n=(0,g.Z)();return r.createElement(w,(0,a.Z)({key:String(n)},e))}},77057:function(e,n,t){t.r(n),t.d(n,{assets:function(){return f},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return d}});var a=t(25773),r=t(30808),l=(t(27378),t(35318)),i=t(23930),o=t(39798),u=["components"],c={id:"babel-plugin-minify-constant-folding",title:"babel-plugin-minify-constant-folding",sidebar_label:"minify-constant-folding"},s=void 0,p={unversionedId:"babel-plugin-minify-constant-folding",id:"babel-plugin-minify-constant-folding",title:"babel-plugin-minify-constant-folding",description:"Example",source:"@site/../docs/plugin-minify-constant-folding.md",sourceDirName:".",slug:"/babel-plugin-minify-constant-folding",permalink:"/babel-website/docs/babel-plugin-minify-constant-folding",draft:!1,editUrl:"https://github.com/babel/website/edit/main/docs/../docs/plugin-minify-constant-folding.md",tags:[],version:"current",frontMatter:{id:"babel-plugin-minify-constant-folding",title:"babel-plugin-minify-constant-folding",sidebar_label:"minify-constant-folding"}},f={},d=[{value:"Example",id:"example",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"With a configuration file (Recommended)",id:"with-a-configuration-file-recommended",level:3},{value:"Via CLI",id:"via-cli",level:3},{value:"Via Node API",id:"via-node-api",level:3},{value:"Options",id:"options",level:2}],m={toc:d};function b(e){var n=e.components,t=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"In")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'"a" + "b"\n2 * 3;\n4 | 3;\n"b" + a + "c" + "d" + g + z + "f" + "h" + "i"\n\n[a, b, c].concat([d, e], f, g, [h]);\n["a", "b", "c"].join();\n["a", "b", "c"].join(\'@\');\n[1, 2, 3].length;\n[1, 2, 3][1];\n[1, 2, 3].shift();\n[1, 2, 3].slice(0, 2);\n[a, b, c].pop();\n[a, b, c].reverse();\n"a,b,c".split(",");\n"abc"[0];\n"abc".charAt();\n"abc".charAt(1);\n"abc".length;\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Out")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'"ab";\n6;\n7;\n"b" + a + "cd" + g + z + "fhi";\n\n[a, b, c, d, e, f, g, h];\n"a,b,c";\n"a@b@c";\n3;\n2;\n2;\n[1, 2];\nc;\n[c, b, a];\n["a", "b", "c"];\n"a";\n"a";\n"a";\n"b";\n3;\n')),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install babel-plugin-minify-constant-folding --save-dev\n"))),(0,l.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add babel-plugin-minify-constant-folding --dev\n")))),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("h3",{id:"with-a-configuration-file-recommended"},"With a configuration file (Recommended)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="babel.config.json"',title:'"babel.config.json"'},'{\n  "plugins": ["minify-constant-folding"]\n}\n')),(0,l.kt)("h3",{id:"via-cli"},"Via CLI"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Shell"',title:'"Shell"'},"babel --plugins minify-constant-folding script.js\n")),(0,l.kt)("h3",{id:"via-node-api"},"Via Node API"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'require("@babel/core").transformSync("code", {\n  plugins: ["minify-constant-folding"]\n});\n')),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tdz")," - Account for TDZ (Temporal Dead Zone)")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"You can read more about configuring plugin options ",(0,l.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/plugins#plugin-options"},"here"))))}b.isMDXComponent=!0}}]);