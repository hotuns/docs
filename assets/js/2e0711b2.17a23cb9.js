"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[67141],{3737:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var r=n(74848),i=n(28453);const l={id:"redirect"},d="Redirect",s={id:"middleware/redirect",title:"Redirect",description:"Redirection middleware for Fiber.",source:"@site/docs/core/middleware/redirect.md",sourceDirName:"middleware",slug:"/middleware/redirect",permalink:"/next/middleware/redirect",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/fiber/edit/main/docs/middleware/redirect.md",tags:[],version:"current",lastUpdatedAt:1713634533e3,frontMatter:{id:"redirect"},sidebar:"tutorialSidebar",previous:{title:"Recover",permalink:"/next/middleware/recover"},next:{title:"RequestID",permalink:"/next/middleware/requestid"}},c={},o=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}];function a(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"redirect",children:"Redirect"}),"\n",(0,r.jsx)(t.p,{children:"Redirection middleware for Fiber."}),"\n",(0,r.jsx)(t.h2,{id:"signatures",children:"Signatures"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:"func New(config ...Config) fiber.Handler\n"})}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n  "github.com/gofiber/fiber/v3"\n  "github.com/gofiber/fiber/v3/middleware/redirect"\n)\n\nfunc main() {\n  app := fiber.New()\n  \n  app.Use(redirect.New(redirect.Config{\n    Rules: map[string]string{\n      "/old":   "/new",\n      "/old/*": "/new/$1",\n    },\n    StatusCode: 301,\n  }))\n  \n  app.Get("/new", func(c fiber.Ctx) error {\n    return c.SendString("Hello, World!")\n  })\n  app.Get("/new/*", func(c fiber.Ctx) error {\n    return c.SendString("Wildcard: " + c.Params("*"))\n  })\n  \n  app.Listen(":3000")\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Test:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-curl",children:"curl http://localhost:3000/old\ncurl http://localhost:3000/old/hello\n"})}),"\n",(0,r.jsx)(t.h2,{id:"config",children:"Config"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Next"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"func(fiber.Ctx) bool"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Filter defines a function to skip middleware."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"nil"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Rules"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"map[string]string"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Rules defines the URL path rewrite rules. The values captured in asterisk can be retrieved by index e.g. $1, $2 and so on."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Required"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"StatusCode"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"int"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"The status code when redirecting. This is ignored if Redirect is disabled."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"302 Temporary Redirect"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"default-config",children:"Default Config"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:"var ConfigDefault = Config{\n\tStatusCode: fiber.StatusFound,\n}\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>s});var r=n(96540);const i={},l=r.createContext(i);function d(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);