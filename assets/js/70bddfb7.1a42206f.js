"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[55575],{41497:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var n=i(74848),s=i(28453),t=i(55604);const d={id:"fiber",title:"\ud83d\udce6 Fiber",description:"Fiber represents the fiber package where you start to create an instance.",sidebar_position:1},l=void 0,c={id:"api/fiber",title:"\ud83d\udce6 Fiber",description:"Fiber represents the fiber package where you start to create an instance.",source:"@site/docs/core/api/fiber.md",sourceDirName:"api",slug:"/api/fiber",permalink:"/next/api/fiber",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/fiber/edit/main/docs/api/fiber.md",tags:[],version:"current",lastUpdatedAt:1713702565e3,sidebarPosition:1,frontMatter:{id:"fiber",title:"\ud83d\udce6 Fiber",description:"Fiber represents the fiber package where you start to create an instance.",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udee0\ufe0f API",permalink:"/next/category/\ufe0f-api"},next:{title:"\ud83d\ude80 App",permalink:"/next/api/app"}},o={},h=[{value:"Server start",id:"server-start",level:2},{value:"New",id:"new",level:3},{value:"Config",id:"config",level:3},{value:"Config fields",id:"config-fields",level:4},{value:"Server listening",id:"server-listening",level:2},{value:"Config",id:"config-1",level:3},{value:"Config fields",id:"config-fields-1",level:4},{value:"Listen",id:"listen",level:3},{value:"Prefork",id:"prefork",level:4},{value:"TLS",id:"tls",level:4},{value:"TLS with certificate",id:"tls-with-certificate",level:4},{value:"TLS with certFile, keyFile and clientCertFile",id:"tls-with-certfile-keyfile-and-clientcertfile",level:4},{value:"Listener",id:"listener",level:3},{value:"Server",id:"server",level:2},{value:"Server Shutdown",id:"server-shutdown",level:2},{value:"Helper functions",id:"helper-functions",level:2},{value:"NewError",id:"newerror",level:3},{value:"IsChild",id:"ischild",level:3}];function a(e){const r={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"server-start",children:"Server start"}),"\n",(0,n.jsx)(r.h3,{id:"new",children:"New"}),"\n",(0,n.jsxs)(r.p,{children:["This method creates a new ",(0,n.jsx)(r.strong,{children:"App"})," named instance. You can pass optional ",(0,n.jsx)(r.a,{href:"#config",children:"config"})," when creating a new instance."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-go",metastring:'title="Signature"',children:"func New(config ...Config) *App\n"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-go",metastring:'title="Example"',children:"// Default config\napp := fiber.New()\n\n// ...\n"})}),"\n",(0,n.jsx)(r.h3,{id:"config",children:"Config"}),"\n",(0,n.jsx)(r.p,{children:"You can pass an optional Config when creating a new Fiber instance."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-go",metastring:'title="Example"',children:'// Custom config\napp := fiber.New(fiber.Config{\n    CaseSensitive: true,\n    StrictRouting: true,\n    ServerHeader:  "Fiber",\n    AppName: "Test App v1.0.1",\n})\n\n// ...\n'})}),"\n",(0,n.jsx)(r.h4,{id:"config-fields",children:"Config fields"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Property"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(t.A,{id:"appname",children:"AppName"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"string"})}),(0,n.jsx)(r.td,{children:"This allows to setup app name for the app"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:'""'})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(t.A,{id:"bodylimit",children:"BodyLimit"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"int"})}),(0,n.jsxs)(r.td,{children:["Sets the maximum allowed size for a request body, if the size exceeds the configured limit, it sends ",(0,n.jsx)(r.code,{children:"413 - Request Entity Too Large"})," response."]}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"4 * 1024 * 1024"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(t.A,{id:"casesensitive",children:"CaseSensitive"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"bool"})}),(0,n.jsxs)(r.td,{children:["When enabled, ",(0,n.jsx)(r.code,{children:"/Foo"})," and ",(0,n.jsx)(r.code,{children:"/foo"})," are different routes. When disabled, ",(0,n.jsx)(r.code,{children:"/Foo"}),"and ",(0,n.jsx)(r.code,{children:"/foo"})," are treated the same."]}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"false"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(t.A,{id:"colorscheme",children:"ColorScheme"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://github.com/gofiber/fiber/blob/master/color.go",children:(0,n.jsx)(r.code,{children:"Colors"})})}),(0,n.jsx)(r.td,{children:"You can define custom color scheme. They'll be used for startup message, route list and some middlewares."}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://github.com/gofiber/fiber/blob/master/color.go",children:(0,n.jsx)(r.code,{children:"DefaultColors"})})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(t.A,{id:"compressedfilesuffix",children:"CompressedFileSuffix"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"string"})}),(0,n.jsx)(r.td,{children:"Adds a suffix to the original file name and tries saving the resulting compressed file under the new file name."}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:'".fiber.gz"'})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(t.A,{id:"concurrency",children:"Concurrency"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"int"})}),(0,n.jsx)(r.td,{children:"Maximum number of concurrent connections."}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"256 * 1024"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(t.A,{id:"disabledefaultcontenttype",children:"DisableDefaultContentType"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"bool"})}),(0,n.jsx)(r.td,{children:"When set to true, causes the default Content-Type header to be excluded from the Response."}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"false"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(t.A,{id:"disabledefaultdate",children:"DisableDefaultDate"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"bool"})}),(0,n.jsx)(r.td,{children:"When set to true causes the default date header to be excluded from the response."}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"false"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(t.A,{id:"disableheadernormalizing",children:"DisableHeaderNormalizing"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"bool"})}),(0,n.jsx)(r.td,{children:"By default all header names are normalized: conteNT-tYPE -> Content-Type"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"false"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(t.A,{id:"disablekeepalive",children:"DisableKeepalive"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"bool"})}),(0,n.jsx)(r.td,{children:"Disable keep-alive connections, the server will close incoming connections after sending the first response to the client"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"false"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(t.A,{id:"disablepreparsemultipartform",children:"DisablePreParseMultipartForm"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"bool"})}),(0,n.jsx)(r.td,{children:"Will not pre parse Multipart Form data if set to true. This option is useful for servers that desire to treat multipart form data as a binary blob, or choose when to parse the data."}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"false"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(t.A,{id:"enableipvalidation",children:"EnableIPValidation"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"bool"})}),(0,n.jsxs)(r.td,{children:["If set to true, ",(0,n.jsx)(r.code,{children:"c.IP()"})," and ",(0,n.jsx)(r.code,{children:"c.IPs()"})," will validate IP addresses before returning them. Also, ",(0,n.jsx)(r.code,{children:"c.IP()"})," will return only the first valid IP rather than just the raw header value that may be a comma separated string.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(r.strong,{children:"WARNING:"})," There is a small performance cost to doing this validation. Keep disabled if speed is your only concern and your application is behind a trusted proxy that already validates this header."]}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"false"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(t.A,{id:"enablesplittingonparsers",children:"EnableSplittingOnParsers"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"bool"})}),(0,n.jsxs)(r.td,{children:["EnableSplittingOnParsers splits the query/body/header parameters by comma when it's true. ",(0,n.jsx)("br",{})," ",(0,n.jsx)("br",{})," For example, you can use it to parse multiple values from a query parameter like this: ",(0,n.jsx)(r.code,{children:"/api?foo=bar,baz == foo[]=bar&foo[]=baz"})]}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"false"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(t.A,{id:"enabletrustedproxycheck",children:"EnableTrustedProxyCheck"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"bool"})}),(0,n.jsxs)(r.td,{children:["When set to true, fiber will check whether proxy is trusted, using TrustedProxies list. ",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"By default  ",(0,n.jsx)(r.code,{children:"c.Protocol()"})," will get value from X-Forwarded-Proto, X-Forwarded-Protocol, X-Forwarded-Ssl or X-Url-Scheme header, ",(0,n.jsx)(r.code,{children:"c.IP()"})," will get value from ",(0,n.jsx)(r.code,{children:"ProxyHeader"})," header, ",(0,n.jsx)(r.code,{children:"c.Hostname()"})," will get value from X-Forwarded-Host header. ",(0,n.jsx)("br",{})," If ",(0,n.jsx)(r.code,{children:"EnableTrustedProxyCheck"})," is true, and ",(0,n.jsx)(r.code,{children:"RemoteIP"})," is in the list of ",(0,n.jsx)(r.code,{children:"TrustedProxies"})," ",(0,n.jsx)(r.code,{children:"c.Protocol()"}),", ",(0,n.jsx)(r.code,{children:"c.IP()"}),", and ",(0,n.jsx)(r.code,{children:"c.Hostname()"})," will have the same behaviour when ",(0,n.jsx)(r.code,{children:"EnableTrustedProxyCheck"})," disabled, if ",(0,n.jsx)(r.code,{children:"RemoteIP"})," isn't in the list, ",(0,n.jsx)(r.code,{children:"c.Protocol()"})," will return https in case when tls connection is handled by the app, or http otherwise, ",(0,n.jsx)(r.code,{children:"c.IP()"})," will return RemoteIP() from fasthttp context, ",(0,n.jsx)(r.code,{children:"c.Hostname()"})," will return ",(0,n.jsx)(r.code,{children:"fasthttp.Request.URI().Host()"})]}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"false"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(t.A,{id:"errorhandler",children:"ErrorHandler"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"ErrorHandler"})}),(0,n.jsx)(r.td,{children:"ErrorHandler is executed when an error is returned from fiber.Handler. Mounted fiber error handlers are retained by the top-level app and applied on prefix associated requests."}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"DefaultErrorHandler"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(t.A,{id:"getonly",children:"GETOnly"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"bool"})}),(0,n.jsx)(r.td,{children:"Rejects all non-GET requests if set to true. This option is useful as anti-DoS protection for servers accepting only GET requests. The request size is limited by ReadBufferSize if GETOnly is set."}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"false"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(t.A,{id:"idletimeout",children:"IdleTimeout"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"time.Duration"})}),(0,n.jsx)(r.td,{children:"The maximum amount of time to wait for the next request when keep-alive is enabled. If IdleTimeout is zero, the value of ReadTimeout is used."}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"nil"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(t.A,{id:"immutable",children:"Immutable"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"bool"})}),(0,n.jsxs)(r.td,{children:["When enabled, all values returned by context methods are immutable. By default, they are valid until you return from the handler; see issue ",(0,n.jsx)(r.a,{href:"https://github.com/gofiber/fiber/issues/185",children:"#185"}),"."]}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"false"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(t.A,{id:"jsondecoder",children:"JSONDecoder"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"utils.JSONUnmarshal"})}),(0,n.jsx)(r.td,{children:"Allowing for flexibility in using another json library for decoding."}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"json.Unmarshal"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(t.A,{id:"jsonencoder",children:"JSONEncoder"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"utils.JSONMarshal"})}),(0,n.jsx)(r.td,{children:"Allowing for flexibility in using another json library for encoding."}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"json.Marshal"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(t.A,{id:"passlocalstoviews",children:"PassLocalsToViews"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"bool"})}),(0,n.jsxs)(r.td,{children:["PassLocalsToViews Enables passing of the locals set on a fiber.Ctx to the template engine. See our ",(0,n.jsx)(r.strong,{children:"Template Middleware"})," for supported engines."]}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"false"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(t.A,{id:"proxyheader",children:"ProxyHeader"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"string"})}),(0,n.jsxs)(r.td,{children:["This will enable ",(0,n.jsx)(r.code,{children:"c.IP()"})," to return the value of the given header key. By default ",(0,n.jsx)(r.code,{children:"c.IP()"}),"will return the Remote IP from the TCP connection, this property can be useful if you are behind a load balancer e.g. ",(0,n.jsx)(r.em,{children:"X-Forwarded-*"}),"."]}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:'""'})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(t.A,{id:"readbuffersize",children:"ReadBufferSize"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"int"})}),(0,n.jsx)(r.td,{children:"per-connection buffer size for requests' reading. This also limits the maximum header size. Increase this buffer if your clients send multi-KB RequestURIs and/or multi-KB headers (for example, BIG cookies)."}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"4096"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(t.A,{id:"readtimeout",children:"ReadTimeout"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"time.Duration"})}),(0,n.jsx)(r.td,{children:"The amount of time allowed to read the full request, including the body. The default timeout is unlimited."}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"nil"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(t.A,{id:"reducememoryusage",children:"ReduceMemoryUsage"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"bool"})}),(0,n.jsx)(r.td,{children:"Aggressively reduces memory usage at the cost of higher CPU usage if set to true."}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"false"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(t.A,{id:"requestmethods",children:"RequestMethods"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"[]string"})}),(0,n.jsx)(r.td,{children:"RequestMethods provides customizibility for HTTP methods. You can add/remove methods as you wish."}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"DefaultMethods"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(t.A,{id:"serverheader",children:"ServerHeader"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"string"})}),(0,n.jsxs)(r.td,{children:["Enables the ",(0,n.jsx)(r.code,{children:"Server"})," HTTP header with the given value."]}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:'""'})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(t.A,{id:"streamrequestbody",children:"StreamRequestBody"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"bool"})}),(0,n.jsx)(r.td,{children:"StreamRequestBody enables request body streaming, and calls the handler sooner when given body is larger than the current limit."}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"false"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(t.A,{id:"strictrouting",children:"StrictRouting"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"bool"})}),(0,n.jsxs)(r.td,{children:["When enabled, the router treats ",(0,n.jsx)(r.code,{children:"/foo"})," and ",(0,n.jsx)(r.code,{children:"/foo/"})," as different. Otherwise, the router treats ",(0,n.jsx)(r.code,{children:"/foo"})," and ",(0,n.jsx)(r.code,{children:"/foo/"})," as the same."]}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"false"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(t.A,{id:"structvalidator",children:"StructValidator"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"StructValidator"})}),(0,n.jsx)(r.td,{children:"If you want to validate header/form/query... automatically when to bind, you can define struct validator. Fiber doesn't have default validator, so it'll skip validator step if you don't use any validator."}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"nil"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(t.A,{id:"trustedproxies",children:"TrustedProxies"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"[]string"})}),(0,n.jsxs)(r.td,{children:["Contains the list of trusted proxy IP's. Look at ",(0,n.jsx)(r.code,{children:"EnableTrustedProxyCheck"})," doc. ",(0,n.jsx)("br",{})," ",(0,n.jsx)("br",{})," It can take IP or IP range addresses."]}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"nil"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(t.A,{id:"unescapepath",children:"UnescapePath"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"bool"})}),(0,n.jsx)(r.td,{children:"Converts all encoded characters in the route back before setting the path for the context, so that the routing can also work with URL encoded special characters"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"false"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(t.A,{id:"views",children:"Views"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Views"})}),(0,n.jsxs)(r.td,{children:["Views is the interface that wraps the Render function. See our ",(0,n.jsx)(r.strong,{children:"Template Middleware"})," for supported engines."]}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"nil"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(t.A,{id:"viewslayout",children:"ViewsLayout"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"string"})}),(0,n.jsxs)(r.td,{children:["Views Layout is the global layout for all template render until override on Render function. See our ",(0,n.jsx)(r.strong,{children:"Template Middleware"})," for supported engines."]}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:'""'})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(t.A,{id:"writebuffersize",children:"WriteBufferSize"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"int"})}),(0,n.jsx)(r.td,{children:"Per-connection buffer size for responses' writing."}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"4096"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(t.A,{id:"writetimeout",children:"WriteTimeout"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"time.Duration"})}),(0,n.jsx)(r.td,{children:"The maximum duration before timing out writes of the response. The default timeout is unlimited."}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"nil"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(t.A,{id:"xmlencoder",children:"XMLEncoder"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"utils.XMLMarshal"})}),(0,n.jsx)(r.td,{children:"Allowing for flexibility in using another XML library for encoding."}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"xml.Marshal"})})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"server-listening",children:"Server listening"}),"\n",(0,n.jsx)(r.h3,{id:"config-1",children:"Config"}),"\n",(0,n.jsxs)(r.p,{children:["You can pass an optional ListenConfig when calling the ",(0,n.jsx)(r.a,{href:"#listen",children:(0,n.jsx)(r.code,{children:"Listen"})})," or ",(0,n.jsx)(r.a,{href:"#listener",children:(0,n.jsx)(r.code,{children:"Listener"})})," method."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-go",metastring:'title="Example"',children:'// Custom config\napp.Listen(":8080", fiber.ListenConfig{\n    EnablePrefork: true,\n    DisableStartupMessage: true,\n})\n'})}),"\n",(0,n.jsx)(r.h4,{id:"config-fields-1",children:"Config fields"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Property"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(t.A,{id:"beforeservefunc",children:"BeforeServeFunc"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func(app *App) error"})}),(0,n.jsx)(r.td,{children:"Allows customizing and accessing fiber app before serving the app."}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"nil"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(t.A,{id:"certclientfile",children:"CertClientFile"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"string"})}),(0,n.jsx)(r.td,{children:"Path of the client certificate. If you want to use mTLS, you must enter this field."}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:'""'})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(t.A,{id:"certfile",children:"CertFile"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"string"})}),(0,n.jsx)(r.td,{children:"Path of the certificate file. If you want to use TLS, you must enter this field."}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:'""'})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(t.A,{id:"certkeyfile",children:"CertKeyFile"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"string"})}),(0,n.jsx)(r.td,{children:"Path of the certificate's private key. If you want to use TLS, you must enter this field."}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:'""'})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(t.A,{id:"disablestartupmessage",children:"DisableStartupMessage"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"bool"})}),(0,n.jsx)(r.td,{children:"When set to true, it will not print out the \xabFiber\xbb ASCII art and listening address."}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"false"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(t.A,{id:"enableprefork",children:"EnablePrefork"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"bool"})}),(0,n.jsx)(r.td,{children:"When set to true, this will spawn multiple Go processes listening on the same port."}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"false"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(t.A,{id:"enableprintroutes",children:"EnablePrintRoutes"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"bool"})}),(0,n.jsx)(r.td,{children:"If set to true, will print all routes with their method, path, and handler."}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"false"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(t.A,{id:"gracefulcontext",children:"GracefulContext"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"context.Context"})}),(0,n.jsx)(r.td,{children:"Field to shutdown Fiber by given context gracefully."}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"nil"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(t.A,{id:"listeneraddrfunc",children:"ListenerAddrFunc"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func(addr net.Addr)"})}),(0,n.jsxs)(r.td,{children:["Allows accessing and customizing ",(0,n.jsx)(r.code,{children:"net.Listener"}),"."]}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"nil"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(t.A,{id:"listenernetwork",children:"ListenerNetwork"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"string"})}),(0,n.jsx)(r.td,{children:'Known networks are "tcp", "tcp4" (IPv4-only), "tcp6" (IPv6-only). WARNING: When prefork is set to true, only "tcp4" and "tcp6" can be chosen.'}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"tcp4"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(t.A,{id:"onshutdownerror",children:"OnShutdownError"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func(err error)"})}),(0,n.jsxs)(r.td,{children:["Allows to customize error behavior when gracefully shutting down the server by given signal.  Prints error with ",(0,n.jsx)(r.code,{children:"log.Fatalf()"})]}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"nil"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(t.A,{id:"onshutdownsuccess",children:"OnShutdownSuccess"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func()"})}),(0,n.jsx)(r.td,{children:"Allows to customize success behavior when gracefully shutting down the server by given signal."}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"nil"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(t.A,{id:"tlsconfigfunc",children:"TLSConfigFunc"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func(tlsConfig *tls.Config)"})}),(0,n.jsxs)(r.td,{children:["Allows customizing ",(0,n.jsx)(r.code,{children:"tls.Config"})," as you want."]}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"nil"})})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"listen",children:"Listen"}),"\n",(0,n.jsx)(r.p,{children:"Listen serves HTTP requests from the given address."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-go",metastring:'title="Signature"',children:"func (app *App) Listen(addr string, config ...ListenConfig) error\n"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-go",metastring:'title="Examples"',children:'// Listen on port :8080 \napp.Listen(":8080")\n\n// Listen on port :8080 with Prefork \napp.Listen(":8080", fiber.ListenConfig{EnablePrefork: true})\n\n// Custom host\napp.Listen("127.0.0.1:8080")\n'})}),"\n",(0,n.jsx)(r.h4,{id:"prefork",children:"Prefork"}),"\n",(0,n.jsx)(r.p,{children:"Prefork is a feature that allows you to spawn multiple Go processes listening on the same port. This can be useful for scaling across multiple CPU cores."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-go",metastring:'title="Examples"',children:'app.Listen(":8080", fiber.ListenConfig{EnablePrefork: true})\n'})}),"\n",(0,n.jsx)(r.p,{children:"This distributes the incoming connections between the spawned processes and allows more requests to be handled simultaneously."}),"\n",(0,n.jsx)(r.h4,{id:"tls",children:"TLS"}),"\n",(0,n.jsx)(r.p,{children:"TLS serves HTTPs requests from the given address using certFile and keyFile paths to as TLS certificate and key file."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-go",metastring:'title="Examples"',children:'app.Listen(":443", fiber.ListenConfig{CertFile: "./cert.pem", CertKeyFile: "./cert.key"})\n'})}),"\n",(0,n.jsx)(r.h4,{id:"tls-with-certificate",children:"TLS with certificate"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-go",metastring:'title="Examples"',children:'app.Listen(":443", fiber.ListenConfig{CertClientFile: "./ca-chain-cert.pem"})\n'})}),"\n",(0,n.jsx)(r.h4,{id:"tls-with-certfile-keyfile-and-clientcertfile",children:"TLS with certFile, keyFile and clientCertFile"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-go",metastring:'title="Examples"',children:'app.Listen(":443", fiber.ListenConfig{CertFile: "./cert.pem", CertKeyFile: "./cert.key", CertClientFile: "./ca-chain-cert.pem"})\n'})}),"\n",(0,n.jsx)(r.h3,{id:"listener",children:"Listener"}),"\n",(0,n.jsxs)(r.p,{children:["You can pass your own ",(0,n.jsx)(r.a,{href:"https://pkg.go.dev/net/#Listener",children:(0,n.jsx)(r.code,{children:"net.Listener"})})," using the ",(0,n.jsx)(r.code,{children:"Listener"})," method. This method can be used to enable ",(0,n.jsx)(r.strong,{children:"TLS/HTTPS"})," with a custom tls.Config."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-go",metastring:'title="Signature"',children:"func (app *App) Listener(ln net.Listener, config ...ListenConfig) error\n"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-go",metastring:'title="Examples"',children:'ln, _ := net.Listen("tcp", ":3000")\n\ncer, _:= tls.LoadX509KeyPair("server.crt", "server.key")\n\nln = tls.NewListener(ln, &tls.Config{Certificates: []tls.Certificate{cer}})\n\napp.Listener(ln)\n'})}),"\n",(0,n.jsx)(r.h2,{id:"server",children:"Server"}),"\n",(0,n.jsxs)(r.p,{children:["Server returns the underlying ",(0,n.jsx)(r.a,{href:"https://godoc.org/github.com/valyala/fasthttp#Server",children:"fasthttp server"})]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-go",metastring:'title="Signature"',children:"func (app *App) Server() *fasthttp.Server\n"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-go",metastring:'title="Examples"',children:"func main() {\n    app := fiber.New()\n\n    app.Server().MaxConnsPerIP = 1\n\n    // ...\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"server-shutdown",children:"Server Shutdown"}),"\n",(0,n.jsx)(r.p,{children:"Shutdown gracefully shuts down the server without interrupting any active connections. Shutdown works by first closing all open listeners and then waits indefinitely for all connections to return to idle before shutting down."}),"\n",(0,n.jsx)(r.p,{children:"ShutdownWithTimeout will forcefully close any active connections after the timeout expires."}),"\n",(0,n.jsx)(r.p,{children:"ShutdownWithContext shuts down the server including by force if the context's deadline is exceeded."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-go",children:"func (app *App) Shutdown() error\nfunc (app *App) ShutdownWithTimeout(timeout time.Duration) error\nfunc (app *App) ShutdownWithContext(ctx context.Context) error\n"})}),"\n",(0,n.jsx)(r.h2,{id:"helper-functions",children:"Helper functions"}),"\n",(0,n.jsx)(r.h3,{id:"newerror",children:"NewError"}),"\n",(0,n.jsx)(r.p,{children:"NewError creates a new HTTPError instance with an optional message."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-go",metastring:'title="Signature"',children:"func NewError(code int, message ...string) *Error\n"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-go",metastring:'title="Example"',children:'app.Get("/", func(c fiber.Ctx) error {\n    return fiber.NewError(782, "Custom error message")\n})\n'})}),"\n",(0,n.jsx)(r.h3,{id:"ischild",children:"IsChild"}),"\n",(0,n.jsx)(r.p,{children:"IsChild determines if the current process is a result of Prefork."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-go",metastring:'title="Signature"',children:"func IsChild() bool\n"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-go",metastring:'title="Example"',children:'// Config app\napp := fiber.New()\n\napp.Get("/", func(c fiber.Ctx) error {\n    if !fiber.IsChild() {\n        fmt.Println("I\'m the parent process")\n    } else {\n        fmt.Println("I\'m a child process")\n    }\n    return c.SendString("Hello, World!")\n})\n\n// ...\n\n// With prefork enabled, the parent process will spawn child processes\napp.Listen(":8080", fiber.ListenConfig{EnablePrefork: true})\n'})})]})}function x(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},55604:(e,r,i)=>{i.d(r,{A:()=>d});i(96540);var n=i(28774),s=i(63427),t=i(74848);function d(e){let{children:r,id:i}=e;return(0,s.A)().collectAnchor(i),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{id:i,className:"reference anchor",children:[r,(0,t.jsx)(n.A,{to:"#"+i,className:"hash-link"})]})})}},28453:(e,r,i)=>{i.d(r,{R:()=>d,x:()=>l});var n=i(96540);const s={},t=n.createContext(s);function d(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);