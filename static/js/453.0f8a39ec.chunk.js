"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[453],{1748:function(n,e,t){t.r(e),t.d(e,{default:function(){return h}});var r=t(4270),i=t(2982),c=t(885),s=t(2791),a=t(3504),o=t(9613),l=t(4304),u=t(3394),m=t(184),d=function(){var n=(0,s.useState)([]),e=(0,c.Z)(n,2),t=e[0],r=e[1],d=(0,s.useState)(!1),f=(0,c.Z)(d,2),h=f[0],j=f[1],v=(0,s.useState)(0),x=(0,c.Z)(v,2),b=x[0],_=x[1],Z=(0,s.useState)(!1),p=(0,c.Z)(Z,2),y=p[0],g=p[1],N=(0,l.Z)(),S=N.loading,k=N.error,w=N.getAllComics;(0,s.useEffect)((function(){A(b,!0)}),[]);var A=function(n,e){j(!e),w(n).then(C)},C=function(n){var e=!1;n.length<8&&(e=!0),r([].concat((0,i.Z)(t),(0,i.Z)(n))),j(!1),_(b+8),g(e)},E=function(n){var e=n.map((function(n,e){return(0,m.jsx)("li",{className:"comics__item",children:(0,m.jsxs)(a.rU,{to:"/comics/".concat(n.id),children:[(0,m.jsx)("img",{src:n.thumbnail,alt:n.title,className:"comics__item-img"}),(0,m.jsx)("div",{className:"comics__item-name",children:n.title}),(0,m.jsx)("div",{className:"comics__item-price",children:n.price})]})},e)}));return(0,m.jsx)("ul",{className:"comics__grid",children:e})}(t),I=k?(0,m.jsx)(o.Z,{}):null,M=S&&!h?(0,m.jsx)(u.Z,{}):null;return(0,m.jsxs)("div",{className:"comics__list",children:[I,M,E,(0,m.jsx)("button",{className:"button button__main button__long",disabled:h,style:{display:y?"none":"block"},onClick:function(){return A(b)},children:(0,m.jsx)("div",{className:"inner",children:"load more"})})]})},f=t(3957),h=function(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(r.q,{children:[(0,m.jsx)("meta",{name:"description",content:"Marvel comics  "}),(0,m.jsx)("title",{children:"Marvel comics "})]}),(0,m.jsx)(f.Z,{}),(0,m.jsx)(d,{})]})}},2982:function(n,e,t){t.d(e,{Z:function(){return c}});var r=t(907);var i=t(181);function c(n){return function(n){if(Array.isArray(n))return(0,r.Z)(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||(0,i.Z)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=453.0f8a39ec.chunk.js.map