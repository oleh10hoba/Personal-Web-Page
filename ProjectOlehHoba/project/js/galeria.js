var actual = 1;
$(document).ready(function ()
{
    var body = $('body');
    body.css('background', '  url(\'img/l3.jpg\') 50% 37px  no-repeat');
    body.css('background-size', '100%');
    actual = 1
});
function slideSwitch() 
{
    var $active = $('#slideshow IMG.active');
    if ($active.length === 0)
    $active = $('#slideshow IMG:last');
    var $next = $active.next().length ? $active.next()
    : $('#slideshow IMG:first');
    $active.addClass('last-active');
    $next.css({opacity: 0.0})
    .addClass('active')
    .animate({opacity: 1.0}, 1000, function () 
    {
        $active.removeClass('active last-active');
    });
}
$(function () 
{
    setInterval("slideSwitch()", 3000);
    
});
function press1()
{
    document.querySelector('body').style.background = ' url(\'img/l1.jpg\') 50% 37px no-repeat';
    $('body').css('background-size', '100%');
    actual = 2;
}
function press2()
{
    var body = $('body');
    body.css('background', ' url(\'img/l2.jpg\') 50% 37px  no-repeat');
    body.css('background-size', '100%');
    actual = 3;
}
function press3()
{
    var body = $('body');
    body.css('background', '  url(\'img/l3.jpg\') 50% 37px  no-repeat');
    body.css('background-size', '100%');
    actual = 1;
}
$(function()
{      
    setInterval('slideMain()', 3000);
});
function slideMain()
{
    var body = $('body');
    body.css('background', ' url(\'img/l'+actual+'.jpg\') 50% 37px  no-repeat');
    body.css('background-size', '100%');
    actual ++;
    if(actual == 4)
    {
        actual = 1;
    }
}