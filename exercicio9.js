const mensagensDivertidas =

[
    "qual é o peixe que obrevive ao 15° andar? o aaaaaaaaatum",
    "o que o martelo vai fazer no culto? pregar",
    "o que o pato falou pra pata? vem quá",
    "por que o jacaré tirou o jacarzinho da escola? porque ele réptil de ano",
]

let botaoDivertido = document.getElementById("botaoDivertido");
let mensagemDivertida = document.getElementById("mensagemDivertida");

botaoDivertido.addEventListener('click', function(){
// Math.floor(x) retorna o menor número inteiro entre o número "x".
// Math.random() retorna um número pseudo-aleatorio no intervalo
    const mensagemAleatoria = mensagensDivertidas[Math.floor(Math.random() * mensagensDivertidas.length)]

    mensagemDivertida.textContent = mensagemAleatoria;
})