function encriptarTexto(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("mensajeEncriptado");
    let parrafo = document.getElementById("parrafoMensaje");
    let imagenNino = document.getElementById("imagenPersona");

    let textoCifrado = texto
    .replace(/a/gi, "ai")
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

    if(texto.length != 0)
    {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con exito";
        parrafo.textContent = "";
        imagenNino.src = "./Imagenes/encriptado.jpg";
    }
    else
    {
        imagenNino.src = "./Imagenes/muñeco.png";
        parrafo="Ingresa el texto que deseas encriptar";
        tituloMensaje.textContent="Ningun mensaje encontrado";
        alert("Debes ingresar un texto");
    }
}

function desencriptarTexto()
{
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("mensajeEncriptado");
    let parrafo = document.getElementById("parrafoMensaje");
    let imagenNino = document.getElementById("imagenPersona");

    let textoCifrado = texto
    .replace(/ai/gi, "a")
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if(texto.length != 0)
    {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con exito";
        parrafo.textContent = "";
        imagenNino.src = "./Imagenes/desencriptado.jpg";
    }
    else
    {
        imagenNino.src = "./Imagenes/muñeco.png";
        tituloMensaje.textContent="Ningun mensaje encontrado";
        parrafo.textContent="Ingrese el texto que desea encriptar o desencriptar";
        alert("Debes ingresar un texto");
    }
}