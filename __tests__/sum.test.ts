// Import the sum function from the helpers folder
import { sum } from "../helpers/sum";

describe("The sum function", () => {
  test("Two plus two is four", () => {
    expect(sum([2, 2])).toBe(4);
  });

  test("minus eight plus four is minus four", () => {
    expect(sum([-8, 4])).toBe(-4);
  });

  test("two plus two minus four is zero", () => {
    expect(sum([2, 2, -4])).toBe(0);
  });
});
