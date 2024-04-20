"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[29742],{47218:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>d,metadata:()=>l,toc:()=>o});var t=r(74848),a=r(28453),s=r(55604);const d={id:"route-handlers",title:"Route Handlers"},i=void 0,l={id:"partials/routing/route-handlers",title:"Route Handlers",description:"Registers a route bound to a specific HTTP method.",source:"@site/docs/core/partials/routing/handler.md",sourceDirName:"partials/routing",slug:"/partials/routing/route-handlers",permalink:"/next/partials/routing/route-handlers",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/fiber/edit/main/docs/partials/routing/handler.md",tags:[],version:"current",lastUpdatedAt:1713634533e3,frontMatter:{id:"route-handlers",title:"Route Handlers"}},p={},o=[];function c(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Registers a route bound to a specific ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods",children:"HTTP method"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Signatures"',children:"// HTTP methods\nfunc (app *App) Get(path string, handler Handler, middlewares ...Handler) Router\nfunc (app *App) Head(path string, handler Handler, middlewares ...Handler) Router\nfunc (app *App) Post(path string, handler Handler, middlewares ...Handler) Router\nfunc (app *App) Put(path string, handler Handler, middlewares ...Handler) Router\nfunc (app *App) Delete(path string, handler Handler, middlewares ...Handler) Router\nfunc (app *App) Connect(path string, handler Handler, middlewares ...Handler) Router\nfunc (app *App) Options(path string, handler Handler, middlewares ...Handler) Router\nfunc (app *App) Trace(path string, handler Handler, middlewares ...Handler) Router\nfunc (app *App) Patch(path string, handler Handler, middlewares ...Handler) Router\n\n// Add allows you to specify a method as value\nfunc (app *App) Add(method, path string, handler Handler, middlewares ...Handler) Router\n\n// All will register the route on all HTTP methods\n// Almost the same as app.Use but not bound to prefixes\nfunc (app *App) All(path string, handler Handler, middlewares ...Handler) Router\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Examples"',children:'// Simple GET handler\napp.Get("/api/list", func(c fiber.Ctx) error {\n  return c.SendString("I\'m a GET request!")\n})\n\n// Simple POST handler\napp.Post("/api/register", func(c fiber.Ctx) error {\n  return c.SendString("I\'m a POST request!")\n})\n'})}),"\n",(0,t.jsx)(s.A,{id:"use",children:(0,t.jsx)(n.strong,{children:"Use"})}),"\n",(0,t.jsxs)(n.p,{children:["Can be used for middleware packages and prefix catchers. These routes will only match the beginning of each path i.e. ",(0,t.jsx)(n.code,{children:"/john"})," will match ",(0,t.jsx)(n.code,{children:"/john/doe"}),", ",(0,t.jsx)(n.code,{children:"/johnnnnn"})," etc"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (app *App) Use(args ...any) Router\n\n// Different usage variations\nfunc (app *App) Use(handler Handler, middlewares ...Handler) Router\nfunc (app *App) Use(path string, handler Handler, middlewares ...Handler) Router\nfunc (app *App) Use(paths []string, handler Handler, middlewares ...Handler) Router\nfunc (app *App) Use(path string, app *App) Router\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Examples"',children:'// Match any request\napp.Use(func(c fiber.Ctx) error {\n    return c.Next()\n})\n\n// Match request starting with /api\napp.Use("/api", func(c fiber.Ctx) error {\n    return c.Next()\n})\n\n// Match requests starting with /api or /home (multiple-prefix support)\napp.Use([]string{"/api", "/home"}, func(c fiber.Ctx) error {\n    return c.Next()\n})\n\n// Attach multiple handlers \napp.Use("/api", func(c fiber.Ctx) error {\n  c.Set("X-Custom-Header", random.String(32))\n    return c.Next()\n}, func(c fiber.Ctx) error {\n    return c.Next()\n})\n\n// Mount a sub-app\napp.Use("/api", api)\n'})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},55604:(e,n,r)=>{r.d(n,{A:()=>d});r(96540);var t=r(28774),a=r(63427),s=r(74848);function d(e){let{children:n,id:r}=e;return(0,a.A)().collectAnchor(r),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{id:r,className:"reference anchor",children:[n,(0,s.jsx)(t.A,{to:"#"+r,className:"hash-link"})]})})}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>i});var t=r(96540);const a={},s=t.createContext(a);function d(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);