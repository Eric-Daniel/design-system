(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{321:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=m(n(2)),o=m(n(42)),a=m(n(1)),r=n(54),u=m(n(142)),c=m(n(329)),d=m(n(331)),i=m(n(330)),f=m(n(583)),s=m(n(332));function m(e){return e&&e.__esModule?e:{default:e}}var v=(0,o.default)(u.default).filter(function(e){return"legacy"!==e}),p=function(e){return a.default.createElement(r.Box,(0,l.default)({},e,{width:[1/3,null,1/3,.2],mb:3,px:2}))},b=function(e){return e.icons.map(function(e){return a.default.createElement(p,{key:e,py:4,bg:"lightGray"},a.default.createElement(f.default,{href:function(e){return function(e){return"data:image/svg+xml;utf8,"+e}('<?xml version="1.0" encoding="utf-8"?>\n<svg xmlns="http://www.w3.org/2000/svg"\n  viewbox="0 0 24 24" width="24" height="24">\n  <path d="'+e+'" />\n</svg>').replace("\n"," ")}(u.default[e].path),download:e+".svg",title:"Download "+e+" as SVG",hoverColor:"blue"},a.default.createElement(r.Flex,{mb:3,align:"center",justify:"center"},a.default.createElement(r.Icon,{name:e,legacy:!1,size:48}))),a.default.createElement(r.Text,{align:"center"},a.default.createElement(i.default,{fontSize:0,color:"gray"},e)))})};t.default=function(e){return a.default.createElement(r.Box,null,a.default.createElement(c.default,null,"Iconography"),a.default.createElement(d.default,null,"The design system includes icons based on Googles Material Design Icons."),a.default.createElement(r.Flex,{wrap:!0,pt:4},a.default.createElement(b,{icons:v})),a.default.createElement(s.default,e))}},329:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=r(n(2)),o=r(n(1)),a=n(54);function r(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return o.default.createElement(a.Heading.h1,(0,l.default)({fontSize:5,bold:!0,mt:[2,5],mb:3},e))}},330:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=(0,r(n(67)).default)(["\n  font-family: 'Roboto Mono', monospace;\n  "," ",";\n"],["\n  font-family: 'Roboto Mono', monospace;\n  "," ",";\n"]),o=r(n(4)),a=n(9);function r(e){return e&&e.__esModule?e:{default:e}}var u=o.default.code(l,a.color,a.fontSize);u.defaultProps={fontSize:2,color:"blue"},t.default=u},331:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=r(n(2)),o=r(n(1)),a=n(54);function r(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return o.default.createElement(a.Text,(0,l.default)({fontSize:[2,3],mb:3,color:"gray"},e))}},332:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=r(n(1)),o=n(54),a=r(n(333));function r(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.index,n=e.pages,r=n[t-1],u=n[t+1];return l.default.createElement(o.Flex,{p:3,my:5,bg:"lightGray",style:{borderRadius:"2px"}},r&&l.default.createElement(a.default,{to:"/"+r.name},l.default.createElement(o.Icon,{name:"chevronLeft",size:48,color:"blue",legacy:!1,mr:2,style:{verticalAlign:"middle"}}),l.default.createElement(o.Text,{fontSize:3,color:"blue",style:{display:"inline-block",verticalAlign:"middle"}},l.default.createElement("b",null,"Previous:")," ",r.name)),l.default.createElement(o.Box,{ml:"auto"}),u&&l.default.createElement(a.default,{to:"/"+u.name},l.default.createElement(o.Text,{fontSize:3,color:"blue",style:{display:"inline-block",verticalAlign:"middle"}},l.default.createElement("b",null,"Next:")," ",u.name),l.default.createElement(o.Icon,{name:"chevronRight",size:48,color:"blue",legacy:!1,ml:2,style:{verticalAlign:"middle"}})))}},333:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});!function(e){e&&e.__esModule}(n(1));var l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(54)),o=n(68);var a=l.Link.withComponent(o.Link);t.default=a},583:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=(0,o(n(67)).default)(["\n  display: block;\n  color: inherit;\n  text-decoration: none;\n  ",";\n"],["\n  display: block;\n  color: inherit;\n  text-decoration: none;\n  ",";\n"]);function o(e){return e&&e.__esModule?e:{default:e}}var a=o(n(4)).default.a(l,function(e){return e.hoverColor?{"&:hover":{color:e.theme.colors[e.hoverColor]||e.hoverColor}}:null});t.default=a}}]);