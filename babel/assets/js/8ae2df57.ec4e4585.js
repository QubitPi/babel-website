"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8080],{35318:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return f}});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,f=u["".concat(i,".").concat(m)]||u[m]||b[m]||s;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<s;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},62471:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=a(25773),r=a(30808),s=(a(27378),a(35318)),o=["components"],l={id:"presets",title:"Presets"},i=void 0,p={unversionedId:"presets",id:"presets",title:"Presets",description:"Babel presets can act as sharable set of Babel plugins and/or config options.",source:"@site/../docs/presets.md",sourceDirName:".",slug:"/presets",permalink:"/babel-website/docs/presets",draft:!1,editUrl:"https://github.com/babel/website/edit/main/docs/../docs/presets.md",tags:[],version:"current",frontMatter:{id:"presets",title:"Presets"},sidebar:"docs",previous:{title:"Config Options",permalink:"/babel-website/docs/options"},next:{title:"Plugins",permalink:"/babel-website/docs/plugins"}},c={},u=[{value:"Official Presets",id:"official-presets",level:2},{value:"Other Integrations",id:"other-integrations",level:2},{value:"Using a Preset",id:"using-a-preset",level:2},{value:"Stage-X (Experimental Presets)",id:"stage-x-experimental-presets",level:2},{value:"Creating a Preset",id:"creating-a-preset",level:2},{value:"Preset Ordering",id:"preset-ordering",level:2},{value:"Preset Options",id:"preset-options",level:2}],b={toc:u};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Babel presets can act as sharable set of Babel plugins and/or config ",(0,s.kt)("a",{parentName:"p",href:"/babel-website/docs/options"},(0,s.kt)("inlineCode",{parentName:"a"},"options")),"."),(0,s.kt)("h2",{id:"official-presets"},"Official Presets"),(0,s.kt)("p",null,"We've assembled a few presets for common environments:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/babel-website/docs/babel-preset-env"},"@babel/preset-env")," for compiling ES2015+ syntax"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/babel-website/docs/babel-preset-typescript"},"@babel/preset-typescript")," for ",(0,s.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org"},"TypeScript")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/babel-website/docs/babel-preset-react"},"@babel/preset-react")," for ",(0,s.kt)("a",{parentName:"li",href:"https://reactjs.org/"},"React")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/babel-website/docs/babel-preset-flow"},"@babel/preset-flow")," for ",(0,s.kt)("a",{parentName:"li",href:"https://flow.org/"},"Flow"))),(0,s.kt)("h2",{id:"other-integrations"},"Other Integrations"),(0,s.kt)("p",null,"If you aren't using Babel directly, the framework you are using may have its own configuration for you to use or extend. Many other community maintained presets are available ",(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/search?q=babel-preset"},"on npm"),"!"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/advanced-features/customizing-babel-config"},"Next.js")," | ",(0,s.kt)("a",{parentName:"p",href:"https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-build#babel"},"Nuxt.js")," | ",(0,s.kt)("a",{parentName:"p",href:"https://en.parceljs.org/javascript.html#babel"},"Parcel")," | ",(0,s.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/getting-started#using-babel"},"Jest")," | ",(0,s.kt)("a",{parentName:"p",href:"https://www.gatsbyjs.com/docs/how-to/custom-configuration/babel"},"Gatsby")),(0,s.kt)("div",{id:"preset-paths"}),(0,s.kt)("h2",{id:"using-a-preset"},"Using a Preset"),(0,s.kt)("p",null,"Within a Babel config, if the preset is on ",(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/search?q=babel-preset"},"npm"),", you can pass in the name of the preset and Babel will check that it's installed in ",(0,s.kt)("inlineCode",{parentName:"p"},"node_modules")," already. This is added to the ",(0,s.kt)("a",{parentName:"p",href:"/babel-website/docs/options#presets"},"presets")," config option, which takes an array."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="babel.config.json"',title:'"babel.config.json"'},'{\n  "presets": ["babel-preset-myPreset", "@babel/preset-env"]\n}\n')),(0,s.kt)("p",null,"Otherwise, you can also specify a relative or absolute path to your presets."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="babel.config.json"',title:'"babel.config.json"'},'{\n  "presets": ["./myProject/myPreset"]\n}\n')),(0,s.kt)("p",null,"See ",(0,s.kt)("a",{parentName:"p",href:"/babel-website/docs/options#name-normalization"},"name normalization")," for more specifics on configuring the path of a plugin or preset."),(0,s.kt)("h2",{id:"stage-x-experimental-presets"},"Stage-X (Experimental Presets)"),(0,s.kt)("blockquote",{class:"alert alert--danger"},(0,s.kt)("h4",null,"Deprecated"),(0,s.kt)("p",null,"As of Babel 7, we've decided to deprecate the Stage-X presets and stop publishing them. Because these proposals are inherently subject to change, it seems better to ask users to specify individual proposals as plugins vs. a catch all preset that you would need to check up on anyway. Check out our ",(0,s.kt)("a",{href:"https://babeljs.io/blog/2018/07/27/removing-babels-stage-presets"},"blog")," for more context.")),(0,s.kt)("p",null,"Any transforms in stage-x presets are changes to the language that haven't been approved to be part of a release of JavaScript (such as ES6/ES2015)."),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/tc39"},"TC39")," categorizes proposals into the following stages:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/babel-website/docs/babel-preset-stage-0"},"Stage 0")," - Strawman: just an idea, possible Babel plugin."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/babel-website/docs/babel-preset-stage-1"},"Stage 1")," - Proposal: this is worth working on."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/babel-website/docs/babel-preset-stage-2"},"Stage 2")," - Draft: initial spec."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/babel-website/docs/babel-preset-stage-3"},"Stage 3")," - Candidate: complete spec and initial browser implementations."),(0,s.kt)("li",{parentName:"ul"},"Stage 4 - Finished: will be added to the next yearly release.")),(0,s.kt)("p",null,"For more information, be sure to check out the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposals"},"current TC39 proposals")," and its ",(0,s.kt)("a",{parentName:"p",href:"https://tc39.github.io/process-document"},"process document"),"."),(0,s.kt)("p",null,"The TC39 stage process is also explained in detail across a few posts by Yehuda Katz (@wycatz) over at ",(0,s.kt)("a",{parentName:"p",href:"https://thefeedbackloop.xyz"},"thefeedbackloop.xyz"),": ",(0,s.kt)("a",{parentName:"p",href:"https://thefeedbackloop.xyz/tc39-a-process-sketch-stages-0-and-1/"},"Stage 0 and 1"),", ",(0,s.kt)("a",{parentName:"p",href:"https://thefeedbackloop.xyz/tc39-process-sketch-stage-2/"},"Stage 2"),", ",(0,s.kt)("a",{parentName:"p",href:"https://thefeedbackloop.xyz/tc39-process-sketch-stage-3/"},"Stage 3")),(0,s.kt)("h2",{id:"creating-a-preset"},"Creating a Preset"),(0,s.kt)("p",null,"To make your own preset (either for local usage or to npm), you need to export a config object."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"It could just return an array of plugins..")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'module.exports = function() {\n  return {\n    plugins: ["pluginA", "pluginB", "pluginC"],\n  };\n};\n')),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Presets can contain other presets, and plugins with options.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'module.exports = () => ({\n  presets: [require("@babel/preset-env")],\n  plugins: [\n    [require("@babel/plugin-proposal-class-properties"), { loose: true }],\n    require("@babel/plugin-proposal-object-rest-spread"),\n  ],\n});\n')),(0,s.kt)("p",null,"For more info, check out the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/thejameskyle/babel-handbook/blob/master/translations/en/user-handbook.md#making-your-own-preset"},"babel handbook")," section on presets."),(0,s.kt)("h2",{id:"preset-ordering"},"Preset Ordering"),(0,s.kt)("p",null,"Preset ordering is reversed (last to first)."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="babel.config.json"',title:'"babel.config.json"'},'{\n  "presets": ["a", "b", "c"]\n}\n')),(0,s.kt)("p",null,"Will run in the following order: ",(0,s.kt)("inlineCode",{parentName:"p"},"c"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"b"),", then ",(0,s.kt)("inlineCode",{parentName:"p"},"a"),"."),(0,s.kt)("p",null,'This was mostly for ensuring backwards compatibility, since most users listed "es2015" before "stage-0".'),(0,s.kt)("h2",{id:"preset-options"},"Preset Options"),(0,s.kt)("p",null,"Both plugins and presets can have options specified by wrapping the name and an options object in an array inside your config."),(0,s.kt)("p",null,"For specifying no options, these are all equivalent:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="babel.config.json"',title:'"babel.config.json"'},'{\n  "presets": [\n    "presetA", // bare string\n    ["presetA"], // wrapped in array\n    ["presetA", {}] // 2nd argument is an empty options object\n  ]\n}\n')),(0,s.kt)("p",null,"To specify an option, pass an object with the keys as the option names."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="babel.config.json"',title:'"babel.config.json"'},'{\n  "presets": [\n    [\n      "@babel/preset-env",\n      {\n        "loose": true,\n        "modules": false\n      }\n    ]\n  ]\n}\n')))}m.isMDXComponent=!0}}]);