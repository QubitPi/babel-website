"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5712],{35318:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var a=t(27378);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(t),m=r,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return t?a.createElement(f,o(o({ref:n},c),{},{components:t})):a.createElement(f,o({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},39798:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(27378),r=t(38944),l="tabItem_wHwb";function o(e){var n=e.children,t=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:t},n)}},23930:function(e,n,t){t.d(n,{Z:function(){return w}});var a=t(25773),r=t(27378),l=t(38944),o=t(83457),i=t(3620),u=t(30654),s=t(70784),c=t(71819);function p(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function d(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:p(t);return function(e){var n=(0,s.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function m(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function f(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,l=(0,i.k6)(),o=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:a});return[(0,u._X)(o),(0,r.useCallback)((function(e){if(o){var n=new URLSearchParams(l.location.search);n.set(o,e),l.replace(Object.assign({},l.location,{search:n.toString()}))}}),[o,l])]}function b(e){var n,t,a,l,o=e.defaultValue,i=e.queryString,u=void 0!==i&&i,s=e.groupId,p=d(e),b=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:p})})),g=b[0],v=b[1],h=f({queryString:u,groupId:s}),k=h[0],y=h[1],N=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),t=(0,c.Nk)(n),a=t[0],l=t[1],[a,(0,r.useCallback)((function(e){n&&l.set(e)}),[n,l])]),w=N[0],j=N[1],E=function(){var e=null!=k?k:w;return m({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){E&&v(E)}),[E]),{selectedValue:g,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);v(e),y(e),j(e)}),[y,j,p]),tabValues:p}}var g=t(76457),v="tabList_J5MA",h="tabItem_l0OV";function k(e){var n=e.className,t=e.block,i=e.selectedValue,u=e.selectValue,s=e.tabValues,c=[],p=(0,o.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=c.indexOf(n),a=s[t].value;a!==i&&(p(n),u(a))},m=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;t=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var l,o=c.indexOf(e.currentTarget)-1;t=null!=(l=c[o])?l:c[c.length-1]}null==(n=t)||n.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n)},s.map((function(e){var n=e.value,t=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:function(e){return c.push(e)},onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",h,null==o?void 0:o.className,{"tabs__item--active":i===n})}),null!=t?t:n)})))}function y(e){var n=e.lazy,t=e.children,a=e.selectedValue;if(t=Array.isArray(t)?t:[t],n){var l=t.find((function(e){return e.props.value===a}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},t.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})})))}function N(e){var n=b(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",v)},r.createElement(k,(0,a.Z)({},e,n)),r.createElement(y,(0,a.Z)({},e,n)))}function w(e){var n=(0,g.Z)();return r.createElement(N,(0,a.Z)({key:String(n)},e))}},11676:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var a=t(25773),r=t(30808),l=(t(27378),t(35318)),o=t(23930),i=t(39798),u=["components"],s={id:"babel-plugin-proposal-nullish-coalescing-operator",title:"@babel/plugin-proposal-nullish-coalescing-operator",sidebar_label:"nullish-coalescing-operator"},c=void 0,p={unversionedId:"babel-plugin-proposal-nullish-coalescing-operator",id:"babel-plugin-proposal-nullish-coalescing-operator",title:"@babel/plugin-proposal-nullish-coalescing-operator",description:"NOTE: This plugin is included in @babel/preset-env, in ES2020",source:"@site/../docs/plugin-proposal-nullish-coalescing-operator.md",sourceDirName:".",slug:"/babel-plugin-proposal-nullish-coalescing-operator",permalink:"/babel-website/docs/babel-plugin-proposal-nullish-coalescing-operator",draft:!1,editUrl:"https://github.com/babel/website/edit/main/docs/../docs/plugin-proposal-nullish-coalescing-operator.md",tags:[],version:"current",frontMatter:{id:"babel-plugin-proposal-nullish-coalescing-operator",title:"@babel/plugin-proposal-nullish-coalescing-operator",sidebar_label:"nullish-coalescing-operator"},sidebar:"plugins",previous:{title:"export-namespace-from",permalink:"/babel-website/docs/babel-plugin-proposal-export-namespace-from"},next:{title:"optional-chaining",permalink:"/babel-website/docs/babel-plugin-proposal-optional-chaining"}},d={},m=[{value:"Example",id:"example",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"With a configuration file (Recommended)",id:"with-a-configuration-file-recommended",level:3},{value:"Via CLI",id:"via-cli",level:3},{value:"Via Node API",id:"via-node-api",level:3},{value:"Options",id:"options",level:2},{value:"<code>loose</code>",id:"loose",level:3},{value:"Example",id:"example-1",level:4},{value:"References",id:"references",level:2}],f={toc:m};function b(e){var n=e.components,t=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"NOTE"),": This plugin is included in ",(0,l.kt)("inlineCode",{parentName:"p"},"@babel/preset-env"),", in ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposals/blob/master/finished-proposals.md"},"ES2020"))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"In")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'var foo = object.foo ?? "default";\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Out")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'var _object$foo;\n\nvar foo =\n  (_object$foo = object.foo) !== null && _object$foo !== void 0\n    ? _object$foo\n    : "default";\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"NOTE:")," We cannot use ",(0,l.kt)("inlineCode",{parentName:"p"},"!= null")," here because ",(0,l.kt)("inlineCode",{parentName:"p"},"document.all == null")," and\n",(0,l.kt)("inlineCode",{parentName:"p"},"document.all"),' has been deemed not "nullish".')),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --save-dev @babel/plugin-proposal-nullish-coalescing-operator\n"))),(0,l.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add --dev @babel/plugin-proposal-nullish-coalescing-operator\n")))),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("h3",{id:"with-a-configuration-file-recommended"},"With a configuration file (Recommended)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="babel.config.json"',title:'"babel.config.json"'},'{\n  "plugins": ["@babel/plugin-proposal-nullish-coalescing-operator"]\n}\n')),(0,l.kt)("h3",{id:"via-cli"},"Via CLI"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Shell"',title:'"Shell"'},"babel --plugins @babel/plugin-proposal-nullish-coalescing-operator script.js\n")),(0,l.kt)("h3",{id:"via-node-api"},"Via Node API"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'require("@babel/core").transformSync("code", {\n  plugins: ["@babel/plugin-proposal-nullish-coalescing-operator"],\n});\n')),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"loose"},(0,l.kt)("inlineCode",{parentName:"h3"},"loose")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),", defaults to ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,l.kt)("p",null,"When ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", this transform will pretend ",(0,l.kt)("inlineCode",{parentName:"p"},"document.all")," does not exist,\nand perform loose equality checks with ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," instead of strict equality checks\nagainst both ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f Consider migrating to the top level ",(0,l.kt)("a",{parentName:"p",href:"/babel-website/docs/assumptions#nodocumentall"},(0,l.kt)("inlineCode",{parentName:"a"},"noDocumentAll"))," assumption.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="babel.config.json"',title:'"babel.config.json"'},'{\n  "assumptions": {\n    "noDocumentAll": true\n  }\n}\n')),(0,l.kt)("h4",{id:"example-1"},"Example"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"In")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'var foo = object.foo ?? "default";\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Out")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'var _object$foo;\n\nvar foo = (_object$foo = object.foo) != null ? _object$foo : "default";\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"You can read more about configuring plugin options ",(0,l.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/plugins#plugin-options"},"here"))),(0,l.kt)("h2",{id:"references"},"References"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/tc39-transfer/proposal-nullish-coalescing"},"Proposal: Nullish Coalescing"))))}b.isMDXComponent=!0}}]);