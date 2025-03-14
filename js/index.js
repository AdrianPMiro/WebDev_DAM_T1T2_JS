const $ = (id) => document.getElementById(id);

const anadir = () => {
  const voluntario = $("voluntario").value;
  const email = $("email").value;
  const telefono = $("telefono").value;
  const motivo = $("motivo").value;
  const otros = $("otros").value;
  const headColumns = ["voluntario", "email", "telefono", "motivo", "otros"];
  const values = [voluntario, email, telefono, motivo, otros];
  tr = document.createElement("tr");
  const contenedor = document.getElementsByTagName("tbody")[0];
  const contador = contenedor.childElementCount;
  tr.id = `tr-${contador}`;
  let tdEl;
  headColumns.forEach((name, i) => {
    tdEl = document.createElement("td");
    tdEl.id = `${name}-${i}`;
    tdEl.className = name;
    tdEl.innerHTML = values[i];
    tr.appendChild(tdEl);
  });
  tdEl = document.createElement("td");
  tdEl.setAttribute("style", "width: 250px");
  const btnAnadir = `<button id="aprobar-${contador}" onclick="aprobar(${contador})">Aprobar</button>`;
  const btnRevertir = `<button id="revertir-${contador}" onclick="revertir(${contador})" disabled>Revertir</button>`;
  const btnBorrar = `<button id="borrar-${contador}"onclick="borrar(${contador})">Borrar</button>`;

  tdEl.innerHTML = `<span>${btnAnadir} ${btnRevertir} ${btnBorrar}</span>`;
  tr.appendChild(tdEl);
  contenedor.appendChild(tr);
};

const aprobar = (index) => {
  const el = $(`tr-${index}`);
  el.setAttribute("style", "color: green;background: white;");
  const btnRevertir = $(`revertir-${index}`);
  btnRevertir.removeAttribute("disabled");
  const btnAprobar = $(`aprobar-${index}`);
  btnAprobar.setAttribute("disabled", true);
};

const revertir = (index) => {
  const el = $(`tr-${index}`);
  el.removeAttribute("style");
  const btnRevertir = $(`revertir-${index}`);
  btnRevertir.setAttribute("disabled", true);
  const btnAprobar = $(`aprobar-${index}`);
  btnAprobar.removeAttribute("disabled");
};

const borrar = (index) => {
  const conf = confirm("¿Estas seguro que quieres borrar estre registo?");
  if (conf) {
    document.getElementById(`tr-${index}`).remove();
  }
  console.log("borrar", index);
};

const capitalizar = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const crearTabla = (container, data) => {
  const headColumns = Object.keys(data[0]);
  const table = document.createElement("table");
  const tHead = document.createElement("thead");
  let thEl;
  const trH = document.createElement("tr");
  headColumns.forEach((th, i) => {
    thEl = document.createElement("th");
    thEl.innerHTML = capitalizar(th);
    trH.appendChild(thEl);
  });
  thEl = document.createElement("th");
  thEl.innerHTML = "Acciones";
  trH.append(thEl);
  tHead.append(trH);
  const tBody = document.createElement("tbody");
  let tdEl;
  let tr;
  data.forEach((td, i) => {
    tr = document.createElement("tr");
    tr.id = `tr-${i}`;
    headColumns.forEach((name) => {
      tdEl = document.createElement("td");
      tdEl.id = `${name}-${i}`;
      tdEl.className = name;
      tdEl.innerHTML = td[name];
      tr.appendChild(tdEl);
    });
    tdEl = document.createElement("td");
    tdEl.setAttribute("style", "width: 250px");
    const btnAnadir = `<button id="aprobar-${i}" onclick="aprobar(${i})">Aprobar</button>`;
    const btnRevertir = `<button id="revertir-${i}" onclick="revertir(${i})" disabled>Revertir</button>`;
    const btnBorrar = `<button id="borrar-${i}"onclick="borrar(${i})">Borrar</button>`;

    tdEl.innerHTML = `<span>${btnAnadir} ${btnRevertir} ${btnBorrar}</span>`;
    tr.appendChild(tdEl);
    tBody.appendChild(tr);
  });
  table.appendChild(tHead);
  table.appendChild(tBody);
  document.getElementById(container).appendChild(table);
};
