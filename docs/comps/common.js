function l(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function m(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:l(a)}}function p(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}var q="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},r;
if("function"==typeof Object.setPrototypeOf)r=Object.setPrototypeOf;else{var t;a:{var v={C:!0},w={};try{w.__proto__=v;t=w.C;break a}catch(a){}t=!1}r=t?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var x=r,y="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,z="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(a[e]=d[e])}return a},A="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
function B(a,b){if(b){var c=y;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&A(c,a,{configurable:!0,writable:!0,value:b})}}B("Object.assign",function(a){return a||z});
B("String.prototype.endsWith",function(a){return a?a:function(b,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");void 0===c&&(c=this.length);c=Math.max(0,Math.min(c|0,this.length));for(var d=b.length;0<d&&0<c;)if(this[--c]!=b[--d])return!1;return 0>=d}});function C(){var a=document.getElementById("bottom"),b=a.previousElementSibling,c=b.style.height,d=parseInt(c,10),e=!1,f=null,g=0;document.onmousewheel=function(h){e&&(g+=h.wheelDelta,b.style.height=Math.min(d+-g/50,d+50)+"px",b.style.transition="",window.clearInterval(f),window.clearInterval(null),f=window.setTimeout(function(){g=0;b.style.height=c;b.style.transition="height .5s"},150))};(new IntersectionObserver(function(h){h.forEach(function(k){e=k=k.isIntersecting;k||(b.style.height=c,g=0)})})).observe(a)}
;function D(a){return a?function(b){return b.raw[0].split(/\s+/).map(function(c){var d=a[c];d||console.error("Key %s is not present in the CSS map.",c);return d}).filter(Boolean).join(" ")}:function(b){return b}};var E=preact,F=E.h,G=E.Component,H=E.render;function I(a,b){var c=document.getElementById(a);if(!c)return console.warn("Parent element for component %s with id %s not found",b,a),{};var d=c.parentElement;return d?{parent:d,a:c}:(console.warn("Parent of element for component %s with id %s not found",b,a),{})}
function J(){var a=void 0===a?{}:a;var b=Object.assign({},a),c=void 0===a.rootMargin?"76px":a.rootMargin,d=void 0===a.log?!0:a.log;a=(delete b.rootMargin,delete b.log,b);var e=new IntersectionObserver(function(f){f.forEach(function(g){var h=g.target;g.isIntersecting&&(d&&console.warn("Rendering component %s into the element %s ",h.render.i.key,h.render.i.id),e.unobserve(h),h.render())})},Object.assign({},{rootMargin:c},a));return e}
function K(a,b,c,d,e){function f(){a.plain||/^\\s*class\\s+/.test(a.toString())&&!G.isPrototypeOf(a)?(new a(b,c)).render(Object.assign({},d,{children:e})):H(F(a,d,e),c,b)}a.load?a.load(function(g,h){h&&Object.assign(d,h);g||f()},b,d):f()};function L(a,b){var c=document.createElement("link");c.rel="stylesheet";c.href=a;c.onload=function(d){return b(null,d)};c.onerror=function(d){return b(d)};document.head.appendChild(c)};function M(a,b){this.a=a;this.m=this.o=null;this.c=this.b=0;b.removeChild(b.querySelector("noscript"))}function N(a){var b=a.o.getBoundingClientRect(),c=b.height,d=b.width,e=b.top-window.innerHeight,f=-(-window.innerHeight-c);b=f*Math.abs(a.b);a.a.style["min-height"]=c+b+"px";c=f*Math.abs(a.c);a.a.style["min-width"]=d+c+"px";d=e*a.b;e*=a.c;0>a.c&&(e-=c);0>a.b&&(d-=b);b="translate3d("+(e.toFixed()+"px, ")+(d.toFixed()+"px, 0)");a.a.style.transform=b;a.a.style.webkitTransform=b}
M.load=function(a,b,c){c=c["background-image"];var d=document.createElement("img");d.src=c;d.onload=function(){a(null,{F:b.className,style:b.getAttribute("style")})};d.onerror=function(){a(Error("Image could not be loaded."))};L("/css/Parallax.css",function(){})};
M.prototype.render=function(a){var b=this,c=a["background-image"],d=void 0===a.c?0:a.c;this.b=parseFloat((void 0===a.b?.5:a.b)||.5);this.c=parseFloat(d||0);this.o=this.a.nextElementSibling;this.m=function(){N(b)};window.addEventListener("scroll",this.m);this.a.style["background-image"]="url("+c+")";this.a.className+=" RunFadeIn";N(this)};y.Object.defineProperties(M,{browserProps:{configurable:!0,enumerable:!0,get:function(){return["background-image"]}},plain:{configurable:!0,enumerable:!0,get:function(){return!0}}});var O=document.querySelectorAll("[data-background-img]");if(O.length){var P=new IntersectionObserver(function(a){a.forEach(function(b){var c=b.target;b.isIntersecting&&(P.unobserve(c),b=c.getAttribute("data-background-img"),c.removeAttribute("data-background-img"),c.style.background="url("+b+")")})},{rootMargin:"75px"});(O instanceof Array?O:p(m(O))).concat().forEach(function(a){return P.observe(a)})};

//# sourceMappingURL=common.js.map