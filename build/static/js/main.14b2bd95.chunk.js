(this["webpackJsonpmaterial-ui-playground"]=this["webpackJsonpmaterial-ui-playground"]||[]).push([[0],{48:function(e,t,a){},50:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),c=a(14),r=a.n(c),l=(a(48),a(29),a(31),a(13)),s=(a(50),a(51),a(79)),o=a(36),j=a(74),b=a(75),p=a(77),u=a(78),f=a(72),m=a(73),d=a(20),x=a(37),O=a(4);function h(e){var t=Object(i.useState)(!0),a=Object(l.a)(t,2),n=a[0],c=a[1];return Object(i.useEffect)((function(){setTimeout((function(){c(!1)}),e.wait||0)})),n?Object(O.jsx)(O.Fragment,{}):Object(O.jsx)("div",Object(d.a)({style:{width:e.pixelSize,height:e.pixelSize,backgroundColor:e.fill,position:"absolute",paddingTop:0!==e.y?-e.pixelSize:0,left:e.x*e.pixelSize,top:e.y*e.pixelSize}},e))}var g=["bitmap","pixelSize","colormap","className","rowDelay"];function y(e){var t=e.bitmap,a=e.pixelSize,i=e.colormap,n=e.className,c=e.rowDelay,r=Object(x.a)(e,g),l=t.length,s=t[0].length*a,o=l*a,j=c?1+c:0;return Object(O.jsx)("div",Object(d.a)(Object(d.a)({style:{width:s,height:o,position:"relative"}},r),{},{children:t.map((function(e,t){return e.map((function(e,r){c&&(j+=c);var l=Array.isArray(n)?n[t][r]:n;return Object(O.jsx)(h,{x:r,y:t,pixelSize:a,fill:i[e],wait:j,className:n&&"animate__animated "+l},r)}))}))}))}var S={K:[[1,1,2,0,0,0,1,1,2],[1,1,2,0,0,1,1,1,2],[1,1,2,0,1,1,1,2,2],[1,1,2,1,1,1,2,2,0],[1,1,1,1,1,2,2,0,0],[1,1,1,1,1,2,0,0,0],[1,1,2,1,1,1,2,0,0],[1,1,2,2,1,1,1,2,0],[1,1,2,0,2,1,1,1,2],[1,1,2,0,0,2,1,1,2],[2,2,2,0,0,0,2,2,2]],M:[[1,1,2,0,0,0,1,1,2],[1,1,1,2,0,1,1,1,2],[1,1,1,1,1,1,1,1,2],[1,1,1,1,1,1,1,1,2],[1,1,2,1,1,2,1,1,2],[1,1,2,2,2,2,1,1,2],[1,1,2,0,0,0,1,1,2],[1,1,2,0,0,0,1,1,2],[1,1,2,0,0,0,1,1,2],[1,1,2,0,0,0,1,1,2],[2,2,2,0,0,0,2,2,2]]},v="animate__slow animate__flipInY",w={0:"#00000000",1:"#5f5fc4",2:"#001064"};function z(){return Object(O.jsxs)(u.a,{m:6,children:[Object(O.jsxs)(f.a,{container:!0,justify:"center",spacing:10,children:[Object(O.jsx)(f.a,{item:!0,children:Object(O.jsx)(y,{bitmap:S.K,pixelSize:20,colormap:w,className:v,rowDelay:10})}),Object(O.jsx)(f.a,{item:!0,children:Object(O.jsx)(y,{bitmap:S.M,pixelSize:20,colormap:w,className:v,rowDelay:10})})]}),Object(O.jsx)(m.a,{variant:"h5",align:"center",style:{padding:"6rem"},children:"Projects"})]})}var k=Object(o.a)({palette:{primary:{light:"#5f5fc4",main:"#283593",dark:"#001064",contrastText:"#ffffff"},secondary:{light:"#b2fef7",main:"#80cbc4",dark:"#4f9a94",contrastText:"#000000"}}});function T(){var e=Object(i.useState)(0),t=Object(l.a)(e,2),a=(t[0],t[1],Object(i.useState)(!1)),n=Object(l.a)(a,2),c=n[0],r=n[1];return Object(O.jsxs)(j.a,{theme:k,children:[Object(O.jsx)(s.a,{position:"sticky",children:Object(O.jsx)(b.a,{children:Object(O.jsx)(p.a,{checked:c,onChange:function(){return r(!c)},style:{float:"inline-end"}})})}),Object(O.jsx)(z,{})]})}var _=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,81)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),i(e),n(e),c(e),r(e)}))};r.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(T,{})}),document.getElementById("root")),_()}},[[57,1,2]]]);
//# sourceMappingURL=main.14b2bd95.chunk.js.map