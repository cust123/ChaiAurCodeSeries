// // scoping and global and local varaible concepts in JS
// let a = 400;
// if (true) {
//   let a = 689;
//   const b = 20;
//   var c = 40;
//   console.log("INNER: ", a);
// }

// // console.log(a);
// // console.log(b);
// console.log(c); // here Var key word is voilting the scoping concept and that is why its been rarely used, in fact depericated
// console.log(a);

// function one() {
//   const userName = "Shafiq";

//   function two() {
//     const websiteName = "shafiq.com";

//     console.log(userName);
//     // console.log(websiteName);
//   }

//   two();
// }
// one();

if (true) {
  const userName = "Shafiq";
  if (userName === "Shafiq") {
    const websiteLink = " Shafiq.com";
    // console.log(
    //   `The User Name is ${userName} and the website is ${websiteLink}`
    // );
  }
  //   console.log(websiteLink);
}
// console.log(userName);

function addOne(num) {
  return num + 1;
}

console.log(addOne(7));

const addTwo = function (num) {
  return num + 2;
};

console.log(addTwo(11));

// both the above methods can have an impact on the results based on the
// function declerations
console.log(addOne(7));
function addOne(num) {
  return num + 1;
}

// // console.log(addTwo(11));
// const addTwo = function (num) {
//   return num + 2;
// };
