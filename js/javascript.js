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

var bind = $("#bind"),
    cind = $("#cind"),
    aind = $("#aind");
  

$(window).scroll(function(){
  var sticky = $('.navbar'),
      scroll = $(window).scrollTop();

  if (scroll >= stickyOffset) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
  
    
var ctop = $("#Contact").offset().top,
    btop = $("#Beers").offset().top;

var acenter = aind.offset().left + (aind.width() / 2),
    bcenter = bind.offset().left + (bind.width() / 2),
    ccenter = cind.offset().left + (cind.width() / 2);


    
  var indicator = $("#indicator");
  inCenterAdj = (indicator.width() / 2);
  
  
  if ((btop - scroll) < 0) indicator.animate({"left":bcenter - inCenterAdj}, 500);
  else if ((ctop - scroll) < 0) indicator.animate({"left":ccenter - inCenterAdj}, 500); 
  else indicator.animate({"left":acenter - inCenterAdj}, 500);
  
      
  
});
