// for of loop is used for handling arrays and array of objects

// ["", "", ""]
// [{},{},{},{}]

const arr = [1, 6, 7, 8, 9, 23];

for (const val of arr) {
  //   console.log(` value is :${val}`);
}

// map function in array

const map = new Map(); // maps are unique and in order

map.set("IN", "India");
map.set("Fr", "France");
map.set("Pak", "Pakistan");
map.set("Gr", "Germany");
map.delete("Fr");
map.get("IN");

// console.log(map);

for (const [key, value] of map) {
  //   console.log(key, ":||", value);
}

// for in loops, this is mostly used in Objects for but only limited to array of objects

const myObject = {
  js: "JavaScript",
  Rb: "ruby",
  Cpp: "C Plus Plus",
  Css: "tailwind",
};

for (const key in myObject) {
  //   console.log(`this ${key} is for the :  ${myObject[key]}`);
}

// for in works on arrays as well but it only brings the keys if we dont specify the values

const myProgramming = ["cpp", "java", "py", "Go", "C#"];

for (const key in myProgramming) {
  //   console.log(myProgramming[key]);
}

const myProgList = ["cpp", "java", "py", "Go", "C#", "electron", "Matlab"];

myProgList.forEach(function (item) {
  //   console.log(item);
});

// another varition with arrow functions

// function printMe(item) {
//   console.log(item);
// }

myProgList.forEach((printMe) => {
  //   console.log(printMe);
});

const myLanguages = [
  {
    languageName: "JavaScript",
    languageFileName: "js",
  },
  {
    languageName: "Java",
    languageFileName: "jar",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myLanguages.forEach((value) => {
  console.log(value.languageFileName, languageName);
});
