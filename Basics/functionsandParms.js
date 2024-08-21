// basic function definination and syntax
function sayMyName() {
  console.log(
    `Hi, My name is Muahmmad Yousaf, and works at
     Islamabad, Paksitan.
     and i am 52 years
     young boy look for a girl!
     My name salary is 5 lacs per month!`
  );
}

sayMyName();

// meaningful function try

function myAddition(num1, num2) {
  console.log(num1 + num2);
}

myAddition(75, 75);

// another method for handling the function

function addTwoNumber(number1, number2) {
  console.log(number1 + number2);
}

const result = addTwoNumber(45, 46);

console.log("Result:", result);

function addNumbers(number1, number2) {
  let Result = number1 + number2;

  return Result;

  // how code reachibility works

  console.log("this is my frist task! for the functions"); // testing code reachibiity aspects
}

const newResult = addNumbers(56, 80);
console.log("The final Result is :", newResult);

// another function that handles undefined values

function userLoginMessage(userName) {
  if (userName === undefined) {
    console.log("Please enter your name");
    return;
  }
  return `${userName} just loggedin to the system`;
}

console.log(userLoginMessage());

function userLoginMessage(userName = "New User") {
  if (userName === "New User") {
    console.log("Please enter your name");
    return;
  }
  return `${userName} just loggedin to the system`;
}

console.log(userLoginMessage("Reyyan"));

// handling objects and arrays in Javascripts functions

function calculateCartPrice(...num1) {
  return num1;
}
console.log(calculateCartPrice(75, 575, 6876, 987));

const user = {
  userName: "shafiq",
  email: "email@email.com",
  price: 46,
};

function objectHandler(anyObject) {
  console.log(
    `User Name is ${anyObject.userName} and email is ${anyObject.email} and price is ${anyObject.price}`
  );
}
objectHandler({
  userName: "james",
  email: "test@test.com",
  price: 564,
});

const myNewArray = [100, 200, 400, 500, 800, 700];

function returnMyArray(getArray) {
  return getArray;
}
console.log(returnMyArray(myNewArray));
