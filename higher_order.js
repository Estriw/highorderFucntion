function mengerjakanPR(namaPR, selesai) {
  console.log('Saya sudah mengerjakan PR' + namaPR);
  selesai()
}

function selesai() {
  alert('PR Sudah selesai dikerjakan')
}

mengerjakanPR('Matematika', selesai)