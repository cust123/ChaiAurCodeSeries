function multiplyBy5(num) {
  return num * 5;
  //   console.log(result);

  //   return result;
}

multiplyBy5.power = 2;
console.log(multiplyBy5(6));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

// functions also references objects, the object prototype is null

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};

createUser.prototype.printMe = function () {
  console.log(`The Price is : ${this.score}`);
};

const chai = new createUser("Chai", 50);
const tea = new createUser("tea", 100);

// console.log(chai);
// console.log(tea);

chai.printMe();
tea.printMe();
