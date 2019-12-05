$(function(){
    var cookieStr = $.cookie('shop') ? $.cookie('shop') : '';
    var cookieObj = toCookieObj(cookieStr);

    for(var key in cookieObj){
        var good = cookieObj.sp1;
    $('<ul class="cart-good" id="sp1"><li>' + good.name + '</li><li>' + good.price+ '</li><li class="num"><a href="javascript:;" class="minus">-</a><input type="text" name="" id="" value="' + good.num + '"/><a href="javascript:;" class="plus">+</a></li><li class="total">' + good.price * good.num + '  </li><span><a href="javascript:;" class="del"></a></span></ul>').appendTo($('.cart-list'));
    }
    

    // -
    $('.cart-list .cart-good .num .minus').click(function(){
        var id = $(this).parents('.cart-good').attr('id');
        var cookieStr = $.cookie('shop') ? $.cookie('shop') : '';
        var cookieObj = toCookieObj(cookieStr);
        if(cookieObj[id].num > 1){
            cookieObj[id].num --;
        }
        $.cookie('shop',JSON.stringify(cookieObj),{expires : 7,path : '/'});
        $(this).next().val(cookieObj[id].num);
        $(this).parent().next().html(cookieObj[id].num * cookieObj[id].price);
    })

    // +
    $('.cart-list .cart-good .num .plus').click(function(){
        var id = $(this).parents('.cart-good').attr('id');
        var cookieStr = $.cookie('shop') ? $.cookie('shop') : '';
        var cookieObj = toCookieObj(cookieStr);
        cookieObj[id].num ++;
        $.cookie('shop',JSON.stringify(cookieObj),{expires : 7,path : '/'});
        $(this).prev().val(cookieObj[id].num);
        $(this).parent().next().html(cookieObj[id].num * cookieObj[id].price);
    })

    // input
    $('.cart-list .cart-good .num input').blur(function(){
        var id = $(this).parents('.cart-good').attr('id');
        var cookieStr = $.cookie('shop') ? $.cookie('shop') : '';
        var cookieObj = toCookieObj(cookieStr);
        var num = $(this).val();
        if(!(isNaN(num)) && num > 0){
            cookieObj[id].num = num;
        }else{
            cookieObj[id].num = 1;
        }
        $.cookie('shop',JSON.stringify(cookieObj),{expires : 7,path : '/'});
        $(this).val(cookieObj[id].num);
        $(this).parent().next().html(cookieObj[id].num * cookieObj[id].price);
    })

    // 删除
    $('.cart-list .cart-good .del').click(function(){
        var id = $(this).parents('.cart-good').attr('id');
        $(this).parents('.cart-good').remove();
        var cookieStr = $.cookie('shop') ? $.cookie('shop') : '';
        var cookieObj = toCookieObj(cookieStr);
        $.cookie('shop',JSON.stringify(cookieObj),{expires : 0,path : '/'});
    })


    function toCookieObj(cookieStr){
        if(!cookieStr){
            return {};
        }
        return JSON.parse(cookieStr);
    }
})
