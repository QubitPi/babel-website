"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7237"],{29617:function(e,t,n){n.r(t),n.d(t,{assets:function(){return o},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return c}});var s=n(90328),r=n(24246),l=n(80980);let a={layout:"post",title:"Babel <3 React",authors:"james_kyle",date:new Date("2015-02-23T10:00:00.000Z"),categories:"announcements",share_text:"Babel <3 React"},i=void 0,o={authorsImageUrls:[void 0]},c=[];function d(e){let t={a:"a",blockquote:"blockquote",code:"code",em:"em",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"One of the things that surprises people quite often is that Babel supports JSX\nout of the box."}),"\n",(0,r.jsx)(t.p,{children:"Let me show you just how easy it is to switch:"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," There are ",(0,r.jsx)(t.em,{children:"tons"})," of ways to use Babel, I'll only list a few of them\nhere. If you'd like to see a more complete list check out our\n",(0,r.jsx)(t.a,{href:"/setup",children:"Using Babel"})," page."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"In the Browser"})," (",(0,r.jsx)(t.a,{href:"/setup#browser/",children:"docs"}),")"]}),"\n",(0,r.jsx)(t.p,{children:"Before:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:"<script type='text/jsx'><\/script>\n"})}),"\n",(0,r.jsx)(t.p,{children:"After:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:"<script type='text/babel'><\/script>\n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"In Browserify"})," (",(0,r.jsx)(t.a,{href:"/setup#browserify",children:"docs"}),")"]}),"\n",(0,r.jsx)(t.p,{children:"Before:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",metastring:'title="Shell"',children:"$ browserify -t reactify main.js\n"})}),"\n",(0,r.jsx)(t.p,{children:"After:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",metastring:'title="Shell"',children:"$ browserify -t babelify main.js\n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"In Node"})," (",(0,r.jsx)(t.a,{href:"/setup#require/",children:"docs"}),")"]}),"\n",(0,r.jsx)(t.p,{children:"Before:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:'title="JavaScript"',children:"require('node-jsx').install();\n"})}),"\n",(0,r.jsx)(t.p,{children:"After:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:'title="JavaScript"',children:"require('babel/register');\n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"In Webpack"})," (",(0,r.jsx)(t.a,{href:"/setup#webpack",children:"docs"}),")"]}),"\n",(0,r.jsx)(t.p,{children:"Before:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:'title="JavaScript"',children:"loaders: [\n  { test: /\\.js$/, exclude: /node_modules/, loader: 'jsx-loader'}\n]\n"})}),"\n",(0,r.jsx)(t.p,{children:"After:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:'title="JavaScript"',children:"loaders: [\n  { test: /\\.js$/, exclude: /node_modules/, loader: 'babel-loader'}\n]\n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"In Gulp"})," (",(0,r.jsx)(t.a,{href:"/setup#gulp",children:"docs"}),")"]}),"\n",(0,r.jsx)(t.p,{children:"Before:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:'title="JavaScript"',children:"gulp.src('views/**/*.js')\n\xa0\xa0\xa0\xa0.pipe(jsx())\n\xa0\xa0\xa0\xa0.pipe(gulp.dest('dist'));\n"})}),"\n",(0,r.jsx)(t.p,{children:"After:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:'title="JavaScript"',children:"gulp.src('views/**/*.js')\n    .pipe(babel())\n    .pipe(gulp.dest('dist'));\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsxs)(t.p,{children:["The list goes on, but you probably get how simple it is by now. If you didn't\nsee the tool you are looking for don't worry we have a full list of them on our\n",(0,r.jsx)(t.a,{href:"/setup",children:"Using Babel"})," page."]}),"\n",(0,r.jsxs)(t.p,{children:["If you need more help getting setup be sure to read our ",(0,r.jsx)(t.a,{href:"/setup#jsx/",children:"JSX"}),"\ndocs or come ask other Babel users in our\n",(0,r.jsx)(t.a,{href:"https://gitter.im/babel/babel",children:"support chat"}),"."]}),"\n",(0,r.jsx)("p",{class:"text-right",children:"\u2014 The Babel team"})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},80980:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return a}});var s=n(27378);let r={},l=s.createContext(r);function a(e){let t=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(l.Provider,{value:t},e.children)}},90328:function(e){e.exports=JSON.parse('{"permalink":"/babel-website/blog/2015/02/23/babel-loves-react","source":"@site/blog/2015-02-23-babel-loves-react.md","title":"Babel <3 React","description":"One of the things that surprises people quite often is that Babel supports JSX","date":"2015-02-23T10:00:00.000Z","tags":[],"readingTime":1.145,"hasTruncateMarker":true,"authors":[{"name":"James Kyle","url":"https://twitter.com/thejameskyle","key":"james_kyle","page":null}],"frontMatter":{"layout":"post","title":"Babel <3 React","authors":"james_kyle","date":"2015-02-23T10:00:00.000Z","categories":"announcements","share_text":"Babel <3 React"},"unlisted":false,"prevItem":{"title":"5.0.0 Released","permalink":"/babel-website/blog/2015/03/31/5.0.0"},"nextItem":{"title":"Not Born to Die","permalink":"/babel-website/blog/2015/02/15/not-born-to-die"}}')}}]);