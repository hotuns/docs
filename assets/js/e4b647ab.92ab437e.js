"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[95011],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),g=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=g(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=g(n),m=r,c=p["".concat(o,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(c,i(i({ref:t},u),{},{components:n})):a.createElement(c,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var g=2;g<l;g++)i[g]=n[g];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58053:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>g});var a=n(87462),r=(n(67294),n(3905));const l={id:"client",title:"\ud83c\udf0e Client",description:"The Client struct represents the Fiber HTTP Client.",sidebar_position:5},i=void 0,s={unversionedId:"api/client",id:"version-v3.x/api/client",title:"\ud83c\udf0e Client",description:"The Client struct represents the Fiber HTTP Client.",source:"@site/versioned_docs/version-v3.x/api/client.md",sourceDirName:"api",slug:"/api/client",permalink:"/api/client",draft:!1,tags:[],version:"v3.x",lastUpdatedAt:1713161311,formattedLastUpdatedAt:"Apr 15, 2024",sidebarPosition:5,frontMatter:{id:"client",title:"\ud83c\udf0e Client",description:"The Client struct represents the Fiber HTTP Client.",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udccb Constants",permalink:"/api/constants"},next:{title:"\ud83d\udcc3 Log",permalink:"/api/log"}},o={},g=[{value:"Start request",id:"start-request",level:2},{value:"\u2728 Agent",id:"-agent",level:2},{value:"Parse",id:"parse",level:3},{value:"Set",id:"set",level:3},{value:"Add",id:"add",level:3},{value:"ConnectionClose",id:"connectionclose",level:3},{value:"UserAgent",id:"useragent",level:3},{value:"Cookie",id:"cookie",level:3},{value:"Referer",id:"referer",level:3},{value:"ContentType",id:"contenttype",level:3},{value:"Host",id:"host",level:3},{value:"QueryString",id:"querystring",level:3},{value:"BasicAuth",id:"basicauth",level:3},{value:"Body",id:"body",level:3},{value:"JSON",id:"json",level:3},{value:"XML",id:"xml",level:3},{value:"Form",id:"form",level:3},{value:"MultipartForm",id:"multipartform",level:3},{value:"Boundary",id:"boundary",level:4},{value:"SendFile(s)",id:"sendfiles",level:4},{value:"FileData",id:"filedata",level:4},{value:"Debug",id:"debug",level:3},{value:"Timeout",id:"timeout",level:3},{value:"Reuse",id:"reuse",level:3},{value:"InsecureSkipVerify",id:"insecureskipverify",level:3},{value:"TLSConfig",id:"tlsconfig",level:3},{value:"MaxRedirectsCount",id:"maxredirectscount",level:3},{value:"JSONEncoder",id:"jsonencoder",level:3},{value:"JSONDecoder",id:"jsondecoder",level:3},{value:"Request",id:"request",level:3},{value:"SetResponse",id:"setresponse",level:3},{value:"Dest",id:"dest",level:3},{value:"Bytes",id:"bytes",level:3},{value:"String",id:"string",level:3},{value:"Struct",id:"struct",level:3},{value:"RetryIf",id:"retryif",level:3}],u={toc:g},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"start-request"},"Start request"),(0,r.kt)("p",null,"Start a http request with http method and url."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signatures"',title:'"Signatures"'},"// Client http methods\nfunc (c *Client) Get(url string) *Agent\nfunc (c *Client) Head(url string) *Agent\nfunc (c *Client) Post(url string) *Agent\nfunc (c *Client) Put(url string) *Agent\nfunc (c *Client) Patch(url string) *Agent\nfunc (c *Client) Delete(url string) *Agent\n")),(0,r.kt)("p",null,"Here we present a brief example demonstrating the simulation of a proxy using our ",(0,r.kt)("inlineCode",{parentName:"p"},"*fiber.Agent")," methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// Get something\nfunc getSomething(c fiber.Ctx) (err error) {\n    agent := fiber.Get("<URL>")\n    statusCode, body, errs := agent.Bytes()\n    if len(errs) > 0 {\n        return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{\n            "errs": errs,\n        })\n    }\n\n    var something fiber.Map\n    err = json.Unmarshal(body, &something)\n    if err != nil {\n        return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{\n            "err": err,\n        })\n    }\n\n    return c.Status(statusCode).JSON(something)\n}\n\n// Post something\nfunc createSomething(c fiber.Ctx) (err error) {\n    agent := fiber.Post("<URL>")\n    agent.Body(c.Body()) // set body received by request\n    statusCode, body, errs := agent.Bytes()\n    if len(errs) > 0 {\n        return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{\n            "errs": errs,\n        })\n    }\n\n    // pass status code and body received by the proxy\n    return c.Status(statusCode).Send(body)\n}\n')),(0,r.kt)("p",null,"Based on this short example, we can perceive that using the ",(0,r.kt)("inlineCode",{parentName:"p"},"*fiber.Client")," is very straightforward and intuitive."),(0,r.kt)("h2",{id:"-agent"},"\u2728 Agent"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Agent")," is built on top of FastHTTP's ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/valyala/fasthttp/blob/master/client.go#L603"},(0,r.kt)("inlineCode",{parentName:"a"},"HostClient"))," which has lots of convenient helper methods such as dedicated methods for request methods."),(0,r.kt)("h3",{id:"parse"},"Parse"),(0,r.kt)("p",null,"Parse initializes a HostClient."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Parse"',title:'"Parse"'},'a := AcquireAgent()\nreq := a.Request()\nreq.Header.SetMethod(MethodGet)\nreq.SetRequestURI("http://example.com")\n\nif err := a.Parse(); err != nil {\n    panic(err)\n}\n\ncode, body, errs := a.Bytes() // ...\n')),(0,r.kt)("h3",{id:"set"},"Set"),(0,r.kt)("p",null,"Set sets the given ",(0,r.kt)("inlineCode",{parentName:"p"},"key: value")," header."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (a *Agent) Set(k, v string) *Agent\nfunc (a *Agent) SetBytesK(k []byte, v string) *Agent\nfunc (a *Agent) SetBytesV(k string, v []byte) *Agent\nfunc (a *Agent) SetBytesKV(k []byte, v []byte) *Agent\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'agent.Set("k1", "v1").\n    SetBytesK([]byte("k1"), "v1").\n    SetBytesV("k1", []byte("v1")).\n    SetBytesKV([]byte("k2"), []byte("v2"))\n// ...\n')),(0,r.kt)("h3",{id:"add"},"Add"),(0,r.kt)("p",null,"Add adds the given ",(0,r.kt)("inlineCode",{parentName:"p"},"key: value")," header. Multiple headers with the same key may be added with this function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (a *Agent) Add(k, v string) *Agent\nfunc (a *Agent) AddBytesK(k []byte, v string) *Agent\nfunc (a *Agent) AddBytesV(k string, v []byte) *Agent\nfunc (a *Agent) AddBytesKV(k []byte, v []byte) *Agent\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'agent.Add("k1", "v1").\n    AddBytesK([]byte("k1"), "v1").\n    AddBytesV("k1", []byte("v1")).\n    AddBytesKV([]byte("k2"), []byte("v2"))\n// Headers:\n// K1: v1\n// K1: v1\n// K1: v1\n// K2: v2\n')),(0,r.kt)("h3",{id:"connectionclose"},"ConnectionClose"),(0,r.kt)("p",null,"ConnectionClose adds the ",(0,r.kt)("inlineCode",{parentName:"p"},"Connection: close")," header."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (a *Agent) ConnectionClose() *Agent\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},"agent.ConnectionClose()\n// ...\n")),(0,r.kt)("h3",{id:"useragent"},"UserAgent"),(0,r.kt)("p",null,"UserAgent sets ",(0,r.kt)("inlineCode",{parentName:"p"},"User-Agent")," header value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (a *Agent) UserAgent(userAgent string) *Agent\nfunc (a *Agent) UserAgentBytes(userAgent []byte) *Agent\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'agent.UserAgent("fiber")\n// ...\n')),(0,r.kt)("h3",{id:"cookie"},"Cookie"),(0,r.kt)("p",null,"Cookie sets a cookie in ",(0,r.kt)("inlineCode",{parentName:"p"},"key: value")," form. ",(0,r.kt)("inlineCode",{parentName:"p"},"Cookies")," can be used to set multiple cookies."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (a *Agent) Cookie(key, value string) *Agent\nfunc (a *Agent) CookieBytesK(key []byte, value string) *Agent\nfunc (a *Agent) CookieBytesKV(key, value []byte) *Agent\nfunc (a *Agent) Cookies(kv ...string) *Agent\nfunc (a *Agent) CookiesBytesKV(kv ...[]byte) *Agent\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'agent.Cookie("k", "v")\nagent.Cookies("k1", "v1", "k2", "v2")\n// ...\n')),(0,r.kt)("h3",{id:"referer"},"Referer"),(0,r.kt)("p",null,"Referer sets the Referer header value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (a *Agent) Referer(referer string) *Agent\nfunc (a *Agent) RefererBytes(referer []byte) *Agent\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'agent.Referer("https://docs.gofiber.io")\n// ...\n')),(0,r.kt)("h3",{id:"contenttype"},"ContentType"),(0,r.kt)("p",null,"ContentType sets Content-Type header value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (a *Agent) ContentType(contentType string) *Agent\nfunc (a *Agent) ContentTypeBytes(contentType []byte) *Agent\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'agent.ContentType("custom-type")\n// ...\n')),(0,r.kt)("h3",{id:"host"},"Host"),(0,r.kt)("p",null,"Host sets the Host header."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (a *Agent) Host(host string) *Agent\nfunc (a *Agent) HostBytes(host []byte) *Agent\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'agent.Host("example.com")\n// ...\n')),(0,r.kt)("h3",{id:"querystring"},"QueryString"),(0,r.kt)("p",null,"QueryString sets the URI query string."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (a *Agent) QueryString(queryString string) *Agent\nfunc (a *Agent) QueryStringBytes(queryString []byte) *Agent\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'agent.QueryString("foo=bar")\n// ...\n')),(0,r.kt)("h3",{id:"basicauth"},"BasicAuth"),(0,r.kt)("p",null,"BasicAuth sets the URI username and password using HTTP Basic Auth."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (a *Agent) BasicAuth(username, password string) *Agent\nfunc (a *Agent) BasicAuthBytes(username, password []byte) *Agent\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'agent.BasicAuth("foo", "bar")\n// ...\n')),(0,r.kt)("h3",{id:"body"},"Body"),(0,r.kt)("p",null,"There are several ways to set request body."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (a *Agent) BodyString(bodyString string) *Agent\nfunc (a *Agent) Body(body []byte) *Agent\n\n// BodyStream sets request body stream and, optionally body size.\n//\n// If bodySize is >= 0, then the bodyStream must provide exactly bodySize bytes\n// before returning io.EOF.\n//\n// If bodySize < 0, then bodyStream is read until io.EOF.\n//\n// bodyStream.Close() is called after finishing reading all body data\n// if it implements io.Closer.\n//\n// Note that GET and HEAD requests cannot have body.\nfunc (a *Agent) BodyStream(bodyStream io.Reader, bodySize int) *Agent\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'agent.BodyString("foo=bar")\nagent.Body([]byte("bar=baz"))\nagent.BodyStream(strings.NewReader("body=stream"), -1)\n// ...\n')),(0,r.kt)("h3",{id:"json"},"JSON"),(0,r.kt)("p",null,"JSON sends a JSON request by setting the Content-Type header to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ctype")," parameter. If no ",(0,r.kt)("inlineCode",{parentName:"p"},"ctype")," is passed in, the header is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"application/json"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (a *Agent) JSON(v any, ctype ...string) *Agent\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'agent.JSON(fiber.Map{"success": true})\n// ...\n')),(0,r.kt)("h3",{id:"xml"},"XML"),(0,r.kt)("p",null,"XML sends an XML request by setting the Content-Type header to ",(0,r.kt)("inlineCode",{parentName:"p"},"application/xml"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (a *Agent) XML(v any) *Agent\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'agent.XML(fiber.Map{"success": true})\n// ...\n')),(0,r.kt)("h3",{id:"form"},"Form"),(0,r.kt)("p",null,"Form sends a form request by setting the Content-Type header to ",(0,r.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"// Form sends form request with body if args is non-nil.\n//\n// It is recommended obtaining args via AcquireArgs and release it\n// manually in performance-critical code.\nfunc (a *Agent) Form(args *Args) *Agent\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'args := AcquireArgs()\nargs.Set("foo", "bar")\n\nagent.Form(args)\n// ...\nReleaseArgs(args)\n')),(0,r.kt)("h3",{id:"multipartform"},"MultipartForm"),(0,r.kt)("p",null,"MultipartForm sends multipart form request by setting the Content-Type header to ",(0,r.kt)("inlineCode",{parentName:"p"},"multipart/form-data"),". These requests can include key-value's and files."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"// MultipartForm sends multipart form request with k-v and files.\n//\n// It is recommended to obtain args via AcquireArgs and release it\n// manually in performance-critical code.\nfunc (a *Agent) MultipartForm(args *Args) *Agent\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'args := AcquireArgs()\nargs.Set("foo", "bar")\n\nagent.MultipartForm(args)\n// ...\nReleaseArgs(args)\n')),(0,r.kt)("p",null,"Fiber provides several methods for sending files. Note that they must be called before ",(0,r.kt)("inlineCode",{parentName:"p"},"MultipartForm"),"."),(0,r.kt)("h4",{id:"boundary"},"Boundary"),(0,r.kt)("p",null,"Boundary sets boundary for multipart form request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (a *Agent) Boundary(boundary string) *Agent\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'agent.Boundary("myBoundary")\n    .MultipartForm(nil)\n// ...\n')),(0,r.kt)("h4",{id:"sendfiles"},"SendFile","(","s",")"),(0,r.kt)("p",null,"SendFile read a file and appends it to a multipart form request. Sendfiles can be used to append multiple files."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (a *Agent) SendFile(filename string, fieldname ...string) *Agent\nfunc (a *Agent) SendFiles(filenamesAndFieldnames ...string) *Agent\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'agent.SendFile("f", "field name")\n    .SendFiles("f1", "field name1", "f2").\n    .MultipartForm(nil)\n// ...\n')),(0,r.kt)("h4",{id:"filedata"},"FileData"),(0,r.kt)("p",null,"FileData appends file data for multipart form request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// FormFile represents multipart form file\ntype FormFile struct {\n    // Fieldname is form file's field name\n    Fieldname string\n    // Name is form file's name\n    Name string\n    // Content is form file's content\n    Content []byte\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"// FileData appends files for multipart form request.\n//\n// It is recommended obtaining formFile via AcquireFormFile and release it\n// manually in performance-critical code.\nfunc (a *Agent) FileData(formFiles ...*FormFile) *Agent\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'ff1 := &FormFile{"filename1", "field name1", []byte("content")}\nff2 := &FormFile{"filename2", "field name2", []byte("content")}\nagent.FileData(ff1, ff2).\n    MultipartForm(nil)\n// ...\n')),(0,r.kt)("h3",{id:"debug"},"Debug"),(0,r.kt)("p",null,"Debug mode enables logging request and response detail to ",(0,r.kt)("inlineCode",{parentName:"p"},"io.writer"),"(","default is ",(0,r.kt)("inlineCode",{parentName:"p"},"os.Stdout"),")","."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (a *Agent) Debug(w ...io.Writer) *Agent\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},"agent.Debug()\n// ...\n")),(0,r.kt)("h3",{id:"timeout"},"Timeout"),(0,r.kt)("p",null,"Timeout sets request timeout duration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (a *Agent) Timeout(timeout time.Duration) *Agent\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},"agent.Timeout(time.Second)\n// ...\n")),(0,r.kt)("h3",{id:"reuse"},"Reuse"),(0,r.kt)("p",null,"Reuse enables the Agent instance to be used again after one request. If agent is reusable, then it should be released manually when it is no longer used."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (a *Agent) Reuse() *Agent\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},"agent.Reuse()\n// ...\n")),(0,r.kt)("h3",{id:"insecureskipverify"},"InsecureSkipVerify"),(0,r.kt)("p",null,"InsecureSkipVerify controls whether the Agent verifies the server certificate chain and host name."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (a *Agent) InsecureSkipVerify() *Agent\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},"agent.InsecureSkipVerify()\n// ...\n")),(0,r.kt)("h3",{id:"tlsconfig"},"TLSConfig"),(0,r.kt)("p",null,"TLSConfig sets tls config."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (a *Agent) TLSConfig(config *tls.Config) *Agent\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'// Create tls certificate\ncer, _ := tls.LoadX509KeyPair("pem", "key")\n\nconfig := &tls.Config{\n    Certificates: []tls.Certificate{cer},\n}\n\nagent.TLSConfig(config)\n// ...\n')),(0,r.kt)("h3",{id:"maxredirectscount"},"MaxRedirectsCount"),(0,r.kt)("p",null,"MaxRedirectsCount sets max redirect count for GET and HEAD."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (a *Agent) MaxRedirectsCount(count int) *Agent\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},"agent.MaxRedirectsCount(7)\n// ...\n")),(0,r.kt)("h3",{id:"jsonencoder"},"JSONEncoder"),(0,r.kt)("p",null,"JSONEncoder sets custom json encoder."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (a *Agent) JSONEncoder(jsonEncoder utils.JSONMarshal) *Agent\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},"agent.JSONEncoder(json.Marshal)\n// ...\n")),(0,r.kt)("h3",{id:"jsondecoder"},"JSONDecoder"),(0,r.kt)("p",null,"JSONDecoder sets custom json decoder."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (a *Agent) JSONDecoder(jsonDecoder utils.JSONUnmarshal) *Agent\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},"agent.JSONDecoder(json.Unmarshal)\n// ...\n")),(0,r.kt)("h3",{id:"request"},"Request"),(0,r.kt)("p",null,"Request returns Agent request instance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (a *Agent) Request() *Request\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},"req := agent.Request()\n// ...\n")),(0,r.kt)("h3",{id:"setresponse"},"SetResponse"),(0,r.kt)("p",null,"SetResponse sets custom response for the Agent instance. It is recommended obtaining custom response via AcquireResponse and release it manually in performance-critical code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (a *Agent) SetResponse(customResp *Response) *Agent\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},"resp := AcquireResponse()\nagent.SetResponse(resp)\n// ...\nReleaseResponse(resp)\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example handling for response values"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example handling response"',title:'"Example',handling:!0,'response"':!0},'// Create a Fiber HTTP client agent\nagent := fiber.Get("https://httpbin.org/get")\n\n// Acquire a response object to store the result\nresp := fiber.AcquireResponse()\nagent.SetResponse(resp)\n\n// Perform the HTTP GET request\ncode, body, errs := agent.String()\nif errs != nil {\n    // Handle any errors that occur during the request\n    panic(errs)\n}\n\n// Print the HTTP response code and body\nfmt.Println("Response Code:", code)\nfmt.Println("Response Body:", body)\n\n// Visit and print all the headers in the response\nresp.Header.VisitAll(func(key, value []byte) {\n    fmt.Println("Header", string(key), "value", string(value))\n})\n\n// Release the response to free up resources\nfiber.ReleaseResponse(resp)\n')),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title="Output"',title:'"Output"'},'Response Code: 200\nResponse Body: {\n  "args": {}, \n  "headers": {\n    "Host": "httpbin.org", \n    "User-Agent": "fiber", \n    "X-Amzn-Trace-Id": "Root=1-653763d0-2555d5ba3838f1e9092f9f72"\n  }, \n  "origin": "83.137.191.1", \n  "url": "https://httpbin.org/get"\n}\n\nHeader Content-Length value 226\nHeader Content-Type value application/json\nHeader Server value gunicorn/19.9.0\nHeader Date value Tue, 24 Oct 2023 06:27:28 GMT\nHeader Connection value keep-alive\nHeader Access-Control-Allow-Origin value *\nHeader Access-Control-Allow-Credentials value true\n'))),(0,r.kt)("h3",{id:"dest"},"Dest"),(0,r.kt)("p",null,"Dest sets custom dest. The contents of dest will be replaced by the response body, if the dest is too small a new slice will be allocated."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (a *Agent) Dest(dest []byte) *Agent {\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},"agent.Dest(nil)\n// ...\n")),(0,r.kt)("h3",{id:"bytes"},"Bytes"),(0,r.kt)("p",null,"Bytes returns the status code, bytes body and errors of url."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (a *Agent) Bytes() (code int, body []byte, errs []error)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},"code, body, errs := agent.Bytes()\n// ...\n")),(0,r.kt)("h3",{id:"string"},"String"),(0,r.kt)("p",null,"String returns the status code, string body and errors of url."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (a *Agent) String() (int, string, []error)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},"code, body, errs := agent.String()\n// ...\n")),(0,r.kt)("h3",{id:"struct"},"Struct"),(0,r.kt)("p",null,"Struct returns the status code, bytes body and errors of url. And bytes body will be unmarshalled to given v."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (a *Agent) Struct(v any) (code int, body []byte, errs []error)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},"var d data\ncode, body, errs := agent.Struct(&d)\n// ...\n")),(0,r.kt)("h3",{id:"retryif"},"RetryIf"),(0,r.kt)("p",null,"RetryIf controls whether a retry should be attempted after an error.\nBy default, will use isIdempotent function from fasthttp"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (a *Agent) RetryIf(retryIf RetryIfFunc) *Agent\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'agent.Get("https://example.com").RetryIf(func (req *fiber.Request) bool {\n    return req.URI() == "https://example.com"\n})\n// ...\n')))}d.isMDXComponent=!0}}]);