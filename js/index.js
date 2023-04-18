let button = document.getElementById("button");
button.addEventListener("click", encrypt);

function encrypt() {
    let input = document.getElementById("input");
    let texto = input.value;

    let textReplaced = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (textReplaced != "") {
        document.getElementById("data").innerHTML = textReplaced;
    } else {
        alert("Ingresa un texto, por favor");
        console.log("Debes ingresar un texto");
    }
}

let buttonCopyEn = document.getElementById("copyEn");
buttonCopyEn.addEventListener("click", copyEn);

function copyEn() {
    let copy = document.getElementById("data");
    navigator.clipboard.writeText(copy.innerHTML).then(
        () => {
            alert("Se ha copiado el contenido: " + copy.innerHTML);
            console.log("Se ha copiado el contenido: " + copy.innerHTML);
        },
        () => {
            console.error("Hubo un error, no se pudo copiar");
            alert("Hubo un error, no se pudo copiar");
        }
    );
}

let button2 = document.getElementById("button2");
button2.addEventListener("click", desencrypt);

function desencrypt() {
    let texto = document.getElementById("input").value;

    let textReplaced = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (textReplaced != "") {
        document.getElementById("dataDes").innerHTML = textReplaced;
    } else {
        alert("Ingresa un texto, por favor");
        console.log("Debes ingresar un texto");
    }
}

let buttonCopyDes = document.getElementById("copyDes");
buttonCopyDes.addEventListener("click", copyDes);

function copyDes() {
    let copy = document.getElementById("dataDes");
    navigator.clipboard.writeText(copy.innerHTML).then(
        () => {
            alert("Se ha copiado el contenido: " + copy.innerHTML);
            console.log("Se ha copiado el contenido: " + copy.innerHTML);
        },
        () => {
            console.error("Hubo un error, no se pudo copiar");
            alert("Hubo un error, no se pudo copiar");
        }
    );
}