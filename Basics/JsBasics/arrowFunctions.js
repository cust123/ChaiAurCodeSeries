const user = {
  userName: "Shafiq",
  email: "shafiq@test.com",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.userName} , Welcome to the Website`);
    console.log(this);
  },
};
// user.welcomeMessage();
// user.userName = "saim";
// user.welcomeMessage();
console.log(this);

function chai() {
  console.log(this);
}
chai();

// Arrow functions starts here

const myChai = () => {
  return `my chai is ready and i have to code`;
};
console.log(myChai());

// another try for arrow functions

const addTwoNumber = (num1, num2) => {
  return (result = num1 + num2); // this is explicit return
};
const myUpdatedResult = addTwoNumber(56, 57);
console.log("The new Result is:", myUpdatedResult);

// now situtions comes in where we only need implicit functions

const addNumbers = (num1, num2) => num1 + num2;

console.log(addNumbers(65, 8));

// another important method for react framework when writting functions

const addingNumber = (num1, num2) => (num1, num2);

console.log(addingNumber(75, 75));

// returning an object in arrow function

const returnObject = (num1, num2) => ({
  userName: "shafiq",
});

console.log(returnObject());

// IIFE --->> imdetialy invoked function expressions, the main reason for the use
// IIFE is to avoid the global pulltions.

(function myConnection() {
  console.log("Database Connected");
})();
