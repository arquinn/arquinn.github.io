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
  
  

  var about = $('#About');
  var contact = $("#Contact");
  var beer = $("#Beers");
  
  
  var aleft = contact.offset().left;
  var ctop = contact.offset().top;
  var cleft = contact.offset().left;
  var btop = beer.offset().top;
  var bleft = beer.offset().left;
  var indicator = $("#indicator");
  
  if ((btop - scroll) < 0) indicator.attr("left", bleft)
  else if ((ctop - scroll) < 0) indicator.attr("left",cleft)
  else indicator.attr("left",aleft)
    
      
  
    });
