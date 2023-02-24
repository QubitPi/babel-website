"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1725],{35318:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(a),b=n,h=u["".concat(p,".").concat(b)]||u[b]||m[b]||o;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=b;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}b.displayName="MDXCreateElement"},81039:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=a(25773),n=a(30808),o=(a(27378),a(35318)),i=["components"],l={layout:"post",title:"7.17.0 Released: RegExp 'v' mode and ... \ud83e\udd41 decorators!",author:"Babel Team",authorURL:"https://twitter.com/babeljs",date:new Date("2022-02-02T00:00:00.000Z"),categories:"announcements",share_text:"Babel 7.17.0 Released"},p=void 0,s={permalink:"/babel-website/blog/2022/02/02/7.17.0",source:"@site/blog/2022-02-02-7.17.0.md",title:"7.17.0 Released: RegExp 'v' mode and ... \ud83e\udd41 decorators!",description:"We just published Babel 7.17.0!",date:"2022-02-02T00:00:00.000Z",formattedDate:"February 2, 2022",tags:[],readingTime:3.895,hasTruncateMarker:!0,authors:[{name:"Babel Team",url:"https://twitter.com/babeljs"}],frontMatter:{layout:"post",title:"7.17.0 Released: RegExp 'v' mode and ... \ud83e\udd41 decorators!",author:"Babel Team",authorURL:"https://twitter.com/babeljs",date:"2022-02-02T00:00:00.000Z",categories:"announcements",share_text:"Babel 7.17.0 Released"},prevItem:{title:"7.18.0 Released: Destructuring private elements and TypeScript 4.7",permalink:"/babel-website/blog/2022/05/19/7.18.0"},nextItem:{title:"7.16.0 Released: ESLint 8 and TypeScript 4.5",permalink:"/babel-website/blog/2021/10/29/7.16.0"}},c={authorsImageUrls:[void 0]},u=[{value:"Highlights",id:"highlights",level:2},{value:"Decorators (#14004, #13681)",id:"decorators-14004-13681",level:3},{value:"RegExp set notation and properties of strings (#14125)",id:"regexp-set-notation-and-properties-of-strings-14125",level:3},{value:"<code>@@</code> and <code>^^</code> topic tokens for Hack-style pipes (#13973)",id:"-and--topic-tokens-for-hack-style-pipes-13973",level:3},{value:"Experimental <code>@babel/register</code> rewrite (#13782)",id:"experimental-babelregister-rewrite-13782",level:3}],m={toc:u};function b(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We just published Babel 7.17.0!"),(0,o.kt)("p",null,"After years of ",(0,o.kt)("a",{parentName:"p",href:"https://babeljs.io/blog/2018/09/17/decorators"},"iterations"),", rewrites and adjustments it looks like the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposal-decorators"},"decorators proposal")," has finally stabilized again on a new design! This release includes both parse and transform support for the new proposal."),(0,o.kt)("p",null,"We also implemented the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposal-regexp-set-notation"},"RegExp ",(0,o.kt)("inlineCode",{parentName:"a"},"v")," flag proposal")," and added parsing support for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposal-destructuring-private"},"destructuring private fields"),", both currently Stage 2. Lastly, a new experimental implementation of ",(0,o.kt)("inlineCode",{parentName:"p"},"@babel/register"),"."),(0,o.kt)("p",null,"You can read the whole changelog ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/babel/babel/releases/tag/v7.17.0"},"on GitHub"),"."),(0,o.kt)("p",null,"If you or your company want to support Babel and the evolution of JavaScript, but aren't sure how, you can donate to us on our ",(0,o.kt)("a",{parentName:"p",href:"https://opencollective.com/babel#category-CONTRIBUTE"},"Open Collective")," or ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/babel/babel?sponsor=1"},"GitHub Sponsors")," and, better yet, work with us on the implementation of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/babel/proposals"},"new ECMAScript proposals")," directly! As a volunteer-driven project, we rely on the community's support to fund our efforts in supporting the wide range of JavaScript users. Reach out at ",(0,o.kt)("a",{parentName:"p",href:"mailto:team@babeljs.io"},"team@babeljs.io")," if you'd like to discuss more!"),(0,o.kt)("h2",{id:"highlights"},"Highlights"),(0,o.kt)("h3",{id:"decorators-14004-13681"},"Decorators (",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/babel/babel/pull/14004"},"#14004"),", ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/babel/babel/pull/13681"},"#13681"),")"),(0,o.kt)("p",null,"After receiving feedback from JavaScript developers, engine developers and language experts, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposal-decorators/"},"the decorators proposal")," was rewritten to take into account multiple constraints and desires. We collaborated with the current proposal author, ",(0,o.kt)("a",{parentName:"p",href:"https://www.pzuraq.com/"},"@pzuraq")," to implement the new Stage 2 proposal in Babel."),(0,o.kt)("p",null,'The new implementation also supports decorating private class elements, as well as the new "class auto accessors" syntax:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'@defineElement("button")\nclass Button {\n  @reactive accessor enabled = true; // class auto accessors\n\n  @event("onClick") #handleClick() { // decorator on a private method\n    console.log("clicked!");\n  }\n}\n')),(0,o.kt)("p",null,"You can enable the new proposal by passing the ",(0,o.kt)("inlineCode",{parentName:"p"},'"version": "2021-12"')," option to ",(0,o.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-plugin-proposal-decorators"},(0,o.kt)("inlineCode",{parentName:"a"},"@babel/plugin-proposal-decorators")),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="babel.config.json"',title:'"babel.config.json"'},'{\n  "plugins": [\n    ["@babel/plugin-proposal-decorators", {\n        "version": "2021-12"\n    }]\n  ]\n}\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f While the new decorators syntax is compatible with the previous proposal, the semantics are different: decorators already written for Babel ",(0,o.kt)("em",{parentName:"p"},'"legacy"'),", Babel ",(0,o.kt)("em",{parentName:"p"},"older-but-not-legacy"),", or TypeScript will not work with the new proposal.")),(0,o.kt)("p",null,"If you want to help move the proposal forward, you can try using it and leave feedback in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposal-decorators/issues"},"their GitHub repository"),"."),(0,o.kt)("h3",{id:"regexp-set-notation-and-properties-of-strings-14125"},"RegExp set notation and properties of strings (",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/babel/babel/pull/14125"},"#14125"),")"),(0,o.kt)("p",null,"Babel now supports the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposal-regexp-set-notation/"},"RegExp set notation and properties of strings")," proposal, which introduces three new regular expression features behind a new ",(0,o.kt)("inlineCode",{parentName:"p"},"v")," flag:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Extended set notation, which allows computing difference, intersection and union of characters or strings sets",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"/[\\p{Decimal_Number}--[0-9]]/v; // Non-ASCII decimal digits\n/[\\p{ASCII}&&\\p{Letter}]/v; // ASCII letters\n/[[\\p{ASCII}&&\\p{Letter}]\\p{Number}]/v; // ASCII letters, or any digit\n"))),(0,o.kt)("li",{parentName:"ul"},"Properties of strings, which allow using ",(0,o.kt)("inlineCode",{parentName:"li"},"\\p")," escapes with multi-codepoint properties",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'"Did you see the \ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c\udffe emoji?".match(/\\p{RGI_Emoji}/v). // ["\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c\udffe"]\n'))),(0,o.kt)("li",{parentName:"ul"},"Multi-codepoint strings in sets, using a new ",(0,o.kt)("inlineCode",{parentName:"li"},"\\q")," escape",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"/[\\r\\n\\q{\\r\\n|NEWLINE}]/v; // Matches \\r, \\n, \\r\\n or NEWLINE\n")))),(0,o.kt)("p",null,"You can enable this proposal using the ",(0,o.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-plugin-proposal-unicode-sets-regex"},(0,o.kt)("inlineCode",{parentName:"a"},"@babel/plugin-proposal-unicode-sets-regex"))," plugin:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="babel.config.json"',title:'"babel.config.json"'},'{\n  "plugins": ["@babel/plugin-proposal-unicode-sets-regex"]\n}\n')),(0,o.kt)("p",null,"Babel relies on different third-party packages to transform regular expressions: we are grateful to the maintainers of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jviereck/regjsparser/"},"regjsparser"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnjmnt4n/regjsgen"},"regjsgen")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mathiasbynens/regexpu-core/"},"regexpu-core")," who took time to review our pull requests!"),(0,o.kt)("h3",{id:"-and--topic-tokens-for-hack-style-pipes-13973"},(0,o.kt)("inlineCode",{parentName:"h3"},"@@")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"^^")," topic tokens for Hack-style pipes (",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/babel/babel/pull/13973"},"#13973"),")"),(0,o.kt)("p",null,"We are continuing to help the proposal authors evaluate different tokens for the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposal-pipeline-operator"},"pipeline operator")," proposal: one of the champions, ",(0,o.kt)("a",{parentName:"p",href:"https://jschoi.org/"},"J. S. Choi"),", added support for two new tokens that you can try with the ",(0,o.kt)("inlineCode",{parentName:"p"},"topicToken")," option:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="babel.config.json"',title:'"babel.config.json"'},'{\n  "plugins": [\n    ["@babel/plugin-proposal-pipeline-operator", {\n      "proposal": "hack",\n      "topicToken": "^^" // or "@@"\n    }]\n  ]\n}\n')),(0,o.kt)("p",null,"You can read more about the supported variations in the ",(0,o.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-plugin-proposal-pipeline-operator"},(0,o.kt)("inlineCode",{parentName:"a"},"@babel/plugin-proposal-pipeline-operator"))," docs."),(0,o.kt)("h3",{id:"experimental-babelregister-rewrite-13782"},"Experimental ",(0,o.kt)("inlineCode",{parentName:"h3"},"@babel/register")," rewrite (",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/babel/babel/pull/13782"},"#13782"),")"),(0,o.kt)("p",null,"We plan to release Babel 8 as an ESM package. However, this poses a big problem: how to load and run it synchronously in CommonJS packages?"),(0,o.kt)("p",null,"Usually most Babel consumers can run Babel asynchronously, or at least ",(0,o.kt)("em",{parentName:"p"},"load")," it asynchronously. This isn't true for ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@babel/eslint-parser"},(0,o.kt)("inlineCode",{parentName:"a"},"@babel/eslint-parser"))," (which integrates Babel's parser with ESLint) and ",(0,o.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-register"},(0,o.kt)("inlineCode",{parentName:"a"},"@babel/register"))," (which can be used to transpile Node.js files on-the-fly), where we need to move parsing and transforming to a separate worker."),(0,o.kt)("p",null,"Babel 7.16.0 exposes the new experimental ",(0,o.kt)("inlineCode",{parentName:"p"},"@babel/register")," implementation at ",(0,o.kt)("inlineCode",{parentName:"p"},"@babel/register/experimental-worker"),": it internally runs Babel asynchronously, so it's compatible with ",(0,o.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/config-files#configuration-file-types"},(0,o.kt)("inlineCode",{parentName:"a"},".mjs")," configuration files")," and with ",(0,o.kt)("inlineCode",{parentName:"p"},".mjs")," Babel plugins. It will be enabled by default in Babel 8, and you can already use it as a replacement for ",(0,o.kt)("inlineCode",{parentName:"p"},"@babel/register")," with a few caveats:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you programmatically specify ",(0,o.kt)("inlineCode",{parentName:"li"},"@babel/register")," options (using ",(0,o.kt)("inlineCode",{parentName:"li"},'require("@babel/register")({ /* ... options */ })'),"), you must make sure that they are serializable. This means that you cannot pass plugin functions defined inline, but you must move them to a separate ",(0,o.kt)("inlineCode",{parentName:"li"},"./my-plugin.js")," file or to a ",(0,o.kt)("inlineCode",{parentName:"li"},"babel.config.js")," file."),(0,o.kt)("li",{parentName:"ul"},"The new implementation is still experimental: it ",(0,o.kt)("em",{parentName:"li"},"should")," have the same features as the existing one, but there are a few ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/babel/babel/pull/14025#issuecomment-1003547657"},"improvements")," that we are exploring.")),(0,o.kt)("p",null,"We already released the new experimental ",(0,o.kt)("inlineCode",{parentName:"p"},"@babel/eslint-parser")," implementation in ",(0,o.kt)("a",{parentName:"p",href:"https://babeljs.io/blog/2021/07/26/7.15.0#preparing-babeleslint-parser-for-babel-8-13398httpsgithubcombabelbabelpull13398"},"Babel 7.15.0"),", exposed at ",(0,o.kt)("inlineCode",{parentName:"p"},"@babel/eslint-parser/experimental-worker"),"."))}b.isMDXComponent=!0}}]);