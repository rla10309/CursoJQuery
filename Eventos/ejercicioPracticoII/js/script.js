$(document).ready(function () {
    

    //asociamos eventos delegados a las imágenes
    $("#images").on("click", "img", function(e){
        $("#picture img").attr("src", $(this).attr("src"));
    });
    //asociación delegada de eventos a marco
    $(".colors").on("click", "div", function(e){
        $("#picture, #picture img").css("border-color", $(this).css("background-color"));
    });

     //captura eventos zoom en una sola captura
     $("#zoom img").click(function(e){
        if($(this).attr("src") == "img/zoom-in.png"){
            $("#picture img").css({
                "height":"+=20px",
                "width":"+=20px"
            });
        } else {
            $("#picture img").css({
                "height":"-=20px",
                "width":"-=20px"
            });
        }
     });
     //añadimos una nueva imagen
     $("a.btn").click(function(e){
        e.preventDefault(); //previene la acción por defecto del enlace "a"
        $("#images").append("<img src='img/jquery.gif'/>");
     })
});