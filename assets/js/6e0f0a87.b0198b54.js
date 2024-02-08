"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[5979],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,g=c["".concat(s,".").concat(m)]||c[m]||f[m]||i;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const i={id:"cors"},l="CORS",o={unversionedId:"api/middleware/cors",id:"api/middleware/cors",title:"CORS",description:"CORS middleware for Fiber that can be used to enable Cross-Origin Resource Sharing with various options.",source:"@site/docs/core/api/middleware/cors.md",sourceDirName:"api/middleware",slug:"/api/middleware/cors",permalink:"/next/api/middleware/cors",draft:!1,editUrl:"https://github.com/gofiber/fiber/edit/master/docs/api/middleware/cors.md",tags:[],version:"current",lastUpdatedAt:1707376672,formattedLastUpdatedAt:"Feb 8, 2024",frontMatter:{id:"cors"},sidebar:"tutorialSidebar",previous:{title:"Compress",permalink:"/next/api/middleware/compress"},next:{title:"CSRF",permalink:"/next/api/middleware/csrf"}},s={},d=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}],p={toc:d},c="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cors"},"CORS"),(0,a.kt)("p",null,"CORS middleware for ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber")," that can be used to enable ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"},"Cross-Origin Resource Sharing")," with various options."),(0,a.kt)("p",null,"The middleware conforms to the ",(0,a.kt)("inlineCode",{parentName:"p"},"access-control-allow-origin")," specification by parsing ",(0,a.kt)("inlineCode",{parentName:"p"},"AllowOrigins"),". First, the middleware checks if there is a matching allowed origin for the requesting 'origin' header. If there is a match, it returns exactly one matching domain from the list of allowed origins."),(0,a.kt)("p",null,"For more control, ",(0,a.kt)("inlineCode",{parentName:"p"},"AllowOriginsFunc")," can be used to programatically determine if an origin is allowed. If no match was found in ",(0,a.kt)("inlineCode",{parentName:"p"},"AllowOrigins")," and if ",(0,a.kt)("inlineCode",{parentName:"p"},"AllowOriginsFunc")," returns true then the 'access-control-allow-origin' response header is set to the 'origin' request header."),(0,a.kt)("h2",{id:"signatures"},"Signatures"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) fiber.Handler\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Import the middleware package that is part of the Fiber web framework"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  "github.com/gofiber/fiber/v3"\n  "github.com/gofiber/fiber/v3/middleware/cors"\n)\n')),(0,a.kt)("p",null,"After you initiate your Fiber app, you can use the following possibilities:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// Initialize default config\napp.Use(cors.New())\n\n// Or extend your config for customization\napp.Use(cors.New(cors.Config{\n    AllowOrigins: "https://gofiber.io, https://gofiber.net",\n    AllowHeaders:  "Origin, Content-Type, Accept",\n}))\n')),(0,a.kt)("p",null,"Using the ",(0,a.kt)("inlineCode",{parentName:"p"},"AllowOriginsFunc")," function. In this example any origin will be allowed via CORS."),(0,a.kt)("p",null,"For example, if a browser running on ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3000")," sends a request, this will be accepted and the ",(0,a.kt)("inlineCode",{parentName:"p"},"access-control-allow-origin")," response header will be set to ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3000"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note: Using this feature is discouraged in production and it's best practice to explicitly set CORS origins via ",(0,a.kt)("inlineCode",{parentName:"strong"},"AllowOrigins"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'app.Use(cors.New())\n\napp.Use(cors.New(cors.Config{\n    AllowOriginsFunc: func(origin string) bool {\n        return os.Getenv("ENVIRONMENT") == "development"\n    },\n}))\n')),(0,a.kt)("h2",{id:"config"},"Config"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Next"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"func(fiber.Ctx) bool")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Next defines a function to skip this middleware when returned true."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"nil"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"AllowOriginsFunc"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"func(origin string) bool")),(0,a.kt)("td",{parentName:"tr",align:"left"},"AllowOriginsFunc defines a function that will set the 'access-control-allow-origin' response header to the 'origin' request header when returned true."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"nil"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"AllowOrigins"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"AllowOrigin defines a comma separated list of origins that may access the resource."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},'"*"'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"AllowMethods"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"AllowMethods defines a list of methods allowed when accessing the resource. This is used in response to a preflight request."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},'"GET,POST,HEAD,PUT,DELETE,PATCH"'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"AllowHeaders"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"AllowHeaders defines a list of request headers that can be used when making the actual request. This is in response to a preflight request."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},'""'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"AllowCredentials"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"bool")),(0,a.kt)("td",{parentName:"tr",align:"left"},"AllowCredentials indicates whether or not the response to the request can be exposed when the credentials flag is true."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"false"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ExposeHeaders"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"ExposeHeaders defines a whitelist headers that clients are allowed to access."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},'""'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"MaxAge"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"int")),(0,a.kt)("td",{parentName:"tr",align:"left"},"MaxAge indicates how long (in seconds) the results of a preflight request can be cached. If you pass MaxAge 0, Access-Control-Max-Age header will not be added and browser will use 5 seconds by default. To disable caching completely, pass MaxAge value negative. It will set the Access-Control-Max-Age header 0."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"0"))))),(0,a.kt)("h2",{id:"default-config"},"Default Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'var ConfigDefault = Config{\n    Next:         nil,\n    AllowOriginsFunc: nil,\n    AllowOrigins: "*",\n    AllowMethods: strings.Join([]string{\n        fiber.MethodGet,\n        fiber.MethodPost,\n        fiber.MethodHead,\n        fiber.MethodPut,\n        fiber.MethodDelete,\n        fiber.MethodPatch,\n    }, ","),\n    AllowHeaders:     "",\n    AllowCredentials: false,\n    ExposeHeaders:    "",\n    MaxAge:           0,\n}\n')))}f.isMDXComponent=!0}}]);