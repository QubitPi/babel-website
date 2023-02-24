"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7113],{35318:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return g}});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),o=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=o(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=o(a),d=r,g=p["".concat(u,".").concat(d)]||p[d]||m[d]||i;return a?n.createElement(g,l(l({ref:t},c),{},{components:a})):n.createElement(g,l({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var o=2;o<i;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},39798:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(27378),r=a(38944),i="tabItem_wHwb";function l(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:a},t)}},23930:function(e,t,a){a.d(t,{Z:function(){return x}});var n=a(25773),r=a(27378),i=a(38944),l=a(83457),s=a(3620),u=a(30654),o=a(70784),c=a(71819);function p(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,a=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(a);return function(e){var t=(0,o.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function g(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,i=(0,s.k6)(),l=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,u._X)(l),(0,r.useCallback)((function(e){if(l){var t=new URLSearchParams(i.location.search);t.set(l,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[l,i])]}function f(e){var t,a,n,i,l=e.defaultValue,s=e.queryString,u=void 0!==s&&s,o=e.groupId,p=m(e),f=(0,r.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!d({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:l,tabValues:p})})),v=f[0],h=f[1],k=g({queryString:u,groupId:o}),b=k[0],N=k[1],j=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:o}.groupId),a=(0,c.Nk)(t),n=a[0],i=a[1],[n,(0,r.useCallback)((function(e){t&&i.set(e)}),[t,i])]),x=j[0],y=j[1],w=function(){var e=null!=b?b:x;return d({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){w&&h(w)}),[w]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!d({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);h(e),N(e),y(e)}),[N,y,p]),tabValues:p}}var v=a(76457),h="tabList_J5MA",k="tabItem_l0OV";function b(e){var t=e.className,a=e.block,s=e.selectedValue,u=e.selectValue,o=e.tabValues,c=[],p=(0,l.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var t=e.currentTarget,a=c.indexOf(t),n=o[a].value;n!==s&&(p(t),u(n))},d=function(e){var t,a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var n,r=c.indexOf(e.currentTarget)+1;a=null!=(n=c[r])?n:c[0];break;case"ArrowLeft":var i,l=c.indexOf(e.currentTarget)-1;a=null!=(i=c[l])?i:c[c.length-1]}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},o.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:function(e){return c.push(e)},onKeyDown:d,onClick:m},l,{className:(0,i.Z)("tabs__item",k,null==l?void 0:l.className,{"tabs__item--active":s===t})}),null!=a?a:t)})))}function N(e){var t=e.lazy,a=e.children,n=e.selectedValue;if(a=Array.isArray(a)?a:[a],t){var i=a.find((function(e){return e.props.value===n}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function j(e){var t=f(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",h)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(N,(0,n.Z)({},e,t)))}function x(e){var t=(0,v.Z)();return r.createElement(j,(0,n.Z)({key:String(t)},e))}},97433:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var n=a(25773),r=a(30808),i=(a(27378),a(35318)),l=a(23930),s=a(39798),u=["components"],o={id:"babel-plugin-transform-react-jsx",title:"@babel/plugin-transform-react-jsx",sidebar_label:"React Plugin"},c=void 0,p={unversionedId:"babel-plugin-transform-react-jsx",id:"babel-plugin-transform-react-jsx",title:"@babel/plugin-transform-react-jsx",description:"NOTE: This plugin is included in @babel/preset-react",source:"@site/../docs/plugin-transform-react-jsx.md",sourceDirName:".",slug:"/babel-plugin-transform-react-jsx",permalink:"/babel-website/docs/babel-plugin-transform-react-jsx",draft:!1,editUrl:"https://github.com/babel/website/edit/main/docs/../docs/plugin-transform-react-jsx.md",tags:[],version:"current",frontMatter:{id:"babel-plugin-transform-react-jsx",title:"@babel/plugin-transform-react-jsx",sidebar_label:"React Plugin"},sidebar:"plugins",next:{title:"Flow Plugin",permalink:"/babel-website/docs/babel-plugin-transform-flow-strip-types"}},m={},d=[{value:"Example",id:"example",level:2},{value:"React Automatic Runtime",id:"react-automatic-runtime",level:3},{value:"Customizing the Automatic Runtime Import",id:"customizing-the-automatic-runtime-import",level:4},{value:"React Classic Runtime",id:"react-classic-runtime",level:3},{value:"Customizing the Classic Runtime Import",id:"customizing-the-classic-runtime-import",level:4},{value:"Fragments",id:"fragments",level:3},{value:"React Automatic Runtime",id:"react-automatic-runtime-1",level:4},{value:"React Classic Runtime",id:"react-classic-runtime-1",level:4},{value:"Customizing with the Classic Runtime",id:"customizing-with-the-classic-runtime",level:4},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"With a configuration file (Recommended)",id:"with-a-configuration-file-recommended",level:3},{value:"Via CLI",id:"via-cli",level:3},{value:"Via Node API",id:"via-node-api",level:3},{value:"Options",id:"options",level:2},{value:"Both Runtimes",id:"both-runtimes",level:3},{value:"<code>throwIfNamespace</code>",id:"throwifnamespace",level:4},{value:"<code>runtime</code>",id:"runtime",level:4},{value:"React Automatic Runtime",id:"react-automatic-runtime-2",level:3},{value:"importSource",id:"importsource",level:4},{value:"React Classic Runtime",id:"react-classic-runtime-2",level:3},{value:"<code>pragma</code>",id:"pragma",level:4},{value:"<code>pragmaFrag</code>",id:"pragmafrag",level:4},{value:"<code>useBuiltIns</code>",id:"usebuiltins",level:3},{value:"<code>useSpread</code>",id:"usespread",level:3}],g={toc:d};function f(e){var t=e.components,a=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"NOTE"),": This plugin is included in ",(0,i.kt)("inlineCode",{parentName:"p"},"@babel/preset-react"))),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("h3",{id:"react-automatic-runtime"},"React Automatic Runtime"),(0,i.kt)("p",null,"Automatic runtime is a feature added in ",(0,i.kt)("inlineCode",{parentName:"p"},"v7.9.0"),". With this runtime enabled, the functions that JSX compiles to will be imported automatically."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"In")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'const profile = (\n  <div>\n    <img src="avatar.png" className="profile" />\n    <h3>{[user.firstName, user.lastName].join(" ")}</h3>\n  </div>\n);\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Out")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'import { jsx as _jsx } from "react/jsx-runtime";\nimport { jsxs as _jsxs } from "react/jsx-runtime";\n\nconst profile = _jsxs("div", {\n  children: [\n    _jsx("img", {\n      src: "avatar.png",\n      className: "profile",\n    }),\n    _jsx("h3", {\n      children: [user.firstName, user.lastName].join(" "),\n    }),\n  ],\n});\n')),(0,i.kt)("h4",{id:"customizing-the-automatic-runtime-import"},"Customizing the Automatic Runtime Import"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"In")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'/** @jsxImportSource custom-jsx-library */\n\nconst profile = (\n  <div>\n    <img src="avatar.png" className="profile" />\n    <h3>{[user.firstName, user.lastName].join(" ")}</h3>\n  </div>\n);\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Out")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'import { jsx as _jsx } from "custom-jsx-library/jsx-runtime";\nimport { jsxs as _jsxs } from "custom-jsx-library/jsx-runtime";\n\nconst profile = _jsxs("div", {\n  children: [\n    _jsx("img", {\n      src: "avatar.png",\n      className: "profile",\n    }),\n    _jsx("h3", {\n      children: [user.firstName, user.lastName].join(" "),\n    }),\n  ],\n});\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"In")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'/** @jsxRuntime classic */\n\nconst profile = (\n  <div>\n    <img src="avatar.png" className="profile" />\n    <h3>{[user.firstName, user.lastName].join(" ")}</h3>\n  </div>\n);\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Out")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'const profile = React.createElement(\n  "div",\n  null,\n  React.createElement("img", { src: "avatar.png", className: "profile" }),\n  React.createElement("h3", null, [user.firstName, user.lastName].join(" "))\n);\n')),(0,i.kt)("h3",{id:"react-classic-runtime"},"React Classic Runtime"),(0,i.kt)("p",null,"If you do not want (or cannot use) auto importing, you can use the classic runtime, which is the default behavior for v7 and prior."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"In")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'const profile = (\n  <div>\n    <img src="avatar.png" className="profile" />\n    <h3>{[user.firstName, user.lastName].join(" ")}</h3>\n  </div>\n);\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Out")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'const profile = React.createElement(\n  "div",\n  null,\n  React.createElement("img", { src: "avatar.png", className: "profile" }),\n  React.createElement("h3", null, [user.firstName, user.lastName].join(" "))\n);\n')),(0,i.kt)("h4",{id:"customizing-the-classic-runtime-import"},"Customizing the Classic Runtime Import"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"In")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'/** @jsx Preact.h */\n\nimport Preact from "preact";\n\nconst profile = (\n  <div>\n    <img src="avatar.png" className="profile" />\n    <h3>{[user.firstName, user.lastName].join(" ")}</h3>\n  </div>\n);\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Out")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'/** @jsx Preact.h */\n\nimport Preact from "preact";\n\nconst profile = Preact.h(\n  "div",\n  null,\n  Preact.h("img", { src: "avatar.png", className: "profile" }),\n  Preact.h("h3", null, [user.firstName, user.lastName].join(" "))\n);\n')),(0,i.kt)("h3",{id:"fragments"},"Fragments"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/fragments.html"},"Fragments")," are a feature available in React 16.2.0+."),(0,i.kt)("h4",{id:"react-automatic-runtime-1"},"React Automatic Runtime"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"In")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="JavaScript"',title:'"JavaScript"'},"const descriptions = items.map((item) => (\n  <>\n    <dt>{item.name}</dt>\n    <dd>{item.value}</dd>\n  </>\n));\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Out")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'import { jsxs as _jsxs } from "react/jsx-runtime";\nimport { Fragment as _Fragment } from "react/jsx-runtime";\nimport { jsx as _jsx } from "react/jsx-runtime";\n\nconst descriptions = items.map((item) =>\n  _jsxs(_Fragment, {\n    children: [\n      _jsx("dt", {\n        children: item.name,\n      }),\n      _jsx("dd", {\n        children: item.value,\n      }),\n    ],\n  })\n);\n')),(0,i.kt)("h4",{id:"react-classic-runtime-1"},"React Classic Runtime"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"In")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="JavaScript"',title:'"JavaScript"'},"const descriptions = items.map((item) => (\n  <>\n    <dt>{item.name}</dt>\n    <dd>{item.value}</dd>\n  </>\n));\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Out")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="JavaScript"',title:'"JavaScript"'},'const descriptions = items.map((item) =>\n  React.createElement(\n    React.Fragment,\n    null,\n    React.createElement("dt", null, item.name),\n    React.createElement("dd", null, item.value)\n  )\n);\n')),(0,i.kt)("h4",{id:"customizing-with-the-classic-runtime"},"Customizing with the Classic Runtime"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"In")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'/** @jsx Preact.h */\n/** @jsxFrag Preact.Fragment */\n\nimport Preact from "preact";\n\nvar descriptions = items.map((item) => (\n  <>\n    <dt>{item.name}</dt>\n    <dd>{item.value}</dd>\n  </>\n));\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Out")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'/** @jsx Preact.h */\n/** @jsxFrag Preact.Fragment */\n\nimport Preact from "preact";\n\nvar descriptions = items.map((item) =>\n  Preact.h(\n    Preact.Fragment,\n    null,\n    Preact.h("dt", null, item.name),\n    Preact.h("dd", null, item.value)\n  )\n);\n')),(0,i.kt)("p",null,"Note that if a custom pragma is specified, then a custom fragment pragma must also be specified if the fragment sytnax ",(0,i.kt)("inlineCode",{parentName:"p"},"<></>")," is used. Otherwise, an error will be thrown."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --save-dev @babel/plugin-transform-react-jsx\n"))),(0,i.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add --dev @babel/plugin-transform-react-jsx\n")))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"with-a-configuration-file-recommended"},"With a configuration file (Recommended)"),(0,i.kt)("p",null,"Without options:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="babel.config.json"',title:'"babel.config.json"'},'{\n  "plugins": ["@babel/plugin-transform-react-jsx"]\n}\n')),(0,i.kt)("p",null,"With options:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="babel.config.json"',title:'"babel.config.json"'},'{\n  "plugins": [\n    [\n      "@babel/plugin-transform-react-jsx",\n      {\n        "throwIfNamespace": false, // defaults to true\n        "runtime": "automatic", // defaults to classic\n        "importSource": "custom-jsx-library" // defaults to react\n      }\n    ]\n  ]\n}\n')),(0,i.kt)("h3",{id:"via-cli"},"Via CLI"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Shell"',title:'"Shell"'},"babel --plugins @babel/plugin-transform-react-jsx script.js\n")),(0,i.kt)("h3",{id:"via-node-api"},"Via Node API"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'require("@babel/core").transformSync("code", {\n  plugins: ["@babel/plugin-transform-react-jsx"],\n});\n')),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"both-runtimes"},"Both Runtimes"),(0,i.kt)("h4",{id:"throwifnamespace"},(0,i.kt)("inlineCode",{parentName:"h4"},"throwIfNamespace")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),", defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("p",null,"Toggles whether or not to throw an error if an XML namespaced tag name is used. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<f:image />\n")),(0,i.kt)("p",null,"Though the JSX spec allows this, it is disabled by default since React's JSX does not currently have support for it."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"You can read more about configuring plugin options ",(0,i.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/plugins#plugin-options"},"here"))),(0,i.kt)("h4",{id:"runtime"},(0,i.kt)("inlineCode",{parentName:"h4"},"runtime")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"classic | automatic"),", defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"classic")),(0,i.kt)("p",null,"Added in: ",(0,i.kt)("inlineCode",{parentName:"p"},"v7.9.0")),(0,i.kt)("p",null,"Decides which runtime to use."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"automatic")," auto imports the functions that JSX transpiles to. ",(0,i.kt)("inlineCode",{parentName:"p"},"classic")," does not automatically import anything."),(0,i.kt)("h3",{id:"react-automatic-runtime-2"},"React Automatic Runtime"),(0,i.kt)("h4",{id:"importsource"},"importSource"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string"),", defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"react"),"."),(0,i.kt)("p",null,"Added in: ",(0,i.kt)("inlineCode",{parentName:"p"},"v7.9.0")),(0,i.kt)("p",null,"Replaces the import source when importing functions."),(0,i.kt)("h3",{id:"react-classic-runtime-2"},"React Classic Runtime"),(0,i.kt)("h4",{id:"pragma"},(0,i.kt)("inlineCode",{parentName:"h4"},"pragma")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string"),", defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"React.createElement"),"."),(0,i.kt)("p",null,"Replace the function used when compiling JSX expressions. It should be a qualified name (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"React.createElement"),") or an identifier (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"createElement"),")."),(0,i.kt)("p",null,"Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"@jsx React.DOM")," pragma has been deprecated as of React v0.12"),(0,i.kt)("h4",{id:"pragmafrag"},(0,i.kt)("inlineCode",{parentName:"h4"},"pragmaFrag")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string"),", defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"React.Fragment"),"."),(0,i.kt)("p",null,"Replace the component used when compiling JSX fragments. It should be a valid JSX tag name."),(0,i.kt)("h3",{id:"usebuiltins"},(0,i.kt)("inlineCode",{parentName:"h3"},"useBuiltIns")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),", defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,"When spreading props, use ",(0,i.kt)("inlineCode",{parentName:"p"},"Object.assign")," directly instead of Babel's extend helper."),(0,i.kt)("h3",{id:"usespread"},(0,i.kt)("inlineCode",{parentName:"h3"},"useSpread")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),", defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,"When spreading props, use inline object with spread elements directly instead of Babel's extend helper or ",(0,i.kt)("inlineCode",{parentName:"p"},"Object.assign"),"."))}f.isMDXComponent=!0}}]);