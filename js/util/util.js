function set_session (key, value) {
	sessionStorage.setItem(key, value)
}

function get_session (key) {
	return sessionStorage.getItem(key)
}

//url校验
//获取参数值 t：参数名
function getUrl(t){
    var e = new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),
        i = window.location.search.substr(1).match(e);
    return null!=i?decodeURI(i[2]):null
}

//改变参数  t：url  e：参数名 i: 参数值
function changeUrl(t, e, i){
    var n=this, r=e+"=([^&]*)", a=e+"="+i, s=encodeURI(n.getUrl(e));
    if (t.match(r)){
        var t_front = t.split(e+'=')[0] + e + '='
        var t_middle = t.split(e+'=')[1]
        var t_back = t_middle.replace(s, i)
        return t= t_front + t_back
    } else {
        if(t.match("[?]")){
            return t+"&"+a
        } else {
            return t+"?"+a
        }
    }
}

//删除参数 t：url  e：参数名
function deleteUrl(t, e){
    var n="";
    if(t.indexOf("?")==-1)return t;
    n=t.substr(t.indexOf("?")+1);
    var r="", a="";
    if(n.indexOf("&")!=-1){
        r=n.split("&");
        for(i in r)r[i].split("=")[0]!=e&&(a=a+r[i].split("=")[0]+"="+r[i].split("=")[1]+"&");
        return t.substr(0, t.indexOf("?"))+"?"+a.substr(0, a.length-1)
    }
    return r=n.split("="), r[0]==e?t.substr(0, t.indexOf("?")):t
}

//勾选框状态改变
$("input[type='checkbox']").change(function () {
    console.log('11')
    if ($("input[type='checkbox']").is(':checked')) {
        $("input[type='checkbox']:checked + label").addClass('check_select');
    } else {
        $("input[type='checkbox'] + label").removeClass('check_select');
    }
})