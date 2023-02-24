"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9289],{35318:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,h=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return a?n.createElement(h,s(s({ref:t},c),{},{components:a})):n.createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[m]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<l;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},18691:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var n=a(25773),r=a(30808),l=(a(27378),a(35318)),s=["components"],o={layout:"post",title:"5.0.0 Released",author:"Sebastian McKenzie",authorURL:"https://twitter.com/sebmck",date:new Date("2015-03-31T10:00:00.000Z"),categories:"announcements",share_text:"5.0.0 Released"},i=void 0,p={permalink:"/babel-website/blog/2015/03/31/5.0.0",source:"@site/blog/2015-03-31-5.0.0.md",title:"5.0.0 Released",description:"In the past few months Babel has been welcomed into several major communities",date:"2015-03-31T10:00:00.000Z",formattedDate:"March 31, 2015",tags:[],readingTime:8.005,hasTruncateMarker:!0,authors:[{name:"Sebastian McKenzie",url:"https://twitter.com/sebmck"}],frontMatter:{layout:"post",title:"5.0.0 Released",author:"Sebastian McKenzie",authorURL:"https://twitter.com/sebmck",date:"2015-03-31T10:00:00.000Z",categories:"announcements",share_text:"5.0.0 Released"},prevItem:{title:"Function Bind Syntax",permalink:"/babel-website/blog/2015/05/14/function-bind"},nextItem:{title:"Babel <3 React",permalink:"/babel-website/blog/2015/02/23/babel-loves-react"}},c={authorsImageUrls:[void 0]},m=[{value:"TC39 Process",id:"tc39-process",level:3},{value:"New Proposals",id:"new-proposals",level:2},{value:"Stage 0: Class Properties",id:"stage-0-class-properties",level:3},{value:"Stage 1: Decorators",id:"stage-1-decorators",level:3},{value:"Stage 1: Export Extensions",id:"stage-1-export-extensions",level:3},{value:"React Optimisations",id:"react-optimisations",level:2},{value:"Constant Elements",id:"constant-elements",level:3},{value:"Inline Elements",id:"inline-elements",level:3},{value:".babelrc",id:"babelrc",level:2},{value:"Plugin API",id:"plugin-api",level:2},{value:"Experimental Option",id:"experimental-option",level:3},{value:"<code>returnUsedHelpers</code> option",id:"returnusedhelpers-option",level:3},{value:"Class Changes",id:"class-changes",level:3},{value:"Removed Features",id:"removed-features",level:2},{value:"Imports are now hoisted",id:"imports-are-now-hoisted",level:2}],u={toc:m};function d(e){var t=e.components,a=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"In the past few months Babel has been welcomed into several major communities\nsuch as Node, React, Ember, Backbone, Angular, Rails, and many others. We\nlaunched the ",(0,l.kt)("a",{parentName:"p",href:"/users"},"Users page")," only a few weeks ago and it's really cool to\nsee everyone that is using it. Companies like CloudFlare, Netflix, Mozilla, and\nYahoo!. Projects like Ghost, Atom, Mapbox, and so many more."),(0,l.kt)("p",null,"We've seen tons of blog posts, talks, events, courses all about ES6+ using\nBabel, and official Babel tools have been downloaded nearly 2 million times."),(0,l.kt)("p",null,"Today we are making by far the largest release of Babel ever."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"If you're upgrading from Babel 4.x please see the\n",(0,l.kt)("a",{parentName:"strong",href:"#breaking-changes"},"breaking changes")),"."),(0,l.kt)("p",null,"This release includes the new ES7 proposals:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/wycats/javascript-decorators"},"Decorators")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://gist.github.com/jeffmo/054df782c05639da2adb"},"Class properties")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/leebyron/ecmascript-more-export-from"},"Export extensions"))),(0,l.kt)("p",null,"The entire internal traversal and transformation pipeline has undergone a\nrewrite that substantially increases flexibility and will allow many future\npipeline performance optimisations."),(0,l.kt)("p",null,"This release also brings a plugin API, this allows consumers to plug in their\nown custom transformers to utilise the powerful transformation mechanisms that\nBabel has to offer."),(0,l.kt)("p",null,"You can view the complete CHANGELOG\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/babel/babel/blob/main/.github/CHANGELOG-v5.md#500"},"here"),"."),(0,l.kt)("p",null,"And as usual ",(0,l.kt)("strong",{parentName:"p"},"if you run into any regressions please report them immediately"),"."),(0,l.kt)("h3",{id:"tc39-process"},"TC39 Process"),(0,l.kt)("p",null,"In this release you'll start to see us aligned with the\n",(0,l.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1QbEE0BsO4lvl7NFTn5WXWeiEIBfaVUF7Dk0hpPpPDzU"},"TC39 process"),".\nThe TC39 is the technical committee from ECMA that writes the ECMAScript\nstandard. Their process is categorised into 5 stages:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Stage 0 - Strawman"),(0,l.kt)("li",{parentName:"ul"},"Stage 1 - Proposal"),(0,l.kt)("li",{parentName:"ul"},"Stage 2 - Draft"),(0,l.kt)("li",{parentName:"ul"},"Stage 3 - Candidate"),(0,l.kt)("li",{parentName:"ul"},"Stage 4 - Finished")),(0,l.kt)("p",null,"Proposals that are ",(0,l.kt)("strong",{parentName:"p"},"stage 2 or above")," are enabled in Babel by default. Now\nthis does not mean that they're guaranteed to be included in future ECMAScript\nspecifications or even Babel itself. Stage 2 is considered a good point for\ninclusion by default in Babel due to their relative maturity and need for\ncritical proposal feedback."),(0,l.kt)("p",null,"Now let's dive into the changes we made to 5.0."),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Contents:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#new-features"},"New Features"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#new-proposals"},"New Proposals"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#stage-0:-class-properties"},"Stage 0: Class Properties")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#stage-1:-decorators"},"Stage 1: Decorators")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#stage-1:-export-extensions"},"Stage 1: Export Extensions")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#react-optimisations"},"React Optimisations"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#constant-elements"},"Constant Elements")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#inline-elements"},"Inline Elements")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#babelrc"},".babelrc")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#plugin-api"},"Plugin API")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#breaking-changes"},"Breaking Changes"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#experimental-option"},"Experimental Option")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#class-changes"},"Class Changes")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#removed-features"},"Removed Features")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#imports-are-now-hoisted"},"imports are now hoisted"))))),(0,l.kt)("h1",{id:"new-features",class:"babel-blog-section-title"},"New Features"),(0,l.kt)("h2",{id:"new-proposals"},"New Proposals"),(0,l.kt)("h3",{id:"stage-0-class-properties"},"Stage 0: Class Properties"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/jeffmo"},"Jeff Morrison's")," stage 0\n",(0,l.kt)("a",{parentName:"p",href:"https://gist.github.com/jeffmo/054df782c05639da2adb"},"class property initializers proposal"),"\nfills the void of property composition on classes. These are analogous with the\nclass properties example listed in the\n",(0,l.kt)("a",{parentName:"p",href:"https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#es7-property-initializers"},"React 0.13 beta announcement"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'class Person {\n  firstName = "Sebastian";\n  static lastName = "McKenzie";\n}\n\nassert(new Person().firstName, "Sebastian");\nassert(Person.lastName, "McKenzie");\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'require("babel").transform("code", {\n  optional: ["es7.classProperties"]\n});\n// or\nrequire("babel").transform("code", { stage: 0 });\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Shell"',title:'"Shell"'},"$ babel --optional es7.classProperties script.js\n# or\n$ babel --stage 0 script.js\n")),(0,l.kt)("h3",{id:"stage-1-decorators"},"Stage 1: Decorators"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/wycats"},"Yehuda Katz'")," stage 1\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/wycats/javascript-decorators"},"decorators proposal")," allows\nyou to elegantly compose property descriptors and metadata decoration. In the\nfuture this will allow the powerful\n",(0,l.kt)("a",{parentName:"p",href:"http://guides.emberjs.com/v1.10.0/object-model/classes-and-instances/"},"Ember Object Model"),"\nto easily be represented with native classes."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'function concat(...args) {\n  let sep = args.pop();\n\n  return function(target, key, descriptor) {\n    descriptor.initializer = function() {\n      return args.map(arg => this[arg]).join(sep);\n    }\n  }\n}\n\nfunction autobind(target, key, descriptor) {\n  var fn = descriptor.value;\n  delete descriptor.value;\n  delete descriptor.writable;\n  descriptor.get = function () {\n    var bound = fn.bind(this);\n    Object.defineProperty(this, key, {\n      configurable: true,\n      writable: true,\n      value: bound\n    });\n    return bound;\n  };\n}\n\nclass Person {\n  firstName = "Sebastian";\n  lastName = "McKenzie";\n\n  @concat("firstName", "lastName", " ") fullName;\n  @concat("lastName", "firstName", ", ") formalName;\n\n  @autobind\n  getFullName() {\n    return `${this.firstName} ${this.lastName}`;\n  }\n}\n\nassert(new Person().fullName, "Sebastian McKenzie");\nassert(new Person().formalName, "McKenzie, Sebastian");\nassert(new Person().getFullName.call(null), "Sebastian McKenzie");\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'require("babel").transform("code", {\n  optional: ["es7.decorators"]\n});\n// or\nrequire("babel").transform("code", { stage: 1 });\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Shell"',title:'"Shell"'},"$ babel --optional es7.decorators script.js\n# or\n$ babel --stage 1 script.js\n")),(0,l.kt)("h3",{id:"stage-1-export-extensions"},"Stage 1: Export Extensions"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/leebyron"},"Lee Byron's")," stage 1\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/leebyron/ecmascript-more-export-from"},"additional export-from statements proposal"),"\ncompletes the symmetry between import and export statement, allowing you to\neasily export namespaces and defaults from external modules without\nmodifying the local scope."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Exporting a default")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'export foo from "bar";\n')),(0,l.kt)("p",null,"equivalent to:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'import _foo from "bar";\nexport { _foo as foo };\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Exporting a namespace")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'export * as ns from "mod";\n')),(0,l.kt)("p",null,"equivalent to:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'import * as _ns from "mod";\nexport { _ns as ns };\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'require("babel").transform("code", {\n  optional: ["es7.exportExtensions"]\n});\n// or\nrequire("babel").transform("code", { stage: 1 });\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Shell"',title:'"Shell"'},"$ babel --optional es7.exportExtensions script.js\n# or\n$ babel --stage 1 script.js\n")),(0,l.kt)("h2",{id:"react-optimisations"},"React Optimisations"),(0,l.kt)("p",null,"In preparation for React 0.14, Babel supports some optimisation transformers for\nJSX."),(0,l.kt)("h3",{id:"constant-elements"},(0,l.kt)("a",{parentName:"h3",href:"https://github.com/facebook/react/issues/3226"},"Constant Elements")),(0,l.kt)("p",null,"Starting with 0.14 ReactElements and their props objects can be treated as\nvalue types. i.e. any instance is conceptually equivalent if all their values\nare the same."),(0,l.kt)("p",null,"Take this function for example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'import React from "react";\n\nfunction render() {\n  return <div className="foo" />;\n}\n')),(0,l.kt)("p",null,"This can be optimized by moving the JSX out of the function body so that each\ntime it is called the same instance is returned:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'import React from "react";\n\nvar _ref = <div className="foo" />;\n\nfunction render() {\n  return _ref;\n}\n')),(0,l.kt)("p",null,"Not only does it allow us to reuse the same objects, React will automatically\nbail out any reconciliation of constant components - without a manual\n",(0,l.kt)("inlineCode",{parentName:"p"},"shouldComponentUpdate"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'require("babel").transform("code", {\n  optional: ["optimisation.react.constantElements"]\n});\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Shell"',title:'"Shell"'},"$ babel --optional optimisation.react.constantElements script.js\n")),(0,l.kt)("h3",{id:"inline-elements"},(0,l.kt)("a",{parentName:"h3",href:"https://github.com/facebook/react/issues/3228"},"Inline Elements")),(0,l.kt)("blockquote",{class:"alert alert--warning"},(0,l.kt)("h4",null,"Production only"),(0,l.kt)("p",null,"Inline Elements should ",(0,l.kt)("strong",null,"only")," be enabled in production as multiple React warning messages are suppressed which is extremely risky in development.")),(0,l.kt)("p",null,"Starting with React 0.14 ReactElements can be inlined:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'<div className="foo">{bar}<Baz key="baz" /></div>\n')),(0,l.kt)("p",null,"as objects:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"{ type: 'div', props: { className: 'foo', children:\n  [ bar, { type: Baz, props: { }, key: 'baz', ref: null } ]\n}, key: null, ref: null }\n")),(0,l.kt)("p",null,"This improves performance over the existing ",(0,l.kt)("inlineCode",{parentName:"p"},"React.createElement")," call by\ninlining the result of it."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'require("babel").transform("code", {\n  optional: ["optimisation.react.inlineElements"]\n});\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Shell"',title:'"Shell"'},"$ babel --optional optimisation.react.inlineElements script.js\n")),(0,l.kt)("h2",{id:"babelrc"},".babelrc"),(0,l.kt)("p",null,"Babel 5.0.0 has support for ",(0,l.kt)("inlineCode",{parentName:"p"},".babelrc")," out of the box across its ",(0,l.kt)("strong",{parentName:"p"},"entire"),"\nrange of integrations. This means that it will work across\n",(0,l.kt)("a",{parentName:"p",href:"/docs/babel-register"},(0,l.kt)("inlineCode",{parentName:"a"},"babel/register")),",\n",(0,l.kt)("a",{parentName:"p",href:"/docs/babel-node"},(0,l.kt)("inlineCode",{parentName:"a"},"babel-node"))," as well as across the entire range\nof build system plugins and module loaders such as\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/babel/babel-loader"},(0,l.kt)("inlineCode",{parentName:"a"},"babel-loader")),",\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/babel/babelify"},(0,l.kt)("inlineCode",{parentName:"a"},"babelify")),", and others."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},".babelrc")," is equivalent to JSHint's ",(0,l.kt)("a",{parentName:"p",href:"http://jshint.com/docs/"},(0,l.kt)("inlineCode",{parentName:"a"},".jshintrc"))," and\nJSCS' ",(0,l.kt)("a",{parentName:"p",href:"http://jscs.info/overview.html"},(0,l.kt)("inlineCode",{parentName:"a"},".jscsrc")),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="JSON"',title:'"JSON"'},'{\n  "stage": 1,\n  "ignore": [\n    "foo.js",\n    "bar/**/*.js"\n  ]\n}\n')),(0,l.kt)("p",null,"See the ",(0,l.kt)("a",{parentName:"p",href:"/docs/options"},"docs")," for more info."),(0,l.kt)("h2",{id:"plugin-api"},"Plugin API"),(0,l.kt)("p",null,"5.0.0 also introduces the long anticipated plugin API. This allows you to hook\ninto the powerful traversal and transformation internals of Babel. See the\n",(0,l.kt)("a",{parentName:"p",href:"/docs/plugins"},"docs")," for more info."),(0,l.kt)("h1",{id:"breaking-changes",class:"babel-blog-section-title"},"Breaking Changes"),(0,l.kt)("h3",{id:"experimental-option"},"Experimental Option"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"experimental")," option has been ",(0,l.kt)("strong",{parentName:"p"},"removed"),". Fear not though, there is a\nreplacement. Babel now categories the ES7 transformers by\n",(0,l.kt)("a",{parentName:"p",href:"#tc39-changes"},"TC39 stages"),"."),(0,l.kt)("p",null,"tl;dr If you're using the ",(0,l.kt)("inlineCode",{parentName:"p"},"experimental")," option, simply change it to\n",(0,l.kt)("inlineCode",{parentName:"p"},"$ babel --stage 0")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"{ stage: 0 }"),"."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Reminder:")," Proposals that are ",(0,l.kt)("strong",{parentName:"p"},"stage 2 or above")," are enabled by default.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Stage 0")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"es7.classProperties")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"es7.comprehensions"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Stage 1")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"es7.asyncFunctions")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"es7.decorators")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"es7.exportExtensions")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"es7.objectRestSpread"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Stage 2")," (Stage 2 and above are enabled by default)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"es7.exponentiationOperator"))),(0,l.kt)("p",null,"For a list of all current ES7 proposals please see the\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/tc39/ecma262"},"tc39/ecma262 repo"),"."),(0,l.kt)("h3",{id:"returnusedhelpers-option"},(0,l.kt)("inlineCode",{parentName:"h3"},"returnUsedHelpers")," option"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"returnUsedHelpers")," option has been renamed to ",(0,l.kt)("inlineCode",{parentName:"p"},"metadataUsedHelpers")," and the returning result\nobject has been changed from ",(0,l.kt)("inlineCode",{parentName:"p"},"usedHelpers")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"metadata.usedHelpers"),"."),(0,l.kt)("h3",{id:"class-changes"},"Class Changes"),(0,l.kt)("p",null,"5.0.0 introduces some updated derived class semantics that are long overdue."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"super()")," ",(0,l.kt)("strong",{parentName:"p"},"must")," be called in a derived class constructor."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"class Foo extends Bar {\n  constructor() {\n    // no `super();`\n  }\n}\n")),(0,l.kt)("p",null,"Access to ",(0,l.kt)("inlineCode",{parentName:"p"},"this")," before ",(0,l.kt)("inlineCode",{parentName:"p"},"super()")," in a derived class constructor is ",(0,l.kt)("strong",{parentName:"p"},"not"),"\nallowed."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"class Foo extends Bar {\n  constructor() {\n    this.foo; // `this` access before `super();`\n    super();\n  }\n}\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"super()")," is ",(0,l.kt)("strong",{parentName:"p"},"only")," allowed in derived class constructors."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"class Foo {\n  constructor() {\n    super(); // not in a derived constructor\n  }\n}\n")),(0,l.kt)("h2",{id:"removed-features"},"Removed Features"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The playground has been removed so development can be focussed on mainstream\nES features and proposals. This also reduces the risk of syntactic conflicts\npreventing certain official features from being implemented."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/zenparsing/es-abstract-refs"},"Abstract references")," have\nbeen removed as the proposal has been superseded. Support for one or more of the\nsuperseding proposals may be implemented in the future.")),(0,l.kt)("hr",null),(0,l.kt)("p",null,"In closing, we hope that you are now as excited about this release as we are.\nThere's a lot that went into it, and we believe this will set us up for a long\ntime into the future."),(0,l.kt)("p",{class:"text-right"},"\u2014 The Babel team"),(0,l.kt)("h2",{id:"imports-are-now-hoisted"},"Imports are now hoisted"),(0,l.kt)("p",null,"In ",(0,l.kt)("inlineCode",{parentName:"p"},"4.x"),", imports were inlined as where they appeared in the code. Which means that this code:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"global.test = 'test'\nimport './test'\n")),(0,l.kt)("p",null,"would compile to:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"'use strict';\n\nglobal.test = 'test';\nrequire('./test');\n")),(0,l.kt)("p",null,"However, from ",(0,l.kt)("inlineCode",{parentName:"p"},"5.x")," on, this behaviour has been changed in order to comply with the ES6 spec and ",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("a",{parentName:"em",href:"https://gitter.im/babel/babel?at=5525474d80f7bb0315a369ce"},"imports will")," ",(0,l.kt)("a",{parentName:"em",href:"https://stackoverflow.com/questions/29329662/are-es6-module-imports-hoisted"},"now be hoisted")),". What this means in practical code is that the snippet above will get converted to something like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"'use strict';\n\nrequire('./test');\nglobal.test = 'test';\n")),(0,l.kt)("p",null,"If your code required certain bits and pieces to be executed in between a specific module being imported -which might be the case while testing code and you need to fake some ",(0,l.kt)("inlineCode",{parentName:"p"},"window")," properties :)- you may want to extract that away into its own file and import it before the code that needs it."))}d.isMDXComponent=!0}}]);