"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[50264],{73154:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=i(74848),s=i(28453);const r={id:"healthcheck"},a="Health Check",l={id:"api/middleware/healthcheck",title:"Health Check",description:"Liveness and readiness probes middleware for Fiber that provides two endpoints for checking the liveness and readiness state of HTTP applications.",source:"@site/versioned_docs/version-v2.x/api/middleware/healthcheck.md",sourceDirName:"api/middleware",slug:"/api/middleware/healthcheck",permalink:"/api/middleware/healthcheck",draft:!1,unlisted:!1,tags:[],version:"v2.x",lastUpdatedAt:1719410638e3,frontMatter:{id:"healthcheck"},sidebar:"tutorialSidebar",previous:{title:"FileSystem",permalink:"/api/middleware/filesystem"},next:{title:"Helmet",permalink:"/api/middleware/helmet"}},o={},c=[{value:"Overview",id:"overview",level:2},{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"health-check",children:"Health Check"}),"\n",(0,t.jsxs)(n.p,{children:["Liveness and readiness probes middleware for ",(0,t.jsx)(n.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," that provides two endpoints for checking the liveness and readiness state of HTTP applications."]}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Liveness Probe"}),": Checks if the server is up and running."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default Endpoint"}),": ",(0,t.jsx)(n.code,{children:"/livez"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Behavior"}),": By default returns ",(0,t.jsx)(n.code,{children:"true"})," immediately when the server is operational."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Readiness Probe"}),": Assesses if the application is ready to handle requests."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default Endpoint"}),": ",(0,t.jsx)(n.code,{children:"/readyz"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Behavior"}),": By default returns ",(0,t.jsx)(n.code,{children:"true"})," immediately when the server is operational."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"HTTP Status Codes"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"200 OK"}),": Returned when the checker function evaluates to ",(0,t.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"503 Service Unavailable"}),": Returned when the checker function evaluates to ",(0,t.jsx)(n.code,{children:"false"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"signatures",children:"Signatures"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"func New(config Config) fiber.Handler\n"})}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(n.p,{children:["Import the middleware package that is part of the ",(0,t.jsx)(n.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," web framework"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'import (\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/healthcheck"\n)\n'})}),"\n",(0,t.jsxs)(n.p,{children:["After you initiate your ",(0,t.jsx)(n.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," app, you can use the following possibilities:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'// Provide a minimal config\napp.Use(healthcheck.New())\n\n// Or extend your config for customization\napp.Use(healthcheck.New(healthcheck.Config{\n    LivenessProbe: func(c *fiber.Ctx) bool {\n        return true\n    },\n    LivenessEndpoint: "/live",\n    ReadinessProbe: func(c *fiber.Ctx) bool {\n        return serviceA.Ready() && serviceB.Ready() && ...\n    },\n    ReadinessEndpoint: "/ready",\n}))\n'})}),"\n",(0,t.jsx)(n.h2,{id:"config",children:"Config"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'type Config struct {\n\t// Next defines a function to skip this middleware when returned true.\n\t//\n\t// Optional. Default: nil\n\tNext func(c *fiber.Ctx) bool\n\n\t// Function used for checking the liveness of the application. Returns true if the application\n\t// is running and false if it is not. The liveness probe is typically used to indicate if \n\t// the application is in a state where it can handle requests (e.g., the server is up and running).\n\t//\n\t// Optional. Default: func(c *fiber.Ctx) bool { return true }\n\tLivenessProbe HealthChecker\n\n\t// HTTP endpoint at which the liveness probe will be available.\n\t//\n\t// Optional. Default: "/livez"\n\tLivenessEndpoint string\n\n\t// Function used for checking the readiness of the application. Returns true if the application\n\t// is ready to process requests and false otherwise. The readiness probe typically checks if all necessary\n\t// services, databases, and other dependencies are available for the application to function correctly.\n\t//\n\t// Optional. Default: func(c *fiber.Ctx) bool { return true }\n\tReadinessProbe HealthChecker\n\n\t// HTTP endpoint at which the readiness probe will be available.\n\t// Optional. Default: "/readyz"\n\tReadinessEndpoint string\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"default-config",children:"Default Config"}),"\n",(0,t.jsx)(n.p,{children:"The default configuration used by this middleware is defined as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'func defaultLivenessProbe(*fiber.Ctx) bool { return true }\n\nfunc defaultReadinessProbe(*fiber.Ctx) bool { return true }\n\nvar ConfigDefault = Config{\n\tLivenessProbe:     defaultLivenessProbe,\n\tReadinessProbe:    defaultReadinessProbe,\n\tLivenessEndpoint:  "/livez",\n\tReadinessEndpoint: "/readyz",\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>l});var t=i(96540);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);