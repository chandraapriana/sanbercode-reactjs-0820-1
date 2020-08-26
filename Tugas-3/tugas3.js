// soal 1

var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

console.log(
  kataPertama +
    " " +
    kataKedua.charAt(0).toUpperCase() +
    kataKedua.slice(1, kataKedua.length) +
    " " +
    kataKetiga +
    " " +
    kataKeempat.toUpperCase()
);

//soal 2

var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

console.log(
  "hasil dari penjumlahan : ",
  parseInt(kataPertama) +
    parseInt(kataKedua) +
    parseInt(kataKetiga) +
    parseInt(kataKeempat)
);

//soal 3

var kalimat = "wah javascript itu keren sekali";

var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substring(4, 14);
var kataKetiga = kalimat.substring(15, 18); // do your own!
var kataKeempat = kalimat.substring(19, 24);
var kataKelima = kalimat.substring(25, 31);

console.log("Kata Pertama: " + kataPertama);
console.log("Kata Kedua: " + kataKedua);
console.log("Kata Ketiga: " + kataKetiga);
console.log("Kata Keempat: " + kataKeempat);
console.log("Kata Kelima: " + kataKelima);

//soal 4

var nilai = 90;

if (nilai >= 0 && nilai <= 100) {
  if (nilai >= 80) {
    console.log("Nilai : A");
  } else if (nilai >= 70 && nilai < 80) {
    console.log("Nilai : B");
  } else if (nilai >= 60 && nilai < 70) {
    console.log("Nilai : C");
  } else if (nilai >= 50 && nilai < 60) {
    console.log("Nilai : D");
  } else {
    console.log("Nilai : E");
  }
} else {
  console.log("Nilai harus range dari 0 sampai 100");
}

//soal 5

var tanggal = 11;
var bulan = 04;
var tahun = 2000;

switch (bulan) {
  case 1:
    bulan = "Januari";
    break;

  case 2:
    bulan = "Februari";
    break;

  case 3:
    bulan = "Maret";
    break;

  case 4:
    bulan = "April";
    break;

  case 5:
    bulan = "Mei";
    break;

  case 6:
    bulan = "Juni";
    break;

  case 7:
    bulan = "Juli";
    break;

  case 8:
    bulan = "Agustus";
    break;

  case 9:
    bulan = "September";
    break;

  case 10:
    bulan = "Oktober";
    break;

  case 11:
    bulan = "November";
    break;

  case 12:
    bulan = "Desember";
    break;
  default:
    break;
}

console.log(tanggal, bulan, tahun);
