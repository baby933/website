"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"The essentials of building Voice Applications with Fonoster","metadata":{"permalink":"/blog/The essentials of building Voice Applications with Fonoster","editUrl":"https://github.com/fonoster/website/edit/develop/docs/blog/blog/2022-10-03-voice_app_create.md","source":"@site/blog/2022-10-03-voice_app_create.md","title":"The essentials of building Voice Applications with Fonoster","description":"The purpose of this tutorial is to show the basics of Fonoster. Here you will find how to create a Voice Application, add a Number, and then use that Number to originate a call. Please follow the guide in sequence, as each step builds on the last one.","date":"2022-10-03T00:00:00.000Z","formattedDate":"October 3, 2022","tags":[{"label":"fonoster","permalink":"/blog/tags/fonoster"},{"label":"voice","permalink":"/blog/tags/voice"}],"readingTime":6.39,"hasTruncateMarker":false,"authors":[{"name":"Pedro Sanders","title":"CTO at Fonoster","url":"https://github.com/psanders","imageURL":"https://github.com/psanders.png","key":"psanders"}],"frontMatter":{"slug":"The essentials of building Voice Applications with Fonoster","title":"The essentials of building Voice Applications with Fonoster","authors":["psanders"],"tags":["fonoster","voice"]},"nextItem":{"title":"Welcome","permalink":"/blog/welcome"}},"content":"The purpose of this tutorial is to show the basics of Fonoster. Here you will find how to create a Voice Application, add a Number, and then use that Number to originate a call. Please follow the guide in sequence, as each step builds on the last one.\\n\\n# Requirements  \\n\\nBefore you start this guide, you will need the following:\\n\\n- A set of credentials from [here](https://console.fonoster.io/) \ud83d\udc48\\n- An account for access to a SIP Service Provider (For US and Canada, we recommend [voip.ms](https://voip.ms/residential))\\n- NodeJS 14+ (Use nvm if possible)\\n- Fonoster command-line tool install with `npm install -g @fonoster/ctl`\\n- Ngrok `install with npm install -g ngrok`\\n\\nYou can login to the server with:\\n\\n```none\\nfonoster auth:login\\n```\\n\\nAnd your output will be similar to:\\n\\n```none\\nAccess your Fonoster infrastructure\\nPress ^C at any time to quit.\\n? api endpoint api.fonoster.io\\n? access key id psanders\\n? access key token *************************...\\n? ready? Yes\\nAccessing endpoint api.fonoster.io... Done\\n```\\n\\nThen, set the default Project: \\n\\n```none\\n# Get the PROJECT_ID of the project using the \'projects:list\' command \\nfonoster projects:use ${PROJECT_ID}\\n```\\n\\n# Creating a basic Voice Application \\n\\nA Voice Application is a server that takes control of the flow of a call. \\n\\nA Voice Application can use any combination of the following verbs:\\n\\n- `Answer` - Accepts the call\\n- `Hangup` - Closes the call\\n- `Play` - It takes an URL or file and streams the sound back to the calling part\\n- `Say` - It takes a text, synthesizes the text into audio, and streams the result\\n- `Gather` - It waits for DTMF events and returns back the result\\n- `SGather` - It listen for a stream DTMF events and returns back the result\\n- `Record` - It records the voice of the calling party and saves the audio on the Storage sub-system\\n- `Mute` - It tells the channel to stop sending media, thus effectively muting the channel\\n- `Unmute` - It tells the channel to allow media flow\\n\\nTo create a Voice Application perform the following steps.\\n\\nFirst, clone the NodeJS example template as follows:\\n\\n```none\\ngit clone https://github.com/fonoster/nodejs-voiceapp\\n```\\nNext, install the dependencies:\\n\\n```none\\ncd nodejs-voiceapp\\nnpm install\\n```\\nFinally, launch the Voice Application with:\\n```none\\nnpm start\\n```\\n\\nYour output will look like this:\\n```none\\ninfo: initializing voice server\\ninfo: starting voice server on @ 0.0.0.0, port=3000\\n```\\n> Your app will live at `http://127.0.0.1:3000.` Be sure to leave the server up!\\n\\n## Using Ngrok to publish your Voice Application \\n\\nNow that we have our Voice Application up and running, we need to make it available on the Internet\u2014\u2014the fastest way to enable public access by using Ngrok. \\n\\nFor example, with ngrok, you can publish a web server with a single command.\\n\\nOn a new console, run Ngrok with the following command:\\n```none\\nngrok http 3000\\n```\\n\\nThe output will look like this:\\n\\n![ngrok_output](https://user-images.githubusercontent.com/80093500/193677206-08190c5d-b1b1-4358-bd32-4b7d62dd99ef.png)\\n\\nLeave this service running, and save the Forwarding URL for use in the next step.\\n\\n## Building a SIP Network \\nA SIP Network has all the building blocks needed to establish communication between two SIP endpoints (i.e., softphone, webphone, cellphone, the PSTN, etc.) We want to configure a Number and route the calls to our Voice Application on this guide.\\n\\nLet\'s start by creating a SIP Service Provider.\\n\\n## Adding a SIP Service Provider\\nA SIP Service Provider is an organization that will terminate your calls to the phone network (or PSTN). \\n\\nYou will need the `username`, `password`, and `host` you obtained from your SIP Service Provider for this section.\\n\\nCreate a new provider with:\\n```none\\nfonoster providers:create\\n```\\n\\nThe output will look similar to this:\\n```none\\nThis utility will help you create a new Provider\\nPress ^C at any time to quit.\\n? friendly name VOIPMS\\n? username 215706\\n? secret [hidden]\\n? host newyork1.voip.ms\\n? transport tcp\\n? expire 300\\n? ready? Yes\\nCreating provider YourServiceProvider... Done\\n```\\n\\n## Adding a SIP Number\\nA Number, often referred to as DID/DOD, is a number managed by your SIP Service provider.\\n\\n> If your Provider doesn\'t accept E164, you can append the `--ignore-e164-validation`\\n```none\\nfonoster numbers:create --ignore-e164-validation\\n```\\n\\nHere is an example of the output:\\n```none\\nThis utility will help you create a new Number\\nPress ^C at any time to quit.\\n? number in E.164 format (e.g. +16471234567) 9842753574    \\n? service provider VOIPMS\\n? aor link (leave empty)\\n? webhook https://5a2d2ea5d84d.ngrok.io # Replace with the value you obtained from Ngrok\\n? ready? Yes\\nCreating number +17853178071... KyjgGEkasj\\n```\\n\\n>  Be sure to replace the information with what was given to you by your Provider.\\n\\n## Creating a SIP Domain\\n\\nA SIP Domain is a space within the SIP Network where SIP entities live (usually SIP Agents). To create a SIP Domain, you can use the command-line tool or the SDK.\\n\\nIn this step, you need to select the Number you just created as your `Egreess Number`. Also, make sure to use an \\"unclaimed\\" `uri` or you will receive this error: \\"\u203a Error: This Domain already exists.\\"\\n\\nCreate a new Domain with:\\n```none\\nfonoster domains:create\\n```\\n\\nYour output will look similar to this:\\n```none\\nThis utility will help you create a new Domain\\nPress ^C at any time to quit.\\n? friendly name Acme Corp\\n? domain uri (e.g acme.com) sip.acme.com\\n? egress number none\\n? egress rule .*\\n? ready? Yes\\nCreating domain Acme Corp... Jny9B_qaIh\\n```\\n> In the demo server, you don\'t need to own the Domain. Any available URI is fair game!\\n\\n## Using the API to make a call\\n\\nTo make a call, you need install the SDK.\\n\\nInstall the SDK, from within the `voiceapp`, with:\\n```none\\nnpm install --save @fonoster/sdk \\n```\\n\\nNext, create the script `call.js` with the following code:\\n```none\\n// This will load the SDK and reuse your Fonoster credentials\\nconst Fonoster = require(\\"@fonoster/sdk\\");\\nconst callManager = new Fonoster.CallManager();\\n\\n// Few notes:\\n//  1. Update the from to look exactly as the Number you added \\n//  2. Use an active phone or mobile\\n//  3. Replace the webhook with the one from your Ngrok\\ncallManager.call({\\n from: \\"9842753574\\",\\n to: \\"17853178070\\",\\n webhook: \\"https://5a2d2ea5d84d.ngrok.io\\",\\n ignoreE164Validation: true\\n})\\n.then(console.log)\\n.catch(console.error);\\n```\\n\\nFinally, run your script with: `node call.js`\\n\\nIf everything goes well, you will start seeing the output in the console you are running your Voice Application. You will also receive a call that will stream a \\"Hello World,\\" which further confirms that everything is behaving as it should.\\n\\n![call_request](https://user-images.githubusercontent.com/80093500/193678241-8be38da0-cb54-4b25-a4d3-7842a94baa00.png)\\n\\n### Troubleshooting \\n\\n1. Are you not receiving the call at all?\\nThe first thing to check is that your SIP Service Provider configuration is correct. Next, double-check the `username`, `password`, and `host`. If your Provider has an Admin console, check if you can see the registration from Fonoster.\\n\\nNext, make sure the `from` matches the Number given to you by your Provider. \\nAlso, double-check the `to` has the correct prefix (for example, +1, etc.).\\n\\n2. You receive the call but immediately hang up (did not hear a sound)\\nFirst, verify that Ngrok is still running. Next, compare Ngrok\'s URL with the webhook on your Number. They both need to match!\\n\\nThen observe the console\'s output where your Voice Application is running, and see if there are any errors.\\n\\n#### Giving feedback to Team Fonoster\\nWe want to provide you with the best possible experience. To do that, we need your valuable feedback. Because we know you are busy, we provide two ways to get quick feedback from you. From the command line, use the `fonoster bug` command to start a GitHub issue. Or, you can use the `fonoster feedback` command to complete a short survey (which takes less than 30 seconds)."},{"id":"welcome","metadata":{"permalink":"/blog/welcome","editUrl":"https://github.com/fonoster/website/edit/develop/docs/blog/blog/2021-12-01-welcome/index.md","source":"@site/blog/2021-12-01-welcome/index.md","title":"Welcome","description":"Docusaurus blogging features are powered by the blog plugin.","date":"2021-12-01T00:00:00.000Z","formattedDate":"December 1, 2021","tags":[{"label":"fonoster","permalink":"/blog/tags/fonoster"},{"label":"voice","permalink":"/blog/tags/voice"}],"readingTime":0.405,"hasTruncateMarker":false,"authors":[{"name":"Pedro Sanders","title":"CTO at Fonoster","url":"https://github.com/psanders","imageURL":"https://github.com/psanders.png","key":"psanders"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["psanders"],"tags":["fonoster","voice"]},"prevItem":{"title":"The essentials of building Voice Applications with Fonoster","permalink":"/blog/The essentials of building Voice Applications with Fonoster"}},"content":"[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).\\n\\nSimply add Markdown files (or folders) to the `blog` directory.\\n\\nRegular blog authors can be added to `authors.yml`.\\n\\nThe blog post date can be extracted from filenames, such as:\\n\\n- `2019-05-30-welcome.md`\\n- `2019-05-30-welcome/index.md`\\n\\nA blog post folder can be convenient to co-locate blog post images:\\n\\n![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)\\n\\nThe blog supports tags as well!\\n\\n**And if you don\'t want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config."}]}')}}]);