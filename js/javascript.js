$('li').filter(".answer").hide();

$('li.question').click(
    function(){
        $('li').filter(".answer").slideUp();
        $(this).nextUntil('.question').slideDown();
    });


var stickyOffset = $('.navbar').offset().top;
$(window).scroll(function(){
  var sticky = $('.navbar'),
      scroll = $(window).scrollTop();
    
  if (scroll >= stickyOffset) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});
