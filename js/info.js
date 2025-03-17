function iniciarPanelInformativo() {
    const panel = document.createElement("div");
    panel.id = "info-panel";
    panel.style.position = "fixed";
    panel.style.top = "100px";
    panel.style.right = "20px";
    panel.style.width = "300px";
    panel.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    panel.style.color = "white";
    panel.style.padding = "15px";
    panel.style.borderRadius = "8px";
    panel.style.fontSize = "1rem";
    panel.style.zIndex = "1000";
    panel.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
    panel.style.textAlign = "center";
    panel.style.lineHeight = "1.5";
  
    const titulo = document.createElement("h3");
    titulo.textContent = "Información en tiempo real";
    titulo.style.marginBottom = "10px";
    titulo.style.fontSize = "1.2rem";
    titulo.style.borderBottom = "1px solid white";
    titulo.style.paddingBottom = "5px";
  
    const reloj = document.createElement("p");
    reloj.id = "reloj";
    reloj.style.fontSize = "1.1rem";
    reloj.style.fontWeight = "bold";
    reloj.textContent = "Hora actual: cargando...";
  
    const idiomaTexto = document.createElement("p");
    idiomaTexto.textContent = "Tu lenguaje es:";
    idiomaTexto.style.marginTop = "5px";
    idiomaTexto.style.fontWeight = "bold";
  
    const idioma = document.createElement("p");
    idioma.id = "idioma";
    idioma.textContent = navigator.language;
    idioma.style.fontSize = "1rem";
    idioma.style.fontStyle = "italic";
  
    const ubicacionTitulo = document.createElement("p");
    ubicacionTitulo.textContent = "Nos visitas desde:";
    ubicacionTitulo.style.fontWeight = "bold";
    ubicacionTitulo.style.marginTop = "10px";
  
    const ubicacion = document.createElement("p");
    ubicacion.id = "ubicacion";
    ubicacion.textContent = "Obteniendo ubicación...";
    ubicacion.style.fontSize = "0.9rem";
    ubicacion.style.fontStyle = "italic";
  
    const mapaDiv = document.createElement("div");
    mapaDiv.id = "mapa";
    mapaDiv.style.width = "100%";
    mapaDiv.style.height = "200px";
    mapaDiv.style.marginTop = "10px";
    mapaDiv.style.border = "1px solid white";
    mapaDiv.style.borderRadius = "5px";
  
    panel.appendChild(titulo);
    panel.appendChild(reloj);
    panel.appendChild(idiomaTexto);
    panel.appendChild(idioma);
    panel.appendChild(ubicacionTitulo);
    panel.appendChild(ubicacion);
    panel.appendChild(mapaDiv);
  
    document.body.appendChild(panel);
  
    setInterval(() => {
      const ahora = new Date();
      const hora = ahora.toLocaleTimeString();
      reloj.textContent = `Hora actual: ${hora}`;
    }, 1000);
  
    var map = L.map('mapa').setView([0, 0], 1);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap',
        maxZoom: 18,
    }).addTo(map);
  
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = pos.coords.latitude.toFixed(2);
          const lon = pos.coords.longitude.toFixed(2);
          ubicacion.textContent = `Latitud: ${lat}, Longitud: ${lon}`;
          map.setView([lat, lon], 13);
          L.marker([lat, lon]).addTo(map)
            .bindPopup("Tu ubicación")
            .openPopup();
        },
        (err) => {
          ubicacion.textContent = "No se pudo obtener la ubicación.";
        }
      );
    } else {
      ubicacion.textContent = "Geolocalización no soportada.";
    }
  }
  window.addEventListener("load", iniciarPanelInformativo);
  