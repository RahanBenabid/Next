import { sum } from "./sum";

jest.mock("../helpers/sum");

// Provide a mock implementation for sum
(sum as jest.Mock).mockImplementation((arr: number[]) =>
  arr.reduce((a, b) => a + b, 0),
);

const fibonacci = (length: number): string => {
  const sequence: number[] = [];
  for (let i = 0; i < length; i++) {
    if (i < 2) {
      sequence.push(sum([0, i]));
    } else {
      sequence.push(sum([sequence[i - 1], sequence[i - 2]]));
    }
  }
  return sequence.join(", ");
};
export { fibonacci };
