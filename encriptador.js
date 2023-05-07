function encriptarTexto(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("tituloMensaje");
    let parrafo = document.getElementById("parrafoMensaje");
    let imagenNino = document.getElementById("imagenPersona");
    let btnCopy = document.getElementById("btnCopiar");
    let textoCifrado = document.getElementById("oculto");
    let mayusculas = /[A-Z]/.test(texto);
    let caracteresEspeciales = /[^a-zA-Z0-9\s]/.test(texto);
    

    if(texto.length!=0)
    {   
        if(mayusculas || caracteresEspeciales)
        {
            swal("Oops!", "El texto no puede contener mayusculas o caracteres especiales");
        }
        else
        {
            
            textoCifrado.textContent = texto
            .replaceAll("e", "enter")
            .replaceAll("i", "imes")
            .replaceAll("a", "ai")
            .replaceAll("o", "ober")
            .replaceAll("u", "ufat");
        
            imagenNino.style.display = "none";
            tituloMensaje.textContent = "Texto encriptado con exito";
            parrafo.textContent = "";
        }
        

    }
    else
    {
        swal("Oops!", "Debes ingresar un texto");
    }

   


}

function copiarTexto()
{
    
    let textoCifrado = document.getElementById("oculto").textContent;

    if(textoCifrado.length!=0)
    {   
        
        document.getElementById("texto").value = textoCifrado;
       
    }
    else
    {
        swal("Oops!", "Debes incriptar un texto primero");
    } 

    
}

function desencriptarTexto()
{


    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("tituloMensaje");
    let parrafo = document.getElementById("parrafoMensaje");
    let imagenNino = document.getElementById("imagenPersona");
    let btnCopy = document.getElementById("btnCopiar");
    let textoCifrado = document.getElementById("oculto");
    let mayusculas = /[A-Z]/.test(texto);
    let caracteresEspeciales = /[^a-zA-Z0-9\s]/.test(texto);
    

    if(texto.length!=0)
    {   
        if(mayusculas || caracteresEspeciales)
        {
            swal("Oops!", "El texto no puede contener mayusculas o caracteres especiales");
        }
        else
        {
            
            textoCifrado.textContent = texto
            .replace(/ai/gi, "a")
            .replace(/enter/gi, "e")
            .replace(/imes/gi, "i")
            .replace(/ober/gi, "o")
            .replace(/ufat/gi, "u");
        
            imagenNino.style.display = "none";
            tituloMensaje.textContent = "Texto desencriptado con exito";
            parrafo.textContent = "";
        }
        

    }
    else
    {
        swal("Oops!", "Debes ingresar un texto");
    }
}