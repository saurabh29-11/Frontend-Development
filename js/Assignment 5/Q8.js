Array.prototype.myMap = function(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i));
  }
  return result;
};

console.log([1,2,3].myMap(num => num * 2));
