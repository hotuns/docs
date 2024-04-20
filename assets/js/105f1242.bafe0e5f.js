"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[10534],{85077:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var t=n(74848),r=n(28453);const a={id:"skip"},s="Skip",o={id:"api/middleware/skip",title:"Skip",description:"Skip middleware for Fiber that skips a wrapped handler if a predicate is true.",source:"@site/versioned_docs/version-v2.x/api/middleware/skip.md",sourceDirName:"api/middleware",slug:"/api/middleware/skip",permalink:"/api/middleware/skip",draft:!1,unlisted:!1,tags:[],version:"v2.x",lastUpdatedAt:1713634533e3,frontMatter:{id:"skip"},sidebar:"tutorialSidebar",previous:{title:"Session",permalink:"/api/middleware/session"},next:{title:"Timeout",permalink:"/api/middleware/timeout"}},d={},l=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2}];function p(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"skip",children:"Skip"}),"\n",(0,t.jsxs)(i.p,{children:["Skip middleware for ",(0,t.jsx)(i.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," that skips a wrapped handler if a predicate is true."]}),"\n",(0,t.jsx)(i.h2,{id:"signatures",children:"Signatures"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-go",children:"func New(handler fiber.Handler, exclude func(c *fiber.Ctx) bool) fiber.Handler\n"})}),"\n",(0,t.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(i.p,{children:"Import the middleware package that is part of the Fiber web framework"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-go",children:'import (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/fiber/v2/middleware/skip"\n)\n'})}),"\n",(0,t.jsx)(i.p,{children:"After you initiate your Fiber app, you can use the following possibilities:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-go",children:'func main() {\n\tapp := fiber.New()\n\n\tapp.Use(skip.New(BasicHandler, func(ctx *fiber.Ctx) bool {\n\t\treturn ctx.Method() == fiber.MethodGet\n\t}))\n\n\tapp.Get("/", func(ctx *fiber.Ctx) error {\n\t\treturn ctx.SendString("It was a GET request!")\n\t})\n\n\tlog.Fatal(app.Listen(":3000"))\n}\n\nfunc BasicHandler(ctx *fiber.Ctx) error {\n\treturn ctx.SendString("It was not a GET request!")\n}\n'})}),"\n",(0,t.jsx)(i.admonition,{type:"tip",children:(0,t.jsx)(i.p,{children:"app.Use will handle requests from any route, and any method. In the example above, it will only skip if the method is GET."})})]})}function c(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>o});var t=n(96540);const r={},a=t.createContext(r);function s(e){const i=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);