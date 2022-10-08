"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3173],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=i(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var i=2;i<o;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5255:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));const o={},c="Create a Project",l={unversionedId:"getting_started/create_a_project",id:"getting_started/create_a_project",title:"Create a Project",description:"Projects in Fonoster allow you to manage related resources in a single place. With your Project account, you can create and manage your Providers, Numbers, SIP Agents, Domains, Functions, and many more features.",source:"@site/docs/getting_started/create_a_project.md",sourceDirName:"getting_started",slug:"/getting_started/create_a_project",permalink:"/docs/getting_started/create_a_project",draft:!1,editUrl:"https://github.com/fonoster/website/edit/develop/docs/docs/getting_started/create_a_project.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Install and setup the CLI",permalink:"/docs/getting_started/install_and_setup_the_cli"},next:{title:"Create a Programmable Voice Application",permalink:"/docs/getting_started/create_a_voice_application"}},s={},i=[{value:"Select a Project",id:"select-a-project",level:2}],p={toc:i};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-a-project"},"Create a Project"),(0,a.kt)("p",null,"Projects in Fonoster allow you to manage related resources in a single place. With your Project account, you can create and manage your Providers, Numbers, SIP Agents, Domains, Functions, and many more features."),(0,a.kt)("p",null,"Follow the next few steps to create a new Project using the CLI."),(0,a.kt)("p",null,"First, open a new terminal."),(0,a.kt)("p",null,"Next, login using the Account ",(0,a.kt)("inlineCode",{parentName:"p"},"AccessKeyId")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"AccessKeySecret")," from the ",(0,a.kt)("a",{parentName:"p",href:"https://console.fonoster.com"},"Console")," "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-none"},"fonoster auth:login\n")),(0,a.kt)("p",null,"Then, create a new Project with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-none"},"fonoster projects:create\n")),(0,a.kt)("p",null,"Type a friendly name and chose to enable or disable experimental APIs."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Each Project has its own ",(0,a.kt)("inlineCode",{parentName:"p"},"AccessKeyId")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"AccessKeySecret"),", and the ",(0,a.kt)("inlineCode",{parentName:"p"},"PJ")," prefix (e.g: ",(0,a.kt)("inlineCode",{parentName:"p"},"PJ619154d081467a0700000001"),"), and that is the result you'll see in your terminal. ")),(0,a.kt)("h2",{id:"select-a-project"},"Select a Project"),(0,a.kt)("p",null,"To start working on a Project, you first must select it as default. To do so, follow these few steps:"),(0,a.kt)("p",null,"First, open a new terminal."),(0,a.kt)("p",null,"Next, find the Project's reference with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"fonoster projects:list\n")),(0,a.kt)("p",null,"Finally, set it as default with the ",(0,a.kt)("inlineCode",{parentName:"p"},"projects:use")," command. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-none"},"# Be sure to replace with your Project's AccessKeyId\nfonoster projects:use PJ619154d081467a0700000001\n")),(0,a.kt)("p",null,"You are all set. You can now begin adding your Providers, Numbers, and more."))}u.isMDXComponent=!0}}]);