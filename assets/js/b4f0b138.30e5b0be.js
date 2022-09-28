"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3173],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5255:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={},l="Create a Project",i={unversionedId:"getting_started/create_a_project",id:"getting_started/create_a_project",title:"Create a Project",description:"Projects in Fonoster allow you to manage related resources in a single place. With your Project account, you will be able to create and manage your Providers, Numbers, SIP Agents, Domains, Functions, and many more features.",source:"@site/docs/getting_started/create_a_project.md",sourceDirName:"getting_started",slug:"/getting_started/create_a_project",permalink:"/docs/getting_started/create_a_project",draft:!1,editUrl:"https://github.com/fonoster/website/edit/develop/docs/docs/getting_started/create_a_project.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Install and setup the CLI",permalink:"/docs/getting_started/install_and_setup_the_cli"},next:{title:"Create a Voice Application",permalink:"/docs/getting_started/create_a_voice_application"}},c={},s=[{value:"Start working with a a new Project",id:"start-working-with-a-a-new-project",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-a-project"},"Create a Project"),(0,a.kt)("p",null,"Projects in Fonoster allow you to manage related resources in a single place. With your Project account, you will be able to create and manage your Providers, Numbers, SIP Agents, Domains, Functions, and many more features."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"To create a new Project with your terminal follow these steps:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open a new terminal"),(0,a.kt)("li",{parentName:"ol"},"Copy the following command where you'll be prompted to sign in using Fonoster with your ",(0,a.kt)("inlineCode",{parentName:"li"},"ACCESS_KEY_ID")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"ACCESS_KEY_SECRET"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-none"},"fonoster auth:login\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Make sure that you don't have a project already created. Basic accounts only allow one project at a time.\n3. Now copy the following command ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-none"},"fonoster projects:create\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Type a friendly name"),(0,a.kt)("li",{parentName:"ol"},"Chose to enable or disable experimental APIs")),(0,a.kt)("p",null,"Each Project has its own ",(0,a.kt)("inlineCode",{parentName:"p"},"ACCESS_KEY_ID")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ACCESS_KEY_SECRET")," and have the ",(0,a.kt)("inlineCode",{parentName:"p"},"PJ")," prefix (i.e: ",(0,a.kt)("inlineCode",{parentName:"p"},"PJ619154d081467a0700000001"),") and that is the result you'll see in your terminal. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Your project has been succesfully created.")," "),(0,a.kt)("h2",{id:"start-working-with-a-a-new-project"},"Start working with a a new Project"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"To start working with a new Project you first must select it as default, to do so follow these few steps:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open a new terminal"),(0,a.kt)("li",{parentName:"ol"},"Find the Project's reference, they have the ",(0,a.kt)("inlineCode",{parentName:"li"},"PJ")," prefix (i.e: ",(0,a.kt)("inlineCode",{parentName:"li"},"PJ619154d081467a0700000001"),")"),(0,a.kt)("li",{parentName:"ol"},"To set it as default copy this command into your terminal where REF is the reference number with a ",(0,a.kt)("inlineCode",{parentName:"li"},"PJ")," prefix")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-none"},"fonoster projects:use REF\n")),(0,a.kt)("p",null,"(i.e fonoster projects:use PJ619154d081467a0700000001)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"You are all set. You can now begin adding your Providers, Numbers, and many other features.")))}u.isMDXComponent=!0}}]);