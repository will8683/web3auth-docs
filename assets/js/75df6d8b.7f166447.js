"use strict";(self.webpackChunkweb3auth_docs=self.webpackChunkweb3auth_docs||[]).push([[4595],{70755:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var o=n(85893),s=n(11151);const i={title:"Enable MFA for the User [Optional]"},a=void 0,r={type:"mdx",permalink:"/docs/quick-start/builder/core_kit/mpc_core_kit/stepContent/enableMFA",source:"@site/src/pages/quick-start/builder/core_kit/mpc_core_kit/stepContent/enableMFA.mdx",title:"Enable MFA for the User [Optional]",description:"One of the core functionalities of Web3Auth MPC Core Kit is to enable MFA and make the keys self-custodial for the user. This is an optional step and",frontMatter:{title:"Enable MFA for the User [Optional]"},unlisted:!1},c={},l=[];function u(e){const t={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"One of the core functionalities of Web3Auth MPC Core Kit is to enable MFA and make the keys self-custodial for the user. This is an optional step and\ncan be skipped if you don't want to enable MFA for the user."}),"\n",(0,o.jsxs)(t.p,{children:["This can be done easily by calling the ",(0,o.jsx)(t.code,{children:"enableMFA"})," function, which stores a device share in the browser's local storage and returns a backup factor\nkey."]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:"You can also associate this factor key with any other MFA setups like SMS OTP, Passkeys etc. by encrypting the factor key with the user's unique\nidentity from these recovery methods. This gives you access to traditional MFA methods while still keeping the keys self-custodial for the user."})}),"\n",(0,o.jsx)(t.admonition,{title:"SDK Reference",type:"note",children:(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/sdk/core-kit/mpc-core-kit/usage#enable-mfa",children:"Enabling MFA"}),"."]}),"\n"]})})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>a});var o=n(67294);const s={},i=o.createContext(s);function a(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);