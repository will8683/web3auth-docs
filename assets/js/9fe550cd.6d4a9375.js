"use strict";(self.webpackChunkweb3auth_docs=self.webpackChunkweb3auth_docs||[]).push([[66046],{2679:(e,t,n)=>{n.d(t,{ZP:()=>o});var s=n(85893),i=n(11151),a=n(33751);function r(e){const t={li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"'tKey' is an abbreviation for Threshold Key, which is responsible for the management of wallet shares produced using threshold cryptography. The tKey\nSDK manages wallets by generating shares via Shamir's Secret Sharing scheme."}),"\n",(0,s.jsx)(t.p,{children:"In a typical 2 out of 3 (2/3) setup, the user is provided with three shares: ShareA, ShareB, and ShareC."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"ShareA"})," is managed and divided across Web3Auth's Auth Network and can be accessed through an OAuth login provider owned by the user, like their\nGoogle account."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"ShareB"})," is stored on the user's device. The method of storage is specific to the device and system. For instance, on mobile devices, the share\ncould be stored in device storage that's secured with biometrics."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"ShareC"})," serves as a recovery share. It's an extra share that the user can keep on a separate device, download, or base on user input with\nsufficient entropy. This could include a password, security questions, or a hardware device, among other options."]}),"\n"]}),"\n",(0,s.jsx)("img",{style:{display:"block",maxHeight:"600px",margin:"20px auto"},src:a.Z,alt:"Web3Auth's Private Key - Key Reconstruction"}),"\n",(0,s.jsx)(t.p,{children:"Like existing 2FA systems, users must prove ownership of at least 2 out of 3 (2/3) shares to retrieve their private key."})]})}function o(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},84409:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>g});var s=n(85893),i=n(11151),a=n(2679);const r=n.p+"assets/images/web3auth-working-15c5d151765a46d2de70b8b28d74a21e.png";var o=n(14438);const h=n.p+"assets/images/pnp-core-kit-flow-6e2697fbbf2c4c38ffa0f7ad9129f680.png";var c=n(14546);const l={title:"How Web3Auth Works?",image:"images/docs-meta-cards/documentation-card.png",displayed_sidebar:"docs",description:"How Web3Auth Works? | Documentation - Web3Auth"},d=void 0,u={id:"how-web3auth-works",title:"How Web3Auth Works?",description:"How Web3Auth Works? | Documentation - Web3Auth",source:"@site/docs/how-web3auth-works.mdx",sourceDirName:".",slug:"/how-web3auth-works",permalink:"/docs/how-web3auth-works",draft:!1,unlisted:!1,editUrl:"https://github.com/web3auth/web3auth-docs/edit/master/docs/how-web3auth-works.mdx",tags:[],version:"current",frontMatter:{title:"How Web3Auth Works?",image:"images/docs-meta-cards/documentation-card.png",displayed_sidebar:"docs",description:"How Web3Auth Works? | Documentation - Web3Auth"},sidebar:"docs",previous:{title:"What is Web3Auth?",permalink:"/docs/what-is-web3auth"},next:{title:"User Flows with Web3Auth",permalink:"/docs/user-flow"}},p={},g=[{value:"High-Level Architecture",id:"high-level-architecture",level:2},{value:"Plug and Play SDKs",id:"plug-and-play-sdks",level:3},{value:"Here&#39;s a diagram showing this process:",id:"heres-a-diagram-showing-this-process",level:5},{value:"Core Kit SDKs",id:"core-kit-sdks",level:3},{value:"Single Factor Auth SDKs",id:"single-factor-auth-sdks",level:4},{value:"Multi-Factor Auth SDKs",id:"multi-factor-auth-sdks",level:4},{value:"MPC SDKs",id:"mpc-sdks",level:3},{value:"Web3Auth Wallet Management Infrastructure",id:"web3auth-wallet-management-infrastructure",level:2}];function m(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Web3Auth operates as a wallet infrastructure, providing enhanced flexibility and security for decentralized applications (dApps) and blockchain\nwallets. Throughout this documentation, we'll explore the functionality of Web3Auth, showcasing how it produces unique cryptographic key providers for\neach user and application."}),"\n",(0,s.jsx)(t.h2,{id:"high-level-architecture",children:"High-Level Architecture"}),"\n",(0,s.jsx)(t.p,{children:"The Web3Auth SDK lives solely on the user/application\u2019s front-end client and handles the interactions between OAuth providers and the Auth Network."}),"\n",(0,s.jsx)(t.p,{children:"The diagram below describes the relationship between the Web3Auth SDKs and integrating applications. It also depicts the difference between the\nproducts Web3Auth offers, to enable a developer-friendly integration of this infrastructure."}),"\n",(0,s.jsx)("img",{style:{display:"block",maxHeight:"600px",margin:"20px auto"},src:h,alt:"This diagram describes the relationship between the Web3Auth SDK and integrating application"}),"\n",(0,s.jsx)(t.h3,{id:"plug-and-play-sdks",children:"Plug and Play SDKs"}),"\n",(0,s.jsx)(t.p,{children:"A Web3Auth Plug and Play integration process is designed to be developer-friendly, requiring only the initialization of the Web3Auth SDKs and the set\nup of necessary configurations. Once integrated into your application, the SDK facilitates the embedding of the login function. This allows developers\nto utilize the SDK to authenticate users by invoking the connect function, that can be activated via a login button or any user-triggered event."}),"\n",(0,s.jsx)(t.p,{children:"Once the user starts the process:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["User is redirected to our portal (",(0,s.jsx)(t.code,{children:"app.openlogin.com"}),")"]}),"\n",(0,s.jsxs)(t.li,{children:["Our portal, ",(0,s.jsx)(t.code,{children:"app.openlogin.com"}),", then handles the initial process of login"]}),"\n",(0,s.jsx)(t.li,{children:"User is redirected to the login/OAuth provider and carries out the authentication process concerning their auth provider"}),"\n",(0,s.jsx)(t.li,{children:"User is redirected back to our portal, which then handles the reconstruction of the user\u2019s key"}),"\n",(0,s.jsx)(t.li,{children:"Finally, once the user is successfully authenticated, they are redirected back to the application, with a derived key specific to the\napplication/wallet"}),"\n"]}),"\n",(0,s.jsx)(t.h5,{id:"heres-a-diagram-showing-this-process",children:"Here's a diagram showing this process:"}),"\n",(0,s.jsx)("img",{style:{display:"block",maxHeight:"600px",margin:"20px auto"},src:r,alt:"Image working"}),"\n",(0,s.jsx)(t.h3,{id:"core-kit-sdks",children:"Core Kit SDKs"}),"\n",(0,s.jsx)(t.p,{children:"The Core Kit SDKs serve as the backbone of the Web3Auth Plug n Play (PnP) SDKs. They form the essence of the Web3Auth infrastructure and allow for\ndirect usage within decentralized applications (dApps) to foster deeper integration. They are further divided into two types of SDKs:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Single Factor Auth SDKs"}),"\n",(0,s.jsx)(t.li,{children:"Multi-Factor SDKs, like tKey SDK"}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"single-factor-auth-sdks",children:"Single Factor Auth SDKs"}),"\n",(0,s.jsx)(t.p,{children:"These SDKs allow for the integration of a single factor of authentication, such as social login, into your dApp. They are designed to be simple to use\nand can be integrated into your dApp with minimal effort, allowing you to directly use the Web3Auth Network for Wallet Management. This is one of the\nmost common use cases of Web3Auth, however, it is semi-custodial in nature, since the key is custodial to the Auth Provider and the Web3Auth Network."}),"\n",(0,s.jsx)("img",{style:{display:"block",maxHeight:"600px",margin:"20px auto"},src:c.Z,alt:"Single Factor Auth SDK Infrastructure"}),"\n",(0,s.jsx)(t.h4,{id:"multi-factor-auth-sdks",children:"Multi-Factor Auth SDKs"}),"\n",(0,s.jsx)(t.p,{children:"An integral part of this infrastructure is the tKey SDK, the foundational SDK utilized for the implementation of Web3Auth PnP and Core-Kit."}),"\n",(0,s.jsx)(a.ZP,{}),"\n",(0,s.jsx)(t.h3,{id:"mpc-sdks",children:"MPC SDKs"}),"\n",(0,s.jsx)(t.p,{children:"With the Web3Auth infrastructure, your key is divided into multiple parts and stored across your devices and our Auth Network. This ensures that your\nkey is always available and never stored in a single place. While in the traditional Web3Auth SDK, your key was dynamically reconstructed in the front\nend using threshold signatures."}),"\n",(0,s.jsxs)(t.p,{children:["With the new Web3Auth MPC (Multi-Party Computation) architecture, it is ",(0,s.jsx)(t.strong,{children:"never reconstructed"}),". Instead, these partial keys are stored across\ndifferent locations, and your device is used to make partial signatures for your message/ transaction. These are finally returned to the front end\nwhere using TSS (Threshold Signature Scheme), these signatures are combined to make a final signature. You can use this finally signed\nmessage/transaction to make a transaction on the blockchain."]}),"\n",(0,s.jsx)(t.p,{children:"The Threshold Signature Scheme (TSS) is a cryptographic primitive for distributed key generation and signing. The use of TSS in Web3Auth's Auth\nnetwork is a new paradigm that can provide numerous benefits, especially in terms of security."}),"\n",(0,s.jsx)("img",{style:{display:"block",maxHeight:"600px",margin:"20px auto"},src:o.Z,alt:"Showing How Web3Auth Key Generation works"}),"\n",(0,s.jsx)(t.p,{children:"As you can notice in this diagram above, the final output for the right side TSS architecture are the signatures that can be used to make transactions\non the blockchain."}),"\n",(0,s.jsx)(t.h2,{id:"web3auth-wallet-management-infrastructure",children:"Web3Auth Wallet Management Infrastructure"}),"\n",(0,s.jsxs)(t.p,{children:["Web3Auth's ",(0,s.jsx)(t.a,{href:"/infrastructure/",children:"Wallet Management Infrastructure"})," enhances security by distributing a user's wallet across various key shares, thereby\navoiding direct exposure of seed phrases. These key shares form a 'web of trust' and enable wallet management akin to multi-factor account handling.\nUsers employ OAuth logins, trusted devices, and other factors to manage their cryptographic key pairs. Importantly, the complete private keys are not\nstored anywhere within the Wallet Infrastructure system, including our databases or any participating nodes."]}),"\n",(0,s.jsx)(t.p,{children:"To create a social login share, users interact with the Web3Auth Auth Network, where key generation operates via a 5/9 consensus system. This setup\nguarantees that wallets remain non-custodial, ensuring that neither Web3Auth, Social Login Providers, nor any other party holding a key share can\nclaim full ownership."}),"\n",(0,s.jsx)(t.admonition,{title:"managing wallets",type:"tip",children:(0,s.jsxs)(t.p,{children:["For managing wallets, our infrastructure uses various cryptographic techniques such as Shamir's Secret Sharing, Threshold Cryptography, and Multi\nParty Computation. To know more about how we manage wallets, please refer to our\n",(0,s.jsx)(t.a,{href:"/infrastructure/",children:"Wallet Management and Security of our Infrastructure"}),"."]})})]})}function f(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},14438:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/key-management-f9daa363b42ea39692411c92766251cc.png"},14546:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/sfa-infra-934fc8f4badf51a92fd6bf822836a422.png"},33751:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/tkey-flow-88adde4454242a677741399ba1f3e336.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var s=n(67294);const i={},a=s.createContext(i);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);