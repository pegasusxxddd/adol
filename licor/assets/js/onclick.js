
var whatsapp = document.getElementById("whatsapp");
var whatsapp_bri = document.getElementById("whatsapp_bri");

whatsapp.onclick = function(){
    whatsapp_bri.style.display = "block";
    setInterval(() => {
        whatsapp_bri.style.display = "none";
    }, 5000);
}

