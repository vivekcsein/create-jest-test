import "@testing-library/dom";

// simple test case
const Sum = (a: number, b: number) => {
  return a + b;
};

test("add 2+3 should be equal to 5", () => {
  expect(Sum(2, 3)).toBe(5);
  expect(Sum(6, 3)).not.toBe(5);
});
