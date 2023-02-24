"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9862],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,d=p["".concat(i,".").concat(f)]||p[f]||b[f]||l;return n?r.createElement(d,u(u({ref:t},c),{},{components:n})):r.createElement(d,u({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,u=new Array(l);u[0]=f;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[p]="string"==typeof e?e:a,u[1]=o;for(var s=2;s<l;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},39798:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(27378),a=n(38944),l={tabItem:"tabItem_wHwb"};function u(e){var t=e.children,n=e.hidden,u=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,u),hidden:n},t)}},23930:function(e,t,n){n.d(t,{Z:function(){return k}});var r=n(25773),a=n(27378),l=n(38944),u=n(83457),o=n(3620),i=n(30654),s=n(70784),c=n(71819);function p(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function b(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function d(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,l=(0,o.k6)(),u=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,i._X)(u),(0,a.useCallback)((function(e){if(u){var t=new URLSearchParams(l.location.search);t.set(u,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[u,l])]}function m(e){var t,n,r,l,u=e.defaultValue,o=e.queryString,i=void 0!==o&&o,s=e.groupId,p=b(e),m=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:u,tabValues:p})})),v=m[0],g=m[1],y=d({queryString:i,groupId:s}),h=y[0],j=y[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,c.Nk)(t),r=n[0],l=n[1],[r,(0,a.useCallback)((function(e){t&&l.set(e)}),[t,l])]),w=k[0],O=k[1],N=function(){var e=null!=h?h:w;return f({value:e,tabValues:p})?e:null}();return(0,a.useLayoutEffect)((function(){N&&g(N)}),[N]),{selectedValue:v,selectValue:(0,a.useCallback)((function(e){if(!f({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);g(e),j(e),O(e)}),[j,O,p]),tabValues:p}}var v=n(76457),g={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};function y(e){var t=e.className,n=e.block,o=e.selectedValue,i=e.selectValue,s=e.tabValues,c=[],p=(0,u.o5)().blockElementScrollPositionUntilNextRender,b=function(e){var t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==o&&(p(t),i(r))},f=function(e){var t,n=null;switch(e.key){case"Enter":b(e);break;case"ArrowRight":var r,a=c.indexOf(e.currentTarget)+1;n=null!=(r=c[a])?r:c[0];break;case"ArrowLeft":var l,u=c.indexOf(e.currentTarget)-1;n=null!=(l=c[u])?l:c[c.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((function(e){var t=e.value,n=e.label,u=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:function(e){return c.push(e)},onKeyDown:f,onClick:b},u,{className:(0,l.Z)("tabs__item",g.tabItem,null==u?void 0:u.className,{"tabs__item--active":o===t})}),null!=n?n:t)})))}function h(e){var t=e.lazy,n=e.children,r=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var l=n.find((function(e){return e.props.value===r}));return l?(0,a.cloneElement)(l,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function j(e){var t=m(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(h,(0,r.Z)({},e,t)))}function k(e){var t=(0,v.Z)();return a.createElement(j,(0,r.Z)({key:String(t)},e))}},64766:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return f}});var r=n(25773),a=n(30808),l=(n(27378),n(35318)),u=n(23930),o=n(39798),i=["components"],s={id:"babel-plugin-transform-object-super",title:"@babel/plugin-transform-object-super",sidebar_label:"object-super"},c=void 0,p={unversionedId:"babel-plugin-transform-object-super",id:"babel-plugin-transform-object-super",title:"@babel/plugin-transform-object-super",description:"NOTE: This plugin is included in @babel/preset-env",source:"@site/../docs/plugin-transform-object-super.md",sourceDirName:".",slug:"/babel-plugin-transform-object-super",permalink:"/babel-website/docs/babel-plugin-transform-object-super",draft:!1,editUrl:"https://github.com/babel/website/edit/main/docs/../docs/plugin-transform-object-super.md",tags:[],version:"current",frontMatter:{id:"babel-plugin-transform-object-super",title:"@babel/plugin-transform-object-super",sidebar_label:"object-super"},sidebar:"plugins",previous:{title:"new-target",permalink:"/babel-website/docs/babel-plugin-transform-new-target"},next:{title:"parameters",permalink:"/babel-website/docs/babel-plugin-transform-parameters"}},b={},f=[{value:"Examples",id:"examples",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"With a configuration file (Recommended)",id:"with-a-configuration-file-recommended",level:3},{value:"Via CLI",id:"via-cli",level:3},{value:"Via Node API",id:"via-node-api",level:3}],d={toc:f},m="wrapper";function v(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"NOTE"),": This plugin is included in ",(0,l.kt)("inlineCode",{parentName:"p"},"@babel/preset-env"))),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"In")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'let obj = {\n  say() {\n    return "Hello";\n  },\n};\n\nlet obj2 = {\n  say() {\n    return super.say() + "World!";\n  },\n};\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Out")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'var _obj;\n\nvar _get = function get(object, property, receiver) {\n  if (object === null) object = Function.prototype;\n  var desc = Object.getOwnPropertyDescriptor(object, property);\n  if (desc === undefined) {\n    var parent = Object.getPrototypeOf(object);\n    if (parent === null) {\n      return undefined;\n    } else {\n      return get(parent, property, receiver);\n    }\n  } else if ("value" in desc) {\n    return desc.value;\n  } else {\n    var getter = desc.get;\n    if (getter === undefined) {\n      return undefined;\n    }\n    return getter.call(receiver);\n  }\n};\n\nvar obj = {\n  say: function say() {\n    return "Hello";\n  },\n};\n\nvar obj2 = (_obj = {\n  say: function say() {\n    return (\n      _get(_obj.__proto__ || Object.getPrototypeOf(_obj), "say", this).call(\n        this\n      ) + "World!"\n    );\n  },\n});\n')),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)(u.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --save-dev @babel/plugin-transform-object-super\n"))),(0,l.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add --dev @babel/plugin-transform-object-super\n")))),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("h3",{id:"with-a-configuration-file-recommended"},"With a configuration file (Recommended)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="babel.config.json"',title:'"babel.config.json"'},'{\n  "plugins": ["@babel/plugin-transform-object-super"]\n}\n')),(0,l.kt)("h3",{id:"via-cli"},"Via CLI"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Shell"',title:'"Shell"'},"babel --plugins @babel/plugin-transform-object-super script.js\n")),(0,l.kt)("h3",{id:"via-node-api"},"Via Node API"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'require("@babel/core").transformSync("code", {\n  plugins: ["@babel/plugin-transform-object-super"],\n});\n')))}v.isMDXComponent=!0}}]);