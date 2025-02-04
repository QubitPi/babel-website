"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["9508"],{76880:function(e,t,s){s.r(t),s.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return r},metadata:function(){return n},toc:function(){return h}});var n=s(35128),a=s(24246),i=s(80980);let r={layout:"post",title:"Nearing the 7.0 Release",authors:"henry",date:"\xa0 2017-12-27 21:00:00",categories:"announcements",share_text:"Nearing the 7.0 Release"},o=void 0,l={authorsImageUrls:[void 0]},h=[{value:"Project Updates",id:"project-updates",level:2},{value:"How you can help!",id:"how-you-can-help",level:3},{value:"#1 Help Maintain the Project (developer time at work)",id:"1-help-maintain-the-project-developer-time-at-work",level:4},{value:"#2 Fund development",id:"2-fund-development",level:4},{value:"#3 Contribute in other ways \uD83D\uDE0A",id:"3-contribute-in-other-ways-",level:4},{value:"Upgrading",id:"upgrading",level:3},{value:"Summary of the previous post",id:"summary-of-the-previous-post",level:3},{value:"Newly Updated TC39 Proposals",id:"newly-updated-tc39-proposals",level:3},{value:"Deprecated Yearly Presets (e.g. babel-preset-es20xx)",id:"deprecated-yearly-presets-eg-babel-preset-es20xx",level:3},{value:"<del>Not removing the Stage presets (babel-preset-stage-x)</del>",id:"not-removing-the-stage-presets-babel-preset-stage-x",level:3},{value:"Renames: Scoped Packages (<code>@babel/x</code>)",id:"renames-scoped-packages-babelx",level:3},{value:"Renames: <code>-proposal-</code>",id:"renames--proposal-",level:3},{value:"Renames: Drop the year from the plugin name",id:"renames-drop-the-year-from-the-plugin-name",level:3},{value:"Peer Dependencies + Integrations",id:"peer-dependencies--integrations",level:3},{value:"#5224 Independent Publishing of Experimental Packages",id:"5224-independent-publishing-of-experimental-packages",level:3},{value:"The <code>env</code> option in <code>.babelrc</code> is not being deprecated!",id:"the-env-option-in-babelrc-is-not-being-deprecated",level:3},{value:"Support <code>class A extends Array</code> (oldest caveat)",id:"support-class-a-extends-array-oldest-caveat",level:3},{value:"Speed",id:"speed",level:3},{value:"preset-env: <code>&quot;useBuiltins&quot;: &quot;usage&quot;</code>",id:"preset-env-usebuiltins-usage",level:3},{value:"Misc Updates",id:"misc-updates",level:3},{value:"Todos Before Release",id:"todos-before-release",level:3},{value:"Thanks",id:"thanks",level:3}];function c(e){let t={a:"a",blockquote:"blockquote",code:"code",del:"del",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["Check out ",(0,a.jsx)(t.a,{href:"https://babeljs.io/blog/2017/09/12/planning-for-7.0",children:"Planning for 7.0"})," for the last updates throughout the 7.0 pre-releases. If something isn't clear in this post let me know!"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"project-updates",children:"Project Updates"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["We started a new ",(0,a.jsx)(t.a,{href:"https://babeljs.io/docs/community/videos/",children:"videos page"}),"! We created this for people wanting to learn more about how Babel works and to help others contribute back. This page contains videos of conference talks on Babel and related concepts from team members and people in the community (you can send a PR if you have done a talk like this as well)."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://babeljs.io/docs/community/videos/",children:(0,a.jsx)(t.img,{src:"https://i.imgur.com/DkBEsfo.png",alt:"videos"})})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["We created a new ",(0,a.jsx)(t.a,{href:"https://babeljs.io/team",children:"team page"})," as well! We will be updating this page in the future with more information about what people work on and why they are involved. For such a large project, there are many ways to get involved and help out."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://babeljs.io/team",children:(0,a.jsx)(t.img,{src:"https://i.imgur.com/YcWgRwf.png",alt:"team"})})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Babel turned 3 years old on ",(0,a.jsx)(t.a,{href:"https://babeljs.io/blog/2017/10/05/babel-turns-three",children:"September 28, 2017"}),"!"]}),"\n",(0,a.jsxs)(t.li,{children:["Daniel ",(0,a.jsx)(t.a,{href:"https://twitter.com/left_pad/status/926096965565370369",children:"moved"})," ",(0,a.jsx)(t.code,{children:"babel/babylon"})," and ",(0,a.jsx)(t.code,{children:"babel/babel-preset-env"})," into the main Babel monorepo, ",(0,a.jsx)(t.a,{href:"https://github.com/babel/babel",children:"babel/babel"}),", and this includes all git history, labels, issues."]}),"\n",(0,a.jsxs)(t.li,{children:["We received a ",(0,a.jsx)(t.a,{href:"https://twitter.com/left_pad/status/923696620935421953",children:"$1k/month donation"})," from Facebook Open Source!","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"This the highest monthly donation we have gotten since the start (next highest is $100/month)."}),"\n",(0,a.jsx)(t.li,{children:"In the meantime, we will use our funds to meet in person and to send people to TC39 meetings. These meetings are every 2 months around the world."}),"\n",(0,a.jsx)(t.li,{children:"If a company wants to specifically sponsor something, we can create separate issues to track. This was previously difficult because we had to pay out of pocket, or we had to find a conference on the same week to speak at to help cover expenses."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"how-you-can-help",children:"How you can help!"}),"\n",(0,a.jsxs)(t.p,{children:["If your company would like to ",(0,a.jsx)(t.strong,{children:"give back"})," by supporting a fundamental part of JavaScript development and it's future, consider donating to our ",(0,a.jsx)(t.a,{href:"https://opencollective.com/babel",children:"Open Collective"}),". You can also donate developer time to help maintain the project."]}),"\n",(0,a.jsx)(t.h4,{id:"1-help-maintain-the-project-developer-time-at-work",children:"#1 Help Maintain the Project (developer time at work)"}),"\n",(0,a.jsxs)("blockquote",{class:"twitter-tweet","data-lang":"en",children:[(0,a.jsxs)("p",{lang:"en",dir:"ltr",children:["Engineer: There's a thing in SQL Server Enterprise blocking us",(0,a.jsx)("br",{}),"Company: Let's set up a call next week with them an ongoing discussion to resolve it next quarter",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"Engineer: There's a thing we need in babel, can I spent 2 days with a PR for it",(0,a.jsx)("br",{}),"Company: lol no it's their job ",(0,a.jsx)("a",{href:"https://t.co/icgaoJ0dTe",children:(0,a.jsx)(t.a,{href:"https://t.co/icgaoJ0dTe",children:"https://t.co/icgaoJ0dTe"})})]}),"\u2014 Shiya (@ShiyaLuo) ",(0,a.jsx)("a",{href:"https://twitter.com/ShiyaLuo/status/931230821976907776?ref_src=twsrc%5Etfw",children:"November 16, 2017"})]}),"\n",(0,a.jsxs)(t.p,{children:["The best thing we can get on this project are people committed to helping out with the project given the massive amount of work/responsibility it takes. Again, ",(0,a.jsx)(t.a,{href:"https://dev.to/hzoo/im-the-maintainer-of-babel-ask-me-anything-282/comments/1k6d",children:"I never felt ready"})," to be a maintainer but somehow stumbled upon it but I'm just one person, and our team is just a few people."]}),"\n",(0,a.jsx)(t.h4,{id:"2-fund-development",children:"#2 Fund development"}),"\n",(0,a.jsxs)("blockquote",{class:"twitter-tweet","data-lang":"en",children:[(0,a.jsxs)("p",{lang:"en",dir:"ltr",children:['Company: "We\'d like to use SQL Server Enterprise"',(0,a.jsx)("br",{}),'MS: "That\'ll be a quarter million dollars + $20K/month"',(0,a.jsx)("br",{}),'Company: "Ok!"',(0,a.jsx)("br",{}),"...",(0,a.jsx)("br",{}),'Company: "We\'d like to use Babel"',(0,a.jsx)("br",{}),'Babel: "Ok! npm i babel --save"',(0,a.jsx)("br",{}),'Company: "Cool"',(0,a.jsx)("br",{}),'Babel: "Would you like to help contribute financially?"',(0,a.jsx)("br",{}),'Company: "lol no"']}),"\u2014 Adam Rackis (@AdamRackis) ",(0,a.jsx)("a",{href:"https://twitter.com/AdamRackis/status/931195056479965185?ref_src=twsrc%5Etfw",children:"November 16, 2017"})]}),"\n",(0,a.jsx)(t.p,{children:"We are definitely looking to be able to fund people on the team to work full-time. Logan in particular left his job a while ago and is using our current funds to work on Babel part time at the moment!"}),"\n",(0,a.jsx)(t.h4,{id:"3-contribute-in-other-ways-",children:"#3 Contribute in other ways \uD83D\uDE0A"}),"\n",(0,a.jsxs)(t.p,{children:["For example, ",(0,a.jsx)(t.a,{href:"https://twitter.com/angustweets",children:"Angus"})," made us an ",(0,a.jsx)(t.a,{href:"https://medium.com/@angustweets/hallelujah-in-praise-of-babel-977020010fad",children:"official song"}),"!"]}),"\n",(0,a.jsx)(t.h3,{id:"upgrading",children:"Upgrading"}),"\n",(0,a.jsxs)(t.p,{children:["We will also be working on a upgrade tool that will help ",(0,a.jsx)(t.a,{href:"https://github.com/babel/notes/issues/44",children:"rewrite your package.json/.babelrc files"})," and more. Ideally this means it would modify any necessary version number changes, package renames, and config changes."]}),"\n",(0,a.jsx)(t.p,{children:"Please reach out to help and to post issues when trying to update! This is a great opportunity to get involved and to help the ecosystem update!"}),"\n",(0,a.jsxs)(t.h3,{id:"summary-of-the-previous-post",children:["Summary of the ",(0,a.jsx)(t.a,{href:"https://babeljs.io/blog/2017/09/12/planning-for-7.0",children:"previous post"})]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Dropped Node 0.10/0.12/5 support."}),"\n",(0,a.jsxs)(t.li,{children:["Updated ",(0,a.jsx)(t.a,{href:"https://github.com/babel/proposals/issues",children:"TC39 proposals"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Numeric Separator: ",(0,a.jsx)(t.code,{children:"1_000"})]}),"\n",(0,a.jsxs)(t.li,{children:["Optional Chaining Operator: ",(0,a.jsx)(t.code,{children:"a?.b"})]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"import.meta"})," (parsable)"]}),"\n",(0,a.jsxs)(t.li,{children:["Optional Catch Binding: ",(0,a.jsx)(t.code,{children:"try { a } catch {}"})]}),"\n",(0,a.jsxs)(t.li,{children:["BigInt (parsable): ",(0,a.jsx)(t.code,{children:"2n"})]}),"\n",(0,a.jsxs)(t.li,{children:["Split export extensions into ",(0,a.jsx)(t.code,{children:"export-default-from"})," and ",(0,a.jsx)(t.code,{children:"export-ns-form"})]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:".babelrc.js"})," support (a config using JavaScript instead of JSON)"]}),"\n",(0,a.jsxs)(t.li,{children:["Added a new Typescript Preset + separated the React/Flow presets","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Added ",(0,a.jsx)(t.a,{href:"https://reactjs.org/blog/2017/11/28/react-v16.2.0-fragment-support.html",children:"JSX Fragment Support"})," and various Flow updates"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["Removed the internal ",(0,a.jsx)(t.code,{children:"babel-runtime"})," dependency for smaller size"]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"newly-updated-tc39-proposals",children:"Newly Updated TC39 Proposals"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Pipeline Operator: ",(0,a.jsx)(t.code,{children:"a |> b"})]}),"\n",(0,a.jsxs)(t.li,{children:["Throw Expressions: ",(0,a.jsx)(t.code,{children:"() => throw 'hi'"})]}),"\n",(0,a.jsxs)(t.li,{children:["Nullish Coalescing Operator: ",(0,a.jsx)(t.code,{children:"a ?? b"})]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"deprecated-yearly-presets-eg-babel-preset-es20xx",children:"Deprecated Yearly Presets (e.g. babel-preset-es20xx)"}),"\n",(0,a.jsxs)(t.p,{children:["TL;DR: use ",(0,a.jsx)(t.code,{children:"babel-preset-env"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"What's better than you having to decide which Babel preset to use? Having it done for you, automatically!"}),"\n",(0,a.jsx)(t.p,{children:"Even though the amount of work that goes into maintaining the lists of data is humongous \u2014 again, why we need help \u2014 it solves multiple issues. It makes sure users are up to date with the spec. It means less configuration/package confusion. It means an easier upgrade path. And it means less issues about what is what."}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"babel-preset-env"})," is actually a pretty ",(0,a.jsx)(t.em,{children:"old"})," preset that replaces every other syntax preset that you will need (es2015, es2016, es2017, es20xx, latest, etc...)."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://npm-stat.com/charts.html?package=babel-preset-env&package=babel-preset-es2015&package=babel-preset-es2016&package=babel-preset-es2017&package=babel-preset-latest&from=2016-11-21&to=2017-11-21",children:(0,a.jsx)(t.img,{src:"https://i.imgur.com/nNKKFcp.png",alt:"npm presets"})})}),"\n",(0,a.jsx)(t.p,{children:"It compiles the latest yearly release of JavaScript (whatever is in Stage 4) which replaces all the old presets. But it also has the ability to compile according to target environments you specify: whether that is for development mode, like the latest version of a browser, or for multiple builds, like a version for IE, and then another version for evergreen browsers."}),"\n",(0,a.jsx)(t.h3,{id:"not-removing-the-stage-presets-babel-preset-stage-x",children:(0,a.jsx)(t.del,{children:"Not removing the Stage presets (babel-preset-stage-x)"})}),"\n",(0,a.jsxs)(t.p,{children:["EDIT: We removed them, explained ",(0,a.jsx)(t.a,{href:"https://babeljs.io/blog/2018/07/27/removing-babels-stage-presets",children:"here"})]}),"\n",(0,a.jsxs)("blockquote",{class:"twitter-tweet","data-lang":"en",children:[(0,a.jsx)("p",{lang:"en",dir:"ltr",children:"Frustration level if we remove the Stage presets in Babel? (in favor explicitly requiring proposal plugins since they aren't JavaScript yet)"}),"\u2014 Henry Zhu (@left_pad) ",(0,a.jsx)("a",{href:"https://twitter.com/left_pad/status/873242704364306433?ref_src=twsrc%5Etfw",children:"June 9, 2017"})]}),"\n",(0,a.jsx)(t.p,{children:"We can always keep it up to date, and maybe we just need to determine a better system than what these presets are currently."}),"\n",(0,a.jsx)(t.p,{children:'Right now, stage presets are literally just a list of plugins that we manually update after TC39 meetings. To make this manageable, we need to allow major version bumps for these "unstable" packages. Part of the reason for this is because the community will re-create these packages anyway, so we might as well do it from an official package and then have the ability to provide better messaging, etc.'}),"\n",(0,a.jsxs)(t.h3,{id:"renames-scoped-packages-babelx",children:["Renames: Scoped Packages (",(0,a.jsx)(t.code,{children:"@babel/x"}),")"]}),"\n",(0,a.jsx)(t.p,{children:"Here is a poll I did almost a year ago:"}),"\n",(0,a.jsxs)("blockquote",{class:"twitter-tweet","data-lang":"en",children:[(0,a.jsxs)("p",{lang:"en",dir:"ltr",children:["Thoughts on ",(0,a.jsx)("a",{href:"https://twitter.com/babeljs",children:"@babeljs"})," using npm scoped packages for 7.0?"]}),"\u2014 Henry Zhu (@left_pad) ",(0,a.jsx)("a",{href:"https://twitter.com/left_pad/status/821551189166878722",children:"January 18, 2017"})]}),"\n",(0,a.jsx)(t.p,{children:"Back then, not a lot of projects used scoped packages, so most people didn't even know they existed. You may also have had to pay for a npm org account back then, while now it's free (and supports non scoped packages, too). The issues with searching for scoped packages are solved and download counts work. The only thing left is that some 3rd party registries still don't support scoped packages, and I think we are at a point where it seems pretty unreasonable to wait on that."}),"\n",(0,a.jsx)(t.p,{children:"If you want reasons why we prefer scoped packages:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Naming is difficult: we won\u2019t have to check if someone else decided to use our naming convention for their own plugin"}),"\n",(0,a.jsxs)(t.li,{children:["Similarly, package squatting","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Sometimes people create ",(0,a.jsx)(t.code,{children:"babel-preset-20xx"})," or some other package because it's funny, and then we have to make an issue/email to ask for it back."]}),"\n",(0,a.jsx)(t.li,{children:"People have a legit package, but it happens to be the same name as what we wanted to call it.\n\xa0- People see that a new proposal is merging (like optional chaining, pipeline operator) and decide to fork and publish a version of it under the same name. Then, when we publish, it tell us the package was already published \uD83E\uDD14. Then, I have to find their email and email both them and npm support to get the package back and republish."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:['What is an "official" package and what is a user/community package with the same name? We can get issue reports of people using misnamed or unofficial packages because they assumed it was part of Babel. One example of this was a report that ',(0,a.jsx)(t.code,{children:"babel-env"})," was rewriting their ",(0,a.jsx)(t.code,{children:".babelrc"})," file, and it took them a while to realize it wasn't ",(0,a.jsx)(t.code,{children:"babel-preset-env"}),"."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"So, it seems obvious we should use scoped packages, and, if anything, we should have done it much earlier \uD83D\uDE42!"}),"\n",(0,a.jsx)(t.p,{children:"Examples of the scoped name change:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"babel-cli"})," -> ",(0,a.jsx)(t.code,{children:"@babel/cli"})]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"babel-core"})," -> ",(0,a.jsx)(t.code,{children:"@babel/core"})]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"babel-preset-env"})," -> ",(0,a.jsx)(t.code,{children:"@babel/preset-env"})]}),"\n"]}),"\n",(0,a.jsxs)(t.h3,{id:"renames--proposal-",children:["Renames: ",(0,a.jsx)(t.code,{children:"-proposal-"})]}),"\n",(0,a.jsxs)(t.p,{children:["Any proposals will be named with ",(0,a.jsx)(t.code,{children:"-proposal-"})," now to signify that they aren't officially in JavaScript yet."]}),"\n",(0,a.jsxs)(t.p,{children:["So ",(0,a.jsx)(t.code,{children:"@babel/plugin-transform-class-properties"})," becomes ",(0,a.jsx)(t.code,{children:"@babel/plugin-proposal-class-properties"}),", and we would name it back once it gets into Stage 4."]}),"\n",(0,a.jsx)(t.h3,{id:"renames-drop-the-year-from-the-plugin-name",children:"Renames: Drop the year from the plugin name"}),"\n",(0,a.jsx)(t.p,{children:"Previous plugins had the year in the name, but it doesn't seem to be necessary now."}),"\n",(0,a.jsxs)(t.p,{children:["So ",(0,a.jsx)(t.code,{children:"@babel/plugin-transform-es2015-classes"})," becomes ",(0,a.jsx)(t.code,{children:"@babel/plugin-transform-classes"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"Since years were only the case for es3/es2015, we didn't change anything from es2016 or es2017. However, we are deprecating those presets in favor of preset-env, and, for the template literal revision, we just added it to the template literal transform for simplicity."}),"\n",(0,a.jsx)(t.h3,{id:"peer-dependencies--integrations",children:"Peer Dependencies + Integrations"}),"\n",(0,a.jsxs)(t.p,{children:["We are introducing a peer dependencies on ",(0,a.jsx)(t.code,{children:"@babel/core"})," for all the plugins (",(0,a.jsx)(t.code,{children:"@babel/plugin-class-properties"}),"), presets (",(0,a.jsx)(t.code,{children:"@babel/preset-env"}),"), and top level packages (",(0,a.jsx)(t.code,{children:"@babel/cli"}),", ",(0,a.jsx)(t.code,{children:"babel-loader"}),")."]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["peerDependencies are dependencies expected to be used by your code, as opposed to dependencies only used as an implementation detail.\n\u2014 ",(0,a.jsx)(t.a,{href:"https://stackoverflow.com/a/34645112",children:"Stijn de Witt via StackOverflow"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"babel-loader"})," already had a ",(0,a.jsx)(t.code,{children:"peerDependency"})," on ",(0,a.jsx)(t.code,{children:"babel-core"}),", so this just changes it to ",(0,a.jsx)(t.code,{children:"@babel/core"}),". This is just so that people weren't trying to install these packages on the wrong version of Babel."]}),"\n",(0,a.jsxs)(t.p,{children:["For tools that already have a ",(0,a.jsx)(t.code,{children:"peerDependency"})," on ",(0,a.jsx)(t.code,{children:"babel-core"})," and aren't ready for a major bump (since changing the peer dependency is a breaking change), we have published a new version of ",(0,a.jsx)(t.code,{children:"babel-core"})," to bridge the changes over with the new version ",(0,a.jsx)(t.a,{href:"https://github.com/babel/babel-bridge",children:"babel-core@7.0.0-bridge.0"}),". For more information check out ",(0,a.jsx)(t.a,{href:"https://github.com/facebook/jest/pull/4557#issuecomment-344048628",children:"this issue"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Similarly, packages like ",(0,a.jsx)(t.code,{children:"gulp-babel"}),", ",(0,a.jsx)(t.code,{children:"rollup-plugin-babel"}),", etc, all used to have ",(0,a.jsx)(t.code,{children:"babel-core"})," as a dependency. Now these will just have a ",(0,a.jsx)(t.code,{children:"peerDependency"})," on ",(0,a.jsx)(t.code,{children:"@babel/core"}),". This lets these packages not have to bump major versions when the ",(0,a.jsx)(t.code,{children:"@babel/core"})," API hasn't changed."]}),"\n",(0,a.jsxs)(t.h3,{id:"5224-independent-publishing-of-experimental-packages",children:[(0,a.jsx)(t.a,{href:"https://github.com/babel/babel/pull/5224",children:"#5224"})," Independent Publishing of Experimental Packages"]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["I mention this in ",(0,a.jsx)(t.a,{href:"http://babeljs.io/blog/2016/12/07/the-state-of-babel",children:"The State of Babel"})," in the ",(0,a.jsx)(t.code,{children:"Versioning"})," section. ",(0,a.jsx)(t.a,{href:"https://github.com/babel/babylon/issues/275",children:"Github Issue"})]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"You might remember that after Babel 6, Babel became a set of npm packages with its own ecosystem of custom presets and plugins."}),"\n",(0,a.jsxs)(t.p,{children:['However since then, we have always used a "fixed/synchronized" versioning system (so that no package is on v7.0 or above). When we do a new release such as ',(0,a.jsx)(t.code,{children:"v6.23.0"})," only packages that have updated code in the source are published with the new version while the rest of the packages are left as is. This mostly works in practice because we use ",(0,a.jsx)(t.code,{children:"^"})," in our packages."]}),"\n",(0,a.jsx)(t.p,{children:"Unfortunately this kind of system requires that a major version be released for all packages once a single package needs it. This either means we make a lot small breaking changes (unnecessary), or we batch lots of breaking changes into a single release. Instead, we want to differentiate between the experimental packages (Stage 0, etc.) and everything else (es2015)."}),"\n",(0,a.jsx)(t.p,{children:"This means we intend to make major version bumps to any experimental proposal plugins when the spec changes rather than waiting to update all of Babel. So anything that is < Stage 4 would be open to breaking changes in the form of major version bumps and same with the Stage presets themselves (if we don't drop them entirely)."}),"\n",(0,a.jsxs)(t.p,{children:["This goes with our decision to change TC39 proposal plugins to use the ",(0,a.jsx)(t.code,{children:"-proposal-"})," name. If the spec changes, we will do a major version bump to the plugin and the preset it belongs to (as opposed to just making a patch version which may break for people). Then, we will need to deprecate the old versions and setup an infrastructure to automatically update people so that everyone is up to date on what the spec will become (and so they don't get stuck on something, like we have with decorators)."]}),"\n",(0,a.jsxs)(t.h3,{id:"the-env-option-in-babelrc-is-not-being-deprecated",children:["The ",(0,a.jsx)(t.code,{children:"env"})," option in ",(0,a.jsx)(t.code,{children:".babelrc"})," is not being deprecated!"]}),"\n",(0,a.jsxs)(t.p,{children:["Unlike in the ",(0,a.jsx)(t.a,{href:"https://babeljs.io/blog/2017/09/12/planning-for-7.0#deprecate-the-env-option-in-babelrc",children:"last post"}),", we just fixed the merging behavior to be ",(0,a.jsx)(t.a,{href:"https://twitter.com/left_pad/status/936687774098444288",children:"more consistent"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["The configuration in ",(0,a.jsx)(t.code,{children:"env"})," is given higher priority than root config items, and instead of just being a weird approach of using both, plugins and presets now merge based on their identity, so you can do"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",metastring:'title="JavaScript"',children:"{\n  presets: [\n    ['env', { modules: false}],\n  ],\n  env: {\n    test: {\n      presets: [\n         'env'\n      ],\n    }\n  },\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["with ",(0,a.jsx)(t.code,{children:"BABEL_ENV=test"}),", which would replace the root env config, with the one from test, which has no options."]}),"\n",(0,a.jsx)(t.h3,{id:"support-class-a-extends-array-oldest-caveat",children:(0,a.jsxs)(t.a,{href:"https://twitter.com/left_pad/status/940723982638157829",children:["Support ",(0,a.jsx)(t.code,{children:"class A extends Array"})," (oldest caveat)"]})}),"\n",(0,a.jsxs)(t.p,{children:["Babel will automatically wrap any native built-ins like ",(0,a.jsx)(t.code,{children:"Array"}),", ",(0,a.jsx)(t.code,{children:"Error"}),", ",(0,a.jsx)(t.code,{children:"HTMLElement"})," etc so that doing this just works when compiling classes."]}),"\n",(0,a.jsx)(t.h3,{id:"speed",children:"Speed"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Many ",(0,a.jsx)(t.a,{href:"https://twitter.com/rauchg/status/924349334346276864",children:"fixes"})," from ",(0,a.jsx)(t.a,{href:"https://twitter.com/bmeurer",children:"bmeurer"})," on the v8 team!"]}),"\n",(0,a.jsxs)(t.li,{children:["60% faster via the ",(0,a.jsx)(t.a,{href:"https://github.com/v8/web-tooling-benchmark",children:"web-tooling-benchmark"})," ",(0,a.jsx)(t.a,{href:"https://twitter.com/left_pad/status/927554660508028929",children:"https://twitter.com/left_pad/status/927554660508028929"})]}),"\n"]}),"\n",(0,a.jsxs)(t.h3,{id:"preset-env-usebuiltins-usage",children:["preset-env: ",(0,a.jsx)(t.code,{children:'"useBuiltins": "usage"'})]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"babel-preset-env"})," introduced the idea of compiling syntax to different targets and via the ",(0,a.jsx)(t.code,{children:"useBuiltIns"})," option, the ability to also only add polyfills that the targets don't support."]}),"\n",(0,a.jsx)(t.p,{children:"So with this option, something like:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",metastring:'title="JavaScript"',children:'import "babel-polyfill";\n'})}),"\n",(0,a.jsx)(t.p,{children:"Can turn into"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",metastring:'title="JavaScript"',children:'import "core-js/modules/es7.string.pad-start";\nimport "core-js/modules/es7.string.pad-end";\n// ...\n'})}),"\n",(0,a.jsxs)(t.p,{children:["if the target environment happens to support polyfills other than ",(0,a.jsx)(t.code,{children:"padStart"})," or ",(0,a.jsx)(t.code,{children:"padEnd"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:['However in order to make that even better, we should only import polyfills that are "used" in the codebase itself. Why even import ',(0,a.jsx)(t.code,{children:"padStart"})," if it's not even used in the code?"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:'"useBuiltins": "usage"'})," is our first attempt to begin that idea. It does an import at the top of each file but only adds the import if it finds it used in the code. This approach means that we can import the minimum amount of polyfills necessary for the app (and only if the target environment doesn't support it)."]}),"\n",(0,a.jsxs)(t.p,{children:["So if you use ",(0,a.jsx)(t.code,{children:"Promise"})," in your code, it will import it at the top of the file (if your target doesn't support it). Bundlers will dedupe the file if it's the same so this approach won't cause multiple polyfills to be imported."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",metastring:'title="JavaScript"',children:'import "core-js/modules/es6.promise";\nvar a = new Promise();\n'})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",metastring:'title="JavaScript"',children:'import "core-js/modules/es7.array.includes";\n[].includes\na.includes\n'})}),"\n",(0,a.jsxs)(t.p,{children:["With type inference we can know if an instance method like ",(0,a.jsx)(t.code,{children:".includes"})," is for an array or not, and having a false positive is ok until that logic is better since it's still better than importing the whole polyfill like before."]}),"\n",(0,a.jsx)(t.h3,{id:"misc-updates",children:"Misc Updates"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://github.com/babel/babel/blob/main/packages/babel-template",children:(0,a.jsx)(t.code,{children:"babel-template"})})," is faster/easier to use"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://github.com/facebook/regenerator",children:"regenerator"})," was released under the ",(0,a.jsx)(t.a,{href:"https://twitter.com/left_pad/status/938825429955125248",children:"MIT License"})," - it's the dependency used to compile generators/async"]}),"\n",(0,a.jsxs)(t.li,{children:['"lazy" option to the ',(0,a.jsx)(t.code,{children:"modules-commonjs"})," plugin via ",(0,a.jsx)(t.a,{href:"https://github.com/babel/babel/pull/6952",children:"#6952"})]}),"\n",(0,a.jsxs)(t.li,{children:["You can now use ",(0,a.jsx)(t.code,{children:'envName: "something"'})," in .babelrc or pass via cli ",(0,a.jsx)(t.code,{children:"babel --envName=something"})," instead of having to use ",(0,a.jsx)(t.code,{children:"process.env.BABEL_ENV"})," or ",(0,a.jsx)(t.code,{children:"process.env.NODE_ENV"})]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:'["transform-for-of", { "assumeArray": true }]'})," to make all for-of loops output as regular arrays"]}),"\n",(0,a.jsxs)(t.li,{children:["Exclude ",(0,a.jsx)(t.code,{children:"transform-typeof-symbol"})," in loose mode for preset-env ",(0,a.jsx)(t.a,{href:"https://github.com/babel/babel/pull/6831",children:"#6831"})]}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://twitter.com/left_pad/status/942859244759666691",children:"Landed PR for better error messages with syntax errors"})}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"todos-before-release",children:"Todos Before Release"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsxs)(t.a,{href:"https://github.com/babel/babel/issues/6766",children:["Handle ",(0,a.jsx)(t.code,{children:".babelrc"})," lookup"]})," (want this done before first RC release)"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://github.com/babel/babel/pull/7091",children:'"overrides" support'}),": different config based on glob pattern"]}),"\n",(0,a.jsx)(t.li,{children:"Caching and invalidation logic in babel-core."}),"\n",(0,a.jsx)(t.li,{children:"Either implement or have plan in place for versioning and handling polyfills independently from helpers, so we aren't explicitly tied to core-js 2 or 3, since people may have things that depend on one or the other and won't want to load both a lot of the time."}),"\n",(0,a.jsxs)(t.li,{children:["Either a ",(0,a.jsx)(t.a,{href:"https://github.com/babel/babel/pull/6107",children:"working decorator implementation"}),", or functional legacy implementation, with clear path to land current spec behavior during 7.x's lifetime."]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"thanks",children:"Thanks"}),"\n",(0,a.jsxs)(t.p,{children:["Shoutout to our team of volunteers: ",(0,a.jsx)(t.a,{href:"https://twitter.com/loganfsmyth",children:"Logan"})," who has been really pushing hard to fix a lot of our core issues regarding configs and more and the one doing all of that hard work, ",(0,a.jsx)(t.a,{href:"https://twitter.com/existentialism",children:"Brian"})," who has been taking over maintenance of a lot of preset-env work and just whatever I was doing before \uD83D\uDE1B, and ",(0,a.jsx)(t.a,{href:"https://twitter.com/TschinderDaniel",children:"Daniel"})," who has always been stepping in when we need the help whether it be maintaining babel-loader or helping move the babylon/babel-preset-env repo's over. And same with ",(0,a.jsx)(t.a,{href:"https://twitter.com/NicoloRibaudo",children:"Nicolo"}),", ",(0,a.jsx)(t.a,{href:"https://twitter.com/svensauleau",children:"Sven"}),", ",(0,a.jsx)(t.a,{href:"https://twitter.com/yavorsky_",children:"Artem"}),", and ",(0,a.jsx)(t.a,{href:"https://twitter.com/jessidhia",children:"Jessica"})," for stepping up in the last year to help out."]}),"\n",(0,a.jsx)(t.p,{children:"I'm really looking forward to a release (I'm tired too; it's almost been a year \uD83D\uDE1D), but also don't want to rush anything just because! Been a lot of ups and downs throughout this release but I've certainly learned a lot and I'm sure the rest of the team has as well."}),"\n",(0,a.jsx)(t.p,{children:"And if I've learned anything at all this year, I should really heed this advice rather than just write about it."}),"\n",(0,a.jsxs)("blockquote",{class:"twitter-tweet","data-lang":"en",children:[(0,a.jsx)("p",{lang:"en",dir:"ltr",children:'"Before you go maintaining anything else, maintain your own body first" - Mom \uD83D\uDE38'}),"\u2014 Henry Zhu (@left_pad) ",(0,a.jsx)("a",{href:"https://twitter.com/left_pad/status/944313617243099136?ref_src=twsrc%5Etfw",children:"December 22, 2017"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["Also thanks to ",(0,a.jsx)(t.a,{href:"https://twitter.com/kosamari",children:"Mariko"})," for the ",(0,a.jsx)(t.a,{href:"https://twitter.com/kosamari/status/944272286055530496",children:"light push"})," to actually finish this post (2 months in the making)"]}),"\n"]}),"\n",(0,a.jsx)("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charset:"utf-8"})]})}function d(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},80980:function(e,t,s){s.d(t,{Z:function(){return o},a:function(){return r}});var n=s(27378);let a={},i=n.createContext(a);function r(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(i.Provider,{value:t},e.children)}},35128:function(e){e.exports=JSON.parse('{"permalink":"/babel-website/blog/2017/12/27/nearing-the-7.0-release","source":"@site/blog/2017-12-27-nearing-the-7.0-release.md","title":"Nearing the 7.0 Release","description":"Check out Planning for 7.0 for the last updates throughout the 7.0 pre-releases. If something isn\'t clear in this post let me know!","date":"2017-12-27T21:00:00.000Z","tags":[],"readingTime":14.07,"hasTruncateMarker":true,"authors":[{"name":"Henry Zhu","url":"https://twitter.com/left_pad","key":"henry","page":null}],"frontMatter":{"layout":"post","title":"Nearing the 7.0 Release","authors":"henry","date":"\xa0 2017-12-27 21:00:00","categories":"announcements","share_text":"Nearing the 7.0 Release"},"unlisted":false,"prevItem":{"title":"On Consuming (and Publishing) ES2015+ Packages","permalink":"/babel-website/blog/2018/06/26/on-consuming-and-publishing-es2015+-packages"},"nextItem":{"title":"Babel Turns Three","permalink":"/babel-website/blog/2017/10/05/babel-turns-three"}}')}}]);