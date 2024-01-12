function displayGambar() {
    let list = document.getElementById("listGambar");
    let pilihGambar = document.getElementById("gambar");

    if (list.value !== "") {
        let Gambar = list.value;
        pilihGambar.src = Gambar;

        alert(" Ini " + list.value);
    } else {
        pilihGambar.src = "";
        alert("Silahkan Pilih Gambar");
    }
}