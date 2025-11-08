const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0;
  const toString = n.toString();
  for (let x = 0; x < toString.length; x++) {
    const num = parseInt(toString.slice(0, x) + toString.slice(x + 1));
    if (max < num) {
      max = num;
    }
  }
  return max;
}

module.exports = {
  deleteDigit
};
