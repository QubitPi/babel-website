"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4090],{35318:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return b}});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,b=p["".concat(i,".").concat(d)]||p[d]||f[d]||l;return r?n.createElement(b,u(u({ref:t},s),{},{components:r})):n.createElement(b,u({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,u=new Array(l);u[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[p]="string"==typeof e?e:a,u[1]=o;for(var c=2;c<l;c++)u[c]=r[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},39798:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(27378),a=r(38944),l="tabItem_wHwb";function u(e){var t=e.children,r=e.hidden,u=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,u),hidden:r},t)}},23930:function(e,t,r){r.d(t,{Z:function(){return E}});var n=r(25773),a=r(27378),l=r(38944),u=r(83457),o=r(3620),i=r(30654),c=r(70784),s=r(71819);function p(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function f(e){var t=e.values,r=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:p(r);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function b(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId,l=(0,o.k6)(),u=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:n});return[(0,i._X)(u),(0,a.useCallback)((function(e){if(u){var t=new URLSearchParams(l.location.search);t.set(u,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[u,l])]}function v(e){var t,r,n,l,u=e.defaultValue,o=e.queryString,i=void 0!==o&&o,c=e.groupId,p=f(e),v=(0,a.useState)((function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!d({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:u,tabValues:p})})),m=v[0],h=v[1],g=b({queryString:i,groupId:c}),y=g[0],k=g[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),r=(0,s.Nk)(t),n=r[0],l=r[1],[n,(0,a.useCallback)((function(e){t&&l.set(e)}),[t,l])]),E=w[0],O=w[1],T=function(){var e=null!=y?y:E;return d({value:e,tabValues:p})?e:null}();return(0,a.useLayoutEffect)((function(){T&&h(T)}),[T]),{selectedValue:m,selectValue:(0,a.useCallback)((function(e){if(!d({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);h(e),k(e),O(e)}),[k,O,p]),tabValues:p}}var m=r(76457),h="tabList_J5MA",g="tabItem_l0OV";function y(e){var t=e.className,r=e.block,o=e.selectedValue,i=e.selectValue,c=e.tabValues,s=[],p=(0,u.o5)().blockElementScrollPositionUntilNextRender,f=function(e){var t=e.currentTarget,r=s.indexOf(t),n=c[r].value;n!==o&&(p(t),i(n))},d=function(e){var t,r=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":var n,a=s.indexOf(e.currentTarget)+1;r=null!=(n=s[a])?n:s[0];break;case"ArrowLeft":var l,u=s.indexOf(e.currentTarget)-1;r=null!=(l=s[u])?l:s[s.length-1]}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},c.map((function(e){var t=e.value,r=e.label,u=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:function(e){return s.push(e)},onKeyDown:d,onClick:f},u,{className:(0,l.Z)("tabs__item",g,null==u?void 0:u.className,{"tabs__item--active":o===t})}),null!=r?r:t)})))}function k(e){var t=e.lazy,r=e.children,n=e.selectedValue;if(r=Array.isArray(r)?r:[r],t){var l=r.find((function(e){return e.props.value===n}));return l?(0,a.cloneElement)(l,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function w(e){var t=v(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",h)},a.createElement(y,(0,n.Z)({},e,t)),a.createElement(k,(0,n.Z)({},e,t)))}function E(e){var t=(0,m.Z)();return a.createElement(w,(0,n.Z)({key:String(t)},e))}},27797:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return d}});var n=r(25773),a=r(30808),l=(r(27378),r(35318)),u=r(23930),o=r(39798),i=["components"],c={id:"babel-helper-evaluate-path",title:"babel-helper-evaluate-path",sidebar_label:"babel-helper-evaluate-path"},s=void 0,p={unversionedId:"babel-helper-evaluate-path",id:"babel-helper-evaluate-path",title:"babel-helper-evaluate-path",description:"Fixes / Features:",source:"@site/../docs/helper-evaluate-path.md",sourceDirName:".",slug:"/babel-helper-evaluate-path",permalink:"/babel-website/docs/babel-helper-evaluate-path",draft:!1,editUrl:"https://github.com/babel/website/edit/main/docs/../docs/helper-evaluate-path.md",tags:[],version:"current",frontMatter:{id:"babel-helper-evaluate-path",title:"babel-helper-evaluate-path",sidebar_label:"babel-helper-evaluate-path"}},f={},d=[{value:"Installation",id:"installation",level:2}],b={toc:d};function v(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Fixes / Features:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Detect usages before initialization / declaration")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"function foo() {\n  console.log(b); // ReferenceError\n  let b = 1;\n}\n\nfunction bar() {\n  console.log(a); // a is void 0\n  var a = 5;\n  console.log(a); // 5\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Detect usages in scopes outside of initialization for vars (hoisted)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"function foo() {\n  if (a) var x = 5;\n  console.log(x); // cannot determine\n}\n")),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)(u.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install babel-helper-evaluate-path --save-dev\n"))),(0,l.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add babel-helper-evaluate-path --dev\n")))))}v.isMDXComponent=!0}}]);