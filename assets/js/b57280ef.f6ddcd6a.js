"use strict";(self.webpackChunkweb3auth_docs=self.webpackChunkweb3auth_docs||[]).push([[94701],{12157:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>h});var n=t(85893),s=t(11151),o=t(69919);const a={title:"Whitelisting your App Domain or Deep Links",sidebar_label:"Whitelisting URLs",image:"images/docs-meta-cards/documentation-card.png",displayed_sidebar:"docs",description:"Client ID and Whitelisting references | Documentation - Web3Auth"},r=void 0,d={id:"dashboard-setup/whitelisting",title:"Whitelisting your App Domain or Deep Links",description:"Client ID and Whitelisting references | Documentation - Web3Auth",source:"@site/docs/dashboard-setup/whitelisting.mdx",sourceDirName:"dashboard-setup",slug:"/dashboard-setup/whitelisting",permalink:"/docs/dashboard-setup/whitelisting",draft:!1,unlisted:!1,editUrl:"https://github.com/web3auth/web3auth-docs/edit/master/docs/dashboard-setup/whitelisting.mdx",tags:[],version:"current",frontMatter:{title:"Whitelisting your App Domain or Deep Links",sidebar_label:"Whitelisting URLs",image:"images/docs-meta-cards/documentation-card.png",displayed_sidebar:"docs",description:"Client ID and Whitelisting references | Documentation - Web3Auth"},sidebar:"docs",previous:{title:"Projects and Analytics",permalink:"/docs/dashboard-setup/projects-and-analytics"},next:{title:"Enable Interoperability",permalink:"/docs/dashboard-setup/enable-interoperability"}},l={},h=[{value:"Whitelisting URLs using the Developer Dashboard",id:"whitelisting-urls-using-the-developer-dashboard",level:3},{value:"Whitelisting for Mobile apps",id:"whitelisting-for-mobile-apps",level:3},{value:"Manual Whitelisting for Advanced Cases",id:"manual-whitelisting-for-advanced-cases",level:3},{value:"How to secure deep linking via whitelisting strategies to avoid phishing attacks?",id:"how-to-secure-deep-linking-via-whitelisting-strategies-to-avoid-phishing-attacks",level:3},{value:"Some security concerns should be addressed when it comes to deep linking:",id:"some-security-concerns-should-be-addressed-when-it-comes-to-deep-linking",level:4}];function c(e){const i={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h3,{id:"whitelisting-urls-using-the-developer-dashboard",children:"Whitelisting URLs using the Developer Dashboard"}),"\n",(0,n.jsx)(i.p,{children:"The Whitelist URL is the address you wish to authorize for your project. When implementing Web3Auth, it is important to whitelist the specific URLs\nfrom which you intend to make calls for user authentication. By doing so, you can ensure that these activities are conducted securely and efficiently.\nRemember to whitelist all relevant URLs to guarantee seamless integration with Web3Auth."}),"\n",(0,n.jsxs)(i.p,{children:["Type in the URL you wish to whitelist in the text box and click on the ",(0,n.jsx)(i.code,{children:"Add URL"})," button. The URL will be added to the list of whitelisted URLs. You\ncan add as many URLs as you want."]}),"\n",(0,n.jsx)("div",{style:{flexBasis:"300px",flexGrow:"1",textAlign:"center"},children:(0,n.jsx)("img",{src:o.Z,style:{alignSelf:"center",maxWidth:"100%"},alt:"Dashboard Whitelist URL"})}),"\n",(0,n.jsx)(i.h3,{id:"whitelisting-for-mobile-apps",children:"Whitelisting for Mobile apps"}),"\n",(0,n.jsxs)(i.p,{children:["You can use the Developer Dashboard to whitelist URLs for mobile apps as well. For Android, you can whitelist the URL by adding the ",(0,n.jsx)(i.code,{children:"intent-filter"}),"\nmaking the links universal. For iOS, you can whitelist the URL by adding the ",(0,n.jsx)(i.code,{children:"Associated Domains"})," in the ",(0,n.jsx)(i.code,{children:"Capabilities"})," section of the project. For an\nextensive guide on deep linking and app linking for Android apps, please refer to the following\n",(0,n.jsx)(i.a,{href:"/content-hub/blog/comprehensive-guide-to-deep-links-and-app-links-in-android",children:"blog"}),"."]}),"\n",(0,n.jsx)(i.h3,{id:"manual-whitelisting-for-advanced-cases",children:"Manual Whitelisting for Advanced Cases"}),"\n",(0,n.jsxs)(i.p,{children:["You can use the manual origin whitelisting method to whitelist URLs without using the Developer Dashboard. ",(0,n.jsx)(i.code,{children:"OpenLoginAdapter"})," accepts a parameter\ncalled ",(0,n.jsx)(i.code,{children:"originData"})," inside the ",(0,n.jsx)(i.code,{children:"adapterSettings"}),". ",(0,n.jsx)(i.code,{children:"originData"})," is a key value pair where the key is the origin URL and the value is a ",(0,n.jsx)(i.code,{children:"signature"}),". The\nsignature is generated by ",(0,n.jsx)(i.code,{children:"whitelistUrl"})," function from the ",(0,n.jsx)(i.code,{children:"@toruslabs/openlogin"})," package. The ",(0,n.jsx)(i.code,{children:"whitelistUrl"})," function accepts the ",(0,n.jsx)(i.code,{children:"clientId"}),",\n",(0,n.jsx)(i.code,{children:"clientSecret"})," and ",(0,n.jsx)(i.code,{children:"origin"})," as parameters."]}),"\n",(0,n.jsx)(i.admonition,{title:"Note",type:"warning",children:(0,n.jsxs)(i.p,{children:["Please perform this in a highly secure environment. The ",(0,n.jsx)(i.code,{children:"clientSecret"})," should not be exposed to the public making this a risky process."]})}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-tsx",children:'import { OpenloginAdapter } from "@web3auth/openlogin-adapter";\nimport { whitelistUrl } from "@toruslabs/openlogin";\nimport { CommonPrivateKeyProvider } from "@web3auth/base-provider";\n\nconst clientId = "YOUR_CLIENT_ID"; // get from https://dashboard.web3auth.io\nconst clientSecret = "CORRESPONDING_CLIENT_SECRET"; // get from https://dashboard.web3auth.io\nconst origin = "https://example.com";\n\nconst privateKeyProvider = new CommonPrivateKeyProvider({ config: { chainConfig } });\nconst sig = await whitelistUrl(clientId, clientSecret, origin);\n\nconst openloginAdapter = new OpenloginAdapter({\n  privateKeyProvider,\n  adapterSettings: {\n    originData: { [origin]: sig },\n  },\n});\n'})}),"\n",(0,n.jsx)(i.h3,{id:"how-to-secure-deep-linking-via-whitelisting-strategies-to-avoid-phishing-attacks",children:"How to secure deep linking via whitelisting strategies to avoid phishing attacks?"}),"\n",(0,n.jsx)(i.p,{children:"Deep links are a type of link that can direct users deeper into a native mobile application. These are useful for connecting users to specific content\nwithin apps, but they don't have built-in mechanisms for verifying the authenticity of the destination app. This can potentially expose users to\nphishing attacks if they are directed to a malicious app instead."}),"\n",(0,n.jsx)(i.p,{children:"On the other hand, Android's App Links and iOS's Universal Links (similar in purpose to App Links) are more secure versions of deep links. They\ninclude a verification process that Android and iOS use to confirm the link's destination. In the case of App Links, Android checks the app's digital\nasset links file hosted on the website's server, which contains information that links the website's URL to the app. This information must also be\nincluded in the app's manifest file. This process ensures that the app associated with the website is the legitimate destination, thereby mitigating\nthe risk of phishing by not allowing malicious apps to intercept these links."}),"\n",(0,n.jsx)(i.p,{children:"All OAuth applications work on whitelisting strategies. One may use App links or Universal links to secure the backlinking via whitelisting instead of\ndeep links."}),"\n",(0,n.jsxs)(i.p,{children:["For more information, please refer to the following StackOverflow thread\n",(0,n.jsx)(i.a,{href:"https://stackoverflow.com/questions/46169025/android-deep-links-and-app-links-confused",children:"here"}),"."]}),"\n",(0,n.jsx)(i.h4,{id:"some-security-concerns-should-be-addressed-when-it-comes-to-deep-linking",children:"Some security concerns should be addressed when it comes to deep linking:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Deep links sometimes carry sensitive information, hence it's vital to avoid passing crucial information directly via the URLs."}),"\n",(0,n.jsx)(i.li,{children:"Opaque tokens with limited validity should be utilized to minimize the risk of unauthorized access."}),"\n",(0,n.jsxs)(i.li,{children:["Secure channels, such as ",(0,n.jsx)(i.code,{children:"HTTPS"})," should be used to transmit deep links to prevent eavesdropping."]}),"\n"]}),"\n",(0,n.jsx)(i.admonition,{type:"tip",children:(0,n.jsxs)(i.p,{children:["For detailed information on securing deep links, please refer to this\n",(0,n.jsx)(i.a,{href:"/content-hub/blog/comprehensive-guide-to-deep-links-and-app-links-in-android#security-concerns-with-deep-links",children:"blog"}),"."]})})]})}function p(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},69919:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/project-whitelist-ec0210471c902c254ff14a90813adfd3.png"},11151:(e,i,t)=>{t.d(i,{Z:()=>r,a:()=>a});var n=t(67294);const s={},o=n.createContext(s);function a(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);