$(document).ready(function () {
  /*Calculadora*/

  $("#calculadora button").on("click", function (e) {
    
    let op1 = parseFloat($("input#op1").val());
    let op2 = parseFloat($("input#op2").val());
    let op = $(this).val();
    let resultado;

    switch (op) {
      case "+":
        resultado = op1 + op2;
        break;
      case "-":
        resultado = op1 - op2;
        break;
      case "*":
        resultado = op1 * op2;
        break;
      case "/":
        resultado = op1 / op2;
        break;
    }
    $("#calculadora h4 span").html(resultado);
  });

  /*Tabla*/
  $("tr").mouseenter(function (e) {
    let value = $("#table input#nombre").val();

    $(this).is(":contains(" + value + ")")
      ? $(this).addClass("contains")
      : $(this).addClass("no-contains");
  });
  $("tr").mouseleave(function (e) {
    /*$(this).prop("class", "");*/
    $(this).removeClass(); //elimina todas las clases del elemento
  });

  /*Moviendo el cuadrado */

  $("body").keydown(function (e) {
    let keycode = e.which;
    

    switch (keycode) {
      case 37:
        $("#hijo").css("left", "-=10");
        break;
      case 38:
        $("#hijo").css("top", "-=10");
        break;
      case 39:
        $("#hijo").css("left", "+=10");
        break;
      case 40:
        $("#hijo").css("top", "+=10");
    }
  });

  /*ContextMenu*/
  $("section#contextMenu").hide();
  $("section#table").contextmenu(function(e){
    e.preventDefault();
    console.log(e.which);
    if(e.which == 3){
      $("section#contextMenu").css({
        "left": e.pageX,
        "top": e.pageY
      });
      $("section#contextMenu").toggle();
    }
  });
  $("section#contextMenu").mouseleave(function (e) { 
    console.log(e);
    $(this).toggle();
    
  });
});
