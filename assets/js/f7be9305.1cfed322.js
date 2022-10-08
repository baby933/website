"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[960],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,g=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4761:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={},l="Make an outbound call",c={unversionedId:"getting_started/make_an_outbound_call",id:"getting_started/make_an_outbound_call",title:"Make an outbound call",description:"You can initiate a phone call using NodeJS with a Fonoster Number with a single API request.",source:"@site/docs/getting_started/make_an_outbound_call.md",sourceDirName:"getting_started",slug:"/getting_started/make_an_outbound_call",permalink:"/docs/getting_started/make_an_outbound_call",draft:!1,editUrl:"https://github.com/fonoster/website/edit/develop/docs/docs/getting_started/make_an_outbound_call.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Receive and respond to a call",permalink:"/docs/getting_started/receive_and_respond_to_a_call"},next:{title:"Troubleshooting",permalink:"/docs/getting_started/troubleshooting"}},i={},s=[{value:"Make an outbound call",id:"make-an-outbound-call-1",level:2}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"make-an-outbound-call"},"Make an outbound call"),(0,a.kt)("p",null,"You can initiate a phone call using NodeJS with a Fonoster Number with a single API request."),(0,a.kt)("p",null,"First, create a new script with the following content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'# call.js\nconst Fonoster = require("@fonoster/sdk");\nconst callManager = new Fonoster.CallManager({\n  accessKeyId: "PJ619154d081467a0700000001",\n  accessKeySecret: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ25vc3RlciIsInJvbGUiOiJQUk9KRUNUIiwiYWNjZXNz"\n});\n\ncallManager.call({\n from: "+19842753574",\n to: "17853178070",\n webhook: "https://5a2d2ea5d84d.ngrok.io"\n})\n  .then(console.log)\n  .catch(console.error);\n')),(0,a.kt)("p",null,"Next, replace the ",(0,a.kt)("inlineCode",{parentName:"p"},"from"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"to"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"webhook")," as well as the ",(0,a.kt)("inlineCode",{parentName:"p"},"accessKeyId")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"accessKeySecret")),(0,a.kt)("p",null,'Unlike the previous guides, you must use a "real" number from a Voip Provider.'),(0,a.kt)("p",null,"Also, remember that you need a set of Project credentials instead of Account credentials."),(0,a.kt)("h2",{id:"make-an-outbound-call-1"},"Make an outbound call"),(0,a.kt)("p",null,"Now we are ready to save the changes and run the code by copying the following command into your terminal: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"node call.js\n")),(0,a.kt)("p",null,"That's it! Your phone should ring with a call from your Fonoster Number, and you'll hear our short message."))}d.isMDXComponent=!0}}]);