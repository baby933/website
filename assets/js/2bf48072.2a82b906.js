"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8907],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},995:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={id:"voipnet",title:"VoIP Net",description:"VoIP Networks"},a="VoIP Networks",s={unversionedId:"getting_started/voipnet",id:"getting_started/voipnet",title:"VoIP Net",description:"VoIP Networks",source:"@site/docs/getting_started/voipnet.md",sourceDirName:"getting_started",slug:"/getting_started/voipnet",permalink:"/website/docs/getting_started/voipnet",draft:!1,editUrl:"https://github.com/fonoster/website/edit/main/docs/docs/getting_started/voipnet.md",tags:[],version:"current",frontMatter:{id:"voipnet",title:"VoIP Net",description:"VoIP Networks"}},c={},p=[],l={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"voip-networks"},"VoIP Networks"),(0,o.kt)("p",null,"Fonoster comes with support to deploy VoIP networks with ease. For example, with Fonoster you can create a SIP trunk to connect to the PSTN and assign Numbers for inbound or outbound calling."),(0,o.kt)("p",null,"Adding a new Provider (trunk) is easy with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/getting_started/cli"},"CLI"),". Here is an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ fonoster providers:create\nThis utility will help you create a new Provider\nPress ^C at any time to quit.\n? friendly name voip ms\n? username 20131\n? secret *********\n? host newyork1.voip.ms\n? transport tcp\n? expire 300\n? ready? Yes\nCreating provider voip ms... c2uO-eO7tR\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Adding a number is just as easy with ",(0,o.kt)("inlineCode",{parentName:"p"},"fonoster numbers:create"))),(0,o.kt)("p",null,"You can also create your Office/Home network by combining ",(0,o.kt)("inlineCode",{parentName:"p"},"Domains")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Agents"),". Thanks to SIP, you can connect to your VoIP Net using a Softphone or IP Phone."))}u.isMDXComponent=!0}}]);