"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[17961],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8657:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={id:"faq",title:"\ud83e\udd14 FAQ",description:"List of frequently asked questions. Feel free to open an issue to add your question to this page.",sidebar_position:1},i=void 0,l={unversionedId:"extra/faq",id:"version-v2.x/extra/faq",title:"\ud83e\udd14 FAQ",description:"List of frequently asked questions. Feel free to open an issue to add your question to this page.",source:"@site/versioned_docs/version-v2.x/extra/faq.md",sourceDirName:"extra",slug:"/extra/faq",permalink:"/extra/faq",draft:!1,tags:[],version:"v2.x",lastUpdatedAt:1706864260,formattedLastUpdatedAt:"Feb 2, 2024",sidebarPosition:1,frontMatter:{id:"faq",title:"\ud83e\udd14 FAQ",description:"List of frequently asked questions. Feel free to open an issue to add your question to this page.",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Extra",permalink:"/category/extra"},next:{title:"\ud83d\udcca Benchmarks",permalink:"/extra/benchmarks"}},s={},p=[{value:"How should I structure my application?",id:"how-should-i-structure-my-application",level:2},{value:"How do I handle custom 404 responses?",id:"how-do-i-handle-custom-404-responses",level:2},{value:"How can i use live reload ?",id:"how-can-i-use-live-reload-",level:2},{value:"How do I set up an error handler?",id:"how-do-i-set-up-an-error-handler",level:2},{value:"Which template engines does Fiber support?",id:"which-template-engines-does-fiber-support",level:2},{value:"Does Fiber have a community chat?",id:"does-fiber-have-a-community-chat",level:2},{value:"Does fiber support sub domain routing ?",id:"does-fiber-support-sub-domain-routing-",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"how-should-i-structure-my-application"},"How should I structure my application?"),(0,a.kt)("p",null,"There is no definitive answer to this question. The answer depends on the scale of your application and the team that is involved. To be as flexible as possible, Fiber makes no assumptions in terms of structure."),(0,a.kt)("p",null,"Routes and other application-specific logic can live in as many files as you wish, in any directory structure you prefer. View the following examples for inspiration:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/gofiber/boilerplate"},"gofiber/boilerplate")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/thomasvvugt/fiber-boilerplate"},"thomasvvugt/fiber-boilerplate")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=Iq2qT0fRhAA"},"Youtube - Building a REST API using Gorm and Fiber")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/embedmode/fiberseed"},"embedmode/fiberseed"))),(0,a.kt)("h2",{id:"how-do-i-handle-custom-404-responses"},"How do I handle custom 404 responses?"),(0,a.kt)("p",null,"If you're using v2.32.0 or later, all you need to do is to implement a custom error handler. See below, or see a more detailed explanation at ",(0,a.kt)("a",{parentName:"p",href:"/guide/error-handling#custom-error-handler"},"Error Handling"),". "),(0,a.kt)("p",null,"If you're using v2.31.0 or earlier, the error handler will not capture 404 errors. Instead, you need to add a middleware function at the very bottom of the stack ","(","below all other functions",")"," to handle a 404 response:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'app.Use(func(c *fiber.Ctx) error {\n    return c.Status(fiber.StatusNotFound).SendString("Sorry can\'t find that!")\n})\n')),(0,a.kt)("h2",{id:"how-can-i-use-live-reload-"},"How can i use live reload ?"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmtrek/air"},"Air")," is a handy tool that automatically restarts your Go applications whenever the source code changes, making your development process faster and more efficient."),(0,a.kt)("p",null,"To use Air in a Fiber project, follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install Air by downloading the appropriate binary for your operating system from the GitHub release page or by building the tool directly from source."),(0,a.kt)("li",{parentName:"ol"},"Create a configuration file for Air in your project directory. This file can be named, for example, .air.toml or air.conf. Here's a sample configuration file that works with Fiber:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'# .air.toml\nroot = "."\ntmp_dir = "tmp"\n[build]\n  cmd = "go build -o ./tmp/main ."\n  bin = "./tmp/main"\n  delay = 1000 # ms\n  exclude_dir = ["assets", "tmp", "vendor"]\n  include_ext = ["go", "tpl", "tmpl", "html"]\n  exclude_regex = ["_test\\\\.go"]\n')),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Start your Fiber application using Air by running the following command in the terminal:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"air\n")),(0,a.kt)("p",null,"As you make changes to your source code, Air will detect them and automatically restart the application."),(0,a.kt)("p",null,"A complete example demonstrating the use of Air with Fiber can be found in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gofiber/recipes/tree/master/air"},"Fiber Recipes repository"),". This example shows how to configure and use Air in a Fiber project to create an efficient development environment."),(0,a.kt)("h2",{id:"how-do-i-set-up-an-error-handler"},"How do I set up an error handler?"),(0,a.kt)("p",null,"To override the default error handler, you can override the default when providing a ",(0,a.kt)("a",{parentName:"p",href:"/api/fiber#config"},"Config")," when initiating a new ",(0,a.kt)("a",{parentName:"p",href:"/api/fiber#new"},"Fiber instance"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},"app := fiber.New(fiber.Config{\n    ErrorHandler: func(c *fiber.Ctx, err error) error {\n        return c.Status(fiber.StatusInternalServerError).SendString(err.Error())\n    },\n})\n")),(0,a.kt)("p",null,"We have a dedicated page explaining how error handling works in Fiber, see ",(0,a.kt)("a",{parentName:"p",href:"/guide/error-handling"},"Error Handling"),"."),(0,a.kt)("h2",{id:"which-template-engines-does-fiber-support"},"Which template engines does Fiber support?"),(0,a.kt)("p",null,"Fiber currently supports 9 template engines in our ",(0,a.kt)("a",{parentName:"p",href:"https://docs.gofiber.io/template/"},"gofiber/template")," middleware:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.gofiber.io/template/ace/"},"ace")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.gofiber.io/template/amber/"},"amber")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.gofiber.io/template/django/"},"django")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.gofiber.io/template/handlebars"},"handlebars")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.gofiber.io/template/html"},"html")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.gofiber.io/template/jet"},"jet")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.gofiber.io/template/mustache"},"mustache")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.gofiber.io/template/pug"},"pug")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.gofiber.io/template/pug"},"slim"))),(0,a.kt)("p",null,"To learn more about using Templates in Fiber, see ",(0,a.kt)("a",{parentName:"p",href:"/guide/templates"},"Templates"),"."),(0,a.kt)("h2",{id:"does-fiber-have-a-community-chat"},"Does Fiber have a community chat?"),(0,a.kt)("p",null,"Yes, we have our own ",(0,a.kt)("a",{parentName:"p",href:"https://gofiber.io/discord"},"Discord "),"server, where we hang out. We have different rooms for every subject.",(0,a.kt)("br",{parentName:"p"}),"\n","If you have questions or just want to have a chat, feel free to join us via this ",(0,a.kt)("strong",{parentName:"p"},">")," ",(0,a.kt)("a",{parentName:"p",href:"https://gofiber.io/discord"},(0,a.kt)("strong",{parentName:"a"},"invite link"))," ",(0,a.kt)("strong",{parentName:"p"},"<"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(60408).Z,width:"243",height:"236"})),(0,a.kt)("h2",{id:"does-fiber-support-sub-domain-routing-"},"Does fiber support sub domain routing ?"),(0,a.kt)("p",null,"Yes we do, here are some examples:\nThis example works v2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "log"\n\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/logger"\n)\n\ntype Host struct {\n    Fiber *fiber.App\n}\n\nfunc main() {\n    // Hosts\n    hosts := map[string]*Host{}\n    //-----\n    // API\n    //-----\n    api := fiber.New()\n    api.Use(logger.New(logger.Config{\n        Format: "[${ip}]:${port} ${status} - ${method} ${path}\\n",\n    }))\n    hosts["api.localhost:3000"] = &Host{api}\n    api.Get("/", func(c *fiber.Ctx) error {\n        return c.SendString("API")\n    })\n    //------\n    // Blog\n    //------\n    blog := fiber.New()\n    blog.Use(logger.New(logger.Config{\n        Format: "[${ip}]:${port} ${status} - ${method} ${path}\\n",\n    }))\n    hosts["blog.localhost:3000"] = &Host{blog}\n    blog.Get("/", func(c *fiber.Ctx) error {\n        return c.SendString("Blog")\n    })\n    //---------\n    // Website\n    //---------\n    site := fiber.New()\n    site.Use(logger.New(logger.Config{\n        Format: "[${ip}]:${port} ${status} - ${method} ${path}\\n",\n    }))\n\n    hosts["localhost:3000"] = &Host{site}\n    site.Get("/", func(c *fiber.Ctx) error {\n        return c.SendString("Website")\n    })\n    // Server\n    app := fiber.New()\n    app.Use(func(c *fiber.Ctx) error {\n        host := hosts[c.Hostname()]\n        if host == nil {\n            return c.SendStatus(fiber.StatusNotFound)\n        } else {\n            host.Fiber.Handler()(c.Context())\n            return nil\n        }\n    })\n    log.Fatal(app.Listen(":3000"))\n}\n')),(0,a.kt)("p",null,"If more information is needed, please refer to this issue ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber/issues/750"},"#750")))}m.isMDXComponent=!0},60408:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/support-discord-baf5f38231088813dfbc3ccdc6966634.png"}}]);