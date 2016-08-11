$('li').filter(".answer").hide();

$('li.question').click(
    function(){
            if($(this).next().css('display') == 'none') {
                $('li').filter(".answer").slideUp();
                $(this).nextUntil('.question').slideDown(); 
            }
            else {
             $('li').filter(".answer").slideUp();
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
  
    
  var ctop = $("#Contact").offset().top;
  var btop = $("#Beers").offset().top;
  var indicator = $("#indicator");
  
  bleft = $("#bind").offset().left;
  cleft = $("#cind").offset().left;
  aleft = $("#aind").offset().left;
  
  if ((btop - scroll) < 0) indicator.css("left", bleft)
  else if ((ctop - scroll) < 0) indicator.css("left",cleft)
  else indicator.css("left",aleft)
    
      
  
});
