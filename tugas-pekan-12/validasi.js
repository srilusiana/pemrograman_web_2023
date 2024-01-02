function validateForm() {
    var namaPelanggan = document.getElementById('namaPelanggan').value;
    var email = document.getElementById('email').value;
    var jamKeberangkatan = document.getElementById('jamKeberangkatan').value;
    var tujuanKeberangkatan = document.getElementById('tujuanKeberangkatan').value;
    var jumlahTiket = document.getElementById('jumlahTiket').value;

    if (namaPelanggan.length > 30) {
      alert('Nama pelanggan tidak boleh lebih dari 30 karakter.');
      return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Format email tidak valid.');
      return false;
    }

    var jamRegex = /^(?:[01]\d|2[0-3]):[0-5]\d$/;
    if (!jamRegex.test(jamKeberangkatan)) {
      alert('Format jam keberangkatan tidak valid (hh:mm).');
      return false;
    }

    if (jumlahTiket < 1 || jumlahTiket > 10) {
      alert('Jumlah tiket harus antara 1 dan 10.');
      return false;
    }

    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
      <p>Formulir valid! Data telah berhasil dikirim.</p>
      <p>Nama Pelanggan: ${namaPelanggan}</p>
      <p>Email: ${email}</p>
      <p>Jam Keberangkatan: ${jamKeberangkatan}</p>
      <p>Tujuan Keberangkatan: ${tujuanKeberangkatan}</p>
      <p>Jumlah Tiket: ${jumlahTiket}</p>
    `;
    return false;
  }