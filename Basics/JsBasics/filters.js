const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const updatedNums = myNums.map((num) => num + 10);

console.log(updatedNums);

const newNums = myNums.filter((num) => {
  return num > 4;
});

// console.log(newNums);

myNumbers = [];

myNums.forEach((num) => {
  if (num > 4) {
    myNumbers.push(num);
  }
});
// console.log(myNumbers);

const myBooks = [
  { title: "Book One", genre: "Fantasy", publish: 1990, edition: 1995 },
  { title: "Book Two", genre: "Thriller", publish: 2001, edition: 2005 },
  { title: "Book Three", genre: "Romance", publish: 1995, edition: 2000 },
  { title: "Book Four", genre: "Biography", publish: 2010, edition: 2012 },
  { title: "Book Five", genre: "Adventure", publish: 1985, edition: 1990 },
  { title: "Book Six", genre: "Mystery", publish: 2003, edition: 2007 },
  {
    title: "Book Seven",
    genre: "Historical Fiction",
    publish: 1998,
    edition: 2002,
  },
  {
    title: "Book Eight",
    genre: "Science Fiction",
    publish: 2012,
    edition: 2015,
  },
  { title: "Book Nine", genre: "Non-Fiction", publish: 2005, edition: 2008 },
  { title: "Book Ten", genre: "Drama", publish: 1980, edition: 1983 },
  { title: "Book Eleven", genre: "Horror", publish: 1993, edition: 1997 },
  { title: "Book Twelve", genre: "Self-Help", publish: 2017, edition: 2019 },
  { title: "Book Thirteen", genre: "Poetry", publish: 1975, edition: 1980 },
  { title: "Book Fourteen", genre: "Comedy", publish: 1988, edition: 1991 },
  { title: "Book Fifteen", genre: "Philosophy", publish: 2009, edition: 2011 },
  {
    title: "Book Sixteen",
    genre: "Graphic Novel",
    publish: 2014,
    edition: 2016,
  },
  { title: "Book Seventeen", genre: "Memoir", publish: 1999, edition: 2004 },
  {
    title: "Book Eighteen",
    genre: "Spirituality",
    publish: 2006,
    edition: 2010,
  },
  { title: "Book Nineteen", genre: "Travel", publish: 2000, edition: 2003 },
  { title: "Book Twenty", genre: "True Crime", publish: 1992, edition: 1996 },
];
const userBooks = myBooks.filter((bk) => {
  if (bk.genre === "Travel") {
    // console.log(`the book type is: ${bk}`);

    return bk;
  }
});
// console.log(userBooks);

// reduce mathod and its applications

const myShoppingCart = [
  {
    itemName: "JavaScript",
    price: 999,
  },
  {
    itemName: "Mobile Development",
    price: 2999,
  },
  {
    itemName: "Data Science",
    price: 3999,
  },
];

const pricePay = myShoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(pricePay);
