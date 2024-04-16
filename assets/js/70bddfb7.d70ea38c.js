"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[542],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),k=r,g=m["".concat(d,".").concat(k)]||m[k]||u[k]||l;return n?a.createElement(g,i(i({ref:t},s),{},{components:n})):a.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},61130:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={id:"fiber",title:"\ud83d\udce6 Fiber",description:"Fiber represents the fiber package where you start to create an instance.",sidebar_position:1},i=void 0,o={unversionedId:"api/fiber",id:"api/fiber",title:"\ud83d\udce6 Fiber",description:"Fiber represents the fiber package where you start to create an instance.",source:"@site/docs/core/api/fiber.md",sourceDirName:"api",slug:"/api/fiber",permalink:"/next/api/fiber",draft:!1,editUrl:"https://github.com/gofiber/fiber/edit/master/docs/api/fiber.md",tags:[],version:"current",lastUpdatedAt:1713272678,formattedLastUpdatedAt:"Apr 16, 2024",sidebarPosition:1,frontMatter:{id:"fiber",title:"\ud83d\udce6 Fiber",description:"Fiber represents the fiber package where you start to create an instance.",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/next/category/api"},next:{title:"\ud83d\ude80 App",permalink:"/next/api/app"}},d={},p=[{value:"Server start",id:"server-start",level:2},{value:"New",id:"new",level:3},{value:"Config",id:"config",level:3},{value:"Config fields",id:"config-fields",level:4},{value:"Server listening",id:"server-listening",level:2},{value:"Config",id:"config-1",level:3},{value:"Config fields",id:"config-fields-1",level:4},{value:"Listen",id:"listen",level:3},{value:"Prefork",id:"prefork",level:4},{value:"TLS",id:"tls",level:4},{value:"TLS with certificate",id:"tls-with-certificate",level:4},{value:"TLS with certFile, keyFile and clientCertFile",id:"tls-with-certfile-keyfile-and-clientcertfile",level:4},{value:"Listener",id:"listener",level:3},{value:"Server",id:"server",level:2},{value:"Server Shutdown",id:"server-shutdown",level:2},{value:"Helper functions",id:"helper-functions",level:2},{value:"NewError",id:"newerror",level:3},{value:"IsChild",id:"ischild",level:3}],s={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"server-start"},"Server start"),(0,r.kt)("h3",{id:"new"},"New"),(0,r.kt)("p",null,"This method creates a new ",(0,r.kt)("strong",{parentName:"p"},"App")," named instance. You can pass optional ",(0,r.kt)("a",{parentName:"p",href:"#config"},"config"),"when creating a new instance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func New(config ...Config) *App\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},"// Default config\napp := fiber.New()\n\n// ...\n")),(0,r.kt)("h3",{id:"config"},"Config"),(0,r.kt)("p",null,"You can pass an optional Config when creating a new Fiber instance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'// Custom config\napp := fiber.New(fiber.Config{\n    CaseSensitive: true,\n    StrictRouting: true,\n    ServerHeader:  "Fiber",\n    AppName: "Test App v1.0.1",\n})\n\n// ...\n')),(0,r.kt)("h4",{id:"config-fields"},"Config fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AppName"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"This allows to setup app name for the app"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BodyLimit"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the maximum allowed size for a request body, if the size exceeds the configured limit, it sends ",(0,r.kt)("inlineCode",{parentName:"td"},"413 - Request Entity Too Large")," response."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"4 * 1024 * 1024"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CaseSensitive"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"When enabled, ",(0,r.kt)("inlineCode",{parentName:"td"},"/Foo")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"/foo")," are different routes. When disabled, ",(0,r.kt)("inlineCode",{parentName:"td"},"/Foo"),"and ",(0,r.kt)("inlineCode",{parentName:"td"},"/foo")," are treated the same."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ColorScheme"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/gofiber/fiber/blob/master/color.go"},(0,r.kt)("inlineCode",{parentName:"a"},"Colors"))),(0,r.kt)("td",{parentName:"tr",align:null},"You can define custom color scheme. They'll be used for startup message, route list and some middlewares."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/gofiber/fiber/blob/master/color.go"},(0,r.kt)("inlineCode",{parentName:"a"},"DefaultColors")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CompressedFileSuffix"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Adds a suffix to the original file name and tries saving the resulting compressed file under the new file name."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'".fiber.gz"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Concurrency"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum number of concurrent connections."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"256 * 1024"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DisableDefaultContentType"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"When set to true, causes the default Content-Type header to be excluded from the Response."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DisableDefaultDate"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"When set to true causes the default date header to be excluded from the response."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DisableHeaderNormalizing"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"By default all header names are normalized: conteNT-tYPE -",">"," Content-Type"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DisableKeepalive"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"Disable keep-alive connections, the server will close incoming connections after sending the first response to the client"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DisablePreParseMultipartForm"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"Will not pre parse Multipart Form data if set to true. This option is useful for servers that desire to treat multipart form data as a binary blob, or choose when to parse the data."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EnableIPValidation"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"If set to true, ",(0,r.kt)("inlineCode",{parentName:"td"},"c.IP()")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"c.IPs()")," will validate IP addresses before returning them. Also, ",(0,r.kt)("inlineCode",{parentName:"td"},"c.IP()")," will return only the first valid IP rather than just the raw header value that may be a comma separated string.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"WARNING:")," There is a small performance cost to doing this validation. Keep disabled if speed is your only concern and your application is behind a trusted proxy that already validates this header."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EnableSplittingOnParsers"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"EnableSplittingOnParsers splits the query/body/header parameters by comma when it's true. ",(0,r.kt)("br",null)," ",(0,r.kt)("br",null)," For example, you can use it to parse multiple values from a query parameter like this: ",(0,r.kt)("inlineCode",{parentName:"td"},"/api?foo=bar,baz == foo[]=bar&foo[]=baz")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EnableTrustedProxyCheck"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"When set to true, fiber will check whether proxy is trusted, using TrustedProxies list. ",(0,r.kt)("br",null),(0,r.kt)("br",null),"By default  ",(0,r.kt)("inlineCode",{parentName:"td"},"c.Protocol()")," will get value from X-Forwarded-Proto, X-Forwarded-Protocol, X-Forwarded-Ssl or X-Url-Scheme header, ",(0,r.kt)("inlineCode",{parentName:"td"},"c.IP()")," will get value from ",(0,r.kt)("inlineCode",{parentName:"td"},"ProxyHeader")," header, ",(0,r.kt)("inlineCode",{parentName:"td"},"c.Hostname()")," will get value from X-Forwarded-Host header. ",(0,r.kt)("br",null)," If ",(0,r.kt)("inlineCode",{parentName:"td"},"EnableTrustedProxyCheck")," is true, and ",(0,r.kt)("inlineCode",{parentName:"td"},"RemoteIP")," is in the list of ",(0,r.kt)("inlineCode",{parentName:"td"},"TrustedProxies")," ",(0,r.kt)("inlineCode",{parentName:"td"},"c.Protocol()"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"c.IP()"),", and ",(0,r.kt)("inlineCode",{parentName:"td"},"c.Hostname()")," will have the same behaviour when ",(0,r.kt)("inlineCode",{parentName:"td"},"EnableTrustedProxyCheck")," disabled, if ",(0,r.kt)("inlineCode",{parentName:"td"},"RemoteIP")," isn't in the list, ",(0,r.kt)("inlineCode",{parentName:"td"},"c.Protocol()")," will return https in case when tls connection is handled by the app, or http otherwise, ",(0,r.kt)("inlineCode",{parentName:"td"},"c.IP()")," will return RemoteIP() from fasthttp context, ",(0,r.kt)("inlineCode",{parentName:"td"},"c.Hostname()")," will return ",(0,r.kt)("inlineCode",{parentName:"td"},"fasthttp.Request.URI().Host()")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ErrorHandler"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ErrorHandler")),(0,r.kt)("td",{parentName:"tr",align:null},"ErrorHandler is executed when an error is returned from fiber.Handler. Mounted fiber error handlers are retained by the top-level app and applied on prefix associated requests."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DefaultErrorHandler"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GETOnly"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"Rejects all non-GET requests if set to true. This option is useful as anti-DoS protection for servers accepting only GET requests. The request size is limited by ReadBufferSize if GETOnly is set."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IdleTimeout"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"time.Duration")),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum amount of time to wait for the next request when keep-alive is enabled. If IdleTimeout is zero, the value of ReadTimeout is used."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nil"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Immutable"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"When enabled, all values returned by context methods are immutable. By default, they are valid until you return from the handler; see issue ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/gofiber/fiber/issues/185"},"#","185"),"."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"JSONDecoder"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"utils.JSONUnmarshal")),(0,r.kt)("td",{parentName:"tr",align:null},"Allowing for flexibility in using another json library for decoding."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"json.Unmarshal"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"JSONEncoder"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"utils.JSONMarshal")),(0,r.kt)("td",{parentName:"tr",align:null},"Allowing for flexibility in using another json library for encoding."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"json.Marshal"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PassLocalsToViews"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"PassLocalsToViews Enables passing of the locals set on a fiber.Ctx to the template engine. See our ",(0,r.kt)("strong",{parentName:"td"},"Template Middleware")," for supported engines."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ProxyHeader"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"This will enable ",(0,r.kt)("inlineCode",{parentName:"td"},"c.IP()")," to return the value of the given header key. By default ",(0,r.kt)("inlineCode",{parentName:"td"},"c.IP()"),"will return the Remote IP from the TCP connection, this property can be useful if you are behind a load balancer e.g. ",(0,r.kt)("em",{parentName:"td"},"X-Forwarded-","*"),"."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ReadBufferSize"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"per-connection buffer size for requests' reading. This also limits the maximum header size. Increase this buffer if your clients send multi-KB RequestURIs and/or multi-KB headers ","(","for example, BIG cookies",")","."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"4096"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ReadTimeout"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"time.Duration")),(0,r.kt)("td",{parentName:"tr",align:null},"The amount of time allowed to read the full request, including the body. The default timeout is unlimited."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nil"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ReduceMemoryUsage"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"Aggressively reduces memory usage at the cost of higher CPU usage if set to true."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RequestMethods"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]string")),(0,r.kt)("td",{parentName:"tr",align:null},"RequestMethods provides customizibility for HTTP methods. You can add/remove methods as you wish."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DefaultMethods"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ServerHeader"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Enables the ",(0,r.kt)("inlineCode",{parentName:"td"},"Server")," HTTP header with the given value."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"StreamRequestBody"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"StreamRequestBody enables request body streaming, and calls the handler sooner when given body is larger than the current limit."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"StrictRouting"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"When enabled, the router treats ",(0,r.kt)("inlineCode",{parentName:"td"},"/foo")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"/foo/")," as different. Otherwise, the router treats ",(0,r.kt)("inlineCode",{parentName:"td"},"/foo")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"/foo/")," as the same."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"StructValidator"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"StructValidator")),(0,r.kt)("td",{parentName:"tr",align:null},"If you want to validate header/form/query... automatically when to bind, you can define struct validator. Fiber doesn't have default validator, so it'll skip validator step if you don't use any validator."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nil"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TrustedProxies"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]string")),(0,r.kt)("td",{parentName:"tr",align:null},"Contains the list of trusted proxy IP's. Look at ",(0,r.kt)("inlineCode",{parentName:"td"},"EnableTrustedProxyCheck")," doc. ",(0,r.kt)("br",null)," ",(0,r.kt)("br",null)," It can take IP or IP range addresses."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nil"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UnescapePath"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"Converts all encoded characters in the route back before setting the path for the context, so that the routing can also work with URL encoded special characters"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Views"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Views")),(0,r.kt)("td",{parentName:"tr",align:null},"Views is the interface that wraps the Render function. See our ",(0,r.kt)("strong",{parentName:"td"},"Template Middleware")," for supported engines."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nil"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ViewsLayout"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Views Layout is the global layout for all template render until override on Render function. See our ",(0,r.kt)("strong",{parentName:"td"},"Template Middleware")," for supported engines."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WriteBufferSize"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"Per-connection buffer size for responses' writing."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"4096"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WriteTimeout"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"time.Duration")),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum duration before timing out writes of the response. The default timeout is unlimited."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nil"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"XMLEncoder"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"utils.XMLMarshal")),(0,r.kt)("td",{parentName:"tr",align:null},"Allowing for flexibility in using another XML library for encoding."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"xml.Marshal"))))),(0,r.kt)("h2",{id:"server-listening"},"Server listening"),(0,r.kt)("h3",{id:"config-1"},"Config"),(0,r.kt)("p",null,"You can pass an optional ListenConfig when calling the ",(0,r.kt)("a",{parentName:"p",href:"#listen"},(0,r.kt)("inlineCode",{parentName:"a"},"Listen"))," or ",(0,r.kt)("a",{parentName:"p",href:"#listener"},(0,r.kt)("inlineCode",{parentName:"a"},"Listener"))," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'// Custom config\napp.Listen(":8080", fiber.ListenConfig{\n    EnablePrefork: true,\n    DisableStartupMessage: true,\n})\n')),(0,r.kt)("h4",{id:"config-fields-1"},"Config fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BeforeServeFunc"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"func(app *App) error")),(0,r.kt)("td",{parentName:"tr",align:null},"Allows customizing and accessing fiber app before serving the app."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nil"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CertClientFile"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Path of the client certificate. If you want to use mTLS, you must enter this field."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CertFile"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Path of the certificate file. If you want to use TLS, you must enter this field."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CertKeyFile"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Path of the certificate's private key. If you want to use TLS, you must enter this field."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DisableStartupMessage"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"When set to true, it will not print out the \xabFiber\xbb ASCII art and listening address."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EnablePrefork"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"When set to true, this will spawn multiple Go processes listening on the same port."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EnablePrintRoutes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"If set to true, will print all routes with their method, path, and handler."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GracefulContext"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"context.Context")),(0,r.kt)("td",{parentName:"tr",align:null},"Field to shutdown Fiber by given context gracefully."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nil"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ListenerAddrFunc"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"func(addr net.Addr)")),(0,r.kt)("td",{parentName:"tr",align:null},"Allows accessing and customizing ",(0,r.kt)("inlineCode",{parentName:"td"},"net.Listener"),"."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nil"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ListenerNetwork"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},'Known networks are "tcp", "tcp4" (IPv4-only), "tcp6" (IPv6-only). WARNING: When prefork is set to true, only "tcp4" and "tcp6" can be chosen.'),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tcp4"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OnShutdownError"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"func(err error)")),(0,r.kt)("td",{parentName:"tr",align:null},"Allows to customize error behavior when gracefully shutting down the server by given signal.  Prints error with ",(0,r.kt)("inlineCode",{parentName:"td"},"log.Fatalf()")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nil"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OnShutdownSuccess"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"func()")),(0,r.kt)("td",{parentName:"tr",align:null},"Allows to customize success behavior when gracefully shutting down the server by given signal."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nil"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TLSConfigFunc"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"func(tlsConfig *tls.Config)")),(0,r.kt)("td",{parentName:"tr",align:null},"Allows customizing ",(0,r.kt)("inlineCode",{parentName:"td"},"tls.Config")," as you want."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nil"))))),(0,r.kt)("h3",{id:"listen"},"Listen"),(0,r.kt)("p",null,"Listen serves HTTP requests from the given address."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) Listen(addr string, config ...ListenConfig) error\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Examples"',title:'"Examples"'},'// Listen on port :8080 \napp.Listen(":8080")\n\n// Listen on port :8080 with Prefork \napp.Listen(":8080", fiber.ListenConfig{EnablePrefork: true})\n\n// Custom host\napp.Listen("127.0.0.1:8080")\n')),(0,r.kt)("h4",{id:"prefork"},"Prefork"),(0,r.kt)("p",null,"Prefork is a feature that allows you to spawn multiple Go processes listening on the same port. This can be useful for scaling across multiple CPU cores."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Examples"',title:'"Examples"'},'app.Listen(":8080", fiber.ListenConfig{EnablePrefork: true})\n')),(0,r.kt)("p",null,"This distributes the incoming connections between the spawned processes and allows more requests to be handled simultaneously."),(0,r.kt)("h4",{id:"tls"},"TLS"),(0,r.kt)("p",null,"TLS serves HTTPs requests from the given address using certFile and keyFile paths to as TLS certificate and key file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Examples"',title:'"Examples"'},'app.Listen(":443", fiber.ListenConfig{CertFile: "./cert.pem", CertKeyFile: "./cert.key"})\n')),(0,r.kt)("h4",{id:"tls-with-certificate"},"TLS with certificate"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Examples"',title:'"Examples"'},'app.Listen(":443", fiber.ListenConfig{CertClientFile: "./ca-chain-cert.pem"})\n')),(0,r.kt)("h4",{id:"tls-with-certfile-keyfile-and-clientcertfile"},"TLS with certFile, keyFile and clientCertFile"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Examples"',title:'"Examples"'},'app.Listen(":443", fiber.ListenConfig{CertFile: "./cert.pem", CertKeyFile: "./cert.key", CertClientFile: "./ca-chain-cert.pem"})\n')),(0,r.kt)("h3",{id:"listener"},"Listener"),(0,r.kt)("p",null,"You can pass your own ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/net/#Listener"},(0,r.kt)("inlineCode",{parentName:"a"},"net.Listener"))," using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Listener")," method. This method can be used to enable ",(0,r.kt)("strong",{parentName:"p"},"TLS/HTTPS")," with a custom tls.Config."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) Listener(ln net.Listener, config ...ListenConfig) error\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Examples"',title:'"Examples"'},'ln, _ := net.Listen("tcp", ":3000")\n\ncer, _:= tls.LoadX509KeyPair("server.crt", "server.key")\n\nln = tls.NewListener(ln, &tls.Config{Certificates: []tls.Certificate{cer}})\n\napp.Listener(ln)\n')),(0,r.kt)("h2",{id:"server"},"Server"),(0,r.kt)("p",null,"Server returns the underlying ",(0,r.kt)("a",{parentName:"p",href:"https://godoc.org/github.com/valyala/fasthttp#Server"},"fasthttp server")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) Server() *fasthttp.Server\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Examples"',title:'"Examples"'},"func main() {\n    app := fiber.New()\n\n    app.Server().MaxConnsPerIP = 1\n\n    // ...\n}\n")),(0,r.kt)("h2",{id:"server-shutdown"},"Server Shutdown"),(0,r.kt)("p",null,"Shutdown gracefully shuts down the server without interrupting any active connections. Shutdown works by first closing all open listeners and then waits indefinitely for all connections to return to idle before shutting down."),(0,r.kt)("p",null,"ShutdownWithTimeout will forcefully close any active connections after the timeout expires."),(0,r.kt)("p",null,"ShutdownWithContext shuts down the server including by force if the context's deadline is exceeded."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func (app *App) Shutdown() error\nfunc (app *App) ShutdownWithTimeout(timeout time.Duration) error\nfunc (app *App) ShutdownWithContext(ctx context.Context) error\n")),(0,r.kt)("h2",{id:"helper-functions"},"Helper functions"),(0,r.kt)("h3",{id:"newerror"},"NewError"),(0,r.kt)("p",null,"NewError creates a new HTTPError instance with an optional message."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func NewError(code int, message ...string) *Error\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'app.Get("/", func(c fiber.Ctx) error {\n    return fiber.NewError(782, "Custom error message")\n})\n')),(0,r.kt)("h3",{id:"ischild"},"IsChild"),(0,r.kt)("p",null,"IsChild determines if the current process is a result of Prefork."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func IsChild() bool\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'// Config app\napp := fiber.New()\n\napp.Get("/", func(c fiber.Ctx) error {\n    if !fiber.IsChild() {\n        fmt.Println("I\'m the parent process")\n    } else {\n        fmt.Println("I\'m a child process")\n    }\n    return c.SendString("Hello, World!")\n})\n\n// ...\n\n// With prefork enabled, the parent process will spawn child processes\napp.Listen(":8080", fiber.ListenConfig{EnablePrefork: true})\n')))}u.isMDXComponent=!0}}]);