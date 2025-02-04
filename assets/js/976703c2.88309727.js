"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["5889"],{51707:function(e,r,n){n.r(r),n.d(r,{metadata:()=>a,contentTitle:()=>c,default:()=>p,assets:()=>d,toc:()=>u,frontMatter:()=>s});var a=JSON.parse('{"id":"babel-plugin-transform-for-of","title":"@babel/plugin-transform-for-of","description":"This plugin is included in @babel/preset-env","source":"@site/../docs/plugin-transform-for-of.md","sourceDirName":".","slug":"/babel-plugin-transform-for-of","permalink":"/docs/babel-plugin-transform-for-of","draft":false,"unlisted":false,"editUrl":"https://github.com/babel/website/edit/main/docs/../docs/plugin-transform-for-of.md","tags":[],"version":"current","frontMatter":{"id":"babel-plugin-transform-for-of","title":"@babel/plugin-transform-for-of","sidebar_label":"for-of"},"sidebar":"docs","previous":{"title":"duplicate-keys","permalink":"/docs/babel-plugin-transform-duplicate-keys"},"next":{"title":"function-name","permalink":"/docs/babel-plugin-transform-function-name"}}'),t=n("24246"),l=n("80980"),i=n("95181"),o=n("38049");let s={id:"babel-plugin-transform-for-of",title:"@babel/plugin-transform-for-of",sidebar_label:"for-of"},c=void 0,d={},u=[{value:"Example",id:"example",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"With a configuration file (Recommended)",id:"with-a-configuration-file-recommended",level:3},{value:"Via CLI",id:"via-cli",level:3},{value:"Via Node API",id:"via-node-api",level:3},{value:"Options",id:"options",level:2},{value:"<code>loose</code>",id:"loose",level:3},{value:"Example",id:"example-1",level:4},{value:"Abrupt completions",id:"abrupt-completions",level:4},{value:"<code>allowArrayLike</code>",id:"allowarraylike",level:3},{value:"<code>assumeArray</code>",id:"assumearray",level:3},{value:"Optimization",id:"optimization",level:3}];function h(e){let r={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.admonition,{type:"info",children:(0,t.jsxs)(r.p,{children:["This plugin is included in ",(0,t.jsx)(r.code,{children:"@babel/preset-env"})]})}),"\n",(0,t.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"In"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",metastring:'title="JavaScript"',children:"for (var i of foo) {\n}\n"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Out"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",metastring:'title="JavaScript"',children:"var _iteratorNormalCompletion = true;\nvar _didIteratorError = false;\nvar _iteratorError = undefined;\n\ntry {\n  for (\n    var _iterator = foo[Symbol.iterator](), _step;\n    !(_iteratorNormalCompletion = (_step = _iterator.next()).done);\n    _iteratorNormalCompletion = true\n  ) {\n    var i = _step.value;\n  }\n} catch (err) {\n  _didIteratorError = true;\n  _iteratorError = err;\n} finally {\n  try {\n    if (!_iteratorNormalCompletion && _iterator.return != null) {\n      _iterator.return();\n    }\n  } finally {\n    if (_didIteratorError) {\n      throw _iteratorError;\n    }\n  }\n}\n"})}),"\n",(0,t.jsx)(r.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(o.Z,{value:"npm",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell",children:"npm install --save-dev @babel/plugin-transform-for-of\n"})})}),(0,t.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell",children:"yarn add --dev @babel/plugin-transform-for-of\n"})})}),(0,t.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell",children:"pnpm add --save-dev @babel/plugin-transform-for-of\n"})})})]}),"\n",(0,t.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(r.h3,{id:"with-a-configuration-file-recommended",children:"With a configuration file (Recommended)"}),"\n",(0,t.jsx)(r.p,{children:"Without options:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",metastring:'title="JavaScript"',children:'{\n  "plugins": ["@babel/plugin-transform-for-of"]\n}\n'})}),"\n",(0,t.jsx)(r.p,{children:"With options:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",metastring:'title="JavaScript"',children:'{\n  "plugins": [\n    ["@babel/plugin-transform-for-of", {\n      "loose": true, // defaults to false\n      "assumeArray": true // defaults to false\n    }]\n  ]\n}\n'})}),"\n",(0,t.jsx)(r.h3,{id:"via-cli",children:"Via CLI"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sh",metastring:'title="Shell"',children:"babel --plugins @babel/plugin-transform-for-of script.js\n"})}),"\n",(0,t.jsx)(r.h3,{id:"via-node-api",children:"Via Node API"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",metastring:'title="JavaScript"',children:'require("@babel/core").transformSync("code", {\n  plugins: ["@babel/plugin-transform-for-of"],\n});\n'})}),"\n",(0,t.jsx)(r.h2,{id:"options",children:"Options"}),"\n",(0,t.jsx)(r.h3,{id:"loose",children:(0,t.jsx)(r.code,{children:"loose"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"boolean"}),", defaults to ",(0,t.jsx)(r.code,{children:"false"})]}),"\n",(0,t.jsx)(r.p,{children:"In loose mode, arrays are put in a fast path, thus heavily increasing performance."}),"\n",(0,t.jsx)(r.admonition,{type:"caution",children:(0,t.jsxs)(r.p,{children:["Consider migrating to the top level ",(0,t.jsx)(r.a,{href:"/docs/assumptions#skipforofiteratorclosing",children:(0,t.jsx)(r.code,{children:"skipForOfIteratorClosing"})})," assumption."]})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-json",metastring:'title="babel.config.json"',children:'{\n  "assumptions": {\n    "skipForOfIteratorClosing": true\n  }\n}\n'})}),"\n",(0,t.jsx)(r.p,{children:"All other iterables will continue to work fine."}),"\n",(0,t.jsx)(r.h4,{id:"example-1",children:"Example"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"In"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",metastring:'title="JavaScript"',children:"for (var i of foo) {\n}\n"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Out"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",metastring:'title="JavaScript"',children:"for (\n  var _iterator = foo,\n    _isArray = Array.isArray(_iterator),\n    _i = 0,\n    _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();\n  ;\n\n) {\n  var _ref;\n\n  if (_isArray) {\n    if (_i >= _iterator.length) break;\n    _ref = _iterator[_i++];\n  } else {\n    _i = _iterator.next();\n    if (_i.done) break;\n    _ref = _i.value;\n  }\n\n  var i = _ref;\n}\n"})}),"\n",(0,t.jsx)(r.h4,{id:"abrupt-completions",children:"Abrupt completions"}),"\n",(0,t.jsxs)(r.p,{children:["Under the ",(0,t.jsx)(r.code,{children:"skipForOfIteratorClosing"})," assumption, an iterator's ",(0,t.jsx)(r.code,{children:"return"})," method will not be called on abrupt completions caused by thrown errors."]}),"\n",(0,t.jsxs)(r.p,{children:["Please see ",(0,t.jsx)(r.a,{href:"https://github.com/google/traceur-compiler/issues/1773",children:"google/traceur-compiler#1773"})," and\n",(0,t.jsx)(r.a,{href:"https://github.com/babel/babel/issues/838",children:"babel/babel#838"})," for more information."]}),"\n",(0,t.jsx)(r.h3,{id:"allowarraylike",children:(0,t.jsx)(r.code,{children:"allowArrayLike"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"boolean"}),", defaults to ",(0,t.jsx)(r.code,{children:"false"})]}),"\n",(0,t.jsxs)(r.p,{children:["Added in: ",(0,t.jsx)(r.code,{children:"v7.10.0"})]}),"\n",(0,t.jsx)(r.p,{children:"This option allows for-of to be used with array-like objects."}),"\n",(0,t.jsxs)(r.p,{children:["An array-like object is an object with a ",(0,t.jsx)(r.code,{children:"length"})," property: for example, ",(0,t.jsx)(r.code,{children:'{ 0: "a", 1: "b", length: 2 }'}),'. Note that, like real arrays, array-like objects can have "holes": ',(0,t.jsx)(r.code,{children:'{ 1: "a", length: 3 }'})," is equivalent to ",(0,t.jsx)(r.code,{children:'[ (hole), "a", (hole) ]'}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["While it is ",(0,t.jsx)(r.em,{children:"not"})," spec-compliant to iterate array-like objects as if they were arrays, there are many objects that would be ",(0,t.jsx)(r.em,{children:"iterables"})," in modern browsers with ",(0,t.jsx)(r.code,{children:"Symbol.iterator"})," support. Some notable examples are the DOM collections, like ",(0,t.jsx)(r.code,{children:'document.querySelectorAll("img.big")'}),", which are the main use case for this option."]}),"\n",(0,t.jsxs)(r.p,{children:["Please note that Babel allows iterating ",(0,t.jsx)(r.code,{children:"arguments"})," in old engines even if this option is disabled, because it's defined as ",(0,t.jsx)(r.em,{children:"iterable"})," in the ECMAScript specification."]}),"\n",(0,t.jsx)(r.h3,{id:"assumearray",children:(0,t.jsx)(r.code,{children:"assumeArray"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"boolean"}),", defaults to ",(0,t.jsx)(r.code,{children:"false"})]}),"\n",(0,t.jsxs)(r.p,{children:["This will apply the optimization shown below to all for-of loops by assuming that ",(0,t.jsx)(r.em,{children:"all"})," loops are arrays."]}),"\n",(0,t.jsx)(r.p,{children:"Can be useful when you just want a for-of loop to represent a basic for loop over an array."}),"\n",(0,t.jsx)(r.h3,{id:"optimization",children:"Optimization"}),"\n",(0,t.jsx)(r.p,{children:"If a basic array is used, Babel will compile the for-of loop down to a regular for loop."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"In"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",metastring:'title="JavaScript"',children:"for (let a of [1, 2, 3]) {\n}\n"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Out"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",metastring:'title="JavaScript"',children:"var _arr = [1, 2, 3];\nfor (var _i = 0; _i < _arr.length; _i++) {\n  var a = _arr[_i];\n}\n"})}),"\n",(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsxs)(r.p,{children:["You can read more about configuring plugin options ",(0,t.jsx)(r.a,{href:"https://babeljs.io/docs/en/plugins#plugin-options",children:"here"})]})})]})}function p(e={}){let{wrapper:r}={...(0,l.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},38049:function(e,r,n){n.d(r,{Z:()=>i});var a=n("24246");n("27378");var t=n("90496");let l="tabItem_wHwb";function i(e){let{children:r,hidden:n,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.Z)(l,i),hidden:n,children:r})}},95181:function(e,r,n){n.d(r,{Z:()=>v});var a=n("24246"),t=n("27378"),l=n("90496"),i=n("85403"),o=n("3620"),s=n("77090"),c=n("76180"),d=n("23418"),u=n("19073");function h(e){return t.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||t.isValidElement(e)&&function(e){let{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:r,tabValues:n}=e;return n.some(e=>e.value===r)}var f=n("3344");let m="tabList_J5MA",b="tabItem_l0OV";function j(e){let{className:r,block:n,selectedValue:t,selectValue:o,tabValues:s}=e,c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),u=e=>{let r=e.currentTarget,n=s[c.indexOf(r)].value;n!==t&&(d(r),o(n))},h=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let n=c.indexOf(e.currentTarget)+1;r=c[n]??c[0];break}case"ArrowLeft":{let n=c.indexOf(e.currentTarget)-1;r=c[n]??c[c.length-1]}}r?.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},r),children:s.map(e=>{let{value:r,label:n,attributes:i}=e;return(0,a.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>c.push(e),onKeyDown:h,onClick:u,...i,className:(0,l.Z)("tabs__item",b,i?.className,{"tabs__item--active":t===r}),children:n??r},r)})})}function x(e){let{lazy:r,children:n,selectedValue:i}=e,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){let e=o.find(e=>e.props.value===i);return e?(0,t.cloneElement)(e,{className:(0,l.Z)("margin-top--md",e.props.className)}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:o.map((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==i}))})}function g(e){let r=function(e){let{defaultValue:r,queryString:n=!1,groupId:a}=e,l=function(e){let{values:r,children:n}=e;return(0,t.useMemo)(()=>{let e=r??h(n).map(e=>{let{props:{value:r,label:n,attributes:a,default:t}}=e;return{value:r,label:n,attributes:a,default:t}});return!function(e){let r=(0,d.lx)(e,(e,r)=>e.value===r.value);if(r.length>0)throw Error(`Docusaurus error: Duplicate values "${r.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[r,n])}(e),[i,f]=(0,t.useState)(()=>(function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}let a=n.find(e=>e.default)??n[0];if(!a)throw Error("Unexpected error: 0 tabValues");return a.value})({defaultValue:r,tabValues:l})),[m,b]=function(e){let{queryString:r=!1,groupId:n}=e,a=(0,o.k6)(),l=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n}),i=(0,c._X)(l);return[i,(0,t.useCallback)(e=>{if(!l)return;let r=new URLSearchParams(a.location.search);r.set(l,e),a.replace({...a.location,search:r.toString()})},[l,a])]}({queryString:n,groupId:a}),[j,x]=function(e){var r;let{groupId:n}=e;let a=(r=n)?`docusaurus.tab.${r}`:null,[l,i]=(0,u.Nk)(a);return[l,(0,t.useCallback)(e=>{if(!!a)i.set(e)},[a,i])]}({groupId:a}),g=(()=>{let e=m??j;return p({value:e,tabValues:l})?e:null})();return(0,s.Z)(()=>{g&&f(g)},[g]),{selectedValue:i,selectValue:(0,t.useCallback)(e=>{if(!p({value:e,tabValues:l}))throw Error(`Can't select invalid tab value=${e}`);f(e),b(e),x(e)},[b,x,l]),tabValues:l}}(e);return(0,a.jsxs)("div",{className:(0,l.Z)("tabs-container",m),children:[(0,a.jsx)(j,{...r,...e}),(0,a.jsx)(x,{...r,...e})]})}function v(e){let r=(0,f.Z)();return(0,a.jsx)(g,{...e,children:h(e.children)},String(r))}},80980:function(e,r,n){n.d(r,{Z:function(){return o},a:function(){return i}});var a=n(27378);let t={},l=a.createContext(t);function i(e){let r=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(l.Provider,{value:r},e.children)}}}]);