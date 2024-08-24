const tinderUser = {};

tinderUser.id = "76756TF";
tinderUser.name = "Sammy Khan";
tinderUser.isLoggedIn = false;
tinderUser.age = 30;

console.log(tinderUser);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj4 = { name: "jani smith", age: 45 };

const obj3 = Object.assign(obj1, obj2, obj4);

const obj5 = { ...obj1, ...obj2, ...obj3 };
console.log(obj5);

const users = [
  {
    id: 1,
    name: "shafiq",
    email: "email@email.com",
    dept: "tech and development",
  },
  {
    id: 1,
    name: "shafiq",
    email: "email@email.com",
    dept: "tech and development",
  },
  {
    id: 1,
    name: "shafiq",
    email: "email@email.com",
    dept: "tech and development",
  },
];

const updateUser = users[1].dept;
console.log(updateUser);

console.log(Object.keys(tinderUser));
console.log(Object.keys(users));
console.log(Object.values(tinderUser));

console.log(Object.entries(users));
console.log(tinderUser.hasOwnProperty("name"));
console.log(tinderUser.hasOwnProperty("age"));
console.log(tinderUser.hasOwnProperty("email"));

console.log(users.pop());
