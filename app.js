// // string - this will give a bug - number + string in javascript
// let num1 = "1";
var book = {
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
