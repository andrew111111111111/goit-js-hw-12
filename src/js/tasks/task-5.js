//Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. Повертає масив значень певної властивості prop з кожного об'єкта в масиві.

const getAllPropValues = function (arr, prop) {
  const values = [];

  for (const obj of arr) {
    if (prop in obj) {
      values.push(obj[prop]);
    }
  }

  return values;
};
const products = [
  { name: "Radar", price: 1300 },
  { name: "Scanner", price: 2700 },
  { name: "Droid", price: 400 },
  { name: "Grip", price: 1200 },
];

console.log(getAllPropValues(products, "name"));

console.log(getAllPropValues(products, "price"));
