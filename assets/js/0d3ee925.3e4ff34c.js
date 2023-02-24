"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3205],{35318:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var a=r(27378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},b="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),b=s(r),f=n,m=b["".concat(c,".").concat(f)]||b[f]||u[f]||o;return r?a.createElement(m,l(l({ref:t},p),{},{components:r})):a.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[b]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},21771:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return b}});var a=r(25773),n=r(30808),o=(r(27378),r(35318)),l=["components"],i={title:"Babel's core packages",id:"core-packages"},c=void 0,s={unversionedId:"core-packages",id:"core-packages",title:"Babel's core packages",description:"Other packages",source:"@site/../docs/core-packages.md",sourceDirName:".",slug:"/core-packages",permalink:"/babel-website/docs/core-packages",draft:!1,editUrl:"https://github.com/babel/website/edit/main/docs/../docs/core-packages.md",tags:[],version:"current",frontMatter:{title:"Babel's core packages",id:"core-packages"}},p={},b=[{value:"Other packages",id:"other-packages",level:2}],u={toc:b},f="wrapper";function m(e){var t=e.components,r=(0,n.Z)(e,l);return(0,o.kt)(f,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"other-packages"},"Other packages"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/babel-website/docs/babel-parser"},"babel-parser"),": babel-parser (Babylon) is a JavaScript parser used in Babel"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/babel-website/docs/babel-core"},"babel-core"),": The core module that wraps everything in our transform api (used for integrations)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/babel-website/docs/babel-generator"},"babel-generator"),": Prints a string from an AST"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/babel-website/docs/babel-types"},"babel-types"),": Babel Types is a Lodash-esque utility library for AST nodes"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/babel-website/docs/babel-register"},"babel-register"),": The require hook will bind itself to node's require and automatically compile files on the fly."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/babel-website/docs/babel-template"},"babel-template"),": Generate an AST from a string template"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/babel-website/docs/babel-helpers"},"babel-helpers"),": Collection of helper functions used by Babel transforms"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/babel-website/docs/babel-code-frame"},"babel-code-frame"),": Generate errors that contain a code frame that point to source locations")))}m.isMDXComponent=!0}}]);