(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
var wl;

ldsrcset=function(t){var e,r=document.querySelectorAll(t);for(e=0;e<r.length;e++){var c=r[e].getAttribute("data-srcset");r[e].setAttribute("srcset",c)}},ldsrc=function(t){var e=document.querySelector(t),r=e.getAttribute("data-src");e.setAttribute("src",r)};!function(){if("Promise"in window){var e,t,r=document,n=function(){return r.createElement("link")},o=new Set,a=n(),s=a.relList&&a.relList.supports&&a.relList.supports("prefetch"),i=location.href.replace(/#[^#]+$/,"");o.add(i);var c=function(e){var t=location,r="http:",n="https:";if(e&&e.href&&e.origin==t.origin&&[r,n].includes(e.protocol)&&(e.protocol!=r||t.protocol!=n)){var o=e.pathname;if(!(e.hash&&o+e.search==t.pathname+t.search||"?preload=no"==e.search.substr(-11)||".html"!=o.substr(-5)&&".html"!=o.substr(-5)&&"/"!=o.substr(-1)))return!0}},u=function(e){var t=e.replace(/#[^#]+$/,"");if(!o.has(t)){if(s){var a=n();a.rel="prefetch",a.href=t,r.head.appendChild(a)}else{var i=new XMLHttpRequest;i.open("GET",t,i.withCredentials=!0),i.send()}o.add(t)}},p=function(e){return e.target.closest("a")},f=function(t){var r=t.relatedTarget;r&&p(t)==r.closest("a")||e&&(clearTimeout(e),e=void 0)},l={capture:!0,passive:!0};r.addEventListener("touchstart",function(e){t=performance.now();var r=p(e);c(r)&&u(r.href)},l),r.addEventListener("mouseover",function(r){if(!(performance.now()-t<1200)){var n=p(r);c(n)&&(n.addEventListener("mouseout",f,{passive:!0}),e=setTimeout(function(){u(n.href),e=void 0},80))}},l)}}();

$(function(){
r=function(){dpi=window.devicePixelRatio;var e=document.querySelector('.js218');e.setAttribute('src',(dpi>1)?((dpi>2)?'images/p1000242-717.jpg':'images/p1000242-478.jpg'):'images/p1000242-239.jpg');
var e=document.querySelector('.js219');e.setAttribute('src',(dpi>1)?((dpi>2)?'images/p1000247-720.jpg':'images/p1000247-480-1.jpg'):'images/p1000247-240.jpg');
var e=document.querySelector('.js220');e.setAttribute('src',(dpi>1)?((dpi>2)?'images/p1010095-720.jpg':'images/p1010095-480-1.jpg'):'images/p1010095-240.jpg');
var e=document.querySelector('.js221');e.setAttribute('src',(dpi>1)?((dpi>2)?'images/p1010096-717.jpg':'images/p1010096-478.jpg'):'images/p1010096-239.jpg');

};
if(!window.HTMLPictureElement){r();}
js217=new Plyr('.js217 video',{iconUrl:'css/plyr.svg',blankUrl: 'css/blank.mp4',controls:['play-large','play','progress','current-time','mute','volume','fullscreen'],storage:{enabled:false}});
js217.volume=0.8;
ldsrc('.js223');ldsrcset('.js224 source');
});