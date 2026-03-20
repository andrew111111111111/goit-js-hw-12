//Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей
const countProps = (obj) => Object.keys(obj).length;

const user = {
  hobby: "play games",
  premium: true,
};

console.log(countProps(user));
