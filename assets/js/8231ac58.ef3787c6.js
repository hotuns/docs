"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[33197],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(r),v=a,g=d["".concat(l,".").concat(v)]||d[v]||c[v]||i;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=v;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},23229:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={id:"grouping",title:"\ud83c\udfad Grouping",sidebar_position:2},o=void 0,p={unversionedId:"guide/grouping",id:"version-v2.x/guide/grouping",title:"\ud83c\udfad Grouping",description:"In general, the Group functionality in Fiber behaves similarly to ExpressJS. Groups are declared virtually and all routes declared within the group are flattened into a single list with a prefix, which is then checked by the framework in the order it was declared. This means that the behavior of Group in Fiber is identical to that of ExpressJS.",source:"@site/versioned_docs/version-v2.x/guide/grouping.md",sourceDirName:"guide",slug:"/guide/grouping",permalink:"/guide/grouping",draft:!1,tags:[],version:"v2.x",lastUpdatedAt:1704725601,formattedLastUpdatedAt:"Jan 8, 2024",sidebarPosition:2,frontMatter:{id:"grouping",title:"\ud83c\udfad Grouping",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd0c Routing",permalink:"/guide/routing"},next:{title:"\ud83d\udcdd Templates",permalink:"/guide/templates"}},l={},s=[{value:"Paths",id:"paths",level:2},{value:"Group Handlers",id:"group-handlers",level:2}],u={toc:s},d="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"In general, the Group functionality in Fiber behaves similarly to ExpressJS. Groups are declared virtually and all routes declared within the group are flattened into a single list with a prefix, which is then checked by the framework in the order it was declared. This means that the behavior of Group in Fiber is identical to that of ExpressJS.")),(0,a.kt)("h2",{id:"paths"},"Paths"),(0,a.kt)("p",null,"Like ",(0,a.kt)("strong",{parentName:"p"},"Routing"),", groups can also have paths that belong to a cluster."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n  app := fiber.New()\n\n  api := app.Group("/api", middleware) // /api\n\n  v1 := api.Group("/v1", middleware)   // /api/v1\n  v1.Get("/list", handler)             // /api/v1/list\n  v1.Get("/user", handler)             // /api/v1/user\n\n  v2 := api.Group("/v2", middleware)   // /api/v2\n  v2.Get("/list", handler)             // /api/v2/list\n  v2.Get("/user", handler)             // /api/v2/user\n\n  log.Fatal(app.Listen(":3000"))\n}\n')),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"Group")," of paths can have an optional handler."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n  app := fiber.New()\n\n  api := app.Group("/api")      // /api\n\n  v1 := api.Group("/v1")        // /api/v1\n  v1.Get("/list", handler)      // /api/v1/list\n  v1.Get("/user", handler)      // /api/v1/user\n\n  v2 := api.Group("/v2")        // /api/v2\n  v2.Get("/list", handler)      // /api/v2/list\n  v2.Get("/user", handler)      // /api/v2/user\n\n  log.Fatal(app.Listen(":3000"))\n}\n')),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Running ",(0,a.kt)("strong",{parentName:"p"},"/api"),", ",(0,a.kt)("strong",{parentName:"p"},"/v1")," or ",(0,a.kt)("strong",{parentName:"p"},"/v2")," will result in ",(0,a.kt)("strong",{parentName:"p"},"404")," error, make sure you have the errors set.")),(0,a.kt)("h2",{id:"group-handlers"},"Group Handlers"),(0,a.kt)("p",null,"Group handlers can also be used as a routing path but they must have ",(0,a.kt)("strong",{parentName:"p"},"Next")," added to them so that the flow can continue."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    app := fiber.New()\n\n    handler := func(c *fiber.Ctx) error {\n        return c.SendStatus(fiber.StatusOK)\n    }\n    api := app.Group("/api") // /api\n\n    v1 := api.Group("/v1", func(c *fiber.Ctx) error { // middleware for /api/v1\n        c.Set("Version", "v1")\n        return c.Next()\n    })\n    v1.Get("/list", handler) // /api/v1/list\n    v1.Get("/user", handler) // /api/v1/user\n\n    log.Fatal(app.Listen(":3000"))\n}\n')))}c.isMDXComponent=!0}}]);