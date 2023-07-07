const arraysatu = [1,2,3,4,5]
const arrayObject = [
  {
    id: 1,
    nama: 'Budi',
    nilai: 80,
  },
  {
    id: 2,
    nama: 'pedro',
    nilai: 85,
  },
  {
    id: 3,
    nama: 'nathan',
    nilai: 90,
  }
]

const filterArray1 = arraysatu.filter((item, i, arr) => item * 2)
const filterArray2 = arraysatu.filter((item, i) => i * 2)
const filterArray3 = arraysatu.filter(item => item > 3)
console.log(filterArray3);

const newMapp = arraysatu.map(item => item * 2)
const newStudent = arrayObject.map(item => ({nilai: item.nilai}))
const newStudent = arrayObject.map(item => {
  return {
    nama: item.nama,
    nilai: item.nilai
  }
})
console.log(newStudent);
const newReduce = arraysatu.reduce((acc, curr) => acc + curr)

const arraydua = ['satu', 'dua']
const newReduce = arraydua.reduce((acc, curr) => acc + curr)
console.log(arraydua.join('?'));
