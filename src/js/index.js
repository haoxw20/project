// 搜索框
$('.bar input:first').focus(function(){
    $('.history').css('display','block');
})
$('.bar input:first').blur(function(){
    $('.history').css('display','none');
})

//倒计时
$(function(){
    setInterval(function(){
        var date = new Date();
        var newDate = new Date(2019,11,10);
        var time = parseInt(newDate.getTime() / 1000) - parseInt(date.getTime() / 1000);

        var second = zero(parseInt(time % 60));
        var minite = zero(parseInt((time / 60) % 60));
        var hour = zero(parseInt((time / 3600) % 60));
        var day = zero(parseInt((time / 3600) / 24));

        $('.count').html('<span>' + day + '</span> : <span>' + hour + '</span> : <span>' + minite + '</span> : <span>' + second + '</span>');
    },1000)
    function zero(num){
        if(num < 10){
            return '0' + num; 
        }else{
            return num;
        }
    }
})

//轮播
$(function(){
    var $ul = $('.seckill .slide ul');
    var $left = $('.seckill .slide .btn-left');
    var $right = $('.seckill .slide .btn-right');
    $left.click(function(){
        if(Math.round($ul.position().left) == 0){
            $ul.animate({
                left : -2420
            },0,function(){
                $ul.animate({
                    left : Math.round($ul.position().left + 1210) 
                },800)
            })
        }else{
            $ul.animate({
                left : Math.round($ul.position().left + 1210) 
            },800)
        }
    })
    $right.click(function(){
        slider();
    })
   

    function slider(){
        if(Math.round($ul.position().left) == -2420){
            $ul.animate({
                left : 0
            },0,function(){
                $ul.animate({
                    left : Math.round($ul.position().left - 1210) 
                },800)
            })
        }else{
            $ul.animate({
                left : Math.round($ul.position().left - 1210) 
            },800)
        }
    }
    var timer = setInterval(function(){
        slider();
    },3000)
    $('.seckill .slide').mouseenter(function(){
        clearInterval(timer);
    })
    $('.seckill .slide').mouseleave(function(){
        timer = setInterval(function(){
            slider();
        },3000)
    })
    
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