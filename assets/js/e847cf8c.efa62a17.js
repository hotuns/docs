"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[71287],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(l,".").concat(m)]||p[m]||g[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28254:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={id:"couchbase",title:"Couchbase"},i=void 0,s={unversionedId:"couchbase/couchbase",id:"version-ristretto_v2.x.x/couchbase/couchbase",title:"Couchbase",description:"Release",source:"@site/storage_versioned_docs/version-ristretto_v2.x.x/couchbase/README.md",sourceDirName:"couchbase",slug:"/couchbase/",permalink:"/storage/ristretto_v2.x.x/couchbase/",draft:!1,editUrl:"https://github.com/gofiber/storage/edit/main/couchbase/README.md",tags:[],version:"ristretto_v2.x.x",lastUpdatedAt:1711618807,formattedLastUpdatedAt:"Mar 28, 2024",frontMatter:{id:"couchbase",title:"Couchbase"},sidebar:"tutorialSidebar",previous:{title:"Coherence",permalink:"/storage/ristretto_v2.x.x/coherence/"},next:{title:"DynamoDB",permalink:"/storage/ristretto_v2.x.x/dynamodb/"}},l={},c=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}],u={toc:c},p="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/github/v/tag/gofiber/storage?filter=couchbase*",alt:"Release"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://gofiber.io/discord"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})),"\n",(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-couchbase.yml?label=Tests",alt:"Test"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/gosec.yml?label=Security",alt:"Security"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/linter.yml?label=Linter",alt:"Linter"})),(0,o.kt)("p",null,"A Couchbase storage driver using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/couchbase/gocb"},"couchbase/gocb"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note: Requires Go 1.19 and above")),(0,o.kt)("h3",{id:"table-of-contents"},"Table of Contents"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#signatures"},"Signatures")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#installation"},"Installation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#examples"},"Examples")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#config"},"Config")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#default-config"},"Default Config"))),(0,o.kt)("h3",{id:"signatures"},"Signatures"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) Storage\nfunc (s *Storage) Get(key string) ([]byte, error)\nfunc (s *Storage) Set(key string, val []byte, exp time.Duration) error\nfunc (s *Storage) Delete(key string) error\nfunc (s *Storage) Reset() error\nfunc (s *Storage) Close() error\nfunc (s *Storage) Conn() *gocb.Cluster\n")),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Couchbase is tested on the 2 last ",(0,o.kt)("a",{parentName:"p",href:"https://golang.org/dl/"},"Go versions")," with support for modules. So make sure to initialize one first if you didn't do that yet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go mod init github.com/<user>/<repo>\n")),(0,o.kt)("p",null,"And then install the Couchbase implementation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/gofiber/storage/couchbase/v2\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Import the storage package."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/gofiber/storage/couchbase/v2"\n')),(0,o.kt)("p",null,"You can use the following possibilities to create a storage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// Initialize default config\nstore := couchbase.New()\n\n// Initialize Couchbase storage with custom config\nstore := couchbase.New(couchbase.Config{\n    Host:      "127.0.0.1:8091",\n    Username:  "",\n    Password:  "",\n    Bucket:  0,\n    ConnectionTimeout: 3* time.Second,\n    KVTimeout: 1* time.Second,\n})\n')),(0,o.kt)("h3",{id:"config"},"Config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type Config struct {\n    // The application username to Connect to the Couchbase cluster\n    Username string\n    // The application password to Connect to the Couchbase cluster\n    Password string\n    // The connection string for the Couchbase cluster\n    Host string\n    // The name of the bucket to Connect to\n    Bucket string\n    // The timeout for connecting to the Couchbase cluster\n    ConnectionTimeout time.Duration\n    // The timeout for performing operations on the Couchbase cluster\n    KVTimeout time.Duration\n}\n")),(0,o.kt)("h3",{id:"default-config"},"Default Config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// ConfigDefault is the default config\nvar ConfigDefault = Config{\n    Host:              "127.0.0.1:8091",\n    Username:          "admin",\n    Password:          "123456",\n    Bucket:            "fiber_storage",\n    ConnectionTimeout: 3 * time.Second,\n    KVTimeout:         1 * time.Second,\n}\n')))}g.isMDXComponent=!0}}]);