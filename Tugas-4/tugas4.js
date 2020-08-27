//soal 1
console.log("--SOAL 1--");

var i = 0;
console.log("LOOPING PERTAMA");
while (i <= 20) {
  if (i % 2 == 0 && i > 0) {
    console.log(i, " - I love coding");
  }
  i++;
}
console.log("LOOPING KEDUA");
while (i > 0) {
  if (i % 2 == 0) {
    console.log(i, " - I will become a frontend developer");
  }
  i--;
}

//soal -2
console.log(" ");
console.log("--SOAL 2--");

for (let i = 1; i <= 20; i++) {
  if (i % 2 == 1 && i % 3 != 0) {
    console.log(i, " - Santai");
  } else if (i % 2 == 0) {
    console.log(i, " - Berkualitas");
  } else {
    console.log(i, " - I Love Coding");
  }
}

//soal-3
console.log(" ");
console.log("--SOAL 3--");
for (let i = 1; i <= 7; i++) {
  console.log("#".repeat(i));
}

// soal-4
console.log(" ");
console.log("--SOAL 4--");
var kalimat = "saya sangat senang belajar javascript";

var array = kalimat.split(" ");
console.log(array);

//soal-5
console.log(" ");
console.log("--SOAL 5--");

var daftarBuah = [
  "2. Apel",
  "5. Jeruk",
  "3. Anggur",
  "4. Semangka",
  "1. Mangga",
];

var temp;

for (let i = 0; i < daftarBuah.length; i++) {
  var index = i;
  for (let j = i + 1; j < daftarBuah.length; j++) {
    if (parseInt(daftarBuah[index][0]) > parseInt(daftarBuah[j][0])) {
      index = j;
    }
  }
  temp = daftarBuah[i];
  daftarBuah[i] = daftarBuah[index];
  daftarBuah[index] = temp;
}

for (let i = 0; i < daftarBuah.length; i++) {
  console.log(daftarBuah[i]);
}
