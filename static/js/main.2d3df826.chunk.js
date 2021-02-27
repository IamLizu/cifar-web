(this["webpackJsonpcifar-web"]=this["webpackJsonpcifar-web"]||[]).push([[0],{10:function(e,t,s){},12:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),n=s(4),r=s.n(n),i=(s(10),s(2)),o=s(5),d=s.n(o),l=s(0);var m=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(""),r=Object(i.a)(n,2),o=r[0],m=r[1],b=Object(c.useState)(""),x=Object(i.a)(b,2),j=x[0],h=x[1],u=Object(c.useState)(""),p=Object(i.a)(u,2),g=p[0],O=p[1],f=Object(c.useState)(""),y=Object(i.a)(f,2),N=y[0],v=y[1],w=Object(c.useState)("hidden"),k=Object(i.a)(w,2),C=k[0],S=k[1],M=Object(c.useState)(""),P=Object(i.a)(M,2),I=P[0],E=P[1],F=Object(c.useState)("hidden"),L=Object(i.a)(F,2),B=L[0],H=L[1],Y=["1","2","3","4","5","6","7","8","9","10"].map((function(e){return Object(l.jsx)("option",{value:e,children:e},e)}));return Object(l.jsxs)("div",{className:"max-w-6xl mx-auto",children:[Object(l.jsx)("header",{className:"mt-4",children:Object(l.jsx)("div",{className:"",children:Object(l.jsx)("h1",{className:"md:text-4xl text-2xl text-center font-semibold text-gray-800 tracking-widest cursor-default md:my-7",children:"Cifar"})})}),Object(l.jsxs)("div",{className:"md:grid md:grid-cols-2 bg-gray-100 md:mt-5 h-auto xl:mt-12",children:[Object(l.jsxs)("div",{className:"md:space-y-6 space-y-10 self-center mx-auto px-5",children:[Object(l.jsx)("p",{className:"text-center pt-1 text-sm md:text-base text-red-600 ".concat(C),children:g}),Object(l.jsx)("p",{className:"".concat(I," pt-1 text-center md:pr-10 text-gray-900 opacity-50 md:pl-3 text-xs"),children:N}),Object(l.jsxs)("div",{className:"".concat(B,"  flex justify-center"),children:[Object(l.jsx)("input",{id:"cipher",className:"text-center inline h-10 text-gray-900 md:px-2 md:py-2 md:text-lg border border-indigo-300 focus:outline-none",value:j,readOnly:!0}),Object(l.jsx)("button",{className:"h-13 bg-gray-200 ml-1 text-md px-3 py-2 inline focus:outline-none focus:ring-2 focus:ring-indigo-300 active:bg-gray-400 hover:bg-green-50",onClick:function(){var e=document.getElementById("cipher");e.select(),e.setSelectionRange(0,99999),document.execCommand("copy"),v("Copied to clipboard."),E("block")},children:"\ud83d\udccb"})]}),Object(l.jsx)("input",{type:"text",onChange:function(e){a(e.target.value)},value:s,placeholder:"Enter string",className:"md:w-80 w-full h-13 text-gray-900 px-3 py-2 md:text-lg brdr focusOv"}),Object(l.jsx)("br",{}),Object(l.jsxs)("select",{name:"shift",className:"w-15 px-3 py-2 brdr focusOv",onChange:function(e){m(e.target.value)},children:[Object(l.jsx)("option",{value:"",disabled:!0,selected:!0}),Y]}),Object(l.jsx)("label",{for:"shift",className:"pr-10 text-gray-900 opacity-50 pl-3 text-xs",children:"(Characters to shift)"}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"button",value:"Generate",onClick:function(){try{if(0===s.length)O("You must enter string."),S("block"),H("hidden");else if(0===o.length)O("You must select shift."),S("block"),H("hidden");else{var e=d()(s,parseInt(o));S("hidden"),H("block"),h(e)}E("hidden")}catch(t){h("Who know who's mistake is this.")}},className:"px-5 py-2 font-semibold bg-indigo-500 text-white rounded-sm uppercase cursor-pointer text-xs md:text-sm tracking-widest hover:bg-indigo-400 active:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300"})]}),Object(l.jsx)("hr",{className:"md:hidden mt-10 opacity-25 border-b border-indigo-400"}),Object(l.jsxs)("div",{className:"px-4 py-10 cursor-default",children:[Object(l.jsxs)("div",{className:"md:prose prose-sm",children:[Object(l.jsxs)("h1",{className:"font-semibold",children:[Object(l.jsx)("span",{className:"text-indigo-600",children:"Encryption"})," ","as a\xa0",Object(l.jsx)("span",{className:"text-gray-700 ",children:"Password Manager"})]}),Object(l.jsx)("p",{className:"text-gray-900 opacity-95",children:"You can use the dumbest and remember able words to generate secret words(could be your passwords). Not an encryption algorithm though a little modification of Caesar Cipher(perhaps a stupid one)."}),Object(l.jsx)("p",{className:"text-gray-900 opacity-60",children:"However, this may or may not (higher chances) solve the password remembering issue. So, the implication of 'Password Manager' is not literal."})]}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:Object(l.jsx)("a",{href:"/",className:"px-5 py-2 font-semibold bg-gray-300 text-gray-900 rounded-sm uppercase cursor-pointer md:text-sm text-xs tracking-widest hover:bg-gray-400 active:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300",children:"Lean more"})})]})]}),Object(l.jsxs)("div",{className:"md:mt-10 x:mt-16 px-3 pb-9 md:flex md:justify-between",children:[Object(l.jsxs)("p",{className:"",children:[Object(l.jsx)("a",{className:"font-medium text-xs md:text-base",href:"https://github.com/IamLizu/cifar-web",children:"GitHub"}),"\xa0/\xa0",Object(l.jsx)("a",{className:"font-medium  text-xs md:text-base ",href:"https://www.npmjs.com/package/cifar",children:"NPM Package Registry"})]}),Object(l.jsxs)("p",{className:"text-xs md:text-base ",children:["Made with \ud83d\udc99 by"," ",Object(l.jsx)("a",{className:"font-mono ",href:"https://smmahmudulhasan.com",children:"S M Mahmudul Hasan"})]})]})]})},b=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,13)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;s(e),c(e),a(e),n(e),r(e)}))};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root")),b()}},[[12,1,2]]]);
//# sourceMappingURL=main.2d3df826.chunk.js.map