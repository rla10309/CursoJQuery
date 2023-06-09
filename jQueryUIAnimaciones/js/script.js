$(document).ready(function () {
    $(".container div").click(function(e){
       // $(this).hasClass("small_font") ? $(this).removeClass("small_font", 1000) : $(this).addClass("small_font", 1000);

        $(this).toggleClass("small_font", 1000);
        //$(this).switchClass();
    });

    $(".colores button").on("click", function(e){
        let color = $("input[type='color']").val();
        $(".container:first div").animate({
            "background-color":color
        }, 3000);
    });

    $(".efectos select").change(function(e){
        let efecto = $(this).val();
        $(".container:first div").toggle(efecto, 2000);
    });


});