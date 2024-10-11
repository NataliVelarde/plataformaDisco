

//
function pedirNombre() {
    // Solicita el nombre al usuario
    const nombre = prompt("Ingrese su nombre:");



    // Verifica si se ingresó un nombre
    if (nombre) {
        // Muestra el nombre en la página
        document.getElementById("nombre").innerText = "¡Hola, " + nombre + " ya podes comprar tu entrada!";
    } else {
        // Si no ingresa nada, muestra un mensaje por defecto
        document.getElementById("nombre").innerText = "No ingresaste un nombre.";   
    }

   
    
}




window.onload = function() {
    pedirNombre();
};





// EL SIGUIENTE CODIGO CORRESPONDE AL APODO PARA TUTEAR EN COMPRA DE
let nombre = prompt("Cuál es tu Apodo?").toUpperCase();
while (nombre.length < 3) {
    nombre = prompt(
        "Mmmm, tu Apodo no puede ser tan corto, ingresa al menos 3 letras",
    ).toUpperCase();
}
const span = document.getElementById("nombre");
span.textContent = `${nombre}`;




    // EL SIGUIENTE CODIGO CORRESPONDE A COMPRA DE TICKETS
function getTickets(hayTickets, lugar) {
    if (hayTickets) {
        swal({
            title: "Tickets Adquiridos!",
            text: "Felicitaciones, " + nombre + ", has conseguido entradas para el concierto en " + lugar + "!",
            icon: "success",
        });
    } else {
        swal({
            title: "AGOTADO",
            text: "No hay tickets disponibles para el concierto en " + lugar + ".",
            icon: "error",
        });
    }
}

    

   