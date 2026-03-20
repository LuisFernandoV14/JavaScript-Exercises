function aumentar() {
    let counter = document.getElementById("contador");

    let valor = parseInt(counter.innerText);
    valor++;

    counter.innerText = valor;
}

function reduzir() {
    let counter = document.getElementById("contador");

    if (counter.innerText > 0) {

        let valor = parseInt(counter.innerText);
        valor--;

        counter.innerText = valor;
    } else {
        alert("O contador não pode ser negativo");
    } 

}

function resetarContador() {
    let counter = document.getElementById("contador");
    counter.innerText = 0;
}

function atualizarTexto() {
    let input = document.getElementById("inputTexto");
    let texto = input.value;


    let p = document.createElement("p");
    p.innerText = texto;

    let div = document.getElementById("txtdinamico");
    div.appendChild(p);

}

function resetarTexto() {
    let div = document.getElementById("txtdinamico");
    div.innerHTML = "";
}

function contarCaracteres(event) {
    
    if (event.code !== "Space" && event.code !== "Enter" && event.code !== "Delete" && event.code !== "Tab") {
        if (event.code !== "Backspace" && event.code) {
            contador++;
        } else {
            if (contador > 0) {
                contador--;
            }
        }
    }

    let div = document.getElementById("outputContador");

    let frase = `Número de caracteres digitados: ${contador}`;
    div.innerText = frase;

}

function resetarContadorCaracteres() {
    contador = 0;
    let div = document.getElementById("outputContador");
    div.innerText = "";
}

let inputTexto = document.getElementById("inputContador");
let contador = 0;

inputTexto.onkeydown = function(event) {
    contarCaracteres(event);
}

function adicionarItem() {

    let option = document.getElementById("inputLista").value;
    let div = document.getElementById("outputLista");
    let tag;
    
    if (option.trim() !== "") {
        tag = document.createElement(option);
    }

    let frase = getTexto(option);

    tag.innerHTML = frase;
    div.appendChild(tag);
}

function getTexto(tag) {
    frase = document.getElementById("textoItem").value;
    let frases;

    switch (tag) {
        case "h1":
            return `<h1>${frase}</h1>`;
        case "h2":
            return `<h2>${frase}</h2>`;
        case "h3":
            return `<h3>${frase}</h3>`;
        case "p":
            return `<p>${frase}</p>`;
        case "ul":
            frases = frase.split(" ").map(word => `<li>${word}</li>`).join("");
            
            return `<ul>${frases}</ul>`; 
        case "ol":
            frases = frase.split(" ").map(word => `<li>${word}</li>`).join("");
            
            return `<ol>${frases}</ol>`; 
        default:
            return frase;    
    }
}

function resetarItens() {
    let div = document.getElementById("outputLista");
    div.innerHTML = "";

    let input = document.getElementById("textoItem");
    input.value = "";
}

function resetar() {
    resetarContador();
    resetarTexto();
    resetarContadorCaracteres();
    resetarItens();
    
}