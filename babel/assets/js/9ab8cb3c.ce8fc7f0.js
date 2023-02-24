"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[270],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[d]="string"==typeof e?e:i,l[1]=r;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82403:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return d}});var a=n(25773),i=n(30808),o=(n(27378),n(35318)),l=["components"],r={title:"Config Files",id:"config-files"},s=void 0,p={unversionedId:"config-files",id:"config-files",title:"Config Files",description:"Configuration File Types",source:"@site/../docs/config-files.md",sourceDirName:".",slug:"/config-files",permalink:"/babel-website/docs/config-files",draft:!1,editUrl:"https://github.com/babel/website/edit/main/docs/../docs/config-files.md",tags:[],version:"current",frontMatter:{title:"Config Files",id:"config-files"},sidebar:"docs",previous:{title:"Upgrade to Babel 7",permalink:"/babel-website/docs/v7-migration"},next:{title:"Config Options",permalink:"/babel-website/docs/options"}},c={},d=[{value:"Configuration File Types",id:"configuration-file-types",level:2},{value:"Project-wide configuration",id:"project-wide-configuration",level:2},{value:"File-relative configuration",id:"file-relative-configuration",level:2},{value:"6.x vs 7.x <code>.babelrc</code> loading",id:"6x-vs-7x-babelrc-loading",level:3},{value:"Supported file extensions",id:"supported-file-extensions",level:2},{value:"Monorepos",id:"monorepos",level:2},{value:"Root <code>babel.config.json</code> file",id:"root-babelconfigjson-file",level:3},{value:"CLI",id:"cli",level:4},{value:"@babel/register",id:"babelregister",level:4},{value:"Webpack",id:"webpack",level:4},{value:"Jest",id:"jest",level:4},{value:"Others",id:"others",level:4},{value:"Subpackage <code>.babelrc.json</code> files",id:"subpackage-babelrcjson-files",level:3},{value:"Config Function API",id:"config-function-api",level:2},{value:"<code>api.version</code>",id:"apiversion",level:3},{value:"<code>api.cache</code>",id:"apicache",level:3},{value:"<code>api.env(...)</code>",id:"apienv",level:3},{value:"<code>api.caller(cb)</code>",id:"apicallercb",level:3},{value:"<code>api.assertVersion(range)</code>",id:"apiassertversionrange",level:3}],u={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"configuration-file-types"},"Configuration File Types"),(0,o.kt)("p",null,"Babel has two parallel config file formats, which can be used together, or independently."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"History"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Version"),(0,o.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"v7.21.0")),(0,o.kt)("td",{parentName:"tr",align:null},"Support ",(0,o.kt)("inlineCode",{parentName:"td"},".babelrc.cts")," and ",(0,o.kt)("inlineCode",{parentName:"td"},"babel.config.cts")," (Experimental)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"v7.8.0")),(0,o.kt)("td",{parentName:"tr",align:null},"Support ",(0,o.kt)("inlineCode",{parentName:"td"},".babelrc.mjs")," and ",(0,o.kt)("inlineCode",{parentName:"td"},"babel.config.mjs"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"v7.7.0")),(0,o.kt)("td",{parentName:"tr",align:null},"Support ",(0,o.kt)("inlineCode",{parentName:"td"},".babelrc.json"),", ",(0,o.kt)("inlineCode",{parentName:"td"},".babelrc.cjs"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"babel.config.json"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"babel.config.cjs")))))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Project-wide configuration",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"babel.config.*")," files, with the following extensions: ",(0,o.kt)("inlineCode",{parentName:"li"},".json"),", ",(0,o.kt)("inlineCode",{parentName:"li"},".js"),", ",(0,o.kt)("inlineCode",{parentName:"li"},".cjs"),", ",(0,o.kt)("inlineCode",{parentName:"li"},".mjs"),", ",(0,o.kt)("inlineCode",{parentName:"li"},".cts"),"."))),(0,o.kt)("li",{parentName:"ul"},"File-relative configuration",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".babelrc.*")," files, with the following extensions: ",(0,o.kt)("inlineCode",{parentName:"li"},".json"),", ",(0,o.kt)("inlineCode",{parentName:"li"},".js"),", ",(0,o.kt)("inlineCode",{parentName:"li"},".cjs"),", ",(0,o.kt)("inlineCode",{parentName:"li"},".mjs"),", ",(0,o.kt)("inlineCode",{parentName:"li"},".cts"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".babelrc")," file, with no extension."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"package.json")," files, with a ",(0,o.kt)("inlineCode",{parentName:"li"},'"babel"')," key.")))),(0,o.kt)("h2",{id:"project-wide-configuration"},"Project-wide configuration"),(0,o.kt)("p",null,"New in Babel 7.x, Babel has a concept of a ",(0,o.kt)("a",{parentName:"p",href:"/babel-website/docs/options#root"},'"root"')," directory, which defaults\nto the current working directory. For project-wide configuration, Babel will automatically search\nfor a ",(0,o.kt)("inlineCode",{parentName:"p"},"babel.config.json")," file, or an equivalent one using the ",(0,o.kt)("a",{parentName:"p",href:"#supported-file-extensions"},"supported extensions"),",\nin this root directory. Alternatively, users can use an explicit\n",(0,o.kt)("a",{parentName:"p",href:"/babel-website/docs/options#configfile"},'"configFile"')," value to override the default config file search behavior."),(0,o.kt)("p",null,"Because project-wide config files are separated from the physical location of the config\nfile, they can be ideal for configuration that must apply broadly, even allowing\nplugins and presets to easily apply to files in ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," or in symlinked packages,\nwhich were traditionally quite painful to configure in Babel 6.x."),(0,o.kt)("p",null,"The primary downside of this project-wide config is that, because it relies on the working\ndirectory, it can be more painful to use in monorepos if the working directory is not the monorepo root.\nSee the ",(0,o.kt)("a",{parentName:"p",href:"#monorepos"},"monorepo")," documentation for examples of how to use config files in that context."),(0,o.kt)("p",null,"Project-wide configs can also be disabled by setting ",(0,o.kt)("a",{parentName:"p",href:"/babel-website/docs/options#configfile"},'"configFile"')," to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("h2",{id:"file-relative-configuration"},"File-relative configuration"),(0,o.kt)("p",null,"Babel loads ",(0,o.kt)("inlineCode",{parentName:"p"},".babelrc.json")," files, or an equivalent one using the ",(0,o.kt)("a",{parentName:"p",href:"#supported-file-extensions"},"supported extensions"),", by searching up the\ndirectory structure starting from the ",(0,o.kt)("a",{parentName:"p",href:"/babel-website/docs/options#filename"},'"filename"')," being compiled (limited by the caveats below).\nThis can be powerful because it allows you to create independent configurations for subsections of\na package. File-relative configurations are also ",(0,o.kt)("a",{parentName:"p",href:"/babel-website/docs/options#merging"},"merged")," over top of\nproject-wide config values, making them potentially useful for specific overrides, though that can\nalso be accomplished through ",(0,o.kt)("a",{parentName:"p",href:"/babel-website/docs/options#overrides"},'"overrides"'),"."),(0,o.kt)("p",null,"There are a few edge cases to consider when using a file-relative config:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Searching will stop once a directory containing a ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json")," is found, so a relative config\nonly applies within a single package."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"/babel-website/docs/options#filename"},'"filename"')," being compiled must be inside of\n",(0,o.kt)("a",{parentName:"li",href:"/babel-website/docs/options#babelrcroots"},'"babelrcRoots"')," packages, or else searching will be skipped entirely.")),(0,o.kt)("p",null,"These caveats mean that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".babelrc.json")," files ",(0,o.kt)("em",{parentName:"li"},"only")," apply to files within their own package"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".babelrc.json")," files in packages that aren't Babel's 'root' are ignored unless you opt in\nwith ",(0,o.kt)("a",{parentName:"li",href:"/babel-website/docs/options#babelrcroots"},'"babelrcRoots"'),".")),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"#monorepos"},"monorepo")," documentation for more discussion on how to configure monorepos that have many packages.\nFile-relative configs can also be disabled by setting ",(0,o.kt)("a",{parentName:"p",href:"/babel-website/docs/options#babelrc"},'"babelrc"')," to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("h3",{id:"6x-vs-7x-babelrc-loading"},"6.x vs 7.x ",(0,o.kt)("inlineCode",{parentName:"h3"},".babelrc")," loading"),(0,o.kt)("p",null,"Users coming from Babel 6.x will likely trip up on these two edge cases, which are new in Babel 7.x.\nThese two restrictions were added to address common footguns in Babel 6.x:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".babelrc")," files applied to ",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules")," dependencies, often unexpectedly."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".babelrc")," files ",(0,o.kt)("em",{parentName:"li"},"failed")," to apply to symlinked ",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules")," when people expected them to behave like normal dependencies."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".babelrc")," files ",(0,o.kt)("em",{parentName:"li"},"in")," ",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules")," dependencies would be detected, even though the plugins and\npresets inside they were generally not installed, and may not even be valid in the version of\nBabel compiling the file.")),(0,o.kt)("p",null,"These cases will ",(0,o.kt)("em",{parentName:"p"},"primarily")," cause issues for users with a monorepo structure, because if you\nhave"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},".babelrc\npackages/\n  mod1/\n    package.json\n    src/index.js\n  mod2/\n    package.json\n    src/index.js\n")),(0,o.kt)("p",null,"the config will now be entirely ignored, because it is across a package boundary."),(0,o.kt)("p",null,"One alternative would be to create a ",(0,o.kt)("inlineCode",{parentName:"p"},".babelrc")," in each sub-package that uses ",(0,o.kt)("a",{parentName:"p",href:"/babel-website/docs/options#extends"},'"extends"')," as"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title=".babelrc.json"',title:'".babelrc.json"'},'{ "extends": "../../.babelrc" }\n')),(0,o.kt)("p",null,"Unfortunately, this approach can be a bit repetitive, and depending on how Babel is being used,\ncould require setting ",(0,o.kt)("a",{parentName:"p",href:"/babel-website/docs/options#babelrcroots"},'"babelrcRoots"'),"."),(0,o.kt)("p",null,"Given that, it may be more desirable to rename the ",(0,o.kt)("inlineCode",{parentName:"p"},".babelrc")," to be a\n",(0,o.kt)("a",{parentName:"p",href:"#project-wide-configuration"},'project-wide "babel.config.json"'),". As mentioned in the project-wide\nsection above, this may then require explicitly setting ",(0,o.kt)("a",{parentName:"p",href:"/babel-website/docs/options#configfile"},'"configFile"'),"\nsince Babel will not find the config file if the working directory isn't correct."),(0,o.kt)("h2",{id:"supported-file-extensions"},"Supported file extensions"),(0,o.kt)("p",null,"Babel can be configured using any file extension natively supported by Node.js, as mentioned in ",(0,o.kt)("a",{parentName:"p",href:"#configuration-file-types"},"Configuration File Types")," section:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"babel.config.json")," and ",(0,o.kt)("inlineCode",{parentName:"p"},".babelrc.json")," are parsed as JSON5 and should contain an object matching\nthe ",(0,o.kt)("a",{parentName:"p",href:"/babel-website/docs/options"},"options")," format that Babel accepts. They have been supported since ",(0,o.kt)("inlineCode",{parentName:"p"},"v7.7.0"),"."),(0,o.kt)("p",{parentName:"li"},"We recommend using this file type wherever possible: JS config files are\nhandy if you have complex configuration that is conditional or otherwise computed at build time.\nHowever, the downside is that JS configs are less statically analyzable, and therefore have\nnegative effects on cacheability, linting, IDE autocomplete, etc.\nSince ",(0,o.kt)("inlineCode",{parentName:"p"},"babel.config.json")," and ",(0,o.kt)("inlineCode",{parentName:"p"},".babelrc.json")," are static JSON files, it allows other tools that\nuse Babel such as bundlers to cache the results of Babel safely, which can be a huge build\nperformance win.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"babel.config.cjs")," and ",(0,o.kt)("inlineCode",{parentName:"p"},".babelrc.cjs")," allow you to define your configuration as CommonJS,\nusing ",(0,o.kt)("inlineCode",{parentName:"p"},"module.exports"),". They have been supported since ",(0,o.kt)("inlineCode",{parentName:"p"},"v7.7.0"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"babel.config.mjs")," and ",(0,o.kt)("inlineCode",{parentName:"p"},".babelrc.mjs")," use native ECMAScript modules. They are supported by Node.js 13.2+ (or older versions via the ",(0,o.kt)("inlineCode",{parentName:"p"},"--experimental-modules")," flag).\nPlease remember that native ECMAScript modules are asynchronous (that's why ",(0,o.kt)("inlineCode",{parentName:"p"},"import()")," always\nreturns a promise!): for this reason, ",(0,o.kt)("inlineCode",{parentName:"p"},".mjs")," config files will throw when calling Babel\nsynchronously. They have been supported since ",(0,o.kt)("inlineCode",{parentName:"p"},"v7.8.0"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"babel.config.js")," and ",(0,o.kt)("inlineCode",{parentName:"p"},".babelrc.js")," behave like the ",(0,o.kt)("inlineCode",{parentName:"p"},".mjs")," equivalents when your ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"\nfile contains the ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/api/esm.html#esm_code_package_json_code_code_type_code_field"},(0,o.kt)("inlineCode",{parentName:"a"},'"type": "module"')),"\noption, otherwise they are exactly the same as the ",(0,o.kt)("inlineCode",{parentName:"p"},".cjs")," files.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"babel.config.cts")," and ",(0,o.kt)("inlineCode",{parentName:"p"},".babelrc.cts")," allow you to define your configuration as Typescript + CommonJS. You must either install ",(0,o.kt)("inlineCode",{parentName:"p"},"@babel/preset-typescript"),", or run Babel using ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-node"),"."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"\ud83d\udea7 This functionality is experimental. It's not possible yet to use ",(0,o.kt)("inlineCode",{parentName:"p"},"babel.config.ts")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"babel.config.mts")," files, pending stabilization of the Node.js ESM loader API.")))),(0,o.kt)("p",null,"JavaScript configuration files can either export an object, or a function that when called will\nreturn the generated configuration.\nFunction-returning configs are given a few special powers because they can access an API exposed\nby Babel itself. See ",(0,o.kt)("a",{parentName:"p",href:"#config-function-api"},"Config Function API")," for more information."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For compatibility reasons, ",(0,o.kt)("inlineCode",{parentName:"p"},".babelrc")," is an alias for ",(0,o.kt)("inlineCode",{parentName:"p"},".babelrc.json"),".")),(0,o.kt)("h2",{id:"monorepos"},"Monorepos"),(0,o.kt)("p",null,"Monorepo-structured repositories usually contain many packages, which means that they frequently\nrun into the caveats mentioned in ",(0,o.kt)("a",{parentName:"p",href:"#file-relative-configuration"},"file-relative configuration"),"\nand config file loading in general. This section is aimed at helping users understand how\nto approach monorepo configuration."),(0,o.kt)("p",null,"With monorepo setups, the core thing to understand is that Babel treats your working directory\nas its logical ",(0,o.kt)("a",{parentName:"p",href:"/babel-website/docs/options#root"},'"root"'),", which causes problems if you want to run Babel\ntools within a specific sub-package without having Babel apply to the repo as a whole."),(0,o.kt)("p",null,"Separately, it is also important to decide if you want to use ",(0,o.kt)("a",{parentName:"p",href:"#file-relative-configuration"},(0,o.kt)("inlineCode",{parentName:"a"},".babelrc.json")),"\nfiles or just a central ",(0,o.kt)("a",{parentName:"p",href:"#project-wide-configuration"},(0,o.kt)("inlineCode",{parentName:"a"},"babel.config.json")),". ",(0,o.kt)("a",{parentName:"p",href:"#file-relative-configuration"},(0,o.kt)("inlineCode",{parentName:"a"},".babelrc.json")),"\nfiles are not required for subfolder-specific configuration like they were in Babel 6, so often\nthey are not needed in Babel 7, in favor of ",(0,o.kt)("a",{parentName:"p",href:"#project-wide-configuration"},(0,o.kt)("inlineCode",{parentName:"a"},"babel.config.json")),"."),(0,o.kt)("h3",{id:"root-babelconfigjson-file"},"Root ",(0,o.kt)("inlineCode",{parentName:"h3"},"babel.config.json")," file"),(0,o.kt)("p",null,"The first step in any monorepo structure should be to create a ",(0,o.kt)("a",{parentName:"p",href:"#project-wide-configuration"},(0,o.kt)("inlineCode",{parentName:"a"},"babel.config.json")),"\nfile in repository root. This establishes Babel's core concept of the base directory of your repository.\nEven if you want to use ",(0,o.kt)("a",{parentName:"p",href:"#file-relative-configuration"},(0,o.kt)("inlineCode",{parentName:"a"},".babelrc.json"))," files to configure each separate package,\nit is important to have as a place for repo-level options."),(0,o.kt)("p",null,"You can often place all of your repo configuration in the root ",(0,o.kt)("a",{parentName:"p",href:"#project-wide-configuration"},(0,o.kt)("inlineCode",{parentName:"a"},"babel.config.json")),".\nWith ",(0,o.kt)("a",{parentName:"p",href:"/babel-website/docs/options#overrides"},'"overrides"'),", you can easily\nspecify configuration that only applies to certain subfolders of your repository, which can often be easier to\nfollow than creating many ",(0,o.kt)("inlineCode",{parentName:"p"},".babelrc.json")," files across the repo."),(0,o.kt)("p",null,"The first issue you'll likely run into is that by default, Babel expects to load ",(0,o.kt)("a",{parentName:"p",href:"#project-wide-configuration"},(0,o.kt)("inlineCode",{parentName:"a"},"babel.config.json")),"\nfiles from the directory set as its ",(0,o.kt)("a",{parentName:"p",href:"/babel-website/docs/options#root"},'"root"'),", which means that if you create\na ",(0,o.kt)("a",{parentName:"p",href:"#project-wide-configuration"},(0,o.kt)("inlineCode",{parentName:"a"},"babel.config.json")),", but run\nBabel inside an individual package, e.g."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Shell"',title:'"Shell"'},"cd packages/some-package;\nbabel src -d dist\n")),(0,o.kt)("p",null,"the ",(0,o.kt)("a",{parentName:"p",href:"/babel-website/docs/options#root"},'"root"')," Babel is using in that context is ",(0,o.kt)("em",{parentName:"p"},"not")," your monorepo root,\nand it won't be able to find the ",(0,o.kt)("a",{parentName:"p",href:"#project-wide-configuration"},(0,o.kt)("inlineCode",{parentName:"a"},"babel.config.json"))," file."),(0,o.kt)("p",null,"If all of your build scripts run relative to your repository root, things should already work, but if\nyou are running your Babel compilation process from within a subpackage, you need to tell Babel where\nto look for the config. There are a few ways to do that, but the recommended way is\nthe ",(0,o.kt)("a",{parentName:"p",href:"/babel-website/docs/options#rootmode"},'"rootMode"')," option with ",(0,o.kt)("inlineCode",{parentName:"p"},'"upward"'),", which will make Babel search from\nthe working directory upward looking for your ",(0,o.kt)("a",{parentName:"p",href:"#project-wide-configuration"},(0,o.kt)("inlineCode",{parentName:"a"},"babel.config.json"))," file,\nand will use its location as the ",(0,o.kt)("a",{parentName:"p",href:"/babel-website/docs/options#root"},'"root"')," value."),(0,o.kt)("p",null,"One helpful way to test if your config is being detected is to place a ",(0,o.kt)("inlineCode",{parentName:"p"},"console.log()")," call\ninside of it if it is a ",(0,o.kt)("a",{parentName:"p",href:"#project-wide-configuration"},(0,o.kt)("inlineCode",{parentName:"a"},"babel.config.json"))," JavaScript file: the log will execute\nthe first time Babel loads it."),(0,o.kt)("p",null,"How you set this value varies by project, but here are a few examples:"),(0,o.kt)("h4",{id:"cli"},"CLI"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Shell"',title:'"Shell"'},"babel --root-mode upward src -d lib\n")),(0,o.kt)("h4",{id:"babelregister"},"@babel/register"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'require("@babel/register")({\n  rootMode: "upward",\n});\n')),(0,o.kt)("h4",{id:"webpack"},"Webpack"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="webpack.config.js"',title:'"webpack.config.js"'},'module: {\n  rules: [\n    {\n      loader: "babel-loader",\n      options: {\n        rootMode: "upward",\n      },\n    },\n  ];\n}\n')),(0,o.kt)("h4",{id:"jest"},"Jest"),(0,o.kt)("p",null,"Jest is often installed at the root of the monorepo and may not require configuration,\nbut if it is installed per-package it can unfortunately be more complex to configure."),(0,o.kt)("p",null,"The main part is creating a custom jest transformer file that wraps ",(0,o.kt)("inlineCode",{parentName:"p"},"babel-jest"),"'s default\nbehavior in order to set the option, e.g."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="wrapper.js"',title:'"wrapper.js"'},'module.exports = require("babel-jest").default.createTransformer({\n  rootMode: "upward",\n});\n')),(0,o.kt)("p",null,"and with that saved somewhere, you'd then use that file in the place of ",(0,o.kt)("inlineCode",{parentName:"p"},"babel-jest")," in\nyour Jest options via the ",(0,o.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/en/configuration#transform-object-string-string"},"transform option"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="jest.config.js"',title:'"jest.config.js"'},'"transform": {\n  "^.+\\\\.jsx?$": "./path/to/wrapper.js"\n},\n')),(0,o.kt)("p",null,"so all JS files will be processed with your version of ",(0,o.kt)("inlineCode",{parentName:"p"},"babel-jest")," with the option enabled."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"NOTE: When using ",(0,o.kt)("inlineCode",{parentName:"p"},"babel-jest")," ","<"," 27, you must omit the ",(0,o.kt)("inlineCode",{parentName:"p"},".default")," part: ",(0,o.kt)("inlineCode",{parentName:"p"},'require("babel-jest").createTransformer({ ...'),".")),(0,o.kt)("h4",{id:"others"},"Others"),(0,o.kt)("p",null,"There are tons of tools, but at the core of it is that they need the ",(0,o.kt)("inlineCode",{parentName:"p"},"rootMode")," option enabled\nif the working directory is not already the monorepo root."),(0,o.kt)("h3",{id:"subpackage-babelrcjson-files"},"Subpackage ",(0,o.kt)("inlineCode",{parentName:"h3"},".babelrc.json")," files"),(0,o.kt)("p",null,"Similar to the way ",(0,o.kt)("a",{parentName:"p",href:"#project-wide-configuration"},(0,o.kt)("inlineCode",{parentName:"a"},"babel.config.json"))," files are required to be in the ",(0,o.kt)("a",{parentName:"p",href:"/babel-website/docs/options#root"},'"root"'),",\n",(0,o.kt)("a",{parentName:"p",href:"#file-relative-configuration"},(0,o.kt)("inlineCode",{parentName:"a"},".babelrc.json"))," files must be in the root ",(0,o.kt)("em",{parentName:"p"},"package"),", by default. This means that, the same way the\nworking directory affects ",(0,o.kt)("a",{parentName:"p",href:"#project-wide-configuration"},(0,o.kt)("inlineCode",{parentName:"a"},"babel.config.json"))," loading, it also affects ",(0,o.kt)("a",{parentName:"p",href:"#file-relative-configuration"},(0,o.kt)("inlineCode",{parentName:"a"},".babelrc.json"))," loading."),(0,o.kt)("p",null,"Assuming you've already gotten your ",(0,o.kt)("a",{parentName:"p",href:"#project-wide-configuration"},(0,o.kt)("inlineCode",{parentName:"a"},"babel.config.json"))," file loaded properly as discussed above,\nBabel will only process ",(0,o.kt)("a",{parentName:"p",href:"#file-relative-configuration"},(0,o.kt)("inlineCode",{parentName:"a"},".babelrc.json"))," files inside that root package (and not subpackages),\nso given for instance"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"package.json\nbabel.config.js\npackages/\n  mod/\n    package.json\n    .babelrc.json\n    index.js\n")),(0,o.kt)("p",null,"compiling the ",(0,o.kt)("inlineCode",{parentName:"p"},"packages/mod/index.js")," file will not load ",(0,o.kt)("inlineCode",{parentName:"p"},"packages/mod/.babelrc.json")," because\nthis ",(0,o.kt)("a",{parentName:"p",href:"#file-relative-configuration"},(0,o.kt)("inlineCode",{parentName:"a"},".babelrc.json"))," is within a sub-package, not the root package."),(0,o.kt)("p",null,"To enable processing of that ",(0,o.kt)("a",{parentName:"p",href:"#file-relative-configuration"},(0,o.kt)("inlineCode",{parentName:"a"},".babelrc.json")),", you will want to use the ",(0,o.kt)("a",{parentName:"p",href:"/babel-website/docs/options#babelrcroots"},'"babelrcRoots"'),"\noption from inside your ",(0,o.kt)("a",{parentName:"p",href:"#project-wide-configuration"},(0,o.kt)("inlineCode",{parentName:"a"},"babel.config.json"))," file to do"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'babelrcRoots: [\n  ".",\n  "packages/*",\n],\n')),(0,o.kt)("p",null,"so that Babel will consider all ",(0,o.kt)("inlineCode",{parentName:"p"},"packages/*")," packages as allowed to load ",(0,o.kt)("a",{parentName:"p",href:"#file-relative-configuration"},(0,o.kt)("inlineCode",{parentName:"a"},".babelrc.json"))," files,\nalong with the original repo root."),(0,o.kt)("h2",{id:"config-function-api"},"Config Function API"),(0,o.kt)("p",null,"JS config files may export a function that will be passed config function API:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"module.exports = function(api) {\n  return {};\n};\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"api")," object exposes everything Babel itself exposes from its index module, along with\nconfig-file specific APIs:"),(0,o.kt)("h3",{id:"apiversion"},(0,o.kt)("inlineCode",{parentName:"h3"},"api.version")),(0,o.kt)("p",null,"Type: ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),(0,o.kt)("br",null)),(0,o.kt)("p",null,"The version string for the Babel version that is loading the config file."),(0,o.kt)("h3",{id:"apicache"},(0,o.kt)("inlineCode",{parentName:"h3"},"api.cache")),(0,o.kt)("p",null,"JS configs are great because they can compute a config on the fly, but the downside\nthere is that it makes caching harder. Babel wants to avoid re-executing the\nconfig function every time a file is compiled, because then it would also need to\nre-execute any plugin and preset functions referenced in that config."),(0,o.kt)("p",null,"To avoid this, Babel expects users of config functions to tell it how to manage\ncaching within a config file."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"api.cache.forever()")," - Permacache the computed config and never call the function again."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"api.cache.never()")," - Do not cache this config, and re-execute the function every time."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"api.cache.using(() => process.env.NODE_ENV)")," - Cache based on the value of ",(0,o.kt)("inlineCode",{parentName:"li"},"NODE_ENV"),".\nAny time the ",(0,o.kt)("inlineCode",{parentName:"li"},"using")," callback returns a value other than the one that was expected, the overall\nconfig function will be called again and a new entry will be added to the cache."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"api.cache.invalidate(() => process.env.NODE_ENV)")," - Cache based on the value of ",(0,o.kt)("inlineCode",{parentName:"li"},"NODE_ENV"),".\nAny time the ",(0,o.kt)("inlineCode",{parentName:"li"},"using")," callback returns a value other than the one that was expected, the overall\nconfig function will be called again and all entries in the cache will be replaced with the result."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"api.cache(true)")," - Same as ",(0,o.kt)("inlineCode",{parentName:"li"},"api.cache.forever()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"api.cache(false)")," - Same as ",(0,o.kt)("inlineCode",{parentName:"li"},"api.cache.never()"))),(0,o.kt)("p",null,"Since the actual callback result is used to check if the cache entry is valid, it is recommended\nthat:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Callbacks should be small and side-effect free."),(0,o.kt)("li",{parentName:"ul"},"Callbacks should return values with the smallest range possible. For example, the\n",(0,o.kt)("inlineCode",{parentName:"li"},".using(() => process.env.NODE_ENV)")," usage above is not ideal because it would create an unknown\nnumber of cache entries depending on how many values of ",(0,o.kt)("inlineCode",{parentName:"li"},"NODE_ENV")," are detected. It would be\nsafer to do ",(0,o.kt)("inlineCode",{parentName:"li"},'.using(() => process.env.NODE_ENV === "development")')," because then the cache entry\ncan only ever be ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,o.kt)("h3",{id:"apienv"},(0,o.kt)("inlineCode",{parentName:"h3"},"api.env(...)")),(0,o.kt)("p",null,"Since ",(0,o.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," is a fairly common way to toggle behavior, Babel also includes an API function\nmeant specifically for that. This API is used as a quick way to check the\n",(0,o.kt)("a",{parentName:"p",href:"/babel-website/docs/options#envname"},'"envName"')," that Babel was loaded with, which takes ",(0,o.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," into account\nif no other overriding environment is set."),(0,o.kt)("p",null,"It has a few different forms:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'api.env("production")')," returns ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," if ",(0,o.kt)("inlineCode",{parentName:"li"},'envName === "production"'),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'api.env(["development", "test"])')," returns ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," if ",(0,o.kt)("inlineCode",{parentName:"li"},'["development", "test"].includes(envName)'),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"api.env()")," returns the current ",(0,o.kt)("inlineCode",{parentName:"li"},"envName")," string."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'api.env(envName => envName.startsWith("test-"))')," returns ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),' if the env starts with "test-".')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," This function internally makes use of ",(0,o.kt)("a",{parentName:"p",href:"#apicache"},(0,o.kt)("inlineCode",{parentName:"a"},"api.cache"))," mentioned above to ensure that Babel is aware that this build depends on a specific ",(0,o.kt)("inlineCode",{parentName:"p"},"envName"),". You should not use it alongside with ",(0,o.kt)("inlineCode",{parentName:"p"},"api.cache.forever()")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"api.cache.never()"),".")),(0,o.kt)("h3",{id:"apicallercb"},(0,o.kt)("inlineCode",{parentName:"h3"},"api.caller(cb)")),(0,o.kt)("p",null,"This API is used as a way to access the ",(0,o.kt)("inlineCode",{parentName:"p"},"caller")," data that has been passed to Babel.\nSince many instances of Babel may be running in the same process with different ",(0,o.kt)("inlineCode",{parentName:"p"},"caller"),"\nvalues, this API is designed to automatically configure ",(0,o.kt)("inlineCode",{parentName:"p"},"api.cache"),", the same way ",(0,o.kt)("inlineCode",{parentName:"p"},"api.env()")," does."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"caller")," value is available as the first parameter of the callback function. It is best used\nwith something like"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'function isBabelRegister(caller) {\n  return !!(caller && caller.name === "@babel/register");\n}\n\nmodule.exports = function(api) {\n  const isRegister = api.caller(isBabelRegister);\n\n  return {\n    // ...\n  };\n};\n')),(0,o.kt)("p",null,"to toggle configuration behavior based on a specific environment."),(0,o.kt)("h3",{id:"apiassertversionrange"},(0,o.kt)("inlineCode",{parentName:"h3"},"api.assertVersion(range)")),(0,o.kt)("p",null,"While ",(0,o.kt)("inlineCode",{parentName:"p"},"api.version")," can be useful in general, it's sometimes nice to just declare your version.\nThis API exposes a simple way to do that with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},'module.exports = function(api) {\n  api.assertVersion("^7.2");\n\n  return {\n    // ...\n  };\n};\n')))}m.isMDXComponent=!0}}]);