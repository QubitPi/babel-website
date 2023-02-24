"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[469],{35318:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),s=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(a),b=n,d=p["".concat(u,".").concat(b)]||p[b]||m[b]||l;return a?r.createElement(d,i(i({ref:t},c),{},{components:a})):r.createElement(d,i({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=b;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}b.displayName="MDXCreateElement"},39798:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(27378),n=a(38944),l={tabItem:"tabItem_wHwb"};function i(e){var t=e.children,a=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,i),hidden:a},t)}},23930:function(e,t,a){a.d(t,{Z:function(){return w}});var r=a(25773),n=a(27378),l=a(38944),i=a(83457),o=a(3620),u=a(30654),s=a(70784),c=a(71819);function p(e){return function(e){return n.Children.map(e,(function(e){if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,a=e.children;return(0,n.useMemo)((function(){var e=null!=t?t:p(a);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function b(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function d(e){var t=e.queryString,a=void 0!==t&&t,r=e.groupId,l=(0,o.k6)(),i=function(e){var t=e.queryString,a=void 0!==t&&t,r=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:a,groupId:r});return[(0,u._X)(i),(0,n.useCallback)((function(e){if(i){var t=new URLSearchParams(l.location.search);t.set(i,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[i,l])]}function f(e){var t,a,r,l,i=e.defaultValue,o=e.queryString,u=void 0!==o&&o,s=e.groupId,p=m(e),f=(0,n.useState)((function(){return function(e){var t,a=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!b({value:a,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var n=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:i,tabValues:p})})),g=f[0],v=f[1],h=d({queryString:u,groupId:s}),k=h[0],y=h[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),a=(0,c.Nk)(t),r=a[0],l=a[1],[r,(0,n.useCallback)((function(e){t&&l.set(e)}),[t,l])]),N=w[0],E=w[1],I=function(){var e=null!=k?k:N;return b({value:e,tabValues:p})?e:null}();return(0,n.useLayoutEffect)((function(){I&&v(I)}),[I]),{selectedValue:g,selectValue:(0,n.useCallback)((function(e){if(!b({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);v(e),y(e),E(e)}),[y,E,p]),tabValues:p}}var g=a(76457),v={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};function h(e){var t=e.className,a=e.block,o=e.selectedValue,u=e.selectValue,s=e.tabValues,c=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var t=e.currentTarget,a=c.indexOf(t),r=s[a].value;r!==o&&(p(t),u(r))},b=function(e){var t,a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var r,n=c.indexOf(e.currentTarget)+1;a=null!=(r=c[n])?r:c[0];break;case"ArrowLeft":var l,i=c.indexOf(e.currentTarget)-1;a=null!=(l=c[i])?l:c[c.length-1]}null==(t=a)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},s.map((function(e){var t=e.value,a=e.label,i=e.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:function(e){return c.push(e)},onKeyDown:b,onClick:m},i,{className:(0,l.Z)("tabs__item",v.tabItem,null==i?void 0:i.className,{"tabs__item--active":o===t})}),null!=a?a:t)})))}function k(e){var t=e.lazy,a=e.children,r=e.selectedValue;if(a=Array.isArray(a)?a:[a],t){var l=a.find((function(e){return e.props.value===r}));return l?(0,n.cloneElement)(l,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function y(e){var t=f(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",v.tabList)},n.createElement(h,(0,r.Z)({},e,t)),n.createElement(k,(0,r.Z)({},e,t)))}function w(e){var t=(0,g.Z)();return n.createElement(y,(0,r.Z)({key:String(t)},e))}},14550:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return b}});var r=a(25773),n=a(30808),l=(a(27378),a(35318)),i=a(23930),o=a(39798),u=["components"],s={id:"babel-plugin-proposal-numeric-separator",title:"@babel/plugin-proposal-numeric-separator",sidebar_label:"numeric-separator"},c=void 0,p={unversionedId:"babel-plugin-proposal-numeric-separator",id:"babel-plugin-proposal-numeric-separator",title:"@babel/plugin-proposal-numeric-separator",description:"NOTE: This plugin is included in @babel/preset-env, in ES2021",source:"@site/../docs/plugin-proposal-numeric-separator.md",sourceDirName:".",slug:"/babel-plugin-proposal-numeric-separator",permalink:"/babel-website/docs/babel-plugin-proposal-numeric-separator",draft:!1,editUrl:"https://github.com/babel/website/edit/main/docs/../docs/plugin-proposal-numeric-separator.md",tags:[],version:"current",frontMatter:{id:"babel-plugin-proposal-numeric-separator",title:"@babel/plugin-proposal-numeric-separator",sidebar_label:"numeric-separator"},sidebar:"plugins",previous:{title:"logical-assignment-operators",permalink:"/babel-website/docs/babel-plugin-proposal-logical-assignment-operators"},next:{title:"export-namespace-from",permalink:"/babel-website/docs/babel-plugin-proposal-export-namespace-from"}},m={},b=[{value:"Example",id:"example",level:2},{value:"Decimal Literals",id:"decimal-literals",level:3},{value:"Binary Literals",id:"binary-literals",level:3},{value:"Hex Literal",id:"hex-literal",level:3},{value:"Octal Literal",id:"octal-literal",level:3},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"With a configuration file (Recommended)",id:"with-a-configuration-file-recommended",level:3},{value:"Via CLI",id:"via-cli",level:3},{value:"Via Node API",id:"via-node-api",level:3},{value:"Additional Information",id:"additional-information",level:2},{value:"With a configuration file (Recommended)",id:"with-a-configuration-file-recommended-1",level:3},{value:"References",id:"references",level:2}],d={toc:b},f="wrapper";function g(e){var t=e.components,a=(0,n.Z)(e,u);return(0,l.kt)(f,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"NOTE"),": This plugin is included in ",(0,l.kt)("inlineCode",{parentName:"p"},"@babel/preset-env"),", in ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposals/blob/master/finished-proposals.md"},"ES2021"))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("h3",{id:"decimal-literals"},"Decimal Literals"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"let budget = 1_000_000_000_000;\n\n// What is the value of `budget`? It's 1 trillion!\n//\n// Let's confirm:\nconsole.log(budget === 10 ** 12); // true\n")),(0,l.kt)("h3",{id:"binary-literals"},"Binary Literals"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"let nibbles = 0b1010_0001_1000_0101;\n\n// Is bit 7 on? It sure is!\n// 0b1010_0001_1000_0101\n//             ^\n//\n// We can double check:\nconsole.log(!!(nibbles & (1 << 7))); // true\n")),(0,l.kt)("h3",{id:"hex-literal"},"Hex Literal"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"// Messages are sent as 24 bit values, but should be\n// treated as 3 distinct bytes:\nlet message = 0xa0_b0_c0;\n\n// What's the value of the upper most byte? It's A0, or 160.\n// We can confirm that:\nlet a = (message >> 16) & 0xff;\nconsole.log(a.toString(16), a); // a0, 160\n\n// What's the value of the middle byte? It's B0, or 176.\n// Let's just make sure...\nlet b = (message >> 8) & 0xff;\nconsole.log(b.toString(16), b); // b0, 176\n\n// What's the value of the lower most byte? It's C0, or 192.\n// Again, let's prove that:\nlet c = message & 0xff;\nconsole.log(c.toString(16), b); // c0, 192\n")),(0,l.kt)("h3",{id:"octal-literal"},"Octal Literal"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"hand wave emoji")),(0,l.kt)("p",null,"Octals are great for permissions, but also look better when represented in ",(0,l.kt)("inlineCode",{parentName:"p"},"0o0000")," form. No real benefit with separators here."),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --save-dev @babel/plugin-proposal-numeric-separator\n"))),(0,l.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add --dev @babel/plugin-proposal-numeric-separator\n")))),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("h3",{id:"with-a-configuration-file-recommended"},"With a configuration file (Recommended)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="babel.config.json"',title:'"babel.config.json"'},'{\n  "plugins": ["@babel/plugin-proposal-numeric-separator"]\n}\n')),(0,l.kt)("h3",{id:"via-cli"},"Via CLI"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Shell"',title:'"Shell"'},"babel --plugins @babel/plugin-proposal-numeric-separator script.js\n")),(0,l.kt)("h3",{id:"via-node-api"},"Via Node API"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'require("@babel/core").transformSync("code", {\n  plugins: ["@babel/plugin-proposal-numeric-separator"],\n});\n')),(0,l.kt)("h2",{id:"additional-information"},"Additional Information"),(0,l.kt)("p",null,"If you need to further compile ES2015 Decimal, Binary, Hex and Octal number representations to their pre-ES2015 numeric literal form, add the ",(0,l.kt)("a",{parentName:"p",href:"/babel-website/docs/babel-plugin-transform-literals"},(0,l.kt)("inlineCode",{parentName:"a"},'"@babel/plugin-transform-literals"'))," plugin:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"@babel/plugin-transform-literals")," is already included in ",(0,l.kt)("a",{parentName:"p",href:"/babel-website/docs/babel-preset-env"},"@babel/preset-env")," and @babel/preset-es2015.")),(0,l.kt)("h3",{id:"with-a-configuration-file-recommended-1"},"With a configuration file (Recommended)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="babel.config.json"',title:'"babel.config.json"'},'{\n  "presets": ["@babel/preset-env"],\n  "plugins": ["@babel/plugin-proposal-numeric-separator"]\n}\n{\n  "plugins": ["@babel/plugin-proposal-numeric-separator", "@babel/plugin-transform-literals"]\n}\n')),(0,l.kt)("h2",{id:"references"},"References"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/samuelgoto/proposal-numeric-separator"},"Proposal: Numeric Separators"))))}g.isMDXComponent=!0}}]);