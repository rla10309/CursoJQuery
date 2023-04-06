$(document).ready(function () {
  $(".grade").on("click", function (e) {
    let notas = 0;
    let total = 0;
    $(this)
      .prevUntil(".name")
      .each(function (i) {
        notas++;
        total += parseFloat($(this).text());
        console.log(i + "--->" + notas + "---" + total);
      });
    $(this).text(parseFloat(total) / parseFloat(notas));
  });

  $(".name").mouseenter(function (e) {
    let nota = parseFloat($(this).siblings(".grade").text());
    if (!isNaN(nota)) {
    
      if (nota >= 5) {
        $(this).nextAll().css("background-color", "green");
        $(this).css("background-color", "green");
      } else {
        $(this).nextAll().css("background-color", "red");
        $(this).css("background-color", "red");
      }
    }
  });
  $(".name").mouseleave(function (e) {
    $(this).nextAll().css("background-color", "white");
    $(this).css("background-color", "white");
  });

  $("#find").click(function(e){
    $("table").find(".name").css("background-color", "blue");
  });

  $("#filter").click(function (e) { 
    $("td").filter(":last-child").css("background-color", "pink");
  });

  $("#slice").click(function (e) { 
    let inicio = parseInt($("#start").val());
    let fin = parseInt($("#end").val());
    console.log(inicio + "---" + fin);

    $("tbody tr").each(function(index){
        $(this).children().slice(inicio, fin).css("background-color", "orange");
    });
  });

  $("#reset").click(function(e){

    $("td").css("background-color", "white");
});
});
