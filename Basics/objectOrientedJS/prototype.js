// let myName = "Muhammad Shafiq         ";

// console.log(myName.truelength);

let myHeros = ["hulk", "spiderMen", "thor"];

let heroPower = {
  hulk: "Body",
  spiderMen: "sling",
  thor: "hammer",

  getSiderPoewr: function () {
    console.log(`spidy power is : ${this.spiderMen}`);
  },
};

Object.prototype.hitesh = function () {
  console.log(`hitesh is present in all objects!`);
};

// heroPower.hitesh();

myHeros.hitesh();

let anotherUserName = "ChaiAurCode        ";

String.prototype.trueLength = function () {
  console.log(`True Length is: ${this.trim().length}`);
};
anotherUserName.trueLength();
"shafiq".trueLength();
"Muhammad Shafiq".trueLength();
"iceTea".trueLength();
"jame".trueLength();

console.log(`the length is ${anotherUserName.length}`);
