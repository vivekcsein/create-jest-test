import "@testing-library/dom";
import { render, screen } from "@testing-library/react";

import Homepage from "./Homepage";

// simple test case
// const Sum = (a: number, b: number) => {
//   return a + b;
// };

// test("add 2+3 should be equal to 5", () => {
//   expect(Sum(2, 3)).toBe(5);
//   expect(Sum(6, 3)).not.toBe(5);
// });

//UI test case
describe("testing home component", () => {
  it("render a heading", () => {
    render(<Homepage />);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
});
