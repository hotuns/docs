"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[82472],{88635:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=t(74848),r=t(28453);const s={id:"healthcheck"},l="Health Check",a={id:"middleware/healthcheck",title:"Health Check",description:"Liveness and readiness probes middleware for Fiber that provides two endpoints for checking the liveness and readiness state of HTTP applications.",source:"@site/docs/core/middleware/healthcheck.md",sourceDirName:"middleware",slug:"/middleware/healthcheck",permalink:"/next/middleware/healthcheck",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/fiber/edit/main/docs/middleware/healthcheck.md",tags:[],version:"current",lastUpdatedAt:1717658677e3,frontMatter:{id:"healthcheck"},sidebar:"tutorialSidebar",previous:{title:"Favicon",permalink:"/next/middleware/favicon"},next:{title:"Helmet",permalink:"/next/middleware/helmet"}},h={},c=[{value:"Overview",id:"overview",level:2},{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"health-check",children:"Health Check"}),"\n",(0,i.jsxs)(n.p,{children:["Liveness and readiness probes middleware for ",(0,i.jsx)(n.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," that provides two endpoints for checking the liveness and readiness state of HTTP applications."]}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Liveness Probe"}),": Checks if the server is up and running."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default Endpoint"}),": ",(0,i.jsx)(n.code,{children:"/livez"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Behavior"}),": By default returns ",(0,i.jsx)(n.code,{children:"true"})," immediately when the server is operational."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Readiness Probe"}),": Assesses if the application is ready to handle requests."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default Endpoint"}),": ",(0,i.jsx)(n.code,{children:"/readyz"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Behavior"}),": By default returns ",(0,i.jsx)(n.code,{children:"true"})," immediately when the server is operational."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"HTTP Status Codes"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"200 OK"}),": Returned when the checker function evaluates to ",(0,i.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"503 Service Unavailable"}),": Returned when the checker function evaluates to ",(0,i.jsx)(n.code,{children:"false"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"signatures",children:"Signatures"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"func NewHealthChecker(config Config) fiber.Handler\n"})}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(n.p,{children:["Import the middleware package that is part of the ",(0,i.jsx)(n.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," web framework"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'import(\n    "github.com/gofiber/fiber/v3"\n    "github.com/gofiber/fiber/v3/middleware/healthcheck"\n)\n'})}),"\n",(0,i.jsxs)(n.p,{children:["After you initiate your ",(0,i.jsx)(n.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," app, you can use the following possibilities:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'// Provide a minimal config for liveness check\napp.Get(healthcheck.DefaultLivenessEndpoint, healthcheck.NewHealthChecker())\n// Provide a minimal config for readiness check\napp.Get(healthcheck.DefaultReadinessEndpoint, healthcheck.NewHealthChecker())\n// Provide a minimal config for check with custom endpoint\napp.Get("/live", healthcheck.NewHealthChecker())\n\n// Or extend your config for customization\napp.Get(healthcheck.DefaultLivenessEndpoint, healthcheck.NewHealthChecker(healthcheck.Config{\n    Probe: func(c fiber.Ctx) bool {\n        return true\n    },\n}))\n// And it works the same for readiness, just change the route\napp.Get(healthcheck.DefaultReadinessEndpoint, healthcheck.NewHealthChecker(healthcheck.Config{\n    Probe: func(c fiber.Ctx) bool {\n        return true\n    },\n}))\n// With a custom route and custom probe\napp.Get("/live", healthcheck.NewHealthChecker(healthcheck.Config{\n    Probe: func(c fiber.Ctx) bool {\n        return true\n    },\n}))\n\n// It can also be used with app.All, although it will only respond to requests with the GET method\n// in case of calling the route with any method which isn\'t GET, the return will be 404 Not Found when app.All is used\n// and 405 Method Not Allowed when app.Get is used\napp.All(healthcheck.DefaultReadinessEndpoint, healthcheck.NewHealthChecker(healthcheck.Config{\n    Probe: func(c fiber.Ctx) bool {\n        return true\n    },\n}))\n'})}),"\n",(0,i.jsx)(n.h2,{id:"config",children:"Config"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"type Config struct {\n\t// Next defines a function to skip this middleware when returned true. If this function returns true\n    // and no other handlers are defined for the route, Fiber will return a status 404 Not Found, since\n    // no other handlers were defined to return a different status.\n\t//\n\t// Optional. Default: nil\n\tNext func(fiber.Ctx) bool\n\n\t// Function used for checking the liveness of the application. Returns true if the application\n\t// is running and false if it is not. The liveness probe is typically used to indicate if \n\t// the application is in a state where it can handle requests (e.g., the server is up and running).\n\t//\n\t// Optional. Default: func(c fiber.Ctx) bool { return true }\n\tProbe HealthChecker\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"default-config",children:"Default Config"}),"\n",(0,i.jsx)(n.p,{children:"The default configuration used by this middleware is defined as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"func defaultProbe(fiber.Ctx) bool { return true }\n\nvar ConfigDefault = Config{\n\tProbe:     defaultProbe,\n}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var i=t(96540);const r={},s=i.createContext(r);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);