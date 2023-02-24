"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2109],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return y}});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},f="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(n),b=o,y=f["".concat(u,".").concat(b)]||f[b]||s[b]||i;return n?r.createElement(y,a(a({ref:t},p),{},{components:n})):r.createElement(y,a({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[f]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},92745:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return f}});var r=n(25773),o=n(30808),i=(n(27378),n(35318)),a=["components"],c={id:"babel-helper-get-function-arity",title:"@babel/helper-get-function-arity",sidebar_label:"helper-get-function-arity"},u=void 0,l={unversionedId:"babel-helper-get-function-arity",id:"babel-helper-get-function-arity",title:"@babel/helper-get-function-arity",description:"Usage",source:"@site/../docs/helper-get-function-arity.md",sourceDirName:".",slug:"/babel-helper-get-function-arity",permalink:"/babel-website/docs/babel-helper-get-function-arity",draft:!1,editUrl:"https://github.com/babel/website/edit/main/docs/../docs/helper-get-function-arity.md",tags:[],version:"current",frontMatter:{id:"babel-helper-get-function-arity",title:"@babel/helper-get-function-arity",sidebar_label:"helper-get-function-arity"}},p={},f=[{value:"Usage",id:"usage",level:2}],s={toc:f},b="wrapper";function y(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)(b,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'import getFunctionArity from "@babel/helper-get-function-arity";\n\nfunction wrap(state, method, id, scope) {\n  // ...\n  if (!t.isFunction(method)) {\n    return false;\n  }\n\n  const argumentsLength = getFunctionArity(method);\n\n  // ...\n}\n')))}y.isMDXComponent=!0}}]);