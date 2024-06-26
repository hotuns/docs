"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[70446],{19464:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>x,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var n=i(74848),r=i(28453);const l={id:"fibernewrelic",title:"Fibernewrelic"},s=void 0,c={id:"fibernewrelic/fibernewrelic",title:"Fibernewrelic",description:"Release",source:"@site/contrib_versioned_docs/version-opafiber_v1.x.x/fibernewrelic/README.md",sourceDirName:"fibernewrelic",slug:"/fibernewrelic/",permalink:"/contrib/opafiber_v1.x.x/fibernewrelic/",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/contrib/edit/main/fibernewrelic/README.md",tags:[],version:"opafiber_v1.x.x",lastUpdatedAt:1719410638e3,frontMatter:{id:"fibernewrelic",title:"Fibernewrelic"},sidebar:"tutorialSidebar",previous:{title:"Fiberi18n",permalink:"/contrib/opafiber_v1.x.x/fiberi18n/"},next:{title:"Fibersentry",permalink:"/contrib/opafiber_v1.x.x/fibersentry/"}},d={},o=[{value:"Install",id:"install",level:3},{value:"Signature",id:"signature",level:3},{value:"Config",id:"config",level:3},{value:"Usage",id:"usage",level:3},{value:"Usage with existing New Relic application",id:"usage-with-existing-new-relic-application",level:3}];function a(e){const t={a:"a",code:"code",del:"del",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{src:"https://img.shields.io/github/v/tag/gofiber/contrib?filter=fibernewrelic*",alt:"Release"}),"\n",(0,n.jsx)(t.a,{href:"https://gofiber.io/discord",children:(0,n.jsx)(t.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,n.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,n.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,n.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Linter/badge.svg",alt:"Linter"})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://github.com/newrelic/go-agent",children:"NewRelic"})," support for Fiber."]}),"\n",(0,n.jsx)(t.h3,{id:"install",children:"Install"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"go get -u github.com/gofiber/fiber/v2\ngo get -u github.com/gofiber/contrib/fibernewrelic\n"})}),"\n",(0,n.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:"fibernewrelic.New(config fibernewrelic.Config) fiber.Handler\n"})}),"\n",(0,n.jsx)(t.h3,{id:"config",children:"Config"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"License"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Required - New Relic License Key"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:'""'})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"AppName"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"New Relic Application Name"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"fiber-api"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Enabled"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"bool"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Enable/Disable New Relic"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"false"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.del,{children:"TransportType"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.del,{children:(0,n.jsx)(t.code,{children:"string"})})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,n.jsx)(t.del,{children:"Can be HTTP or HTTPS"})," (Deprecated)"]}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.del,{children:(0,n.jsx)(t.code,{children:'"HTTP"'})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Application"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"Application"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Existing New Relic App"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"nil"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"ErrorStatusCodeHandler"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"func(c *fiber.Ctx, err error) int"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"If you want to change newrelic status code, you can use it."}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"DefaultErrorStatusCodeHandler"})})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"github.com/gofiber/fiber/v2"\n\t"github.com/gofiber/contrib/fibernewrelic"\n)\n\nfunc main() {\n\tapp := fiber.New()\n\n\tapp.Get("/", func(ctx *fiber.Ctx) error {\n\t\treturn ctx.SendStatus(200)\n\t})\n\n\tcfg := fibernewrelic.Config{\n\t\tLicense:       "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF",\n\t\tAppName:       "MyCustomApi",\n\t\tEnabled:       true,\n\t}\n\n\tapp.Use(fibernewrelic.New(cfg))\n\n\tapp.Listen(":8080")\n}\n'})}),"\n",(0,n.jsx)(t.h3,{id:"usage-with-existing-new-relic-application",children:"Usage with existing New Relic application"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"github.com/gofiber/fiber/v2"\n\t"github.com/gofiber/contrib/fibernewrelic"\n\t"github.com/newrelic/go-agent/v3/newrelic"\n)\n\nfunc main() {\n\tnewrelicApp, err := newrelic.NewApplication(\n\t\tnewrelic.ConfigAppName("MyCustomApi"),\n\t\tnewrelic.ConfigLicense("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"),\n\t\tnewrelic.ConfigEnabled(true),\n\t)\n\n\tapp := fiber.New()\n\n\tapp.Get("/", func(ctx *fiber.Ctx) error {\n\t\treturn ctx.SendStatus(200)\n\t})\n\n\tcfg := fibernewrelic.Config{\n\t\tApplication:       newrelicApp\n\t}\n\n\tapp.Use(fibernewrelic.New(cfg))\n\n\tapp.Listen(":8080")\n}\n'})})]})}function x(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>c});var n=i(96540);const r={},l=n.createContext(r);function s(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);