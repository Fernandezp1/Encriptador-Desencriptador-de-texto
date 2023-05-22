var botonEncriptar=document.querySelector(".btn-encriptar");
//var botonEncriptar=document.getElementsByClassName(".btn-encriptar");
var botonDesencriptar=document.querySelector(".btn-desencriptar");
var munieco=document.querySelector(".contenedormunieco");
var contenedor=document.querySelector(".contenedor-parrafo");
var resultado=document.querySelector(".texto-resultado");
 
 /*
botonEncriptar.addEventListener("click", () =>{
    console.log(recuperarTexto.value);
})
 */

botonEncriptar.onclick = encriptar;
 
botonDesencriptar.onclick = desencriptar;

function encriptar() {
    ocultarAdelante();
    var cajatexto = recuperarTexto();
    resultado.textContent = encriptarTexto(recuperarTexto());
    //console.log(recuperarTexto());
}

function desencriptar() {
    ocultarAdelante();
    var cajatexto = recuperarTexto();
    resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto() {
    var cajatexto = document.querySelector(".cajatexto");
    return cajatexto.value
}

function ocultarAdelante(){
    
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
    munieco.classList.remove("contenedormunieco");
    munieco.classList.remove("contenedor-parrafo");
}

//funcion encriptar
function encriptarTexto(mensaje){

    const texto = mensaje;
    var textoFinal ="";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if (texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if (texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if (texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if (texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else {
            textoFinal = textoFinal + texto[i]
        }
        
    }
    return textoFinal;
}

//funcion desencriptar 
function desencriptarTexto(mensaje){

    var texto = mensaje;
   var textoFinal ="";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i + 1;
        }
        else if (texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i + 4;
        }
        else if (texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i + 3;
        }
        else if (texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i + 3;
        }
        else if (texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i + 3;
        }
        else {
            textoFinal = textoFinal + texto[i]
        }
        
    }
    return textoFinal;
}

 //Boton copiar 

const btnCopiar = document.querySelector(".btn-copiar");
    btnCopiar.addEventListener("click", copiar = ()=>{
        var contenido = document.querySelector(".texto-resultado").textContent;
        navigator.clipboard.writeText(contenido);
        //console.log(contenido)
    })

 


 


