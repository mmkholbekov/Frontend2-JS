function applyFunctionToElements(array, callback) {
  //Создаем новый массиы для хранения результатов
  const resultArray = [];

  for (let i = 0; i < array.length; i++) {
    const result = callback(array[i]);
    resultArray.push(result);
  }
  return resultArray;
}

const numbers = [1, 2, 3, 4, 5];

// Функция которая умножает число на 2
function multiplyByTwo(number) {
  return number * 2;
}

const doubledNumbers = applyFunctionToElements(numbers, multiplyByTwo);
console.log(doubledNumbers);
// Выводит [2, 4, 6, 8, 10]

