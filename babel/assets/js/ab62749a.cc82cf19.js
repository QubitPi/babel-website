"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3881],{35318:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(27378);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),s=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(o.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},v=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(t),v=a,d=p["".concat(o,".").concat(v)]||p[v]||m[v]||l;return t?r.createElement(d,i(i({ref:n},c),{},{components:t})):r.createElement(d,i({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=v;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u[p]="string"==typeof e?e:a,i[1]=u;for(var s=2;s<l;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}v.displayName="MDXCreateElement"},39798:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(27378),a=t(38944),l="tabItem_wHwb";function i(e){var n=e.children,t=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:t},n)}},23930:function(e,n,t){t.d(n,{Z:function(){return w}});var r=t(25773),a=t(27378),l=t(38944),i=t(83457),u=t(3620),o=t(30654),s=t(70784),c=t(71819);function p(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function m(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:p(t);return function(e){var n=(0,s.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function v(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function d(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,l=(0,u.k6)(),i=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:r});return[(0,o._X)(i),(0,a.useCallback)((function(e){if(i){var n=new URLSearchParams(l.location.search);n.set(i,e),l.replace(Object.assign({},l.location,{search:n.toString()}))}}),[i,l])]}function f(e){var n,t,r,l,i=e.defaultValue,u=e.queryString,o=void 0!==u&&u,s=e.groupId,p=m(e),f=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!v({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:p})})),b=f[0],g=f[1],h=d({queryString:o,groupId:s}),y=h[0],k=h[1],N=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),t=(0,c.Nk)(n),r=t[0],l=t[1],[r,(0,a.useCallback)((function(e){n&&l.set(e)}),[n,l])]),w=N[0],E=N[1],O=function(){var e=null!=y?y:w;return v({value:e,tabValues:p})?e:null}();return(0,a.useLayoutEffect)((function(){O&&g(O)}),[O]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!v({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);g(e),k(e),E(e)}),[k,E,p]),tabValues:p}}var b=t(76457),g="tabList_J5MA",h="tabItem_l0OV";function y(e){var n=e.className,t=e.block,u=e.selectedValue,o=e.selectValue,s=e.tabValues,c=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var n=e.currentTarget,t=c.indexOf(n),r=s[t].value;r!==u&&(p(n),o(r))},v=function(e){var n,t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var r,a=c.indexOf(e.currentTarget)+1;t=null!=(r=c[a])?r:c[0];break;case"ArrowLeft":var l,i=c.indexOf(e.currentTarget)-1;t=null!=(l=c[i])?l:c[c.length-1]}null==(n=t)||n.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n)},s.map((function(e){var n=e.value,t=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===n?0:-1,"aria-selected":u===n,key:n,ref:function(e){return c.push(e)},onKeyDown:v,onClick:m},i,{className:(0,l.Z)("tabs__item",h,null==i?void 0:i.className,{"tabs__item--active":u===n})}),null!=t?t:n)})))}function k(e){var n=e.lazy,t=e.children,r=e.selectedValue;if(t=Array.isArray(t)?t:[t],n){var l=t.find((function(e){return e.props.value===r}));return l?(0,a.cloneElement)(l,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},t.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})})))}function N(e){var n=f(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",g)},a.createElement(y,(0,r.Z)({},e,n)),a.createElement(k,(0,r.Z)({},e,n)))}function w(e){var n=(0,b.Z)();return a.createElement(N,(0,r.Z)({key:String(n)},e))}},98743:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return v}});var r=t(25773),a=t(30808),l=(t(27378),t(35318)),i=t(23930),u=t(39798),o=["components"],s={id:"babel-plugin-transform-inline-environment-variables",title:"babel-plugin-transform-inline-environment-variables",sidebar_label:"inline-environment-variables"},c=void 0,p={unversionedId:"babel-plugin-transform-inline-environment-variables",id:"babel-plugin-transform-inline-environment-variables",title:"babel-plugin-transform-inline-environment-variables",description:"Example",source:"@site/../docs/plugin-transform-inline-environment-variables.md",sourceDirName:".",slug:"/babel-plugin-transform-inline-environment-variables",permalink:"/babel-website/docs/babel-plugin-transform-inline-environment-variables",draft:!1,editUrl:"https://github.com/babel/website/edit/main/docs/../docs/plugin-transform-inline-environment-variables.md",tags:[],version:"current",frontMatter:{id:"babel-plugin-transform-inline-environment-variables",title:"babel-plugin-transform-inline-environment-variables",sidebar_label:"inline-environment-variables"}},m={},v=[{value:"Example",id:"example",level:2},{value:"In",id:"in",level:3},{value:"Out",id:"out",level:3},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"With a configuration file (Recommended)",id:"with-a-configuration-file-recommended",level:3},{value:"Via CLI",id:"via-cli",level:3},{value:"Via Node API",id:"via-node-api",level:3},{value:"Options",id:"options",level:2}],d={toc:v};function f(e){var n=e.components,t=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("h3",{id:"in"},"In"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'// assuming process.env.NODE_ENV is actually "development"\nprocess.env.NODE_ENV;\n')),(0,l.kt)("h3",{id:"out"},"Out"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'"development";\n')),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install babel-plugin-transform-inline-environment-variables --save-dev\n"))),(0,l.kt)(u.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add babel-plugin-transform-inline-environment-variables --dev\n")))),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("h3",{id:"with-a-configuration-file-recommended"},"With a configuration file (Recommended)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="JSON"',title:'"JSON"'},'// without options\n{\n  "plugins": ["transform-inline-environment-variables"]\n}\n\n// with options\n{\n  "plugins": [\n    ["transform-inline-environment-variables", {\n      "include": [\n        "NODE_ENV"\n      ]\n    }]\n  ]\n}\n')),(0,l.kt)("h3",{id:"via-cli"},"Via CLI"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Shell"',title:'"Shell"'},"babel --plugins transform-inline-environment-variables script.js\n")),(0,l.kt)("h3",{id:"via-node-api"},"Via Node API"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'require("@babel/core").transformSync("code", {\n  plugins: ["transform-inline-environment-variables"],\n});\n')),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"include")," - array of environment variables to include"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"exclude")," - array of environment variables to exclude")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"You can read more about configuring plugin options ",(0,l.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/plugins#plugin-options"},"here"))))}f.isMDXComponent=!0}}]);