"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[82628],{15852:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(74848),l=n(28453);const r={id:"idempotency"},d="Idempotency",s={id:"middleware/idempotency",title:"Idempotency",description:"Idempotency middleware for Fiber allows for fault-tolerant APIs where duplicate requests \u2014 for example due to networking issues on the client-side \u2014 do not erroneously cause the same action performed multiple times on the server-side.",source:"@site/docs/core/middleware/idempotency.md",sourceDirName:"middleware",slug:"/middleware/idempotency",permalink:"/next/middleware/idempotency",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/fiber/edit/main/docs/middleware/idempotency.md",tags:[],version:"current",lastUpdatedAt:1713634533e3,frontMatter:{id:"idempotency"},sidebar:"tutorialSidebar",previous:{title:"Helmet",permalink:"/next/middleware/helmet"},next:{title:"Keyauth",permalink:"/next/middleware/keyauth"}},o={},c=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Default Config",id:"default-config",level:3},{value:"Custom Config",id:"custom-config",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config-1",level:2}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"idempotency",children:"Idempotency"}),"\n",(0,i.jsxs)(t.p,{children:["Idempotency middleware for ",(0,i.jsx)(t.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," allows for fault-tolerant APIs where duplicate requests \u2014 for example due to networking issues on the client-side \u2014 do not erroneously cause the same action performed multiple times on the server-side."]}),"\n",(0,i.jsxs)(t.p,{children:["Refer to ",(0,i.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/draft-ietf-httpapi-idempotency-key-header-02",children:"https://datatracker.ietf.org/doc/html/draft-ietf-httpapi-idempotency-key-header-02"})," for a better understanding."]}),"\n",(0,i.jsx)(t.h2,{id:"signatures",children:"Signatures"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"func New(config ...Config) fiber.Handler\nfunc IsFromCache(c fiber.Ctx) bool\nfunc WasPutToCache(c fiber.Ctx) bool\n"})}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.p,{children:"Import the middleware package that is part of the Fiber web framework"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'import (\n\t"github.com/gofiber/fiber/v3"\n\t"github.com/gofiber/fiber/v3/middleware/idempotency"\n)\n'})}),"\n",(0,i.jsx)(t.p,{children:"After you initiate your Fiber app, you can use the following possibilities:"}),"\n",(0,i.jsx)(t.h3,{id:"default-config",children:"Default Config"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"app.Use(idempotency.New())\n"})}),"\n",(0,i.jsx)(t.h3,{id:"custom-config",children:"Custom Config"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"app.Use(idempotency.New(idempotency.Config{\n\tLifetime: 42 * time.Minute,\n\t// ...\n}))\n"})}),"\n",(0,i.jsx)(t.h3,{id:"config",children:"Config"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Next"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"func(fiber.Ctx) bool"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Next defines a function to skip this middleware when returned true."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"A function for safe methods"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Lifetime"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"time.Duration"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Lifetime is the maximum lifetime of an idempotency key."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"30 * time.Minute"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"KeyHeader"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"KeyHeader is the name of the header that contains the idempotency key."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:'"X-Idempotency-Key"'})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"KeyHeaderValidate"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"func(string) error"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"KeyHeaderValidate defines a function to validate the syntax of the idempotency header."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"A function for UUID validation"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"KeepResponseHeaders"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"[]string"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"KeepResponseHeaders is a list of headers that should be kept from the original response."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"nil (keep all headers)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Lock"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"Locker"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Lock locks an idempotency key."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"An in-memory locker"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Storage"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"fiber.Storage"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Storage stores response data by idempotency key."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"An in-memory storage"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"default-config-1",children:"Default Config"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'var ConfigDefault = Config{\n\tNext: func(c fiber.Ctx) bool {\n\t\t// Skip middleware if the request was done using a safe HTTP method\n\t\treturn fiber.IsMethodSafe(c.Method())\n\t},\n\n\tLifetime: 30 * time.Minute,\n\n\tKeyHeader: "X-Idempotency-Key",\n\tKeyHeaderValidate: func(k string) error {\n\t\tif l, wl := len(k), 36; l != wl { // UUID length is 36 chars\n\t\t\treturn fmt.Errorf("%w: invalid length: %d != %d", ErrInvalidIdempotencyKey, l, wl)\n\t\t}\n\n\t\treturn nil\n\t},\n\n\tKeepResponseHeaders: nil,\n\n\tLock: nil, // Set in configDefault so we don\'t allocate data here.\n\n\tStorage: nil, // Set in configDefault so we don\'t allocate data here.\n}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>s});var i=n(96540);const l={},r=i.createContext(l);function d(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);