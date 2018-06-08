!function (i, e) {
    "function" == typeof define && (define.amd || define.cmd) ? define(e) : i.ErrorTip = e()
}(this, function (require) {
    if ("function" == typeof require) require("common/ui/Follow"); else if (!$().follow)return window.console && window.console.error("need Follow.js"), {};
    $.fn.errorTip = function (e, t) {
        return $(this).each(function () {
            new i($(this), e, t)
        })
    };
    var i = function (i, e, t) {
        var r = {unique: !0, align: "center", onShow: $.noop, onHide: $.noop}, n = $.extend({}, r, t || {});
        if ($.isFunction(e) && (e = e()), "string" != typeof e)return this;
        var o, a, s, d = this, l = i;
        return 1 == n.unique && window.errorTip ? o = window.errorTip.data("trigger", l) : 0 == n.unique && l.data("errorTip") ? o = l.data("errorTip") : (o = $('<div class="ui-tips-x ui-tips-error"></div>'), a = $("<span></span>").addClass("ui-tips-before"), $(document.body).append(o.append(a).append(s)), 1 == n.unique ? window.errorTip = o.data("trigger", l) : l.data("errorTip", o), $(document).bind({
            keydown: function (i) {
                16 != i.keyCode && 17 != i.keyCode && d.hide()
            }, mousedown: function (i) {
                var e = document.activeElement, t = o.data("trigger"), r = i.target;
                e && t && e == r && e == t.get(0) && 0 == t.data("focus") || d.hide()
            }
        }), $(window).bind({
            resize: function () {
                d.hide()
            }
        })), this.el = {
            trigger: i,
            tips: o,
            before: a || o.find("span"),
            after: s || o.find("i")
        }, this.callback = {
            show: n.onShow,
            hide: n.onHide
        }, this.cl = "ui-tips", this.align = n.align, this.show(e), this
    };
    return i.prototype.show = function (i) {
        var e = this.el, t = e.tips, r = e.trigger, n = e.before, o = e.after;
        n.html(i);
        var a = this.align, s = 0;
        return "left" == a ? s = -.5 * n.width() + parseInt(n.css("padding-left")) || 0 : "right" == a ? s = .5 * n.width() - parseInt(n.css("padding-right")) || 0 : "number" == typeof a && (s = a), o.css({left: s}), t.follow(r, {
            align: a,
            position: "5-7",
            edgeAdjust: !1
        }), t.show(), r.attr("aria-label", "错误提示：" + i), this.callback && this.callback.show && this.callback.show.call(r.addClass("error valided"), t), this
    }, i.prototype.hide = function () {
        var i = this.el.tips, e = this.el.trigger;
        return e.removeAttr("aria-label"), "none" != i.css("display") && (i.hide(), this.callback && this.callback.hide && this.callback.hide.call((i.data("trigger") || e).removeClass("error"), i)), this
    }, i
});