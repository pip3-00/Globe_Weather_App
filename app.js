const apiKey = "2d2ac6e6f1c65a23e99ea83b4abece3b"; // API KEY de OpenWeatherMap (puedes usar la tuya propia)

// 🌍 Crear globo
const world = Globe()(document.getElementById('globe'))
  .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg');

// 🎮 CONTROLES PRO
const controls = world.controls();

// 🔥 Zoom tipo Google Earth
controls.minDistance = 30;   // más cerca 🔥
controls.maxDistance = 800;  // más lejos
controls.zoomSpeed = 2;      // zoom rápido

controls.enableZoom = true;
controls.enablePan = true;
controls.enableRotate = true;

// 🌍 CLICK GLOBAL
world.onGlobeClick(async ({ lat, lng }) => {

  console.log("CLICK:", lat, lng);

  // 🎥 Zoom fuerte al punto
  world.pointOfView({
    lat: lat,
    lng: lng,
    altitude: 0.8
  }, 800);

  // 📍 Limpiar y agregar marcador
  world.pointsData([]);
  world.pointsData([{ lat, lng }])
    .pointAltitude(0.03)
    .pointColor(() => 'red')
    .pointRadius(0.6);

  // 🌦️ Obtener clima
  try {
    document.getElementById('spinner').classList.remove('hidden');
    document.getElementById("result").innerHTML = "Cargando clima...";

    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${apiKey}`
    );

    if (!res.ok) throw new Error("Error API");

    const data = await res.json();
    const temp = Math.round(data.main.temp);
    const tempClass = temp < 10 ? 'cold' : temp < 20 ? 'warm' : 'hot';

    document.getElementById("result").innerHTML = `
      <h2>${data.name || "Ubicación"}</h2>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
      <h1>${temp}°C</h1>
      <p>${data.weather[0].description}</p>
      <small>Lat: ${lat.toFixed(2)} | Lon: ${lng.toFixed(2)}</small>
    `;
    document.getElementById("result").className = `mt-3 ${tempClass}`;
    document.getElementById("result").classList.add('show');

    document.getElementById('spinner').classList.add('hidden');

    world.pointsData([{ lat, lng }])
      .pointAltitude(0.03)
      .pointColor(() => '#00bfff')
      .pointRadius(0.8);

  } catch (err) {
    document.getElementById('spinner').classList.add('hidden');
    document.getElementById("result").innerHTML = "❌ Error al obtener clima";
  }
});

// 🔍 BÚSQUEDA MANUAL
async function getWeather() {
  const searchInput = document.getElementById("citySearch");
  const selectInput = document.getElementById("citySelect");

  // 🛡️ evitar null
  const searchValue = searchInput ? searchInput.value.trim() : "";
  const selectValue = selectInput ? selectInput.value : "";

  const city = searchValue || selectValue;

  if (!city) {
    alert("Ingresa o selecciona una ciudad");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`;

  try {
    document.getElementById('spinner').classList.remove('hidden');
    document.getElementById("result").innerHTML = "Cargando clima...";

    const response = await fetch(url);
    if (!response.ok) throw new Error("Ciudad no encontrada");

    const data = await response.json();

    const temp = Math.round(data.main.temp);
    const tempClass = temp < 10 ? 'cold' : temp < 20 ? 'warm' : 'hot';

    // 🎥 Zoom
    world.pointOfView({
      lat: data.coord.lat,
      lng: data.coord.lon,
      altitude: 0.8
    }, 800);

    // 📍 marcador
    world.pointsData([]);
    world.pointsData([{ lat: data.coord.lat, lng: data.coord.lon }])
      .pointAltitude(0.03)
      .pointColor(() => '#00bfff')
      .pointRadius(0.8);

    document.getElementById("result").innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
      <h1>${temp}°C</h1>
      <p>${data.weather[0].description}</p>
    `;
    document.getElementById("result").className = `mt-3 ${tempClass}`;
    document.getElementById("result").classList.add('show');

    document.getElementById('spinner').classList.add('hidden');

    // limpiar solo si existen
    if (searchInput) searchInput.value = "";
    if (selectInput) selectInput.value = "";

  } catch (error) {
    document.getElementById('spinner').classList.add('hidden');
    document.getElementById("result").innerHTML = "❌ " + error.message;
  }
}
