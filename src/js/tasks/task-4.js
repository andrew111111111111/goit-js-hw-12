//Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".

const countTotalSalary = function (employees) {
  let totalSalary = 0;

  for (const name in employees) {
    totalSalary += employees[name];
  }

  return totalSalary;
};

const employees = {
  Ann: 500,
  David: 600,
  Helen: 1000,
};

console.log(countTotalSalary(employees));
