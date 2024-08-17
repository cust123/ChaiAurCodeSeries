const mySymobl = "myFirstSymbol";

const myFirstObj = {
  name: "shafiq",
  [mySymobl]: "myFirstSymbol",
  age: 29,
  education: "masters",
  location: "Islamabad",
  email: "shafiq@bxtechonlogies.net",
  isLoggedIn: false,
};
console.log(myFirstObj);

// console.log(myFirstObj.age);
// console.log(myFirstObj["education"]);
// console.log(myFirstObj[mySymobl]);

// console.log(typeof myFirstObj.mySymobl);

Object.freeze(myFirstObj);
console.log(myFirstObj);

const tinderUser = {};
console.log(tinderUser);
