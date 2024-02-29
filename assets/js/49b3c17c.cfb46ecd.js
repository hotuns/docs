"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[64668],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||a;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},16074:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={id:"otelfiber-example"},i="Example",p={unversionedId:"otelfiber/example/otelfiber-example",id:"version-paseto_v1.x.x/otelfiber/example/otelfiber-example",title:"Example",description:"An HTTP server using gofiber fiber and instrumentation. The server has a",source:"@site/contrib_versioned_docs/version-paseto_v1.x.x/otelfiber/example/README.md",sourceDirName:"otelfiber/example",slug:"/otelfiber/example/",permalink:"/contrib/paseto_v1.x.x/otelfiber/example/",draft:!1,editUrl:"https://github.com/gofiber/contrib/edit/main/otelfiber/example/README.md",tags:[],version:"paseto_v1.x.x",lastUpdatedAt:1709212463,formattedLastUpdatedAt:"Feb 29, 2024",frontMatter:{id:"otelfiber-example"},sidebar:"tutorialSidebar",previous:{title:"Otelfiber",permalink:"/contrib/paseto_v1.x.x/otelfiber/"},next:{title:"Paseto",permalink:"/contrib/paseto_v1.x.x/paseto/"}},l={},s=[],c={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"example"},"Example"),(0,o.kt)("p",null,"An HTTP server using gofiber fiber and instrumentation. The server has a\n",(0,o.kt)("inlineCode",{parentName:"p"},"/users/:id")," endpoint. The server generates span information to\n",(0,o.kt)("inlineCode",{parentName:"p"},"stdout"),"."),(0,o.kt)("p",null,"These instructions expect you have\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/"},"docker-compose")," installed."),(0,o.kt)("p",null,"Bring up the ",(0,o.kt)("inlineCode",{parentName:"p"},"fiber-server")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"fiber-client")," services to run the\nexample:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker-compose up --detach fiber-server fiber-client\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"fiber-client")," service sends just one HTTP request to ",(0,o.kt)("inlineCode",{parentName:"p"},"fiber-server"),"\nand then exits. View the span generated by ",(0,o.kt)("inlineCode",{parentName:"p"},"fiber-server")," in the logs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker-compose logs fiber-server\n")),(0,o.kt)("p",null,"Shut down the services when you are finished with the example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker-compose down\n")))}m.isMDXComponent=!0}}]);