"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"Connect Fonoster to Dialogflow","metadata":{"permalink":"/blog/Connect Fonoster to Dialogflow","editUrl":"https://github.com/fonoster/website/edit/develop/docs/blog/blog/2022-11-15-connect_fonoster_to_dialogflow.md","source":"@site/blog/2022-11-15-connect_fonoster_to_dialogflow.md","title":"Connect Fonoster to Dialogflow","description":"Connecting Fonoster to Dialogflow is as just a few clicks away using the Fonoster Dashboard.","date":"2022-11-15T00:00:00.000Z","formattedDate":"November 15, 2022","tags":[{"label":"fonoster","permalink":"/blog/tags/fonoster"},{"label":"voice","permalink":"/blog/tags/voice"},{"label":"dialogflow","permalink":"/blog/tags/dialogflow"},{"label":"OSS","permalink":"/blog/tags/oss"}],"readingTime":1.395,"hasTruncateMarker":false,"authors":[{"name":"Yuri Santana","title":"Developer Relations Advocate at Fonoster","url":"https://github.com/yuricodes","imageURL":"https://github.com/yuricodes.png","key":"yuricodes"}],"frontMatter":{"slug":"Connect Fonoster to Dialogflow","title":"Connect Fonoster to Dialogflow","authors":["yuricodes"],"tags":["fonoster","voice","dialogflow","OSS"]},"nextItem":{"title":"Accessibility in Open Source","permalink":"/blog/Accessibility in Open Source"}},"content":"Connecting Fonoster to Dialogflow is as just a few clicks away using the Fonoster Dashboard. \\n\\n**Trunking information you\'ll need:**\\n- VoIP provider\\n- Number\\n- Username\\n- Password\\n- Host\\n\\n## Set up your provider\'s information\\nSign in to Fonoster and go to the Fonoster Project Dashboard, next select SIP Network tab and create a new Trunk.\\n\\nHere you\'ll need to provide this information from your provider\'s account:\\n- Your provider\'s name\\n- Your username \\n- Your secret / password\\n- Providers Hostname or IPv4\\n\\n### Google Service Account key\\nNext step, you\'ll need to create a new Secret on the Secrets tab and set it to be the Google Service Account json key.\\n\\n#### Create a new Fonoster Application \\n\\nNow we are ready to create a new Application, go to the Applications tab and create a new one. \\n- Pick a name\\n- Select the secret you previously added from the previous step\\n- Pick a voice\\n- Type the intent ID from your Dialogflow Agent\\n- Type the project ID from your Dialogflow project\\n- Hit save\\n\\n##### Add a new number to call \\n\\nLastly, we need to add a new number we can call and trigger Dialogflow.\\n\\nCreate a new number from the SIP Network tab\\n- Add your number from the provider\\n- Add the weebhook URL ```http://voice.fonoster:3000```\\n- Click save\\n\\nAnd there you have it. You\'re ready to call that number and be able to interact with the AI. \\n\\n###### Need help?\\n\\nFonoster is developed in the open. Here are some of the channels you can use to reach us: \\n\\n[Discord](https://discord.gg/mpWSRUhG7e)\\n\\n**GitHub discussions:**\\n- [Q&A](https://github.com/fonoster/fonoster/discussions/categories/q-a) \\n\\n**Twitter:** [@fonoster](https://twitter.com/fonoster)\\n\\nWe look forward to hearing from you."},{"id":"Accessibility in Open Source","metadata":{"permalink":"/blog/Accessibility in Open Source","editUrl":"https://github.com/fonoster/website/edit/develop/docs/blog/blog/2022-10-19-Accessibility_in_Open_Source.md","source":"@site/blog/2022-10-19-Accessibility_in_Open_Source.md","title":"Accessibility in Open Source","description":"Hear the full conversation","date":"2022-10-19T00:00:00.000Z","formattedDate":"October 19, 2022","tags":[{"label":"fonoster","permalink":"/blog/tags/fonoster"},{"label":"voice","permalink":"/blog/tags/voice"},{"label":"twitter","permalink":"/blog/tags/twitter"},{"label":"OSS","permalink":"/blog/tags/oss"}],"readingTime":2.87,"hasTruncateMarker":false,"authors":[{"name":"Yuri Santana","title":"Developer Relations Advocate at Fonoster","url":"https://github.com/yuricodes","imageURL":"https://github.com/yuricodes.png","key":"yuricodes"}],"frontMatter":{"slug":"Accessibility in Open Source","title":"Accessibility in Open Source","authors":["yuricodes"],"tags":["fonoster","voice","twitter","OSS"]},"prevItem":{"title":"Connect Fonoster to Dialogflow","permalink":"/blog/Connect Fonoster to Dialogflow"},"nextItem":{"title":"How we created an open-source alternative to Twilio and why it matters","permalink":"/blog/How we created an open-source alternative to Twilio and why it matters"}},"content":"## Hear the full conversation\\n- <a href=\\"https://twitter.com/yuricodesbot/status/1582355852895612929?s=20&t=1MUUhhOnp5OCNBXG71EO2w\\" target=\\"_blank\\"> Pt.1 </a>\\n- <a href=\\"https://twitter.com/yuricodesbot/status/1582366732819177472?s=20&t=1MUUhhOnp5OCNBXG71EO2w\\" target=\\"_blank\\"> Pt.2 </a>\\n\\nWe had a lovely conversation with  <a href=\\"https://twitter.com/GrahamTheDev\\" target=\\"_blank\\"> Graham </a> an accessibility expert who gave us some wonderful insights on how to test our contrast levels, why accessibility matters and how to fix common mistakes. Let\'s see some of the main points covered in the conversation. \\n\\n> Accessibility is not only important for people with disabilities, we all see and experience the benefits.\\n\\nThere\u2019s this enormous field of software development that people do not know much about. That is accessibility. \\n\\n## How can we make low-code non-code contributions more accessible?\\n\\nFrom an accessibility point, structure your headings correctly, they shouldn\u2019t be nested on each other. There should always be one Heading 1 per page. Do not use them because they\u2019re pretty, use them for their intended purpose. This is important for people using screen readers. \\n\\nUse labels on forms. Do not replace them with placeholders. This is an issue for people in general. For example, someone anxious might fill out the form but wants to double check the form and starts questioning which field is which, so they can only delete the information and see the placeholder text and see if they filled it out right. This is pretty inconvenient.\\n\\nThe second point is alt text on images. Try describing the picture as if you were talking to someone on the phone. And last thing, if there are pictures of code snippets you should fix that and turn it into actual code snippets, for both accessibility and speed for people to copy your code. Ex.\\n\\n```none\\nSome code you can copy\\n``` \\n### Why is accessibility important?\\n\\n- Accessibility not only improves your code or life, but improves other people\u2019s as well. \\n- 97.4% of websites overall have accessibility errors bad enough to stop someone with a disability from using that website.\\n- 1 in 10 people have a disability and 1 in every 10 people have a disability that affects how they interact with web pages.\\n\\nBut we can approach this from two angles. **How does this affect me as a developer?**\\n\\nWell, it makes you use best practices, makes you use semantic HTML, it will save you time, ex: with the button tag. And makes your code easier to read and understand for future checks and reviews. \\n\\nThe other perspective is the business one. There\u2019s a billion people in the world who care about accessibility because they have family or they themselves are disabled, so when you cater to those audiences, you can outperform your competition and have a bigger market. \\n\\nAnother reason why you should care is that the things you do for those with disabilities can help those without disabilities.\\n\\n#### Tips to make your projects more accessible\\n\\nYou need to know how to identify problems. There are tools that help with this issue, like [Accessibility Insights](https://accessibilityinsights.io/). It\u2019ll pick up color contrast issues, if you used the wrong HTML element, the focus order on the page, among some other useful features. \\n\\nRead about accessibility, learn about semantic HTML and best practices. Consume content that can help you improve the structure of your code and make sure to run it through accessibility checkers or make sure to apply [Accessibility Guidelines](wuhecag.com) specifications.  \\n\\n### Other resources:\\n\\n- [Semantic HTML](https://yuricodesbot.hashnode.dev/use-this-instead-of-divs)\\n- [The Internet is not for everyone](https://yuricodesbot.hashnode.dev/the-case-for-web-accessibility)\\n- [Color contrast analyzer for Windows](https://www.tpgi.com/color-contrast-checker/)\\n- [Accessibility Guidelines](wuhecag.com)"},{"id":"How we created an open-source alternative to Twilio and why it matters","metadata":{"permalink":"/blog/How we created an open-source alternative to Twilio and why it matters","editUrl":"https://github.com/fonoster/website/edit/develop/docs/blog/blog/2022-10-05-How_we_created_an_open_source_alternative_to_Twilio_and_why.md","source":"@site/blog/2022-10-05-How_we_created_an_open_source_alternative_to_Twilio_and_why.md","title":"How we created an open-source alternative to Twilio and why it matters","description":"Last year, when I started assembling Team Fonoster, I published a post on Reddit that sparked a great conversation and placed Fonoster on Github\'s trending list even though we didn\'t have much to show.","date":"2022-10-05T00:00:00.000Z","formattedDate":"October 5, 2022","tags":[{"label":"fonoster","permalink":"/blog/tags/fonoster"},{"label":"voice","permalink":"/blog/tags/voice"},{"label":"javascript","permalink":"/blog/tags/javascript"}],"readingTime":3.945,"hasTruncateMarker":false,"authors":[{"name":"Pedro Sanders","title":"CTO at Fonoster","url":"https://github.com/psanders","imageURL":"https://github.com/psanders.png","key":"psanders"}],"frontMatter":{"slug":"How we created an open-source alternative to Twilio and why it matters","title":"How we created an open-source alternative to Twilio and why it matters","authors":["psanders"],"tags":["fonoster","voice","javascript","voice"]},"prevItem":{"title":"Accessibility in Open Source","permalink":"/blog/Accessibility in Open Source"},"nextItem":{"title":"Deploying Fonoster with Cloud-Init","permalink":"/blog/Deploying Fonoster with Cloud-Init"}},"content":"Last year, when I started assembling Team Fonoster, I published a [post](https://www.reddit.com/r/Entrepreneur/comments/j96avf/an_opensource_alternative_to_twilio/) on Reddit that sparked a great conversation and placed Fonoster on Github\'s trending list even though we didn\'t have much to show.\\n\\nAs a result, I had the opportunity to interview dozens of CTOs from companies worldwide and speak with several investors who were interested in the idea of an open-source stack of Programmable Telecommunications.\\n\\nIn the interviews, I found we need an innovative approach to a cloud-based stack for Programmable Telecommunications.\\n\\n## Why we needed CPaaS in the first place?\\n\\nBuilding an application that takes advantage of the existing Telecom network has always been a difficult task compared with, for example, building a web-based application.\\n\\nThis is difficult because it involves a particular set of skills that is challenging to find and can get really costly.\\n\\nLet\'s face it, no one wants to read through dozens of RFCs to program a phone call.\\n\\nSo, when the API era arrived along with UCaaS and CPaaS providers, it was a no-brainer to use one of those providers to deploy a solution within weeks instead of spending months only to get a simple use-case.\\n\\n## So what\'s wrong with traditional CPaaS?\\nThere is nothing wrong with traditional CPaaS. In fact, in most cases, using a CPaaS is a great option to deploy a Telecommunications solution.\\n\\nHowever, even though the concept of using a CPaaS to go to market quickly is fantastic, it comes at a high price for some use-cases. After all, if something goes wrong, you will have no other option but to migrate to another CPaaS or build your own solution and start again on square zero.\\n\\nSome companies complain about the high prices for using a CPaaS. A startup CTO once told me, \u201cIt almost feels that we are paying for a lot of features we don\'t need.\u201d This is because, with a traditional CPaaS, you start on a pay-as-you-go model, but costs can quickly get out of control.\\n\\nOther companies find themselves limited by their providers\' features because with traditional CPaaS you have no option but to use what they have available. There is no chance for customization. And even though that\'s not a problem for most companies, it is a deal-breaker for technology companies.\\n\\nThen you have use-cases, especially in the healthcare industry, that can\'t benefit from using a traditional CPaaS due to privacy concerns and local regulations.\\n\\nIn which of those categories does your company fall?\\n\\n## How can we make this better?\\nThe primary innovation of Fonoster lies in researching and developing the means for creating a highly portable, cloud-based Programmable Telecommunications stack.\\n\\nThis Programmable Telecommunications stack will allow businesses to call an API to dial, answer a call, establish a video session, send SMS, etc. There won\'t be any concern about what servers and networks are doing with that information in the background.\\n\\nOur overall approach to building Fonoster is to use existing open-source solutions that are best in their class when possible and build our own when necessary. We then integrate this individual open-source software into a cohesive set of APIs that resembles a traditional CPaaS.\\n\\nFor example, to start a simple Voice Application one could write a Javascript code like the one below:\\n```none\\nconst { VoiceServer } = require(\\"@fonoster/voice\\");\\n\\nconst serverConfig = {\\n  pathToFiles: `${process.cwd()}/sounds`,\\n};\\n\\nnew VoiceServer(serverConfig).listen(\\n  async (req, res) => {\\n    console.log(req);\\n    await res.answer();\\n    await res.play(`sound:${req.selfEndpoint}/sounds/hello-world.sln16`);\\n    await res.hangup();\\n  }\\n);\\n```\\n\\nOr to make a call to the telephone network, you could use the SDK and write a simple script like this:\\n```none\\nconst Fonoster = require(\\"@fonoster/sdk\\");\\nconst callManager = new Fonoster.CallManager();\\n\\ncallManager.call({\\n from: \\"9842753574\\",\\n to: \\"17853178070\\",\\n webhook: \\"https://5a2d2ea5d84d.ngrok.io\\"\\n})\\n.then(console.log)\\n.catch(console.error);\\n```\\n\\nWant to create a reminders application? No problem, in few easy steps, you can create and deploy a Cloud Function that will run based on a given Cron schedule.\\n\\nFirst, initialize your Cloud Function with:\\n```none\\nfonoster funcs:init\\n```\\n\\nThen, edit the handler with the following code:\\n```none\\nconst Fonoster = require(\\"@fonoster/sdk\\");\\nconst callManager = new Fonoster.CallManager();\\n\\n// \ud83d\ude80 Let\'s get started\\n// Use fonoster funcs:deploy to send to the cloud functions\\nmodule.exports = async(request, response) => {\\n  await callManager.call({\\n    from: \\"9842753589\\",\\n    to: \\"17853178070\\",\\n    webhook: \\"https://5a2d2ea5d84d.ngrok.io\\"\\n  })\\n  return response.succeed(\\"OK\\");\\n};\\n```\\n\\nFinally, deploy to the Cloud Functions subsystem with a Cron string.\\n```none\\nfonoster funcs:deploy --schedule \\"*/5 * * * *\\"\\n```\\n\\nYou get the idea.\\n\\n> The Cloud Functions capability if offered by the integration with OpenFaaS (by Alex Ellis)\\n\\n### What\'s next?\\nBe sure to check [The essentials of building Voice Applications with Fonoster](https://learn.fonoster.dev/blog/The%20essentials%20of%20building%20Voice%20Applications%20with%20Fonoster) to overview the Programmable Voice features available on Project Fonoster. \\n\\nStar the project on Github and contact us via:\\n\\n- Twitter: [@fonoster](https://twitter.com/fonoster)\\n- Email: fonosterteam@fonoster.com\\n- [Discord](https://discord.com/invite/mpWSRUhG7e)"},{"id":"Deploying Fonoster with Cloud-Init","metadata":{"permalink":"/blog/Deploying Fonoster with Cloud-Init","editUrl":"https://github.com/fonoster/website/edit/develop/docs/blog/blog/2022-10-04-Deploying_Fonoster_With_Cloud_init.md","source":"@site/blog/2022-10-04-Deploying_Fonoster_With_Cloud_init.md","title":"Deploying Fonoster with Cloud-Init","description":"At Fonoster Inc, we want to help companies and individuals that wish to adopt Fonoster as their Programmable Telecommunications solution. To help archive this goal, our team uses Cloud-Init for cloud instance initialization.","date":"2022-10-04T00:00:00.000Z","formattedDate":"October 4, 2022","tags":[{"label":"fonoster","permalink":"/blog/tags/fonoster"},{"label":"voice","permalink":"/blog/tags/voice"},{"label":"javascript","permalink":"/blog/tags/javascript"}],"readingTime":2.13,"hasTruncateMarker":false,"authors":[{"name":"Pedro Sanders","title":"CTO at Fonoster","url":"https://github.com/psanders","imageURL":"https://github.com/psanders.png","key":"psanders"}],"frontMatter":{"slug":"Deploying Fonoster with Cloud-Init","title":"Deploying Fonoster with Cloud-Init","authors":["psanders"],"tags":["fonoster","voice","javascript","voice"]},"prevItem":{"title":"How we created an open-source alternative to Twilio and why it matters","permalink":"/blog/How we created an open-source alternative to Twilio and why it matters"},"nextItem":{"title":"The essentials of building Voice Applications with Fonoster","permalink":"/blog/The essentials of building Voice Applications with Fonoster"}},"content":"At [Fonoster Inc](https://fonoster.com/), we want to help companies and individuals that wish to adopt Fonoster as their Programmable Telecommunications solution. To help archive this goal, our team uses Cloud-Init for cloud instance initialization.\\n\\nYou can deploy Fonoster to all major public cloud providers, private cloud infrastructure, and bare-metal installations with Cloud-Init.\\n\\nIn this tutorial, we will also use Multipass.\\n\\nMultipass is a Canonical project that offers a lightweight VM manager for Linux, Windows, and macOS. With Multipass, you can deploy Fonoster on Ubuntu in a local environment in a single command. This deployment method is by far the fastest way to get started with Fonoster.\\n\\n## Requirements\\nBefore you start this tutorial, you will need the following:\\n\\n- [Multipass](https://multipass.run/)\\n- NodeJS 14+ (Use nvm if possible)\\n- Fonoster command-line tool (install with `npm install -g @fonoster/ctl`)\\n\\n## Deploying to Multipass\\n> This method will not automatically enable TLS for you\\n\\nDeploy Fonoster to Multipass with the following steps. First, download the [cloud-config.txt](https://raw.githubusercontent.com/fonoster/fonoster/main/operator/cloud-config.txt) file into a local directory with:\\n```none\\ncurl https://raw.githubusercontent.com/fonoster/fonoster/main/operator/cloud-config.txt -o cloud-config.txt\\n```\\n\\nSince we are running locally, we have to modify the `cloud-config` to discover the private ipv4 instead of the public ipv4.\\n\\nFirst, update `cloud-config` with:\\n\\n```none\\nsed -i.bak -e \\"s#publicv4#privatev4#g\\" \\"cloud-config.txt\\"\\n```\\n\\nThen, from the same directory, fire up Multipass.\\n\\n```none\\nmultipass launch --name fonoster --disk 8G --cpus 2 --mem 4G --cloud-init cloud-config.txt\\n```\\n\\nYou might see a `timed out waiting for initialization to complete`, especially in a slow Internet connection. Don\'t worry. The process will continue in the background.\\n\\nYou can access your VM and continue following the installation process with:\\n\\n```none\\nmultipass shell fonoster\\ntail -f /var/log/cloud-init-output.log\\n```\\nOnce you see \\"Cloud init is done!\\" the process is complete. If everything goes well, you will be able to log in to your Fonoster deployment. To authenticate for the first time to your deployment, first get your admin credentials with:\\n```none\\ncat /opt/fonoster/config/admin_credentials\\n```\\nYour output will look like the one below.\\n```none\\n{\\n   \\"accessKeyId\\": \\"admin\\",\\n   \\"accessKeySecret\\": \\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...\\"\\n}\\n```\\nNext, from the host machine, obtain your VM\'s IP with:\\n```none\\nmultipass info fonoster\\n```\\n\\nLook for the entry starting with IPv4.\\n```none\\nName:           fonoster\\nState:          Running\\nIPv4:           192.168.64.39\\n                172.17.0.1\\n                172.24.0.1\\n...\\n```\\n\\nWith the `accessKeyId`, `accessKeySecret`, and your VM\'s IP address, you can now login using the command-line tool or access your server with the SDK.\\n\\n### What\'s next?\\n\\nFor more deployment options, be sure to check the [operator\'s section of Fonoster\'s documentation](https://github.com/fonoster/fonoster/blob/main/docs/operator/deploy-your-server.md). \\n\\nStar the project on [Github](https://github.com/fonoster) and contact us via:\\n\\n- Twitter: [@fonoster](https://twitter.com/intent/follow?screen_name=fonoster)\\n- Email: fonosterteam@fonoster.com\\n- [Discord](https://discord.gg/mpWSRUhG7e)"},{"id":"The essentials of building Voice Applications with Fonoster","metadata":{"permalink":"/blog/The essentials of building Voice Applications with Fonoster","editUrl":"https://github.com/fonoster/website/edit/develop/docs/blog/blog/2022-10-03-voice_app_create.md","source":"@site/blog/2022-10-03-voice_app_create.md","title":"The essentials of building Voice Applications with Fonoster","description":"The purpose of this tutorial is to show the basics of Fonoster. Here you will find how to create a Voice Application, add a Number, and then use that Number to originate a call. Please follow the guide in sequence, as each step builds on the last one.","date":"2022-10-03T00:00:00.000Z","formattedDate":"October 3, 2022","tags":[{"label":"fonoster","permalink":"/blog/tags/fonoster"},{"label":"voice","permalink":"/blog/tags/voice"}],"readingTime":6.39,"hasTruncateMarker":false,"authors":[{"name":"Pedro Sanders","title":"CTO at Fonoster","url":"https://github.com/psanders","imageURL":"https://github.com/psanders.png","key":"psanders"}],"frontMatter":{"slug":"The essentials of building Voice Applications with Fonoster","title":"The essentials of building Voice Applications with Fonoster","authors":["psanders"],"tags":["fonoster","voice"]},"prevItem":{"title":"Deploying Fonoster with Cloud-Init","permalink":"/blog/Deploying Fonoster with Cloud-Init"},"nextItem":{"title":"Welcome","permalink":"/blog/welcome"}},"content":"The purpose of this tutorial is to show the basics of Fonoster. Here you will find how to create a Voice Application, add a Number, and then use that Number to originate a call. Please follow the guide in sequence, as each step builds on the last one.\\n\\n# Requirements  \\n\\nBefore you start this guide, you will need the following:\\n\\n- A set of credentials from [here](https://console.fonoster.io/) \ud83d\udc48\\n- An account for access to a SIP Service Provider (For US and Canada, we recommend [voip.ms](https://voip.ms/residential))\\n- NodeJS 14+ (Use nvm if possible)\\n- Fonoster command-line tool install with `npm install -g @fonoster/ctl`\\n- Ngrok `install with npm install -g ngrok`\\n\\nYou can login to the server with:\\n\\n```none\\nfonoster auth:login\\n```\\n\\nAnd your output will be similar to:\\n\\n```none\\nAccess your Fonoster infrastructure\\nPress ^C at any time to quit.\\n? api endpoint api.fonoster.io\\n? access key id psanders\\n? access key token *************************...\\n? ready? Yes\\nAccessing endpoint api.fonoster.io... Done\\n```\\n\\nThen, set the default Project: \\n\\n```none\\n# Get the PROJECT_ID of the project using the \'projects:list\' command \\nfonoster projects:use ${PROJECT_ID}\\n```\\n\\n# Creating a basic Voice Application \\n\\nA Voice Application is a server that takes control of the flow of a call. \\n\\nA Voice Application can use any combination of the following verbs:\\n\\n- `Answer` - Accepts the call\\n- `Hangup` - Closes the call\\n- `Play` - It takes an URL or file and streams the sound back to the calling part\\n- `Say` - It takes a text, synthesizes the text into audio, and streams the result\\n- `Gather` - It waits for DTMF events and returns back the result\\n- `SGather` - It listen for a stream DTMF events and returns back the result\\n- `Record` - It records the voice of the calling party and saves the audio on the Storage sub-system\\n- `Mute` - It tells the channel to stop sending media, thus effectively muting the channel\\n- `Unmute` - It tells the channel to allow media flow\\n\\nTo create a Voice Application perform the following steps.\\n\\nFirst, clone the NodeJS example template as follows:\\n\\n```none\\ngit clone https://github.com/fonoster/nodejs-voiceapp\\n```\\nNext, install the dependencies:\\n\\n```none\\ncd nodejs-voiceapp\\nnpm install\\n```\\nFinally, launch the Voice Application with:\\n```none\\nnpm start\\n```\\n\\nYour output will look like this:\\n```none\\ninfo: initializing voice server\\ninfo: starting voice server on @ 0.0.0.0, port=3000\\n```\\n> Your app will live at `http://127.0.0.1:3000.` Be sure to leave the server up!\\n\\n## Using Ngrok to publish your Voice Application \\n\\nNow that we have our Voice Application up and running, we need to make it available on the Internet\u2014\u2014the fastest way to enable public access by using Ngrok. \\n\\nFor example, with ngrok, you can publish a web server with a single command.\\n\\nOn a new console, run Ngrok with the following command:\\n```none\\nngrok http 3000\\n```\\n\\nThe output will look like this:\\n\\n![ngrok_output](https://user-images.githubusercontent.com/80093500/193677206-08190c5d-b1b1-4358-bd32-4b7d62dd99ef.png)\\n\\nLeave this service running, and save the Forwarding URL for use in the next step.\\n\\n## Building a SIP Network \\nA SIP Network has all the building blocks needed to establish communication between two SIP endpoints (i.e., softphone, webphone, cellphone, the PSTN, etc.) We want to configure a Number and route the calls to our Voice Application on this guide.\\n\\nLet\'s start by creating a SIP Service Provider.\\n\\n## Adding a SIP Service Provider\\nA SIP Service Provider is an organization that will terminate your calls to the phone network (or PSTN). \\n\\nYou will need the `username`, `password`, and `host` you obtained from your SIP Service Provider for this section.\\n\\nCreate a new provider with:\\n```none\\nfonoster providers:create\\n```\\n\\nThe output will look similar to this:\\n```none\\nThis utility will help you create a new Provider\\nPress ^C at any time to quit.\\n? friendly name VOIPMS\\n? username 215706\\n? secret [hidden]\\n? host newyork1.voip.ms\\n? transport tcp\\n? expire 300\\n? ready? Yes\\nCreating provider YourServiceProvider... Done\\n```\\n\\n## Adding a SIP Number\\nA Number, often referred to as DID/DOD, is a number managed by your SIP Service provider.\\n\\n> If your Provider doesn\'t accept E164, you can append the `--ignore-e164-validation`\\n```none\\nfonoster numbers:create --ignore-e164-validation\\n```\\n\\nHere is an example of the output:\\n```none\\nThis utility will help you create a new Number\\nPress ^C at any time to quit.\\n? number in E.164 format (e.g. +16471234567) 9842753574    \\n? service provider VOIPMS\\n? aor link (leave empty)\\n? webhook https://5a2d2ea5d84d.ngrok.io # Replace with the value you obtained from Ngrok\\n? ready? Yes\\nCreating number +17853178071... KyjgGEkasj\\n```\\n\\n>  Be sure to replace the information with what was given to you by your Provider.\\n\\n## Creating a SIP Domain\\n\\nA SIP Domain is a space within the SIP Network where SIP entities live (usually SIP Agents). To create a SIP Domain, you can use the command-line tool or the SDK.\\n\\nIn this step, you need to select the Number you just created as your `Egreess Number`. Also, make sure to use an \\"unclaimed\\" `uri` or you will receive this error: \\"\u203a Error: This Domain already exists.\\"\\n\\nCreate a new Domain with:\\n```none\\nfonoster domains:create\\n```\\n\\nYour output will look similar to this:\\n```none\\nThis utility will help you create a new Domain\\nPress ^C at any time to quit.\\n? friendly name Acme Corp\\n? domain uri (e.g acme.com) sip.acme.com\\n? egress number none\\n? egress rule .*\\n? ready? Yes\\nCreating domain Acme Corp... Jny9B_qaIh\\n```\\n> In the demo server, you don\'t need to own the Domain. Any available URI is fair game!\\n\\n## Using the API to make a call\\n\\nTo make a call, you need install the SDK.\\n\\nInstall the SDK, from within the `voiceapp`, with:\\n```none\\nnpm install --save @fonoster/sdk \\n```\\n\\nNext, create the script `call.js` with the following code:\\n```none\\n// This will load the SDK and reuse your Fonoster credentials\\nconst Fonoster = require(\\"@fonoster/sdk\\");\\nconst callManager = new Fonoster.CallManager();\\n\\n// Few notes:\\n//  1. Update the from to look exactly as the Number you added \\n//  2. Use an active phone or mobile\\n//  3. Replace the webhook with the one from your Ngrok\\ncallManager.call({\\n from: \\"9842753574\\",\\n to: \\"17853178070\\",\\n webhook: \\"https://5a2d2ea5d84d.ngrok.io\\",\\n ignoreE164Validation: true\\n})\\n.then(console.log)\\n.catch(console.error);\\n```\\n\\nFinally, run your script with: `node call.js`\\n\\nIf everything goes well, you will start seeing the output in the console you are running your Voice Application. You will also receive a call that will stream a \\"Hello World,\\" which further confirms that everything is behaving as it should.\\n\\n![call_request](https://user-images.githubusercontent.com/80093500/193678241-8be38da0-cb54-4b25-a4d3-7842a94baa00.png)\\n\\n### Troubleshooting \\n\\n1. Are you not receiving the call at all?\\nThe first thing to check is that your SIP Service Provider configuration is correct. Next, double-check the `username`, `password`, and `host`. If your Provider has an Admin console, check if you can see the registration from Fonoster.\\n\\nNext, make sure the `from` matches the Number given to you by your Provider. \\nAlso, double-check the `to` has the correct prefix (for example, +1, etc.).\\n\\n2. You receive the call but immediately hang up (did not hear a sound)\\nFirst, verify that Ngrok is still running. Next, compare Ngrok\'s URL with the webhook on your Number. They both need to match!\\n\\nThen observe the console\'s output where your Voice Application is running, and see if there are any errors.\\n\\n#### Giving feedback to Team Fonoster\\nWe want to provide you with the best possible experience. To do that, we need your valuable feedback. Because we know you are busy, we provide two ways to get quick feedback from you. From the command line, use the `fonoster bug` command to start a GitHub issue. Or, you can use the `fonoster feedback` command to complete a short survey (which takes less than 30 seconds)."},{"id":"welcome","metadata":{"permalink":"/blog/welcome","editUrl":"https://github.com/fonoster/website/edit/develop/docs/blog/blog/2021-12-01-welcome/index.md","source":"@site/blog/2021-12-01-welcome/index.md","title":"Welcome","description":"Welcome to Fonoster\'s blog section, if you want to contribute with a Tutorial or Guide let our team know via Discord,","date":"2021-12-01T00:00:00.000Z","formattedDate":"December 1, 2021","tags":[{"label":"fonoster","permalink":"/blog/tags/fonoster"},{"label":"voice","permalink":"/blog/tags/voice"}],"readingTime":0.13,"hasTruncateMarker":false,"authors":[{"name":"Pedro Sanders","title":"CTO at Fonoster","url":"https://github.com/psanders","imageURL":"https://github.com/psanders.png","key":"psanders"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["psanders"],"tags":["fonoster","voice"]},"prevItem":{"title":"The essentials of building Voice Applications with Fonoster","permalink":"/blog/The essentials of building Voice Applications with Fonoster"}},"content":"Welcome to Fonoster\'s blog section, if you want to contribute with a Tutorial or Guide let our team know via [Discord](https://discord.gg/mpWSRUhG7e),\\nwe always welcome new contributors."}]}')}}]);