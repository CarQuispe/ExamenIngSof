function es_igual(palabra, vecFrase) {
    let contador = 0;

    for (let i = 0; i < vecFrase.length; i++) {
        if (palabra.toLowerCase() === vecFrase[i].toLowerCase()) { // Comparación sin distinción entre mayúsculas y minúsculas
            contador++;
        }
    }

    return contador;
}

function contarPalabra(frase) {
    const palabras = frase.split(' '); // Divide la frase en palabras usando espacios como separadores
    const vecFrase = palabras.slice(); // Crea una copia de las palabras en un vector

    for (let i = 0; i < palabras.length; i++) {
        vecFrase[i] = palabras[i];
    }

    const contadorPalabrasRepetidas = {};

    for (let i = 0; i < palabras.length; i++) {
        const palabra = palabras[i].toLowerCase(); // Convertir a minúsculas para la comparación sin distinción entre mayúsculas y minúsculas
        const contador = es_igual(palabra, vecFrase);
        contadorPalabrasRepetidas[palabra] = contador;
    }

    // Crear una cadena de resultado
    let resultado = '';
    for (const palabra in contadorPalabrasRepetidas) {
        resultado += `${palabra}: ${contadorPalabrasRepetidas[palabra]} `;
    }

    return resultado.trim();
}

export default contarPalabra;


