HTMLElement.prototype.wrap=function(e){this.parentNode.insertBefore(e,this),this.parentNode.removeChild(this),e.appendChild(this)},Fluid.events={registerNavbarEvent:function(){var e,r=jQuery("#navbar");0!==r.length&&(e=jQuery("#navbar .dropdown-menu"),0<r.offset().top&&(r.removeClass("navbar-dark"),e.removeClass("navbar-dark")),Fluid.utils.listenScroll(function(){r[50<r.offset().top?"addClass":"removeClass"]("top-nav-collapse"),e[50<r.offset().top?"addClass":"removeClass"]("dropdown-collapse"),0<r.offset().top?r.removeClass("navbar-dark"):r.addClass("navbar-dark"),e.removeClass("navbar-dark")}),jQuery("#navbar-toggler-btn").on("click",function(){jQuery(".animated-icon").toggleClass("open"),jQuery("#navbar").toggleClass("navbar-col-show")}))},registerParallaxEvent:function(){var o,n=jQuery('#banner[parallax="true"]');0!==n.length&&0!==(o=jQuery("#board")).length&&Fluid.utils.listenScroll(function(){var e=jQuery(window).scrollTop()/5,r=96+parseInt(o.css("margin-top"),10),r=(n.css({transform:"translate3d(0,"+(e=r<e?r:e)+"px,0)"}),jQuery(".side-col"));r&&r.css({"padding-top":e+"px"})})},registerScrollDownArrowEvent:function(){var e=jQuery(".scroll-down-bar");0!==e.length&&e.on("click",function(){Fluid.utils.scrollToElement("#board",-jQuery("#navbar").height())})},registerScrollTopArrowEvent:function(){var r,o,n,e,t,a=jQuery("#scroll-top-button");0!==a.length&&0!==(r=jQuery("#board")).length&&(n=o=!1,(e=function(){var e=r[0].getClientRects()[0].right,e=document.body.offsetWidth-e;o=50<=e,a.css({bottom:o&&n?"20px":"-60px",right:e-64+"px"})})(),jQuery(window).resize(e),t=r.offset().top,Fluid.utils.listenScroll(function(){var e=document.body.scrollTop+document.documentElement.scrollTop;n=t<=e,a.css({bottom:o&&n?"20px":"-60px"})}),a.on("click",function(){jQuery("body,html").animate({scrollTop:0,easing:"swing"})}))},registerImageLoadedEvent:function(){if("NProgress"in window){var e=jQuery("main img:not([lazyload])"),r=e.length;for(const o of e){const n=o.onload;o.onload=function(){n&&n(),window.NProgress&&window.NProgress.inc(.5/r)},o.complete&&o.onload()}}},registerRefreshCallback:function(e){Array.isArray(Fluid.events._refreshCallbacks)||(Fluid.events._refreshCallbacks=[]),Fluid.events._refreshCallbacks.push(e)},refresh:function(){if(Array.isArray(Fluid.events._refreshCallbacks))for(var e of Fluid.events._refreshCallbacks)e instanceof Function&&e()},billboard:function(){0 in window}};