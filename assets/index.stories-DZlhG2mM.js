import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as n}from"./index-BYq_8MfK.js";import"./_commonjsHelpers-Cpj98o6Y.js";const c=n.createContext("");function u(){const[o,r]=n.useState("dark"),d=()=>{r(i=>i==="dark"?"light":"dark")};return e.jsx(c.Provider,{value:{theme:o,toggleTheme:d},children:e.jsx(p,{})})}function p(){const{theme:o,toggleTheme:r}=n.useContext(c);return e.jsx(e.Fragment,{children:e.jsxs("button",{onClick:r,type:"button",children:["Theme: ",o]})})}u.__docgenInfo={description:"",methods:[],displayName:"ThemeButton"};const f={component:u},t={};var s,a,m;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(m=(a=t.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const g=["Default"];export{t as Default,g as __namedExportsOrder,f as default};
