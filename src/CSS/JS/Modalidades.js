document.addEventListener("DOMContentLoaded", function () {
  const imageContainers = document.querySelectorAll(".image-container");

  imageContainers.forEach((container) => {
    container.addEventListener("click", () => {
      const textoModalidade = container.querySelector(".textoModalidade");
      textoModalidade.classList.toggle("mostrar"); // Alterna a classe "mostrar" para exibir/ocultar o texto de descrição
    });
  });
});
