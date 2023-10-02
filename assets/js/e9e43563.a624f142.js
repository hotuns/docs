"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[57629],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},f=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),f=o,g=p["".concat(l,".").concat(f)]||p[f]||m[f]||r;return t?i.createElement(g,a(a({ref:n},u),{},{components:t})):i.createElement(g,a({ref:n},u))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<r;c++)a[c]=t[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3106:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=t(87462),o=(t(67294),t(3905));const r={},a="Minio",s={unversionedId:"minio/README",id:"version-minio_v0.x.x/minio/README",title:"Minio",description:"A Minio storage driver using minio/minio-go.",source:"@site/storage_versioned_docs/version-minio_v0.x.x/minio/README.md",sourceDirName:"minio",slug:"/minio/",permalink:"/storage/minio_v0.x.x/minio/",draft:!1,editUrl:"https://github.com/gofiber/storage/edit/main/minio/README.md",tags:[],version:"minio_v0.x.x",lastUpdatedAt:1696252895,formattedLastUpdatedAt:"Oct 2, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Memory",permalink:"/storage/minio_v0.x.x/memory/"},next:{title:"MongoDB",permalink:"/storage/minio_v0.x.x/mongodb/"}},l={},c=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}],u={toc:c},p="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"minio"},"Minio"),(0,o.kt)("p",null,"A Minio storage driver using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/minio/minio-go"},"minio/minio-go"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note: Requires Go 1.19 and above")),(0,o.kt)("h3",{id:"table-of-contents"},"Table of Contents"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#signatures"},"Signatures")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#installation"},"Installation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#examples"},"Examples")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#config"},"Config")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#default-config"},"Default Config"))),(0,o.kt)("h3",{id:"signatures"},"Signatures"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) Storage\nfunc (s *Storage) Get(key string) ([]byte, error)\nfunc (s *Storage) Set(key string, val []byte, exp time.Duration) error\nfunc (s *Storage) Delete(key string) error\nfunc (s *Storage) Reset() error\nfunc (s *Storage) Close() error\nfunc (s *Storage) CheckBucket() error\nfunc (s *Storage) CreateBucket() error\nfunc (s *Storage) RemoveBucket() error\nfunc (s *Storage) Conn() *minio.Client\n")),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Install the Minio implementation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/gofiber/storage/minio\n")),(0,o.kt)("p",null,"And then run minio on Docker"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d --restart always -p 9000:9000 -p 9001:9001 --name storage-minio --volume=minio:/var/lib/minio -e MINIO_ROOT_USER='minio-user' -e MINIO_ROOT_PASSWORD='minio-password' minio/minio server --console-address \":9001\" /var/lib/minio\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Import the storage package."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/gofiber/storage/minio"\n')),(0,o.kt)("p",null,"You can use the following possibilities to create a storage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// Initialize default config\nstore := minio.New()\n\n// Initialize custom config\nstore := minio.New(minio.Config{\n    Bucket:   "fiber-bucket",\n    Endpoint: "localhost:9000",\n    Credentials: Credentials{\n        accessKeyID:     "minio-user",\n        secretAccessKey: "minio-password",\n    },\n})\n')),(0,o.kt)("h3",{id:"config"},"Config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// Config defines the config for storage.\ntype Config struct {\n    // Bucket\n    // Default fiber-bucket\n    Bucket string\n    \n    // Endpoint is a host name or an IP address\n    Endpoint string\n    \n    // Region Set this value to override region cache\n    // Optional\n    Region string\n    \n    // Token Set this value to provide x-amz-security-token (AWS S3 specific)\n    // Optional, Default is false\n    Token string\n    \n    // Secure If set to true, https is used instead of http.\n    // Default is false\n    Secure bool\n    \n    // Reset clears any existing keys in existing Bucket\n    // Optional. Default is false\n    Reset bool\n    \n    // Credentials Minio access key and Minio secret key.\n    // Need to be defined\n    Credentials Credentials\n    \n    // GetObjectOptions Options for GET requests specifying additional options like encryption, If-Match\n    GetObjectOptions minio.GetObjectOptions\n    \n    // PutObjectOptions\n    // Allows user to set optional custom metadata, content headers, encryption keys and number of threads for multipart upload operation.\n    PutObjectOptions minio.PutObjectOptions\n    \n    // ListObjectsOptions Options per to list objects\n    ListObjectsOptions minio.ListObjectsOptions\n    \n    // RemoveObjectOptions Allows user to set options\n    RemoveObjectOptions minio.RemoveObjectOptions\n}\n")),(0,o.kt)("h3",{id:"default-config"},"Default Config"),(0,o.kt)("p",null,"The default configuration lacks Bucket, Region, and Endpoint which are all required and must be overwritten:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// ConfigDefault is the default config\nvar ConfigDefault = Config{\n    Bucket:              "fiber-bucket",\n    Endpoint:            "",\n    Region:              "",\n    Token:               "",\n    Secure:              false,\n    Reset:               false,\n    Credentials:         Credentials{},\n    GetObjectOptions:    minio.GetObjectOptions{},\n    PutObjectOptions:    minio.PutObjectOptions{},\n    ListObjectsOptions:  minio.ListObjectsOptions{},\n    RemoveObjectOptions: minio.RemoveObjectOptions{},\n}\ntype Credentials struct {\n    AccessKeyID     string\n    SecretAccessKey string\n}\n')))}m.isMDXComponent=!0}}]);