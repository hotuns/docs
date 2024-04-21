"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[62438],{23565:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>x,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(74848),i=n(28453);const a={id:"expvar"},l="ExpVar",s={id:"middleware/expvar",title:"ExpVar",description:"Expvar middleware for Fiber that serves via its HTTP server runtime exposed variants in the JSON format. The package is typically only imported for the side effect of registering its HTTP handlers. The handled path is /debug/vars.",source:"@site/docs/core/middleware/expvar.md",sourceDirName:"middleware",slug:"/middleware/expvar",permalink:"/next/middleware/expvar",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/fiber/edit/main/docs/middleware/expvar.md",tags:[],version:"current",lastUpdatedAt:1713700579e3,frontMatter:{id:"expvar"},sidebar:"tutorialSidebar",previous:{title:"ETag",permalink:"/next/middleware/etag"},next:{title:"Favicon",permalink:"/next/middleware/favicon"}},d={},c=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}];function o(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"expvar",children:"ExpVar"}),"\n",(0,r.jsxs)(t.p,{children:["Expvar middleware for ",(0,r.jsx)(t.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," that serves via its HTTP server runtime exposed variants in the JSON format. The package is typically only imported for the side effect of registering its HTTP handlers. The handled path is ",(0,r.jsx)(t.code,{children:"/debug/vars"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"signatures",children:"Signatures"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:"func New() fiber.Handler\n"})}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.p,{children:"Import the middleware package that is part of the Fiber web framework"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'import (\n  "github.com/gofiber/fiber/v3"\n  expvarmw "github.com/gofiber/fiber/v3/middleware/expvar"\n)\n'})}),"\n",(0,r.jsx)(t.p,{children:"After you initiate your Fiber app, you can use the following possibilities:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'var count = expvar.NewInt("count")\n\napp.Use(expvarmw.New())\napp.Get("/", func(c fiber.Ctx) error {\n    count.Add(1)\n\n    return c.SendString(fmt.Sprintf("hello expvar count %d", count.Value()))\n})\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Visit path ",(0,r.jsx)(t.code,{children:"/debug/vars"})," to see all vars and use query ",(0,r.jsx)(t.code,{children:"r=key"})," to filter exposed variables."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'curl 127.0.0.1:3000\nhello expvar count 1\n\ncurl 127.0.0.1:3000/debug/vars\n{\n    "cmdline": ["xxx"],\n    "count": 1,\n    "expvarHandlerCalls": 33,\n    "expvarRegexpErrors": 0,\n    "memstats": {...}\n}\n\ncurl 127.0.0.1:3000/debug/vars?r=c\n{\n    "cmdline": ["xxx"],\n    "count": 1\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"config",children:"Config"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Next"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"func(fiber.Ctx) bool"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Next defines a function to skip this middleware when returned true."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"nil"})})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"default-config",children:"Default Config"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:"var ConfigDefault = Config{\n    Next: nil,\n}\n"})})]})}function x(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>s});var r=n(96540);const i={},a=r.createContext(i);function l(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);