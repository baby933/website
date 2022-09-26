"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3173],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5255:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={},i="Create a Project",l={unversionedId:"getting_started/create_a_project",id:"getting_started/create_a_project",title:"Create a Project",description:"Projects in Fonoster allow you to manage related resources in a single place. With your Project account, you will be able to create and manage your Providers, Numbers, SIP Agents, Domains, Functions, etc.",source:"@site/docs/getting_started/create_a_project.md",sourceDirName:"getting_started",slug:"/getting_started/create_a_project",permalink:"/docs/getting_started/create_a_project",draft:!1,editUrl:"https://github.com/fonoster/website/edit/develop/docs/docs/getting_started/create_a_project.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Install and setup the CLI",permalink:"/docs/getting_started/install_and_setup_the_cli"},next:{title:"Create a Voice Application",permalink:"/docs/getting_started/create_a_voice_application"}},c={},s=[{value:"Start working with a a new Project",id:"start-working-with-a-a-new-project",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-a-project"},"Create a Project"),(0,a.kt)("p",null,"Projects in Fonoster allow you to manage related resources in a single place. With your Project account, you will be able to create and manage your Providers, Numbers, SIP Agents, Domains, Functions, etc."),(0,a.kt)("p",null,"Each Project has its own ",(0,a.kt)("inlineCode",{parentName:"p"},"ACCESS_KEY_ID")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ACCESS_KEY_SECRET")," and have the ",(0,a.kt)("inlineCode",{parentName:"p"},"PJ")," prefix (i.e: ",(0,a.kt)("inlineCode",{parentName:"p"},"PJ619154d081467a0700000001"),")"),(0,a.kt)("p",null,"To create a new Project with the console follow the next few steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open a new terminal"),(0,a.kt)("li",{parentName:"ol"},"Copy the following command")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-none"},"fonoster projects:create\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Type a friendly name"),(0,a.kt)("li",{parentName:"ol"},"Chose to enable or disable experimental APIs")),(0,a.kt)("h2",{id:"start-working-with-a-a-new-project"},"Start working with a a new Project"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Select it as default. To set your new Project as default, follow the next steps:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open a new terminal"),(0,a.kt)("li",{parentName:"ul"},"Find the Project's reference "),(0,a.kt)("li",{parentName:"ul"},"To set it as default copy this command into your terminal where ","[REF]"," is the reference number with a ",(0,a.kt)("inlineCode",{parentName:"li"},"PJ")," prefix")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-none"},"fonoster projects:use [REF]\n")),(0,a.kt)("video",{width:"100%",playsInline:"",controls:"muted"},(0,a.kt)("source",{src:"/videos/create_a_project_2.mov",type:"video/mp4",playsInline:""})),(0,a.kt)("p",null,"You are all set. You can now begin adding your Providers, Numbers, and many other features."))}u.isMDXComponent=!0}}]);