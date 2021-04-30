(function(t){function e(e){for(var r,a,o=e[0],l=e[1],c=e[2],u=0,p=[];u<o.length;u++)a=o[u],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&p.push(s[a][0]),s[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);d&&d(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],r=!0,a=1;a<i.length;a++){var o=i[a];0!==s[o]&&(r=!1)}r&&(n.splice(e--,1),t=l(l.s=i[0]))}return t}var r={},a={app:0},s={app:0},n=[];function o(t){return l.p+"js/"+({examples:"examples","getting-started":"getting-started",tutorial:"tutorial"}[t]||t)+"-legacy.js"}function l(e){if(r[e])return r[e].exports;var i=r[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.e=function(t){var e=[],i={examples:1};a[t]?e.push(a[t]):0!==a[t]&&i[t]&&e.push(a[t]=new Promise((function(e,i){for(var r="css/"+({examples:"examples","getting-started":"getting-started",tutorial:"tutorial"}[t]||t)+".css",s=l.p+r,n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var c=n[o],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===r||u===s))return e()}var p=document.getElementsByTagName("style");for(o=0;o<p.length;o++){c=p[o],u=c.getAttribute("data-href");if(u===r||u===s)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||s,n=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");n.code="CSS_CHUNK_LOAD_FAILED",n.request=r,delete a[t],d.parentNode.removeChild(d),i(n)},d.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){a[t]=0})));var r=s[t];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise((function(e,i){r=s[t]=[e,i]}));e.push(r[2]=n);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=o(t);var p=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(d);var i=s[t];if(0!==i){if(i){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,i[1](p)}s[t]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=r,l.d=function(t,e,i){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(i,r,function(e){return t[e]}.bind(null,r));return i},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var p=0;p<c.length;p++)e(c[p]);var d=u;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"1a3b":function(t,e,i){"use strict";var r=i("455e"),a=i.n(r);a.a},3654:function(t,e,i){"use strict";var r=i("caba"),a=i.n(r);a.a},"455e":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d"),i("5abe");var r=i("d11d"),a=i.n(r),s=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("navbar"),i("Hero"),i("div",{staticClass:"section"},[i("div",{staticClass:"container"},[i("transition",{attrs:{name:"slide-up",mode:"out-in"}},[i("router-view")],1)],1)]),i("footer-view")],1)},o=[],l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"navbar is-fixed-top is-primary"},[r("div",{staticClass:"navbar-brand"},[r("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[r("img",{staticClass:"bordered",attrs:{src:i("9b19"),alt:"Brain.js logo",width:"28",height:"28"}}),t._v(" Brain.js ")]),r("div",{staticClass:"navbar-burger burger",class:{"is-active":t.isNavBarOpen},on:{click:t.toggleNavbar}},[r("span"),r("span"),r("span")])],1),r("div",{staticClass:"navbar-menu",class:{"is-active":t.isNavBarOpen}},[r("div",{staticClass:"navbar-start"},[r("router-link",{staticClass:"navbar-item",attrs:{to:"/getting-started",title:"Installation & Quick Start"}},[r("i",{staticClass:"material-icons"},[t._v("flight_takeoff")]),t._v(" Getting Started ")]),r("router-link",{staticClass:"navbar-item",attrs:{to:"/tutorial",title:"Tutorials"}},[r("i",{staticClass:"material-icons"},[t._v("school")]),t._v(" Tutorials ")]),r("router-link",{staticClass:"navbar-item",attrs:{to:"/examples",title:"View Examples"}},[r("i",{staticClass:"material-icons"},[t._v("list_alt")]),t._v(" Examples ")]),t._m(0)],1),t._m(1)])])},c=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{staticClass:"navbar-item",attrs:{href:"//github.com/BrainJS/brain.js#brainjs",title:"View Documentation",target:"_blank"}},[i("i",{staticClass:"material-icons"},[t._v("view_list")]),t._v(" Documentation ")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"navbar-end"},[i("div",{staticClass:"navbar-item"},[i("div",{staticClass:"field is-grouped"},[i("p",{staticClass:"control"},[i("a",{staticClass:"bd-tw-button button is-link",attrs:{target:"_blank",title:"Tweet about Brain.js",href:"//twitter.com/intent/tweet?text=Brain.js: GPU accelerated Neural networks in JavaScript&hashtags=brain.js,neuralNetworks,javascript,nodejs"}},[i("i",{staticClass:"material-icons"},[t._v("share")])])]),i("p",{staticClass:"control"},[i("a",{staticClass:"button is-link",attrs:{target:"_blank",title:"Brain.js on Github",href:"//github.com/BrainJS/brain.js"}},[t._v(" Github ")])]),i("p",{staticClass:"control"},[i("a",{staticClass:"button is-link",attrs:{title:"Be a Sponsor or Backer to this project",target:"_blank",href:"//opencollective.com/brainjs"}},[i("i",{staticClass:"material-icons"},[t._v("attach_money")]),i("span",[t._v(" Sponsor")])])])])])])}],u={data:function(){return{isNavBarOpen:!1}},watch:{$route:function(){this.toggleNavbar()}},methods:{toggleNavbar:function(){this.isNavBarOpen=!this.isNavBarOpen}}},p=u,d=(i("1a3b"),i("2877")),m=Object(d["a"])(p,l,c,!1,null,null,null),h=m.exports,f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"hero is-primary",class:{"is-large":"home"===t.$route.name}},[i("div",{staticClass:"hero-body"},[i("div",{staticClass:"container"},[i("article",{staticClass:"media"},[t._m(0),i("div",{staticClass:"media-content"},[i("div",{staticClass:"content"},[i("h1",{staticClass:"title is-1"},[t._v(" Brain.js: GPU accelerated Neural networks in JavaScript ")]),i("h2",{staticClass:"subtitle is-2"},[t._v(" for Browsers and Node.js ")]),i("div",{staticClass:"description"},[i("p",{staticClass:"is-size-5"},[t._v(" Simple, fast and easy to use. ")]),i("div",{staticClass:"field is-grouped"},[i("p",{staticClass:"control"},[i("router-link",{staticClass:"button is-light is-large",attrs:{to:"/getting-started",title:"Installation & Quick Start"}},[i("i",{staticClass:"material-icons"},[t._v("flash_on")]),i("span",[t._v("Get Started Now")])])],1)])])])])])])])])},b=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("figure",{staticClass:"media-left"},[r("p",{staticClass:"image is-128x128"},[r("img",{staticClass:"bordered",attrs:{src:i("9b19"),alt:"brain.js logo",width:"128",height:"128"}})])])}],g={},v=g,k=(i("9e70"),Object(d["a"])(v,f,b,!1,null,"45a749fd",null)),w=k.exports,_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",{staticClass:"footer is-dark"},[i("div",{staticClass:"content has-text-centered"},[i("br"),i("p",[t._v(" The source code is licensed "),i("a",{attrs:{href:"//opensource.org/licenses/mit-license.php"}},[t._v("MIT")]),t._v(". "),i("br"),t._v(" This page is open source. Noticed a typo? Or something unclear? "),i("a",{attrs:{href:"//github.com/BrainJS/brain.js.org"}},[t._v("Improve this page on GitHub")])])])])}],j={},y=j,S=Object(d["a"])(y,_,C,!1,null,null,null),x=S.exports,N={components:{Navbar:h,Hero:w,FooterView:x}},B=N,T=Object(d["a"])(B,n,o,!1,null,null,null),E=T.exports,P=(i("e1fc"),i("9483"));Object(P["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});i("d3b7");var O=i("8c4f"),R=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"container"},[i("div",{staticClass:"highlight-list"},t._l(t.$store.state.highlights,(function(e){return i("article",{key:e.title,staticClass:"message is-light"},[i("div",{staticClass:"message-header"},[t._v(" "+t._s(e.title)+" ")]),i("div",{staticClass:"message-body"},[t._v(" "+t._s(e.description)+" "),i("a",{directives:[{name:"show",rawName:"v-show",value:e.link,expression:"highlight.link"}],attrs:{href:e.link}},[t._v("Details")])])])})),0)]),i("br"),i("div",{staticClass:"content has-text-centered"},[i("div",{ref:"svg-logo-animation-container",attrs:{id:"svg-logo-animation-container"}},[i("h2",{staticClass:"title is-3"},[t._v("Brain.js is Modular")]),i("h3",{staticClass:"subtitle is-5 has-text-weight-normal"},[t._v(" The Brain.js implementation is highly modular to allow easy extendability. ")]),i("div",{ref:"svg-logo-animation",attrs:{id:"svg-logo-animation"}},[i("svg",{attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 200 200"}},[i("rect",{attrs:{width:"100%",height:"100%",fill:"#F3DF49"}}),i("g",{staticClass:"logo-parts"},[i("polygon",{style:t.leftPart,attrs:{fill:"#2E2E2C",points:"104.8,110.4 134.1,133.6 134.1,148.7 94.8,163.9 74.3,164.9 58.5,143.7 73.4,123.3"}}),i("polygon",{style:t.rightPart,attrs:{fill:"#2E2E2C",points:"139.4,148.7 139.4,133.6 134.3,104.4 148.4,103.5 185,126 180.5,153.6 166.4,164"}}),i("polygon",{style:t.bottomPart,attrs:{fill:"#2E2E2C",points:"163.1,167.6 137.3,153.2 101.3,166.6 142.8,177.7 148.4,186.2 155.2,186.2"}}),i("polygon",{style:t.topPart,attrs:{fill:"#2E2E2C",points:"111.1,108.3 133.5,127 128.9,105.3"}})])])])])]),i("br"),i("br"),i("div",{staticClass:"custom-tags has-text-centered"},t._l(t.$store.state.features,(function(e){return i("span",{key:e.title,staticClass:"tag is-medium is-light"},[t._v(t._s(e.title))])})),0),i("br"),i("br"),i("br"),i("div",{staticClass:"columns has-text-centered"},[i("div",{staticClass:"column"},[i("h2",{staticClass:"title is-3"},[t._v(" Ready to start? ")]),i("div",{staticClass:"content"},[i("p",[t._v(" Read "),i("a",{attrs:{href:"http://github.com/BrainJS/brain.js#brainjs"}},[t._v("Documentation")]),t._v(" or view "),i("router-link",{attrs:{to:"/examples",title:"Examples"}},[t._v(" Live Examples ")])],1),i("router-link",{staticClass:"button is-primary is-medium",attrs:{to:"/getting-started",title:"Installation & Quick Start"}},[t._v(" Get Started Now ")])],1)]),i("div",{staticClass:"column"},[i("h2",{staticClass:"title is-3"},[t._v(" Support ")]),i("div",{staticClass:"content"},[i("p",[t._v("Support this project by becoming a Sponsor or Backer.")]),i("router-link",{staticClass:"button is-primary is-medium",attrs:{to:"//opencollective.com/brainjs#sponsor",title:"Sponsor"}},[t._v(" Become a Sponsor ")])],1)]),t._m(0)]),i("br"),i("br"),i("br"),t._m(1),t._m(2),t._m(3)])},J=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"column"},[i("h2",{staticClass:"title is-3"},[t._v(" Be a Part of Brain.js ")]),i("div",{staticClass:"content"},[i("p",[t._v("Contributions are always welcome!")]),i("a",{staticClass:"button is-primary is-medium",attrs:{href:"//github.com/BrainJS/brain.js/blob/master/.github/CONTRIBUTING.md",title:"Github Repository",target:"_blank"}},[t._v(" Contribute ")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content has-text-centered"},[i("h2",{staticClass:"title is-3"},[t._v("Contributors")]),i("p",[t._v(" This project exists thanks to all the people who contribute. 🙏"),i("br"),i("br"),i("a",{attrs:{href:"https://github.com/BrainJS/brain.js/graphs/contributors",target:"_blank"}},[i("img",{attrs:{src:"https://opencollective.com/brainjs/contributors.svg?width=480&button=false",width:"480",loading:"lazy"}})])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content has-text-centered"},[i("h2",{staticClass:"title is-3"},[t._v("Backers")]),i("p",[t._v(" Thanks to all the backers! 🙏"),i("br"),i("br"),i("a",{attrs:{href:"https://opencollective.com/brainjs#contributors",target:"_blank"}},[i("img",{attrs:{src:"https://opencollective.com/brainjs/backers.svg?width=480&button=false",width:"480",loading:"lazy"}})])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content has-text-centered"},[i("h2",{staticClass:"title is-3"},[t._v("Sponsors")]),i("p",[t._v("Thanks to all the sponsors! 🙏"),i("br"),i("br")]),i("p",[i("a",{attrs:{href:"https://opencollective.com/brainjs",target:"_blank"}},[i("img",{attrs:{src:"https://opencollective.com/brainjs/sponsors.svg?width=480",width:"480",loading:"lazy"}})])])])}],G=(i("d81d"),{components:{},data:function(){return{progress:0}},computed:{offset:function(){var t=250*Math.abs(.66-this.progress);return(t<0||this.progress>.66)&&(t=0),t},leftPart:function(){return{transform:"translateX(-".concat(this.offset,"px)"),opacity:"".concat(1.25-this.offset/80)}},rightPart:function(){return{transform:"translateX(".concat(this.offset,"px)"),opacity:"".concat(1.25-this.offset/80)}},bottomPart:function(){return{transform:"translateY(".concat(this.offset,"px)"),opacity:"".concat(1.25-this.offset/80)}},topPart:function(){return{transform:"translateY(-".concat(this.offset,"px)"),opacity:"".concat(1.25-this.offset/80)}},featureList:function(){return this.$store.state.features.map((function(t){return t.title}))}},mounted:function(){var t=this,e=scrollama();e.setup({step:"#svg-logo-animation",progress:!0,threshold:1,offset:.66}).onStepProgress((function(e){t.progress=e.progress})),window.addEventListener("resize",e.resize)}}),L=G,U=(i("3654"),Object(d["a"])(L,R,J,!1,null,null,null)),$=U.exports;s["a"].use(O["a"]);var A=new O["a"]({routes:[{path:"/",name:"home",component:$},{path:"/getting-started",name:"getting-started",component:function(){return i.e("getting-started").then(i.bind(null,"94f1"))}},{path:"/tutorial",name:"tutorial",component:function(){return i.e("tutorial").then(i.bind(null,"818d"))}},{path:"/examples",name:"examples",component:function(){return i.e("examples").then(i.bind(null,"a451"))}},{path:"*",redirect:"/"}],scrollBehavior:function(t,e){if(t.path!==e.path)return{x:0,y:0}}}),M=i("2f62");s["a"].use(M["a"]);var I=new M["a"].Store({state:{features:[{title:"GPU accelerated"},{title:"Simple & Easy "},{title:"Asynchronous API"},{title:"Export & Import Trained Models"},{title:"Cross Validation"},{title:"Stream Training"},{title:"Modular"}],highlights:[{title:"Simple To Use",description:"Brain.js is super simple to use. You do not need to know Neural Networks in details to work with this. ",link:"//github.com/BrainJS/brain.js#examples"},{title:"Fast",description:"Brain.js performs computations using GPU and gracefully fallback to pure JavaScript when GPU is not available.",link:"//github.com/gpujs/gpu.js"},{title:"Useful",description:"Brain.js provides multiple neural network implementations as different neural nets can be trained to do different things well.",link:"//github.com/BrainJS/brain.js#neural-network-types"},{title:"Easy To Integrate",description:"Easily export and import trained models using JSON format or as a function. Host pre-trained models on your website easily. ",link:"//github.com/BrainJS/brain.js#json"}],networks:[{title:"brain.NeuralNetwork",description:"Feedforward Neural Network with backpropagation",link:"https://en.wikipedia.org/wiki/Feedforward_neural_network"},{title:"brain.recurrent.RNNTimeStep",description:'Time Step Recurrent Neural Network or "RNN"',link:"https://en.wikipedia.org/wiki/Recurrent_neural_network"},{title:"brain.recurrent.LSTMTimeStep",description:'Time Step Long Short Term Memory Neural Network or "LSTM"',link:"https://en.wikipedia.org/wiki/Long_short-term_memory"},{title:"brain.recurrent.GRUTimeStep",description:'Time Step Gated Recurrent Unit or "GRU"',link:"https://en.wikipedia.org/wiki/Gated_recurrent_unit"},{title:"brain.recurrent.RNN",description:'Recurrent Neural Network or "RNN"',link:"https://en.wikipedia.org/wiki/Recurrent_neural_network"},{title:"brain.recurrent.LSTM",description:'Long Short Term Memory Neural Network or "LSTM"',link:"https://en.wikipedia.org/wiki/Long_short-term_memory"},{title:"brain.recurrent.GRU",description:'Gated Recurrent Unit or "GRU"',link:"https://en.wikipedia.org/wiki/Gated_recurrent_unit"}],tutorials:[{title:"How to create a neural net in the browser with Brain.js",description:"",author:"Per Harald Borgen",link:"https://scrimba.com/c/c36zkcb"},{title:"BRAIN.JS: NEURAL NETWORKS IN JAVASCRIPT",description:"",author:"http://badassjs.com",link:"http://badassjs.com/post/729676907/brainjs-neural-networks-in-javascript"},{title:"Neural Networks in JavaScript with Brain.js",description:"",author:"Scott Robinson",link:"https://stackabuse.com/neural-networks-in-javascript-with-brain-js/"},{title:"You can build a neural network in JavaScript",description:"",author:"Daniel Simmons",link:"https://itnext.io/you-can-build-a-neural-network-in-javascript-even-if-you-dont-really-understand-neural-networks-e63e12713a3"},{title:"Building a Wine Tasting Neural Network with Node.js",description:"",author:"Valeri Karpov",link:"https://thecodebarbarian.com/building-a-wine-tasting-neural-network-with-node-js.html"}],examples:[{title:"XOR function",description:"Here's an example showcasing how to approximate the XOR function.",link:"//jsfiddle.net/mubaidr/94nkLfeo/embedded/js,result/"},{title:"Simple Letter Detection",description:"Detect letters from text.",link:"//jsfiddle.net/mubaidr/efLq26xd/embedded/js,result/"},{title:"Childrens Book",description:"Writing a children's book using a recurrent neural network.",link:"//jsfiddle.net/mubaidr/79Lkqsb5/embedded/js,result/"},{title:"Color Contrast",description:"Get suitable text color for given background color.",link:"//jsfiddle.net/mubaidr/8yeo2jmd/embedded/js,result/"},{title:"Using node streams",description:"Train neural network using streams",link:"//github.com/BrainJS/brain.js/blob/master/examples/javascript/stream-example.js"},{title:"Using node streams",description:"Train neural network using streams",link:"//github.com/BrainJS/brain.js/blob/master/examples/javascript/stream-example.js"},{title:"Forecasting",description:"Predict next number, and forecast numbers",link:"//github.com/BrainJS/brain.js/blob/master/examples/javascript/predict-numbers.js"},{title:"Maths",description:"Learning math using a recurrent neural network",link:"//github.com/BrainJS/brain.js/blob/master/examples/javascript/learn-math.js"},{title:"Cross Validate",description:"Using cross validation with a feed forward net ",link:"//github.com/BrainJS/brain.js/blob/master/examples/javascript/cross-validate.js"},{title:"GPU powered AI",description:"using the gpu in a browser",link:"https://github.com/BrainJS/brain.js/blob/master/examples/javascript/gpu.html"},{title:"Cryotherapy Success Rate Prediction",description:"Predicting the Performance of Cryotherapy for Wart Treatment Using Machine Learning Algorithm.",link:"//github.com/iSumitBanik/Cryotherapy-Success-Rate"},{title:"Rock Paper Scissors",description:"This game can read the players' patterns to determine the steps the AI will take in order to win.",link:"//github.com/arifikhsan/batu-gunting-kertas-nuxt"}]},mutations:{},actions:{}});window.scrollama=a.a,s["a"].config.productionTip=!1,new s["a"]({router:A,store:I,render:function(t){return t(E)}}).$mount("#app")},"5eb4":function(t,e,i){},"9b19":function(t,e,i){t.exports=i.p+"img/logo.svg"},"9e70":function(t,e,i){"use strict";var r=i("5eb4"),a=i.n(r);a.a},caba:function(t,e,i){},e1fc:function(t,e,i){}});