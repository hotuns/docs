"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[31100],{45362:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>x,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var i=n(74848),r=n(28453);const l={id:"opafiber",title:"Opafiber"},s=void 0,o={id:"opafiber/opafiber",title:"Opafiber",description:"Release",source:"@site/contrib_versioned_docs/version-fiberi18n_v0.x.x/opafiber/README.md",sourceDirName:"opafiber",slug:"/opafiber/",permalink:"/contrib/fiberi18n_v0.x.x/opafiber/",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/contrib/edit/main/opafiber/README.md",tags:[],version:"fiberi18n_v0.x.x",lastUpdatedAt:1720439921e3,frontMatter:{id:"opafiber",title:"Opafiber"},sidebar:"tutorialSidebar",previous:{title:"JWT",permalink:"/contrib/fiberi18n_v0.x.x/jwt/"},next:{title:"Otelfiber",permalink:"/contrib/fiberi18n_v0.x.x/otelfiber/"}},d={},c=[{value:"Install",id:"install",level:3},{value:"Signature",id:"signature",level:3},{value:"Config",id:"config",level:3},{value:"Types",id:"types",level:3},{value:"Usage",id:"usage",level:3}];function a(e){const t={a:"a",code:"code",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{src:"https://img.shields.io/github/v/tag/gofiber/contrib?filter=opafiber*",alt:"Release"}),"\n",(0,i.jsx)(t.a,{href:"https://gofiber.io/discord",children:(0,i.jsx)(t.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,i.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,i.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,i.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Linter/badge.svg",alt:"Linter"})]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://github.com/open-policy-agent/opa",children:"Open Policy Agent"})," support for Fiber."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Note: Requires Go 1.18 and above"})}),"\n",(0,i.jsx)(t.h3,{id:"install",children:"Install"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"go get -u github.com/gofiber/fiber/v2\ngo get -u github.com/gofiber/contrib/opafiber\n"})}),"\n",(0,i.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"opafiber.New(config opafiber.Config) fiber.Handler\n\n"})}),"\n",(0,i.jsx)(t.h3,{id:"config",children:"Config"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"RegoQuery"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Required - Rego query"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"RegoPolicy"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"io.Reader"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Required - Rego policy"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"IncludeQueryString"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"bool"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Include query string as input to rego policy"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"false"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"DeniedStatusCode"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"int"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Http status code to return when policy denies request"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"400"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"DeniedResponseMessage"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Http response body text to return when policy denies request"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:'""'})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"IncludeHeaders"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"[]string"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Include headers as input to rego policy"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"InputCreationMethod"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"InputCreationFunc"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Use your own function to provide input for OPA"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"func defaultInput(ctx *fiber.Ctx) (map[string]interface{}, error)"})})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"types",children:"Types"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"type InputCreationFunc func(c *fiber.Ctx) (map[string]interface{}, error)\n"})}),"\n",(0,i.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(t.p,{children:"OPA Fiber middleware sends the following example data to the policy engine as input:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "method": "GET",\n  "path": "/somePath",\n  "query": {\n    "name": ["John Doe"]\n  },\n  "headers": {\n    "Accept": "application/json",\n    "Content-Type": "application/json"\n  }\n}\n'})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"github.com/gofiber/fiber/v2"\n\t"github.com/gofiber/contrib/opafiber"\n)\n\nfunc main() {\n\tapp := fiber.New()\n\tmodule := `\npackage example.authz\n\ndefault allow := false\n\nallow {\n\tinput.method == "GET"\n}\n`\n\n\tcfg := opafiber.Config{\n\t\tRegoQuery:             "data.example.authz.allow",\n\t\tRegoPolicy:            bytes.NewBufferString(module),\n\t\tIncludeQueryString:    true,\n\t\tDeniedStatusCode:      fiber.StatusForbidden,\n\t\tDeniedResponseMessage: "status forbidden",\n\t\tIncludeHeaders:        []string{"Authorization"},\n\t\tInputCreationMethod:   func (ctx *fiber.Ctx) (map[string]interface{}, error) {\n            return map[string]interface{}{\n                "method": ctx.Method(),\n                "path": ctx.Path(),\n            }, nil\n        },\n\t}\n\tapp.Use(opafiber.New(cfg))\n\n\tapp.Get("/", func(ctx *fiber.Ctx) error {\n\t\treturn ctx.SendStatus(200)\n\t})\n\n\tapp.Listen(":8080")\n}\n'})})]})}function x(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var i=n(96540);const r={},l=i.createContext(r);function s(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);