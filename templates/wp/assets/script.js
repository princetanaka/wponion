"use strict";function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var i=0;i<e.length;i++){var t=e[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function _createClass(n,e,i){return e&&_defineProperties(n.prototype,e),i&&_defineProperties(n,i),n}var WP=function(){function e(n){_classCallCheck(this,e),this.element=n,this.element.hasClass("wponion-settings")&&(this.settings_menu_handler(),this.settings_init_search_input()),this.element.hasClass("wponion-metabox")&&this.metabox_menu_handler()}return _createClass(e,[{key:"metabox_menu_handler",value:function(){this.settings_main_menu(),this.settings_submenu()}},{key:"settings_menu_handler",value:function(){this.settings_main_menu(),this.settings_submenu()}},{key:"settings_main_menu",value:function(){var a=this;this.element.find(".main-navigation .nav-tab-wrapper a").on("click",function(n){n.preventDefault();var e=jQuery(n.currentTarget),i=window.wponion.helper.url_params(e.attr("href"));if(!1===window.wponion._.isUndefined(i["container-id"])){var t=a.element.find("div#wponion-tab-"+i["container-id"]);0<t.length?(a.element.find(".wponion-container-wraps").hide(),t.show(),a.element.find("nav.nav-tab-wrapper a.nav-tab-active").removeClass("nav-tab-active"),e.addClass("nav-tab-active"),t.find(".wponion-submenus a.current").click()):!1===e.hasClass("disabled")&&(window.location.href=e.attr("href"))}else!1===e.hasClass("disabled")&&(window.location.href=e.attr("href"))})}},{key:"settings_submenu",value:function(){var a=this;this.element.find(".wponion-submenus a").on("click",function(n){n.preventDefault();var e=jQuery(n.currentTarget),i=window.wponion.helper.url_params(e.attr("href"));if(!1===window.wponion._.isUndefined(i["container-id"])){var t=a.element.find("div#wponion-tab-"+i["container-id"]);0<t.length&&!1===window.wponion._.isUndefined(i["sub-container-id"])&&0<(t=t.find("div#wponion-tab-"+i["container-id"]+"-"+i["sub-container-id"])).length?(a.element.find("div#wponion-tab-"+i["container-id"]+" .wponion-sub-container-wraps ").hide(),t.show(),t.find(".wponion-submenus a.current").removeClass("current"),e.addClass("current")):!1===e.hasClass("disabled")&&(window.location.href=e.attr("href"))}else!1===e.hasClass("disabled")&&(window.location.href=e.attr("href"))})}},{key:"settings_init_search_input",value:function(){var a=this;this.element.find(".action-search").find("input").on("change keyup",function(n){var t=jQuery(n.currentTarget).val(),e=a.element.find(".wponion-container-wraps");a.element.find(".search-no-result").hide(),3<t.length?(a.element.find(".wponion-submenus").addClass("wponion-search-unmatched"),a.element.find(".content-outer-wrap").addClass("full-width"),e.addClass("wponion-search-matched"),a.element.find(".wponion-has-callback").addClass("wponion-search-unmatched"),a.element.find(".wponion-has-callback").removeClass("wponion-search-matched"),e.each(function(n,e){(e=jQuery(e)).find("> .wponion-element").addClass("wponion-search-unmatched"),e.find("> .wponion-element").removeClass("wponion-search-matched"),e.find("> .wponion-element").each(function(n,i){(i=jQuery(i)).find(".wponion-element-title > h4, .wponion-desc").each(function(n,e){a.settings_is_search_matched(jQuery(e),t)&&(i.addClass("wponion-search-matched"),i.removeClass("wponion-search-unmatched"))})})}),0===a.element.find(".wponion-element:visible").length&&a.element.find(".search-no-result").show()):(a.element.find(".search-no-result").hide(),a.element.find(".wponion-search-unmatched").removeClass("wponion-search-unmatched"),a.element.find(".wponion-search-matched").removeClass("wponion-search-matched"),a.element.find(".content-outer-wrap").removeClass("full-width"))})}},{key:"settings_is_search_matched",value:function(n,e){return n.text().match(new RegExp(".*?"+e+".*?","i"))}}]),e}();window.wponion.hooks.addAction("wponion_theme_init","wponion_core",function(n){n.hasClass("wponion-wp-theme")&&new WP(n)});