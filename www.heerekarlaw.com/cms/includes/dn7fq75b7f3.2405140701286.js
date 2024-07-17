(function(){function h(n,t,i){var f,r,u,e,o;if(typeof i=="string"&&(f=i,i=function(n){n.classList.add(f)}),typeof IntersectionObserver=="undefined"){i(n);return}t<0?(r=-t*200+"px",u=0):n.offsetHeight>window.innerHeight?(r="0px",u=t*window.innerHeight/n.offsetHeight||0):(r="0px",u=t||0);e={root:null,rootMargin:r,threshold:u};o=new IntersectionObserver(function(t,r){var u=t.find(function(n){return n.isIntersecting});u&&(i(n),r.unobserve(n),r.disconnect())},e);o.observe(n)}function e(){for(var n,r=[],i=document.querySelectorAll("img[data-src],img[data-bg],video[data-src],source[data-src]"),t=0;t<i.length;t++){if(n=i[t],n.parentNode.nodeName.toLowerCase()==="picture")if(n=n.parentNode,r.indexOf(n)>=0)continue;else r.push(n);h(n,-.5,y)}window.USE&&window.USE.Replace()}function y(n){var t,r,i=n.getAttribute("data-src"),f=n.getAttribute("data-bg"),e=(n.nodeName||"").toLowerCase(),u;switch(e){case"img":f?n.style.backgroundImage="url('"+f+"')":i&&(n.setAttribute("src",i),t=n);n.removeAttribute("data-src");n.removeAttribute("data-bg");break;case"video":i&&n.setAttribute("poster",i);n.removeAttribute("data-src");break;case"picture":for(u=0;u<n.children.length;u++)r=n.children[u],i=r.getAttribute("data-src"),r.removeAttribute("data-src"),(r.nodeName||"").toLowerCase()=="img"?(t=r,i&&(v?t.setAttribute("src",i):(t.style.backgroundImage="url('"+i+"')",t=null))):i&&r.setAttribute("srcset",i)}if(t){if(t.$loading)return}else t=document.createElement("img"),t.style.position="absolute",t.style.opacity=0,t.style.pointerEvents="none",t.style.left="-100%",t.style.top="-100%",t.$placeholder=!0,document.body.appendChild(t),t.setAttribute("src",f||i||a);t.$loading=n;t.complete?o.call(t):(n.classList.add("loading"),t.addEventListener("load",o))}function o(){var n=this.$loading;n?(delete this.$loading,n.classList.remove("loading")):this.classList.remove("loading");this.removeEventListener("load",o);this.$placeholder&&(delete this.$placeholder,this.parentNode&&this.parentNode.removeChild(this))}var c=document.documentElement.getAttribute("data-anim")!=="0",l=document.documentElement.getAttribute("data-prlx")!=="0",a="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",v="objectFit"in document.body.style,n,s,t,i,r,u,f;if(document&&document.querySelectorAll){for(n=document.querySelectorAll("[data-onvisible]"),s=n&&n.length,t=0;t<s;t++)(i=n[t],r=i.getAttribute("data-onvisible"),r)&&(c?h(i,.33,r):i.classList.add(r));l&&window.matchMedia("(prefers-reduced-motion)").matches===!1&&(n=document.querySelectorAll("[data-parallax]"),n&&n.length>0&&require2("usc/p/passive-parallax",function(){USC.parallax(n)}));u=document.querySelectorAll(".raw-html-embed .el-tab-box");u.length>0&&require2("usc/p/utils",()=>{u.forEach(n=>{USC.onVisible(n,0,()=>{require2("usc/p/tabbable",()=>{USC.tabbable(n)})})})});f=document.querySelectorAll("video");f.length>0&&require2("usc/p/utils",()=>{f.forEach(n=>{USC.onVisible(n,0,()=>{window.USC.initVideos||require2("/common/usc/p/video.js",()=>{window.USC.initVideos()})})})})}window.LazyLoad=e;e();setTimeout(e,1e3)})();
(function(n){function u(n){for(var t=n;t&&t.parentNode;){if(t.nodeName==="svg"||t.nodeName==="SVG")return t;t=t.parentNode}return null}function f(n){n.readyState===4?i.call(n):n.onreadystatechange||(n.onreadystatechange=function(){n.readyState===4&&i.call(n)},n.onreadystatechange())}function i(){var n,t=this._document,i;for(t||(this._document=t=document.implementation.createHTMLDocument(""),t.body.innerHTML=this.responseText,this._target={});n=this._embeds.pop();)i=this._target[n.id],i||(this._target[n.id]=i=t.getElementById(n.id)),r(n.use,n.parent,n.svg,i)}function r(n,t,i,r){var u,f,e;if(r&&n.parentNode===t){for(t.removeChild(n),u=document.createDocumentFragment(),f=!i.hasAttribute("viewBox")&&r.getAttribute("viewBox"),f&&i.setAttribute("viewBox",f),e=r.cloneNode(!0);e.childNodes.length;)u.appendChild(e.firstChild);t.appendChild(u)}}var t={};n.USE={Replace:function(n){var y,s,i,a,h,v,p,c,l,w,o,e;if(n&&n.getElementsByTagName||(n=document),n.nodeName==="USE"||n.nodeName==="use")s=[n];else for(y=n.getElementsByTagName("use"),s=new Array(y.length),e=0;e<s.length;e++)s[e]=y[e];for(e=0;e<s.length;e++){if(i=s[e],i._replacing)continue;else i._replacing=1;(a=i.parentNode,h=u(a),v=h&&(i.getAttribute("data-href")||i.getAttribute("xlink:href")||i.getAttribute("href")),v)&&(p=v.split("#"),c=p[0],l=p[1],!l&&(w=/icon_(\w+)\./.exec(c))&&(l=w[1]),c?(o=t[c],o||(t[c]=o=new XMLHttpRequest,o.open("GET",c),o.send(),o._embeds=[]),h.attributes["data-use"]||h.setAttribute("data-use",v),o._embeds.push({use:i,parent:a,svg:h,id:l}),f(o)):r(i,a,h,document.getElementById(l)))}window.USC&&window.USC.initVideos&&window.USC.initVideos()}};(n.requestAnimationFrame||n.setTimeout)(USE.Replace,0);window.register&&window.register("svg")})(window);
(function(){Element.prototype.scrollParent||(Element.prototype.scrollParent=function(){for(var n=this.parentNode,t=this.ownerDocument,i=t&&t.defaultView;i&&n;){if(n.parentNode&&n.parentNode!==t.body&&n.parentNode!==t.documentElement&&n.parentNode!==t&&n.parentNode!==t.defaultView){if(n.isScrollable())return n}else return null;n=n.parentNode}return null});Element.prototype.isScrollable||(Element.prototype.isScrollable=function(){var n=this.ownerDocument,i=n&&n.defaultView,t=i.getComputedStyle(this).getPropertyValue("overflow");return!t||t==="visible"?!1:this.clientWidth<this.scrollWidth||this.clientHeight<this.scrollHeight});Element.prototype.scrollTo||(Element.prototype.scrollTo=function(n,t){this.scrollLeft=n;this.scrollTop=t});Element.prototype.scrolling||(Element.prototype.scrolling=function(n,t,i,r,u){var e,f,s;if(!n&&!t){if(r)try{r.call(this)}catch(l){}return}if(e=this.cancelAnimationFrame?this:this.ownerDocument.defaultView,e){if(this.$scrolling&&this.$scrolling.frame&&(e.cancelAnimationFrame(this.$scrolling.frame),u)){var o=this.$scrolling,h=o.diffX-((this.pageXOffset||this.scrollLeft||0)-o.startX),c=o.diffY-((this.pageYOffset||this.scrollTop||0)-o.startY);h&&(n+=h);c&&(t+=c)}if(delete this.$scrolling,f={startX:this.pageXOffset||this.scrollLeft||0,startY:this.pageYOffset||this.scrollTop||0,diffX:n,diffY:t,dur:i||Math.min(500,Math.max(250,Math.abs(t/4))),frame:0,style:this.constructor===Window?e.document.documentElement.style:this.style},r&&typeof r=="function"&&(f.callback=r),f.diffY<0&&f.startY===0&&(f.diffY=0),f.diffX<0&&f.startX===0&&(f.diffX=0),!f.diffY&&!f.diffX){if(f.callback)try{f.callback.call(this)}catch(l){}f=null;return}if(f.dur<0){n=f.diffX+f.startX;t=f.diffY+f.startY;this.scrollTo(n,t);return}this.$scrolling=f;s=function(n){var r,i,u,f,t=this.$scrolling;if(t.begin){if(r=n-t.begin,i=Math.min(1,r/t.dur),i=.5-Math.cos(i*Math.PI)/2,u=i*t.diffX+t.startX,f=i*t.diffY+t.startY,this.scrollTo(u,f),i===1){if(t.style&&(t.style.removeProperty("scroll-behavior"),delete t.style),t.callback)try{t.callback.call(this)}catch(o){}delete this.$scrolling;return}}else t.begin=n,t.style&&t.style.setProperty("scroll-behavior","auto");this.$scrolling.frame=e.requestAnimationFrame(s)}.bind(this);this.$scrolling.frame=e.requestAnimationFrame(s)}});Window.prototype.scrolling||(Window.prototype.scrolling=Element.prototype.scrolling);Document.prototype.getFixedElements||(Document.prototype.getFixedElements=function(){for(var n,r,t,u=this.querySelectorAll("aside,div,header,nav,ul"),f=[],i=0;i<u.length;i++)n=u[i],r=getComputedStyle(n),t=r.getPropertyValue("position"),(t==="fixed"||t==="sticky")&&f.push(n);return f});Document.prototype.fixedOffset||(Document.prototype.fixedOffset=function(n){for(var t,r,i,o=this.documentElement.clientWidth/2,e=this.getFixedElements(),u=0,f=0;f<e.length;f++)(r=e[f],i=getComputedStyle(r),i.opacity!=="0"&&i.visibility!=="hidden"&&i.display!=="none")&&(t=r.getBoundingClientRect(),(t.top===0||n)&&t.left===0&&t.width>o&&t.height>u&&t.height!==window.innerHeight&&(u=t.height));return u});Element.prototype.scrollIntoViewport||(Element.prototype.scrollIntoViewport=function(n){var o=this.getBoundingClientRect(),i={top:o.top,right:o.right,bottom:o.bottom,left:o.left,width:o.width,height:o.height},f,e,r,t,l,s,u,h,c,a,v;if(n&&n.height&&(i.height=n.height,i.bottom=i.top+i.height),i.height===0&&i.top===0){if(f=this.previousElementSibling&&this.previousElementSibling.getBoundingClientRect(),f&&f.height?i={top:f.bottom+1,right:f.right,bottom:f.bottom+2,left:f.left,width:f.width,height:1}:e=this.nextElementSibling&&this.nextElementSibling.getBoundingClientRect(),e&&e.height)i={top:e.top-2,right:e.right,bottom:e.top-1,left:e.left,width:e.width,height:1};else if(!i&&(i=this.parentNode.getBoundingClientRect(),!i.height))return}else if(i.height===0&&this.nodeName==="INPUT"&&(i=this.parentNode.getBoundingClientRect(),!i.height))return;if(r=n&&n.container,r!==!1)if(r)if(r.ownerDocument){if(!r.contains(this)){console.error("Element not found in container",this,r);return}}else{console.error("Invalid container",r);return}else r=this.scrollParent();if(t={},r){if(t.height=r.clientHeight,!t.height)return;t.width=r.clientWidth;l=r.getBoundingClientRect();t.top=l.top;t.left=l.left;t.topOffset=0}else{if(s=this.ownerDocument,!s||!s.documentElement)return;t.height=s.documentElement.clientHeight;t.width=s.documentElement.clientWidth;t.top=0;t.left=0;t.topOffset=n&&n.fixed?s.fixedOffset():0}u=n&&n.margin||0;h=0;n&&n.top?h=i.top-t.topOffset-t.top-u:i.top>t.top+t.height?h=i.height>t.height-1?i.top-t.topOffset-t.top-u:i.bottom-t.top-t.height+u:i.bottom<t.top+t.topOffset+u&&(h=i.height>t.height-1?i.bottom-t.top-t.height+u:i.top-t.topOffset-t.top-u);c=0;i.left>t.left+t.width?c=i.width>t.width-1?i.left-t.left-u:i.right-t.left-t.width+u:i.right<t.left+u&&(c=i.width>t.width-1?i.right-t.left-t.width+u:i.left-t.left-u);a=n&&n.instant?-1:n&&n.duration;v=n&&n.callback;(r||this.ownerDocument.defaultView).scrolling(c,h,a,v)});window.register&&window.register("usc/p/scroll")})();
window.USC||(window.USC={});rrequire("usc/p/poly",function(){function r(n){var r;if(n==="true")return!0;if(n==="false")return!1;if(n==="null")return null;if(isNaN(r=+n)||n!==String(r)){if(i.test(n))try{return t(n)}catch(u){}}else return r;return n}var t=function(n,t){return(window.JSON2||JSON).parse(n,t)},i=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,n;USC.parseJson=t;USC.elementData=function(n){var i,t,u,f,e;if(!n||!n.attributes)return undefined;for(i={},t=0;t<n.attributes.length;t++)u=n.attributes[t],f=String(u.name),f.indexOf("data-")===0&&(e=f.substring(5).replace(/\-([a-z])/g,function(n,t){return t.toUpperCase()}),i[e]=r(u.value));return i};USC.linkData=function(n){var e=n&&n.target,t=e&&e.closest("a,button"),u=t&&t.getAttribute("href"),i=u&&/^javascript:(\w+)(?:\('([^']+)')?(?:\s*,\s*(\d+?)\))?/i.exec(u),o=i&&i[1],r=o==="void"?i[2]:undefined,f;return r&&r!=="0"||(r=t&&t.getAttribute("data-action")),r&&(i&&i[3]?f=+i[3]:t.getAttribute("data-id")&&(f=+t.getAttribute("data-id"))),{link:t,href:u,fn:o,action:r,id:f}};USC.setAttributes=function(n,t){var i,r;for(i in t)t.hasOwnProperty(i)&&(r=t[i],typeof r!="undefined"&&n.setAttribute(i,r))};USC.onVisible=function(n,t,i,r){var u,f,e,o;n&&typeof IntersectionObserver!="undefined"&&(t<0?(u=-t+"px",f=0):(u="0px",f=t),e={root:null,rootMargin:u,threshold:f},o=new IntersectionObserver(function(t,u){var f=t.find(function(n){return n.isIntersecting});if(!r){f&&(i(n),u.unobserve(n),u.disconnect());return}f?i(n):r(n)},e),o.observe(n))};USC.docReady=function(t){if(t){if(!n)switch(document.readyState){case"complete":case"loaded":case"interactive":n=!0;return}if(n)t();else{var i=function(){n=!0;window.removeEventListener("DOMContentLoaded",i);t()};window.addEventListener("DOMContentLoaded",i)}}};USC.uuid=function(){var n=performance.now();return"_xxxxxxxxxxxxxxxx".replace(/x/g,function(){var t=(n+Math.random()*16)%16|0;return n=Math.floor(n/16),t.toString(16)})};USC.guid=function(){var n=performance.now();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var i=(n+Math.random()*16)%16|0;return n=Math.floor(n/16),(t=="x"?i:i&3|8).toString(16)})};USC.urlfriendly=function(n){return n?(""+n).replace(/([a-z])(?:'s|s')\b/gi,"$1s").replace(/\W+/gi,"-").toLowerCase():""};USC.logError=function(n,t){if(n&&n.stack&&(console.error(n.stack),t))try{console.error(JSON.stringify(Array.prototype.slice.call(t)))}catch(n){}};USC.getKey=function(n){var i=n.code&&n.code.replace(/Key|Digit/,""),r=n.ctrlKey,u=n.altKey,f=n.shiftKey,t;switch(i){case"AltLeft":case"AltRight":u=!1;break;case"ShiftLeft":case"ShiftRight":f=!1;case"ControlLeft":case"ControlRight":r=!1}return t="",r&&(t+="CTRL-"),u&&(t+="ALT-"),f&&(t+="SHIFT-"),t+i.toUpperCase()};USC.Encode={};USC.Encode.JS=USC.Encode.Uri=function(n){return n?encodeURIComponent(""+n).replace(/['"\(\)]/g,function(n){switch(n){case"'":return"%27";case'"':return"%22";case"(":return"%28";case")":return"%29";default:return n}}):""};USC.Decode={};USC.Decode.JS=USC.Decode.Uri=function(n){return n?decodeURIComponent((""+n).replace(/\+/g,"%20")):""};USC.getElementsCollectionByDataAttribute=function(n,t,i){var r,f,s,o,e,u,h;if(!n)return null;if(r={},f=Array.from((t||document).querySelectorAll(n)),i&&f.push(t),!f.length)return r;for(s=n.replace(/[\[\]]/g,""),o=0;o<f.length;o++)e=f[o],u=e.getAttribute(s),r[u]?r[u]&&!Array.isArray(r[u])?(h=r[u],r[u]=[],r[u].push(h),r[u].push(e)):r[u].push(e):r[u]=e;return r};USC.getEnvironment=function(){return document.body.getAttribute("data-api")||"api"};USC.getScorpionApiDomain=function(n){return window.location.protocol+"//"+(n?n:USC.getEnvironment())+".scorpion.co/"};window.register&&window.register("usc/p/utils")});
window.USC||(window.USC={});require2("usc/p/utils",function(){function r(n,t){for(var i,r,u,e=t.querySelectorAll("[data-role]"),f=0;f<e.length;f++){i=e[f];r=i.getAttribute("data-role");switch(r){case"scroller":case"items":break;case"item":i.querySelector("a")||i.setAttribute("tabindex",0);n.items.push(i);break;case"thumbList":case"list":case"container":n[r]=i;break;default:u=n[r];u?u.push(i):n[r]=u=[i]}}}function n(n){var u,t;for(this.element=n,this.els={scroller:n.closest("[data-role='scroller']")||n,items:[]},r(this.els,this.els.scroller),u=USC.elementData(n),this.options=Object.assign({},i,u),this.state={index:0,rtimer:0,prop:"transform",axis:"transformX{0}",wn:window.innerWidth,tabbing:!1},t=0;t<this.els.items.length;t++)if(getComputedStyle(this.els.items[t]).display==="none")return!1;this.handleClick=this.handleClick.bind(this);this.handleKeydown=this.handleKeydown.bind(this);this.handleFocusIn=this.handleFocusIn.bind(this);this.handleResize=this.handleResize.bind(this);this.els.scroller.addEventListener("click",this.handleClick);this.els.scroller.addEventListener("keydown",this.handleKeydown);this.els.scroller.addEventListener("focusin",this.handleFocusIn);window.addEventListener("resize",this.handleResize);"ontouchstart"in window&&(this.state.x0,this.state.x1,this.els.scroller.addEventListener("touchstart",function(n){this.handleTouchStart(n)}.bind(this),{passive:!0}),this.els.scroller.addEventListener("touchend",function(n){this.handleTouchEnd(n)}.bind(this),{passive:!0}));this.measure();this.refresh();this.els.scroller.classList.add("active")}var i={scroll:"panel",wrap:!1,activate:"item",firstActive:!1,property:"transform",autoAdvance:!1,delay:8e3,duration:0},t="s-active";n.prototype._activate=function(n){n.classList.add(t);var i=n.closest(".el-tab[aria-controls]"),r=i&&i.closest(".el-tab-box"),u=r&&r.$Tabbable;i&&r&&u&&u.tabState(i.getAttribute("index"))};n.prototype._deactivate=function(n){n&&n.classList.contains(t)&&(n.classList.remove(t),n.querySelectorAll("video").forEach(function(n){n.pause()}))};n.prototype._position=function(n){return to=this.options.scroll!=="panel"?n*this.state.single:Math.round(n/this.state.visible)*this.state.panel};n.prototype.animate=function(n){var t=this._position(n),i;this.state.max&&t>this.state.max&&(t=this.state.max);i=this.state.axis.replace("{0}",t*-100+"%");this.els.list.style[this.state.prop]=i;this.state.index=n;this.refresh();window.dispatchEvent(new CustomEvent("scroll"))};n.prototype.moveTo=function(n){this.state.panel&&(n<0?n=this.options.wrap?this.state.length-1:0:n>=this.state.length&&(n=this.options.wrap?0:this.state.length-1),n!==this.state.index)&&(this.state.visible===this.state.length||this.animate(n))};n.prototype.next=function(){if(this.options.scroll==="panel"){var n=Math.floor(this.state.index/this.state.visible);n++;this.moveTo(n*this.state.visible)}else this.moveTo(this.state.index+1)};n.prototype.prev=function(){if(this.options.scroll==="panel"){var n=Math.floor(this.state.index/this.state.visible);n--;this.moveTo(n*this.state.visible)}else this.moveTo(this.state.index-1)};n.prototype.handleClick=function(n){var t=n.target.closest("[data-action], [data-role]"),u,i,r;if(t)if(u=t.getAttribute("data-action")?!0:!1,u){i=t.dataset;switch(i.action){case"Next":this.next();break;case"Prev":this.prev();break;case"Thumb":this.moveTo(parseInt(i.index))}}else t.getAttribute("data-role")==="item"&&this.options.scroll==="single"&&this.options.activate==="item"&&(r=this.els.items.indexOf(t),r>=0&&this.moveTo(r))};n.prototype.measure=function(){var t,r,l,i,u,s;if(this.els.items.length){var n,f,a,h=this.els.container.getBoundingClientRect(),v=this.els.list.getBoundingClientRect(),y=this.els.items[0].getBoundingClientRect(),e="left",c="right",p="width",o=this.els.items;switch(this.options.property){case"transform":this.state.prop="transform";this.state.axis="translateX({0})";break;case"margin":this.state.prop="marginLeft";this.state.axis="{0}";break;default:console.log("Invalid animation property")}for(this.state.length=o.length,this.state.single=0,this.state.panel=0,this.state.visible=0,this.state.pages=0,this.state.size=0,n={left:y.left,top:y.top,right:h.right,bottom:h.bottom},this.options.property==="transform"?(n.width=v.width,n.height=v.height):(n.width=h.width,n.height=h.height),t=1;t<o.length;t++)f=o[t].getBoundingClientRect(),t===1&&(this.state.single=(f[e]-n[e])/n[p]),!this.state.pages&&f[c]>n[c]&&(this.state.panel=(f[e]-n[e])/n[p],this.state.visible=t,this.state.pages=Math.ceil(o.length/t)),t===o.length-1&&(this.state.size=f[c]-n[e]);if(this.state.visible?(a=this.state.length%this.state.visible)&&(this.state.max=(this.state.pages-2)*this.state.panel+a*this.state.single):(this.els.scroller.classList.add("no-scroll"),this.state.visible=this.state.length,this.state.pages=1),this.state.pages>1&&this.els.thumbList){for(r=Array.from(this.els.thumbList.querySelectorAll('[data-action="Thumb"]')),!this.thumbEl&&r.length&&(l=r[0],this.thumbEl=document.createElement(l.tagName),this.thumbEl.setAttribute("class",l.getAttribute("class")),this.thumbEl.setAttribute("data-action","Thumb")),i=0;i<this.state.pages;i++)u=this.options.scroll==="panel"?Math.ceil(this.els.items.length/this.state.pages*i):i,r.length&&r[i]?r[i].setAttribute("data-index",u):(s=this.thumbEl?this.thumbEl.cloneNode(!0):document.createElement(this.els.thumbList.tagName=="UL"?"li":"span"),this.thumbEl?(s.setAttribute("title","View Item "+(u+1)),s.setAttribute("data-index",u)):s.innerHTML='<button title="View Item '+(u+1)+'" data-action="Thumb" data-index="'+u+'"><\/button>',this.els.thumbList.append(s));this.els.thumbs=Array.from(this.els.scroller.querySelectorAll('[data-action="Thumb"]'))}}};n.prototype.reset=function(){if(this.state.rTimer!==0){var n=window.innerWidth;if(n===this.state.wn)return}this.state.wn=n;this.els.list.style.transform="none";this.options.property==="margin"&&this.els.list.style.removeProperty("marginLeft");this.state.index=0;this.els.thumbList&&(this.els.thumbs&&this.els.thumbs.forEach(n=>n.remove()),delete this.els.thumbs);this.measure();void this.els.list.offsetWidth;this.refresh()};n.prototype.refresh=function(){var u,f,e,i,r,o,s,n,t;if(this.options.scroll==="panel"?(u=this.state.index<this.state.visible,f=Math.floor(this.state.index/this.state.visible)===this.state.pages-1):(u=this.state.index===0,f=this.state.index===this.state.length-1),this.els.scroller.classList[u?"add":"remove"]("start"),this.els.scroller.classList[f?"add":"remove"]("end"),this.els.items)for(this.options.activate==="panel"?(i=Math.floor(this.state.index/this.state.visible)*this.state.visible,r=i+this.state.visible-1):this.state.visible%2==1&&this.options.firstActive===!1&&this.state.tabbing===!1?(e=this.state.index>=this.els.items.length-Math.floor(this.state.visible/2)?this.state.index-this.els.items.length+Math.floor(this.state.visible/2):this.state.index+Math.floor(this.state.visible/2),i=e,r=e):(i=this.state.index,r=this.state.index),n=0;n<this.els.items.length;n++)t=this.els.items[n],n>=i&&n<=r?this._activate(t):this._deactivate(t);if(this.els.thumbs)for(n=0;n<this.els.thumbs.length;n++)t=this.els.thumbs[n],parseInt(t.getAttribute("data-index"))===this.state.index?this._activate(t):this._deactivate(t);this.options.scroll==="panel"?(o=Math.floor(this.state.index/this.state.visible)+1,s=this.state.pages):(o=this.state.index+1,s=this.state.length);this.els["page-active"]&&this.els["page-active"].forEach(function(n){n.textContent=o});this.els["page-total"]&&this.els["page-total"].forEach(function(n){n.textContent=s})};n.prototype.handleResize=function(){clearTimeout(this.state.rtimer);this.state.rtimer=setTimeout(function(){this.reset()}.bind(this),100)};n.prototype.handleKeydown=function(n){this.els.scroller.classList.contains("tabbing")||n.keyCode!==9||(this.els.scroller.classList.add("tabbing"),this.state.tabbing=!0,this.els.scroller.removeEventListener("click",this.handleClick),this.els.scroller.removeEventListener("keydown",this.handleKeydown),this.els.scroller.removeEventListener("focusin",this.handleFocusIn),window.removeEventListener("resize",this.handleResize),delete this.element.$scrollingList)};n.prototype.handleFocusIn=function(n){var i=this.els.items.indexOf(n.target);i!==-1&&(n.target.classList.contains(t)||this.animate(i))};n.prototype.handleTouchStart=function(n){this.state.x0=n.changedTouches[0].clientX};n.prototype.handleTouchEnd=function(n){if(this.state.x0){var t=n.changedTouches[0].clientX-this.state.x0;t>=50&&this.prev();t<=-50&&this.next()}};USC._proto_||(USC._proto_={});USC._proto_.ScrollingList=n;window.USC.scrollingList=function(t){if(t!==null)if(t instanceof HTMLElement){if(t.$scrollingList){console.log("ScrollingList already initialized.");return}t.$scrollingList=new n(t)}else throw new Error("Need an HTMLElement to initialize a ScrollingList.");};window.register&&window.register("usc/p/scrolling-list")});
require2('usc/p/scrolling-list',function(){USC.scrollingList(document.getElementById('BlogSystemV1Entry_ITM1382712_BlogPostPageRelatedPostsList'))});
require2(["/common/usc/p/passive-accessibility.js"],function(){var t=document.getElementById("AccessibilityOptionsV1"),i=function(n){window.USC.listenUp||require2("/common/usc/p/passive-listener.js",function(){USC.listenUp(n)})},n,r;t.addEventListener("click",i);t.addEventListener("keydown",i);n=document.getElementById("AccessibilityOptionsV1");r=n.querySelector(".acc-mnu");n&&USC.accessMenu(r)});
var el=document.getElementById("HeaderV3"),headClick=function(n){window.USC.listenUp?el.$tabbable||USC.tabbable(el):require2("/common/usc/p/passive-listener.js",function(){USC.listenUp(n)})};el.addEventListener("click",headClick);el.addEventListener("keydown",headClick);
window.USC||(window.USC={});require2(["usc/p/utils"],function(){function i(n){for(var t=n.closest("[data-header]")||n,r,u,f,i;t&&t!==document.body;){if(f=getComputedStyle(t),i=f.getPropertyValue("position"),i==="fixed"||i==="sticky"||i==="absolute"||t.matches("header")){r=t;(i==="fixed"||i==="absolute")&&(u=document.querySelector("main>form:first-child>section")||document.querySelector("main>section:first-child")||document.querySelector("main"));break}t=t.parentNode}return{header:r,padding:u}}function r(n){this.element=n;this.els=i(n);this.state={over:!1,rtimer:0,stimer:0,htimer:0,h_height:0,wn_height:0,wn_width:0,scroll:0,collapsed:!1};this.evt={measure:function(){this.measure()}.bind(this),scroll:function(){clearTimeout(this.state.stimer);clearTimeout(this.state.htimer);this.state.stimer=setTimeout(this.adjust,100)}.bind(this)};this.hide=c.bind(this);this.measure=l.bind(this);this.adjust=v.bind(this);this.element.addEventListener("focusin",u.bind(this));this.element.addEventListener("mouseover",f.bind(this));this.element.addEventListener("mouseleave",t.bind(this));this.element.addEventListener("focusout",t.bind(this));this.element.addEventListener("click",e.bind(this));this.els.header&&(this.measure(),this.adjust(),this.els.header.addEventListener("mouseenter",o.bind(this)),this.els.header.addEventListener("mouseleave",s.bind(this)),window.addEventListener("resize",h.bind(this)),window.addEventListener("scroll",a.bind(this),{passive:!0}))}function u(t){var r=t.target.closest("li"),i;if(r&&!r.classList.contains("active"))for(this.element.querySelectorAll("li.active").forEach(n),r.classList.add("active"),i=r.parentNode;i&&i!==this.element;)i.nodeName==="LI"&&i.classList.add("active"),i=i.parentNode}function f(n){var t=n.target.closest("a");t&&t.focus()}function t(){this.element.querySelectorAll("li.active").forEach(n);var t=document.activeElement;t&&this.element.contains(t)&&t.blur()}function e(n){var t=USC.linkData(n),i,r;if(t.href&&t.href[0]==="#"&&(i=t.href.substring(1))&&(r=document.querySelector("a[name='"+i+"']"),r))throw new Error("Need to implement the simple show/hide.");}function o(){this.state.over=!0}function s(){this.state.over=!1;this.state.htimer&&(clearTimeout(this.state.htimer),this.state.htimer=setTimeout(this.hide,4e3))}function h(){clearTimeout(this.state.rtimer);this.state.rtimer=setTimeout(this.measure,250)}function c(){this.state.over||(clearTimeout(this.state.htimer),this.state.htimer=0,this.adjust(!0))}function l(){if(this.els.header){var n=this.els.header.getBoundingClientRect();this.state.h_height=n.height;this.state.wn_height=window.innerHeight;this.state.wn_width=window.innerWidth;this.state.scroll=window.scrollY;this.els.padding&&(this.els.padding.style.paddingTop=this.state.h_height+"px")}}function a(){clearTimeout(this.state.stimer);clearTimeout(this.state.htimer);this.state.stimer=setTimeout(this.adjust,100)}function v(n){var r,u,i,t;this.els.header&&(r=window.scrollY,u=r-this.state.scroll,clearTimeout(this.state.htimer),r<this.state.h_height?i=!1:n===!0?i=!0:u<this.state.wn_height/-3?(i=!1,this.state.htimer=setTimeout(this.evt.hide,4e3)):i=!0,this.state.scroll=r,t=document.documentElement,i?(t.classList.remove("header-show"),t.classList.add("header-hide")):r?(t.classList.remove("header-hide"),t.classList.add("header-show")):(t.classList.remove("header-hide"),t.classList.remove("header-show")),this.state.collapsed=i)}var n=function(n){n.classList.remove("active")};window.USC.siteHeader=function(n){if(n instanceof HTMLElement){if(n.$siteHeader){console.log("SiteHeader already initialized.");return}n.$siteHeader=new r(n)}else throw new Error("Need an HTMLElement to initialize a SiteHeader.");};window.register&&window.register("usc/p/site-header")});
require2('usc/p/site-header',function(){USC.siteHeader(document.getElementById('HeaderV3TopNav'))});