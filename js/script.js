function enviarMensaje() {
    // Tomar el mensaje del input
    var mensaje = document.getElementById('mensaje').value;

    // Validar que no esté vacío
    if (mensaje.trim() === "") {
        alert("Por favor, ingresa un mensaje.");
        return;
    }

    // Animar la tarjeta inicial y mostrar el formulario de datos personales
    var tarjeta = document.getElementById('tarjeta');
    tarjeta.classList.add('rotate-out');

    setTimeout(function() {
        tarjeta.classList.add('hidden');
        tarjeta.classList.remove('visible', 'rotate-out');

        var datosPersonales = document.getElementById('datos_Personales');
        datosPersonales.classList.remove('hidden');
        datosPersonales.classList.add('visible', 'rotate-in');
    }, 800); // Esperar a que termine la animación de ocultar
}

function enviarDatos() {
    // Tomar los valores del formulario
    var nombre = document.getElementById('Nombre').value;
    var puesto = document.getElementById('Puesto').value;
    var mensaje = document.getElementById('mensaje').value;

    // Validar que los campos no estén vacíos
    if (nombre.trim() === "" || puesto.trim() === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Mostrar la tarjeta final con los datos completos
    document.getElementById('finalMensaje').textContent = "Mensaje: " + mensaje;
    document.getElementById('finalNombre').textContent = "Nombre: " + nombre;
    document.getElementById('finalPuesto').textContent = "Puesto solicitado: " + puesto;

    // Animar el formulario de datos personales y mostrar la tarjeta final
    var datosPersonales = document.getElementById('datos_Personales');
    datosPersonales.classList.add('rotate-out');

    setTimeout(function() {
        datosPersonales.classList.add('hidden');
        datosPersonales.classList.remove('visible', 'rotate-out');

        var datosCompletos = document.getElementById('datos_Completos');
        datosCompletos.classList.remove('hidden');
        datosCompletos.classList.add('visible', 'rotate-in');
    }, 800); // Esperar a que termine la animación de ocultar
}
