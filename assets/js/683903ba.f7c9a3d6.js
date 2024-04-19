"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[28469],{46317:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=i(74848),t=i(28453);const s={id:"grouping",title:"\ud83c\udfad Grouping",sidebar_position:2},a=void 0,o={id:"guide/grouping",title:"\ud83c\udfad Grouping",description:"Paths",source:"@site/versioned_docs/version-v1.x/guide/grouping.md",sourceDirName:"guide",slug:"/guide/grouping",permalink:"/v1.x/guide/grouping",draft:!1,unlisted:!1,tags:[],version:"v1.x",lastUpdatedAt:1713526866e3,sidebarPosition:2,frontMatter:{id:"grouping",title:"\ud83c\udfad Grouping",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd0c Routing",permalink:"/v1.x/guide/routing"},next:{title:"\ud83d\udcdd Templates",permalink:"/v1.x/guide/templates"}},p={},l=[{value:"Paths",id:"paths",level:2},{value:"Group Handlers",id:"group-handlers",level:2}];function u(n){const e={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"paths",children:"Paths"}),"\n",(0,r.jsxs)(e.p,{children:["Like ",(0,r.jsx)(e.strong,{children:"Routing"}),", groups can also have paths that belong to a cluster."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'func main() {\n  app := fiber.New()\n\n  api := app.Group("/api", cors())  // /api\n\n  v1 := api.Group("/v1", mysql())   // /api/v1\n  v1.Get("/list", handler)          // /api/v1/list\n  v1.Get("/user", handler)          // /api/v1/user\n\n  v2 := api.Group("/v2", mongodb()) // /api/v2\n  v2.Get("/list", handler)          // /api/v2/list\n  v2.Get("/user", handler)          // /api/v2/user\n\n  app.Listen(3000)\n}\n'})}),"\n",(0,r.jsxs)(e.p,{children:["A ",(0,r.jsx)(e.strong,{children:"Group"})," of paths can have an optional handler."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'func main() {\n  app := fiber.New()\n\n  api := app.Group("/api")  // /api\n\n  v1 := api.Group("/v1")   // /api/v1\n  v1.Get("/list", handler)          // /api/v1/list\n  v1.Get("/user", handler)          // /api/v1/user\n\n  v2 := api.Group("/v2") // /api/v2\n  v2.Get("/list", handler)          // /api/v2/list\n  v2.Get("/user", handler)          // /api/v2/user\n\n  app.Listen(3000)\n}\n'})}),"\n",(0,r.jsx)(e.admonition,{type:"caution",children:(0,r.jsxs)(e.p,{children:["Running ",(0,r.jsx)(e.strong,{children:"/api"}),", ",(0,r.jsx)(e.strong,{children:"/v1"})," or ",(0,r.jsx)(e.strong,{children:"/v2"})," will result in ",(0,r.jsx)(e.strong,{children:"404"})," error, make sure you have the errors set."]})}),"\n",(0,r.jsx)(e.h2,{id:"group-handlers",children:"Group Handlers"}),"\n",(0,r.jsxs)(e.p,{children:["Group handlers can also be used as a routing path but they must have ",(0,r.jsx)(e.strong,{children:"Next"})," added to them so that the flow can continue."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'func main() {\n    app := fiber.New()\n\n    api := app.Group("/api") // /api\n\n    v1 := api.Group("/v1", func(c *fiber.Ctx) {\n        c.JSON(fiber.Map{\n            "message": "v1",\n        })\n        c.Next()\n    })                       // /api/v1\n    v1.Get("/list", handler) // /api/v1/list\n    v1.Get("/user", handler) // /api/v1/user\n\n    app.Listen(3000)\n}\n'})})]})}function d(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(u,{...n})}):u(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>a,x:()=>o});var r=i(96540);const t={},s=r.createContext(t);function a(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:a(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);