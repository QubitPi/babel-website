"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5266],{35318:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return h}});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),c=p(n),b=o,h=c["".concat(l,".").concat(b)]||c[b]||u[b]||s;return n?r.createElement(h,i(i({ref:t},m),{},{components:n})):r.createElement(h,i({ref:t},m))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=b;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[c]="string"==typeof e?e:o,i[1]=a;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},25495:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return c}});var r=n(25773),o=n(30808),s=(n(27378),n(35318)),i=["components"],a={id:"babel-helper-member-expression-to-functions",title:"@babel/helper-member-expression-to-functions",sidebar_label:"helper-member-expression-to-functions"},l=void 0,p={unversionedId:"babel-helper-member-expression-to-functions",id:"babel-helper-member-expression-to-functions",title:"@babel/helper-member-expression-to-functions",description:"Usage",source:"@site/../docs/helper-member-expression-to-functions.md",sourceDirName:".",slug:"/babel-helper-member-expression-to-functions",permalink:"/babel-website/docs/babel-helper-member-expression-to-functions",draft:!1,editUrl:"https://github.com/babel/website/edit/main/docs/../docs/helper-member-expression-to-functions.md",tags:[],version:"current",frontMatter:{id:"babel-helper-member-expression-to-functions",title:"@babel/helper-member-expression-to-functions",sidebar_label:"helper-member-expression-to-functions"}},m={},c=[{value:"Usage",id:"usage",level:2}],u={toc:c},b="wrapper";function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,s.kt)(b,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Designed for internal Babel use.")),(0,s.kt)("p",null,"Traverses the ",(0,s.kt)("inlineCode",{parentName:"p"},"path")," using the supplied ",(0,s.kt)("inlineCode",{parentName:"p"},"visitor")," and an augmented ",(0,s.kt)("inlineCode",{parentName:"p"},"state"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JavaScript"',title:'"JavaScript"'},"const visitor = {\n  MemberExpression(memberPath, state) {\n\n    if (someCondition(memberPath)) {\n\n      // The handle method is supplied by memberExpressionToFunctions.\n      // It should be called whenever a MemberExpression should be\n      // converted into the proper function calls.\n      state.handle(memberPath);\n\n    }\n\n  },\n};\n\n// The helper requires three special methods on state: `get`, `set`, and\n// `call`.\n// Optionally, a special `memoise` method may be defined, which gets\n// called if the member is in a self-referential update expression.\n// Everything else will be passed through as normal.\nconst state = {\n  get(memberPath) {\n    // Return some AST that will get the member\n    return t.callExpression(\n      this.file.addHelper('superGet'),\n      [t.thisExpression(), memberPath.node.property]\n    );\n  },\n\n  set(memberPath, value) {\n    // Return some AST that will set the member\n    return t.callExpression(\n      this.file.addHelper('superSet'),\n      [t.thisExpression(), memberPath.node.property, value]\n    );\n  },\n\n  call(memberPath, args) {\n    // Return some AST that will call the member with the proper context\n    // and args\n    return t.callExpression(\n      t.memberExpression(this.get(memberPath), t.identifier(\"apply\")),\n      [t.thisExpression(), t.arrayExpression(args)]\n    );\n  },\n\n  memoise(memberPath) {\n    const { node } = memberPath;\n    if (node.computed) {\n      MEMOISED.set(node, ...);\n    }\n  },\n\n  // The handle method is provided by memberExpressionToFunctions.\n  // handle(memberPath) { ... }\n\n  // Other state stuff is left untouched.\n  someState: new Set(),\n};\n\n// Replace all the special MemberExpressions in rootPath, as determined\n// by our visitor, using the state methods.\nmemberExpressionToFunctions(rootPath, visitor, state);\n")))}h.isMDXComponent=!0}}]);