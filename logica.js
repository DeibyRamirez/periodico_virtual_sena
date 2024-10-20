const palabras = ["CULTURA", "INNOVACION", "CIENCIA", "TÉCNICA", "FORMACIÓN", "PROGRESO", "SOLIDARIDAD", "COMPROMISO"];
let palabrasEncontradas = [];

function verificarPalabra() {
    const input = document.getElementById("palabra").value.toUpperCase();
    const resultadoElement = document.getElementById("palabras-encontradas");
    const contadorElement = document.getElementById("contador-palabras");

    if (palabras.includes(input)) {
        if (!palabrasEncontradas.includes(input)) {
            palabrasEncontradas.push(input);
            resultadoElement.innerHTML = "Palabras encontradas: " + palabrasEncontradas.join(", ");
        }
        const palabrasFaltantes = palabras.length - palabrasEncontradas.length;
        contadorElement.innerHTML = "Faltan " + palabrasFaltantes + " palabras.";
    } else {
        alert("La palabra no está en la sopa de letras.");
    }

    document.getElementById("palabra").value = ""; // Limpiar campo de entrada
}
