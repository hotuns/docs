"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[52609],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,f=p["".concat(s,".").concat(m)]||p[m]||g[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5419:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={id:"azureblob",title:"Azure Blob"},i=void 0,l={unversionedId:"azureblob/azureblob",id:"version-ristretto_v1.x.x/azureblob/azureblob",title:"Azure Blob",description:"Release",source:"@site/storage_versioned_docs/version-ristretto_v1.x.x/azureblob/README.md",sourceDirName:"azureblob",slug:"/azureblob/",permalink:"/storage/ristretto_v1.x.x/azureblob/",draft:!1,editUrl:"https://github.com/gofiber/storage/edit/main/azureblob/README.md",tags:[],version:"ristretto_v1.x.x",lastUpdatedAt:1704981854,formattedLastUpdatedAt:"Jan 11, 2024",frontMatter:{id:"azureblob",title:"Azure Blob"},sidebar:"tutorialSidebar",previous:{title:"ArangoDB",permalink:"/storage/ristretto_v1.x.x/arangodb/"},next:{title:"Badger",permalink:"/storage/ristretto_v1.x.x/badger/"}},s={},u=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}],c={toc:u},p="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/github/v/tag/gofiber/storage?filter=azureblob*",alt:"Release"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://gofiber.io/discord"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})),"\n",(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-azureblob.yml?label=Tests",alt:"Test"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/gosec.yml?label=Security",alt:"Security"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/linter.yml?label=Linter",alt:"Linter"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/products/storage/blobs/#overview"},"Azure Blob storage")," is Microsoft's object storage solution for the cloud."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"NOTE: Go ",(0,a.kt)("strong",{parentName:"p"},"1.18")," or later is required. Source: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-sdk-for-go/blob/main/README.md"},"link"))),(0,a.kt)("h3",{id:"table-of-contents"},"Table of Contents"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#signatures"},"Signatures")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#installation"},"Installation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#examples"},"Examples")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#config"},"Config")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#default-config"},"Default Config"))),(0,a.kt)("h3",{id:"signatures"},"Signatures"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) Storage\nfunc (s *Storage) Get(key string) ([]byte, error)\nfunc (s *Storage) Set(key string, val []byte, exp time.Duration) error\nfunc (s *Storage) Delete(key string) error\nfunc (s *Storage) Reset() error\nfunc (s *Storage) Close() error\nfunc (s *Storage) Conn() *azblob.Client\n")),(0,a.kt)("h3",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Azure blob storage driver is tested on the 2 last ",(0,a.kt)("a",{parentName:"p",href:"https://golang.org/dl/"},"Go versions")," with support for modules. So make sure to initialize one first if you didn't do that yet:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go mod init github.com/<user>/<repo>\n")),(0,a.kt)("p",null,"And then install the azure blob implementation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/gofiber/storage/azureblob\n")),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Import the storage package."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/gofiber/storage/azureblob"\n')),(0,a.kt)("p",null,"You can use the following possibilities to create a storage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// Initialize default config\nstore := azureblob.New()\n\n// Initialize custom config\nstore := azureblob.New(azureblob.Config{\n    Account:   "test",\n    Container: "test",\n    Credentials: Credentials{\n        Account: "test",\n        Key:     "YXp1cml0ZWtleQo=",\n    },\n})\n')),(0,a.kt)("h3",{id:"config"},"Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'type Config struct {\n    // Storage account name.\n    Account string\n    // Container name.\n    Container string\n    // Storage endpoint.\n    // Optional. Default: "https://STORAGEACCOUNTNAME.blob.core.windows.net"\n    Endpoint string\n    // Request timeout.\n    // Optional. Default is 0 (no timeout)\n    RequestTimeout time.Duration\n    // Reset clears any existing keys in existing container.\n    // Optional. Default is false\n    Reset bool\n    // Credentials overrides AWS access key and AWS secret access key. Not recommended.\n    // Optional. Default is Credentials{}\n    Credentials Credentials\n    // The maximum number of times requests that encounter retryable failures should be attempted.\n    // Optional. Default is 3\n    MaxAttempts int\n}\n')),(0,a.kt)("h3",{id:"default-config"},"Default Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'var ConfigDefault = Config{\n    Account:        "",\n    Container:      "",\n    Endpoint:       "",\n    RequestTimeout: 0,\n    Reset:          false,\n    MaxAttempts:    3,\n}\n')))}g.isMDXComponent=!0}}]);