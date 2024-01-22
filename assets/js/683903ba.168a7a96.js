"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[26042],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},v=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),c=s(t),v=a,g=c["".concat(u,".").concat(v)]||c[v]||d[v]||i;return t?r.createElement(g,p(p({ref:n},l),{},{components:t})):r.createElement(g,p({ref:n},l))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,p=new Array(i);p[0]=v;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[c]="string"==typeof e?e:a,p[1]=o;for(var s=2;s<i;s++)p[s]=t[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}v.displayName="MDXCreateElement"},11809:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const i={id:"grouping",title:"\ud83c\udfad Grouping",sidebar_position:2},p=void 0,o={unversionedId:"guide/grouping",id:"version-v1.x/guide/grouping",title:"\ud83c\udfad Grouping",description:"Paths",source:"@site/versioned_docs/version-v1.x/guide/grouping.md",sourceDirName:"guide",slug:"/guide/grouping",permalink:"/v1.x/guide/grouping",draft:!1,tags:[],version:"v1.x",lastUpdatedAt:1705921083,formattedLastUpdatedAt:"Jan 22, 2024",sidebarPosition:2,frontMatter:{id:"grouping",title:"\ud83c\udfad Grouping",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd0c Routing",permalink:"/v1.x/guide/routing"},next:{title:"\ud83d\udcdd Templates",permalink:"/v1.x/guide/templates"}},u={},s=[{value:"Paths",id:"paths",level:2},{value:"Group Handlers",id:"group-handlers",level:2}],l={toc:s},c="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"paths"},"Paths"),(0,a.kt)("p",null,"Like ",(0,a.kt)("strong",{parentName:"p"},"Routing"),", groups can also have paths that belong to a cluster."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n  app := fiber.New()\n\n  api := app.Group("/api", cors())  // /api\n\n  v1 := api.Group("/v1", mysql())   // /api/v1\n  v1.Get("/list", handler)          // /api/v1/list\n  v1.Get("/user", handler)          // /api/v1/user\n\n  v2 := api.Group("/v2", mongodb()) // /api/v2\n  v2.Get("/list", handler)          // /api/v2/list\n  v2.Get("/user", handler)          // /api/v2/user\n\n  app.Listen(3000)\n}\n')),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"Group")," of paths can have an optional handler."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n  app := fiber.New()\n\n  api := app.Group("/api")  // /api\n\n  v1 := api.Group("/v1")   // /api/v1\n  v1.Get("/list", handler)          // /api/v1/list\n  v1.Get("/user", handler)          // /api/v1/user\n\n  v2 := api.Group("/v2") // /api/v2\n  v2.Get("/list", handler)          // /api/v2/list\n  v2.Get("/user", handler)          // /api/v2/user\n\n  app.Listen(3000)\n}\n')),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Running ",(0,a.kt)("strong",{parentName:"p"},"/api"),", ",(0,a.kt)("strong",{parentName:"p"},"/v1")," or ",(0,a.kt)("strong",{parentName:"p"},"/v2")," will result in ",(0,a.kt)("strong",{parentName:"p"},"404")," error, make sure you have the errors set.")),(0,a.kt)("h2",{id:"group-handlers"},"Group Handlers"),(0,a.kt)("p",null,"Group handlers can also be used as a routing path but they must have ",(0,a.kt)("strong",{parentName:"p"},"Next")," added to them so that the flow can continue."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    app := fiber.New()\n\n    api := app.Group("/api") // /api\n\n    v1 := api.Group("/v1", func(c *fiber.Ctx) {\n        c.JSON(fiber.Map{\n            "message": "v1",\n        })\n        c.Next()\n    })                       // /api/v1\n    v1.Get("/list", handler) // /api/v1/list\n    v1.Get("/user", handler) // /api/v1/user\n\n    app.Listen(3000)\n}\n')))}d.isMDXComponent=!0}}]);