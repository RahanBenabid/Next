// this is a stub, just simply receives data and return a static result
/*
const sum = (data: number[]): number => 999;
*/

// this is a fake, they react to the data and are a very simple implementation of it
/*
const sum = (data: number[]): number => {
  return data[0] + data[1];
};
*/

// this is a mock, between a fake and a stub
type resultMap = {
  [key: string]: number;
};

const results: resultMap = {
  "0+0": 0,
  "0+1": 1,
  "1+0": 1,
  "1+1": 2,
  "2+1": 3,
};

const sum = (data: number[]): number => {
  return results[data.join("+")];
};

export { sum };
