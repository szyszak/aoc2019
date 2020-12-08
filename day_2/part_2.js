const INPUT = require('./input');
// determine what pair of inputs produces the output 19690720
const arr = INPUT.split(',').map(Number);

const applyOperations = (arr, noun, verb) => {
  const arrCopy = [...arr];

  arrCopy[1] = noun;
  arrCopy[2] = verb;

  for (let i = 0; i < arrCopy.length; i += 4) {
    const opcode = arrCopy[i];
    const firstValue = arrCopy[i + 1];
    const secondValue = arrCopy[i + 2];
    const memoryAddress = arrCopy[i + 3];

    if (opcode === 99) {
      break;
    } else if (opcode === 1) {
      arrCopy[memoryAddress] = arrCopy[firstValue] + arrCopy[secondValue];
    } else if (opcode === 2) {
      arrCopy[memoryAddress] = arrCopy[firstValue] * arrCopy[secondValue];
    } else {
      throw Error(`UNKNOWN OPERATION: ${opcode}`);
    }
  }

  return arrCopy[0];
};

for (let i = 0; i <= 99; i++) {
  for (let j = 0; j <= 99; j++) {
    if (applyOperations(arr, i, j) === 19690720) console.log(100 * i + j);
  }
}
