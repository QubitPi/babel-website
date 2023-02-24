"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3666],{35318:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var o=r(27378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(r),m=n,d=p["".concat(c,".").concat(m)]||p[m]||f[m]||a;return r?o.createElement(d,i(i({ref:t},s),{},{components:r})):o.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[p]="string"==typeof e?e:n,i[1]=u;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},58614:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var o=r(25773),n=r(30808),a=(r(27378),r(35318)),i=["components"],u={layout:"post",title:"Upgrade to Babel 7 for Tool Authors (WIP)",author:"Sven SAULEAU, Henry Zhu",date:new Date("2017-03-01T11:00:00.000Z"),categories:"announcements",share_text:"Upgrade to Babel 7 for Tool Authors",third_party_js:["https://platform.twitter.com/widgets.js"],custom_js_with_timestamps:["docs.js"]},c=void 0,l={permalink:"/babel-website/blog/2017/03/01/upgrade-to-babel-7-for-tool-authors",source:"@site/blog/2017-03-01-upgrade-to-babel-7-for-tool-authors.md",title:"Upgrade to Babel 7 for Tool Authors (WIP)",description:"We are moving the migration guide to a docs page instead of a blog post!",date:"2017-03-01T11:00:00.000Z",formattedDate:"March 1, 2017",tags:[],readingTime:.185,hasTruncateMarker:!1,authors:[{name:"Sven SAULEAU, Henry Zhu"}],frontMatter:{layout:"post",title:"Upgrade to Babel 7 for Tool Authors (WIP)",author:"Sven SAULEAU, Henry Zhu",date:"2017-03-01T11:00:00.000Z",categories:"announcements",share_text:"Upgrade to Babel 7 for Tool Authors",third_party_js:["https://platform.twitter.com/widgets.js"],custom_js_with_timestamps:["docs.js"]},prevItem:{title:"Babel and Summer of Code 2017",permalink:"/babel-website/blog/2017/08/09/babel-and-summer-of-code"},nextItem:{title:"Upgrade to Babel 7 (moved)",permalink:"/babel-website/blog/2017/03/01/upgrade-to-babel-7"}},s={authorsImageUrls:[void 0]},p=[{value:"Check out v7-migration-api!",id:"check-out-v7-migration-api",level:2}],f={toc:p},m="wrapper";function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,a.kt)(m,(0,o.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We are moving the migration guide to a docs page instead of a blog post!"),(0,a.kt)("h2",{id:"check-out-v7-migration-api"},"Check out ",(0,a.kt)("a",{parentName:"h2",href:"https://babeljs.io/docs/en/next/v7-migration-api"},"v7-migration-api"),"!"),(0,a.kt)("p",null,"Refer users to this document for those that create tools that depend on Babel (such as Babel plugins)."))}d.isMDXComponent=!0}}]);