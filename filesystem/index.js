//  Tugas Anda tertulis jelas seperti yang ada pada berkas index.js. Cobalah tampilkan teks pada berkas notes.txt pada console menggunakan filesystem

// TODO : Tampilkan teks pada notes.txt pada console

const fs = require('fs')

// Synchronus
// const dataSync = fs.readFileSync('notes.txt', 'utf-8')

// Asynchronus
const dataAsync = (err,data)=>{
    if(err){
        console.log('Gagal dalam membaca file');
        return
    }
    console.log(data);
}

fs.readFile('notes.txt','utf-8',dataAsync)