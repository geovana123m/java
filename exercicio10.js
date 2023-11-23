const numeroSecreto = Math.floor(Math.random() * 100) + 1; // Número aleatório entre 1 e 100
let tentativas = 0;

const verificarBotao = document.getElementById("verificarBotao");
const tentativaInput = document.getElementById("tentativa");
const dica = document.getElementById("dica");

verificarBotao.addEventListener("click", function() {
    const tentativa = parseInt(tentativaInput.value);
    
    if (tentativa === numeroSecreto) {
        dica.textContent = `Parabéns! Você acertou em ${tentativas} tentativas.`;
        verificarBotao.disabled = true;
    } else if (tentativa < numeroSecreto) {
        dica.textContent = "Tente um número maior.";
        tentativas++;
    } else {
        dica.textContent = "Tente um número menor.";
        tentativas++;
    }
});