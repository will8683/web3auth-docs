"use strict";(self.webpackChunkweb3auth_docs=self.webpackChunkweb3auth_docs||[]).push([[68175],{73763:(e,n,t)=>{t.d(n,{ZP:()=>r});var a=t(85893),i=t(11151);function o(e){const n={code:"code",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-swift",children:"account = try EthereumAccount(keyStorage: user )\naddress = account.address\n"})})}function r(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},34450:(e,n,t)=>{t.d(n,{ZP:()=>r});var a=t(85893),i=t(11151);function o(e){const n={code:"code",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-swift",children:"client = EthereumClient(url: URL(string: RPC_URL)!)\nlatestBlock = client.eth_blockNumber\nlet balance = try client.eth_getBalance(address: address, block:latestBlock)\n"})})}function r(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},27992:(e,n,t)=>{t.d(n,{ZP:()=>r});var a=t(85893),i=t(11151);function o(e){const n={code:"code",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-swift",children:'import web3\nimport Web3Auth\n\nvar user: Web3AuthState\nvar client: EthereumClientProtocol\nvar address: EthereumAddress\nvar account: EthereumAccount\nvar latestBlock = 0\nvar chainID = 1 // EVM Chain ID\nvar providerUrl = "" // EVM chain RPC URL\n'})})}function r(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},16718:(e,n,t)=>{t.d(n,{ZP:()=>r});var a=t(85893),i=t(11151);function o(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["To interact with the Ethereum blockchain in iOS Swift environment, we will be using the ",(0,a.jsx)(n.a,{href:"https://github.com/argentlabs/web3.swift",children:"web3swift"})," package."]}),"\n",(0,a.jsx)(n.h3,{id:"cocoapods",children:"CocoaPods"}),"\n",(0,a.jsxs)(n.p,{children:["Add web3.swift to your ",(0,a.jsx)(n.code,{children:"Podfile"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ruby",children:"pod 'web3.swift'\n"})}),"\n",(0,a.jsx)(n.p,{children:"Then run the following command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"$ pod install\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Import the package and shims into your codebase:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-swift",children:"import web3\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["Here are a few ",(0,a.jsx)(n.a,{href:"/examples?product=Plug+and+Play&sdk=Plug+and+Play+iOS+SDK",children:"sample apps"})," which you can checkout to get started with the integration."]})})]})}function r(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},60430:(e,n,t)=>{t.d(n,{ZP:()=>r});var a=t(85893),i=t(11151);function o(e){const n={code:"code",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"We have used some util functions to convert the values to the required format."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-swift",children:"let gasPrice = try await client.eth_gasPrice()\nlet maxTipInGwie = BigUInt(TorusWeb3Utils.toEther(Gwie: BigUInt(amount)))\nlet totalGas = gasPrice + maxTipInGwie\nlet amtInGwie = TorusWeb3Utils.toWei(ether: amount)\nlet nonce = try await client.eth_getTransactionCount(address: address, block: .Latest)\nlet transaction = EthereumTransaction(from: address, to: EthereumAddress(sendTo), value: amtInGwie, data: Data(), nonce: nonce + 1, gasPrice: totalGas, gasLimit: gasLimit, chainId: chainID)\nlet signed = try account.sign(transaction: transaction)\nlet val = try await client.eth_sendRawTransaction(signed.transaction, withAccount: account)\n"})}),"\n",(0,a.jsx)(n.p,{children:"The util functions are as follows"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-swift",children:"import BigInt\nimport Foundation\nimport web3\n\npublic typealias Ether = Double\npublic typealias Wei = BigUInt\n\npublic final class TorusWeb3Utils {\n    public static func timeMinToSec(val: Double) -> Double {\n        return val * 60\n    }\n\n    // NOTE: calculate wei by 10^18\n    private static let etherInWei = pow(Double(10), 18)\n    private static let etherInGwei = pow(Double(10), 9)\n\n    /// Convert Wei(BInt) unit to Ether(Decimal) unit\n    public static func toEther(wei: Wei) -> Ether {\n        guard let decimalWei = Double(wei.description) else {\n            return 0\n        }\n        return decimalWei / etherInWei\n    }\n\n    public static func toEther(Gwie: BigUInt) -> Ether {\n        guard let decimalWei = Double(Gwie.description) else {\n            return 0\n        }\n        return decimalWei / etherInGwei\n    }\n\n    /// Convert Ether(Decimal) unit to Wei(BInt) unit\n    public static func toWei(ether: Ether) -> Wei {\n        let wei = Wei(ether * etherInWei)\n        return wei\n    }\n\n    /// Convert Ether(String) unit to Wei(BInt) unit\n    public static func toWei(ether: String) -> Wei {\n        guard let decimalEther = Double(ether) else {\n            return 0\n        }\n        return toWei(ether: decimalEther)\n    }\n\n    // Only used for calcurating gas price and gas limit.\n    public static func toWei(GWei: Double) -> Wei {\n        return Wei(GWei * 1000000000)\n    }\n}\n\n"})})]})}function r(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},64569:(e,n,t)=>{t.d(n,{ZP:()=>r});var a=t(85893),i=t(11151);function o(e){const n={code:"code",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-swift",children:'account = try EthereumAccount(keyStorage: user )\nlet val = try account.sign(message: "Hello World")\nlet signedMessage = val.web3.hexString\n'})})}function r(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},76148:(e,n,t)=>{t.d(n,{ZP:()=>r});var a=t(85893),i=t(11151);function o(e){const n={code:"code",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["You get the user information after a successful login returned from the ",(0,a.jsx)(n.code,{children:"login"})," method. The ",(0,a.jsx)(n.code,{children:"userInfo"})," object contains the user information, whereas\nthe ",(0,a.jsx)(n.code,{children:"privKey"})," object contains the private key that can be used to make blockchain calls."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-swift",children:"let result = try await Web3Auth(.init(\n    clientId: clientId,\n    network: network)).login(\n        W3ALoginParams(loginProvider: provider)\n    )\nawait MainActor.run(body: {\n    user = result\n    loggedIn = true\n})\n\nlet userInfo = user.userInfo\nlet privKey = user.privKey\n"})})]})}function r(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},49912:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>x,contentTitle:()=>g,default:()=>v,frontMatter:()=>b,metadata:()=>f,toc:()=>j});var a=t(85893),i=t(11151),o=t(16718),r=t(73763),s=t(76148),c=t(34450),l=t(27992),u=t(64569),d=t(60430),h=t(74866),m=t(85162),p=t(30831);const b={title:"Integrate Web3Auth with the Moonbeam Blockchain in iOS/Swift Applications",sidebar_label:"iOS",image:"/docs/content-hub/guides/banners/moonbeam.png",displayed_sidebar:"docs",keywords:["ios","swift","moonbeam","web3auth","authentication","blockchain"],description:"Integrate Web3Auth with the Moonbeam Blockchain in iOS/Swift Applications | Documentation - Web3Auth"},g=void 0,f={id:"connect-blockchain/evm/moonbeam/ios",title:"Integrate Web3Auth with the Moonbeam Blockchain in iOS/Swift Applications",description:"Integrate Web3Auth with the Moonbeam Blockchain in iOS/Swift Applications | Documentation - Web3Auth",source:"@site/docs/connect-blockchain/evm/moonbeam/ios.mdx",sourceDirName:"connect-blockchain/evm/moonbeam",slug:"/connect-blockchain/evm/moonbeam/ios",permalink:"/docs/connect-blockchain/evm/moonbeam/ios",draft:!1,unlisted:!1,editUrl:"https://github.com/web3auth/web3auth-docs/edit/master/docs/connect-blockchain/evm/moonbeam/ios.mdx",tags:[],version:"current",frontMatter:{title:"Integrate Web3Auth with the Moonbeam Blockchain in iOS/Swift Applications",sidebar_label:"iOS",image:"/docs/content-hub/guides/banners/moonbeam.png",displayed_sidebar:"docs",keywords:["ios","swift","moonbeam","web3auth","authentication","blockchain"],description:"Integrate Web3Auth with the Moonbeam Blockchain in iOS/Swift Applications | Documentation - Web3Auth"},sidebar:"docs",previous:{title:"Android",permalink:"/docs/connect-blockchain/evm/moonbeam/android"},next:{title:"React Native",permalink:"/docs/connect-blockchain/evm/moonbeam/react-native"}},x={},j=[{value:"Installation",id:"installation",level:2},{value:"Chain Details for Moonbeam",id:"chain-details-for-moonbeam",level:2},{value:"Initialize",id:"initialize",level:2},{value:"Get User Info",id:"get-user-info",level:2},{value:"Get Account",id:"get-account",level:2},{value:"Get Balance",id:"get-balance",level:2},{value:"Send Transaction",id:"send-transaction",level:2},{value:"Sign a message",id:"sign-a-message",level:2}];function w(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(p.Z,{title:"Integrate Web3Auth with the Moonbeam Blockchain in iOS/Swift Applications",description:"Integrate Web3Auth with the Moonbeam Blockchain in iOS/Swift Applications | Documentation - Web3Auth",image:"https://web3auth.io/docs/content-hub/guides/banners/moonbeam.png",slug:"/connect-blockchain/evm/moonbeam/ios"}),"\n",(0,a.jsxs)(n.p,{children:["While using the Web3Auth iOS SDK, you get the private key within the user scope. This private key can interact with\n",(0,a.jsx)(n.a,{href:"https://moonbeam.network/networks/moonbeam/",children:"Moonbeam"})," to make any blockchain calls, like getting the user's ",(0,a.jsx)(n.code,{children:"account"}),", fetching ",(0,a.jsx)(n.code,{children:"balance"}),",\n",(0,a.jsx)(n.code,{children:"sign transaction"}),", ",(0,a.jsx)(n.code,{children:"send transaction"}),", ",(0,a.jsx)(n.code,{children:"read"})," from and ",(0,a.jsx)(n.code,{children:"write"})," to the smart contract, etc. We have highlighted a few here to get you started quickly\non that."]}),"\n",(0,a.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(o.ZP,{}),"\n",(0,a.jsx)(n.h2,{id:"chain-details-for-moonbeam",children:"Chain Details for Moonbeam"}),"\n",(0,a.jsxs)(h.Z,{defaultValue:"mainnet",values:[{label:"Mainnet",value:"mainnet"},{label:"Testnet",value:"testnet"}],children:[(0,a.jsx)(m.Z,{value:"mainnet",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Chain ID: 0x504"}),"\n",(0,a.jsxs)(n.li,{children:["Public RPC URL: ",(0,a.jsx)(n.a,{href:"https://rpc.ankr.com/moonbeam",children:"https://rpc.ankr.com/moonbeam"})," (Avoid using public rpcTarget in production, use services like Infura, Quicknode etc)"]}),"\n",(0,a.jsx)(n.li,{children:"Display Name: Moonbeam Mainnet"}),"\n",(0,a.jsxs)(n.li,{children:["Block Explorer Link: ",(0,a.jsx)(n.a,{href:"https://moonbeam.moonscan.io",children:"https://moonbeam.moonscan.io"})]}),"\n",(0,a.jsx)(n.li,{children:"Ticker: GLMR"}),"\n",(0,a.jsx)(n.li,{children:"Ticker Name: GLMR"}),"\n"]})}),(0,a.jsx)(m.Z,{value:"testnet",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Chain ID: 0x507"}),"\n",(0,a.jsxs)(n.li,{children:["Public RPC URL: ",(0,a.jsx)(n.a,{href:"https://rpc.ankr.com/moonbeam",children:"https://rpc.ankr.com/moonbeam"})," (Avoid using public rpcTarget in production, use services like Infura, Quicknode etc)"]}),"\n",(0,a.jsx)(n.li,{children:"Display Name: Moonbeam Testnet"}),"\n",(0,a.jsxs)(n.li,{children:["Block Explorer Link: ",(0,a.jsx)(n.a,{href:"https://moonbase.moonscan.io",children:"https://moonbase.moonscan.io"})]}),"\n",(0,a.jsx)(n.li,{children:"Ticker: GLMR"}),"\n",(0,a.jsx)(n.li,{children:"Ticker Name: GLMR"}),"\n"]})})]}),"\n",(0,a.jsx)(n.h2,{id:"initialize",children:"Initialize"}),"\n",(0,a.jsx)(l.ZP,{}),"\n",(0,a.jsx)(n.h2,{id:"get-user-info",children:"Get User Info"}),"\n",(0,a.jsx)(s.ZP,{}),"\n",(0,a.jsx)(n.h2,{id:"get-account",children:"Get Account"}),"\n",(0,a.jsx)(r.ZP,{}),"\n",(0,a.jsx)(n.h2,{id:"get-balance",children:"Get Balance"}),"\n",(0,a.jsx)(c.ZP,{}),"\n",(0,a.jsx)(n.h2,{id:"send-transaction",children:"Send Transaction"}),"\n",(0,a.jsx)(d.ZP,{}),"\n",(0,a.jsx)(n.h2,{id:"sign-a-message",children:"Sign a message"}),"\n",(0,a.jsx)(u.ZP,{})]})}function v(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(w,{...e})}):w(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>r});t(67294);var a=t(36905);const i={tabItem:"tabItem_Ymn6"};var o=t(85893);function r(e){let{children:n,hidden:t,className:r}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,r),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>k});var a=t(67294),i=t(36905),o=t(12466),r=t(16550),s=t(20469),c=t(91980),l=t(67392),u=t(50012);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:i}}=e;return{value:n,label:t,attributes:a,default:i}}))}(t);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const i=(0,r.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(i.location.search);n.set(o,e),i.replace({...i.location,search:n.toString()})}),[o,i])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,o=h(e),[r,c]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[l,d]=p({queryString:t,groupId:i}),[b,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,o]=(0,u.Nk)(t);return[i,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:i}),f=(()=>{const e=l??b;return m({value:e,tabValues:o})?e:null})();(0,s.Z)((()=>{f&&c(f)}),[f]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),g(e)}),[d,g,o]),tabValues:o}}var g=t(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(85893);function j(e){let{className:n,block:t,selectedValue:a,selectValue:r,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.o5)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),i=s[t].value;i!==a&&(l(n),r(i))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...o,className:(0,i.Z)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:i}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function v(e){const n=b(e);return(0,x.jsxs)("div",{className:(0,i.Z)("tabs-container",f.tabList),children:[(0,x.jsx)(j,{...e,...n}),(0,x.jsx)(w,{...e,...n})]})}function k(e){const n=(0,g.Z)();return(0,x.jsx)(v,{...e,children:d(e.children)},String(n))}},30831:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(35742),i=t(85893);function o(e){const{title:n,description:t,image:o,slug:r,keywords:s}=e;return(0,i.jsxs)(a.Z,{children:[n?(0,i.jsxs)("title",{children:[n," | Web3Auth "]}):(0,i.jsx)("title",{children:"Documentation | Web3Auth"}),t?(0,i.jsx)("meta",{name:"description",content:t}):(0,i.jsx)("meta",{name:"description",content:"Web3Auth is simple, non-custodial auth infrastructure that enables Web3 wallets and applications to provide seamless user logins for both mainstream and native Web3 users."}),s?s.length>0&&(0,i.jsx)("meta",{name:"keywords",content:`web3auth, blockchain, solana, ethereum, multi party computation, ${s.join(", ")}`}):(0,i.jsx)("meta",{name:"keywords",content:"web3auth, blockchain, web3, web3.js, ethers.js, solana, ethereum, passwordless, passwordless magic link, multi party computation, tkey, torus, web3 auth, auth"}),(0,i.jsx)("meta",{property:"og:site_name",content:"Web3Auth"}),(0,i.jsx)("meta",{property:"og:type",content:"website"}),n?(0,i.jsx)("meta",{property:"og:title",content:n}):(0,i.jsx)("meta",{property:"og:title",content:"Documentation | Web3Auth"}),t?(0,i.jsx)("meta",{property:"og:description",content:t}):(0,i.jsx)("meta",{property:"og:description",content:"Web3Auth is simple, non-custodial auth infrastructure that enables Web3 wallets and applications to provide seamless user logins for both mainstream and native Web3 users."}),r?(0,i.jsx)("meta",{property:"og:url",content:`https://web3auth.io/docs${r}`}):(0,i.jsx)("meta",{property:"og:url",content:"https://web3auth.io/docs"}),o?(0,i.jsx)("meta",{property:"og:image",content:o}):(0,i.jsx)("meta",{property:"og:image",content:"http://web3auth.io/docs/images/docs-meta-cards/documentation-card.png"}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{name:"twitter:site",content:"@Web3Auth"}),(0,i.jsx)("meta",{name:"twitter:creator",content:"@Web3Auth"}),o?(0,i.jsx)("meta",{name:"twitter:image",content:o}):(0,i.jsx)("meta",{name:"twitter:image",content:"http://web3auth.io/docs/images/docs-meta-cards/documentation-card.png"}),n?(0,i.jsx)("meta",{itemProp:"name",content:n}):(0,i.jsx)("meta",{itemProp:"name",content:"Documentation | Web3Auth"}),t?(0,i.jsx)("meta",{itemProp:"description",content:t}):(0,i.jsx)("meta",{itemProp:"description",content:"Web3Auth is simple, non-custodial auth infrastructure that enables Web3 wallets and applications to provide seamless user logins for both mainstream and native Web3 users."}),o?(0,i.jsx)("meta",{itemProp:"image",content:o}):(0,i.jsx)("meta",{itemProp:"image",content:"http://web3auth.io/docs/images/docs-meta-cards/documentation-card.png"}),(0,i.jsx)("meta",{name:"author",content:"Web3Auth"})]})}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>r});var a=t(67294);const i={},o=a.createContext(i);function r(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);