// const name = "shafiq";

// if (name === "shafiq") {
//   console.log(`wecome to my channel ${name}`);
// }

// const findTemperature = (degree) => {
//   if (degree <= 32) {
//     console.log(`Todays temperture is:  ${degree} which is normal`);
//   } else {
//     console.log(`Todays is temperature is   ${degree} which is very hot`);
//   }
// };

// findTemperature(42);

// if (2 != 4) {
//   console.log("two is not equals to 4");
// } else {
//   console.log("2 is equal to 2 ");
// }

// const temp = 41;
// if (temp === 41) {
//   console.log("todays is temperature is less then 50");
// } else {
//   console.log("todays temperature is greater then 50");
// }

// const score = 200;

// if (score > 100) {
//   const Power = " fly";
//   console.log(`User Power : ${Power}`);
// }

// // console.log(`User Power : ${Power}`); // Scoping issue with the variable

// const balance = 1000;
// if (balance > 500) console.log("test"), console.log("test2"); // this work fine
// but this type of code is considered a production code and it is not recommneded to write such a code

// nesting else if conditions

// const myBalance = 1100;

// if (myBalance < 500) {
//   console.log("less then 500");
// } else if (myBalance < 750) {
//   console.log("less then 750");
// } else if (myBalance < 950) {
//   console.log("balnace less then 950");
// } else if (myBalance === 1000) {
//   console.log("Your balance is equal to 1000PKR");
// } else {
//   console.log("balance is greater then 1000");
// }

// const loggedInFromEmail = true;

// if (userLoggedin && debtCard && 2 == 3) {
//   console.log("allow the user to buy the course");
// }
// if (loggedInFromGoogle || loggedInFromEmail) {
//   console.log("User is loggedIn");
// }

const month = "Jan";

switch (month) {
  case "Jan":
    console.log("Juanuary");
    break;
  case "Feb":
    console.log("Feburary");
    break;
  case "March":
    console.log("March");
    break;

  default:
    console.log("other month or defualt value!");

    break;
}
// in the switch case, when ever a case matached, it execute all the
// remaining cases as well, this is not the case with moderen
// day langauges like Swift, the only acception is for
//the defualt case, it does not execute the defualt case when a case is met.
