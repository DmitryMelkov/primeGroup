/**
 * Описание: найти уникальное число в массиве чисел
 * Ожидаемый результат: findUniqNumber([ 1, 1, 1, 2, 1, 1 ]) => 2;
 * @param {Array<number>} arr - Array
 * @returns {Number}
 */

const findUniqNumber = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[0]) {
      console.log(arr[i])
    }
  }

};

findUniqNumber([1, 1, 1, 2, 1, 1]);

module.exports = findUniqNumber;
