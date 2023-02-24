"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1090],{35318:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(a),m=n,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return a?r.createElement(h,l(l({ref:t},u),{},{components:a})):r.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},53233:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var r=a(25773),n=a(30808),o=(a(27378),a(35318)),l=["components"],i={layout:"post",title:"7.19.0 Released: Stage 3 decorators and more RegExp features!",author:"Babel Team",authorURL:"https://twitter.com/babeljs",date:new Date("2022-09-05T00:00:00.000Z"),categories:"announcements",share_text:"Babel 7.19.0 Released"},p=void 0,s={permalink:"/babel-website/blog/2022/09/05/7.19.0",source:"@site/blog/2022-09-05-7.19.0.md",title:"7.19.0 Released: Stage 3 decorators and more RegExp features!",description:"We just published Babel 7.19.0!",date:"2022-09-05T00:00:00.000Z",formattedDate:"September 5, 2022",tags:[],readingTime:2.45,hasTruncateMarker:!0,authors:[{name:"Babel Team",url:"https://twitter.com/babeljs"}],frontMatter:{layout:"post",title:"7.19.0 Released: Stage 3 decorators and more RegExp features!",author:"Babel Team",authorURL:"https://twitter.com/babeljs",date:"2022-09-05T00:00:00.000Z",categories:"announcements",share_text:"Babel 7.19.0 Released"},prevItem:{title:"7.20.0 Released: Deno target and TypeScript 4.9",permalink:"/babel-website/blog/2022/10/27/7.20.0"},nextItem:{title:"7.18.0 Released: Destructuring private elements and TypeScript 4.7",permalink:"/babel-website/blog/2022/05/19/7.18.0"}},u={authorsImageUrls:[void 0]},c=[{value:"Highlights",id:"highlights",level:2},{value:"New default values",id:"new-default-values",level:3},{value:"Stage 3 decorators (#14836)",id:"stage-3-decorators-14836",level:3},{value:"RegExp duplicate named capturing groups (#14805)",id:"regexp-duplicate-named-capturing-groups-14805",level:3}],d={toc:c},m="wrapper";function h(e){var t=e.components,a=(0,n.Z)(e,l);return(0,o.kt)(m,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We just published Babel 7.19.0!"),(0,o.kt)("p",null,"This release updates our implementation of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposal-decorators"},"decorators proposal"),", which reached Stage 3 in March. It also includes support for the new ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposal-duplicate-named-capturing-groups"},"duplicate named capturing groups proposal")," for regular expressions."),(0,o.kt)("p",null,"You can read the whole changelog ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/babel/babel/releases/tag/v7.19.0"},"on GitHub"),"."),(0,o.kt)("p",null,"If you or your company want to support Babel and the evolution of JavaScript, but aren't sure how, you can donate to us on our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/babel/babel?sponsor=1"},"Open Collective")," and, better yet, work with us on the implementation of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/babel/proposals"},"new ECMAScript proposals")," directly! As a volunteer-driven project, we rely on the community's support to fund our efforts in supporting the wide range of JavaScript users. Reach out at ",(0,o.kt)("a",{parentName:"p",href:"mailto:team@babeljs.io"},"team@babeljs.io")," if you'd like to discuss more!"),(0,o.kt)("h2",{id:"highlights"},"Highlights"),(0,o.kt)("h3",{id:"new-default-values"},"New default values"),(0,o.kt)("p",null,"Given the stabilization of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposal-decorators"},"decorators")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposal-record-tuple"},"Record and Tuple")," proposal, we set some default values for their ",(0,o.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-parser#plugins-options"},"parser plugin")," options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"decorators"),"/",(0,o.kt)("inlineCode",{parentName:"li"},"@babel/plugin-proposal-decorators"),"'s ",(0,o.kt)("inlineCode",{parentName:"li"},"decoratorsBeforeExport")," now defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),";"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"recordAndTuple"),"/",(0,o.kt)("inlineCode",{parentName:"li"},"@babel/plugin-proposal-record-and-tuple"),"'s ",(0,o.kt)("inlineCode",{parentName:"li"},"syntaxType")," option now defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"hash"),".")),(0,o.kt)("p",null,"These options will be removed in Babel 8."),(0,o.kt)("h3",{id:"stage-3-decorators-14836"},"Stage 3 decorators (",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/babel/babel/pull/14836"},"#14836"),")"),(0,o.kt)("p",null,"The decorators proposal was promoted to Stage 3 with some minor but observable changes. You can enable the new version using the ",(0,o.kt)("inlineCode",{parentName:"p"},'"version": "2022-03"')," option of ",(0,o.kt)("inlineCode",{parentName:"p"},"@babel/plugin-proposal-decorators"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="babel.config.json"',title:'"babel.config.json"'},'{\n  "plugins": [\n    ["@babel/plugin-proposal-decorators", {\n        "version": "2022-03"\n    }]\n  ]\n}\n')),(0,o.kt)("p",null,"If you are migrating from the ",(0,o.kt)("inlineCode",{parentName:"p"},"2021-12")," version, the following breaking changes might affect you:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("inlineCode",{parentName:"li"},"initialize")," method of the object returned by accessor decorators has been renamed to ",(0,o.kt)("inlineCode",{parentName:"li"},"init"),";"),(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("inlineCode",{parentName:"li"},"isPrivate")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"isStatic")," properties of the ",(0,o.kt)("inlineCode",{parentName:"li"},"context")," parameter received by the decorators (the second one) have been renamed to ",(0,o.kt)("inlineCode",{parentName:"li"},"private")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"static"),";"),(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("inlineCode",{parentName:"li"},"context")," parameter now always has an ",(0,o.kt)("inlineCode",{parentName:"li"},"access")," property, regardless of the decorated element type;"),(0,o.kt)("li",{parentName:"ul"},"support for metadata (",(0,o.kt)("inlineCode",{parentName:"li"},"getMetadata"),"/",(0,o.kt)("inlineCode",{parentName:"li"},"setMetadata"),") has been removed and ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-decorator-metadata"},"postponed to a future proposal"),";"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"@(expression)()"),"-style decorators are disallowed, and you must use ",(0,o.kt)("inlineCode",{parentName:"li"},"@(expression())"),";"),(0,o.kt)("li",{parentName:"ul"},"decorators are applied in the following order, instead of in a single pass:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"static method decorators"),(0,o.kt)("li",{parentName:"ol"},"proto method decorators"),(0,o.kt)("li",{parentName:"ol"},"static field decorators"),(0,o.kt)("li",{parentName:"ol"},"instance field decorators"),(0,o.kt)("li",{parentName:"ol"},"class decorators.")))),(0,o.kt)("p",null,"If you are migrating from an older version of the proposal, we suggest reading ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposal-decorators"},"the full README"),". \ud83d\ude09"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\ud83d\udca1 TypeScript ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/TypeScript/issues/48885"},"plans to implement")," this version of the proposal. After almost a decade, it will be possible to write decorators without worrying if they will be compiled by Babel or tsc!")),(0,o.kt)("h3",{id:"regexp-duplicate-named-capturing-groups-14805"},"RegExp duplicate named capturing groups (",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/babel/babel/pull/14805"},"#14805"),")"),(0,o.kt)("p",null,"Babel now supports the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposal-duplicate-named-capturing-groups/"},"RegExp duplicate named capturing groups")," proposal, which allows re-using the same group name in alternative RegExp branches:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'const dateRE = /(?<year>\\d\\d\\d\\d)-(?<month>\\d\\d)|(?<month>\\d\\d)-(?<year>\\d\\d)/;\n\nconsole.log("2022-12".match(dateRE).groups); // { year: "2022", month: "12" }\nconsole.log("12-2022".match(dateRE).groups); // { year: "2022", month: "12" }\n')),(0,o.kt)("p",null,"You can enable this proposal using the ",(0,o.kt)("inlineCode",{parentName:"p"},"@babel/plugin-proposal-duplicate-named-capturing-groups-regex")," plugin:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="babel.config.json"',title:'"babel.config.json"'},'{\n  "plugins": ["@babel/proposal-duplicate-named-capturing-groups-regex"]\n}\n')),(0,o.kt)("p",null,"Babel relies on different third-party packages to transform regular expressions: this is possible thanks to the maintainers of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jviereck/regjsparser/"},"regjsparser"),", ",(0,o.kt)("a",{parentName:"p",href:"http://github.com/benjamn/regjsgen"},"regjsgen")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mathiasbynens/regexpu-core/"},"regexpu-core")," who took time to review our pull requests!"))}h.isMDXComponent=!0}}]);