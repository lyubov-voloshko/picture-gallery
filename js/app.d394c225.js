(function(t){function e(e){for(var r,i,s=e[0],l=e[1],u=e[2],p=0,h=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&h.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);c&&c(e);while(h.length)h.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var c=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},1923:function(t,e,n){},2286:function(t,e,n){"use strict";var r=n("4e12"),a=n.n(r);a.a},4289:function(t,e,n){"use strict";var r=n("7729"),a=n.n(r);a.a},4506:function(t,e,n){},4805:function(t,e,n){"use strict";var r=n("897e"),a=n.n(r);a.a},"4e12":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("nav",[n("h1",[n("router-link",{attrs:{to:"/"}},[t._v("Gallery")])],1),n("ul",[n("li",[n("router-link",{attrs:{to:"/vanGogh"}},[t._v("van Gogh")])],1),n("li",[n("router-link",{attrs:{to:"/klimt"}},[t._v("Klimt")])],1)])]),n("main",[n("router-view")],1)])},o=[],i=(n("034f"),n("2877")),s={},l=Object(i["a"])(s,a,o,!1,null,null,null),u=l.exports,c=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("h1",[t._v("Amazing Picture Gallery")]),n("button",{on:{click:function(e){return t.toggleAddForm()}}},[t._v("Add Some Painting")]),t.addFormShown?n("form",{on:{submit:function(e){return t.handleSubmit()}}},[n("label",[t._v("Author")]),n("input",{attrs:{type:"text"}}),n("label",[t._v("Painting Title")]),n("input",{attrs:{type:"text"}}),n("label",[t._v("Painting location")]),n("input",{attrs:{type:"text"}})]):t._e()])},h=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._m(0),n("h3",[t._v("Installed CLI Plugins")]),t._m(1),n("h3",[t._v("Essential Links")]),t._m(2),n("h3",[t._v("Ecosystem")]),t._m(3)])},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n    For a guide and recipes on how to configure / customize this project,"),n("br"),t._v("\n    check out the\n    "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(".\n  ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[t._v("eslint")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],f={name:"HelloWorld",props:{msg:String}},v=f,d=(n("4805"),Object(i["a"])(v,m,g,!1,null,"b9167eee",null)),_=(d.exports,{name:"home",data:function(){return{addFormShown:!1,formData:{author:""}}},methods:{toggleAddForm:function(){this.addFormShown=!this.addFormShown},handleSubmit:function(){}}}),b=_,y=Object(i["a"])(b,p,h,!1,null,null,null),O=y.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vanGogh"},[t._m(0),t._l(t.vanGogh,function(t,e){return n("Painting",{key:e,attrs:{index:e,painting:t,theme:"vanGogh"}})})],2)},w=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("h1",[t._v("Vincent van Gogh")]),n("blockquote",[n("b",[t._v("The laws of the colours are unutterably beautiful, just because they are not accidentals.")]),n("p",[t._v("\n        In the same way that people nowadays no longer believe in fantastic miracles, no longer believe in a God ... ,\n        in the same way, ... , I think that in art, the old-fashioned idea of innate genius, inspiration, etc.\n      ")]),n("p",[t._v("\n        Anyone who says — oh, it must all come naturally — is making light of it.\n        However much one knows instinctively, it’s precisely then that one must redouble one’s efforts, in my view,\n        to get from instinct to REASON.\n      ")])])])}],k=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),P=n("2f62"),G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{staticClass:"painting",style:t.cssVars,attrs:{to:"/"+this.theme+"/"+t.index}},[n("div",{staticClass:"painting__img",style:{backgroundImage:"url("+t.painting.imageURL+")"}}),n("h3",[t._v(t._s(t.painting.title))])])},C=[],E=(n("c5f6"),{name:"Painting",props:{index:Number,theme:String,painting:Object},data:function(){return{themes:{vanGogh:{bgColor:"#D0DFE3"},klimt:{bgColor:"#F9EC88"}}}},computed:{cssVars:function(){return{"--bg-color":this.themes[this.theme].bgColor}}}}),x=E,S=(n("4289"),Object(i["a"])(x,G,C,!1,null,"3944a887",null)),D=S.exports;function V(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function $(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?V(n,!0).forEach(function(e){Object(k["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):V(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var A={components:{Painting:D},data:function(){return{}},computed:$({},Object(P["b"])(["vanGogh"]))},F=A,L=(n("d59d"),Object(i["a"])(F,j,w,!1,null,"1ae6a5c0",null)),T=L.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"klimt"},[t._m(0),t._l(t.klimt,function(t,e){return n("Painting",{key:e,attrs:{index:e,painting:t,theme:"klimt"}})})],2)},R=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("h1",[t._v("Gustav Klimt")]),n("blockquote",[n("b",[t._v("All art is erotic.")]),n("p",[t._v("\n        I have the gift of neither the spoken nor the written word, especially if I have to say something about myself\n        or my work. Whoever wants to know something about me -as an artist, the only notable thing- ought to look\n        carefully at my pictures and try and see in them what I am and what I want to do.\n      ")])])])}];function M(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function N(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?M(n,!0).forEach(function(e){Object(k["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):M(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var U={components:{Painting:D},data:function(){return{}},computed:N({},Object(P["b"])(["klimt"]))},K=U,W=(n("f3c4"),Object(i["a"])(K,I,R,!1,null,"e83bfff0",null)),B=W.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"picture",style:t.cssVars},[n("img",{attrs:{src:t.painting.imageURL}}),n("div",{staticClass:"info"},[n("h1",[t._v(t._s(t.painting.title))]),n("span",[t._v("painted in "+t._s(t.painting.year))]),n("p",{staticClass:"paintedBy"},[t._v("by "),n("router-link",{staticClass:"authorName",attrs:{to:"/"+t.$route.params.author}},[t._v(t._s(t.painting.author))])],1),n("p",[t._v(t._s(t.painting.medium))]),n("p",[t._v(t._s(t.painting.location))])])])},q=[];function z(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function H(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?z(n,!0).forEach(function(e){Object(k["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):z(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var Q={data:function(){return{painting:{},themes:{vanGogh:{bgColor:"#D0DFE3"},klimt:{bgColor:"#F9EC88"}}}},computed:H({},Object(P["b"])(["vanGogh","klimt"]),{cssVars:function(){return{"--bg-color":this.themes[this.$route.params.author].bgColor}}}),mounted:function(){this.painting=this[this.$route.params.author][this.$route.params.id]}},X=Q,Y=(n("2286"),Object(i["a"])(X,J,q,!1,null,"72b11fcb",null)),Z=Y.exports;r["a"].use(c["a"]);var tt=new c["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:O},{path:"/vanGogh",name:"van Gogh",component:T},{path:"/klimt",name:"Klimt",component:B},{path:"/:author/:id",name:"picture",component:Z}]}),et=[{title:"A Wheatfield with Cypresses",author:"Vincent van Gogh",medium:"Oil on canvas",year:"July 1889",dimensions:"73 cm × 93.4 cm",location:"National Gallery, London",imageURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Vincent_van_Gogh_-_Wheat_Field_with_Cypresses_%28National_Gallery_version%29.jpg/600px-Vincent_van_Gogh_-_Wheat_Field_with_Cypresses_%28National_Gallery_version%29.jpg"},{title:"Café Terrace at Night",author:"Vincent van Gogh",medium:"Oil painting",year:"1888",dimensions:"80.7 cm × 65.3 cm",location:"Kröller-Müller Museum, Otterlo",imageURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Van_Gogh_-_Terrasse_des_Caf%C3%A9s_an_der_Place_du_Forum_in_Arles_am_Abend1.jpeg/600px-Van_Gogh_-_Terrasse_des_Caf%C3%A9s_an_der_Place_du_Forum_in_Arles_am_Abend1.jpeg"},{title:"The Potato Eaters",author:"Vincent van Gogh",medium:"Oil on canvas",year:"1885",dimensions:"82 cm × 114 cm",location:"Van Gogh Museum, Amsterdam",imageURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Van-willem-vincent-gogh-die-kartoffelesser-03850.jpg/600px-Van-willem-vincent-gogh-die-kartoffelesser-03850.jpg"}],nt=[{title:"The Old Burgtheater",author:"Gustav Klimt",medium:"Gouache, paper ",year:"1888 - 1889",dimensions:"82 cm × 92 cm",location:"Vienna Museum, Vienna",imageURL:"https://uploads8.wikiart.org/images/gustav-klimt/the-old-burgtheater-1889.jpg!Large.jpg"},{title:"Country Garden with Sunflowers",author:"Gustav Klimt",medium:"Oil, canvas ",year:"1905 - 1906",dimensions:"110 cm × 110 cm",location:"Belvedere, Vienna",imageURL:"https://uploads1.wikiart.org/images/gustav-klimt/country-garden-with-sunflowers-1906.jpg!Large.jpg"},{title:"Danae",author:"Gustav Klimt",medium:"Oil, canvas ",year:"1907 - 1908",dimensions:"77 cm × 83 cm",location:"Wurthle Gallery, Vienna",imageURL:"https://uploads3.wikiart.org/images/gustav-klimt/danae-1908.jpg!Large.jpg"}],rt={vanGogh:et,klimt:nt},at={addPainting:function(t,e){var n=t.commit;n("appendPainting",e)}},ot={appendPainting:function(t,e){var n=e.painting,r=e.author;t[r].push(n)}};r["a"].use(P["a"]);var it=new P["a"].Store({state:rt,mutations:ot,actions:at});r["a"].config.productionTip=!1,new r["a"]({router:tt,store:it,render:function(t){return t(u)}}).$mount("#app")},"64a9":function(t,e,n){},7729:function(t,e,n){},"897e":function(t,e,n){},d59d:function(t,e,n){"use strict";var r=n("1923"),a=n.n(r);a.a},f3c4:function(t,e,n){"use strict";var r=n("4506"),a=n.n(r);a.a}});
//# sourceMappingURL=app.d394c225.js.map