"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2601],{35318:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return b}});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,b=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(b,i(i({ref:t},s),{},{components:r})):n.createElement(b,i({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},62463:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=r(25773),a=r(30808),o=(r(27378),r(35318)),i=["components"],l={layout:"post",title:"7.4.0 Released: core-js 3, static private methods and partial application",author:"Nicol\xf2 Ribaudo",authorURL:"https://twitter.com/NicoloRibaudo",date:new Date("2019-03-19T21:30:00.000Z"),categories:"announcements",share_text:"Babel 7.4.0 Released"},p=void 0,c={permalink:"/babel-website/blog/2019/03/19/7.4.0",source:"@site/blog/2019-03-19-7.4.0.md",title:"7.4.0 Released: core-js 3, static private methods and partial application",description:"Today we are releasing Babel 7.4.0!",date:"2019-03-19T21:30:00.000Z",formattedDate:"March 19, 2019",tags:[],readingTime:10.3,hasTruncateMarker:!0,authors:[{name:"Nicol\xf2 Ribaudo",url:"https://twitter.com/NicoloRibaudo"}],frontMatter:{layout:"post",title:"7.4.0 Released: core-js 3, static private methods and partial application",author:"Nicol\xf2 Ribaudo",authorURL:"https://twitter.com/NicoloRibaudo",date:"2019-03-19T21:30:00.000Z",categories:"announcements",share_text:"Babel 7.4.0 Released"},prevItem:{title:"The Babel Podcast",permalink:"/babel-website/blog/2019/07/02/the-babel-podcast"},nextItem:{title:"7.3.0 Released: Named capturing groups, private instance accessors and smart pipelines",permalink:"/babel-website/blog/2019/01/21/7.3.0"}},s={authorsImageUrls:[void 0]},u=[],m={toc:u},d="wrapper";function b(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)(d,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Today we are releasing Babel 7.4.0!"),(0,o.kt)("p",null,"This release includes support for ",(0,o.kt)("a",{parentName:"p",href:"https://devblogs.microsoft.com/typescript/announcing-typescript-3-4-rc"},"TypeScript 3.4"),", the proposal for partial application in function calls, and static private methods."),(0,o.kt)("p",null,"We added support for meaningful parenthesized expressions in ",(0,o.kt)("inlineCode",{parentName:"p"},"@babel/parser"),", and also made it more spec compliant than ",(0,o.kt)("em",{parentName:"p"},"ever"),"!"),(0,o.kt)("p",null,"Last but not least, both ",(0,o.kt)("inlineCode",{parentName:"p"},"@babel/preset-env")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@babel/transform-runtime")," now support ",(0,o.kt)("inlineCode",{parentName:"p"},"core-js@3"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"@babel/template")," has some sweet new syntax!"),(0,o.kt)("p",null,"You can read the whole changelog ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/babel/babel/releases/tag/v7.4.0"},"on GitHub"),"."))}b.isMDXComponent=!0}}]);