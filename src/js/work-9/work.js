//1.Напишіть функцію, яка б порахувала б кількість властивостей в об’єкті та передайде їй наступний об’єкт:

const person = {
  name: "Alice",
  age: 30,
  city: "Kyiv",
  country: "Ukraine",
  job: "Developer",
  experience: 5,
  skills: ["JavaScript", "React", "Node.js"],
  isEmployed: true,
  salary: 3000,
  languages: { english: "B2", ukrainian: "native" },
  hobby: "Photography",
};

const countProperties = (obj) => {
  const objArr = Object.keys(obj);
  return objArr.length;
};

const quantityPersonKeys = countProperties(person);

console.log(quantityPersonKeys);

//Дано масив об’єктів
const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: false },
  { name: "Ajax", online: true },
];
const findFriendByName = (arrOfFriends, friendName) => {
  for (const friend of arrOfFriends) {
    if (friendName === friend.name) {
      return friend;
    }
  }
};
// Написати функцію яка буде отримувати масив та ім’я друга якого потрібно знайти і повертати відповідний об’єкт
console.log(findFriendByName(friends, "Poly"));
console.log(findFriendByName(friends, "Chelsy"));

//Написати функцію яка буде повертати масив всіх імен друзів
const fiendNames = [];
const getAllNames = (friends) => {
  for (const friend of friends) {
    fiendNames.push(friend.name);
  }
  return fiendNames;
};

console.log(getAllNames(friends));

//Написати функцію яка буде повертати масив імен друзів які онлайн
const fiendsOnline = [];
const getOnlineFriends = (friends) => {
  for (const friend of friends) {
    if (friend.online === true) {
      fiendsOnline.push(friend.name);
    } else {
      continue;
    }
  }
  return fiendsOnline;
};

console.log(getOnlineFriends(friends));

//Є масив товарів:
const cart = [
  { name: "🍎", price: 50 },
  { name: "🍋", price: 60 },
];
// Напишіть функцію addToCart(cart, product), яка:
// повертає новий масив з доданим товаром,

const addToCart = (cart, product) => [...cart, product];

// не змінює початковий масив.

console.log(addToCart(cart, { name: "orange", price: 40 }));
console.log(cart);
