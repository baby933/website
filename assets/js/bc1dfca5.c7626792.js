"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8530],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),k=c(n),m=r,d=k["".concat(u,".").concat(m)]||k[m]||p[m]||o;return n?a.createElement(d,l(l({ref:t},i),{},{components:n})):a.createElement(d,l({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=k;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6080:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={},l=void 0,s={unversionedId:"reference/Auths",id:"reference/Auths",title:"Auths",description:"Auths \u21d0 APIClient",source:"@site/docs/reference/Auths.md",sourceDirName:"reference",slug:"/reference/Auths",permalink:"/website/docs/reference/Auths",draft:!1,editUrl:"https://github.com/fonoster/website/edit/main/docs/docs/reference/Auths.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"CallManager",permalink:"/website/docs/reference/CallManager"},next:{title:"Using Fonoster with Google Speech APIs",permalink:"/website/docs/tutorials/using_google_speech"}},u={},c=[{value:"Auths \u21d0 <code>APIClient</code>",id:"auths--apiclient",level:2},{value:"new Auths(options)",id:"new-authsoptions",level:3},{value:"auths.createToken(request) \u21d2 <code>Promise.&lt;CreateTokenResponse&gt;</code>",id:"authscreatetokenrequest--promisecreatetokenresponse",level:3},{value:"auths.createNoAccessToken(request) \u21d2 <code>Promise.&lt;CreateTokenResponse&gt;</code>",id:"authscreatenoaccesstokenrequest--promisecreatetokenresponse",level:3},{value:"auths.validateToken(request) \u21d2 <code>Promise.&lt;boolean&gt;</code>",id:"authsvalidatetokenrequest--promiseboolean",level:3}],i={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("a",{name:"Auths"}),(0,r.kt)("h2",{id:"auths--apiclient"},"Auths \u21d0 ",(0,r.kt)("code",null,"APIClient")),(0,r.kt)("p",null,"Use Fonoster Auth, a capability of Fonoster,\nto validate and create short life tokens."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global class",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Extends"),": ",(0,r.kt)("code",null,"APIClient"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"See"),": module:core:APIClient  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Auths"},"Auths")," \u21d0 ",(0,r.kt)("code",null,"APIClient"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#new_Auths_new"},"new Auths(options)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Auths+createToken"},".createToken(request)")," \u21d2 ",(0,r.kt)("code",null,"Promise.","<","CreateTokenResponse",">")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Auths+createNoAccessToken"},".createNoAccessToken(request)")," \u21d2 ",(0,r.kt)("code",null,"Promise.","<","CreateTokenResponse",">")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Auths+validateToken"},".validateToken(request)")," \u21d2 ",(0,r.kt)("code",null,"Promise.","<","boolean",">"))))),(0,r.kt)("a",{name:"new_Auths_new"}),(0,r.kt)("h3",{id:"new-authsoptions"},"new Auths(options)"),(0,r.kt)("p",null,"Constructs a new Auth object."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"ClientOptions")),(0,r.kt)("td",{parentName:"tr",align:null},"Options to indicate the objects endpoint")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const request = {\n  accessKeyId: "603693c0afaa1a080000000e",\n  roleName: "ROLE"\n};\n\nauth.createToken(request)\n.then(console.log)       // returns an object with the token\n.catch(console.error);   // an error occurred\n')),(0,r.kt)("a",{name:"Auths+createToken"}),(0,r.kt)("h3",{id:"authscreatetokenrequest--promisecreatetokenresponse"},"auths.createToken(request) \u21d2 ",(0,r.kt)("code",null,"Promise.","<","CreateTokenResponse",">")),(0,r.kt)("p",null,"Creates a short-life token. The client must have role allowed to create\ntokens."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#Auths"},(0,r.kt)("code",null,"Auths")),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"request"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"CreateTokenRequest")),(0,r.kt)("td",{parentName:"tr",align:null},"Request to create a new token")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"request.accessKeyId"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Path to the function")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"request.expiration"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Longevity of the token")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"request.roleName"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Role assigned to the token")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const Fonoster = require("@fonoster/sdk");\nconst auth = new Fonoster.Auth();\n\nconst request = {\n  accessKeyId: "603693c0afaa1a080000000e",\n  roleName: "SERVICE",\n  expirantion: \'10m\'\n};\n\nauth.createToken(request)\n .then(console.log)       // returns an object with the token\n .catch(console.error);   // an error occurred\n')),(0,r.kt)("a",{name:"Auths+createNoAccessToken"}),(0,r.kt)("h3",{id:"authscreatenoaccesstokenrequest--promisecreatetokenresponse"},"auths.createNoAccessToken(request) \u21d2 ",(0,r.kt)("code",null,"Promise.","<","CreateTokenResponse",">")),(0,r.kt)("p",null,"Creates a short-life token meant only to serve as a signature. This token will\nonly be useful to sign a request."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#Auths"},(0,r.kt)("code",null,"Auths")),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"request"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"CreateTokenRequest")),(0,r.kt)("td",{parentName:"tr",align:null},"Request to create a new signature token")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"request.accessKeyId"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Path to the function")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const Fonoster = require("@fonoster/sdk");\nconst auth = new Fonoster.Auth();\n\nconst request = {\n  accessKeyId: "603693c0afaa1a080000000e",\n};\n\nauth.createNoAccessToken(request)\n .then(console.log)       // returns an object with the token\n .catch(console.error);   // an error occurred\n')),(0,r.kt)("a",{name:"Auths+validateToken"}),(0,r.kt)("h3",{id:"authsvalidatetokenrequest--promiseboolean"},"auths.validateToken(request) \u21d2 ",(0,r.kt)("code",null,"Promise.","<","boolean",">")),(0,r.kt)("p",null,"Checks if a give token was issue by the system."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#Auths"},(0,r.kt)("code",null,"Auths")),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"request"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"CreateTokValidateTokenRequestenRequest")),(0,r.kt)("td",{parentName:"tr",align:null},"Request to verify the validity of a token")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"request.token"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Path to the function.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const Fonoster = require("@fonoster/sdk");\nconst auth = new Fonoster.Auth();\n\nconst request = {\n  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",\n};\n\nauth.validateToken(request)\n .then(console.log)       // returns `true` or `false`\n .catch(console.error);   // an error occurred\n')))}p.isMDXComponent=!0}}]);