"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[45897],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},g=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),p=c(n),f=r,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||o;return n?a.createElement(m,s(s({ref:t},g),{},{components:n})):a.createElement(m,s({ref:t},g))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},87981:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={id:"mssql",title:"MSSQL"},s=void 0,i={unversionedId:"mssql/mssql",id:"version-etcd_v2.x.x/mssql/mssql",title:"MSSQL",description:"Release",source:"@site/storage_versioned_docs/version-etcd_v2.x.x/mssql/README.md",sourceDirName:"mssql",slug:"/mssql/",permalink:"/storage/etcd_v2.x.x/mssql/",draft:!1,editUrl:"https://github.com/gofiber/storage/edit/main/mssql/README.md",tags:[],version:"etcd_v2.x.x",lastUpdatedAt:1711618807,formattedLastUpdatedAt:"Mar 28, 2024",frontMatter:{id:"mssql",title:"MSSQL"},sidebar:"tutorialSidebar",previous:{title:"MongoDB",permalink:"/storage/etcd_v2.x.x/mongodb/"},next:{title:"MySQL",permalink:"/storage/etcd_v2.x.x/mysql/"}},l={},c=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}],g={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/github/v/tag/gofiber/storage?filter=mssql*",alt:"Release"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://gofiber.io/discord"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})),"\n",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-mssql.yml?label=Tests",alt:"Test"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/gosec.yml?label=Security",alt:"Security"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/linter.yml?label=Linter",alt:"Linter"})),(0,r.kt)("p",null,"A MSSQL storage driver using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/go-mssqldb"},"microsoft/go-mssqldb"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note: Requires Go 1.19 and above")),(0,r.kt)("h3",{id:"table-of-contents"},"Table of Contents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#signatures"},"Signatures")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#installation"},"Installation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#examples"},"Examples")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#config"},"Config")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#default-config"},"Default Config"))),(0,r.kt)("h3",{id:"signatures"},"Signatures"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) Storage\nfunc (s *Storage) Get(key string) ([]byte, error)\nfunc (s *Storage) Set(key string, val []byte, exp time.Duration) error\nfunc (s *Storage) Delete(key string) error\nfunc (s *Storage) Reset() error\nfunc (s *Storage) Close() error\nfunc (s *Storage) Conn() *sql.DB\n")),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("p",null,"MSSQL is tested on the 2 last ",(0,r.kt)("a",{parentName:"p",href:"https://golang.org/dl/"},"Go versions")," with support for modules. So make sure to initialize one first if you didn't do that yet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"go mod init github.com/<user>/<repo>\n")),(0,r.kt)("p",null,"And then install the mssql implementation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/gofiber/storage/mssql/v2\n")),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Import the storage package."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/gofiber/storage/mssql/v2"\n')),(0,r.kt)("p",null,"You can use the following possibilities to create a storage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// Initialize default config\nstore := mssql.New()\n\n// Initialize custom config\nstore := mssql.New(mssql.Config{\n    Host:            "127.0.0.1",\n    Port:            1433,\n    Database:        "fiber",\n    Table:           "fiber_storage",\n    Reset:           false,\n    GCInterval:      10 * time.Second,\n    SslMode:         "disable",\n})\n\n// Initialize custom config using connection string\nstore := mssql.New(mssql.Config{\n    ConnectionURI:   "sqlserver://user:password@localhost:1433?database=fiber"\n    Reset:           false,\n    GCInterval:      10 * time.Second,\n})\n')),(0,r.kt)("h3",{id:"config"},"Config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// Config defines the config for storage.\ntype Config struct {\n    // Connection string to use for DB. Will override all other authentication values if used\n    //\n    // Optional. Default is ""\n    ConnectionURI string\n\n    // Host name where the DB is hosted\n    //\n    // Optional. Default is "127.0.0.1"\n    Host string\n\n    // Port where the DB is listening on\n    //\n    // Optional. Default is 1433\n    Port int\n\n    // Server username\n    //\n    // Optional. Default is ""\n    Username string\n\n    // Server password\n    //\n    // Optional. Default is ""\n    Password string\n\n    // Instance name\n    //\n    // Optional. Default is ""\n    Instance string\n    \n    // Database name\n    //\n    // Optional. Default is "fiber"\n    Database string\n\n    // Table name\n    //\n    // Optional. Default is "fiber_storage"\n    Table string\n\n    // Reset clears any existing keys in existing Table\n    //\n    // Optional. Default is false\n    Reset bool\n\n    // Time before deleting expired keys\n    //\n    // Optional. Default is 10 * time.Second\n    GCInterval time.Duration\n\n    // The SSL mode for the connection\n    //\n    // Optional. Default is "disable"\n    SslMode string\n}\n')),(0,r.kt)("h3",{id:"default-config"},"Default Config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'var ConfigDefault = Config{\n    ConnectionURI:   "",\n    Host:            "127.0.0.1",\n    Port:            1433,\n    Database:        "fiber",\n    Table:           "fiber_storage",\n    Reset:           false,\n    GCInterval:      10 * time.Second,\n    SslMode:         "disable",\n}\n')))}u.isMDXComponent=!0}}]);