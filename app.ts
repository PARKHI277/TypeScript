// // string - this will give a bug - number + string in javascript
// let num1 = "1";

// function calculate(num1, num2) {
//   return num1 + num2;
// }

// console.log(calculate(num1, 3));

// ----------------------------------------------------------------

// let num1= 1;

// function calculate(num1: number, num2: number) {
//   return num1 + num2;
// }

// console.log(calculate(num1, 3));

// ------------------------------------------------------------------

//  can use generic also -> numbers: Array<number>
// function getTotal(numbers: number[]) {
//   return numbers.reduce((acc, item) => {
//     return acc + item;
//   }, 0);
// }

// console.log(getTotal([3, 2, 1]));

//------------------------------------------------------------------------

// ------- javascript

// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   role:'professor'
// }

// console.log(user)

// ----- typescript

// const user = {
//   firstName: "John",
//   lastName: "Doe",
//   role: "professor",
// };

// console.log(user.firstName);

// ------------------------------------------- TYPE ALIAS

type User = {
  name: string;
  age: number;
  address?: string;
};
// const user: User = {
//   name: "hbhsdj",
//   age: 30,
// };

// can give return type
// function login(userData: User): User {
//   return userData;
// }

// const user = {
//   name: "hbhsdj",
//   age: 30,
// };

// console.log(login(user));

// ----------

type Id = number | string;
const userId: Id = "123";

// ------------------------------------------ INTERFACES
