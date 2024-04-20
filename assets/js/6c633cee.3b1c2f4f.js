"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[15667],{58958:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=n(74848),i=n(28453);const s={id:"fibersentry"},o="Fibersentry",c={id:"fibersentry/fibersentry",title:"Fibersentry",description:"Release",source:"@site/contrib_versioned_docs/version-swagger_v1.x.x/fibersentry/README.md",sourceDirName:"fibersentry",slug:"/fibersentry/",permalink:"/contrib/swagger_v1.x.x/fibersentry/",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/contrib/edit/main/fibersentry/README.md",tags:[],version:"swagger_v1.x.x",lastUpdatedAt:1713623895e3,frontMatter:{id:"fibersentry"},sidebar:"tutorialSidebar",previous:{title:"Fibernewrelic",permalink:"/contrib/swagger_v1.x.x/fibernewrelic/"},next:{title:"Fiberzap",permalink:"/contrib/swagger_v1.x.x/fiberzap/"}},l={},d=[{value:"Install",id:"install",level:2},{value:"Signature",id:"signature",level:2},{value:"Config",id:"config",level:2},{value:"Usage",id:"usage",level:2},{value:"Accessing Context in <code>BeforeSend</code> callback",id:"accessing-context-in-beforesend-callback",level:2}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"fibersentry",children:"Fibersentry"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{src:"https://img.shields.io/github/v/tag/gofiber/contrib?filter=fibersentry*",alt:"Release"}),"\n",(0,r.jsx)(t.a,{href:"https://gofiber.io/discord",children:(0,r.jsx)(t.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,r.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,r.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,r.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Linter/badge.svg",alt:"Linter"})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://sentry.io/",children:"Sentry"})," support for Fiber."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Note: Requires Go 1.18 and above"})}),"\n",(0,r.jsx)(t.h2,{id:"install",children:"Install"}),"\n",(0,r.jsx)(t.p,{children:"This middleware supports Fiber v2."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"go get -u github.com/gofiber/fiber/v2\ngo get -u github.com/gofiber/contrib/fibersentry\ngo get -u github.com/getsentry/sentry-go\n"})}),"\n",(0,r.jsx)(t.h2,{id:"signature",children:"Signature"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"fibersentry.New(config ...fibersentry.Config) fiber.Handler\n"})}),"\n",(0,r.jsx)(t.h2,{id:"config",children:"Config"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Repanic"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"bool"})}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["Repanic configures whether Sentry should repanic after recovery. Set to true, if ",(0,r.jsx)(t.a,{href:"https://github.com/gofiber/fiber/tree/master/middleware/recover",children:"Recover"})," middleware is used."]}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"false"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"WaitForDelivery"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"bool"})}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["WaitForDelivery configures whether you want to block the request before moving forward with the response. If ",(0,r.jsx)(t.a,{href:"https://github.com/gofiber/fiber/tree/master/middleware/recover",children:"Recover"})," middleware is used, it's safe to either skip this option or set it to false."]}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"false"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Timeout"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"time.Duration"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Timeout for the event delivery requests."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"time.Second * 2"})})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"fibersentry"})," attaches an instance of ",(0,r.jsx)(t.code,{children:"*sentry.Hub"})," (",(0,r.jsx)(t.a,{href:"https://godoc.org/github.com/getsentry/sentry-go#Hub",children:"https://godoc.org/github.com/getsentry/sentry-go#Hub"}),") to the request's context, which makes it available throughout the rest of the request's lifetime.\nYou can access it by using the ",(0,r.jsx)(t.code,{children:"fibersentry.GetHubFromContext()"})," method on the context itself in any of your proceeding middleware and routes.\nAnd it should be used instead of the global ",(0,r.jsx)(t.code,{children:"sentry.CaptureMessage"}),", ",(0,r.jsx)(t.code,{children:"sentry.CaptureException"}),", or any other calls, as it keeps the separation of data between the requests."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.strong,{children:["Keep in mind that ",(0,r.jsx)(t.code,{children:"*sentry.Hub"})," won't be available in middleware attached before to ",(0,r.jsx)(t.code,{children:"fibersentry"}),"!"]})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"fmt"\n\t"log"\n\n\t"github.com/getsentry/sentry-go"\n\t"github.com/gofiber/contrib/fibersentry"\n\t"github.com/gofiber/fiber/v2"\n\t"github.com/gofiber/fiber/v2/utils"\n)\n\nfunc main() {\n\t_ = sentry.Init(sentry.ClientOptions{\n\t\tDsn: "",\n\t\tBeforeSend: func(event *sentry.Event, hint *sentry.EventHint) *sentry.Event {\n\t\t\tif hint.Context != nil {\n\t\t\t\tif c, ok := hint.Context.Value(sentry.RequestContextKey).(*fiber.Ctx); ok {\n\t\t\t\t\t// You have access to the original Context if it panicked\n\t\t\t\t\tfmt.Println(utils.ImmutableString(c.Hostname()))\n\t\t\t\t}\n\t\t\t}\n\t\t\tfmt.Println(event)\n\t\t\treturn event\n\t\t},\n\t\tDebug:            true,\n\t\tAttachStacktrace: true,\n\t})\n\n\tapp := fiber.New()\n\n\tapp.Use(fibersentry.New(fibersentry.Config{\n\t\tRepanic:         true,\n\t\tWaitForDelivery: true,\n\t}))\n\n\tenhanceSentryEvent := func(c *fiber.Ctx) error {\n\t\tif hub := fibersentry.GetHubFromContext(c); hub != nil {\n\t\t\thub.Scope().SetTag("someRandomTag", "maybeYouNeedIt")\n\t\t}\n\t\treturn c.Next()\n\t}\n\n\tapp.All("/foo", enhanceSentryEvent, func(c *fiber.Ctx) error {\n\t\tpanic("y tho")\n\t})\n\n\tapp.All("/", func(c *fiber.Ctx) error {\n\t\tif hub := fibersentry.GetHubFromContext(c); hub != nil {\n\t\t\thub.WithScope(func(scope *sentry.Scope) {\n\t\t\t\tscope.SetExtra("unwantedQuery", "someQueryDataMaybe")\n\t\t\t\thub.CaptureMessage("User provided unwanted query string, but we recovered just fine")\n\t\t\t})\n\t\t}\n\t\treturn c.SendStatus(fiber.StatusOK)\n\t})\n\n\tlog.Fatal(app.Listen(":3000"))\n}\n'})}),"\n",(0,r.jsxs)(t.h2,{id:"accessing-context-in-beforesend-callback",children:["Accessing Context in ",(0,r.jsx)(t.code,{children:"BeforeSend"})," callback"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'sentry.Init(sentry.ClientOptions{\n\tDsn: "your-public-dsn",\n\tBeforeSend: func(event *sentry.Event, hint *sentry.EventHint) *sentry.Event {\n\t\tif hint.Context != nil {\n\t\t\tif c, ok := hint.Context.Value(sentry.RequestContextKey).(*fiber.Ctx); ok {\n\t\t\t\t// You have access to the original Context if it panicked\n\t\t\t\tfmt.Println(c.Hostname())\n\t\t\t}\n\t\t}\n\t\treturn event\n\t},\n})\n'})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var r=n(96540);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);