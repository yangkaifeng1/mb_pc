!function(t,i){"function"==typeof define&&(define.amd||define.cmd)?define(i):t.LightTip=i()}(this,function(require){"function"==typeof require&&require("common/ui/Enhance");$.lightTip=function(){var t=function(t){var e=$('<div class="ui-lightip"></div>').attr({role:"tooltip",tabindex:"0"});return e.html('<i class="ui-lightip-icon">&nbsp;</i><span class="ui-lightip-text">'+t+"</span>"),$(document.body).append(e),e.css({left:"50%",marginLeft:-.5*e.outerWidth()}),e.zIndex&&e.zIndex(),$.lightTip.activeElement=document.activeElement,e.on("click",function(){i(e)}),e.focus(),e},i=function(t){t&&t.remove(),$.lightTip.activeElement&&($.lightTip.activeElement.focus(),$.lightTip.activeElement.blur())};return{success:function(e,n){var r=t(e).addClass("ui-lightip-success");return r.attr("aria-label","操作成功"),setTimeout(function(){r.fadeOut(function(){i(r)})},n||3e3),r},error:function(e,n){var r=t(e).addClass("ui-lightip-error");return r.attr("aria-label","操作失败"),setTimeout(function(){r.fadeOut(function(){i(r)})},n||3e3),r}}}();var t=function(){return this.el={},this};return t.prototype.success=function(t,i){return this.el.container=$.lightTip.success(t,i),this},t.prototype.error=function(t,i){return this.el.container=$.lightTip.error(t,i),this},t});