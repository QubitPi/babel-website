"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2324],{35318:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(27378);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=s,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return a?n.createElement(h,r(r({ref:t},u),{},{components:a})):n.createElement(h,r({ref:t},u))}));function h(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=a.length,r=new Array(i);r[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:s,r[1]=o;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},32172:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var n=a(25773),s=a(30808),i=(a(27378),a(35318)),r=["components"],o={title:"Compiler assumptions",id:"assumptions"},l=void 0,p={unversionedId:"assumptions",id:"assumptions",title:"Compiler assumptions",description:"By default Babel tries to compile your code so that it matches the native behavior as closely as possible. However, this sometimes means generating more output code, or slower output code, just to support some edge cases you don't care about.",source:"@site/../docs/assumptions.md",sourceDirName:".",slug:"/assumptions",permalink:"/babel-website/docs/assumptions",draft:!1,editUrl:"https://github.com/babel/website/edit/main/docs/../docs/assumptions.md",tags:[],version:"current",frontMatter:{title:"Compiler assumptions",id:"assumptions"},sidebar:"docs",previous:{title:"Plugins List",permalink:"/babel-website/docs/plugins-list"},next:{title:"@babel/preset-env",permalink:"/babel-website/docs/babel-preset-env"}},u={},d=[{value:"<code>arrayLikeIsIterable</code>",id:"arraylikeisiterable",level:2},{value:"<code>constantReexports</code>",id:"constantreexports",level:2},{value:"<code>constantSuper</code>",id:"constantsuper",level:2},{value:"<code>enumerableModuleMeta</code>",id:"enumerablemodulemeta",level:2},{value:"<code>ignoreFunctionLength</code>",id:"ignorefunctionlength",level:2},{value:"<code>ignoreToPrimitiveHint</code>",id:"ignoretoprimitivehint",level:2},{value:"<code>iterableIsArray</code>",id:"iterableisarray",level:2},{value:"<code>mutableTemplateObject</code>",id:"mutabletemplateobject",level:2},{value:"<code>noClassCalls</code>",id:"noclasscalls",level:2},{value:"<code>noDocumentAll</code>",id:"nodocumentall",level:2},{value:"<code>noIncompleteNsImportDetection</code>",id:"noincompletensimportdetection",level:2},{value:"<code>noNewArrows</code>",id:"nonewarrows",level:2},{value:"<code>objectRestNoSymbols</code>",id:"objectrestnosymbols",level:2},{value:"<code>privateFieldsAsProperties</code>",id:"privatefieldsasproperties",level:2},{value:"<code>privateFieldsAsSymbols</code>",id:"privatefieldsassymbols",level:2},{value:"<code>pureGetters</code>",id:"puregetters",level:2},{value:"<code>setClassMethods</code>",id:"setclassmethods",level:2},{value:"<code>setComputedProperties</code>",id:"setcomputedproperties",level:2},{value:"<code>setPublicClassFields</code>",id:"setpublicclassfields",level:2},{value:"<code>setSpreadProperties</code>",id:"setspreadproperties",level:2},{value:"<code>skipForOfIteratorClosing</code>",id:"skipforofiteratorclosing",level:2},{value:"<code>superIsCallableConstructor</code>",id:"superiscallableconstructor",level:2}],c={toc:d},m="wrapper";function h(e){var t=e.components,a=(0,s.Z)(e,r);return(0,i.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"By default Babel tries to compile your code so that it matches the native behavior as closely as possible. However, this sometimes means generating more output code, or slower output code, just to support some edge cases you don't care about."),(0,i.kt)("p",null,"Since Babel 7.13.0, you can specify an ",(0,i.kt)("inlineCode",{parentName:"p"},"assumptions")," option in your configuration to tell Babel which assumptions it can make about your code, to better optimize the compilation result. ",(0,i.kt)("em",{parentName:"p"},"Note"),": this replaces the various ",(0,i.kt)("inlineCode",{parentName:"p"},"loose")," options in plugins in favor of top-level options that can apply to multiple plugins (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/babel/rfcs/blob/master/rfcs/0003-top-level-assumptions.md"},"RFC link"),")."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="babel.config.json"',title:'"babel.config.json"'},'{\n  "targets": ">0.5%",\n  "assumptions": {\n    "noDocumentAll": true,\n    "noClassCalls": true\n  },\n  "presets": ["@babel/preset-env"]\n}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u26a0 This is advanced functionality. Please be careful when enabling assumptions, because they are not spec-compliant and may break your code in unexpected ways.")),(0,i.kt)("h2",{id:"arraylikeisiterable"},(0,i.kt)("inlineCode",{parentName:"h2"},"arrayLikeIsIterable")),(0,i.kt)("p",null,"When spreading or iterating an array-like object, assume that it implements a ",(0,i.kt)("inlineCode",{parentName:"p"},"[Symbol.iterator]")," method with the same behavior of the native ",(0,i.kt)("inlineCode",{parentName:"p"},"Array.prototype[Symbol.iterator]"),", and thus directly iterate over its element by index."),(0,i.kt)("p",null,"This can be useful, for example, to iterate DOM collections in older browsers."),(0,i.kt)("div",{is:"assumption-repl","data-assumption":"arrayLikeIsIterable","data-plugins":"transform-destructuring,transform-spread,transform-for-of"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'let images = $("img");\n\nfor (const img of images) {\n  console.log(img);\n}\n\nconst copy = [...images];\n'))),(0,i.kt)("h2",{id:"constantreexports"},(0,i.kt)("inlineCode",{parentName:"h2"},"constantReexports")),(0,i.kt)("p",null,"When re-exporting a binding from a module, assume that it doesn't change and thus it's safe to directly export it, as if you were doing"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'import { value as val } from "dep";\n\nexport const value = val;\n')),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"NOTE:")," This also affects the ",(0,i.kt)("inlineCode",{parentName:"p"},"transform-modules-umd")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"transform-modules-amd")," plugins."),(0,i.kt)("div",{is:"assumption-repl","data-assumption":"constantReexports","data-plugins":"transform-modules-commonjs"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'export { value } from "dependency";\n'))),(0,i.kt)("h2",{id:"constantsuper"},(0,i.kt)("inlineCode",{parentName:"h2"},"constantSuper")),(0,i.kt)("p",null,"The super class of a class can be changed at any time by using ",(0,i.kt)("inlineCode",{parentName:"p"},"Object.setPrototypeOf"),", making it impossible for Babel to statically know it. When this option is enabled, Babel assumes that it's never changed and thus it is always the value that was placed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"extends")," clause in the class declaration."),(0,i.kt)("div",{is:"assumption-repl","data-assumption":"constantSuper","data-plugins":"transform-classes"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"class Child extends Base {\n  method() {\n    super.method(2);\n  }\n}\n"))),(0,i.kt)("h2",{id:"enumerablemodulemeta"},(0,i.kt)("inlineCode",{parentName:"h2"},"enumerableModuleMeta")),(0,i.kt)("p",null,"When compiling ESM to CJS, Babel defines a ",(0,i.kt)("inlineCode",{parentName:"p"},"__esModule")," property on the ",(0,i.kt)("inlineCode",{parentName:"p"},"module.exports")," object. Assume that you never iterate over the keys of ",(0,i.kt)("inlineCode",{parentName:"p"},"module.exports")," or of ",(0,i.kt)("inlineCode",{parentName:"p"},'require("your-module")')," using ",(0,i.kt)("inlineCode",{parentName:"p"},"for..in")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Object.keys"),", and thus it's safe to define ",(0,i.kt)("inlineCode",{parentName:"p"},"__esModule")," as enumerable."),(0,i.kt)("div",{is:"assumption-repl","data-assumption":"enumerableModuleMeta","data-plugins":"transform-modules-commonjs"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"export const number = 2;\n"))),(0,i.kt)("h2",{id:"ignorefunctionlength"},(0,i.kt)("inlineCode",{parentName:"h2"},"ignoreFunctionLength")),(0,i.kt)("p",null,"Functions have a ",(0,i.kt)("inlineCode",{parentName:"p"},".length")," property that reflect the number of parameters up to the last non-default parameter. When this option is enabled, assume that the compiled code does not rely on this ",(0,i.kt)("inlineCode",{parentName:"p"},".length")," property."),(0,i.kt)("div",{is:"assumption-repl","data-assumption":"ignoreFunctionLength","data-plugins":"transform-parameters"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"function fn(a, b = 2, c, d = 3) {\n  return a + b + c + d;\n}\n"))),(0,i.kt)("h2",{id:"ignoretoprimitivehint"},(0,i.kt)("inlineCode",{parentName:"h2"},"ignoreToPrimitiveHint")),(0,i.kt)("p",null,"When using language features that might call the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive"},(0,i.kt)("inlineCode",{parentName:"a"},"[Symbol.toPrimitive]"))," method of objects, assume that they don't change their behavior based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"hint")," parameter."),(0,i.kt)("div",{is:"assumption-repl","data-assumption":"ignoreToPrimitiveHint","data-plugins":"transform-template-literals"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"let str = `a${foo}b`;\n"))),(0,i.kt)("h2",{id:"iterableisarray"},(0,i.kt)("inlineCode",{parentName:"h2"},"iterableIsArray")),(0,i.kt)("p",null,"When using an iterable object (in array destructuring, for-of or spreads), assume that it is an array."),(0,i.kt)("div",{is:"assumption-repl","data-assumption":"iterableIsArray","data-plugins":"transform-for-of,transform-destructuring,transform-spread"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"const [first, ...rest] = obj;\n\ncall(first, ...obj);\nlet arr = [first, ...obj];\n\nfor (const el of obj) {\n  console.log(el);\n}\n"))),(0,i.kt)("h2",{id:"mutabletemplateobject"},(0,i.kt)("inlineCode",{parentName:"h2"},"mutableTemplateObject")),(0,i.kt)("p",null,"Don't use ",(0,i.kt)("inlineCode",{parentName:"p"},"Object.freeze")," for the template object created for tagged template literals. This effectively means using the ",(0,i.kt)("inlineCode",{parentName:"p"},"taggedTemplateLiteralLoose")," helper instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"taggedTemplateLiteral"),"."),(0,i.kt)("div",{is:"assumption-repl","data-assumption":"mutableTemplateObject","data-plugins":"transform-template-literals"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"let str = tag`a`;\n"))),(0,i.kt)("h2",{id:"noclasscalls"},(0,i.kt)("inlineCode",{parentName:"h2"},"noClassCalls")),(0,i.kt)("p",null,"When transforming classes, assume that they are always instantiate with ",(0,i.kt)("inlineCode",{parentName:"p"},"new")," and they are never called as functions."),(0,i.kt)("div",{is:"assumption-repl","data-assumption":"noClassCalls","data-plugins":"transform-classes"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"class Test {\n  constructor() {\n    this.x = 2;\n  }\n}\n"))),(0,i.kt)("h2",{id:"nodocumentall"},(0,i.kt)("inlineCode",{parentName:"h2"},"noDocumentAll")),(0,i.kt)("p",null,"When using operators that check for ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),", assume that they are never used with the special value ",(0,i.kt)("inlineCode",{parentName:"p"},"document.all"),"."),(0,i.kt)("div",{is:"assumption-repl","data-assumption":"noDocumentAll","data-plugins":"proposal-optional-chaining,proposal-nullish-coalescing-operator"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"let score = points ?? 0;\nlet name = user?.name;\n"))),(0,i.kt)("h2",{id:"noincompletensimportdetection"},(0,i.kt)("inlineCode",{parentName:"h2"},"noIncompleteNsImportDetection")),(0,i.kt)("p",null,"Assume that no own property of a module export object is observed before initialization.\nFor example, when trying to access ",(0,i.kt)("inlineCode",{parentName:"p"},"ns.foo"),", it will return ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," both with this assumption turned on or off. The\ndifference is that ",(0,i.kt)("inlineCode",{parentName:"p"},'Object.prototype.hasOwnProperty.call(ns, "foo")')," would return ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," when\n",(0,i.kt)("inlineCode",{parentName:"p"},"noIncompleteNsImportDetection: true"),"."),(0,i.kt)("div",{is:"assumption-repl","data-assumption":"noIncompleteNsImportDetection","data-plugins":"transform-modules-commonjs"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"export var foo;\n"))),(0,i.kt)("h2",{id:"nonewarrows"},(0,i.kt)("inlineCode",{parentName:"h2"},"noNewArrows")),(0,i.kt)("p",null,"Assume that the code never tries to instantiate arrow functions using ",(0,i.kt)("inlineCode",{parentName:"p"},"new"),", which is disallowed according to the specification."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"NOTE:")," This assumption defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),". It will default to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," starting from Babel 8."),(0,i.kt)("div",{is:"assumption-repl","data-assumption":"noNewArrows","data-plugins":"transform-arrow-functions"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"let getSum = (a, b) => {\n  return { sum: a + b }\n};\n"))),(0,i.kt)("h2",{id:"objectrestnosymbols"},(0,i.kt)("inlineCode",{parentName:"h2"},"objectRestNoSymbols")),(0,i.kt)("p",null,"When using rest patterns in object destructuring, assume that destructured objects don't have symbol keys or that it's not a problem if they are not copied."),(0,i.kt)("div",{is:"assumption-repl","data-assumption":"objectRestNoSymbols","data-plugins":"transform-destructuring,proposal-object-rest-spread"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"let { name, ...attrs } = obj;\n"))),(0,i.kt)("h2",{id:"privatefieldsasproperties"},(0,i.kt)("inlineCode",{parentName:"h2"},"privateFieldsAsProperties")),(0,i.kt)("p",null,'Assume that "soft privacy" is enough for private fields, and thus they can be stored as public non-enumerable properties with an unique name (rather than using an external ',(0,i.kt)("inlineCode",{parentName:"p"},"WeakMap"),"). This makes debugging compiled private fields easier."),(0,i.kt)("div",{is:"assumption-repl","data-assumption":"privateFieldsAsProperties","data-plugins":"proposal-class-properties,proposal-private-methods"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"class Foo {\n  #method() {}\n\n  #field = 2;\n\n  run() {\n    this.#method();\n    this.#field++;\n  }\n}\n"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f When using inline Babel helpers, generated string keys are unique per-file and not globally. This could cause conflicts when extending classes from a different fields with private fields with the same name.")),(0,i.kt)("h2",{id:"privatefieldsassymbols"},(0,i.kt)("inlineCode",{parentName:"h2"},"privateFieldsAsSymbols")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"History"),"| Version | Changes | | --- | --- | | v7.21.0 | Added `privateFieldsAsSymbols` assumption |"),(0,i.kt)("p",null,'Assume that "soft privacy" is enough for private fields, and thus they can be stored as public properties with a symbol key (rather than using an external ',(0,i.kt)("inlineCode",{parentName:"p"},"WeakMap"),"). This makes debugging compiled private fields easier."),(0,i.kt)("div",{is:"assumption-repl","data-assumption":"privateFieldsAsSymbols","data-plugins":"proposal-class-properties,proposal-private-methods"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text",metastring:"assumption-input","assumption-input":!0},"class Foo {\n  #method() {}\n\n  #field = 2;\n\n  run() {\n    this.#method();\n    this.#field++;\n  }\n}\n"))),(0,i.kt)("h2",{id:"puregetters"},(0,i.kt)("inlineCode",{parentName:"h2"},"pureGetters")),(0,i.kt)("p",null,"Assume that getters, if present, don't have side-effects and can be accessed multiple times."),(0,i.kt)("div",{is:"assumption-repl","data-assumption":"pureGetters","data-plugins":"proposal-optional-chaining"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"let a = obj;\n\na.b?.();\n"))),(0,i.kt)("h2",{id:"setclassmethods"},(0,i.kt)("inlineCode",{parentName:"h2"},"setClassMethods")),(0,i.kt)("p",null,"When declaring classes, assume that methods don't shadow getters on the superclass and that the program doesn't depend on methods being non-enumerable. Thus, it's safe to assign methods rather than using ",(0,i.kt)("inlineCode",{parentName:"p"},"Object.defineProperty"),"."),(0,i.kt)("div",{is:"assumption-repl","data-assumption":"setClassMethods","data-plugins":"transform-classes"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"class Foo extends Bar {\n  method() {}\n\n  static check() {}\n}\n"))),(0,i.kt)("h2",{id:"setcomputedproperties"},(0,i.kt)("inlineCode",{parentName:"h2"},"setComputedProperties")),(0,i.kt)("p",null,"When using computed object properties, assume that the object doesn't contain properties that overwrite setter defined in the same object, and thus it's safe to assign them rather than defining them using ",(0,i.kt)("inlineCode",{parentName:"p"},"Object.defineProperty"),"."),(0,i.kt)("div",{is:"assumption-repl","data-assumption":"setComputedProperties","data-plugins":"transform-computed-properties"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"let obj = {\n  set name(value) {},\n  [key]: val\n}\n"))),(0,i.kt)("h2",{id:"setpublicclassfields"},(0,i.kt)("inlineCode",{parentName:"h2"},"setPublicClassFields")),(0,i.kt)("p",null,"When using public class fields, assume that they don't shadow any getter in the current class, in its subclasses or in its superclass. Thus, it's safe to assign them rather than using ",(0,i.kt)("inlineCode",{parentName:"p"},"Object.defineProperty"),"."),(0,i.kt)("div",{is:"assumption-repl","data-assumption":"setPublicClassFields","data-plugins":"proposal-class-properties"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"class Test {\n  field = 2;\n\n  static staticField = 3;\n}\n"))),(0,i.kt)("h2",{id:"setspreadproperties"},(0,i.kt)("inlineCode",{parentName:"h2"},"setSpreadProperties")),(0,i.kt)("p",null,"When using object spread, assume that spreaded properties don't trigger getters on the target object and thus it's safe to assign them rather than defining them using ",(0,i.kt)("inlineCode",{parentName:"p"},"Object.defineProperty"),"."),(0,i.kt)("div",{is:"assumption-repl","data-assumption":"setSpreadProperties","data-plugins":"proposal-object-rest-spread"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"const result = {\n  set name(value) {},\n  ...obj,\n};\n"))),(0,i.kt)("h2",{id:"skipforofiteratorclosing"},(0,i.kt)("inlineCode",{parentName:"h2"},"skipForOfIteratorClosing")),(0,i.kt)("p",null,"When using ",(0,i.kt)("inlineCode",{parentName:"p"},"for-of")," with an iterator, it should always be closed with ",(0,i.kt)("inlineCode",{parentName:"p"},".return()")," and with ",(0,i.kt)("inlineCode",{parentName:"p"},".throw()")," in case of an error. When this option is called Babel assumes that those methods are not defined or empty, and it avoids calling them."),(0,i.kt)("div",{is:"assumption-repl","data-assumption":"skipForOfIteratorClosing","data-plugins":"transform-for-of"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"for (const val of iterable) {\n  console.log(val);\n}\n"))),(0,i.kt)("h2",{id:"superiscallableconstructor"},(0,i.kt)("inlineCode",{parentName:"h2"},"superIsCallableConstructor")),(0,i.kt)("p",null,"When extending classes, assume that the super class is callable. This means that it won't be possible to extend native classes or built-ins, but only compiled classes or ES5 ",(0,i.kt)("inlineCode",{parentName:"p"},"function")," constructors."),(0,i.kt)("div",{is:"assumption-repl","data-assumption":"superIsCallableConstructor","data-plugins":"transform-classes"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"class Child extends Parent {\n  constructor() {\n    super(42);\n  }\n}\n"))))}h.isMDXComponent=!0}}]);