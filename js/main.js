// menu-1===================================================
var turn_key_ul = $('.turn_key_ul'),
    timeoutId;
$('.turn_key').hover(function(){
    clearTimeout(timeoutId);
    turn_key_ul.show();
}, function(){
    timeoutId = setTimeout($.proxy(turn_key_ul,'hide'), 1000)
});
turn_key_ul.mouseenter(function(){
    clearTimeout(timeoutId);
}).mouseleave(function(){
    turn_key_ul.hide();
});

// menu-2=================================================
var affordable_ul = $('.affordable_ul'),
    timeoutId;
$('.affordable_prices').hover(function(){
    clearTimeout(timeoutId);
    affordable_ul.show();
}, function(){
    timeoutId = setTimeout($.proxy(affordable_ul,'hide'), 1000)
});
affordable_ul.mouseenter(function(){
    clearTimeout(timeoutId);
}).mouseleave(function(){
    affordable_ul.hide();
});

// menu-3====================================================
var quality_ul = $('.quality_ul'),
    timeoutId;
$('.high_quality').hover(function(){
    clearTimeout(timeoutId);
    quality_ul.show();
}, function(){
    timeoutId = setTimeout($.proxy(quality_ul,'hide'), 1000)
});
quality_ul.mouseenter(function(){
    clearTimeout(timeoutId);
}).mouseleave(function(){
    quality_ul.hide();
});
