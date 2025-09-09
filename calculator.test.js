const { add } = require("./calculator");

test('should throw an exception for a single negative number', () => {
    expect(() => {
        add("1,-2,3");
    }).toThrow("negative numbers not allowed -2");
});