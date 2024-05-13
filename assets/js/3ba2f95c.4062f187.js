"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[89238],{77316:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>a,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var i=r(74848),n=r(28453);const s={id:"fgprof"},o="Fgprof",c={id:"fgprof/fgprof",title:"Fgprof",description:"Release",source:"@site/contrib_versioned_docs/version-fibersentry_v1.x.x/fgprof/README.md",sourceDirName:"fgprof",slug:"/fgprof/",permalink:"/contrib/fibersentry_v1.x.x/fgprof/",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/contrib/edit/main/fgprof/README.md",tags:[],version:"fibersentry_v1.x.x",lastUpdatedAt:1715606522e3,frontMatter:{id:"fgprof"},sidebar:"tutorialSidebar",previous:{title:"Casbin",permalink:"/contrib/fibersentry_v1.x.x/casbin/"},next:{title:"Fiberi18n",permalink:"/contrib/fibersentry_v1.x.x/fiberi18n/"}},d={},l=[{value:"Install",id:"install",level:2},{value:"Config",id:"config",level:2},{value:"Example",id:"example",level:2}];function f(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"fgprof",children:"Fgprof"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{src:"https://img.shields.io/github/v/tag/gofiber/contrib?filter=fgprof*",alt:"Release"}),"\n",(0,i.jsx)(t.a,{href:"https://gofiber.io/discord",children:(0,i.jsx)(t.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,i.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,i.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,i.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Linter/badge.svg",alt:"Linter"})]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://github.com/felixge/fgprof",children:"fgprof"})," support for Fiber."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Note: Requires Go 1.19 and above"})}),"\n",(0,i.jsx)(t.h2,{id:"install",children:"Install"}),"\n",(0,i.jsx)(t.p,{children:"This middleware supports Fiber v2."}),"\n",(0,i.jsx)(t.p,{children:"Using fgprof to profiling your Fiber app."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"go get -u github.com/gofiber/fiber/v2\ngo get -u github.com/gofiber/contrib/fgprof\n"})}),"\n",(0,i.jsx)(t.h2,{id:"config",children:"Config"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Property"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Next"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"func(c *fiber.Ctx) bool"})}),(0,i.jsxs)(t.td,{children:["A function to skip this middleware when returned ",(0,i.jsx)(t.code,{children:"true"}),"."]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"nil"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Prefix"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"string"}),"."]}),(0,i.jsx)(t.td,{children:'Prefix defines a URL prefix added before "/debug/fgprof". Note that it should start with (but not end with) a slash. Example: "/federated-fiber"'}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:'""'})})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"log"\n\n\t"github.com/gofiber/contrib/fgprof"\n\t"github.com/gofiber/fiber/v2"\n)\n\nfunc main() {\n\tapp := fiber.New()\n\tapp.Use(fgprof.New())\n\tapp.Get("/", func(c *fiber.Ctx) error {\n\t\treturn c.SendString("OK")\n\t})\n\tlog.Fatal(app.Listen(":3000"))\n}\n'})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"go tool pprof -http=:8080 http://localhost:3000/debug/fgprof\n"})})]})}function a(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(f,{...e})}):f(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>c});var i=r(96540);const n={},s=i.createContext(n);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);