"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7284],{35318:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return b}});var a=t(27378);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),u=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return t?a.createElement(b,o(o({ref:n},c),{},{components:t})):a.createElement(b,o({ref:n},c))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},39798:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(27378),r=t(38944),l="tabItem_wHwb";function o(e){var n=e.children,t=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:t},n)}},23930:function(e,n,t){t.d(n,{Z:function(){return w}});var a=t(25773),r=t(27378),l=t(38944),o=t(83457),s=t(3620),i=t(30654),u=t(70784),c=t(71819);function p(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function d(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:p(t);return function(e){var n=(0,u.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function m(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function b(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,l=(0,s.k6)(),o=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:a});return[(0,i._X)(o),(0,r.useCallback)((function(e){if(o){var n=new URLSearchParams(l.location.search);n.set(o,e),l.replace(Object.assign({},l.location,{search:n.toString()}))}}),[o,l])]}function f(e){var n,t,a,l,o=e.defaultValue,s=e.queryString,i=void 0!==s&&s,u=e.groupId,p=d(e),f=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:p})})),v=f[0],g=f[1],y=b({queryString:i,groupId:u}),h=y[0],k=y[1],x=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),t=(0,c.Nk)(n),a=t[0],l=t[1],[a,(0,r.useCallback)((function(e){n&&l.set(e)}),[n,l])]),w=x[0],N=x[1],E=function(){var e=null!=h?h:w;return m({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){E&&g(E)}),[E]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);g(e),k(e),N(e)}),[k,N,p]),tabValues:p}}var v=t(76457),g="tabList_J5MA",y="tabItem_l0OV";function h(e){var n=e.className,t=e.block,s=e.selectedValue,i=e.selectValue,u=e.tabValues,c=[],p=(0,o.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=c.indexOf(n),a=u[t].value;a!==s&&(p(n),i(a))},m=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;t=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var l,o=c.indexOf(e.currentTarget)-1;t=null!=(l=c[o])?l:c[c.length-1]}null==(n=t)||n.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n)},u.map((function(e){var n=e.value,t=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:function(e){return c.push(e)},onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",y,null==o?void 0:o.className,{"tabs__item--active":s===n})}),null!=t?t:n)})))}function k(e){var n=e.lazy,t=e.children,a=e.selectedValue;if(t=Array.isArray(t)?t:[t],n){var l=t.find((function(e){return e.props.value===a}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},t.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})})))}function x(e){var n=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g)},r.createElement(h,(0,a.Z)({},e,n)),r.createElement(k,(0,a.Z)({},e,n)))}function w(e){var n=(0,v.Z)();return r.createElement(x,(0,a.Z)({key:String(n)},e))}},43236:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var a=t(25773),r=t(30808),l=(t(27378),t(35318)),o=t(23930),s=t(39798),i=["components"],u={id:"babel-plugin-proposal-async-do-expressions",title:"@babel/plugin-proposal-async-do-expressions",sidebar_label:"async-do-expressions"},c=void 0,p={unversionedId:"babel-plugin-proposal-async-do-expressions",id:"babel-plugin-proposal-async-do-expressions",title:"@babel/plugin-proposal-async-do-expressions",description:"The async do { .. } expression executes a block (with one or many statements in it) in an asynchronous context, and the final statement completion value inside the block becomes the completion value of the asynchronous code.",source:"@site/../docs/plugin-proposal-async-do-expressions.md",sourceDirName:".",slug:"/babel-plugin-proposal-async-do-expressions",permalink:"/babel-website/docs/babel-plugin-proposal-async-do-expressions",draft:!1,editUrl:"https://github.com/babel/website/edit/main/docs/../docs/plugin-proposal-async-do-expressions.md",tags:[],version:"current",frontMatter:{id:"babel-plugin-proposal-async-do-expressions",title:"@babel/plugin-proposal-async-do-expressions",sidebar_label:"async-do-expressions"},sidebar:"plugins",previous:{title:"UMD",permalink:"/babel-website/docs/babel-plugin-transform-modules-umd"},next:{title:"decorators",permalink:"/babel-website/docs/babel-plugin-proposal-decorators"}},d={},m=[{value:"Example",id:"example",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"With a configuration file (Recommended)",id:"with-a-configuration-file-recommended",level:3},{value:"Via CLI",id:"via-cli",level:3},{value:"Via Node API",id:"via-node-api",level:3},{value:"References",id:"references",level:2}],b={toc:m};function f(e){var n=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"async do { .. }")," expression executes a block (with one or many statements in it) in an ",(0,l.kt)("em",{parentName:"p"},"asynchronous")," context, and the final statement completion value inside the block becomes the completion value of the ",(0,l.kt)("em",{parentName:"p"},"asynchronous")," code.")),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,"Issuing HTTP request in parallel"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"Promise.all([\n  async do {\n    const result = await fetch('https://example.com/A');\n    await result.json()\n  },\n  async do {\n    const result = await fetch('https://example.org/B');\n    await result.json()\n  },\n]).then(([a, b]) => {\n  console.log(\"example.com/A\", a);\n  console.log(\"example.org/B\", b);\n})\n")),(0,l.kt)("p",null,"will be transformed to"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"Promise.all([\n  (async () {\n    const result = await fetch('https://example.com/A');\n    return await result.json()\n  })(),\n  (async () {\n    const result = await fetch('https://example.org/B');\n    return await result.json()\n  })(),\n]).then(([a, b]) => {\n  console.log(\"example.com/A\", a);\n  console.log(\"example.org/B\", b);\n})\n")),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --save-dev @babel/plugin-proposal-async-do-expressions\n"))),(0,l.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add --dev @babel/plugin-proposal-async-do-expressions\n")))),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("h3",{id:"with-a-configuration-file-recommended"},"With a configuration file (Recommended)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="babel.config.json"',title:'"babel.config.json"'},'{\n  "plugins": ["@babel/plugin-proposal-async-do-expressions"]\n}\n')),(0,l.kt)("p",null,"Note: This plugin transpiles ",(0,l.kt)("inlineCode",{parentName:"p"},"async do {}")," to ES2017 Async arrow function ",(0,l.kt)("inlineCode",{parentName:"p"},"async () => {}"),". If you target to an older engine, i.e. Node.js 6 or IE 11, please also add ",(0,l.kt)("a",{parentName:"p",href:"/babel-website/docs/babel-plugin-transform-async-to-generator"},(0,l.kt)("inlineCode",{parentName:"a"},"@babel/plugin-transform-async-to-generator")),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n  "plugins": [\n    "@babel/plugin-proposal-async-do-expressions",\n    "@babel/plugin-transform-async-to-generator"\n  ]\n}\n')),(0,l.kt)("h3",{id:"via-cli"},"Via CLI"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Shell"',title:'"Shell"'},"babel --plugins @babel/plugin-proposal-async-do-expressions script.js\n")),(0,l.kt)("h3",{id:"via-node-api"},"Via Node API"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'require("@babel/core").transformSync("code", {\n  plugins: ["@babel/plugin-proposal-async-do-expressions"],\n});\n')),(0,l.kt)("h2",{id:"references"},"References"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-async-do-expressions"},"Proposal"))))}f.isMDXComponent=!0}}]);