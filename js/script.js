//forEach metodiga oid masalalar
//1-masala
// const numbers = [1, 2, 3, 4];
// function multiplyTwoElement(arg) {
//   let res = [];
//   arg.forEach((element) => {
//     res.push(element * 2);
//   });
//   return res;
// }
// console.log(multiplyTwoElement(numbers));// 2, 4, 6, 8

//2-masala
// const words = ["apple", "banana", "cherry"];
// function toUpperCaseElement(arg) {
//   let res = [];
//   arg.forEach((element) => {
//     res.push(element.toUpperCase());
//   });
//   return res;
// }
// console.log(toUpperCaseElement(words)); // 'APPLE', 'BANANA', 'CHERRY'

//3-masala
// const numbers = [10, 20, 30, 40];
// function addFiveElement(arg) {
//   let res = [];
//   arg.forEach((element) => {
//     res.push(element + 5);
//   });
//   return res;
// }
// console.log(addFiveElement(numbers));

//4-masala
// const students = [
//   { name: "Ali", grade: 85 },
//   { name: "Vali", grade: 92 },
//   { name: "Hasan", grade: 78 },
// ];
// function nameObject(arg) {
//   let res = [];
//   arg.forEach((element) => {
//     res.push(element);
//   });
//   return res;
// }
// console.log(nameObject(students));

//Map metodiga oid masalalar
//1-masala
// const numbers = [1, 2, 3, 4];
// function multiplyToTwo(arg) {
//   let res = arg.map((element) => {
//     return element * 2;
//   });
//   return res;
// }
// console.log(multiplyToTwo(numbers)); // [2, 4, 6, 8]

//2-masala
// const words = ["apple", "banana", "cherry"];
// function toUpperCaseElement(arg) {
//   let res = arg.map((value) => {
//     return value.toUpperCase();
//   });
//   return res;
// }
// console.log(toUpperCaseElement(words)); // ['APPLE', 'BANANA', 'CHERRY']

//3-masala
// const numbers = [10, 20, 30, 40];
// function addFiveToElement(arg) {
//   let res = arg.map((value) => {
//     return value + 5;
//   });
//   return res;
// }
// console.log(addFiveToElement(numbers)); //[15, 25, 35, 45]

//4-masala
// const students = [
//   { name: "Ali", grade: 85 },
//   { name: "Vali", grade: 92 },
//   { name: "Hasan", grade: 78 },
// ];
// function addTenToObject(arg) {
//   let res = arg.map((value) => {
//     return value.grade + 10;
//   });
//   return res;
// }
// console.log(addTenToObject(students));

//filter metodiga oid masalalar
//1-masala
// const numbers = [1, 2, 3, 4, 5, 6];
// function evenElement(arg) {
//   let res = arg.filter((value) => {
//     return value % 2 == 0;
//   });
//   return res;
// }
// console.log(evenElement(numbers)); //[2, 4, 6]

//2-masala
// const words = ["apple", "banana", "cherry", "date"];
// function lengthFiveElement(arg) {
//   let res = arg.filter((value) => {
//     return value.length > 5;
//   });
//   return res;
// }
// console.log(lengthFiveElement(words)); // ['banana', 'cherry']

//3-masala
// const ages = [12, 17, 18, 19, 21];
// function upperEighteen(arg) {
//   let res = arg.filter((value) => {
//     return value > 18;
//   });
//   return res;
// }
// console.log(upperEighteen(ages));

//4-masala
// const students = [
//   { name: "Ali", grade: 85 },
//   { name: "Vali", grade: 72 },
//   { name: "Hasan", grade: 90 },
//   { name: "Olim", grade: 77 },
// ];
// function upperEighty(arg) {
//   let res = arg.filter((value) => {
//     return value.grade > 80;
//   });
//   return res;
// }
// console.log(upperEighty(students)); //[{name: 'Ali', grade: 85}, {name: 'Hasan', grade: 90}]

//find metodiga oid masalalar
//1-masala
// const numbers = [4, 9, 11, 2, 18];
// function findElement(arg) {
//   let res = arg.find((value) => {
//     return value > 10;
//   });
//   return res;
// }
// console.log(findElement(numbers));

//2-masala
// const students = [
//   { name: "Ali", grade: 80 },
//   { name: "Vali", grade: 90 },
//   { name: "Hasan", grade: 78 },
//   { name: "Olim", grade: 85 },
// ];
// function findElement(arg) {
//   let res = arg.find((value) => {
//     if (value > 85) {
//       return value;
//     } else {
//       return "undefined";
//     }
//   });
//   return res;
// }
// console.log(findElement(students));

//some/every metodiga oid masalalar
//1-masala
// const numbers = [-1, -2, 3, -4];
// function isExistElement(arg) {
//   let res = arg.some((value) => {
//     return value > 0;
//   });
//   return res;
// }
// console.log(isExistElement(numbers));

//2-masala
// const words = ["cat", "dog", "elephant"];
// function lengthFiveElement(arg) {
//   let res = arg.some((value) => {
//     return value.length > 5;
//   });
//   return res;
// }
// console.log(lengthFiveElement(words));

//3-masala
// const numbers = [1, 2, 3, 4];
// function isEveryElement(arg) {
//   let res = arg.every((value) => {
//     return value > 0;
//   });
//   return res;
// }
// console.log(isEveryElement(numbers));

//4-masala
// const students = [
//   { name: "Ali", grade: 60 },
//   { name: "Vali", grade: 70 },
//   { name: "Hasan", grade: 80 },
// ];
// function upperFifty(arg) {
//   let res = arg.every((value) => {
//     return value.grade > 50;
//   });
//   return res;
// }
// console.log(upperFifty(students));
