"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["6301"],{66833:function(e,t,s){s.r(t),s.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return i},metadata:function(){return n},toc:function(){return c}});var n=s(5699),r=s(24246),a=s(80980);let i={layout:"post",title:"7.3.0 Released: Named capturing groups, private instance accessors and smart pipelines",authors:"nicol\xf2",date:new Date("2019-01-21T16:00:00.000Z"),categories:"announcements",share_text:"Babel 7.3.0 Released"},o=void 0,l={authorsImageUrls:[void 0]},c=[{value:"Private instance accessors (getters and setters) (#9101)",id:"private-instance-accessors-getters-and-setters-9101",level:2},{value:"Smart pipeline operator (#9179)",id:"smart-pipeline-operator-9179",level:2},{value:"Named capturing groups (#7105)",id:"named-capturing-groups-7105",level:2},{value:"TypeScript updates (#9302, #9309)",id:"typescript-updates-9302-9309",level:2},{value:"<code>babel-eslint</code> v11.0.0-beta.0: Automatic Syntax Detection by Reading Config (babel/babel-eslint#711)",id:"babel-eslint-v1100-beta0-automatic-syntax-detection-by-reading-config-babelbabel-eslint711",level:2}];function h(e){let t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"After over 80 commits, the latest Babel minor release is here!"}),"\n",(0,r.jsxs)(t.p,{children:["This release includes support for named capturing groups in regular expressions, private instance accessors, the smart pipeline operator and a bunch of improvements to TypeScript parsing. You can read the whole changelog ",(0,r.jsx)(t.a,{href:"https://github.com/babel/babel/releases/tag/v7.3.0",children:"on GitHub"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Thanks to ",(0,r.jsx)(t.a,{href:"https://github.com/jamesgeorge007",children:"@jamesgeorge007"})," and ",(0,r.jsx)(t.a,{href:"https://github.com/armano2",children:"@armano2"})," for their first PR!"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/bloomberg",children:(0,r.jsx)(t.strong,{children:"Bloomberg"})})," is continuing to sponsor the implementation of new class features in Babel: after giving us ",(0,r.jsx)(t.a,{href:"https://babeljs.io/blog/2018/09/17/7.1.0#private-static-fields-stage-3",children:"static private fields"})," and ",(0,r.jsx)(t.a,{href:"https://babeljs.io/blog/2018/12/03/7.2.0#private-instance-methods-8654-https-githubcom-babel-babel-pull-8654",children:"private instance methods"}),", they've just implemented private instance getters and setters."]}),"\n",(0,r.jsxs)(t.p,{children:["Another shout out goes to the ",(0,r.jsx)(t.a,{href:"https://www.ampproject.org",children:"AMP Project"}),", which increased their ",(0,r.jsx)(t.a,{href:"https://twitter.com/left_pad/status/1084955653389590533",children:"support of Babel"})," to $24k/year becoming a Base Support Sponsor."]}),"\n",(0,r.jsxs)(t.p,{children:["If you or your company want to support Babel and the evolution of JavaScript, but aren't sure how, you can donate to us on ",(0,r.jsx)(t.a,{href:"https://opencollective.com/babel",children:"OpenCollective"})," and, better yet, work with us on the implementation of ",(0,r.jsx)(t.a,{href:"https://github.com/babel/proposals",children:"new ECMAScript proposals"})," directly! As a volunteer-driven project, we rely on the community's support to both fund our efforts in supporting the wide range of JavaScript users and taking ownership of the code."]}),"\n",(0,r.jsxs)(t.h2,{id:"private-instance-accessors-getters-and-setters-9101",children:["Private instance accessors (getters and setters) (",(0,r.jsx)(t.a,{href:"https://github.com/babel/babel/pull/9101",children:"#9101"}),")"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:'title="JavaScript"',children:'class Person {\n  #firstname = "Babel";\n  #lastname = "JS";\n\n  get #name() {\n    return this.#firstname + " " + this.#lastname;\n  }\n\n  sayHi() {\n    alert(`Hi, ${this.#name}!`);\n  }\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Thanks to ",(0,r.jsx)(t.a,{href:"https://github.com/tim-mc",children:"Tim"})," (Bloomberg) for implementing this proposal!"]}),"\n",(0,r.jsxs)(t.p,{children:["You can test this new feature by adding ",(0,r.jsx)(t.code,{children:"@babel/plugin-proposal-private-methods"})," to your config, if you haven't already added it from Babel 7.2.0, or by enabling the ",(0,r.jsx)(t.code,{children:"stage-3"})," preset in the online ",(0,r.jsx)(t.a,{href:"https://babeljs.io/repl/build/main#?code_lz=MYGwhgzhAEAKCmAnCB7AdtA3gKGtAxAGYCWyALmmALbzQC80ARAEJgBG8IjA3LgeBArVaDRgCkAyjz58A5vDIFKNABQBKLHzyIFAV0QYyAC2IQAdEVKDltANRMH946YsChNXngC-MvBDAAngASxOqaeHhgIEhkKgAGIQA00AAkmM7m-DZeAIRxap7QPl5AA&presets=stage-3",children:"repl"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Class private features support is almost complete!"}),"\n",(0,r.jsx)("div",{style:{margin:"auto",width:"fit-content"},children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Class Private"}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Instance"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Static"})})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"Fields"})," ",(0,r.jsx)("br",{})," ",(0,r.jsx)(t.code,{children:"class A { #a = 1}"})]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://babeljs.io/blog/2018/08/27/7.0.0#tc39-proposals-https-githubcom-tc39-proposals-support",children:"7.0.0"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://babeljs.io/blog/2018/09/17/7.1.0#private-static-fields-stage-3",children:"7.1.0"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"Methods"})," ",(0,r.jsx)("br",{})," ",(0,r.jsx)(t.code,{children:"class A { #a() {} }"})]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://babeljs.io/blog/2018/12/03/7.2.0#private-instance-methods-8654-https-githubcom-babel-babel-pull-8654",children:"7.2.0"})}),(0,r.jsx)(t.td,{children:"\u2716"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"Accessors"})," ",(0,r.jsx)("br",{})," ",(0,r.jsx)(t.code,{children:"class A { get #a() {} }"})]}),(0,r.jsx)(t.td,{children:"7.3.0"}),(0,r.jsx)(t.td,{children:"\u2716"})]})]})]})}),"\n",(0,r.jsxs)(t.h2,{id:"smart-pipeline-operator-9179",children:["Smart pipeline operator (",(0,r.jsx)(t.a,{href:"https://github.com/babel/babel/pull/9179",children:"#9179"}),")"]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["Babel implements multiple variants of this ",(0,r.jsx)(t.a,{href:"https://github.com/tc39/proposal-pipeline-operator/wiki#proposal-1-f-sharp-only",children:"proposal"})," to help TC39 test and gather feedback from the community. As with all proposals, expect changes in the future."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["In ",(0,r.jsx)(t.a,{href:"https://babeljs.io/blog/2018/12/03/7.2.0#smart-pipeline-operator-parsing-8289-https-githubcom-babel-babel-pull-8289",children:"Babel 7.2.0"})," we landed parsing support for the ",(0,r.jsx)(t.a,{href:"https://github.com/js-choi/proposal-smart-pipelines/",children:"Smart Pipeline Operator"})," proposal. Thanks to the work of ",(0,r.jsx)(t.a,{href:"https://github.com/thiagoarrais",children:"Thiago Arrais"}),", you can now transpile it down to standard ECMAScript and try it out!"]}),"\n",(0,r.jsxs)(t.p,{children:["We currently only support the main proposal, and none of the ",(0,r.jsx)(t.a,{href:"https://github.com/js-choi/proposal-smart-pipelines#additional-features",children:"additional features"}),". Also, we don't support ",(0,r.jsx)(t.code,{children:"yield"})," and ",(0,r.jsx)(t.code,{children:"await"})," in pipelines yet."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:'title="JavaScript"',children:"name\n  |> # || throw new TypeError()\n  |> doubleSay(#, ', ')\n  |> capitalize\n  |> # + '!'\n  |> new User.Message(#)\n  |> stream.write(#, { sync: true })\n  |> console.log;\n"})}),"\n",(0,r.jsxs)(t.p,{children:["You can enable it in your project using the ",(0,r.jsx)(t.code,{children:"@babel/plugin-proposal-pipeline-operator"})," plugin with the ",(0,r.jsx)(t.code,{children:'proposal: "smart"'})," option:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",metastring:'title="babel.config.json"',children:'{\n  "plugins": [\n    ["@babel/plugin-proposal-pipeline-operator", { "proposal": "smart" }]\n  ]\n}\n'})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:['Previously, the "minimal" proposal was added in back in [v7.0.0-beta.3] via ',(0,r.jsx)(t.a,{href:"https://github.com/babel/babel/pull/6335",children:"#6335"})]}),"\n"]}),"\n",(0,r.jsxs)(t.h2,{id:"named-capturing-groups-7105",children:["Named capturing groups (",(0,r.jsx)(t.a,{href:"https://github.com/babel/babel/pull/7105",children:"#7105"}),")"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:'title="JavaScript"',children:'let stringRe = /(?<quote>"|\')(?<contents>.*?)\\k<quote>/;\n\nlet { contents } = `"foo bar"`.match(stringRe);\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Support for the biggest ECMAScript 2018 feature missing in Babel is now here! Previously, partial support for named groups was available via the awesome ",(0,r.jsx)(t.a,{href:"https://github.com/DmitrySoshnikov/babel-plugin-transform-modern-regexp",children:"babel-plugin-transform-modern-regexp"})," community plugin by ",(0,r.jsx)(t.a,{href:"https://twitter.com/DmitrySoshnikov",children:"Dmitry Soshnikov"}),". We also coordinated efforts with ",(0,r.jsx)(t.code,{children:"core-js"})," to provide full support with the new ",(0,r.jsx)(t.code,{children:"@babel/plugin-transform-named-capturing-groups-regex"})," package."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"@babel/preset-env"})," has also been updated to include this, so many of you will be able to use it without making any changes!"]}),"\n",(0,r.jsxs)(t.p,{children:["Note that the runtime features (i.e. the ",(0,r.jsx)(t.code,{children:"groups"})," property) only work in browsers with proper support for ES6 regular expressions. If you need to support older environments, you can include a polyfill for ",(0,r.jsx)(t.code,{children:"RegExp"}),"'s methods."]}),"\n",(0,r.jsxs)(t.h2,{id:"typescript-updates-9302-9309",children:["TypeScript updates (",(0,r.jsx)(t.a,{href:"https://github.com/babel/babel/pull/9302",children:"#9302"}),", ",(0,r.jsx)(t.a,{href:"https://github.com/babel/babel/pull/9309",children:"#9309"}),")"]}),"\n",(0,r.jsxs)(t.p,{children:["Thanks to the work by ",(0,r.jsx)(t.a,{href:"https://github.com/armano2",children:"Armano"})," on ",(0,r.jsx)(t.code,{children:"@babel/parser"})," and ",(0,r.jsx)(t.a,{href:"https://github.com/hzoo",children:"Henry"}),"/",(0,r.jsx)(t.a,{href:"https://github.com/existentialism",children:"Brian"})," on ",(0,r.jsx)(t.code,{children:"@babel/generator"})," (have you seen the ",(0,r.jsx)(t.a,{href:"https://www.youtube.com/watch?v=L-PxPBDUf6w&t=4s",children:"live stream"}),"?), we now support ",(0,r.jsx)(t.code,{children:"let x: typeof import('./x');"}),", added in ",(0,r.jsx)(t.a,{href:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-9.html",children:"TypeScript 2.9"}),". We now also support the ",(0,r.jsx)(t.code,{children:"bigint"})," type keyword, added in ",(0,r.jsx)(t.a,{href:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-2.html",children:"TypeScript 3.2"}),"."]}),"\n",(0,r.jsxs)(t.h2,{id:"babel-eslint-v1100-beta0-automatic-syntax-detection-by-reading-config-babelbabel-eslint711",children:[(0,r.jsx)(t.code,{children:"babel-eslint"})," v11.0.0-beta.0: Automatic Syntax Detection by Reading Config (",(0,r.jsx)(t.a,{href:"https://github.com/babel/babel-eslint/pull/711",children:"babel/babel-eslint#711"}),")"]}),"\n",(0,r.jsxs)(t.p,{children:["Thanks to ",(0,r.jsx)(t.a,{href:"https://github.com/kaicataldo",children:"Kai"})," (also on the ESLint TSC) for finishing this work!"]}),"\n",(0,r.jsxs)(t.p,{children:["Up until now, ",(0,r.jsx)(t.code,{children:"babel-eslint"})," has manually enabled all syntax plugins (with the list falling out of date frequently). It also meant that it could parse syntax that a configured instance of Babel itself didn't allow at compile time. We now require ",(0,r.jsx)(t.code,{children:"@babel/core"})," as a peerDependency and assume that a Babel config exists when using ",(0,r.jsx)(t.code,{children:"babel-eslint"})," and use that same config to modify itself (making this a breaking change). This change will hopefully make maintaining the module itself more manageable as well as re-using Babel's config which is a reasonable assumption for a user making use of ",(0,r.jsx)(t.code,{children:"babel-eslint"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"You can help us by checking if this beta release works for your project \uD83D\uDE42"}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://twitter.com/search?q=https%3A%2F%2Fbabeljs.io%2Fblog%2F2019%2F01%2F21%2F7.3.0",children:"Discuss on Twitter"})})]})}function p(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},80980:function(e,t,s){s.d(t,{Z:function(){return o},a:function(){return i}});var n=s(27378);let r={},a=n.createContext(r);function i(e){let t=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(a.Provider,{value:t},e.children)}},5699:function(e){e.exports=JSON.parse('{"permalink":"/babel-website/blog/2019/01/21/7.3.0","source":"@site/blog/2019-01-21-7.3.0.md","title":"7.3.0 Released: Named capturing groups, private instance accessors and smart pipelines","description":"After over 80 commits, the latest Babel minor release is here!","date":"2019-01-21T16:00:00.000Z","tags":[],"readingTime":3.915,"hasTruncateMarker":true,"authors":[{"name":"Nicol\xf2 Ribaudo","url":"https://twitter.com/NicoloRibaudo","key":"nicol\xf2","page":null}],"frontMatter":{"layout":"post","title":"7.3.0 Released: Named capturing groups, private instance accessors and smart pipelines","authors":"nicol\xf2","date":"2019-01-21T16:00:00.000Z","categories":"announcements","share_text":"Babel 7.3.0 Released"},"unlisted":false,"prevItem":{"title":"7.4.0 Released: core-js 3, static private methods and partial application","permalink":"/babel-website/blog/2019/03/19/7.4.0"},"nextItem":{"title":"7.2.0 Released: Private Instance Methods","permalink":"/babel-website/blog/2018/12/03/7.2.0"}}')}}]);