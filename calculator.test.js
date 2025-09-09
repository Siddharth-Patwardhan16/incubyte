const { add } = require("./calculator");

test('should handle new lines between numbers', () => {
    expect(add("1\n2,3")).toBe(6);
  });