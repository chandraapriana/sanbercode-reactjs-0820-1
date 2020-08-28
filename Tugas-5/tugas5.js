//soal-1
console.log("--Soal 1--");

function halo() {
  return "Halo Sanbers!";
}

console.log(halo());

//soal-2
console.log("--Soal 2--");

function kalikan(num1, num2) {
  return num1 * num2;
}

var num1 = 12;
var num2 = 4;

var hasilKali = kalikan(num1, num2);
console.log(hasilKali);

//soal-3
console.log("--Soal 3--");

function introduce(name, age, address, hobby) {
  return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`;
}

var name = "John";
var age = 30;
var address = "Jalan belum jadi";
var hobby = "Gaming";

var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan);

//soal-4
console.log("--Soal 4--");
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku", 1992];

var objectDaftarPeserta = {
  nama: arrayDaftarPeserta[0],
  jenisKelamin: arrayDaftarPeserta[1],
  hobi: arrayDaftarPeserta[2],
  tahun: arrayDaftarPeserta[3],
};

console.log(objectDaftarPeserta);

//soal-5
console.log("--Soal 5--");

let arrayOfObjectFruits = [
  {
    nama: "strawberry",
    warna: "merah",
    adaBijinya: "tidak",
    harga: 9000,
  },
  {
    nama: "jeruk",
    warna: "oranye",
    ada_bijinya: "ada",
    harga: 8000,
  },
  {
    nama: "Semangka",
    warna: "Hijau & Merah",
    ada_bijinya: "ada",
    harga: 10000,
  },
  {
    nama: "Pisang",
    warna: "Kuning",
    ada_bijinya: "tidak",
    harga: 5000,
  },
];

console.log(arrayOfObjectFruits[0]);

//soal-6
console.log("--Soal 6--");

var dataFilm = [];

function addFilm(nama, durasi, genre, tahun) {
  dataFilm.push({ nama: nama, durasi: durasi, genre: genre, tahun: tahun });
}

addFilm("Naruto", "20 Menit", "Anime", "2020");
addFilm("Strangers Things", "40 Menit", "Fiction", "2020");

console.log(dataFilm);
