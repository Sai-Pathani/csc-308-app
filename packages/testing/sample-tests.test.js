const { div, containsNumbers } = require("./sample-tests");

// Tests for div function
// Assume all inputs are numbers

test("divide a number by 1", () => {
    const target = 2;
    const result = div(2, 1);
    expect(result).toBe(target);
})

test("divide a number by itself", () => {
    const target = 1;
    const result = div(5, 5);
    expect(result).toBe(target);
})

test("divide a number by zero", () => {
    const target = Infinity;
    const result = div(5, 0);
    expect(result).toBe(target);
})

test("divide by a negative number", () => {
    const target = -2;
    const result = div(6, -3);
    expect(result).toBe(target);
})

test("divide two negative numbers", () => {
    const target = 4;
    const result = div(-8, -2);
    expect(result).toBe(target);
})

test("divide zero by a number", () => {
    const target = 0;
    const result = div(0, 5);
    expect(result).toBe(target);
})

test("divide with no common divisor", () => {
    const target = 1.5;
    const result = div(3, 2);
    expect(result).toBe(target);
})

test("divide two decimal numbers", () => {
    const target = 2.5;
    const result = div(5.0, 2.0);
    expect(result).toBe(target);
})

// Tests for containsNumbers function
// Assume all inputs are strings

test("empty string", () => {
    const target = false;
    const result = containsNumbers("");
    expect(result).toBe(target);
})

// Test failed!
test("string with only letters", () => {
    const target = false;
    const result = containsNumbers("Hello World!");
    expect(result).toBe(target);
})

test("string with only numbers", () => {
    const target = true;
    const result = containsNumbers("123456");
    expect(result).toBe(target);
})

test("string with letters and numbers", () => {
    const target = true;
    const result = containsNumbers("abc123xyz");
    expect(result).toBe(target);
})

test("string with special characters and numbers", () => {
    const target = true;
    const result = containsNumbers("!@#4$%^");
    expect(result).toBe(target);
})

test("string with special characters but no numbers", () => {
    const target = false;
    const result = containsNumbers("!@#$%^&*()");
    expect(result).toBe(target);
})

test("string with spaces and numbers", () => {
    const target = true;
    const result = containsNumbers("   7   ");
    expect(result).toBe(target);
})

// Test failed! - Looks like containsNumbers is treating spaces as numbers
test("string with spaces but no numbers", () => {
    const target = false;
    const result = containsNumbers("     ");
    expect(result).toBe(target);
})
