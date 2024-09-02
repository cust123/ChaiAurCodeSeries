class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encryptPassword() {
    return `${this.password}abclkjfjalkjfa`;
  }

  userNameUpperCase() {
    return `${this.username.toUpperCase()}: username is Changed`;
  }
}

const chai = new User("shafiq", "shafiq@shafiq.com", "SE1234");

console.log(chai);
console.log(chai.encryptPassword());
console.log(chai.userNameUpperCase());

// Behind the scene, if the class facility was not avialable

function Users(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

Users.prototype.encryptPassword = function () {
  return `${this.password}abclkjfjalkjfa`;
};

Users.prototype.userNameUpperCase = function () {
  return `${this.username.toUpperCase()}: username is Changed`;
};

const QTea = new Users("Smith", "smith@test.com", "1234");

console.log(QTea);
console.log(QTea.encryptPassword());
console.log(QTea.userNameUpperCase());

class UserRole {
  constructor(userName) {
    this.userName = userName;
  }
  logMe() {
    console.log(`User Name is : ${this.userName}`);
  }
}

class Teacher extends UserRole {
  constructor(userName, email, password) {
    super(userName);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new Course was added by: ${this.userName}`);
  }
}

const Chai = new Teacher("anni", "anni@anni.com", "1234s");

Chai.addCourse();

const maslaChai = new UserRole("Tasty Masla Chai");

maslaChai.logMe();
Chai.logMe();

console.log(Chai instanceof UserRole);
