"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2090],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3376:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={},c="Receive and respond to a call",i={unversionedId:"getting_started/receive_and_respond_to_a_call",id:"getting_started/receive_and_respond_to_a_call",title:"Receive and respond to a call",description:"Fonoster can accept calls from different sources such as phones, web pages, and mobile devices, and connect them with your Programmable Voice Application using a webhook.",source:"@site/docs/getting_started/receive_and_respond_to_a_call.md",sourceDirName:"getting_started",slug:"/getting_started/receive_and_respond_to_a_call",permalink:"/docs/getting_started/receive_and_respond_to_a_call",draft:!1,editUrl:"https://github.com/fonoster/website/edit/develop/docs/docs/getting_started/receive_and_respond_to_a_call.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Configure a Number",permalink:"/docs/getting_started/configure_a_number"},next:{title:"Make an outbound call",permalink:"/docs/getting_started/make_an_outbound_call"}},l={},s=[],p={toc:s};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"receive-and-respond-to-a-call"},"Receive and respond to a call"),(0,o.kt)("p",null,"Fonoster can accept calls from different sources such as phones, web pages, and mobile devices, and connect them with your Programmable Voice Application using a webhook."),(0,o.kt)("p",null,"When your Fonoster Number receives an incoming phone call, it will send an HTTP request to a server you control. This callback mechanism is known as a webhook. When Fonoster sends your application a request, it expects a response in a JSON format that tells it how to respond to the call."),(0,o.kt)("p",null,"If everything went well with the prior guides, all is left is calling to your Number using a mobile or landline. Your output should look similar to this:"),(0,o.kt)("video",{width:"100%",playsInline:"",controls:"muted"},(0,o.kt)("source",{src:"/videos/receive_and_respond_to_a_call.mov",type:"video/mp4",playsInline:""})))}d.isMDXComponent=!0}}]);