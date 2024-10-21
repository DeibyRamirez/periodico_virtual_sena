const palabras = ["ETICA", "INNOVACION", "RESPONSABILIDAD", "FORMACION", "DESARROLLO", "COMPROMISO", "EQUIDAD"]; // Lista de palabras
let contador = palabras.length; // Contador de palabras restantes

// Función para verificar la palabra
document.getElementById('verificar').addEventListener('click', () => {
    const inputPalabra = document.getElementById('input-palabra').value.toUpperCase(); // Obtener la palabra del input y convertir a mayúsculas
    const resultado = document.getElementById('resultado');

    if (palabras.includes(inputPalabra)) {
        resultado.textContent = `¡Correcto! La palabra "${inputPalabra}" está en la sopa de letras.`;
        // Puedes agregar lógica aquí para eliminar la palabra de la lista o disminuir el contador
        palabras.splice(palabras.indexOf(inputPalabra), 1); // Elimina la palabra de la lista
        contador--; // Disminuye el contador
    } else {
        resultado.textContent = `Incorrecto. La palabra "${inputPalabra}" no es la palabra que se nesecita en la sopa de letras.`;
    }

    // Limpiar el campo de entrada después de verificar
    document.getElementById('input-palabra').value = '';

    // Mensaje de fin de juego si se acabaron las palabras
    if (contador === 0) {
        resultado.textContent = "¡Felicidades! Has encontrado todas las palabras.";
    }
});
