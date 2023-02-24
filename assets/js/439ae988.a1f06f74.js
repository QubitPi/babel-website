"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2547],{35318:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,h=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},67298:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var n=a(25773),r=a(30808),i=(a(27378),a(35318)),o=["components"],l={layout:"post",title:"7.8.0 Released: ECMAScript 2020, .mjs configuration files and @babel/cli improvements",author:"Nicol\xf2 Ribaudo",authorURL:"https://twitter.com/NicoloRibaudo",date:new Date("2020-01-11T20:00:00.000Z"),categories:"announcements",share_text:"Babel 7.8.0 Released"},p=void 0,s={permalink:"/babel-website/blog/2020/01/11/7.8.0",source:"@site/blog/2020-01-11-7.8.0.md",title:"7.8.0 Released: ECMAScript 2020, .mjs configuration files and @babel/cli improvements",description:"This is the first release of the year! \ud83c\udf89",date:"2020-01-11T20:00:00.000Z",formattedDate:"January 11, 2020",tags:[],readingTime:7.42,hasTruncateMarker:!0,authors:[{name:"Nicol\xf2 Ribaudo",url:"https://twitter.com/NicoloRibaudo"}],frontMatter:{layout:"post",title:"7.8.0 Released: ECMAScript 2020, .mjs configuration files and @babel/cli improvements",author:"Nicol\xf2 Ribaudo",authorURL:"https://twitter.com/NicoloRibaudo",date:"2020-01-11T20:00:00.000Z",categories:"announcements",share_text:"Babel 7.8.0 Released"},prevItem:{title:"7.9.0 Released: Smaller preset-env output, Typescript 3.8 support and a new JSX transform",permalink:"/babel-website/blog/2020/03/16/7.9.0"},nextItem:{title:"Babel's Funding Plans",permalink:"/babel-website/blog/2019/11/08/babels-funding-plans"}},d={authorsImageUrls:[void 0]},u=[{value:"ECMAScript 2020 default support (#10811, #10817, #10819, #10843)",id:"ecmascript-2020-default-support-10811-10817-10819-10843",level:2},{value:"Support every configuration file extension (#10783 and #10903)",id:"support-every-configuration-file-extension-10783-and-10903",level:2},{value:"New CLI options (#9144 and #10887)",id:"new-cli-options-9144-and-10887",level:2},{value:"Preparing for Babel 8",id:"preparing-for-babel-8",level:2},{value:"Extract targets parser and compat data from preset-env (#10899)",id:"extract-targets-parser-and-compat-data-from-preset-env-10899",level:3},{value:"Introduce opt-in stricter AST validation (#10917)",id:"introduce-opt-in-stricter-ast-validation-10917",level:3}],c={toc:u},m="wrapper";function h(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This is the first release of the year! \ud83c\udf89"),(0,i.kt)("p",null,"Babel 7.8.0 supports the new ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposals/blob/master/finished-proposals.md"},"ECMAScript 2020")," features by default: you don't need to enable individual plugins for nullish coalescing (",(0,i.kt)("inlineCode",{parentName:"p"},"??"),"), optional chaining (",(0,i.kt)("inlineCode",{parentName:"p"},"?."),") and dynamic ",(0,i.kt)("inlineCode",{parentName:"p"},"import()")," anymore with preset-env."),(0,i.kt)("p",null,"We also finished aligning our different configuration files with the formats natively supported by Node.js, a process that we started in the ",(0,i.kt)("a",{parentName:"p",href:"https://babeljs.io/blog/2019/11/05/7.7.0#new-configuration-file-extensions-10501-https-githubcom-babel-babel-pull-10501-10599-https-githubcom-babel-babel-pull-10599"},"7.7.0 release"),"."),(0,i.kt)("p",null,"Lastly, Babel's CLI now supports two new options: ",(0,i.kt)("inlineCode",{parentName:"p"},"--out-file-extension")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"--copy-ignored"),"."),(0,i.kt)("p",null,"You can read the whole changelog ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/babel/babel/releases/tag/v7.8.0"},"on GitHub"),"."),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Shoutout to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/AbdulAli19"},"Abdul Ali"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jackisherwood"},"Jack Isherwood"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jayenashar"},"Jayen Ashar"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Druotic"},"James Beavers"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ajafff"},"Klaus Meinhardt"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/layershifter"},"Oleksandr Fediashov"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/sidntrivedi012"},"Siddhant N Trivedi"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bassaer"},"Tsubasa Nakayama"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/yordis"},"Yordis Prieto")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ZYSzys"},"ZYSzys")," for their first PRs!"),(0,i.kt)("p",null,"We also want to thank ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Thom1729"},"Thomas Smith")," for volunteering to help us maintain the important ",(0,i.kt)("a",{parentName:"p",href:"https://packagecontrol.io/packages/Babel"},(0,i.kt)("inlineCode",{parentName:"a"},"babel-sublime"))," syntax highlighter plugin, and welcome ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rajasekarm"},"Raja Sekar"),", our newest addition to the Babel organization!"),(0,i.kt)("p",null,"If you or your company wants to support Babel and the evolution of JavaScript, but aren't sure how, you can donate to us on our ",(0,i.kt)("a",{parentName:"p",href:"https://opencollective.com/babel"},"Open Collective")," and, better yet, work with us on the implementation of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/babel/proposals"},"new ECMAScript proposals")," directly! As a volunteer-driven project, we rely on the community's support to fund our efforts in supporting the wide range of JavaScript users. Reach out at ",(0,i.kt)("a",{parentName:"p",href:"mailto:team@babeljs.io"},"team@babeljs.io")," if you'd like to discuss more!"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"We recently published a ",(0,i.kt)("a",{parentName:"p",href:"https://babeljs.io/blog/2019/11/08/babels-funding-plans"},"funding post")," detailing our funding plans and our goals. Check it out!")),(0,i.kt)("h2",{id:"ecmascript-2020-default-support-10811-10817-10819-10843"},"ECMAScript 2020 default support (",(0,i.kt)("a",{parentName:"h2",href:"https://github.com/babel/babel/pull/10811"},"#10811"),", ",(0,i.kt)("a",{parentName:"h2",href:"https://github.com/babel/babel/pull/10817"},"#10817"),", ",(0,i.kt)("a",{parentName:"h2",href:"https://github.com/babel/babel/pull/10819"},"#10819"),", ",(0,i.kt)("a",{parentName:"h2",href:"https://github.com/babel/babel/pull/10843"},"#10843"),")"),(0,i.kt)("p",null,"During the last ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tc39/agendas/blob/master/2019/12.md"},"meeting"),", TC39 moved both the nullish coalescing and optional chaining proposals to Stage 4!"),(0,i.kt)("p",null,"The nullish coalescing operator allows you to provide a fallback value when an expression evaluates to ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'const name = person.fullName ?? "Anonymous";\nconsole.log(`Hello, ${name}!`);\n')),(0,i.kt)("p",null,"This is similar to how the logical OR (",(0,i.kt)("inlineCode",{parentName:"p"},"||"),") operator works. The difference is that while ",(0,i.kt)("inlineCode",{parentName:"p"},"||"),' checks for "falsy" values (i.e. ',(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"0n")," and ",(0,i.kt)("inlineCode",{parentName:"p"},'""'),"), ",(0,i.kt)("inlineCode",{parentName:"p"},"??"),' only checks for "nullish" values. This better matches the "value not provided" mental model, and works better with possibly falsy, but valid, values:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'const element = { index: 0, value: "foo" };\n\nconst index = element.index ?? -1; //  0 :D\nconst index = element.index || -1; // -1 :(\n')),(0,i.kt)("p",null,'The optional chaining proposal uses the same concept of "nullish values", allowing optional property accesses on values which could be nullish. It also supports optional function calls and computed properties.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'const city = person.address?.city; // person.address could be not defined\nconst isNeighbor = person.address?.isCloseTo(me);\n\nperson.sayHayUsing?.("Twitter"); // The person.sayHayUsing method could be not defined\n')),(0,i.kt)("p",null,"You can now safely use these new features in your code! If you are already using ",(0,i.kt)("inlineCode",{parentName:"p"},"@babel/preset-env"),", you can use these two operators and they will be compiled based on your targets, just like any other ECMAScript feature. If you were using the ",(0,i.kt)("inlineCode",{parentName:"p"},"@babel/plugin-proposal-nullish-coalescing-operator")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"@babel/plugin-proposal-optional-chaining")," directly, you can remove them from your config:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},'{\n  "presets": [\n    ["@babel/env", { "targets": ["last 2 versions"] }]\n  ],\n  "plugins": [\n-   "@babel/proposal-optional-chaining",\n-   "@babel/proposal-nullish-coalescing-operator"\n  ]\n}\n')),(0,i.kt)("p",null,"These features are now also enabled by default in ",(0,i.kt)("inlineCode",{parentName:"p"},"@babel/parser"),": if you were using it directly, you can remove the ",(0,i.kt)("inlineCode",{parentName:"p"},"nullishCoalescingOperator")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"optionalChaining")," parser plugins. We also enabled parsing for dynamic ",(0,i.kt)("inlineCode",{parentName:"p"},"import()")," (which has been included in ",(0,i.kt)("inlineCode",{parentName:"p"},"@babel/preset-env")," since ",(0,i.kt)("a",{parentName:"p",href:"https://babeljs.io/blog/2019/07/03/7.5.0#dynamic-import-9552-https-githubcom-babel-babel-pull-9552-and-10109-https-githubcom-babel-babel-pull-10109"},"v7.5.0"),"), so you can safely remove the ",(0,i.kt)("inlineCode",{parentName:"p"},"dynamicImport")," plugin."),(0,i.kt)("h2",{id:"support-every-configuration-file-extension-10783-and-10903"},"Support every configuration file extension (",(0,i.kt)("a",{parentName:"h2",href:"https://github.com/babel/babel/pull/10783"},"#10783")," and ",(0,i.kt)("a",{parentName:"h2",href:"https://github.com/babel/babel/pull/10903"},"#10903"),")"),(0,i.kt)("p",null,"Babel 6 supported a single, JSON-based, configuration file: ",(0,i.kt)("inlineCode",{parentName:"p"},".babelrc"),"."),(0,i.kt)("p",null,"In Babel 7.0.0, we introduced ",(0,i.kt)("inlineCode",{parentName:"p"},"babel.config.js")," (which has ",(0,i.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/config-files"},"different resolution logic"),") and ",(0,i.kt)("inlineCode",{parentName:"p"},".babelrc.js"),". JavaScript config files can be useful for scenarios needing higher flexibility. This was the situation:"),(0,i.kt)("div",{style:{margin:"auto",width:"fit-content"}},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"th"},"Node.js file type")),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"th"},"babel.config.","_","_")),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"th"},".babelrc.","_","_")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},".js")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f Supported"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f Supported")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},".json")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u274c Not supported"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2754 Supported, with implicit extension"))))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u2139\ufe0f We strongly recommend reading about the differences between ",(0,i.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/config-files"},(0,i.kt)("inlineCode",{parentName:"a"},"babel.config.js")," and ",(0,i.kt)("inlineCode",{parentName:"a"},".babelrc.js")),"!")),(0,i.kt)("p",null,"More recently, Node.js 13.2.0 was released, adding support for native ECMAScript modules and the ",(0,i.kt)("inlineCode",{parentName:"p"},".cjs")," and ",(0,i.kt)("inlineCode",{parentName:"p"},".mjs")," file extensions. In Babel 7.7.0 we added support for ",(0,i.kt)("inlineCode",{parentName:"p"},".cjs")," config files to allow users to enable ",(0,i.kt)("inlineCode",{parentName:"p"},'"type": "module"')," in their ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," without breaking Babel, as well as support for ",(0,i.kt)("inlineCode",{parentName:"p"},"babel.config.json"),", which allows for static project-wide configuration."),(0,i.kt)("div",{style:{margin:"auto",width:"fit-content"}},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"th"},"Node.js file type")),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"th"},"babel.config.","_","_")),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"th"},".babelrc.","_","_")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},".js")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f Supported when ",(0,i.kt)("inlineCode",{parentName:"td"},'"type": "module"')," is not enabled"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f Supported when ",(0,i.kt)("inlineCode",{parentName:"td"},'"type": "module"')," is not enabled")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},".json")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f Supported"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2754 Supported, with implicit extension")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},".cjs")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f Supported"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f Supported")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},".mjs")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u274c Not supported"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u274c Not supported"))))),(0,i.kt)("p",null,"This release aligns Babel with the file types natively supported by Node.js by allowing ",(0,i.kt)("inlineCode",{parentName:"p"},".babelrc.json"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"babel.config.mjs"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},".babelrc.mjs"),"."),(0,i.kt)("div",{style:{margin:"auto",width:"fit-content"}},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"th"},"Node.js file type")),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"th"},"babel.config.","_","_")),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"th"},".babelrc.","_","_")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},".js")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f Supported"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f Supported")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},".json")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f Supported"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f Supported")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},".cjs")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f Supported"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f Supported")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},".mjs")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f Supported"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f Supported"))))),(0,i.kt)("p",null,"Please remember that ECMAScript modules are ",(0,i.kt)("strong",{parentName:"p"},"asynchronous"),": that's why, for example, you can't ",(0,i.kt)("inlineCode",{parentName:"p"},"require()")," them and instead have to use ",(0,i.kt)("inlineCode",{parentName:"p"},"import()"),", which returns a promise."),(0,i.kt)("p",null,"For these reasons, they can only be used when calling Babel via the promise-based or callback-based entry points. They already work with ",(0,i.kt)("inlineCode",{parentName:"p"},"@babel/cli"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"babel-loader")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"gulp-babel"),", and they will work with the next release of ",(0,i.kt)("inlineCode",{parentName:"p"},"rollup-plugin-babel"),". Note that they are not supported by ",(0,i.kt)("inlineCode",{parentName:"p"},"babel-eslint")," yet."),(0,i.kt)("h2",{id:"new-cli-options-9144-and-10887"},"New CLI options (",(0,i.kt)("a",{parentName:"h2",href:"https://github.com/babel/babel/pull/9144"},"#9144")," and ",(0,i.kt)("a",{parentName:"h2",href:"https://github.com/babel/babel/pull/10887"},"#10887"),")"),(0,i.kt)("p",null,"We added two new flags to ",(0,i.kt)("inlineCode",{parentName:"p"},"@babel/cli"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"--copy-ignored")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"--out-file-extension"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--copy-ignored")," can be used to copy files that are not transpiled by Babel, either because they are ignored using the ",(0,i.kt)("inlineCode",{parentName:"p"},"--ignore")," CLI option, or because ",(0,i.kt)("inlineCode",{parentName:"p"},'"ignore"')," is set in a configuration file."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f To maintain backward compatibility, in Babel 7.8.4 the default value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"--copy-ignored")," option has been changed to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),". If you want to disable it, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"--no-copy-ignored"),".")),(0,i.kt)("p",null,"This is similar to how the ",(0,i.kt)("inlineCode",{parentName:"p"},"--copy-files")," option works, but ",(0,i.kt)("inlineCode",{parentName:"p"},"--copy-files")," is meant to copy anything which is not transpiled because it isn't a JavaScript file (for example, ",(0,i.kt)("inlineCode",{parentName:"p"},".css")," or ",(0,i.kt)("inlineCode",{parentName:"p"},".json"),"), rather than explicitly ignored files."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--out-file-extension")," can be used to configure the extension of the files generated by Babel. For example, if you are transpiling ",(0,i.kt)("inlineCode",{parentName:"p"},".js")," files containing native ECMAScript modules in Node.js and want to generate CommonJS files, you might need to use the ",(0,i.kt)("inlineCode",{parentName:"p"},".cjs")," extension:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Shell"',title:'"Shell"'},"$ babel src --out-dir lib-cjs --out-file-extension cjs\n")),(0,i.kt)("h2",{id:"preparing-for-babel-8"},"Preparing for Babel 8"),(0,i.kt)("p",null,"We are starting to work on the Babel 8.0.0 release in our umbrella issue: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/babel/babel/issues/10746"},"#10746"),"."),(0,i.kt)("p",null,"Babel 8 will only contain breaking changes: we will release a minor version the same day, containing all the bug fixes and new features that would otherwise be released in 8.0.0."),(0,i.kt)("p",null,"While we don't anticipate a huge migration path, there are two issues which we want to bring to your attention:"),(0,i.kt)("h3",{id:"extract-targets-parser-and-compat-data-from-preset-env-10899"},"Extract targets parser and compat data from preset-env (",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/babel/babel/pull/10899"},"#10899"),")"),(0,i.kt)("p",null,"Various 3rd party presets are currently using ",(0,i.kt)("inlineCode",{parentName:"p"},"@babel/preset-env"),"'s internal logic to parse compilation targets or to retrieve information about necessary plugins and polyfills."),(0,i.kt)("p",null,"We have decided to officially support these two use cases by providing two new public packages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"@babel/helper-compilation-targets"),", which exports a function to normalize the specified targets and a few other related utilities:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'import getTargets from "@babel/helper-compilation-targets";\n\ngetTargets({\n  browsers: ["last 2 chrome versions"],\n  node: 10,\n}) ==\n  {\n    chrome: "77.0.0",\n    node: "10.0.0",\n  };\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"@babel/compat-data"),", which contains a collection of JSON files where we store all the browsers versions for which each plugin or ",(0,i.kt)("inlineCode",{parentName:"p"},"core-js@2")," polyfill is required. It's mostly generated from ",(0,i.kt)("a",{parentName:"p",href:"https://kangax.github.io/compat-table/"},(0,i.kt)("inlineCode",{parentName:"a"},"compat-table")),", but we might add other data sources in the future.\nIf you need data for ",(0,i.kt)("inlineCode",{parentName:"p"},"core-js@3")," polyfills, you can use ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/core-js-compat"},(0,i.kt)("inlineCode",{parentName:"a"},"core-js-compat")),"."))),(0,i.kt)("p",null,"We plan to disallow using internal files starting from Babel 8. If you are relying on other internal APIs, please let us know!"),(0,i.kt)("h3",{id:"introduce-opt-in-stricter-ast-validation-10917"},"Introduce opt-in stricter AST validation (",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/babel/babel/pull/10917"},"#10917"),")"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@babel/types")," already performs many checks to ensure that the AST you are building is valid. For example, this code will throw because you can't use a statement in place of an expression:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'// foo = if (true) {}\n\nt.assignmentExpression(\n  "=",\n  t.identifier("foo"),\n  t.ifStatement(t.booleanLiteral(true), t.blockStatement([]))\n);\n')),(0,i.kt)("p",null,"We are introducing stricter validation to prevent even more invalid ASTs: not only from a tree shape point of view but also ensuring that nodes in the correct position carry valid information. For example, starting from Babel 8 ",(0,i.kt)("inlineCode",{parentName:"p"},'t.identifier("123")')," will be disallowed, because ",(0,i.kt)("inlineCode",{parentName:"p"},"123")," is not a valid identifier."),(0,i.kt)("p",null,"We can't enable these checks in Babel 7.8.0 because the risk of breaking existing plugins is too high, but we highly encourage you to enable these stricter checks using the ",(0,i.kt)("inlineCode",{parentName:"p"},"BABEL_TYPES_8_BREAKING=true")," environment variable and open issues (or better, PRs!) to fix the plugins that you are using which won't work with Babel 8."))}h.isMDXComponent=!0}}]);