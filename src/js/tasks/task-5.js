//Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. Повертає масив значень певної властивості prop з кожного об'єкта в масиві.

const getAllPropValues = (arr, prop) => {
  const array = [];
  for (const user of arr) {
    if (prop === "name") {
      array.push(user.name);
    } else {
      array.push(user.age);
    }
  }
  return array;
};

const users = [
  { name: "anna", age: 23 },
  { name: "andrew", age: 13 },
  { name: "kiril", age: 15 },
  { name: "artem", age: 11 },
];

console.log(getAllPropValues(users, "name"));
console.log(getAllPropValues(users, "age"));
