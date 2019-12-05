var arr = [false,false];
$('.box .user input').blur(function(){
    var reg = /^[\u4e00-\u9fa5]{2,}$/;
    if(reg.test($(this).val())){
        $(this).next().css('display','none');
        arr[0] = true;
    }else{
        $(this).next().css('display','block')
    }
})
$('.box .psd input').blur(function(){
    var reg = /^[a-z1-9]{6,}$/i;
    if(reg.test($(this).val())){
        $(this).next().css('display','none');
        arr[1] = true;
    }else{
        $(this).next().css('display','block')
    } 
})
$('.box .btn').click(function(){
    if(arr.indexOf(false) != -1){
        $(this).next().html('好好写');
        $(this).next().css('display','block');
        return;
    }
    var uname = $('.box .user input').val();
    var upsd = $('.box .psd input').val();
    var cookieStr = $.cookie('registers') ? $.cookie('registers') : '';
    var cookieObj = toCookieObj(cookieStr);
    if(uname in cookieObj){
        $(this).next().html('用户名已存在');
        $(this).next().css('display','block');
        return;
    }
    cookieObj[uname] = upsd;
    $.cookie('registers',JSON.stringify(cookieObj),{expires : 7,path : '/'});
    $(this).next().css('display','none');
    alert('注册成功');
    $('.box .user input').val('');
    $('.box .psd input').val('');
})

function toCookieObj(cookieStr){
    if(!cookieStr){
        return {};
    }
    return JSON.parse(cookieStr);
}
