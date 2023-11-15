"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[9817,27918],{1310:(e,t,n)=>{n.d(t,{Z:()=>E});var a=n(87462),r=n(67294),l=n(86010),i=n(35281),s=n(53438),c=n(48596),o=n(39960),m=n(95999),d=n(44996);function u(e){return r.createElement("svg",(0,a.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const h={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function b(){const e=(0,d.Z)("/");return r.createElement("li",{className:"breadcrumbs__item"},r.createElement(o.Z,{"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},r.createElement(u,{className:h.breadcrumbHomeIcon})))}const v={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function p(e){let{children:t,href:n,isLast:a}=e;const l="breadcrumbs__link";return a?r.createElement("span",{className:l,itemProp:"name"},t):n?r.createElement(o.Z,{className:l,href:n,itemProp:"item"},r.createElement("span",{itemProp:"name"},t)):r.createElement("span",{className:l},t)}function g(e){let{children:t,active:n,index:i,addMicrodata:s}=e;return r.createElement("li",(0,a.Z)({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,r.createElement("meta",{itemProp:"position",content:String(i+1)}))}function E(){const e=(0,s.s1)(),t=(0,c.Ns)();return e?r.createElement("nav",{className:(0,l.Z)(i.k.docs.docBreadcrumbs,v.breadcrumbsContainer),"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},r.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&r.createElement(b,null),e.map(((t,n)=>{const a=n===e.length-1;return r.createElement(g,{key:n,active:a,index:n,addMicrodata:!!t.href},r.createElement(p,{href:t.href,isLast:a},t.label))})))):null}},63676:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var a=n(67294),r=n(1944),l=n(53438),i=n(44996),s=n(86010),c=n(39960),o=n(13919),m=n(95999);const d={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F"};function u(e){return/^\p{So}/u.test(e)}function h(e){let{href:t,children:n}=e;return a.createElement(c.Z,{href:t,className:(0,s.Z)("card padding--lg",d.cardContainer)},n)}function b(e){let{href:t,icon:n,title:r,description:l}=e;return a.createElement(h,{href:t},a.createElement("h2",{className:(0,s.Z)("text--truncate",d.cardTitle),title:r},""!==n?n+" ":"",r),l&&a.createElement("p",{className:(0,s.Z)("text--truncate",d.cardDescription),title:l},l))}function v(e){let{item:t}=e;const n=(0,l.Wl)(t);return n?a.createElement(b,{href:n,icon:u(t.label)?"":"\ud83d\uddc3\ufe0f",title:t.label,description:(0,m.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const n=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,l.xz)(t.docId??void 0);return a.createElement(b,{href:t.href,icon:u(t.label)?"":n,title:t.label,description:null==r?void 0:r.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(p,{item:t});case"category":return a.createElement(v,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function E(e){let{className:t}=e;const n=(0,l.jA)();return a.createElement(f,{items:n.items,className:t})}function f(e){const{items:t,className:n}=e;if(!t)return a.createElement(E,e);const r=(0,l.MN)(t);return a.createElement("section",{className:(0,s.Z)("row",n)},r.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(g,{item:e})))))}var N=n(4966),Z=n(19408),k=n(44364),_=n(1310),L=n(92503);const T={generatedIndexPage:"generatedIndexPage_vN6x",list:"list_eTzJ",title:"title_kItE"};function x(e){let{categoryGeneratedIndex:t}=e;return a.createElement(r.d,{title:t.title,description:t.description,keywords:t.keywords,image:(0,i.Z)(t.image)})}function I(e){let{categoryGeneratedIndex:t}=e;const n=(0,l.jA)();return a.createElement("div",{className:T.generatedIndexPage},a.createElement(Z.Z,null),a.createElement(_.Z,null),a.createElement(k.Z,null),a.createElement("header",null,a.createElement(L.Z,{as:"h1",className:T.title},t.title),t.description&&a.createElement("p",null,t.description)),a.createElement("article",{className:"margin-top--lg"},a.createElement(f,{items:n.items,className:T.list})),a.createElement("footer",{className:"margin-top--lg"},a.createElement(N.Z,{previous:t.navigation.previous,next:t.navigation.next})))}function y(e){return a.createElement(a.Fragment,null,a.createElement(x,e),a.createElement(I,e))}},4966:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(87462),r=n(67294),l=n(95999),i=n(86010),s=n(39960);function c(e){const{permalink:t,title:n,subLabel:a,isNext:l}=e;return r.createElement(s.Z,{className:(0,i.Z)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},a&&r.createElement("div",{className:"pagination-nav__sublabel"},a),r.createElement("div",{className:"pagination-nav__label"},n))}function o(e){const{previous:t,next:n}=e;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,l.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"})},t&&r.createElement(c,(0,a.Z)({},t,{subLabel:r.createElement(l.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&r.createElement(c,(0,a.Z)({},n,{subLabel:r.createElement(l.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},44364:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(67294),r=n(86010),l=n(95999),i=n(35281),s=n(74477);function c(e){let{className:t}=e;const n=(0,s.E)();return n.badge?a.createElement("span",{className:(0,r.Z)(t,i.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(l.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}},23120:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(67294),r=n(86010),l=n(52263),i=n(39960),s=n(95999),c=n(80143),o=n(35281),m=n(60373),d=n(74477);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function h(e){const t=u[e.versionMetadata.banner];return a.createElement(t,e)}function b(e){let{versionLabel:t,to:n,onClick:r}=e;return a.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(i.Z,{to:n,onClick:r},a.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function v(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:i}}=(0,l.Z)(),{pluginId:s}=(0,c.gA)({failfast:!0}),{savePreferredVersionName:d}=(0,m.J)(s),{latestDocSuggestion:u,latestVersionSuggestion:v}=(0,c.Jo)(s),p=u??(g=v).docs.find((e=>e.id===g.mainDocId));var g;return a.createElement("div",{className:(0,r.Z)(t,o.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(h,{siteTitle:i,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(b,{versionLabel:v.label,to:p.path,onClick:()=>d(v.name)})))}function p(e){let{className:t}=e;const n=(0,d.E)();return n.banner?a.createElement(v,{className:t,versionMetadata:n}):null}},92503:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),l=n(86010),i=n(95999),s=n(86668),c=n(39960);const o={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"};function m(e){let{as:t,id:n,...m}=e;const{navbar:{hideOnScroll:d}}=(0,s.L)();if("h1"===t||!n)return r.createElement(t,(0,a.Z)({},m,{id:void 0}));const u=(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof m.children?m.children:n});return r.createElement(t,(0,a.Z)({},m,{className:(0,l.Z)("anchor",d?o.anchorWithHideOnScrollNavbar:o.anchorWithStickyNavbar,m.className),id:n}),m.children,r.createElement(c.Z,{className:"hash-link",to:`#${n}`,"aria-label":u,title:u},"\u200b"))}},19408:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(67294),r=n(86010),l=n(23120),i=n(35281),s=n(80143),c=n(52263);const o=["contrib","storage","template"];function m(e){var t,n,m,d,u;const h=(0,s.gA)(),b=(0,s.Iw)(h.pluginId),v=null==b||null==(t=b.activeVersion)?void 0:t.name,p=null==b||null==(n=b.activeVersion)||null==(m=n.path)||null==(d=m.split("/"))||null==(u=d.filter(Boolean))?void 0:u[0];if("default"!==(null==h?void 0:h.pluginId)&&o.includes(p)){var g,E,f,N;const e=null==b||null==(g=b.activeDoc)||null==(E=g.id)||null==(f=E.split("/"))?void 0:f[0],t=null==(N=Object.keys(null==b?void 0:b.alternateDocVersions))?void 0:N.find((t=>0===t.indexOf(e)));if(t&&t!==v){var Z,k,_,L,T;const n=null==v||null==(Z=v.split("_"))?void 0:Z[0],l=null==b||null==(k=b.activeVersion)||null==(_=k.docs)?void 0:_.find((e=>e.id===`${n}/${n}`)),s=(null==(L=(0,c.Z)())||null==(T=L.siteConfig)?void 0:T.title)||"Fiber";return a.createElement("div",{className:(0,r.Z)(i.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,"This is unreleased documentation for ",s," Next ",a.createElement("b",null,e)," version."),a.createElement("div",{className:"margin-top--md"},"For up-to-date documentation, see the ",a.createElement("a",{href:b.alternateDocVersions[t].path},"latest version (",t,")"),"."),(null==l?void 0:l.path)&&a.createElement("div",{className:"margin-top--md"},"For the current choosen version documentation, see the ",a.createElement("a",{href:l.path},n," link"),"."))}return null}return a.createElement(a.Fragment,null,a.createElement(l.Z,e))}}}]);