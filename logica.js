const palabras = ["CULTURA", "INNOVACION", "COMPROMISO", "EXCELENCIA", "SOLIDARIDAD", "INCLUSION", "EQUIDAD"]; // Agrega las palabras que deseas buscar
const sopaDeLetras = [
    ["L", "C", "R", "Y", "I", "N", "N", "O", "V", "A", "C", "I", "O", "N", "C", "J", "G", "F", "N", "P"],
    ["C", "S", "I", "A", "Y", "L", "U", "E", "M", "N", "C", "Y", "A", "S", "L", "J", "O", "P", "U", "Q"],
    ["Z", "Y", "L", "R", "P", "F", "J", "V", "U", "O", "H", "F", "B", "T", "J", "M", "N", "N", "S", "F"],
    ["H", "S", "G", "H", "R", "I", "N", "G", "J", "H", "V", "J", "E", "C", "E", "T", "I", "C", "A", "D"],
    ["Y", "F", "V", "L", "B", "C", "E", "K", "N", "M", "F", "J", "B", "V", "G", "D", "O", "T", "E", "X"],
    ["U", "V", "I", "J", "B", "V", "D", "H", "G", "L", "B", "C", "E", "V", "Y", "R", "S", "T", "P", "F"],
    ["D", "K", "L", "Q", "Y", "V", "M", "Y", "E", "C", "O", "M", "P", "R", "O", "M", "I", "S", "O", "R"],
    ["D", "W", "P", "R", "E", "S", "P", "O", "N", "S", "A", "B", "I", "L", "I", "D", "A", "D", "N", "O"],
    ["Z", "B", "B", "D", "E", "S", "A", "R", "R", "O", "L", "L", "O", "A", "S", "Q", "X", "C", "Z", "Y"],
    ["G", "J", "C", "L", "D", "H", "B", "M", "D", "T", "I", "Y", "J", "E", "F", "P", "Q", "W", "I", "I"]
];

// Función para verificar si la palabra se encuentra en la sopa de letras
function verificarPalabra() {
    const input = document.getElementById("wordInput").value.toUpperCase();
    const resultado = document.getElementById("palabras-encontradas");
    const contador = document.getElementById("contador-palabras");
    let palabrasEncontradas = [];

    if (palabras.includes(input)) {
        palabrasEncontradas.push(input);
        alert(`La palabra "${input}" se encontró en la sopa de letras.`);
    } else {
        alert(`La palabra "${input}" no se encontró.`);
    }

    // Mostrar palabras encontradas
    resultado.innerHTML = palabrasEncontradas.join(", ") || "Ninguna palabra encontrada.";
    contador.innerHTML = `Total de palabras encontradas: ${palabrasEncontradas.length}`;
}
