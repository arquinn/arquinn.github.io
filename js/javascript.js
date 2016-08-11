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
  
console.log( $("#About"))
var aboutOffset = $( "#About" ).offset().top;
var contactOffset = $( "#Contact" ).offset().top;
var beerOffset = $( "#Beer" ).offset().top;
var stickyOffset = $('.navbar').offset().top;

$(window).scroll(function(){
  var sticky = $('.navbar'),
      scroll = $(window).scrollTop();
    
  var indicator = $("#indicator")
  if (scroll >= stickyOffset) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
  
  
  if ((beerOffset - scroll) < 0) indicator[left] = 100
  else if ((contactOffset - scroll) < 0) indicator[left] = 200
  else indicator[left] = 300
    
      
  
});
