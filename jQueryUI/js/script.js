$(document).ready(function () {
    $("#menu").menu();
    $("#tabs").tabs();
    $("#tabs-3 input").checkboxradio();
    $("#accordion").accordion({
        heightStyle: "content"
    });
    $("#dialog").dialog({
        resizable: false,
        autoOpen: false,
        height: "auto",
        width: 400,
        modal: true,
        buttons: {
            "Aceptar":function(){
                $(this).dialog("close");
            },
            "Cancel": function(){
                $(this).dialog("close");
            }
        }
       
    });
    $("#showDialog").on("click", function(){
        $("#dialog").dialog("open");
    });
});