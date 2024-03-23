"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[10583],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},57657:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={id:"dynamodb",title:"DynamoDB"},i=void 0,s={unversionedId:"dynamodb/dynamodb",id:"version-sqlite3_v1.x.x/dynamodb/dynamodb",title:"DynamoDB",description:"Release",source:"@site/storage_versioned_docs/version-sqlite3_v1.x.x/dynamodb/README.md",sourceDirName:"dynamodb",slug:"/dynamodb/",permalink:"/storage/sqlite3_v1.x.x/dynamodb/",draft:!1,editUrl:"https://github.com/gofiber/storage/edit/main/dynamodb/README.md",tags:[],version:"sqlite3_v1.x.x",lastUpdatedAt:1711204266,formattedLastUpdatedAt:"Mar 23, 2024",frontMatter:{id:"dynamodb",title:"DynamoDB"},sidebar:"tutorialSidebar",previous:{title:"Couchbase",permalink:"/storage/sqlite3_v1.x.x/couchbase/"},next:{title:"Etcd",permalink:"/storage/sqlite3_v1.x.x/etcd/"}},l={},c=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/github/v/tag/gofiber/storage?filter=dynamodb*",alt:"Release"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://gofiber.io/discord"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})),"\n",(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-dynamodb.yml?label=Tests",alt:"Test"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/gosec.yml?label=Security",alt:"Security"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/linter.yml?label=Linter",alt:"Linter"})),(0,o.kt)("p",null,"A DynamoDB storage driver using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/aws/aws-sdk-go-v2"},"aws/aws-sdk-go-v2"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," If config fields of credentials not given, credentials are using from the environment variables, ~/.aws/credentials, or EC2 instance role. If config fields of credentials given, credentials are using from config. Look at: ",(0,o.kt)("a",{parentName:"p",href:"https://aws.github.io/aws-sdk-go-v2/docs/configuring-sdk/#specifying-credentials"},"specifying credentials")),(0,o.kt)("p",null,"...."),(0,o.kt)("h3",{id:"table-of-contents"},"Table of Contents"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#signatures"},"Signatures")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#installation"},"Installation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#examples"},"Examples")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#config"},"Config")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#default-config"},"Default Config"))),(0,o.kt)("h3",{id:"signatures"},"Signatures"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func New(config Config) Storage\n\n\nfunc (s *Storage) Get(key string) ([]byte, error)\nfunc (s *Storage) Set(key string, val []byte, exp time.Duration) error\nfunc (s *Storage) Delete(key string) error\nfunc (s *Storage) Reset() error\nfunc (s *Storage) Close() error\nfunc (s *Storage) Conn() *awsdynamodb.Client\n")),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("p",null,"DynamoDB is tested on the 2 last ",(0,o.kt)("a",{parentName:"p",href:"https://golang.org/dl/"},"Go versions")," with support for modules. So make sure to initialize one first if you didn't do that yet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go mod init github.com/<user>/<repo>\n")),(0,o.kt)("p",null,"And then install the dynamodb implementation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/gofiber/storage/dynamodb\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Import the storage package."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/gofiber/storage/dynamodb"\n')),(0,o.kt)("p",null,"You can use the following possibilities to create a storage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// Initialize dynamodb\nstore := dynamodb.New(dynamodb.Config{\n    \n})\n")),(0,o.kt)("h3",{id:"config"},"Config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'type Config struct {\n    // Region of the DynamoDB service you want to use.\n    // Valid values: https://docs.aws.amazon.com/general/latest/gr/rande.html#ddb_region.\n    // E.g. "us-west-2".\n    // Optional (read from shared config file or environment variable if not set).\n    // Environment variable: "AWS_REGION".\n    Region string\n\n    // Name of the DynamoDB table.\n    // Optional ("fiber_storage" by default).\n    Table string\n\n    // CustomEndpoint allows you to set a custom DynamoDB service endpoint.\n    // This is especially useful if you\'re running a "DynamoDB local" Docker container for local testing.\n    // Typical value for the Docker container: "http://localhost:8000".\n    // See https://hub.docker.com/r/amazon/dynamodb-local/.\n    // Optional ("" by default)\n    Endpoint string\n\n    // Credentials overrides AWS access key and AWS secret access key. Not recommended.\n    //\n    // Optional. Default is Credentials{}\n    Credentials Credentials\n\n    // The maximum number of times requests that encounter retryable failures should be attempted.\n    //\n    // Optional. Default is 3\n    MaxAttempts int\n\n    // Reset clears any existing keys in existing Bucket\n    //\n    // Optional. Default is false\n    Reset bool\n\n    // ReadCapacityUnits of the table.\n    // Only required when the table doesn\'t exist yet and is created by gokv.\n    // Optional (5 by default, which is the same default value as when creating a table in the web console)\n    // 25 RCUs are included in the free tier (across all tables).\n    // For example calculations, see https://github.com/awsdocs/amazon-dynamodb-developer-guide/blob/c420420a59040c5b3dd44a6e59f7c9e55fc922ef/doc_source/HowItWorks.ProvisionedThroughput.\n    // For limits, see https://github.com/awsdocs/amazon-dynamodb-developer-guide/blob/c420420a59040c5b3dd44a6e59f7c9e55fc922ef/doc_source/Limits.md#capacity-units-and-provisioned-throughput.md#provisioned-throughput.\n    ReadCapacityUnits int64\n\n    // ReadCapacityUnits of the table.\n    // Only required when the table doesn\'t exist yet and is created by gokv.\n    // Optional (5 by default, which is the same default value as when creating a table in the web console)\n    // 25 RCUs are included in the free tier (across all tables).\n    // For example calculations, see https://github.com/awsdocs/amazon-dynamodb-developer-guide/blob/c420420a59040c5b3dd44a6e59f7c9e55fc922ef/doc_source/HowItWorks.ProvisionedThroughput.\n    // For limits, see https://github.com/awsdocs/amazon-dynamodb-developer-guide/blob/c420420a59040c5b3dd44a6e59f7c9e55fc922ef/doc_source/Limits.md#capacity-units-and-provisioned-throughput.md#provisioned-throughput.\n    WriteCapacityUnits int64\n\n    // If the table doesn\'t exist yet, gokv creates it.\n    // If WaitForTableCreation is true, gokv will block until the table is created, with a timeout of 15 seconds.\n    // If the table still doesn\'t exist after 15 seconds, an error is returned.\n    // If WaitForTableCreation is false, gokv returns the client immediately.\n    // In the latter case you need to make sure that you don\'t read from or write to the table before it\'s created,\n    // because otherwise you will get ResourceNotFoundException errors.\n    // Optional (true by default).\n    WaitForTableCreation *bool\n}\n\ntype Credentials struct {\n    AccessKey       string\n    SecretAccessKey string\n}\n\n')),(0,o.kt)("h3",{id:"default-config"},"Default Config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'var ConfigDefault = Config{\n    Table:                "fiber_storage",\n    Credentials:          Credentials{},\n    MaxAttempts:          3,\n    Reset:                false,\n    ReadCapacityUnits:    5,\n    WriteCapacityUnits:   5,\n    WaitForTableCreation: aws.Bool(true),\n}\n')))}p.isMDXComponent=!0}}]);