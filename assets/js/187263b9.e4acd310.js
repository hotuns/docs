"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[30425],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||g[m]||i;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46926:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={id:"s3",title:"S3"},s=void 0,o={unversionedId:"s3/s3",id:"s3/s3",title:"S3",description:"Release",source:"@site/docs/storage/s3/README.md",sourceDirName:"s3",slug:"/s3/",permalink:"/storage/next/s3/",draft:!1,editUrl:"https://github.com/gofiber/storage/edit/main/s3/README.md",tags:[],version:"current",lastUpdatedAt:1708283605,formattedLastUpdatedAt:"Feb 18, 2024",frontMatter:{id:"s3",title:"S3"},sidebar:"tutorialSidebar",previous:{title:"Rueidis",permalink:"/storage/next/rueidis/"},next:{title:"ScyllaDb",permalink:"/storage/next/scylladb/"}},l={},u=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}],c={toc:u},p="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/github/v/tag/gofiber/storage?filter=s3*",alt:"Release"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://gofiber.io/discord"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})),"\n",(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-s3.yml?label=Tests",alt:"Test"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/gosec.yml?label=Security",alt:"Security"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/linter.yml?label=Linter",alt:"Linter"})),(0,a.kt)("p",null,"A S3 storage driver using ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/aws/aws-sdk-go-v2"},"aws/aws-sdk-go-v2"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," If config fields of credentials not given, credentials are using from the environment variables, ~/.aws/credentials, or EC2 instance role. If config fields of credentials given, credentials are using from config. Look at: ",(0,a.kt)("a",{parentName:"p",href:"https://aws.github.io/aws-sdk-go-v2/docs/configuring-sdk/#specifying-credentials"},"specifying credentials")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note: Requires Go 1.19 and above")),(0,a.kt)("h3",{id:"table-of-contents"},"Table of Contents"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#signatures"},"Signatures")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#installation"},"Installation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#examples"},"Examples")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#config"},"Config")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#default-config"},"Default Config"))),(0,a.kt)("h3",{id:"signatures"},"Signatures"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) Storage\nfunc (s *Storage) Get(key string) ([]byte, error)\nfunc (s *Storage) Set(key string, val []byte, exp time.Duration) error\nfunc (s *Storage) Delete(key string) error\nfunc (s *Storage) Reset() error\nfunc (s *Storage) Close() error\nfunc (s *Storage) Conn() *s3.Client\n\n// Additional useful methods.\nfunc (s *Storage) CreateBucket(bucket string) error\nfunc (s *Storage) DeleteBucket(bucket string) error\nfunc (s *Storage) SetWithChecksum(key string, val []byte, checksum map[types.ChecksumAlgorithm][]byte) error\n")),(0,a.kt)("h3",{id:"installation"},"Installation"),(0,a.kt)("p",null,"S3 is tested on the 2 last ",(0,a.kt)("a",{parentName:"p",href:"https://golang.org/dl/"},"Go versions")," with support for modules. So make sure to initialize one first if you didn't do that yet:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go mod init github.com/<user>/<repo>\n")),(0,a.kt)("p",null,"And then install the s3 implementation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/gofiber/storage/s3/v2\n")),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Import the storage package."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/gofiber/storage/s3/v2"\n')),(0,a.kt)("p",null,"You can use the following possibilities to create a storage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// Initialize default config\nstore := s3.New()\n\n// Initialize custom config\nstore := s3.New(s3.Config{\n    Bucket:   "my-bucket-url",\n    Endpoint: "my-endpoint",\n    Region:   "my-region",\n    Reset:    false,\n})\n')),(0,a.kt)("p",null,"Create an object with ",(0,a.kt)("inlineCode",{parentName:"p"},"Set()"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'err := store.Set("my-key", []byte("my-value"))\n')),(0,a.kt)("p",null,"Or, call ",(0,a.kt)("inlineCode",{parentName:"p"},"SetWithChecksum()")," to create an object with checksum to\nask S3 server to verify data integrity on server side:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Currently 4 algorithms are supported:"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"types.ChecksumAlgorithmCrc32 (",(0,a.kt)("inlineCode",{parentName:"li"},"CRC32"),")"),(0,a.kt)("li",{parentName:"ul"},"types.ChecksumAlgorithmCrc32c (",(0,a.kt)("inlineCode",{parentName:"li"},"CRC32C"),")"),(0,a.kt)("li",{parentName:"ul"},"types.ChecksumAlgorithmSha1 (",(0,a.kt)("inlineCode",{parentName:"li"},"SHA1"),")"),(0,a.kt)("li",{parentName:"ul"},"types.ChecksumAlgorithmSha256 (",(0,a.kt)("inlineCode",{parentName:"li"},"SHA256"),")")),(0,a.kt)("p",{parentName:"blockquote"},"For more information, see ",(0,a.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/aws/aws-sdk-go-v2/service/s3#PutObjectInput"},"PutObjectInput"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'key := "my-key"\nval := []byte("my-value")\n\nhash := sha256.New()\nhash.Write(val)\nsha256sum := hash.Sum(nil)\n\n// import "github.com/aws/aws-sdk-go-v2/service/s3/types"\nchecksum  = map[types.ChecksumAlgorithm][]byte{\n    types.ChecksumAlgorithmSha256: sha256sum,\n}\n\nerr := store.SetWithChecksum(key, val, checksum)\n')),(0,a.kt)("h3",{id:"config"},"Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// Config defines the config for storage.\ntype Config struct {\n    // S3 bucket name\n    Bucket string\n\n    // AWS endpoint\n    Endpoint string\n\n    // AWS region\n    Region string\n\n    // Request timeout\n    //\n    // Optional. Default is 0 (no timeout)\n    RequestTimeout time.Duration\n\n    // Reset clears any existing keys in existing Bucket\n    //\n    // Optional. Default is false\n    Reset bool\n\n    // Credentials overrides AWS access key and AWS secret access key. Not recommended.\n    //\n    // Optional. Default is Credentials{}\n    Credentials Credentials\n\n    // The maximum number of times requests that encounter retryable failures should be attempted.\n    //\n    // Optional. Default is 3\n    MaxAttempts int\n\n}\n\ntype Credentials struct {\n    AccessKey       string\n    SecretAccessKey string\n}\n")),(0,a.kt)("h3",{id:"default-config"},"Default Config"),(0,a.kt)("p",null,"The default configuration lacks Bucket, Region, and Endpoint which are all required and must be overwritten:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// ConfigDefault is the default config\nvar ConfigDefault = Config{\n    Bucket:         "",\n    Region:         "",\n    Endpoint:       "",\n    Credentials:    Credentials{},\n    MaxAttempts:    3,\n    RequestTimeout: 0,\n    Reset:          false,\n}\n')))}g.isMDXComponent=!0}}]);