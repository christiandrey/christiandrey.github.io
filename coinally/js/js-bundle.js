!function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="build/js",e(e.s=0)}([function(t,e,n){n(1),n(2),n(17),n(18),t.exports=n(19)},function(t,e){/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";function t(i){if(!i)throw new Error("No options passed to Waypoint constructor");if(!i.element)throw new Error("No element option passed to Waypoint constructor");if(!i.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,i),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=i.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),n[this.key]=this,e+=1}var e=0,n={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete n[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var i in n)e.push(n[i]);for(var o=0,r=e.length;r>o;o++)e[o][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.Context.refreshAll();for(var e in n)n[e].enabled=!0;return this},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=o.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+n,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,i[t.waypointContextKey]=this,n+=1,o.windowContext||(o.windowContext=!0,o.windowContext=new e(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var n=0,i={},o=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),n=this.element==this.element.window;t&&e&&!n&&(this.adapter.off(".waypoints"),delete i[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,o.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||o.isTouch)&&(e.didScroll=!0,o.requestAnimationFrame(t))})},e.prototype.handleResize=function(){o.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var n in e){var i=e[n],o=i.newScroll>i.oldScroll,r=o?i.forward:i.backward;for(var s in this.waypoints[n]){var a=this.waypoints[n][s];if(null!==a.triggerPoint){var l=i.oldScroll<a.triggerPoint,u=i.newScroll>=a.triggerPoint,c=l&&u,d=!l&&!u;(c||d)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}}for(var h in t)t[h].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?o.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?o.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var n in this.waypoints[e])t.push(this.waypoints[e][n]);for(var i=0,o=t.length;o>i;i++)t[i].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,n=e?void 0:this.adapter.offset(),i={};this.handleScroll(),t={horizontal:{contextOffset:e?0:n.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:n.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,u,c,d,h,p=this.waypoints[r][a],f=p.options.offset,w=p.triggerPoint,g=0,y=null==w;p.element!==p.element.window&&(g=p.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(p):"string"==typeof f&&(f=parseFloat(f),p.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,p.triggerPoint=Math.floor(g+l-f),u=w<s.oldScroll,c=p.triggerPoint>=s.oldScroll,d=u&&c,h=!u&&!c,!y&&d?(p.queueTrigger(s.backward),i[p.group.id]=p.group):!y&&h?(p.queueTrigger(s.forward),i[p.group.id]=p.group):y&&s.oldScroll>=p.triggerPoint&&(p.queueTrigger(s.forward),i[p.group.id]=p.group)}}return o.requestAnimationFrame(function(){for(var t in i)i[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in i)i[t].refresh()},e.findByElement=function(t){return i[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},o.requestAnimationFrame=function(e){(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t).call(window,e)},o.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function n(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),i[this.axis][this.name]=this}var i={vertical:{},horizontal:{}},o=window.Waypoint;n.prototype.add=function(t){this.waypoints.push(t)},n.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},n.prototype.flushTriggers=function(){for(var n in this.triggerQueues){var i=this.triggerQueues[n],o="up"===n||"left"===n;i.sort(o?e:t);for(var r=0,s=i.length;s>r;r+=1){var a=i[r];(a.options.continuous||r===i.length-1)&&a.trigger([n])}}this.clearTriggerQueues()},n.prototype.next=function(e){this.waypoints.sort(t);var n=o.Adapter.inArray(e,this.waypoints);return n===this.waypoints.length-1?null:this.waypoints[n+1]},n.prototype.previous=function(e){this.waypoints.sort(t);var n=o.Adapter.inArray(e,this.waypoints);return n?this.waypoints[n-1]:null},n.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},n.prototype.remove=function(t){var e=o.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},n.prototype.first=function(){return this.waypoints[0]},n.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},n.findOrCreate=function(t){return i[t.axis][t.name]||new n(t)},o.Group=n}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,n=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,n){t.prototype[n]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[n].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(n,i){t[i]=e[i]}),n.adapters.push({name:"jquery",Adapter:t}),n.Adapter=t}(),function(){"use strict";function t(t){return function(){var n=[],i=arguments[0];return t.isFunction(arguments[0])&&(i=t.extend({},arguments[1]),i.handler=arguments[0]),this.each(function(){var o=t.extend({},i,{element:this});"string"==typeof o.context&&(o.context=t(this).closest(o.context)[0]),n.push(new e(o))}),n}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}()},function(t,e,n){"use strict";function i(){var t=$("nav.nav");$(window).scrollTop()>=100?t.addClass("resized"):t.removeClass("resized")}Object.defineProperty(e,"__esModule",{value:!0});var o=n(3);n(4),$(window).scroll(o.Functions.debounce(function(){return i()},50)),$.fn.magik=function(){return $(window).width()<992?null:this.each(function(){var t=$(this);t.find("[data-magik='magik']").each(function(){$(this).attr("id",$(this).attr("class")+(100*Math.random()).toFixed(0))}),t.find("[data-magik='magik']").addClass("magik"),t.waypoint({handler:function(){t.find("[data-magik='magik']").each(function(t){var e=this;setTimeout(function(){return $(e).toggleClass("on")},100*t)})},offset:.8*document.documentElement.clientHeight})})},$("[data-option-image]").each(function(t,e){var n=$(e),i=n.html(),o=n.data("option-image"),r="<img src='"+o+"' style='height:2rem; margin-right: .3rem; margin-bottom: 0; line-height: 1' /> "+i;n.attr("data-content",r)}),$(".custom-select").selectpicker({liveSearch:!0,liveSearchPlaceholder:"Search...",showTick:!0,showContent:!0,title:"Select one",width:"100%"}),$(".custom-select-no-title").selectpicker({showTick:!0,showContent:!0,width:"100%"}),$(".nav .hamburger, .dashboard__sidebar .hamburger").click(function(){$(".dashboard__sidebar").toggleClass("open")}),$(".add-new-account__button").click(function(t){var e=$(t.target);e.siblings(".existing-account").addClass("hidden"),e.siblings(".add-new-account").removeClass("hidden"),e.addClass("hidden")});var r=1,s=["assets-selection","login","signup","refund","destination","payment"];$(".toggle-pane").click(function(){$(".modal__pane").addClass("hidden"),$(".modal__pane#"+s[r]).removeClass("hidden"),r++})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(t){function e(){return $(window).width()<992}function n(t,e){void 0===e&&(e=200);var n=null,i=this;return function(){var o=arguments;clearTimeout(n),n=setTimeout(function(){t.apply(i,o)},e)}}t.isViewportMobile=e,t.debounce=n}(e.Functions||(e.Functions={}))},function(t,e,n){function i(t){return n(o(t))}function o(t){var e=r[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var r={"./about.njk":21,"./admindashboard.njk":5,"./bankaccount.njk":6,"./currency.njk":7,"./dashboard.njk":8,"./index.njk":9,"./login.njk":10,"./profile.njk":11,"./signup.njk":12,"./transactions.njk":13,"./user.njk":14,"./userlist.njk":15,"./verify.njk":16};i.keys=function(){return Object.keys(r)},i.resolve=o,t.exports=i,i.id=4},function(t,e,n){t.exports=n.p+"./build/admindashboard.html"},function(t,e,n){t.exports=n.p+"./build/bankaccount.html"},function(t,e,n){t.exports=n.p+"./build/currency.html"},function(t,e,n){t.exports=n.p+"./build/dashboard.html"},function(t,e,n){t.exports=n.p+"./build/index.html"},function(t,e,n){t.exports=n.p+"./build/login.html"},function(t,e,n){t.exports=n.p+"./build/profile.html"},function(t,e,n){t.exports=n.p+"./build/signup.html"},function(t,e,n){t.exports=n.p+"./build/transactions.html"},function(t,e,n){t.exports=n.p+"./build/user.html"},function(t,e,n){t.exports=n.p+"./build/userlist.html"},function(t,e,n){t.exports=n.p+"./build/verify.html"},function(t,e){$("[data-controller='HomeController']").length&&($("section").magik(),$(window).resize(function(){$("section").magik()}))},function(t,e){},function(t,e){},,function(t,e,n){t.exports=n.p+"./build/about.html"}]);