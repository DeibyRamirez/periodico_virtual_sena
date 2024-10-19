// crucigrama.js
document.getElementById('verificar').addEventListener('click', function () {
    const inputs = document.querySelectorAll('#crucigrama-juego input');
    let todasCorrectas = true;

    inputs.forEach(input => {
        const respuestaCorrecta = input.getAttribute('data-answer');
        const respuestaUsuario = input.value.toUpperCase();

// Condicional de si las respuestas ingresadas son correctas..
        if (respuestaUsuario == respuestaCorrecta) {
            input.style.backgroundColor = '#c8e6c9';
        } else {
            input.style.backgroundColor = '#ffccbc';
            todasCorrectas = false;
        }


    });
    const resultado = document.getElementById('resultado');
    
    //Condicional si todas son correctas felicita y agrega color verde,
    // si no inteta de nuevo y agrega color rojo...

    if (todasCorrectas) {
        resultado.textContent = '¡Felicidades! Todas las respuestas son correctas...';
        resultado.style.color = 'green';

    }
    else {
        resultado.textContent = 'Algunas respuestas son correctas.  ¡Intentalo de  nuevo! ';
        resultado.style.color = 'red';
    }
});