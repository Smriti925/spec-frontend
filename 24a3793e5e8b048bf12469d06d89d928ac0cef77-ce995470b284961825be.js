"use strict";(self.webpackChunkspec=self.webpackChunkspec||[]).push([[707,950],{3080:function(t,e,n){var r=n(7294),i=n(5334);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(){return s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},s.apply(this,arguments)}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){o(t,e,n[e])}))}return t}function a(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function h(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var s,c=t[Symbol.iterator]();!(r=(s=c.next()).done)&&(n.push(s.value),!e||n.length!==e);r=!0);}catch(a){i=!0,o=a}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var u={cursor:"pointer"},f=function(t){var e=t.index,n=t.onClick,i=t.photo,o=t.margin,a=t.direction,h=t.top,f=t.left,l=t.key,p={margin:o,display:"block"};"column"===a&&(p.position="absolute",p.left=f,p.top=h);return r.createElement("img",s({key:l,style:n?c({},p,u):p},i,{onClick:n?function(t){n(t,{photo:i,index:e})}:null}))},l=function(t,e){return e||(e=0),Number(Math.round(t+"e"+e)+"e-"+e)},p=function(t){var e=t.width,n=t.height;return l(e/n,2)};function d(t){this.content=[],this.scoreFunction=t}d.prototype={push:function(t){this.content.push(t),this.bubbleUp(this.content.length-1)},pop:function(){var t=this.content[0],e=this.content.pop();return this.content.length>0&&(this.content[0]=e,this.sinkDown(0)),t},remove:function(t){for(var e=this.content.length,n=0;n<e;n++)if(this.content[n]==t){var r=this.content.pop();if(n==e-1)break;this.content[n]=r,this.bubbleUp(n),this.sinkDown(n);break}},size:function(){return this.content.length},bubbleUp:function(t){for(var e=this.content[t],n=this.scoreFunction(e);t>0;){var r=Math.floor((t+1)/2)-1,i=this.content[r];if(n>=this.scoreFunction(i))break;this.content[r]=e,this.content[t]=i,t=r}},sinkDown:function(t){for(var e=this.content.length,n=this.content[t],r=this.scoreFunction(n);;){var i=2*(t+1),o=i-1,s=null;if(o<e){var c=this.content[o],a=this.scoreFunction(c);a<r&&(s=o)}if(i<e){var h=this.content[i];this.scoreFunction(h)<(null==s?r:a)&&(s=i)}if(null==s)break;this.content[t]=this.content[s],this.content[s]=n,t=s}}};var v=function(t,e,n){var r=function(t,e,n){var r={},i={},o={};o[e]=0;var s=new d((function(t){return t.weight}));for(s.push({id:e,weight:0});s.size();){var c=s.pop(),a=c.id;if(!i[a]){var h=t(a)||{};for(var u in i[a]=1,h){var f=c.weight+h[u];(void 0===o[u]||o[u]>f)&&(o[u]=f,s.push({id:u,weight:f}),r[u]=a)}}}if(void 0===o[n])throw new Error("There is no path from ".concat(e," to ").concat(n));return r}(t,e,n);return function(t,e){for(var n=[],r=e;r;)n.push(r),t[r],r=t[r];return n.reverse()}(r,n)},g=function(t,e,n){return(e-t.length*(2*n))/t.reduce((function(t,e){return t+p(e)}),0)},m=function(t,e,n,r,i,o){var s=t.slice(e,n),c=g(s,r,o);return Math.pow(Math.abs(c-i),2)},b=function(t){var e=t.containerWidth,n=t.limitNodeSearch,r=t.targetRowHeight,i=t.margin,o=t.photos,s=function(t,e,n,r,i){return function(o){var s={};s[+(o=+o)]=0;for(var c=o+1;c<n.length+1&&!(c-o>r);++c)s[c.toString()]=m(n,o,c,e,t,i);return s}}(r,e,o,n,i),c=v(s,"0",o.length);c=c.map((function(t){return+t}));for(var a=1;a<c.length;++a)for(var h=o.slice(c[a-1],c[a]),u=g(h,e,i),f=c[a-1];f<c[a];++f)o[f].width=l(u*p(o[f]),1),o[f].height=u;return o},_=r.memo((function(t){var e=t.photos,n=t.onClick,o=t.direction,s=t.margin,u=t.limitNodeSearch,p=t.targetRowHeight,d=t.columns,v=t.renderImage,g=h((0,r.useState)(0),2),m=g[0],_=g[1],w=(0,r.useRef)(null);(0,r.useLayoutEffect)((function(){var t=null,e=new i.default((function(e){var n=e[0].contentRect.width;m!==n&&(t=window.requestAnimationFrame((function(){_(Math.floor(n))})))}));return e.observe(w.current),function(){e.disconnect(),window.cancelAnimationFrame(t)}}));var y=function(t,r){var i=r.index;n(t,{index:i,photo:e[i],previous:e[i-1]||null,next:e[i+1]||null})};if(!m)return r.createElement("div",{ref:w}," ");var O,E,x=m-1;"row"===o&&("function"==typeof u&&(u=u(m)),"function"==typeof p&&(p=p(m)),void 0===u&&(u=2,m>=450&&(u=function(t){var e=t.targetRowHeight,n=t.containerWidth;return l(n/e/1.5)+8}({containerWidth:m,targetRowHeight:p}))),O={display:"flex",flexWrap:"wrap",flexDirection:"row"},E=b({containerWidth:x,limitNodeSearch:u,targetRowHeight:p,margin:s,photos:e})),"column"===o&&("function"==typeof d&&(d=d(m)),void 0===d&&(d=1,m>=500&&(d=2),m>=900&&(d=3),m>=1500&&(d=4)),O={position:"relative"},E=function(t){for(var e=t.photos,n=t.columns,r=t.containerWidth,i=t.margin,o=(r-2*i*n)/n,s=e.map((function(t){var e=t.height/t.width*o;return c({},t,{width:l(o,1),height:l(e,1)})})),a=[],h=[],u=0;u<n;u++)a[u]=l(u*(o+2*i),1),h[u]=0;var f=s.map((function(t){var e=h.reduce((function(t,e,n){return e<h[t]?n:t}),0);t.top=h[e],t.left=a[e],h[e]=h[e]+t.height+2*i;var n=h.reduce((function(t,e,n){return e>h[t]?n:t}),0);return t.containerHeight=h[n],t}));return f}({containerWidth:x,columns:d,margin:s,photos:e}),O.height=E[E.length-1].containerHeight);var k=v||f;return r.createElement("div",{className:"react-photo-gallery--gallery"},r.createElement("div",{ref:w,style:O},E.map((function(t,e){var r=t.left,i=t.top,c=t.containerHeight,h=a(t,["left","top","containerHeight"]);return k({left:r,top:i,key:t.key||t.src,containerHeight:c,index:e,margin:s,direction:o,onClick:n?y:null,photo:h})}))))}));_.defaultProps={margin:2,direction:"row",targetRowHeight:300},e.Z=_},5334:function(t,e,n){n.r(e);var r=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var n=-1;return t.some((function(t,r){return t[0]===e&&(n=r,!0)})),n}return function(){function e(){this.__entries__=[]}var n={size:{configurable:!0}};return n.size.get=function(){return this.__entries__.length},e.prototype.get=function(e){var n=t(this.__entries__,e),r=this.__entries__[n];return r&&r[1]},e.prototype.set=function(e,n){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,r=t(n,e);~r&&n.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,r=this.__entries__;n<r.length;n+=1){var i=r[n];t.call(e,i[1],i[0])}},Object.defineProperties(e.prototype,n),e}()}(),i="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,o=void 0!==n.g&&n.g.Math===Math?n.g:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),s="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(o):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)},c=["top","right","bottom","left","width","height","size","weight"],a="undefined"!=typeof MutationObserver,h=function(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,r=!1,i=0;function o(){n&&(n=!1,t()),r&&a()}function c(){s(o)}function a(){var t=Date.now();if(n){if(t-i<2)return;r=!0}else n=!0,r=!1,setTimeout(c,e);i=t}return a}(this.refresh.bind(this),20)};h.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},h.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},h.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},h.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},h.prototype.connect_=function(){i&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),a?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},h.prototype.disconnect_=function(){i&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},h.prototype.onTransitionEnd_=function(t){var e=t.propertyName;void 0===e&&(e=""),c.some((function(t){return!!~e.indexOf(t)}))&&this.refresh()},h.getInstance=function(){return this.instance_||(this.instance_=new h),this.instance_},h.instance_=null;var u=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n+=1){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},f=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||o},l=b(0,0,0,0);function p(t){return parseFloat(t)||0}function d(t){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];return e.reduce((function(e,n){return e+p(t["border-"+n+"-width"])}),0)}function v(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return l;var r=f(t).getComputedStyle(t),i=function(t){for(var e={},n=0,r=["top","right","bottom","left"];n<r.length;n+=1){var i=r[n],o=t["padding-"+i];e[i]=p(o)}return e}(r),o=i.left+i.right,s=i.top+i.bottom,c=p(r.width),a=p(r.height);if("border-box"===r.boxSizing&&(Math.round(c+o)!==e&&(c-=d(r,"left","right")+o),Math.round(a+s)!==n&&(a-=d(r,"top","bottom")+s)),!function(t){return t===f(t).document.documentElement}(t)){var h=Math.round(c+o)-e,u=Math.round(a+s)-n;1!==Math.abs(h)&&(c-=h),1!==Math.abs(u)&&(a-=u)}return b(i.left,i.top,c,a)}var g="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof f(t).SVGGraphicsElement}:function(t){return t instanceof f(t).SVGElement&&"function"==typeof t.getBBox};function m(t){return i?g(t)?function(t){var e=t.getBBox();return b(0,0,e.width,e.height)}(t):v(t):l}function b(t,e,n,r){return{x:t,y:e,width:n,height:r}}var _=function(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=b(0,0,0,0),this.target=t};_.prototype.isActive=function(){var t=m(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},_.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t};var w=function(t,e){var n,r,i,o,s,c,a,h=(r=(n=e).x,i=n.y,o=n.width,s=n.height,c="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,a=Object.create(c.prototype),u(a,{x:r,y:i,width:o,height:s,top:i,right:r+o,bottom:s+i,left:r}),a);u(this,{target:t,contentRect:h})},y=function(t,e,n){if(this.activeObservations_=[],this.observations_=new r,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=n};y.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof f(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new _(t)),this.controller_.addObserver(this),this.controller_.refresh())}},y.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof f(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},y.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},y.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},y.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new w(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},y.prototype.clearActive=function(){this.activeObservations_.splice(0)},y.prototype.hasActive=function(){return this.activeObservations_.length>0};var O="undefined"!=typeof WeakMap?new WeakMap:new r,E=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=h.getInstance(),r=new y(e,n,this);O.set(this,r)};["observe","unobserve","disconnect"].forEach((function(t){E.prototype[t]=function(){return(e=O.get(this))[t].apply(e,arguments);var e}}));var x=void 0!==o.ResizeObserver?o.ResizeObserver:E;e.default=x},1915:function(t,e,n){n.r(e),n.d(e,{photos:function(){return r}});var r=[{src:"https://source.unsplash.com/2ShvY8Lf6l0/800x599",image_url:"https://source.unsplash.com/2ShvY8Lf6l0/800x599",width:4,height:3},{src:"https://source.unsplash.com/Dm-qxdynoEc/800x799",image_url:"https://source.unsplash.com/Dm-qxdynoEc/800x799",width:1,height:1},{src:"https://source.unsplash.com/qDkso9nvCg0/600x799",image_url:"https://source.unsplash.com/qDkso9nvCg0/600x799",width:3,height:4},{src:"https://source.unsplash.com/iecJiKe_RNg/600x799",image_url:"https://source.unsplash.com/iecJiKe_RNg/600x799",width:3,height:4},{src:"https://source.unsplash.com/epcsn8Ed8kY/600x799",image_url:"https://source.unsplash.com/epcsn8Ed8kY/600x799",width:3,height:4},{src:"https://source.unsplash.com/NQSWvyVRIJk/800x599",image_url:"https://source.unsplash.com/NQSWvyVRIJk/800x599",width:4,height:3},{src:"https://source.unsplash.com/zh7GEuORbUw/600x799",image_url:"https://source.unsplash.com/zh7GEuORbUw/600x799",width:3,height:4},{src:"https://source.unsplash.com/PpOHJezOalU/800x599",image_url:"https://source.unsplash.com/PpOHJezOalU/800x599",width:4,height:3},{src:"https://source.unsplash.com/I1ASdgphUH4/800x599",image_url:"https://source.unsplash.com/I1ASdgphUH4/800x599",width:4,height:3}]}}]);
//# sourceMappingURL=24a3793e5e8b048bf12469d06d89d928ac0cef77-ce995470b284961825be.js.map