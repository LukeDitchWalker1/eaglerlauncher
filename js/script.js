var version = document.getElementById("version")
var texturepack = document.getElementById("Texture Pack")

function Launch() {
    if (version == "none" || texturepack == "none") {
        window.alert("Please confirm your settings!")
    } else {
        
        if (version == "Vanilla1.8.8") {
            var x = document.createElement("IFRAME");
            x.setAttribute("src", "../versions/EaglercraftX_1.8_Offline_International.html");
            document.body.appendChild(x);
        } else if (version == "Resent1.8.8") {
            var x = document.createElement("IFRAME");
            x.setAttribute("src", "../versions/index.html");
            document.body.appendChild(x);
        }
        
    }

} 