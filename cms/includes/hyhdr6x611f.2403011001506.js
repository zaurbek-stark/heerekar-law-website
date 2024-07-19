(function(){function h(n,t,i){var f,r,u,e,o;if(typeof i=="string"&&(f=i,i=function(n){n.classList.add(f)}),typeof IntersectionObserver=="undefined"){i(n);return}t<0?(r=-t*200+"px",u=0):n.offsetHeight>window.innerHeight?(r="0px",u=t*window.innerHeight/n.offsetHeight||0):(r="0px",u=t||0);e={root:null,rootMargin:r,threshold:u};o=new IntersectionObserver(function(t,r){var u=t.find(function(n){return n.isIntersecting});u&&(i(n),r.unobserve(n),r.disconnect())},e);o.observe(n)}function e(){for(var n,r=[],i=document.querySelectorAll("img[data-src],img[data-bg],video[data-src],source[data-src]"),t=0;t<i.length;t++){if(n=i[t],n.parentNode.nodeName.toLowerCase()==="picture")if(n=n.parentNode,r.indexOf(n)>=0)continue;else r.push(n);h(n,-.5,y)}window.USE&&window.USE.Replace()}function y(n){var t,r,i=n.getAttribute("data-src"),f=n.getAttribute("data-bg"),e=(n.nodeName||"").toLowerCase(),u;switch(e){case"img":f?n.style.backgroundImage="url('"+f+"')":i&&(n.setAttribute("src",i),t=n);n.removeAttribute("data-src");n.removeAttribute("data-bg");break;case"video":i&&n.setAttribute("poster",i);n.removeAttribute("data-src");break;case"picture":for(u=0;u<n.children.length;u++)r=n.children[u],i=r.getAttribute("data-src"),r.removeAttribute("data-src"),(r.nodeName||"").toLowerCase()=="img"?(t=r,i&&(v?t.setAttribute("src",i):(t.style.backgroundImage="url('"+i+"')",t=null))):i&&r.setAttribute("srcset",i)}if(t){if(t.$loading)return}else t=document.createElement("img"),t.style.position="absolute",t.style.opacity=0,t.style.pointerEvents="none",t.style.left="-100%",t.style.top="-100%",t.$placeholder=!0,document.body.appendChild(t),t.setAttribute("src",f||i||a);t.$loading=n;t.complete?o.call(t):(n.classList.add("loading"),t.addEventListener("load",o))}function o(){var n=this.$loading;n?(delete this.$loading,n.classList.remove("loading")):this.classList.remove("loading");this.removeEventListener("load",o);this.$placeholder&&(delete this.$placeholder,this.parentNode&&this.parentNode.removeChild(this))}var c=document.documentElement.getAttribute("data-anim")!=="0",l=document.documentElement.getAttribute("data-prlx")!=="0",a="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",v="objectFit"in document.body.style,n,s,t,i,r,u,f;if(document&&document.querySelectorAll){for(n=document.querySelectorAll("[data-onvisible]"),s=n&&n.length,t=0;t<s;t++)(i=n[t],r=i.getAttribute("data-onvisible"),r)&&(c?h(i,.33,r):i.classList.add(r));l&&window.matchMedia("(prefers-reduced-motion)").matches===!1&&(n=document.querySelectorAll("[data-parallax]"),n&&n.length>0&&require2("usc/p/passive-parallax",function(){USC.parallax(n)}));u=document.querySelectorAll(".raw-html-embed .el-tab-box");u.length>0&&require2("usc/p/utils",()=>{u.forEach(n=>{USC.onVisible(n,0,()=>{require2("usc/p/tabbable",()=>{USC.tabbable(n)})})})});f=document.querySelectorAll("video");f.length>0&&require2("usc/p/utils",()=>{f.forEach(n=>{USC.onVisible(n,0,()=>{window.USC.initVideos||require2("common/usc/p/video.js",()=>{window.USC.initVideos()})})})})}window.LazyLoad=e;e();setTimeout(e,1e3)})();
(function(n){function u(n){for(var t=n;t&&t.parentNode;){if(t.nodeName==="svg"||t.nodeName==="SVG")return t;t=t.parentNode}return null}function f(n){n.readyState===4?i.call(n):n.onreadystatechange||(n.onreadystatechange=function(){n.readyState===4&&i.call(n)},n.onreadystatechange())}function i(){var n,t=this._document,i;for(t||(this._document=t=document.implementation.createHTMLDocument(""),t.body.innerHTML=this.responseText,this._target={});n=this._embeds.pop();)i=this._target[n.id],i||(this._target[n.id]=i=t.getElementById(n.id)),r(n.use,n.parent,n.svg,i)}function r(n,t,i,r){var u,f,e;if(r&&n.parentNode===t){for(t.removeChild(n),u=document.createDocumentFragment(),f=!i.hasAttribute("viewBox")&&r.getAttribute("viewBox"),f&&i.setAttribute("viewBox",f),e=r.cloneNode(!0);e.childNodes.length;)u.appendChild(e.firstChild);t.appendChild(u)}}var t={};n.USE={Replace:function(n){var y,s,i,a,h,v,p,c,l,w,o,e;if(n&&n.getElementsByTagName||(n=document),n.nodeName==="USE"||n.nodeName==="use")s=[n];else for(y=n.getElementsByTagName("use"),s=new Array(y.length),e=0;e<s.length;e++)s[e]=y[e];for(e=0;e<s.length;e++){if(i=s[e],i._replacing)continue;else i._replacing=1;(a=i.parentNode,h=u(a),v=h&&(i.getAttribute("data-href")||i.getAttribute("xlink:href")||i.getAttribute("href")),v)&&(p=v.split("#"),c=p[0],l=p[1],!l&&(w=/icon_(\w+)\./.exec(c))&&(l=w[1]),c?(o=t[c],o||(t[c]=o=new XMLHttpRequest,o.open("GET",c),o.send(),o._embeds=[]),h.attributes["data-use"]||h.setAttribute("data-use",v),o._embeds.push({use:i,parent:a,svg:h,id:l}),f(o)):r(i,a,h,document.getElementById(l)))}window.USC&&window.USC.initVideos&&window.USC.initVideos()}};(n.requestAnimationFrame||n.setTimeout)(USE.Replace,0);window.register&&window.register("svg")})(window);
(function(){Element.prototype.scrollParent||(Element.prototype.scrollParent=function(){for(var n=this.parentNode,t=this.ownerDocument,i=t&&t.defaultView;i&&n;){if(n.parentNode&&n.parentNode!==t.body&&n.parentNode!==t.documentElement&&n.parentNode!==t&&n.parentNode!==t.defaultView){if(n.isScrollable())return n}else return null;n=n.parentNode}return null});Element.prototype.isScrollable||(Element.prototype.isScrollable=function(){var n=this.ownerDocument,i=n&&n.defaultView,t=i.getComputedStyle(this).getPropertyValue("overflow");return!t||t==="visible"?!1:this.clientWidth<this.scrollWidth||this.clientHeight<this.scrollHeight});Element.prototype.scrollTo||(Element.prototype.scrollTo=function(n,t){this.scrollLeft=n;this.scrollTop=t});Element.prototype.scrolling||(Element.prototype.scrolling=function(n,t,i,r,u){var e,f,s;if(!n&&!t){if(r)try{r.call(this)}catch(l){}return}if(e=this.cancelAnimationFrame?this:this.ownerDocument.defaultView,e){if(this.$scrolling&&this.$scrolling.frame&&(e.cancelAnimationFrame(this.$scrolling.frame),u)){var o=this.$scrolling,h=o.diffX-((this.pageXOffset||this.scrollLeft||0)-o.startX),c=o.diffY-((this.pageYOffset||this.scrollTop||0)-o.startY);h&&(n+=h);c&&(t+=c)}if(delete this.$scrolling,f={startX:this.pageXOffset||this.scrollLeft||0,startY:this.pageYOffset||this.scrollTop||0,diffX:n,diffY:t,dur:i||Math.min(500,Math.max(250,Math.abs(t/4))),frame:0,style:this.constructor===Window?e.document.documentElement.style:this.style},r&&typeof r=="function"&&(f.callback=r),f.diffY<0&&f.startY===0&&(f.diffY=0),f.diffX<0&&f.startX===0&&(f.diffX=0),!f.diffY&&!f.diffX){if(f.callback)try{f.callback.call(this)}catch(l){}f=null;return}if(f.dur<0){n=f.diffX+f.startX;t=f.diffY+f.startY;this.scrollTo(n,t);return}this.$scrolling=f;s=function(n){var r,i,u,f,t=this.$scrolling;if(t.begin){if(r=n-t.begin,i=Math.min(1,r/t.dur),i=.5-Math.cos(i*Math.PI)/2,u=i*t.diffX+t.startX,f=i*t.diffY+t.startY,this.scrollTo(u,f),i===1){if(t.style&&(t.style.removeProperty("scroll-behavior"),delete t.style),t.callback)try{t.callback.call(this)}catch(o){}delete this.$scrolling;return}}else t.begin=n,t.style&&t.style.setProperty("scroll-behavior","auto");this.$scrolling.frame=e.requestAnimationFrame(s)}.bind(this);this.$scrolling.frame=e.requestAnimationFrame(s)}});Window.prototype.scrolling||(Window.prototype.scrolling=Element.prototype.scrolling);Document.prototype.getFixedElements||(Document.prototype.getFixedElements=function(){for(var n,r,t,u=this.querySelectorAll("aside,div,header,nav,ul"),f=[],i=0;i<u.length;i++)n=u[i],r=getComputedStyle(n),t=r.getPropertyValue("position"),(t==="fixed"||t==="sticky")&&f.push(n);return f});Document.prototype.fixedOffset||(Document.prototype.fixedOffset=function(n){for(var t,r,i,o=this.documentElement.clientWidth/2,e=this.getFixedElements(),u=0,f=0;f<e.length;f++)(r=e[f],i=getComputedStyle(r),i.opacity!=="0"&&i.visibility!=="hidden"&&i.display!=="none")&&(t=r.getBoundingClientRect(),(t.top===0||n)&&t.left===0&&t.width>o&&t.height>u&&t.height!==window.innerHeight&&(u=t.height));return u});Element.prototype.scrollIntoViewport||(Element.prototype.scrollIntoViewport=function(n){var o=this.getBoundingClientRect(),i={top:o.top,right:o.right,bottom:o.bottom,left:o.left,width:o.width,height:o.height},f,e,r,t,l,s,u,h,c,a,v;if(n&&n.height&&(i.height=n.height,i.bottom=i.top+i.height),i.height===0&&i.top===0){if(f=this.previousElementSibling&&this.previousElementSibling.getBoundingClientRect(),f&&f.height?i={top:f.bottom+1,right:f.right,bottom:f.bottom+2,left:f.left,width:f.width,height:1}:e=this.nextElementSibling&&this.nextElementSibling.getBoundingClientRect(),e&&e.height)i={top:e.top-2,right:e.right,bottom:e.top-1,left:e.left,width:e.width,height:1};else if(!i&&(i=this.parentNode.getBoundingClientRect(),!i.height))return}else if(i.height===0&&this.nodeName==="INPUT"&&(i=this.parentNode.getBoundingClientRect(),!i.height))return;if(r=n&&n.container,r!==!1)if(r)if(r.ownerDocument){if(!r.contains(this)){console.error("Element not found in container",this,r);return}}else{console.error("Invalid container",r);return}else r=this.scrollParent();if(t={},r){if(t.height=r.clientHeight,!t.height)return;t.width=r.clientWidth;l=r.getBoundingClientRect();t.top=l.top;t.left=l.left;t.topOffset=0}else{if(s=this.ownerDocument,!s||!s.documentElement)return;t.height=s.documentElement.clientHeight;t.width=s.documentElement.clientWidth;t.top=0;t.left=0;t.topOffset=n&&n.fixed?s.fixedOffset():0}u=n&&n.margin||0;h=0;n&&n.top?h=i.top-t.topOffset-t.top-u:i.top>t.top+t.height?h=i.height>t.height-1?i.top-t.topOffset-t.top-u:i.bottom-t.top-t.height+u:i.bottom<t.top+t.topOffset+u&&(h=i.height>t.height-1?i.bottom-t.top-t.height+u:i.top-t.topOffset-t.top-u);c=0;i.left>t.left+t.width?c=i.width>t.width-1?i.left-t.left-u:i.right-t.left-t.width+u:i.right<t.left+u&&(c=i.width>t.width-1?i.right-t.left-t.width+u:i.left-t.left-u);a=n&&n.instant?-1:n&&n.duration;v=n&&n.callback;(r||this.ownerDocument.defaultView).scrolling(c,h,a,v)});window.register&&window.register("usc/p/scroll")})();
require2(["common/usc/p/passive-accessibility.js"],function(){var t=document.getElementById("AccessibilityOptionsV1"),i=function(n){window.USC.listenUp||require2("common",function(){USC.listenUp(n)})},n,r;t.addEventListener("click",i);t.addEventListener("keydown",i);n=document.getElementById("AccessibilityOptionsV1");r=n.querySelector(".acc-mnu");n&&USC.accessMenu(r)});
var el=document.getElementById("HeaderV3"),headClick=function(n){window.USC.listenUp?el.$tabbable||USC.tabbable(el):require2("common",function(){USC.listenUp(n)})};el.addEventListener("click",headClick);el.addEventListener("keydown",headClick);
window.USC||(window.USC={});rrequire("usc/p/poly",function(){function r(n){var r;if(n==="true")return!0;if(n==="false")return!1;if(n==="null")return null;if(isNaN(r=+n)||n!==String(r)){if(i.test(n))try{return t(n)}catch(u){}}else return r;return n}var t=function(n,t){return(window.JSON2||JSON).parse(n,t)},i=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,n;USC.parseJson=t;USC.elementData=function(n){var i,t,u,f,e;if(!n||!n.attributes)return undefined;for(i={},t=0;t<n.attributes.length;t++)u=n.attributes[t],f=String(u.name),f.indexOf("data-")===0&&(e=f.substring(5).replace(/\-([a-z])/g,function(n,t){return t.toUpperCase()}),i[e]=r(u.value));return i};USC.linkData=function(n){var e=n&&n.target,t=e&&e.closest("a,button"),u=t&&t.getAttribute("href"),i=u&&/^javascript:(\w+)(?:\('([^']+)')?(?:\s*,\s*(\d+?)\))?/i.exec(u),o=i&&i[1],r=o==="void"?i[2]:undefined,f;return r&&r!=="0"||(r=t&&t.getAttribute("data-action")),r&&(i&&i[3]?f=+i[3]:t.getAttribute("data-id")&&(f=+t.getAttribute("data-id"))),{link:t,href:u,fn:o,action:r,id:f}};USC.setAttributes=function(n,t){var i,r;for(i in t)t.hasOwnProperty(i)&&(r=t[i],typeof r!="undefined"&&n.setAttribute(i,r))};USC.onVisible=function(n,t,i,r){var u,f,e,o;n&&typeof IntersectionObserver!="undefined"&&(t<0?(u=-t+"px",f=0):(u="0px",f=t),e={root:null,rootMargin:u,threshold:f},o=new IntersectionObserver(function(t,u){var f=t.find(function(n){return n.isIntersecting});if(!r){f&&(i(n),u.unobserve(n),u.disconnect());return}f?i(n):r(n)},e),o.observe(n))};USC.docReady=function(t){if(t){if(!n)switch(document.readyState){case"complete":case"loaded":case"interactive":n=!0;return}if(n)t();else{var i=function(){n=!0;window.removeEventListener("DOMContentLoaded",i);t()};window.addEventListener("DOMContentLoaded",i)}}};USC.uuid=function(){var n=performance.now();return"_xxxxxxxxxxxxxxxx".replace(/x/g,function(){var t=(n+Math.random()*16)%16|0;return n=Math.floor(n/16),t.toString(16)})};USC.guid=function(){var n=performance.now();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var i=(n+Math.random()*16)%16|0;return n=Math.floor(n/16),(t=="x"?i:i&3|8).toString(16)})};USC.urlfriendly=function(n){return n?(""+n).replace(/([a-z])(?:'s|s')\b/gi,"$1s").replace(/\W+/gi,"-").toLowerCase():""};USC.logError=function(n,t){if(n&&n.stack&&(console.error(n.stack),t))try{console.error(JSON.stringify(Array.prototype.slice.call(t)))}catch(n){}};USC.getKey=function(n){var i=n.code&&n.code.replace(/Key|Digit/,""),r=n.ctrlKey,u=n.altKey,f=n.shiftKey,t;switch(i){case"AltLeft":case"AltRight":u=!1;break;case"ShiftLeft":case"ShiftRight":f=!1;case"ControlLeft":case"ControlRight":r=!1}return t="",r&&(t+="CTRL-"),u&&(t+="ALT-"),f&&(t+="SHIFT-"),t+i.toUpperCase()};USC.Encode={};USC.Encode.JS=USC.Encode.Uri=function(n){return n?encodeURIComponent(""+n).replace(/['"\(\)]/g,function(n){switch(n){case"'":return"%27";case'"':return"%22";case"(":return"%28";case")":return"%29";default:return n}}):""};USC.Decode={};USC.Decode.JS=USC.Decode.Uri=function(n){return n?decodeURIComponent((""+n).replace(/\+/g,"%20")):""};USC.getElementsCollectionByDataAttribute=function(n,t,i){var r,f,s,o,e,u,h;if(!n)return null;if(r={},f=Array.from((t||document).querySelectorAll(n)),i&&f.push(t),!f.length)return r;for(s=n.replace(/[\[\]]/g,""),o=0;o<f.length;o++)e=f[o],u=e.getAttribute(s),r[u]?r[u]&&!Array.isArray(r[u])?(h=r[u],r[u]=[],r[u].push(h),r[u].push(e)):r[u].push(e):r[u]=e;return r};USC.getEnvironment=function(){return document.body.getAttribute("data-api")||"api"};USC.getScorpionApiDomain=function(n){return window.location.protocol+"//"+(n?n:USC.getEnvironment())+".scorpion.co/"};window.register&&window.register("usc/p/utils")});
window.USC||(window.USC={});require2(["usc/p/utils"],function(){function i(n){for(var t=n.closest("[data-header]")||n,r,u,f,i;t&&t!==document.body;){if(f=getComputedStyle(t),i=f.getPropertyValue("position"),i==="fixed"||i==="sticky"||i==="absolute"||t.matches("header")){r=t;(i==="fixed"||i==="absolute")&&(u=document.querySelector("main>form:first-child>section")||document.querySelector("main>section:first-child")||document.querySelector("main"));break}t=t.parentNode}return{header:r,padding:u}}function r(n){this.element=n;this.els=i(n);this.state={over:!1,rtimer:0,stimer:0,htimer:0,h_height:0,wn_height:0,wn_width:0,scroll:0,collapsed:!1};this.evt={measure:function(){this.measure()}.bind(this),scroll:function(){clearTimeout(this.state.stimer);clearTimeout(this.state.htimer);this.state.stimer=setTimeout(this.adjust,100)}.bind(this)};this.hide=c.bind(this);this.measure=l.bind(this);this.adjust=v.bind(this);this.element.addEventListener("focusin",u.bind(this));this.element.addEventListener("mouseover",f.bind(this));this.element.addEventListener("mouseleave",t.bind(this));this.element.addEventListener("focusout",t.bind(this));this.element.addEventListener("click",e.bind(this));this.els.header&&(this.measure(),this.adjust(),this.els.header.addEventListener("mouseenter",o.bind(this)),this.els.header.addEventListener("mouseleave",s.bind(this)),window.addEventListener("resize",h.bind(this)),window.addEventListener("scroll",a.bind(this),{passive:!0}))}function u(t){var r=t.target.closest("li"),i;if(r&&!r.classList.contains("active"))for(this.element.querySelectorAll("li.active").forEach(n),r.classList.add("active"),i=r.parentNode;i&&i!==this.element;)i.nodeName==="LI"&&i.classList.add("active"),i=i.parentNode}function f(n){var t=n.target.closest("a");t&&t.focus()}function t(){this.element.querySelectorAll("li.active").forEach(n);var t=document.activeElement;t&&this.element.contains(t)&&t.blur()}function e(n){var t=USC.linkData(n),i,r;if(t.href&&t.href[0]==="#"&&(i=t.href.substring(1))&&(r=document.querySelector("a[name='"+i+"']"),r))throw new Error("Need to implement the simple show/hide.");}function o(){this.state.over=!0}function s(){this.state.over=!1;this.state.htimer&&(clearTimeout(this.state.htimer),this.state.htimer=setTimeout(this.hide,4e3))}function h(){clearTimeout(this.state.rtimer);this.state.rtimer=setTimeout(this.measure,250)}function c(){this.state.over||(clearTimeout(this.state.htimer),this.state.htimer=0,this.adjust(!0))}function l(){if(this.els.header){var n=this.els.header.getBoundingClientRect();this.state.h_height=n.height;this.state.wn_height=window.innerHeight;this.state.wn_width=window.innerWidth;this.state.scroll=window.scrollY;this.els.padding&&(this.els.padding.style.paddingTop=this.state.h_height+"px")}}function a(){clearTimeout(this.state.stimer);clearTimeout(this.state.htimer);this.state.stimer=setTimeout(this.adjust,100)}function v(n){var r,u,i,t;this.els.header&&(r=window.scrollY,u=r-this.state.scroll,clearTimeout(this.state.htimer),r<this.state.h_height?i=!1:n===!0?i=!0:u<this.state.wn_height/-3?(i=!1,this.state.htimer=setTimeout(this.evt.hide,4e3)):i=!0,this.state.scroll=r,t=document.documentElement,i?(t.classList.remove("header-show"),t.classList.add("header-hide")):r?(t.classList.remove("header-hide"),t.classList.add("header-show")):(t.classList.remove("header-hide"),t.classList.remove("header-show")),this.state.collapsed=i)}var n=function(n){n.classList.remove("active")};window.USC.siteHeader=function(n){if(n instanceof HTMLElement){if(n.$siteHeader){console.log("SiteHeader already initialized.");return}n.$siteHeader=new r(n)}else throw new Error("Need an HTMLElement to initialize a SiteHeader.");};window.register&&window.register("usc/p/site-header")});
require2('usc/p/site-header',function(){USC.siteHeader(document.getElementById('HeaderV3TopNav'))});
if ( !window.APPT ) { window.APPT = {}; }
require2( [
	'usc/p/phone-format',
	'usc/p/google-address-lookup',
	'm/appt/appt-state',
	'm/appt/appt-api',
	'm/appt/appt-calendar',
	'm/appt/appt-navigation',
	'm/appt/appt-questions',
	'm/appt/appt-paging',
	'usc/p/cookies'], function () {
    /**
     * A collection of elements on the page with a [data-appt] attribute. These are not meant to be changing but to remain static.
     */
	var els = {};
	var nodes = document.querySelectorAll( "[data-appt]" );
	for ( var i = 0; i < nodes.length; i++ ) {
		var node = nodes[i];
        var appt = node.getAttribute( 'data-appt' );
        var el = els[appt];
        if ( !el ) {
            els[appt] = node;
        } else if ( Array.isArray( el ) ) {
            el.push( node );
        } else {
            var a = [];
            a.push( el );
            a.push( node );
            els[appt] = a;
        }
	}

	var controls = {
		navigation: new APPT.navigation( els.navigation ),
		questions: new APPT.questions( els.questions ),
        paging: new APPT.paging( els.paging )
	};

    // Note if we're doing a content edit.
    APPT.IFRAME = window.frameElement && window.frameElement.id;
    APPT.CONTENT = APPT.IFRAME === 'CMSContent';

	// Initialize the API.
	var api = new APPT.api( +els.main.getAttribute( 'data-p' ), +els.main.getAttribute( 'data-c' ) );

	// Initialize the calendar with the api.
	var calendar = new APPT.calendar( APPT.currentState, api );
	APPT.onload.push(  function () {
		calendar.bind( APPT.currentState );
	} );

    // Initliaze the booking service. 
	var book = new APPT.book( api );

	// Cache query strings. 
	var query = new URLSearchParams( window.location.search );
	for ( let q of query ) {
		let [ name, value ] = q;
		switch ( name.toLowerCase() ) {
			case APPT.query.RWGTOKEN:
				if ( value !== '' )
					USC.cookies.set( APPT.query.RWGTOKEN, value );
				break;
			default:
				break;
		}
	}

	els.main.addEventListener( 'click', function ( e ) {
		if ( APPT.currentState.disabled )
			return;
		var data = USC.linkData( e );
		switch ( data.action ) {
			case 'SetStep':
                if ( calendar.getStatus() === 2 ) {
                    return;
                }
                APPT.setStep( +data.link.getAttribute( 'data-id' ), 0 );
				break;
			case 'PrevStep':
                if ( calendar.getStatus() === 2 ) {
                    return;
                }
                APPT.prevStep();
                scrollToTop();
				break;
			case 'NextStep':
                if ( calendar.getStatus() === 2 ) {
                    return;
                }
                nextStep();
				break;
            case 'Set Month':
                calendar.emptyTimeList();
                APPT.setMonth( data.link, calendar, controls.questions.ul );
                break;
            case 'Complete':
                book.submit( APPT.currentState, els.main );
                break;
            default:
                break;
		}
		var date = e.target.closest( "li[data-date]" );
		if ( date ) {
			APPT.pickDate( date.getAttribute( 'data-date' ) );
            calendar.update( APPT.currentState, controls.questions.ul );
		}
	} );

	// When a question is answered, update the state.
	els.main.addEventListener( 'change', function ( e ) {
		if ( APPT.currentState.disabled )
			return;
		var el = e.target.closest( "[data-question]" );
		if ( el ) {
			var name = el.getAttribute( 'data-question' );
			var answer = el.getValue();
			APPT.answer( name, answer );
		}
	} );

    /**
     * Try to proceed to the next step or panel.
     */
    function nextStep() {
        var valid;

        switch ( window.location.hash ) {
            case '#DateRequested':
                if ( !APPT.currentState.answers["DateRequested"] ) {
                    return;
                }
                break;
            default:
                break;
        }

        valid = els.form.reportValidity();
        APPT.setPanelCompleteStatus( valid );
        if ( valid ) {
            APPT.nextStep();

            scrollToTop();
        }
    }

    // Initialize the form controls.
    USC.form( els.form );

    /**
     * Array of subscriptions.
     * @type {{unsubscribe: Function}}
     */
	var subscriptions = [];

	// Initialize the appointment state.
	APPT.init();
	subscriptions.push(
		APPT.subscribe( 'state', function ( state ) {
			if ( state.disabled ) {
				handleError( state );
				return;
			}

			// Render the main navigation.
			controls.navigation.render( state );

			// Set the step title.
			var step = state.steps[state.step];
            var panel = step.Panels[state.panel];
			if ( !step ) {
				throw new Error( "Invalid Step -- cannot render" );
			}
			els.title.textContent = setText( state, panel.Title );
			els.header.textContent = setText( state, panel.Header );
			els.subHeader.textContent = setText( state, panel.SubHeader );

            // Set a custom class on the questions element.
			if ( panel.QuestionsClass ) {
                els.questions.setAttribute( "class", panel.QuestionsClass );
            } else {
                els.questions.removeAttribute( "class" );
            }

			// Set the step position.
			els.stepNo.textContent = state.step + 1;
            // Update the total number of steps.
            els.totalSteps.textContent = state.steps.length;

			// Render the questions.
			controls.questions.render( APPT.filterQuestions( panel.PanelQuestions, state.answers ), state.answers );

            USC.formatPhoneInputs();

            // Force the calendar to recache the elements on render.
            calendar.setCache( false );

            // Update the paging state.
            controls.paging.render( state );

            // Handle post processing. 
            handleState( state, controls.questions.ul );
		} ),
        APPT.subscribe( 'answered', function ( state ) {
			// Render the main navigation.
			controls.navigation.render( state );
		} ),
		APPT.subscribe( 'error', function ( state ) {
			handleError( state );
		} )
	);

	/**
	 * Set the UI in an error mode. 
	 * @param {any} state
	 */
	function handleError( state ) {
		setDisabled( state );
		controls.navigation.render( state );
		controls.paging.render( state );
	}

	/**
	 * Disable the workflow.
	 * @param {any} state
	 */
	function setDisabled( state ) {
		var phone = APPT.primaryPhone() || state.settings?.Phone || els.main.getAttribute( 'data-phone' );
		if ( !phone )
			phone = "";
		else
			// Make sure it's formatted nicely.
			phone = USC.formatPhoneNumber( phone );

		els.form.innerHTML = DISABLE_HTML.replace( '{Phone}', phone );
	}

	var DISABLE_HTML = '\
<div>\
	<h2>We’re sorry, this location isn’t currently accepting online appointments. Please give our office a call to check our availability!</h2>\
	{Phone}\
</div >';

    /**
     * Check for any tokens that require the answer to a previous question.
     * @param {any} text
     */
	function setText( state, text ) {
		if ( APPT.r_braces.test( text ) ) {
			if ( text === "{{ PreviousAnswer }}" ) {
				return previousStepAnswer( state );
			}

            var keys = Object.keys( state.answers );
            return text.replace( APPT.r_braces, function ( m, m1 ) {
                var name = m1.trim();
                // Check the answers for a matching value.
                for ( var i = 0; i < keys.length; i++ ) {
                    var key = keys[i];
                    if ( key.toLowerCase() === name.toLowerCase() ) {
                        return state.answers[key] || "";
                    }
                }
                // If we found a match but no answer matched then return an empty space so that we don't display the token.
                return "";
            } );
        }
        
        return text || "";
	}

	/**
	 * Grab the answer to a previous step's question.
	 * @param {any} state
	 */
	function previousStepAnswer( state ) {
		var steps = state.steps;
		var prevStep = steps[state.step - 1];
		if ( !prevStep ) {
			return "";
		}
		// Use the first panel.
		var panel = prevStep.Panels[0];
		var questions = APPT.filterQuestions( panel.PanelQuestions, state.answers );
		if ( !questions || !questions.length ) {
			return "";
		}
		// Grab the first question on the panel.
		var question = questions[0];
		var answer = state.answers[question.Name];
		return answer || "";
	}

    /**
     * If the Google Places API fails for some reason (site missing key, site not set up in Google Account, Google fails on their side) then update the UI to still 
     * allow the user to proceed. 
     * @param {any} els - Collection of [data-appt] elements on the page. 
     */
    function gm_authFailure( els ) {
        console.log( arguments );

        // Mark the flag that it's not valid.
        gaInvalid = true;

        // Remove the GA input. 
        var gaInput = els.questions.querySelector( '[data-question="CustomerAddress"]' );
        if ( gaInput )
            gaInput.closest( "li" ).remove();


        els.questions.classList.remove( 'loading' );
    }

    /**
     * Depending on the state handle any further necessary updates.
	 * 
     * @param {CurrentState} state
	 * @param {HTMLElement} parent
     */
    function handleState ( state, parent ) {
        var step = state.steps[state.step];
        var panel = step.Panels[state.panel];
        var subheader = document.querySelector( '[data-appt="subHeader"]' );

        // Cancel the calendar widget if it was in progress.
        calendar.cancel();

        switch( panel.Hash ) {
            case "#Location":
                ensureQuestionsOnly();
                APPT.locationsList();
                break;
            case "#Address":
                ensureQuestionsOnly();
                // Set a loading animation. 
                els.questions.classList.add( 'loading' );
                // Handle google map address lookup.
                if ( !gaInvalid && document.documentElement.getAttribute( 'data-gmap' ) ) {
                    setUpGoogleAutocomplete( state, els );
                } else {
                    // Not using GA, so remove the input. 
                    gm_authFailure( els );
				}
                break;
            case "#AddressInstructions":
                subheader.innerText = [
                    APPT.currentState.answers.Address1, 
                    APPT.currentState.answers.Address2 ? APPT.currentState.answers.Address2 : "", 
                    APPT.currentState.answers.City + ",",
                    APPT.currentState.answers.State,
                    APPT.currentState.answers.ZipCode
                ].join( ' ' );
                break;
			case "#DateRequested":
                // If we don't have a date saved on the state yet, see if we can grab it from a previously selected question.
                if ( !state.date ) {
                    var dateAnswered = state.answers.DateRequested;
                    if ( dateAnswered ) {
                        state.date = dateAnswered.split( " " );
                        state.date = state.date.length ? state.date[0] : null;
                    }
                }
                // See if the location we have selected has time slots we can use.
                calendar.checkLocationAvailability( APPT.currentState );
                // Update the calendar UI.
				calendar.update( state, parent );
                break;
            case "#Confirm":
                ensureQuestionsOnly();
                APPT.handleConfirmation( els.questions );
				break;
            default:
                ensureQuestionsOnly();
                break;
        }
    }

    /**
     * Closure.
     */
    function gm_authFailure_proxy() {
        gm_authFailure( els );
    }

    /**
     * Set the Google Maps API failure handler.
     */
    window.gm_authFailure = gm_authFailure_proxy;

    /** 
     *  Track if the Google Maps API failed for any reason 
     */
    var gaInvalid = false;
    /**
     * setTimeout for the autocomplete input
     */
    var ga_timeout;

    /**
     * Set up the Google Places autocomplete functionality.
     * @param {CurrentState} state
     * @param {any} els
     */
    function setUpGoogleAutocomplete( state,  els ) {
        // Delete the reference to recreate the widget. 
        if ( els.questions.$googleAddressLookup )
            delete els.questions.$googleAddressLookup;

        // Intialize the widget.
        USC.googleAddressLookup( els.questions );
        var address2 = els.questions.querySelector( "#Address2" );
        var gaInput = els.questions.querySelector( '[data-question="CustomerAddress"]' );
        google.maps.event.addListener( els.questions.$googleAddressLookup.places, 'place_changed', function () {
            // Loop through the inputs to update the answers in local storage.
            ["Address1", "Address2", "City", "State", "ZipCode"].forEach( function ( id, i ) {
                var input = els.questions.querySelector( "#" + id );
                if ( !input )
                    return;
                state.answers[id] = input.value;
            } );

            // Save the GASearch input value.
            var gasearch = els.questions.$googleAddressLookup.els.search;
            state.answers[gasearch.dataset.question] = gasearch.value;

            // Update local storage.
            window.localStorage.setItem( APPT.APPOINTMENT_CACHE, JSON.stringify( state.answers ) );

            if ( gaInput )
                gaInput.closest( 'li' ).classList.add( 'ga-selected' );

            if ( address2 )
                address2.focus();
        } );

        // If the input has a value, trigger the change for the classes on the LI to update. 
        if ( gaInput )
            gaInput.trigger( 'change' );

        if ( ga_timeout )
            clearTimeout( ga_timeout );

        ga_timeout = setTimeout( function () {
            // If there already is a saved value then just reveal the rest of the inputs. 
            var customerAddress = state.answers["CustomerAddress"];
            var address1 = state.answers["Address1"];
            if ( ( customerAddress || address1 ) && gaInput ) {
                gaInput.closest( 'li' ).classList.add( 'ga-selected' );
                gaInput.removeAttribute( "required" );
			} else if ( gaInput ) {
                gaInput.setAttribute( "required", "required" );
            }
            gaInput && gaInput.focus()
            els.questions.classList.remove( 'loading' );
        }, 500 );
	}

    /**
     * Ensure the questions UL Is the only node in the fieldset.
     */
    function ensureQuestionsOnly() {
        if ( els.questions.parentElement.childElementCount > 1 ) {
            for ( var i = 0; i < els.questions.parentElement.childElementCount; i++ ) {
                if ( els.questions.parentElement.children[i] != els.questions ) {
                    els.questions.parentElement.children[i].remove();
                }
            }
        }
    }

    /**
     * Scroll to the top of the scheduler.
     */
    function scrollToTop() {
        if ( els.mainHeader && els.mainHeader.scrollIntoView ) {
            els.mainHeader.scrollIntoView();
        }
	}

    // Add the content script as needed.
    if ( APPT.CONTENT ) {
        // Add a public reference to the controls.
        APPT.els = els;
        APPT.controls = controls;
        // Add the content module to the page.
        var script = document.createElement( 'script' );
        script.type = 'module';
        script.src = 'common/js/m/appt/appt-content.js';
        document.body.appendChild( script );
    }

	/**
	 * Unsubscribe before unloading the page.
	 */
	window.addEventListener( 'beforeunload', function () {
		for ( var i = 0; i < subscriptions.length; i++ ) {
			var sub = subscriptions[i];
			sub.unsubscribe();
		}
		subscriptions.length === 0;
	} );
} );