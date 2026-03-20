//Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту (значення властивості name). Повертає загальну вартість продукту (ціна * кількість).

const calculateTotalPrice = (allProdcuts, productName) => {
  let totalPrice = 0;
  for (const prodcut of allProdcuts) {
    totalPrice += prodcut.price * prodcut.quantity;
  }
  return totalPrice;
};

const fruts = [
  { name: "apple", price: 25, quantity: 2 }, //50
  { name: "banana", price: 10, quantity: 6 }, //60
  { name: "mango", price: 15, quantity: 5 }, //75
];
console.log(calculateTotalPrice(fruts));
