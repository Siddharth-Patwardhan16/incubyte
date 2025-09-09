const { add } = require("./calculator");

test('should return the number when only one number is in the string', () => {
    expect(add("1")).toBe(1);
  });