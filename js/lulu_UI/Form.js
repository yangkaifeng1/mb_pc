!function (i, e) {
    "function" == typeof define && (define.amd || define.cmd) ? define(e) : i.Form = e()
}(this, function (require) {
    if ("function" == typeof require) {
        require("LightTip.js"), require("Loading.js");
        var i = require("Validate.js");
        require("Select.js"), require("Checkbox.js")
    } else {
        if (!$().validate)return window.console && window.console.error("need Validate.js"), {};
        if (!$.lightTip)return window.console && window.console.error("need LightTip.js"), {};
        if (!$().loading)return window.console && window.console.error("need Loading.js"), {}
    }
    i = i || window.Validate;
    var e = function (e, o, t) {
        if (!e || !e.length)return this;
        o = o || $.noop, $.isFunction(o) && (o = {success: o}), t = t || {};
        var n = this, r = e, a = r.find("input[type=submit]"), c = $("label[for=" + a.attr("id") + "]");
        return $().placeholder && r.find("[placeholder]").placeholder(), r.find("select").each(function () {
            $(this).data("select") || $(this).selectMatch()
        }), this.el = {form: e, submit: a, button: c}, this.option = {
            callback: o,
            validate: t
        }, this.validate = new i(r, function () {
            o.avoidSend && o.avoidSend() || n.ajax()
        }, t), this
    };
    return e.prototype.ajax = function () {
        var i = this.option.callback, e = this.el.form, o = this.el.button, t = this.el.submit;
        o.loading(), t.attr("disabled", "disabled"), $.ajax({
            url: e.attr("action"),
            data: e.serialize(),
            type: e.attr("method"),
            dataType: "json",
            success: function (o) {
                0 == o.code || 0 == o.error ? i.success.call(e, o) : ($.lightTip.error(o.msg || "您的操作没有成功，你可以稍后重试。"), $.isFunction(i.error) && i.error.apply(e, o))
            },
            error: function () {
                $.lightTip.error("网络异常，刚才的操作没有成功，您可以稍后重试。"), $.isFunction(i.error) && i.error.apply(e, arguments)
            },
            complete: function () {
                o.unloading(), t.removeAttr("disabled"), $.isFunction(i.complete) && i.complete.apply(e, arguments)
            }
        })
    }, e.prototype.submit = function () {
        return this.el.form.trigger("submit"), this
    }, e
});