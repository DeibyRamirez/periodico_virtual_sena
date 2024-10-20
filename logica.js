const palabras = ["CULTURA", "INNOVACION", "COMPROMISO", "EXCELENCIA", "SOLIDARIDAD", "INCLUSION", "EQUIDAD"]; // Lista de palabras
let contador = palabras.length; // Contador de palabras restantes

// Función para verificar la palabra
document.getElementById('verificar').addEventListener('click', () => {
    const inputPalabra = document.getElementById('input-palabra').value.toUpperCase(); // Obtener la palabra del input y convertir a mayúsculas
    const resultado = document.getElementById('resultado');

    if (palabras.includes(inputPalabra)) {
        resultado.textContent = `¡Correcto! La palabra "${inputPalabra}" está en la lista.`;
        // Eliminar la palabra de la lista y disminuir el contador
        palabras.splice(palabras.indexOf(inputPalabra), 1);
        contador--;
    } else {
        resultado.textContent = `La palabra "${inputPalabra}" no está en la lista.`;
    }

    // Mostrar el contador de palabras restantes
    resultado.textContent += ` Palabras restantes: ${contador}`;
    document.getElementById('input-palabra').value = ''; // Limpiar el input
});
