"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[80896],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,h=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7112:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={id:"healthcheck"},l="Health Check",o={unversionedId:"api/middleware/healthcheck",id:"api/middleware/healthcheck",title:"Health Check",description:"Liveness and readiness probes middleware for Fiber that provides two endpoints for checking the liveness and readiness state of HTTP applications.",source:"@site/docs/core/api/middleware/healthcheck.md",sourceDirName:"api/middleware",slug:"/api/middleware/healthcheck",permalink:"/next/api/middleware/healthcheck",draft:!1,editUrl:"https://github.com/gofiber/fiber/edit/master/docs/api/middleware/healthcheck.md",tags:[],version:"current",lastUpdatedAt:1704725601,formattedLastUpdatedAt:"Jan 8, 2024",frontMatter:{id:"healthcheck"},sidebar:"tutorialSidebar",previous:{title:"FileSystem",permalink:"/next/api/middleware/filesystem"},next:{title:"Helmet",permalink:"/next/api/middleware/helmet"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"health-check"},"Health Check"),(0,a.kt)("p",null,"Liveness and readiness probes middleware for ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber")," that provides two endpoints for checking the liveness and readiness state of HTTP applications."),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Liveness Probe"),": Checks if the server is up and running."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default Endpoint"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"/livez")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Behavior"),": By default returns ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," immediately when the server is operational."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Readiness Probe"),": Assesses if the application is ready to handle requests."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default Endpoint"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"/readyz")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Behavior"),": By default returns ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," immediately when the server is operational."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"HTTP Status Codes"),":"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"200 OK"),": Returned when the checker function evaluates to ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"503 Service Unavailable"),": Returned when the checker function evaluates to ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),".")))),(0,a.kt)("h2",{id:"signatures"},"Signatures"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func New(config Config) fiber.Handler\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Import the middleware package that is part of the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber")," web framework"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/healthcheck"\n)\n')),(0,a.kt)("p",null,"After you initiate your ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber")," app, you can use the following possibilities:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// Provide a minimal config\napp.Use(healthcheck.New())\n\n// Or extend your config for customization\napp.Use(healthcheck.New(healthcheck.Config{\n    LivenessProbe: func(c *fiber.Ctx) bool {\n        return true\n    },\n    LivenessEndpoint: "/live",\n    ReadinessProbe: func(c *fiber.Ctx) bool {\n        return serviceA.Ready() && serviceB.Ready() && ...\n    },\n    ReadinessEndpoint: "/ready",\n}))\n')),(0,a.kt)("h2",{id:"config"},"Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'type Config struct {\n    // Next defines a function to skip this middleware when returned true.\n    //\n    // Optional. Default: nil\n    Next func(c *fiber.Ctx) bool\n\n    // Function used for checking the liveness of the application. Returns true if the application\n    // is running and false if it is not. The liveness probe is typically used to indicate if \n    // the application is in a state where it can handle requests (e.g., the server is up and running).\n    //\n    // Optional. Default: func(c *fiber.Ctx) bool { return true }\n    LivenessProbe HealthChecker\n\n    // HTTP endpoint at which the liveness probe will be available.\n    //\n    // Optional. Default: "/livez"\n    LivenessEndpoint string\n\n    // Function used for checking the readiness of the application. Returns true if the application\n    // is ready to process requests and false otherwise. The readiness probe typically checks if all necessary\n    // services, databases, and other dependencies are available for the application to function correctly.\n    //\n    // Optional. Default: func(c *fiber.Ctx) bool { return true }\n    ReadinessProbe HealthChecker\n\n    // HTTP endpoint at which the readiness probe will be available.\n    // Optional. Default: "/readyz"\n    ReadinessEndpoint string\n}\n')),(0,a.kt)("h2",{id:"default-config"},"Default Config"),(0,a.kt)("p",null,"The default configuration used by this middleware is defined as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func defaultLivenessProbe(*fiber.Ctx) bool { return true }\n\nfunc defaultReadinessProbe(*fiber.Ctx) bool { return true }\n\nvar ConfigDefault = Config{\n    LivenessProbe:     defaultLivenessProbe,\n    ReadinessProbe:    defaultReadinessProbe,\n    LivenessEndpoint:  "/livez",\n    ReadinessEndpoint: "/readyz",\n}\n')))}d.isMDXComponent=!0}}]);