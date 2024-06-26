"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[24271],{5605:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var i=s(74848),t=s(28453);const l={id:"compress"},r="Compress",o={id:"middleware/compress",title:"Compress",description:"Compression middleware for Fiber that will compress the response using gzip, deflate, brotli, and zstd compression depending on the Accept-Encoding header.",source:"@site/docs/core/middleware/compress.md",sourceDirName:"middleware",slug:"/middleware/compress",permalink:"/next/middleware/compress",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/fiber/edit/main/docs/middleware/compress.md",tags:[],version:"current",lastUpdatedAt:1719410638e3,frontMatter:{id:"compress"},sidebar:"tutorialSidebar",previous:{title:"Cache",permalink:"/next/middleware/cache"},next:{title:"CORS",permalink:"/next/middleware/cors"}},d={},c=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Config",id:"config-1",level:3},{value:"Default Config",id:"default-config",level:2},{value:"Constants",id:"constants",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"compress",children:"Compress"}),"\n",(0,i.jsxs)(n.p,{children:["Compression middleware for ",(0,i.jsx)(n.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," that will compress the response using ",(0,i.jsx)(n.code,{children:"gzip"}),", ",(0,i.jsx)(n.code,{children:"deflate"}),", ",(0,i.jsx)(n.code,{children:"brotli"}),", and ",(0,i.jsx)(n.code,{children:"zstd"})," compression depending on the ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding",children:"Accept-Encoding"})," header."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The compression middleware refrains from compressing bodies that are smaller than 200 bytes. This decision is based on the observation that, in such cases, the compressed size is likely to exceed the original size, making compression inefficient. ",(0,i.jsx)(n.a,{href:"https://github.com/valyala/fasthttp/blob/497922a21ef4b314f393887e9c6147b8c3e3eda4/http.go#L1713-L1715",children:"more"})]})}),"\n",(0,i.jsx)(n.h2,{id:"signatures",children:"Signatures"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"func New(config ...Config) fiber.Handler\n"})}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.p,{children:"Import the middleware package that is part of the Fiber web framework"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'import (\n  "github.com/gofiber/fiber/v3"\n  "github.com/gofiber/fiber/v3/middleware/compress"\n)\n'})}),"\n",(0,i.jsx)(n.p,{children:"After you initiate your Fiber app, you can use the following possibilities:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'// Initialize default config\napp.Use(compress.New())\n\n// Or extend your config for customization\napp.Use(compress.New(compress.Config{\n    Level: compress.LevelBestSpeed, // 1\n}))\n\n// Skip middleware for specific routes\napp.Use(compress.New(compress.Config{\n  Next:  func(c fiber.Ctx) bool {\n    return c.Path() == "/dont_compress"\n  },\n  Level: compress.LevelBestSpeed, // 1\n}))\n'})}),"\n",(0,i.jsx)(n.h2,{id:"config",children:"Config"}),"\n",(0,i.jsx)(n.h3,{id:"config-1",children:"Config"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Property"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Description"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Next"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"func(fiber.Ctx) bool"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Next defines a function to skip this middleware when returned true."}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"nil"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Level"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"Level"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Level determines the compression algorithm."}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"LevelDefault (0)"})})]})]})]}),"\n",(0,i.jsx)(n.p,{children:'Possible values for the "Level" field are:'}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"LevelDisabled (-1)"}),": Compression is disabled."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"LevelDefault (0)"}),": Default compression level."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"LevelBestSpeed (1)"}),": Best compression speed."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"LevelBestCompression (2)"}),": Best compression."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"default-config",children:"Default Config"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"var ConfigDefault = Config{\n    Next:  nil,\n    Level: LevelDefault,\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"constants",children:"Constants"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"// Compression levels\nconst (\n    LevelDisabled        = -1\n    LevelDefault         = 0\n    LevelBestSpeed       = 1\n    LevelBestCompression = 2\n)\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var i=s(96540);const t={},l=i.createContext(t);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);