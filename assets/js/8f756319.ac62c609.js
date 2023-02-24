"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7460],{35318:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,f=u["".concat(p,".").concat(d)]||u[d]||b[d]||i;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79694:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a=n(25773),r=n(30808),i=(n(27378),n(35318)),o=["components"],l={id:"babel-plugin-syntax-pipeline-operator",title:"@babel/plugin-syntax-pipeline-operator",sidebar_label:"syntax-pipeline-operator"},p=void 0,c={unversionedId:"babel-plugin-syntax-pipeline-operator",id:"babel-plugin-syntax-pipeline-operator",title:"@babel/plugin-syntax-pipeline-operator",description:"#### Syntax only",source:"@site/../docs/plugin-syntax-pipeline-operator.md",sourceDirName:".",slug:"/babel-plugin-syntax-pipeline-operator",permalink:"/babel-website/docs/babel-plugin-syntax-pipeline-operator",draft:!1,editUrl:"https://github.com/babel/website/edit/main/docs/../docs/plugin-syntax-pipeline-operator.md",tags:[],version:"current",frontMatter:{id:"babel-plugin-syntax-pipeline-operator",title:"@babel/plugin-syntax-pipeline-operator",sidebar_label:"syntax-pipeline-operator"}},s={},u=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"With a configuration file (Recommended)",id:"with-a-configuration-file-recommended",level:3},{value:"Via CLI",id:"via-cli",level:3},{value:"Via Node API",id:"via-node-api",level:3}],b={toc:u},d="wrapper";function f(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)(d,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("h4",{parentName:"blockquote",id:"syntax-only"},"Syntax only"),(0,i.kt)("p",{parentName:"blockquote"},"It's unlikely you want to use this plugin directly as it only enables Babel to parse this syntax. Instead, use ",(0,i.kt)("a",{parentName:"p",href:"/babel-website/docs/babel-plugin-proposal-pipeline-operator"},"plugin-proposal-pipeline-operator")," to ",(0,i.kt)("em",{parentName:"p"},"both")," parse and transform this syntax.")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Shell"',title:'"Shell"'},"$ npm install @babel/plugin-syntax-pipeline-operator\n")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"with-a-configuration-file-recommended"},"With a configuration file (Recommended)"),(0,i.kt)("p",null,"With ",(0,i.kt)("inlineCode",{parentName:"p"},"^^")," topic token:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="babel.config.json"',title:'"babel.config.json"'},'{\n  "plugins": [\n    [ "@babel/plugin-syntax-pipeline-operator", { "topicToken": "^^" } ]\n  ]\n}\n')),(0,i.kt)("p",null,"With ",(0,i.kt)("inlineCode",{parentName:"p"},"@@")," topic token:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="babel.config.json"',title:'"babel.config.json"'},'{\n  "plugins": [\n    [ "@babel/plugin-syntax-pipeline-operator", { "topicToken": "@@" } ]\n  ]\n}\n')),(0,i.kt)("h3",{id:"via-cli"},"Via CLI"),(0,i.kt)("p",null,"Because this plugin requires a configuration option, it ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/babel/babel/issues/4161"},"cannot be directly configured from the CLI"),". Use a ",(0,i.kt)("a",{parentName:"p",href:"/babel-website/docs/config-files"},"config file")," instead with the CLI, to add and configure this plugin."),(0,i.kt)("h3",{id:"via-node-api"},"Via Node API"),(0,i.kt)("p",null,"With ",(0,i.kt)("inlineCode",{parentName:"p"},"^^")," topic token:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'require("@babel/core").transformSync("code", {\n  plugins: [\n    [ "@babel/plugin-syntax-pipeline-operator", { topicToken: "^^" } ],\n  ],\n});\n')),(0,i.kt)("p",null,"With ",(0,i.kt)("inlineCode",{parentName:"p"},"@@")," topic token:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'require("@babel/core").transformSync("code", {\n  plugins: [\n    [ "@babel/plugin-syntax-pipeline-operator", { topicToken: "@@" } ],\n  ],\n});\n')))}f.isMDXComponent=!0}}]);