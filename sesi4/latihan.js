
// // Satu
// var nama = "Anggri";
// var alamat = "bandung";

// //Dua
// var webBasic = ['anggur', 'jeruk', 'apel', 'mangga', 'pisang', 'lemon', 'semangka']
// webBasic[4] = 'pepaya';
// console.log(webBasic[4])

//Tiga
// var person = {
//     name: 'Anggriyawan',
//     age: '28',
//     gadgets: {
//         laptop: 'Dell',
//         phone: 'Oppo',
//     },
//     hobby: ['tidur', 'makan']
// }

// console.log(person.name)
// console.log(person.age)
// console.log(person.gadgets.laptop)
// console.log(person.gadgets.phone)
// console.log(person.hobby[1])

// // Latihan Tiga
// var Quran = {
//     data: {
//         number: '1',
//         name: "سورة الفاتحة",
//         englishName: "Al-Faatiha",
//         englishNameTranslation: "The Opening",
//         revelationType: "Meccan",
//         numberOfAyahs: '7',
//         ayahs: [
//             0: {
//                 number: '1',
//                 text: "\ufeffبِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
//                 numberInSurah: '1',
//                 juz: '1',
//                 manzil: '1',
//                 page: '1',
//                 ruku: '1',
//                 hizbQuarter: '1',
//                 sajda: 'false',
//             },

//             1: {
//                 number: '2',
//                 text: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
//                 numberInSurah: '2',
//                 juz: '1',
//                 manzil: '1',
//                 page: '1',
//                 ruku: '1',
//                 hizbQuarter: '1',
//                 sajda: 'false',
//             },

//             2: {
//                 number: '3',
//                 text: "الرَّحْمَٰنِ الرَّحِيمِ",
//                 numberInSurah: '3',
//                 juz: '1',
//                 manzil: '1',
//                 page: '1',
//                 ruku: '1',
//                 hizbQuarter: '1',
//                 sajda: 'false',
//             },

//             3: {
//                 number: '4',
//                 text: "مَالِكِ يَوْمِ الدِّينِ",
//                 numberInSurah: '4',
//                 juz: '1',
//                 manzil: '1',
//                 page: '1',
//                 ruku: '1',
//                 hizbQuarter: '1',
//                 sajda: 'false',
//             },

//             4: {
//                 number: '5',
//                 text: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
//                 numberInSurah: '5',
//                 juz: '1',
//                 manzil: '1',
//                 page: '1',
//                 ruku: '1',
//                 hizbQuarter: '1',
//                 sajda: 'false',
//             },

//             5: {
//                 number: '6',
//                 text: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
//                 numberInSurah: '6',
//                 juz: '1',
//                 manzil: '1',
//                 page: '1',
//                 ruku: '1',
//                 hizbQuarter: '1',
//                 sajda: 'false'
//             },

//             6: {
//                 number: '7'
//                 text	"صِرَاطَ الَّذِينَ أَنْعَ…هِمْ وَلَا الضَّالِّينَ",
//                 numberInSurah: '7',
//                 juz: '1',
//                 manzil: '1',
//                 page: '1',
//                 ruku: '1',
//                 hizbQuarter: '1',
//                 sajda: 'false',
//             }
//         ],
//         edition: {
//             identifier: "quran-simple",
//             language: "ar",
//             name: "Simple",
//             englishName: "Simple",
//             format: "text",
//             type: "quran",
//         },
//     },
// };

// console.log(Quran.data.name);

// // // Latihan Conditional
// var nilai = 8;
// if (nilai >= 6) {
//     alert("Selamat, Anda Lulus!")
// } else {
//     alert("Belajar Lagi Ya")
// }

// var jam = 14;

// if (jam >= 1 && jam <= 11) {

//     console.log("Selamat Pagi")

// } else if (jam >= 12 && <= 15) {

//     console.log("Selamat Siang")

// } else if (jam >= 16 && <= 18) {

//     console.log("Selamat Sore")

// } else (jam >= 19 && <= 24) {

//     console.log("Selamat Malam")
// }

// var hari = "0";
// switch (hari) {
//     case "0":
//         console.log("Senin");
//         break;

//     case "1":
//         alert("Selasa");
//         break;

//     case "2":
//         alert("Rabu");
//         break;

//     case "3":
//         alert("Kamis");
//         break;

//     case "4":
//         alert("Jumat");
//         break;

//     case "5":
//         alert("Sabtu");
//         break;

//     case "6":
//         alert("Minggu");
//         break;

//     default:
//         alert("Hari Tidak ditemukan")
// }

// Loop/Perulangan
// For
// for (i = 1; i <= 1000; i++) {
//     console.log('Perulangan ke-' + i);
// }

// While
// var i = 1;
// while (i <= 100) {
//     console.log('Perulangan ke-' + i);

//     i = i + 1;
// }

// Latihan 5
// var buah = ["Apel", "Jeruk", "Mangga", "Delima"];
// for (i = 0; i <= 3; i++) {
//     console.log(+i);
// }

// Function
// function luasPersegiPanjang(panjang, lebar) {
//     var luas = panjang * lebar;
//     console.log(luas);
// }

// luasPersegiPanjang(10, 5);

// Latihan Function
// function sayhay(nama) {
//     return alert('halo ' + nama)
// }
// sayhay("anggri");
// sayhay("dede");

// Latihan 6
var btnGreet = document.getElementById('greet');
btnGreet.addEventListener('click', greet);

function greet() {
    var nama = document.getElementById('nama').value;
    var alamatEmail = document.getElementById('alamat_email').value;

    alert(nama + '  ' + alamatEmail);
}

// Tugas Sesi 4
// Kisi-kisi mengambil teks dari button. Caranya bisa gabungkan dengan script di atas.
console.log(event.target.textContent)



