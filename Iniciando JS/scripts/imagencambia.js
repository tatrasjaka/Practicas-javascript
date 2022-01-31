function changeImage() {
    let image = document.getElementById('myImage');
    if (image.src.match("newvegas.jpg")) {
        image.src = "../Iniciando JS/images/fallout3.png";
    }
    else {
        image.src = "../Iniciando JS/images/newvegas.jpg";
    }
}