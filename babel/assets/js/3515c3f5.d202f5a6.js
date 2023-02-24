"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7605],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return b}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,b=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(b,i(i({ref:t},c),{},{components:n})):r.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39798:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(27378),a=n(38944),l="tabItem_wHwb";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:n},t)}},23930:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(25773),a=n(27378),l=n(38944),i=n(83457),o=n(3620),u=n(30654),s=n(70784),c=n(71819);function p(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function b(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,l=(0,o.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,u._X)(i),(0,a.useCallback)((function(e){if(i){var t=new URLSearchParams(l.location.search);t.set(i,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[i,l])]}function f(e){var t,n,r,l,i=e.defaultValue,o=e.queryString,u=void 0!==o&&o,s=e.groupId,p=d(e),f=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:p})})),g=f[0],k=f[1],v=b({queryString:u,groupId:s}),h=v[0],y=v[1],N=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,c.Nk)(t),r=n[0],l=n[1],[r,(0,a.useCallback)((function(e){t&&l.set(e)}),[t,l])]),w=N[0],j=N[1],O=function(){var e=null!=h?h:w;return m({value:e,tabValues:p})?e:null}();return(0,a.useLayoutEffect)((function(){O&&k(O)}),[O]),{selectedValue:g,selectValue:(0,a.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);k(e),y(e),j(e)}),[y,j,p]),tabValues:p}}var g=n(76457),k="tabList_J5MA",v="tabItem_l0OV";function h(e){var t=e.className,n=e.block,o=e.selectedValue,u=e.selectValue,s=e.tabValues,c=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==o&&(p(t),u(r))},m=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,a=c.indexOf(e.currentTarget)+1;n=null!=(r=c[a])?r:c[0];break;case"ArrowLeft":var l,i=c.indexOf(e.currentTarget)-1;n=null!=(l=c[i])?l:c[c.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:d},i,{className:(0,l.Z)("tabs__item",v,null==i?void 0:i.className,{"tabs__item--active":o===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,r=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var l=n.find((function(e){return e.props.value===r}));return l?(0,a.cloneElement)(l,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function N(e){var t=f(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",k)},a.createElement(h,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function w(e){var t=(0,g.Z)();return a.createElement(N,(0,r.Z)({key:String(t)},e))}},96725:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var r=n(25773),a=n(30808),l=(n(27378),n(35318)),i=n(23930),o=n(39798),u=["components"],s={id:"babel-plugin-transform-destructuring",title:"@babel/plugin-transform-destructuring",sidebar_label:"destructuring"},c=void 0,p={unversionedId:"babel-plugin-transform-destructuring",id:"babel-plugin-transform-destructuring",title:"@babel/plugin-transform-destructuring",description:"NOTE: This plugin is included in @babel/preset-env",source:"@site/../docs/plugin-transform-destructuring.md",sourceDirName:".",slug:"/babel-plugin-transform-destructuring",permalink:"/babel-website/docs/babel-plugin-transform-destructuring",draft:!1,editUrl:"https://github.com/babel/website/edit/main/docs/../docs/plugin-transform-destructuring.md",tags:[],version:"current",frontMatter:{id:"babel-plugin-transform-destructuring",title:"@babel/plugin-transform-destructuring",sidebar_label:"destructuring"},sidebar:"plugins",previous:{title:"computed-properties",permalink:"/babel-website/docs/babel-plugin-transform-computed-properties"},next:{title:"duplicate-keys",permalink:"/babel-website/docs/babel-plugin-transform-duplicate-keys"}},d={},m=[{value:"Examples",id:"examples",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"With a configuration file (Recommended)",id:"with-a-configuration-file-recommended",level:3},{value:"Via CLI",id:"via-cli",level:3},{value:"Via Node API",id:"via-node-api",level:3},{value:"Options",id:"options",level:2},{value:"<code>loose</code>",id:"loose",level:3},{value:"<code>useBuiltIns</code>",id:"usebuiltins",level:3},{value:"Example",id:"example",level:5},{value:"<code>allowArrayLike</code>",id:"allowarraylike",level:3},{value:"References",id:"references",level:2}],b={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"NOTE"),": This plugin is included in ",(0,l.kt)("inlineCode",{parentName:"p"},"@babel/preset-env"))),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"In")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"let { x, y } = obj;\n\nlet [a, b, ...rest] = arr;\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Out")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"function _toArray(arr) { ... }\n\nlet _obj = obj,\n    x = _obj.x,\n    y = _obj.y;\n\nlet _arr = arr,\n    _arr2 = _toArray(_arr),\n    a = _arr2[0],\n    b = _arr2[1],\n    rest = _arr2.slice(2);\n")),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --save-dev @babel/plugin-transform-destructuring\n"))),(0,l.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add --dev @babel/plugin-transform-destructuring\n")))),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("h3",{id:"with-a-configuration-file-recommended"},"With a configuration file (Recommended)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="babel.config.json"',title:'"babel.config.json"'},'{\n  "plugins": ["@babel/plugin-transform-destructuring"]\n}\n')),(0,l.kt)("h3",{id:"via-cli"},"Via CLI"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Shell"',title:'"Shell"'},"babel --plugins @babel/plugin-transform-destructuring script.js\n")),(0,l.kt)("h3",{id:"via-node-api"},"Via Node API"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'require("@babel/core").transformSync("code", {\n  plugins: ["@babel/plugin-transform-destructuring"],\n});\n')),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"loose"},(0,l.kt)("inlineCode",{parentName:"h3"},"loose")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),", defaults to ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,l.kt)("p",null,"Enabling this option will assume that what you want to destructure is an array and won't use ",(0,l.kt)("inlineCode",{parentName:"p"},"Array.from")," on other iterables."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f Consider migrating to the top level ",(0,l.kt)("a",{parentName:"p",href:"/babel-website/docs/assumptions#iterableisarray"},(0,l.kt)("inlineCode",{parentName:"a"},"iterableIsArray"))," assumption.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="babel.config.json"',title:'"babel.config.json"'},'{\n  "assumptions": {\n    "iterableIsArray": true\n  }\n}\n')),(0,l.kt)("h3",{id:"usebuiltins"},(0,l.kt)("inlineCode",{parentName:"h3"},"useBuiltIns")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),", defaults to ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,l.kt)("p",null,"Enabling this option will use ",(0,l.kt)("inlineCode",{parentName:"p"},"Object.assign")," directly instead of the Babel's ",(0,l.kt)("inlineCode",{parentName:"p"},"extends")," helper."),(0,l.kt)("h5",{id:"example"},"Example"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".babelrc")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="babel.config.json"',title:'"babel.config.json"'},'{\n  "plugins": [\n    ["@babel/plugin-transform-destructuring", { "useBuiltIns": true }]\n  ]\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"In")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"var { ...x } = z;\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Out")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"var _z = z,\n  x = Object.assign({}, _z);\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"You can read more about configuring plugin options ",(0,l.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/plugins#plugin-options"},"here"))),(0,l.kt)("h3",{id:"allowarraylike"},(0,l.kt)("inlineCode",{parentName:"h3"},"allowArrayLike")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),", defaults to ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("p",null,"Added in: ",(0,l.kt)("inlineCode",{parentName:"p"},"v7.10.0")),(0,l.kt)("p",null,"This option allows destructuring array-like objects using the array destructuring syntax."),(0,l.kt)("p",null,"An array-like object is an object with a ",(0,l.kt)("inlineCode",{parentName:"p"},"length")," property: for example, ",(0,l.kt)("inlineCode",{parentName:"p"},'{ 0: "a", 1: "b", length: 2 }'),'. Note that, like real arrays, array-like objects can have "holes": ',(0,l.kt)("inlineCode",{parentName:"p"},'{ 1: "a", length: 3 }')," is equivalent to ",(0,l.kt)("inlineCode",{parentName:"p"},'[ (hole), "a", (hole) ]'),"."),(0,l.kt)("p",null,"While it is ",(0,l.kt)("em",{parentName:"p"},"not")," spec-compliant to destructure array-like objects as if they were arrays, there are many objects that would be ",(0,l.kt)("em",{parentName:"p"},"iterables")," in modern browsers with ",(0,l.kt)("inlineCode",{parentName:"p"},"Symbol.iterator")," support. Some notable examples are the DOM collections, like ",(0,l.kt)("inlineCode",{parentName:"p"},'document.querySelectorAll("img.big")'),", which are the main use case for this option."),(0,l.kt)("p",null,"Please note that Babel allows destructuring ",(0,l.kt)("inlineCode",{parentName:"p"},"arguments")," in old engines even if this option is disabled, because it's defined as ",(0,l.kt)("em",{parentName:"p"},"iterable")," in the ECMAScript specification."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f Consider migrating to the top level ",(0,l.kt)("a",{parentName:"p",href:"/babel-website/docs/assumptions#arraylikeisiterable"},(0,l.kt)("inlineCode",{parentName:"a"},"arrayLikeIsIterable"))," assumption.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="babel.config.json"',title:'"babel.config.json"'},'{\n  "assumptions": {\n    "arrayLikeIsIterable": true\n  }\n}\n')),(0,l.kt)("h2",{id:"references"},"References"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment"},"MDN: Destructuring assignment"))))}f.isMDXComponent=!0}}]);