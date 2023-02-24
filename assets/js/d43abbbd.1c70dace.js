"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1158],{35318:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return b}});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(a),h=n,b=c["".concat(l,".").concat(h)]||c[h]||m[h]||o;return a?r.createElement(b,i(i({ref:t},u),{},{components:a})):r.createElement(b,i({ref:t},u))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},73982:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return c}});var r=a(25773),n=a(30808),o=(a(27378),a(35318)),i=["components"],p={layout:"post",title:"7.2.0 Released: Private Instance Methods",author:"Nicol\xf2 Ribaudo",authorURL:"https://twitter.com/NicoloRibaudo",date:new Date("2018-12-03T12:00:00.000Z"),categories:"announcements",share_text:"Babel 7.2.0 Released"},l=void 0,s={permalink:"/babel-website/blog/2018/12/03/7.2.0",source:"@site/blog/2018-12-03-7.2.0.md",title:"7.2.0 Released: Private Instance Methods",description:"We just released a new minor version of Babel!",date:"2018-12-03T12:00:00.000Z",formattedDate:"December 3, 2018",tags:[],readingTime:2.445,hasTruncateMarker:!0,authors:[{name:"Nicol\xf2 Ribaudo",url:"https://twitter.com/NicoloRibaudo"}],frontMatter:{layout:"post",title:"7.2.0 Released: Private Instance Methods",author:"Nicol\xf2 Ribaudo",authorURL:"https://twitter.com/NicoloRibaudo",date:"2018-12-03T12:00:00.000Z",categories:"announcements",share_text:"Babel 7.2.0 Released"},prevItem:{title:"7.3.0 Released: Named capturing groups, private instance accessors and smart pipelines",permalink:"/babel-website/blog/2019/01/21/7.3.0"},nextItem:{title:"7.1.0 Released: Decorators, Private Static Fields",permalink:"/babel-website/blog/2018/09/17/7.1.0"}},u={authorsImageUrls:[void 0]},c=[{value:"Private Instance Methods (#8654)",id:"private-instance-methods-8654",level:2},{value:"&quot;Smart&quot; Pipeline Operator Parsing (#8289)",id:"smart-pipeline-operator-parsing-8289",level:2},{value:"Plugin Names (#8769)",id:"plugin-names-8769",level:2}],m={toc:c},h="wrapper";function b(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)(h,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We just released a new minor version of Babel!"),(0,o.kt)("p",null,"This release includes support for private instance methods and a bunch of bug fixes regarding Flow and TypeScript types. You can read the whole changelog ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/babel/babel/releases/tag/v7.2.0"},"on GitHub"),"."),(0,o.kt)("p",null,"A lot of new contributors fixed bugs or implemented new features in this release: thanks to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Gcaufy"},"Gcaufy"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/morozRed"},"Grigory Moroz"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/phapp88"},"Paul Happ"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tim-mc"},"Tim McClure")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/katrotz"},"Veaceslav Cotruta"),"!"),(0,o.kt)("p",null,"A big shout out to Bloomberg for sponsoring the implementation of private class elements! This support for private ",(0,o.kt)("em",{parentName:"p"},"instance")," methods  is a follow-up to private ",(0,o.kt)("em",{parentName:"p"},"static")," fields released in Babel ",(0,o.kt)("a",{parentName:"p",href:"https://babeljs.io/blog/2018/09/17/7.1.0#private-static-fields-stage-3"},"7.1.0"),"."),(0,o.kt)("p",null,"If you or your company wants to support Babel and the evolution of JavaScript, but aren't sure how, you can donate to us on ",(0,o.kt)("a",{parentName:"p",href:"https://opencollective.com/babel"},"OpenCollective")," and, better yet, work with us on the implementation of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/babel/proposals"},"new ECMAScript proposals")," directly!"),(0,o.kt)("h2",{id:"private-instance-methods-8654"},"Private Instance Methods (",(0,o.kt)("a",{parentName:"h2",href:"https://github.com/babel/babel/pull/8654"},"#8654"),")"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'class Person {\n  #age = 19;\n\n  #increaseAge() {\n    this.#age++;\n  }\n\n  birthday() {\n    this.#increaseAge();\n    alert("Happy Birthday!");\n  }\n}\n')),(0,o.kt)("p",null,"Thanks to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tim-mc"},"Tim")," for implementing this proposal, and to ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/NicoloRibaudo"},"Nicol\xf2")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jridgewell"},"Justin")," for the reviews!"),(0,o.kt)("p",null,"You can test private methods by adding the ",(0,o.kt)("inlineCode",{parentName:"p"},"@babel/plugin-proposal-private-methods")," plugin to your Babel configuration, or enabling the ",(0,o.kt)("inlineCode",{parentName:"p"},"stage-3")," preset in the ",(0,o.kt)("a",{parentName:"p",href:"https://babeljs.io/repl/build/main#?presets=stage-3"},"repl"),"."),(0,o.kt)("p",null,"Private accessors ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/babel/babel/pull/9101"},"are also coming"),", and we have done some big internal refactoring that allows us to add support for private elements to decorators soon \ud83c\udf89."),(0,o.kt)("h2",{id:"smart-pipeline-operator-parsing-8289"},'"Smart" Pipeline Operator Parsing (',(0,o.kt)("a",{parentName:"h2",href:"https://github.com/babel/babel/pull/8289"},"#8289"),")"),(0,o.kt)("p",null,"Thanks to the work of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mAAdhaTTah"},"James DiGioia")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/js-choi"},"J. S. Choi"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"@babel/parser")," now also can parse the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/js-choi/proposal-smart-pipelines/"},"Smart Pipeline Operator"),", in addition to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposal-pipeline-operator"},"minimal version"),"."),(0,o.kt)("p",null,'We currently only support the "core" of the smart pipeline proposal, and not any additional features. We also currently support only ',(0,o.kt)("inlineCode",{parentName:"p"},"#")," as a preliminary placeholder. The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposal-pipeline-operator/issues/91"},"actual placeholder has not yet been decided"),", and other possibilities such as ",(0,o.kt)("inlineCode",{parentName:"p"},"?"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"@"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"%")," may be experimentally supported by ",(0,o.kt)("inlineCode",{parentName:"p"},"@babel/parser")," in the future."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'// "Smart"\nconst result = 2 |> double |> 3 + # |> toStringBase(2, #); // "111"\n\n// "Simple"\nconst result = 2 |> double |> (x => 3 + x) |> (x => toStringBase(2, x));\n')),(0,o.kt)("p",null,"Babel implements multiple variants of this proposal to help TC39 test and gather feedback from the community. As with all proposals, expect changes in the future."),(0,o.kt)("p",null,"If you are directly using ",(0,o.kt)("inlineCode",{parentName:"p"},"@babel/parser")," and you want to test this proposal, you can pass the ",(0,o.kt)("inlineCode",{parentName:"p"},'proposal: "smart"')," option to the pipeline plugin:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'const ast = babel.parse(code, {\n  plugins: [\n    ["pipelineOperator", { proposal: "smart" }]\n  ]\n})\n')),(0,o.kt)("p",null,"We don't support transpiling this syntax yet, but it will come soon."),(0,o.kt)("h2",{id:"plugin-names-8769"},"Plugin Names (",(0,o.kt)("a",{parentName:"h2",href:"https://github.com/babel/babel/pull/8769"},"#8769"),")"),(0,o.kt)("p",null,"Every official plugin now provides Babel its name. Although this doesn't affect normal Babel use, it provides a consistent identifier for each plugin. This is particularly useful for things like ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/babel/website/pull/1736"},"Time Travel"),", which allows you to see exactly what each plugin is doing to your code. You can see this in effect via our ",(0,o.kt)("a",{parentName:"p",href:"https://babeljs.io/repl/build/main#?timeTravel=true"},"repl"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/AzKc37i.gif",alt:null})),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/search?q=https%3A%2F%2Fbabeljs.io%2Fblog%2F2018%2F12%2F03%2F7.2.0"},"Discuss on Twitter")))}b.isMDXComponent=!0}}]);