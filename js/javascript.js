$('li').filter(".answer").hide();

$('li.question').click(
    function(){
        $('li:not(".question")').slideUp();
        $(this).nextUntil('.question').slideDown();
    });
