function contarRepeticion(cadena) {
  let resultado = {};
  if (cadena.length > 0) {
    let listaPalabras = cadena.split(" ");
    for (let i = 0; i < listaPalabras.length; i++) {
      if (resultado[listaPalabras[i]]) {
        resultado[listaPalabras[i]] += 1;
      } else {
        resultado[listaPalabras[i]] = 1;
      }
    }
  }
  return resultado;
}

export default contarRepeticion;

