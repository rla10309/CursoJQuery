$(document).ready(function () {
    var keydownVeces = 0;
    var keypressVeces = 0;
    var entrandoEL = 0;
    var saliendoEL = 0;
    var entrandoOO = 0;
    var saliendoOO = 0;

    $("#elemento").keydown(function(event){
 
        $("#keydownveces span").html(++keydownVeces);
        $("#teclakeydown span").html(event.which);
    });
    $("#elemento").keypress(function(e){
        $("#keypressveces span").html(++keypressVeces);
        $("#teclakeypress span").html(e.which);
    });
    $(".zona").mouseenter(function(e){
         $("p#entrada1 span").html(++entrandoEL);
    });
    $(".zona").mouseleave(function(e){
        $("p#salida1 span").html(++saliendoEL);
    });
    $(".zona").mouseover(function(e){
        $("p#entrada2 span").html(++entrandoOO);
    });
    $(".zona").mouseout(function(e){
        $("p#salida2 span").html(++saliendoOO);
    })
});