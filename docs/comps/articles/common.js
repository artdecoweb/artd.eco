function q(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function r(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:q(a)}}function t(a){if(!(a instanceof Array)){a=r(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
var u="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,v="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};function w(a,b){if(b){var c=u;a=a.split(".");for(var d=0;d<a.length-1;d++){var f=a[d];f in c||(c[f]={});c=c[f]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&v(c,a,{configurable:!0,writable:!0,value:b})}}
var x="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var f in d)Object.prototype.hasOwnProperty.call(d,f)&&(a[f]=d[f])}return a};w("Object.assign",function(a){return a||x});
w("String.prototype.endsWith",function(a){return a?a:function(b,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");void 0===c&&(c=this.length);c=Math.max(0,Math.min(c|0,this.length));for(var d=b.length;0<d&&0<c;)if(this[--c]!=b[--d])return!1;return 0>=d}});
w("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&c.push([d,b[d]]);return c}});
function y(){var a=document.getElementById("bottom"),b=a.previousElementSibling,c=b.style.height,d=parseInt(c,10),f=!1,e=null,k=0;document.onmousewheel=function(g){f&&(k+=g.wheelDelta,b.style.height=Math.min(d+-k/50,d+50)+"px",b.style.transition="",window.clearInterval(e),window.clearInterval(null),e=window.setTimeout(function(){k=0;b.style.height=c;b.style.transition="height .5s"},150))};(new IntersectionObserver(function(g){g.forEach(function(m){f=m=m.isIntersecting;m||(b.style.height=c,k=0)})})).observe(a)}
;function z(a){function b(c){return c.raw[0].split(/\s+/).map(function(d){var f=a[d];return f?f:(console.error("Key %s is not present in the CSS map.",d),d)}).join(" ")}if(!a)return function(c){return c};Object.keys(a).forEach(function(c){b["$"+c]=a[c]});return b};function A(a,b){var c=document.getElementById(a);if(!c)return console.warn("Parent element for component %s with id %s not found",b,a),{};var d=c.parentElement;return d?{parent:d,a:c}:(console.warn("Parent of element for component %s with id %s not found",b,a),{})}
function B(){var a=void 0===a?{}:a;var b=Object.assign({},a),c=void 0===a.rootMargin?"76px":a.rootMargin,d=void 0===a.log?!0:a.log;a=(delete b.rootMargin,delete b.log,b);var f=new IntersectionObserver(function(e){e.forEach(function(k){var g=k.target,m=g.render.c,l=m.key,h=m.id,n=m.plain;if(k.isIntersecting){d&&console.warn("\ud83c\udfd7 Rendering%s component %s into the element %s",n?"":" Preact",l,h,g);try{var p=g.render();p&&!p.unrender&&f.unobserve(g)}catch(X){d&&console.warn(X)}}else m.instance&&
(d&&console.warn("\ud83d\udca8 Unrendering%s component %s from the element %s",n?"":" Preact",l,h,g),m.instance.unrender())})},Object.assign({},{rootMargin:c},a));return f}function C(a,b,c,d,f,e,k){function g(){c.render(Object.assign({},e,{children:k}));a.instance=c}c||(c=new b(d,f));b.load?b.load(function(m,l){l&&Object.assign(e,l);m?console.warn(m):g()},d,e):g();return c}function D(a,b,c,d){this.j=d;this.o=c;this.a=a;this.parent=b;this.unrender=this.b=null}
D.prototype.render=function(a){var b=Object.assign({},a);a=a.children;b=(delete b.children,b);if(this.b)this.b.componentDidMount&&this.b.componentDidMount(),this.b.forceUpdate();else{this.j.render(this.j.h(this.o,b,a),this.parent,this.a);var c=this.a._component;c.componentWillUnmount&&(this.unrender=function(){c.componentWillUnmount()});this.b=c}};
function E(a,b,c,d,f,e,k){function g(){c.render(Object.assign({},e,{children:k}));a.instance=c}var m={render:F,Component:G,h:H},l=a.plain;!c&&l?c=new b(d,f):c||(c=new D(d,f,b,m));b.load?b.load(function(h,n){n&&Object.assign(e,n);h?console.warn(h):g()},d,e):g();return c};function I(a,b){this.a=a;this.j=null;this.A=this.l=0;this.o=!0;this.b=this.a.nextElementSibling;a=this.b.nextElementSibling;"NOSCRIPT"!=a.tagName?console.warn("Could not remove noscript element."):b.removeChild(a)}I.prototype.unrender=function(){this.j&&window.removeEventListener("scroll",this.j)};
function J(a){var b=a.a.getBoundingClientRect(),c=b.height,d=b.width,f=b.top-window.innerHeight,e=-(-window.innerHeight-c);b=e*Math.abs(a.l);a.b.style["min-height"]=c+b+"px";c=e*Math.abs(a.A);a.b.style["min-width"]=d+c+"px";d=f*a.l;f*=a.A;0>a.A&&(f-=c);0>a.l&&(d-=b);b="translate3d("+(f.toFixed()+"px, ")+(d.toFixed()+"px, 0)");a.b.style.transform=b;a.b.style.webkitTransform=b}
I.load=function(a,b,c){c=c["background-image"];var d=document.createElement("img");d.src=c;d.onload=function(){a(null,{F:b.className,style:b.getAttribute("style")})};d.onerror=function(){a(Error("Image could not be loaded."))}};
I.prototype.render=function(a){var b=this,c=a["background-image"],d=void 0===a.l?.5:a.l;a=void 0===a.A?0:a.A;this.o&&(this.b.className+=" RunFadeIn",this.o=!1);this.l=parseFloat(d);this.A=parseFloat(a);this.j=function(){J(b)};window.addEventListener("scroll",this.j);this.b.style["background-image"]="url("+c+")";J(this)};u.Object.defineProperties(I,{plain:{configurable:!0,enumerable:!0,get:function(){return!0}}});var K=document.querySelectorAll("[data-background-img]");if(K.length){var L=new IntersectionObserver(function(a){a.forEach(function(b){var c=b.target;b.isIntersecting&&(L.unobserve(c),b=c.getAttribute("data-background-img"),c.removeAttribute("data-background-img"),c.style.background="url("+b+")")})},{rootMargin:"75px"});t(K).concat().forEach(function(a){return L.observe(a)})};try{window.preact=preact}catch(a){window.preact={}}var M=window.preact,H=M.h,G=M.Component,F=M.render;function N(a,b){this.loaded=this.b=null;this.o=[a];this.j=[b]}N.prototype.error=function(a){this.b=a;this.j.forEach(function(b){b(a)})};N.prototype.load=function(a){this.loaded=a;this.o.forEach(function(b){b(a)})};function O(a,b,c){var d=document.createElement("script");d.src=a;d.onload=b;d.onerror=c;(document.head||document.body).appendChild(d)}function aa(a,b,c){var d=document.createElement("link");d.rel="stylesheet";d.href=a;d.onload=b;d.onerror=c;(document.head||document.body).appendChild(d)};function ba(a,b){var c=new XMLHttpRequest;c.onreadystatechange=function(){4==c.readyState&&200==c.status&&b(null,c.responseText)};c.onerror=function(d){return b(d)};c.open("GET",a,!0);c.send()}function ca(a,b){var c=P(a,aa,Q[a],function(d){return b(null,d)},function(d){return b(d)},a.nocache);c&&(Q[a]=c)}
function P(a,b,c,d,f,e){if(e)b(a,d,f);else if(c&&c.loaded)d(c.loaded);else if(c&&c.b)f(c.b);else if(c)c.o.push(d),c.j.push(f);else{var k=new N(d,f);b(a,function(g){k.load(g)},function(g){k.error(g)});return k}}function R(a,b){var c=!1,d=[],f=0;a.forEach(function(e,k){function g(l){c||(c=l,b(l))}function m(l){c||(f++,d[k]=l,f==a.length&&b(null,d))}e.endsWith(".json")?ba(e,function(l,h){l?g(l):m(h)}):da(e,m,g)})}var S={},Q={};function da(a,b,c){(b=P(a,O,S[a],b,c,a.nocache))&&(S[a]=b)};function T(a){this.a=a;this.b=null}T.load=function(a,b,c){b=c.G;c=[c.path,b?"/snapsvg/dist/snap.svg.js":"/snapsvg/dist/snap.svg-min.js"].concat(t(b?[]:["/@artdeco/snapsvg-animator/svg-anim.min.js"]));R(c,function(d,f){if(d)return a(d);try{var e=r(f).next().value;a(null,{json:JSON.parse(e)})}catch(k){a(k)}})};T.prototype.unrender=function(){this.b.stop()};
T.prototype.render=function(a){var b=a.json,c=a.width,d=a.height;a=a.align;if(this.b)this.b.play();else{var f=this.a.querySelector("img");this.b=new window.SVGAnim(b,c,d);b=this.b.s.node;b.style.position="absolute";b.style.top=0;"right"==a?b.style.right=0:"center"==a?(b.style.right=0,b.style.left=0,b.style.margin="0 auto"):b.style.left=0;b.style.maxWidth="100%";b.style.maxHeight="100%";b.removeAttribute("height");this.a.appendChild(b);setTimeout(function(){f.style.opacity=0},100)}};
u.Object.defineProperties(T,{plain:{configurable:!0,enumerable:!0,get:function(){return!0}}});function U(a){this.a=a;this.name=null}U.prototype.unrender=function(){var a=window["back-to"];a&&a.name==this.name&&(window["back-to"]=null,this.a.style.opacity=0)};U.prototype.render=function(a){var b=this;a=a.name;var c=window["back-to"];c&&c.name==a&&(this.a.style.opacity=1,this.name=a,this.a.querySelector("a").onclick=function(){var d=window["back-to"];d&&d.name==b.name&&window.scrollTo({top:d.y,behavior:"smooth"});return!1})};
u.Object.defineProperties(U,{plain:{configurable:!0,enumerable:!0,get:function(){return!0}}});function ea(a,b,c,d){var f=void 0===f?{}:f;var e=window.top,k=e.outerHeight,g=e.screenY,m=e.outerWidth,l=e.screenX;e=[];c&&e.push("width="+c,"left="+(m/2+l-c/2));d&&e.push("top="+(k/2+g-d/2-50),"height="+d);c=Object.keys(f).map(function(h){return h+"="+f[h]});e.push.apply(e,t(c));window.open(a,b,e.join(","))};function V(a){var b=Object.assign({},a),c=void 0===a.size?32:a.size,d=a.url,f=a.B,e=a.title,k=a.borderRadius,g=a.c,m=a.m.i;a=(delete b.size,delete b.url,delete b.B,delete b.title,delete b.borderRadius,delete b.c,delete b.m,b);delete a.m;if(g){g=document.querySelector('meta[name="description"]');if(!g)return H("span",Object.assign({},a),"Error Loading Social Buttons (no meta description)");e=g.content;f||(f=g.content)}return H("span",Object.assign({},a),Object.entries(fa).reduce(function(l,h){var n=
r(h);h=n.next().value;var p=n.next().value;n=Object.assign({},p);p=p.color;n=(delete n.color,n);l.push(H(ha,Object.assign({},n,{size:c,svg:h,color:"rgb("+p+")",i:m,title:e,url:d,B:f,borderRadius:k,C:"email"==h}))," ");return l},[]))}
function ha(a){var b=a.size,c=a.href,d=a.svg,f=a.color,e=a.alt,k=void 0===a.width?900:a.width,g=void 0===a.height?650:a.height,m=void 0===a.borderRadius?"4px":a.borderRadius,l=a.C,h=void 0===a.i?"/":a.i,n=c(a.url,a.title,a.B);a=H("img",{src:h+"buttons/"+d+".svg",width:b,height:b,alt:e,style:"background:"+f+"; border-radius:"+m});return l?H("a",{href:n},a):H("a",{onClick:function(p){ea(n,e,k,g);p.preventDefault();return!1},href:"#"},a)}
function W(a){return Object.entries(a).map(function(b){var c=r(b);b=c.next().value;if(c=c.next().value)return b+"="+c}).filter(Boolean).join("&")}
var fa={facebook:{href:function(a,b){return"https://www.facebook.com/sharer/sharer.php?"+W({u:a,quote:b})},color:[59,89,152],alt:"Share on Facebook"},twitter:{href:function(a,b){return"https://twitter.com/intent/tweet?"+W({text:b,url:a})},color:[85,172,238],alt:"Share on Twitter",width:550,height:420},linkedin:{href:function(a,b){return"https://www.linkedin.com/shareArticle?"+W({url:a,mini:!0,title:b})},color:[0,123,181],alt:"Share on LinkedIn"},whatsapp:{href:function(a,b){return"https://api.whatsapp.com/send?"+
W({text:[b,a].filter(Boolean).join(" ")})},color:[18,175,10],alt:"Share on Whatsapp"},email:{href:function(a,b,c){return"mailto:?"+W({subject:c,body:[b,a].filter(Boolean).join(" ")})},color:[1,102,255],alt:"Share on Email"}};function Y(a){this.a=a}Y.load=function(a,b,c){b=void 0===c.D?"default":c.D;var d=c.lang;c=c.m.i;d||a(Error("The language was not specified."));var f=d.split(",").map(ia);R([c+"js/highlight.pack.js"],function(e){if(e)return a(e);R(f,a)});b&&ca(c+"highlight.js/styles/"+b+".css",function(){})};Y.prototype.render=function(){hljs.highlightBlock(this.a.querySelector("code"))};u.Object.defineProperties(Y,{plain:{configurable:!0,enumerable:!0,get:function(){return!0}}});
function ia(a){return"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.9/languages/"+a+".min.js"};

//# sourceMappingURL=common.js.map