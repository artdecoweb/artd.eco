window["back-to"]=null;t(document.querySelectorAll("[data-smooth]")).concat().forEach(function(a){a.onclick=function(){var b=a.getAttribute("href"),c=document.querySelector(b);c&&(window["back-to"]={y:window.scrollY,name:b.replace("#","")},c.scrollIntoView({behavior:"smooth"}));return!1}});var ya={};y();var za={animation:T,"back-to":U,highlightjs:Y,parallax:I,"social-buttons":V},Aa=B();
[{key:"highlightjs",id:"c6ce5,c6ce51,c6ce52",props:{lang:"xml,javascript"}},{key:"highlightjs",id:"c1602",props:{lang:"xml,css"}},{key:"back-to",id:"c6965",props:{name:"fig-74268"}},{key:"parallax",id:"c647b",props:{"background-image":"img/tile.jpg"}},{key:"back-to",id:"ce513",props:{name:"fig-9848"}},{key:"social-buttons",id:"ce5ba",props:{url:"https://www.artd.eco/articles/the-best-way-to-load-google-fonts-asynchronously.html",size:24,c:!0}},{key:"back-to",id:"ceba0",props:{name:"fig-lemuria-font"}},
{key:"back-to",id:"c0208",props:{name:"fig-advanced-loading"}},{key:"highlightjs",id:"ccdbf,ccdbf1,ccdbf2,ccdbf3,ccdbf4,ccdbf5",props:{lang:"javascript"}},{key:"animation",id:"c5f46",props:{path:"best-google-font-2/animate/async-google-font.json",width:505,height:299,align:"right"}},{key:"highlightjs",id:"c1d47",props:{lang:"css"}},{key:"back-to",id:"ccb6d",props:{name:"fig-before-body"}},{key:"animation",id:"c228f",props:{path:"best-google-font-2/animate/advanced-google-font.json",width:505,height:299}},
{key:"social-buttons",id:"cc4dd",props:{url:"https://www.artd.eco/articles/the-best-way-to-load-google-fonts-asynchronously.html",size:36,c:!0}},{key:"parallax",id:"c709f,c709f1,c709f2,c709f3,c709f4",props:{"background-image":"/img/letters/background.png",l:"-0.5"}}].forEach(function(a){var b=a.key,c=a.id,d=void 0===a.props?{}:a.props,f=void 0===a.children?[]:a.children,e=za[b],k=e.plain||/^\s*class\s+/.test(e.toString())&&!G.isPrototypeOf(e);d.m={i:"/",v:function(g){return z(ya[g])}};c.split(",").forEach(function(g){var m=
A(g,b),l=m.parent,h=m.a;if(h){var n={key:b,id:g,plain:k},p;h.render=function(){return p=E(n,e,p,h,l,d,f)};h.render.c=n;Aa.observe(h)}})});

//# sourceMappingURL=best-google-font-2.js.map