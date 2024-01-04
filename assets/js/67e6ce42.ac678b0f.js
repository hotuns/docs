"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[70095],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(r),m=o,d=f["".concat(p,".").concat(m)]||f[m]||u[m]||i;return r?n.createElement(d,a(a({ref:t},c),{},{components:r})):n.createElement(d,a({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[f]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},23215:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const i={id:"otelfiber-example"},a="Example",l={unversionedId:"otelfiber/example/otelfiber-example",id:"version-fibersentry_v1.x.x/otelfiber/example/otelfiber-example",title:"Example",description:"An HTTP server using gofiber fiber and instrumentation. The server has a",source:"@site/contrib_versioned_docs/version-fibersentry_v1.x.x/otelfiber/example/README.md",sourceDirName:"otelfiber/example",slug:"/otelfiber/example/",permalink:"/contrib/fibersentry_v1.x.x/otelfiber/example/",draft:!1,editUrl:"https://github.com/gofiber/contrib/edit/main/otelfiber/example/README.md",tags:[],version:"fibersentry_v1.x.x",lastUpdatedAt:1704366986,formattedLastUpdatedAt:"Jan 4, 2024",frontMatter:{id:"otelfiber-example"},sidebar:"tutorialSidebar",previous:{title:"Otelfiber",permalink:"/contrib/fibersentry_v1.x.x/otelfiber/"},next:{title:"Paseto",permalink:"/contrib/fibersentry_v1.x.x/paseto/"}},p={},s=[],c={toc:s},f="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(f,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"example"},"Example"),(0,o.kt)("p",null,"An HTTP server using gofiber fiber and instrumentation. The server has a\n",(0,o.kt)("inlineCode",{parentName:"p"},"/users/:id")," endpoint. The server generates span information to\n",(0,o.kt)("inlineCode",{parentName:"p"},"stdout"),"."),(0,o.kt)("p",null,"These instructions expect you have\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/"},"docker-compose")," installed."),(0,o.kt)("p",null,"Bring up the ",(0,o.kt)("inlineCode",{parentName:"p"},"fiber-server")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"fiber-client")," services to run the\nexample:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker-compose up --detach fiber-server fiber-client\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"fiber-client")," service sends just one HTTP request to ",(0,o.kt)("inlineCode",{parentName:"p"},"fiber-server"),"\nand then exits. View the span generated by ",(0,o.kt)("inlineCode",{parentName:"p"},"fiber-server")," in the logs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker-compose logs fiber-server\n")),(0,o.kt)("p",null,"Shut down the services when you are finished with the example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker-compose down\n")))}u.isMDXComponent=!0}}]);