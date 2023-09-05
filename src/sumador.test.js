import contarPalabra from "./contador.js";

describe("Contar primer repetido", () => {
  it("deberia contar el mas repetido", () => {
    expect(contarPalabra("password PASWORD")).toEqual("pasword: 2");
  });
});
