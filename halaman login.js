var dialog = document.querySelector("dialog");

document.querySelector("#open-popup").onclick = function() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username && password) {
        dialog.showModal();
    } 
};
 
document.querySelector(".IYA-btn").onclick = function() {
    dialog.close();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "karoline" && password === "55443322") {
        window.location.href = 'halaman sekanjutnya.HTML';
    } else {
    alert("akun tidak ditemukan");
    }
};

document.querySelector("#tidak-btn").onclick = function() {
    dialog.close();
    alert("anda tidak bisa login");
    var ulangi = confirm("Apakah anda mau mengulang?");
var counter = 0;

while(ulangi){
    counter++;
    ulangi = confirm("Apakah anda mau mengulang?");
}

document.write("Perulangan sudah dilakukan sebanyak "+ counter +" kali");
};
