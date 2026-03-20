//Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".

const countTotalSalary = (employees) => {
  let totalSalary = 0;
  for (const key in employees) {
    totalSalary += employees[key];
  }
  return totalSalary;
};

const users = {
  annna: 100,
  andrew: 1000,
  kiril: 50,
  artem: 60,
};

console.log(countTotalSalary(users));
