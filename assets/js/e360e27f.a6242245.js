"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["1866"],{65317:function(e,n,s){s.r(n),s.d(n,{metadata:()=>i,contentTitle:()=>o,default:()=>p,assets:()=>a,toc:()=>c,frontMatter:()=>l});var i=JSON.parse('{"id":"plugins","title":"Plugins","description":"Babel\'s code transformations are enabled by applying plugins (or presets) to your configuration file.","source":"@site/../docs/plugins.md","sourceDirName":".","slug":"/plugins","permalink":"/docs/plugins","draft":false,"unlisted":false,"editUrl":"https://github.com/babel/website/edit/main/docs/../docs/plugins.md","tags":[],"version":"current","frontMatter":{"id":"plugins","title":"Plugins"},"sidebar":"docs","previous":{"title":"Config Options","permalink":"/docs/options"},"next":{"title":"Plugins List","permalink":"/docs/plugins-list"}}'),t=s("24246"),r=s("80980");let l={id:"plugins",title:"Plugins"},o=void 0,a={},c=[{value:"Using a Plugin",id:"using-a-plugin",level:2},{value:"Transform Plugins",id:"transform-plugins",level:2},{value:"Syntax Plugins",id:"syntax-plugins",level:2},{value:"Plugin Ordering",id:"plugin-ordering",level:2},{value:"Plugin Options",id:"plugin-options",level:2},{value:"Plugin Development",id:"plugin-development",level:2}];function d(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Babel's code transformations are enabled by applying plugins (or ",(0,t.jsx)(n.a,{href:"/docs/presets",children:"presets"}),") to your ",(0,t.jsx)(n.a,{href:"/docs/config-files",children:"configuration file"}),"."]}),"\n",(0,t.jsx)("div",{id:"pluginpreset-paths"}),"\n",(0,t.jsx)(n.h2,{id:"using-a-plugin",children:"Using a Plugin"}),"\n",(0,t.jsxs)(n.p,{children:["If the plugin is on ",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/search?q=babel-plugin",children:"npm"}),", you can pass in the name of the plugin and Babel will check that it's installed in ",(0,t.jsx)(n.code,{children:"node_modules"}),". This is added to the ",(0,t.jsx)(n.a,{href:"/docs/options#presets",children:"plugins"})," config option, which takes an array."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="babel.config.json"',children:'{\n  "plugins": ["babel-plugin-myPlugin", "@babel/plugin-transform-runtime"]\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"You can also specify a relative/absolute path to your plugin."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="babel.config.json"',children:'{\n  "plugins": ["./node_modules/asdf/plugin"]\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"/docs/options#name-normalization",children:"name normalization"})," for more specifics on configuring the path of a plugin or preset."]}),"\n",(0,t.jsx)(n.h2,{id:"transform-plugins",children:"Transform Plugins"}),"\n",(0,t.jsx)(n.p,{children:"These plugins apply transformations to your code."}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Transform plugins will enable the corresponding syntax plugin so you don't have to specify both."})}),"\n",(0,t.jsx)(n.h2,{id:"syntax-plugins",children:"Syntax Plugins"}),"\n",(0,t.jsxs)(n.p,{children:["Most syntax is transformable by Babel. In rarer cases (if the transform isn't implemented yet, or there isn't a default way to do so), you can use plugins such as ",(0,t.jsx)(n.code,{children:"@babel/plugin-syntax-bigint"})," to only allow Babel to ",(0,t.jsx)(n.strong,{children:"parse"})," specific types of syntax. Or you want to preserve the source code because you only want Babel to do code analysis or codemods."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"You don't need to specify the syntax plugin if the corresponding transform plugin is used already, since it enables it automatically."})}),"\n",(0,t.jsxs)(n.p,{children:["Alternatively, you can also provide any ",(0,t.jsxs)(n.a,{href:"/docs/babel-parser#plugins",children:[(0,t.jsx)(n.code,{children:"plugins"})," option"]})," from the Babel parser:"]}),"\n",(0,t.jsxs)(n.p,{children:["Your ",(0,t.jsx)(n.code,{children:".babelrc"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="JSON"',children:'{\n  "parserOpts": {\n    "plugins": ["jsx", "flow"]\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"plugin-ordering",children:"Plugin Ordering"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Ordering matters for each visitor in the plugin."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:'This means if two transforms both visit the "Program" node, the transforms will run in either plugin or preset order.'}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Plugins run before Presets."}),"\n",(0,t.jsx)(n.li,{children:"Plugin ordering is first to last."}),"\n",(0,t.jsx)(n.li,{children:"Preset ordering is reversed (last to first)."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="babel.config.json"',children:'{\n  "plugins": ["transform-decorators-legacy", "transform-class-properties"]\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Will run ",(0,t.jsx)(n.code,{children:"transform-decorators-legacy"})," then ",(0,t.jsx)(n.code,{children:"transform-class-properties"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["It is important to remember that with presets, the order is ",(0,t.jsx)(n.em,{children:"reversed"}),". The following:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="babel.config.json"',children:'{\n  "presets": ["@babel/preset-env", "@babel/preset-react"]\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Will run in the following order: ",(0,t.jsx)(n.code,{children:"@babel/preset-react"})," then ",(0,t.jsx)(n.code,{children:"@babel/preset-env"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"plugin-options",children:"Plugin Options"}),"\n",(0,t.jsx)(n.p,{children:"Both plugins and presets can have options specified by wrapping the name and an options object in an array inside your config."}),"\n",(0,t.jsx)(n.p,{children:"For specifying no options, these are all equivalent:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="babel.config.json"',children:'{\n  "plugins": ["pluginA", ["pluginA"], ["pluginA", {}]]\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"To specify an option, pass an object with the keys as the option names."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="babel.config.json"',children:'{\n  "plugins": [\n    [\n      "transform-async-to-module-method",\n      {\n        "module": "bluebird",\n        "method": "coroutine"\n      }\n    ]\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Settings options for presets works exactly the same:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="babel.config.json"',children:'{\n  "presets": [\n    [\n      "env",\n      {\n        "loose": true,\n        "modules": false\n      }\n    ]\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"plugin-development",children:"Plugin Development"}),"\n",(0,t.jsxs)(n.p,{children:["Please refer to the excellent ",(0,t.jsx)(n.a,{href:"https://github.com/thejameskyle/babel-handbook",children:"babel-handbook"}),"\nto learn how to create your own plugins."]}),"\n",(0,t.jsx)(n.p,{children:"The simple plugin that reverses names (from the homepage):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'export default function() {\n  return {\n    visitor: {\n      Identifier(path) {\n        const name = path.node.name;\n        // reverse the name: JavaScript -> tpircSavaJ\n        path.node.name = name\n          .split("")\n          .reverse()\n          .join("");\n      },\n    },\n  };\n}\n'})})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},80980:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return l}});var i=s(27378);let t={},r=i.createContext(t);function l(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);