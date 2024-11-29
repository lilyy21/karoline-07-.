confirm("klik dibawah ini?");
var nama= prompt("masukan nama anda?", "");
document.write("<p>HALLO "+ nama +"!</p>");
document.write("<p>HALLO "+ nama +"!</p>");
document.write("<p>HALLO "+ nama +"!</p>");
document.write("<p>HALLO "+ nama +"!</p>");
document.write("<p>HALLO "+ nama +"!</p>");
document.write("<p>HALLO "+ nama +"!</p>");
document.write("<p>HALLO "+ nama +"!</p>");
document.write("<p>HALLO "+ nama +"!</p>");
alert('klik ok ya ' + nama)
var ulangi = confirm("Apakah anda mau mengulang?");
var counter = 0;

while(ulangi){
    counter++;
    ulangi = confirm("Apakah anda mau mengulang?");
}

document.write("Perulangan sudah dilakukan sebanyak "+ counter +" kali");