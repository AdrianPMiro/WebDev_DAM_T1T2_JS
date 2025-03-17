document.addEventListener('DOMContentLoaded', function() {
  crearTabla('tabla', datos);
});

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
