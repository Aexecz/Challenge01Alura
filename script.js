var textoIngresado = document.querySelector(".texto-ingresado")
var mensaje = document.querySelector(".mensaje-final")
var textoCopia = document.querySelector(".b-copiar");

//Funcion reutilizada de mis compañeros del discord para borrar acentos del resultado final 

let borraAcentos = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  };

function bEncriptar(){
    var textoEncriptado = encriptar(textoIngresado.value)
    mensaje.value = textoEncriptado
    textoIngresado.value = "";
    mensaje.style.backgroundImage = "none"
    
}


function encriptar(stringEncriptando){
    let matrizCod = [["e","enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptando = borraAcentos(stringEncriptando).toLowerCase()

    for(var i = 0; i < matrizCod.length; i++){
        if(stringEncriptando.includes(matrizCod[i][0])){
            stringEncriptando = stringEncriptando.replaceAll(matrizCod[i][0], matrizCod[i][1])
        }

    }
    textoCopia.style.display = "block"
    return stringEncriptando
}


function bDesencriptar(){
    var textoEncriptado = desencriptar(textoIngresado.value)
    mensaje.value = textoEncriptado
    textoIngresado.value = "";
}



function desencriptar(stringDesencriptando){
    let matrizCod = [["e","enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDesencriptando = stringDesencriptando.toLowerCase()

    for(var i = 0; i < matrizCod.length; i++){
        if(stringDesencriptando.includes(matrizCod[i][1])){
            stringDesencriptando = stringDesencriptando.replaceAll(matrizCod[i][1], matrizCod[i][0])
        }

    }
    textoCopia.style.display = "block"
    return stringDesencriptando
}

function copiar () {
    var copyText = document.querySelector(".mensaje-final");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value)
    copyText.value = "";
  }





