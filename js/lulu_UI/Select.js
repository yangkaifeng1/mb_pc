!function (e, t) {
    "function" == typeof define && (define.amd || define.cmd) ? define(t) : e.Select = t()
}(this, function (require) {
    "function" == typeof require && require("common/ui/Enhance");
    var e = "ui-select", t = "ui-".replace(/[a-z]/gi, "");
    $.fn.selectMatch = function () {
        console.log('11')
        return $(this).each(function () {
            var e = $(this);
            e.data("select") ? e.data("select").refresh() : new a(e)
        })
    };
    var a = function (a) {
        if (a) {
            a.size || (a = $(a));
            var s = a[0].id;
            s || (s = ("id_" + Math.random()).replace("0.", "")), this.id = s;
            var i = $("<div></div>").attr({role: "combobox"}), r = $("<a></a>").attr({
                href: "javascript:",
                "data-target": s,
                role: "button",
                "aria-expanded": "false",
                "aria-owns": s
            }).addClass(e + t + "button"), o = $("<div></div>").attr({
                id: s,
                role: "listbox",
                "aria-expanded": "true"
            }).addClass(e + t + "datalist");
            i.append(r).append(o), a.hide().after(i), this.el = {
                sel: a,
                combobox: i,
                button: r,
                datalist: o
            }, this.refresh(), this.events(), a.data("select", this)
        } else window.console && window.console.error("Select实例方法参数缺失")
    };
    return a.prototype.events = function () {
        var e = this, t = e.el, a = t.sel, s = t.combobox, i = t.button, r = t.datalist;
        i.on("click", function () {
            if (a.prop("disabled"))return !1;
            if (s.toggleClass("active"), s.hasClass("active")) {
                var e = r.offset().top + r.outerHeight() > Math.max($(document.body).height(), $(window).height());
                s[e ? "addClass" : "removeClass"]("reverse"), i.attr("aria-expanded", "true");
                var t = s.data("scrollTop"), o = r.find(".selected");
                t && t[1] == o.attr("data-index") && t[2] == o.text() && (r.scrollTop(t[0]), s.removeData("scrollTop"))
            } else s.removeClass("reverse"), i.attr("aria-expanded", "false")
        }), r.on("click", "a[data-index]", function () {
            var t = $(this).attr("data-index"), o = r.scrollTop();
            s.removeClass("active"), i.attr("aria-expanded", "false"), s.data("scrollTop", [o, t, $(this).text()]), a.find("option")[t].selected = !0, e.refresh(), a.trigger("change"), i.focus().blur()
        }), $(document).mouseup(function (e) {
            var t = e.target;
            t && s.hasClass("active") && s[0] !== t && 0 == s[0].contains(t) && s.removeClass("active").removeClass("reverse")
        })
    }, a.prototype.getData = function () {
        return this.el.sel.find("option").map(function () {
            var e = this;
            return {
                html: e.innerHTML,
                value: e.value,
                selected: e.selected,
                disabled: e.disabled,
                className: e.className
            }
        })
    }, a.prototype.refresh = function (a) {
        var s = this, i = s.id, r = s.el, o = r.sel, n = r.combobox, l = r.button, d = r.datalist;
        return a = a || s.getData(), n.attr("class", $.trim(o[0].className + " " + e)).width(o.outerWidth()), l.html('<span class="' + e + t + 'text">' + function () {
                var e = "";
                return $.each(a, function (t, a) {
                    a.selected && (e = a.html)
                }), e || a[0].html
            }() + '</span><i class="' + e + t + 'icon" aria-hidden="true"></i>'), d.html($.map(a, function (a, s) {
            var r = [e + t + "datalist" + t + "li", a.className];
            return a.selected && r.push("selected"), a.disabled && r.push("disabled"), '<a href="javascript:" class="' + r.join(" ") + '" data-index=' + s + ' data-target="' + i + '" role="option" aria-selected="' + a.selected + '">' + a.html + "</a>"
        }).join("")), this
    }, a
});