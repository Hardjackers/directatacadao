// Tocar vinheta ao carregar (Browsers podem bloquear som automático, 
// então as vezes precisa de um clique do usuário)
document.addEventListener('DOMContentLoaded', function() {
    const som = document.getElementById('vinheta');
    
    // 1. Verifica se a vinheta já tocou alguma vez nessa visita do cliente
    if (sessionStorage.getItem('vinhetaTocada') === 'true') {
        return; // Se já tocou, cancela a execução e não faz mais nada
    }

    // 2. Função que toca o áudio no clique (se o navegador tiver bloqueado o automático)
    function tocarVinheta() {
        if (som) {
            som.play().catch(e => console.log("Erro ao tentar tocar:", e));
            sessionStorage.setItem('vinhetaTocada', 'true'); // Grava na memória que já tocou
            
            // Remove os espiões imediatamente
            document.removeEventListener('click', tocarVinheta);
            document.removeEventListener('touchstart', tocarVinheta);
        }
    }

    if (som) {
        // 3. Tenta tocar o áudio automaticamente assim que a página abre
        let tentativaPlay = som.play();
        
        if (tentativaPlay !== undefined) {
            tentativaPlay.then(_ => {
                // SUCESSO! O navegador deixou tocar direto.
                // Então gravamos na memória e NÃO ativamos o clique na tela.
                sessionStorage.setItem('vinhetaTocada', 'true');
            }).catch(error => {
                // BLOQUEADO! O navegador barrou o áudio automático.
                // Agora sim, ativamos o espião para tocar quando o cliente clicar.
                document.addEventListener('click', tocarVinheta);
                document.addEventListener('touchstart', tocarVinheta);
            });
        }
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

/* =======================================================
   SISTEMA DE STATUS DO WHATSAPP (ONLINE / OFFLINE)
========================================================== */
document.addEventListener('DOMContentLoaded', function() {
    // Procura a caixa de status na página atual (só vai achar na zap.html)
    const caixaStatus = document.getElementById('status-atendimento');
    
    if (caixaStatus) {
        const agora = new Date();
        const diaSemana = agora.getDay(); // 0 = Domingo, 1 = Segunda... 6 = Sábado
        const horaAtual = agora.getHours();
        
        let estamosAbertos = false;

        // Regra 1: Segunda a Sexta (Dias 1 a 5) das 08:00 às 16:59
        if (diaSemana >= 1 && diaSemana <= 5) {
            if (horaAtual >= 8 && horaAtual < 17) {
                estamosAbertos = true;
            }
        } 
        // Regra 2: Sábado (Dia 6) das 08:00 às 11:59
        else if (diaSemana === 6) {
            if (horaAtual >= 8 && horaAtual < 12) {
                estamosAbertos = true;
            }
        }
        // Domingo (Dia 0) a variável já começa como false, então não precisa de regra.

        // Mudar a mensagem e a cor na tela automatica
if (estamosAbertos) {
    caixaStatus.innerHTML = "🟢 Atendentes estão disponíveis agora.<br> Aproveite as ofertas incríveis!";
    caixaStatus.style.color = "green"; // Verde
} else {
    caixaStatus.innerHTML = "🔴 Nenhum atendente disponível agora.<br> Mas deixe sua mensagem, responderemos quando voltarmos.";
    caixaStatus.style.color = "red"; // Vermelho
}
    }
});

//Hardjackers CORP