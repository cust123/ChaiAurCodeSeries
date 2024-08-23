// For Loops in JS

myArray = [3, 5, 4, 6, 8, 9, 11, 23, 454, 565];

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];

  //   console.log(element);
}

for (let index = 0; index < 10; index++) {
  const element = index;
  //   console.log(`the i of the array is : ${element}`);
}

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    // console.log(`The correct Number is: ${element}`);
  } else {
    // console.log("Searching the correct Number!");
  }
  //   console.log(element);
}

for (let i = 0; i <= 5; i++) {
  //   console.log(`outer loop values: ${i}`);

  for (let j = 0; j <= 5; j++) {
    //   console.log(`inner loop vlaues : ${j} and outer loop values ${i}`);
    // console.log(i + "*" + j + "=" + i * j);
  }
}
// one of the best practice is to use nested loops for iterations and complex query processing

let myNewArr = ["jani smith", "saim Altaman", "jehan alama", "sumith"];

for (let index = 0; index < myNewArr.length; index++) {
  const element = myNewArr[index];
  //   console.log(`The names of my Array are at ${index} : ${element}`);
}

for (let index = 1; index <= 10; index++) {
  if (index == 5) {
    console.log("Number 5 is Ditected");
    break;
  }
  console.log(`Value of i is : ${index}`);
}
