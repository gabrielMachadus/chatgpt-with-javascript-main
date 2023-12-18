
const respostasPreDefinidas = {
    'Qual é o seu nome?': 'Meu nome é DiferBot da Diferpan.',
    'oi':'Olá, como posso ajudar você?',
    'ola':'Olá, como posso ajudar você?',
    'ajuda':'Descreva em poucas palavras a sua necessidade.',
    'teste':'Estamos realizando o teste do sistema',

    'manual':'Segue o link do manual do força de vendas da versotech. <br><a href="https://diferpan-my.sharepoint.com/:b:/g/personal/gabriel_machado_diferpan_com_br/EarhNdG_TpJLqJ2OZFQtJDsBE0MCkMPnJvfx0IsJ7OOgNA?e=r7EgCo" target="_blank" >clique aqui para acessar o arquivo</a>',

    'força de vendas':'Segue o link do manual do força de vendas da versotech. <br><a href="https://diferpan-my.sharepoint.com/:b:/g/personal/gabriel_machado_diferpan_com_br/EarhNdG_TpJLqJ2OZFQtJDsBE0MCkMPnJvfx0IsJ7OOgNA?e=r7EgCo" target="_blank" >clique aqui para acessar o arquivo</a>',

    'instalar força de vendas':'Segue o link do manual do força de vendas da versotech. <br><a href="https://diferpan-my.sharepoint.com/:b:/g/personal/gabriel_machado_diferpan_com_br/EdnP42nrTutAuVnkl3zO9x4BzlAW8CRJMp6sJGLzLvngxQ?e=ZjOSyU" target="_blank" >clique aqui para acessar o arquivo</a>',

    'instalar versovendas':'Segue o link do manual do força de vendas da versotech. <br><a href="https://diferpan-my.sharepoint.com/:b:/g/personal/gabriel_machado_diferpan_com_br/EdnP42nrTutAuVnkl3zO9x4BzlAW8CRJMp6sJGLzLvngxQ?e=ZjOSyU" target="_blank" >clique aqui para acessar o arquivo</a>',

    'acesso sgd':'Segue o link do acesso do SGD da Diferpan <br><a href="https://sgd.diferpan.com.br/sgd/index.jsf" target="_blank" >clique aqui para acessar</a>',

    'sgd':'Segue o link do acesso do SGD da Diferpan <br><a href="https://sgd.diferpan.com.br/sgd/index.jsf" target="_blank" >clique aqui para acessar</a>',

    'erro':'Poderia descrever com detalhes o tipo de erro que está ocorrendo ?',
    'atendente':'Ok, vou te transferir para um atendente humano que esteja disponivel.'
    // Adicione mais perguntas e respostas conforme necessário
};

function sendMessage() {
    var message = document.getElementById('message-input');
    //var mensagemEmMinusculo = message.value.toLowerCase();
    if (!message.value) {
        message.style.border = '1px solid red';
        return;
    }
    message.style.border = 'none';

    
    var btnSubmit = document.getElementById('btn-submit');

    btnSubmit.disabled = true;
    btnSubmit.style.cursor = 'not-allowed';
    message.disabled = true;

    try {
        // Verificar se a mensagem corresponde a uma pergunta pré-definida
        const respostaPreDefinida = Object.entries(respostasPreDefinidas)
    .find(([pergunta, resposta]) => message.value.includes(pergunta.toLowerCase()));
    console.log(respostaPreDefinida);

        if (respostaPreDefinida) {
            // Se houver uma resposta pré-definida, exibir no histórico
           
            showHistory(message.value, respostaPreDefinida[1]);
        } else {
            // Se não houver correspondência, exibir mensagem padrão
           
            showHistory(message.value, ' <p>Desculpe, eu não entendi a pergunta.</p>');
        }
    } finally {
        btnSubmit.disabled = false;
        btnSubmit.style.cursor = 'pointer';
        message.disabled = false;
        message.value = '';
    }
}

function showHistory(message, response) {
    var historyBox = document.getElementById('history');

    // My message
    var boxMyMessage = document.createElement('div');
    boxMyMessage.className = 'box-my-message';

    var myMessage = document.createElement('p');
    myMessage.className = 'my-message';
    myMessage.innerHTML = '<strong>Você:</strong> <br> '+ message;

    boxMyMessage.appendChild(myMessage);
    historyBox.appendChild(boxMyMessage);

    // Response message
    var boxResponseMessage = document.createElement('div');
    boxResponseMessage.className = 'box-response-message';

    var chatResponse = document.createElement('p');
    chatResponse.className = 'response-message';
    chatResponse.innerHTML = '<strong>DiferBot:</strong><br> ' + response;

    boxResponseMessage.appendChild(chatResponse);
    historyBox.appendChild(boxResponseMessage);

    // Levar scroll para o final
    historyBox.scrollTop = historyBox.scrollHeight;
}

function bemVindoAoSistema() {
    var historyBox = document.getElementById('history');

    // Mensagem de boas-vindas
    var boxWelcomeMessage = document.createElement('div');
    boxWelcomeMessage.className = 'box-welcome-message';

    var welcomeMessage = document.createElement('h3');
    welcomeMessage.id = 'fundo-msg';
    welcomeMessage.className = 'welcome-message';
    
    welcomeMessage.innerHTML = 'Bem-vindo ao sistema de chatbot da diferpan!<br>Insira no campo abaixo a sua dúvida.<br> Use uma das palavras chave abaixo:';
    welcomeMessage.innerHTML =  welcomeMessage.innerHTML + '<br><ul>';
    welcomeMessage.innerHTML =  welcomeMessage.innerHTML + '<li>força de vendas</li><li>atendente</li><li>sgd</li><li>erro</li>';
    welcomeMessage.innerHTML =  welcomeMessage.innerHTML + '<li>duvida</li><li>versovendas</li></ul>';

    boxWelcomeMessage.appendChild(welcomeMessage);
    historyBox.appendChild(boxWelcomeMessage);

    // Levar scroll para o final
    historyBox.scrollTop = historyBox.scrollHeight;
    solicitaFocoInput();
}


function verificaEnterPressionado(event) {
    
    if (event.key === "Enter") {
        sendMessage();
        solicitaFocoInput();
    }
}

function solicitaFocoInput(){
    var campoInput = document.getElementById("message-input");
    campoInput.focus();
}