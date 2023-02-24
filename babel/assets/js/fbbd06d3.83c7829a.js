"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[784],{35318:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return k}});var l=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},p=Object.keys(e);for(l=0;l<p.length;l++)a=p[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(l=0;l<p.length;l++)a=p[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=l.createContext({}),s=function(e){var t=l.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return l.createElement(o.Provider,{value:t},e.children)},m="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,c=n(e,["components","mdxType","originalType","parentName"]),m=s(a),u=r,k=m["".concat(o,".").concat(u)]||m[u]||b[u]||p;return a?l.createElement(k,i(i({ref:t},c),{},{components:a})):l.createElement(k,i({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,i=new Array(p);i[0]=u;var n={};for(var o in t)hasOwnProperty.call(t,o)&&(n[o]=t[o]);n.originalType=e,n[m]="string"==typeof e?e:r,i[1]=n;for(var s=2;s<p;s++)i[s]=a[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}u.displayName="MDXCreateElement"},55873:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return n},metadata:function(){return s},toc:function(){return m}});var l=a(25773),r=a(30808),p=(a(27378),a(35318)),i=["components"],n={id:"features-timeline",title:"Features Timeline"},o=void 0,s={unversionedId:"features-timeline",id:"features-timeline",title:"Features Timeline",description:"Which major new features did we introduce in each Babel version? This page includes a very short summary for each minor release, or you can read the full changelog on GitHub!",source:"@site/../docs/features-timeline.md",sourceDirName:".",slug:"/features-timeline",permalink:"/babel-website/docs/features-timeline",draft:!1,editUrl:"https://github.com/babel/website/edit/main/docs/../docs/features-timeline.md",tags:[],version:"current",frontMatter:{id:"features-timeline",title:"Features Timeline"},sidebar:"docs",previous:{title:"Caveats",permalink:"/babel-website/docs/caveats"},next:{title:"FAQ",permalink:"/babel-website/docs/faq"}},c={},m=[{value:"Babel 7.21.0",id:"babel-7210",level:2},{value:"Babel 7.20.0",id:"babel-7200",level:2},{value:"babel-loader 9.0.0",id:"babel-loader-900",level:2},{value:"Babel 7.19.0",id:"babel-7190",level:2},{value:"Babel 7.18.0",id:"babel-7180",level:2},{value:"Babel 7.17.0",id:"babel-7170",level:2},{value:"Babel 7.16.0",id:"babel-7160",level:2},{value:"Babel 7.15.0",id:"babel-7150",level:2},{value:"Babel 7.14.0",id:"babel-7140",level:2},{value:"Babel 7.13.0",id:"babel-7130",level:2},{value:"Babel 7.12.0",id:"babel-7120",level:2},{value:"Babel 7.11.0",id:"babel-7110",level:2},{value:"@babel/eslint-parser",id:"babeleslint-parser",level:2},{value:"Babel 7.10.0",id:"babel-7100",level:2},{value:"babel-polyfills",id:"babel-polyfills",level:2},{value:"Babel 7.9.0",id:"babel-790",level:2},{value:"Babel 7.8.0",id:"babel-780",level:2},{value:"Babel 7.7.0",id:"babel-770",level:2},{value:"Babel 7.6.0",id:"babel-760",level:2},{value:"Babel 7.5.0",id:"babel-750",level:2},{value:"Babel 7.4.0",id:"babel-740",level:2},{value:"Babel 7.3.0",id:"babel-730",level:2},{value:"Babel 7.2.0",id:"babel-720",level:2},{value:"Babel 7.1.0",id:"babel-710",level:2},{value:"Babel 7",id:"babel-7",level:2}],b={toc:m};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,p.kt)("wrapper",(0,l.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Which major new features did we introduce in each Babel version? This page includes a very short summary for each ",(0,p.kt)("em",{parentName:"p"},"minor")," release, or you can read the full changelog ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/babel/babel/blob/main/CHANGELOG.md"},"on GitHub"),"!\nAdditionally, use this timeline to track some other important efforts, such as the ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/babel/babel-polyfills"},"babel-polyfills")," project."),(0,p.kt)("ol",{class:"timeline-container"},(0,p.kt)("li",{"data-date":"Feb 2023"},(0,p.kt)("h2",{id:"babel-7210"},"Babel 7.21.0"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://babeljs.io/blog/2023/02/10/7.21.0"},"blog post")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://devblogs.microsoft.com/typescript/announcing-typescript-5-0/"},"TypeScript 5.0")," support"),(0,p.kt)("li",{parentName:"ul"},"Support for the updates of the ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-decorators"},"decorators")," proposal that reached consensus in the January 2023 TC39 meeting"),(0,p.kt)("li",{parentName:"ul"},"Support for the ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-regexp-modifiers"},"inline RegExp modifiers")," Stage 3 proposal",(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'/(?i-m:a.)/m.exec("a\\nAb"); // ["Ab"]\n'))))),(0,p.kt)("li",{"data-date":"Oct 2022"},(0,p.kt)("h2",{id:"babel-7200"},"Babel 7.20.0"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://babeljs.io/blog/2022/10/27/7.20.0"},"blog post")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://devblogs.microsoft.com/typescript/announcing-typescript-4-9/"},"TypeScript 4.9")," support")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Parser support for the ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposal-explicit-resource-management"},"explicit resource management")," Stage 2 proposal"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'{\n  using handle = openFile(name, "w+");\n  write(handle, "Hi!\\n");\n  write(handle, ":)\\n");\n} // Automatically close the file\n'))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Parser support for the ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposal-import-reflection"},"import reflection")," Stage 2 proposal"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'import module mod from "./mod.js";\n\n// later ...\nimport(mod);\n')))),(0,p.kt)("h2",{id:"babel-loader-900"},"babel-loader 9.0.0"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/babel/babel-loader/releases/tag/v9.0.0"},"release"))),(0,p.kt)("li",{"data-date":"Sep 2022"},(0,p.kt)("h2",{id:"babel-7190"},"Babel 7.19.0"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://babeljs.io/blog/2022/09/05/7.19.0"},"blog post")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Support for the Stage 3 version of the ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-decorators"},"decorators")," proposal"),(0,p.kt)("li",{parentName:"ul"},"Transform support for the ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-duplicate-named-capturing-groups"},"duplicate named capturing groups")," Stage 3 proposal",(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"/(?<year>\\d\\d\\d\\d)-(?<month>\\d\\d)|(?<month>\\d\\d)-(?<year>\\d\\d\\d\\d)/\n"))))),(0,p.kt)("li",{"data-date":"May 2022"},(0,p.kt)("h2",{id:"babel-7180"},"Babel 7.18.0"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://babeljs.io/blog/2022/05/19/7.18.0"},"blog post")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://devblogs.microsoft.com/typescript/announcing-typescript-4-7/"},"TypeScript 4.7")," support"),(0,p.kt)("li",{parentName:"ul"},"Transform support for the ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-destructuring-private"},"Private destructuring")," Stage 2 proposal",(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"class A {\n  #x = 2;\n  method() {\n    const { #x: x } = this;\n  }\n}\n"))),(0,p.kt)("li",{parentName:"ul"},"No more need to manually include the ",(0,p.kt)("inlineCode",{parentName:"li"},"regenerator-runtime")," helper when compiling generators"))),(0,p.kt)("li",{"data-date":"Feb 2022"},(0,p.kt)("h2",{id:"babel-7170"},"Babel 7.17.0"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://babeljs.io/blog/2022/02/02/7.17.0"},"blog post")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Support for the new version of the ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposal-decorators"},"decorators")," Stage 2 proposal"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"class A {\n  @reactive #x = 2;\n\n  @logger\n  method() {\n    this.#x++;\n  }\n}\n"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Support for the ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposal-regexp-set-notation/"},"RegExp set notation and properties of strings")," Stage 2 proposal"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"/[\\p{RGI_Emoji}&&[\\0-\\uFFFF]]/v;\n"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Parser support for the ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposal-destructuring-private"},"private destructuring")," Stage 2 proposal"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"class A {\n  #x = 2;\n  method() {\n    const { #x: x } = this;\n  }\n}\n"))))),(0,p.kt)("li",{"data-date":"Oct 2021"},(0,p.kt)("h2",{id:"babel-7160"},"Babel 7.16.0"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://babeljs.io/blog/2021/10/29/7.16.0"},"blog post")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Enable the ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-class-static-block"},"class static blocks")," Stage 4 proposal by default",(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"class A {\n  static {\n    initialize(A);\n  }\n}\n"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://devblogs.microsoft.com/typescript/announcing-typescript-4-5/"},"TypeScript 4.5")," support"),(0,p.kt)("li",{parentName:"ul"},"Support ",(0,p.kt)("a",{parentName:"li",href:"https://eslint.org/blog/2021/10/eslint-v8.0.0-released"},"ESLint 8")," in ",(0,p.kt)("inlineCode",{parentName:"li"},"@babel/eslint-parser"),"."))),(0,p.kt)("li",{"data-date":"Jul 2021"},(0,p.kt)("h2",{id:"babel-7150"},"Babel 7.15.0"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://babeljs.io/blog/2021/07/26/7.15.0"},"blog post")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Enable parsing for the ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-top-level-await"},"top-level ",(0,p.kt)("inlineCode",{parentName:"a"},"await"))," Stage 4 proposal by default",(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'import db from "db";\nawait db.connect();\n'))),(0,p.kt)("li",{parentName:"ul"},"Enable the ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-private-fields-in-in"},"Private Brand Checks")," Stage 4 proposal by default",(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"class A {\n  static { initialize(A); } // static block\n  #field;\n  is(obj) {\n    return #field in obj; // private brand check\n  }\n}\n"))),(0,p.kt)("li",{parentName:"ul"},'Support the "Hack-style" ',(0,p.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-pipeline-operator"},"pipeline operator")," Stage 2 proposal",(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'const result = "World" |> `Hello, ${%}!` |> alert(%);\n'))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://devblogs.microsoft.com/typescript/announcing-typescript-4-4/"},"TypeScript 4.4")," support"))),(0,p.kt)("li",{"data-date":"Apr 2021"},(0,p.kt)("h2",{id:"babel-7140"},"Babel 7.14.0"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://babeljs.io/blog/2021/04/29/7.14.0"},"blog post")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Enable the ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-class-fields"},"Class Fields"),",\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-private-methods"},"Private Methods")," and ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-static-class-features"},"Static Class Features")," Stage 4 proposals by default"),(0,p.kt)("li",{parentName:"ul"},"Add the ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-private-fields-in-in"},"Private Brand Checks")," and ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-class-static-block"},"Static Class Blocks")," proposals to ",(0,p.kt)("inlineCode",{parentName:"li"},"@babel/preset-env"),"'s ",(0,p.kt)("a",{parentName:"li",href:"https://babeljs.io/docs/en/babel-preset-env#shippedproposals"},(0,p.kt)("inlineCode",{parentName:"a"},"shippedProposals")),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"class A {\n  static { initialize(A); } // static block\n  #field;\n  is(obj) {\n    return #field in obj; // private brand check\n  }\n}\n"))),(0,p.kt)("li",{parentName:"ul"},"Support for the ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-async-do-expressions"},(0,p.kt)("inlineCode",{parentName:"a"},"async do")," expressions")," proposal",(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"let valP = async do {\n  2 + await computeIt();\n};\n"))),(0,p.kt)("li",{parentName:"ul"},"Support for the ",(0,p.kt)("a",{parentName:"li",href:"https://babeljs.io/docs/en/babel-plugin-transform-modules-commonjs#importinterop"},(0,p.kt)("inlineCode",{parentName:"a"},'importInterop: "node"'))," option in ",(0,p.kt)("inlineCode",{parentName:"li"},"@babel/plugin-transform-modules-commonjs"),", to aligh Babel with the Node.js behavior"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://devblogs.microsoft.com/typescript/announcing-typescript-4-3/"},"TypeScript 4.3")," support"))),(0,p.kt)("li",{"data-date":"Feb 2021"},(0,p.kt)("h2",{id:"babel-7130"},"Babel 7.13.0"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://babeljs.io/blog/2021/02/22/7.13.0"},"blog post")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Top-level ",(0,p.kt)("a",{parentName:"li",href:"https://babeljs.io/docs/en/options#output-targets"},(0,p.kt)("inlineCode",{parentName:"a"},"targets"))," option (",(0,p.kt)("a",{parentName:"li",href:"https://github.com/babel/rfcs/pull/2"},"RFC"),")"),(0,p.kt)("li",{parentName:"ul"},"Granular compiler assumptions (",(0,p.kt)("a",{parentName:"li",href:"https://babeljs.io/assumptions"},"docs"),", ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/babel/rfcs/pull/5"},"RFC"),")"),(0,p.kt)("li",{parentName:"ul"},"Support for the ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-record-tuple"},"Records and Tuples")," proposals",(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"let rec = #{ x: 1 };\nlet tup = #[1, 2, 3];\n"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://devblogs.microsoft.com/typescript/announcing-typescript-4-2/"},"TypeScript 4.2")," support"))),(0,p.kt)("li",{"data-date":"Oct 2020"},(0,p.kt)("h2",{id:"babel-7120"},"Babel 7.12.0"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://babeljs.io/blog/2020/10/15/7.12.0"},"blog post")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Support for the ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-class-static-block"},"class static blocks")," proposal",(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"class A {\n  static { initialize(A); }\n}\n"))),(0,p.kt)("li",{parentName:"ul"},"Support for ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/tc39/ecma262/pull/2154"},"imports and exports string names"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'let happy = "wooo!";\nexport { happy as "\ud83d\ude03" };\n'))),(0,p.kt)("li",{parentName:"ul"},"Parser support for the ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-import-assertions"},"Import Assertions")," proposal",(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'import json from "./foo.json" assert { type: "json" };\n'))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://devblogs.microsoft.com/typescript/announcing-typescript-4-1/"},"TypeScript 4.1")," support"))),(0,p.kt)("li",{"data-date":"Jul 2020"},(0,p.kt)("h2",{id:"babel-7110"},"Babel 7.11.0"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://babeljs.io/blog/2020/07/30/7.11.0"},"blog post")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Enable the ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-logical-assignment/"},"Logical Assignment")," and\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-numeric-separator"},"Numeric Separator")," Stage 4 proposals by default"),(0,p.kt)("li",{parentName:"ul"},"Parser support for the ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-decimal"},"Decimal")," proposal",(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"console.assert(0.1m + 0.2m === 0.3m);\n"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://devblogs.microsoft.com/typescript/announcing-typescript-4-0/"},"TypeScript 4.0")," support"))),(0,p.kt)("li",{class:"no-children"},(0,p.kt)("h2",{id:"babeleslint-parser"},"@babel/eslint-parser"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://babeljs.io/blog/2020/07/13/the-state-of-babel-eslint"},"blog post"))),(0,p.kt)("li",{"data-date":"May 2020"},(0,p.kt)("h2",{id:"babel-7100"},"Babel 7.10.0"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://babeljs.io/blog/2020/05/25/7.10.0"},"blog post")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Enable parser support for the ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-import-meta/"},(0,p.kt)("inlineCode",{parentName:"a"},"import.meta"))," Stage 4 proposal by default"),(0,p.kt)("li",{parentName:"ul"},"Support for the ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-private-fields-in-in"},"Ergonomic brand checks for Private Fields")," proposal",(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'class Car {\n  #plate;\n  race(other) {\n     if (#plate in other) console.log("Racing against another car!");\n  }\n}\n'))))),(0,p.kt)("li",{class:"no-children"},(0,p.kt)("h2",{id:"babel-polyfills"},"babel-polyfills"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/babel/babel-polyfills"},"repository"))),(0,p.kt)("li",{"data-date":"Mar 2020"},(0,p.kt)("h2",{id:"babel-790"},"Babel 7.9.0"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://babeljs.io/blog/2020/03/16/7.9.0"},"blog post")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://babeljs.io/docs/en/babel-preset-env#bugfixes"},(0,p.kt)("inlineCode",{parentName:"a"},"bugfixes"))," option in ",(0,p.kt)("inlineCode",{parentName:"li"},"@babel/preset-env"),", to workaround browsers bugs rather than compiling whole Features"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://devblogs.microsoft.com/typescript/announcing-typescript-3-8/"},"TypeScript 3.8")," support"),(0,p.kt)("li",{parentName:"ul"},"Support for Flow ",(0,p.kt)("inlineCode",{parentName:"li"},"declare")," class fields"),(0,p.kt)("li",{parentName:"ul"},"Support for the ",(0,p.kt)("a",{parentName:"li",href:"https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html"},"automatic")," JSX runtime"))),(0,p.kt)("li",{"data-date":"Jan 2020"},(0,p.kt)("h2",{id:"babel-780"},"Babel 7.8.0"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://babeljs.io/blog/2020/01/11/7.8.0"},"blog post")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Enable the ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-optional-chaining"},"Optional Chaining")," and the\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-nullish-coalescing"},"Nullish Coalescing")," Stage 4 proposals by default"),(0,p.kt)("li",{parentName:"ul"},"Support ",(0,p.kt)("inlineCode",{parentName:"li"},".mjs")," configuration files"))),(0,p.kt)("li",{"data-date":"Nov 2019"},(0,p.kt)("h2",{id:"babel-770"},"Babel 7.7.0"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://babeljs.io/blog/2019/11/05/7.7.0"},"blog post")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Parser support for the ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposal-top-level-await"},"top-level ",(0,p.kt)("inlineCode",{parentName:"a"},"await"))," proposal"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'import db from "./database.js";\n\nawait db.connect();\n'))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Add error recovery support for Early Errors in ",(0,p.kt)("inlineCode",{parentName:"p"},"@babel/parser"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Support ",(0,p.kt)("inlineCode",{parentName:"p"},".json")," and ",(0,p.kt)("inlineCode",{parentName:"p"},".cjs")," configuration files")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://devblogs.microsoft.com/typescript/announcing-typescript-3-7/"},"TypeScript 3.7")," support")))),(0,p.kt)("li",{"data-date":"Sep 2019"},(0,p.kt)("h2",{id:"babel-760"},"Babel 7.6.0"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://babeljs.io/blog/2019/09/05/7.6.0"},"blog post")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Support for static private accessors, part of the\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-static-class-features/"},"static class features")," proposal",(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'class Dog {\n  static get #className() { return "Dog"; }\n}\n'))))),(0,p.kt)("li",{"data-date":"Jul 2019"},(0,p.kt)("h2",{id:"babel-750"},"Babel 7.5.0"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://babeljs.io/blog/2019/07/03/7.5.0"},"blog post")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Support for the ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/valtech-nyc/proposal-fsharp-pipelines/"},"F# pipeline operator")," proposal",(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"num |> add(2) |> double\n"))),(0,p.kt)("li",{parentName:"ul"},"TypeScript ",(0,p.kt)("inlineCode",{parentName:"li"},"namespace")," support"))),(0,p.kt)("li",{"data-date":"Mar 2019"},(0,p.kt)("h2",{id:"babel-740"},"Babel 7.4.0"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://babeljs.io/blog/2019/03/19/7.4.0"},"blog post")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Support for injecting ",(0,p.kt)("inlineCode",{parentName:"li"},"core-js@3")," polyfills"),(0,p.kt)("li",{parentName:"ul"},"Support for the ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-partial-application/"},"Partial Application")," proposal",(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"strings.map(parseInt(?));\n"))),(0,p.kt)("li",{parentName:"ul"},"Support for static private methods, part of the\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-static-class-features/"},"static class features")," proposal",(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"class Dog {\n  static #register() { /* ... */ }\n}\n"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://devblogs.microsoft.com/typescript/announcing-typescript-3-4/"},"TypeScript 3.4")," support"))),(0,p.kt)("li",{"data-date":"Jan 2019"},(0,p.kt)("h2",{id:"babel-730"},"Babel 7.3.0"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://babeljs.io/blog/2019/01/21/7.3.0"},"blog post")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Support for instance private accessors, part of the\n",(0,p.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-private-methods/"},"private methods")," proposal",(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"class Dog {\n  get #randomId() { return Math.random(); }\n}\n"))),(0,p.kt)("li",{parentName:"ul"},"Support for the ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/js-choi/proposal-smart-pipelines/"},"smart pipeline operator")," proposal",(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"num |> add(2, #) |> double\n"))),(0,p.kt)("li",{parentName:"ul"},"Support for\n",(0,p.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges#using_named_groups"},"named capturing groups"),"\nin regular expressions",(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"str.match({String.raw`/^(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})$/`})\n"))),(0,p.kt)("li",{parentName:"ul"},"TypeScript 3.2 and 2.9 support"))),(0,p.kt)("li",{"data-date":"Dec 2018"},(0,p.kt)("h2",{id:"babel-720"},"Babel 7.2.0"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://babeljs.io/blog/2018/12/03/7.2.0"},"blog post")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Support for instance private methods, part of the ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-private-methods/"},"private methods")," proposal",(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'class Dog {\n  #bark() { console.log("Mew!") }\n}\n'))))),(0,p.kt)("li",{"data-date":"Sep 2018"},(0,p.kt)("h2",{id:"babel-710"},"Babel 7.1.0"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://babeljs.io/blog/2018/09/17/7.1.0"},"blog post")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Support for the ",(0,p.kt)("a",{parentName:"li",href:"https://babeljs.io/blog/2018/09/17/decorators"},"decorators")," proposal, as it was specified in September 2018",(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"class Person {\n  @autoIncrement age;\n}\n"))),(0,p.kt)("li",{parentName:"ul"},"Support for static private fields, part of the ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-static-class-features/"},"static class features")," proposal",(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"class Person {\n  static #classId = 3;\n}\n"))))),(0,p.kt)("li",{"data-date":"Aug 2018",class:"no-children"},(0,p.kt)("h2",{id:"babel-7"},"Babel 7"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://babeljs.io/blog/2018/08/27/7.0.0"},"blog post")),(0,p.kt)("p",null,"This has a lot more changes since it was 2 years of pre-releases."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Drop support for un-maintained Node versions: 0.10, 0.12, 4, 5"),(0,p.kt)("li",{parentName:"ul"},"Switch to scoped packages (",(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/babel-core"},(0,p.kt)("inlineCode",{parentName:"a"},"babel-core"))," to ",(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@babel/core"},(0,p.kt)("inlineCode",{parentName:"a"},"@babel/core")),")"),(0,p.kt)("li",{parentName:"ul"},"Remove yearly presets (",(0,p.kt)("inlineCode",{parentName:"li"},"@babel/preset-es2015"),") and Stage presets (",(0,p.kt)("inlineCode",{parentName:"li"},"@babel/preset-stage-0"),") (",(0,p.kt)("a",{parentName:"li",href:"https://babeljs.io/blog/2018/07/27/removing-babels-stage-presets"},"blog post"),")."),(0,p.kt)("li",{parentName:"ul"},'Added "pure" (',(0,p.kt)("inlineCode",{parentName:"li"},"/*#__PURE__*/")," ) annotation support in certain cases. (Implemented later as ",(0,p.kt)("a",{parentName:"li",href:"/babel-website/docs/babel-helper-annotate-as-pure"},"@babel/helper-annotate-as-pure")),(0,p.kt)("li",{parentName:"ul"},"Add project-wide ",(0,p.kt)("inlineCode",{parentName:"li"},"babel.config.js")," config file (",(0,p.kt)("a",{parentName:"li",href:"/babel-website/docs/config-files"},"docs"),") and ",(0,p.kt)("a",{parentName:"li",href:"/babel-website/docs/options#overrides"},(0,p.kt)("inlineCode",{parentName:"a"},"overrides"))," config option."),(0,p.kt)("li",{parentName:"ul"},"Added ",(0,p.kt)("inlineCode",{parentName:"li"},'"useBuiltIns: "usage"')," to ",(0,p.kt)("a",{parentName:"li",href:"/babel-website/docs/babel-preset-env#usebuiltins"},(0,p.kt)("inlineCode",{parentName:"a"},"@babel/preset-env"))),(0,p.kt)("li",{parentName:"ul"},"Support TypeScript via ",(0,p.kt)("inlineCode",{parentName:"li"},"@babel/preset-typescript")),(0,p.kt)("li",{parentName:"ul"},"Support JSX Fragments ",(0,p.kt)("inlineCode",{parentName:"li"},"<></>")),(0,p.kt)("li",{parentName:"ul"},"Support a ton of TC39 proposals:",(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/babel-website/docs/babel-plugin-proposal-unicode-property-regex"},"Unicode Property Regex")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/babel-website/docs/babel-plugin-proposal-json-strings"},"JSON Superset")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/babel-website/docs/babel-plugin-transform-new-target"},(0,p.kt)("inlineCode",{parentName:"a"},"new.target"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/babel-website/docs/babel-plugin-proposal-class-properties"},"Class Private Instance Fields")," (",(0,p.kt)("inlineCode",{parentName:"li"},"class A { #b = 2 }"),")"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/babel-website/docs/babel-plugin-proposal-optional-catch-binding"},"Optional Catch Binding")," ",(0,p.kt)("inlineCode",{parentName:"li"},"try { throw 0 } catch { do() }")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/babel-website/docs/babel-plugin-syntax-bigint"},"BigInt")," (syntax only)"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/babel-website/docs/babel-plugin-syntax-import-meta"},(0,p.kt)("inlineCode",{parentName:"a"},"import.meta"))," (syntax only) (",(0,p.kt)("inlineCode",{parentName:"li"},"import.meta.url"),")"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/babel-website/docs/babel-plugin-proposal-numeric-separator"},"Numeric Separators")," (",(0,p.kt)("inlineCode",{parentName:"li"},"1_000"),")"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/babel-website/docs/babel-plugin-proposal-function-sent"},(0,p.kt)("inlineCode",{parentName:"a"},"function.sent"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/babel-website/docs/babel-plugin-proposal-optional-chaining"},"Optional Chaining")," (",(0,p.kt)("inlineCode",{parentName:"li"},"a?.b"),")"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/babel-website/docs/babel-plugin-proposal-logical-assignment-operators"},"Logical Assignment Operators")," (",(0,p.kt)("inlineCode",{parentName:"li"},"a &&= b; a ||= b"),")"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/babel-website/docs/babel-plugin-proposal-nullish-coalescing-operator"},"Nullish Coalescing Operator")," (",(0,p.kt)("inlineCode",{parentName:"li"},"a ?? b"),")"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/babel-website/docs/babel-plugin-proposal-pipeline-operator"},"Pipeline Operator")," (",(0,p.kt)("inlineCode",{parentName:"li"},"a |> b"),")"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/babel-website/docs/babel-plugin-proposal-throw-expressions"},"Throw Expressions")," (",(0,p.kt)("inlineCode",{parentName:"li"},'() => throw new Error("a")'),")")))))))}u.isMDXComponent=!0}}]);