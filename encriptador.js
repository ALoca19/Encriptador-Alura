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