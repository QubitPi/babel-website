"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7636"],{56737:function(e,n,t){t.r(n),t.d(n,{assets:function(){return o},contentTitle:function(){return r},default:function(){return d},frontMatter:function(){return l},metadata:function(){return a},toc:function(){return c}});var a=t(64756),s=t(24246),i=t(80980);let l={layout:"post",title:"Function Bind Syntax",authors:"james_kyle",date:new Date("2015-05-14T19:30:00.000Z"),categories:"announcements",share_text:"New in Babel 5.4: Function Bind Syntax"},r=void 0,o={authorsImageUrls:[void 0]},c=[{value:"Virtual Methods",id:"virtual-methods",level:3},{value:"Method Extraction",id:"method-extraction",level:3},{value:"Usage",id:"usage",level:3}];function h(e){let n={a:"a",blockquote:"blockquote",code:"code",em:"em",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Babel 5.4 was just released and with it comes support for a new\n",(0,s.jsx)(n.a,{href:"https://github.com/zenparsing/es-function-bind",children:"experimental ES7 syntax"}),"\nproposed by Kevin Smith (",(0,s.jsx)(n.a,{href:"https://github.com/zenparsing",children:"@zenparsing"}),") and\nimplemented in Babel by Ingvar Stepanyan\n(",(0,s.jsx)(n.a,{href:"https://github.com/RReverser",children:"@RReverser"}),")."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Warning: This syntax is highly experimental and you should not use\nit for anything serious (yet)."})})," If you do use this syntax, please\nprovide feedback on ",(0,s.jsx)(n.a,{href:"https://github.com/zenparsing/es-function-bind",children:"GitHub"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The function bind syntax introduces a new operator ",(0,s.jsx)(n.code,{children:"::"})," which performs function\nbinding and method extraction."]}),"\n",(0,s.jsx)(n.h3,{id:"virtual-methods",children:"Virtual Methods"}),"\n",(0,s.jsx)(n.p,{children:'Using an iterator library implemented as a module of "virtual methods":'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'/* ES7 */\nimport { map, takeWhile, forEach } from "iterlib";\n\ngetPlayers()\n::map(x => x.character())\n::takeWhile(x => x.strength > 100)\n::forEach(x => console.log(x));\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'/* ES6 */\nimport { map, takeWhile, forEach } from "iterlib";\n\nlet _val;\n_val = getPlayers();\n_val = map.call(_val, x => x.character());\n_val = takeWhile.call(_val, x => x.strength > 100);\n_val = forEach.call(_val, x => console.log(x));\n'})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," Babel's ",(0,s.jsx)(n.a,{href:"https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=JYWwDg9gTgLgBAbziAhmANHGKDWBTAdQAtgAbPTAM2gFEUBjIuAXzkqghDgCJgY8opYACNuAbgBQEgOZ4YABVIoAngIDOACgCUEgFy7UYDQA84AXgB8cYwDpGKKA35RtO_dnzEyeE-au21GCg8ADtpGCYrAEYABhi3XWooOkZfSzh6CBC1CHIbUghpEy0tMSA&debug=false&forceAllTransforms=false&modules=false&shippedProposals=false&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.25.6&externalPlugins=%40babel%2Fplugin-proposal-function-bind%407.24.7&assumptions=%7B%7D",children:"output"}),"\nlooks different than this in order to be more concise."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Using a jquery-like library of virtual methods:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'/* ES7 */\n// Create bindings for just the methods that we need\nlet { find, html } = jake;\n\n// Find all the divs with class="myClass", then get all of the\n// "p"s and replace their content.\ndocument.querySelectorAll("div.myClass")::find("p")::html("hahaha");\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'/* ES6 */\nlet _val;\n_val = document.querySelectorAll("div.myClass");\n_val = find.call(_val, "p");\n_val = html.call(_val, "hahaha");\n'})}),"\n",(0,s.jsx)(n.h3,{id:"method-extraction",children:"Method Extraction"}),"\n",(0,s.jsx)(n.p,{children:"Using method extraction to print the eventual value of a promise to the console:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:"/* ES7 */\nPromise.resolve(123).then(::console.log);\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:"/* ES6 */\n// Which could be written in ES6 as:\nPromise.resolve(123).then(console.log.bind(console));\n"})}),"\n",(0,s.jsx)(n.p,{children:"Using method extraction to call an object method when a DOM event occurs:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'/* ES7 */\n$(".some-link").on("click", ::view.reset);\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'/* ES6 */\n$(".some-link").on("click", view.reset.bind(view));\n'})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," You can read more about this syntax in the\n",(0,s.jsx)(n.a,{href:"https://github.com/zenparsing/es-function-bind",children:"Function Bind Syntax proposal"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.p,{children:"Enable by stage:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"$ babel --stage 0\n"})}),"\n",(0,s.jsx)(n.p,{children:"Enable by transformer:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"$ babel --optional es7.functionBind\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.p,{children:["The function bind syntax will only make it into ES7 if there is enough interest.\nIf you would like to see this syntax make it in, please give it a star on\n",(0,s.jsx)(n.a,{href:"https://github.com/zenparsing/es-function-bind",children:"GitHub"})," and provide any\nfeedback you have on ",(0,s.jsx)(n.a,{href:"https://github.com/zenparsing/es-function-bind/issues",children:"GitHub issues"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Special thanks to Ingvar Stepanyan (",(0,s.jsx)(n.a,{href:"https://github.com/RReverser",children:"@RReverser"}),")\nfor the ",(0,s.jsx)(n.a,{href:"https://github.com/babel/babel/pull/1518",children:"implementation"})," in Babel."]}),"\n",(0,s.jsx)("p",{class:"text-right",children:"\u2014 The Babel team"})]})}function d(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},80980:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return l}});var a=t(27378);let s={},i=a.createContext(s);function l(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(i.Provider,{value:n},e.children)}},64756:function(e){e.exports=JSON.parse('{"permalink":"/babel-website/blog/2015/05/14/function-bind","source":"@site/blog/2015-05-14-function-bind.md","title":"Function Bind Syntax","description":"Babel 5.4 was just released and with it comes support for a new","date":"2015-05-14T19:30:00.000Z","tags":[],"readingTime":2.015,"hasTruncateMarker":true,"authors":[{"name":"James Kyle","url":"https://twitter.com/thejameskyle","key":"james_kyle","page":null}],"frontMatter":{"layout":"post","title":"Function Bind Syntax","authors":"james_kyle","date":"2015-05-14T19:30:00.000Z","categories":"announcements","share_text":"New in Babel 5.4: Function Bind Syntax"},"unlisted":false,"prevItem":{"title":"React on ES6+","permalink":"/babel-website/blog/2015/07/07/react-on-es6-plus"},"nextItem":{"title":"5.0.0 Released","permalink":"/babel-website/blog/2015/03/31/5.0.0"}}')}}]);