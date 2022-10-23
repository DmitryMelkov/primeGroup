/**
 * Описание: найти уникальные числа в массиве чисел
 * Ожидаемый результат: findUniqArray([1, 1, 2, 2, 4, 2, 3, 7, 3]) => [1, 2, 4, 3, 7];
 * @param {Array<number>} arr - Array
 * @returns {Array<number>}
 */
const findUniqArray = (a) => {
  let unique = a.filter((item, i, ar) => ar.indexOf(item) === i);
  console.log(unique);
};

findUniqArray([1, 1, 2, 2, 4, 2, 3, 7, 3])


module.exports = findUniqArray;
