"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[36091],{587:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>d,toc:()=>o});var l=s(74848),i=s(28453);const n={id:"static"},r="Static",d={id:"middleware/static",title:"Static",description:"Static middleware for Fiber that serves static files such as images, CSS, and JavaScript.",source:"@site/docs/core/middleware/static.md",sourceDirName:"middleware",slug:"/middleware/static",permalink:"/next/middleware/static",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/fiber/edit/main/docs/middleware/static.md",tags:[],version:"current",lastUpdatedAt:1718889343e3,frontMatter:{id:"static"},sidebar:"tutorialSidebar",previous:{title:"Skip",permalink:"/next/middleware/skip"},next:{title:"Timeout",permalink:"/next/middleware/timeout"}},c={},o=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Serving files from a directory",id:"serving-files-from-a-directory",level:3},{value:"Serving files from a directory with Use",id:"serving-files-from-a-directory-with-use",level:3},{value:"Serving a file",id:"serving-a-file",level:3},{value:"Serving files using os.DirFS",id:"serving-files-using-osdirfs",level:3},{value:"Serving files using embed.FS",id:"serving-files-using-embedfs",level:3},{value:"SPA (Single Page Application)",id:"spa-single-page-application",level:3},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}];function a(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components},{Details:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"static",children:"Static"}),"\n",(0,l.jsxs)(t.p,{children:["Static middleware for Fiber that serves static files such as ",(0,l.jsx)(t.strong,{children:"images"}),", ",(0,l.jsx)(t.strong,{children:"CSS,"})," and ",(0,l.jsx)(t.strong,{children:"JavaScript"}),"."]}),"\n",(0,l.jsx)(t.admonition,{type:"info",children:(0,l.jsxs)(t.p,{children:["By default, ",(0,l.jsx)(t.strong,{children:"Static"})," will serve ",(0,l.jsx)(t.code,{children:"index.html"})," files in response to a request on a directory. You can change it from ",(0,l.jsx)(t.a,{href:"#config",children:"Config"}),"`"]})}),"\n",(0,l.jsx)(t.h2,{id:"signatures",children:"Signatures"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-go",children:"func New(root string, cfg ...Config) fiber.Handler\n"})}),"\n",(0,l.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsxs)(t.p,{children:["Import the middleware package that is part of the ",(0,l.jsx)(t.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," web framework"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-go",children:'import(\n    "github.com/gofiber/fiber/v3"\n    "github.com/gofiber/fiber/v3/middleware/static"\n)\n'})}),"\n",(0,l.jsx)(t.h3,{id:"serving-files-from-a-directory",children:"Serving files from a directory"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-go",children:'app.Get("/*", static.New("./public"))\n'})}),"\n",(0,l.jsxs)(s,{children:[(0,l.jsx)("summary",{children:"Test"}),(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sh",children:"curl http://localhost:3000/hello.html\ncurl http://localhost:3000/css/style.css\n"})})]}),"\n",(0,l.jsx)(t.h3,{id:"serving-files-from-a-directory-with-use",children:"Serving files from a directory with Use"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-go",children:'app.Use("/", static.New("./public"))\n'})}),"\n",(0,l.jsxs)(s,{children:[(0,l.jsx)("summary",{children:"Test"}),(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sh",children:"curl http://localhost:3000/hello.html\ncurl http://localhost:3000/css/style.css\n"})})]}),"\n",(0,l.jsx)(t.h3,{id:"serving-a-file",children:"Serving a file"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-go",children:'app.Use("/static", static.New("./public/hello.html"))\n'})}),"\n",(0,l.jsxs)(s,{children:[(0,l.jsx)("summary",{children:"Test"}),(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sh",children:"curl http://localhost:3000/static # will show hello.html\ncurl http://localhost:3000/static/john/doee # will show hello.html\n"})})]}),"\n",(0,l.jsx)(t.h3,{id:"serving-files-using-osdirfs",children:"Serving files using os.DirFS"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-go",children:'app.Get("/files*", static.New("", static.Config{\n    FS:     os.DirFS("files"),\n    Browse: true,\n}))\n'})}),"\n",(0,l.jsxs)(s,{children:[(0,l.jsx)("summary",{children:"Test"}),(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sh",children:"curl http://localhost:3000/files/css/style.css\ncurl http://localhost:3000/files/index.html\n"})})]}),"\n",(0,l.jsx)(t.h3,{id:"serving-files-using-embedfs",children:"Serving files using embed.FS"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-go",children:'//go:embed path/to/files\nvar myfiles embed.FS\n\napp.Get("/files*", static.New("", static.Config{\n    FS:     myfiles,\n    Browse: true,\n}))\n'})}),"\n",(0,l.jsxs)(s,{children:[(0,l.jsx)("summary",{children:"Test"}),(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sh",children:"curl http://localhost:3000/files/css/style.css\ncurl http://localhost:3000/files/index.html\n"})})]}),"\n",(0,l.jsx)(t.h3,{id:"spa-single-page-application",children:"SPA (Single Page Application)"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-go",children:'app.Use("/web", static.New("", static.Config{\n    FS: os.DirFS("dist"),\n}))\n\napp.Get("/web*", func(c fiber.Ctx) error {\n    return c.SendFile("dist/index.html")\n})\n'})}),"\n",(0,l.jsxs)(s,{children:[(0,l.jsx)("summary",{children:"Test"}),(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sh",children:"curl http://localhost:3000/web/css/style.css\ncurl http://localhost:3000/web/index.html\ncurl http://localhost:3000/web\n"})})]}),"\n",(0,l.jsx)(t.admonition,{type:"caution",children:(0,l.jsxs)(t.p,{children:["To define static routes using ",(0,l.jsx)(t.code,{children:"Get"}),", append the wildcard (",(0,l.jsx)(t.code,{children:"*"}),") operator at the end of the route."]})}),"\n",(0,l.jsx)(t.h2,{id:"config",children:"Config"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Next"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"func(fiber.Ctx) bool"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Next defines a function to skip this middleware when returned true."}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"nil"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"FS"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"fs.FS"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["FS is the file system to serve the static files from.",(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),"You can use interfaces compatible with fs.FS like embed.FS, os.DirFS etc."]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"nil"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Compress"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"bool"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["When set to true, the server tries minimizing CPU usage by caching compressed files.",(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),"This works differently than the github.com/gofiber/compression middleware."]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"false"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"ByteRange"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"bool"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"When set to true, enables byte range requests."}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"false"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Browse"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"bool"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"When set to true, enables directory browsing."}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"false"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Download"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"bool"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"When set to true, enables direct download."}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"false"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"IndexNames"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"[]string"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"The names of the index files for serving a directory."}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:'[]string{"index.html"}'})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"CacheDuration"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"string"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["Expiration duration for inactive file handlers.",(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),"Use a negative time.Duration to disable it."]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"10 * time.Second"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"MaxAge"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"int"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"The value for the Cache-Control HTTP-header that is set on the file response. MaxAge is defined in seconds."}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"0"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"ModifyResponse"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"fiber.Handler"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"ModifyResponse defines a function that allows you to alter the response."}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"nil"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"NotFoundHandler"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"fiber.Handler"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"NotFoundHandler defines a function to handle when the path is not found."}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"nil"})})]})]})]}),"\n",(0,l.jsx)(t.admonition,{type:"info",children:(0,l.jsxs)(t.p,{children:["You can set ",(0,l.jsx)(t.code,{children:"CacheDuration"})," config property to ",(0,l.jsx)(t.code,{children:"-1"})," to disable caching."]})}),"\n",(0,l.jsx)(t.h2,{id:"default-config",children:"Default Config"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-go",children:'var ConfigDefault = Config{\n  Index:         []string{"index.html"},\n  CacheDuration: 10 * time.Second,\n}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>d});var l=s(96540);const i={},n=l.createContext(i);function r(e){const t=l.useContext(n);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),l.createElement(n.Provider,{value:t},e.children)}}}]);