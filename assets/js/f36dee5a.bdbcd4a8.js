"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[85460],{63467:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>o});var n=r(74848),l=r(28453);const a={id:"earlydata"},i="EarlyData",s={id:"api/middleware/earlydata",title:"EarlyData",description:'The Early Data middleware for Fiber adds support for TLS 1.3\'s early data ("0-RTT") feature.',source:"@site/versioned_docs/version-v2.x/api/middleware/earlydata.md",sourceDirName:"api/middleware",slug:"/api/middleware/earlydata",permalink:"/api/middleware/earlydata",draft:!1,unlisted:!1,tags:[],version:"v2.x",lastUpdatedAt:1717658677e3,frontMatter:{id:"earlydata"},sidebar:"tutorialSidebar",previous:{title:"CSRF",permalink:"/api/middleware/csrf"},next:{title:"Encrypt Cookie",permalink:"/api/middleware/encryptcookie"}},d={},o=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2},{value:"Constants",id:"constants",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"earlydata",children:"EarlyData"}),"\n",(0,n.jsxs)(t.p,{children:["The Early Data middleware for ",(0,n.jsx)(t.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"}),' adds support for TLS 1.3\'s early data ("0-RTT") feature.\nCiting ',(0,n.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc8446#section-2-3",children:"RFC 8446"}),', when a client and server share a PSK, TLS 1.3 allows clients to send data on the first flight ("early data") to speed up the request, effectively reducing the regular 1-RTT request to a 0-RTT request.']}),"\n",(0,n.jsxs)(t.p,{children:["Make sure to enable fiber's ",(0,n.jsx)(t.code,{children:"EnableTrustedProxyCheck"})," config option before using this middleware in order to not trust bogus HTTP request headers of the client."]}),"\n",(0,n.jsxs)(t.p,{children:["Also be aware that enabling support for early data in your reverse proxy (e.g. nginx, as done with a simple ",(0,n.jsx)(t.code,{children:"ssl_early_data on;"}),") makes requests replayable. Refer to the following documents before continuing:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc8446#section-8",children:"https://datatracker.ietf.org/doc/html/rfc8446#section-8"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://blog.trailofbits.com/2019/03/25/what-application-developers-need-to-know-about-tls-early-data-0rtt/",children:"https://blog.trailofbits.com/2019/03/25/what-application-developers-need-to-know-about-tls-early-data-0rtt/"})}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["By default, this middleware allows early data requests on safe HTTP request methods only and rejects the request otherwise, i.e. aborts the request before executing your handler. This behavior can be controlled by the ",(0,n.jsx)(t.code,{children:"AllowEarlyData"})," config option.\nSafe HTTP methods \u2014 ",(0,n.jsx)(t.code,{children:"GET"}),", ",(0,n.jsx)(t.code,{children:"HEAD"}),", ",(0,n.jsx)(t.code,{children:"OPTIONS"})," and ",(0,n.jsx)(t.code,{children:"TRACE"})," \u2014 should not modify a state on the server."]}),"\n",(0,n.jsx)(t.h2,{id:"signatures",children:"Signatures"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:"func New(config ...Config) fiber.Handler\n"})}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.p,{children:"Import the middleware package that is part of the Fiber web framework"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'import (\n\t"github.com/gofiber/fiber/v2"\n\t"github.com/gofiber/fiber/v2/middleware/earlydata"\n)\n'})}),"\n",(0,n.jsx)(t.p,{children:"After you initiate your Fiber app, you can use the following possibilities:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:"// Initialize default config\napp.Use(earlydata.New())\n\n// Or extend your config for customization\napp.Use(earlydata.New(earlydata.Config{\n\tError: fiber.ErrTooEarly,\n\t// ...\n}))\n"})}),"\n",(0,n.jsx)(t.h2,{id:"config",children:"Config"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Next"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"func(*fiber.Ctx) bool"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Next defines a function to skip this middleware when returned true."}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"nil"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"IsEarlyData"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"func(*fiber.Ctx) bool"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"IsEarlyData returns whether the request is an early-data request."}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:'Function checking if "Early-Data" header equals "1"'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"AllowEarlyData"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"func(*fiber.Ctx) bool"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"AllowEarlyData returns whether the early-data request should be allowed or rejected."}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Function rejecting on unsafe and allowing safe methods"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Error"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"error"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Error is returned in case an early-data request is rejected."}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"fiber.ErrTooEarly"})})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"default-config",children:"Default Config"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:"var ConfigDefault = Config{\n\tIsEarlyData: func(c *fiber.Ctx) bool {\n\t\treturn c.Get(DefaultHeaderName) == DefaultHeaderTrueValue\n\t},\n\n\tAllowEarlyData: func(c *fiber.Ctx) bool {\n\t\treturn fiber.IsMethodSafe(c.Method())\n\t},\n\n\tError: fiber.ErrTooEarly,\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"constants",children:"Constants"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'const (\n\tDefaultHeaderName      = "Early-Data"\n\tDefaultHeaderTrueValue = "1"\n)\n'})})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>s});var n=r(96540);const l={},a=n.createContext(l);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);