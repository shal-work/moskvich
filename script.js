!function(t){var e={};function o(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=1)}([function(t,e){let o=0;const r=new IntersectionObserver(t=>{t.forEach(t=>{let e=t.target.querySelectorAll("[data-transform]"),r=t.target.querySelectorAll("[data-animated]");if(document.addEventListener("wheel",t=>{o=Math.sign(t.deltaY)}),e.length&&t.isIntersecting&&e.forEach((function(t){let e=t.dataset.transform.split(","),r=(e[0],e[1]*o),n=1e3*e[2];t.animate([{transform:`translateY(${r}%)`},{transform:"translateY(0px)"}],{duration:n,fill:"forwards"})})),r.length&&t.isIntersecting){let e=t.target.querySelectorAll("[data-animated]");if(t.isIntersecting)return void e.forEach((function(t){let e=t.dataset.animated;t.classList.add(e),t.style.animationName=e}));e.forEach((function(t){let e=t.dataset.animated;t.classList.remove(e),t.style.animationName="none"}))}})},{rootMargin:"-1px",threshold:0});try{document.querySelectorAll(".anima").forEach(t=>{r.observe(t)})}catch(t){}},function(t,e,o){"use strict";o.r(e);const r=function(t){return new r.prototype.init(t)};r.prototype.init=function(t){return t?t.tagName?(this[0]=t,this.length=1,this):(Object.assign(this,document.querySelectorAll(t)),this.length=document.querySelectorAll(t).length,this):this},r.prototype.init.prototype=r.prototype,window.$=r;var n=r;n.prototype.show=function(){for(let t=0;t<this.length;t++)this[t].style&&(this[t].style.display="");return this},n.prototype.hide=function(){for(let t=0;t<this.length;t++)this[t].style&&(this[t].style.display="none");return this},n.prototype.toggle=function(){for(let t=0;t<this.length;t++)this[t].style&&("none"===this[t].style.display?this[t].style.display="":this[t].style.display="none");return this},n.prototype.addClass=function(){for(let t=0;t<this.length;t++)this[t].classList&&this[t].classList.add(...arguments);return this},n.prototype.removeClass=function(){for(let t=0;t<this.length;t++)this[t].classList&&this[t].classList.remove(...arguments);return this},n.prototype.toggleClass=function(t){for(let e=0;e<this.length;e++)this[e].classList&&this[e].classList.toggle(t);return this},n.prototype.hasClass=function(t){if(!this[0])return!1;let e=[...this[0].classList];for(let o=0;o<e.length;o++)return e.indexOf(t)>-1;return!1},n.prototype.on=function(t,e){if(!t||!e)return this;for(let o=0;o<this.length;o++)this[o].addEventListener(t,e);return this},n.prototype.off=function(t,e){if(!t||!e)return this;for(let o=0;o<this.length;o++)this[o].removeEventListener(t,e);return this},n.prototype.click=function(t){for(let e=0;e<this.length;e++)t?this[e].addEventListener("click",t):this[e].click();return this},n.prototype.setAttribute=function(t,e){for(let o=0;o<this.length;o++)this[o].hasAttribute(t)||this[o].setAttribute(t,e);return this},n.prototype.removeAttribute=function(t){for(let e=0;e<this.length;e++)this[e].hasAttribute(t)&&this[e].removeAttribute(t);return this},n.prototype.toggleAttribute=function(t,e){for(let o=0;o<this.length;o++)this[o].hasAttribute(t)?this[o].removeAttribute(t):this[o].setAttribute(t,e);return this};var s=n;var l=(t,e)=>{const o=document.querySelector(t),r=document.querySelector(e);o.style.cssText="\n                border-radius: 50%;\n                z-index: 10;\n                transition: transform .75s cubic-bezier(.075, .5, 0, 1);",r.style.transition="transform .25s ease-out",o.addEventListener("mouseenter",t=>{o.style.willChange="transform"}),r.addEventListener("mouseenter",t=>{r.style.willChange="transform, color"}),o.addEventListener("mouseleave",t=>{o.style.willChange="auto"}),r.addEventListener("mouseleave",t=>{r.style.willChange="auto"}),o.addEventListener("mousemove",t=>{let e=t.pageX-o.getBoundingClientRect().left-o.getBoundingClientRect().width/2,r=t.pageY-o.getBoundingClientRect().top-o.getBoundingClientRect().height/2;o.style.transform="translate("+e/3+"px ,"+r/3+"px)"}),o.addEventListener("mouseleave",t=>{o.style.transform="translate(0px , 0px)"}),o.addEventListener("touchmove",t=>{let e=t.touches[0].clientX-o.getBoundingClientRect().left-o.getBoundingClientRect().width/2,r=t.touches[0].clientY-o.getBoundingClientRect().top-o.getBoundingClientRect().height/2;o.style.transform="translate("+e/3+"px ,"+r/3+"px)"}),o.addEventListener("touchend",t=>{o.style.transform="translate(0px , 0px)"})};var i=(t,e,o)=>{let r=document.querySelector(e),n=document.querySelector(o);let s=0,l=Math.round(1e3/(t/1)),i=setInterval(()=>{s+=1,s>=t&&(clearInterval(i),r.style.opacity="0",n.style.opacity="1"),r.innerHTML=s},l)};var a=()=>{const t=document.querySelector(".headscreen"),e=document.querySelector(".wrapper"),o=document.querySelector(".loader__scroll"),r=document.querySelector(".footer__menu"),n=document.querySelectorAll(".footer__menu-policy"),s=document.querySelector(".button__equalizer"),l=document.querySelectorAll(".slide"),i=document.querySelector(".nav"),a=document.querySelector(".nav__menu"),c=document.querySelector(".nav__menu_item"),u=parseInt(getComputedStyle(c).height),d=a.querySelectorAll(".nav__menu_link"),h=l[0].offsetHeight,y=document.querySelector(".prototype");let f=0,p=h,m=0,g=!0,v=!0,b=u,_=0,S=0,L=0,x=l.length;document.addEventListener("wheel",t=>{let e=Math.sign(t.deltaY);w(e)}),$(".content").on("touchstart",t=>{S=t.touches[0].clientY}),$(".content").on("touchend",t=>{let e=0,o=t.changedTouches[0].clientY,r=o>S?-1:1;o==S?r=0:(e=o-S,S=0,w(r,e))});const w=o=>{v&&(o>0?g?(f=0,m=0,q(),E(1800)):f<x&&(v=!1,f++,m-=p,e.style.transform="translateY("+m+"px)",_-=b,a.style.transform="translateY("+_+"px)",O(f),E(800)):(f>L&&(v=!1,f--,m+=p,e.style.transform="translateY("+m+"px)",_+=b,a.style.transform="translateY("+_+"px)",O(f)),f<=0&&(v=!0,$(t).show(),g=!0,C(),e.style.transform="translateY("+p+"px)"),E(800)))};$(o).on("click",(function(){q()}));const E=t=>{setTimeout(()=>{v=!0},t)},q=()=>{g=!1,v=!1,f++,m-=p,e.style.transform="translateY("+m+"px)",_-=b,a.style.transform="translateY("+_+"px)",O(f),$(i).show(),i.style.visibility="visible",$(i).addClass("fadeOut"),setTimeout(()=>{A(),v=!0},1600)},A=()=>{$(".logo-moskvich").removeAttribute("src"),$(".logo-moskvich").setAttribute("src","assets/img/Logo_of_Moskvich_history.svg"),r.style.color="#9f9e9e",n.forEach(t=>{t.style.color="#9f9e9e"}),n.forEach(t=>{t.classList.add("tool")}),s.style.color="#000",$(i).show(),$(i).removeClass("fadeOut"),$(i).addClass("fadeIn"),$(y).hide()},C=()=>{$(".logo-moskvich").removeAttribute("src"),$(".logo-moskvich").setAttribute("src","assets/img/Logo_of_Moskvich_first.svg"),r.style.color="#fff",n.forEach(t=>{t.style.color="#fff"}),n.forEach(t=>{t.classList.remove("tool")}),s.style.color="#fff",$(i).addClass("fadeOut"),$(i).removeClass("fadeIn"),$(i).hide(),$(y).show()};d.forEach((function(t){let e=t.dataset.slide;t.addEventListener("click",()=>{Y(e)})}));const O=t=>{d.forEach((function(t){t.style.opacity="0",t.style.color="#19191980"}));try{d[t-4].style.opacity="0.33"}catch(t){}try{d[t-3].style.opacity="0.67"}catch(t){}try{d[t-2].style.opacity="1"}catch(t){}try{d[t-1].style.opacity="1"}catch(t){}try{d[t].style.color="#191919",d[t].style.opacity="1"}catch(t){}try{d[t+1].style.opacity="1"}catch(t){}try{d[t+2].style.opacity="1"}catch(t){}try{d[t+3].style.opacity="0.67"}catch(t){}try{d[t+4].style.opacity="0.33"}catch(t){}},Y=t=>{f=+t,m=-p*+t,e.style.transform="translateY("+m+"px)",_=-b*t,a.style.transform="translateY("+_+"px)",O(f)}};o(0);console.log("%c  РОССИЯ  ","background: blue; color: yellow; font-size: large; border-left: 5px solid black; border-top: 20px solid white; border-right: 2px solid black; border-bottom: 20px solid red;"),window.addEventListener("DOMContentLoaded",()=>{l(".gravity",".gravity__element");let t=new Audio;t.src="./assets/audio/Музыка А. Пахмутова Слова Н. Добронравов Исполняет Эдуард Хиль - Гимн автомобилю Москвич_(OOSOUND.RU).mp3",s(".button__equalizer").on("click",()=>{document.querySelectorAll(".button__equalizer-line").forEach(e=>{"paused"===getComputedStyle(e).animationPlayState?(e.style.animationPlayState="running",t.play()):(e.style.animationPlayState="paused",t.pause())})}),i(100,".loader__percent",".loader__scroll-arrow"),a(),s(".nav").hide()}),document.addEventListener("DOMContentLoaded",(function(t){window.onresize=function(){location.reload()}}))}]);