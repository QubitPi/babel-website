"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1473],{35318:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},77267:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var n=r(25773),a=r(30808),o=(r(27378),r(35318)),l=["components"],i={layout:"post",title:"7.13.0 Released: Records and Tuples, granular compiler assumptions, and top-level targets",author:"Nicol\xf2 Ribaudo",authorURL:"https://twitter.com/NicoloRibaudo",date:new Date("2021-01-01T00:00:00.000Z"),categories:"announcements",share_text:"Babel 7.13.0 Released"},s=void 0,p={permalink:"/babel-website/blog/2021/02/22/7.13.0",source:"@site/blog/2021-02-22-7.13.0.md",title:"7.13.0 Released: Records and Tuples, granular compiler assumptions, and top-level targets",description:"We just published Babel 7.13.0, the first minor release of 2021!",date:"2021-01-01T00:00:00.000Z",formattedDate:"January 1, 2021",tags:[],readingTime:6.185,hasTruncateMarker:!0,authors:[{name:"Nicol\xf2 Ribaudo",url:"https://twitter.com/NicoloRibaudo"}],frontMatter:{layout:"post",title:"7.13.0 Released: Records and Tuples, granular compiler assumptions, and top-level targets",author:"Nicol\xf2 Ribaudo",authorURL:"https://twitter.com/NicoloRibaudo",date:"2021-01-01T00:00:00.000Z",categories:"announcements",share_text:"Babel 7.13.0 Released"},prevItem:{title:"7.14.0 Released: New class features enabled by default, TypeScript 4.3, and better CommonJS interop",permalink:"/babel-website/blog/2021/04/29/7.14.0"},nextItem:{title:"7.12.0 Released: TypeScript 4.1, strings as import/export names, and class static blocks",permalink:"/babel-website/blog/2020/10/15/7.12.0"}},u={authorsImageUrls:[void 0]},c=[],d={toc:c},m="wrapper";function f(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We just published Babel 7.13.0, the first minor release of 2021!"),(0,o.kt)("p",null,"This release includes some important features to ",(0,o.kt)("inlineCode",{parentName:"p"},"@babel/core"),": a ",(0,o.kt)("inlineCode",{parentName:"p"},"targets")," option (similar to ",(0,o.kt)("inlineCode",{parentName:"p"},"@babel/preset-env"),"'s one) that can be shared across different plugins, an ",(0,o.kt)("inlineCode",{parentName:"p"},"assumptions")," option to precisely tune your configuration to produce a smaller compilation output, and support for plugins and presets written using native ECMAScript modules."),(0,o.kt)("p",null,"Babel now supports transforming the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposal-record-tuple"},"Records and Tuples")," ECMAScript proposal, which brings immutable data structures and structural equality to JavaScript, and parsing the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposal-js-module-blocks"},"Module Blocks")," proposal."),(0,o.kt)("p",null,"Additionally, we added support for some new Flow and TypeScript features."),(0,o.kt)("p",null,"You can read the full changelog on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/babel/babel/releases/tag/v7.13.0"},"GitHub"),"."))}f.isMDXComponent=!0}}]);