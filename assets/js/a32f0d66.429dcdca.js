"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[85367],{90040:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>g});var i=t(74848),s=t(28453);const a={id:"swagger",title:"Swagger"},r="Swagger",l={id:"swagger/swagger",title:"Swagger",description:"Release",source:"@site/contrib_versioned_docs/version-fiberi18n_v2.x.x/swagger/README.md",sourceDirName:"swagger",slug:"/swagger/",permalink:"/contrib/fiberi18n_v2.x.x/swagger/",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/contrib/edit/main/swagger/README.md",tags:[],version:"fiberi18n_v2.x.x",lastUpdatedAt:1717772537e3,frontMatter:{id:"swagger",title:"Swagger"},sidebar:"tutorialSidebar",previous:{title:"README",permalink:"/contrib/fiberi18n_v2.x.x/socketio/"},next:{title:"Websocket",permalink:"/contrib/fiberi18n_v2.x.x/websocket/"}},o={},g=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"swagger",children:"Swagger"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{src:"https://img.shields.io/github/v/tag/gofiber/contrib?filter=swagger*",alt:"Release"}),"\n",(0,i.jsx)(n.a,{href:"https://gofiber.io/discord",children:(0,i.jsx)(n.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,i.jsx)(n.img,{src:"https://github.com/gofiber/contrib/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,i.jsx)(n.img,{src:"https://github.com/gofiber/contrib/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,i.jsx)(n.img,{src:"https://github.com/gofiber/contrib/workflows/Linter/badge.svg",alt:"Linter"})]}),"\n",(0,i.jsxs)(n.p,{children:["Swagger middleware for ",(0,i.jsx)(n.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"}),". The middleware handles Swagger UI."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Note: Requires Go 1.18 and above"})}),"\n",(0,i.jsx)(n.h3,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#signatures",children:"Signatures"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#installation",children:"Installation"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#examples",children:"Examples"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#config",children:"Config"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#default-config",children:"Default Config"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"signatures",children:"Signatures"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"func New(config ...swagger.Config) fiber.Handler\n"})}),"\n",(0,i.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(n.p,{children:["Swagger is tested on the latests ",(0,i.jsx)(n.a,{href:"https://golang.org/dl/",children:"Go versions"})," with support for modules. So make sure to initialize one first if you didn't do that yet:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"go mod init github.com/<user>/<repo>\n"})}),"\n",(0,i.jsx)(n.p,{children:"And then install the swagger middleware:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"go get github.com/gofiber/contrib/swagger\n"})}),"\n",(0,i.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.p,{children:"Import the middleware package"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'import (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/contrib/swagger"\n)\n'})}),"\n",(0,i.jsx)(n.p,{children:"Using the default config:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"app.Use(swagger.New())\n"})}),"\n",(0,i.jsx)(n.p,{children:"Using a custom config:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'cfg := swagger.Config{\n    BasePath: "/",\n    FilePath: "./docs/swagger.json",\n    Path:     "swagger",\n    Title:    "Swagger API Docs",\n}\n\napp.Use(swagger.New(cfg))\n'})}),"\n",(0,i.jsx)(n.p,{children:"Using multiple instances of Swagger:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'// Create Swagger middleware for v1\n//\n// Swagger will be available at: /api/v1/docs\napp.Use(swagger.New(swagger.Config{\n    BasePath: "/api/v1/",\n    FilePath: "./docs/v1/swagger.json",\n    Path:     "docs",\n}))\n\n// Create Swagger middleware for v2\n//\n// Swagger will be available at: /api/v2/docs\napp.Use(swagger.New(swagger.Config{\n    BasePath: "/api/v2/",\n    FilePath: "./docs/v2/swagger.json",\n    Path:     "docs",\n}))\n'})}),"\n",(0,i.jsx)(n.h3,{id:"config",children:"Config"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"type Config struct {\n\t// Next defines a function to skip this middleware when returned true.\n\t//\n\t// Optional. Default: nil\n\tNext func(c *fiber.Ctx) bool\n\n\t// BasePath for the UI path\n\t//\n\t// Optional. Default: /\n\tBasePath string\n\n\t// FilePath for the swagger.json or swagger.yaml file\n\t//\n\t// Optional. Default: ./swagger.json\n\tFilePath string\n\n\t// Path combines with BasePath for the full UI path\n\t//\n\t// Optional. Default: docs\n\tPath string\n\n\t// Title for the documentation site\n\t//\n\t// Optional. Default: Fiber API documentation\n\tTitle string\n\n\t// CacheAge defines the max-age for the Cache-Control header in seconds.\n\t//\n\t// Optional. Default: 3600 (1 hour)\n\tCacheAge int\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"default-config",children:"Default Config"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'var ConfigDefault = Config{\n\tNext:     nil,\n\tBasePath: "/",\n\tFilePath: "./swagger.json",\n\tPath:     "docs",\n\tTitle:    "Fiber API documentation",\n\tCacheAge: 3600, // Default to 1 hour\n}\n'})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(96540);const s={},a=i.createContext(s);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);