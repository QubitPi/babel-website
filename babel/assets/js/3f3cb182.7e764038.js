"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2019],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,f=p["".concat(l,".").concat(h)]||p[h]||m[h]||a;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},39890:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=n(25773),o=n(30808),a=(n(27378),n(35318)),s=["components"],i={layout:"post",title:"6to5 + esnext",author:"James Kyle",authorURL:"https://twitter.com/thejameskyle",date:new Date("2015-01-12T10:40:00.000Z"),categories:"announcements",share_text:"6to5 + esnext: Joining Forces"},l=void 0,c={permalink:"/babel-website/blog/2015/01/12/6to5-esnext",source:"@site/blog/2015-01-12-6to5-esnext.md",title:"6to5 + esnext",description:"The past few months have been exciting for 6to5. We\u2019ve gone from being an educational project to having 100k downloads on npm, there\u2019s been 1,800 commits and 155 releases, we now support every major JavaScript build system, and recently we became a Sprockets 4.0 default. To top it off, our new website and documentation received tens of thousands of pageviews, and has been featured by several publications including JavaScript Weekly.",date:"2015-01-12T10:40:00.000Z",formattedDate:"January 12, 2015",tags:[],readingTime:2.32,hasTruncateMarker:!0,authors:[{name:"James Kyle",url:"https://twitter.com/thejameskyle"}],frontMatter:{layout:"post",title:"6to5 + esnext",author:"James Kyle",authorURL:"https://twitter.com/thejameskyle",date:"2015-01-12T10:40:00.000Z",categories:"announcements",share_text:"6to5 + esnext: Joining Forces"},prevItem:{title:"2to3",permalink:"/babel-website/blog/2015/01/27/2to3"}},u={authorsImageUrls:[void 0]},p=[],m={toc:p};function h(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The past few months have been exciting for 6to5. We\u2019ve gone from being an educational project to having 100k downloads on npm, there\u2019s been 1,800 commits and 155 releases, we now support every major JavaScript build system, and recently we became a Sprockets 4.0 default. To top it off, our new website and documentation received tens of thousands of pageviews, and has been featured by several publications including JavaScript Weekly."),(0,a.kt)("img",{class:"img-responsive",alt:"npm downloads of 6to5, traceur, and esnext",src:"/assets/2015-01-12-6to5-esnext/chart-1.png"}),(0,a.kt)("p",{class:"text-center small text-muted"},"(Source: npm, includes 5-day moving point average)"),(0,a.kt)("p",null,"And we\u2019re just getting started..."),(0,a.kt)("p",null,"6to5\u2019s mission is to take future versions of JavaScript and compile them into spec compliant, performant, and readable JavaScript files you can run today. With built-in support for JSX and Flow Types, 6to5 provides a lot more than other transpilers."),(0,a.kt)("p",null,"Our top priority is eliminating any barriers to ES6+ adoption, and while 6to5 may be the most feature-ready ES6 transpiler out there right now, there are other great projects attempting to do the same. Traceur Compiler is the most common alternative to our compiler, but it\u2019s also the most different since it relies heavily on a runtime. Other alternatives with similar approach to 6to5 include: es6-transpiler, es6now, jstransform, and esnext."),(0,a.kt)("p",null,"esnext is the closest 6to5 in it\u2019s aim. With a focus on creating a smarter transpiler that can create higher quality ES5-compatible output, both projects are easy to get started with, and both care deeply about creating the best tool for developers."),(0,a.kt)("p",null,"A few weeks back, Stefan Penner reached out to us hoping that, because we share the same mission, we might be able to unite our efforts. Excited by the idea, we quickly scheduled a meeting to discuss what that might mean."),(0,a.kt)("p",null,"The meeting went well:"),(0,a.kt)("blockquote",{class:"twitter-tweet center-block",lang:"en"},(0,a.kt)("p",null,(0,a.kt)("a",{href:"https://twitter.com/hashtag/6to5?src=hash"},"#6to5")," + ",(0,a.kt)("a",{href:"https://twitter.com/hashtag/esnext?src=hash"},"#esnext")," I'm looking forward to our future together! Thanks guys ",(0,a.kt)("a",{href:"https://twitter.com/sebmck"},"@sebmck")," ",(0,a.kt)("a",{href:"https://twitter.com/stefanpenner"},"@stefanpenner")," ",(0,a.kt)("a",{href:"https://twitter.com/eventualbuddha"},"@eventualbuddha")," ",(0,a.kt)("a",{href:"https://twitter.com/Rich_Harris"},"@Rich_Harris")),"\u2014 James Kyle (@thejameskyle) ",(0,a.kt)("a",{href:"https://twitter.com/thejameskyle/status/551474226708766720"},"January 3, 2015")),(0,a.kt)("script",{async:!0,src:"//platform.twitter.com/widgets.js",charset:"utf-8"}),(0,a.kt)("p",null,"We\u2019ve decided that because of our shared goals and philosophy it makes sense to merge the two projects in an effort to build a better transpiler."),(0,a.kt)("p",null,"So what will this mean for both projects?"),(0,a.kt)("p",null,"The esnext team will start work on 6to5 bringing their skillset and experience to make it faster and more spec-compliant. On our end, we will be migrating people from esnext to 6to5\u2014we\u2019ve already ported all of the esnext tests to 6to5 to ensure nothing will break."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Ember CLI users (currently using esnext) can expect 6to5 to become installed by default replacing esnext.")),(0,a.kt)("p",null,"You can expect continued work on 6to5; we\u2019re always finding ways to grow and refine. We hope others will join our efforts so our energy can be spent improving rather the competing."),(0,a.kt)("p",{class:"text-right"},"\u2014 The 6to5 team"))}h.isMDXComponent=!0}}]);