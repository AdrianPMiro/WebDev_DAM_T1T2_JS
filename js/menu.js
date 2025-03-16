// menu.js

// Menú para la página Rescate (voluntarios: David, Lucas, Sofía y Mateo)
function buildRescateVolunteerMenu() {
  const menuData = [
    {
      title: "David",
      mainLink: "#david",  // Al pulsar en "David" se dirigirá a <h2 id="david">David</h2>
      submenus: [
        { title: "Descripción", link: "#david-descripcion" },
        { title: "Profesión", link: "#david-profesion" },
        { title: "Hobbies", link: "#david-hobbies" }
      ]
    },
    {
      title: "Lucas",
      mainLink: "#lucas",
      submenus: [
        { title: "Descripción", link: "#lucas-descripcion" },
        { title: "Profesión", link: "#lucas-profesion" },
        { title: "Hobbies", link: "#lucas-hobbies" }
      ]
    },
    {
      title: "Sofía",
      mainLink: "#sofia",
      submenus: [
        { title: "Descripción", link: "#sofia-descripcion" },
        { title: "Profesión", link: "#sofia-profesion" },
        { title: "Hobbies", link: "#sofia-hobbies" }
      ]
    },
    {
      title: "Mateo",
      mainLink: "#mateo",
      submenus: [
        { title: "Descripción", link: "#mateo-descripcion" },
        { title: "Profesión", link: "#mateo-profesion" },
        { title: "Hobbies", link: "#mateo-hobbies" }
      ]
    }
  ];

  buildVolunteerMenu(menuData);
}

// Menú para la página Cuidado (ejemplo: Isabela, Valeria, Natalia y Camila)
function buildCuidadoVolunteerMenu() {
  const menuData = [
    {
      title: "Isabela",
      mainLink: "#isabela",
      submenus: [
        { title: "Descripción", link: "#isabela-descripcion" },
        { title: "Profesión", link: "#isabela-profesion" },
        { title: "Hobbies", link: "#isabela-hobbies" }
      ]
    },
    {
      title: "Valeria",
      mainLink: "#valeria",
      submenus: [
        { title: "Descripción", link: "#valeria-descripcion" },
        { title: "Profesión", link: "#valeria-profesion" },
        { title: "Hobbies", link: "#valeria-hobbies" }
      ]
    },
    {
      title: "Natalia",
      mainLink: "#natalia",
      submenus: [
        { title: "Descripción", link: "#natalia-descripcion" },
        { title: "Profesión", link: "#natalia-profesion" },
        { title: "Hobbies", link: "#natalia-hobbies" }
      ]
    },
    {
      title: "Camila",
      mainLink: "#camila",
      submenus: [
        { title: "Descripción", link: "#camila-descripcion" },
        { title: "Profesión", link: "#camila-profesion" },
        { title: "Hobbies", link: "#camila-hobbies" }
      ]
    }
  ];

  buildVolunteerMenu(menuData);
}

// Función genérica para construir el menú de voluntarios
function buildVolunteerMenu(menuData) {
  const menuContainer = document.getElementById("local-menu");
  if (!menuContainer) return;

  // Limpiar contenido previo (si lo hay)
  menuContainer.innerHTML = "";

  const ul = document.createElement("ul");
  ul.classList.add("volunteer-menu");

  menuData.forEach(vol => {
    const li = document.createElement("li");
    li.classList.add("volunteer-menu-item");

    // Elemento principal: nombre del voluntario
    const a = document.createElement("a");
    a.textContent = vol.title;
    a.href = vol.mainLink;  // Por ejemplo, "#david"
    li.appendChild(a);

    // Submenú: Descripción, Profesión y Hobbies
    const subUl = document.createElement("ul");
    subUl.classList.add("volunteer-submenu");

    vol.submenus.forEach(sub => {
      const subLi = document.createElement("li");
      subLi.classList.add("volunteer-submenu-item");

      const subA = document.createElement("a");
      subA.textContent = sub.title;
      subA.href = sub.link;  // Por ejemplo, "#david-descripcion"
      subLi.appendChild(subA);
      subUl.appendChild(subLi);
    });

    li.appendChild(subUl);
    ul.appendChild(li);
  });

  menuContainer.appendChild(ul);
}

// Función para configurar el comportamiento del botón "Sobre nosotros"
function setupVolunteerMenuToggle() {
  const toggleBtn = document.getElementById("toggleLocalMenu");
  const menuContainer = document.getElementById("local-menu");
  if (!toggleBtn || !menuContainer) return;

  toggleBtn.addEventListener("click", () => {
    if (menuContainer.style.display === "none" || menuContainer.style.display === "") {
      menuContainer.style.display = "block";
    } else {
      menuContainer.style.display = "none";
    }
  });
}
