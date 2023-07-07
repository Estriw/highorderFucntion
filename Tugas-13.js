//Tugas no.1
//FIlter
const angka1 = [31,40,42,54,63]

function genap(angka, hasil){
  console.log('Carilah angka genap dari angka berikut : ' + angka)
  hasil()
}

function hasil(){
  const genap1 = angka1.filter(item => item % 2 == 0)
  console.log('Hasilnya adalah : ' + genap1)
}
genap(angka1, hasil)

//output 
// Carilah angka genap dari angka berikut : 31,40,42,54,63
// Hasilnya adalah : 40,42,54

//Map
function genap(angka, hasil){
  console.log('Berapakah hasil dari angka berikut di kali 7 : ' + angka)
  hasil()
}

function hasil(){
  const genap1 = angka1.map(item => item * 2)
  console.log('Hasilnya adalah : ' + genap1)
}
genap(angka1, hasil)
// output 
// Berapakah hasil dari angka berikut di kali 7 : 31,40,42,54,63
// Hasilnya adalah : 62,80,84,108,126

//reduce
const arraydua = [10, 11, 12]
const newReduce = arraydua.reduce((acc, curr) => acc + curr)
console.log(newReduce);
//output 33


//Tugas no.2

var newDetik = new Array();
var newMenit = new Array();
var parameter = ['40:20', '30:20', '20:10'];

function sumArray(params) {
    const sum = params.reduce((partialSum, a) => partialSum + a);
    return sum;
}

function PushedArray(params) {
  params.map((menit) => newMenit.push(parseInt(menit.substring(0, 2))));
  
  params.map((detik) => newDetik.push(parseInt(detik.substring(3, detik.length))));
}

// newMenit = [40,30,20] total 90 menit
// newDetik = [20,20,10] total 50 detik

function detikKeJam(detik) {
  var jam = Math.floor(detik / 3600); // Mendapatkan jumlah jam
  var sisaDetik = detik - 3600; // Mendapatkan sisa detik setelah menghitung jam
  var menit = Math.floor(sisaDetik / 60); // Mendapatkan jumlah menit
  var detik = sisaDetik % 60; // Mendapatkan sisa detik setelah menghitung menit


  return jam + ' Jam ' + menit + ' Menit ' + detik + ' Detik ';
}

function ConvertJamToDetik(params) {
    PushedArray(params);
    var detik = 0;
    if (newDetik.length > 0 || newMenit.length > 0) {
        var jam1 = sumArray(newMenit); //Menit
        var jam2 = sumArray(newDetik); //Detik
        detik = (jam1 * 60) + jam2; //convert menit to detik
    }
  
    return detikKeJam(detik);
}

console.log(ConvertJamToDetik(parameter));
