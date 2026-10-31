const form = document.querySelector("#contact-form");
const statusMessage = document.querySelector("#form-status");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.reportValidity()) {
    return;
  }

  const name = form.elements.name.value.trim();
  statusMessage.textContent = `¡Gracias, ${name}! Tu mensaje fue enviado.`;
  form.reset();
});
