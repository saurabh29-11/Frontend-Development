function applyOperation(numbers, operation) {
  return numbers.map(operation);
}

console.log(applyOperation([1,2,3,4], num => num * 2));
console.log(applyOperation([1,2,3,4], num => num * num));
