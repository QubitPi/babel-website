"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["805"],{34993:function(e,r,t){t.r(r),t.d(r,{default:function(){return d}});var s=t(24246);t(27378);var a=t(82178),i=t(47690);let l=()=>(0,s.jsx)("div",{className:"mainContainer",children:(0,s.jsxs)("div",{className:"page-header text-center",children:[(0,s.jsx)("h1",{children:"Meet the Team"}),(0,s.jsx)("p",{children:(0,s.jsx)("a",{href:"https://github.com/babel/website/blob/main/website/data/team.yml",target:"_blank",rel:"noreferrer noopener",children:"Edit this page"})})]})}),n=e=>{if(!e.orgs)return null;{let r=e.orgs.map(e=>(0,s.jsx)("a",{href:`https://www.github.com/${e}`,target:"_blank",rel:"noreferrer noopener",children:(0,s.jsx)("div",{className:"org_image",children:(0,s.jsx)("img",{title:e,alt:e,src:`https://avatars.githubusercontent.com/${e}`})})},e));return(0,s.jsx)("div",{className:"member_orgs",children:r})}},m=e=>{if(!e.areas)return null;{let r=e.areas.map(e=>(0,s.jsx)("a",{href:`https://www.github.com/babel/${e}`,target:"_blank",rel:"noreferrer noopener",children:"\uD83C\uDF10"},e));return(0,s.jsx)("div",{className:"member_orgs",children:r})}},c=e=>e.text?(0,s.jsx)("div",{className:"media-link "+e.icon,children:(0,s.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer noopener",children:e.text})}):null,h=e=>{let{member:r}=e,{github:t,twitter:a,name:i,orgs:l,areas:h}=r,o=`https://avatars.githubusercontent.com/${t}`,d=`https://twitter.com/${a}`,b=`https://github.com/${t}`;return(0,s.jsxs)("div",{className:"team_member",children:[(0,s.jsx)("div",{className:"member_avatar",children:(0,s.jsx)("img",{src:o,height:"80",width:"80",alt:"{{name}}"})}),(0,s.jsxs)("div",{className:"member_info",children:[(0,s.jsx)("div",{style:{fontWeight:600},children:i}),(0,s.jsx)(c,{icon:"github",url:b,text:t}),(0,s.jsx)(c,{icon:"twitter",url:d,text:a}),(0,s.jsx)(n,{orgs:l}),(0,s.jsx)(m,{areas:h})]})]})},o=e=>(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{className:"member_type",children:e.title}),(0,s.jsx)("div",{className:"member_block",children:e.members.map(e=>(0,s.jsx)(h,{member:e},e.github))})]}),d=()=>{let{siteConfig:e}=(0,a.Z)(),{customFields:{team:r}}=e;return(0,s.jsxs)(i.Z,{title:e?.title,description:e?.tagline,children:[(0,s.jsx)(l,{}),(0,s.jsxs)("div",{className:"wrapper",children:[(0,s.jsx)(o,{title:"Core Maintainers",members:r.core}),(0,s.jsx)(o,{title:"Team Members",members:r.members}),(0,s.jsx)(o,{title:"Summer of Code",members:r.summerOfCode}),(0,s.jsx)(o,{title:"NonHuman Members",members:r.nonHumanMember}),(0,s.jsx)(o,{title:"Alumni",members:r.alumnus})]})]})}}}]);