"use strict";(self.webpackChunkweb3auth_docs=self.webpackChunkweb3auth_docs||[]).push([[90472,82807,80150,81329,70041,50960,25830,14783,79650,98828,7987,58258],{79654:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(85893),i=n(11151);const a={title:"Trigger Login using your Auth Provider"},o=void 0,s={type:"mdx",permalink:"/docs/quick-start/builder/core_kit/sfa/node/stepContent/authProviderLogin",source:"@site/src/pages/quick-start/builder/core_kit/sfa/node/stepContent/authProviderLogin.mdx",title:"Trigger Login using your Auth Provider",description:"Before you fetch your provider from Web3Auth, you need to trigger a login using your Auth Provider. Your Auth Provider, on a successful authentication",frontMatter:{title:"Trigger Login using your Auth Provider"},unlisted:!1},c={},l=[];function u(e){const t={a:"a",admonition:"admonition",p:"p",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Before you fetch your provider from Web3Auth, you need to trigger a login using your Auth Provider. Your Auth Provider, on a successful authentication\nwill return an ID Token, which will be passed to Web3Auth."}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["In this example, we're using a self created JWT ID Token. Web3Auth supports any OAuth2.0 compliant authentication service, we have documented a few of\nthe most common ones ",(0,r.jsx)(t.a,{href:"/auth-provider-setup/",children:"here"}),"."]})})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},72180:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(85893),i=n(11151);const a={title:"Making Blockchain Calls"},o=void 0,s={type:"mdx",permalink:"/docs/quick-start/builder/core_kit/sfa/node/stepContent/blockchainCallsReactNative",source:"@site/src/pages/quick-start/builder/core_kit/sfa/node/stepContent/blockchainCallsReactNative.mdx",title:"Making Blockchain Calls",description:"While using the Web3Auth React Native SDK, you get the private key within the user scope. This means that you can use it with any blockchain with",frontMatter:{title:"Making Blockchain Calls"},unlisted:!1},c={},l=[];function u(e){const t={a:"a",admonition:"admonition",p:"p",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"While using the Web3Auth React Native SDK, you get the private key within the user scope. This means that you can use it with any blockchain with\ntheir corresponding library within the React Native environment."}),"\n",(0,r.jsxs)(t.admonition,{title:"Reference",type:"tip",children:[(0,r.jsxs)(t.p,{children:["Have a look at our ",(0,r.jsx)(t.a,{href:"/connect-blockchain/",children:"Connect Blockchain"})," section of the documentation and choose your blockchain to get started."]}),(0,r.jsxs)(t.p,{children:["In this example, we are using the ",(0,r.jsx)(t.a,{href:"https://docs.ethers.org/v5/cookbook/react-native/",children:"Ethers"})," library to make calls to the Ethereum blockchain. You\ncan check out our ",(0,r.jsx)(t.a,{href:"/connect-blockchain/evm/ethereum/react-native",children:"Ethereum in React Native"})," guide of the documentation to get started."]})]})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},20039:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(85893),i=n(11151);const a={title:"Initialize Web3Auth"},o=void 0,s={type:"mdx",permalink:"/docs/quick-start/builder/core_kit/sfa/node/stepContent/initializeReactNative",source:"@site/src/pages/quick-start/builder/core_kit/sfa/node/stepContent/initializeReactNative.mdx",title:"Initialize Web3Auth",description:"Web3Auth needs to be initialized as soon as your app loads up to enable the user to log in. Preferably done within a constructor, initialization is",frontMatter:{title:"Initialize Web3Auth"},unlisted:!1},c={},l=[];function u(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Web3Auth needs to be initialized as soon as your app loads up to enable the user to log in. Preferably done within a constructor, initialization is\nthe step where you can pass on all the configurations for Web3Auth you want."}),"\n",(0,r.jsx)(t.p,{children:"For initializing Web3Auth Node SDK, you need to provide your Client ID and the Web3Auth Network of your project."}),"\n",(0,r.jsx)(t.admonition,{title:"SDK Reference",type:"tip",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/sdk/core-kit/sfa-node/initialize",children:"Initializing SFA Node SDK"}),"."]}),"\n"]})})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},52710:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=n(85893),i=n(11151),a=n(74866),o=n(85162);const s={title:"Install Web3Auth"},c=void 0,l={type:"mdx",permalink:"/docs/quick-start/builder/core_kit/sfa/node/stepContent/installationReactNative",source:"@site/src/pages/quick-start/builder/core_kit/sfa/node/stepContent/installationReactNative.mdx",title:"Install Web3Auth",description:"Install the Web3Auth package in your Node project.",frontMatter:{title:"Install Web3Auth"},unlisted:!1},u={},d=[];function h(e){const t={a:"a",admonition:"admonition",code:"code",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Install the Web3Auth package in your Node project."}),"\n",(0,r.jsxs)(a.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(o.Z,{value:"npm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm install --save @web3auth/node-sdk\n"})})}),(0,r.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn add @web3auth/node-sdk\n"})})}),(0,r.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"pnpm add @web3auth/node-sdk\n"})})})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@web3auth/node-sdk",children:(0,r.jsx)(t.img,{src:"https://badgen.net/npm/dm/@web3auth/node-sdk",alt:"Npm package monthly downloads"})}),"\n",(0,r.jsx)(t.a,{href:"https://www.jsdelivr.com/package/npm/@web3auth/node-sdk",children:(0,r.jsx)(t.img,{src:"https://data.jsdelivr.com/v1/package/npm/@web3auth/node-sdk/badge",alt:""})})]}),"\n",(0,r.jsx)(t.admonition,{title:"SDK Reference",type:"tip",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/sdk/core-kit/sfa-node/install",children:"Installing Web3Auth"}),"."]}),"\n"]})})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},79305:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(85893),i=n(11151);const a={title:"Logging in your User"},o=void 0,s={type:"mdx",permalink:"/docs/quick-start/builder/core_kit/sfa/node/stepContent/login",source:"@site/src/pages/quick-start/builder/core_kit/sfa/node/stepContent/login.mdx",title:"Logging in your User",description:"Use the connect function in the Web3Auth Instance to log in the user.",frontMatter:{title:"Logging in your User"},unlisted:!1},c={},l=[];function u(e){const t={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Use the ",(0,r.jsx)(t.code,{children:"connect"})," function in the Web3Auth Instance to log in the user."]}),"\n",(0,r.jsx)(t.p,{children:"Using the information provided by your auth provider, within the id token, after verification, web3auth will return the private key for the respective\nuser."}),"\n",(0,r.jsx)(t.admonition,{title:"SDK Reference",type:"info",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsxs)(t.a,{href:"/sdk/core-kit/sfa-node/usage#logging-in-your-user",children:[(0,r.jsx)(t.code,{children:"connect()"})," function"]}),"."]}),"\n"]})})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},80749:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=n(85893),i=n(11151),a=n(74866),o=n(85162);const s={title:"Web3Auth SFA Node Quick Start"},c=void 0,l={type:"mdx",permalink:"/docs/quick-start/builder/core_kit/sfa/node/stepContent/nodeQuickStart",source:"@site/src/pages/quick-start/builder/core_kit/sfa/node/stepContent/nodeQuickStart.mdx",title:"Web3Auth SFA Node Quick Start",description:"This guide is designed to help you quickly integrate a basic instance of Web3Auth Single Factor Auth in your Node.js app.",frontMatter:{title:"Web3Auth SFA Node Quick Start"},unlisted:!1},u={},d=[];function h(e){const t={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"This guide is designed to help you quickly integrate a basic instance of Web3Auth Single Factor Auth in your Node.js app."}),"\n",(0,r.jsxs)(t.p,{children:["If you face any problem anytime, you can always find help in the\n",(0,r.jsx)(t.a,{href:"https://web3auth.io/community/c/help-core-kit/core-kit-sfa-node/23",children:"Web3Auth Community"}),"."]}),"\n",(0,r.jsx)(t.admonition,{title:"building locally",type:"tip",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Clone the SFA Node Quick Start Application"}),"\n",(0,r.jsxs)(a.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(o.Z,{value:"npm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"npx degit Web3Auth/web3auth-core-kit-examples/tree/main/single-factor-auth-node/sfa-node-quick-start w3a-quick-start\n"})})}),(0,r.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"npx degit Web3Auth/web3auth-core-kit-examples/tree/main/single-factor-auth-node/sfa-node-quick-start w3a-quick-start\n"})})}),(0,r.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"npx degit Web3Auth/web3auth-core-kit-examples/tree/main/single-factor-auth-node/sfa-node-quick-start w3a-quick-start\n"})})})]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Install & Run"}),"\n",(0,r.jsxs)(a.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(o.Z,{value:"npm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"cd w3a-quick-start\nnpm install\nnpm start\n"})})}),(0,r.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"cd w3a-quick-start\nyarn install\nyarn start\n"})})}),(0,r.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"cd w3a-quick-start\npnpm install\npnpm start\n"})})})]}),"\n"]}),"\n"]})})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},53641:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(85893),i=n(11151);const a=n.p+"assets/images/create-verifier-d18533b1f4eb8c914bbc54b841e7caab.png",o={title:"Setting up your Verifier"},s=void 0,c={type:"mdx",permalink:"/docs/quick-start/commonSteps/createVerifier",source:"@site/src/pages/quick-start/commonSteps/createVerifier.mdx",title:"Setting up your Verifier",description:"One of the prerequisites of using the Core Kit SDKs, is the creation of a custom verifier. This can be done easily by setting up custom authentication",frontMatter:{title:"Setting up your Verifier"},unlisted:!1},l={},u=[];function d(e){const t={a:"a",admonition:"admonition",p:"p",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"One of the prerequisites of using the Core Kit SDKs, is the creation of a custom verifier. This can be done easily by setting up custom authentication\nin your Web3Auth Dashboard."}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["Read more about ",(0,r.jsx)(t.a,{href:"/auth-provider-setup/verifiers",children:"Verifier Creation"})," and ",(0,r.jsx)(t.a,{href:"/auth-provider-setup/",children:"Custom Authentication Setup"})," for your Auth Provider."]})}),"\n",(0,r.jsx)("img",{src:a,style:{alignSelf:"center",maxWidth:"100%"},alt:"Verifier Modal on Web3Auth Dashboard"}),"\n",(0,r.jsx)("a",{className:"button button--primary",href:"https://dashboard.web3auth.io",target:"_blank",rel:"noreferrer noopener",children:(0,r.jsx)("span",{children:"Go to Developer Dashboard"})})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},31600:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(85893),i=n(11151);const a={title:"Get User Info"},o=void 0,s={type:"mdx",permalink:"/docs/quick-start/commonSteps/getUserInfo",source:"@site/src/pages/quick-start/commonSteps/getUserInfo.mdx",title:"Get User Info",description:"Once logged in, Web3Auth state exposes some information about your logged in user. This is fetched directly from the JWT token and Web3Auth doesn't",frontMatter:{title:"Get User Info"},unlisted:!1},c={},l=[];function u(e){const t={p:"p",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Once logged in, Web3Auth state exposes some information about your logged in user. This is fetched directly from the JWT token and Web3Auth doesn't\nstore this info anywhere."}),"\n",(0,r.jsx)(t.p,{children:"This information can help you identify your users and provide a more personalized experience."})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},34808:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(85893),i=n(11151);const a={title:"Fixing Bundler Issues"},o=void 0,s={type:"mdx",permalink:"/docs/quick-start/commonSteps/reactNativeBundlerIssues",source:"@site/src/pages/quick-start/commonSteps/reactNativeBundlerIssues.mdx",title:"Fixing Bundler Issues",description:"While using Web3Auth in React Native, you may run into issues building. This issue occurs because some core packages like eccrypto have certain",frontMatter:{title:"Fixing Bundler Issues"},unlisted:!1},c={},l=[];function u(e){const t={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["While using Web3Auth in React Native, you may run into issues building. This issue occurs because some core packages like ",(0,r.jsx)(t.code,{children:"eccrypto"})," have certain\ndependencies which are not present within the Metro build environment."]}),"\n",(0,r.jsxs)(t.admonition,{title:"Troubleshooting",type:"tip",children:[(0,r.jsx)(t.p,{children:"To solve this, please have a look at our troubleshooting page:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/troubleshooting/metro-issues",children:"React Native Metro Bundler Issues"})}),"\n"]})]})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},76317:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(85893),i=n(11151);const a=n.p+"assets/images/project-details-273a9a1c5d1625ec2972ef505b1fe537.png",o={title:"Get your Client ID from the Web3Auth Dashboard"},s=void 0,c={type:"mdx",permalink:"/docs/quick-start/commonSteps/registerApp",source:"@site/src/pages/quick-start/commonSteps/registerApp.mdx",title:"Get your Client ID from the Web3Auth Dashboard",description:"Visit the Web3Auth Dashboard and create a new project. Use the Client ID of the project to start your integration.",frontMatter:{title:"Get your Client ID from the Web3Auth Dashboard"},unlisted:!1},l={},u=[];function d(e){const t={p:"p",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Visit the Web3Auth Dashboard and create a new project. Use the Client ID of the project to start your integration."}),"\n",(0,r.jsx)("img",{src:a,style:{alignSelf:"center",maxWidth:"100%"},alt:"Web3Auth Dashboard"}),"\n",(0,r.jsx)("a",{className:"button button--primary",href:"https://dashboard.web3auth.io",target:"_blank",rel:"noreferrer noopener",children:(0,r.jsx)("span",{children:"Go to the Developer Dashboard"})})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>o});n(67294);var r=n(36905);const i={tabItem:"tabItem_Ymn6"};var a=n(85893);function o(e){let{children:t,hidden:n,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(67294),i=n(36905),a=n(12466),o=n(16550),s=n(20469),c=n(91980),l=n(67392),u=n(50012);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const i=(0,o.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(i.location.search);t.set(a,e),i.replace({...i.location,search:t.toString()})}),[a,i])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,a=h(e),[o,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[l,d]=m({queryString:n,groupId:i}),[f,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,a]=(0,u.Nk)(n);return[i,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:i}),b=(()=>{const e=l??f;return p({value:e,tabValues:a})?e:null})();(0,s.Z)((()=>{b&&c(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),g(e)}),[d,g,a]),tabValues:a}}var g=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(85893);function j(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.o5)(),u=e=>{const t=e.currentTarget,n=c.indexOf(t),i=s[n].value;i!==r&&(l(t),o(i))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:d,onClick:u,...a,className:(0,i.Z)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:i}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function y(e){const t=f(e);return(0,x.jsxs)("div",{className:(0,i.Z)("tabs-container",b.tabList),children:[(0,x.jsx)(j,{...e,...t}),(0,x.jsx)(v,{...e,...t})]})}function k(e){const t=(0,g.Z)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(t))}},62053:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r=n(53641),i=n(79654),a=n(31600),o=n(34808),s=n(76317),c=n(1003),l=n(72180),u=n(20039),d=n(52710),h=n(79305),p=n(80749);const m=(0,c.toSteps)({nodeQuickStart:p,createVerifier:r,authProviderLogin:i,reactNativeBundlerIssues:o,installation:d,registerApp:s,initialization:u,login:h,getUserInfo:a,blockchainCalls:l})},1003:(e,t,n)=>{n.r(t),n.d(t,{ReplaceFileAggregator:()=>o,replaceFileVariable:()=>s,toStep:()=>i,toSteps:()=>a});n(67294);var r=n(85893);function i(e){const t=e.default;return{title:e.frontMatter.title,content:(0,r.jsx)(t,{})}}function a(e){return Object.fromEntries(Object.entries(e).map((e=>{let[t,n]=e;return[t,i(n)]})))}class o{replacementOutcomes=[];replaceFileVariable(e,t,n,r){const i=r.split("\n").length-3,a=e.split("\n");let o;for(let c=0;c<a.length;c+=1)a[c].includes(n)&&(o=c);o+=1;const s=new RegExp(`\n *// REPLACE-${n}-\n *`,"gm");return this.replacementOutcomes.push({filename:t,replacementLineCount:i,variableLine:o}),e.replace(s,r)}highlightRange(e,t,n){const r=t.split("\n"),i=[],a=[];for(let o=0;o<r.length;o+=1)r[o].includes(`IMP START - ${n}`)&&i.push(o),r[o].includes(`IMP END - ${n}`)&&a.push(o);return{range:`${i[0]}-${a[0]}`,filename:e,fileContent:t,variableName:n}}rangeOffsetEditor(e){const t=e.range.split("-");for(let n=0;n<t.length;n+=1){let r=parseInt(t[n],10),i=0;for(let t=0;t<this.replacementOutcomes.length;t+=1){r+i>this.replacementOutcomes[t].variableLine&&this.replacementOutcomes[t].filename===e.filename&&(i+=this.replacementOutcomes[t].replacementLineCount)}r+=i,t[n]=r.toString()}return{range:t.join("-"),filename:e.filename}}}function s(e,t,n){const r=new RegExp(`\n *// REPLACE-${t}-\n *`,"gm");return e.replace(r,n)}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>o});var r=n(67294);const i={},a=r.createContext(i);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);