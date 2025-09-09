const { add } = require("./calculator");

test('should return the sum of two numbers', () => {
    expect(add("1,5")).toBe(6);
  });
  