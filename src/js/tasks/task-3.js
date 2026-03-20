//Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".

const findBestEmployee = (employees) => {
  let bestEmployeer = "";
  let maxValue = 0;
  for (const user in employees) {
    if (employees[user] > maxValue) {
      maxValue = employees[user];
      bestEmployeer = `${user} : ${employees[user]}`;
    }
  }
  return bestEmployeer;
};
const users = {
  anna: 99,
  andrew: 99999999999999,
  kiril: 34,
  artem: 60,
};
console.log(findBestEmployee(users));
