"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[15404],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),g=r,m=p["".concat(c,".").concat(g)]||p[g]||h[g]||a;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},24417:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const a={},i="Coherence",s={unversionedId:"coherence/README",id:"version-bbolt_v2.x.x/coherence/README",title:"Coherence",description:"A Coherence storage driver using https://github.com/oracle/coherence-go-client.",source:"@site/storage_versioned_docs/version-bbolt_v2.x.x/coherence/README.md",sourceDirName:"coherence",slug:"/coherence/",permalink:"/storage/bbolt_v2.x.x/coherence/",draft:!1,editUrl:"https://github.com/gofiber/storage/edit/main/coherence/README.md",tags:[],version:"bbolt_v2.x.x",lastUpdatedAt:1713347896,formattedLastUpdatedAt:"Apr 17, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Bbolt",permalink:"/storage/bbolt_v2.x.x/bbolt/"},next:{title:"Couchbase",permalink:"/storage/bbolt_v2.x.x/couchbase/"}},c={},l=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}],u={toc:l},p="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"coherence"},"Coherence"),(0,r.kt)("p",null,"A Coherence storage driver using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oracle/coherence-go-client"},"https://github.com/oracle/coherence-go-client"),"."),(0,r.kt)("h3",{id:"table-of-contents"},"Table of Contents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#signatures"},"Signatures")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#installation"},"Installation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#examples"},"Examples")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#config"},"Config")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#default-config"},"Default Config"))),(0,r.kt)("h3",{id:"signatures"},"Signatures"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) (*Storage, error)\nfunc (s *Storage) Get(key string) ([]byte, error)\nfunc (s *Storage) Set(key string, val []byte, exp time.Duration) error\nfunc (s *Storage) Delete(key string) error\nfunc (s *Storage) Reset() error\nfunc (s *Storage) Close() error\nfunc (s *Storage) Conn() *Session\n")),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Coherence is supported on Go versions 1.19 and above:"),(0,r.kt)("p",null,"Install the coherence implementation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/gofiber/storage/coherence\n")),(0,r.kt)("p",null,"Before running or testing this implementation, you must ensure a Coherence cluster is available.\nFor local development, we recommend using the Coherence CE Docker image; it contains everything\nnecessary for the client to operate correctly."),(0,r.kt)("p",null,"To start a Coherence cluster using Docker, issue the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d -p 1408:1408 ghcr.io/oracle/coherence-ce:22.06.7\n")),(0,r.kt)("p",null,"See the documentation ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/oracle/coherence-go-client/coherence#hdr-Obtaining_a_Session"},"here")," on connection options\nwhen creating a Coherence session."),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Import the storage package."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/gofiber/storage/coherence"\n')),(0,r.kt)("p",null,"You can use the following possibilities to create a storage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// Initialize default config, to connect to localhost:1408 using plain text\nstore, err := coherence.New()\n\n// Initialize custom config to connect to a different host/port and use plain text and expiry of 5 minutes.\nstore, err := coherence.New(coherence.Config{\n    Address: "my-host:myport",\n    Expiration: time.Duration(300) * time.Second, // 5 minutes\n})\n\n// Initialize to connect with TLS enabled with your own tls.Config\ntlsConfig := config := &tls.Config{...}\n\nstore, err := coherence.New(coherence.Config{\n    Address: "my-host:myport",\n    TLSConfig: tlsConfig,\n})\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: If you create two stores using ",(0,r.kt)("inlineCode",{parentName:"p"},"coherence.New()")," they will effectivity be identical.\nIf you wish to have two separate stores, then you can use:"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},'store1, err := coherence.New(Config{ScopeName: "scope1"})\nstore2, err := coherence.New(Config{ScopeName: "scope2"})\n'))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Near Caches")),(0,r.kt)("p",null,"The latest version of the Coherence Go client introduces near cache support\nto cache frequently accessed data in the Go client to avoid sending requests across the network."),(0,r.kt)("p",null,"This is particularly useful if you are using sticky sessions via a LBR as this will cache\nthe session in the Go process and the ",(0,r.kt)("inlineCode",{parentName:"p"},"Get()")," operations will be much quicker."),(0,r.kt)("p",null,"When the session is expired on the server it will automatically be removed from the near cache."),(0,r.kt)("p",null,"To enable this for you session, you can set the ",(0,r.kt)("inlineCode",{parentName:"p"},"NearCacheTimeout")," to a duration less than the expiry."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// Initialize default config, to connect to localhost:1408 using plain text\nstore, err := coherence.New()\n\n// Use plain text with default expiry of 5 minutes, and a near cache expiry of 2 minutes\nstore, err := coherence.New(coherence.Config{\n    Address: "my-host:myport",\n    Expiration: time.Duration(300) * time.Second,       // 5 minutes\n    NearCacheTimeout: time.Duration(120) * time.Second, // 2 minutes\n})\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: You must ensure your near cache timeout is less that the session timeout.")),(0,r.kt)("h3",{id:"config"},"Config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// Config defines configuration options for Coherence connection.\ntype Config struct {\n    // Address to connect to, defaults to "localhost:1408"\n    Address string\n\n    // Timeout is the default session timeout to connect to Coherence, defaults to 30s\n    Timeout time.Duration\n    \n    // ScopeName defines a scope allowing for multiple storage sessions\n    ScopeName string\n\n    // Reset indicates if the store should be reset after being created\n    Reset bool\n\n    // TLSConfig specifies tls.Config to use when connecting, if nil then plain text is used \n    TLSConfig *tls.Config\n\n    // NearCacheTimeout defines the timeout for a near cache. Is this is set, then a near cache\n    // with the timeout is created. Note: this must be less than the session timeout or any timeout you specify \n    // when using Set().\n    NearCacheTimeout time.Duration\n}\n')),(0,r.kt)("h3",{id:"default-config"},"Default Config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'var DefaultConfig = Config{\n    Address:   "localhost:1408",\n    Timeout:   time.Duration(120) * time.Seconds,\n    ScopeName: defaultScopeName,\n    Reset:     false,\n    NearCacheTimeout: time.Duration(60) * time.Seconds,\n}\n')))}h.isMDXComponent=!0}}]);