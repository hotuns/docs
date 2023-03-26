"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[6505],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=i,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||a;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4629:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),i=(r(7294),r(3905));const a={id:"timeout",title:"Timeout"},o=void 0,l={unversionedId:"api/middleware/timeout",id:"api/middleware/timeout",title:"Timeout",description:"Timeout middleware for Fiber. As a fiber.Handler wrapper, it creates a context with context.WithTimeout and pass it in UserContext.",source:"@site/docs/api/middleware/timeout.md",sourceDirName:"api/middleware",slug:"/api/middleware/timeout",permalink:"/next/api/middleware/timeout",draft:!1,editUrl:"https://github.com/gofiber/fiber/edit/master/docs/api/middleware/timeout.md",tags:[],version:"current",lastUpdatedBy:"M. Efe \xc7etin",lastUpdatedAt:1679860776,formattedLastUpdatedAt:"Mar 26, 2023",frontMatter:{id:"timeout",title:"Timeout"},sidebar:"tutorialSidebar",previous:{title:"Skip",permalink:"/next/api/middleware/skip"},next:{title:"Guide",permalink:"/next/category/guide"}},p={},u=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2}],c={toc:u},m="wrapper";function s(e){let{components:t,...r}=e;return(0,i.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Timeout middleware for ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber"),". As a ",(0,i.kt)("inlineCode",{parentName:"p"},"fiber.Handler")," wrapper, it creates a context with ",(0,i.kt)("inlineCode",{parentName:"p"},"context.WithTimeout")," and pass it in ",(0,i.kt)("inlineCode",{parentName:"p"},"UserContext"),". "),(0,i.kt)("p",null,"If the context passed executions (eg. DB ops, Http calls) takes longer than the given duration to return, the timeout error is set and forwarded to the centralized ",(0,i.kt)("inlineCode",{parentName:"p"},"ErrorHandler"),"."),(0,i.kt)("p",null,"It does not cancel long running executions. Underlying executions must handle timeout by using ",(0,i.kt)("inlineCode",{parentName:"p"},"context.Context")," parameter."),(0,i.kt)("h2",{id:"signatures"},"Signatures"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func New(handler fiber.Handler, timeout time.Duration, timeoutErrors ...error) fiber.Handler\n")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Import the middleware package that is part of the Fiber web framework"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/fiber/v2/middleware/timeout"\n)\n')),(0,i.kt)("p",null,"Sample timeout middleware usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    app := fiber.New()\n    h := func(c *fiber.Ctx) error {\n        sleepTime, _ := time.ParseDuration(c.Params("sleepTime") + "ms")\n        if err := sleepWithContext(c.UserContext(), sleepTime); err != nil {\n            return fmt.Errorf("%w: execution error", err)\n        }\n        return nil\n    }\n\n    app.Get("/foo/:sleepTime", timeout.New(h, 2*time.Second))\n    _ = app.Listen(":3000")\n}\n\nfunc sleepWithContext(ctx context.Context, d time.Duration) error {\n    timer := time.NewTimer(d)\n\n    select {\n    case <-ctx.Done():\n        if !timer.Stop() {\n            <-timer.C\n        }\n        return context.DeadlineExceeded\n    case <-timer.C:\n    }\n    return nil\n}\n')),(0,i.kt)("p",null,"Test http 200 with curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location -I --request GET 'http://localhost:3000/foo/1000' \n")),(0,i.kt)("p",null,"Test http 408 with curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location -I --request GET 'http://localhost:3000/foo/3000' \n")),(0,i.kt)("p",null,"Use with custom error:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'var ErrFooTimeOut = errors.New("foo context canceled")\n\nfunc main() {\n    app := fiber.New()\n    h := func(c *fiber.Ctx) error {\n        sleepTime, _ := time.ParseDuration(c.Params("sleepTime") + "ms")\n        if err := sleepWithContextWithCustomError(c.UserContext(), sleepTime); err != nil {\n            return fmt.Errorf("%w: execution error", err)\n        }\n        return nil\n    }\n\n    app.Get("/foo/:sleepTime", timeout.New(h, 2*time.Second, ErrFooTimeOut))\n    _ = app.Listen(":3000")\n}\n\nfunc sleepWithContextWithCustomError(ctx context.Context, d time.Duration) error {\n    timer := time.NewTimer(d)\n    select {\n    case <-ctx.Done():\n        if !timer.Stop() {\n            <-timer.C\n        }\n        return ErrFooTimeOut\n    case <-timer.C:\n    }\n    return nil\n}\n')),(0,i.kt)("p",null,"Sample usage with a DB call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    app := fiber.New()\n    db, _ := gorm.Open(postgres.Open("postgres://localhost/foodb"), &gorm.Config{})\n\n    handler := func(ctx *fiber.Ctx) error {\n        tran := db.WithContext(ctx.UserContext()).Begin()\n        \n        if tran = tran.Exec("SELECT pg_sleep(50)"); tran.Error != nil {\n            return tran.Error\n        }\n        \n        if tran = tran.Commit(); tran.Error != nil {\n            return tran.Error\n        }\n\n        return nil\n    }\n\n    app.Get("/foo", timeout.New(handler, 10*time.Second))\n    app.Listen(":3000")\n}\n')))}s.isMDXComponent=!0}}]);