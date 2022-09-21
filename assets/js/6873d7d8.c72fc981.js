"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[316],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=i(r),g=o,f=d["".concat(u,".").concat(g)]||d[g]||p[g]||a;return r?n.createElement(f,c(c({ref:t},s),{},{components:r})):n.createElement(f,c({ref:t},s))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var i=2;i<a;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6868:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var n=r(7462),o=(r(7294),r(3905));const a={},c="Create an User Account",l={unversionedId:"getting_started/create_an_user_account",id:"getting_started/create_an_user_account",title:"Create an User Account",description:"Creating an user account will give you access to:",source:"@site/docs/getting_started/create_an_user_account.md",sourceDirName:"getting_started",slug:"/getting_started/create_an_user_account",permalink:"/docs/getting_started/create_an_user_account",draft:!1,editUrl:"https://github.com/fonoster/website/edit/main/docs/docs/getting_started/create_an_user_account.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/getting_started/overview"},next:{title:"Make a Hello World",permalink:"/docs/getting_started/make_a_hello_world"}},u={},i=[{value:"Create a New Project",id:"create-a-new-project",level:2}],s={toc:i};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-an-user-account"},"Create an User Account"),(0,o.kt)("p",null,"Creating an user account will give you access to: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create and manage your Projects"),(0,o.kt)("li",{parentName:"ul"},"Set your Trunks, Agents and Numbers"),(0,o.kt)("li",{parentName:"ul"},"Manage your user settings")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you already have a Fonoster account, you're all set here! ",(0,o.kt)("a",{parentName:"p",href:"https://console.fonoster.io"},"Log in")," and feel free to jump to the next step.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"You will need to ",(0,o.kt)("a",{parentName:"strong",href:"https://console.fonoster.io"},"Sign In")," with GitHub to create a Fonoster account.")),(0,o.kt)("p",null,"This will give you access to your main console where you can start adding Numbers, Trunks, SIP Agents, Domains and so much more. "),(0,o.kt)("p",null,"But before we can get started we need to ",(0,o.kt)("strong",{parentName:"p"},"create a New Project")," that will automatically ",(0,o.kt)("strong",{parentName:"p"},"generate us our ",(0,o.kt)("inlineCode",{parentName:"strong"},"ACCESS_KEY_ID")," and our ",(0,o.kt)("inlineCode",{parentName:"strong"},"ACCESS_KEY_SECRET"))," needed to make calls from Node.js."),(0,o.kt)("h2",{id:"create-a-new-project"},"Create a New Project"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"Sign in into your Fonoster account and create a New Project"),(0,o.kt)("li",null,"Give it a friendly name"),(0,o.kt)("li",null,"Select your New Project by clicking on it. This will take you to its overview and to your credentials."),(0,o.kt)("ul",null,(0,o.kt)("li",null,"Now you have access to your ",(0,o.kt)("strong",null,"Dashboard")," where you can see your new credentials `ACCESS_KEY_ID` and `ACCESS_KEY_SECRET`, and many other features on your left side of the screen "))),(0,o.kt)("ul",null,(0,o.kt)("li",null," ",(0,o.kt)("strong",null,"Your Account Credentials")," are different from those generated in your New Project and you can find them by going into your account settings on the top right of the screen. They will have the `US` prefix (i.e: `US618572e3ec11d10600000001`) ")),(0,o.kt)("p",null,"Now ",(0,o.kt)("strong",{parentName:"p"},"you are all set with the basics of your Fonoster account for the next step")," and start making calls from Node.js or just play around with our Dashboard making your first ",(0,o.kt)("strong",{parentName:"p"},"Hello World.")))}p.isMDXComponent=!0}}]);