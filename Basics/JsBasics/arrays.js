const myNewArray = [5, 6, 6, 7, 7, 98, 89, 68, 45];

console.log(myNewArray);

console.log(myNewArray[3]);

const myArr2 = new Array(4647, 756, 23, 2, 4, 67, 9);
console.log(myArr2[3]);

// array methods

const myNumberArr = new Array(0, 1, 3, 4, 5, 6);
myNumberArr.push(8);
myNumberArr.push(9);
myNumberArr.pop();
myNumberArr.unshift(9);
myNumberArr.shift();

console.log(myNumberArr.includes(10));
console.log(myNumberArr.includes(3));

console.log(myNumberArr);

const newUpdatedArr = myNumberArr.join();
console.log(newUpdatedArr);

const myHeros = ["smith", "james", "anni"];
const myNationalHeros = ["imran Khan", "Wasim", "Quid", "malala"];
const myAllTimeHeros = ["jehan", "Alama", "Nelson"];

myNationalHeros.push(myHeros);

myNationalHeros.pop();
myHeros.pop();
myNationalHeros.push("Aydi sahib");
const myAllHeros = myNationalHeros.concat(myHeros);
const newAllHeros = [...myNationalHeros, ...myHeros, ...myAllTimeHeros];

console.log(newAllHeros.pop());
console.log(newAllHeros);

console.log(Array.isArray("shafiq"));
console.log(Array.from("shafiq"));
console.log(Array.from({ name: "shafiq" }));

let score1 = 300;
let score2 = 200;
let score3 = 100;
let score4 = 400;

const myAllScores = Array.of(score1, score2, score3, score4);

console.log(myAllScores);
