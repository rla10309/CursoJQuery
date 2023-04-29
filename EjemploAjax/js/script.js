$(document).ready(function () {
    /*Evento click boton mostrar usuarios*/
    $(".users").click(function (e) {
        /*Vacía la lista*/
        $("ul.lista_usuarios").empty();
        /*Petición ajax*/
        $.ajax("https://jsonplaceholder.typicode.com/users?nocache=" + new Date().getTime(), {
            dataType: "json",
            success: function (data) {
                data.forEach(function (element) {
                    $("ul.lista_usuarios").append(`<li><span class='oculto'>${element.id}</span> ${element.name}</li>`);
                });
            },
            error: function (jqXHR, textStatus, error) {
                alert("Error: " + textStatus + " " + error);
            }
        });/*fin petición ajax*/

    });/*fin click users*/

    $(".fotos").click(function () {
        $("ul.lista_fotos").empty();
        $.ajax("https://jsonplaceholder.typicode.com/photos?nocache=" + new Date().getTime(), {
            dataType: "json",
            success: function (data) {
                for (var i = 0; i < 3; i++) {
                    $("ul.lista_fotos").append(`<li class='elemento'><img src='${data[i].thumbnailUrl}'/></li>`);
                }
            }
        });/*fin peticiion ajax*/
    });/*fin click fotos*/

    $("ul.lista_usuarios").on("mouseenter", "li", function (e) {
        $(this).addClass("selected");
        let id = $(this).children().eq(0).text();
        let url = "https://jsonplaceholder.typicode.com/users?id=" + id + "&nocache=" + new Date().getTime();
        $.ajax(url, {
            dataType: "json",
            success: function (data) {
                let datos = procesaDatos(data);
                $(".personal_file").html(datos);
            }
        });
    });

    $("ul.lista_usuarios").on("mouseleave", "li", function (e) {
        $(this).removeClass("selected");
    });

    function procesaDatos(datos) {
        let text;
        datos.forEach(element => {
            text = `<p>Nombre: ${element.name}</p>`;
            text += `<p>UserName: ${element.username}</p>`;
            text += `<p>Email: ${element.email}</p>`;
            text += `<p>Teléfono: ${element.phone}</p>`;
            text += `<p>Compañía: ${element.company.name}</p>`;
            text += `<p>Web: ${element.website}</p>`;
            text += `<p>Ciudad: ${element.address.city}</p>`;
        });
        return text;
    }






});/*FIN*/