
exports.min = function min(array = [0]) {
  return array.length === 0 ? 0 : Math.min(...array);
};

exports.max = function max(array = [0]) {
  return array.length === 0 ? 0 : Math.max(...array);
}

exports.avg = function avg(array = [0]) {
  if (array.length === 0) {
    return 0;
  } else {
    let sum = array.reduce((a, b) => a + b, 0);
    let result = sum / array.length;
    return result;
  };
}
