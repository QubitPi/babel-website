"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["8556"],{64731:function(e,s,n){n.r(s),n.d(s,{assets:function(){return l},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return r},metadata:function(){return t},toc:function(){return c}});var t=n(22592),o=n(24246),i=n(80980);let r={layout:"post",title:"7.14.0 Released: New class features enabled by default, TypeScript 4.3, and better CommonJS interop",authors:"team",date:new Date("2021-04-29T00:00:00.000Z"),categories:"announcements",share_text:"Babel 7.14.0 Released"},a=void 0,l={authorsImageUrls:[void 0]},c=[{value:"Highlights",id:"highlights",level:2},{value:"New class features enabled by default",id:"new-class-features-enabled-by-default",level:3},{value:"Better ESM-CJS interop",id:"better-esm-cjs-interop",level:3},{value:"TypeScript 4.3",id:"typescript-43",level:3},{value:"<code>async do</code> expressions",id:"async-do-expressions",level:3}];function d(e){let s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.p,{children:"Babel 7.14.0 is out!"}),"\n",(0,o.jsxs)(s.p,{children:["This release enables class fields and private methods by default (they were promoted to Stage 4 during the recent April ",(0,o.jsx)(s.a,{href:"https://github.com/tc39/agendas/blob/master/2021/04.md",children:"TC39 meeting"}),"!) and adds brand checks for private fields and static class blocks to ",(0,o.jsx)(s.code,{children:"@babel/preset-env"}),"'s ",(0,o.jsx)(s.code,{children:"shippedProposals"})," option."]}),"\n",(0,o.jsxs)(s.p,{children:["We added support for Stage 1 ",(0,o.jsx)(s.a,{href:"https://github.com/tc39/proposal-async-do-expressions",children:"async do expressions"})," (using ",(0,o.jsx)(s.code,{children:"@babel/plugin-proposal-async-do-expressions"}),"), which extends the Stage 1 ",(0,o.jsx)(s.a,{href:"https://github.com/tc39/proposal-do-expressions",children:"do expression"})," proposal."]}),"\n",(0,o.jsxs)(s.p,{children:["Thanks to ",(0,o.jsx)(s.a,{href:"https://github.com/sosukesuzuki",children:"Sosuke Suzuki"})," and ",(0,o.jsx)(s.a,{href:"https://github.com/g-plane",children:"Pig Fang"}),", Babel can now handle ",(0,o.jsx)(s.a,{href:"https://devblogs.microsoft.com/typescript/announcing-typescript-4-3-beta/",children:"TypeScript 4.3"})," features. ",(0,o.jsx)(s.code,{children:"@babel/parser"}),"  also has a new option to correctly parse ",(0,o.jsx)(s.a,{href:"https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html",children:"TypeScript declaration"})," files."]}),"\n",(0,o.jsxs)(s.p,{children:["Finally, we introduced a new ",(0,o.jsx)(s.code,{children:"importInterop: node"})," option to make it easier to produce dual modules by compiling ECMAScript imports to CommonJS that follow Node.js semantics."]}),"\n",(0,o.jsxs)(s.p,{children:["You can read the whole changelog ",(0,o.jsx)(s.a,{href:"https://github.com/babel/babel/releases/tag/v7.14.0",children:"on GitHub"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:["If you or your company want to support Babel and the evolution of JavaScript, but aren't sure how, you can donate to us on our ",(0,o.jsx)(s.a,{href:"https://opencollective.com/babel",children:"Open Collective"})," and, better yet, work with us on the implementation of ",(0,o.jsx)(s.a,{href:"https://github.com/babel/proposals",children:"new ECMAScript proposals"})," directly! As a volunteer-driven project, we rely on the community's support to fund our efforts in supporting the wide range of JavaScript users. Reach out at ",(0,o.jsx)(s.a,{href:"mailto:team@babeljs.io",children:"team@babeljs.io"})," if you'd like to discuss more!"]}),"\n",(0,o.jsx)(s.h2,{id:"highlights",children:"Highlights"}),"\n",(0,o.jsx)(s.h3,{id:"new-class-features-enabled-by-default",children:"New class features enabled by default"}),"\n",(0,o.jsx)(s.p,{children:"The class fields and private methods proposals just reached Stage 4 and will be officially included in ECMAScript 2022! This was more of a formality since the semantics were already finalized and they've already been implemented in all the major browsers."}),"\n",(0,o.jsxs)(s.p,{children:["You can read more details about this new syntax on MDN (",(0,o.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields",children:"public fields"}),", ",(0,o.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields",children:"private fields and methods"}),")."]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-js",metastring:'title="JavaScript"',children:'class Check {\n  static className = "Check"; // static public class field\n\n  #value = 3; // # means private!\n\n  get #double() { // private getter\n    return this.#value * 2; // using a private field\n  }\n}\n'})}),"\n",(0,o.jsxs)(s.p,{children:["Thus, you can remove ",(0,o.jsx)(s.code,{children:"@babel/plugin-proposal-class-properties"})," and ",(0,o.jsx)(s.code,{children:"@babel/plugin-proposal-private-methods"}),", since they are now enabled by default in ",(0,o.jsx)(s.a,{href:"https://babeljs.io/docs/en/babel-preset-env",children:(0,o.jsx)(s.code,{children:"@babel/preset-env"})}),"."]}),"\n",(0,o.jsxs)(s.admonition,{type:"caution",children:[(0,o.jsxs)(s.p,{children:["Webpack supports this syntax natively as of ",(0,o.jsx)(s.a,{href:"https://github.com/webpack/webpack/releases/tag/v5.36.0",children:"v5.36.0"}),".\nFor older versions, a workaround that works with simpler Webpack setups is to manually enable the ",(0,o.jsx)(s.code,{children:"acorn-stage3"})," plugin, by installing ",(0,o.jsx)(s.code,{children:"acorn-stage3"})," and adding these lines at the beginning of your ",(0,o.jsx)(s.code,{children:"webpack.config.js"})," file:"]}),(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-js",metastring:'title="JavaScript"',children:'// Require webpack\'s acorn dependency\nconst acorn = require(require.resolve("acorn", {\n  paths: [require.resolve("webpack")]\n}));\n\n// Enable the Stage 3 plugin\nacorn.Parser = acorn.Parser.extend(require("acorn-stage3"));\n'})}),(0,o.jsx)(s.p,{children:"If this doesn't work for you, or if you use a different tool that doesn't support class fields, you still need to use the Babel plugins to transform them."})]}),"\n",(0,o.jsxs)(s.p,{children:["If you are using ",(0,o.jsx)(s.code,{children:"@babel/preset-env"}),"'s ",(0,o.jsx)(s.a,{href:"https://babeljs.io/docs/en/babel-preset-env#shippedproposals",children:(0,o.jsx)(s.code,{children:"shippedProposals"})})," option, it now also includes the ",(0,o.jsx)(s.code,{children:"@babel/plugin-proposal-private-property-in-object"})," (introduced in ",(0,o.jsx)(s.a,{href:"https://babel.dev/blog/2020/05/25/7.10.0#private-fields-in-in-11372httpsgithubcombabelbabelpull11372",children:"7.10"}),") and ",(0,o.jsx)(s.code,{children:"@babel/plugin-proposal-class-static-block"})," (introduced in ",(0,o.jsx)(s.a,{href:"https://babel.dev/blog/2020/10/15/7.12.0#class-static-blocks-12079httpsgithubcombabelbabelpull12079-12143httpsgithubcombabelbabelpull12143",children:"7.12"}),") plugins: you can safely remove them from your configuration."]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-js",metastring:'title="JavaScript"',children:'class Foo {\n  #bar = "bar";\n\n  test(obj) {\n    return #bar in obj; // private-property-in-object\n  }\n\n  static #x = 42;\n  static y;\n  static { // static block\n    try {\n      this.y = doSomethingWith(this.#x);\n    } catch {\n      this.y = "unknown";\n    }\n  }\n}\n'})}),"\n",(0,o.jsx)(s.h3,{id:"better-esm-cjs-interop",children:"Better ESM-CJS interop"}),"\n",(0,o.jsx)(s.p,{children:"When importing a CommonJS file from an ECMAScript module, Node.js has different semantics than most of the tools in the JavaScript ecosystem."}),"\n",(0,o.jsx)(s.p,{children:"Suppose that you are depending on the following library:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-js",metastring:'title="JavaScript"',children:"export default function two() {\n  return 2;\n}\n"})}),"\n",(0,o.jsx)(s.p,{children:"And the author of this library doesn't publish it as-is, but compiles it to CommonJS:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-js",metastring:'title="JavaScript"',children:'"use strict";\n\nObject.defineProperty(exports, "__esModule", { value: true });\nexports.default = two;\n\nfunction two() {\n  return 2;\n}\n'})}),"\n",(0,o.jsx)(s.p,{children:"When importing this library with Babel (or TypeScript, Rollup or similar tools) and compiling your code to CommonJS, it will look like:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-js",metastring:'title="JavaScript"',children:'import two from "two";\nconsole.log(two());\n'})}),"\n",(0,o.jsx)(s.p,{children:"One day, you decide to provide two versions of your code: a compiled CommonJS one, and one using native ECMAScript modules."}),"\n",(0,o.jsxs)(s.p,{children:["While the compiled version works, the ESM one will throw ",(0,o.jsx)(s.code,{children:"TypeError: two is not a function"}),". This is because in Node.js, the default import is ",(0,o.jsx)(s.em,{children:"not"})," the dependency's ",(0,o.jsx)(s.code,{children:"exports.default"}),", but the whole ",(0,o.jsx)(s.code,{children:"module.exports"})," object instead."]}),"\n",(0,o.jsx)(s.p,{children:"You could change your code to:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-js",metastring:'title="JavaScript"',children:'import two from "two";\nconsole.log(two.default());\n'})}),"\n",(0,o.jsxs)(s.p,{children:["However, this new code has a problem: it now doesn't work when compiled, because ",(0,o.jsx)(s.code,{children:"two.default"})," is not a function."]}),"\n",(0,o.jsxs)(s.p,{children:["Babel v7.14.0 adds a new ",(0,o.jsx)(s.code,{children:'importInterop: "node"'})," option in the ",(0,o.jsx)(s.a,{href:"https://babeljs.io/docs/en/babel-plugin-transform-modules-commonjs",children:(0,o.jsx)(s.code,{children:"@babel/plugin-transform-modules-commonjs"})})," plugin that allows ",(0,o.jsx)(s.code,{children:"import"})," statements to match the native Node.js behavior. You can read more about this option ",(0,o.jsx)(s.a,{href:"https://babeljs.io/docs/en/babel-plugin-transform-modules-commonjs#importInterop",children:"in the docs"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"https://github.com/nicolo-ribaudo",children:"Nicol\xf2"})," from our team also ",(0,o.jsx)(s.a,{href:"https://github.com/rollup/plugins/pull/838",children:"contributed"})," a similar option to ",(0,o.jsx)(s.code,{children:"@rollup/plugin-commonjs"}),", which will be out in the next release. Our goal is to help the ecosystem migrate to native ECMAScript modules by providing an easier migration path."]}),"\n",(0,o.jsx)(s.h3,{id:"typescript-43",children:"TypeScript 4.3"}),"\n",(0,o.jsx)(s.p,{children:"The new TypeScript version, which will be released as stable in May, supports a few new features:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"override"})," modifiers in class elements"]}),"\n",(0,o.jsxs)(s.li,{children:["static index signatures (",(0,o.jsx)(s.code,{children:"[key: KeyType]: ValueType"}),") in classes"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"get"}),"/",(0,o.jsx)(s.code,{children:"set"})," in type declarations"]}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["You can read more about them in the ",(0,o.jsx)(s.a,{href:"https://devblogs.microsoft.com/typescript/announcing-typescript-4-3/",children:"TypeScript 4.3 release post"}),". This is supported through ",(0,o.jsx)(s.a,{href:"https://babeljs.io/docs/en/babel-preset-typescript",children:"@babel/preset-typescript"}),"."]}),"\n",(0,o.jsxs)(s.h3,{id:"async-do-expressions",children:[(0,o.jsx)(s.code,{children:"async do"})," expressions"]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsxs)(s.a,{href:"https://github.com/tc39/proposal-async-do-expressions",children:[(0,o.jsx)(s.code,{children:"async do"})," expressions"]})," are a Stage 1 proposal built on top of the ",(0,o.jsxs)(s.a,{href:"https://github.com/tc39/proposal-do-expressions",children:[(0,o.jsx)(s.code,{children:"do"})," expressions"]})," proposal."]}),"\n",(0,o.jsx)(s.p,{children:"They allow using asynchronous blocks within synchronous code, and those blocks are evaluated as a promise:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-js",metastring:'title="JavaScript"',children:'function sync() {\n  let x = async do {\n    let res = await Promise.resolve("Third!");\n    console.log("Second!");\n    res;\n  };\n  console.log("First!");\n  x.then(console.log);\n}\n\nconsole.log(sync());\n// Logs:\n// - "First!"\n// - "Second!"\n// - "Third!"\n'})}),"\n",(0,o.jsxs)(s.p,{children:["You can test this proposal (and report feedback!) by adding the ",(0,o.jsx)(s.a,{href:"https://babeljs.io/docs/en/babel-plugin-proposal-do-expressions",children:(0,o.jsx)(s.code,{children:"@babel/plugin-proposal-do-expressions"})})," and ",(0,o.jsx)(s.a,{href:"https://babeljs.io/docs/en/babel-plugin-proposal-async-do-expressions",children:(0,o.jsx)(s.code,{children:"@babel/plugin-proposal-async-do-expressions"})})," plugins to your Babel configuration."]}),"\n",(0,o.jsx)(s.admonition,{type:"caution",children:(0,o.jsxs)(s.p,{children:["These proposals are ",(0,o.jsx)(s.em,{children:"highly experimental"}),". They can, and likely will continue to evolve. It could take years before they are standardized, and may even be rejected altogether. You are welcome to test them, but we do not recommend using them in production."]})}),"\n",(0,o.jsx)(s.hr,{}),"\n",(0,o.jsxs)(s.p,{children:["Do you have any comment or question? Discuss ",(0,o.jsx)(s.a,{href:"https://github.com/babel/babel/discussions/13230",children:"on GitHub"}),"!"]})]})}function p(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},80980:function(e,s,n){n.d(s,{Z:function(){return a},a:function(){return r}});var t=n(27378);let o={},i=t.createContext(o);function r(e){let s=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:s},e.children)}},22592:function(e){e.exports=JSON.parse('{"permalink":"/babel-website/blog/2021/04/29/7.14.0","source":"@site/blog/2021-04-29-7.14.0.md","title":"7.14.0 Released: New class features enabled by default, TypeScript 4.3, and better CommonJS interop","description":"Babel 7.14.0 is out!","date":"2021-04-29T00:00:00.000Z","tags":[],"readingTime":4.815,"hasTruncateMarker":true,"authors":[{"name":"Babel Team","url":"https://twitter.com/babeljs","email":"team@babeljs.io","key":"team","page":null}],"frontMatter":{"layout":"post","title":"7.14.0 Released: New class features enabled by default, TypeScript 4.3, and better CommonJS interop","authors":"team","date":"2021-04-29T00:00:00.000Z","categories":"announcements","share_text":"Babel 7.14.0 Released"},"unlisted":false,"prevItem":{"title":"Babel is used by millions, so why are we running out of money?","permalink":"/babel-website/blog/2021/05/10/funding-update"},"nextItem":{"title":"7.13.0 Released: Records and Tuples, granular compiler assumptions, and top-level targets","permalink":"/babel-website/blog/2021/02/22/7.13.0"}}')}}]);