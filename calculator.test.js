const { add } = require("./calculator");

test('should support a different delimiter', () => {
    expect(add("//;\n1;2")).toBe(3);
  });