// // first method to create a promise

const promiseOne = new Promise(function (reslove, reject) {
  // Do asynic Tasks,  DB Calls and network calls, cryptography task

  setTimeout(function () {
    console.log("Please run the following code");
    reslove();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise completed");
});

// // second method to create a promise

new Promise(function (reslove, reject) {
  setTimeout(function () {
    console.log("Asynic Task 2 is Requested!");
    reslove();
  }, 1500);
}).then(function () {
  console.log("Asynic Task 2 is Completed!");
});

// // third Promise

const promiseThree = new Promise(function (reslove, reject) {
  setTimeout(function () {
    reslove({
      username: "shafiq",
      email: "shafiq@test.com",
      location: "pakistan",
    });
  }, 1000);
});
promiseThree.then(function (users) {
  console.log(users);
});

// Promise fouth

const promiseFour = new Promise(function (reslove, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      reslove({
        userName: "shafiq@test.com",
        password: "123",
        emial: "test@test.com",
      });
    } else reject("ERRPR: Sorry Something went wrong!");
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.userName;
  })
  .then((name) => {
    console.log(name);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log(
      "Finally the Promised is resloved or rejected, we dont know yet about that!"
    );
  });

const promiseFive = new Promise(function (reslove, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      reslove({
        userid: "JavaScript",
        password: "12345",
      });
    } else reject("ERRPR: JavaScript went wrong!");
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

// getting all users from an API through a fetch method

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const UserData = await response.json();
    console.log(UserData);
  } catch (error) {
    console.log("there is an error in the API Call!");
  }
}
getAllUsers();

// another method of accessing the data from the api through .then method

// fetch("https://api.github.com/users/cust123")
fetch("https://randomuser.me/api/")
  .then((response) => {
    return response.json();
  })
  .then((shafiqData) => {
    console.log(shafiqData);
  })
  .catch((error) => {
    console.log(error);
  });
