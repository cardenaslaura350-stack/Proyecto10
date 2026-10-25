
const botones = document.querySelectorAll(".boton-pestana");
const contenidos = document.querySelectorAll(".contenido");

botones.forEach(function (boton) {

    boton.addEventListener("click", function () {


        botones.forEach(function (boton) {
            boton.classList.remove("activa");
        });


        contenidos.forEach(function (contenido) {
            contenido.classList.remove("activa");
        });


        boton.classList.add("activa");


        const numero = boton.dataset.pestana;

        const contenidoSeleccionado = document.querySelector(
            '.contenido[data-contenido="' + numero + '"]'
        );

        contenidoSeleccionado.classList.add("activa");

    });



    
});
