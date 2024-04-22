"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[37429],{87477:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>t,default:()=>a,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var d=s(74848),n=s(28453);const i={id:"fiber",title:"\ud83d\udce6 Fiber",description:"Fiber represents the fiber package where you start to create an instance.",sidebar_position:1},t=void 0,l={id:"api/fiber",title:"\ud83d\udce6 Fiber",description:"Fiber represents the fiber package where you start to create an instance.",source:"@site/versioned_docs/version-v2.x/api/fiber.md",sourceDirName:"api",slug:"/api/fiber",permalink:"/api/fiber",draft:!1,unlisted:!1,tags:[],version:"v2.x",lastUpdatedAt:171379028e4,sidebarPosition:1,frontMatter:{id:"fiber",title:"\ud83d\udce6 Fiber",description:"Fiber represents the fiber package where you start to create an instance.",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/category/api"},next:{title:"\ud83d\ude80 App",permalink:"/api/app"}},c={},o=[{value:"New",id:"new",level:2},{value:"Config",id:"config",level:2},{value:"NewError",id:"newerror",level:2},{value:"IsChild",id:"ischild",level:2}];function h(e){const r={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.h2,{id:"new",children:"New"}),"\n",(0,d.jsxs)(r.p,{children:["This method creates a new ",(0,d.jsx)(r.strong,{children:"App"})," named instance. You can pass optional ",(0,d.jsx)(r.a,{href:"#config",children:"config "}),"when creating a new instance."]}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-go",metastring:'title="Signature"',children:"func New(config ...Config) *App\n"})}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-go",metastring:'title="Example"',children:"// Default config\napp := fiber.New()\n\n// ...\n"})}),"\n",(0,d.jsx)(r.h2,{id:"config",children:"Config"}),"\n",(0,d.jsx)(r.p,{children:"You can pass an optional Config when creating a new Fiber instance."}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-go",metastring:'title="Example"',children:'// Custom config\napp := fiber.New(fiber.Config{\n    Prefork:       true,\n    CaseSensitive: true,\n    StrictRouting: true,\n    ServerHeader:  "Fiber",\n    AppName: "Test App v1.0.1",\n})\n\n// ...\n'})}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"Config fields"})}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Property"}),(0,d.jsx)(r.th,{children:"Type"}),(0,d.jsx)(r.th,{children:"Description"}),(0,d.jsx)(r.th,{children:"Default"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"AppName"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"string"})}),(0,d.jsx)(r.td,{children:"This allows to setup app name for the app"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:'""'})})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"BodyLimit"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"int"})}),(0,d.jsxs)(r.td,{children:["Sets the maximum allowed size for a request body, if the size exceeds the configured limit, it sends ",(0,d.jsx)(r.code,{children:"413 - Request Entity Too Large"})," response."]}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"4 * 1024 * 1024"})})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"CaseSensitive"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"bool"})}),(0,d.jsxs)(r.td,{children:["When enabled, ",(0,d.jsx)(r.code,{children:"/Foo"})," and ",(0,d.jsx)(r.code,{children:"/foo"})," are different routes. When disabled, ",(0,d.jsx)(r.code,{children:"/Foo"}),"and ",(0,d.jsx)(r.code,{children:"/foo"})," are treated the same."]}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"false"})})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ColorScheme"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"https://github.com/gofiber/fiber/blob/master/color.go",children:(0,d.jsx)(r.code,{children:"Colors"})})}),(0,d.jsx)(r.td,{children:"You can define custom color scheme. They'll be used for startup message, route list and some middlewares."}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"https://github.com/gofiber/fiber/blob/master/color.go",children:(0,d.jsx)(r.code,{children:"DefaultColors"})})})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"CompressedFileSuffix"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"string"})}),(0,d.jsx)(r.td,{children:"Adds a suffix to the original file name and tries saving the resulting compressed file under the new file name."}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:'".fiber.gz"'})})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Concurrency"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"int"})}),(0,d.jsx)(r.td,{children:"Maximum number of concurrent connections."}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"256 * 1024"})})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"DisableDefaultContentType"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"bool"})}),(0,d.jsx)(r.td,{children:"When set to true, causes the default Content-Type header to be excluded from the Response."}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"false"})})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"DisableDefaultDate"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"bool"})}),(0,d.jsx)(r.td,{children:"When set to true causes the default date header to be excluded from the response."}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"false"})})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"DisableHeaderNormalizing"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"bool"})}),(0,d.jsx)(r.td,{children:"By default all header names are normalized: conteNT-tYPE -> Content-Type"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"false"})})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"DisableKeepalive"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"bool"})}),(0,d.jsx)(r.td,{children:"Disable keep-alive connections, the server will close incoming connections after sending the first response to the client"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"false"})})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"DisablePreParseMultipartForm"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"bool"})}),(0,d.jsx)(r.td,{children:"Will not pre parse Multipart Form data if set to true. This option is useful for servers that desire to treat multipart form data as a binary blob, or choose when to parse the data."}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"false"})})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"DisableStartupMessage"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"bool"})}),(0,d.jsx)(r.td,{children:"When set to true, it will not print out debug information"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"false"})})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ETag"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"bool"})}),(0,d.jsx)(r.td,{children:"Enable or disable ETag header generation, since both weak and strong etags are generated using the same hashing method (CRC-32). Weak ETags are the default when enabled."}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"false"})})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"EnableIPValidation"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"bool"})}),(0,d.jsxs)(r.td,{children:["If set to true, ",(0,d.jsx)(r.code,{children:"c.IP()"})," and ",(0,d.jsx)(r.code,{children:"c.IPs()"})," will validate IP addresses before returning them. Also, ",(0,d.jsx)(r.code,{children:"c.IP()"})," will return only the first valid IP rather than just the raw header value that may be a comma seperated string.",(0,d.jsx)("br",{}),(0,d.jsx)("br",{}),(0,d.jsx)(r.strong,{children:"WARNING:"})," There is a small performance cost to doing this validation. Keep disabled if speed is your only concern and your application is behind a trusted proxy that already validates this header."]}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"false"})})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"EnablePrintRoutes"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"bool"})}),(0,d.jsx)(r.td,{children:"EnablePrintRoutes enables print all routes with their method, path, name and handler.."}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"false"})})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"EnableSplittingOnParsers"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"bool"})}),(0,d.jsxs)(r.td,{children:["EnableSplittingOnParsers splits the query/body/header parameters by comma when it's true. ",(0,d.jsx)("br",{})," ",(0,d.jsx)("br",{})," For example, you can use it to parse multiple values from a query parameter like this: ",(0,d.jsx)(r.code,{children:"/api?foo=bar,baz == foo[]=bar&foo[]=baz"})]}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"false"})})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"EnableTrustedProxyCheck"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"bool"})}),(0,d.jsxs)(r.td,{children:["When set to true, fiber will check whether proxy is trusted, using TrustedProxies list. ",(0,d.jsx)("br",{}),(0,d.jsx)("br",{}),"By default  ",(0,d.jsx)(r.code,{children:"c.Protocol()"})," will get value from X-Forwarded-Proto, X-Forwarded-Protocol, X-Forwarded-Ssl or X-Url-Scheme header, ",(0,d.jsx)(r.code,{children:"c.IP()"})," will get value from ",(0,d.jsx)(r.code,{children:"ProxyHeader"})," header, ",(0,d.jsx)(r.code,{children:"c.Hostname()"})," will get value from X-Forwarded-Host header. ",(0,d.jsx)("br",{})," If ",(0,d.jsx)(r.code,{children:"EnableTrustedProxyCheck"})," is true, and ",(0,d.jsx)(r.code,{children:"RemoteIP"})," is in the list of ",(0,d.jsx)(r.code,{children:"TrustedProxies"})," ",(0,d.jsx)(r.code,{children:"c.Protocol()"}),", ",(0,d.jsx)(r.code,{children:"c.IP()"}),", and ",(0,d.jsx)(r.code,{children:"c.Hostname()"})," will have the same behaviour when ",(0,d.jsx)(r.code,{children:"EnableTrustedProxyCheck"})," disabled, if ",(0,d.jsx)(r.code,{children:"RemoteIP"})," isn't in the list, ",(0,d.jsx)(r.code,{children:"c.Protocol()"})," will return https in case when tls connection is handled by the app, or http otherwise, ",(0,d.jsx)(r.code,{children:"c.IP()"})," will return RemoteIP() from fasthttp context, ",(0,d.jsx)(r.code,{children:"c.Hostname()"})," will return ",(0,d.jsx)(r.code,{children:"fasthttp.Request.URI().Host()"})]}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"false"})})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ErrorHandler"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"ErrorHandler"})}),(0,d.jsx)(r.td,{children:"ErrorHandler is executed when an error is returned from fiber.Handler. Mounted fiber error handlers are retained by the top-level app and applied on prefix associated requests."}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"DefaultErrorHandler"})})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"GETOnly"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"bool"})}),(0,d.jsx)(r.td,{children:"Rejects all non-GET requests if set to true. This option is useful as anti-DoS protection for servers accepting only GET requests. The request size is limited by ReadBufferSize if GETOnly is set."}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"false"})})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"IdleTimeout"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"time.Duration"})}),(0,d.jsx)(r.td,{children:"The maximum amount of time to wait for the next request when keep-alive is enabled. If IdleTimeout is zero, the value of ReadTimeout is used."}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"nil"})})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Immutable"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"bool"})}),(0,d.jsxs)(r.td,{children:["When enabled, all values returned by context methods are immutable. By default, they are valid until you return from the handler; see issue ",(0,d.jsx)(r.a,{href:"https://github.com/gofiber/fiber/issues/185",children:"#185"}),"."]}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"false"})})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"JSONDecoder"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"utils.JSONUnmarshal"})}),(0,d.jsx)(r.td,{children:"Allowing for flexibility in using another json library for decoding."}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"json.Unmarshal"})})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"JSONEncoder"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"utils.JSONMarshal"})}),(0,d.jsx)(r.td,{children:"Allowing for flexibility in using another json library for encoding."}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"json.Marshal"})})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Network"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"string"})}),(0,d.jsxs)(r.td,{children:['Known networks are "tcp", "tcp4" (IPv4-only), "tcp6" (IPv6-only)',(0,d.jsx)("br",{}),(0,d.jsx)("br",{}),(0,d.jsx)(r.strong,{children:"WARNING:"}),' When prefork is set to true, only "tcp4" and "tcp6" can be chosen.']}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"NetworkTCP4"})})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"PassLocalsToViews"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"bool"})}),(0,d.jsxs)(r.td,{children:["PassLocalsToViews Enables passing of the locals set on a fiber.Ctx to the template engine. See our ",(0,d.jsx)(r.strong,{children:"Template Middleware"})," for supported engines."]}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"false"})})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Prefork"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"bool"})}),(0,d.jsxs)(r.td,{children:["Enables use of the",(0,d.jsx)(r.a,{href:"https://lwn.net/Articles/542629/",children:(0,d.jsx)(r.code,{children:"SO_REUSEPORT"})}),"socket option. This will spawn multiple Go processes listening on the same port. learn more about ",(0,d.jsx)(r.a,{href:"https://www.nginx.com/blog/socket-sharding-nginx-release-1-9-1/",children:"socket sharding"}),". ",(0,d.jsxs)(r.strong,{children:["NOTE: if enabled, the application will need to be ran through a shell because prefork mode sets environment variables. If you're using Docker, make sure the app is ran with ",(0,d.jsx)(r.code,{children:"CMD ./app"})," or ",(0,d.jsx)(r.code,{children:'CMD ["sh", "-c", "/app"]'}),". For more info, see"]})," ",(0,d.jsx)(r.a,{href:"https://github.com/gofiber/fiber/issues/1021#issuecomment-730537971",children:(0,d.jsx)(r.strong,{children:"this"})})," ",(0,d.jsx)(r.strong,{children:"issue comment."})]}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"false"})})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ProxyHeader"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"string"})}),(0,d.jsxs)(r.td,{children:["This will enable ",(0,d.jsx)(r.code,{children:"c.IP()"})," to return the value of the given header key. By default ",(0,d.jsx)(r.code,{children:"c.IP()"}),"will return the Remote IP from the TCP connection, this property can be useful if you are behind a load balancer e.g. ",(0,d.jsx)(r.em,{children:"X-Forwarded-*"}),"."]}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:'""'})})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ReadBufferSize"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"int"})}),(0,d.jsx)(r.td,{children:"per-connection buffer size for requests' reading. This also limits the maximum header size. Increase this buffer if your clients send multi-KB RequestURIs and/or multi-KB headers (for example, BIG cookies)."}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"4096"})})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ReadTimeout"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"time.Duration"})}),(0,d.jsx)(r.td,{children:"The amount of time allowed to read the full request, including the body. The default timeout is unlimited."}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"nil"})})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"RequestMethods"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"[]string"})}),(0,d.jsx)(r.td,{children:"RequestMethods provides customizibility for HTTP methods. You can add/remove methods as you wish."}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"DefaultMethods"})})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ServerHeader"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"string"})}),(0,d.jsxs)(r.td,{children:["Enables the ",(0,d.jsx)(r.code,{children:"Server"})," HTTP header with the given value."]}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:'""'})})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"StreamRequestBody"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"bool"})}),(0,d.jsx)(r.td,{children:"StreamRequestBody enables request body streaming, and calls the handler sooner when given body is larger then the current limit."}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"false"})})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"StrictRouting"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"bool"})}),(0,d.jsxs)(r.td,{children:["When enabled, the router treats ",(0,d.jsx)(r.code,{children:"/foo"})," and ",(0,d.jsx)(r.code,{children:"/foo/"})," as different. Otherwise, the router treats ",(0,d.jsx)(r.code,{children:"/foo"})," and ",(0,d.jsx)(r.code,{children:"/foo/"})," as the same."]}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"false"})})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"TrustedProxies"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"[]string"})}),(0,d.jsxs)(r.td,{children:["Contains the list of trusted proxy IP's. Look at ",(0,d.jsx)(r.code,{children:"EnableTrustedProxyCheck"})," doc. ",(0,d.jsx)("br",{})," ",(0,d.jsx)("br",{})," It can take IP or IP range addresses. If it gets IP range, it iterates all possible addresses."]}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"[]string*__*"})})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"UnescapePath"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"bool"})}),(0,d.jsx)(r.td,{children:"Converts all encoded characters in the route back before setting the path for the context, so that the routing can also work with URL encoded special characters"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"false"})})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Views"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"Views"})}),(0,d.jsxs)(r.td,{children:["Views is the interface that wraps the Render function. See our ",(0,d.jsx)(r.strong,{children:"Template Middleware"})," for supported engines."]}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"nil"})})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ViewsLayout"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"string"})}),(0,d.jsxs)(r.td,{children:["Views Layout is the global layout for all template render until override on Render function. See our ",(0,d.jsx)(r.strong,{children:"Template Middleware"})," for supported engines."]}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:'""'})})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"WriteBufferSize"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"int"})}),(0,d.jsx)(r.td,{children:"Per-connection buffer size for responses' writing."}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"4096"})})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"WriteTimeout"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"time.Duration"})}),(0,d.jsx)(r.td,{children:"The maximum duration before timing out writes of the response. The default timeout is unlimited."}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"nil"})})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"XMLEncoder"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"utils.XMLMarshal"})}),(0,d.jsx)(r.td,{children:"Allowing for flexibility in using another XML library for encoding."}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"xml.Marshal"})})]})]})]}),"\n",(0,d.jsx)(r.h2,{id:"newerror",children:"NewError"}),"\n",(0,d.jsx)(r.p,{children:"NewError creates a new HTTPError instance with an optional message."}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-go",metastring:'title="Signature"',children:"func NewError(code int, message ...string) *Error\n"})}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-go",metastring:'title="Example"',children:'app.Get("/", func(c *fiber.Ctx) error {\n    return fiber.NewError(782, "Custom error message")\n})\n'})}),"\n",(0,d.jsx)(r.h2,{id:"ischild",children:"IsChild"}),"\n",(0,d.jsx)(r.p,{children:"IsChild determines if the current process is a result of Prefork."}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-go",metastring:'title="Signature"',children:"func IsChild() bool\n"})}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-go",metastring:'title="Example"',children:'// Prefork will spawn child processes\napp := fiber.New(fiber.Config{\n    Prefork: true,\n})\n\nif !fiber.IsChild() {\n    fmt.Println("I\'m the parent process")\n} else {\n    fmt.Println("I\'m a child process")\n}\n\n// ...\n'})})]})}function a(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>t,x:()=>l});var d=s(96540);const n={},i=d.createContext(n);function t(e){const r=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),d.createElement(i.Provider,{value:r},e.children)}}}]);