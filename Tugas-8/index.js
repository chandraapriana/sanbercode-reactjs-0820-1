var readBooks = require("./callback.js");

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
  { name: "komik", timeSpent: 1000 },
];

time = 10000;

// books.forEach((element) =>
//   readBooks(time, element, (callbackFn) => {
//     console.log(callbackFn);

//     console.log(callbackFn.timeSpent);
//   })
// );

function book() {
  readBooks(10000, books[0], function (x) {
    readBooks(x, books[1], function (x) {
      readBooks(x, books[2], function (x) {
        readBooks(x, books[3], function (x) {});
      });
    });
  });
}

book();
