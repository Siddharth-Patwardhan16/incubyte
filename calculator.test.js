const { add } = require("./calculator");

test('should throw an exception listing all negative numbers', () => {
    expect(() => {
        add("2,-4,3,-5");
    }).toThrow("negative numbers not allowed -4,-5");
});