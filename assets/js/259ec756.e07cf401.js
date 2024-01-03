"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[71196],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var g=o.createContext({}),s=function(e){var t=o.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(g.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,g=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=l,f=u["".concat(g,".").concat(d)]||u[d]||c[d]||r;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,a=new Array(r);a[0]=d;var i={};for(var g in t)hasOwnProperty.call(t,g)&&(i[g]=t[g]);i.originalType=e,i[u]="string"==typeof e?e:l,a[1]=i;for(var s=2;s<r;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11016:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var o=n(87462),l=(n(67294),n(3905));const r={id:"log",title:"\ud83d\udcc3 Log",description:"Fiber's built-in log package",sidebar_position:6},a=void 0,i={unversionedId:"api/log",id:"version-v2.x/api/log",title:"\ud83d\udcc3 Log",description:"Fiber's built-in log package",source:"@site/versioned_docs/version-v2.x/api/log.md",sourceDirName:"api",slug:"/api/log",permalink:"/api/log",draft:!1,tags:[],version:"v2.x",lastUpdatedAt:1704302079,formattedLastUpdatedAt:"Jan 3, 2024",sidebarPosition:6,frontMatter:{id:"log",title:"\ud83d\udcc3 Log",description:"Fiber's built-in log package",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udf0e Client",permalink:"/api/client"},next:{title:"\ud83e\uddec Middleware",permalink:"/category/-middleware"}},g={},s=[{value:"Log levels",id:"log-levels",level:2},{value:"Custom log",id:"custom-log",level:2},{value:"Print log",id:"print-log",level:2},{value:"Global log",id:"global-log",level:2},{value:"Set Level",id:"set-level",level:2},{value:"Set output",id:"set-output",level:2},{value:"Bind context",id:"bind-context",level:2}],p={toc:s},u="wrapper";function c(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"We can use logs to observe program behavior, diagnose problems, or configure corresponding alarms.\nAnd defining a well structured log can improve search efficiency and facilitate handling of problems."),(0,l.kt)("p",null,"Fiber provides a default way to print logs in the standard output.\nIt also provides several global functions, such as ",(0,l.kt)("inlineCode",{parentName:"p"},"log.Info"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"log.Errorf"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"log.Warnw"),", etc. "),(0,l.kt)("h2",{id:"log-levels"},"Log levels"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"const (\n    LevelTrace Level = iota\n    LevelDebug\n    LevelInfo\n    LevelWarn\n    LevelError\n    LevelFatal\n    LevelPanic\n)\n")),(0,l.kt)("h2",{id:"custom-log"},"Custom log"),(0,l.kt)("p",null,"Fiber provides the ",(0,l.kt)("inlineCode",{parentName:"p"},"AllLogger")," interface for adapting the various log libraries."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"type CommonLogger interface {\n    Logger\n    FormatLogger\n    WithLogger\n}\n\ntype AllLogger interface {\n    CommonLogger\n    ControlLogger\n    WithLogger\n}\n")),(0,l.kt)("h2",{id:"print-log"},"Print log"),(0,l.kt)("p",null,"Note: The method of calling the Fatal level will interrupt the program running after printing the log, please use it with caution.\nDirectly print logs of different levels, which will be entered into messageKey, the default is msg."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'log.Info("Hello, World!")\nlog.Debug("Are you OK?")\nlog.Info("42 is the answer to life, the universe, and everything")\nlog.Warn("We are under attack!")\nlog.Error("Houston, we have a problem.")\nlog.Fatal("So Long, and Thanks for All the Fislog.")\nlog.Panic("The system is down.")\n')),(0,l.kt)("p",null,"Format and print logs of different levels, all methods end with f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'log.Debugf("Hello %s", "boy")\nlog.Infof("%d is the answer to life, the universe, and everything", 233)\nlog.Warnf("We are under attack %s!", "boss")\nlog.Errorf("%s, we have a problem.", "Master Shifu")\nlog.Fatalf("So Long, and Thanks for All the %s.", "banana")\n')),(0,l.kt)("p",null,"Print a message with the key and value, or ",(0,l.kt)("inlineCode",{parentName:"p"},"KEYVALS UNPAIRED")," if the key and value are not a pair."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'log.Debugw("", "Hello", "boy")\nlog.Infow("", "number", 233)\nlog.Warnw("", "job", "boss")\nlog.Errorw("", "name", "Master Shifu")\nlog.Fatalw("", "fruit", "banana")\n')),(0,l.kt)("h2",{id:"global-log"},"Global log"),(0,l.kt)("p",null,"If you are in a project and just want to use a simple log function that can be printed at any time in the global, we provide a global log."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/gofiber/fiber/v2/log"\n\nlog.Info("info")\nlog.Warn("warn")\n')),(0,l.kt)("p",null,"The above is using the default ",(0,l.kt)("inlineCode",{parentName:"p"},"log.DefaultLogger")," standard output.\nYou can also find an already implemented adaptation under contrib, or use your own implemented Logger and use ",(0,l.kt)("inlineCode",{parentName:"p"},"log.SetLogger")," to set the global log logger."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "log"\n    fiberlog "github.com/gofiber/fiber/v2/log"\n)\n\nvar _ log.AllLogger = (*customLogger)(nil)\n\ntype customLogger struct {\n    stdlog *log.Logger\n}\n\n// ...\n// inject your custom logger\nfiberlog.SetLogger(customLogger)\n')),(0,l.kt)("h2",{id:"set-level"},"Set Level"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"log.SetLevel")," sets the level of logs below which logs will not be output.\nThe default logger is LevelTrace."),(0,l.kt)("p",null,"Note that this method is not ",(0,l.kt)("strong",{parentName:"p"},"concurrent-safe"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/gofiber/fiber/v2/log"\n\nlog.SetLevel(log.LevelInfo)\n')),(0,l.kt)("h2",{id:"set-output"},"Set output"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"log.SetOutput")," sets the output destination of the logger. The default logger types the log in the console."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'var logger AllLogger = &defaultLogger{\n    stdlog: log.New(os.Stderr, "", log.LstdFlags|log.Lshortfile|log.Lmicroseconds),\n    depth:  4,\n}\n')),(0,l.kt)("p",null,"Set the output destination to the file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'// Output to ./test.log file\nf, err := os.OpenFile("test.log", os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0666)\nif err != nil {\n    return\n}\nlog.SetOutput(f)\n')),(0,l.kt)("p",null,"Set the output destination to the console and file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'// Output to ./test.log file\nfile, _ := os.OpenFile("test.log", os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0666)\niw := io.MultiWriter(os.Stdout, file)\nlog.SetOutput(iw)\n')),(0,l.kt)("h2",{id:"bind-context"},"Bind context"),(0,l.kt)("p",null,"Set the context, using the following method will return a ",(0,l.kt)("inlineCode",{parentName:"p"},"CommonLogger")," instance bound to the specified context"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'commonLogger := log.WithContext(ctx)\ncommonLogger.Info("info")\n')))}c.isMDXComponent=!0}}]);