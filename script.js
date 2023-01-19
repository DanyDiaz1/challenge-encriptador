
/*let encodeText=prompt("Ingrese el texto a codificar");

document.write(encode(encodeText));*/

let decodeText=prompt("Ingrese el texto a decodificar");

document.write(decode(decodeText));

function encode(text) {
    // Inicializamos una variable para almacenar el texto codificado
    let encodedText = "";

    // Recorremos cada carácter del texto original
    for (let i = 0; i < text.length; i++) {
      // Obtenemos el carácter actual
      const char = text[i];

      // Dependiendo del carácter, añadimos la clave correspondiente al texto codificado
      switch (char) {
        case "e":
          encodedText += "enter";
          break;
        case "i":
          encodedText += "imes";
          break;
        case "a":
          encodedText += "ai";
          break;
        case "o":
          encodedText += "ober";
          break;
        case "u":
          encodedText += "ufat";
          break;
        // Si el carácter no es una de las letras a codificar, lo añadimos sin cambios
        default:
          encodedText += char;
      }
    }

    // Devolvemos el texto codificado
    return encodedText;
  }

  function decode(text) {
    // Inicializamos una variable para almacenar el texto decodificado
    let decodedText = "";

    // Recorremos cada carácter del texto codificado
    for (let i = 0; i < text.length; i++) {
      // Obtenemos el carácter actual
      const char = text[i];

      // Dependiendo del carácter, añadimos la clave correspondiente al texto decodificado
      switch (char) {
        case "e":
          // Si el carácter es la primera letra de la clave "enter", añadimos la letra "e" al texto decodificado
          if (text.substring(i, i + 5) === "enter") {
            decodedText += "e";
            i += 4; // Saltamos los 4 caracteres restantes de la clave
          } else {
            decodedText += char;
          }
          break;
        case "i":
          // Si el carácter es la primera letra de la clave "imes", añadimos la letra "i" al texto decodificado
          if (text.substring(i, i + 4) === "imes") {
            decodedText += "i";
            i += 3; // Saltamos los 3 caracteres restantes de la clave
          } else {
            decodedText += char;
          }
          break;
        case "a":
          // Si el carácter es la primera letra de la clave "ai", añadimos la letra "a" al texto decodificado
          if (text.substring(i, i + 2) === "ai") {
            decodedText += "a";
            i += 1; // Saltamos el carácter restante de la clave
          } else {
            decodedText += char;
          }
          break;
        case "o":
          // Si el carácter es la primera letra de la clave "ober", añadimos la letra "o" al texto decodificado
          if (text.substring(i, i + 4) === "ober") {
            decodedText += "o";
            i += 3; // Saltamos los 3 caracteres restantes de la clave
          } else {
            decodedText += char;
          }
          break;
        case "u":
          // Si el carácter es la primera letra de la clave "ufat", añadimos la letra "u" al texto decodificado
          if (text.substring(i, i + 4) === "ufat") {
            decodedText += "u";
            i += 3; // Saltamos los 3 caracteres restantes de la clave
          } else {
            decodedText += char;
          }
        default:
          decodedText += char;
      }
    }

    return decodedText;
  }