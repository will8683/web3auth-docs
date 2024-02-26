"use strict";(self.webpackChunkweb3auth_docs=self.webpackChunkweb3auth_docs||[]).push([[22008,59624,35543,18841,37462,79986,8333,66040,14783,98828,504,18241],{5142:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>u,metadata:()=>c,toc:()=>p});var i=a(85893),n=a(11151),r=a(74866),s=a(85162);const u={title:"Web3Auth SFA Flutter Quick Start"},o=void 0,c={type:"mdx",permalink:"/docs/quick-start/builder/core_kit/sfa/flutter/stepContent/flutterQuickStart",source:"@site/src/pages/quick-start/builder/core_kit/sfa/flutter/stepContent/flutterQuickStart.mdx",title:"Web3Auth SFA Flutter Quick Start",description:"This guide is designed to help you quickly integrate a basic instance of Web3Auth SFA in your Flutter app.",frontMatter:{title:"Web3Auth SFA Flutter Quick Start"},unlisted:!1},l={},p=[];function d(e){const t={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"This guide is designed to help you quickly integrate a basic instance of Web3Auth SFA in your Flutter app."}),"\n",(0,i.jsxs)(t.p,{children:["If you face any problem anytime, you can always find help in the\n",(0,i.jsx)(t.a,{href:"https://web3auth.io/community/c/help-core-kit/sfa-flutter-sdk/31",children:"Web3Auth Community"}),"."]}),"\n",(0,i.jsx)(t.admonition,{title:"building locally",type:"tip",children:(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Clone the SFA Flutter Quick Start Application"}),"\n",(0,i.jsxs)(r.Z,{groupId:"npm2yarn",children:[(0,i.jsx)(s.Z,{value:"npm",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"npx degit Web3Auth/web3auth-core-kit-examples/single-factor-auth-flutter/sfa_flutter_quick_start sfa-flutter-quick-start\n"})})}),(0,i.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"npx degit Web3Auth/web3auth-core-kit-examples/single-factor-auth-flutter/sfa_flutter_quick_start sfa-flutter-quick-start\n"})})}),(0,i.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"npx degit Web3Auth/web3auth-core-kit-examples/single-factor-auth-flutter/sfa_flutter_quick_start sfa-flutter-quick-start\n"})})})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Install & Run"}),"\n",(0,i.jsxs)(r.Z,{groupId:"npm2yarn",children:[(0,i.jsx)(s.Z,{value:"npm",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"cd sfa-flutter-quick-start\n# run project in Android Studio or in VSCode\n"})})}),(0,i.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"cd sfa-flutter-quick-start\n# run project in Android Studio or in VSCode\n"})})}),(0,i.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"cd sfa-flutter-quick-start\n# run project in Android Studio or in VSCode\n"})})})]}),"\n"]}),"\n"]})})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},47818:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>u,toc:()=>c});var i=a(85893),n=a(11151);const r={title:"Create and initialize the Web3Auth SFA instance"},s=void 0,u={type:"mdx",permalink:"/docs/quick-start/builder/core_kit/sfa/flutter/stepContent/initialize",source:"@site/src/pages/quick-start/builder/core_kit/sfa/flutter/stepContent/initialize.mdx",title:"Create and initialize the Web3Auth SFA instance",description:"Let's now create an instance of the SingleFactAuthFlutter.",frontMatter:{title:"Create and initialize the Web3Auth SFA instance"},unlisted:!1},o={},c=[];function l(e){const t={a:"a",admonition:"admonition",code:"code",p:"p",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Let's now create an instance of the ",(0,i.jsx)(t.code,{children:"SingleFactAuthFlutter"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["We need the ",(0,i.jsx)(t.code,{children:"network"})," to initialize SingleFactAuthFlutter class. ",(0,i.jsx)(t.code,{children:"network"})," signifies the type of network (",(0,i.jsx)(t.code,{children:"sapphire-mainnet"})," or ",(0,i.jsx)(t.code,{children:"sapphire-devnet"}),") you\nwant to initialize web3auth with."]}),"\n",(0,i.jsx)(t.admonition,{title:"sdk reference",type:"info",children:(0,i.jsxs)(t.p,{children:["Read more about ",(0,i.jsx)(t.a,{href:"/sdk/core-kit/sfa-flutter",children:"SFA Flutter SDK"}),"."]})})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},72970:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>u,toc:()=>c});var i=a(85893),n=a(11151);const r={title:"Install Web3Auth"},s=void 0,u={type:"mdx",permalink:"/docs/quick-start/builder/core_kit/sfa/flutter/stepContent/installation",source:"@site/src/pages/quick-start/builder/core_kit/sfa/flutter/stepContent/installation.mdx",title:"Install Web3Auth",description:"For making hybrid iOS & Android applications using Flutter, we have the Web3Auth's",frontMatter:{title:"Install Web3Auth"},unlisted:!1},o={},c=[];function l(e){const t={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["For making hybrid iOS & Android applications using Flutter, we have the Web3Auth's\n",(0,i.jsx)(t.a,{href:"https://github.com/Web3Auth/single-factor-auth-flutter",children:"single-factor-auth-flutter"})," SDK to integrate Web3Auth into your application."]}),"\n",(0,i.jsxs)(t.p,{children:["Add ",(0,i.jsx)(t.code,{children:"single_factor_auth_flutter"})," as a dependency to your ",(0,i.jsx)(t.code,{children:"pubspec.yaml"})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"flutter pub add single_factor_auth_flutter\n"})}),"\n",(0,i.jsx)(t.p,{children:"or"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"dependencies:\n  single_factor_auth_flutter: ^latest # or the latest version\n"})}),"\n",(0,i.jsx)(t.admonition,{title:"Update to the Latest-SDK",type:"warning",children:(0,i.jsxs)(t.p,{children:["Please use the ",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.a,{href:"https://github.com/Web3Auth/single-factor-auth-flutter/releases",children:"latest version"})})," of Web3Auth's Flutter SDK."]})})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},35162:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>u,toc:()=>c});var i=a(85893),n=a(11151);const r={title:"Logging in your User"},s=void 0,u={type:"mdx",permalink:"/docs/quick-start/builder/core_kit/sfa/flutter/stepContent/login",source:"@site/src/pages/quick-start/builder/core_kit/sfa/flutter/stepContent/login.mdx",title:"Logging in your User",description:"Use the getKey function in the Web3Auth SFA Instance to log in the user.",frontMatter:{title:"Logging in your User"},unlisted:!1},o={},c=[];function l(e){const t={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Use the ",(0,i.jsx)(t.code,{children:"getKey"})," function in the Web3Auth SFA Instance to log in the user."]}),"\n",(0,i.jsx)(t.p,{children:"Using the information provided by your auth provider, within the id token, after verification, web3auth will return the private key for the respective\nuser."}),"\n",(0,i.jsx)(t.admonition,{title:"SDK Reference",type:"info",children:(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsxs)(t.a,{href:"/sdk/core-kit/sfa-flutter/usage#getkey",children:[(0,i.jsx)(t.code,{children:"getKey()"})," function"]}),"."]}),"\n"]})})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},4056:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>u,toc:()=>c});var i=a(85893),n=a(11151);const r={},s=void 0,u={type:"mdx",permalink:"/docs/quick-start/builder/core_kit/sfa/flutter/stepContent/requirementsAndroid",source:"@site/src/pages/quick-start/builder/core_kit/sfa/flutter/stepContent/requirementsAndroid.mdx",description:"- Android API version 24 or newer is required.",frontMatter:{},unlisted:!1},o={},c=[];function l(e){const t={admonition:"admonition",code:"code",li:"li",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsx)(t.admonition,{title:"Requirements Android",type:"note",children:(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Android API version ",(0,i.jsx)(t.code,{children:"24"})," or newer is required."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"compileSdk"})," should be ",(0,i.jsx)(t.code,{children:"33"})," or newer."]}),"\n",(0,i.jsxs)(t.li,{children:["Check ",(0,i.jsx)(t.code,{children:"android/app/build.gradle"})," in your Flutter project to change it."]}),"\n"]})})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},64646:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>u,toc:()=>c});var i=a(85893),n=a(11151);const r={},s=void 0,u={type:"mdx",permalink:"/docs/quick-start/builder/core_kit/sfa/flutter/stepContent/requirementsIOS",source:"@site/src/pages/quick-start/builder/core_kit/sfa/flutter/stepContent/requirementsIOS.mdx",description:"- iOS 12+",frontMatter:{},unlisted:!1},o={},c=[];function l(e){const t={admonition:"admonition",code:"code",li:"li",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsx)(t.admonition,{title:"Requirements iOS",type:"note",children:(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"iOS 12+"}),"\n",(0,i.jsx)(t.li,{children:"Xcode 11.4+ / 12.x"}),"\n",(0,i.jsx)(t.li,{children:"Swift 4.x / 5.x"}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"platform :ios"})," needs to be ",(0,i.jsx)(t.code,{children:"14.0"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Check ",(0,i.jsx)(t.code,{children:"ios/Podfile"})," in your Flutter project to change it."]}),"\n"]})})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},62183:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>u,toc:()=>c});var i=a(85893),n=a(11151);const r={title:"Trigger Login using your Auth Provider"},s=void 0,u={type:"mdx",permalink:"/docs/quick-start/commonSteps/authProviderLogin",source:"@site/src/pages/quick-start/commonSteps/authProviderLogin.mdx",title:"Trigger Login using your Auth Provider",description:"Before you fetch your provider from Web3Auth, you need to trigger a login using your Auth Provider. Your Auth Provider, on a successful authentication",frontMatter:{title:"Trigger Login using your Auth Provider"},unlisted:!1},o={},c=[];function l(e){const t={a:"a",admonition:"admonition",p:"p",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Before you fetch your provider from Web3Auth, you need to trigger a login using your Auth Provider. Your Auth Provider, on a successful authentication\nwill return an ID Token, which will be passed to Web3Auth."}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["In this example, we're using Firebase as the authentication service. Web3Auth supports any OAuth2.0 compliant authentication service, we have\ndocumented a few of the most common ones ",(0,i.jsx)(t.a,{href:"/auth-provider-setup/",children:"here"}),"."]})})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},53641:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=a(85893),n=a(11151);const r=a.p+"assets/images/create-verifier-d18533b1f4eb8c914bbc54b841e7caab.png",s={title:"Setting up your Verifier"},u=void 0,o={type:"mdx",permalink:"/docs/quick-start/commonSteps/createVerifier",source:"@site/src/pages/quick-start/commonSteps/createVerifier.mdx",title:"Setting up your Verifier",description:"One of the prerequisites of using the Core Kit SDKs, is the creation of a custom verifier. This can be done easily by setting up custom authentication",frontMatter:{title:"Setting up your Verifier"},unlisted:!1},c={},l=[];function p(e){const t={a:"a",admonition:"admonition",p:"p",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"One of the prerequisites of using the Core Kit SDKs, is the creation of a custom verifier. This can be done easily by setting up custom authentication\nin your Web3Auth Dashboard."}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["Read more about ",(0,i.jsx)(t.a,{href:"/auth-provider-setup/verifiers",children:"Verifier Creation"})," and ",(0,i.jsx)(t.a,{href:"/auth-provider-setup/",children:"Custom Authentication Setup"})," for your Auth Provider."]})}),"\n",(0,i.jsx)("img",{src:r,style:{alignSelf:"center",maxWidth:"100%"},alt:"Verifier Modal on Web3Auth Dashboard"}),"\n",(0,i.jsx)("a",{className:"button button--primary",href:"https://dashboard.web3auth.io",target:"_blank",rel:"noreferrer noopener",children:(0,i.jsx)("span",{children:"Go to Developer Dashboard"})})]})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},85162:(e,t,a)=>{a.d(t,{Z:()=>s});a(67294);var i=a(36905);const n={tabItem:"tabItem_Ymn6"};var r=a(85893);function s(e){let{children:t,hidden:a,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.Z)(n.tabItem,s),hidden:a,children:t})}},74866:(e,t,a)=>{a.d(t,{Z:()=>A});var i=a(67294),n=a(36905),r=a(12466),s=a(16550),u=a(20469),o=a(91980),c=a(67392),l=a(50012);function p(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:t,children:a}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return p(e).map((e=>{let{props:{value:t,label:a,attributes:i,default:n}}=e;return{value:t,label:a,attributes:i,default:n}}))}(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(r),(0,i.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=d(e),[s,o]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=a.find((e=>e.default))??a[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:r}))),[c,p]=m({queryString:a,groupId:n}),[b,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,l.Nk)(a);return[n,(0,i.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),k=(()=>{const e=c??b;return h({value:e,tabValues:r})?e:null})();(0,u.Z)((()=>{k&&o(k)}),[k]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),f(e)}),[p,f,r]),tabValues:r}}var f=a(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(85893);function x(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),l=e=>{const t=e.currentTarget,a=o.indexOf(t),n=u[a].value;n!==i&&(c(t),s(n))},p=e=>{let t=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;t=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;t=o[a]??o[o.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":a},t),children:u.map((e=>{let{value:t,label:a,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>o.push(e),onKeyDown:p,onClick:l,...r,className:(0,n.Z)("tabs__item",k.tabItem,r?.className,{"tabs__item--active":i===t}),children:a??t},t)}))})}function w(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function q(e){const t=b(e);return(0,g.jsxs)("div",{className:(0,n.Z)("tabs-container",k.tabList),children:[(0,g.jsx)(x,{...e,...t}),(0,g.jsx)(w,{...e,...t})]})}function A(e){const t=(0,f.Z)();return(0,g.jsx)(q,{...e,children:p(e.children)},String(t))}},60560:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});var i=a(64310),n=a(1003),r=a(92086);const s={build(e){let{filenames:t,files:a,steps:s}=e;const u=new n.ReplaceFileAggregator;return(0,r.default)(s,a,u),t.push(i.Uq),t.push(i.T1),t.push(i.$9),t.push(i.oH),t.push(i.ic),t.push(i.gd),{filenames:t,files:a,steps:s}}}},34118:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var i=a(1003),n=a(5142),r=a(4056),s=a(62183),u=a(64646),o=a(72970),c=a(53641),l=a(47818),p=a(35162);const d=(0,i.toSteps)({flutterQuickStart:n,requirementsAndroid:r,requirementsIOS:u,installation:o,createVerifier:c,initialization:l,authProviderLogin:s,login:p})},92086:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});var i=a(64310),n=a(34118);function r(e,t,a){e.push({...n.default.flutterQuickStart,pointer:a.highlightRange(i.Uq,t[i.Uq],"Quick Start")},{...n.default.requirementsAndroid,pointer:a.highlightRange(i.gd,t[i.gd],"Requirements Android")},{...n.default.requirementsIOS,pointer:a.highlightRange(i.oH,t[i.oH],"Requirements iOS")},{...n.default.installation,pointer:a.highlightRange(i.$9,t[i.$9],"Installation")},{...n.default.createVerifier,pointer:a.highlightRange(i.Uq,t[i.Uq],"Verifier Creation")},{...n.default.initialization,pointer:a.highlightRange(i.Uq,t[i.Uq],"Initialize Web3Auth SFA")},{...n.default.authProviderLogin,pointer:a.highlightRange(i.Uq,t[i.Uq],"Auth Provider Login")},{...n.default.login,pointer:a.highlightRange(i.Uq,t[i.Uq],"Get Key")})}},1003:(e,t,a)=>{a.r(t),a.d(t,{ReplaceFileAggregator:()=>s,replaceFileVariable:()=>u,toStep:()=>n,toSteps:()=>r});a(67294);var i=a(85893);function n(e){const t=e.default;return{title:e.frontMatter.title,content:(0,i.jsx)(t,{})}}function r(e){return Object.fromEntries(Object.entries(e).map((e=>{let[t,a]=e;return[t,n(a)]})))}class s{replacementOutcomes=[];replaceFileVariable(e,t,a,i){const n=i.split("\n").length-3,r=e.split("\n");let s;for(let o=0;o<r.length;o+=1)r[o].includes(a)&&(s=o);s+=1;const u=new RegExp(`\n *// REPLACE-${a}-\n *`,"gm");return this.replacementOutcomes.push({filename:t,replacementLineCount:n,variableLine:s}),e.replace(u,i)}highlightRange(e,t,a){const i=t.split("\n"),n=[],r=[];for(let s=0;s<i.length;s+=1)i[s].includes(`IMP START - ${a}`)&&n.push(s),i[s].includes(`IMP END - ${a}`)&&r.push(s);return{range:`${n[0]}-${r[0]}`,filename:e,fileContent:t,variableName:a}}rangeOffsetEditor(e){const t=e.range.split("-");for(let a=0;a<t.length;a+=1){let i=parseInt(t[a],10),n=0;for(let t=0;t<this.replacementOutcomes.length;t+=1){i+n>this.replacementOutcomes[t].variableLine&&this.replacementOutcomes[t].filename===e.filename&&(n+=this.replacementOutcomes[t].replacementLineCount)}i+=n,t[a]=i.toString()}return{range:t.join("-"),filename:e.filename}}}function u(e,t,a){const i=new RegExp(`\n *// REPLACE-${t}-\n *`,"gm");return e.replace(i,a)}},11151:(e,t,a)=>{a.d(t,{Z:()=>u,a:()=>s});var i=a(67294);const n={},r=i.createContext(n);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(r.Provider,{value:t},e.children)}},64310:e=>{e.exports=JSON.parse('{"qb":"Web3Auth/web3auth-pnp-examples/main/web-modal-sdk/quick-starts/react-modal-quick-start/src/App.tsx","mH":"Web3Auth/web3auth-pnp-examples/main/web-modal-sdk/quick-starts/react-modal-quick-start/package.json","Ns":"Web3Auth/web3auth-pnp-examples/main/web-modal-sdk/quick-starts/react-modal-quick-start/config-overrides.js","uJ":"Web3Auth/web3auth-pnp-examples/main/web-modal-sdk/quick-starts/nextjs-modal-quick-start/app/page.tsx","zg":"Web3Auth/web3auth-pnp-examples/main/web-modal-sdk/quick-starts/nextjs-modal-quick-start/package.json","Ld":"Web3Auth/web3auth-pnp-examples/main/web-modal-sdk/quick-starts/angular-modal-quick-start/src/app/app.component.ts","cg":"Web3Auth/web3auth-pnp-examples/main/web-modal-sdk/quick-starts/angular-modal-quick-start/src/app/app.component.html","b1":"Web3Auth/web3auth-pnp-examples/main/web-modal-sdk/quick-starts/angular-modal-quick-start/src/polyfills.ts","qy":"Web3Auth/web3auth-pnp-examples/main/web-modal-sdk/quick-starts/angular-modal-quick-start/package.json","Or":"Web3Auth/web3auth-pnp-examples/main/web-modal-sdk/quick-starts/angular-modal-quick-start/tsconfig.json","nG":"Web3Auth/web3auth-pnp-examples/main/web-modal-sdk/quick-starts/vanillajs-modal-quick-start/index.html","t4":"Web3Auth/web3auth-pnp-examples/main/web-modal-sdk/quick-starts/vanillajs-modal-quick-start/script.js","z7":"Web3Auth/web3auth-pnp-examples/main/web-modal-sdk/quick-starts/vanillajs-modal-quick-start/style.css","Lc":"Web3Auth/web3auth-pnp-examples/main/web-modal-sdk/quick-starts/vue-modal-quick-start/vue.config.js","V6":"Web3Auth/web3auth-pnp-examples/main/web-modal-sdk/quick-starts/vue-modal-quick-start/package.json","IK":"Web3Auth/web3auth-pnp-examples/main/web-modal-sdk/quick-starts/vue-modal-quick-start/src/Home.vue","dh":"Web3Auth/web3auth-pnp-examples/main/web-no-modal-sdk/quick-starts/react-no-modal-quick-start/src/App.tsx","or":"Web3Auth/web3auth-pnp-examples/main/web-no-modal-sdk/quick-starts/react-no-modal-quick-start/package.json","y_":"Web3Auth/web3auth-pnp-examples/main/web-no-modal-sdk/quick-starts/react-no-modal-quick-start/config-overrides.js","ED":"Web3Auth/web3auth-pnp-examples/main/web-no-modal-sdk/quick-starts/nextjs-no-modal-quick-start/app/page.tsx","sq":"Web3Auth/web3auth-pnp-examples/main/web-no-modal-sdk/quick-starts/nextjs-no-modal-quick-start/package.json","ZL":"Web3Auth/web3auth-pnp-examples/main/web-no-modal-sdk/quick-starts/angular-no-modal-quick-start/src/app/app.component.ts","sJ":"Web3Auth/web3auth-pnp-examples/main/web-no-modal-sdk/quick-starts/angular-no-modal-quick-start/src/app/app.component.html","n3":"Web3Auth/web3auth-pnp-examples/main/web-no-modal-sdk/quick-starts/angular-no-modal-quick-start/src/polyfills.ts","VQ":"Web3Auth/web3auth-pnp-examples/main/web-no-modal-sdk/quick-starts/angular-no-modal-quick-start/package.json","Y4":"Web3Auth/web3auth-pnp-examples/main/web-no-modal-sdk/quick-starts/angular-no-modal-quick-start/tsconfig.json","kk":"Web3Auth/web3auth-pnp-examples/main/web-no-modal-sdk/quick-starts/vue-no-modal-quick-start/vue.config.js","tu":"Web3Auth/web3auth-pnp-examples/main/web-no-modal-sdk/quick-starts/vue-no-modal-quick-start/package.json","pv":"Web3Auth/web3auth-pnp-examples/main/web-no-modal-sdk/quick-starts/vue-no-modal-quick-start/src/Home.vue","OA":"Web3Auth/web3auth-pnp-examples/main/web-no-modal-sdk/quick-starts/vanillajs-no-modal-quick-start/index.html","vR":"Web3Auth/web3auth-pnp-examples/main/web-no-modal-sdk/quick-starts/vanillajs-no-modal-quick-start/script.js","sk":"Web3Auth/web3auth-pnp-examples/main/web-no-modal-sdk/quick-starts/vanillajs-no-modal-quick-start/style.css","lS":"Web3Auth/web3auth-pnp-examples/main/unity/unity-quick-start/Assets/Web3AuthScript.cs","lK":"Web3Auth/web3auth-pnp-examples/main/unity/unity-quick-start/Assets/Plugins/Android/AndroidManifest.xml","cr":"Web3Auth/web3auth-pnp-examples/main/unity/unity-quick-start/Packages/manifest.json","Jf":"Web3Auth/web3auth-pnp-examples/main/react-native/rn-bare-quick-start/App.tsx","bL":"Web3Auth/web3auth-pnp-examples/main/react-native/rn-bare-quick-start/package.json","Kb":"Web3Auth/web3auth-pnp-examples/main/react-native/rn-bare-quick-start/metro.config.js","X4":"Web3Auth/web3auth-pnp-examples/main/react-native/rn-bare-quick-start/globals.js","wO":"Web3Auth/web3auth-pnp-examples/main/react-native/rn-bare-quick-start/index.js","zx":"Web3Auth/web3auth-pnp-examples/main/react-native/rn-bare-quick-start/ios/Podfile","Dh":"Web3Auth/web3auth-pnp-examples/main/react-native/rn-bare-quick-start/android/build.gradle","xm":"Web3Auth/web3auth-pnp-examples/main/ios/ios-quick-start/ios-example/ContentView.swift","nV":"Web3Auth/web3auth-pnp-examples/main/ios/ios-quick-start/ios-example/LoginView.swift","ZQ":"Web3Auth/web3auth-pnp-examples/main/ios/ios-quick-start/ios-example/UserDetailView.swift","sn":"Web3Auth/web3auth-pnp-examples/main/ios/ios-quick-start/ios-example/ViewModel.swift","Ow":"Web3Auth/web3auth-pnp-examples/main/ios/ios-quick-start/ios-example/web3RPC.swift","F$":"Web3Auth/web3auth-pnp-examples/main/flutter/flutter-quick-start/lib/main.dart","Kv":"Web3Auth/web3auth-pnp-examples/main/flutter/flutter-quick-start/android/app/build.gradle","QP":"Web3Auth/web3auth-pnp-examples/main/flutter/flutter-quick-start/ios/Podfile","du":"Web3Auth/web3auth-pnp-examples/main/flutter/flutter-quick-start/pubspec.yaml","Ck":"Web3Auth/web3auth-pnp-examples/main/android/android-quick-start/app/src/main/java/com/sbz/web3authdemoapp/MainActivity.kt","el":"Web3Auth/web3auth-pnp-examples/main/android/android-quick-start/app/src/main/AndroidManifest.xml","EO":"Web3Auth/web3auth-pnp-examples/main/android/android-quick-start/app/build.gradle","fh":"Web3Auth/web3auth-pnp-examples/main/android/android-quick-start/settings.gradle","g$":"Web3Auth/web3auth-pnp-examples/main/android/android-quick-start/app/src/main/res/values/strings.xml","GF":"Web3Auth/web3auth-pnp-examples/main/android/android-quick-start/app/src/main/res/layout/activity_main.xml","aV":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-web/quick-starts/sfa-react-quick-start/src/App.tsx","MF":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-web/quick-starts/sfa-react-quick-start/package.json","oi":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-web/quick-starts/sfa-react-quick-start/config-overrides.js","wG":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-web/quick-starts/sfa-nextjs-quick-start/app/page.tsx","zf":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-web/quick-starts/sfa-nextjs-quick-start/package.json","tc":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-web/quick-starts/sfa-angular-quick-start/src/app/app.component.ts","ZK":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-web/quick-starts/sfa-angular-quick-start/src/app/app.component.html","FD":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-web/quick-starts/sfa-angular-quick-start/src/polyfills.ts","gQ":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-web/quick-starts/sfa-angular-quick-start/package.json","sj":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-web/quick-starts/sfa-angular-quick-start/tsconfig.json","OO":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-web/quick-starts/sfa-vue-quick-start/vue.config.js","Al":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-web/quick-starts/sfa-vue-quick-start/package.json","tk":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-web/quick-starts/sfa-vue-quick-start/src/Home.vue","UP":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-web/quick-starts/sfa-vanillajs-quick-start/index.html","Qt":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-web/quick-starts/sfa-vanillajs-quick-start/script.js","gI":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-web/quick-starts/sfa-vanillajs-quick-start/style.css","x1":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-react-native/sfa-rn-bare-quick-start/App.tsx","zU":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-react-native/sfa-rn-bare-quick-start/package.json","kF":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-react-native/sfa-rn-bare-quick-start/metro.config.js","ey":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-react-native/sfa-rn-bare-quick-start/globals.js","Xy":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-react-native/sfa-rn-bare-quick-start/index.js","j2":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-react-native/sfa-rn-bare-quick-start/ios/Podfile","wY":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-react-native/sfa-rn-bare-quick-start/android/build.gradle","MQ":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-ios/sfa-ios-quick-start/ios-firebase-example/ContentView.swift","oo":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-ios/sfa-ios-quick-start/ios-firebase-example/LoginView.swift","zb":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-ios/sfa-ios-quick-start/ios-firebase-example/UserDetailView.swift","$d":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-ios/sfa-ios-quick-start/ios-firebase-example/ViewModel.swift","Sb":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-node/sfa-node-quick-start/index.js","bZ":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-node/sfa-node-quick-start/package.json","nr":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-android/sfa-android-quick-start/app/src/main/java/com/example/androidsfaexample/MainActivity.kt","kZ":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-android/sfa-android-quick-start/app/src/main/AndroidManifest.xml","Fp":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-android/sfa-android-quick-start/app/build.gradle","Nu":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-android/sfa-android-quick-start/settings.gradle","xK":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-android/sfa-android-quick-start/app/src/main/res/values/strings.xml","lN":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-android/sfa-android-quick-start/app/src/main/res/layout/activity_main.xml","$9":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-flutter/sfa_flutter_quick_start/pubspec.yaml","Uq":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-flutter/sfa_flutter_quick_start/lib/auth_service.dart","T1":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-flutter/sfa_flutter_quick_start/lib/main.dart","oH":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-flutter/sfa_flutter_quick_start/ios/Podfile","gd":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-flutter/sfa_flutter_quick_start/android/app/build.gradle","ic":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-flutter/sfa_flutter_quick_start/android/build.gradle","I1":"Web3Auth/web3auth-core-kit-examples/main/mpc-core-kit-web/quick-starts/mpc-core-kit-react-quick-start/src/App.tsx","sz":"Web3Auth/web3auth-core-kit-examples/main/mpc-core-kit-web/quick-starts/mpc-core-kit-react-quick-start/package.json","f2":"Web3Auth/web3auth-core-kit-examples/main/mpc-core-kit-web/quick-starts/mpc-core-kit-react-quick-start/config-overrides.js","KD":"Web3Auth/web3auth-core-kit-examples/main/mpc-core-kit-web/quick-starts/mpc-core-kit-nextjs-quick-start/app/page.tsx","qj":"Web3Auth/web3auth-core-kit-examples/main/mpc-core-kit-web/quick-starts/mpc-core-kit-nextjs-quick-start/package.json","_S":"Web3Auth/web3auth-core-kit-examples/main/mpc-core-kit-web/quick-starts/mpc-core-kit-angular-quick-start/src/app/app.component.ts","s5":"Web3Auth/web3auth-core-kit-examples/main/mpc-core-kit-web/quick-starts/mpc-core-kit-angular-quick-start/src/app/app.component.html","aU":"Web3Auth/web3auth-core-kit-examples/main/mpc-core-kit-web/quick-starts/mpc-core-kit-angular-quick-start/src/polyfills.ts","WW":"Web3Auth/web3auth-core-kit-examples/main/mpc-core-kit-web/quick-starts/mpc-core-kit-angular-quick-start/package.json","nf":"Web3Auth/web3auth-core-kit-examples/main/mpc-core-kit-web/quick-starts/mpc-core-kit-angular-quick-start/tsconfig.json","og":"Web3Auth/web3auth-core-kit-examples/main/mpc-core-kit-web/quick-starts/mpc-core-kit-vue-quick-start/vue.config.js","Ik":"Web3Auth/web3auth-core-kit-examples/main/mpc-core-kit-web/quick-starts/mpc-core-kit-vue-quick-start/package.json","St":"Web3Auth/web3auth-core-kit-examples/main/mpc-core-kit-web/quick-starts/mpc-core-kit-vue-quick-start/src/Home.vue"}')}}]);