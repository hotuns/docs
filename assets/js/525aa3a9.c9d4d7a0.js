"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[76209],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(n),k=r,c=m["".concat(l,".").concat(k)]||m[k]||u[k]||i;return n?a.createElement(c,o(o({ref:t},p),{},{components:n})):a.createElement(c,o({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},37649:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={id:"csrf"},o="CSRF",s={unversionedId:"api/middleware/csrf",id:"version-v3.x/api/middleware/csrf",title:"CSRF",description:"The CSRF middleware for Fiber provides protection against Cross-Site Request Forgery (CSRF) attacks. Requests made using methods other than those defined as 'safe' by RFC9110#section-9.2.1 (GET, HEAD, OPTIONS, and TRACE) are validated using tokens. If a potential attack is detected, the middleware will return a default 403 Forbidden error.",source:"@site/versioned_docs/version-v3.x/api/middleware/csrf.md",sourceDirName:"api/middleware",slug:"/api/middleware/csrf",permalink:"/api/middleware/csrf",draft:!1,tags:[],version:"v3.x",lastUpdatedAt:1713272678,formattedLastUpdatedAt:"Apr 16, 2024",frontMatter:{id:"csrf"},sidebar:"tutorialSidebar",previous:{title:"CORS",permalink:"/api/middleware/cors"},next:{title:"EarlyData",permalink:"/api/middleware/earlydata"}},l={},d=[{value:"How to use Fiber&#39;s CSRF Middleware",id:"how-to-use-fibers-csrf-middleware",level:2},{value:"Examples",id:"examples",level:2},{value:"Recipes for Common Use Cases",id:"recipes-for-common-use-cases",level:2},{value:"Signatures",id:"signatures",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:3},{value:"Recommended Config (with session)",id:"recommended-config-with-session",level:3},{value:"Trusted Origins",id:"trusted-origins",level:3},{value:"Example with Explicit Origins",id:"example-with-explicit-origins",level:4},{value:"Example with Subdomain Matching",id:"example-with-subdomain-matching",level:4},{value:"Constants",id:"constants",level:2},{value:"Sentinel Errors",id:"sentinel-errors",level:2},{value:"Errors Returned to Error Handler",id:"errors-returned-to-error-handler",level:3},{value:"Custom Error Handler",id:"custom-error-handler",level:2},{value:"Custom Storage/Database",id:"custom-storagedatabase",level:2},{value:"Token Generation",id:"token-generation",level:2},{value:"Security Considerations",id:"security-considerations",level:2},{value:"Token Validation Patterns",id:"token-validation-patterns",level:3},{value:"Double Submit Cookie Pattern (Default)",id:"double-submit-cookie-pattern-default",level:4},{value:"Synchronizer Token Pattern (with Session)",id:"synchronizer-token-pattern-with-session",level:4},{value:"Defense In Depth",id:"defense-in-depth",level:3},{value:"Referer Checking",id:"referer-checking",level:3},{value:"Token Lifecycle",id:"token-lifecycle",level:3},{value:"Token Reuse",id:"token-reuse",level:4},{value:"Deleting Tokens",id:"deleting-tokens",level:4},{value:"BREACH",id:"breach",level:3}],p={toc:d},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"csrf"},"CSRF"),(0,r.kt)("p",null,"The CSRF middleware for ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber")," provides protection against ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cross-site_request_forgery"},"Cross-Site Request Forgery")," (CSRF) attacks. Requests made using methods other than those defined as 'safe' by ",(0,r.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc9110.html#section-9.2.1"},"RFC9110#section-9.2.1")," (GET, HEAD, OPTIONS, and TRACE) are validated using tokens. If a potential attack is detected, the middleware will return a default 403 Forbidden error."),(0,r.kt)("p",null,"This middleware offers two ",(0,r.kt)("a",{parentName:"p",href:"#token-validation-patterns"},"Token Validation Patterns"),": the ",(0,r.kt)("a",{parentName:"p",href:"#double-submit-cookie-pattern-default"},"Double Submit Cookie Pattern (default)"),", and the ",(0,r.kt)("a",{parentName:"p",href:"#synchronizer-token-pattern-session"},"Synchronizer Token Pattern (with Session)"),"."),(0,r.kt)("p",null,"As a ",(0,r.kt)("a",{parentName:"p",href:"#defense-in-depth"},"Defense In Depth")," measure, this middleware performs ",(0,r.kt)("a",{parentName:"p",href:"#referer-checking"},"Referer Checking")," for HTTPS requests."),(0,r.kt)("h2",{id:"how-to-use-fibers-csrf-middleware"},"How to use Fiber's CSRF Middleware"),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Import the middleware package that is part of the Fiber web framework:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/gofiber/fiber/v3"\n    "github.com/gofiber/fiber/v3/middleware/csrf"\n)\n')),(0,r.kt)("p",null,"After initializing your Fiber app, you can use the following code to initialize the middleware:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// Initialize default config\napp.Use(csrf.New())\n\n// Or extend your config for customization\napp.Use(csrf.New(csrf.Config{\n    KeyLookup:      "header:X-Csrf-Token",\n    CookieName:     "csrf_",\n    CookieSameSite: "Lax",\n    Expiration:     1 * time.Hour,\n    KeyGenerator:   utils.UUIDv4,\n    Extractor:      func(c fiber.Ctx) (string, error) { ... },\n}))\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"KeyLookup will be ignored if Extractor is explicitly set.")),(0,r.kt)("p",null,"Getting the CSRF token in a handler:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func handler(c fiber.Ctx) error {\n    handler := csrf.HandlerFromContext(c)\n    token := csrf.TokenFromContext(c)\n    if handler == nil {\n        panic("csrf middleware handler not registered")\n    }\n    cfg := handler.Config\n    if cfg == nil {\n        panic("csrf middleware handler has no config")\n    }\n    if !strings.Contains(cfg.KeyLookup, ":") {\n        panic("invalid KeyLookup format")\n    }\n    formKey := strings.Split(cfg.KeyLookup, ":")[1]\n    \n    tmpl := fmt.Sprintf(`<form action="/post" method="POST">\n        <input type="hidden" name="%s" value="%s">\n        <input type="text" name="message">\n        <input type="submit" value="Submit">\n    </form>`, formKey, token)\n    c.Set("Content-Type", "text/html")\n    return c.SendString(tmpl)\n}\n')),(0,r.kt)("h2",{id:"recipes-for-common-use-cases"},"Recipes for Common Use Cases"),(0,r.kt)("p",null,"There are two basic use cases for the CSRF middleware:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Without Sessions"),": This is the simplest way to use the middleware. It uses the Double Submit Cookie Pattern and does not require a user session."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"See GoFiber recipe ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/gofiber/recipes/tree/master/csrf"},"CSRF")," for an example of using the CSRF middleware without a user session."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"With Sessions"),": This is generally considered more secure. It uses the Synchronizer Token Pattern and requires a user session, and the use of pre-session, which prevents login CSRF attacks."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"See GoFiber recipe ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/gofiber/recipes/tree/master/csrf-with-session"},"CSRF with Session")," for an example of using the CSRF middleware with a user session.")))),(0,r.kt)("h2",{id:"signatures"},"Signatures"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) fiber.Handler\nfunc TokenFromContext(c fiber.Ctx) string\nfunc HandlerFromContext(c fiber.Ctx) *Handler\n\nfunc (h *Handler) DeleteToken(c fiber.Ctx) error\n")),(0,r.kt)("h2",{id:"config"},"Config"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Next"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"func(fiber.Ctx) bool")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Next defines a function to skip this middleware when returned true."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nil"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"KeyLookup"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},'KeyLookup is a string in the form of "',(0,r.kt)("inlineCode",{parentName:"td"},"<source>:<key>"),'" that is used to create an Extractor that extracts the token from the request. Possible values: "',(0,r.kt)("inlineCode",{parentName:"td"},"header:<name>"),'", "',(0,r.kt)("inlineCode",{parentName:"td"},"query:<name>"),'", "',(0,r.kt)("inlineCode",{parentName:"td"},"param:<name>"),'", "',(0,r.kt)("inlineCode",{parentName:"td"},"form:<name>"),'", "',(0,r.kt)("inlineCode",{parentName:"td"},"cookie:<name>"),'". Ignored if an Extractor is explicitly set.'),(0,r.kt)("td",{parentName:"tr",align:"left"},'"header:X-CSRF-Token"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CookieName"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Name of the csrf cookie. This cookie will store the csrf key."),(0,r.kt)("td",{parentName:"tr",align:"left"},'"csrf_"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CookieDomain"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Domain of the CSRF cookie."),(0,r.kt)("td",{parentName:"tr",align:"left"},'""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CookiePath"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Path of the CSRF cookie."),(0,r.kt)("td",{parentName:"tr",align:"left"},'""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CookieSecure"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Indicates if the CSRF cookie is secure."),(0,r.kt)("td",{parentName:"tr",align:"left"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CookieHTTPOnly"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Indicates if the CSRF cookie is HTTP-only."),(0,r.kt)("td",{parentName:"tr",align:"left"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CookieSameSite"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Value of SameSite cookie."),(0,r.kt)("td",{parentName:"tr",align:"left"},'"Lax"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CookieSessionOnly"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Decides whether the cookie should last for only the browser session. Ignores Expiration if set to true."),(0,r.kt)("td",{parentName:"tr",align:"left"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Expiration"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"time.Duration")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Expiration is the duration before the CSRF token will expire."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1 * time.Hour")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"KeyGenerator"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"func() string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"KeyGenerator creates a new CSRF token."),(0,r.kt)("td",{parentName:"tr",align:"left"},"utils.UUID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ErrorHandler"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"fiber.ErrorHandler")),(0,r.kt)("td",{parentName:"tr",align:"left"},"ErrorHandler is executed when an error is returned from fiber.Handler."),(0,r.kt)("td",{parentName:"tr",align:"left"},"DefaultErrorHandler")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Extractor"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"func(fiber.Ctx) (string, error)")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Extractor returns the CSRF token. If set, this will be used in place of an Extractor based on KeyLookup."),(0,r.kt)("td",{parentName:"tr",align:"left"},"Extractor based on KeyLookup")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"SingleUseToken"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:"left"},"SingleUseToken indicates if the CSRF token be destroyed and a new one generated on each use. (See TokenLifecycle)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Storage"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"fiber.Storage")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Store is used to store the state of the middleware."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nil"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Session"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"*session.Store")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Session is used to store the state of the middleware. Overrides Storage if set."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nil"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"SessionKey"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"SessionKey is the key used to store the token in the session."),(0,r.kt)("td",{parentName:"tr",align:"left"},'"csrfToken"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TrustedOrigins"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"[]string")),(0,r.kt)("td",{parentName:"tr",align:"left"},'TrustedOrigins is a list of trusted origins for unsafe requests. This supports subdomain matching, so you can use a value like "https://*.example.com" to allow any subdomain of example.com to submit requests.'),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"[]"))))),(0,r.kt)("h3",{id:"default-config"},"Default Config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'var ConfigDefault = Config{\n    KeyLookup:         "header:" + HeaderName,\n    CookieName:        "csrf_",\n    CookieSameSite:    "Lax",\n    Expiration:        1 * time.Hour,\n    KeyGenerator:      utils.UUIDv4,\n    ErrorHandler:      defaultErrorHandler,\n    Extractor:         FromHeader(HeaderName),\n    SessionKey:        "csrfToken",\n}\n')),(0,r.kt)("h3",{id:"recommended-config-with-session"},"Recommended Config (with session)"),(0,r.kt)("p",null,"It's recommended to use this middleware with ",(0,r.kt)("a",{parentName:"p",href:"https://docs.gofiber.io/api/middleware/session"},"fiber/middleware/session")," to store the CSRF token within the session. This is generally more secure than the default configuration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'var ConfigDefault = Config{\n    KeyLookup:         "header:" + HeaderName,\n    CookieName:        "__Host-csrf_",\n    CookieSameSite:    "Lax",\n    CookieSecure:      true,\n    CookieSessionOnly: true,\n    CookieHTTPOnly:    true,\n    Expiration:        1 * time.Hour,\n    KeyGenerator:      utils.UUIDv4,\n    ErrorHandler:      defaultErrorHandler,\n    Extractor:         FromHeader(HeaderName),\n    Session:           session.Store,\n    SessionKey:        "csrfToken",\n}\n')),(0,r.kt)("h3",{id:"trusted-origins"},"Trusted Origins"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"TrustedOrigins")," option is used to specify a list of trusted origins for unsafe requests. This is useful when you want to allow requests from other origins. This supports matching subdomains at any level. This means you can use a value like ",(0,r.kt)("inlineCode",{parentName:"p"},'"https://*.example.com"')," to allow any subdomain of ",(0,r.kt)("inlineCode",{parentName:"p"},"example.com")," to submit requests, including multiple subdomain levels such as ",(0,r.kt)("inlineCode",{parentName:"p"},'"https://sub.sub.example.com"'),"."),(0,r.kt)("p",null,"To ensure that the provided ",(0,r.kt)("inlineCode",{parentName:"p"},"TrustedOrigins")," origins are correctly formatted, this middleware validates and normalizes them. It checks for valid schemes, i.e., HTTP or HTTPS, and it will automatically remove trailing slashes. If the provided origin is invalid, the middleware will panic."),(0,r.kt)("h4",{id:"example-with-explicit-origins"},"Example with Explicit Origins"),(0,r.kt)("p",null,"In the following example, the CSRF middleware will allow requests from ",(0,r.kt)("inlineCode",{parentName:"p"},"trusted.example.com"),", in addition to the current host."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'app.Use(csrf.New(csrf.Config{\n    TrustedOrigins: []string{"https://trusted.example.com"},\n}))\n')),(0,r.kt)("h4",{id:"example-with-subdomain-matching"},"Example with Subdomain Matching"),(0,r.kt)("p",null,"In the following example, the CSRF middleware will allow requests from any subdomain of ",(0,r.kt)("inlineCode",{parentName:"p"},"example.com"),", in addition to the current host."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'app.Use(csrf.New(csrf.Config{\n    TrustedOrigins: []string{"https://*.example.com"},\n}))\n')),(0,r.kt)("p",null,"::caution\nWhen using ",(0,r.kt)("inlineCode",{parentName:"p"},"TrustedOrigins")," with subdomain matching, make sure you control and trust all the subdomains, including all subdomain levels. If not, an attacker could create a subdomain under a trusted origin and use it to send harmful requests.\n:::"),(0,r.kt)("h2",{id:"constants"},"Constants"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'const (\n    HeaderName = "X-Csrf-Token"\n)\n')),(0,r.kt)("h2",{id:"sentinel-errors"},"Sentinel Errors"),(0,r.kt)("p",null,"The CSRF middleware utilizes a set of sentinel errors to handle various scenarios and communicate errors effectively. These can be used within a ",(0,r.kt)("a",{parentName:"p",href:"#custom-error-handler"},"custom error handler")," to handle errors returned by the middleware."),(0,r.kt)("h3",{id:"errors-returned-to-error-handler"},"Errors Returned to Error Handler"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ErrTokenNotFound"),": Indicates that the CSRF token was not found."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ErrTokenInvalid"),": Indicates that the CSRF token is invalid."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ErrRefererNotFound"),": Indicates that the referer was not supplied."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ErrRefererInvalid"),": Indicates that the referer is invalid."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ErrRefererNoMatch"),": Indicates that the referer does not match host and is not a trusted origin."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ErrOriginInvalid"),": Indicates that the origin is invalid."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ErrOriginNoMatch"),": Indicates that the origin does not match host and is not a trusted origin.")),(0,r.kt)("p",null,"If you use the default error handler, the client will receive a 403 Forbidden error without any additional information."),(0,r.kt)("h2",{id:"custom-error-handler"},"Custom Error Handler"),(0,r.kt)("p",null,"You can use a custom error handler to handle errors returned by the CSRF middleware. The error handler is executed when an error is returned from the middleware. The error handler is passed the error returned from the middleware and the fiber.Ctx."),(0,r.kt)("p",null,"Example, returning a JSON response for API requests and rendering an error page for other requests:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'app.Use(csrf.New(csrf.Config{\n    ErrorHandler: func(c fiber.Ctx, err error) error {\n        accepts := c.Accepts("html", "json")\n        path := c.Path()\n        if accepts == "json" || strings.HasPrefix(path, "/api/") {\n            return c.Status(fiber.StatusForbidden).JSON(fiber.Map{\n                "error": "Forbidden",\n            })\n        }\n        return c.Status(fiber.StatusForbidden).Render("error", fiber.Map{\n            "Title": "Forbidden",\n            "Status": fiber.StatusForbidden,\n        }, "layouts/main")\n    },\n}))\n')),(0,r.kt)("h2",{id:"custom-storagedatabase"},"Custom Storage/Database"),(0,r.kt)("p",null,"You can use any storage from our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gofiber/storage/"},"storage")," package."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"storage := sqlite3.New() // From github.com/gofiber/storage/sqlite3\napp.Use(csrf.New(csrf.Config{\n    Storage: storage,\n}))\n")),(0,r.kt)("h1",{id:"how-it-works"},"How It Works"),(0,r.kt)("h2",{id:"token-generation"},"Token Generation"),(0,r.kt)("p",null,"CSRF tokens are generated on 'safe' requests and when the existing token has expired or hasn't been set yet. If ",(0,r.kt)("inlineCode",{parentName:"p"},"SingleUseToken")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", a new token is generated after each use.  Retrieve the CSRF token using ",(0,r.kt)("inlineCode",{parentName:"p"},"csrf.TokenFromContext(c)"),"."),(0,r.kt)("h2",{id:"security-considerations"},"Security Considerations"),(0,r.kt)("p",null,"This middleware is designed to protect against CSRF attacks but does not protect against other attack vectors, such as XSS. It should be used in combination with other security measures."),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Never use 'safe' methods to mutate data, for example, never use a GET request to modify a resource. This middleware will not protect against CSRF attacks on 'safe' methods.")),(0,r.kt)("h3",{id:"token-validation-patterns"},"Token Validation Patterns"),(0,r.kt)("h4",{id:"double-submit-cookie-pattern-default"},"Double Submit Cookie Pattern (Default)"),(0,r.kt)("p",null,"By default, the middleware generates and stores tokens using the ",(0,r.kt)("inlineCode",{parentName:"p"},"fiber.Storage")," interface. These tokens are not linked to any particular user session, and they are validated using the Double Submit Cookie pattern.  The token is stored in a cookie, and then sent as a header on requests. The middleware compares the cookie value with the header value to validate the token. This is a secure pattern that does not require a user session."),(0,r.kt)("p",null,"When the authorization status changes, the previously issued token MUST be deleted, and a new one generated. See ",(0,r.kt)("a",{parentName:"p",href:"#token-lifecycle"},"Token Lifecycle")," ",(0,r.kt)("a",{parentName:"p",href:"#deleting-tokens"},"Deleting Tokens")," for more information."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"When using this pattern, it's important to set the ",(0,r.kt)("inlineCode",{parentName:"p"},"CookieSameSite")," option to ",(0,r.kt)("inlineCode",{parentName:"p"},"Lax")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Strict")," and ensure that the Extractor is not ",(0,r.kt)("inlineCode",{parentName:"p"},"FromCookie"),", and KeyLookup is not ",(0,r.kt)("inlineCode",{parentName:"p"},"cookie:<name>"),".")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"When using this pattern, this middleware uses our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gofiber/storage"},"Storage")," package to support various databases through a single interface. The default configuration for Storage saves data to memory. See ",(0,r.kt)("a",{parentName:"p",href:"#custom-storagedatabase"},"Custom Storage/Database")," for customizing the storage.")),(0,r.kt)("h4",{id:"synchronizer-token-pattern-with-session"},"Synchronizer Token Pattern (with Session)"),(0,r.kt)("p",null,"When using this middleware with a user session, the middleware can be configured to store the token within the session. This method is recommended when using a user session, as it is generally more secure than the Double Submit Cookie Pattern."),(0,r.kt)("p",null,"When using this pattern it's important to regenerate the session when the authorization status changes, this will also delete the token. See: ",(0,r.kt)("a",{parentName:"p",href:"#token-lifecycle"},"Token Lifecycle")," for more information."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Pre-sessions are required and will be created automatically if not present. Use a session value to indicate authentication instead of relying on the presence of a session.")),(0,r.kt)("h3",{id:"defense-in-depth"},"Defense In Depth"),(0,r.kt)("p",null,"When using this middleware, it's recommended to serve your pages over HTTPS, set the ",(0,r.kt)("inlineCode",{parentName:"p"},"CookieSecure")," option to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", and set the ",(0,r.kt)("inlineCode",{parentName:"p"},"CookieSameSite")," option to ",(0,r.kt)("inlineCode",{parentName:"p"},"Lax")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Strict"),". This ensures that the cookie is only sent over HTTPS and not on requests from external sites."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Cookie prefixes ",(0,r.kt)("inlineCode",{parentName:"p"},"__Host-")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"__Secure-")," can be used to further secure the cookie. Note that these prefixes are not supported by all browsers and there are other limitations. See ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#cookie_prefixes"},"MDN#Set-Cookie#cookie_prefixes")," for more information."),(0,r.kt)("p",{parentName:"admonition"},"To use these prefixes, set the ",(0,r.kt)("inlineCode",{parentName:"p"},"CookieName")," option to ",(0,r.kt)("inlineCode",{parentName:"p"},"__Host-csrf_")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"__Secure-csrf_"),".")),(0,r.kt)("h3",{id:"referer-checking"},"Referer Checking"),(0,r.kt)("p",null,"For HTTPS requests, this middleware performs strict referer checking. Even if a subdomain can set or modify cookies on your domain, it can't force a user to post to your application, since that request won't come from your own exact domain."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"When HTTPS requests are protected by CSRF, referer checking is always carried out."),(0,r.kt)("p",{parentName:"admonition"},"The Referer header is automatically included in requests by all modern browsers, including those made using the JS Fetch API. However, if you're making use of this middleware with a custom client, it's important to ensure that the client sends a valid Referer header.")),(0,r.kt)("h3",{id:"token-lifecycle"},"Token Lifecycle"),(0,r.kt)("p",null,"Tokens are valid until they expire or until they are deleted. By default, tokens are valid for 1 hour, and each subsequent request extends the expiration by 1 hour. The token only expires if the user doesn't make a request for the duration of the expiration time."),(0,r.kt)("h4",{id:"token-reuse"},"Token Reuse"),(0,r.kt)("p",null,"By default, tokens may be used multiple times. If you want to delete the token after it has been used, you can set the ",(0,r.kt)("inlineCode",{parentName:"p"},"SingleUseToken")," option to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),". This will delete the token after it has been used, and a new token will be generated on the next request."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"SingleUseToken")," comes with usability trade-offs and is not enabled by default. For example, it can interfere with the user experience if the user has multiple tabs open or uses the back button.")),(0,r.kt)("h4",{id:"deleting-tokens"},"Deleting Tokens"),(0,r.kt)("p",null,"When the authorization status changes, the CSRF token MUST be deleted, and a new one generated. This can be done by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"handler.DeleteToken(c)"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"handler := csrf.HandlerFromContext(ctx)\nif handler != nil {\n    if err := handler.DeleteToken(app.AcquireCtx(ctx)); err != nil {\n        // handle error\n    }\n}\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you are using this middleware with the fiber session middleware, then you can simply call ",(0,r.kt)("inlineCode",{parentName:"p"},"session.Destroy()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"session.Regenerate()"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"session.Reset()")," to delete the session and the token stored therein.")),(0,r.kt)("h3",{id:"breach"},"BREACH"),(0,r.kt)("p",null,"It's important to note that the token is sent as a header on every request. If you include the token in a page that is vulnerable to ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/BREACH"},"BREACH"),", an attacker may be able to extract the token. To mitigate this, ensure your pages are served over HTTPS, disable HTTP compression, and implement rate limiting for requests."))}u.isMDXComponent=!0}}]);