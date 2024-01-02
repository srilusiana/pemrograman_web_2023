function kirimpesan() {
    let inputPesan = document.getElementById("inputPesan");
    let pesan = inputPesan.value;

    if (pesan.trim() !== "") {
        let boxPesan = document.getElementById("box-pesan");
        let pesanBaru = document.createElement("div");  
        pesanBaru.textContent = pesan;
        boxPesan.appendChild(pesanBaru);

        inputPesan.value = "";

        boxPesan.scrollTop = boxPesan.scrollHeight;
    }
}
