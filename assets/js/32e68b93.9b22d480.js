"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[97923],{88493:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var t=i(74848),r=i(28453);const s={id:"faster-fiber",title:"\u26a1 Make Fiber Faster",sidebar_position:7},o=void 0,c={id:"guide/faster-fiber",title:"\u26a1 Make Fiber Faster",description:"Custom JSON Encoder/Decoder",source:"@site/docs/core/guide/faster-fiber.md",sourceDirName:"guide",slug:"/guide/faster-fiber",permalink:"/next/guide/faster-fiber",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/fiber/edit/main/docs/guide/faster-fiber.md",tags:[],version:"current",lastUpdatedAt:1720439921e3,sidebarPosition:7,frontMatter:{id:"faster-fiber",title:"\u26a1 Make Fiber Faster",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd0e Validation",permalink:"/next/guide/validation"},next:{title:"\ud83e\uddf0 Utils",permalink:"/next/guide/utils"}},d={},a=[{value:"Custom JSON Encoder/Decoder",id:"custom-json-encoderdecoder",level:2},{value:"References",id:"references",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"custom-json-encoderdecoder",children:"Custom JSON Encoder/Decoder"}),"\n",(0,t.jsxs)(n.p,{children:["Since Fiber v2.32.0, we use ",(0,t.jsx)(n.strong,{children:"encoding/json"})," as default json library due to stability and producibility. However, the standard library is a bit slow compared to 3rd party libraries. If you're not happy with the performance of ",(0,t.jsx)(n.strong,{children:"encoding/json"}),", we recommend you to use these libraries:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/goccy/go-json",children:"goccy/go-json"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/bytedance/sonic",children:"bytedance/sonic"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/segmentio/encoding",children:"segmentio/encoding"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/mailru/easyjson",children:"mailru/easyjson"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/minio/simdjson-go",children:"minio/simdjson-go"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/wI2L/jettison",children:"wI2L/jettison"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'package main\n\nimport "github.com/gofiber/fiber/v3"\nimport "github.com/goccy/go-json"\n\nfunc main() {\n\tapp := fiber.New(fiber.Config{\n\t\tJSONEncoder: json.Marshal,\n\t\tJSONDecoder: json.Unmarshal,\n\t})\n\n\t# ...\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"references",children:"References"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/next/client/rest#setjsonmarshal",children:"Set custom JSON encoder for client"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/next/client/rest#setjsonunmarshal",children:"Set custom JSON decoder for client"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/next/api/fiber#jsonencoder",children:"Set custom JSON encoder for application"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/next/api/fiber#jsondecoder",children:"Set custom JSON decoder for application"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>c});var t=i(96540);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);