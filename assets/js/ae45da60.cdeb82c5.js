"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["8315"],{56014:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>p,assets:()=>d,toc:()=>u,frontMatter:()=>o});var t=JSON.parse('{"id":"babel-plugin-transform-classes","title":"@babel/plugin-transform-classes","description":"This plugin is included in @babel/preset-env","source":"@site/../docs/plugin-transform-classes.md","sourceDirName":".","slug":"/babel-plugin-transform-classes","permalink":"/docs/babel-plugin-transform-classes","draft":false,"unlisted":false,"editUrl":"https://github.com/babel/website/edit/main/docs/../docs/plugin-transform-classes.md","tags":[],"version":"current","frontMatter":{"id":"babel-plugin-transform-classes","title":"@babel/plugin-transform-classes","sidebar_label":"classes"},"sidebar":"docs","previous":{"title":"block-scoping","permalink":"/docs/babel-plugin-transform-block-scoping"},"next":{"title":"computed-properties","permalink":"/docs/babel-plugin-transform-computed-properties"}}'),a=s("24246"),r=s("80980"),l=s("95181"),i=s("38049");let o={id:"babel-plugin-transform-classes",title:"@babel/plugin-transform-classes",sidebar_label:"classes"},c=void 0,d={},u=[{value:"Caveats",id:"caveats",level:2},{value:"Examples",id:"examples",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"With a configuration file (Recommended)",id:"with-a-configuration-file-recommended",level:3},{value:"Via CLI",id:"via-cli",level:3},{value:"Via Node API",id:"via-node-api",level:3},{value:"Options",id:"options",level:2},{value:"<code>loose</code>",id:"loose",level:3},{value:"Method enumerability",id:"method-enumerability",level:4},{value:"Method assignment",id:"method-assignment",level:4}];function h(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["This plugin is included in ",(0,a.jsx)(n.code,{children:"@babel/preset-env"})]})}),"\n",(0,a.jsx)(n.h2,{id:"caveats",children:"Caveats"}),"\n",(0,a.jsxs)(n.p,{children:["When extending a native class (e.g., ",(0,a.jsx)(n.code,{children:"class extends Array {}"}),"), the super class\nneeds to be wrapped. This is needed to workaround two problems:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Babel transpiles classes using ",(0,a.jsx)(n.code,{children:"SuperClass.apply(/* ... */)"}),", but native\nclasses aren't callable and thus throw in this case."]}),"\n",(0,a.jsxs)(n.li,{children:["Some built-in functions (like ",(0,a.jsx)(n.code,{children:"Array"}),") always return a new object. Instead of\nreturning it, Babel should treat it as the new ",(0,a.jsx)(n.code,{children:"this"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["The wrapper works on IE11 and every other browser with ",(0,a.jsx)(n.code,{children:"Object.setPrototypeOf"})," or ",(0,a.jsx)(n.code,{children:"__proto__"})," as fallback.\nThere is ",(0,a.jsx)(n.strong,{children:"NO IE \u2264 10 support"}),". If you need IE \u2264 10 it's recommended that you don't extend natives."]}),"\n",(0,a.jsx)(n.p,{children:'Babel needs to statically know if you are extending a built-in class. For this reason, the "mixin pattern" doesn\'t work:'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:"class Foo extends mixin(Array) {}\n\nfunction mixin(Super) {\n  return class extends Super {\n    mix() {}\n  };\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"To workaround this limitation, you can add another class in the inheritance chain so that Babel can wrap the native class:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:"const ExtensibleArray = class extends Array {};\n\nclass Foo extends mixin(ExtensibleArray) {}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"In"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'class Test {\n  constructor(name) {\n    this.name = name;\n  }\n\n  logger() {\n    console.log("Hello", this.name);\n  }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Out"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError("Cannot call a class as a function");\n  }\n}\n\nvar Test = (function() {\n  function Test(name) {\n    _classCallCheck(this, Test);\n\n    this.name = name;\n  }\n\n  Test.prototype.logger = function logger() {\n    console.log("Hello", this.name);\n  };\n\n  return Test;\n})();\n'})}),"\n",(0,a.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsxs)(l.Z,{groupId:"npm2yarn",children:[(0,a.jsx)(i.Z,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"npm install --save-dev @babel/plugin-transform-classes\n"})})}),(0,a.jsx)(i.Z,{value:"yarn",label:"Yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"yarn add --dev @babel/plugin-transform-classes\n"})})}),(0,a.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"pnpm add --save-dev @babel/plugin-transform-classes\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n.h3,{id:"with-a-configuration-file-recommended",children:"With a configuration file (Recommended)"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'// without options\n{\n  "plugins": ["@babel/plugin-transform-classes"]\n}\n\n// with options\n{\n  "plugins": [\n    ["@babel/plugin-transform-classes", {\n      "loose": true\n    }]\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"via-cli",children:"Via CLI"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",metastring:'title="Shell"',children:"babel --plugins @babel/plugin-transform-classes script.js\n"})}),"\n",(0,a.jsx)(n.h3,{id:"via-node-api",children:"Via Node API"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'require("@babel/core").transformSync("code", {\n  plugins: ["@babel/plugin-transform-classes"],\n});\n'})}),"\n",(0,a.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,a.jsx)(n.h3,{id:"loose",children:(0,a.jsx)(n.code,{children:"loose"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"boolean"}),", defaults to ",(0,a.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsxs)(n.p,{children:["Consider migrating to the top level ",(0,a.jsx)(n.a,{href:"/docs/assumptions",children:(0,a.jsx)(n.code,{children:"assumptions"})})," which offers granular control over various ",(0,a.jsx)(n.code,{children:"loose"})," mode deductions Babel has applied."]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",metastring:'title="babel.config.json"',children:'{\n  "assumptions": {\n    "constantSuper": true,\n    "noClassCalls": true,\n    "setClassMethods": true,\n    "superIsCallableConstructor": true\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h4,{id:"method-enumerability",children:"Method enumerability"}),"\n",(0,a.jsxs)(n.p,{children:["Please note that in loose mode class methods ",(0,a.jsx)(n.strong,{children:"are"})," enumerable. This is not in line\nwith the spec and you may run into issues."]}),"\n",(0,a.jsx)(n.h4,{id:"method-assignment",children:"Method assignment"}),"\n",(0,a.jsx)(n.p,{children:"Under loose mode, methods are defined on the class prototype with simple assignments\ninstead of being defined. This can result in the following not working:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="JavaScript"',children:'class Foo {\n  set bar() {\n    throw new Error("foo!");\n  }\n}\n\nclass Bar extends Foo {\n  bar() {\n    // will throw an error when this method is defined\n  }\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["When ",(0,a.jsx)(n.code,{children:"Bar.prototype.foo"})," is defined it triggers the setter on ",(0,a.jsx)(n.code,{children:"Foo"}),". This is a\ncase that is very unlikely to appear in production code however it's something\nto keep in mind."]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["You can read more about configuring plugin options ",(0,a.jsx)(n.a,{href:"https://babeljs.io/docs/en/plugins#plugin-options",children:"here"})]})})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},38049:function(e,n,s){s.d(n,{Z:()=>l});var t=s("24246");s("27378");var a=s("90496");let r="tabItem_wHwb";function l(e){let{children:n,hidden:s,className:l}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r,l),hidden:s,children:n})}},95181:function(e,n,s){s.d(n,{Z:()=>v});var t=s("24246"),a=s("27378"),r=s("90496"),l=s("85403"),i=s("3620"),o=s("77090"),c=s("76180"),d=s("23418"),u=s("19073");function h(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||a.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:n,tabValues:s}=e;return s.some(e=>e.value===n)}var m=s("3344");let f="tabList_J5MA",g="tabItem_l0OV";function b(e){let{className:n,block:s,selectedValue:a,selectValue:i,tabValues:o}=e,c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),u=e=>{let n=e.currentTarget,s=o[c.indexOf(n)].value;s!==a&&(d(n),i(s))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let s=c.indexOf(e.currentTarget)+1;n=c[s]??c[0];break}case"ArrowLeft":{let s=c.indexOf(e.currentTarget)-1;n=c[s]??c[c.length-1]}}n?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},n),children:o.map(e=>{let{value:n,label:s,attributes:l}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:h,onClick:u,...l,className:(0,r.Z)("tabs__item",g,l?.className,{"tabs__item--active":a===n}),children:s??n},n)})})}function x(e){let{lazy:n,children:s,selectedValue:l}=e,i=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){let e=i.find(e=>e.props.value===l);return e?(0,a.cloneElement)(e,{className:(0,r.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:i.map((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==l}))})}function j(e){let n=function(e){let{defaultValue:n,queryString:s=!1,groupId:t}=e,r=function(e){let{values:n,children:s}=e;return(0,a.useMemo)(()=>{let e=n??h(s).map(e=>{let{props:{value:n,label:s,attributes:t,default:a}}=e;return{value:n,label:s,attributes:t,default:a}});return!function(e){let n=(0,d.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,s])}(e),[l,m]=(0,a.useState)(()=>(function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let t=s.find(e=>e.default)??s[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:n,tabValues:r})),[f,g]=function(e){let{queryString:n=!1,groupId:s}=e,t=(0,i.k6)(),r=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s}),l=(0,c._X)(r);return[l,(0,a.useCallback)(e=>{if(!r)return;let n=new URLSearchParams(t.location.search);n.set(r,e),t.replace({...t.location,search:n.toString()})},[r,t])]}({queryString:s,groupId:t}),[b,x]=function(e){var n;let{groupId:s}=e;let t=(n=s)?`docusaurus.tab.${n}`:null,[r,l]=(0,u.Nk)(t);return[r,(0,a.useCallback)(e=>{if(!!t)l.set(e)},[t,l])]}({groupId:t}),j=(()=>{let e=f??b;return p({value:e,tabValues:r})?e:null})();return(0,o.Z)(()=>{j&&m(j)},[j]),{selectedValue:l,selectValue:(0,a.useCallback)(e=>{if(!p({value:e,tabValues:r}))throw Error(`Can't select invalid tab value=${e}`);m(e),g(e),x(e)},[g,x,r]),tabValues:r}}(e);return(0,t.jsxs)("div",{className:(0,r.Z)("tabs-container",f),children:[(0,t.jsx)(b,{...n,...e}),(0,t.jsx)(x,{...n,...e})]})}function v(e){let n=(0,m.Z)();return(0,t.jsx)(j,{...e,children:h(e.children)},String(n))}},80980:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return l}});var t=s(27378);let a={},r=t.createContext(a);function l(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);