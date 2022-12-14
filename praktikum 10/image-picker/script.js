function imgPicker(){
    let picker = document.getElementById("selectImg").value;
    let images = document.getElementById("imgFigure");

    if (picker == "Foto Angkatan SMK") {
        images.src = "FotoAngkatanSMK.jpg";
        images.width = 400;
        images.alt = "Ini adalah Foto Angkatan SMK";
        alert("Ini adalah Foto Angkatan SMK");
    } else if (picker == "Foto Jurusan SMK") {
        images.src = "FotoJurusanSMK.jpg";
        images.width = 400;
        images.alt = "Ini adalah Foto Jurusan SMK";
        alert("Ini adalah Foto Jurusan SMK");
    } else if (picker == "Foto Rohis SMK") {
        images.src = "rohisSMK.jpg";
        images.width = 400;
        images.alt = "Ini adalah Foto Rohis SMK";
        alert("Ini adalah Foto Rohis SMK");
    } else if (picker == "Foto Kelasku") {
        images.src = "TemenKelasku.jpg";
        images.width = 400;
        images.alt = "Ini adalah Foto Kelasku";
        alert("Ini adalah gambar Foto Kelasku");
    } else if (picker == "Foto Ciwiciwi") {
        images.src = "CiwiCiwi.jpg";
        images.width = 400;
        images.alt = "Ini adalah foto sama CiwiCiwi";
        alert("Ini adalah foto sama CiwiCiwi");
    } else if (picker == "Foto sama Bestie") {
        images.src = "FotoBesti.jpg";
        images.width = 400;
        images.alt = "Ini adalah Foto sama Bestie";
        alert("Ini adalah Foto sama Bestie");
    } else {
        alert("Gagal");
    }
}