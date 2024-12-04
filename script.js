let campoTexto = document.getElementById("texto");
function paraMaiusculo(){
    let texto = campoTexto.value;
    campoTexto.value = texto.toUpperCase();

}

function paraMinusculo(){
    let texto = campoTexto.value;
    campoTexto.value = texto.toLowerCase();

}