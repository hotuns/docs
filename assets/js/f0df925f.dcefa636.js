"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[6543],{90544:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=t(74848),s=t(28453);const i={},r="Coherence",c={id:"coherence/README",title:"Coherence",description:"A Coherence storage driver using https://github.com/oracle/coherence-go-client.",source:"@site/storage_versioned_docs/version-pebble_v2.x.x/coherence/README.md",sourceDirName:"coherence",slug:"/coherence/",permalink:"/storage/pebble_v2.x.x/coherence/",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/storage/edit/main/coherence/README.md",tags:[],version:"pebble_v2.x.x",lastUpdatedAt:1717658677e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Bbolt",permalink:"/storage/pebble_v2.x.x/bbolt/"},next:{title:"Couchbase",permalink:"/storage/pebble_v2.x.x/couchbase/"}},a={},l=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"coherence",children:"Coherence"}),"\n",(0,o.jsxs)(n.p,{children:["A Coherence storage driver using ",(0,o.jsx)(n.a,{href:"https://github.com/oracle/coherence-go-client",children:"https://github.com/oracle/coherence-go-client"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#signatures",children:"Signatures"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#installation",children:"Installation"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#examples",children:"Examples"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#config",children:"Config"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#default-config",children:"Default Config"})}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"signatures",children:"Signatures"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"func New(config ...Config) (*Storage, error)\nfunc (s *Storage) Get(key string) ([]byte, error)\nfunc (s *Storage) Set(key string, val []byte, exp time.Duration) error\nfunc (s *Storage) Delete(key string) error\nfunc (s *Storage) Reset() error\nfunc (s *Storage) Close() error\nfunc (s *Storage) Conn() *Session\n"})}),"\n",(0,o.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(n.p,{children:"Coherence is supported on Go versions 1.19 and above:"}),"\n",(0,o.jsx)(n.p,{children:"Install the coherence implementation:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"go get github.com/gofiber/storage/coherence\n"})}),"\n",(0,o.jsx)(n.p,{children:"Before running or testing this implementation, you must ensure a Coherence cluster is available.\nFor local development, we recommend using the Coherence CE Docker image; it contains everything\nnecessary for the client to operate correctly."}),"\n",(0,o.jsx)(n.p,{children:"To start a Coherence cluster using Docker, issue the following:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker run -d -p 1408:1408 ghcr.io/oracle/coherence-ce:22.06.7\n"})}),"\n",(0,o.jsxs)(n.p,{children:["See the documentation ",(0,o.jsx)(n.a,{href:"https://pkg.go.dev/github.com/oracle/coherence-go-client/coherence#hdr-Obtaining_a_Session",children:"here"})," on connection options\nwhen creating a Coherence session."]}),"\n",(0,o.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(n.p,{children:"Import the storage package."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'import "github.com/gofiber/storage/coherence"\n'})}),"\n",(0,o.jsx)(n.p,{children:"You can use the following possibilities to create a storage:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'// Initialize default config, to connect to localhost:1408 using plain text\nstore, err := coherence.New()\n\n// Initialize custom config to connect to a different host/port and use plain text and expiry of 5 minutes.\nstore, err := coherence.New(coherence.Config{\n    Address: "my-host:myport",\n    Expiration: time.Duration(300) * time.Second, // 5 minutes\n})\n\n// Initialize to connect with TLS enabled with your own tls.Config\ntlsConfig := config := &tls.Config{...}\n\nstore, err := coherence.New(coherence.Config{\n    Address: "my-host:myport",\n    TLSConfig: tlsConfig,\n})\n'})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Note: If you create two stores using ",(0,o.jsx)(n.code,{children:"coherence.New()"})," they will effectivity be identical.\nIf you wish to have two separate stores, then you can use:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'store1, err := coherence.New(Config{ScopeName: "scope1"})\nstore2, err := coherence.New(Config{ScopeName: "scope2"})\n'})}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Near Caches"})}),"\n",(0,o.jsx)(n.p,{children:"The latest version of the Coherence Go client introduces near cache support\nto cache frequently accessed data in the Go client to avoid sending requests across the network."}),"\n",(0,o.jsxs)(n.p,{children:["This is particularly useful if you are using sticky sessions via a LBR as this will cache\nthe session in the Go process and the ",(0,o.jsx)(n.code,{children:"Get()"})," operations will be much quicker."]}),"\n",(0,o.jsx)(n.p,{children:"When the session is expired on the server it will automatically be removed from the near cache."}),"\n",(0,o.jsxs)(n.p,{children:["To enable this for you session, you can set the ",(0,o.jsx)(n.code,{children:"NearCacheTimeout"})," to a duration less than the expiry."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'// Initialize default config, to connect to localhost:1408 using plain text\nstore, err := coherence.New()\n\n// Use plain text with default expiry of 5 minutes, and a near cache expiry of 2 minutes\nstore, err := coherence.New(coherence.Config{\n    Address: "my-host:myport",\n    Expiration: time.Duration(300) * time.Second,       // 5 minutes\n    NearCacheTimeout: time.Duration(120) * time.Second, // 2 minutes\n})\n'})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Note: You must ensure your near cache timeout is less that the session timeout."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"config",children:"Config"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'// Config defines configuration options for Coherence connection.\ntype Config struct {\n    // Address to connect to, defaults to "localhost:1408"\n    Address string\n\n    // Timeout is the default session timeout to connect to Coherence, defaults to 30s\n    Timeout time.Duration\n\t\n    // ScopeName defines a scope allowing for multiple storage sessions\n    ScopeName string\n\n    // Reset indicates if the store should be reset after being created\n    Reset bool\n\n    // TLSConfig specifies tls.Config to use when connecting, if nil then plain text is used \n    TLSConfig *tls.Config\n\n    // NearCacheTimeout defines the timeout for a near cache. Is this is set, then a near cache\n    // with the timeout is created. Note: this must be less than the session timeout or any timeout you specify \n    // when using Set().\n    NearCacheTimeout time.Duration\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"default-config",children:"Default Config"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'var DefaultConfig = Config{\n    Address:   "localhost:1408",\n    Timeout:   time.Duration(120) * time.Seconds,\n    ScopeName: defaultScopeName,\n    Reset:     false,\n    NearCacheTimeout: time.Duration(60) * time.Seconds,\n}\n'})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var o=t(96540);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);