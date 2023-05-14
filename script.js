const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btnEncriptar() {
  const textoEncriptado = encriptar(textArea.value);
  mensagem.textContent = textoEncriptado;
  textArea.value = "";
}

function encriptar(stringEncriptada) {
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    const letra = matrizCodigo[i][0];
    const substituto = matrizCodigo[i][1];
    const regex = new RegExp(letra, 'g');
    stringEncriptada = stringEncriptada.replace(regex, substituto);
  }

  return stringEncriptada;
}

function btnDesencriptar() {
  const textoDesencriptado = desencriptar(mensagem.textContent);
  textArea.value = textoDesencriptado;
  mensagem.textContent = "";
}

function desencriptar(stringDesencriptada) {
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    const letra = matrizCodigo[i][1];
    const substituto = matrizCodigo[i][0];
    const regex = new RegExp(letra, 'g');
    stringDesencriptada = stringDesencriptada.replace(regex, substituto);
  }

  return stringDesencriptada;
}


