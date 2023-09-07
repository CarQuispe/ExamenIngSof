import contarPalabra from "./contador.js";
import contarRepeticion from "./sumador.js";

describe("Contar  repetido", () => {
  it("deberia contar el mas repetido", () => {
    expect(contarPalabra("password password")).toEqual("password: 2");
  });
});
describe("Cadena Vacia", () => {
  it("muestra cadena vacia ", () => {
    expect(contarRepeticion(" ")).toEqual({});
  });

  it("deberia mostrar una palabra", () => {
    expect(contarRepeticion(" password ")).toEqual({password: 1});
  });
  
  it("deberia contar 2 palabras mas repetido", () => {
    expect(contarRepeticion(" password pasword ")).toEqual({password: 2});
  });
});