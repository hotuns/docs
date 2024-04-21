"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[74982],{86181:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>o,frontMatter:()=>t,metadata:()=>a,toc:()=>h});var r=n(74848),i=n(28453);const t={id:"benchmarks",title:"\ud83d\udcca Benchmarks",description:"These benchmarks aim to compare the performance of Fiber and other web frameworks.",sidebar_position:2},c=void 0,a={id:"extra/benchmarks",title:"\ud83d\udcca Benchmarks",description:"These benchmarks aim to compare the performance of Fiber and other web frameworks.",source:"@site/versioned_docs/version-v2.x/extra/benchmarks.md",sourceDirName:"extra",slug:"/extra/benchmarks",permalink:"/extra/benchmarks",draft:!1,unlisted:!1,tags:[],version:"v2.x",lastUpdatedAt:1713702565e3,sidebarPosition:2,frontMatter:{id:"benchmarks",title:"\ud83d\udcca Benchmarks",description:"These benchmarks aim to compare the performance of Fiber and other web frameworks.",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83e\udd14 FAQ",permalink:"/extra/faq"}},d={},h=[{value:"TechEmpower",id:"techempower",level:2},{value:"Plaintext",id:"plaintext",level:3},{value:"Data Updates",id:"data-updates",level:3},{value:"Multiple Queries",id:"multiple-queries",level:3},{value:"Single Query",id:"single-query",level:3},{value:"JSON Serialization",id:"json-serialization",level:3},{value:"Go web framework benchmark",id:"go-web-framework-benchmark",level:2}];function l(e){const s={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h2,{id:"techempower",children:"TechEmpower"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"https://www.techempower.com/benchmarks/#section=data-r19&hw=ph&test=composite",children:"TechEmpower"})," provides a performance comparison of many web application frameworks executing fundamental tasks such as JSON serialization, database access, and server-side template composition."]}),"\n",(0,r.jsxs)(s.p,{children:["Each framework is operating in a realistic production configuration. Results are captured on cloud instances and on physical hardware. The test implementations are largely community-contributed and all source is available at the ",(0,r.jsx)(s.a,{href:"https://github.com/TechEmpower/FrameworkBenchmarks",children:"GitHub repository"}),"."]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Fiber ",(0,r.jsx)(s.code,{children:"v1.10.0"})]}),"\n",(0,r.jsx)(s.li,{children:"28 HT Cores Intel(R) Xeon(R) Gold 5120 CPU @ 2.20GHz"}),"\n",(0,r.jsx)(s.li,{children:"32GB RAM"}),"\n",(0,r.jsx)(s.li,{children:"Ubuntu 18.04.3 4.15.0-88-generic"}),"\n",(0,r.jsx)(s.li,{children:"Dedicated Cisco 10-Gbit Ethernet switch."}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"plaintext",children:"Plaintext"}),"\n",(0,r.jsx)(s.p,{children:"The Plaintext test is an exercise of the request-routing fundamentals only, designed to demonstrate the capacity of high-performance platforms in particular. Requests will be sent using HTTP pipelining. The response payload is still small, meaning good performance is still necessary in order to saturate the gigabit Ethernet of the test environment."}),"\n",(0,r.jsxs)(s.p,{children:["See ",(0,r.jsx)(s.a,{href:"https://github.com/TechEmpower/FrameworkBenchmarks/wiki/Project-Information-Framework-Tests-Overview#single-database-query",children:"Plaintext requirements"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Fiber"})," - ",(0,r.jsx)(s.strong,{children:"6,162,556"})," responses per second with an average latency of ",(0,r.jsx)(s.strong,{children:"2.0"})," ms.",(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.strong,{children:"Express"})," - ",(0,r.jsx)(s.strong,{children:"367,069"})," responses per second with an average latency of ",(0,r.jsx)(s.strong,{children:"354.1"})," ms."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:n(27340).A+"",width:"1130",height:"473"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Fiber vs Express",src:n(63197).A+"",width:"1130",height:"179"})}),"\n",(0,r.jsx)(s.h3,{id:"data-updates",children:"Data Updates"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Fiber"})," handled ",(0,r.jsx)(s.strong,{children:"11,846"})," responses per second with an average latency of ",(0,r.jsx)(s.strong,{children:"42.8"})," ms.",(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.strong,{children:"Express"})," handled ",(0,r.jsx)(s.strong,{children:"2,066"})," responses per second with an average latency of ",(0,r.jsx)(s.strong,{children:"390.44"})," ms."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:n(3718).A+"",width:"1132",height:"727"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Fiber vs Express",src:n(79391).A+"",width:"1130",height:"243"})}),"\n",(0,r.jsx)(s.h3,{id:"multiple-queries",children:"Multiple Queries"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Fiber"})," handled ",(0,r.jsx)(s.strong,{children:"19,664"})," responses per second with an average latency of ",(0,r.jsx)(s.strong,{children:"25.7"})," ms.",(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.strong,{children:"Express"})," handled ",(0,r.jsx)(s.strong,{children:"4,302"})," responses per second with an average latency of ",(0,r.jsx)(s.strong,{children:"117.2"})," ms."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:n(33716).A+"",width:"1131",height:"746"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Fiber vs Express",src:n(65285).A+"",width:"1131",height:"242"})}),"\n",(0,r.jsx)(s.h3,{id:"single-query",children:"Single Query"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Fiber"})," handled ",(0,r.jsx)(s.strong,{children:"368,647"})," responses per second with an average latency of ",(0,r.jsx)(s.strong,{children:"0.7"})," ms.",(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.strong,{children:"Express"})," handled ",(0,r.jsx)(s.strong,{children:"57,880"})," responses per second with an average latency of ",(0,r.jsx)(s.strong,{children:"4.4"})," ms."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:n(8884).A+"",width:"1131",height:"746"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Fiber vs Express",src:n(46309).A+"",width:"1129",height:"241"})}),"\n",(0,r.jsx)(s.h3,{id:"json-serialization",children:"JSON Serialization"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Fiber"})," handled ",(0,r.jsx)(s.strong,{children:"1,146,667"})," responses per second with an average latency of ",(0,r.jsx)(s.strong,{children:"0.4"})," ms.",(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.strong,{children:"Express"})," handled ",(0,r.jsx)(s.strong,{children:"244,847"})," responses per second with an average latency of ",(0,r.jsx)(s.strong,{children:"1.1"})," ms."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:n(60359).A+"",width:"1131",height:"601"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Fiber vs Express",src:n(63970).A+"",width:"1129",height:"179"})}),"\n",(0,r.jsx)(s.h2,{id:"go-web-framework-benchmark",children:"Go web framework benchmark"}),"\n",(0,r.jsxs)(s.p,{children:["\ud83d\udd17 ",(0,r.jsx)(s.a,{href:"https://github.com/smallnest/go-web-framework-benchmark",children:"https://github.com/smallnest/go-web-framework-benchmark"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"CPU"})," Intel(R) Xeon(R) Gold 6140 CPU @ 2.30GHz"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"MEM"})," 4GB"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"GO"})," go1.13.6 linux/amd64"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"OS"})," Linux"]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["The first test case is to mock ",(0,r.jsx)(s.strong,{children:"0 ms"}),", ",(0,r.jsx)(s.strong,{children:"10 ms"}),", ",(0,r.jsx)(s.strong,{children:"100 ms"}),", ",(0,r.jsx)(s.strong,{children:"500 ms"})," processing time in handlers."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:n(4800).A+"",width:"1024",height:"600"})}),"\n",(0,r.jsxs)(s.p,{children:["The concurrency clients are ",(0,r.jsx)(s.strong,{children:"5000"}),"."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:n(32451).A+"",width:"1024",height:"600"})}),"\n",(0,r.jsxs)(s.p,{children:["Latency is the time of real processing time by web servers. ",(0,r.jsx)(s.em,{children:"The smaller is the better."})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:n(92866).A+"",width:"1024",height:"600"})}),"\n",(0,r.jsxs)(s.p,{children:["Allocs is the heap allocations by web servers when test is running. The unit is MB. ",(0,r.jsx)(s.em,{children:"The smaller is the better."})]}),"\n",(0,r.jsxs)(s.p,{children:["If we enable ",(0,r.jsx)(s.strong,{children:"http pipelining"}),", test result as below:"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:n(60317).A+"",width:"1024",height:"600"})}),"\n",(0,r.jsxs)(s.p,{children:["Concurrency test in ",(0,r.jsx)(s.strong,{children:"30 ms"})," processing time, the test result for ",(0,r.jsx)(s.strong,{children:"100"}),", ",(0,r.jsx)(s.strong,{children:"1000"}),", ",(0,r.jsx)(s.strong,{children:"5000"})," clients is:"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:n(45916).A+"",width:"1024",height:"600"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:n(60007).A+"",width:"1024",height:"600"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:n(72510).A+"",width:"1024",height:"600"})}),"\n",(0,r.jsxs)(s.p,{children:["If we enable ",(0,r.jsx)(s.strong,{children:"http pipelining"}),", test result as below:"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:n(58457).A+"",width:"1024",height:"600"})}),"\n",(0,r.jsxs)(s.p,{children:["Dependency graph for ",(0,r.jsx)(s.code,{children:"v1.9.0"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:n(78434).A+"",width:"1307",height:"520"})})]})}function o(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},60317:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/benchmark-pipeline-b49cbb1db36293acdfb0e6c96d844e1a.png"},4800:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/benchmark-18e23fcf42afc7f5e12ea23aceb27885.png"},92866:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/benchmark_alloc-dec96faa96e07bcec84f40a4dfc8d187.png"},32451:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/benchmark_latency-b67a470cf1b261c3092b80cbf42ef16b.png"},58457:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/concurrency-pipeline-b0d3c211d9c7cb5474fd191223a41241.png"},45916:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/concurrency-1307e1d23c01a561a4b2a0f5bdd7e1bc.png"},72510:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/concurrency_alloc-6f2d485576803f7de2fe0a1deca21a09.png"},60007:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/concurrency_latency-5a223848a8bee8df21cc02451f0db2b6.png"},3718:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/data_updates-3be85c418d6971091854c5086af9ed10.png"},79391:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/data_updates_express-2f55d1b0975ec391d29d823b48faf617.png"},78434:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/graph-afbd400b1c3e1c6f137dae3cfc1890ce.svg"},60359:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/json-62868f61b34e3790f3a8b3b52b1a3a3b.png"},63970:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/json_express-aa631b2de86808970aa4bb7c9c9d3edf.png"},33716:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/multiple_queries-2c2e81674208b90b9aeb1cb791a3f0dc.png"},65285:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/multiple_queries_express-ec4dc8013e85dc2a2fa4f5eeb55ce8dd.png"},27340:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/plaintext-e25d187f782d18fdd35b84e3d7c625eb.png"},63197:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/plaintext_express-ef6522843412bb5b14b3c6b6a4f032de.png"},8884:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/single_query-4f7782d3c3ff91e92ac27e382b09f6ac.png"},46309:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/single_query_express-d8e41422b4f5c0a9496272e4a66a97c4.png"},28453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>a});var r=n(96540);const i={},t=r.createContext(i);function c(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);