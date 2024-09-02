class User {
  constructor(userName) {
    this.userName = userName;
  }

  logMe() {
    console.log(`User Name is : ${this.userName}`);
  }
  static createdId() {
    return `123`;
  }
}

const Shafiq = new User("Shafiq");

console.log(Shafiq.createdId());
