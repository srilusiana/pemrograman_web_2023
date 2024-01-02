function hitungNilai() {
    let nilai = parseFloat(document.getElementById("nilai").value);
    let pilihan = document.getElementById("valas").value;

    let nilaiKonversi = {
      USD: 9915,
      SGD: 13472,
      MYR: 874,
      JPY: 120,
      EUR: 15888,
      SAR: 3592
  };
      konversiNilai = nilai * nilaiKonversi[pilihan]

    document.getElementById("hasilKonversi").innerHTML = konversiNilai;
  }