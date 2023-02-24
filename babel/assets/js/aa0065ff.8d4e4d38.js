"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9686],{35318:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(27378);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(a),h=o,d=c["".concat(p,".").concat(h)]||c[h]||m[h]||i;return a?n.createElement(d,r(r({ref:t},u),{},{components:a})):n.createElement(d,r({ref:t},u))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},23365:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var n=a(25773),o=a(30808),i=(a(27378),a(35318)),r=["components"],l={layout:"post",title:"7.10.0 Released: Class Fields in preset-env, '#private in' checks and better React tree-shaking",author:"Nicol\xf2 Ribaudo",authorURL:"https://twitter.com/NicoloRibaudo",date:new Date("2020-05-25T00:00:00.000Z"),categories:"announcements",share_text:"Babel 7.10.0 Released"},p=void 0,s={permalink:"/babel-website/blog/2020/05/25/7.10.0",source:"@site/blog/2020-05-25-7.10.0.md",title:"7.10.0 Released: Class Fields in preset-env, '#private in' checks and better React tree-shaking",description:"We just released a new minor version of Babel!",date:"2020-05-25T00:00:00.000Z",formattedDate:"May 25, 2020",tags:[],readingTime:8.275,hasTruncateMarker:!0,authors:[{name:"Nicol\xf2 Ribaudo",url:"https://twitter.com/NicoloRibaudo"}],frontMatter:{layout:"post",title:"7.10.0 Released: Class Fields in preset-env, '#private in' checks and better React tree-shaking",author:"Nicol\xf2 Ribaudo",authorURL:"https://twitter.com/NicoloRibaudo",date:"2020-05-25T00:00:00.000Z",categories:"announcements",share_text:"Babel 7.10.0 Released"},prevItem:{title:"The State of babel-eslint",permalink:"/babel-website/blog/2020/07/13/the-state-of-babel-eslint"},nextItem:{title:"7.9.0 Released: Smaller preset-env output, Typescript 3.8 support and a new JSX transform",permalink:"/babel-website/blog/2020/03/16/7.9.0"}},u={authorsImageUrls:[void 0]},c=[{value:"New features enabled by default",id:"new-features-enabled-by-default",level:2},{value:"Parsing for <code>import.meta</code>",id:"parsing-for-importmeta",level:3},{value:"Transforming <code>\u200bu{...}</code>-style Unicode escapes (#11377)",id:"transforming-u-style-unicode-escapes-11377",level:3},{value:"Class Properties and Private Methods to <code>shippedProposals</code> option of <code>@babel/preset-env</code> (#11451)",id:"class-properties-and-private-methods-to-shippedproposals-option-of-babelpreset-env-11451",level:3},{value:"Improved optional chaining <code>?.</code> ergonomics (#10961, #11248)",id:"improved-optional-chaining--ergonomics-10961-11248",level:2},{value:"Private Fields in <code>in</code> (#11372)",id:"private-fields-in-in-11372",level:2},{value:"Module Attributes parser support (#10962)",id:"module-attributes-parser-support-10962",level:2},{value:"Better tree-shaking for React components (#11428)",id:"better-tree-shaking-for-react-components-11428",level:2},{value:"New experimental polyfills architecture (#10008, <code>babel-polyfills</code>)",id:"new-experimental-polyfills-architecture-10008-babel-polyfills",level:2}],m={toc:c};function h(e){var t=e.components,a=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We just released a new minor version of Babel!"),(0,i.kt)("p",null,"This 7.10 release includes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Full support for the new Stage 1 proposal, ",(0,i.kt)("inlineCode",{parentName:"li"},"#prop in obj")," checks for private fields ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-private-fields-in-in"},"proposal"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@babel/preset-env")," now compiles ES2015-style Unicode escapes (",(0,i.kt)("inlineCode",{parentName:"li"},"\\u{Babe1}"),") to the equivalent legacy syntax (",(0,i.kt)("inlineCode",{parentName:"li"},"\\uDAAA\\uDFE1"),")."),(0,i.kt)("li",{parentName:"ul"},"Two improvements to the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-optional-chaining"},"Optional Chaining")," operator (",(0,i.kt)("inlineCode",{parentName:"li"},"?."),")"),(0,i.kt)("li",{parentName:"ul"},"Parser support for the new Stage 1 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-module-attributes"},"Module Attributes proposal")," (",(0,i.kt)("inlineCode",{parentName:"li"},'import a from "./a.json" with type: "json"'),")."),(0,i.kt)("li",{parentName:"ul"},"Better tree-shaking support for React code (i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"React.memo"),")!"),(0,i.kt)("li",{parentName:"ul"},"Setting up ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/babel/rfcs"},"RFCs")," repo and ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/babel/babel/discussions"},"GitHub Discussions")," pages!")),(0,i.kt)("p",null,"You can read the whole changelog ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/babel/babel/releases/tag/v7.10.0"},"on GitHub"),"."),(0,i.kt)("p",null,"Alongside this Babel release, we are releasing the first experimental version of our new ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/babel/babel-polyfills"},"polyfills compatibility architecture")," (see below for more details), thanks to ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/NicoloRibaudo"},"Nicol\xf2")," and some awesome folks in the community! We began discussions about this over a year ago in a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/babel/babel/issues/10008"},"RFC issue")," within the Babel repository."),(0,i.kt)("p",null,"As an aside, we now have an official RFC process for discussing changes that significantly impact our users: please check it out over in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/babel/rfcs"},(0,i.kt)("inlineCode",{parentName:"a"},"babel/rfcs"))," repository! In addition, we've enabled ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/babel/babel/discussions"},"GitHub Discussions")," on our repository if you have feedback or questions!"),(0,i.kt)("p",null,"If you or your company want to support Babel and the evolution of JavaScript, but aren't sure how, you can donate to us on our ",(0,i.kt)("a",{parentName:"p",href:"https://opencollective.com/babel"},"Open Collective")," and, better yet, work with us on the implementation of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/babel/proposals"},"new ECMAScript proposals")," directly! As a volunteer-driven project, we rely on the community's support to fund our efforts in supporting the wide range of JavaScript users. Reach out at ",(0,i.kt)("a",{parentName:"p",href:"mailto:team@babeljs.io"},"team@babeljs.io")," if you'd like to discuss more!"),(0,i.kt)("h2",{id:"new-features-enabled-by-default"},"New features enabled by default"),(0,i.kt)("h3",{id:"parsing-for-importmeta"},"Parsing for ",(0,i.kt)("inlineCode",{parentName:"h3"},"import.meta")),(0,i.kt)("p",null,"Now that it has reached Stage 4, ",(0,i.kt)("em",{parentName:"p"},"parsing")," for ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposal-import-meta"},(0,i.kt)("inlineCode",{parentName:"a"},"import.meta"))," is enabled by default, thanks to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kik-o"},"Kiko"),". Please note that ",(0,i.kt)("inlineCode",{parentName:"p"},"@babel/preset-env")," doesn't have any default support for ",(0,i.kt)("em",{parentName:"p"},"transforming")," it, because what that object contains is up to the engine and is not defined in the ECMAScript specification."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'console.log(import.meta); // { url: "file:///home/user/my-module.js" }\n')),(0,i.kt)("h3",{id:"transforming-u-style-unicode-escapes-11377"},"Transforming ",(0,i.kt)("code",null,"\\","\u200b","u{...}"),"-style Unicode escapes (",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/babel/babel/pull/11377"},"#11377"),")"),(0,i.kt)("p",null,"We also discovered that we didn't have support for compiling a 5-year-old ECMAScript feature: ",(0,i.kt)("inlineCode",{parentName:"p"},"\\u{...}"),"-style Unicode escapes! Thanks to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jridgewell"},"Justin"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"@babel/preset-env")," can now compile them in strings and identifiers by default."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://codesandbox.io/embed/beautiful-sammet-msuiw?fontsize=18&hidenavigation=1&theme=dark&view=preview"},"Example on CodeSandbox"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'var \\u{1d49c} = "\\u{Babe1}";\nconsole.log(\\u{1d49c});\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'var _ud835_udc9c = "\\uDAAA\\uDFE1";\nconsole.log(_ud835_udc9c);\n')),(0,i.kt)("h3",{id:"class-properties-and-private-methods-to-shippedproposals-option-of-babelpreset-env-11451"},"Class Properties and Private Methods to ",(0,i.kt)("inlineCode",{parentName:"h3"},"shippedProposals")," option of ",(0,i.kt)("inlineCode",{parentName:"h3"},"@babel/preset-env")," (",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/babel/babel/pull/11451"},"#11451"),")"),(0,i.kt)("p",null,"Lastly, thanks to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/JLHwung"},"J\xf9nli\xe0ng")," we have added ",(0,i.kt)("inlineCode",{parentName:"p"},"@babel/plugin-proposal-class-properties")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@babel/plugin-proposal-private-methods")," to the ",(0,i.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-preset-env#shippedproposals"},(0,i.kt)("inlineCode",{parentName:"a"},"shippedProposals"))," option of ",(0,i.kt)("inlineCode",{parentName:"p"},"@babel/preset-env"),". These proposals are not Stage 4 (i.e. part of the ECMAScript standard) yet, but they are already enabled by default in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposal-class-fields#implementations"},"many JavaScript engines"),"."),(0,i.kt)("p",null,"If you aren't familiar:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'class Bork {\n  // Public Fields\n  instanceProperty = "bork";\n  static staticProperty = "babelIsCool";\n  // Private Fields\n  #xValue = 0;\n  a() {\n    this.#xValue++;\n  }\n\n  // Private methods\n  get #x() { return this.#xValue; }\n  set #x(value) {\n    this.#xValue = value;\n  }\n  #clicked() {\n    this.#x++;\n  }\n}\n')),(0,i.kt)("p",null,"If you missed it from the last release, in 7.9 we added a new ",(0,i.kt)("a",{parentName:"p",href:"https://babeljs.io/blog/2020/03/16/7.9.0#babel-preset-env-s-bugfixes-option-11083-https-githubcom-babel-babel-pull-11083"},"option"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"bugfixes": true')," which can greatly reduce your code output."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'{\n  "presets": [\n    ["@babel/preset-env", {\n      "targets": { "esmodules": true }, // Use the targets that you was already using\n      "bugfixes": true // will be default in Babel 8\n    }]\n  ]\n}\n')),(0,i.kt)("h2",{id:"improved-optional-chaining--ergonomics-10961-11248"},"Improved optional chaining ",(0,i.kt)("inlineCode",{parentName:"h2"},"?.")," ergonomics (",(0,i.kt)("a",{parentName:"h2",href:"https://github.com/babel/babel/pull/10961"},"#10961"),", ",(0,i.kt)("a",{parentName:"h2",href:"https://github.com/babel/babel/pull/11248"},"#11248"),")"),(0,i.kt)("p",null,"In ",(0,i.kt)("a",{parentName:"p",href:"https://devblogs.microsoft.com/typescript/announcing-typescript-3-9/"},"TypeScript 3.9"),", the interaction between non-null assertions (postfix ",(0,i.kt)("inlineCode",{parentName:"p"},"!"),") and optional chaining ",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html#parsing-differences-in-optional-chaining-and-non-null-assertions"},"has been changed")," to make it more useful."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"foo?.bar!.baz\n")),(0,i.kt)("p",null,"In TypeScript 3.8 and Babel 7.9, the above would be read as ",(0,i.kt)("inlineCode",{parentName:"p"},"(foo?.bar)!.baz"),': "If ',(0,i.kt)("inlineCode",{parentName:"p"},"foo")," is not nullish, get ",(0,i.kt)("inlineCode",{parentName:"p"},".bar")," from it. Then trust that ",(0,i.kt)("inlineCode",{parentName:"p"},"foo?.bar")," is never nullish and always get ",(0,i.kt)("inlineCode",{parentName:"p"},".bar"),' from it". This means that when ',(0,i.kt)("inlineCode",{parentName:"p"},"foo")," is nullish that code would always throw, because we are trying to get ",(0,i.kt)("inlineCode",{parentName:"p"},".baz")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,i.kt)("p",null,"In TypeScript 3.9 and Babel 7.10, the code behaves similarly to ",(0,i.kt)("inlineCode",{parentName:"p"},"foo?.bar.baz"),': "If ',(0,i.kt)("inlineCode",{parentName:"p"},"foo")," is not nullish, get ",(0,i.kt)("inlineCode",{parentName:"p"},".bar.baz")," from it and trust me that ",(0,i.kt)("inlineCode",{parentName:"p"},"foo?.bar")," isn't nullish\". Thanks to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/macabeus"},"Bruno")," for helping to implement this!"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Additionally, the class fields proposal ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposal-class-fields/pull/301"},"recently added support")," for mixing optional chaining ",(0,i.kt)("inlineCode",{parentName:"p"},"?.")," with private fields. This means that the following code is now valid:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"obj?.property.#priv;\nobj?.#priv;\n")),(0,i.kt)("p",null,"Note that in the second example, if ",(0,i.kt)("inlineCode",{parentName:"p"},"obj")," is not nullish and does not have the ",(0,i.kt)("inlineCode",{parentName:"p"},"#priv")," field, it would still throw an error (exactly as ",(0,i.kt)("inlineCode",{parentName:"p"},"obj.#priv")," would throw). You can read the next section to see how to avoid it!"),(0,i.kt)("h2",{id:"private-fields-in-in-11372"},"Private Fields in ",(0,i.kt)("inlineCode",{parentName:"h2"},"in")," (",(0,i.kt)("a",{parentName:"h2",href:"https://github.com/babel/babel/pull/11372"},"#11372"),")"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://i12c7.csb.app/"},"Example on CodeSandbox"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'class Person {\n  #name;\n\n  hug(other) {\n    if (#name in other) console.log(`${this.#name} \ud83e\udd17 ${other.#name}`);\n    else console.log("It\'s not a person!")\n  }\n}\n')),(0,i.kt)("p",null,"This Stage 1 proposal allows you to statically check if a given object has a specific private field."),(0,i.kt)("p",null,'Private fields have a built-in "brand check": if you try to access them in an object where they aren\'t defined, it will throw an exception. You can determine if an object has a particular private field by leveraging this behavior with a ',(0,i.kt)("inlineCode",{parentName:"p"},"try"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"catch")," statement, but this proposal gives us a more compact and robust syntax to do so."),(0,i.kt)("p",null,"You can read more about it in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposal-private-fields-in-in/blob/master/README.md"},"proposal's description")," and test this proposal by installing the ",(0,i.kt)("inlineCode",{parentName:"p"},"@babel/plugin-proposal-private-property-in-object")," plugin and adding it to your Babel config. Thanks to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jridgewell"},"Justin")," for the PR!"),(0,i.kt)("h2",{id:"module-attributes-parser-support-10962"},"Module Attributes parser support (",(0,i.kt)("a",{parentName:"h2",href:"https://github.com/babel/babel/pull/10962"},"#10962"),")"),(0,i.kt)("p",null,"The Modules Attributes proposal (Stage 1) allows providing the engine, module loader or bundler some additional information about the imported file. For example, you could explicitly specify that it should be parsed as JSON:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'import metadata from "./package.json" with type: "json";\n')),(0,i.kt)("p",null,"Additionally, they can also be used with dynamic ",(0,i.kt)("inlineCode",{parentName:"p"},"import()"),". Note the support for trailing commas to make it easier to add or remove the second parameter!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'const metadata = await import(\n  "./package.json",\n  { with: { type: "json" } },\n);\n')),(0,i.kt)("p",null,"Thanks to ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/VivekNayyar09/"},"Vivek"),", Babel now supports parsing these attributes: you can add the ",(0,i.kt)("inlineCode",{parentName:"p"},"@babel/plugin-syntax-module-attributes")," plugin to your Babel config or, if you are using ",(0,i.kt)("inlineCode",{parentName:"p"},"@babel/parser")," directly, you can enable the ",(0,i.kt)("inlineCode",{parentName:"p"},"moduleAttributes")," plugin. Currently, we only accept the ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," attribute but we might relax this restriction in the future depending on how the proposal evolves."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u2139\ufe0f Babel doesn't ",(0,i.kt)("em",{parentName:"p"},"transform")," these attributes, and they should be handled directly by your bundler or a custom plugin. Currently babel module transformers ",(0,i.kt)("em",{parentName:"p"},"ignore")," these attributes. We are ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airbnb/babel-plugin-dynamic-import-node/issues/92"},"discussing")," whether we should pass through these attributes in the future.")),(0,i.kt)("h2",{id:"better-tree-shaking-for-react-components-11428"},"Better tree-shaking for React components (",(0,i.kt)("a",{parentName:"h2",href:"https://github.com/babel/babel/pull/11428"},"#11428"),")"),(0,i.kt)("p",null,"React exposes ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/babel/babel/blob/97f0b7c4a0589cf3cf1dae62fb09d1b7f1253829/packages/babel-plugin-transform-react-pure-annotations/src/index.js#L10"},"many")," pure functions used to annotate or wrap elements, for example ",(0,i.kt)("inlineCode",{parentName:"p"},"React.forwardRef"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"React.memo")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"React.lazy"),". However, minifiers and bundlers aren't aware that these functions are pure and thus they cannot remove them."),(0,i.kt)("p",null,"Thanks to ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/devongovett"},"Devon")," from the Parcel team, ",(0,i.kt)("inlineCode",{parentName:"p"},"@babel/preset-react")," now injects ",(0,i.kt)("inlineCode",{parentName:"p"},"/*#__PURE__*/")," annotations in those functions calls to mark them as being safe to be tree-shaken away. We had only previously done this with JSX itself (",(0,i.kt)("inlineCode",{parentName:"p"},"<a></a>")," => ",(0,i.kt)("inlineCode",{parentName:"p"},'/*#__PURE__*/React.createElement("a", null)'),")"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"import React from 'react';\nconst SomeComponent = React.lazy(() => import('./SomeComponent'));\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"import React from 'react';\nconst SomeComponent = /*#__PURE__*/React.lazy(() => import('./SomeComponent'));\n")),(0,i.kt)("h2",{id:"new-experimental-polyfills-architecture-10008-babel-polyfills"},"New experimental polyfills architecture (",(0,i.kt)("a",{parentName:"h2",href:"https://github.com/babel/babel/issues/10008"},"#10008"),", ",(0,i.kt)("a",{parentName:"h2",href:"https://github.com/babel/babel-polyfills"},(0,i.kt)("inlineCode",{parentName:"a"},"babel-polyfills")),")"),(0,i.kt)("p",null,"In the last three years, ",(0,i.kt)("inlineCode",{parentName:"p"},"@babel/preset-env")," has helped users reduce bundle sizes by only transpiling the syntax features and including the ",(0,i.kt)("inlineCode",{parentName:"p"},"core-js")," polyfills needed by their target environments.\nCurrently Babel has three different ways to inject ",(0,i.kt)("inlineCode",{parentName:"p"},"core-js")," polyfills in the source code:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"By using ",(0,i.kt)("inlineCode",{parentName:"li"},"@babel/preset-env"),"'s ",(0,i.kt)("inlineCode",{parentName:"li"},'useBuiltIns: "entry"')," option, it is possible to inject polyfills for every ECMAScript functionality not natively supported by the target browsers;"),(0,i.kt)("li",{parentName:"ul"},"By using ",(0,i.kt)("inlineCode",{parentName:"li"},'useBuiltIns: "usage"'),", Babel will only inject polyfills for unsupported ECMAScript features but ",(0,i.kt)("em",{parentName:"li"},"only")," if they are actually used in the input souce code;"),(0,i.kt)("li",{parentName:"ul"},"By using ",(0,i.kt)("inlineCode",{parentName:"li"},"@babel/plugin-transform-runtime"),", Babel will inject po",(0,i.kt)("i",null,"n"),'yfills (which are "pure" and don\'t pollute the global scope) for every used ECMAScript feature supported by ',(0,i.kt)("inlineCode",{parentName:"li"},"core-js"),". This is usually used by library authors.")),(0,i.kt)("p",null,"Our position in the JavaScript ecosystem allows us to push these optimizations even further. ",(0,i.kt)("inlineCode",{parentName:"p"},"@babel/plugin-transform-runtime")," has big advantages for some users over ",(0,i.kt)("inlineCode",{parentName:"p"},"useBuiltIns"),", but it doesn't consider target environments: it's 2020 and probably very few people need to load an ",(0,i.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach")," polyfill."),(0,i.kt)("p",null,"Additionally, why should we limit the ability to automatically inject only the necessary polyfills to ",(0,i.kt)("inlineCode",{parentName:"p"},"core-js"),"? There are also DOM polyfills, Intl polyfills, and polyfills for a myriad of other web platform APIs. Not everyone wants to use ",(0,i.kt)("inlineCode",{parentName:"p"},"core-js"),"; there are many other valid ECMAScript polyfills which have different tradeoffs (e.g. source size versus spec compliancy), and users should have the ability to use the polyfill of their choice. For example, we are actively working on an ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/es-shims/"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"es-shims")))," integration."),(0,i.kt)("p",null,"What if the logic to inject them was not related to the actual data about the available or required polyfills, so that they can be used and developed independently?"),(0,i.kt)("p",null,"We are now releasing the first experimental version of four new packages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/babel/babel-polyfills/blob/main/packages/babel-plugin-polyfill-corejs3/README.md"},(0,i.kt)("inlineCode",{parentName:"a"},"babel-plugin-polyfill-corejs3"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/babel/babel-polyfills/blob/main/packages/babel-plugin-polyfill-es-shims/README.md"},(0,i.kt)("inlineCode",{parentName:"a"},"babel-plugin-polyfill-es-shims"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/babel/babel-polyfills/blob/main/packages/babel-plugin-polyfill-regenerator/README.md"},(0,i.kt)("inlineCode",{parentName:"a"},"babel-plugin-polyfill-regenerator"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/babel/babel-polyfills/blob/main/packages/babel-plugin-polyfill-corejs2/README.md"},(0,i.kt)("inlineCode",{parentName:"a"},"babel-plugin-polyfill-corejs2"))," (legacy)")),(0,i.kt)("p",null,"These packages all support a ",(0,i.kt)("inlineCode",{parentName:"p"},"method")," option for adjusting how they're injected (analogous to what ",(0,i.kt)("inlineCode",{parentName:"p"},"@babel/preset-env")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@babel/plugin-transform-runtime"),' currently offer). You can inject a polyfill into an entry point (global scope only) or by direct usage in your code (both global scope and "pure" options). Below is a custom ',(0,i.kt)("a",{parentName:"p",href:"https://001iy.csb.app/"},"CodeSandbox")," where you can try out the differences between the polyfill options."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://001iy.csb.app/"},(0,i.kt)("img",{parentName:"a",src:"https://user-images.githubusercontent.com/588473/82951506-4a043080-9f75-11ea-969b-3ac2cd0007ed.png",alt:"image"}))),(0,i.kt)("p",null,"We are also releasing ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/babel/babel-polyfills/blob/main/packages/babel-helper-define-polyfill-provider/README.md"},(0,i.kt)("inlineCode",{parentName:"a"},"@babel/helper-define-polyfill-provider")),": a new helper package which makes it possible for polyfill authors and users to define ",(0,i.kt)("em",{parentName:"p"},"their own")," polyfill provider plugins."),(0,i.kt)("p",null,"Big thanks to ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/ljharb"},"Jordan")," for working with ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/NicoloRibaudo"},"Nicol\xf2")," to make it possible to build the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/es-shims/"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"es-shims")))," plugin!"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u2139\ufe0f If you want to read more about these packages, and learn how to set them up, you can check out the project's ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/babel/babel-polyfills/blob/main/README.md"},(0,i.kt)("inlineCode",{parentName:"a"},"README")),".")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f These packages are still experimental. We would appreciate feedback about them either on Twitter or on GitHub, but they are not ready for production yet. For example, we still need to wire some polyfills, and we haven't tested the plugins in production applications yet.")))}h.isMDXComponent=!0}}]);