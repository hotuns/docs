"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[9478],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),g=o,m=c["".concat(l,".").concat(g)]||c[g]||f[g]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},59409:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={id:"ristretto",title:"Ristretto"},i=void 0,s={unversionedId:"ristretto/ristretto",id:"version-bbolt_v1.x.x/ristretto/ristretto",title:"Ristretto",description:"Release",source:"@site/storage_versioned_docs/version-bbolt_v1.x.x/ristretto/README.md",sourceDirName:"ristretto",slug:"/ristretto/",permalink:"/storage/bbolt_v1.x.x/ristretto/",draft:!1,editUrl:"https://github.com/gofiber/storage/edit/main/ristretto/README.md",tags:[],version:"bbolt_v1.x.x",lastUpdatedAt:1704725601,formattedLastUpdatedAt:"Jan 8, 2024",frontMatter:{id:"ristretto",title:"Ristretto"},sidebar:"tutorialSidebar",previous:{title:"Redis",permalink:"/storage/bbolt_v1.x.x/redis/"},next:{title:"S3",permalink:"/storage/bbolt_v1.x.x/s3/"}},l={},u=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}],p={toc:u},c="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/github/v/tag/gofiber/storage?filter=ristretto*",alt:"Release"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://gofiber.io/discord"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})),"\n",(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-ristretto.yml?label=Tests",alt:"Test"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/gosec.yml?label=Security",alt:"Security"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/linter.yml?label=Linter",alt:"Linter"})),(0,o.kt)("p",null,"A Memory-bound storage driver using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dgraph-io/ristretto"},(0,o.kt)("inlineCode",{parentName:"a"},"dgraph-io/ristretto")),"."),(0,o.kt)("h3",{id:"table-of-contents"},"Table of Contents"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#signatures"},"Signatures")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#installation"},"Installation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#examples"},"Examples")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#config"},"Config")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#default-config"},"Default Config"))),(0,o.kt)("h3",{id:"signatures"},"Signatures"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) Storage\nfunc (s *Storage) Get(key string) ([]byte, error)\nfunc (s *Storage) Set(key string, val []byte, exp time.Duration) error\nfunc (s *Storage) Delete(key string) error\nfunc (s *Storage) Reset() error\nfunc (s *Storage) Close() error\nfunc (s *Storage) Conn() *ristretto.Cache\n")),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Ristretto is tested on the 2 last ",(0,o.kt)("a",{parentName:"p",href:"https://golang.org/dl/"},"Go versions")," with support for modules. So make sure to initialize one first if you didn't do that yet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go mod init github.com/<user>/<repo>\n")),(0,o.kt)("p",null,"And then install the ristretto implementation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/gofiber/storage/ristretto\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Import the storage package."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/gofiber/storage/ristretto"\n')),(0,o.kt)("p",null,"You can use the following possibilities to create a storage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// Initialize default config\nstore := ristretto.New()\n\n// Initialize custom config\nstore := ristretto.New(ristretto.Config{\n  NumCounters: 1e7, // number of keys to track frequency of (10M).\n  MaxCost:     1 << 30, // maximum cost of cache (1GB).\n  BufferItems: 64, // number of keys per Get buffer.\n})\n")),(0,o.kt)("h3",{id:"config"},"Config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type Config struct {\n  // NumCounters number of keys to track frequency of (10M).\n  NumCounters int64\n\n  // MaxCost maximum cost of cache (1GB).\n  MaxCost     int64\n\n  // BufferItems number of keys per Get buffer.\n  BufferItems int64\n}\n")),(0,o.kt)("h3",{id:"default-config"},"Default Config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"var ConfigDefault = Config{\n  NumCounters: 1e7,\n  MaxCost:     1 << 30,\n  BufferItems: 64,\n  DefaultCost: 1,\n}\n")))}f.isMDXComponent=!0}}]);