const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descriptor);

// console.log(Math.PI);

// Math.Pi = 5;
// console.log(Math.pi);

const chia = {
  name: "ginger Chai",
  type: "special type of Chai",
  price: 245,
  isAvailable: true,
};

// console.log(Object.getOwnPropertyDescriptor(chia, "name"));

// Object.defineProperty(chia, "name", {
//   writable: false,
//   enumerable: false,
// });

// console.log(Object.getOwnPropertyDescriptor(chia, "name"));

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
