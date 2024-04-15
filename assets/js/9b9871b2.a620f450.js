"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[95348],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=s(n),d=a,f=h["".concat(c,".").concat(d)]||h[d]||u[d]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[h]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78301:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={id:"healthcheck"},l="Health Check",o={unversionedId:"api/middleware/healthcheck",id:"version-v3.x/api/middleware/healthcheck",title:"Health Check",description:"Liveness and readiness probes middleware for Fiber that provides two endpoints for checking the liveness and readiness state of HTTP applications.",source:"@site/versioned_docs/version-v3.x/api/middleware/healthcheck.md",sourceDirName:"api/middleware",slug:"/api/middleware/healthcheck",permalink:"/api/middleware/healthcheck",draft:!1,tags:[],version:"v3.x",lastUpdatedAt:1713161311,formattedLastUpdatedAt:"Apr 15, 2024",frontMatter:{id:"healthcheck"},sidebar:"tutorialSidebar",previous:{title:"FileSystem",permalink:"/api/middleware/filesystem"},next:{title:"Helmet",permalink:"/api/middleware/helmet"}},c={},s=[{value:"Overview",id:"overview",level:2},{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}],p={toc:s},h="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"health-check"},"Health Check"),(0,a.kt)("p",null,"Liveness and readiness probes middleware for ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber")," that provides two endpoints for checking the liveness and readiness state of HTTP applications."),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Liveness Probe"),": Checks if the server is up and running."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default Endpoint"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"/livez")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Behavior"),": By default returns ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," immediately when the server is operational."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Readiness Probe"),": Assesses if the application is ready to handle requests."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default Endpoint"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"/readyz")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Behavior"),": By default returns ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," immediately when the server is operational."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"HTTP Status Codes"),":"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"200 OK"),": Returned when the checker function evaluates to ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"503 Service Unavailable"),": Returned when the checker function evaluates to ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),".")))),(0,a.kt)("h2",{id:"signatures"},"Signatures"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func NewHealthChecker(config Config) fiber.Handler\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Import the middleware package that is part of the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber")," web framework"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import(\n    "github.com/gofiber/fiber/v3"\n    "github.com/gofiber/fiber/v3/middleware/healthcheck"\n)\n')),(0,a.kt)("p",null,"After you initiate your ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber")," app, you can use the following possibilities:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// Provide a minimal config for liveness check\napp.Get(healthcheck.DefaultLivenessEndpoint, healthcheck.NewHealthChecker())\n// Provide a minimal config for readiness check\napp.Get(healthcheck.DefaultReadinessEndpoint, healthcheck.NewHealthChecker())\n// Provide a minimal config for check with custom endpoint\napp.Get("/live", healthcheck.NewHealthChecker())\n\n// Or extend your config for customization\napp.Get(healthcheck.DefaultLivenessEndpoint, healthcheck.NewHealthChecker(healthcheck.Config{\n    Probe: func(c fiber.Ctx) bool {\n        return true\n    },\n}))\n// And it works the same for readiness, just change the route\napp.Get(healthcheck.DefaultReadinessEndpoint, healthcheck.NewHealthChecker(healthcheck.Config{\n    Probe: func(c fiber.Ctx) bool {\n        return true\n    },\n}))\n// With a custom route and custom probe\napp.Get("/live", healthcheck.NewHealthChecker(healthcheck.Config{\n    Probe: func(c fiber.Ctx) bool {\n        return true\n    },\n}))\n\n// It can also be used with app.All, although it will only respond to requests with the GET method\n// in case of calling the route with any method which isn\'t GET, the return will be 404 Not Found when app.All is used\n// and 405 Method Not Allowed when app.Get is used\napp.All(healthcheck.DefaultReadinessEndpoint, healthcheck.NewHealthChecker(healthcheck.Config{\n    Probe: func(c fiber.Ctx) bool {\n        return true\n    },\n}))\n')),(0,a.kt)("h2",{id:"config"},"Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type Config struct {\n    // Next defines a function to skip this middleware when returned true. If this function returns true\n    // and no other handlers are defined for the route, Fiber will return a status 404 Not Found, since\n    // no other handlers were defined to return a different status.\n    //\n    // Optional. Default: nil\n    Next func(fiber.Ctx) bool\n\n    // Function used for checking the liveness of the application. Returns true if the application\n    // is running and false if it is not. The liveness probe is typically used to indicate if \n    // the application is in a state where it can handle requests (e.g., the server is up and running).\n    //\n    // Optional. Default: func(c fiber.Ctx) bool { return true }\n    Probe HealthChecker\n}\n")),(0,a.kt)("h2",{id:"default-config"},"Default Config"),(0,a.kt)("p",null,"The default configuration used by this middleware is defined as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func defaultProbe(fiber.Ctx) bool { return true }\n\nvar ConfigDefault = Config{\n    Probe:     defaultProbe,\n}\n")))}u.isMDXComponent=!0}}]);