const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje")

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptar (stringEncriptado) {
 let matrizcodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
 stringEncriptado = stringEncriptado.toLowerCase()

 for(let i = 0; i < matrizcodigo.length; i++){
    if (stringEncriptado.includes(matrizcodigo[i][0])){
        stringEncriptado = stringEncriptado.replaceAll(matrizcodigo[i][0], matrizcodigo[i][1])

    }
 
 }
 return stringEncriptado
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value = textoDesencriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function desencriptar (stringDesencriptado) {
    let matrizcodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()
   
    for(let i = 0; i < matrizcodigo.length; i++){
       if (stringDesencriptado.includes(matrizcodigo[i][1])){
        stringDesencriptado = stringDesencriptado.replaceAll(matrizcodigo[i][1] , matrizcodigo[i][0])
   
       }
    
    }
    return stringDesencriptado
}
//Boton copiar

        // Espera a que el DOM esté completamente cargado
        document.addEventListener('DOMContentLoaded', function() {
            // Selecciona el botón de copiar
            const button = document.querySelector('.copiar');
            // Selecciona el área de texto
            const textArea = document.querySelector('.mensaje');
            
            // Agrega un evento de clic al botón
            button.addEventListener('click', function() {
                // Selecciona el contenido del área de texto
                textArea.select();
                // Copia el contenido seleccionado al portapapeles
                document.execCommand('copy');
                // Desselecciona el contenido del área de texto
                textArea.setSelectionRange(0, 0);
                // O muestra una alerta
                alert('Texto copiado al portapapeles');
            });
        });
