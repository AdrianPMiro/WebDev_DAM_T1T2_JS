function validarFormulario() {
  // Obtener los valores y quitar espacios en blanco
  var nombre = document.getElementById("nombre").value.trim();
  var email = document.getElementById("email").value.trim();
  var telefono = document.getElementById("telefono").value.trim();
  var motivo = document.getElementById("motivo").value;
  
  // Obtener elementos de error
  var nombreError = document.getElementById("voluntario-error");
  var emailError = document.getElementById("email-error");
  var telefonoError = document.getElementById("telefono-error");
  var motivoError = document.getElementById("motivo-error");
  
  // Reiniciar mensajes de error
  nombreError.innerHTML = "";
  nombreError.style = "display:none";
  emailError.innerHTML = "";
  emailError.style = "display:none";
  telefonoError.innerHTML = "";
  telefonoError.style = "display:none";
  motivoError.innerHTML = "";
  motivoError.style = "display:none";
  
  // Variable para verificar si hay errores
  var hayErrores = false;
  
  // Validar nombre
  if (nombre === "") {
    nombreError.innerHTML = "El nombre es obligatorio";
    nombreError.style = "display:block";
    hayErrores = true;
  }
  
  // Validar email
  if (email === "") {
    emailError.innerHTML = "El correo es obligatorio";
    emailError.style = "display:block";
    hayErrores = true;
  } else {
    var atIndex = email.indexOf("@");
    if (atIndex <= 0 || atIndex === email.length - 1) {
      emailError.innerHTML = "El correo debe tener texto antes y después del '@'";
      emailError.style = "display:block";
      hayErrores = true;
    }
  }
  
  // Validar teléfono
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
  
  // Validar motivo
  if (motivo === "" || motivo === "0" || motivo === "-1") {
    motivoError.innerHTML = "Debe seleccionar un motivo";
    motivoError.style = "display:block";
    hayErrores = true;
  }
  
  // Si hay errores, mostrar alerta general
  if (hayErrores) {
    return false;
  }

  // Si todo está bien, se envía el formulario
  return true;
}


// Genera la tabla usando los datos (js/datos.js)
crearTabla('tabla', datos);
		
// Función para verificar el login
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