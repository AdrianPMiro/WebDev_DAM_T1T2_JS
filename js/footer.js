const config = {
  tiempoCarga: 10000,
};

const menuPaginas = [
  { pagina: "about.html", desc: "Quienes somos" },
  { pagina: "rescate.html", desc: "Rescate" },
  { pagina: "cuidado.html", desc: "Cuidado" },
  { pagina: "contacto.html", desc: "Contacto" },
  { pagina: "galery.html", desc: "Galería" },
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
  
  checkScreenWidth();
};

const checkScreenWidth = () => {
  if (screen.width < 700) {
    document.body.style.color = "#FFEB3B";
  } else {
    document.body.style.color = "";
  }
};
window.addEventListener('resize', checkScreenWidth);
