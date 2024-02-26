"use strict";(self.webpackChunkweb3auth_docs=self.webpackChunkweb3auth_docs||[]).push([[58258],{80749:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>u,metadata:()=>o,toc:()=>d});var a=n(85893),r=n(11151),l=n(74866),s=n(85162);const u={title:"Web3Auth SFA Node Quick Start"},i=void 0,o={type:"mdx",permalink:"/docs/quick-start/builder/core_kit/sfa/node/stepContent/nodeQuickStart",source:"@site/src/pages/quick-start/builder/core_kit/sfa/node/stepContent/nodeQuickStart.mdx",title:"Web3Auth SFA Node Quick Start",description:"This guide is designed to help you quickly integrate a basic instance of Web3Auth Single Factor Auth in your Node.js app.",frontMatter:{title:"Web3Auth SFA Node Quick Start"},unlisted:!1},c={},d=[];function h(e){const t={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"This guide is designed to help you quickly integrate a basic instance of Web3Auth Single Factor Auth in your Node.js app."}),"\n",(0,a.jsxs)(t.p,{children:["If you face any problem anytime, you can always find help in the\n",(0,a.jsx)(t.a,{href:"https://web3auth.io/community/c/help-core-kit/core-kit-sfa-node/23",children:"Web3Auth Community"}),"."]}),"\n",(0,a.jsx)(t.admonition,{title:"building locally",type:"tip",children:(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Clone the SFA Node Quick Start Application"}),"\n",(0,a.jsxs)(l.Z,{groupId:"npm2yarn",children:[(0,a.jsx)(s.Z,{value:"npm",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"npx degit Web3Auth/web3auth-core-kit-examples/tree/main/single-factor-auth-node/sfa-node-quick-start w3a-quick-start\n"})})}),(0,a.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"npx degit Web3Auth/web3auth-core-kit-examples/tree/main/single-factor-auth-node/sfa-node-quick-start w3a-quick-start\n"})})}),(0,a.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"npx degit Web3Auth/web3auth-core-kit-examples/tree/main/single-factor-auth-node/sfa-node-quick-start w3a-quick-start\n"})})})]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Install & Run"}),"\n",(0,a.jsxs)(l.Z,{groupId:"npm2yarn",children:[(0,a.jsx)(s.Z,{value:"npm",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"cd w3a-quick-start\nnpm install\nnpm start\n"})})}),(0,a.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"cd w3a-quick-start\nyarn install\nyarn start\n"})})}),(0,a.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"cd w3a-quick-start\npnpm install\npnpm start\n"})})})]}),"\n"]}),"\n"]})})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>s});n(67294);var a=n(36905);const r={tabItem:"tabItem_Ymn6"};var l=n(85893);function s(e){let{children:t,hidden:n,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,s),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(67294),r=n(36905),l=n(12466),s=n(16550),u=n(20469),i=n(91980),o=n(67392),c=n(50012);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=h(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[o,d]=m({queryString:n,groupId:r}),[b,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),g=(()=>{const e=o??b;return p({value:e,tabValues:l})?e:null})();(0,u.Z)((()=>{g&&i(g)}),[g]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,l]),tabValues:l}}var f=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(85893);function v(e){let{className:t,block:n,selectedValue:a,selectValue:s,tabValues:u}=e;const i=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.o5)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),r=u[n].value;r!==a&&(o(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:u.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...l,className:(0,r.Z)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function j(e){const t=b(e);return(0,x.jsxs)("div",{className:(0,r.Z)("tabs-container",g.tabList),children:[(0,x.jsx)(v,{...e,...t}),(0,x.jsx)(y,{...e,...t})]})}function k(e){const t=(0,f.Z)();return(0,x.jsx)(j,{...e,children:d(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>u,a:()=>s});var a=n(67294);const r={},l=a.createContext(r);function s(e){const t=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(l.Provider,{value:t},e.children)}}}]);