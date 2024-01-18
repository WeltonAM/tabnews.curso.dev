const somar = require("../models/calculadora.js");

test("Deve somar dois números", () => {
  const r = somar.somar(2, 3)

  expect(r).toBe(5)
})