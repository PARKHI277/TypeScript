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

// type Id = number | string;
// const userId: Id = "s123";

// ------------------------------------------ INTERFACES

// interface Transaction {
//   payerAccountNumber: number;
//   payeeAccountNumber: number;
// }

// interface BankAccount {
//   accountNumber: number;
//   accountHolder: string;
//   balance: number;
//   isActive: boolean;
//   transactions: Transaction[];
// }

// const transaction1: Transaction = {
//   payerAccountNumber: 123,
//   payeeAccountNumber:123
// }
// const bankAccount: BankAccount = {
//   accountNumber: 123,
//   accountHolder: 'john',
//   balance: 4000,
//   isActive: true,
//   transactions:[transaction1]
// }

// --------------------

interface Book {
  name: string;
  price: number;
}

interface EBook extends Book {
  fileSize: number;
  format: string;
}

const book: EBook = {
  name: "bhfej",
  price: 1200,
  fileSize: 300,
  format: "bfbdj",
};

// --------------------------------------------------- UNIONS --------------------------

// type Id = number | string;

// function printId(id: Id) {
//   if (typeof id == "string") {
//     console.log(id.toLocaleLowerCase);
//   } else {
//     console.log(id);
//   }
// }
// printId("1");

// ------------------

// function getFirstThree(x: string | number[])
// {
//   return x.slice(0, 3);
// }

// console.log(getFirstThree('helllo'))

// ------------------------------------------------- GENERICS -> can reuse

// function logString(arg: string) {
//   console.log(arg);
//   return arg;
// }

// function logNumber(arg: number) {
//   console.log(arg);
//   return arg;
// }

// function logArray(arg: any[]) {
//   console.log(arg);
//   return arg;
// }

// function logAnything<T>(arg: T): T {
//   console.log(arg);
//   return arg;
// }

// interface HasAge {
//   age: number;
// }

// // function getOldest(people: HasAge[]): HasAge {
// //   return people.sort((a, b) => b.age - a.age)[0];
// // }

// function getOldest<T extends HasAge>(people: T[]): T {
//   return people.sort((a, b) => b.age - a.age)[0];
// }

// logString("loggined in");
// logNumber(3);
// logArray([4, 3]);
// logAnything([4, 3]);

// const people = [{ age: 30 }, { age: 40 }, { age: 10 }];

// getOldest(people);

// -----------------------

// interface IPost {
//   title: string;
//   id: number;
//   description: string;
// }

// interface IUser {
//   id: number;
//   name: string;
//   age: number;
// }
// const fetPostData = async (path: string): Promise<IPost[]> => {
//   const response = await fetch(`http://example.com${path}`);
//   return response.json();
// };

// const fetUserData = async (path: string): Promise<IUser[]> => {
//   const response = await fetch(`http://example.com${path}`);
//   return response.json();
// };

// const fetchData = async <ResultType>(path: string): Promise<ResultType> => {
//   const response = await fetch(`http://example.com${path}`);
//   return response.json();
// };

// (async () => {
//   // const posts = await fetPostData("./posts");
//   const posts = await fetchData<IUser>("./users");
//   // posts[0]
// })();

// --------------------------------------------- STRUCTURAL TYPING

// interface ICredentials {
//   username: string;
//   password: string;
//   isAdmin?: boolean;
// }

// function login(credentials: ICredentials): boolean {
//   console.log(credentials);
//   return true;
// }

// const user: ICredentials = {
//   username: "vhdbcns",
//   password: "secret",
//   isAdmin: true,
// };

// login(user);


// ---------------------------------


