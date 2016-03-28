$('li').filter(".answer").hide();

$('li.question').click(
    function(){
        if ($(this).next().height() > 1) {
            $('li').filter(".answer").slideUp();
        }
        else {
            $('li').filter(".answer").slideUp();
            $(this).nextUntil('.question').slideDown();
        }
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
