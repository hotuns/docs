"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[23913],{36811:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var r=i(74848),n=i(28453);const s={id:"loadshed"},d="LoadShed",l={id:"loadshed/loadshed",title:"LoadShed",description:"Release",source:"@site/contrib_versioned_docs/version-fibernewrelic_v1.x.x/loadshed/README.md",sourceDirName:"loadshed",slug:"/loadshed/",permalink:"/contrib/fibernewrelic_v1.x.x/loadshed/",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/contrib/edit/main/loadshed/README.md",tags:[],version:"fibernewrelic_v1.x.x",lastUpdatedAt:171379028e4,frontMatter:{id:"loadshed"},sidebar:"tutorialSidebar",previous:{title:"JWT",permalink:"/contrib/fibernewrelic_v1.x.x/jwt/"},next:{title:"Opafiber",permalink:"/contrib/fibernewrelic_v1.x.x/opafiber/"}},o={},a=[{value:"Install",id:"install",level:2},{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"LoadCriteria",id:"loadcriteria",level:2},{value:"CPULoadCriteria",id:"cpuloadcriteria",level:3},{value:"Properties",id:"properties",level:4},{value:"How It Works",id:"how-it-works",level:4},{value:"Default Config",id:"default-config",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"loadshed",children:"LoadShed"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{src:"https://img.shields.io/github/v/tag/gofiber/contrib?filter=loadshed*",alt:"Release"}),"\n",(0,r.jsx)(t.a,{href:"https://gofiber.io/discord",children:(0,r.jsx)(t.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,r.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,r.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,r.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Linter/badge.svg",alt:"Linter"})]}),"\n",(0,r.jsxs)(t.p,{children:["The LoadShed middleware for ",(0,r.jsx)(t.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," is designed to help manage server load by shedding requests based on certain load criteria."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Note: Requires Go 1.19 and above"})}),"\n",(0,r.jsx)(t.h2,{id:"install",children:"Install"}),"\n",(0,r.jsx)(t.p,{children:"This middleware supports Fiber v2"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"go get -u github.com/gofiber/fiber/v2\ngo get -u github.com/gofiber/contrib/loadshed\n"})}),"\n",(0,r.jsx)(t.h2,{id:"signatures",children:"Signatures"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:"loadshed.New(config ...loadshed.Config) fiber.Handler\n"})}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.p,{children:"To use the LoadShed middleware in your Fiber application, import it and apply it to your Fiber app. Here's an example:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n  "github.com/gofiber/fiber/v2"\n  loadshed "github.com/gofiber/contrib/loadshed"\n)\n\nfunc main() {\n  app := fiber.New()\n\n  // Configure and use LoadShed middleware\n  app.Use(loadshed.New(loadshed.Config{\n    Criteria: &loadshed.CPULoadCriteria{\n      LowerThreshold: 0.75, // Set your own lower threshold\n      UpperThreshold: 0.90, // Set your own upper threshold\n      Interval:       10 * time.Second,\n      Getter:         &loadshed.DefaultCPUPercentGetter{},\n    },\n  }))\n\n  app.Get("/", func(c *fiber.Ctx) error {\n    return c.SendString("Welcome!")\n  })\n\n  app.Listen(":3000")\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"config",children:"Config"}),"\n",(0,r.jsx)(t.p,{children:"The LoadShed middleware in Fiber offers various configuration options to tailor the load shedding behavior according to the needs of your application."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Next"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"func(*fiber.Ctx) bool"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Function to skip this middleware when returned true."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"nil"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Criteria"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"LoadCriteria"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Interface for defining load shedding criteria."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"&CPULoadCriteria{...}"})})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"loadcriteria",children:"LoadCriteria"}),"\n",(0,r.jsx)(t.p,{children:"LoadCriteria is an interface in the LoadShed middleware that defines the criteria for determining when to shed load in the system. Different implementations of this interface can use various metrics and algorithms to decide when and how to shed incoming requests to maintain system performance."}),"\n",(0,r.jsx)(t.h3,{id:"cpuloadcriteria",children:"CPULoadCriteria"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"CPULoadCriteria"})," is an implementation of the ",(0,r.jsx)(t.code,{children:"LoadCriteria"})," interface, using CPU load as the metric for determining whether to shed requests."]}),"\n",(0,r.jsx)(t.h4,{id:"properties",children:"Properties"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"LowerThreshold"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"float64"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"The lower CPU usage threshold as a fraction (0.0 to 1.0). Requests are considered for shedding when CPU usage exceeds this threshold."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"UpperThreshold"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"float64"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"The upper CPU usage threshold as a fraction (0.0 to 1.0). All requests are shed when CPU usage exceeds this threshold."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Interval"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"time.Duration"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"The time interval over which the CPU usage is averaged for decision making."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Getter"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"CPUPercentGetter"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Interface to retrieve CPU usage percentages."})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"how-it-works",children:"How It Works"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"CPULoadCriteria"})," determines the load on the system based on CPU usage and decides whether to shed incoming requests. It operates on the following principles:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"CPU Usage Measurement"}),": It measures the CPU usage over a specified interval."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Thresholds"}),": Utilizes ",(0,r.jsx)(t.code,{children:"LowerThreshold"})," and ",(0,r.jsx)(t.code,{children:"UpperThreshold"})," values to decide when to start shedding requests."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Proportional Rejection Probability"}),":","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsxs)(t.strong,{children:["Below ",(0,r.jsx)(t.code,{children:"LowerThreshold"})]}),": No requests are rejected, as the system is considered under acceptable load."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsxs)(t.strong,{children:["Between ",(0,r.jsx)(t.code,{children:"LowerThreshold"})," and ",(0,r.jsx)(t.code,{children:"UpperThreshold"})]}),": The probability of rejecting a request increases as the CPU usage approaches the ",(0,r.jsx)(t.code,{children:"UpperThreshold"}),". This is calculated using the formula:","\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-plaintext",children:"rejectionProbability := (cpuUsage - LowerThreshold*100) / (UpperThreshold - LowerThreshold)\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsxs)(t.strong,{children:["Above ",(0,r.jsx)(t.code,{children:"UpperThreshold"})]}),": All requests are rejected to prevent system overload."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"This mechanism ensures that the system can adaptively manage its load, maintaining stability and performance under varying traffic conditions."}),"\n",(0,r.jsx)(t.h2,{id:"default-config",children:"Default Config"}),"\n",(0,r.jsxs)(t.p,{children:["This is the default configuration for ",(0,r.jsx)(t.code,{children:"LoadCriteria"})," in the LoadShed middleware."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:"var ConfigDefault = Config{\n  Next: nil,\n  Criteria: &CPULoadCriteria{\n    LowerThreshold: 0.90,  // 90% CPU usage as the start point for considering shedding\n    UpperThreshold: 0.95,  // 95% CPU usage as the point where all requests are shed\n    Interval:       10 * time.Second,  // CPU usage is averaged over 10 seconds\n    Getter:         &DefaultCPUPercentGetter{},  // Default method for getting CPU usage\n  },\n}\n"})})]})}function c(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>d,x:()=>l});var r=i(96540);const n={},s=r.createContext(n);function d(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);