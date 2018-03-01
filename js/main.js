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
