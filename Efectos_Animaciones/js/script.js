$(document).ready(function () {
    
    $("button:contains(1)").click(function(e){
        /*La duración por defecto de los efectos es de 400ms*/
        //$("#elemento").hide();
        //$("#elemento").show();
        //$("#elemento").toggle();

        //$("#elemento").slideDown();
        //$("#elemento").slideUp();
        $("#elemento").stop();
        $("#elemento").clearQueue();
        $("#elemento").fadeToggle(2000);

       
    });

    $("button:contains(2)").click(function(e){
        $("#elemento").finish();
        $("#elemento").fadeToggle(3000);
    });

    function showSize(){
        var elementos = $("#elemento").queue("fx");
        $("p span").text(elementos.length);
        setTimeout(showSize, 100);
    }
    showSize();
});