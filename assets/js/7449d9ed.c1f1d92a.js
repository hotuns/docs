"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[80974],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),u=a,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||r;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},52749:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=n(87462),a=(n(67294),n(3905));const r={id:"cors"},o="CORS",l={unversionedId:"api/middleware/cors",id:"version-v2.x/api/middleware/cors",title:"CORS",description:"CORS (Cross-Origin Resource Sharing) is a middleware for Fiber that allows servers to specify who can access its resources and how. It's not a security feature, but a way to relax the security model of web browsers for cross-origin requests. You can learn more about CORS on Mozilla Developer Network.",source:"@site/versioned_docs/version-v2.x/api/middleware/cors.md",sourceDirName:"api/middleware",slug:"/api/middleware/cors",permalink:"/v2.x/api/middleware/cors",draft:!1,tags:[],version:"v2.x",lastUpdatedAt:1713272678,formattedLastUpdatedAt:"Apr 16, 2024",frontMatter:{id:"cors"},sidebar:"tutorialSidebar",previous:{title:"Compress",permalink:"/v2.x/api/middleware/compress"},next:{title:"CSRF",permalink:"/v2.x/api/middleware/csrf"}},s={},d=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Basic usage",id:"basic-usage",level:3},{value:"Custom configuration (specific origins, headers, etc.)",id:"custom-configuration-specific-origins-headers-etc",level:3},{value:"Dynamic origin validation",id:"dynamic-origin-validation",level:3},{value:"Prohibited usage",id:"prohibited-usage",level:3},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2},{value:"Subdomain Matching",id:"subdomain-matching",level:2},{value:"Example",id:"example",level:3},{value:"Security Considerations",id:"security-considerations",level:2},{value:"Secure Configurations",id:"secure-configurations",level:3},{value:"Common Pitfalls",id:"common-pitfalls",level:3}],p={toc:d},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cors"},"CORS"),(0,a.kt)("p",null,"CORS (Cross-Origin Resource Sharing) is a middleware for ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber")," that allows servers to specify who can access its resources and how. It's not a security feature, but a way to relax the security model of web browsers for cross-origin requests. You can learn more about CORS on ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"},"Mozilla Developer Network"),"."),(0,a.kt)("p",null,"This middleware works by adding CORS headers to responses from your Fiber application. These headers specify which origins, methods, and headers are allowed for cross-origin requests. It also handles preflight requests, which are a CORS mechanism to check if the actual request is safe to send."),(0,a.kt)("p",null,"The middleware uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"AllowOrigins")," option to control which origins can make cross-origin requests. It supports single origin, multiple origins, subdomain matching, and wildcard origin. It also allows programmatic origin validation with the ",(0,a.kt)("inlineCode",{parentName:"p"},"AllowOriginsFunc")," option."),(0,a.kt)("p",null,"To ensure that the provided ",(0,a.kt)("inlineCode",{parentName:"p"},"AllowOrigins")," origins are correctly formatted, this middleware validates and normalizes them. It checks for valid schemes, i.e., HTTP or HTTPS, and it will automatically remove trailing slashes. If the provided origin is invalid, the middleware will panic."),(0,a.kt)("p",null,"When configuring CORS, it's important to avoid ",(0,a.kt)("a",{parentName:"p",href:"#common-pitfalls"},"common pitfalls")," like using a wildcard origin with credentials, being overly permissive with origins, and inadequate validation with ",(0,a.kt)("inlineCode",{parentName:"p"},"AllowOriginsFunc"),". Misconfiguration can expose your application to various security risks."),(0,a.kt)("h2",{id:"signatures"},"Signatures"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) fiber.Handler\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Import the middleware package that is part of the Fiber web framework"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/fiber/v2/middleware/cors"\n)\n')),(0,a.kt)("p",null,"After you initiate your Fiber app, you can use the following possibilities:"),(0,a.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,a.kt)("p",null,"To use the default configuration, simply use ",(0,a.kt)("inlineCode",{parentName:"p"},"cors.New()"),". This will allow wildcard origins '*', all methods, no credentials, and no headers or exposed headers."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"app.Use(cors.New())\n")),(0,a.kt)("h3",{id:"custom-configuration-specific-origins-headers-etc"},"Custom configuration (specific origins, headers, etc.)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// Initialize default config\napp.Use(cors.New())\n\n// Or extend your config for customization\napp.Use(cors.New(cors.Config{\n    AllowOrigins: "https://gofiber.io, https://gofiber.net",\n    AllowHeaders: "Origin, Content-Type, Accept",\n}))\n')),(0,a.kt)("h3",{id:"dynamic-origin-validation"},"Dynamic origin validation"),(0,a.kt)("p",null,"You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"AllowOriginsFunc")," to programmatically determine whether to allow a request based on its origin. This is useful when you need to validate origins against a database or other dynamic sources. The function should return ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," if the origin is allowed, and ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,a.kt)("p",null,"Be sure to review the ",(0,a.kt)("a",{parentName:"p",href:"#security-considerations"},"security considerations")," when using ",(0,a.kt)("inlineCode",{parentName:"p"},"AllowOriginsFunc"),"."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Never allow ",(0,a.kt)("inlineCode",{parentName:"p"},"AllowOriginsFunc")," to return ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," for all origins. This is particularly crucial when ",(0,a.kt)("inlineCode",{parentName:"p"},"AllowCredentials")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),". Doing so can bypass the restriction of using a wildcard origin with credentials, exposing your application to serious security threats."),(0,a.kt)("p",{parentName:"admonition"},"If you need to allow wildcard origins, use ",(0,a.kt)("inlineCode",{parentName:"p"},"AllowOrigins")," with a wildcard ",(0,a.kt)("inlineCode",{parentName:"p"},'"*"')," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"AllowOriginsFunc"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// dbCheckOrigin checks if the origin is in the list of allowed origins in the database.\nfunc dbCheckOrigin(db *sql.DB, origin string) bool {\n  // Placeholder query - adjust according to your database schema and query needs\n  query := "SELECT COUNT(*) FROM allowed_origins WHERE origin = $1"\n  \n  var count int\n  err := db.QueryRow(query, origin).Scan(&count)\n  if err != nil {\n    // Handle error (e.g., log it); for simplicity, we return false here\n    return false\n  }\n  \n  return count > 0\n}\n\n// ...\n\napp.Use(cors.New(cors.Config{\n  AllowOriginsFunc: func(origin string) bool {\n    return dbCheckOrigin(db, origin)\n  },\n}))\n')),(0,a.kt)("h3",{id:"prohibited-usage"},"Prohibited usage"),(0,a.kt)("p",null,"The following example is prohibited because it can expose your application to security risks. It sets ",(0,a.kt)("inlineCode",{parentName:"p"},"AllowOrigins")," to ",(0,a.kt)("inlineCode",{parentName:"p"},'"*"')," (a wildcard) and ",(0,a.kt)("inlineCode",{parentName:"p"},"AllowCredentials")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'app.Use(cors.New(cors.Config{\n    AllowOrigins: "*",\n    AllowCredentials: true,\n}))\n')),(0,a.kt)("p",null,"This will result in the following panic:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"panic: [CORS] 'AllowCredentials' is true, but 'AllowOrigins' cannot be set to `\"*\"`.\n")),(0,a.kt)("h2",{id:"config"},"Config"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Next"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"func(*fiber.Ctx) bool")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Next defines a function to skip this middleware when returned true."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"nil"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"AllowOriginsFunc"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"func(origin string) bool")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"AllowOriginsFunc")," is a function that dynamically determines whether to allow a request based on its origin. If this function returns ",(0,a.kt)("inlineCode",{parentName:"td"},"true"),", the 'Access-Control-Allow-Origin' response header will be set to the request's 'origin' header. This function is only used if the request's origin doesn't match any origin in ",(0,a.kt)("inlineCode",{parentName:"td"},"AllowOrigins"),"."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"nil"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"AllowOrigins"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},'AllowOrigins defines a comma separated list of origins that may access the resource. This supports subdomain matching, so you can use a value like "https://*.example.com" to allow any subdomain of example.com to submit requests.'),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},'"*"'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"AllowMethods"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"AllowMethods defines a list of methods allowed when accessing the resource. This is used in response to a preflight request."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},'"GET,POST,HEAD,PUT,DELETE,PATCH"'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"AllowHeaders"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"AllowHeaders defines a list of request headers that can be used when making the actual request. This is in response to a preflight request."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},'""'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"AllowCredentials"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"bool")),(0,a.kt)("td",{parentName:"tr",align:"left"},"AllowCredentials indicates whether or not the response to the request can be exposed when the credentials flag is true. When used as part of a response to a preflight request, this indicates whether or not the actual request can be made using credentials. Note: If true, AllowOrigins cannot be set to a wildcard (",(0,a.kt)("inlineCode",{parentName:"td"},'"*"'),") to prevent security vulnerabilities."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"false"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ExposeHeaders"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"ExposeHeaders defines whitelist headers that clients are allowed to access."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},'""'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"MaxAge"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"int")),(0,a.kt)("td",{parentName:"tr",align:"left"},"MaxAge indicates how long (in seconds) the results of a preflight request can be cached. If you pass MaxAge 0, the Access-Control-Max-Age header will not be added and the browser will use 5 seconds by default. To disable caching completely, pass MaxAge value negative. It will set the Access-Control-Max-Age header to 0."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"0"))))),(0,a.kt)("h2",{id:"default-config"},"Default Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'var ConfigDefault = Config{\n    Next:         nil,\n    AllowOriginsFunc: nil,\n    AllowOrigins: "*",\n    AllowMethods: strings.Join([]string{\n        fiber.MethodGet,\n        fiber.MethodPost,\n        fiber.MethodHead,\n        fiber.MethodPut,\n        fiber.MethodDelete,\n        fiber.MethodPatch,\n    }, ","),\n    AllowHeaders:     "",\n    AllowCredentials: false,\n    ExposeHeaders:    "",\n    MaxAge:           0,\n}\n')),(0,a.kt)("h2",{id:"subdomain-matching"},"Subdomain Matching"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"AllowOrigins")," configuration supports matching subdomains at any level. This means you can use a value like ",(0,a.kt)("inlineCode",{parentName:"p"},'"https://*.example.com"')," to allow any subdomain of ",(0,a.kt)("inlineCode",{parentName:"p"},"example.com")," to submit requests, including multiple subdomain levels such as ",(0,a.kt)("inlineCode",{parentName:"p"},'"https://sub.sub.example.com"'),"."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,"If you want to allow CORS requests from any subdomain of ",(0,a.kt)("inlineCode",{parentName:"p"},"example.com"),", including nested subdomains, you can configure the ",(0,a.kt)("inlineCode",{parentName:"p"},"AllowOrigins")," like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'app.Use(cors.New(cors.Config{\n    AllowOrigins: "https://*.example.com",\n}))\n')),(0,a.kt)("h1",{id:"how-it-works"},"How It Works"),(0,a.kt)("p",null,"The CORS middleware works by adding the necessary CORS headers to responses from your Fiber application. These headers tell browsers what origins, methods, and headers are allowed for cross-origin requests."),(0,a.kt)("p",null,"When a request comes in, the middleware first checks if it's a preflight request, which is a CORS mechanism to determine whether the actual request is safe to send. Preflight requests are HTTP OPTIONS requests with specific CORS headers. If it's a preflight request, the middleware responds with the appropriate CORS headers and ends the request."),(0,a.kt)("p",null,"If it's not a preflight request, the middleware adds the CORS headers to the response and passes the request to the next handler. The actual CORS headers added depend on the configuration of the middleware."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"AllowOrigins")," option controls which origins can make cross-origin requests. The middleware handles different ",(0,a.kt)("inlineCode",{parentName:"p"},"AllowOrigins")," configurations as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Single origin:")," If ",(0,a.kt)("inlineCode",{parentName:"p"},"AllowOrigins")," is set to a single origin like ",(0,a.kt)("inlineCode",{parentName:"p"},'"http://www.example.com"'),", and that origin matches the origin of the incoming request, the middleware adds the header ",(0,a.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin: http://www.example.com")," to the response.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Multiple origins:")," If ",(0,a.kt)("inlineCode",{parentName:"p"},"AllowOrigins")," is set to multiple origins like ",(0,a.kt)("inlineCode",{parentName:"p"},'"https://example.com, https://www.example.com"'),", the middleware picks the origin that matches the origin of the incoming request.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Subdomain matching:")," If ",(0,a.kt)("inlineCode",{parentName:"p"},"AllowOrigins")," includes ",(0,a.kt)("inlineCode",{parentName:"p"},'"https://*.example.com"'),", a subdomain like ",(0,a.kt)("inlineCode",{parentName:"p"},"https://sub.example.com")," will be matched and ",(0,a.kt)("inlineCode",{parentName:"p"},'"https://sub.example.com"')," will be the header. This will also match ",(0,a.kt)("inlineCode",{parentName:"p"},"https://sub.sub.example.com")," and so on, but not ",(0,a.kt)("inlineCode",{parentName:"p"},"https://example.com"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Wildcard origin:")," If ",(0,a.kt)("inlineCode",{parentName:"p"},"AllowOrigins")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},'"*"'),", the middleware uses that and adds the header ",(0,a.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin: *")," to the response."))),(0,a.kt)("p",null,"In all cases above, except the ",(0,a.kt)("strong",{parentName:"p"},"Wildcard origin"),", the middleware will either add the ",(0,a.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin")," header to the response matching the origin of the incoming request, or it will not add the header at all if the origin is not allowed."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Programmatic origin validation:"),": The middleware also handles the ",(0,a.kt)("inlineCode",{parentName:"li"},"AllowOriginsFunc")," option, which allows you to programmatically determine if an origin is allowed. If ",(0,a.kt)("inlineCode",{parentName:"li"},"AllowOriginsFunc")," returns ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," for an origin, the middleware sets the ",(0,a.kt)("inlineCode",{parentName:"li"},"Access-Control-Allow-Origin")," header to that origin.")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"AllowMethods")," option controls which HTTP methods are allowed. For example, if ",(0,a.kt)("inlineCode",{parentName:"p"},"AllowMethods")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},'"GET, POST"'),", the middleware adds the header ",(0,a.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Methods: GET, POST")," to the response."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"AllowHeaders")," option specifies which headers are allowed in the actual request. The middleware sets the Access-Control-Allow-Headers response header to the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"AllowHeaders"),". This informs the client which headers it can use in the actual request."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"AllowCredentials")," option indicates whether the response to the request can be exposed when the credentials flag is true. If ",(0,a.kt)("inlineCode",{parentName:"p"},"AllowCredentials")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", the middleware adds the header ",(0,a.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Credentials: true")," to the response. To prevent security vulnerabilities, ",(0,a.kt)("inlineCode",{parentName:"p"},"AllowCredentials")," cannot be set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," if ",(0,a.kt)("inlineCode",{parentName:"p"},"AllowOrigins")," is set to a wildcard (",(0,a.kt)("inlineCode",{parentName:"p"},"*"),"). "),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ExposeHeaders")," option defines a whitelist of headers that clients are allowed to access. If ",(0,a.kt)("inlineCode",{parentName:"p"},"ExposeHeaders")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},'"X-Custom-Header"'),", the middleware adds the header ",(0,a.kt)("inlineCode",{parentName:"p"},"Access-Control-Expose-Headers: X-Custom-Header")," to the response."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"MaxAge")," option indicates how long the results of a preflight request can be cached. If ",(0,a.kt)("inlineCode",{parentName:"p"},"MaxAge")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"3600"),", the middleware adds the header ",(0,a.kt)("inlineCode",{parentName:"p"},"Access-Control-Max-Age: 3600")," to the response."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Vary")," header is used in this middleware to inform the client that the server's response to a request. For or both preflight and actual requests, the Vary header is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"Access-Control-Request-Method")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Access-Control-Request-Headers"),". For preflight requests, the Vary header is also set to ",(0,a.kt)("inlineCode",{parentName:"p"},"Origin"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"Vary")," header is important for caching. It helps caches (like a web browser's cache or a CDN) determine when a cached response can be used in response to a future request, and when the server needs to be queried for a new response."),(0,a.kt)("h2",{id:"security-considerations"},"Security Considerations"),(0,a.kt)("p",null,"When configuring CORS, misconfiguration can potentially expose your application to various security risks. Here are some secure configurations and common pitfalls to avoid:"),(0,a.kt)("h3",{id:"secure-configurations"},"Secure Configurations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Specify Allowed Origins"),": Instead of using a wildcard (",(0,a.kt)("inlineCode",{parentName:"p"},'"*"'),"), specify the exact domains allowed to make requests. For example, ",(0,a.kt)("inlineCode",{parentName:"p"},'AllowOrigins: "https://www.example.com, https://api.example.com"')," ensures only these domains can make cross-origin requests to your application.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Use Credentials Carefully"),": If your application needs to support credentials in cross-origin requests, ensure ",(0,a.kt)("inlineCode",{parentName:"p"},"AllowCredentials")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," and specify exact origins in ",(0,a.kt)("inlineCode",{parentName:"p"},"AllowOrigins"),". Do not use a wildcard origin in this case.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Limit Exposed Headers"),": Only whitelist headers that are necessary for the client-side application by setting ",(0,a.kt)("inlineCode",{parentName:"p"},"ExposeHeaders")," appropriately. This minimizes the risk of exposing sensitive information."))),(0,a.kt)("h3",{id:"common-pitfalls"},"Common Pitfalls"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Wildcard Origin with Credentials"),": Setting ",(0,a.kt)("inlineCode",{parentName:"p"},"AllowOrigins")," to ",(0,a.kt)("inlineCode",{parentName:"p"},'"*"')," (a wildcard) and ",(0,a.kt)("inlineCode",{parentName:"p"},"AllowCredentials")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," is a common misconfiguration. This combination is prohibited because it can expose your application to security risks.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Overly Permissive Origins"),": Specifying too many origins or using overly broad patterns (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"https://*.example.com"),") can inadvertently allow malicious sites to interact with your application. Be as specific as possible with allowed origins.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Inadequate ",(0,a.kt)("inlineCode",{parentName:"strong"},"AllowOriginsFunc")," Validation"),": When using ",(0,a.kt)("inlineCode",{parentName:"p"},"AllowOriginsFunc")," for dynamic origin validation, ensure the function includes robust checks to prevent unauthorized origins from being accepted. Overly permissive validation can lead to security vulnerabilities. Never allow ",(0,a.kt)("inlineCode",{parentName:"p"},"AllowOriginsFunc")," to return ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," for all origins. This is particularly crucial when ",(0,a.kt)("inlineCode",{parentName:"p"},"AllowCredentials")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),". Doing so can bypass the restriction of using a wildcard origin with credentials, exposing your application to serious security threats. If you need to allow wildcard origins, use ",(0,a.kt)("inlineCode",{parentName:"p"},"AllowOrigins")," with a wildcard ",(0,a.kt)("inlineCode",{parentName:"p"},'"*"')," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"AllowOriginsFunc"),"."))),(0,a.kt)("p",null,"Remember, the key to secure CORS configuration is specificity and caution. By carefully selecting which origins, methods, and headers are allowed, you can help protect your application from cross-origin attacks."))}m.isMDXComponent=!0}}]);