function validar() {
    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById("nombre").value.trim();
    var apellido = document.getElementById("apellido").value.trim();
    var email = document.getElementById("email").value.trim();
    var dia = document.getElementById("dia").value.trim();
    var mes = document.getElementById("mes").value.trim();
    var anio = document.getElementById("anio").value.trim();
    var obras_sociales = document.getElementById("obras_sociales").value.trim();

    // Variable para controlar si el formulario es válido
    var esValido = true;

    // Función para mostrar errores visuales
    function mostrarError(elemento) {
        elemento.style.border = "2px solid red";
        elemento.style.backgroundColor = "#fdd";
    }

    // Función para limpiar errores visuales
    function limpiarError(elemento) {
        elemento.style.border = "";
        elemento.style.backgroundColor = "";
    }

    // Limpiar errores anteriores
    limpiarError(document.getElementById("nombre"));
    limpiarError(document.getElementById("apellido"));
    limpiarError(document.getElementById("email"));
    limpiarError(document.getElementById("dia"));
    limpiarError(document.getElementById("mes"));
    limpiarError(document.getElementById("anio"));
    limpiarError(document.getElementById("obras_sociales"));

    // Validar campos obligatorios
    if (!nombre) {
        mostrarError(document.getElementById("nombre"));
        esValido = false;
    }
    if (!apellido) {
        mostrarError(document.getElementById("apellido"));
        esValido = false;
    }
    if (!email) {
        mostrarError(document.getElementById("email"));
        esValido = false;
    }
    if (!dia) {
        mostrarError(document.getElementById("dia"));
        esValido = false;
    }
    if (!mes) {
        mostrarError(document.getElementById("mes"));
        esValido = false;
    }
    if (!anio) {
        mostrarError(document.getElementById("anio"));
        esValido = false;
    }
    if (!obras_sociales) {
        mostrarError(document.getElementById("obras_sociales"));
        esValido = false;
    }

    // Validar que día, mes y año sean numéricos y positivos
    if (!/^\d+$/.test(dia) || parseInt(dia) <= 0) {
        mostrarError(document.getElementById("dia"));
        esValido = false;
    }
    if (!/^\d+$/.test(mes) || parseInt(mes) <= 0) {
        mostrarError(document.getElementById("mes"));
        esValido = false;
    }
    if (!/^\d+$/.test(anio) || parseInt(anio) <= 0) {
        mostrarError(document.getElementById("anio"));
        esValido = false;
    }

    // Validar la estructura del email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        mostrarError(document.getElementById("email"));
        esValido = false;
    }

    

        // Validar que la fecha sea válida
    if (!validarFecha(parseInt(anio), parseInt(mes), parseInt(dia))) {
        mostrarError(document.getElementById("dia"));
        mostrarError(document.getElementById("mes"));
        mostrarError(document.getElementById("anio"));
        esValido = false; // Actualizar esValido a false si la fecha no es válida
    }

    // Función para validar una fecha
    function validarFecha(anio, mes, dia) {
        // Verificar si el año, mes y día son válidos
        if (isNaN(anio) || isNaN(mes) || isNaN(dia) || mes < 1 || mes > 12 || dia < 1 || dia > 31) {
            return false;
        }

        // Verificar si el día es válido para el mes y el año dados
        var diasEnElMes = new Date(anio, mes, 0).getDate();
        if (dia > diasEnElMes) {
            return false;
        }

        return true;
    }

    // Si todos los datos son correctos, mostrar un alert de éxito
    if (esValido) {
        alert("Todos los datos son correctos");
    }


    // Retornar esValido al final de la función
    return esValido;



}


