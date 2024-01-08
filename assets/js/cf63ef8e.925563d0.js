"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[14346],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),l=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(n),g=r,h=m["".concat(o,".").concat(g)]||m[g]||d[g]||s;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=g;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<s;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},37838:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const s={id:"benchmarks",title:"\ud83d\udcca Benchmarks",description:"These benchmarks aim to compare the performance of Fiber and other web frameworks.",sidebar_position:2},i=void 0,p={unversionedId:"misc/benchmarks",id:"version-v1.x/misc/benchmarks",title:"\ud83d\udcca Benchmarks",description:"These benchmarks aim to compare the performance of Fiber and other web frameworks.",source:"@site/versioned_docs/version-v1.x/misc/benchmarks.md",sourceDirName:"misc",slug:"/misc/benchmarks",permalink:"/v1.x/misc/benchmarks",draft:!1,tags:[],version:"v1.x",lastUpdatedAt:1704725601,formattedLastUpdatedAt:"Jan 8, 2024",sidebarPosition:2,frontMatter:{id:"benchmarks",title:"\ud83d\udcca Benchmarks",description:"These benchmarks aim to compare the performance of Fiber and other web frameworks.",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83e\udd14 FAQ",permalink:"/v1.x/misc/faq"}},o={},l=[{value:"TechEmpower",id:"techempower",level:2},{value:"Plaintext",id:"plaintext",level:3},{value:"Data Updates",id:"data-updates",level:3},{value:"Multiple Queries",id:"multiple-queries",level:3},{value:"Single Query",id:"single-query",level:3},{value:"JSON Serialization",id:"json-serialization",level:3},{value:"Go web framework benchmark",id:"go-web-framework-benchmark",level:2}],c={toc:l},m="wrapper";function d(e){let{components:t,...s}=e;return(0,r.kt)(m,(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"techempower"},"TechEmpower"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.techempower.com/benchmarks/#section=data-r19&hw=ph&test=composite"},"TechEmpower")," provides a performance comparison of many web application frameworks executing fundamental tasks such as JSON serialization, database access, and server-side template composition."),(0,r.kt)("p",null,"Each framework is operating in a realistic production configuration. Results are captured on cloud instances and on physical hardware. The test implementations are largely community-contributed and all source is available at the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/TechEmpower/FrameworkBenchmarks"},"GitHub repository"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fiber ",(0,r.kt)("inlineCode",{parentName:"li"},"v1.10.0")),(0,r.kt)("li",{parentName:"ul"},"28 HT Cores Intel","(","R",")"," Xeon","(","R",")"," Gold 5120 CPU @ 2.20GHz"),(0,r.kt)("li",{parentName:"ul"},"32GB RAM"),(0,r.kt)("li",{parentName:"ul"},"Ubuntu 18.04.3 4.15.0-88-generic"),(0,r.kt)("li",{parentName:"ul"},"Dedicated Cisco 10-Gbit Ethernet switch.")),(0,r.kt)("h3",{id:"plaintext"},"Plaintext"),(0,r.kt)("p",null,"The Plaintext test is an exercise of the request-routing fundamentals only, designed to demonstrate the capacity of high-performance platforms in particular. Requests will be sent using HTTP pipelining. The response payload is still small, meaning good performance is still necessary in order to saturate the gigabit Ethernet of the test environment."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/TechEmpower/FrameworkBenchmarks/wiki/Project-Information-Framework-Tests-Overview#single-database-query"},"Plaintext requirements")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fiber")," - ",(0,r.kt)("strong",{parentName:"p"},"6,162,556")," responses per second with an average latency of ",(0,r.kt)("strong",{parentName:"p"},"2.0")," ms.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Express")," - ",(0,r.kt)("strong",{parentName:"p"},"367,069")," responses per second with an average latency of ",(0,r.kt)("strong",{parentName:"p"},"354.1")," ms."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(82137).Z,width:"1130",height:"473"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Fiber vs Express",src:n(7093).Z,width:"1130",height:"179"})),(0,r.kt)("h3",{id:"data-updates"},"Data Updates"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fiber")," handled ",(0,r.kt)("strong",{parentName:"p"},"11,846")," responses per second with an average latency of ",(0,r.kt)("strong",{parentName:"p"},"42.8")," ms.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Express")," handled ",(0,r.kt)("strong",{parentName:"p"},"2,066")," responses per second with an average latency of ",(0,r.kt)("strong",{parentName:"p"},"390.44")," ms."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(76551).Z,width:"1132",height:"727"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Fiber vs Express",src:n(31146).Z,width:"1131",height:"242"})),(0,r.kt)("h3",{id:"multiple-queries"},"Multiple Queries"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fiber")," handled ",(0,r.kt)("strong",{parentName:"p"},"19,664")," responses per second with an average latency of ",(0,r.kt)("strong",{parentName:"p"},"25.7")," ms.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Express")," handled ",(0,r.kt)("strong",{parentName:"p"},"4,302")," responses per second with an average latency of ",(0,r.kt)("strong",{parentName:"p"},"117.2")," ms."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2600).Z,width:"1131",height:"746"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Fiber vs Express",src:n(31146).Z,width:"1131",height:"242"})),(0,r.kt)("h3",{id:"single-query"},"Single Query"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fiber")," handled ",(0,r.kt)("strong",{parentName:"p"},"368,647")," responses per second with an average latency of ",(0,r.kt)("strong",{parentName:"p"},"0.7")," ms.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Express")," handled ",(0,r.kt)("strong",{parentName:"p"},"57,880")," responses per second with an average latency of ",(0,r.kt)("strong",{parentName:"p"},"4.4")," ms."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(66802).Z,width:"1131",height:"746"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Fiber vs Express",src:n(92256).Z,width:"1129",height:"241"})),(0,r.kt)("h3",{id:"json-serialization"},"JSON Serialization"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fiber")," handled ",(0,r.kt)("strong",{parentName:"p"},"1,146,667")," responses per second with an average latency of ",(0,r.kt)("strong",{parentName:"p"},"0.4")," ms.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Express")," handled ",(0,r.kt)("strong",{parentName:"p"},"244,847")," responses per second with an average latency of ",(0,r.kt)("strong",{parentName:"p"},"1.1")," ms."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7960).Z,width:"1131",height:"601"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Fiber vs Express",src:n(23316).Z,width:"1129",height:"179"})),(0,r.kt)("h2",{id:"go-web-framework-benchmark"},"Go web framework benchmark"),(0,r.kt)("p",null,"\ud83d\udd17 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/smallnest/go-web-framework-benchmark"},"https://github.com/smallnest/go-web-framework-benchmark")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"CPU")," Intel","(","R",")"," Xeon","(","R",")"," Gold 6140 CPU @ 2.30GHz"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"MEM")," 4GB"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"GO")," go1.13.6 linux/amd64"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"OS")," Linux")),(0,r.kt)("p",null,"The first test case is to mock ",(0,r.kt)("strong",{parentName:"p"},"0 ms"),", ",(0,r.kt)("strong",{parentName:"p"},"10 ms"),", ",(0,r.kt)("strong",{parentName:"p"},"100 ms"),", ",(0,r.kt)("strong",{parentName:"p"},"500 ms")," processing time in handlers."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8281).Z,width:"1024",height:"600"})),(0,r.kt)("p",null,"The concurrency clients are ",(0,r.kt)("strong",{parentName:"p"},"5000"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(28132).Z,width:"1024",height:"600"})),(0,r.kt)("p",null,"Latency is the time of real processing time by web servers. ",(0,r.kt)("em",{parentName:"p"},"The smaller is the better.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(78248).Z,width:"1024",height:"600"})),(0,r.kt)("p",null,"Allocs is the heap allocations by web servers when test is running. The unit is MB. ",(0,r.kt)("em",{parentName:"p"},"The smaller is the better.")),(0,r.kt)("p",null,"If we enable ",(0,r.kt)("strong",{parentName:"p"},"http pipelining"),", test result as below:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(23065).Z,width:"1024",height:"600"})),(0,r.kt)("p",null,"Concurrency test in ",(0,r.kt)("strong",{parentName:"p"},"30 ms")," processing time, the test result for ",(0,r.kt)("strong",{parentName:"p"},"100"),", ",(0,r.kt)("strong",{parentName:"p"},"1000"),", ",(0,r.kt)("strong",{parentName:"p"},"5000")," clients is:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(88767).Z,width:"1024",height:"600"})),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(31652).Z,width:"1024",height:"600"})),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(96235).Z,width:"1024",height:"600"})),(0,r.kt)("p",null,"If we enable ",(0,r.kt)("strong",{parentName:"p"},"http pipelining"),", test result as below:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9951).Z,width:"1024",height:"600"})),(0,r.kt)("p",null,"Dependency graph for ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.9.0")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(93209).Z,width:"1307",height:"520"})))}d.isMDXComponent=!0},23065:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/benchmark-pipeline-b49cbb1db36293acdfb0e6c96d844e1a.png"},8281:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/benchmark-18e23fcf42afc7f5e12ea23aceb27885.png"},78248:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/benchmark_alloc-dec96faa96e07bcec84f40a4dfc8d187.png"},28132:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/benchmark_latency-b67a470cf1b261c3092b80cbf42ef16b.png"},9951:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/concurrency-pipeline-b0d3c211d9c7cb5474fd191223a41241.png"},88767:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/concurrency-1307e1d23c01a561a4b2a0f5bdd7e1bc.png"},96235:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/concurrency_alloc-6f2d485576803f7de2fe0a1deca21a09.png"},31652:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/concurrency_latency-5a223848a8bee8df21cc02451f0db2b6.png"},76551:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/data_updates-3be85c418d6971091854c5086af9ed10.png"},93209:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/graph-afbd400b1c3e1c6f137dae3cfc1890ce.svg"},7960:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/json-62868f61b34e3790f3a8b3b52b1a3a3b.png"},23316:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/json_express-aa631b2de86808970aa4bb7c9c9d3edf.png"},2600:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/multiple_queries-2c2e81674208b90b9aeb1cb791a3f0dc.png"},31146:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/multiple_queries_express-ec4dc8013e85dc2a2fa4f5eeb55ce8dd.png"},82137:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/plaintext-e25d187f782d18fdd35b84e3d7c625eb.png"},7093:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/plaintext_express-ef6522843412bb5b14b3c6b6a4f032de.png"},66802:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/single_query-4f7782d3c3ff91e92ac27e382b09f6ac.png"},92256:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/single_query_express-d8e41422b4f5c0a9496272e4a66a97c4.png"}}]);