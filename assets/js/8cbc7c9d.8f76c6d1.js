"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2524],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return b}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,b=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(b,i(i({ref:t},c),{},{components:n})):r.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20439:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u}});var r=n(25773),a=n(30808),o=(n(27378),n(35318)),i=["components"],p={layout:"post",title:"7.15.0 Released: Hack-style pipelines, TypeScript const enums and Rhino target support",author:"Babel Team",authorURL:"https://twitter.com/babeljs",date:new Date("2021-07-26T00:00:00.000Z"),categories:"announcements",share_text:"Babel 7.15.0 Released"},s=void 0,l={permalink:"/babel-website/blog/2021/07/26/7.15.0",source:"@site/blog/2021-07-26-7.15.0.md",title:"7.15.0 Released: Hack-style pipelines, TypeScript const enums and Rhino target support",description:"This release enables parsing top-level await (Stage 4 at the May meeting) and transforming ergonomic brand checks for private fields (Stage 4 at the July meeting) by default. There is also now support for the Hack-style pipeline operator. We also improved our TypeScript support, implementing transform support for const enums and namespace aliases, and we expanded our heuristics to add .displayName to React components created by React.createContext() (#13501).",date:"2021-07-26T00:00:00.000Z",formattedDate:"July 26, 2021",tags:[],readingTime:3.535,hasTruncateMarker:!0,authors:[{name:"Babel Team",url:"https://twitter.com/babeljs"}],frontMatter:{layout:"post",title:"7.15.0 Released: Hack-style pipelines, TypeScript const enums and Rhino target support",author:"Babel Team",authorURL:"https://twitter.com/babeljs",date:"2021-07-26T00:00:00.000Z",categories:"announcements",share_text:"Babel 7.15.0 Released"},prevItem:{title:"7.16.0 Released: ESLint 8 and TypeScript 4.5",permalink:"/babel-website/blog/2021/10/29/7.16.0"},nextItem:{title:"Babel is used by millions, so why are we running out of money?",permalink:"/babel-website/blog/2021/05/10/funding-update"}},c={authorsImageUrls:[void 0]},u=[],m={toc:u},d="wrapper";function b(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This release enables parsing top-level await (Stage 4 at the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tc39/agendas/blob/master/2021/05.md"},"May")," meeting) and transforming ergonomic brand checks for private fields (Stage 4 at the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tc39/agendas/blob/master/2021/07.md"},"July")," meeting) by default. There is also now support for the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/js-choi/proposal-hack-pipes"},"Hack-style")," pipeline operator. We also improved our TypeScript support, implementing transform support for ",(0,o.kt)("inlineCode",{parentName:"p"},"const")," enums and namespace aliases, and we expanded our heuristics to add ",(0,o.kt)("inlineCode",{parentName:"p"},".displayName")," to React components created by ",(0,o.kt)("inlineCode",{parentName:"p"},"React.createContext()")," (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/babel/babel/pull/13501"},"#13501"),")."),(0,o.kt)("p",null,"We also introduced a new compiler assumption, ",(0,o.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/assumptions#noincompletensimportdetection"},(0,o.kt)("inlineCode",{parentName:"a"},"noIncompleteNsImportDetection")),", to produce a smaller output when compiling ECMAScript modules to CommonJS without worrying about partially initialized namespace imports caused by module cycles."),(0,o.kt)("p",null,"Additionally, you can now specify ",(0,o.kt)("a",{parentName:"p",href:"https://mozilla.github.io/rhino/"},"Rhino")," as a compilation target."),(0,o.kt)("p",null,"You can read the whole changelog ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/babel/babel/releases/tag/v7.15.0"},"on GitHub"),"."))}b.isMDXComponent=!0}}]);