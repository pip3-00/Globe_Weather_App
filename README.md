# 🌍 Globe Weather App

Aplicación web interactiva que combina un globo 3D tipo Google Earth con datos climáticos en tiempo real. Permite explorar el planeta, hacer zoom, seleccionar cualquier ubicación y obtener información del clima instantáneamente.

---

## 🚀 Demo

Explora el mundo haciendo clic en cualquier punto del globo 🌎
El sistema mostrará automáticamente el clima de esa ubicación.

live demo: https://pip3-00.github.io/Globe_Weather_App/
---

## ✨ Características

* 🌍 Globo terráqueo 3D interactivo
* 🖱️ Click en cualquier punto del planeta
* 🔍 Zoom dinámico tipo Google Earth
* 📍 Marcador visual en la ubicación seleccionada
* 🌦️ Datos climáticos en tiempo real
* 🔎 Búsqueda manual de ciudades
* 🎨 Interfaz estilo glassmorphism (tipo Apple)
* ⚡ Renderizado en tiempo real con WebGL

---

## 🧠 Tecnologías utilizadas

* HTML5
* CSS3 (Glassmorphism + diseño moderno)
* JavaScript (ES6+)
* Bootstrap 5
* API de clima: OpenWeather
* Renderizado 3D: Globe.gl (basado en Three.js)

---

## 📦 Instalación

1. Clona este repositorio:

```bash
git clone https://github.com/pip3-00/Globe_Weather_App
```

2. Abre `index.html` en tu navegador
   (o usa Live Server en VS Code)

---

## 🔑 Configuración

Necesitas una API Key de OpenWeather:

1. Crea una cuenta en OpenWeather
2. Copia tu API key
3. En `app.js`, reemplaza:

```javascript
const apiKey = "TU_API_KEY";
```

---

## 🧪 Uso

* Haz click en cualquier parte del globo → verás el clima
* Usa el buscador para consultar una ciudad específica
* Haz zoom con la rueda del mouse
* Arrastra para rotar el planeta

---

## ⚠️ Problemas comunes

* ❌ Error 401 → API key inválida o no activada
* ❌ No carga clima → revisa conexión o nombre de ciudad
* ❌ No funciona el click → verifica que no haya elementos bloqueando el canvas

---

## 🚀 Mejoras futuras

* 🌆 Mostrar nombres de ciudades en el mapa
* 📊 Historial de búsquedas
* 📍 Múltiples marcadores
* 🌐 Soporte multi-idioma
* 🎥 Animaciones más fluidas tipo Google Earth

---

## 💡 Aprendizajes

Este proyecto cubre:

* Manipulación del DOM
* Consumo de APIs (fetch)
* Renderizado 3D con WebGL
* Manejo de eventos en entornos interactivos
* UX/UI moderna

---

## 👩‍💻 Autor

Desarrollado por Daphne 🚀

---

## 📄 Licencia

Este proyecto es de uso educativo y personal.

