//Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей

const countProps = function (obj) {
  return Object.keys(obj).length;
};
const user = {
  name: "andrew",
  age: 13,
  hobby: "frontend",
};
console.log(countProps(user));
