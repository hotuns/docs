"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[36763],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},f="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),f=s(r),u=a,c=f["".concat(p,".").concat(u)]||f[u]||m[u]||i;return r?n.createElement(c,o(o({ref:t},d),{},{components:r})):n.createElement(c,o({ref:t},d))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[f]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},64503:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={id:"proxy"},o="Proxy",l={unversionedId:"api/middleware/proxy",id:"api/middleware/proxy",title:"Proxy",description:"Proxy middleware for Fiber that allows you to proxy requests to multiple servers.",source:"@site/docs/core/api/middleware/proxy.md",sourceDirName:"api/middleware",slug:"/api/middleware/proxy",permalink:"/next/api/middleware/proxy",draft:!1,editUrl:"https://github.com/gofiber/fiber/edit/master/docs/api/middleware/proxy.md",tags:[],version:"current",lastUpdatedAt:1707375532,formattedLastUpdatedAt:"Feb 8, 2024",frontMatter:{id:"proxy"},sidebar:"tutorialSidebar",previous:{title:"Pprof",permalink:"/next/api/middleware/pprof"},next:{title:"Recover",permalink:"/next/api/middleware/recover"}},p={},s=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}],d={toc:s},f="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"proxy"},"Proxy"),(0,a.kt)("p",null,"Proxy middleware for ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber")," that allows you to proxy requests to multiple servers."),(0,a.kt)("h2",{id:"signatures"},"Signatures"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// Balancer create a load balancer among multiple upstrem servers.\nfunc Balancer(config Config) fiber.Handler\n// Forward performs the given http request and fills the given http response.\nfunc Forward(addr string, clients ...*fasthttp.Client) fiber.Handler\n// Do performs the given http request and fills the given http response.\nfunc Do(c fiber.Ctx, addr string, clients ...*fasthttp.Client) error\n// DoRedirects performs the given http request and fills the given http response while following up to maxRedirectsCount redirects.\nfunc DoRedirects(c fiber.Ctx, addr string, maxRedirectsCount int, clients ...*fasthttp.Client) error\n// DoDeadline performs the given request and waits for response until the given deadline.\nfunc DoDeadline(c fiber.Ctx, addr string, deadline time.Time, clients ...*fasthttp.Client) error\n// DoTimeout performs the given request and waits for response during the given timeout duration.\nfunc DoTimeout(c fiber.Ctx, addr string, timeout time.Duration, clients ...*fasthttp.Client) error\n// DomainForward the given http request based on the given domain and fills the given http response\nfunc DomainForward(hostname string, addr string, clients ...*fasthttp.Client) fiber.Handler\n// BalancerForward performs the given http request based round robin balancer and fills the given http response\nfunc BalancerForward(servers []string, clients ...*fasthttp.Client) fiber.Handler\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Import the middleware package that is part of the Fiber web framework"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/gofiber/fiber/v3"\n    "github.com/gofiber/fiber/v3/middleware/proxy"\n)\n')),(0,a.kt)("p",null,"After you initiate your Fiber app, you can use the following possibilities:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// if target https site uses a self-signed certificate, you should\n// call WithTLSConfig before Do and Forward\nproxy.WithTLSConfig(&tls.Config{\n    InsecureSkipVerify: true,\n})\n// if you need to use global self-custom client, you should use proxy.WithClient.\nproxy.WithClient(&fasthttp.Client{\n    NoDefaultUserAgentHeader: true, \n    DisablePathNormalizing:   true,\n})\n\n// Forward to url\napp.Get("/gif", proxy.Forward("https://i.imgur.com/IWaBepg.gif"))\n\n// If you want to forward with a specific domain. You have to use proxy.DomainForward.\napp.Get("/payments", proxy.DomainForward("docs.gofiber.io", "http://localhost:8000"))\n\n// Forward to url with local custom client\napp.Get("/gif", proxy.Forward("https://i.imgur.com/IWaBepg.gif", &fasthttp.Client{\n    NoDefaultUserAgentHeader: true, \n    DisablePathNormalizing:   true,\n}))\n\n// Make request within handler\napp.Get("/:id", func(c fiber.Ctx) error {\n    url := "https://i.imgur.com/"+c.Params("id")+".gif"\n    if err := proxy.Do(c, url); err != nil {\n        return err\n    }\n    // Remove Server header from response\n    c.Response().Header.Del(fiber.HeaderServer)\n    return nil\n})\n\n// Make proxy requests while following redirects\napp.Get("/proxy", func(c fiber.Ctx) error {\n    if err := proxy.DoRedirects(c, "http://google.com", 3); err != nil {\n        return err\n    }\n    // Remove Server header from response\n    c.Response().Header.Del(fiber.HeaderServer)\n    return nil\n})\n\n// Make proxy requests and wait up to 5 seconds before timing out\napp.Get("/proxy", func(c fiber.Ctx) error {\n    if err := proxy.DoTimeout(c, "http://localhost:3000", time.Second * 5); err != nil {\n        return err\n    }\n    // Remove Server header from response\n    c.Response().Header.Del(fiber.HeaderServer)\n    return nil\n})\n\n// Make proxy requests, timeout a minute from now\napp.Get("/proxy", func(c fiber.Ctx) error {\n    if err := proxy.DoDeadline(c, "http://localhost", time.Now().Add(time.Minute)); err != nil {\n        return err\n    }\n    // Remove Server header from response\n    c.Response().Header.Del(fiber.HeaderServer)\n    return nil\n})\n\n// Minimal round robin balancer\napp.Use(proxy.Balancer(proxy.Config{\n    Servers: []string{\n        "http://localhost:3001",\n        "http://localhost:3002",\n        "http://localhost:3003",\n    },\n}))\n\n// Or extend your balancer for customization\napp.Use(proxy.Balancer(proxy.Config{\n    Servers: []string{\n        "http://localhost:3001",\n        "http://localhost:3002",\n        "http://localhost:3003",\n    },\n    ModifyRequest: func(c fiber.Ctx) error {\n        c.Request().Header.Add("X-Real-IP", c.IP())\n        return nil\n    },\n    ModifyResponse: func(c fiber.Ctx) error {\n        c.Response().Header.Del(fiber.HeaderServer)\n        return nil\n    },\n}))\n\n// Or this way if the balancer is using https and the destination server is only using http.\napp.Use(proxy.BalancerForward([]string{\n    "http://localhost:3001",\n    "http://localhost:3002",\n    "http://localhost:3003",\n}))\n')),(0,a.kt)("h2",{id:"config"},"Config"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Next"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"func(fiber.Ctx) bool")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Next defines a function to skip this middleware when returned true."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"nil"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Servers"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"[]string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Servers defines a list of ",(0,a.kt)("inlineCode",{parentName:"td"},"<scheme>://<host>"),' HTTP servers, which are used in a round-robin manner. i.e.: "',(0,a.kt)("a",{parentName:"td",href:"https://foobar.com"},"https://foobar.com"),", ",(0,a.kt)("a",{parentName:"td",href:"http://www.foobar.com%22"},'http://www.foobar.com"')),(0,a.kt)("td",{parentName:"tr",align:"left"},"(Required)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ModifyRequest"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"fiber.Handler")),(0,a.kt)("td",{parentName:"tr",align:"left"},"ModifyRequest allows you to alter the request."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"nil"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ModifyResponse"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"fiber.Handler")),(0,a.kt)("td",{parentName:"tr",align:"left"},"ModifyResponse allows you to alter the response."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"nil"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Timeout"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"time.Duration")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Timeout is the request timeout used when calling the proxy client."),(0,a.kt)("td",{parentName:"tr",align:"left"},"1 second")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ReadBufferSize"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"int")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Per-connection buffer size for requests' reading. This also limits the maximum header size. Increase this buffer if your clients send multi-KB RequestURIs and/or multi-KB headers (for example, BIG cookies)."),(0,a.kt)("td",{parentName:"tr",align:"left"},"(Not specified)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"WriteBufferSize"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"int")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Per-connection buffer size for responses' writing."),(0,a.kt)("td",{parentName:"tr",align:"left"},"(Not specified)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"TlsConfig"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"*tls.Config")," (or ",(0,a.kt)("inlineCode",{parentName:"td"},"*fasthttp.TLSConfig")," in v3)"),(0,a.kt)("td",{parentName:"tr",align:"left"},"TLS config for the HTTP client."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"nil"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Client"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"*fasthttp.LBClient")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Client is a custom client when client config is complex."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"nil"))))),(0,a.kt)("h2",{id:"default-config"},"Default Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"var ConfigDefault = Config{\n    Next:           nil,\n    ModifyRequest:  nil,\n    ModifyResponse: nil,\n    Timeout:        fasthttp.DefaultLBClientTimeout,\n}\n")))}m.isMDXComponent=!0}}]);