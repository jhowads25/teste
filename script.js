let jogoSelecionado = "";

// Função para mostrar as opções de jogo na tela inicial
function mostrarOpcoes() {
    document.getElementById("tela-inicial").style.display = "none"; // Esconde a tela inicial
    document.getElementById("tela-escolha").style.display = "flex"; // Mostra a tela de escolha de jogo
}

// Função para escolher o jogo
function escolherJogo(jogo) {
    jogoSelecionado = jogo;
    document.getElementById("tela-escolha").style.display = "none"; // Esconde a tela de escolha
    document.getElementById("tela-conversao").style.display = "flex"; // Mostra a tela de conversão
    
    // Limpar valores anteriores
    document.getElementById("quantidade").value = ""; // Limpa o campo de entrada de quantidade
    document.getElementById("resultado").innerText = ""; // Limpa o resultado da conversão

    // Adicionando o nome da moeda selecionada ao texto
    let nomeMoeda = jogoSelecionado === "Fortnite" ? "V-Bucks" :
                    jogoSelecionado === "Minecraft" ? "Minecoins" :
                    jogoSelecionado === "Roblox" ? "Robux" : "";

    document.getElementById("moeda-selecionada").innerText = "Converta " + nomeMoeda + " para Real"; // Exibe o nome da moeda

    // Colocando o foco automaticamente no campo de entrada para que o usuário possa digitar diretamente
    document.getElementById("quantidade").focus();
}

// Função para realizar a conversão de moeda
function converterMoeda() {
    let quantidade = document.getElementById("quantidade").value;
    if (quantidade === "" || quantidade <= 0) {
        alert("Digite uma quantidade válida.");
        return;
    }

    let taxasDeCambio = {
        "Fortnite": 0.025,   // 1 V-Buck = R$ 0,025
        "Minecraft": 0.05,   // 1 Minecoin = R$ 0,05
        "Roblox": 0.035      // 1 Robux = R$ 0,035
    };

    let valorConvertido = quantidade * taxasDeCambio[jogoSelecionado];
    document.getElementById("resultado").innerText = "Valor em Real: R$ " + valorConvertido.toFixed(2); // Exibe o resultado da conversão
    
    // Limpar o campo de entrada após conversão
    document.getElementById("quantidade").value = "";
}

// Função para limpar o resultado da conversão
function limparResultado() {
    document.getElementById("resultado").innerText = ""; // Limpa o campo de resultado
}

// Função para voltar à tela de escolha de jogo
function voltarEscolha() {
    document.getElementById("tela-conversao").style.display = "none"; // Esconde a tela de conversão
    document.getElementById("tela-escolha").style.display = "flex"; // Mostra a tela de escolha
}

// Função para voltar à tela inicial
function voltarInicio() {
    document.getElementById("tela-escolha").style.display = "none"; // Esconde a tela de escolha
    document.getElementById("tela-inicial").style.display = "flex"; // Mostra a tela inicial
    
    // Limpar qualquer dado anterior ao voltar para a tela inicial
    document.getElementById("quantidade").value = "";  // Limpar o campo de quantidade
    document.getElementById("resultado").innerText = "";  // Limpar o resultado
}
