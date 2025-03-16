const config = {
  tiempoCarga: 10000,
};

const menuPaginas = [
  { pagina: "about.html", desc: "Quienes somos" },
  { pagina: "rescate.html", desc: "Rescate" },
  { pagina: "cuidado.html", desc: "Cuidado" },
  { pagina: "contacto.html", desc: "Contacto" },
  { pagina: "galery.html", desc: "Galería" },
  { pagina: "admin.html", desc: "Admin" },
];

const cargarLoadMensaje = () => {
  let loading = document.getElementById("loading-screen");
  let contenedor = document.getElementsByClassName("main-content")[0];

  loading.classList.add("fade-out");
  setTimeout(() => {
    loading.style.display = "none";
    contenedor.style.display = "flex";
  }, config.tiempoCarga);
};

const loadMenus = () => {
  cargarLoadMensaje();
  const navCont = document.getElementsByTagName("nav")[0];
  let a;
  menuPaginas.forEach((p) => {
    a = document.createElement("a");
    a.href = p.pagina;
    a.innerHTML = p.desc;
    navCont.appendChild(a);
  });
};
