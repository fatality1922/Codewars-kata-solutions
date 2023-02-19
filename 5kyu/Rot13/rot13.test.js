const rot13 = require("./rot13");

test("given input to equal Grfg ", () => {
  expect(rot13("Test")).toBe("Grfg");
});
