"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[38087],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},b="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=l(r),g=o,f=b["".concat(s,".").concat(g)]||b[g]||d[g]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[b]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},53588:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={id:"websocket",title:"Websocket"},i=void 0,c={unversionedId:"websocket/websocket",id:"version-paseto_v1.x.x/websocket/websocket",title:"Websocket",description:"Release",source:"@site/contrib_versioned_docs/version-paseto_v1.x.x/websocket/README.md",sourceDirName:"websocket",slug:"/websocket/",permalink:"/contrib/paseto_v1.x.x/websocket/",draft:!1,editUrl:"https://github.com/gofiber/contrib/edit/main/websocket/README.md",tags:[],version:"paseto_v1.x.x",lastUpdatedAt:1689865709,formattedLastUpdatedAt:"Jul 20, 2023",frontMatter:{id:"websocket",title:"Websocket"},sidebar:"tutorialSidebar",previous:{title:"Swagger",permalink:"/contrib/paseto_v1.x.x/swagger/"}},s={},l=[{value:"Install",id:"install",level:3},{value:"Example",id:"example",level:3},{value:"Note with cache middleware",id:"note-with-cache-middleware",level:3}],p={toc:l},b="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(b,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/github/v/tag/gofiber/contrib?filter=websocket*",alt:"Release"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://gofiber.io/discord"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})),"\n",(0,o.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Linter/badge.svg",alt:"Linter"})),(0,o.kt)("p",null,"Based on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fasthttp/websocket"},"Fasthttp WebSocket")," for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber")," with available ",(0,o.kt)("inlineCode",{parentName:"p"},"*fiber.Ctx")," methods like ",(0,o.kt)("a",{parentName:"p",href:"http://docs.gofiber.io/ctx#locals"},"Locals"),", ",(0,o.kt)("a",{parentName:"p",href:"http://docs.gofiber.io/ctx#params"},"Params"),", ",(0,o.kt)("a",{parentName:"p",href:"http://docs.gofiber.io/ctx#query"},"Query")," and ",(0,o.kt)("a",{parentName:"p",href:"http://docs.gofiber.io/ctx#cookies"},"Cookies"),"."),(0,o.kt)("h3",{id:"install"},"Install"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"go get -u github.com/gofiber/fiber/v2\ngo get -u github.com/gofiber/contrib/websocket\n")),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "log"\n\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/contrib/websocket"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    app.Use("/ws", func(c *fiber.Ctx) error {\n        // IsWebSocketUpgrade returns true if the client\n        // requested upgrade to the WebSocket protocol.\n        if websocket.IsWebSocketUpgrade(c) {\n            c.Locals("allowed", true)\n            return c.Next()\n        }\n        return fiber.ErrUpgradeRequired\n    })\n\n    app.Get("/ws/:id", websocket.New(func(c *websocket.Conn) {\n        // c.Locals is added to the *websocket.Conn\n        log.Println(c.Locals("allowed"))  // true\n        log.Println(c.Params("id"))       // 123\n        log.Println(c.Query("v"))         // 1.0\n        log.Println(c.Cookies("session")) // ""\n\n        // websocket.Conn bindings https://pkg.go.dev/github.com/fasthttp/websocket?tab=doc#pkg-index\n        var (\n            mt  int\n            msg []byte\n            err error\n        )\n        for {\n            if mt, msg, err = c.ReadMessage(); err != nil {\n                log.Println("read:", err)\n                break\n            }\n            log.Printf("recv: %s", msg)\n\n            if err = c.WriteMessage(mt, msg); err != nil {\n                log.Println("write:", err)\n                break\n            }\n        }\n\n    }))\n\n    log.Fatal(app.Listen(":3000"))\n    // Access the websocket server: ws://localhost:3000/ws/123?v=1.0\n    // https://www.websocket.org/echo.html\n}\n\n')),(0,o.kt)("h3",{id:"note-with-cache-middleware"},"Note with cache middleware"),(0,o.kt)("p",null,"If you get the error ",(0,o.kt)("inlineCode",{parentName:"p"},"websocket: bad handshake")," when using the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber/tree/master/middleware/cache"},"cache middleware"),", please use ",(0,o.kt)("inlineCode",{parentName:"p"},"config.Next")," to skip websocket path."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'app := fiber.New()\napp.Use(cache.New(cache.Config{\n        Next: func(c *fiber.Ctx) bool {\n            return strings.Contains(c.Route().Path, "/ws")\n        },\n}))\n\napp.Get("/ws/:id", websocket.New(func(c *websocket.Conn) {}))\n')))}d.isMDXComponent=!0}}]);