// 搜索框
$('.bar input:first').focus(function(){
    $('.history').css('display','block');
})
$('.bar input:first').blur(function(){
    $('.history').css('display','none');
})

// 侧边栏
$('.side ul li').click(function(){
    $('.side').animate({
        right : 0
    },200)
})
$('.side h2 span').click(function(){
    $('.side').animate({
        right : -300
    },200)
})

// 返回顶部
$('.backtop').click(function(){
    $('body,html').animate({
        'scrollTop' : 0
    },300)
})
