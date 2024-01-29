const horaElement = document.getElementById("hora");

function atualizarHora() {
  const agora = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const horaFormatada = agora.toLocaleTimeString("pt-BR");
  const dataFormatada = agora.toLocaleDateString("pt-BR", options);
  horaElement.textContent = `Hora: ${horaFormatada} | Data: ${dataFormatada}`;
}

// Atualizar a hora a cada segundo
setInterval(atualizarHora, 1000);

// Chame a função uma vez para exibir a hora inicial
atualizarHora();
