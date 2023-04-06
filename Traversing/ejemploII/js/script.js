$(document).ready(function () {

    var frutas = [];
 
    console.log(frutas.length);

    $(".origen img").dblclick(function(e){
        frutas[frutas.length] = $(this).detach();
        $(".destino h2 span").text(frutas.length);
    });

    $("#echar").click(function (e) { 
        if(!frutas.length){
            alert("Cesta vacía");
        } else {
            frutas.forEach(item =>{
                $(".destino").children().last().after(item);
            });
            frutas = [];
            $(".destino h2 span").text(0);
        }
       
    });

    $("#vaciar").click(function(e){
        $(".destino").children().slice(1).remove();
    });

    


});