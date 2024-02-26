"use strict";(self.webpackChunkweb3auth_docs=self.webpackChunkweb3auth_docs||[]).push([[26996],{18786:(e,n,t)=>{t.d(n,{ZP:()=>i});var a=t(85893),r=t(11151);function o(e){const n={code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"After logging in, the Web3Auth instance will provide you with information regarding the user that is logged in. This information is obtained directly\nfrom the JWT token and is not stored by Web3Auth. Therefore, this information can only be accessed through social logins after the user has logged\ninto your application."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"const user = await web3auth.getUserInfo(); // web3auth instance\n"})})]})}function i(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},50210:(e,n,t)=>{t.d(n,{ZP:()=>l});var a=t(85893),r=t(11151),o=t(74866),i=t(85162);function s(e){const n={code:"code",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(o.Z,{defaultValue:"modal",values:[{label:"PnP Modal SDK",value:"modal"},{label:"PnP NoModal SDK",value:"no-modal"},{label:"CoreKit SFA Web SDK",value:"sfa"},{label:"CoreKit MFA tKey JS SDK",value:"tkey"}],children:[(0,a.jsx)(i.Z,{value:"modal",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'import { Web3Auth } from "@web3auth/modal";\nimport { CommonPrivateKeyProvider } from "@web3auth/base-provider";\nimport { WEB3AUTH_NETWORK } from "@web3auth/base";\n\nconst privateKeyProvider = new CommonPrivateKeyProvider({\n  config: { chainConfig: chainConfig }\n});\n\nconst web3auth = new Web3Auth({\n  // Get it from Web3Auth Dashboard\n  clientId,\n  web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_MAINNET,\n  privateKeyProvider: privateKeyProvider,\n});\n'})})}),(0,a.jsx)(i.Z,{value:"no-modal",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'import { Web3AuthNoModal } from "@web3auth/no-modal";\nimport { OpenloginAdapter } from "@web3auth/openlogin-adapter";\nimport { CommonPrivateKeyProvider } from "@web3auth/base-provider";\nimport { WEB3AUTH_NETWORK } from "@web3auth/base";\n\nconst privateKeyProvider = new CommonPrivateKeyProvider({\n  config: {chainConfig},\n});\n\nconst web3auth = new Web3AuthNoModal({\n  clientId, // Get it from Web3Auth Dashboard\n  web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_MAINNET,\n});\n\nconst openloginAdapter = new OpenloginAdapter();\nweb3auth.configureAdapter(openloginAdapter);\n'})})}),(0,a.jsx)(i.Z,{value:"sfa",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'import { Web3Auth } from "@web3auth/single-factor-auth";\nimport { CommonPrivateKeyProvider } from "@web3auth/base-provider";\n\nconst web3auth = new Web3Auth({\n  clientId, // Get your Client ID from Web3Auth Dashboard\n  web3AuthNetwork: "sapphire_mainnet",\n});\n\nconst privateKeyProvider = new CommonPrivateKeyProvider({\n  config: { chainConfig },\n});\n'})})}),(0,a.jsx)(i.Z,{value:"tkey",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'import { SfaServiceProvider } from "@tkey/service-provider-sfa";\nimport { CommonPrivateKeyProvider } from "@web3auth/base-provider";\n\n// Initialization of private key provider\nconst privateKeyProvider = new CommonPrivateKeyProvider({\n  config: {\n    chainConfig,\n  },\n});\n\nawait (tKey.serviceProvider as SfaServiceProvider).init(privateKeyProvider);\n'})})})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}},31637:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>h,toc:()=>g});var a=t(85893),r=t(11151),o=t(18786),i=t(50210),s=t(74866),l=t(85162);const c={title:"Integrate Web3Auth with the Algorand Blockchain",sidebar_label:"Algorand",image:"content-hub/guides/banners/algorand.png",displayed_sidebar:"docs",keywords:["algorand","web3auth","authentication","blockchain"],description:"Integrate Web3Auth with the Algorand Blockchain | Documentation - Web3Auth"},d=void 0,h={id:"connect-blockchain/other/algorand",title:"Integrate Web3Auth with the Algorand Blockchain",description:"Integrate Web3Auth with the Algorand Blockchain | Documentation - Web3Auth",source:"@site/docs/connect-blockchain/other/algorand.mdx",sourceDirName:"connect-blockchain/other",slug:"/connect-blockchain/other/algorand",permalink:"/docs/connect-blockchain/other/algorand",draft:!1,unlisted:!1,editUrl:"https://github.com/web3auth/web3auth-docs/edit/master/docs/connect-blockchain/other/algorand.mdx",tags:[],version:"current",frontMatter:{title:"Integrate Web3Auth with the Algorand Blockchain",sidebar_label:"Algorand",image:"content-hub/guides/banners/algorand.png",displayed_sidebar:"docs",keywords:["algorand","web3auth","authentication","blockchain"],description:"Integrate Web3Auth with the Algorand Blockchain | Documentation - Web3Auth"},sidebar:"docs",previous:{title:"Algorand",permalink:"/docs/connect-blockchain/other/"},next:{title:"Aptos",permalink:"/docs/connect-blockchain/other/aptos"}},u={},g=[{value:"Installation",id:"installation",level:2},{value:"Initializing Provider",id:"initializing-provider",level:2},{value:"Getting the <code>chainConfig</code>",id:"getting-the-chainconfig",level:3},{value:"Initializing and instantiating the Web3Auth SDK",id:"initializing-and-instantiating-the-web3auth-sdk",level:3},{value:"Get User Info",id:"get-user-info",level:2},{value:"Get Account and KeyPair",id:"get-account-and-keypair",level:2},{value:"Get Balance",id:"get-balance",level:2},{value:"Send Transaction",id:"send-transaction",level:2},{value:"Sign Message",id:"sign-message",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["While using the Web3Auth Web SDK for a non-EVM chain like ",(0,a.jsx)(n.a,{href:"https://algorandtechnologies.com/",children:"Algorand"})," you get a standard provider from which you can\nget the private key of the user. Using this private key, you can use the corresponding libraries of the blockchain to make blockchain calls like\ngetting the user's ",(0,a.jsx)(n.code,{children:"account"}),", fetch ",(0,a.jsx)(n.code,{children:"balance"}),", ",(0,a.jsx)(n.code,{children:"sign transaction"}),", ",(0,a.jsx)(n.code,{children:"send transaction"}),", ",(0,a.jsx)(n.code,{children:"read"})," from and ",(0,a.jsx)(n.code,{children:"write"})," to the smart contract, etc. We have\nhighlighted a few methods here to get you started quickly on that."]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["This reference is for the ",(0,a.jsx)(n.code,{children:"Web"}),", however, you can use Algorand on other Mobile and Gaming Platforms as well. Please follow our reference for\n",(0,a.jsx)(n.a,{href:"/connect-blockchain/evm/",children:"EVM Blockchains"}),", and similarly use Algorand libraries that support the platforms to use the private key and make\nblockchain calls accordingly."]})}),"\n",(0,a.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsxs)(s.Z,{groupId:"npm2yarn",children:[(0,a.jsx)(l.Z,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install --save algosdk\n"})})}),(0,a.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn add algosdk\n"})})}),(0,a.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm add algosdk\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"initializing-provider",children:"Initializing Provider"}),"\n",(0,a.jsxs)(n.h3,{id:"getting-the-chainconfig",children:["Getting the ",(0,a.jsx)(n.code,{children:"chainConfig"})]}),"\n",(0,a.jsxs)(s.Z,{defaultValue:"mainnet",values:[{label:"Mainnet",value:"mainnet"},{label:"Testnet",value:"testnet"}],children:[(0,a.jsx)(l.Z,{value:"mainnet",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:'const chainConfig = {\n  chainNamespace: "other",\n  chainId: "Algorand", //\n  rpcTarget: "https://api.algoexplorer.io",\n  // Avoid using public rpcTarget in production.\n  // Use services like PureStake, AlgoExplorer API, etc.\n  displayName: "Algorand Mainnet",\n  blockExplorerUrl: "https://algoexplorer.io",\n  ticker: "ALGO",\n  tickerName: "Algorand",\n};\n'})})}),(0,a.jsx)(l.Z,{value:"testnet",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:'const chainConfig = {\n  chainNamespace: "other",\n  chainId: "0x3E9", //\n  rpcTarget: "https://api.algoexplorer.io",\n  // Avoid using public rpcTarget in production.\n  // Use services like PureStake, AlgoExplorer API, etc.\n  displayName: "Algorand Testnet",\n  blockExplorerUrl: "https://testnet.algoexplorer.io",\n  ticker: "tALGO",\n  tickerName: "Algorand",\n};\n'})})})]}),"\n",(0,a.jsx)(n.h3,{id:"initializing-and-instantiating-the-web3auth-sdk",children:"Initializing and instantiating the Web3Auth SDK"}),"\n",(0,a.jsx)(i.ZP,{}),"\n",(0,a.jsx)(n.h2,{id:"get-user-info",children:"Get User Info"}),"\n",(0,a.jsx)(o.ZP,{}),"\n",(0,a.jsx)(n.h2,{id:"get-account-and-keypair",children:"Get Account and KeyPair"}),"\n",(0,a.jsx)(n.p,{children:"Once a user logs in, the Web3Auth SDK returns a provider. Since Web3Auth doesn't have a native provider for Algorand, we need to directly use the\nprivate key to make the RPC calls."}),"\n",(0,a.jsxs)(n.p,{children:["Using the function, ",(0,a.jsx)(n.code,{children:'web3auth.provider.request({method: "private_key"})'})," from Web3Auth provider, the application can have access to the user's private\nkey. However, we cannot use this key with Algorand-specific signing functions, hence, we first derive the Algorand Key using the\n",(0,a.jsx)(n.code,{children:"getAlgorandKeyPair()"})," function."]}),"\n",(0,a.jsxs)(n.p,{children:["On the underhood, it uses the ",(0,a.jsx)(n.code,{children:"algosdk.secretKeyToMnemonic()"})," function, where we need to pass the ",(0,a.jsx)(n.code,{children:'Buffer.from(privateKey, "hex")'}),", ie. the\nhexadecimal to Uint8Array converted private key. We get a mnemonic seed phrase that can be used to derive the key pair using the\n",(0,a.jsx)(n.code,{children:"algosdk.mnemonicToSecretKey()"}),", this returns a key pair. We can use the returned private key pair from this and use it on Algorand transactions."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'import { IProvider } from "@web3auth/base";\nimport algosdk from "algosdk";\n\n/*\n  Use code from the above Initializing Provider here\n*/\n\n// web3authProvider is web3auth.provider from above\nconst privateKey = await web3authProvider.request({ method: "private_key" });\n\n// derive the Algorand Key Pair from the private key\nvar passphrase = algosdk.secretKeyToMnemonic(Buffer.from(privateKey, "hex"));\nvar keyPair = algosdk.mnemonicToSecretKey(passphrase);\n\n// keyPair.addr is the account address.\nconst account = keyPair.addr;\n'})}),"\n",(0,a.jsx)(n.h2,{id:"get-balance",children:"Get Balance"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'import { IProvider } from "@web3auth/base";\nimport algosdk from "algosdk";\n\n/*\n  Use code from the above Initializing Provider here\n*/\n\n// web3authProvider is web3auth.provider from above\nconst privateKey = await web3authProvider.request({ method: "private_key" });\n\n// derive the Algorand Key Pair from the private key\nvar passphrase = algosdk.secretKeyToMnemonic(Buffer.from(privateKey, "hex"));\nvar keyPair = algosdk.mnemonicToSecretKey(passphrase);\n\n// keyPair.addr is the account address.\nconst account = keyPair.addr;\n\n// Making a connection to the Algorand TestNet\nconst algodToken = {\n  "x-api-key": "YOUR_ALGOD_API_KEY",\n};\nconst algodServer = "https://testnet-algorand.api.purestake.io/ps2"; // for testnet\nconst algodPort = "";\nconst algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);\nconst balance = await client.accountInformation(keyPair.addr).do();\n'})}),"\n",(0,a.jsx)(n.h2,{id:"send-transaction",children:"Send Transaction"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'import { IProvider } from "@web3auth/base";\nimport algosdk from "algosdk";\n\n/*\n  Use code from the above Initializing Provider here\n*/\n\n// web3authProvider is web3auth.provider from above\nconst privateKey = await web3authProvider.request({ method: "private_key" });\n\n// derive the Algorand Key Pair from the private key\nvar passphrase = algosdk.secretKeyToMnemonic(Buffer.from(privateKey, "hex"));\nvar keyPair = algosdk.mnemonicToSecretKey(passphrase);\n\n// keyPair.addr is the account address.\nconst account = keyPair.addr;\n\n// Making a connection to the Algorand TestNet\nconst algodToken = {\n  "x-api-key": "YOUR_ALGOD_API_KEY",\n};\nconst algodServer = "https://testnet-algorand.api.purestake.io/ps2"; // for testnet\nconst algodPort = "";\nconst algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);\n\n// Creating the transaction\n\nconst params = await client.getTransactionParams().do();\nconst enc = new TextEncoder();\nconst message = enc.encode("Web3Auth says hello!");\n\n// You need to have some funds in your account to send a transaction\n// You can get some testnet funds here: https://bank.testnet.algorand.network/\n\nconst txn = algosdk.makePaymentTxnWithSuggestedParams(\n  keyPair.addr, // sender\n  keyPair.addr, // receiver\n  1000,\n  undefined,\n  message,\n  params,\n);\nlet signedTxn = algosdk.signTransaction(txn, keyPair.sk);\n\nconst txHash = await client.sendRawTransaction(signedTxn.blob).do();\n'})}),"\n",(0,a.jsx)(n.h2,{id:"sign-message",children:"Sign Message"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'import { IProvider } from "@web3auth/base";\nimport algosdk from "algosdk";\n\n/*\n  Use code from the above Initializing Provider here\n*/\n\n// web3authProvider is web3auth.provider from above\nconst privateKey = await web3authProvider.request({ method: "private_key" });\n\n// derive the Algorand Key Pair from the private key\nvar passphrase = algosdk.secretKeyToMnemonic(Buffer.from(privateKey, "hex"));\nvar keyPair = algosdk.mnemonicToSecretKey(passphrase);\n\n// keyPair.addr is the account address.\nconst account = keyPair.addr;\n\n// Making a connection to the Algorand TestNet\n\nconst algodToken = {\n  "x-api-key": "YOUR_ALGOD_API_KEY",\n};\nconst algodServer = "https://testnet-algorand.api.purestake.io/ps2"; // for testnet\nconst algodPort = "";\nconst algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);\n\n// Generating the message to sign\n\nconst params = await client.getTransactionParams().do();\nconst enc = new TextEncoder();\nconst message = enc.encode("Web3Auth says hello!");\nconst txn = algosdk.makePaymentTxnWithSuggestedParams(keyPair.addr, keyPair.addr, 0, undefined, message, params);\nlet signedTxn = algosdk.signTransaction(txn, keyPair.sk);\nlet txId = signedTxn.txID;\n'})})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>i});t(67294);var a=t(36905);const r={tabItem:"tabItem_Ymn6"};var o=t(85893);function i(e){let{children:n,hidden:t,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,i),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(67294),r=t(36905),o=t(12466),i=t(16550),s=t(20469),l=t(91980),c=t(67392),d=t(50012);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function g(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=u(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[c,h]=p({queryString:t,groupId:r}),[m,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,d.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),b=(()=>{const e=c??m;return g({value:e,tabValues:o})?e:null})();(0,s.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),v(e)}),[h,v,o]),tabValues:o}}var v=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(85893);function k(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),r=s[t].value;r!==a&&(c(n),i(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:h,onClick:d,...o,className:(0,r.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function x(e){const n=m(e);return(0,f.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,f.jsx)(k,{...e,...n}),(0,f.jsx)(y,{...e,...n})]})}function w(e){const n=(0,v.Z)();return(0,f.jsx)(x,{...e,children:h(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>i});var a=t(67294);const r={},o=a.createContext(r);function i(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);