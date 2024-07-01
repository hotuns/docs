"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[22080],{48339:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>x,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var l=r(74848),i=r(28453);const n={id:"fiberzerolog"},s="Fiberzerolog",o={id:"fiberzerolog/fiberzerolog",title:"Fiberzerolog",description:"Release",source:"@site/contrib_versioned_docs/version-fiberi18n_v1.x.x/fiberzerolog/README.md",sourceDirName:"fiberzerolog",slug:"/fiberzerolog/",permalink:"/contrib/fiberi18n_v1.x.x/fiberzerolog/",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/contrib/edit/main/fiberzerolog/README.md",tags:[],version:"fiberi18n_v1.x.x",lastUpdatedAt:1719838081e3,frontMatter:{id:"fiberzerolog"},sidebar:"tutorialSidebar",previous:{title:"Fiberzap",permalink:"/contrib/fiberi18n_v1.x.x/fiberzap/"},next:{title:"JWT",permalink:"/contrib/fiberi18n_v1.x.x/jwt/"}},d={},c=[{value:"Install",id:"install",level:2},{value:"Signature",id:"signature",level:2},{value:"Config",id:"config",level:2},{value:"Example",id:"example",level:2}];function g(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"fiberzerolog",children:"Fiberzerolog"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.img,{src:"https://img.shields.io/github/v/tag/gofiber/contrib?filter=fiberzerolog*",alt:"Release"}),"\n",(0,l.jsx)(t.a,{href:"https://gofiber.io/discord",children:(0,l.jsx)(t.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,l.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,l.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,l.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Linter/badge.svg",alt:"Linter"})]}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.a,{href:"https://zerolog.io/",children:"Zerolog"})," logging support for Fiber."]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:"Note: Requires Go 1.18 and above"})}),"\n",(0,l.jsx)(t.h2,{id:"install",children:"Install"}),"\n",(0,l.jsx)(t.p,{children:"This middleware supports Fiber v2."}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sh",children:"go get -u github.com/gofiber/fiber/v2\ngo get -u github.com/gofiber/contrib/fiberzerolog\ngo get -u github.com/rs/zerolog/log\n"})}),"\n",(0,l.jsx)(t.h2,{id:"signature",children:"Signature"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-go",children:"fiberzerolog.New(config ...fiberzerolog.Config) fiber.Handler\n"})}),"\n",(0,l.jsx)(t.h2,{id:"config",children:"Config"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Next"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"func(*Ctx) bool"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Define a function to skip this middleware when returned true"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"nil"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Logger"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"*zerolog.Logger"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Add custom zerolog logger."}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"zerolog.New(os.Stderr).With().Timestamp().Logger()"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"GetLogger"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"func(*fiber.Ctx) zerolog.Logger"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["Get custom zerolog logger, if it's defined the returned logger will replace the ",(0,l.jsx)(t.code,{children:"Logger"})," value."]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"nil"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Fields"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"[]string"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Add fields what you want see."}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:'[]string{"latency", "status", "method", "url", "error"}'})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Messages"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"[]string"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Custom response messages."}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:'[]string{"Server error", "Client error", "Success"}'})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Levels"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"[]zerolog.Level"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Custom response levels."}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"[]zerolog.Level{zerolog.ErrorLevel, zerolog.WarnLevel, zerolog.InfoLevel}"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"SkipURIs"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"[]string"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Skip logging these URI."}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"[]string{}"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"GetResBody"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"func(c *fiber.Ctx) []byte"}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["Define a function to get response body when return non-nil.",(0,l.jsx)("br",{}),"eg: When use compress middleware, resBody is unreadable. you can set GetResBody func to get readable resBody."]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"nil"})})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/contrib/fiberzerolog"\n    "github.com/rs/zerolog"\n)\n\nfunc main() {\n    app := fiber.New()\n    logger := zerolog.New(os.Stderr).With().Timestamp().Logger()\n\n    app.Use(fiberzerolog.New(fiberzerolog.Config{\n        Logger: &logger,\n    }))\n\n    app.Get("/", func (c *fiber.Ctx) error {\n        return c.SendString("Hello, World!")\n    })\n\n    if err := app.Listen(":3000"); err != nil {\n        logger.Fatal().Err(err).Msg("Fiber app error")\n    }\n}\n'})})]})}function x(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(g,{...e})}):g(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>o});var l=r(96540);const i={},n=l.createContext(i);function s(e){const t=l.useContext(n);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),l.createElement(n.Provider,{value:t},e.children)}}}]);