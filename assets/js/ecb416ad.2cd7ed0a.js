"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["1090"],{54531:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return h}});var s=t(35338),r=t(24246),a=t(80980);let i={layout:"post",title:"6.19.0 Released",authors:"henry",date:new Date("2016-11-16T11:00:00.000Z"),categories:"announcements",share_text:"6.19.0"},l=void 0,c={authorsImageUrls:[void 0]},h=[{value:"v6.19.0 Summary (2016-11-16)",id:"v6190-summary-2016-11-16",level:2},{value:"\uD83D\uDE80 New Feature",id:"-new-feature",level:2},{value:"\uD83D\uDC1B Bug Fixes",id:"-bug-fixes",level:2},{value:"\uD83C\uDF0F Committers: 10",id:"-committers-10",level:2}];function o(e){let n={a:"a",code:"code",em:"em",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"object-rest-spread"})," works standalone and a few new plugin options APIs were added!"]}),"\n",(0,r.jsx)(n.h2,{id:"v6190-summary-2016-11-16",children:"v6.19.0 Summary (2016-11-16)"}),"\n",(0,r.jsx)(n.h2,{id:"-new-feature",children:"\uD83D\uDE80 New Feature"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/babel/babel/pull/4755",children:"#4755"})," Make ",(0,r.jsx)(n.code,{children:"object-rest-spread"})," work as an independent plugin. (",(0,r.jsx)(n.a,{href:"https://github.com/hzoo",children:"@hzoo"}),")"]}),"\n",(0,r.jsxs)(n.p,{children:["This rewrite fixes a long standing issue where the ",(0,r.jsx)(n.code,{children:"object-rest-spread"})," plugin was depending on 2 other plugins to compile ",(0,r.jsx)(n.code,{children:"RestProperty"})," properly."]}),"\n",(0,r.jsxs)(n.p,{children:["This fix important given the assumption that plugins should be independent and is vital for the use of ",(0,r.jsx)(n.a,{href:"https://github.com/babel/babel-preset-env/",children:"babel-preset-env"})," since new environments support destructuring natively."]}),"\n",(0,r.jsx)(n.p,{children:"In"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:"const { a, ...b } = c;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Out"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'const { a } = c; // remove the `...b`\nconst b = _objectWithoutProperties(c, ["a"]); // use the helper\n'})}),"\n",(0,r.jsx)(n.p,{children:"It's interesting to see all the places where you can destructure!"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"RestProperty"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"function a({ b, ...c }) {} // Parameters\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:"const { a, ...b } = c; // VariableDeclaration\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:"export var { a, ...b } = c; // ExportNamedDeclaration\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:"try {} catch ({a, ...b}) {} // CatchClause\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:"({a, ...b} = c); // AssignmentExpression\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:"for ({a, ...b} of []) {} // ForXStatement\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"SpreadProperty"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:"var a = { ...b, ...c } // ObjectExpression\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/babel/babel/pull/4544",children:"#4544"})," Add the ",(0,r.jsx)(n.code,{children:"spec"})," option to ",(0,r.jsx)(n.code,{children:'"transform-class-properties"'}),". (",(0,r.jsx)(n.a,{href:"https://github.com/motiz88",children:"@motiz88"}),")"]}),"\n",(0,r.jsxs)(n.p,{children:["Class properties will use ",(0,r.jsx)(n.code,{children:"Object.defineProperty"})," instead of a simple ",(0,r.jsx)(n.code,{children:"this.x = y"}),".\nStatic fields are will use ",(0,r.jsx)(n.code,{children:"value: undefined"})," even if they are not initialized."]}),"\n",(0,r.jsx)(n.p,{children:"Usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'{\n  "plugins": [\n    ["transform-class-properties", {\n      "spec": true\n    }]\n  ]\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"In"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:"class Foo {\n  static bar;\n  baz = 'guy';\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Out"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:"var Foo = function Foo() {\n  _classCallCheck(this, Foo);\n  this.baz = 'guy';\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Out w/ ",(0,r.jsx)(n.code,{children:'"spec": true'})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'var Foo = function Foo() {\n  babelHelpers.classCallCheck(this, Foo);\n  _initialiseProps.call(this);\n};\n\nObject.defineProperty(Foo, "bar", {\n  enumerable: true,\n  writable: true,\n  value: undefined\n});\n\nvar _initialiseProps = function () {\n  Object.defineProperty(this, "bar", {\n    enumerable: true,\n    writable: true,\n    value: foo\n  });\n};\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/babel/babel/pull/4836",children:"#4836"})," Add path utilities ",(0,r.jsx)(n.code,{children:"path.isAncestor"})," and ",(0,r.jsx)(n.code,{children:"path.isDescendant"}),". (",(0,r.jsx)(n.a,{href:"https://github.com/boopathi",children:"@boopathi"}),")"]}),"\n",(0,r.jsxs)(n.p,{children:['We\'ve added 2 similar "ancestry" path methods to ',(0,r.jsx)(n.code,{children:"path.findParent"}),":"]}),"\n",(0,r.jsx)(n.p,{children:"Usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:"let programPath, numberPath;\ntraverse(ast, {\n  Program(path) { programPath = path; },\n  NumberPath(path) { numberPath = path; },\n});\n\nprogramPath.isAncestor(numberPath); // true\nnumberPath.isDescendant(programPath); // true\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/babel/babel/pull/4835",children:"#4835"})," Add ",(0,r.jsx)(n.code,{children:"clearCache"})," and ",(0,r.jsx)(n.code,{children:"clearPath"})," as separate APIs under traverse. (",(0,r.jsx)(n.a,{href:"https://github.com/boopathi",children:"@boopathi"}),")"]}),"\n",(0,r.jsx)(n.p,{children:"Usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:"traverse.clearCache(); // clears both path's and scope cache\ntraverse.clearCache.clearPath();\ntraverse.clearCache.clearScope();\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/babel/babel/pull/4827",children:"#4827"})," Add ",(0,r.jsx)(n.code,{children:"jsonCompatibleStrings"})," option to ",(0,r.jsx)(n.code,{children:"babel-generator"}),". (",(0,r.jsx)(n.a,{href:"https://github.com/kangax",children:"@kangax"}),")"]}),"\n",(0,r.jsx)(n.p,{children:"Usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'{\n  "generatorOpts": {\n    "jsonCompatibleStrings": true // defaults to false\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Set to true for the generator to use ",(0,r.jsx)(n.code,{children:"jsesc"})," with ",(0,r.jsx)(n.code,{children:'"json": true'}),". This will make it print ",(0,r.jsx)(n.code,{children:'"\\u00A9"'})," vs. ",(0,r.jsx)(n.code,{children:'"\xa9"'}),";"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/babel/babel/pull/3547",children:"#3547"})," Added ",(0,r.jsx)(n.code,{children:"flowCommaSeparator"})," to ",(0,r.jsx)(n.code,{children:"babel-generator"}),". (",(0,r.jsx)(n.a,{href:"https://github.com/sampepose",children:"@sampepose"}),")"]}),"\n",(0,r.jsx)(n.p,{children:"Usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'{\n  "generatorOpts": {\n    "flowCommaSeparator": true // defaults to false\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Currently there are 2 supported syntaxes (",(0,r.jsx)(n.code,{children:","})," and ",(0,r.jsx)(n.code,{children:";"}),") in Flow Object Types. The use of commas is in line with the more popular style and matches how objects are defined in JavaScript, making it a bit more natural to write."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:"var a: { param1: number; param2: string }\nvar a: { param1: number, param2: string }\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/babel/babel/pull/3553",children:"#3553"})," Add ",(0,r.jsx)(n.code,{children:"t.isNodesEquivalent"}),". (",(0,r.jsx)(n.a,{href:"https://github.com/hzoo",children:"@hzoo"}),")"]}),"\n",(0,r.jsx)(n.p,{children:"Usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'assert(t.isNodesEquivalent(parse("1 + 1"), parse("1+1")) === true);\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/babel/babel/pull/4789",children:"#4789"})," Support stage-2 ",(0,r.jsx)(n.code,{children:"import()"})," as contextual import in ",(0,r.jsx)(n.code,{children:"transform-es2015-modules-systemjs"}),". (",(0,r.jsx)(n.a,{href:"https://github.com/guybedford",children:"@guybedford"}),")"]}),"\n",(0,r.jsxs)(n.p,{children:["You'll want to add the ",(0,r.jsx)(n.code,{children:"stage-2"})," preset or explicitly include ",(0,r.jsx)(n.code,{children:"babel-plugin-syntax-dynamic-import"})," (not enabled by default)."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:"export function lazyLoadOperation () {\n  return import('./x')\n  .then(function (x) {\n    x.y();\n  });\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"-bug-fixes",children:"\uD83D\uDC1B Bug Fixes"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/babel/babel/pull/4830",children:"#4830"})," Will print the shorter of the ",(0,r.jsx)(n.code,{children:"NumericLiteral"}),"s if using the ",(0,r.jsx)(n.code,{children:"minified"})," option. (",(0,r.jsx)(n.a,{href:"https://github.com/shinew",children:"@shinew"}),")"]}),"\n",(0,r.jsx)(n.p,{children:"Input"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:"5e1;\n5e4;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Output"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:"50;\n5e4;\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/babel/babel/pull/4832",children:"#4832"})," Fix ",(0,r.jsx)(n.code,{children:"transform-es2015-modules-systemjs"})," to ensure consistent modules iteration. (",(0,r.jsx)(n.a,{href:"https://github.com/guybedford",children:"@guybedford"}),")"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'import "2"; // should be imported first\nimport "1"; // second\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/babel/babel/pull/4813",children:"#4813"})," Fix ",(0,r.jsx)(n.code,{children:"binding"})," kind of destructured variables relating to ",(0,r.jsx)(n.code,{children:"transform-react-constant-elements"})," (",(0,r.jsx)(n.a,{href:"https://github.com/STRML",children:"@STRML"}),")"]}),"\n",(0,r.jsx)(n.p,{children:"Fixes an issue with destructuring parameters being hoisted incorrectly."}),"\n",(0,r.jsx)(n.p,{children:"Input"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:"function render({ text }) {\n  return () => (<Component text={text} />);\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Output"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:"function render(_ref) {\n  let text = _ref.text;\n  var _ref2 = <Component text={text} />;\n  return () => _ref2;\n}\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"-committers-10",children:"\uD83C\uDF0F Committers: 10"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Boopathi Rajaa (",(0,r.jsx)(n.a,{href:"https://github.com/boopathi",children:"boopathi"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Guy Bedford (",(0,r.jsx)(n.a,{href:"https://github.com/guybedford",children:"guybedford"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Henry Zhu (",(0,r.jsx)(n.a,{href:"https://github.com/hzoo",children:"hzoo"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Juriy Zaytsev (",(0,r.jsx)(n.a,{href:"https://github.com/kangax",children:"kangax"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Moti Zilberman (",(0,r.jsx)(n.a,{href:"https://github.com/motiz88",children:"motiz88"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Sam Pepose (",(0,r.jsx)(n.a,{href:"https://github.com/sampepose",children:"sampepose"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Samuel Reed (",(0,r.jsx)(n.a,{href:"https://github.com/STRML",children:"STRML"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Scott Stern (",(0,r.jsx)(n.a,{href:"https://github.com/sstern6",children:"sstern6"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Shine Wang (",(0,r.jsx)(n.a,{href:"https://github.com/shinew",children:"shinew"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["lion (",(0,r.jsx)(n.a,{href:"https://github.com/lion-man44",children:"lion-man44"}),")"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.p,{children:["Check out ",(0,r.jsx)(n.a,{href:"https://github.com/babel/babel/releases/tag/v6.19.0",children:"Github"})," for the whole changelog!"]})]})}function d(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},80980:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var s=t(27378);let r={},a=s.createContext(r);function i(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}},35338:function(e){e.exports=JSON.parse('{"permalink":"/babel-website/blog/2016/11/16/6.19.0","source":"@site/blog/2016-11-16-6.19.0.md","title":"6.19.0 Released","description":"object-rest-spread works standalone and a few new plugin options APIs were added!","date":"2016-11-16T11:00:00.000Z","tags":[],"readingTime":3.71,"hasTruncateMarker":true,"authors":[{"name":"Henry Zhu","url":"https://twitter.com/left_pad","key":"henry","page":null}],"frontMatter":{"layout":"post","title":"6.19.0 Released","authors":"henry","date":"2016-11-16T11:00:00.000Z","categories":"announcements","share_text":"6.19.0"},"unlisted":false,"prevItem":{"title":"The State of Babel","permalink":"/babel-website/blog/2016/12/07/the-state-of-babel"},"nextItem":{"title":"6.18.0 Released","permalink":"/babel-website/blog/2016/10/24/6.18.0"}}')}}]);