function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "srilusiana46@gmail.com" && password === "123456789") {
        alert("Login Sukses");
        window.location.href = "halamanbaru";
    } else {
        alert("Login Gagal. Periksa kembali username dan password.");
    }
}
