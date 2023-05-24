function hitungLuas() {
    var sisiLuas = document.getElementsByName("sisi-luas");
    var luas = sisiLuas[0].value * sisiLuas[0].value;
    // validasi input
    if (sisiLuas[0].value == "") {
        alert("Silahkan Masukkan Angka")
        return false;
    }

    document.getElementById("output_luas").innerHTML = luas;
    document.getElementById("sisi").innerHTML = sisiLuas[0].value + " x " +
        sisiLuas[0].value;
    document.getElementById("output-section-luas").hidden = false;
}

function resetLuas() {
    var sisiLuas = document.getElementsByName("sisi-luas");
    sisiLuas[0].value = "";
    document.getElementById("output-section-luas").hidden = true;
}

function hitungKeliling() {
    var sisiKeliling = document.getElementsByName("sisi-keliling");
    var keliling = 4 * sisiKeliling[0].value;
    // validasi input
    if (sisiKeliling[0].value == "") {
        alert("Silahkan Masukkan Angka")
        return false;
    }
    document.getElementById("output_keliling").innerHTML = keliling;
    document.getElementById("sisi-keliling").innerHTML = "4 x " +
        sisiKeliling[0].value;
    document.getElementById("output-section-keliling").hidden = false;
}

function resetKeliling() {
    var sisiKeliling = document.getElementsByName("sisi-keliling");
    sisiKeliling[0].value = "";
    document.getElementById("output-section-keliling").hidden = true;
}