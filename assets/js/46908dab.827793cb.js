"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9800],{35318:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(27378);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=o,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},99925:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var n=a(25773),o=a(30808),r=(a(27378),a(35318)),i=["components"],l={layout:"post",title:"Zero-config code transformation with babel-plugin-macros",author:"Kent C. Dodds",authorURL:"https://twitter.com/kentcdodds",date:new Date("2017-09-11T11:00:00.000Z"),categories:"announcements",share_text:"Zero-config code transformation with babel-plugin-macros",custom_js_with_timestamps:["docs.js"],guest_post:!0,guest_description:'This is a guest post from Kent C. Dodds. Kent works at PayPal and\nteaches about JavaScript and <a href="https://kentcdodds.com/workshops/#code-transformation-and-linting">writing Babel plugins</a>\non <a href="http://kcd.im/egghead">Egghead.io</a> and <a href="https://frontendmasters.com/courses/">Frontend Masters</a>.\nFollow Kent on <a href="https://github.com/kentcdodds">GitHub</a>,\nand <a href="https://twitter.com/kentcdodds">Twitter</a>.\n'},s=void 0,p={permalink:"/babel-website/blog/2017/09/11/zero-config-with-babel-macros",source:"@site/blog/2017-09-11-zero-config-with-babel-macros.md",title:"Zero-config code transformation with babel-plugin-macros",description:"Babel started out as a transpiler to let you write the latest version of the ECMAScript specification but ship to environments that don't implement those features yet. But it has become much more than that. \"Compilers are the New Frameworks\" says Tom Dale and I could not agree more. We're seeing more and more compile-time optimizations for libraries and frameworks. I'm not talking about syntax extensions to the language, but simple code transformations that enable patterns that would be difficult to accomplish otherwise.",date:"2017-09-11T11:00:00.000Z",formattedDate:"September 11, 2017",tags:[],readingTime:4.785,hasTruncateMarker:!0,authors:[{name:"Kent C. Dodds",url:"https://twitter.com/kentcdodds"}],frontMatter:{layout:"post",title:"Zero-config code transformation with babel-plugin-macros",author:"Kent C. Dodds",authorURL:"https://twitter.com/kentcdodds",date:"2017-09-11T11:00:00.000Z",categories:"announcements",share_text:"Zero-config code transformation with babel-plugin-macros",custom_js_with_timestamps:["docs.js"],guest_post:!0,guest_description:'This is a guest post from Kent C. Dodds. Kent works at PayPal and\nteaches about JavaScript and <a href="https://kentcdodds.com/workshops/#code-transformation-and-linting">writing Babel plugins</a>\non <a href="http://kcd.im/egghead">Egghead.io</a> and <a href="https://frontendmasters.com/courses/">Frontend Masters</a>.\nFollow Kent on <a href="https://github.com/kentcdodds">GitHub</a>,\nand <a href="https://twitter.com/kentcdodds">Twitter</a>.\n'},prevItem:{title:"Planning for 7.0",permalink:"/babel-website/blog/2017/09/12/planning-for-7.0"},nextItem:{title:"Contributing to Babel: Three Lessons to Remember",permalink:"/babel-website/blog/contributing-to-babel-three-lessons-to-remember"}},c={authorsImageUrls:[void 0]},m=[{value:"Introducing <code>babel-plugin-macros</code> \ud83c\udfa3",id:"introducing-babel-plugin-macros-",level:2},{value:"Another example",id:"another-example",level:3},{value:"Conclusion",id:"conclusion",level:2}],u={toc:m},d="wrapper";function h(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Babel started out as a transpiler to let you write the latest version of the ECMAScript specification but ship to environments that don't implement those features yet. But it has become much more than that. ",(0,r.kt)("a",{parentName:"p",href:"https://tomdale.net/2017/09/compilers-are-the-new-frameworks/"},'"Compilers are the New Frameworks"')," says ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/tomdale"},"Tom Dale")," and I could not agree more. We're seeing more and more compile-time optimizations for libraries and frameworks. I'm not talking about syntax extensions to the language, but simple code transformations that enable patterns that would be difficult to accomplish otherwise."),(0,r.kt)("p",null,"One of my favorite things about compiler plugins is that you can use them to optimize the user experience and developer experience at the same time. (Read more about ",(0,r.kt)("a",{parentName:"p",href:"https://kentcdodds.com/blog/how-writing-custom-babel-and-eslint-plugins-can-increase-productivity-and-improve-user-experience"},'"How writing custom Babel & ESLint plugins can increase productivity & improve user experience"'),")."),(0,r.kt)("p",null,"I have a few problems with Babel plugins though:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"They can lead to confusion because when looking at code in a project, you might not know that there's a plugin transforming that code."),(0,r.kt)("li",{parentName:"ol"},"They have to be globally configured or configured out-of-band (in a ",(0,r.kt)("inlineCode",{parentName:"li"},".babelrc")," or webpack config)."),(0,r.kt)("li",{parentName:"ol"},"They can conflict in very confusing ways due to the fact that all babel plugins run simultaneously (on a single walk of Babel's AST).")),(0,r.kt)("p",null,"These problems could be solved if we could import Babel plugins and apply them directly to our code. This would mean the transformation is more explicit, we wouldn't need to add them to configuration, and ordering can happen in the order the plugins are imported. Wouldn't that be cool!?!?"),(0,r.kt)("h2",{id:"introducing-babel-plugin-macros-"},"Introducing ",(0,r.kt)("a",{parentName:"h2",href:"https://github.com/kentcdodds/babel-plugin-macros"},(0,r.kt)("inlineCode",{parentName:"a"},"babel-plugin-macros"))," \ud83c\udfa3"),(0,r.kt)("p",null,"Guess what! A tool like this exists! ",(0,r.kt)("inlineCode",{parentName:"p"},"babel-plugin-macros")," is a new Babel plugin that allows you to do exactly what we're talking about. It's a \"new\" approach to code transformation. It enables you to have zero-config, importable code transformations. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/threepointone/babel-plugin-macros"},"The idea")," came from ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/threepointone"},"Sunil Pai")," and caught my attention in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebookincubator/create-react-app/issues/2730"},"this create-react-app issue"),"."),(0,r.kt)("p",null,"So what does it look like? Whelp! There are already a few ",(0,r.kt)("inlineCode",{parentName:"p"},"babel-plugin-macros")," packages out there you can try today!"),(0,r.kt)("p",null,"Here's a real-world example of using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kentcdodds/preval.macro"},(0,r.kt)("inlineCode",{parentName:"a"},"preval.macro"))," to inline an SVG in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kentcdodds/glamorous-website"},"a universal application")," built with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zeit/next.js"},"Next.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"// search.js\n// this file runs in the browser\nimport preval from 'preval.macro'\nimport glamorous from 'glamorous'\n\nconst base64SearchSVG = preval.require('./search-svg')\n// this will be transpiled to something like:\n// const base64SearchSVG = 'PD94bWwgdmVyc2lv...etc...')\n\nconst SearchBox = glamorous.input('algolia_searchbox', props => ({\n  backgroundImage: `url(\"data:image/svg+xml;base64,${base64SearchSVG}\")`,\n  // ...\n}))\n\n\n// search-svg.js\n// this file runs at build-time only\n// because it's required using preval.require function, which is a macro!\nconst fs = require('fs')\nconst path = require('path')\n\nconst svgPath = path.join(__dirname, 'svgs/search.svg')\nconst svgString = fs.readFileSync(svgPath, 'utf8')\nconst base64String = new Buffer(svgString).toString('base64')\n\nmodule.exports = base64String\n")),(0,r.kt)("p",null,"What's cool about this? Well, the alternative would look exactly like the example above except:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"It's less explicit because there would be no ",(0,r.kt)("inlineCode",{parentName:"li"},"import preval from 'preval.macro'")," in the source code."),(0,r.kt)("li",{parentName:"ol"},"Have to add ",(0,r.kt)("inlineCode",{parentName:"li"},"babel-plugin-preval")," to your babel configuration."),(0,r.kt)("li",{parentName:"ol"},"Need to update your ESLint config to allow for the ",(0,r.kt)("inlineCode",{parentName:"li"},"preval")," variable as a global."),(0,r.kt)("li",{parentName:"ol"},"If you misconfigured ",(0,r.kt)("inlineCode",{parentName:"li"},"babel-plugin-preval")," you'd get a cryptic ",(0,r.kt)("strong",{parentName:"li"},"runtime")," error like: ",(0,r.kt)("inlineCode",{parentName:"li"},"Uncaught ReferenceError: preval is not defined"),".")),(0,r.kt)("p",null,"By using ",(0,r.kt)("inlineCode",{parentName:"p"},"preval.macro")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"babel-plugin-macros"),", we don't have any of those problems because:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The import is there and used explicitly."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"babel-plugin-macros")," needs to be added to your config, but only once, then you can use all the macros you'd like (even local macros!)"),(0,r.kt)("li",{parentName:"ol"},"No need to update ESLint config because it's explicit."),(0,r.kt)("li",{parentName:"ol"},"If you misconfigure ",(0,r.kt)("inlineCode",{parentName:"li"},"babel-plugin-macros")," then you'll get ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kentcdodds/babel-plugin-macros/blob/f7c9881ee22b19b3c53c93711af6a42895ba1c71/src/__tests__/__snapshots__/index.js.snap#L100"},"a much more friendly ",(0,r.kt)("strong",{parentName:"a"},"compile time")," error message")," that indicates what the actual problem is pointing you to documentation.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"So what is it really? The TL;DR is that ",(0,r.kt)("inlineCode",{parentName:"strong"},"babel-plugin-macros")," is a simpler way to write and use Babel transforms.")),(0,r.kt)("p",null,"There are already several ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/browse/keyword/babel-plugin-macros"},"published ",(0,r.kt)("inlineCode",{parentName:"a"},"babel-plugin-macros"))," you can use, including ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kentcdodds/preval.macro"},(0,r.kt)("inlineCode",{parentName:"a"},"preval.macro")),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kentcdodds/codegen.macro"},(0,r.kt)("inlineCode",{parentName:"a"},"codegen.macro")),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dralletje/idx.macro"},(0,r.kt)("inlineCode",{parentName:"a"},"idx.macro")),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/emotion-js/emotion/blob/master/docs/babel.md#babel-macros"},(0,r.kt)("inlineCode",{parentName:"a"},"emotion/macro")),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/vinhlh/tagged-translations#via-babel-macros"},(0,r.kt)("inlineCode",{parentName:"a"},"tagged-translations/macro")),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mattphillips/babel-plugin-console#macros"},(0,r.kt)("inlineCode",{parentName:"a"},"babel-plugin-console/scope.macro")),", and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/threepointone/glamor/pull/312"},(0,r.kt)("inlineCode",{parentName:"a"},"glamor")," \ud83d\udd1c"),"."),(0,r.kt)("h3",{id:"another-example"},"Another example"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"babel-plugin-macros")," is a way to have no config for non-syntax babel plugins. So many existing babel plugins could be implemented as a macro. Here's another example of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mattphillips/babel-plugin-console"},(0,r.kt)("inlineCode",{parentName:"a"},"babel-plugin-console"))," which exposes ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mattphillips/babel-plugin-console/blob/master/README.md#macros"},"a macro version of itself"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"import scope from 'babel-plugin-console/scope.macro'\n\nfunction add100(a) {\n  const oneHundred = 100\n  scope('Add 100 to another number')\n  return add(a, oneHundred)\n}\n\nfunction add(a, b) {\n  return a + b;\n}\n")),(0,r.kt)("p",null,"Now, when that code is run, the ",(0,r.kt)("inlineCode",{parentName:"p"},"scope")," function does some pretty nifty things:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Browser:")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/mattphillips/babel-plugin-console/raw/53536cba919d5be49d4f66d957769c07ca7a4207/assets/add100-chrome.gif",alt:"Browser console scoping add100"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Node:")),(0,r.kt)("img",{alt:"Node console scoping add100",src:"https://github.com/mattphillips/babel-plugin-console/raw/53536cba919d5be49d4f66d957769c07ca7a4207/assets/add100-node.png",width:"372"}),(0,r.kt)("p",null,"Cool right? And using it is just like using any other dependency, except it has all the benefits mentioned above."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"I think we've only begun to scratch the surface of what ",(0,r.kt)("inlineCode",{parentName:"p"},"babel-plugin-macros")," can do. I'm hoping that we can land it in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebookincubator/create-react-app/issues/2730"},"create-react-app")," so folks using ",(0,r.kt)("inlineCode",{parentName:"p"},"create-react-app")," can have even more power with zero configuration. I'm really excited to see more Babel plugins expose a ",(0,r.kt)("inlineCode",{parentName:"p"},"macro")," in addition to the existing plugin functionality they already have. I can't wait to see folks create macros that are specific to their project needs."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Creating a macros is even easier than a regular Babel plugin"),", but it does require a bit of knowledge around ASTs and Babel. If this is new to you, there are ",(0,r.kt)("a",{parentName:"p",href:"https://kentcdodds.com/talks/#writing-custom-babel-and-eslint-plugins-with-asts"},"a"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/thejameskyle/babel-handbook"},"few"),", ",(0,r.kt)("a",{parentName:"p",href:"https://kentcdodds.com/workshops/#code-transformation-and-linting"},"resources")," for you \ud83d\ude00"),(0,r.kt)("p",null,"Good luck to you all! \ud83d\udc4b"),(0,r.kt)("p",null,"P.S. I should mention that language macros are not a new concept at all. Being able to teach a language new tricks has been around for a very long time. In fact, there's already ",(0,r.kt)("a",{parentName:"p",href:"http://sweetjs.org/"},"such a tool for JavaScript")," and even ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/codemix/babel-plugin-macros"},"one implemented as a Babel plugin already"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"babel-plugin-macros")," takes a slightly different approach however. While macros have often been associated with defining new syntax for a language, that's not the goal of ",(0,r.kt)("inlineCode",{parentName:"p"},"babel-plugin-macros")," at all. In the case of ",(0,r.kt)("inlineCode",{parentName:"p"},"babel-plugin-macros")," it's more about code transformations."))}h.isMDXComponent=!0}}]);