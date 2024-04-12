"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[81179],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),g=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=g(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=g(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var g=2;g<a;g++)i[g]=n[g];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93357:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>g});var o=n(87462),r=(n(67294),n(3905));const a={id:"mongodb",title:"MongoDB"},i=void 0,l={unversionedId:"mongodb/mongodb",id:"version-s3_v2.x.x/mongodb/mongodb",title:"MongoDB",description:"Release",source:"@site/storage_versioned_docs/version-s3_v2.x.x/mongodb/README.md",sourceDirName:"mongodb",slug:"/mongodb/",permalink:"/storage/s3_v2.x.x/mongodb/",draft:!1,editUrl:"https://github.com/gofiber/storage/edit/main/mongodb/README.md",tags:[],version:"s3_v2.x.x",lastUpdatedAt:1712931056,formattedLastUpdatedAt:"Apr 12, 2024",frontMatter:{id:"mongodb",title:"MongoDB"},sidebar:"tutorialSidebar",previous:{title:"Minio",permalink:"/storage/s3_v2.x.x/minio/"},next:{title:"MSSQL",permalink:"/storage/s3_v2.x.x/mssql/"}},s={},g=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}],p={toc:g},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/github/v/tag/gofiber/storage?filter=mongodb*",alt:"Release"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://gofiber.io/discord"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})),"\n",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-mongodb.yml?label=Tests",alt:"Test"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/gosec.yml?label=Security",alt:"Security"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/linter.yml?label=Linter",alt:"Linter"})),(0,r.kt)("p",null,"A MongoDB storage driver using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mongodb/mongo-go-driver"},"mongodb/mongo-go-driver"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note: Requires Go 1.19 and above")),(0,r.kt)("h3",{id:"table-of-contents"},"Table of Contents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#signatures"},"Signatures")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#installation"},"Installation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#examples"},"Examples")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#config"},"Config")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#default-config"},"Default Config"))),(0,r.kt)("h3",{id:"signatures"},"Signatures"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) Storage\nfunc (s *Storage) Get(key string) ([]byte, error)\nfunc (s *Storage) Set(key string, val []byte, exp time.Duration) error\nfunc (s *Storage) Delete(key string) error\nfunc (s *Storage) Reset() error\nfunc (s *Storage) Close() error\nfunc (s *Storage) Conn() *mongo.Database\n")),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("p",null,"MongoDB is tested on the 2 last ",(0,r.kt)("a",{parentName:"p",href:"https://golang.org/dl/"},"Go versions")," with support for modules. So make sure to initialize one first if you didn't do that yet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"go mod init github.com/<user>/<repo>\n")),(0,r.kt)("p",null,"And then install the mongodb implementation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/gofiber/storage/mongodb/v2\n")),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Import the storage package."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/gofiber/storage/mongodb/v2"\n')),(0,r.kt)("p",null,"You can use the following possibilities to create a storage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// Initialize default config\nstore := mongodb.New()\n\n// Initialize custom config\nstore := mongodb.New(mongodb.Config{\n    Host:       "127.0.0.1",\n    Port:       27017,\n    Database:   "fiber",\n    Collection: "fiber_storage",\n    Reset:      false,\n})\n\n// Initialize custom config using connection string\nstore := mongodb.New(mongodb.Config{\n    ConnectionURI: "mongodb://user:password@127.0.0.1:27017",\n    Database:        "fiber",\n    Collection:      "fiber_storage",\n    Reset:           false,\n})\n\n')),(0,r.kt)("h3",{id:"config"},"Config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'type Config struct {\n    // Connection string to use for DB. Will override all other authentication values if used\n    //\n    // Optional. Default is ""\n    ConnectionURI string\n\n    // Host name where the DB is hosted\n    //\n    // Optional. Default is "127.0.0.1"\n    Host string\n\n    // Port where the DB is listening on\n    //\n    // Optional. Default is 27017\n    Port int\n\n    // Server username\n    //\n    // Optional. Default is ""\n    Username string\n\n    // Server password\n    //\n    // Optional. Default is ""\n    Password string\n\n    // Database name\n    //\n    // Optional. Default is "fiber"\n    Database string\n\n    // Collection name\n    //\n    // Optional. Default is "fiber_storage"\n    Collection string\n\n    // Reset clears any existing keys in existing Table\n    //\n    // Optional. Default is false\n    Reset bool\n}\n')),(0,r.kt)("h3",{id:"default-config"},"Default Config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'var ConfigDefault = Config{\n    ConnectionURI: "",\n    Host:          "127.0.0.1",\n    Port:          27017,\n    Database:      "fiber",\n    Collection:    "fiber_storage",\n    Reset:         false,\n}\n')))}c.isMDXComponent=!0}}]);