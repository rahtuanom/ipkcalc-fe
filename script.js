// frontend/script.js

async function hitungIPK() {
  const nim = document.getElementById('nim').value;

  // Cetak nilai nim ke konsol
  console.log('Nilai NIM:', nim);

  try {
    const response = await fetch(`http://localhost:3000/mahasiswa/${nim}/ipk`);
    const data = await response.json();

    document.getElementById('result').textContent = `Mahasiswa dengan NIM ${data.nim} memiliki IPK ${data.ipk}`;
  } catch (error) {
    document.getElementById('result').textContent = 'NIM yang dimasukkan salah';
  }
}

  