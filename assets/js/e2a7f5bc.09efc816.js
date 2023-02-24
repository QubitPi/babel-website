"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5934],{35318:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return d}});var n=a(27378);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=n.createContext({}),p=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},c=function(t){var e=p(t.components);return n.createElement(l.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),u=p(a),h=r,d=u["".concat(l,".").concat(h)]||u[h]||m[h]||i;return a?n.createElement(d,o(o({ref:e},c),{},{components:a})):n.createElement(d,o({ref:e},c))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[u]="string"==typeof t?t:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},92989:function(t,e,a){a.r(e),a.d(e,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var n=a(25773),r=a(30808),i=(a(27378),a(35318)),o=["components"],s={layout:"post",title:"7.6.0 Released: Private static accessors and V8 intrinsic syntax",author:"Nicol\xf2 Ribaudo",authorURL:"https://twitter.com/NicoloRibaudo",date:new Date("2019-09-06T00:00:00.000Z"),categories:"announcements",share_text:"Babel 7.6.0 Released"},l=void 0,p={permalink:"/babel-website/blog/2019/09/05/7.6.0",source:"@site/blog/2019-09-05-7.6.0.md",title:"7.6.0 Released: Private static accessors and V8 intrinsic syntax",description:"We just released a new minor Babel version!",date:"2019-09-06T00:00:00.000Z",formattedDate:"September 6, 2019",tags:[],readingTime:3.65,hasTruncateMarker:!0,authors:[{name:"Nicol\xf2 Ribaudo",url:"https://twitter.com/NicoloRibaudo"}],frontMatter:{layout:"post",title:"7.6.0 Released: Private static accessors and V8 intrinsic syntax",author:"Nicol\xf2 Ribaudo",authorURL:"https://twitter.com/NicoloRibaudo",date:"2019-09-06T00:00:00.000Z",categories:"announcements",share_text:"Babel 7.6.0 Released"},prevItem:{title:"7.7.0 Released: Error recovery and TypeScript 3.7",permalink:"/babel-website/blog/2019/11/05/7.7.0"},nextItem:{title:"7.5.0 Released: dynamic import and F# pipelines",permalink:"/babel-website/blog/2019/07/03/7.5.0"}},c={authorsImageUrls:[void 0]},u=[{value:"Private static accessors (getters and setters) (#10217)",id:"private-static-accessors-getters-and-setters-10217",level:2},{value:"V8 intrinsic runtime functions parsing (#10148)",id:"v8-intrinsic-runtime-functions-parsing-10148",level:2},{value:"Nullish coalescing operator (<code>??</code>) updates (#10269)",id:"nullish-coalescing-operator--updates-10269",level:2}],m={toc:u},h="wrapper";function d(t){var e=t.components,a=(0,r.Z)(t,o);return(0,i.kt)(h,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We just released a new minor Babel version!"),(0,i.kt)("p",null,"It includes support for static private accessors in classes, and parser support for the V8 intrinsics syntax. We also fixed a bunch of long-standing issues related to TDZ handling, and improved support for do-expressions. You can read the whole changelog ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/babel/babel/releases/tag/v7.6.0"},"on GitHub"),"."),(0,i.kt)("p",null,"Thanks to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/skyiea"},"Serhii Muryhin"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/epicfaace"},"Ashwin Ramaswami"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ifsnow"},"Sungmin Lee"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Sinewyk"},"Serge Havas"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zaygraveyard"},"Ziad El Khoury Hanna"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/deificx"},"Even Alander"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/banga"},"Shrey Banga"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dsgkirkby"},"Dylan Kirkby"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ajaysagar"},"Ajay Sagar"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/AdamRamberg"},"Adam Ramberg"),", and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rhyzx"},"Bin Xin")," for their first PRs! (And also thanks to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/codetriage-readme-bot"},"Codetriage README Bot")," and ",(0,i.kt)("a",{parentName:"p",href:"https://help.github.com/en/articles/configuring-automated-security-fixes"},"dependabot")," \ud83e\udd16)"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/bloomberg"},(0,i.kt)("strong",{parentName:"a"},"Bloomberg"))," is continuing to sponsor the implementation of new class features in Babel: after giving us a lot of new class features (",(0,i.kt)("a",{parentName:"p",href:"https://babeljs.io/blog/2018/09/17/7.1.0#private-static-fields-stage-3"},"static private fields"),", ",(0,i.kt)("a",{parentName:"p",href:"https://babeljs.io/blog/2018/12/03/7.2.0#private-instance-methods-8654-https-githubcom-babel-babel-pull-8654"},"private instance methods"),", ",(0,i.kt)("a",{parentName:"p",href:"https://babeljs.io/blog/2019/01/21/7.3.0#private-instance-accessors-getters-and-setters-9101-https-githubcom-babel-babel-pull-9101"},"private instance accessors"),", and ",(0,i.kt)("a",{parentName:"p",href:"https://babeljs.io/blog/2019/03/19/7.4.0#static-private-methods-9446-https-githubcom-babel-babel-pull-9446"},"static private methods"),"), they've just implemented static private getters and setters."),(0,i.kt)("p",null,"Another big shout out goes to ",(0,i.kt)("a",{parentName:"p",href:"https://frontendmasters.com/"},(0,i.kt)("strong",{parentName:"a"},"Frontend Masters"))," for making two big donations this past month, as well as all ",(0,i.kt)("a",{parentName:"p",href:"https://opencollective.com/babel#contributors"},"our other sponsors")," who allow the Babel team to spend more time on the project!"),(0,i.kt)("p",null,"If you or your company want to support Babel and the evolution of JavaScript, but aren't sure how, you can donate to us on ",(0,i.kt)("a",{parentName:"p",href:"https://opencollective.com/babel"},"OpenCollective")," and, better yet, work with us on the implementation of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/babel/proposals"},"new ECMAScript proposals")," directly! As a volunteer-driven project, we rely on the community's support to both fund our efforts in supporting the wide range of JavaScript users and taking ownership of the code. Reach out to Henry at ",(0,i.kt)("a",{parentName:"p",href:"mailto:henry@babeljs.io"},"henry@babeljs.io")," if you'd like to talk more!"),(0,i.kt)("h2",{id:"private-static-accessors-getters-and-setters-10217"},"Private static accessors (getters and setters) (",(0,i.kt)("a",{parentName:"h2",href:"https://github.com/babel/babel/pull/10217"},"#10217"),")"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"class Resource {\n  static #loaderInstance = null;\n\n  static get #loader() {\n    if (!this.#loaderInstance) this.#loaderInstance = new Loader();\n    return this.#loaderInstance;\n  }\n\n  status = null;\n\n  constructor(url) {\n    this.status = Resource.#loader.load(url);\n  }\n}\n")),(0,i.kt)("p",null,"Thanks to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tim-mc"},"Tim")," (Bloomberg) for implementing this proposal!"),(0,i.kt)("p",null,"You can test this new feature by adding ",(0,i.kt)("inlineCode",{parentName:"p"},"@babel/plugin-proposal-private-methods")," to your config, if you haven't already added it, or by enabling the ",(0,i.kt)("inlineCode",{parentName:"p"},"stage-3")," preset in the online ",(0,i.kt)("a",{parentName:"p",href:"https://babeljs.io/repl/build/main#?presets=stage-3"},"repl"),"."),(0,i.kt)("p",null,"Class private features support is finally complete \ud83c\udf89"),(0,i.kt)("div",{style:{margin:"auto",width:"fit-content"}},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Class Private"),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Instance")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Static")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Fields")," ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},"class A { #a = 1 }")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://babeljs.io/blog/2018/08/27/7.0.0#tc39-proposals-https-githubcom-tc39-proposals-support"},"7.0.0")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://babeljs.io/blog/2018/09/17/7.1.0#private-static-fields-stage-3"},"7.1.0"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Methods")," ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},"class A { #a() {} }")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://babeljs.io/blog/2018/12/03/7.2.0#private-instance-methods-8654-https-githubcom-babel-babel-pull-8654"},"7.2.0")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://babeljs.io/blog/2019/03/19/7.4.0#static-private-methods-9446-https-githubcom-babel-babel-pull-9446"},"7.4.0"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Accessors")," ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},"class A { get #a() {} }")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://babeljs.io/blog/2019/01/21/7.3.0#private-instance-accessors-getters-and-setters-9101-https-githubcom-babel-babel-pull-9101"},"7.3.0")),(0,i.kt)("td",{parentName:"tr",align:null},"7.6.0"))))),(0,i.kt)("div",{style:{margin:"auto",width:"fit-content"}},(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://media.giphy.com/media/3KC2jD2QcBOSc/source.gif",alt:"It's time to party!"}))),(0,i.kt)("h2",{id:"v8-intrinsic-runtime-functions-parsing-10148"},"V8 intrinsic runtime functions parsing (",(0,i.kt)("a",{parentName:"h2",href:"https://github.com/babel/babel/pull/10148"},"#10148"),")"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f This is a non-standard extension to the language, which can only be used in V8 when enabling the ",(0,i.kt)("inlineCode",{parentName:"p"},"--allow-natives-syntax")," command-line flag.")),(0,i.kt)("p",null,"V8, the JavaScript engine used by Node.js and Chromium-based browsers, can expose various pieces of internal functionality as JavaScript functions. Although these APIs must not be used in production JavaScript code, these special functions ",(0,i.kt)("em",{parentName:"p"},"can")," be useful in testing and debugging scenarios \u2014 for example, to understand how your JavaScript values are represented in memory, or to call some ECMAScript specification routines directly."),(0,i.kt)("p",null,"These so-called \u201cV8 intrinsics\u201d have a different syntax than normal functions: their name always starts with ",(0,i.kt)("inlineCode",{parentName:"p"},"%"),". Also, they can only be directly called and never used as normal values (you can't, for example, assign them to another variable)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'function fn() { /* ... */ }\n\nconst status = %GetOptimizationStatus(fn);\n\nif (status === 2) {\n  console.log("The function is not optimized!");\n}\n')),(0,i.kt)("p",null,"You can find the whole list of existing V8 intrinsics in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/v8/v8/blob/master/src/runtime/runtime.h"},"V8's source code"),"."),(0,i.kt)("p",null,"You can enable this syntax in ",(0,i.kt)("inlineCode",{parentName:"p"},"@babel/parser")," by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"v8intrinsic")," plugin:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'const { parse } = require("@babel/parser");\n\nparse(code, {\n  plugins: ["v8intrinsic"]\n})\n')),(0,i.kt)("h2",{id:"nullish-coalescing-operator--updates-10269"},"Nullish coalescing operator (",(0,i.kt)("inlineCode",{parentName:"h2"},"??"),") updates (",(0,i.kt)("a",{parentName:"h2",href:"https://github.com/babel/babel/pull/10269"},"#10269"),")"),(0,i.kt)("p",null,"The nullish coalescing stage 3 proposal recently got some updates: to avoid confusion over precedence with other logical operators (",(0,i.kt)("inlineCode",{parentName:"p"},"&&")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"||"),"), the spec has been changed to disallow mixing them."),(0,i.kt)("p",null,"This means that the following expressions are now invalid:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"a ?? b || c;\na && b ?? c;\n")),(0,i.kt)("p",null,"Instead, you should add parentheses where appropriate:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"(a ?? b) || c; /* or */ a ?? (b || c);\n(a && b) ?? c; /* or */ a && (b ?? c);\n")),(0,i.kt)("p",null,"This is similar to how unary minus (",(0,i.kt)("inlineCode",{parentName:"p"},"-"),") and the exponentiation operator (",(0,i.kt)("inlineCode",{parentName:"p"},"**"),") interact: you can't write ",(0,i.kt)("inlineCode",{parentName:"p"},"-1 ** 2"),", but you have to choose between ",(0,i.kt)("inlineCode",{parentName:"p"},"(-1) ** 2")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"-(1 ** 2)"),"."))}d.isMDXComponent=!0}}]);