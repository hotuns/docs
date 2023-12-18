"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[22554],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||f[m]||i;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},57410:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={id:"websocket"},o="Websocket",l={unversionedId:"websocket/websocket",id:"version-fibernewrelic_v1.x.x/websocket/websocket",title:"Websocket",description:"Release",source:"@site/contrib_versioned_docs/version-fibernewrelic_v1.x.x/websocket/README.md",sourceDirName:"websocket",slug:"/websocket/",permalink:"/contrib/fibernewrelic_v1.x.x/websocket/",draft:!1,editUrl:"https://github.com/gofiber/contrib/edit/main/websocket/README.md",tags:[],version:"fibernewrelic_v1.x.x",lastUpdatedAt:1702909263,formattedLastUpdatedAt:"Dec 18, 2023",frontMatter:{id:"websocket"},sidebar:"tutorialSidebar",previous:{title:"Swagger",permalink:"/contrib/fibernewrelic_v1.x.x/swagger/"}},s={},c=[{value:"Install",id:"install",level:2},{value:"Signatures",id:"signatures",level:2},{value:"Config",id:"config",level:2},{value:"Example",id:"example",level:2},{value:"Note with cache middleware",id:"note-with-cache-middleware",level:2},{value:"Note with recover middleware",id:"note-with-recover-middleware",level:2}],p={toc:c},d="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"websocket"},"Websocket"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/github/v/tag/gofiber/contrib?filter=websocket*",alt:"Release"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://gofiber.io/discord"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})),"\n",(0,a.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Linter/badge.svg",alt:"Linter"})),(0,a.kt)("p",null,"Based on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fasthttp/websocket"},"Fasthttp WebSocket")," for ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber")," with available ",(0,a.kt)("inlineCode",{parentName:"p"},"*fiber.Ctx")," methods like ",(0,a.kt)("a",{parentName:"p",href:"http://docs.gofiber.io/ctx#locals"},"Locals"),", ",(0,a.kt)("a",{parentName:"p",href:"http://docs.gofiber.io/ctx#params"},"Params"),", ",(0,a.kt)("a",{parentName:"p",href:"http://docs.gofiber.io/ctx#query"},"Query")," and ",(0,a.kt)("a",{parentName:"p",href:"http://docs.gofiber.io/ctx#cookies"},"Cookies"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note: Requires Go 1.18 and above")),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"go get -u github.com/gofiber/fiber/v2\ngo get -u github.com/gofiber/contrib/websocket\n")),(0,a.kt)("h2",{id:"signatures"},"Signatures"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func New(handler func(*websocket.Conn), config ...websocket.Config) fiber.Handler {\n")),(0,a.kt)("h2",{id:"config"},"Config"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Filter"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"func(*fiber.Ctx) bool")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Defines a function to skip middleware."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"nil"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"HandshakeTimeout"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"time.Duration")),(0,a.kt)("td",{parentName:"tr",align:"left"},"HandshakeTimeout specifies the duration for the handshake to complete."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"0")," (No timeout)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Subprotocols"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"[]string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Subprotocols specifies the client's requested subprotocols."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"nil"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Origins"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"[]string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Allowed Origins based on the Origin header. If empty, everything is allowed."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"nil"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ReadBufferSize"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"int")),(0,a.kt)("td",{parentName:"tr",align:"left"},"ReadBufferSize specifies the I/O buffer size in bytes for incoming messages."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"0")," (Use default size)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"WriteBufferSize"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"int")),(0,a.kt)("td",{parentName:"tr",align:"left"},"WriteBufferSize specifies the I/O buffer size in bytes for outgoing messages."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"0")," (Use default size)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"WriteBufferPool"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"websocket.BufferPool")),(0,a.kt)("td",{parentName:"tr",align:"left"},"WriteBufferPool is a pool of buffers for write operations."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"nil"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"EnableCompression"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"bool")),(0,a.kt)("td",{parentName:"tr",align:"left"},"EnableCompression specifies if the client should attempt to negotiate per message compression (RFC 7692)."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"false"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"RecoverHandler"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"func(*websocket.Conn) void")),(0,a.kt)("td",{parentName:"tr",align:"left"},"RecoverHandler is a panic handler function that recovers from panics."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"defaultRecover"))))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "log"\n\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/contrib/websocket"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    app.Use("/ws", func(c *fiber.Ctx) error {\n        // IsWebSocketUpgrade returns true if the client\n        // requested upgrade to the WebSocket protocol.\n        if websocket.IsWebSocketUpgrade(c) {\n            c.Locals("allowed", true)\n            return c.Next()\n        }\n        return fiber.ErrUpgradeRequired\n    })\n\n    app.Get("/ws/:id", websocket.New(func(c *websocket.Conn) {\n        // c.Locals is added to the *websocket.Conn\n        log.Println(c.Locals("allowed"))  // true\n        log.Println(c.Params("id"))       // 123\n        log.Println(c.Query("v"))         // 1.0\n        log.Println(c.Cookies("session")) // ""\n\n        // websocket.Conn bindings https://pkg.go.dev/github.com/fasthttp/websocket?tab=doc#pkg-index\n        var (\n            mt  int\n            msg []byte\n            err error\n        )\n        for {\n            if mt, msg, err = c.ReadMessage(); err != nil {\n                log.Println("read:", err)\n                break\n            }\n            log.Printf("recv: %s", msg)\n\n            if err = c.WriteMessage(mt, msg); err != nil {\n                log.Println("write:", err)\n                break\n            }\n        }\n\n    }))\n\n    log.Fatal(app.Listen(":3000"))\n    // Access the websocket server: ws://localhost:3000/ws/123?v=1.0\n    // https://www.websocket.org/echo.html\n}\n\n')),(0,a.kt)("h2",{id:"note-with-cache-middleware"},"Note with cache middleware"),(0,a.kt)("p",null,"If you get the error ",(0,a.kt)("inlineCode",{parentName:"p"},"websocket: bad handshake")," when using the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber/tree/master/middleware/cache"},"cache middleware"),", please use ",(0,a.kt)("inlineCode",{parentName:"p"},"config.Next")," to skip websocket path."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'app := fiber.New()\napp.Use(cache.New(cache.Config{\n        Next: func(c *fiber.Ctx) bool {\n            return strings.Contains(c.Route().Path, "/ws")\n        },\n}))\n\napp.Get("/ws/:id", websocket.New(func(c *websocket.Conn) {}))\n')),(0,a.kt)("h2",{id:"note-with-recover-middleware"},"Note with recover middleware"),(0,a.kt)("p",null,"For internal implementation reasons, currently recover middleware is not work with websocket middleware, please use ",(0,a.kt)("inlineCode",{parentName:"p"},"config.RecoverHandler")," to add recover handler to websocket endpoints.\nBy default, config ",(0,a.kt)("inlineCode",{parentName:"p"},"RecoverHandler")," is recovers from panic and writes stack trace to stderr, also returns a response that contains panic message in ",(0,a.kt)("strong",{parentName:"p"},"error")," field."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'app := fiber.New()\n\napp.Use(cache.New(cache.Config{\n    Next: func(c *fiber.Ctx) bool {\n        return strings.Contains(c.Route().Path, "/ws")\n    },\n}))\n\ncfg := Config{\n    RecoverHandler: func(conn *Conn) {\n        if err := recover(); err != nil {\n            conn.WriteJSON(fiber.Map{"customError": "error occurred"})\n        }\n    },\n}\n\napp.Get("/ws/:id", websocket.New(func(c *websocket.Conn) {}, cfg))\n\n\n')))}f.isMDXComponent=!0}}]);