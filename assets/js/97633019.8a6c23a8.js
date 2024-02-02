"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[29989],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(r),m=a,g=c["".concat(p,".").concat(m)]||c[m]||f[m]||i;return r?n.createElement(g,o(o({ref:t},d),{},{components:r})):n.createElement(g,o({ref:t},d))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},90279:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={id:"otelfiber"},o="Otelfiber",l={unversionedId:"otelfiber/otelfiber",id:"version-swagger_v1.x.x/otelfiber/otelfiber",title:"Otelfiber",description:"Release",source:"@site/contrib_versioned_docs/version-swagger_v1.x.x/otelfiber/README.md",sourceDirName:"otelfiber",slug:"/otelfiber/",permalink:"/contrib/swagger_v1.x.x/otelfiber/",draft:!1,editUrl:"https://github.com/gofiber/contrib/edit/main/otelfiber/README.md",tags:[],version:"swagger_v1.x.x",lastUpdatedAt:1706864260,formattedLastUpdatedAt:"Feb 2, 2024",frontMatter:{id:"otelfiber"},sidebar:"tutorialSidebar",previous:{title:"Opafiber",permalink:"/contrib/swagger_v1.x.x/opafiber/"},next:{title:"Example",permalink:"/contrib/swagger_v1.x.x/otelfiber/example/"}},p={},s=[{value:"Install",id:"install",level:2},{value:"Signature",id:"signature",level:2},{value:"Config",id:"config",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2}],d={toc:s},c="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"otelfiber"},"Otelfiber"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/github/v/tag/gofiber/contrib?filter=otelfiber*",alt:"Release"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://gofiber.io/discord"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})),"\n",(0,a.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Linter/badge.svg",alt:"Linter"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://opentelemetry.io/"},"OpenTelemetry")," support for Fiber."),(0,a.kt)("p",null,"Can be found on ",(0,a.kt)("a",{parentName:"p",href:"https://opentelemetry.io/registry/instrumentation-go-fiber/"},"OpenTelemetry Registry"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note: Requires Go 1.19 and above")),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("p",null,"This middleware supports Fiber v2."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"go get -u github.com/gofiber/contrib/otelfiber/v2\n")),(0,a.kt)("h2",{id:"signature"},"Signature"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"otelfiber.Middleware(opts ...otelfiber.Option) fiber.Handler\n")),(0,a.kt)("h2",{id:"config"},"Config"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Next"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"func(*fiber.Ctx) bool")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Define a function to skip this middleware when returned trueRequired - Rego quer"),(0,a.kt)("td",{parentName:"tr",align:"left"},"nil")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"TracerProvider"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"oteltrace.TracerProvider")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Specifies a tracer provider to use for creating a tracer"),(0,a.kt)("td",{parentName:"tr",align:"left"},"nil - the global tracer provider is used")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"MeterProvider"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"otelmetric.MeterProvider")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Specifies a meter provider to use for reporting"),(0,a.kt)("td",{parentName:"tr",align:"left"},"nil - the global meter provider is used")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Port"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"*int")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Specifies the value to use when setting the ",(0,a.kt)("inlineCode",{parentName:"td"},"net.host.port")," attribute on metrics/spans"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Required: If not default (",(0,a.kt)("inlineCode",{parentName:"td"},"80")," for ",(0,a.kt)("inlineCode",{parentName:"td"},"http"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"443")," for ",(0,a.kt)("inlineCode",{parentName:"td"},"https"),")")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Propagators"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"propagation.TextMapPropagator")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Specifies propagators to use for extracting information from the HTTP requests"),(0,a.kt)("td",{parentName:"tr",align:"left"},"If none are specified, global ones will be used")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ServerName"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"*string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"specifies the value to use when setting the ",(0,a.kt)("inlineCode",{parentName:"td"},"http.server_name")," attribute on metrics/spans"),(0,a.kt)("td",{parentName:"tr",align:"left"},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"SpanNameFormatter"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"func(*fiber.Ctx) string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Takes a function that will be called on every request and the returned string will become the Span Name"),(0,a.kt)("td",{parentName:"tr",align:"left"},"default formatter returns the route pathRaw")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"CustomAttributes"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"func(*fiber.Ctx) []attribute.KeyValue")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Define a function to add custom attributes to the span"),(0,a.kt)("td",{parentName:"tr",align:"left"},"nil")))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Please refer to ",(0,a.kt)("a",{parentName:"p",href:"./example"},"example")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "context"\n    "errors"\n    "log"\n\n    "go.opentelemetry.io/otel/sdk/resource"\n\n    "github.com/gofiber/fiber/v2"\n\n    "github.com/gofiber/contrib/otelfiber"\n    "go.opentelemetry.io/otel"\n    "go.opentelemetry.io/otel/attribute"\n    stdout "go.opentelemetry.io/otel/exporters/stdout/stdouttrace"\n\n    //"go.opentelemetry.io/otel/exporters/jaeger"\n    "go.opentelemetry.io/otel/propagation"\n    sdktrace "go.opentelemetry.io/otel/sdk/trace"\n    semconv "go.opentelemetry.io/otel/semconv/v1.4.0"\n    oteltrace "go.opentelemetry.io/otel/trace"\n)\n\nvar tracer = otel.Tracer("fiber-server")\n\nfunc main() {\n    tp := initTracer()\n    defer func() {\n        if err := tp.Shutdown(context.Background()); err != nil {\n            log.Printf("Error shutting down tracer provider: %v", err)\n        }\n    }()\n\n    app := fiber.New()\n\n    app.Use(otelfiber.Middleware())\n\n    app.Get("/error", func(ctx *fiber.Ctx) error {\n        return errors.New("abc")\n    })\n\n    app.Get("/users/:id", func(c *fiber.Ctx) error {\n        id := c.Params("id")\n        name := getUser(c.UserContext(), id)\n        return c.JSON(fiber.Map{"id": id, name: name})\n    })\n\n    log.Fatal(app.Listen(":3000"))\n}\n\nfunc initTracer() *sdktrace.TracerProvider {\n    exporter, err := stdout.New(stdout.WithPrettyPrint())\n    if err != nil {\n        log.Fatal(err)\n    }\n    tp := sdktrace.NewTracerProvider(\n        sdktrace.WithSampler(sdktrace.AlwaysSample()),\n        sdktrace.WithBatcher(exporter),\n        sdktrace.WithResource(\n            resource.NewWithAttributes(\n                semconv.SchemaURL,\n                semconv.ServiceNameKey.String("my-service"),\n            )),\n    )\n    otel.SetTracerProvider(tp)\n    otel.SetTextMapPropagator(propagation.NewCompositeTextMapPropagator(propagation.TraceContext{}, propagation.Baggage{}))\n    return tp\n}\n\nfunc getUser(ctx context.Context, id string) string {\n    _, span := tracer.Start(ctx, "getUser", oteltrace.WithAttributes(attribute.String("id", id)))\n    defer span.End()\n    if id == "123" {\n        return "otelfiber tester"\n    }\n    return "unknown"\n}\n')))}f.isMDXComponent=!0}}]);