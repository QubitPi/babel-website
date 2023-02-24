"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7142],{35318:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return d}});var n=t(27378);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=n.createContext({}),s=function(e){var a=n.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=s(e.components);return n.createElement(u.Provider,{value:a},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(t),m=r,d=p["".concat(u,".").concat(m)]||p[m]||b[m]||l;return t?n.createElement(d,o(o({ref:a},c),{},{components:t})):n.createElement(d,o({ref:a},c))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var u in a)hasOwnProperty.call(a,u)&&(i[u]=a[u]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},39798:function(e,a,t){t.d(a,{Z:function(){return o}});var n=t(27378),r=t(38944),l={tabItem:"tabItem_wHwb"};function o(e){var a=e.children,t=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:t},a)}},23930:function(e,a,t){t.d(a,{Z:function(){return N}});var n=t(25773),r=t(27378),l=t(38944),o=t(83457),i=t(3620),u=t(30654),s=t(70784),c=t(71819);function p(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes,default:a.default}}))}function b(e){var a=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=a?a:p(t);return function(e){var a=(0,s.l)(e,(function(e,a){return e.value===a.value}));if(a.length>0)throw new Error('Docusaurus error: Duplicate values "'+a.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[a,t])}function m(e){var a=e.value;return e.tabValues.some((function(e){return e.value===a}))}function d(e){var a=e.queryString,t=void 0!==a&&a,n=e.groupId,l=(0,i.k6)(),o=function(e){var a=e.queryString,t=void 0!==a&&a,n=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,u._X)(o),(0,r.useCallback)((function(e){if(o){var a=new URLSearchParams(l.location.search);a.set(o,e),l.replace(Object.assign({},l.location,{search:a.toString()}))}}),[o,l])]}function g(e){var a,t,n,l,o=e.defaultValue,i=e.queryString,u=void 0!==i&&i,s=e.groupId,p=b(e),g=(0,r.useState)((function(){return function(e){var a,t=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(a=n.find((function(e){return e.default})))?a:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:p})})),f=g[0],v=g[1],h=d({queryString:u,groupId:s}),k=h[0],y=h[1],N=(a=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),t=(0,c.Nk)(a),n=t[0],l=t[1],[n,(0,r.useCallback)((function(e){a&&l.set(e)}),[a,l])]),w=N[0],j=N[1],E=function(){var e=null!=k?k:w;return m({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){E&&v(E)}),[E]),{selectedValue:f,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);v(e),y(e),j(e)}),[y,j,p]),tabValues:p}}var f=t(76457),v={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};function h(e){var a=e.className,t=e.block,i=e.selectedValue,u=e.selectValue,s=e.tabValues,c=[],p=(0,o.o5)().blockElementScrollPositionUntilNextRender,b=function(e){var a=e.currentTarget,t=c.indexOf(a),n=s[t].value;n!==i&&(p(a),u(n))},m=function(e){var a,t=null;switch(e.key){case"Enter":b(e);break;case"ArrowRight":var n,r=c.indexOf(e.currentTarget)+1;t=null!=(n=c[r])?n:c[0];break;case"ArrowLeft":var l,o=c.indexOf(e.currentTarget)-1;t=null!=(l=c[o])?l:c[c.length-1]}null==(a=t)||a.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},a)},s.map((function(e){var a=e.value,t=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===a?0:-1,"aria-selected":i===a,key:a,ref:function(e){return c.push(e)},onKeyDown:m,onClick:b},o,{className:(0,l.Z)("tabs__item",v.tabItem,null==o?void 0:o.className,{"tabs__item--active":i===a})}),null!=t?t:a)})))}function k(e){var a=e.lazy,t=e.children,n=e.selectedValue;if(t=Array.isArray(t)?t:[t],a){var l=t.find((function(e){return e.props.value===n}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},t.map((function(e,a){return(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==n})})))}function y(e){var a=g(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",v.tabList)},r.createElement(h,(0,n.Z)({},e,a)),r.createElement(k,(0,n.Z)({},e,a)))}function N(e){var a=(0,f.Z)();return r.createElement(y,(0,n.Z)({key:String(a)},e))}},99988:function(e,a,t){t.r(a),t.d(a,{assets:function(){return b},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var n=t(25773),r=t(30808),l=(t(27378),t(35318)),o=t(23930),i=t(39798),u=["components"],s={id:"babel-plugin-proposal-logical-assignment-operators",title:"@babel/plugin-proposal-logical-assignment-operators",sidebar_label:"logical-assignment-operators"},c=void 0,p={unversionedId:"babel-plugin-proposal-logical-assignment-operators",id:"babel-plugin-proposal-logical-assignment-operators",title:"@babel/plugin-proposal-logical-assignment-operators",description:"NOTE: This plugin is included in @babel/preset-env, in ES2021",source:"@site/../docs/plugin-proposal-logical-assignment-operators.md",sourceDirName:".",slug:"/babel-plugin-proposal-logical-assignment-operators",permalink:"/babel-website/docs/babel-plugin-proposal-logical-assignment-operators",draft:!1,editUrl:"https://github.com/babel/website/edit/main/docs/../docs/plugin-proposal-logical-assignment-operators.md",tags:[],version:"current",frontMatter:{id:"babel-plugin-proposal-logical-assignment-operators",title:"@babel/plugin-proposal-logical-assignment-operators",sidebar_label:"logical-assignment-operators"},sidebar:"plugins",previous:{title:"syntax-top-level-await",permalink:"/babel-website/docs/babel-plugin-syntax-top-level-await"},next:{title:"numeric-separator",permalink:"/babel-website/docs/babel-plugin-proposal-numeric-separator"}},b={},m=[{value:"Example",id:"example",level:2},{value:"With Nullish Coalescing",id:"with-nullish-coalescing",level:3},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"With a configuration file (Recommended)",id:"with-a-configuration-file-recommended",level:3},{value:"Via CLI",id:"via-cli",level:3},{value:"Via Node API",id:"via-node-api",level:3},{value:"References",id:"references",level:2}],d={toc:m},g="wrapper";function f(e){var a=e.components,t=(0,r.Z)(e,u);return(0,l.kt)(g,(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"NOTE"),": This plugin is included in ",(0,l.kt)("inlineCode",{parentName:"p"},"@babel/preset-env"),", in ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposals/blob/master/finished-proposals.md"},"ES2021"))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"In")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"a ||= b;\nobj.a.b ||= c;\n\na &&= b;\nobj.a.b &&= c;\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Out")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"var _obj$a, _obj$a2;\n\na || (a = b);\n(_obj$a = obj.a).b || (_obj$a.b = c);\n\na && (a = b);\n(_obj$a2 = obj.a).b && (_obj$a2.b = c);\n")),(0,l.kt)("h3",{id:"with-nullish-coalescing"},"With Nullish Coalescing"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"While using the ",(0,l.kt)("inlineCode",{parentName:"p"},"@babel/plugin-proposal-nullish-coalescing-operator")," plugin (included in ",(0,l.kt)("inlineCode",{parentName:"p"},"@babel/preset-env"),")")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"a ??= b;\nobj.a.b ??= c;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"var _a, _obj$a, _obj$a$b;\n\n(_a = a) !== null && _a !== void 0 ? _a : (a = b);\n(_obj$a$b = (_obj$a = obj.a).b) !== null && _obj$a$b !== void 0\n  ? _obj$a$b\n  : (_obj$a.b = c);\n")),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --save-dev @babel/plugin-proposal-logical-assignment-operators\n"))),(0,l.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add --dev @babel/plugin-proposal-logical-assignment-operators\n")))),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("h3",{id:"with-a-configuration-file-recommended"},"With a configuration file (Recommended)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="babel.config.json"',title:'"babel.config.json"'},'{\n  "plugins": ["@babel/plugin-proposal-logical-assignment-operators"]\n}\n')),(0,l.kt)("h3",{id:"via-cli"},"Via CLI"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Shell"',title:'"Shell"'},"babel --plugins @babel/plugin-proposal-logical-assignment-operators script.js\n")),(0,l.kt)("h3",{id:"via-node-api"},"Via Node API"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'require("@babel/core").transformSync("code", {\n  plugins: ["@babel/plugin-proposal-logical-assignment-operators"],\n});\n')),(0,l.kt)("h2",{id:"references"},"References"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-logical-assignment"},"Proposal: Logical Assignment Operators"))))}f.isMDXComponent=!0}}]);