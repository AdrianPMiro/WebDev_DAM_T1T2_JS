function focusTelefono(el) {
  const id = el.id;
  const elError = $(`${id}-error`);
  elError.innerHTML = "";
}

function formatearTelefono(el) {
  let numbers = el.value;
  numbers = numbers.replace(/\D/g, "");

  input = numbers.replace(/(\d{3})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4");
  el.value = input;
}

function validarTelefono(el) {
  const id = el.id;
  const val = el.value;
  const elError = $(`${id}-error`);
  const valNumber = val.split(" ").join("");
  if (val.length == "") {
    elError.innerHTML = "Teléfono es obligatorio";
    elError.style = "display:bock";
  } else if (valNumber.length !== 9) {
    elError.innerHTML = "Número inválido";
    elError.style = "display:bock";
  } else {
    elError.innerHTML = "";
    elError.style = "display:none";
    formatearTelefono(el);
  }
}
