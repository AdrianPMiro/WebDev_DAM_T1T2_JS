function validarFormulario() {
  var nombre = document.getElementById("voluntario").value.trim();
  var email = document.getElementById("email").value.trim();
  var telefono = document.getElementById("telefono").value.trim();
  var motivo = document.getElementById("motivo").value;
  var nombreError = document.getElementById("voluntario-error");
  var emailError = document.getElementById("email-error");
  var telefonoError = document.getElementById("telefono-error");
  var motivoError = document.getElementById("motivo-error");
  
  nombreError.innerHTML = "";
  nombreError.style = "display:none";
  emailError.innerHTML = "";
  emailError.style = "display:none";
  telefonoError.innerHTML = "";
  telefonoError.style = "display:none";
  motivoError.innerHTML = "";
  motivoError.style = "display:none";
  
  var hayErrores = false;
  
  if (nombre === "") {
    nombreError.innerHTML = "El nombre es obligatorio";
    nombreError.style = "display:block";
    hayErrores = true;
  }
  
  if (email === "") {
    emailError.innerHTML = "El correo es obligatorio";
    emailError.style = "display:block";
    hayErrores = true;
  } else {
    let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    if (!regexEmail.test(email)) {
      emailError.innerHTML = "Por favor, introduce un email válido";
      emailError.style = "display:block";
      hayErrores = true;
    }
  }
  
  if (telefono === "") {
    telefonoError.innerHTML = "El teléfono es obligatorio";
    telefonoError.style = "display:block";
    hayErrores = true;
  } else {
    var soloDigitos = telefono.replace(/\D/g, "");
    if (soloDigitos.length !== 9) {
      telefonoError.innerHTML = "El teléfono debe tener 9 dígitos";
      telefonoError.style = "display:block";
      hayErrores = true;
    }
  }
  
  if (motivo === "" || motivo === "0" || motivo === "-1") {
    motivoError.innerHTML = "Debe seleccionar un motivo";
    motivoError.style = "display:block";
    hayErrores = true;
  }
  
  if (hayErrores) {
    return false;
  }

  return true;
}

crearTabla('tabla', datos);
		
function verificarLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const loginError = document.getElementById("login-error");
  const adminSection = document.getElementById("admin-section");
  
  if (username === "admin" && password === "1234") {
    loginError.innerHTML = "";
    adminSection.style.display = "block";
  } else {
    loginError.innerHTML = "Usuario o contraseña incorrectos";
    adminSection.style.display = "none";
  }
}

function inicializarTooltips() {
  document.getElementById("voluntario").title = "Ingrese su nombre completo";
  document.getElementById("email").title = "Formato: usuario@dominio.com";
  document.getElementById("telefono").title = "Debe contener 9 dígitos numéricos";
  document.getElementById("motivo").title = "Seleccione el motivo de su consulta";
  document.getElementById("otros").title = "Proporcione detalles adicionales si es necesario";
  document.getElementById("email").addEventListener("focus", function() {
    var tooltipBox = document.getElementById("tooltip-box");
    if (!tooltipBox) {
      tooltipBox = document.createElement("div");
      tooltipBox.id = "tooltip-box";
      tooltipBox.className = "tooltip-custom";
      this.parentNode.appendChild(tooltipBox);
    }
    tooltipBox.innerHTML = "Formato correcto: usuario@dominio.com";
    tooltipBox.style.display = "block";
  });
}
