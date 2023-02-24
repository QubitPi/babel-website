"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[660],{35318:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return d}});var n=a(27378);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=o,d=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return a?n.createElement(d,i(i({ref:t},h),{},{components:a})):n.createElement(d,i({ref:t},h))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},23433:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=a(25773),o=a(30808),r=(a(27378),a(35318)),i=["components"],l={layout:"post",title:"Babel's Funding Plans",author:"Henry Zhu",authorURL:"https://twitter.com/left_pad",date:new Date("2019-11-08T12:00:00.000Z"),categories:"announcements",share_text:"Babel's Funding Plans"},s=void 0,p={permalink:"/babel-website/blog/2019/11/08/babels-funding-plans",source:"@site/blog/2019-11-08-babels-funding-plans.md",title:"Babel's Funding Plans",description:"One of the greatest strengths of open source software is that it is open and free for anyone to contribute. This also leads to one of its greatest challenges, which is to support consistent, sustainable maintenance.",date:"2019-11-08T12:00:00.000Z",formattedDate:"November 8, 2019",tags:[],readingTime:8.32,hasTruncateMarker:!0,authors:[{name:"Henry Zhu",url:"https://twitter.com/left_pad"}],frontMatter:{layout:"post",title:"Babel's Funding Plans",author:"Henry Zhu",authorURL:"https://twitter.com/left_pad",date:"2019-11-08T12:00:00.000Z",categories:"announcements",share_text:"Babel's Funding Plans"},prevItem:{title:"7.8.0 Released: ECMAScript 2020, .mjs configuration files and @babel/cli improvements",permalink:"/babel-website/blog/2020/01/11/7.8.0"},nextItem:{title:"7.7.0 Released: Error recovery and TypeScript 3.7",permalink:"/babel-website/blog/2019/11/05/7.7.0"}},h={authorsImageUrls:[void 0]},u=[{value:"New Challenges",id:"new-challenges",level:2},{value:"Funding Plans",id:"funding-plans",level:2},{value:"How You Can Help",id:"how-you-can-help",level:2},{value:"Our Goals",id:"our-goals",level:2},{value:"How Companies and Individuals Have Helped Before",id:"how-companies-and-individuals-have-helped-before",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:u},m="wrapper";function d(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"One of the greatest strengths of open source software is that it is open and free for anyone to contribute. This also leads to one of its greatest challenges, which is to support consistent, sustainable maintenance."),(0,r.kt)("p",null,"Babel isn't a company. As mentioned in the ",(0,r.kt)("a",{parentName:"p",href:"https://babeljs.io/blog/2018/08/27/7.0.0#maintainers-are-people"},"7.0.0 post"),", the all-volunteer Babel team (sans Henry) has been doing its best to steward the project and handle all the expectations of the community. We're glad that we have continued to make releases, but even keeping up-to-date with reported issues is difficult to manage, let alone our integrations with other tools, new proposals, and effect on the greater ecosystem."),(0,r.kt)("p",null,"In March 2018, Henry ",(0,r.kt)("a",{parentName:"p",href:"https://www.henryzoo.com/leaving-behance/"},"left his job")," to start ",(0,r.kt)("a",{parentName:"p",href:"https://www.henryzoo.com/in-pursuit-of-open-source-part-1/"},"working on securing more funding for Babel"),". After a lot of work and support from the community, the team was able to fund Henry as a full-time maintainer."),(0,r.kt)("p",null,"This has been a big win for the team, but we're finding that it is not enough."),(0,r.kt)("h2",{id:"new-challenges"},"New Challenges"),(0,r.kt)("p",null,"Babel has come a long way from ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=fntd0sPMOtQ"},'its origins as "6to5"'),", growing beyond just the ",(0,r.kt)("em",{parentName:"p"},"adoption")," and implementation of language features in JavaScript. It has become a key part in its ",(0,r.kt)("em",{parentName:"p"},"development"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Babel's popularity has increased exponentially, going from 3M downloads per week in March 2018 to 16M downloads per week today.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Babel is now involved in the ",(0,r.kt)("a",{parentName:"p",href:"https://tc39.es"},"TC39"),' standards process as participating members in meetings and discussions. "Is there a Babel plugin already?" is a common question for new proposals.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Babel has become so embedded as underlying infrastructure that most developers interact with it indirectly, including in CLIs such as ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app"},(0,r.kt)("inlineCode",{parentName:"a"},"create-react-app")),", bundlers like ",(0,r.kt)("a",{parentName:"p",href:"https://parceljs.org"},"Parcel"),", frameworks like ",(0,r.kt)("a",{parentName:"p",href:"https://nextjs.org"},"Next.js"),", and many npm libraries."))),(0,r.kt)("p",null,"Widespread adoption brings with it new challenges, and the team has been grappling with issues around maintenance and sustainability. The project has grown beyond the resources the team has available, and we'd like to share our plan for addressing this problem."),(0,r.kt)("h2",{id:"funding-plans"},"Funding Plans"),(0,r.kt)("p",null,"We believe that Babel would benefit immensely from more than one person being funded to work on the project, and want to secure funding for three additional team members, ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/NicoloRibaudo"},"Nicol\xf2"),", ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/JLHwung"},"J\xf9nli\xe0ng"),", and ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/kai_cataldo"},"Kai")," as part-time maintainers."),(0,r.kt)("p",null,"We are setting up an additional funding goal of $12,000/month through ",(0,r.kt)("a",{parentName:"p",href:"https://opencollective.com/babel"},"Open Collective"),". This is $4,000/month each, which is the target we have defined for a part-time salary."),(0,r.kt)("p",null,"We discussed a number of different approaches as a team \u2013 creating an hourly rate for contributors, setting aside grants for features, bug bounties for specific issues \u2013 and ultimately decided that a stable income would lead to higher quality work (no pressure to rush development), the ability to dedicate time to plan for a roadmap in a more holistic manner, being able to take time for breaks and vacation, and not having to worry about where their next paycheck is coming from."),(0,r.kt)("p",null,"That being said, we will continue to evaluate and be open/transparent with making changes as needed."),(0,r.kt)("p",null,"We'd like to give a huge shoutout to our Open Collective sponsors: ",(0,r.kt)("a",{parentName:"p",href:"https://handshake.org/"},"Handshake"),", ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/airbnbeng"},"Airbnb"),", ",(0,r.kt)("a",{parentName:"p",href:"https://amp.dev/"},"AMP"),", ",(0,r.kt)("a",{parentName:"p",href:"https://opensource.facebook.com"},"Facebook"),", ",(0,r.kt)("a",{parentName:"p",href:"https://tech.trivago.com/opensource/"},"trivago"),", ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/salesforceeng"},"Salesforce"),", ",(0,r.kt)("a",{parentName:"p",href:"https://frontendmasters.com/"},"Frontend Masters"),", ",(0,r.kt)("a",{parentName:"p",href:"https://runkit.com/home"},"RunKit"),", ",(0,r.kt)("a",{parentName:"p",href:"https://webflow.com/"},"Webflow"),", ",(0,r.kt)("a",{parentName:"p",href:"https://www.adobe.com/"},"Adobe"),", ",(0,r.kt)("a",{parentName:"p",href:"https://www.coinbase.com/"},"Coinbase"),", ",(0,r.kt)("a",{parentName:"p",href:"https://www.bitmex.com/"},"BitMEX"),", and everyone else who has donated!"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/C76KsKZ.png",alt:"Babel Open Collective monthly donations graph"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"One thing we'd like to note:")," Collectives currently only show the total annual amount donated, which may work better with a one-time grant donation model. We believe that showcasing the monthly recurring amount is a more accurate description of the financial health of our project, and the team is hoping to help out with this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/opencollective/opencollective/issues/1585"},"issue"),"."),(0,r.kt)("h2",{id:"how-you-can-help"},"How You Can Help"),(0,r.kt)("p",null,"You can financially contribute to Babel on our ",(0,r.kt)("a",{parentName:"p",href:"https://opencollective.com/babel"},"Open Collective"),"!"),(0,r.kt)("p",null,"Our team is using ",(0,r.kt)("a",{parentName:"p",href:"https://opencollective.com/babel"},"Open Collective")," to fund our team members. Both companies and individuals and donate to the team, either as a one-time or recurring donation."),(0,r.kt)("p",null,"If you have any questions or concerns about financially contributing to Babel we'd be happy to discuss by ",(0,r.kt)("a",{parentName:"p",href:"mailto:team@babeljs.io"},"email"),"."),(0,r.kt)("p",null,"And in case your company is located in one of the cities that the core team lives in we'd also love to meet in-person!"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://twitter.com/left_pad"},"Henry")," is based in NYC and will be in the Bay Area November 4th-15th."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://twitter.com/NicoloRibaudo"},"Nicol\xf2")," is based in Italy and will be in Moscow November 6th-10th."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://twitter.com/existentialism"},"Brian")," is based in Houston, TX."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://twitter.com/JLHwung"},"J\xf9nli\xe0ng")," is based in Ontario."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://twitter.com/kai_cataldo"},"Kai")," is based in the New York City area.")),(0,r.kt)("p",null,"The team would appreciate hearing about how you are using Babel or how you are looking to get involved."),(0,r.kt)("h2",{id:"our-goals"},"Our Goals"),(0,r.kt)("p",null,"We will be writing up more in-depth posts on these topics, but here are some general areas where we aim to continue focusing on:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Stability"),": This includes checking against the official ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tc39/test262"},"test262")," tests. This ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/babel/babel/issues/4987"},"support")," gives us a better sense of our spec compliance so we know what is missing, adding smoke tests using Babel itself and our top dependents, in addition to our own tests. Reliability is extremely important to us given our position in the ecosystem.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Debuggability"),": We would like to implement better warnings/errors on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/babel/babel/issues/10617"},"configuration")," and explain what is being outputted to help users make decisions on code size. Given the complexity of a pluggable tool tracking an ever-changing specification, it can be hard to hide the complexity. We would really like to spend time on making our usage more accessible.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"General ecosystem support"),": This includes what we can do to help libraries publish ES2015+ code and for developers to target new browsers and ship less code (your own code, node_modules, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/babel/babel/issues/10008"},"polyfills"),") when possible, while still making it accessible for all browser users.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Codemods"),": We would like to put more emphasis on the opposite direction of code transformation (aka 5to6, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lebab/lebab"},"Lebab"),"), which is a powerful idea that we can help educate the community about. This would help with the transition between changes in the proposal (or if it's dropped/stalled) via an upgrade tool."))),(0,r.kt)("p",null,"And long term:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Proposal Advancement"),': Our goal is to enable a feedback loop for proposal champions to get validation through "real world" use cases within the JavaScript community. This will ultimately only happen if the plugin is adopted, there\'s enough time for people to use it and learn its implications, and for there to be a workflow in place for dialogue with and giving feedback to the TC39 committee. We would like to figure out how to best be a resource for more community members to understand the TC39 process and get involved in the improvement of JavaScript from the ground up. This requires plugins tracking the proposals to be created in a timely fashion and maintained, which requires a considerable amount of effort. This is especially true with plugins for early stage proposals, since these plugins require continued maintenance as proposals are updated.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Education"),": Related to this is an aspiration to help more developers understand the tools they use. Many tools and frameworks, particularly in the JavaScript ecosystem, operate over similar core concepts (such as ASTs). Leveling the playing field empowers more people to contribute, fix issues, and bring new ideas to the table. Language development has a high barrier to entry that our project can help lower.")),(0,r.kt)("h2",{id:"how-companies-and-individuals-have-helped-before"},"How Companies and Individuals Have Helped Before"),(0,r.kt)("p",null,"We know that as maintainers we need to do outreach for our project and for open source as a whole. Our efforts up to this point have consisted of the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.thinkmill.com.au/"},"Thinkmill")," funded 3 months of part-time work on Babel for Sebastian, the creator of Babel, while he was employed there. This was followed by 3 months working part-time on Babel at ",(0,r.kt)("a",{parentName:"li",href:"https://www.cloudflare.com/"},"Cloudflare"),". And then almost 12 months of full-time work while employed by ",(0,r.kt)("a",{parentName:"li",href:"https://opensource.facebook.com/"},"Facebook"),", which included the entire release of Babel 6."),(0,r.kt)("li",{parentName:"ul"},"Adobe funded 50% of Henry's work on Babel during his time working there."),(0,r.kt)("li",{parentName:"ul"},"We've helped companies during internal open source-oriented hackathons, including ",(0,r.kt)("a",{parentName:"li",href:"https://technology.condenast.com/"},"Cond\xe9 Nast")," and ",(0,r.kt)("a",{parentName:"li",href:"https://www.techatbloomberg.com/"},"Bloomberg")," and hosting workshops on open source and Babel development at companies like Netflix."),(0,r.kt)("li",{parentName:"ul"},"Speaking at ",(0,r.kt)("a",{parentName:"li",href:"https://twitter.com/left_pad/status/1190398587538202624?s=20"},"companies")," like Spotify/Facebook, local ",(0,r.kt)("a",{parentName:"li",href:"https://twitter.com/left_pad/status/1184301596437549056?s=20"},"meetups"),", bootcamps, ",(0,r.kt)("a",{parentName:"li",href:"https://twitter.com/left_pad/status/1191515333347004416?s=20"},"universities")," like Berkeley, and participating in ",(0,r.kt)("a",{parentName:"li",href:"https://twitter.com/bendhalpern/status/1050181229910331392?s=20"},"Hacktoberfest")," events.")),(0,r.kt)("p",null,"Supporting the project is not limited to just financial means. Different companies have allowed their employees to implement some specific features during their working time:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.techatbloomberg.com/"},"Bloomberg"),"'s folks have implemented support for different class features (like private fields), and are currently working on automatic testing of Babel's transforms using the official ECMAScript test suite (Test262)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://tech.trivago.com/"},"Trivago"),", which was also a Base Support Sponsor, has implemented the partial application proposal")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://runkit.com/"},"RunKit")," has been working with Nicol\xf2 as a contractor to implement syntactic placeholders in ",(0,r.kt)("inlineCode",{parentName:"p"},"@babel/template"),"."))),(0,r.kt)("p",null,"Support can ultimately an opportunity to talk and learn from maintainers, provide real-world feedback to the project, and build a long-term relationship."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"We get a lot of valuable ideas from our relationships with maintainers. It's almost a proxy for hiring the best people in the world, only for a limited amount of time. Open Collective gives a business like ours access to a diverse talent pool that would be impossible to build internally. - ",(0,r.kt)("a",{parentName:"p",href:"https://blog.opencollective.com/zeit/"},"Guillermo Rauch"))),(0,r.kt)("p",null,"Want to get involved? Learn more in the ",(0,r.kt)("a",{parentName:"p",href:"#how-you-can-help"},"How You Can Help section"),"."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"In an ideal world, Babel wouldn't even be necessary. However, in practice, there may always be gaps between where JavaScript is at with future proposals, when vendors can implement them (after Stage 3), what browsers a given website supports, and what Node.js versions are supported for a given library. In that sliding window of functionality is where a tool like Babel can provide significant value."),(0,r.kt)("p",null,"While we are excited for where Babel will go in the future, the team has been struggling to keep up with the current demands of the project for quite some time.  Meeting our funding goals will allow us to not only better meet the current needs of the project, but also help push it into the future."),(0,r.kt)("p",null,"We hope you will join us in ",(0,r.kt)("a",{parentName:"p",href:"https://opencollective.com/babel"},"supporting")," this community, whether through sponsorship of the core team or getting involved in the project."),(0,r.kt)("p",null,"Thanks and we hope to see you around, whether in-person or on GitHub!"))}d.isMDXComponent=!0}}]);