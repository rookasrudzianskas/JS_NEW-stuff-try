const arr = [1, 2, 3, 4, 5];


// const newArr = arr.reduce(function(acc, val, ) {
//   return acc + val;
// }, 0)
// console.log(newArr);
// const newArr = arr.map(function (val,index, arr) {
//   return val + 5;
// })
// console.log(newArr);


// const newArr = arr.map((value) => {
//   return val + 5;
// });

// function coolFunc(firstArg = 10, secondArg = "okayyyy"){
//   console.log(firstArg, secondArg);
// }
//
// coolFunc(10);



// const arrowF = (firstArg = "wow", secondArg = "hello") => {
//   console.log(firstArg, secondArg);
// }
//
// arrowF();

// const arr = ["thos", "as", "I", "Something"];
//
// const [, secondEl] = arr;
//
// console.log(secondEl)


// const person = {
//   name: "Rokas",
//   age: 19,
//   hobby: "hockey",
// };
//
// function someName({name} = {}) {
//   console.log(name);
// }
//
// someName();
//

// const person = {
//   name: "Rokas",
//   age: 19,
//   hobby: "hockey",
// };
//
// const extendedPerson = {
//   ...person,
//   wow: "wow",
// };
//
// console.log(extendedPerson);
// const { age, name, ...newObj } = person;
//
// console.log(age, newObj);

// const arr = ["Rplas", "Some", "As", "FDds"];
//
// const [firstEl, secondEl, ...newArr] = arr;
// console.log(firstEl);

// function a(firstArg, secondArg, thirdArg) {
//   console.log();
// }
//
// a(4, 5, 6, 3, 3)
//
// const myPromiseFunc = (num) => {
//   return new Promise((resolve, reject) => {
//     if(num > 5) {
//       resolve("NUmber is greater than 5");
//     } else {
//       reject("number is less than 5");
//     }
//     // resolve("Hello");
//     // reject("wow");
//   });
//
// };


// async function executeMyPromise() {
//   try{
//     const val = await myPromiseFunc(10);
//     console.log(val);
//
//   } catch (err) {
//     console.log(err);
//   }
//
// }
//
// executeMyPromise()
//
// myPromiseFunc(10).then((val) => {
//   console.log("then syntax:", val);
//
// }).then((newVal) => {
//   console.log(newVal);
// }).catch((err) => {
//   console.log(err);
// });























