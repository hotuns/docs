"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[42017],{42782:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(74848),a=r(28453);const o={id:"constants",title:"\ud83d\udccb Constants",description:"Some constants for Fiber.",sidebar_position:8},s=void 0,i={id:"api/constants",title:"\ud83d\udccb Constants",description:"Some constants for Fiber.",source:"@site/docs/core/api/constants.md",sourceDirName:"api",slug:"/api/constants",permalink:"/next/api/constants",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/fiber/edit/main/docs/api/constants.md",tags:[],version:"current",lastUpdatedAt:1720439921e3,sidebarPosition:8,frontMatter:{id:"constants",title:"\ud83d\udccb Constants",description:"Some constants for Fiber.",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udfa3 Hooks",permalink:"/next/api/hooks"},next:{title:"\ud83e\uddec Middleware",permalink:"/next/category/-middleware"}},d={},c=[{value:"HTTP methods were copied from net/http.",id:"http-methods-were-copied-from-nethttp",level:3},{value:"MIME types that are commonly used",id:"mime-types-that-are-commonly-used",level:3},{value:"Errors",id:"errors",level:3}];function u(e){const t={code:"code",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h3,{id:"http-methods-were-copied-from-nethttp",children:"HTTP methods were copied from net/http."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'const (\n    MethodGet     = "GET"     // RFC 7231, 4.3.1\n    MethodHead    = "HEAD"    // RFC 7231, 4.3.2\n    MethodPost    = "POST"    // RFC 7231, 4.3.3\n    MethodPut     = "PUT"     // RFC 7231, 4.3.4\n    MethodPatch   = "PATCH"   // RFC 5789\n    MethodDelete  = "DELETE"  // RFC 7231, 4.3.5\n    MethodConnect = "CONNECT" // RFC 7231, 4.3.6\n    MethodOptions = "OPTIONS" // RFC 7231, 4.3.7\n    MethodTrace   = "TRACE"   // RFC 7231, 4.3.8\n    methodUse     = "USE"\n)\n'})}),"\n",(0,n.jsx)(t.h3,{id:"mime-types-that-are-commonly-used",children:"MIME types that are commonly used"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'const (\n\tMIMETextXML         = "text/xml"\n\tMIMETextHTML        = "text/html"\n\tMIMETextPlain       = "text/plain"\n\tMIMETextJavaScript  = "text/javascript"\n\tMIMETextCSS         = "text/css"\n\tMIMEApplicationXML  = "application/xml"\n    MIMEApplicationJSON = "application/json"\n\tMIMEApplicationJavaScript = "application/javascript"\n\tMIMEApplicationForm       = "application/x-www-form-urlencoded"\n\tMIMEOctetStream           = "application/octet-stream"\n\tMIMEMultipartForm         = "multipart/form-data"\n\n\tMIMETextXMLCharsetUTF8         = "text/xml; charset=utf-8"\n\tMIMETextHTMLCharsetUTF8        = "text/html; charset=utf-8"\n\tMIMETextPlainCharsetUTF8       = "text/plain; charset=utf-8"\n\tMIMETextJavaScriptCharsetUTF8  = "text/javascript; charset=utf-8"\n\tMIMETextCSSCharsetUTF8         = "text/css; charset=utf-8"\n\tMIMEApplicationXMLCharsetUTF8  = "application/xml; charset=utf-8"\n\tMIMEApplicationJSONCharsetUTF8 = "application/json; charset=utf-8"\n\tMIMEApplicationJavaScriptCharsetUTF8 = "application/javascript; charset=utf-8"\n)```\n\n### HTTP status codes were copied from net/http.\n\n```go\nconst (\n\tStatusContinue                      = 100 // RFC 7231, 6.2.1\n\tStatusSwitchingProtocols            = 101 // RFC 7231, 6.2.2\n\tStatusProcessing                    = 102 // RFC 2518, 10.1\n\tStatusEarlyHints                    = 103 // RFC 8297\n\tStatusOK                            = 200 // RFC 7231, 6.3.1\n\tStatusCreated                       = 201 // RFC 7231, 6.3.2\n\tStatusAccepted                      = 202 // RFC 7231, 6.3.3\n\tStatusNonAuthoritativeInformation   = 203 // RFC 7231, 6.3.4\n\tStatusNoContent                     = 204 // RFC 7231, 6.3.5\n\tStatusResetContent                  = 205 // RFC 7231, 6.3.6\n\tStatusPartialContent                = 206 // RFC 7233, 4.1\n\tStatusMultiStatus                   = 207 // RFC 4918, 11.1\n\tStatusAlreadyReported               = 208 // RFC 5842, 7.1\n\tStatusIMUsed                        = 226 // RFC 3229, 10.4.1\n\tStatusMultipleChoices               = 300 // RFC 7231, 6.4.1\n\tStatusMovedPermanently              = 301 // RFC 7231, 6.4.2\n\tStatusFound                         = 302 // RFC 7231, 6.4.3\n\tStatusSeeOther                      = 303 // RFC 7231, 6.4.4\n\tStatusNotModified                   = 304 // RFC 7232, 4.1\n\tStatusUseProxy                      = 305 // RFC 7231, 6.4.5\n\tStatusTemporaryRedirect             = 307 // RFC 7231, 6.4.7\n\tStatusPermanentRedirect             = 308 // RFC 7538, 3\n\tStatusBadRequest                    = 400 // RFC 7231, 6.5.1\n\tStatusUnauthorized                  = 401 // RFC 7235, 3.1\n\tStatusPaymentRequired               = 402 // RFC 7231, 6.5.2\n\tStatusForbidden                     = 403 // RFC 7231, 6.5.3\n\tStatusNotFound                      = 404 // RFC 7231, 6.5.4\n\tStatusMethodNotAllowed              = 405 // RFC 7231, 6.5.5\n\tStatusNotAcceptable                 = 406 // RFC 7231, 6.5.6\n\tStatusProxyAuthRequired             = 407 // RFC 7235, 3.2\n\tStatusRequestTimeout                = 408 // RFC 7231, 6.5.7\n\tStatusConflict                      = 409 // RFC 7231, 6.5.8\n\tStatusGone                          = 410 // RFC 7231, 6.5.9\n\tStatusLengthRequired                = 411 // RFC 7231, 6.5.10\n\tStatusPreconditionFailed            = 412 // RFC 7232, 4.2\n\tStatusRequestEntityTooLarge         = 413 // RFC 7231, 6.5.11\n\tStatusRequestURITooLong             = 414 // RFC 7231, 6.5.12\n\tStatusUnsupportedMediaType          = 415 // RFC 7231, 6.5.13\n\tStatusRequestedRangeNotSatisfiable  = 416 // RFC 7233, 4.4\n\tStatusExpectationFailed             = 417 // RFC 7231, 6.5.14\n\tStatusTeapot                        = 418 // RFC 7168, 2.3.3\n\tStatusMisdirectedRequest            = 421 // RFC 7540, 9.1.2\n\tStatusUnprocessableEntity           = 422 // RFC 4918, 11.2\n\tStatusLocked                        = 423 // RFC 4918, 11.3\n\tStatusFailedDependency              = 424 // RFC 4918, 11.4\n\tStatusTooEarly                      = 425 // RFC 8470, 5.2.\n\tStatusUpgradeRequired               = 426 // RFC 7231, 6.5.15\n\tStatusPreconditionRequired          = 428 // RFC 6585, 3\n\tStatusTooManyRequests               = 429 // RFC 6585, 4\n\tStatusRequestHeaderFieldsTooLarge   = 431 // RFC 6585, 5\n\tStatusUnavailableForLegalReasons    = 451 // RFC 7725, 3\n\tStatusInternalServerError           = 500 // RFC 7231, 6.6.1\n\tStatusNotImplemented                = 501 // RFC 7231, 6.6.2\n\tStatusBadGateway                    = 502 // RFC 7231, 6.6.3\n\tStatusServiceUnavailable            = 503 // RFC 7231, 6.6.4\n\tStatusGatewayTimeout                = 504 // RFC 7231, 6.6.5\n\tStatusHTTPVersionNotSupported       = 505 // RFC 7231, 6.6.6\n\tStatusVariantAlsoNegotiates         = 506 // RFC 2295, 8.1\n\tStatusInsufficientStorage           = 507 // RFC 4918, 11.5\n\tStatusLoopDetected                  = 508 // RFC 5842, 7.2\n\tStatusNotExtended                   = 510 // RFC 2774, 7\n\tStatusNetworkAuthenticationRequired = 511 // RFC 6585, 6\n)\n'})}),"\n",(0,n.jsx)(t.h3,{id:"errors",children:"Errors"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:"var (\n\tErrBadRequest                    = NewError(StatusBadRequest)                    // RFC 7231, 6.5.1\n\tErrUnauthorized                  = NewError(StatusUnauthorized)                  // RFC 7235, 3.1\n\tErrPaymentRequired               = NewError(StatusPaymentRequired)               // RFC 7231, 6.5.2\n\tErrForbidden                     = NewError(StatusForbidden)                     // RFC 7231, 6.5.3\n\tErrNotFound                      = NewError(StatusNotFound)                      // RFC 7231, 6.5.4\n\tErrMethodNotAllowed              = NewError(StatusMethodNotAllowed)              // RFC 7231, 6.5.5\n\tErrNotAcceptable                 = NewError(StatusNotAcceptable)                 // RFC 7231, 6.5.6\n\tErrProxyAuthRequired             = NewError(StatusProxyAuthRequired)             // RFC 7235, 3.2\n\tErrRequestTimeout                = NewError(StatusRequestTimeout)                // RFC 7231, 6.5.7\n\tErrConflict                      = NewError(StatusConflict)                      // RFC 7231, 6.5.8\n\tErrGone                          = NewError(StatusGone)                          // RFC 7231, 6.5.9\n\tErrLengthRequired                = NewError(StatusLengthRequired)                // RFC 7231, 6.5.10\n\tErrPreconditionFailed            = NewError(StatusPreconditionFailed)            // RFC 7232, 4.2\n\tErrRequestEntityTooLarge         = NewError(StatusRequestEntityTooLarge)         // RFC 7231, 6.5.11\n\tErrRequestURITooLong             = NewError(StatusRequestURITooLong)             // RFC 7231, 6.5.12\n\tErrUnsupportedMediaType          = NewError(StatusUnsupportedMediaType)          // RFC 7231, 6.5.13\n\tErrRequestedRangeNotSatisfiable  = NewError(StatusRequestedRangeNotSatisfiable)  // RFC 7233, 4.4\n\tErrExpectationFailed             = NewError(StatusExpectationFailed)             // RFC 7231, 6.5.14\n\tErrTeapot                        = NewError(StatusTeapot)                        // RFC 7168, 2.3.3\n\tErrMisdirectedRequest            = NewError(StatusMisdirectedRequest)            // RFC 7540, 9.1.2\n\tErrUnprocessableEntity           = NewError(StatusUnprocessableEntity)           // RFC 4918, 11.2\n\tErrLocked                        = NewError(StatusLocked)                        // RFC 4918, 11.3\n\tErrFailedDependency              = NewError(StatusFailedDependency)              // RFC 4918, 11.4\n\tErrTooEarly                      = NewError(StatusTooEarly)                      // RFC 8470, 5.2.\n\tErrUpgradeRequired               = NewError(StatusUpgradeRequired)               // RFC 7231, 6.5.15\n\tErrPreconditionRequired          = NewError(StatusPreconditionRequired)          // RFC 6585, 3\n\tErrTooManyRequests               = NewError(StatusTooManyRequests)               // RFC 6585, 4\n\tErrRequestHeaderFieldsTooLarge   = NewError(StatusRequestHeaderFieldsTooLarge)   // RFC 6585, 5\n\tErrUnavailableForLegalReasons    = NewError(StatusUnavailableForLegalReasons)    // RFC 7725, 3\n\tErrInternalServerError           = NewError(StatusInternalServerError)           // RFC 7231, 6.6.1\n\tErrNotImplemented                = NewError(StatusNotImplemented)                // RFC 7231, 6.6.2\n\tErrBadGateway                    = NewError(StatusBadGateway)                    // RFC 7231, 6.6.3\n\tErrServiceUnavailable            = NewError(StatusServiceUnavailable)            // RFC 7231, 6.6.4\n\tErrGatewayTimeout                = NewError(StatusGatewayTimeout)                // RFC 7231, 6.6.5\n\tErrHTTPVersionNotSupported       = NewError(StatusHTTPVersionNotSupported)       // RFC 7231, 6.6.6\n\tErrVariantAlsoNegotiates         = NewError(StatusVariantAlsoNegotiates)         // RFC 2295, 8.1\n\tErrInsufficientStorage           = NewError(StatusInsufficientStorage)           // RFC 4918, 11.5\n\tErrLoopDetected                  = NewError(StatusLoopDetected)                  // RFC 5842, 7.2\n\tErrNotExtended                   = NewError(StatusNotExtended)                   // RFC 2774, 7\n\tErrNetworkAuthenticationRequired = NewError(StatusNetworkAuthenticationRequired) // RFC 6585, 6\n)\n"})}),"\n",(0,n.jsx)(t.p,{children:"HTTP Headers were copied from net/http."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'const (\n\tHeaderAuthorization                   = "Authorization"\n\tHeaderProxyAuthenticate               = "Proxy-Authenticate"\n\tHeaderProxyAuthorization              = "Proxy-Authorization"\n\tHeaderWWWAuthenticate                 = "WWW-Authenticate"\n\tHeaderAge                             = "Age"\n\tHeaderCacheControl                    = "Cache-Control"\n\tHeaderClearSiteData                   = "Clear-Site-Data"\n\tHeaderExpires                         = "Expires"\n\tHeaderPragma                          = "Pragma"\n\tHeaderWarning                         = "Warning"\n\tHeaderAcceptCH                        = "Accept-CH"\n\tHeaderAcceptCHLifetime                = "Accept-CH-Lifetime"\n\tHeaderContentDPR                      = "Content-DPR"\n\tHeaderDPR                             = "DPR"\n\tHeaderEarlyData                       = "Early-Data"\n\tHeaderSaveData                        = "Save-Data"\n\tHeaderViewportWidth                   = "Viewport-Width"\n\tHeaderWidth                           = "Width"\n\tHeaderETag                            = "ETag"\n\tHeaderIfMatch                         = "If-Match"\n\tHeaderIfModifiedSince                 = "If-Modified-Since"\n\tHeaderIfNoneMatch                     = "If-None-Match"\n\tHeaderIfUnmodifiedSince               = "If-Unmodified-Since"\n\tHeaderLastModified                    = "Last-Modified"\n\tHeaderVary                            = "Vary"\n\tHeaderConnection                      = "Connection"\n\tHeaderKeepAlive                       = "Keep-Alive"\n\tHeaderAccept                          = "Accept"\n\tHeaderAcceptCharset                   = "Accept-Charset"\n\tHeaderAcceptEncoding                  = "Accept-Encoding"\n\tHeaderAcceptLanguage                  = "Accept-Language"\n\tHeaderCookie                          = "Cookie"\n\tHeaderExpect                          = "Expect"\n\tHeaderMaxForwards                     = "Max-Forwards"\n\tHeaderSetCookie                       = "Set-Cookie"\n\tHeaderAccessControlAllowCredentials   = "Access-Control-Allow-Credentials"\n\tHeaderAccessControlAllowHeaders       = "Access-Control-Allow-Headers"\n\tHeaderAccessControlAllowMethods       = "Access-Control-Allow-Methods"\n\tHeaderAccessControlAllowOrigin        = "Access-Control-Allow-Origin"\n\tHeaderAccessControlExposeHeaders      = "Access-Control-Expose-Headers"\n\tHeaderAccessControlMaxAge             = "Access-Control-Max-Age"\n\tHeaderAccessControlRequestHeaders     = "Access-Control-Request-Headers"\n\tHeaderAccessControlRequestMethod      = "Access-Control-Request-Method"\n\tHeaderOrigin                          = "Origin"\n\tHeaderTimingAllowOrigin               = "Timing-Allow-Origin"\n\tHeaderXPermittedCrossDomainPolicies   = "X-Permitted-Cross-Domain-Policies"\n\tHeaderDNT                             = "DNT"\n\tHeaderTk                              = "Tk"\n\tHeaderContentDisposition              = "Content-Disposition"\n\tHeaderContentEncoding                 = "Content-Encoding"\n\tHeaderContentLanguage                 = "Content-Language"\n\tHeaderContentLength                   = "Content-Length"\n\tHeaderContentLocation                 = "Content-Location"\n\tHeaderContentType                     = "Content-Type"\n\tHeaderForwarded                       = "Forwarded"\n\tHeaderVia                             = "Via"\n\tHeaderXForwardedFor                   = "X-Forwarded-For"\n\tHeaderXForwardedHost                  = "X-Forwarded-Host"\n\tHeaderXForwardedProto                 = "X-Forwarded-Proto"\n\tHeaderXForwardedProtocol              = "X-Forwarded-Protocol"\n\tHeaderXForwardedSsl                   = "X-Forwarded-Ssl"\n\tHeaderXUrlScheme                      = "X-Url-Scheme"\n\tHeaderLocation                        = "Location"\n\tHeaderFrom                            = "From"\n\tHeaderHost                            = "Host"\n\tHeaderReferer                         = "Referer"\n\tHeaderReferrerPolicy                  = "Referrer-Policy"\n\tHeaderUserAgent                       = "User-Agent"\n\tHeaderAllow                           = "Allow"\n\tHeaderServer                          = "Server"\n\tHeaderAcceptRanges                    = "Accept-Ranges"\n\tHeaderContentRange                    = "Content-Range"\n\tHeaderIfRange                         = "If-Range"\n\tHeaderRange                           = "Range"\n\tHeaderContentSecurityPolicy           = "Content-Security-Policy"\n\tHeaderContentSecurityPolicyReportOnly = "Content-Security-Policy-Report-Only"\n\tHeaderCrossOriginResourcePolicy       = "Cross-Origin-Resource-Policy"\n\tHeaderExpectCT                        = "Expect-CT"\n\tHeaderFeaturePolicy                   = "Feature-Policy"\n\tHeaderPublicKeyPins                   = "Public-Key-Pins"\n\tHeaderPublicKeyPinsReportOnly         = "Public-Key-Pins-Report-Only"\n\tHeaderStrictTransportSecurity         = "Strict-Transport-Security"\n\tHeaderUpgradeInsecureRequests         = "Upgrade-Insecure-Requests"\n\tHeaderXContentTypeOptions             = "X-Content-Type-Options"\n\tHeaderXDownloadOptions                = "X-Download-Options"\n\tHeaderXFrameOptions                   = "X-Frame-Options"\n\tHeaderXPoweredBy                      = "X-Powered-By"\n\tHeaderXXSSProtection                  = "X-XSS-Protection"\n\tHeaderLastEventID                     = "Last-Event-ID"\n\tHeaderNEL                             = "NEL"\n\tHeaderPingFrom                        = "Ping-From"\n\tHeaderPingTo                          = "Ping-To"\n\tHeaderReportTo                        = "Report-To"\n\tHeaderTE                              = "TE"\n\tHeaderTrailer                         = "Trailer"\n\tHeaderTransferEncoding                = "Transfer-Encoding"\n\tHeaderSecWebSocketAccept              = "Sec-WebSocket-Accept"\n\tHeaderSecWebSocketExtensions          = "Sec-WebSocket-Extensions"\n\tHeaderSecWebSocketKey                 = "Sec-WebSocket-Key"\n\tHeaderSecWebSocketProtocol            = "Sec-WebSocket-Protocol"\n\tHeaderSecWebSocketVersion             = "Sec-WebSocket-Version"\n\tHeaderAcceptPatch                     = "Accept-Patch"\n\tHeaderAcceptPushPolicy                = "Accept-Push-Policy"\n\tHeaderAcceptSignature                 = "Accept-Signature"\n\tHeaderAltSvc                          = "Alt-Svc"\n\tHeaderDate                            = "Date"\n\tHeaderIndex                           = "Index"\n\tHeaderLargeAllocation                 = "Large-Allocation"\n\tHeaderLink                            = "Link"\n\tHeaderPushPolicy                      = "Push-Policy"\n\tHeaderRetryAfter                      = "Retry-After"\n\tHeaderServerTiming                    = "Server-Timing"\n\tHeaderSignature                       = "Signature"\n\tHeaderSignedHeaders                   = "Signed-Headers"\n\tHeaderSourceMap                       = "SourceMap"\n\tHeaderUpgrade                         = "Upgrade"\n\tHeaderXDNSPrefetchControl             = "X-DNS-Prefetch-Control"\n\tHeaderXPingback                       = "X-Pingback"\n\tHeaderXRequestID                      = "X-Request-ID"\n\tHeaderXRequestedWith                  = "X-Requested-With"\n\tHeaderXRobotsTag                      = "X-Robots-Tag"\n\tHeaderXUACompatible                   = "X-UA-Compatible"\n)\n'})})]})}function l(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>i});var n=r(96540);const a={},o=n.createContext(a);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);