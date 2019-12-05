$('.box .user input').blur(function(){
    var reg = /^[\u4e00-\u9fa5]{2,}$/;
    if(reg.test($(this).val())){
        $(this).next().css('display','none');
    }else{
        $(this).next().css('display','block')
    }
})
$('.box .psd input').blur(function(){
    var reg = /^[a-z1-9]{6,}$/i;
    if(reg.test($(this).val())){
        $(this).next().css('display','none');
    }else{
        $(this).next().css('display','block')
    }
})
$('.box .btn').click(function(){
    var uname = $('.box .user input').val();
    var upsd = $('.box .psd input').val();
    if(!uname){
        return;
    }
    if(!upsd){
        return;
    }
    var cookieStr = $.cookie('registers') ? $.cookie('registers') : '';
    var cookieObj = toCookieObj(cookieStr);
    if(uname in cookieObj){
        if(cookieObj[uname] == upsd){
            alert('登录成功');
            location.href = '../index.html';
            return;
        }else{
            alert('密码不正确');
        }
    }else{
        alert('用户名不正确');
    }
})

function toCookieObj(cookieStr){
    if(!cookieStr){
        return {};
    }
    return JSON.parse(cookieStr);
}