# 🛒 Portal Atacadão - Icoaraci

Um portal web responsivo e interativo desenvolvido para facilitar o acesso dos clientes aos serviços digitais da loja física do Atacadão Icoaraci. O sistema foi projetado para ser acessado primariamente via **QR Code** espalhado pelos corredores da loja.

## 🎯 Objetivo do Projeto
Centralizar as principais ações digitais do cliente em uma interface limpa, rápida e intuitiva, guiando-o para:
- Download e recuperação de conta do App "Meu Atacadão".
- Compras locais através do iFood.
- Acesso rápido ao E-commerce nacional.
- Visualização dos encartes e ofertas da semana atualizados localmente.

## 🚀 Funcionalidades
- **Interface Mobile-First:** Layout otimizado para telas de celulares, garantindo usabilidade via leitura de QR Code.
- **Áudio de Boas-Vindas:** Sistema de vinheta interativa acionada no primeiro toque do usuário na tela inicial (bypass na Autoplay Policy dos navegadores).
- **Modais Dinâmicos (Popups):** Navegação fluida em uma única tela para informações rápidas, com fechamento via clique externo ou tecla `ESC`.
- **Navegação Âncora Suave:** Botões de "Voltar ao topo" com comportamento `smooth scroll` para melhorar a experiência do usuário em páginas longas (como o tutorial do iFood e a galeria de ofertas).
- **Segurança Front-End:** Laboratório de pesquisa blindado contra ataques de **XSS (Cross-Site Scripting)** utilizando sanitização via `textContent`.

## 🛠️ Tecnologias Utilizadas
O projeto foi construído sem o uso de frameworks externos para garantir máxima leveza e carregamento instantâneo em redes móveis:
- **HTML5:** Estruturação semântica.
- **CSS3:** Flexbox, CSS Variables (Padrão de cores Atacadão) e responsividade nativa.
- **Vanilla JavaScript:** Manipulação do DOM, controle de eventos de áudio e segurança de inputs.

## 📁 Estrutura de Pastas e Arquivos

```text
/projeto-atacadao
│── index.html              # Página Inicial (Hub central)
│── ifood.html              # Página de compras e tutorial do iFood
│── download-app.html       # Página de download do app Meu Atacadão
│── atualizacoes.html       # Galeria de encartes e promoções
│── README.md               # Documentação do projeto
│
├── /css
│   └── style.css           # Folha de estilos global
│
├── /js
│   └── script.js           # Lógica principal, modais e segurança
│
├── /img
│   └── logo.png, whatsapp.png, android.png, apple.png, banner-exemplo.jpg...
│
└── /audio
    └── vinheta.mp3         # Áudio de boas-vindas
🔐 Segurança
Durante o desenvolvimento, foram aplicados conceitos básicos de Segurança da Informação no Front-End. O campo de pesquisa (laboratório) foi projetado para neutralizar injeções de tags HTML maliciosas (<script>, <img> com onerror), convertendo qualquer tentativa de manipulação de DOM em texto puro inofensivo.

Desenvolvido com ☕ e código por DEV. Hardjackers Setor de Processamento de Dados (CPD)