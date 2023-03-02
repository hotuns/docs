"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[9990],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),l=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(a),g=n,h=m["".concat(o,".").concat(g)]||m[g]||d[g]||s;return a?r.createElement(h,p(p({ref:t},c),{},{components:a})):r.createElement(h,p({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,p=new Array(s);p[0]=g;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:n,p[1]=i;for(var l=2;l<s;l++)p[l]=a[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},5714:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=a(7462),n=(a(7294),a(3905));const s={id:"benchmarks",title:"\ud83d\udcca Benchmarks",description:"These benchmarks aim to compare the performance of Fiber and other web frameworks.",sidebar_position:2},p=void 0,i={unversionedId:"extra/benchmarks",id:"extra/benchmarks",title:"\ud83d\udcca Benchmarks",description:"These benchmarks aim to compare the performance of Fiber and other web frameworks.",source:"@site/docs/extra/benchmarks.md",sourceDirName:"extra",slug:"/extra/benchmarks",permalink:"/next/extra/benchmarks",draft:!1,editUrl:"https://github.com/gofiber/fiber/tree/master/docs/extra/benchmarks.md",tags:[],version:"current",lastUpdatedBy:"Ren\xe9 Werner",lastUpdatedAt:1677786843,formattedLastUpdatedAt:"Mar 2, 2023",sidebarPosition:2,frontMatter:{id:"benchmarks",title:"\ud83d\udcca Benchmarks",description:"These benchmarks aim to compare the performance of Fiber and other web frameworks.",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83e\udd14 FAQ",permalink:"/next/extra/faq"}},o={},l=[{value:"TechEmpower",id:"techempower",level:2},{value:"Plaintext",id:"plaintext",level:3},{value:"Data Updates",id:"data-updates",level:3},{value:"Multiple Queries",id:"multiple-queries",level:3},{value:"Single Query",id:"single-query",level:3},{value:"JSON Serialization",id:"json-serialization",level:3},{value:"Go web framework benchmark",id:"go-web-framework-benchmark",level:2}],c={toc:l},m="wrapper";function d(e){let{components:t,...s}=e;return(0,n.kt)(m,(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"techempower"},"TechEmpower"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.techempower.com/benchmarks/#section=data-r19&hw=ph&test=composite"},"TechEmpower")," provides a performance comparison of many web application frameworks executing fundamental tasks such as JSON serialization, database access, and server-side template composition."),(0,n.kt)("p",null,"Each framework is operating in a realistic production configuration. Results are captured on cloud instances and on physical hardware. The test implementations are largely community-contributed and all source is available at the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/TechEmpower/FrameworkBenchmarks"},"GitHub repository"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fiber ",(0,n.kt)("inlineCode",{parentName:"li"},"v1.10.0")),(0,n.kt)("li",{parentName:"ul"},"28 HT Cores Intel","(","R",")"," Xeon","(","R",")"," Gold 5120 CPU @ 2.20GHz"),(0,n.kt)("li",{parentName:"ul"},"32GB RAM"),(0,n.kt)("li",{parentName:"ul"},"Ubuntu 18.04.3 4.15.0-88-generic"),(0,n.kt)("li",{parentName:"ul"},"Dedicated Cisco 10-Gbit Ethernet switch.")),(0,n.kt)("h3",{id:"plaintext"},"Plaintext"),(0,n.kt)("p",null,"The Plaintext test is an exercise of the request-routing fundamentals only, designed to demonstrate the capacity of high-performance platforms in particular. Requests will be sent using HTTP pipelining. The response payload is still small, meaning good performance is still necessary in order to saturate the gigabit Ethernet of the test environment."),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/TechEmpower/FrameworkBenchmarks/wiki/Project-Information-Framework-Tests-Overview#single-database-query"},"Plaintext requirements")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Fiber")," - ",(0,n.kt)("strong",{parentName:"p"},"6,162,556")," responses per second with an average latency of ",(0,n.kt)("strong",{parentName:"p"},"2.0")," ms.",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Express")," - ",(0,n.kt)("strong",{parentName:"p"},"367,069")," responses per second with an average latency of ",(0,n.kt)("strong",{parentName:"p"},"354.1")," ms."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(2137).Z,width:"1130",height:"473"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Fiber vs Express",src:a(7093).Z,width:"1130",height:"179"})),(0,n.kt)("h3",{id:"data-updates"},"Data Updates"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Fiber")," handled ",(0,n.kt)("strong",{parentName:"p"},"11,846")," responses per second with an average latency of ",(0,n.kt)("strong",{parentName:"p"},"42.8")," ms.",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Express")," handled ",(0,n.kt)("strong",{parentName:"p"},"2,066")," responses per second with an average latency of ",(0,n.kt)("strong",{parentName:"p"},"390.44")," ms."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(6551).Z,width:"1132",height:"727"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Fiber vs Express",src:a(7792).Z,width:"1130",height:"243"})),(0,n.kt)("h3",{id:"multiple-queries"},"Multiple Queries"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Fiber")," handled ",(0,n.kt)("strong",{parentName:"p"},"19,664")," responses per second with an average latency of ",(0,n.kt)("strong",{parentName:"p"},"25.7")," ms.",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Express")," handled ",(0,n.kt)("strong",{parentName:"p"},"4,302")," responses per second with an average latency of ",(0,n.kt)("strong",{parentName:"p"},"117.2")," ms."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(2600).Z,width:"1131",height:"746"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Fiber vs Express",src:a(1146).Z,width:"1131",height:"242"})),(0,n.kt)("h3",{id:"single-query"},"Single Query"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Fiber")," handled ",(0,n.kt)("strong",{parentName:"p"},"368,647")," responses per second with an average latency of ",(0,n.kt)("strong",{parentName:"p"},"0.7")," ms.",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Express")," handled ",(0,n.kt)("strong",{parentName:"p"},"57,880")," responses per second with an average latency of ",(0,n.kt)("strong",{parentName:"p"},"4.4")," ms."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(6802).Z,width:"1131",height:"746"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Fiber vs Express",src:a(2256).Z,width:"1129",height:"241"})),(0,n.kt)("h3",{id:"json-serialization"},"JSON Serialization"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Fiber")," handled ",(0,n.kt)("strong",{parentName:"p"},"1,146,667")," responses per second with an average latency of ",(0,n.kt)("strong",{parentName:"p"},"0.4")," ms.",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Express")," handled ",(0,n.kt)("strong",{parentName:"p"},"244,847")," responses per second with an average latency of ",(0,n.kt)("strong",{parentName:"p"},"1.1")," ms."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(7960).Z,width:"1131",height:"601"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Fiber vs Express",src:a(3316).Z,width:"1129",height:"179"})),(0,n.kt)("h2",{id:"go-web-framework-benchmark"},"Go web framework benchmark"),(0,n.kt)("p",null,"\ud83d\udd17 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/smallnest/go-web-framework-benchmark"},"https://github.com/smallnest/go-web-framework-benchmark")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"CPU")," Intel","(","R",")"," Xeon","(","R",")"," Gold 6140 CPU @ 2.30GHz"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"MEM")," 4GB"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"GO")," go1.13.6 linux/amd64"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"OS")," Linux")),(0,n.kt)("p",null,"The first test case is to mock ",(0,n.kt)("strong",{parentName:"p"},"0 ms"),", ",(0,n.kt)("strong",{parentName:"p"},"10 ms"),", ",(0,n.kt)("strong",{parentName:"p"},"100 ms"),", ",(0,n.kt)("strong",{parentName:"p"},"500 ms")," processing time in handlers."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(8281).Z,width:"1024",height:"600"})),(0,n.kt)("p",null,"The concurrency clients are ",(0,n.kt)("strong",{parentName:"p"},"5000"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(8132).Z,width:"1024",height:"600"})),(0,n.kt)("p",null,"Latency is the time of real processing time by web servers. ",(0,n.kt)("em",{parentName:"p"},"The smaller is the better.")),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(8248).Z,width:"1024",height:"600"})),(0,n.kt)("p",null,"Allocs is the heap allocations by web servers when test is running. The unit is MB. ",(0,n.kt)("em",{parentName:"p"},"The smaller is the better.")),(0,n.kt)("p",null,"If we enable ",(0,n.kt)("strong",{parentName:"p"},"http pipelining"),", test result as below:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(3065).Z,width:"1024",height:"600"})),(0,n.kt)("p",null,"Concurrency test in ",(0,n.kt)("strong",{parentName:"p"},"30 ms")," processing time, the test result for ",(0,n.kt)("strong",{parentName:"p"},"100"),", ",(0,n.kt)("strong",{parentName:"p"},"1000"),", ",(0,n.kt)("strong",{parentName:"p"},"5000")," clients is:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(8767).Z,width:"1024",height:"600"})),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(1652).Z,width:"1024",height:"600"})),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(6235).Z,width:"1024",height:"600"})),(0,n.kt)("p",null,"If we enable ",(0,n.kt)("strong",{parentName:"p"},"http pipelining"),", test result as below:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(9951).Z,width:"1024",height:"600"})),(0,n.kt)("p",null,"Dependency graph for ",(0,n.kt)("inlineCode",{parentName:"p"},"v1.9.0")),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(3209).Z,width:"1307",height:"520"})))}d.isMDXComponent=!0},3065:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/benchmark-pipeline-b49cbb1db36293acdfb0e6c96d844e1a.png"},8281:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/benchmark-18e23fcf42afc7f5e12ea23aceb27885.png"},8248:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/benchmark_alloc-dec96faa96e07bcec84f40a4dfc8d187.png"},8132:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/benchmark_latency-b67a470cf1b261c3092b80cbf42ef16b.png"},9951:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/concurrency-pipeline-b0d3c211d9c7cb5474fd191223a41241.png"},8767:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/concurrency-1307e1d23c01a561a4b2a0f5bdd7e1bc.png"},6235:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/concurrency_alloc-6f2d485576803f7de2fe0a1deca21a09.png"},1652:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/concurrency_latency-5a223848a8bee8df21cc02451f0db2b6.png"},6551:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/data_updates-3be85c418d6971091854c5086af9ed10.png"},7792:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/data_updates_express-2f55d1b0975ec391d29d823b48faf617.png"},3209:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/graph-afbd400b1c3e1c6f137dae3cfc1890ce.svg"},7960:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/json-62868f61b34e3790f3a8b3b52b1a3a3b.png"},3316:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/json_express-aa631b2de86808970aa4bb7c9c9d3edf.png"},2600:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/multiple_queries-2c2e81674208b90b9aeb1cb791a3f0dc.png"},1146:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/multiple_queries_express-ec4dc8013e85dc2a2fa4f5eeb55ce8dd.png"},2137:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/plaintext-e25d187f782d18fdd35b84e3d7c625eb.png"},7093:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/plaintext_express-ef6522843412bb5b14b3c6b6a4f032de.png"},6802:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/single_query-4f7782d3c3ff91e92ac27e382b09f6ac.png"},2256:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/single_query_express-d8e41422b4f5c0a9496272e4a66a97c4.png"}}]);