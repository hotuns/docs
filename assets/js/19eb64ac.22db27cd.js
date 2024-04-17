"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[28134],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},f=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),p=c(n),g=i,d=p["".concat(o,".").concat(g)]||p[g]||u[g]||r;return n?a.createElement(d,s(s({ref:t},f),{},{components:n})):a.createElement(d,s({ref:t},f))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=g;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:i,s[1]=l;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},78566:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={id:"scylladb",title:"ScyllaDb"},s=void 0,l={unversionedId:"scylladb/scylladb",id:"version-minio_v0.x.x/scylladb/scylladb",title:"ScyllaDb",description:"Release",source:"@site/storage_versioned_docs/version-minio_v0.x.x/scylladb/README.md",sourceDirName:"scylladb",slug:"/scylladb/",permalink:"/storage/minio_v0.x.x/scylladb/",draft:!1,editUrl:"https://github.com/gofiber/storage/edit/main/scylladb/README.md",tags:[],version:"minio_v0.x.x",lastUpdatedAt:1713331859,formattedLastUpdatedAt:"Apr 17, 2024",frontMatter:{id:"scylladb",title:"ScyllaDb"},sidebar:"tutorialSidebar",previous:{title:"S3",permalink:"/storage/minio_v0.x.x/s3/"},next:{title:"SQLite3",permalink:"/storage/minio_v0.x.x/sqlite3/"}},o={},c=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}],f={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/github/v/tag/gofiber/storage?filter=scylladb*",alt:"Release"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://gofiber.io/discord"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})),"\n",(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-scylladb.yml?label=Tests",alt:"Test"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/gosec.yml?label=Security",alt:"Security"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/linter.yml?label=Linter",alt:"Linter"})),(0,i.kt)("h1",{id:"scylladb"},"ScyllaDb"),(0,i.kt)("p",null,"A ScyllaDb storage engine for ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber")," using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/scylladb/gocql"},"gocql"),"."),(0,i.kt)("h3",{id:"table-of-contents"},"Table of Contents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#signatures"},"Signatures")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#installation"},"Installation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#examples"},"Examples")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#config"},"Config")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#default-config"},"Default Config"))),(0,i.kt)("h3",{id:"signatures"},"Signatures"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) Storage\nfunc (s *Storage) Get(key string) ([]byte, error)\nfunc (s *Storage) Set(key string, value []byte, expire time.Duration) error\nfunc (s *Storage) Delete(key string) error\nfunc (s *Storage) Reset() error\nfunc (s *Storage) Close() error\nfunc (s *Storage) Conn() *gocql.Session\n")),(0,i.kt)("h3",{id:"installation"},"Installation"),(0,i.kt)("p",null,"ScyllaDb is tested on the 2 last ",(0,i.kt)("a",{parentName:"p",href:"https://golang.org/dl/"},"Go versions")," with support for modules. So make sure to initialize one first if you didn't do that yet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"go mod init github.com/<user>/<repo>\n")),(0,i.kt)("p",null,"And then install the scylladb implementation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/gofiber/storage/scylladb\n")),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Import the storage package."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/gofiber/storage/scylladb"\n')),(0,i.kt)("p",null,"You can use the following possibilities to create a storage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// Initialize default config\nstore := scylladb.New()\n\n// Initialize custom config\nstore := scylladb.New(scylladb.Config{\n    Keyspace:       "fiber",\n    Hosts:          []string{"127.0.0.1"},\n    Port:           9042,\n    Table:          "fiber_storage",\n    Consistency:    "ONE",\n    Reset:          false,\n})\n\n// Initialize with support for TLS (SslOptions configures TLS use)\n//  \n//      InsecureSkipVerify and EnableHostVerification interact as follows:\n//\n//      |Config.InsecureSkipVerify | EnableHostVerification | Result             |\n//      |--------------------------|------------------------|--------------------|\n//      |Config is nil             | false                  | do not verify host |\n//      |Config is nil             | true                   | verify host        |\n//      |false                     | false                  | verify host        |\n//      |true                      | false                  | do not verify host |\n//      |false                     | true                   | verify host        |\n//      |true                      | true                   | verify host        |\nstore := New(\n    Config{\n        Keyspace:    "fiber",\n        Hosts:       []string{"127.0.0.1"},\n        Port:        9042,\n        Table:       "fiber_storage",\n        Consistency: "ONE",\n        SslOpts: &gocql.SslOptions{\n            Config: &tls.Config{\n                InsecureSkipVerify: false, // Set this too false to enable certificate verification\n            },\n                CertPath:               "/path/to/client_cert.pem", // Path to the client certificate\n                KeyPath:                "/path/to/client_key.pem",  // Path to the client certificate\'s private key\n                CaPath:                 "/path/to/ca_cert.pem",     // Path to the CA certificate\n                EnableHostVerification: true,                       // Enable hostname verification\n        },\n        Reset: false,\n    },\n)\n\n// Initialize custom config using scylladb connection\ncluster, _ := gocql.NewCluster("127.0.0.1")\ncluster.Keyspace = "fiber"\ncluster.Port = 9042\n\nsession, _ := cluster.CreateSession()\nstore := scylladb.New(scylladb.Config{\n    Session:         session,\n    Keyspace:        "fiber",\n    Table:           "fiber_storage",\n    Reset:           false,\n})\n')),(0,i.kt)("h3",{id:"config"},"Config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'type Config struct {\n    // Session is provided by the user to use an existing ScyllaDb session\n    // Session Will override Keyspace and all other authentication values if used\n    //\n    // Optional. Default is nil\n    Session *gocql.Session\n\n    // Keyspace name\n    //\n    // Optional. Default is "fiber"\n    Keyspace string\n\n    // Hosts are an array of network addresses for establishing initial connections\n    // You have the flexibility to specify one or multiple addresses as needed\n    //\n    // Optional. Default is "127.0.0.1"\n    Hosts []string\n\n    // Port where the ScyllaDb cluster is listening on\n    //\n    // Optional. Default is 9042\n    Port int\n\n    // Username for ScyllaDb cluster\n    //\n    // Optional. Default is ""\n    Username string\n\n    // Password for ScyllaDb cluster\n    //\n    // Optional. Default is ""\n    Password string\n\n    // Table name\n    //\n    // Optional. Default is "fiber_storage"\n    Table string\n\n    // Level of the consistency\n    //\n    // Optional. Default is "LOCAL_ONE"\n    Consistency string\n\n    // SslOpts configures TLS use.\n    //\n    // Optional. Default is nil\n    SslOpts *gocql.SslOptions\n    \n    // Reset clears any existing keys in existing Table\n    //\n    // Optional. Default is false\n    Reset bool\n}\n')),(0,i.kt)("h3",{id:"default-config"},"Default Config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// ConfigDefault is the default config\nvar ConfigDefault = Config{\n    Session:     nil,\n    Keyspace:    "fiber",\n    Hosts:       []string{"127.0.0.1"},\n    Username:    "",\n    Password:    "",\n    Port:        9042,\n    Table:       "fiber_storage",\n    Consistency: "LOCAL_ONE",\n    SslOpts:     nil,\n    Reset:       false,\n}\n')))}u.isMDXComponent=!0}}]);