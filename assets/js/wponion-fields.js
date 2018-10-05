"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n};!function(i,n,s,p,e,c){var l=c.hooks;e.fn.inputmask=function(){if(0<this.elem.length){var n=this.arg("inputmask");n&&(n=p.validate_js_function(n),this.elem.inputmask(n),this.save(n),this.save_arg("inputmask",n))}return this},e.fn.field_debug=function(){if(0<this.elem.find(".wponion-field-debug").length){var n=this.elem;n.find(".wponion-element.wponion-field-debug").each(function(){s(this).find(".wponion-field-title h4").each(function(){s(this).attr("title",p.txt("click_to_view_debug_info","Click To View Field Debug Info")),tippy(s(this)[0],{arrow:!0,arrowType:"round",placement:"bottom",theme:"light",animation:"scale"})})}),n.find(".wponion-field-debug .wponion-field-title h4").on("click",function(){var e=p._get_debug_info(s(this).parent().parent(),{}),n=p.field_js_id(s(this).parent().parent())+"debugINFO",i="<p class='wponion-field-debug-notice'>"+p.settings("debug_notice")+"</p>",t=s("<div id='"+n+"' class='wponion-field-debug-popup' ><div id='"+n+"' ></div> "+i+"</div>");swal({html:t,showConfirmButton:!0,confirmButtonText:p.txt("get_json_output","Get JSON Output"),showCloseButton:!1,width:"800px",onOpen:function(){s("#swal2-content > div > #"+n).jsonView(e)}}).then(function(n){n.value&&swal({width:"600px",html:'<textarea style="min-width:550px; min-height:300px">'+JSON.stringify(e)+"</textarea>"})})})}return this},e.fn.icon_picker=function(){var n=this,e=n.elem,o=n.args(),t=e.find(".wponion-icon-picker-input"),i=e.find("button[data-wponion-iconpicker-remove]"),a=e.find("button[data-wponion-iconpicker-add]"),l=e.find("span.wponion-icon-preview"),r={elems:null,popup:null,popupel:null,init_tooltip:function(){if("false"!==o.popup_tooltip){var n="object"===_typeof(o.popup_tooltip)?o.popup_tooltip:{};0<r.elems.length&&r.elems.each(function(){tippy(s(this)[0],n)})}},init:function(n,e){r.popupel=n,r.popup=e,r.elems=r.popupel.find("span.wponion-icon-preview");var i=r.popupel.find(".wponion-icon-picker-container-scroll").css("height");r.popupel.find(".wponion-icon-picker-container-scroll").css("height",i),r.select(),r.input(),r.elems.on("click",function(){var n=s(this).attr("data-icon");t.val(n).trigger("change"),swal.closeModal()}),r.init_tooltip()},input:function(){r.popupel.find("div.wponion-icon-picker-model-header input[type=text]").on("keyup",function(){var n=s(this).val();r.elems.each(function(){s(this).attr("data-icon").search(new RegExp(n,"i"))<0?s(this).parent().hide():s(this).parent().show()})})},select:function(){r.popupel.find("div.wponion-icon-picker-model-header select").on("change",function(){swal.enableLoading();var n=s(this).val();p.ajax("icon_picker",{data:{"wponion-icon-lib":n,enabled:o.enabled,disabled:o.disabled}},function(n){n.success?(swal.resetValidationError(),s(r.popupel).find("#swal2-content").html(n.data).show(),s(r.popupel).find("#swal2-content .wponion-icon-picker-container-scroll"),r.init(r.popupel,r.popup)):(s(r.popupel).find(".wponion-icon-picker-container-scroll").remove(),r.popup.showValidationError(n.data))},function(){r.popup.showValidationError(p.txt("unknown_ajax_error"))},function(){r.popup.disableLoading()})})}};return""===t.val()&&(i.hide(),l.hide()),t.on("keyup blur change keypress",function(){var n=s(this).val();""!==n?(l.html('<i class="'+n+'"></i>').show(),i.show()):(l.hide(),i.hide())}),a.on("click",function(){var t=swal({title:e.find(".wponion-field-title h4").html(),animation:!1,allowOutsideClick:!1,showConfirmButton:!1,showCloseButton:!0,width:"700px",customClass:"wponion-icon-picker-model",onBeforeOpen:function(i){swal.enableLoading(),n.ajax("icon_picker",{onSuccess:function(n){if(n.success){swal.resetValidationError();var e=s(i);e.find("#swal2-content").html(n.data).show(),e.find("#swal2-content .wponion-icon-picker-container-scroll"),r.init(e,t)}else p.tost({type:"error",title:n.data}),t.showValidationError(n.data)},onError:function(){t.showValidationError(p.txt("unknown_ajax_error"))},onAlways:function(){t.disableLoading()},data:{enabled:o.enabled,disabled:o.disabled}})}})}),i.on("click",function(){t.val(""),l.hide(),i.hide()}),this},e.fn.select2=function(){var n=this.arg("select2",{});return n=p.validate_js_function(n),this.save(this.elem.select2(n)),this},e.fn.chosen=function(){var n=this.arg("chosen");return p.__plugin_debug_info(this.elem,"chosen",n),this.save(this.elem.chosen(n)),this},e.fn.selectize=function(){var n=this.arg("selectize");return void 0!==n.theme?this.elem.parent().addClass(n.theme):this.elem.parent().addClass("selectize-default"),this.elem.removeClass("form-control"),this.save(this.elem.selectize(n)),this},e.fn.clone_element=function(){var n=this,e=n.elem,i=e.find("div.wponion-clone-wrap"),t=e.find("button[data-wponion-clone-add]"),o=(i.find("button[data-wponion-clone-remove]"),n.arg("clone")),a=void 0!==o.limit&&o.limit,l=void 0===o.toast_error||o.toast_error,r=o.error_msg,d=!1!==o.sort&&{items:".wponion-field-clone",handle:".wponion-field-clone-sorter",placeholder:"wponion-cloner-placeholder",start:function(n,e){e.item.css("background-color","#eeee")},stop:function(n,e){e.item.removeAttr("style")}};i.WPOnionCloner({add_btn:t,limit:a,clone_elem:".wponion-field-clone",remove_btn:"button[data-wponion-clone-remove]",template:n.arg("clone_template"),onRemove:function(n){n.parent().parent().remove()},templateAfterRender:function(n){var e=n.find("> div.wponion-field-clone:last-child");wponion_field(e).reload()},sortable:d,onLimitReached:function(){if(!0===l)p.tost({type:"error",title:r});else{var n=s('<div class="alert alert-warning" role="alert">'+r+"</div>").hide();t.parent().prepend(n),t.parent().find("div.alert").fadeIn(function(){var n=s(this);setTimeout(function(){n.fadeOut("slow",function(){n.remove()})},1e3)})}}})},e.fn.field_tooltip=function(){var n=this.elem.attr("data-field-jsid"),r={};if(this.arg(n+"tooltip")){var e=this.arg(n+"tooltip");(e.performance=!1)!==e.image&&(e.html="#wpotpimg",e.updateDuration=2e3,e.onShow=function(a){var l=this.querySelector(".tippy-content");r.loading||(r.loading=!0,fetch(e.image).then(function(n){return n.blob()}).then(function(n){var e,i,t,o=URL.createObjectURL(n);l.innerHTML='<img src="'+o+'">',e=l.querySelector("img"),i=a.popperInstance.update,t=setInterval(function(){e.naturalWidth&&(clearInterval(t),i())},5),r.loading=!1}).catch(function(n){l.innerHTML="Loading failed",r.loading=!1}))},e.onHidden=function(){this.querySelector(".tippy-content").innerHTML=""},e.popperOptions={modifiers:{preventOverflow:{enabled:!1},hide:{enabled:!1}}}),r=tippy(this.elem[0],e),this.save(r)}return this},e.fn.font_selector=function(){var n=this.elem,e=n.find("select.wponion-font-selector"),i=n.find("select.wponion-variant-selector"),t=p.js_args("wponion_websafe_fonts"),o=p.js_args("wponion_gfonts"),a=function(n){var e="";for(var i in n)e+='<option value="'+i+'">'+n[i]+"</option>";return e};return e.on("change",function(){var n=s(this).val(),e=null;void 0!==t.fonts[n]?e=a(t.variants):void 0!==o[n]&&(e=a(o[n])),i.html(e),p.trigger_update_select(i)}),this},e.fn.accordion=function(){this.elem.each(function(){s(this).find(".wponion-accordion-wrap").each(function(){s(this).accordion({header:"> .wponion-accordion-title",collapsible:!0,animate:250,heightStyle:"content",active:s(this).hasClass("is_open"),icons:{header:"dashicons dashicons-arrow-right",activeHeader:"dashicons dashicons-arrow-down"}})})})},e.fn.group=function(){var n=this.elem,e=n.find("> .wponion-fieldset > button[data-wponion-group-add]"),i=n.find("> .wponion-fieldset > .wponion-group-wrap"),t=this.arg("limit"),o=this.arg("error_msg");wponion_field(n).accordion(),i.WPOnionCloner({add_btn:e,limit:parseInt(t),clone_elem:"> .wponion-fieldset > .wponion-accordion-wrap",remove_btn:".wponion-group-action > button",template:this.arg("group_template"),onRemove:function(n){n.parent().parent().parent().remove()},templateAfterRender:function(n){var e=i.find("> .wponion-accordion-wrap:last-child");wponion_field(i).accordion(),wponion_field(e).reload()},sortable:{items:".wponion-accordion-wrap",handle:".wponion-accordion-title",placeholder:"wponion-accordion-placeholder",start:function(n,e){e.item.css("background-color","#eeee")},stop:function(n,e){e.item.removeAttr("style")}},onLimitReached:function(){var n=s('<div class="alert alert-warning" role="alert">'+o+"</div>").hide();e.before(n),e.parent().find("div.alert").fadeIn(function(){var n=s(this);setTimeout(function(){n.fadeOut("slow",function(){n.remove()})},1e3)})}})},e.fn.wp_links=function(){var e=this.elem,n=e.find("textarea");return e.find("#wponion-wp-link-picker > button").on("click",function(){n.val(""),(!i.wpLink&&s.fn.wpdialog&&s("#wp-link").length?{$link:!1,open:function(){this.$link=s("#wp-link").wpdialog({title:wpLinkL10n.title,width:480,height:"auto",modal:!0,dialogClass:"wp-dialog",zIndex:3e5})},close:function(){this.$link.wpdialog("close")}}:i.wpLink).open(n.attr("id"))}),n.on("change",function(){var n=s(s(this).val());e.find("span.example_output span.value").html(s(this).val()),e.find("input#url").val(n.attr("href")),e.find("input#title").val(n.text()),e.find("input#target").val(n.attr("target")),e.find("span.url span.value").html(n.attr("href")),e.find("span.title span.value").html(n.text()),e.find("span.target span.value").html(n.attr("target"))}),this},e.fn.keyvalue_pair=function(){var n=this.elem;n.find(".wponion-keyvalue_wrap").WPOnionCloner({add_btn:n.find(".wponion-fieldset > .wponion-keyvalue-action-container  > button[data-wponion-keyvalue-add]"),limit:!1,clone_elem:"> .wponion-fieldset > .wponion-keyvalue-field",remove_btn:".wponion-keyvalue-field > button[data-wponion-keyvalue-remove]",template:this.arg("html_template"),templateAfterRender:function(n){l.doAction("wponion_key_value_updated",n)},onRemove:function(n){n.parent().remove(),l.doAction("wponion_key_value_updated",n)}})},e.fn.jquery_tab=function(){var i=this.elem,n=i.find("> .wponion-fieldset > .wponion-tab-wrap ");n.find("> ul.wponion-tab-menus li a").on("click",function(n){n.preventDefault(),s(this).parent().parent().find(".wponion-tab-current").removeClass("wponion-tab-current"),s(this).parent().addClass("wponion-tab-current"),i.find(".wponion-tab-page").hide(),i.find(".wponion-tab-page").removeClass("wponion-tab-current");var e=s(this).attr("data-tab-name");i.find("div#wponion-tab-"+e).addClass("wponion-tab-current").show()}),0<n.find("> ul.wponion-tab-menus li.current").length?n.find("> ul.wponion-tab-menus li.current a").trigger("click"):n.find("> ul.wponion-tab-menus li:first-child a").trigger("click")},e.fn.image_popup=function(n){swal({imageUrl:n,animation:!1,background:"transparent",showConfirmButton:!1,backdrop:"rgba(0,0,0,0.44)"})},e.fn.image_upload=function(){var i=this,n=i.elem,t=n.find("input#image_id"),e=n.find(".wponion-image-preview .wponion-preview-add"),o=n.find(".wponion-image-preview .wponion-preview"),a=void 0;t.on("change",function(){""===s(this).val()?(o.hide(),e.show()):(e.hide(),o.show()),l.doAction("wponion_image_upload_updated",t,o,e)}),e.on("click",function(){void 0!==c&&c.media&&c.media.gallery&&(a||(a=c.media({library:{type:"image"}})).on("select",function(){var n=a.state().get("selection").first().attributes,e=void 0!==n.sizes&&void 0!==n.sizes.thumbnail?n.sizes.thumbnail.url:n.url;o.find("img").attr("src",e).attr("data-fullsize",n.url),t.val(n.id).trigger("change")}),a.open())}),o.find(".wponion-remove").on("click",function(){t.val("").trigger("change")}),o.on("click","img",function(){var n=s(this),e=void 0!==n.attr("data-fullsize")?n.attr("data-fullsize"):n.attr("src");i.image_popup(e)})},e.fn.gallery=function(){var i=this,n=i.elem,o=i.arg("html_template"),a=n.find("input#image_id"),l=n.find(".wponion-image-preview"),r=void 0,e=n.find("button[data-wponion-gallery-add]"),t=n.find("button[data-wponion-gallery-edit]"),d=n.find("button[data-wponion-gallery-clear]"),p=function(n){var e=a.val(),i="edit"===n?"edit":"add",t="add"!==i||e.length?"gallery-edit":"gallery";void 0!==c&&c.media&&c.media.gallery&&(l.html(""),"gallery"===t?(r=c.media({library:{type:"image"},frame:"post",state:"gallery",multiple:!0})).open():(r=c.media.gallery.edit('[gallery ids="'+e+'"]'),"add"===i&&r.setState("gallery-library")),r.on("update",function(n){var e=n.models.map(function(n){var e=n.toJSON();if(void 0===e.sizes)return!1;var i=void 0!==e.sizes.thumbnail?e.sizes.thumbnail.url:e.url,t=s(o);return t.attr("data-wponion-image_id",e.id),t.find("img").attr("data-fullsize",e.url).attr("src",i).removeClass("hidde"),l.append(t),e.id}),i=void 0;for(i in e)!1!==e[i]&&""!==e[i]||delete e[i];a.val(e.join(",")).trigger("change")}))};a.on("change",function(){""===s(this).val()?(e.show(),t.hide(),d.hide()):(t.show(),d.show(),e.hide())}),e.on("click",function(){p("add")}),t.on("click",function(){p("edit")}),d.on("click",function(){a.val(""),l.html(""),d.hide(),t.hide(),e.show()}),l.on("click","img",function(){var n=s(this),e=void 0!==n.attr("data-fullsize")?n.attr("data-fullsize"):n.attr("src");i.image_popup(e)}),l.on("click","i.wponion-remove",function(){var n=s(this).parent(),i=n.attr("data-wponion-image_id"),t=a.val().split(",");s.each(a.val().split(","),function(n,e){e===i&&t.splice(n,1)}),a.val(t.join(",")),n.fadeOut(function(){s(this).remove()}),a.trigger("change")}),a.trigger("change"),l.sortable({items:"> div",cursor:"move",scrollSensitivity:40,forcePlaceholderSize:!0,placeholder:"sortable-placeholder",helper:"clone",opacity:.65,start:function(n,e){var i=e.item;l.find(".sortable-placeholder").css("width",i.width()),l.find(".sortable-placeholder").css("height",i.height())}}),l.on("change",function(){console.log(s(this).html())})},e.fn.color_picker=function(){this.elem.find("input").wpColorPicker()},e.fn.upload=function(){var n=this.elem,e=n.find("button"),i=n.find("input[type=text]"),t=this.args(),o=void 0;e.on("click",function(n){n.preventDefault(),void 0!==c&&c.media&&c.media.gallery&&(o||(o=c.media({title:t.settings.frame_title,library:{type:t.settings.upload_type},button:{text:t.settings.insert_title}})).on("select",function(){var n=o.state().get("selection").first();i.val(n.attributes.url).trigger("change")}),o.open())})},e.fn.date_picker=function(){var n=this.elem,e=this.arg("settings"),i=this.js_id(),t="default";if(void 0!==e.theme&&(t=e.theme,delete e.theme),0===s("div#"+i).length){var o='<div class="wponion-datepicker-'+t+'" id="'+i+'"></div>';s("body").append(s(o))}n.hasClass("wponion-datepicker-range")?(e.appendTo=s("div#"+i)[0],void 0===e.plugins&&(e.plugins=new Array),e.plugins.push(new rangePlugin({input:n.find("input[data-wponion-datepicker-to-date]")[0]})),n.find("input[data-wponion-datepicker-from-date]").flatpickr(e)):(e.appendTo=s("div#"+i)[0],n.find("input").flatpickr(e)),this.save_arg("datepicker",e)},e.fn.reload=function(){l.addAction("wponion_before_fields_reload"),this.init_field("input[data-wponion-inputmask]","inputmask"),this.init_field(".wponion-element-icon_picker","icon_picker"),this.init_field(".select2","select2"),this.init_field(".chosen","chosen"),this.init_field(".selectize","selectize"),this.init_field(".wponion-element-accordion","accordion"),this.init_field(".wponion-element-group","group"),this.init_field(".wponion-element-clone","clone_element"),this.init_field(".wponion-field-tooltip","field_tooltip"),this.init_field(".wponion-element-font_picker","font_selector"),this.init_field(".wponion-element-wp_link","wp_links"),this.init_field(".wponion-element-key_value","keyvalue_pair"),this.init_field(".wponion-element-tab","jquery_tab"),this.init_field(".wponion-element-image","image_upload"),this.init_field(".wponion-element-gallery","gallery"),this.init_field(".wponion-element-color_picker","color_picker"),this.init_field(".wponion-element-upload","upload"),this.init_field(".wponion-element-date_picker","date_picker"),this.field_debug(),l.addAction("wponion_after_fields_reload")},e.fn.dependency=function(n){var e=this.arg("dependency");for(var i in e.controller){var t=e.controller[i],o=e.condition[i],a=e.value[i];(n=n.createRule('[data-depend-id="'+t+'"]',o,a)).include(s(this.elem))}},s.fn.wponion_dependency=function(n,e){var i={};i.$el=void 0===n?s(this):n,i.init=function(){i.ruleset=s.deps.createRuleset();void 0!==e||i.depRoot(),s.deps.enable(i.$el,i.ruleset,{show:function(n){n.removeClass("hidden")},hide:function(n){n.addClass("hidden")},log:!0,checkTargets:!1})},i.depRoot=function(){i.$el.each(function(){s(this).find(".wponion-has-dependency").each(function(){wponion_field(s(this)).dependency(i.ruleset)})})},i.init()},l.addAction("wponion_before_init",function(){0===s("#wpotpimg").length&&s("body").append(s('<div id="wpotpimg" style="display: none;min-width:300px;min-height:400px;">..</div>'));var n=s(".wponion-framework");0<n.length&&(n.wponion_dependency(),wponion_field(".wponion-framework").reload())})}(window,document,jQuery,$wponion,$wponion_field,wp);