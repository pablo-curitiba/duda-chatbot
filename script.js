const chatBox = document.getElementById("chat-box");
const chatForm = document.getElementById("chat-form");
const userInput = document.getElementById("user-input");

const respostas = {
  "qual é o prazo de inscrição?": "As inscrições vão de 10 a 30 de outubro de 2025.",
  "onde encontro o edital?": "Você pode acessar o edital completo no Portal RH, na seção 'Editais Abertos'.",
  "quem pode participar do edital 1?": "Servidores da categoria ASB que estejam em exercício na rede municipal.",
  "qual a carga horária prevista?": "A carga horária semanal é de 40 horas.",
  "como funciona a transição?": "A transição ocorre conforme as etapas descritas no edital, incluindo capacitação e lotação.",
};

function addMessage(text, sender = "bot") {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.innerText = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const pergunta = userInput.value.trim();
  if (pergunta === "") return;

  addMessage(pergunta, "user");

  const lowerPergunta = pergunta.toLowerCase();
  const resposta = respostas[lowerPergunta] || "Desculpe, ainda não sei responder isso. Que tal consultar o Portal RH?";
  setTimeout(() => addMessage(resposta), 500);

  userInput.value = "";
});

// Simula notificação automática depois de 10 segundos
setTimeout(() => {
  addMessage("📢 Aviso importante: Foi publicada uma retificação no Edital 1. Confira no Portal RH!", "bot");
}, 10000);
