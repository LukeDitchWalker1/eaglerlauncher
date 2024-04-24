function Launch() {
    var version = document.getElementById("version").value;
    var texturepack = document.getElementById("Texture-Pack").value;

    if (version == "none" || texturepack == "none") {
        window.alert("Please confirm your settings!");
    } else {
        var iframe = document.createElement("iframe");
        iframe.className = "fullscreen-iframe";
        if (version == "Vanilla1.8.8") {
            iframe.setAttribute("src", "../versions/vanilla.html");
        } else if (version == "Resent1.8.8") {
            iframe.setAttribute("src", "../versions/resent.html");
        }
        document.body.appendChild(iframe);
    }
}
