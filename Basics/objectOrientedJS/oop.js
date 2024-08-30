// object literals

// this is the object literals which ontains properties and its takes vlaues as key value pairs
// const user = {
//   username: "shafiq",
//   loginCount: 8,
//   isLogedIn: true,

//   getAllUserDetails: function () {
//     // console.log(`username: ${this.userName}`);
//   },
// };
// console.log(this);
// console.log(users.getAllUserDetails());

function User(username, loginCount, isLogedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLogedIn = isLogedIn;

  //   return this;  this is returned implicitely weather you write the return or not
}

const userOne = new User("Shafiq", 10, true);
const userTwo = new User("smith", 11, false);
const userThree = new User("james", 56, true);

// important notes about new
// when the new key word is written the following steps are performed
// first an empty object{} is created called instance
// in second step a constructor function is called
// in third step  this keyword is injected in the constructor function
// in fourth step the copy is provided to new function

console.log(userOne.constructor);
console.log(userTwo instanceof User);
console.log(userThree instanceof User);
