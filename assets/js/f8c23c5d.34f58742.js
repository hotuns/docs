"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[6702],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),g=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=g(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=g(n),f=r,d=u["".concat(s,".").concat(f)]||u[f]||c[f]||o;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var g=2;g<o;g++)i[g]=n[g];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},64940:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>g});var a=n(87462),r=(n(67294),n(3905));const o={id:"arangodb",title:"ArangoDB"},i=void 0,l={unversionedId:"arangodb/arangodb",id:"version-sqlite3_v1.x.x/arangodb/arangodb",title:"ArangoDB",description:"Release",source:"@site/storage_versioned_docs/version-sqlite3_v1.x.x/arangodb/README.md",sourceDirName:"arangodb",slug:"/arangodb/",permalink:"/storage/sqlite3_v1.x.x/arangodb/",draft:!1,editUrl:"https://github.com/gofiber/storage/edit/main/arangodb/README.md",tags:[],version:"sqlite3_v1.x.x",lastUpdatedAt:1711618807,formattedLastUpdatedAt:"Mar 28, 2024",frontMatter:{id:"arangodb",title:"ArangoDB"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc4b Welcome",permalink:"/storage/sqlite3_v1.x.x/"},next:{title:"Azure Blob",permalink:"/storage/sqlite3_v1.x.x/azureblob/"}},s={},g=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}],p={toc:g},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/github/v/tag/gofiber/storage?filter=arangodb*",alt:"Release"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://gofiber.io/discord"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})),"\n",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-arangodb.yml?label=Tests",alt:"Test"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/gosec.yml?label=Security",alt:"Security"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/linter.yml?label=Linter",alt:"Linter"})),(0,r.kt)("p",null,"A ArangoDB storage driver using ",(0,r.kt)("inlineCode",{parentName:"p"},"arangodb/go-driver")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/arangodb/go-driver"},"arangodb/go-driver"),"."),(0,r.kt)("h3",{id:"table-of-contents"},"Table of Contents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#signatures"},"Signatures")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#installation"},"Installation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#examples"},"Examples")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#config"},"Config")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#default-config"},"Default Config"))),(0,r.kt)("h3",{id:"signatures"},"Signatures"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) Storage\nfunc (s *Storage) Get(key string) ([]byte, error)\nfunc (s *Storage) Set(key string, val []byte, exp time.Duration) error\nfunc (s *Storage) Delete(key string) error\nfunc (s *Storage) Reset() error\nfunc (s *Storage) Close() error\nfunc (s *Storage) Conn() driver.Client\n")),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("p",null,"ArangoDB is tested on the 2 last (1.14/1.15) ",(0,r.kt)("a",{parentName:"p",href:"https://golang.org/dl/"},"Go versions")," with support for modules. So make sure to initialize one first if you didn't do that yet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"go mod init github.com/<user>/<repo>\n")),(0,r.kt)("p",null,"And then install the mysql implementation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/gofiber/storage/arangodb\n")),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Import the storage package."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/gofiber/storage/arangodb"\n')),(0,r.kt)("p",null,"You can use the following possibilities to create a storage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// Initialize default config\nstore := arangodb.New()\n\n// Initialize custom config\nstore := arangodb.New(arangodb.Config{\n    Host:       "http://127.0.0.1",\n    Port:       8529,\n    Database:   "fiber",\n    Collection: "fiber_storage",\n    Reset:      false,\n    GCInterval: 10 * time.Second,\n})\n')),(0,r.kt)("h3",{id:"config"},"Config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'type Config struct {\n    // Host name where the DB is hosted\n    //\n    // Optional. Default is "http://127.0.0.1"\n    Host string\n\n    // Port where the DB is listening on\n    //\n    // Optional. Default is 8529\n    Port int\n\n    // Server username\n    //\n    // Optional. Default is ""\n    Username string\n\n    // Server password\n    //\n    // Optional. Default is ""\n    Password string\n\n    // Database name\n    //\n    // Optional. Default is "fiber"\n    Database string\n\n    // Collection name\n    //\n    // Optional. Default is "fiber_storage"\n    Collection string\n\n    // Reset clears any existing keys in existing collection\n    //\n    // Optional. Default is false\n    Reset bool\n    // Time before deleting expired keys\n    //\n    // Optional. Default is 10 * time.Second\n    GCInterval time.Duration\n}\n')),(0,r.kt)("h3",{id:"default-config"},"Default Config"),(0,r.kt)("p",null,"Used only for optional fields"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'var ConfigDefault = Config{\n    Host:       "http://127.0.0.1",\n    Port:       8529,\n    Database:   "fiber",\n    Collection: "fiber_storage",\n    Reset:      false,\n    GCInterval: 10 * time.Second,\n}\n')))}c.isMDXComponent=!0}}]);