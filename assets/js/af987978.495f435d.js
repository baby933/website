"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[354],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(o),m=n,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return o?r.createElement(f,l(l({ref:t},u),{},{components:o})):r.createElement(f,l({ref:t},u))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<a;c++)l[c]=o[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},3055:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=o(7462),n=(o(7294),o(3905));const a={slug:"Connect Fonoster to Dialogflow",title:"Connect Fonoster to Dialogflow",authors:["yuricodes"],tags:["fonoster","voice","dialogflow","OSS"]},l="Connecting Fonoster to Dialogflow",i={permalink:"/blog/Connect Fonoster to Dialogflow",editUrl:"https://github.com/fonoster/website/edit/develop/docs/blog/blog/2022-11-15-connect_fonoster_to_dialogflow.md",source:"@site/blog/2022-11-15-connect_fonoster_to_dialogflow.md",title:"Connect Fonoster to Dialogflow",description:"Connecting Fonoster to Dialogflow is just a few clicks away using the Fonoster Dashboard.",date:"2022-11-15T00:00:00.000Z",formattedDate:"November 15, 2022",tags:[{label:"fonoster",permalink:"/blog/tags/fonoster"},{label:"voice",permalink:"/blog/tags/voice"},{label:"dialogflow",permalink:"/blog/tags/dialogflow"},{label:"OSS",permalink:"/blog/tags/oss"}],readingTime:1.39,hasTruncateMarker:!1,authors:[{name:"Yuri Santana",title:"Developer Relations Advocate at Fonoster",url:"https://github.com/yuricodes",imageURL:"https://github.com/yuricodes.png",key:"yuricodes"}],frontMatter:{slug:"Connect Fonoster to Dialogflow",title:"Connect Fonoster to Dialogflow",authors:["yuricodes"],tags:["fonoster","voice","dialogflow","OSS"]},nextItem:{title:"Accessibility in Open Source",permalink:"/blog/Accessibility in Open Source"}},s={authorsImageUrls:[void 0]},c=[{value:"Set up your provider&#39;s information",id:"set-up-your-providers-information",level:2},{value:"Google Service Account key",id:"google-service-account-key",level:3},{value:"Create a new Fonoster Application",id:"create-a-new-fonoster-application",level:4},{value:"Add a new number to call",id:"add-a-new-number-to-call",level:5},{value:"Need help?",id:"need-help",level:6}],u={toc:c};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Connecting Fonoster to Dialogflow is just a few clicks away using the Fonoster Dashboard. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Trunking information you'll need:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"VoIP provider"),(0,n.kt)("li",{parentName:"ul"},"Number"),(0,n.kt)("li",{parentName:"ul"},"Username"),(0,n.kt)("li",{parentName:"ul"},"Password"),(0,n.kt)("li",{parentName:"ul"},"Host")),(0,n.kt)("h2",{id:"set-up-your-providers-information"},"Set up your provider's information"),(0,n.kt)("p",null,"Sign in to Fonoster and go to the Fonoster Project Dashboard, next select SIP Network tab and create a new Trunk."),(0,n.kt)("p",null,"Here you'll need to provide this information from your provider's account:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Your provider's name"),(0,n.kt)("li",{parentName:"ul"},"Your username "),(0,n.kt)("li",{parentName:"ul"},"Your secret / password"),(0,n.kt)("li",{parentName:"ul"},"Providers Hostname or IPv4")),(0,n.kt)("h3",{id:"google-service-account-key"},"Google Service Account key"),(0,n.kt)("p",null,"Next step, you'll need to create a new Secret on the Secrets tab and set it to be the Google Service Account json key."),(0,n.kt)("h4",{id:"create-a-new-fonoster-application"},"Create a new Fonoster Application"),(0,n.kt)("p",null,"Now we are ready to create a new Application, go to the Applications tab and create a new one. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Pick a name"),(0,n.kt)("li",{parentName:"ul"},"Select the secret you previously added from the previous step"),(0,n.kt)("li",{parentName:"ul"},"Pick a voice"),(0,n.kt)("li",{parentName:"ul"},"Type the intent ID from your Dialogflow Agent"),(0,n.kt)("li",{parentName:"ul"},"Type the project ID from your Dialogflow project"),(0,n.kt)("li",{parentName:"ul"},"Hit save")),(0,n.kt)("h5",{id:"add-a-new-number-to-call"},"Add a new number to call"),(0,n.kt)("p",null,"Lastly, we need to add a new number we can call and trigger Dialogflow."),(0,n.kt)("p",null,"Create a new number from the SIP Network tab"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add your number from the provider"),(0,n.kt)("li",{parentName:"ul"},"Add the weebhook URL ",(0,n.kt)("inlineCode",{parentName:"li"},"http://voice.fonoster:3000")),(0,n.kt)("li",{parentName:"ul"},"Click save")),(0,n.kt)("p",null,"And there you have it. You're ready to call that number and be able to interact with the AI. "),(0,n.kt)("h6",{id:"need-help"},"Need help?"),(0,n.kt)("p",null,"Fonoster is developed in the open. Here are some of the channels you can use to reach us: "),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/mpWSRUhG7e"},"Discord")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"GitHub discussions:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/fonoster/fonoster/discussions/categories/q-a"},"Q&A")," ")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Twitter:")," ",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/fonoster"},"@fonoster")),(0,n.kt)("p",null,"We look forward to hearing from you."))}p.isMDXComponent=!0}}]);