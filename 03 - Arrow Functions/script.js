const valores = [6.93, 7.25, 6.85, 7.10, 6.95, 7.00, 6.80, 7.15, 6.90, 7.05, 6.53, 7.20, 6.75, 7.30, 6.88, 7.12, 6.82, 7.18, 6.78, 7.08, 6.92];
const max = valores.length;

document.addEventListener("DOMContentLoaded", () => {
    atualizarValor();
    calcularAbastecimento();
});   

document.addEventListener("change", () => {
    calcularAbastecimento();
});

let litro = document.getElementById("litros");
litro.addEventListener("input", () => {calcularAbastecimento();});
litro.addEventListener("keydown", function(event){
    if(event.key == "Enter"){
        event.preventDefault();
        atualizarValor();
        calcularAbastecimento();
    }
});

function puxarPreco() {
    let aleatorio = Math.floor(Math.random() * max);
    return valores[aleatorio];
}

function atualizarValor() {
    let frases = ["Valor da Gasolina: ", "Valor do Etanol: ", "Valor do Diesel: "];
    let ids = ["valorGasosa", "valorEtanona", "valorDieseira"];

    ids.forEach((id) => {
        let elemento = document.getElementById(id);
        if (elemento) {
            elemento.innerHTML = frases[ids.indexOf(id)] + formatarMoeda(puxarPreco());
        }
    });
}

function calcularAbastecimento() {
    let escolha = document.getElementById("combustivel").value; 
    let id = "valor" + escolha;

    let elemento = document.getElementById(id);
    let precoPorLitro = elemento ? parseFloat(elemento.innerHTML.split("R$")[1]) : 0;

    let litros = document.getElementById("litros").value;
    let valorTotal = precoPorLitro * litros;


    let p = document.getElementById("resultado");
    p.innerHTML = "Valor total do abastecimento: " + formatarMoeda(valorTotal);    
}

function formatarMoeda(valor) {
    return "R$" + valor.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
}

