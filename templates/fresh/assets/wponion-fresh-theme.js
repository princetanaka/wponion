!function(t){var i={};function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)r.d(t,i,function(e){return n[e]}.bind(null,i));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s="./src/js/themes/fresh-theme.js")}({"./src/js/themes/fresh-theme.js":function(e,n,t){"use strict";var i=function(){function i(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,t){return n&&i(e.prototype,n),t&&i(e,t),e}}();var r=function(){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),this.element=e,this.element.hasClass("wponion-submenu-single-page")&&this.init_submenu(),this.element.hasClass("wponion-single-page")&&(this.init_submenu(),this.init_main_menu()),this.update_height()}return i(n,[{key:"update_height",value:function(){this.element.find(".wponion-fresh-theme-menu-wrap").css("height",""),this.element.find(".wponion-fresh-theme-content-wrap").css("height","");var e=this.element.find(".wponion-fresh-theme-content-wrap").outerHeight(),n=this.element.find(".wponion-fresh-theme-menu-wrap").outerHeight();if(n<=e)this.element.find(".wponion-fresh-theme-menu-wrap").css("height",e+"px");else if(e<n){n-=parseInt(this.element.find(".wponion-fresh-theme-content-wrap").css("padding-bottom")),this.element.find(".wponion-fresh-theme-content-wrap").css("height",n+"px")}}},{key:"init_submenu",value:function(){var a=this;a.element.find(".wpo-ftnav .meta-submenu a").on("click",function(e){e.preventDefault();var n=$wponion_helper.url_params(jQuery(this).attr("href"));if(!1===$wponion_helper.is_undefined(n["section-id"])&&!1===$wponion_helper.is_undefined(n["parent-id"])){var t="wponion-tab-"+n["parent-id"],i=t+"-"+n["section-id"],r=a.element.find("div#"+t+" div.wponion-section-wraps"),o=a.element.find("div#"+t+" div#"+i);r.hide(),o.show(),a.update_height(),jQuery(this).parent().parent().find("a.active").removeClass("active"),jQuery(this).addClass("active")}else jQuery(".wponion-framework.wponion-module-settings .page-loader").show(),window.location.href=jQuery(this).attr("href")})}},{key:"init_main_menu",value:function(){var a=this;this.element.find("ul.wpo-ftnav > li > a").on("click",function(e){e.preventDefault();var n=jQuery(e.currentTarget),t=$wponion_helper.url_params(n.attr("href"));if(!1===$wponion_helper.is_undefined(t["parent-id"])){var i="wponion-tab-"+t["parent-id"],r=a.element.find("div.wponion-parent-wraps"),o=a.element.find("div#"+i);r.hide(),o.show(),n.parent().parent().find("a.active:not(ul.meta-submenu li a)").removeClass("active"),n.addClass("active"),a.update_height()}else window.location.href=jQuery(a).attr("href")})}}]),n}();window,document,wp.hooks.addAction("wponion_theme_init",function(e){e.hasClass("wponion-fresh-theme")&&new r(e)})}});