"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[49673],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g=a.createContext({}),d=function(e){var t=a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(g.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,g=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),f=r,u=p["".concat(g,".").concat(f)]||p[f]||m[f]||i;return n?a.createElement(u,o(o({ref:t},s),{},{components:n})):a.createElement(u,o({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var g in t)hasOwnProperty.call(t,g)&&(l[g]=t[g]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2101:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={id:"logger"},o="Logger",l={unversionedId:"api/middleware/logger",id:"version-v2.x/api/middleware/logger",title:"Logger",description:"Logger middleware for Fiber that logs HTTP request/response details.",source:"@site/versioned_docs/version-v2.x/api/middleware/logger.md",sourceDirName:"api/middleware",slug:"/api/middleware/logger",permalink:"/api/middleware/logger",draft:!1,tags:[],version:"v2.x",lastUpdatedAt:1693559534,formattedLastUpdatedAt:"Sep 1, 2023",frontMatter:{id:"logger"},sidebar:"tutorialSidebar",previous:{title:"Limiter",permalink:"/api/middleware/limiter"},next:{title:"Monitor",permalink:"/api/middleware/monitor"}},g={},d=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Config",id:"config-1",level:3},{value:"Default Config",id:"default-config",level:2},{value:"Constants",id:"constants",level:2}],s={toc:d},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"logger"},"Logger"),(0,r.kt)("p",null,"Logger middleware for ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber")," that logs HTTP request/response details."),(0,r.kt)("h2",{id:"signatures"},"Signatures"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) fiber.Handler\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Import the middleware package that is part of the Fiber web framework"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/logger"\n)\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The order of registration plays a role. Only all routes that are registered after this one will be logged.\nThe middleware should therefore be one of the first to be registered.")),(0,r.kt)("p",null,"After you initiate your Fiber app, you can use the following possibilities:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// Initialize default config\napp.Use(logger.New())\n\n// Or extend your config for customization\n// Logging remote IP and Port\napp.Use(logger.New(logger.Config{\n    Format: "[${ip}]:${port} ${status} - ${method} ${path}\\n",\n}))\n\n// Logging Request ID\napp.Use(requestid.New())\napp.Use(logger.New(logger.Config{\n    // For more options, see the Config section\n    Format: "${pid} ${locals:requestid} ${status} - ${method} ${path}\u200b\\n",\n}))\n\n// Changing TimeZone & TimeFormat\napp.Use(logger.New(logger.Config{\n    Format:     "${pid} ${status} - ${method} ${path}\\n",\n    TimeFormat: "02-Jan-2006",\n    TimeZone:   "America/New_York",\n}))\n\n// Custom File Writer\nfile, err := os.OpenFile("./123.log", os.O_RDWR|os.O_CREATE|os.O_APPEND, 0666)\nif err != nil {\n    log.Fatalf("error opening file: %v", err)\n}\ndefer file.Close()\napp.Use(logger.New(logger.Config{\n    Output: file,\n}))\n\n// Add Custom Tags\napp.Use(logger.New(logger.Config{\n    CustomTags: map[string]logger.LogFunc{\n        "custom_tag": func(output logger.Buffer, c *fiber.Ctx, data *logger.Data, extraParam string) (int, error) {\n            return output.WriteString("it is a custom tag")\n        },\n    },\n}))\n\n// Callback after log is written\napp.Use(logger.New(logger.Config{\n    TimeFormat: time.RFC3339Nano,\n    TimeZone:   "Asia/Shanghai",\n    Done: func(c *fiber.Ctx, logString []byte) {\n        if c.Response().StatusCode() != fiber.StatusOK {\n            reporter.SendToSlack(logString) \n        }\n    },\n}))\n\n// Disable colors when outputting to default format\napp.Use(logger.New(logger.Config{\n    DisableColors: true,\n}))\n')),(0,r.kt)("h2",{id:"config"},"Config"),(0,r.kt)("h3",{id:"config-1"},"Config"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Next"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"func(*fiber.Ctx) bool")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Next defines a function to skip this middleware when returned true."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nil"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Done"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"func(*fiber.Ctx, []byte)")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Done is a function that is called after the log string for a request is written to Output, and pass the log string as parameter."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nil"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CustomTags"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"map[string]LogFunc")),(0,r.kt)("td",{parentName:"tr",align:"left"},"tagFunctions defines the custom tag action."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"map[string]LogFunc"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Format"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Format defines the logging tags."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"[${time}] ${status} - ${latency} ${method} ${path}\\n"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TimeFormat"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"TimeFormat defines the time format for log timestamps."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"15:04:05"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TimeZone"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},'TimeZone can be specified, such as "UTC" and "America/New_York" and "Asia/Chongqing", etc'),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"Local"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TimeInterval"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"time.Duration")),(0,r.kt)("td",{parentName:"tr",align:"left"},"TimeInterval is the delay before the timestamp is updated."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"500 * time.Millisecond"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Output"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"io.Writer")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Output is a writer where logs are written."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"os.Stdout"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"DisableColors"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:"left"},"DisableColors defines if the logs output should be colorized."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"enableColors"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Internal field for enabling colors in the log output. (This is not a user-configurable field)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"enableLatency"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Internal field for enabling latency measurement in logs. (This is not a user-configurable field)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"timeZoneLocation"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"*time.Location")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Internal field for the time zone location. (This is not a user-configurable field)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,r.kt)("h2",{id:"default-config"},"Default Config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'var ConfigDefault = Config{\n    Next:          nil,\n    Done:          nil,\n    Format:        "[${time}] ${status} - ${latency} ${method} ${path}\\n",\n    TimeFormat:    "15:04:05",\n    TimeZone:      "Local",\n    TimeInterval:  500 * time.Millisecond,\n    Output:        os.Stdout,\n    DisableColors: false,\n}\n')),(0,r.kt)("h2",{id:"constants"},"Constants"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// Logger variables\nconst (\n    TagPid               = "pid"\n    TagTime              = "time"\n    TagReferer           = "referer"\n    TagProtocol          = "protocol"\n    TagPort              = "port"\n    TagIP                = "ip"\n    TagIPs               = "ips"\n    TagHost              = "host"\n    TagMethod            = "method"\n    TagPath              = "path"\n    TagURL               = "url"\n    TagUA                = "ua"\n    TagLatency           = "latency"\n    TagStatus            = "status"         // response status\n    TagResBody           = "resBody"        // response body\n    TagReqHeaders        = "reqHeaders"\n    TagQueryStringParams = "queryParams"    // request query parameters\n    TagBody              = "body"           // request body\n    TagBytesSent         = "bytesSent"\n    TagBytesReceived     = "bytesReceived"\n    TagRoute             = "route"\n    TagError             = "error"\n    // DEPRECATED: Use TagReqHeader instead\n    TagHeader            = "header:"        // request header\n    TagReqHeader         = "reqHeader:"     // request header\n    TagRespHeader        = "respHeader:"    // response header\n    TagQuery             = "query:"         // request query\n    TagForm              = "form:"          // request form\n    TagCookie            = "cookie:"        // request cookie\n    TagLocals            = "locals:"\n    // colors\n    TagBlack             = "black"\n    TagRed               = "red"\n    TagGreen             = "green"\n    TagYellow            = "yellow"\n    TagBlue              = "blue"\n    TagMagenta           = "magenta"\n    TagCyan              = "cyan"\n    TagWhite             = "white"\n    TagReset             = "reset"\n)\n')))}m.isMDXComponent=!0}}]);