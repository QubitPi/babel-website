"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9131],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(n),m=a,f=c["".concat(p,".").concat(m)]||c[m]||h[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86100:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var r=n(25773),a=n(30808),o=(n(27378),n(35318)),i=["components"],s={layout:"post",title:"Announcing Babel's New Partnership with trivago!",author:"Henry Zhu",authorURL:"https://twitter.com/left_pad",date:"\xa0 2018-07-16 12:30:00",categories:"announcements",share_text:"Announcing Babel's New Partnership with trivago!"},p=void 0,l={permalink:"/babel-website/blog/2018/07/16/announcing-babels-new-partnership-with-trivago",source:"@site/blog/2018-07-16-announcing-babels-new-partnership-with-trivago.md",title:"Announcing Babel's New Partnership with trivago!",description:"We are happy to announce a new partnership with trivago, the hotel search website.",date:"2018-07-16T12:30:00.000Z",formattedDate:"July 16, 2018",tags:[],readingTime:2.54,hasTruncateMarker:!0,authors:[{name:"Henry Zhu",url:"https://twitter.com/left_pad"}],frontMatter:{layout:"post",title:"Announcing Babel's New Partnership with trivago!",author:"Henry Zhu",authorURL:"https://twitter.com/left_pad",date:"\xa0 2018-07-16 12:30:00",categories:"announcements",share_text:"Announcing Babel's New Partnership with trivago!"},prevItem:{title:"What's Happening With the Pipeline (|>) Proposal?",permalink:"/babel-website/blog/2018/07/19/whats-happening-with-the-pipeline-proposal"},nextItem:{title:"On Consuming (and Publishing) ES2015+ Packages",permalink:"/babel-website/blog/2018/06/26/on-consuming-and-publishing-es2015+-packages"}},u={authorsImageUrls:[void 0]},c=[],h={toc:c},m="wrapper";function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(m,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We are happy to announce a new partnership with ",(0,o.kt)("a",{parentName:"p",href:"https://www.trivago.com/"},"trivago"),", the hotel search website."),(0,o.kt)("p",null,"They've committed to fund our community with $2,000 per month, for a total of $24,000 per year!"),(0,o.kt)("p",null,'trivago is famous for their TV ads ("Hotel? trivago!") but also recognized for their substantial financial support for the ',(0,o.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"Webpack")," community. They have a ",(0,o.kt)("a",{parentName:"p",href:"https://tech.trivago.com/opensource/"},"track record of supporting Open Source communities")," without interfering with their work so we were very excited when they got in touch to offer their support for Babel."),(0,o.kt)("p",null,"Just as it is for many projects and companies all over the world, ",(0,o.kt)("a",{parentName:"p",href:"https://babeljs.io/"},"Babel")," is a key technology for trivago\u2019s applications. It enables high productivity from using the modern JavaScript language while still shipping compatible code for their users running older browsers like IE11. Internally, they utilize around a dozen custom Babel plugins and their own JavaScript framework, ",(0,o.kt)("a",{parentName:"p",href:"https://melody.js.org"},"Melody")," also heavily relies on Babel to do its magic."),(0,o.kt)("p",null,"In addition to those immediate benefits, Babel has a very concrete impact on the future of the ECMAScript specification and the shape of the language itself due to its unique place in the ecosystem for implementing proposals in the TC39 process as early as Stage 0."),(0,o.kt)("p",null,"This new partnership with trivago brings us one step closer toward reaching our goal of having full-time maintainers working on Babel, but we're still not there yet and will continue to try to find additional partners that want to help us reach a sustainable level of funding. We also desire to have the capacity to spend more time on programs like ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/left_pad/status/988019997023920128"},"RGSoC")," and mentoring new contributors/companies to get involved."),(0,o.kt)("p",null,"If you're working at a company that is using Babel, consider advocating a partnership with us to your supervisor. Webpack recently spoke to ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/pgotthardt"},"Patrick Gotthardt"),", our contact at trivago, about ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/webpack/trivago-sponsors-webpack-for-second-year-bfe6ca2f0702"},"their experience")," with investing in their community and he shared a lot of good reasons for why they're doing it at such a large scale."),(0,o.kt)("p",null,"As a community, we need the funding not just to maintain Babel in its current state but to support our efforts in working with TC39, the ECMA committee responsible for defining the future of the JavaScript language and the JavaScript package ecosystem. This includes both attending the bi-monthly meetings and just helping to implement all the new proposals and work towards bringing them to a stable, well-thought out state. This is a community effort that is mostly being done by a couple of volunteers: with the help of the ecosystem of companies that use the tool we can make the future of JavaScript amazing."),(0,o.kt)("p",null,"We hope that the new partnership with trivago ($24,000) as well as our already existing partnerships with Adobe ($12,000), Facebook ($10,000), the AMP Project ($9,600), Coinbase/Webflow ($5,500) and many other companies will encourage even more ",(0,o.kt)("a",{parentName:"p",href:"https://babeljs.io/users"},"companies who rely on Babel")," to also form a partnership with our community and to help us reach our ",(0,o.kt)("a",{parentName:"p",href:"https://opencollective.com/babel"},"goals")," of funding more full time developers not just to support the project itself but the community and language at large."),(0,o.kt)("p",null,"Please join us in moving JavaScript forward!"))}f.isMDXComponent=!0}}]);