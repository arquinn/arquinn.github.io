$('li').filter(".answer").hide();

$('li.question').click(
    function(){
            console.log(getComputedStyle($(this).next(),null).display)
            $('li').filter(".answer").slideUp();
            $(this).nextUntil('.question').slideDown();
    });

$('li.answer').click(
    function(){
        $(this).filter(".answer").slideUp();
    });
    
var stickyOffset = $('.navbar').offset().top;
$(window).scroll(function(){
  var sticky = $('.navbar'),
      scroll = $(window).scrollTop();
    
  if (scroll >= stickyOffset) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});
