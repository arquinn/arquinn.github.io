$('li').filter(".answer").hide();

$('li.question').click(
    function(){
        $('li'.filter(".answer").slideUp();
        $(this).nextUntil('.question').slideDown();
    });


$(window).scroll(function(){
  var sticky = $('.navbar-fixed'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});
