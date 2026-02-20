// Tocar vinheta ao carregar (Browsers podem bloquear som automático, 
// então as vezes precisa de um clique do usuário)
document.addEventListener('DOMContentLoaded', function() {
    const som = document.getElementById('vinheta');

    // Essa é a função que vai dar o play assim que o cliente interagir
    function tocarVinheta() {
        if (som) {
            som.play().catch(e => console.log("Erro ao tentar tocar:", e));
            
            // Muito importante: depois que tocar a primeira vez, a gente remove o "espião"
            // para a vinheta não tocar de novo toda vez que o cliente clicar em algo!
            document.removeEventListener('click', tocarVinheta);
            document.removeEventListener('touchstart', tocarVinheta);
        }
    }

    // Colocamos o "espião" para vigiar o primeiro clique (PC) ou toque na tela (Celular)
    document.addEventListener('click', tocarVinheta);
    document.addEventListener('touchstart', tocarVinheta);
    
    // Deixamos isso aqui pro caso do navegador do cliente já ter a permissão liberada
    if (som) {
        som.play().catch(e => console.log("Aguardando o primeiro clique do cliente para tocar a vinheta."));
    }
});

// ... aqui para baixo continuam as suas funções de abrirModal, fecharModal, etc ...
function abrirModal(id) {
    document.getElementById(id).style.display = "block";
}

function abrirModal(id) {
    document.getElementById(id).style.display = "block";
}

function fecharModal(id) {
    document.getElementById(id).style.display = "none";
}

// Função para rolar a tela até o topo ifood
function subirTela() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Faz o movimento ser suave
    });
}

function abrirModal(id) {
    document.getElementById(id).style.display = "block";
}

function fecharModal(id) {
    document.getElementById(id).style.display = "none";
}

function subirTela() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Fechar modal ao clicar fora dele
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}

// Fechar modal ao apertar ESC
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        let modais = document.querySelectorAll('.modal');
        modais.forEach(function(modal) {
            modal.style.display = "none";
        });
    }
});