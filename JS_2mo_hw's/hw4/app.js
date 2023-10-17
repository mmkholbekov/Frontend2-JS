const array = ["name", "John", "lastname", "Black", "age", "23"];
const resultObject = {};

for (let i = 0; i < array.length; i += 2) {
  const key = array[i];
  const value = array[i + 1];
  resultObject[key] = value;
}
console.log(resultObject);


function calculateAverage(...numbers) {
  if (numbers.length === 0) {
    console.log("Пустой список чисел");
    return;
  }

  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const average = sum / numbers.length;
  console.log("Средняя арифметическая:", average);
}
calculateAverage(5, 10, 15);


function getDataType(value) {
  console.log(typeof value);
}
getDataType(false);
getDataType('hello world!');
getDataType(42);
