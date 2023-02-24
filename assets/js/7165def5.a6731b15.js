"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[127],{35318:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(27378);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},b=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(t),b=a,d=p["".concat(u,".").concat(b)]||p[b]||f[b]||l;return t?r.createElement(d,o(o({ref:n},c),{},{components:t})):r.createElement(d,o({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=b;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},39798:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(27378),a=t(38944),l={tabItem:"tabItem_wHwb"};function o(e){var n=e.children,t=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,o),hidden:t},n)}},23930:function(e,n,t){t.d(n,{Z:function(){return y}});var r=t(25773),a=t(27378),l=t(38944),o=t(83457),i=t(3620),u=t(30654),s=t(70784),c=t(71819);function p(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function f(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:p(t);return function(e){var n=(0,s.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function b(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function d(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,l=(0,i.k6)(),o=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:r});return[(0,u._X)(o),(0,a.useCallback)((function(e){if(o){var n=new URLSearchParams(l.location.search);n.set(o,e),l.replace(Object.assign({},l.location,{search:n.toString()}))}}),[o,l])]}function m(e){var n,t,r,l,o=e.defaultValue,i=e.queryString,u=void 0!==i&&i,s=e.groupId,p=f(e),m=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:p})})),v=m[0],g=m[1],h=d({queryString:u,groupId:s}),k=h[0],w=h[1],y=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),t=(0,c.Nk)(n),r=t[0],l=t[1],[r,(0,a.useCallback)((function(e){n&&l.set(e)}),[n,l])]),N=y[0],E=y[1],O=function(){var e=null!=k?k:N;return b({value:e,tabValues:p})?e:null}();return(0,a.useLayoutEffect)((function(){O&&g(O)}),[O]),{selectedValue:v,selectValue:(0,a.useCallback)((function(e){if(!b({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);g(e),w(e),E(e)}),[w,E,p]),tabValues:p}}var v=t(76457),g={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};function h(e){var n=e.className,t=e.block,i=e.selectedValue,u=e.selectValue,s=e.tabValues,c=[],p=(0,o.o5)().blockElementScrollPositionUntilNextRender,f=function(e){var n=e.currentTarget,t=c.indexOf(n),r=s[t].value;r!==i&&(p(n),u(r))},b=function(e){var n,t=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":var r,a=c.indexOf(e.currentTarget)+1;t=null!=(r=c[a])?r:c[0];break;case"ArrowLeft":var l,o=c.indexOf(e.currentTarget)-1;t=null!=(l=c[o])?l:c[c.length-1]}null==(n=t)||n.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n)},s.map((function(e){var n=e.value,t=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:function(e){return c.push(e)},onKeyDown:b,onClick:f},o,{className:(0,l.Z)("tabs__item",g.tabItem,null==o?void 0:o.className,{"tabs__item--active":i===n})}),null!=t?t:n)})))}function k(e){var n=e.lazy,t=e.children,r=e.selectedValue;if(t=Array.isArray(t)?t:[t],n){var l=t.find((function(e){return e.props.value===r}));return l?(0,a.cloneElement)(l,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},t.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})})))}function w(e){var n=m(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},a.createElement(h,(0,r.Z)({},e,n)),a.createElement(k,(0,r.Z)({},e,n)))}function y(e){var n=(0,v.Z)();return a.createElement(w,(0,r.Z)({key:String(n)},e))}},41074:function(e,n,t){t.r(n),t.d(n,{assets:function(){return f},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return b}});var r=t(25773),a=t(30808),l=(t(27378),t(35318)),o=t(23930),i=t(39798),u=["components"],s={id:"babel-plugin-transform-arrow-functions",title:"@babel/plugin-transform-arrow-functions",sidebar_label:"arrow-functions"},c=void 0,p={unversionedId:"babel-plugin-transform-arrow-functions",id:"babel-plugin-transform-arrow-functions",title:"@babel/plugin-transform-arrow-functions",description:"NOTE: This plugin is included in @babel/preset-env",source:"@site/../docs/plugin-transform-arrow-functions.md",sourceDirName:".",slug:"/babel-plugin-transform-arrow-functions",permalink:"/babel-website/docs/babel-plugin-transform-arrow-functions",draft:!1,editUrl:"https://github.com/babel/website/edit/main/docs/../docs/plugin-transform-arrow-functions.md",tags:[],version:"current",frontMatter:{id:"babel-plugin-transform-arrow-functions",title:"@babel/plugin-transform-arrow-functions",sidebar_label:"arrow-functions"},sidebar:"plugins",previous:{title:"exponentiation-operator",permalink:"/babel-website/docs/babel-plugin-transform-exponentiation-operator"},next:{title:"block-scoping",permalink:"/babel-website/docs/babel-plugin-transform-block-scoping"}},f={},b=[{value:"Example",id:"example",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"With a configuration file (Recommended)",id:"with-a-configuration-file-recommended",level:3},{value:"Via CLI",id:"via-cli",level:3},{value:"Via Node API",id:"via-node-api",level:3},{value:"Options",id:"options",level:2},{value:"<code>spec</code>",id:"spec",level:3}],d={toc:b},m="wrapper";function v(e){var n=e.components,t=(0,a.Z)(e,u);return(0,l.kt)(m,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"NOTE"),": This plugin is included in ",(0,l.kt)("inlineCode",{parentName:"p"},"@babel/preset-env"))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"In")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'var a = () => {};\nvar a = b => b;\n\nconst double = [1, 2, 3].map(num => num * 2);\nconsole.log(double); // [2,4,6]\n\nvar bob = {\n  _name: "Bob",\n  _friends: ["Sally", "Tom"],\n  printFriends() {\n    this._friends.forEach(f => console.log(this._name + " knows " + f));\n  },\n};\nconsole.log(bob.printFriends());\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Out")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'var a = function() {};\nvar a = function(b) {\n  return b;\n};\n\nconst double = [1, 2, 3].map(function(num) {\n  return num * 2;\n});\nconsole.log(double); // [2,4,6]\n\nvar bob = {\n  _name: "Bob",\n  _friends: ["Sally", "Tom"],\n  printFriends() {\n    var _this = this;\n\n    this._friends.forEach(function(f) {\n      return console.log(_this._name + " knows " + f);\n    });\n  },\n};\nconsole.log(bob.printFriends());\n')),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --save-dev @babel/plugin-transform-arrow-functions\n"))),(0,l.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add --dev @babel/plugin-transform-arrow-functions\n")))),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("h3",{id:"with-a-configuration-file-recommended"},"With a configuration file (Recommended)"),(0,l.kt)("p",null,"Without options:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="babel.config.json"',title:'"babel.config.json"'},'{\n  "plugins": ["@babel/plugin-transform-arrow-functions"]\n}\n')),(0,l.kt)("p",null,"With options:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="babel.config.json"',title:'"babel.config.json"'},'{\n  "plugins": [["@babel/plugin-transform-arrow-functions", { "spec": true }]]\n}\n')),(0,l.kt)("h3",{id:"via-cli"},"Via CLI"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Shell"',title:'"Shell"'},"babel --plugins @babel/plugin-transform-arrow-functions script.js\n")),(0,l.kt)("h3",{id:"via-node-api"},"Via Node API"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'require("@babel/core").transformSync("code", {\n  plugins: ["@babel/plugin-transform-arrow-functions"],\n});\n')),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"spec"},(0,l.kt)("inlineCode",{parentName:"h3"},"spec")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),", defaults to ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,l.kt)("p",null,(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"Example")),(0,l.kt)("p",null,"Using spec mode with the above example produces:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'var _this = this;\n\nvar a = function a() {\n  babelHelpers.newArrowCheck(this, _this);\n}.bind(this);\nvar a = function a(b) {\n  babelHelpers.newArrowCheck(this, _this);\n  return b;\n}.bind(this);\n\nconst double = [1, 2, 3].map(\n  function(num) {\n    babelHelpers.newArrowCheck(this, _this);\n    return num * 2;\n  }.bind(this)\n);\nconsole.log(double); // [2,4,6]\n\nvar bob = {\n  _name: "Bob",\n  _friends: ["Sally", "Tom"],\n  printFriends() {\n    var _this2 = this;\n\n    this._friends.forEach(\n      function(f) {\n        babelHelpers.newArrowCheck(this, _this2);\n        return console.log(this._name + " knows " + f);\n      }.bind(this)\n    );\n  },\n};\nconsole.log(bob.printFriends());\n')))),(0,l.kt)("p",null,"This option enables the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Wrap the generated function in ",(0,l.kt)("inlineCode",{parentName:"p"},".bind(this)")," and keeps uses of ",(0,l.kt)("inlineCode",{parentName:"p"},"this")," inside\nthe function as-is, instead of using a renamed ",(0,l.kt)("inlineCode",{parentName:"p"},"this"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Add a runtime check to ensure the functions are not instantiated.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Add names to arrow functions."))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"You can read more about configuring plugin options ",(0,l.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/plugins#plugin-options"},"here"))))}v.isMDXComponent=!0}}]);