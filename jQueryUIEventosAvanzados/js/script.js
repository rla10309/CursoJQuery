$(document).ready(function () {
    

    let caja1 = $(".container div").eq(0);
    let caja2 = $(".container div").eq(1);
    let caja3 = $(".container div").eq(2);
    let caja4 = $(".container div").eq(3);
    let caja5 = $(".container div").eq(4);

    $(".container").sortable({
        placeholder: "ui-state-highlight"
    });

    $(".container_img img").resizable({
        containment: "parent",
        classes:{
            "center": "center"
        }
    });
    $(".container div").draggable({
        connectToSortable: ".container"
    });

    $(".container_droppable").droppable({
        accept: ".container > div",
        drop: function(event, ui){
            $(this).addClass("ui-state-highlight");
            let elemento = ui.draggable;
            elemento.css("position", "static");
            $(this).append(elemento.clone(9));
            elemento.remove();
            console.log(ui);
        }
    });
});