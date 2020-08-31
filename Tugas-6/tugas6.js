// javascript ES6

//soal-1
console.log("--SOAL 1--");
let r = 1;
const luasLingkaran = (r) => 3.14 * r * r;
const kelilingLingkaran = (r) => 2 * 3.14 * r;
console.log(`Luas Lingkaran dari jari-jari ${r} adalah ${luasLingkaran(r)}`);
console.log(
  `Keliling Lingkaran dari jari-jari ${r} adalah ${kelilingLingkaran(r)}`
);

//soal-2
console.log("--SOAL 2--");
let kalimat = "";
// const addWord = (first, second, third, four, fifth) =>
//   (kalimat += `${first} ${second} ${third} ${four} ${fifth}`);

const addWord = (word) => (kalimat += `${word} `);
addWord("Saya");
addWord("adalah");
addWord("seorang");
addWord("frontend");
addWord("developer");

console.log(kalimat);

//soal-3
console.log("--SOAL 3--");

const newFunction = (firstName, lastName) => {
  return {
    firstName,
    lastName,
    fullName: () => {
      console.log(`${firstName} ${lastName}`);
    },
  };
};

console.log(newFunction("William", "Imoh").fullName());

//soal-4
console.log("--SOAL 4--");

let [firstName, lastName, destination, occupation] = [
  "Harry",
  "Potter Holt",
  "Hogwarts React Conf",
  "Deve-wizard Avocado",
  "Vimulus Renderus!!!",
];

console.log(firstName, lastName, destination, occupation);

//soal-5
console.log("--SOAL 5--");
const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];
let combined = [...west, ...east];
console.log(combined);
