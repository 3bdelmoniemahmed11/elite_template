$(function(){
'use strict';
var winh=$(window).height(),
upbar=$(".upper-bar").innerHeight(),
navbar=$(".navbar").innerHeight();
$(".slider,.carousel-item").height(winh-(upbar+navbar));
$('.work ul li').on('click',function()
{
    $(this).addClass('active').siblings().removeClass('active');
    if($(this).data('class')==='.all')
    {
        $('.shuffle .col-md').css("opacity",'1');
    }
    else 
    {
        $('.shuffle .col-md').css("opacity",'0.09');
       $ ($(this).data('class')).parent().css('opacity','1');
    } 
})
});
