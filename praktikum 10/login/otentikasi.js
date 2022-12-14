function login() {
    event.preventDefault();

    let uname = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (uname == "shilma" && pass == "guecantik") {
        location.replace("success.html");
        alert("Login berhasil");
    } else {
        alert("Login gagal");
    }

}