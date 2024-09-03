// class based getters and setters and its usage

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  // getters are returned always
  get email() {
    return this._email.toUpperCase();
  }

  // setter nevers gets returned
  set email(value) {
    this._email = value;
  }
  get password() {
    return this._password.toUpperCase();
  }

  set password(value) {
    this._password = value;
  }
}

const shafiq = new User("shafiq@test.com", "abcdedf");
// console.log(shafiq.password);
// console.log(shafiq.email);

// functions based or property based getters and setters

function NewUser(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    },
  });

  Object.defineProperty(this, "password", {
    get: function () {
      return this._password.toUpperCase();
    },
    set: function (value) {
      this._password = value;
    },
  });
}

const newRoles = new NewUser("test@test.com", "hellotopassword");

console.log(newRoles.email);
console.log(newRoles.password);

// object based getters and setters

const ChaiUser = {
  _email: "test@test.com",
  _password: "theyChai.com",

  get email() {
    return this._email.toUpperCase();
  },
  set email(value) {
    this._email = value;
  },
};
// here we will use factory function for Object, factory functions comes builtin
const chai = Object.create(ChaiUser);

console.log(chai.password);
