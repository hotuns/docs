"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[84386],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),b=a,u=d["".concat(p,".").concat(b)]||d[b]||m[b]||i;return n?r.createElement(u,o(o({ref:t},s),{},{components:n})):r.createElement(u,o({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},11:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={id:"casbin"},o="Casbin",l={unversionedId:"casbin/casbin",id:"version-opafiber_v2.x.x/casbin/casbin",title:"Casbin",description:"Release",source:"@site/contrib_versioned_docs/version-opafiber_v2.x.x/casbin/README.md",sourceDirName:"casbin",slug:"/casbin/",permalink:"/contrib/opafiber_v2.x.x/casbin/",draft:!1,editUrl:"https://github.com/gofiber/contrib/edit/main/casbin/README.md",tags:[],version:"opafiber_v2.x.x",lastUpdatedAt:1706604776,formattedLastUpdatedAt:"Jan 30, 2024",frontMatter:{id:"casbin"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc4b Welcome",permalink:"/contrib/opafiber_v2.x.x/"},next:{title:"Fiberi18n",permalink:"/contrib/opafiber_v2.x.x/fiberi18n/"}},p={},c=[{value:"Install",id:"install",level:2},{value:"Signature",id:"signature",level:2},{value:"Config",id:"config",level:2},{value:"Examples",id:"examples",level:3},{value:"CustomPermission",id:"custompermission",level:2},{value:"RoutePermission",id:"routepermission",level:2},{value:"RoleAuthorization",id:"roleauthorization",level:2}],s={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"casbin"},"Casbin"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/github/v/tag/gofiber/contrib?filter=casbin*",alt:"Release"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://gofiber.io/discord"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})),"\n",(0,a.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Linter/badge.svg",alt:"Linter"})),(0,a.kt)("p",null,"Casbin middleware for Fiber."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note: Requires Go 1.18 and above")),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"go get -u github.com/gofiber/fiber/v2\ngo get -u github.com/gofiber/contrib/casbin\n")),(0,a.kt)("p",null,"choose an adapter from ",(0,a.kt)("a",{parentName:"p",href:"https://casbin.org/docs/en/adapters"},"here")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"go get -u github.com/casbin/xorm-adapter\n")),(0,a.kt)("h2",{id:"signature"},"Signature"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"casbin.New(config ...casbin.Config) *casbin.Middleware\n")),(0,a.kt)("h2",{id:"config"},"Config"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ModelFilePath"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Model file path"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},'"./model.conf"'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"PolicyAdapter"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"persist.Adapter")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Database adapter for policies"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"./policy.csv"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Enforcer"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"*casbin.Enforcer")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Custom casbin enforcer"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Middleware generated enforcer using ModelFilePath & PolicyAdapter"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Lookup"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"func(*fiber.Ctx) string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Look up for current subject"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},'""'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Unauthorized"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"func(*fiber.Ctx) error")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Response body for unauthorized responses"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Unauthorized"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"func(*fiber.Ctx) error")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Response body for forbidden responses"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Forbidden"))))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/svcg/-fiber_casbin_demo"},"Gorm Adapter")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/gofiber/contrib/casbin/tree/master/example"},"File Adapter"))),(0,a.kt)("h2",{id:"custompermission"},"CustomPermission"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/contrib/casbin"\n  _ "github.com/go-sql-driver/mysql"\n  "github.com/casbin/xorm-adapter/v2"\n)\n\nfunc main() {\n  app := fiber.New()\n\n  authz := casbin.New(casbin.Config{\n      ModelFilePath: "path/to/rbac_model.conf",\n      PolicyAdapter: xormadapter.NewAdapter("mysql", "root:@tcp(127.0.0.1:3306)/"),\n      Lookup: func(c *fiber.Ctx) string {\n          // fetch authenticated user subject\n      },\n  })\n\n  app.Post("/blog",\n      authz.RequiresPermissions([]string{"blog:create"}, casbin.WithValidationRule(casbin.MatchAllRule)),\n      func(c *fiber.Ctx) error {\n        // your handler\n      },\n  )\n  \n  app.Delete("/blog/:id",\n    authz.RequiresPermissions([]string{"blog:create", "blog:delete"}, casbin.WithValidationRule(casbin.AtLeastOneRule)),\n    func(c *fiber.Ctx) error {\n      // your handler\n    },\n  )\n\n  app.Listen(":8080")\n}\n')),(0,a.kt)("h2",{id:"routepermission"},"RoutePermission"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/contrib/casbin"\n  _ "github.com/go-sql-driver/mysql"\n  "github.com/casbin/xorm-adapter/v2"\n)\n\nfunc main() {\n  app := fiber.New()\n\n  authz := casbin.New(casbin.Config{\n      ModelFilePath: "path/to/rbac_model.conf",\n      PolicyAdapter: xormadapter.NewAdapter("mysql", "root:@tcp(127.0.0.1:3306)/"),\n      Lookup: func(c *fiber.Ctx) string {\n          // fetch authenticated user subject\n      },\n  })\n\n  // check permission with Method and Path\n  app.Post("/blog",\n    authz.RoutePermission(),\n    func(c *fiber.Ctx) error {\n      // your handler\n    },\n  )\n\n  app.Listen(":8080")\n}\n')),(0,a.kt)("h2",{id:"roleauthorization"},"RoleAuthorization"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/contrib/casbin"\n  _ "github.com/go-sql-driver/mysql"\n  "github.com/casbin/xorm-adapter/v2"\n)\n\nfunc main() {\n  app := fiber.New()\n\n  authz := casbin.New(casbin.Config{\n      ModelFilePath: "path/to/rbac_model.conf",\n      PolicyAdapter: xormadapter.NewAdapter("mysql", "root:@tcp(127.0.0.1:3306)/"),\n      Lookup: func(c *fiber.Ctx) string {\n          // fetch authenticated user subject\n      },\n  })\n  \n  app.Put("/blog/:id",\n    authz.RequiresRoles([]string{"admin"}),\n    func(c *fiber.Ctx) error {\n      // your handler\n    },\n  )\n\n  app.Listen(":8080")\n}\n')))}m.isMDXComponent=!0}}]);