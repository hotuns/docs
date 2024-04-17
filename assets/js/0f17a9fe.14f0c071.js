"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[5373],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(r),d=i,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||o;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},25419:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(87462),i=(r(67294),r(3905));const o={id:"timeout"},a="Timeout",l={unversionedId:"api/middleware/timeout",id:"version-v2.x/api/middleware/timeout",title:"Timeout",description:"There exist two distinct implementations of timeout middleware Fiber.",source:"@site/versioned_docs/version-v2.x/api/middleware/timeout.md",sourceDirName:"api/middleware",slug:"/api/middleware/timeout",permalink:"/api/middleware/timeout",draft:!1,tags:[],version:"v2.x",lastUpdatedAt:1713366823,formattedLastUpdatedAt:"Apr 17, 2024",frontMatter:{id:"timeout"},sidebar:"tutorialSidebar",previous:{title:"Skip",permalink:"/api/middleware/skip"},next:{title:"Guide",permalink:"/category/guide"}},p={},u=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2}],s={toc:u},c="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(c,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"timeout"},"Timeout"),(0,i.kt)("p",null,"There exist two distinct implementations of timeout middleware ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"New")),(0,i.kt)("p",null,"Wraps a ",(0,i.kt)("inlineCode",{parentName:"p"},"fiber.Handler")," with a timeout. If the handler takes longer than the given duration to return, the timeout error is set and forwarded to the centralized ",(0,i.kt)("a",{parentName:"p",href:"https://docs.gofiber.io/error-handling"},"ErrorHandler"),"."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This has been deprecated since it raises race conditions.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NewWithContext")),(0,i.kt)("p",null,"As a ",(0,i.kt)("inlineCode",{parentName:"p"},"fiber.Handler")," wrapper, it creates a context with ",(0,i.kt)("inlineCode",{parentName:"p"},"context.WithTimeout")," and pass it in ",(0,i.kt)("inlineCode",{parentName:"p"},"UserContext"),". "),(0,i.kt)("p",null,"If the context passed executions (eg. DB ops, Http calls) takes longer than the given duration to return, the timeout error is set and forwarded to the centralized ",(0,i.kt)("inlineCode",{parentName:"p"},"ErrorHandler"),"."),(0,i.kt)("p",null,"It does not cancel long running executions. Underlying executions must handle timeout by using ",(0,i.kt)("inlineCode",{parentName:"p"},"context.Context")," parameter."),(0,i.kt)("h2",{id:"signatures"},"Signatures"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func New(handler fiber.Handler, timeout time.Duration, timeoutErrors ...error) fiber.Handler\nfunc NewWithContext(handler fiber.Handler, timeout time.Duration, timeoutErrors ...error) fiber.Handler\n")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Import the middleware package that is part of the Fiber web framework"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/fiber/v2/middleware/timeout"\n)\n')),(0,i.kt)("p",null,"After you initiate your Fiber app, you can use the following possibilities:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    app := fiber.New()\n\n    h := func(c *fiber.Ctx) error {\n        sleepTime, _ := time.ParseDuration(c.Params("sleepTime") + "ms")\n        if err := sleepWithContext(c.UserContext(), sleepTime); err != nil {\n            return fmt.Errorf("%w: execution error", err)\n        }\n        return nil\n    }\n\n    app.Get("/foo/:sleepTime", timeout.New(h, 2*time.Second))\n    log.Fatal(app.Listen(":3000"))\n}\n\nfunc sleepWithContext(ctx context.Context, d time.Duration) error {\n    timer := time.NewTimer(d)\n\n    select {\n    case <-ctx.Done():\n        if !timer.Stop() {\n            <-timer.C\n        }\n        return context.DeadlineExceeded\n    case <-timer.C:\n    }\n    return nil\n}\n')),(0,i.kt)("p",null,"Test http 200 with curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location -I --request GET 'http://localhost:3000/foo/1000' \n")),(0,i.kt)("p",null,"Test http 408 with curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location -I --request GET 'http://localhost:3000/foo/3000' \n")),(0,i.kt)("p",null,"Use with custom error:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'var ErrFooTimeOut = errors.New("foo context canceled")\n\nfunc main() {\n    app := fiber.New()\n    h := func(c *fiber.Ctx) error {\n        sleepTime, _ := time.ParseDuration(c.Params("sleepTime") + "ms")\n        if err := sleepWithContextWithCustomError(c.UserContext(), sleepTime); err != nil {\n            return fmt.Errorf("%w: execution error", err)\n        }\n        return nil\n    }\n\n    app.Get("/foo/:sleepTime", timeout.NewWithContext(h, 2*time.Second, ErrFooTimeOut))\n    log.Fatal(app.Listen(":3000"))\n}\n\nfunc sleepWithContextWithCustomError(ctx context.Context, d time.Duration) error {\n    timer := time.NewTimer(d)\n    select {\n    case <-ctx.Done():\n        if !timer.Stop() {\n            <-timer.C\n        }\n        return ErrFooTimeOut\n    case <-timer.C:\n    }\n    return nil\n}\n')),(0,i.kt)("p",null,"Sample usage with a DB call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    app := fiber.New()\n    db, _ := gorm.Open(postgres.Open("postgres://localhost/foodb"), &gorm.Config{})\n\n    handler := func(ctx *fiber.Ctx) error {\n        tran := db.WithContext(ctx.UserContext()).Begin()\n        \n        if tran = tran.Exec("SELECT pg_sleep(50)"); tran.Error != nil {\n            return tran.Error\n        }\n        \n        if tran = tran.Commit(); tran.Error != nil {\n            return tran.Error\n        }\n\n        return nil\n    }\n\n    app.Get("/foo", timeout.NewWithContext(handler, 10*time.Second))\n    log.Fatal(app.Listen(":3000"))\n}\n')))}m.isMDXComponent=!0}}]);