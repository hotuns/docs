"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[74834],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(n),f=r,u=m["".concat(l,".").concat(f)]||m[f]||k[f]||i;return n?a.createElement(u,o(o({ref:t},p),{},{components:n})):a.createElement(u,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},43554:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={id:"csrf"},o="CSRF",s={unversionedId:"api/middleware/csrf",id:"version-v2.x/api/middleware/csrf",title:"CSRF",description:'CSRF middleware for Fiber that provides Cross-site request forgery protection by passing a csrf token via cookies. This cookie value will be used to compare against the client csrf token on requests, other than those defined as "safe" by RFC9110#section-9.2.1 \\(GET, HEAD, OPTIONS, or TRACE\\). When the csrf token is invalid, this middleware will return the fiber.ErrForbidden error.',source:"@site/versioned_docs/version-v2.x/api/middleware/csrf.md",sourceDirName:"api/middleware",slug:"/api/middleware/csrf",permalink:"/api/middleware/csrf",draft:!1,tags:[],version:"v2.x",lastUpdatedAt:1697458713,formattedLastUpdatedAt:"Oct 16, 2023",frontMatter:{id:"csrf"},sidebar:"tutorialSidebar",previous:{title:"CORS",permalink:"/api/middleware/cors"},next:{title:"EarlyData",permalink:"/api/middleware/earlydata"}},l={},d=[{value:"Security Considerations",id:"security-considerations",level:2},{value:"The Double Submit Cookie Pattern (Default)",id:"the-double-submit-cookie-pattern-default",level:3},{value:"The Synchronizer Token Pattern (Session)",id:"the-synchronizer-token-pattern-session",level:3},{value:"Defense In Depth",id:"defense-in-depth",level:3},{value:"Referer Checking",id:"referer-checking",level:3},{value:"Token Lifecycle",id:"token-lifecycle",level:3},{value:"Token Reuse",id:"token-reuse",level:4},{value:"Deleting Tokens",id:"deleting-tokens",level:4},{value:"BREACH",id:"breach",level:3},{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Use with fiber/middleware/session (recommended)",id:"use-with-fibermiddlewaresession-recommended",level:3},{value:"Config",id:"config",level:2},{value:"Config",id:"config-1",level:3},{value:"Default Config",id:"default-config",level:2},{value:"Recommended Config (with session)",id:"recommended-config-with-session",level:2},{value:"Constants",id:"constants",level:2},{value:"Custom Storage/Database",id:"custom-storagedatabase",level:3}],p={toc:d},m="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"csrf"},"CSRF"),(0,r.kt)("p",null,"CSRF middleware for ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber")," that provides ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cross-site_request_forgery"},"Cross-site request forgery"),' protection by passing a csrf token via cookies. This cookie value will be used to compare against the client csrf token on requests, other than those defined as "safe" by ',(0,r.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc9110.html#section-9.2.1"},"RFC9110#section-9.2.1")," ","(","GET, HEAD, OPTIONS, or TRACE",")",". When the csrf token is invalid, this middleware will return the ",(0,r.kt)("inlineCode",{parentName:"p"},"fiber.ErrForbidden")," error. "),(0,r.kt)("p",null,"CSRF Tokens are generated on GET requests. You can retrieve the CSRF token with ",(0,r.kt)("inlineCode",{parentName:"p"},"c.Locals(contextKey)"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"contextKey")," is the string you set in the config (see Custom Config below)."),(0,r.kt)("p",null,"When no ",(0,r.kt)("inlineCode",{parentName:"p"},"csrf_")," cookie is set, or the token has expired, a new token will be generated and ",(0,r.kt)("inlineCode",{parentName:"p"},"csrf_")," cookie set."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This middleware uses our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gofiber/storage"},"Storage")," package to support various databases through a single interface. The default configuration for this middleware saves data to memory, see the examples below for other databases.")),(0,r.kt)("h2",{id:"security-considerations"},"Security Considerations"),(0,r.kt)("p",null,"This middleware is designed to protect against CSRF attacks. It does not protect against other attack vectors, such as XSS, and should be used in combination with other security measures."),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Never use 'safe' methods to mutate data. For example, never use a GET request to delete a resource. This middleware will not protect against CSRF attacks on 'safe' methods.")),(0,r.kt)("h3",{id:"the-double-submit-cookie-pattern-default"},"The Double Submit Cookie Pattern (Default)"),(0,r.kt)("p",null,"In the default configuration, the middleware will generate and store tokens using the ",(0,r.kt)("inlineCode",{parentName:"p"},"fiber.Storage")," interface. These tokens are not associated with a user session, and, therefore, a Double Submit Cookie pattern is used to validate the token. This means that the token is stored in a cookie and also sent as a header on requests. The middleware will compare the cookie value with the header value to validate the token. This is a secure method of validating the token, as cookies are not accessible to JavaScript and, therefore, cannot be read by an attacker."),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"When using this method, it is important that you set the ",(0,r.kt)("inlineCode",{parentName:"p"},"CookieSameSite")," option to ",(0,r.kt)("inlineCode",{parentName:"p"},"Lax")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Strict")," and that the Extractor is not ",(0,r.kt)("inlineCode",{parentName:"p"},"CsrfFromCookie"),", and KeyLookup is not ",(0,r.kt)("inlineCode",{parentName:"p"},"cookie:<name>"),".")),(0,r.kt)("h3",{id:"the-synchronizer-token-pattern-session"},"The Synchronizer Token Pattern (Session)"),(0,r.kt)("p",null,"When using this middleware with a user session, the middleware can be configured to store the token in the session. This method is recommended when using a user session as it is generally more secure than the Double Submit Cookie Pattern."),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"When using this method, pre-sessions are required and will be created if a session is not already present. This means that the middleware will create a session for every safe request, even if the request does not require a session. Therefore it is required that the existence of a session is not used to indicate that a user is logged in or authenticated, and that a session value is used to indicate this instead.")),(0,r.kt)("h3",{id:"defense-in-depth"},"Defense In Depth"),(0,r.kt)("p",null,"When using this middleware, it is recommended that you serve your pages over HTTPS, that the ",(0,r.kt)("inlineCode",{parentName:"p"},"CookieSecure")," option is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", and that the ",(0,r.kt)("inlineCode",{parentName:"p"},"CookieSameSite")," option is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"Lax")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Strict"),". This will ensure that the cookie is only sent over HTTPS and that it is not sent on requests from external sites."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Cookie prefixes ",(0,r.kt)("strong",{parentName:"p"},"Host- and "),"Secure- can be used to further secure the cookie. However, these prefixes are not supported by all browsers and there are some other limitations. See ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#cookie_prefixes"},"MDN#Set-Cookie#cookie_prefixes")," for more information."),(0,r.kt)("p",{parentName:"admonition"},"To use these prefixes, set the ",(0,r.kt)("inlineCode",{parentName:"p"},"CookieName")," option to ",(0,r.kt)("inlineCode",{parentName:"p"},"__Host-csrf_")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"__Secure-csrf_"),".")),(0,r.kt)("h3",{id:"referer-checking"},"Referer Checking"),(0,r.kt)("p",null,"For HTTPS requests, this middleware performs strict referer checking. This means that even if a subdomain can set or modify cookies on your domain, it can\u2019t force a user to post to your application since that request won\u2019t come from your own exact domain."),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Referer checking is required for https requests protected by CSRF. All modern browsers will automatically include the Referer header in requests, including those made with the JS Fetch API. However, if you are using this middleware with a custom client you must ensure that the client sends a valid Referer header.")),(0,r.kt)("h3",{id:"token-lifecycle"},"Token Lifecycle"),(0,r.kt)("p",null,"Tokens are valid until they expire, or until they are deleted. By default, tokens are valid for 1 hour and each subsequent request will extend the expiration by 1 hour. This means that if a user makes a request every hour, the token will never expire. If a user makes a request after the token has expired, then a new token will be generated and the ",(0,r.kt)("inlineCode",{parentName:"p"},"csrf_")," cookie will be set again. This means that the token will only expire if the user does not make a request for the duration of the expiration time."),(0,r.kt)("h4",{id:"token-reuse"},"Token Reuse"),(0,r.kt)("p",null,"By default tokens may be used multiple times. This means that the token will not be deleted after it has been used. If you would like to delete the token after it has been used, then you can set the ",(0,r.kt)("inlineCode",{parentName:"p"},"SingleUseToken")," option to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),". This will delete the token after it has been used, and a new token will be generated on the next request."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"SingleUseToken")," comes with usability tradeoffs, and therefore is not enabled by default. It can interfere with the user experience if the user has multiple tabs open, or if the user uses the back button.")),(0,r.kt)("h4",{id:"deleting-tokens"},"Deleting Tokens"),(0,r.kt)("p",null,"When the authorization status changes, the CSRF token should be deleted and a new one generated. This can be done by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"handler.DeleteToken(c)"),". This will remove the token found in the request context from the storage and set the ",(0,r.kt)("inlineCode",{parentName:"p"},"csrf_")," cookie to an empty value. The next 'safe' request will generate a new token and set the cookie again."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"if handler, ok := app.AcquireCtx(ctx).Locals(ConfigDefault.HandlerContextKey).(*CSRFHandler); ok {\n    if err := handler.DeleteToken(app.AcquireCtx(ctx)); err != nil {\n        // handle error\n    }\n}\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you are using this middleware with the fiber session middleware, then you can simply call ",(0,r.kt)("inlineCode",{parentName:"p"},"session.Destroy()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"session.Regenerate()"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"session.Reset()")," to delete session and the token stored therein.")),(0,r.kt)("h3",{id:"breach"},"BREACH"),(0,r.kt)("p",null,"It is important to note that the token is sent as a header on every request, and if you include the token in a page that is vulnerable to ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/BREACH"},"BREACH"),", then an attacker may be able to extract the token. To mitigate this, you should take steps such as ensuring that your pages are served over HTTPS, that HTTP compression is disabled, and rate limiting requests."),(0,r.kt)("h2",{id:"signatures"},"Signatures"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) fiber.Handler\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Import the middleware package that is part of the Fiber web framework"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/csrf"\n)\n')),(0,r.kt)("p",null,"After you initiate your Fiber app, you can use the following possibilities:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// Initialize default config\napp.Use(csrf.New())\n\n// Or extend your config for customization\napp.Use(csrf.New(csrf.Config{\n    KeyLookup:      "header:X-Csrf-Token",\n    CookieName:     "csrf_",\n    CookieSameSite: "Lax",\n    Expiration:     1 * time.Hour,\n    KeyGenerator:   utils.UUIDv4,\n    Extractor:      func(c *fiber.Ctx) (string, error) { ... },\n}))\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"KeyLookup will be ignored if Extractor is explicitly set.")),(0,r.kt)("h3",{id:"use-with-fibermiddlewaresession-recommended"},"Use with fiber/middleware/session (recommended)"),(0,r.kt)("p",null,"It's recommended to use this middleware with ",(0,r.kt)("a",{parentName:"p",href:"https://docs.gofiber.io/api/middleware/session"},"fiber/middleware/session")," to store the CSRF token in the session. This is generally more secure than the default configuration."),(0,r.kt)("h2",{id:"config"},"Config"),(0,r.kt)("h3",{id:"config-1"},"Config"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Next"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"func(*fiber.Ctx) bool")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Next defines a function to skip this middleware when returned true."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nil"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"KeyLookup"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},'KeyLookup is a string in the form of "',(0,r.kt)("inlineCode",{parentName:"td"},"<source>:<key>"),'" that is used to create an Extractor that extracts the token from the request. Possible values: "',(0,r.kt)("inlineCode",{parentName:"td"},"header:<name>"),'", "',(0,r.kt)("inlineCode",{parentName:"td"},"query:<name>"),'", "',(0,r.kt)("inlineCode",{parentName:"td"},"param:<name>"),'", "',(0,r.kt)("inlineCode",{parentName:"td"},"form:<name>"),'", "',(0,r.kt)("inlineCode",{parentName:"td"},"cookie:<name>"),'". Ignored if an Extractor is explicitly set.'),(0,r.kt)("td",{parentName:"tr",align:"left"},'"header:X-CSRF-Token"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CookieName"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Name of the csrf cookie. This cookie will store the csrf key."),(0,r.kt)("td",{parentName:"tr",align:"left"},'"csrf_"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CookieDomain"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Domain of the CSRF cookie."),(0,r.kt)("td",{parentName:"tr",align:"left"},'""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CookiePath"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Path of the CSRF cookie."),(0,r.kt)("td",{parentName:"tr",align:"left"},'""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CookieSecure"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Indicates if the CSRF cookie is secure."),(0,r.kt)("td",{parentName:"tr",align:"left"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CookieHTTPOnly"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Indicates if the CSRF cookie is HTTP-only."),(0,r.kt)("td",{parentName:"tr",align:"left"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CookieSameSite"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Value of SameSite cookie."),(0,r.kt)("td",{parentName:"tr",align:"left"},'"Lax"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CookieSessionOnly"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Decides whether the cookie should last for only the browser session. Ignores Expiration if set to true."),(0,r.kt)("td",{parentName:"tr",align:"left"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Expiration"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"time.Duration")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Expiration is the duration before the CSRF token will expire."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1 * time.Hour")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"SingleUseToken"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:"left"},"SingleUseToken indicates if the CSRF token be destroyed and a new one generated on each use. (See TokenLifecycle)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Storage"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"fiber.Storage")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Store is used to store the state of the middleware."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nil"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Session"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"*session.Store")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Session is used to store the state of the middleware. Overrides Storage if set."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nil"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"SessionKey"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"SessionKey is the key used to store the token in the session."),(0,r.kt)("td",{parentName:"tr",align:"left"},'"fiber.csrf.token"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ContextKey"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Context key to store the generated CSRF token into the context. If left empty, the token will not be stored in the context."),(0,r.kt)("td",{parentName:"tr",align:"left"},'""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"KeyGenerator"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"func() string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"KeyGenerator creates a new CSRF token."),(0,r.kt)("td",{parentName:"tr",align:"left"},"utils.UUID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CookieExpires"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"time.Duration")," (Deprecated)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Deprecated: Please use Expiration."),(0,r.kt)("td",{parentName:"tr",align:"left"},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Cookie"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"*fiber.Cookie")," (Deprecated)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Deprecated: Please use Cookie* related fields."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nil"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TokenLookup"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," (Deprecated)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Deprecated: Please use KeyLookup."),(0,r.kt)("td",{parentName:"tr",align:"left"},'""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ErrorHandler"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"fiber.ErrorHandler")),(0,r.kt)("td",{parentName:"tr",align:"left"},"ErrorHandler is executed when an error is returned from fiber.Handler."),(0,r.kt)("td",{parentName:"tr",align:"left"},"DefaultErrorHandler")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Extractor"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"func(*fiber.Ctx) (string, error)")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Extractor returns the CSRF token. If set, this will be used in place of an Extractor based on KeyLookup."),(0,r.kt)("td",{parentName:"tr",align:"left"},"Extractor based on KeyLookup")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"HandlerContextKey"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"HandlerContextKey is used to store the CSRF Handler into context."),(0,r.kt)("td",{parentName:"tr",align:"left"},'"fiber.csrf.handler"')))),(0,r.kt)("h2",{id:"default-config"},"Default Config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'var ConfigDefault = Config{\n    KeyLookup:         "header:" + HeaderName,\n    CookieName:        "csrf_",\n    CookieSameSite:    "Lax",\n    Expiration:        1 * time.Hour,\n    KeyGenerator:      utils.UUIDv4,\n    ErrorHandler:      defaultErrorHandler,\n    Extractor:         CsrfFromHeader(HeaderName),\n    SessionKey:        "fiber.csrf.token",\n    HandlerContextKey: "fiber.csrf.handler",\n}\n')),(0,r.kt)("h2",{id:"recommended-config-with-session"},"Recommended Config (with session)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'var ConfigDefault = Config{\n    KeyLookup:         "header:" + HeaderName,\n    CookieName:        "csrf_",\n    CookieSameSite:    "Lax",\n    CookieSessionOnly: true,\n    CookieHTTPOnly:    true,\n    Expiration:        1 * time.Hour,\n    KeyGenerator:      utils.UUIDv4,\n    ErrorHandler:      defaultErrorHandler,\n    Extractor:         CsrfFromHeader(HeaderName),\n    Session:           session.Store,\n    SessionKey:        "fiber.csrf.token",\n    HandlerContextKey: "fiber.csrf.handler",\n}\n')),(0,r.kt)("h2",{id:"constants"},"Constants"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'const (\n    HeaderName = "X-Csrf-Token"\n)\n')),(0,r.kt)("h3",{id:"custom-storagedatabase"},"Custom Storage/Database"),(0,r.kt)("p",null,"You can use any storage from our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gofiber/storage/"},"storage")," package."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"storage := sqlite3.New() // From github.com/gofiber/storage/sqlite3\napp.Use(csrf.New(csrf.Config{\n    Storage: storage,\n}))\n")))}k.isMDXComponent=!0}}]);