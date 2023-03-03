$(document).ready(function () {
     $("input:last-of-type").hide();
     // EACH Y EL OBJETO THIS
     $(".iconized li").each(function(index){
      console.log(`El elemento ${index} contiene ${$(this).text()}`);
      if(index%2 == 0)
        $(this).css("color", "orange");
     });
    //SELECCIONAMOS LAS CELDAS QUE TIENEN B
     $("td:contains(B)").css("color", "green");
    //CELDAS DE LA PRIMERA COLLUMNA QUE CONTIENEN A
     $("td:nth-child(1):contains(A)").text("HOLA");
     $(":input").css("background", "lightgrey");
     $("form span").css("background", "lightblue");
     $(":header").css("color", "tomato");
      //para todos los li de la clase .iconized
      $(".iconized li").css({
        "color":"pink",
        "background":"green"
      });

      //para el primer li
      $(".iconized li").eq(0).css({
        "color": "black",
        "background":"none"
      });

      //funciones width() y height()
      //obtenemos ancho de una imagen
      var ancho = $("img").eq(4).width();
      console.log(ancho);
      //establecemos ancho a una imagen
      $("img").eq(5).width("20px");
  
    //Trabajamos con clases

        $("tbody td:nth-child(2)").eq(0).addClass("celda_destacada");
  
        $("section").addClass(function (index) {
          return "section " + index;
        });
  
        $("section").removeClass(function (index) {
          return "section " + index;
        });
        $("tbody tr:first td").addClass("celda_destacada");
        if ($("tbody tr:first td").hasClass("celda_destacada")) {
          alert("Hay elementos destacados");
        }
      });
    
