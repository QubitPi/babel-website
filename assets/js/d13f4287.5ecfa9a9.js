"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1122],{35318:function(e,t,n){n.d(t,{Zo:function(){return b},kt:function(){return m}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(s,".").concat(d)]||u[d]||c[d]||l;return n?a.createElement(m,o(o({ref:t},b),{},{components:n})):a.createElement(m,o({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11904:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var a=n(25773),r=n(30808),l=(n(27378),n(35318)),o=["components"],i={id:"babel-preset-env-standalone",title:"@babel/preset-env-standalone",sidebar_label:"env-standalone"},s=void 0,p={unversionedId:"babel-preset-env-standalone",id:"babel-preset-env-standalone",title:"@babel/preset-env-standalone",description:"\ud83d\udea8 As of Babel 7.8.0, this package has been deprecated. It is now included in @babel/standalone.",source:"@site/../docs/preset-env-standalone.md",sourceDirName:".",slug:"/babel-preset-env-standalone",permalink:"/babel-website/docs/babel-preset-env-standalone",draft:!1,editUrl:"https://github.com/babel/website/edit/main/docs/../docs/preset-env-standalone.md",tags:[],version:"current",frontMatter:{id:"babel-preset-env-standalone",title:"@babel/preset-env-standalone",sidebar_label:"env-standalone"}},b={},u=[],c={toc:u},d="wrapper";function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\ud83d\udea8 As of Babel 7.8.0, this package has been deprecated. It is now included in ",(0,l.kt)("a",{parentName:"p",href:"/babel-website/docs/babel-standalone#usage"},"@babel/standalone"),".")),(0,l.kt)("h1",{id:"installation"},"Installation"),(0,l.kt)("p",null,"There are several ways to use @babel/preset-env-standalone. Pick whichever one you like:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Use it via UNPKG: ",(0,l.kt)("a",{parentName:"li",href:"https://unpkg.com/@babel/preset-env-standalone@7/babel-preset-env.min.js"},"https://unpkg.com/@babel/preset-env-standalone@7/babel-preset-env.min.js"),". This is a simple way to embed it on a webpage without having to do any other setup."),(0,l.kt)("li",{parentName:"ul"},"Install via NPM: ",(0,l.kt)("inlineCode",{parentName:"li"},"npm install --save @babel/preset-env-standalone")),(0,l.kt)("li",{parentName:"ul"},"Manually grab ",(0,l.kt)("inlineCode",{parentName:"li"},"babel-preset-env.js")," and/or ",(0,l.kt)("inlineCode",{parentName:"li"},"babel-preset-env.min.js"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Download archived source code from the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/babel/babel/releases"},"GitHub releases page"),"."),(0,l.kt)("li",{parentName:"ul"},"Unpack it."),(0,l.kt)("li",{parentName:"ul"},"Grab ",(0,l.kt)("inlineCode",{parentName:"li"},"babel-preset-env.js")," and/or ",(0,l.kt)("inlineCode",{parentName:"li"},"babel-preset-env.min.js")," from ",(0,l.kt)("inlineCode",{parentName:"li"},"packages/babel-preset-env-standalone"),".")))),(0,l.kt)("h1",{id:"usage"},"Usage"),(0,l.kt)("p",null,"Load ",(0,l.kt)("inlineCode",{parentName:"p"},"babel-preset-env.js")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"babel-preset-env.min.js")," in your environment, ",(0,l.kt)("strong",{parentName:"p"},"along with babel-standalone"),". This is important: You need to load Babel too! It will be registered as an available preset of the @babel/standalone."),(0,l.kt)("p",null,"Then, just use it like any other preset:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'Babel.transform(code, {\n  presets: [\n    [\n      "@babel/preset-env",\n      {\n        targets: {\n          browsers: "last 1 safari version",\n        },\n        useBuiltIns: "usage",\n      },\n    ],\n  ],\n});\n')))}m.isMDXComponent=!0}}]);