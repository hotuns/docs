"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[6208],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4605:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={id:"monitor",title:"Monitor"},o=void 0,l={unversionedId:"api/middleware/monitor",id:"version-v2.x/api/middleware/monitor",title:"Monitor",description:"Monitor middleware for Fiber that reports server metrics, inspired by express-status-monitor",source:"@site/versioned_docs/version-v2.x/api/middleware/monitor.md",sourceDirName:"api/middleware",slug:"/api/middleware/monitor",permalink:"/api/middleware/monitor",draft:!1,tags:[],version:"v2.x",lastUpdatedBy:"RW",lastUpdatedAt:1688653574,formattedLastUpdatedAt:"Jul 6, 2023",frontMatter:{id:"monitor",title:"Monitor"},sidebar:"tutorialSidebar",previous:{title:"Logger",permalink:"/api/middleware/logger"},next:{title:"Pprof",permalink:"/api/middleware/pprof"}},s={},p=[{value:"Signatures",id:"signatures",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Monitor middleware for ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber")," that reports server metrics, inspired by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/RafalWilinski/express-status-monitor"},"express-status-monitor")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Monitor is still in beta, API might change in the future!")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/nHAtBpJ.gif",alt:null})),(0,a.kt)("h3",{id:"signatures"},"Signatures"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func New() fiber.Handler\n")),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Import the middleware package that is part of the Fiber web framework"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/fiber/v2/middleware/monitor"\n)\n')),(0,a.kt)("p",null,"After you initiate your Fiber app, you can use the following possibilities:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// Initialize default config (Assign the middleware to /metrics)\napp.Get("/metrics", monitor.New())\n\n// Or extend your config for customization\n// Assign the middleware to /metrics\n// and change the Title to `MyService Metrics Page`\napp.Get("/metrics", monitor.New(monitor.Config{Title: "MyService Metrics Page"}))\n')),(0,a.kt)("p",null,"You can also access the API endpoint with\n",(0,a.kt)("inlineCode",{parentName:"p"},'curl -X GET -H "Accept: application/json" http://localhost:3000/metrics')," which returns:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{"pid":{ "cpu":0.4568381746582226, "ram":20516864,   "conns":3 },\n "os": { "cpu":8.759124087593099,  "ram":3997155328, "conns":44,\n    "total_ram":8245489664, "load_avg":0.51 }}\n')),(0,a.kt)("h2",{id:"config"},"Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// Config defines the config for middleware.\ntype Config struct {\n    // Metrics page title\n    //\n    // Optional. Default: "Fiber Monitor"\n    Title string\n\n    // Refresh period\n    //\n    // Optional. Default: 3 seconds\n    Refresh time.Duration\n\n    // Whether the service should expose only the monitoring API.\n    //\n    // Optional. Default: false\n    APIOnly bool\n\n    // Next defines a function to skip this middleware when returned true.\n    //\n    // Optional. Default: nil\n    Next func(c *fiber.Ctx) bool\n\n    // Custom HTML Code to Head Section(Before End)\n    //\n    // Optional. Default: empty\n    CustomHead string\n\n    // FontURL for specify font resource path or URL . also you can use relative path\n    //\n    // Optional. Default: https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap\n    FontURL string\n\n    // ChartJsURL for specify ChartJS library  path or URL . also you can use relative path\n    //\n    // Optional. Default: https://cdn.jsdelivr.net/npm/chart.js@2.9/dist/Chart.bundle.min.js\n    ChartJsURL string\n\n    index string\n}\n')),(0,a.kt)("h2",{id:"default-config"},"Default Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"var ConfigDefault = Config{\n    Title:      defaultTitle,\n    Refresh:    defaultRefresh,\n    FontURL:    defaultFontURL,\n    ChartJsURL: defaultChartJSURL,\n    CustomHead: defaultCustomHead,\n    APIOnly:    false,\n    Next:       nil,\n    index: newIndex(viewBag{\n        defaultTitle,\n        defaultRefresh,\n        defaultFontURL,\n        defaultChartJSURL,\n        defaultCustomHead,\n    }),\n}\n")))}d.isMDXComponent=!0}}]);