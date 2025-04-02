let jogoSelecionado = "";

// Função para mostrar as opções de jogo
function mostrarOpcoes() {
    document.getElementById("tela-inicial").style.display = "none";
    document.getElementById("tela-escolha").style.display = "flex";
    document.getElementById("imagem-jogo").style.display = "none";
}

// Função para selecionar o jogo
function escolherJogo(jogo) {
    jogoSelecionado = jogo;
    
    // Configura a imagem do jogo selecionado
    const imgElement = document.getElementById("imagem-jogo");
    let imagemJogo = "";
    
    if (jogo === "Fortnite") {
        imagemJogo = "imagens/fortnite.jpg";
    } else if (jogo === "Minecraft") {
        imagemJogo = "imagens/minecraft.webp";
    } else if (jogo === "Roblox") {
        imagemJogo = "imagens/roblox.jpg";
    }
    
    imgElement.src = imagemJogo;
    imgElement.style.display = "block";
    imgElement.style.width = "380px";
    imgElement.alt = `Imagem do ${jogo}`;

    // Atualiza as telas
    document.getElementById("tela-escolha").style.display = "none";
    document.getElementById("tela-conversao").style.display = "flex";

    // Configura o texto da moeda
    const moedas = {
        "Fortnite": "V-Bucks",
        "Minecraft": "Minecoins",
        "Roblox": "Robux"
    };
    document.getElementById("moeda-selecionada").textContent = `Converta ${moedas[jogo]} para Real`;

    // Prepara para nova conversão
    document.getElementById("quantidade").value = "";
    document.getElementById("resultado").textContent = "";
    document.getElementById("quantidade").focus();
}

// Função para converter a moeda
function converterMoeda() {
    const quantidade = parseFloat(document.getElementById("quantidade").value);
    
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Por favor, digite um valor válido!");
        document.getElementById("quantidade").focus();
        return;
    }

    const taxas = {
        "Fortnite": 0.025,
        "Minecraft": 0.05,
        "Roblox": 0.035
    };

    const resultado = (quantidade * taxas[jogoSelecionado]).toFixed(2);
    document.getElementById("resultado").innerHTML = `Valor em Real: <strong>R$ ${resultado}</strong>`;
}

// Função para limpar o resultado
function limparResultado() {
    document.getElementById("resultado").textContent = "";
}

// Função para voltar à tela de escolha
function voltarEscolha() {
    document.getElementById("tela-conversao").style.display = "none";
    document.getElementById("tela-escolha").style.display = "flex";
    document.getElementById("imagem-jogo").style.display = "none";
}

// Função para voltar à tela inicial
function voltarInicio() {
    document.getElementById("tela-escolha").style.display = "none";
    document.getElementById("tela-inicial").style.display = "flex";
    document.getElementById("imagem-jogo").style.display = "none";
}

// Adiciona tratamento de erro para imagens
document.getElementById("imagem-jogo").onerror = function() {
    this.style.display = "none";
    console.error("Erro ao carregar imagem: " + this.src);
};
