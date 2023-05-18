!function(t){"use strict";function a(t){if(-1==t.search("rgb"))return t;function a(t){return("0"+parseInt(t).toString(16)).slice(-2)}return"#"+a((t=t.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/))[1])+a(t[2])+a(t[3])}wp.mce=wp.mce||{};var i={};i.button={content_id:"fasc-popup-edit-button",is_editing:!1,$node:{},init:function(t,a,i,c){this.$popup=a,this.$preview_area=a.find(".preview-button-area .centered-button"),this.is_editing=i,this.$node=jQuery(t),this.setupControls(a),this.setupIcons(t,a),this.setupTabs(a),this.is_editing?this.setSettingsFromNode(t,a,!0):this.initEmptyTemplate(t,a,c),this.updatePreview()},setupIcons:function(a,i){var c=this;t(a);var e=i.find('.fasc-ajax-content .fasc-tab-content[data-fasc-tab="2"]');e.find("#fasc-popup-icon-type-select").change(function(a){t(this).val(),e.find(".ico-grid .grid-container").removeClass("ico-screen-active").hide(),e.find("#"+t(this).val()).addClass("ico-screen-active").show()}),e.find(".ico-grid div").click(function(a){a.preventDefault();var i=e.find(".fasc-ico-position:checked").val();return e.find(".ico-grid div").removeClass("active"),t(this).addClass("active"),("none"==i||""==i)&&(i="before"),e.find(".fasc-ico-position").removeAttr("checked"),e.find(".fasc-ico-position").prop("checked",!1),e.find('.fasc-ico-position[value="'+i+'"]').prop("checked",!0),c.updatePreview(),!1}),e.find(".fasc-ico-position").change(function(a){if(e.find(".fasc-ico-position").removeAttr("checked"),e.find(".fasc-ico-position").prop("checked",!1),t(this).prop("checked",!0),"none"==t(this).val())e.find(".ico-grid div div:not(.clear)").removeClass("active");else{var i=e.find(".ico-grid div.active");if(i.length<1){var o=e.find(".ico-grid .grid-container.ico-screen-active"),i={};i=o.length>0?t(e.find(".ico-grid .grid-container.ico-screen-active div:not(.clear)").get(0)).addClass("active"):t(e.find(".ico-grid .grid-container:first-child div:not(.clear)").get(0)).addClass("active")}}c.updatePreview()}),t('.fasc-ajax-content select, .fasc-ajax-content input[type="checkbox"]').change(function(){c.updatePreview()}),t('.fasc-ajax-content input[type="text"]').keyup(function(){c.updatePreview()}),t('.fasc-ajax-content input[type="text"]').keyup(function(){c.updatePreview()}),t.get(Fasc.ajax_url+"?action=fasc_buttons&load=get_buttons&security="+Fasc.ajax_nonce,function(t){c.parseTemplateButtons(t)},"json"),t(".fasc-save-btn").click(function(){var a={};return a.button=c.createButtonHtml({isSaving:!0}),t.post(Fasc.ajax_url+"?action=fasc_buttons&load=save_button&security="+Fasc.ajax_nonce,a,function(t){c.parseTemplateButtons(t)},"json"),c.$tabs.find("li").removeClass("active"),c.$tabs.find("li[data-fasc-tab='3']").addClass("active"),c.loadTab(3,i),!1}),c.updatePreview()},parseTemplateButtons:function(a){var i=this,c=t(".saved-buttons-tab .container-grid ul");c.empty();var e="",o=0;t.each(a,function(i){e="";var n=t(a[i].html),s=n.css("background-color"),p=n.css("color");e+="<li data-index='"+o+"'>",e+='<div class="wrap">',e+='<div class="full_button">'+a[i].html+"</div>",e+='<div class="name"><span>'+a[i].name+'</span> <a class="dashicons dashicons-edit fasc-button-edit"></a><a class="fa fa-check fasc-button-update" data-action="update"></a><a class="dashicons dashicons-no-alt fasc-button-update" data-action="remove"></a></div>',e+='<div class="col fasc-button-remove dashicons dashicons-no-alt"></div>',e+='<div class="col" style="background-color:'+s+';"></div>',e+='<div class="col" style="background-color:'+p+';"></div>',e+='<div class="clear"></div>',e+="</div>",e+="</li>",c.append(e),o++});var n=function(a){var i=a.text(),c=t("<input>",{val:i,type:"text",width:"170px","data-orig-text":i});a.replaceWith(c),c.select()},s=function(a){var i=t("<span>",{text:a.attr("data-orig-text")});a.replaceWith(i),i.on("click",n)},p=function(a){var i=t("<span>",{text:a.val()});a.replaceWith(i),i.on("click",n)};t(".fasc-button-edit").click(function(){return t(this).hide(),t(this).parent().find(".fasc-button-update").show().css("display","inline-block"),n(t(this).parent().find("span")),!1}),t(".fasc-button-remove").click(function(a){a.preventDefault();var c=t(this).closest("li").attr("data-index");return t.get(Fasc.ajax_url+"?action=fasc_buttons&load=remove_button&index="+c+"&security="+Fasc.ajax_nonce,function(t){i.parseTemplateButtons(t)},"json"),!1}),t(".fasc-button-update").click(function(){var a=t(this);if(t(this).parent().find(".fasc-button-update").hide(),t(this).parent().find(".fasc-button-edit").show(),"remove"==a.attr("data-action"))s(t(this).parent().find("input"));else{var c=t(this).closest("li").attr("data-index"),e=encodeURIComponent(t(this).parent().find("input").val());t.get(Fasc.ajax_url+"?action=fasc_buttons&load=update_button&index="+c+"&name="+e+"&security="+Fasc.ajax_nonce,function(t){i.parseTemplateButtons(t)},"json"),p(t(this).parent().find("input"))}return!1});var r=t(".saved-buttons-tab .container-grid li .wrap");r.on("click",function(){r.removeClass("active"),t(this).addClass("active");var a=t(this).find(".full_button a.fasc-button");i.loadButtonTemplate(a,!0),i.updatePreview()})},loadButtonTemplate:function(i,c){var e=i.attr("target");jQuery(".fasc-ajax-content input#fasc-popup-new-window").prop("checked",!1),void 0!==e&&"_blank"==e&&jQuery(".fasc-ajax-content input#fasc-popup-new-window").prop("checked",!0);var o=i.attr("rel");if(jQuery(".fasc-ajax-content input#fasc-popup-nofollow").prop("checked",!1),void 0!==o&&-1!==o.indexOf("nofollow")&&jQuery(".fasc-ajax-content input#fasc-popup-nofollow").prop("checked",!0),void 0===c){var n=i.text();jQuery(".fasc-ajax-content input#fasc-popup-button-text").val(n)}var s=a(i.css("color"));jQuery("#fasc-popup-text-color").val(s),this.refreshMiniColors(jQuery("#fasc-popup-text-color"),s,this.$popup);var p=a(i.css("background-color"));jQuery("#fasc-popup-button-color").val(p),this.refreshMiniColors(jQuery("#fasc-popup-button-color"),p,this.$popup);var r=this.$popup.find('.fasc-ajax-content .fasc-tab-content[data-fasc-tab="2"]');r.find(".ico-grid > div > div").removeClass("active");var f=i.attr("class").split(/\s+/);this.$popup.find(".fasc-mce-button[data-fasc-action='bold']").attr("data-fasc-button-active","0"),this.$popup.find(".fasc-mce-button[data-fasc-action='italic']").attr("data-fasc-button-active","0"),this.$popup.find(".fasc-mce-button[data-fasc-action='strikethrough']").attr("data-fasc-button-active","0");for(var d=0;d<f.length;d++)if("fasc-type"==f[d].substring(0,9)){var u=f[d];(i.hasClass("fasc-rounded-medium")||i.hasClass("rounded"))&&(u+=" fasc-rounded-medium"),jQuery("#fasc-popup-button-type option").prop("selected",!1),jQuery('#fasc-popup-button-type option[value="'+u+'"]').prop("selected",!0),t("#fasc-popup-button-type").val(u)}else if("fasc-style"==f[d].substring(0,10))"fasc-style-bold"==f[d]?this.$popup.find(".fasc-mce-button[data-fasc-action='bold']").attr("data-fasc-button-active","1"):"fasc-style-italic"==f[d]?this.$popup.find(".fasc-mce-button[data-fasc-action='italic']").attr("data-fasc-button-active","1"):"fasc-style-strikethrough"==f[d]&&this.$popup.find(".fasc-mce-button[data-fasc-action='strikethrough']").attr("data-fasc-button-active","1");else if("fasc-size"==f[d].substring(0,9)){var l=f[d];jQuery("#fasc-popup-button-size option").prop("selected",!1),jQuery('#fasc-popup-button-size option[value="'+l+'"]').prop("selected",!0),t("#button-size").val(l)}else if("dashicons"==f[d].substring(0,9)){r.find(".ico-grid .grid-container").removeClass("ico-screen-active"),r.find("#dashicons-grid").addClass("ico-screen-active"),this.$popup.find("#fasc-popup-icon-type-select").val("dashicons-grid"),this.$popup.find("#fasc-popup-icon-type-select").trigger("change");var v=f[d];this.$popup.find(".ico-grid ."+v).addClass("active")}else if("fa-"==f[d].substring(0,3)){r.find(".ico-grid .grid-container").removeClass("ico-screen-active");var h=r.find(".ico-grid").find("."+f[d]).parent().attr("id");r.find("#"+h).addClass("ico-screen-active"),this.$popup.find("#fasc-popup-icon-type-select").val(h),this.$popup.find("#fasc-popup-icon-type-select").trigger("change"),this.$popup.find(".ico-grid ."+f[d]).addClass("active")}i.hasClass("fasc-ico-before")||i.hasClass("fasc-ico-after")?i.hasClass("fasc-ico-before")?(r.find(".fasc-ico-position").prop("checked",!1),r.find('.fasc-ico-position[value="before"]').prop("checked",!0)):i.hasClass("fasc-ico-after")&&(r.find(".fasc-ico-position").prop("checked",!1),r.find('.fasc-ico-position[value="after"]').prop("checked",!0)):(r.find(".fasc-ico-position").prop("checked",!1),r.find('.fasc-ico-position[value="none"]').prop("checked",!0))},setupControls:function(a){var i=this;a.find('.fasc-ajax-content select, .fasc-ajax-content input[type="checkbox"]').change(function(){i.updatePreview()}),a.find('.fasc-ajax-content input[type="text"]').keyup(function(){i.updatePreview()}),a.find('.fasc-ajax-content input[type="text"]').keyup(function(){i.updatePreview()});var c=a.find("[data-fasc-action='popup-colorpicker']");c.click(function(i){var e=t(this),o=e.attr("data-fasc-button-active");c.attr("data-fasc-button-active",""),e.attr("data-fasc-button-active",1-o);var n=e.data("fasc-action-target"),s=a.find('[data-fasc-colorpicker-name="'+n+'"]'),p=a.find("[data-fasc-colorpicker-name]").not('[data-fasc-colorpicker-name="'+n+'"]'),r=e.position();p.stop(!0,!0).hide(),s.stop(!0,!0).fadeToggle(100),s.css("left",Math.round(r.left)+"px"),s.css("top",Math.round(r.top+e.parent().outerHeight())+"px")}),a.on("click",function(i){0==t(i.target).closest("[data-fasc-action='popup-colorpicker'], .fasc-popup-colorpicker-container").length&&(a.find("[data-fasc-colorpicker-name]").hide(),c.attr("data-fasc-button-active",""))}),a.find(".fasc-mce-button-toggle").on("click",function(){var a=t(this),c=a.attr("data-fasc-button-active");a.attr("data-fasc-button-active",1-c),i.updatePreview()}),i.updatePreview()},updatePreview:function(){this.$preview_area.html(this.createButtonHtml()),this.$preview_area.find(".fasc-button").off(),this.$preview_area.find(".fasc-button").click(function(t){t.preventDefault(),t.stopPropagation()})},createButtonHtml:function(a){var i={content:"",isSaving:!1,hasID:!1};t.extend(i,a);var c=jQuery(".fasc-ajax-content input#fasc-popup-button-url").val(),e=jQuery(".fasc-ajax-content input#fasc-popup-button-text").val(),o=jQuery(".fasc-ajax-content select#fasc-popup-button-size").val(),n=jQuery(".fasc-ajax-content input#fasc-popup-button-color").val(),s=jQuery(".fasc-ajax-content input#fasc-popup-text-color").val(),p=jQuery(".fasc-ajax-content select#fasc-popup-button-type").val();jQuery(".fasc-ajax-content select#fasc-popup-button-align").val();var r=jQuery(".fasc-ajax-content input#fasc-popup-new-window").prop("checked"),f=jQuery(".fasc-ajax-content input#fasc-popup-nofollow").prop("checked"),d="",u="",l="",v="";!0==r&&(l=' target="_blank"'),!0==f&&(v=' rel="nofollow"'),p&&""!=p&&(d=" "+p),o&&""!=o&&(u=" "+o);var h=t(t('.fasc-ajax-content .fasc-tab-content[data-fasc-tab="2"] .ico-grid div.active').get(0)),b=t('.fasc-ajax-content .fasc-tab-content[data-fasc-tab="2"] .fasc-ico-position:checked').val(),g="";if(1==h.length){var x=h.attr("class").split(" "),m=0,k="dashicons";for(m=0;m<x.length;m++)"active"!=x[m]&&"fa"!=x[m]&&"dashicons"!=x[m]&&(g+=" "+x[m]),"fa"==x[m]&&(k="fontawesome");m>0&&("before"==b||"after"==b)&&(g="fontawesome"==k?" ico-fa fasc-ico-"+b+g:" fasc-ico-"+b+g)}var $="";1==this.$popup.find(".fasc-mce-button[data-fasc-action='bold']").attr("data-fasc-button-active")&&($+=" fasc-style-bold"),1==this.$popup.find(".fasc-mce-button[data-fasc-action='italic']").attr("data-fasc-button-active")&&($+=" fasc-style-italic");var w=this.$popup.find(".fasc-mce-button[data-fasc-action='strikethrough']").attr("data-fasc-button-active");1==w&&($+=" fasc-style-strikethrough"),this.$popup.find(".fasc-mce-button[data-fasc-action='strikethrough']").attr("data-fasc-button-active"),1==w&&($+=" fasc-style-strikethrough");var y="";i.hasID&&(y=' data-fasc-id="fasc-button-tid-'+new Date().getTime()+'"');var C="";return C=i.isSaving?'<a class="fasc-button'+u+d+g+$+'"'+l+v+' style="background-color:'+n+";color:"+s+';" data-fasc-style="background-color:'+n+";color:"+s+';"'+y+"></a>":'<a data-fasc-href="'+c+'" class="fasc-button'+u+d+g+$+'"'+l+v+' style="background-color:'+n+";color:"+s+';" data-fasc-style="background-color:'+n+";color:"+s+';"'+y+">"+e+"</a>",i.isSaving,C},setupTabs:function(a){var i=this;this.$tabs=a.find(".tab-header");var c=this.$tabs.find("li");this.$tabs.find("li a"),c.click(function(){var e=t(this),o=e.attr("data-fasc-tab");return c.removeClass("active"),e.addClass("active"),i.loadTab(o,a),!1})},loadTab:function(a,i){i.find(".fasc-ajax-content .fasc-tab-content").hide(),i.find(".fasc-ajax-content .fasc-tab-content[data-fasc-tab="+a+"]").show(),this.loadTabContent(a),t(".ico-grid .grid-container div.active").length>0&&t(".ico-grid").scrollTop(t(".ico-grid .grid-container div.active").position().top-5)},loadTabContent:function(t,a){},refreshMiniColors:function(a,i,c){var e=this;jQuery(".preview-button-area .centered-button"),a.is_text_input=!1,a.minicolors({inline:!0,opacity:!1,showSpeed:0,hideSpeed:0,textfield:!0,change:function(i,o){var n=a.val(),s=a.parent().parent().find(".fasc-popup-color-input");!0==a.is_text_input?a.is_text_input=!1:s.val(n),s.off("input"),s.on("input",function(){var i=t(this).val();a.is_text_input=!0,a.minicolors("value",i)});var p=t("#fasc-popup-button-color").val(),r=t("#fasc-popup-text-color").val();c.find(".fasc-ico-fg .fg-panel").css("background-color",r),c.find(".fasc-ico-bg .bg-panel").css("background-color",p),e.updatePreview()}}),void 0!==i&&a.minicolors("value",i)},initEmptyTemplate:function(t,i,c){jQuery("#fasc-popup-button-text").val(c);var e=i.find(".preview-button-area .centered-button .fasc-button");this.refreshMiniColors(i.find("#fasc-popup-text-color"),a(e.css("color")),i),this.refreshMiniColors(i.find("#fasc-popup-button-color"),a(e.css("background-color")),i)},setSettingsFromNode:function(i,c,e){var o=t(i),n=o.attr("data-fasc-href");c.find(".fasc-ajax-content input#fasc-popup-button-url").val(n);var s=o.attr("target");c.find(".fasc-ajax-content input#fasc-popup-new-window").prop("checked",!1),void 0!==s&&"_blank"==s&&c.find(".fasc-ajax-content input#fasc-popup-new-window").prop("checked",!0);var p=o.attr("rel");c.find(".fasc-ajax-content input#fasc-popup-nofollow").prop("checked",!1),void 0!==p&&-1!==p.indexOf("nofollow")&&c.find(".fasc-ajax-content input#fasc-popup-nofollow").prop("checked",!0);var r=o.text();c.find(".fasc-ajax-content input#fasc-popup-button-text").val(r);var f=a(o.css("color"));c.find("#fasc-popup-text-color").val(f),c.find(".fasc-ico-fg .fg-panel").css("background-color",f),this.refreshMiniColors(c.find("#fasc-popup-text-color"),f,c);var d=a(o.css("background-color"));c.find("#fasc-popup-button-color").val(d),c.find(".fasc-ico-bg .bg-panel").css("background-color",d),this.refreshMiniColors(c.find("#fasc-popup-button-color"),d,c);var u=c.find('.fasc-ajax-content .fasc-tab-content[data-fasc-tab="2"]'),l=o.attr("class").split(/\s+/);u.find(".ico-grid > div > div").removeClass("active");for(var v=0;v<l.length;v++)if("fasc-type"==l[v].substring(0,9)){var h=l[v];(o.hasClass("fasc-rounded-medium")||o.hasClass("rounded"))&&(h+=" fasc-rounded-medium"),c.find("#fasc-popup-button-type option").prop("selected",!1),c.find('#fasc-popup-button-type option[value="'+h+'"]').prop("selected",!0),c.find("#fasc-popup-button-type").val(h)}else if("fasc-style"==l[v].substring(0,10))"fasc-style-bold"==l[v]?c.find(".fasc-mce-button[data-fasc-action='bold']").attr("data-fasc-button-active","1"):"fasc-style-italic"==l[v]?c.find(".fasc-mce-button[data-fasc-action='italic']").attr("data-fasc-button-active","1"):"fasc-style-strikethrough"==l[v]&&c.find(".fasc-mce-button[data-fasc-action='strikethrough']").attr("data-fasc-button-active","1");else if("fasc-size"==l[v].substring(0,9)){var b=l[v];c.find("#fasc-popup-button-size option").prop("selected",!1),c.find('#fasc-popup-button-size option[value="'+b+'"]').prop("selected",!0),c.find("#fasc-popup-button-size").val(b)}else if("dashicons"==l[v].substring(0,9)){u.find(".ico-grid .grid-container").removeClass("ico-screen-active"),u.find("#dashicons-grid").addClass("ico-screen-active"),c.find("#fasc-popup-icon-type-select").val("dashicons-grid"),c.find("#fasc-popup-icon-type-select").trigger("change");var g=l[v];c.find(".ico-grid ."+g).addClass("active")}else if("fa-"==l[v].substring(0,3)){u.find(".ico-grid .grid-container").removeClass("ico-screen-active");var x=u.find(".ico-grid").find("."+l[v]).parent().attr("id");u.find("#"+x).addClass("ico-screen-active"),c.find("#fasc-popup-icon-type-select").val(x),c.find("#fasc-popup-icon-type-select").trigger("change"),c.find(".ico-grid ."+l[v]).addClass("active")}o.hasClass("fasc-ico-before")||o.hasClass("fasc-ico-after")?o.hasClass("fasc-ico-before")?(u.find(".fasc-ico-position").prop("checked",!1),u.find('.fasc-ico-position[value="before"]').prop("checked",!0)):o.hasClass("fasc-ico-after")&&(u.find(".fasc-ico-position").prop("checked",!1),u.find('.fasc-ico-position[value="after"]').prop("checked",!0)):(u.find(".fasc-ico-position").prop("checked",!1),u.find('.fasc-ico-position[value="none"]').prop("checked",!0))}},wp.mce.fascpopup={open:function(a,c,e,o,n){this.type=c,this.templateID=c,this.is_editing=o;var s=i[c].content_id,p=jQuery("<div/>",{class:"fasc-thickbox-overlay"}).appendTo("body"),r=t("#fasc-popup-template").clone();r.removeAttr("id"),r.addClass(s);var f=t("#"+s),d=f.clone();f.remove();var u=r.find(".fasc-thickbox-content"),l=r.find(".fasc-thickbox-title-inner"),v=r.find(".fasc-thickbox-action-right");this.initTemplate(r,d,u,l,v),r.insertAfter(p),i[c].init(a,r,this.is_editing,n),r.show(),this.initEvents(a,r,v,u,d,e)},initTemplate:function(t,a,i,c,e){i.html(a.html());var o=a.attr("data-fasc-title"),n=a.attr("data-fasc-submit-label"),s=a.attr("data-fasc-width"),p=a.attr("data-fasc-height");c.text(o),e.text(n),t.css("max-width",s),t.css("max-height",p)},initEvents:function(a,c,e,o,n,s){var p=this;c.find("label").click(function(){}),c.find(".fasc-close-ajax-window").click(function(){p.removePopup(c,n)}),t(".fasc-thickbox-overlay").on("click",function(t){p.removePopup(c,n)}),e.click(function(t){t.preventDefault(),t.stopImmediatePropagation();var a=i[p.type].createButtonHtml({isSaving:!1,hasID:!0}),e=jQuery(a).attr("data-fasc-id");return s(a,e),p.removePopup(c,n),!1});var r=n.attr("data-fasc-width"),f=n.attr("data-fasc-height");t(window).resize(_.debounce(function(){p.centerPopup(c)},100)),p.centerPopup(c,r,f)},removePopup:function(a,c){t(".fasc-thickbox-overlay").remove(),a.remove(),t("body").append(c),c.attr("id",i[this.type].content_id)},centerPopup:function(a,i,c){var e=a.find(".fasc-thickbox-header"),o=a.find(".fasc-thickbox-footer"),n=a.find(".fasc-thickbox-content");t(window);var s=-a.height()/2,p=-a.width()/2;a.css("position","fixed").css({"margin-left":p+"px","margin-top":s+"px",left:"50%",top:"50%"}),n.hide();var r=a.outerHeight();r-=e.outerHeight(),r-=o.outerHeight(),n.height(r),n.show()}}}(jQuery);
