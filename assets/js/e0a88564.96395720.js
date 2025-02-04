"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["6723"],{51984:function(e,n,t){t.r(n),t.d(n,{assets:function(){return o},contentTitle:function(){return r},default:function(){return h},frontMatter:function(){return i},metadata:function(){return a},toc:function(){return c}});var a=t(85799),s=t(24246),l=t(80980);let i={layout:"post",title:"Setting up Babel 6",authors:"james_kyle",date:new Date("2015-10-31T17:30:00.000Z"),categories:"announcements",share_text:"Setting up Babel 6"},r=void 0,o={authorsImageUrls:[void 0]},c=[{value:"Installing Babel",id:"installing-babel",level:2},{value:"Adding Plugins and Presets",id:"adding-plugins-and-presets",level:2}];function d(e){let n={blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Babel 6 is fresh off the press and we\u2019re still getting a lot sorted out. In the past two days we've seen more activity on GitHub and Slack than ever before. Everyone who has been helping out has been doing a great job."}),"\n",(0,s.jsx)(n.p,{children:"However, the documentation is still lacking at this point, I\u2019m currently going through and creating an entirely new \u201CGetting Started\u201D section of the site."}),"\n",(0,s.jsx)(n.p,{children:"This blog post will cover most of the basics until that\u2019s completed."}),"\n",(0,s.jsx)(n.h2,{id:"installing-babel",children:"Installing Babel"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"babel"})," package is no more. Previously, it was the entire compiler and all the transforms plus a bunch of CLI tools, but this lead to unnecessarily large downloads and was a bit confusing. Now we\u2019ve split it up into two separate packages: ",(0,s.jsx)(n.code,{children:"babel-cli"})," and ",(0,s.jsx)(n.code,{children:"babel-core"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"$ npm install --global babel-cli\n# or\n$ npm install --save-dev babel-core\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If you want to use Babel from the CLI you can install ",(0,s.jsx)(n.code,{children:"babel-cli"})," or if you want to use the Node API you can install ",(0,s.jsx)(n.code,{children:"babel-core"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Right now, most integrations haven\u2019t been updated for Babel 6, but that will be changing over the coming days."}),"\n",(0,s.jsx)(n.h2,{id:"adding-plugins-and-presets",children:"Adding Plugins and Presets"}),"\n",(0,s.jsx)(n.p,{children:"Babel 6 ships without any default transforms, so when you run Babel on a file it will just print it back out to you without changing anything."}),"\n",(0,s.jsx)(n.p,{children:"In order to start compiling various features you need to install plugins. For example if you want to use arrow functions:"}),"\n",(0,s.jsx)(n.p,{children:"First install the arrow functions plugin:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"$ npm install --save-dev babel-plugin-transform-es2015-arrow-functions\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Then add it to your ",(0,s.jsx)(n.code,{children:".babelrc"})," file like this:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'{\n  "plugins": ["transform-es2015-arrow-functions"]\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Now if you run Babel on a file with arrow functions they will be compiled. Easy right? Not so fast."}),"\n",(0,s.jsx)(n.p,{children:"Babel plugins are designed to compile down incrementally. Say if you wanted to use an ES2019 feature, it would be compiled down to ES2018 then ES2017 and so on. This ensures that people can use native implementation if they want to."}),"\n",(0,s.jsxs)(n.p,{children:["This even happens within a single specification, for example ES2015 constants will be compiled to ES2015 ",(0,s.jsx)(n.code,{children:"let"})," variables. So if you want it to go all the way down to ES5 you need to compile that as well."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"$ npm install --save-dev babel-plugin-check-es2015-constants\n$ npm install --save-dev babel-plugin-transform-es2015-block-scoping\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'{\n  "plugins": [\n    "check-es2015-constants",\n    "transform-es2015-block-scoping"\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"These dependencies aren\u2019t easy to keep track and if you don\u2019t want to manually specify them all you may install a preset instead."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"$ npm install --save-dev babel-preset-es2015\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'{\n  "presets": ["es2015"]\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"To Include all JavaScript versions:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"$ npm install --save-dev babel-preset-env\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'{\n  "presets": ["env"]\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"React also has it\u2019s own preset:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"$ npm install --save-dev babel-preset-react\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'{\n  "presets": ["react"]\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["This is also what the ",(0,s.jsx)(n.code,{children:"stage"})," option has been replaced with:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"$ npm install --save-dev babel-preset-stage-2\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'{\n  "presets": ["stage-2"]\n}\n'})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Note: Stage presets include all the stages above them automatically (ie. stage 1 includes 2 and 3)"}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},80980:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var a=t(27378);let s={},l=a.createContext(s);function i(e){let n=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(l.Provider,{value:n},e.children)}},85799:function(e){e.exports=JSON.parse('{"permalink":"/babel-website/blog/2015/10/31/setting-up-babel-6","source":"@site/blog/2015-10-31-setting-up-babel-6.md","title":"Setting up Babel 6","description":"Babel 6 is fresh off the press and we\u2019re still getting a lot sorted out. In the past two days we\'ve seen more activity on GitHub and Slack than ever before. Everyone who has been helping out has been doing a great job.","date":"2015-10-31T17:30:00.000Z","tags":[],"readingTime":2.585,"hasTruncateMarker":true,"authors":[{"name":"James Kyle","url":"https://twitter.com/thejameskyle","key":"james_kyle","page":null}],"frontMatter":{"layout":"post","title":"Setting up Babel 6","authors":"james_kyle","date":"2015-10-31T17:30:00.000Z","categories":"announcements","share_text":"Setting up Babel 6"},"unlisted":false,"prevItem":{"title":"Babel Doctor","permalink":"/babel-website/blog/2015/11/03/babel-doctor"},"nextItem":{"title":"6.0.0 Released","permalink":"/babel-website/blog/2015/10/29/6.0.0"}}')}}]);