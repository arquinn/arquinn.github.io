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
  var beer = $("#Beer");
  var coff = contact.offset().top;
  var boff = beer.offset().top;
  var indicator = $("#indicator");
  
  if ((boff - scroll) < 0) indicator.attr("left", 100)
  else if ((coff - scroll) < 0) indicator.attr("left",200)
  else indicator.attr("left",300)
    
      
  
});
