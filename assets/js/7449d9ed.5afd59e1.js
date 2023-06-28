"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[974],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),f=i,g=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return t?r.createElement(g,o(o({ref:n},p),{},{components:t})):r.createElement(g,o({ref:n},p))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2749:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(7462),i=(t(7294),t(3905));const a={id:"cors",title:"CORS"},o=void 0,l={unversionedId:"api/middleware/cors",id:"version-v2.x/api/middleware/cors",title:"CORS",description:"CORS middleware for Fiber that can be used to enable Cross-Origin Resource Sharing with various options.",source:"@site/versioned_docs/version-v2.x/api/middleware/cors.md",sourceDirName:"api/middleware",slug:"/api/middleware/cors",permalink:"/api/middleware/cors",draft:!1,tags:[],version:"v2.x",lastUpdatedBy:"RW",lastUpdatedAt:1687961146,formattedLastUpdatedAt:"Jun 28, 2023",frontMatter:{id:"cors",title:"CORS"},sidebar:"tutorialSidebar",previous:{title:"Compress",permalink:"/api/middleware/compress"},next:{title:"CSRF",permalink:"/api/middleware/csrf"}},s={},c=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}],p={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"CORS middleware for ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber")," that can be used to enable ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"},"Cross-Origin Resource Sharing")," with various options."),(0,i.kt)("h2",{id:"signatures"},"Signatures"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) fiber.Handler\n")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Import the middleware package that is part of the Fiber web framework"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/fiber/v2/middleware/cors"\n)\n')),(0,i.kt)("p",null,"After you initiate your Fiber app, you can use the following possibilities:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// Initialize default config\napp.Use(cors.New())\n\n// Or extend your config for customization\napp.Use(cors.New(cors.Config{\n    AllowOrigins: "https://gofiber.io, https://gofiber.net",\n    AllowHeaders:  "Origin, Content-Type, Accept",\n}))\n')),(0,i.kt)("p",null,"Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"AllowOriginsFunc")," function. In this example any origin will be allowed via CORS."),(0,i.kt)("p",null,"For example, if a browser running on ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:3000")," sends a request, this will be accepted and the ",(0,i.kt)("inlineCode",{parentName:"p"},"access-control-allow-origin")," response header will be set to ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:3000"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note: Using this feature is discouraged in production and it's best practice to explicitly set CORS origins via ",(0,i.kt)("inlineCode",{parentName:"strong"},"AllowOrigins"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'app.Use(cors.New())\n\napp.Use(cors.New(cors.Config{\n    AllowOriginsFunc: func(origin string) bool {\n        return os.Getenv("ENVIRONMENT") == "development"\n    },\n}))\n')),(0,i.kt)("h2",{id:"config"},"Config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// Config defines the config for middleware.\ntype Config struct {\n    // Next defines a function to skip this middleware when returned true.\n    //\n    // Optional. Default: nil\n    Next func(c *fiber.Ctx) bool\n\n    // AllowOriginsFunc defines a function that will set the \'access-control-allow-origin\'\n    // response header to the \'origin\' request header when returned true.\n    // \n    // Note: Using this feature is discouraged in production and it\'s best practice to explicitly\n    // set CORS origins via \'AllowOrigins\'\n    //\n    // Optional. Default: nil\n    AllowOriginsFunc func(origin string) bool\n\n    // AllowOrigin defines a list of origins that may access the resource.\n    //\n    // Optional. Default value "*"\n    AllowOrigins string\n\n    // AllowMethods defines a list methods allowed when accessing the resource.\n    // This is used in response to a preflight request.\n    //\n    // Optional. Default value "GET,POST,HEAD,PUT,DELETE,PATCH"\n    AllowMethods string\n\n    // AllowHeaders defines a list of request headers that can be used when\n    // making the actual request. This is in response to a preflight request.\n    //\n    // Optional. Default value "".\n    AllowHeaders string\n\n    // AllowCredentials indicates whether or not the response to the request\n    // can be exposed when the credentials flag is true. When used as part of\n    // a response to a preflight request, this indicates whether or not the\n    // actual request can be made using credentials.\n    //\n    // Optional. Default value false.\n    AllowCredentials bool\n\n    // ExposeHeaders defines a whitelist headers that clients are allowed to\n    // access.\n    //\n    // Optional. Default value "".\n    ExposeHeaders string\n\n    // MaxAge indicates how long (in seconds) the results of a preflight request\n    // can be cached.\n    //\n    // Optional. Default value 0.\n    MaxAge int\n}\n')),(0,i.kt)("h2",{id:"default-config"},"Default Config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'var ConfigDefault = Config{\n    Next:         nil,\n    AllowOriginsFunc: nil,\n    AllowOrigins: "*",\n    AllowMethods: strings.Join([]string{\n        fiber.MethodGet,\n        fiber.MethodPost,\n        fiber.MethodHead,\n        fiber.MethodPut,\n        fiber.MethodDelete,\n        fiber.MethodPatch,\n    }, ","),\n    AllowHeaders:     "",\n    AllowCredentials: false,\n    ExposeHeaders:    "",\n    MaxAge:           0,\n}\n')))}d.isMDXComponent=!0}}]);