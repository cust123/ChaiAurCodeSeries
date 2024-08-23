const userEmail = "shafiq@test.com";

if (userEmail.length === 0) {
  console.log("Got user email!");
} else {
  console.log("user email is empty!");
}

// falsy values which are important

// false, 0, -0,  BigInt, 0n, "",  null, undefined, NaN

// truthy values

// those values which are not falsy or truthy vlaues, however, there are some exceptions

// "0", "False", " ", [], {}, function(){} ---> this is empty functions

const myObject = {
  name: "shafiq",
  email: "shafiq@test.com",
  age: 34,
  location: "Islamabad",
  country: "pakistan",
};

if (Object.keys(myObject).length === 0) {
  console.log("Object is empty");
} else {
  console.log(myObject);
}

let myVal;
let myVal2;
// myVal = 5 ?? 10;

myVal = null ?? 10; // usually this right value is always a complex function

myVal = undefined ?? 15;
console.log(myVal);

myVal2 = null ?? 10 ?? 20;

console.log(myVal2);

// different between nullish coalesin operator and terinary operator

// condition ? true : false

const iceCreamPrice = 100;

iceCreamPrice <= 90
  ? console.log("buy IceCream")
  : console.log("dont Buy IceCream");
