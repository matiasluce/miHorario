// Obtener día actual (0 = domingo, 1 = lunes, etc)
const hoy = new Date().getDay();

const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
document.querySelector("h1").textContent = "Materias de " + dias[hoy];

// Objeto con materias por día
const materias = {
  1: ["Análisis Matemático 19:20 - 21:20", "Álgebra 21:20 - 22:00", "Álgebra 22:15 - 23:35"],     // Lunes
  2: ["Inglés 19:20 - 20:40", "Software Factory I 20:40 - 21:20", "Programación I 22:15 - 23:35"],               // Martes
  3: ["Software Factory I 19:20 - 20:40", "Análisis Matemático 20:40 - 22:00", "Programación I 22:15 - 23:35"],                   // Miércoles
  4: ["Física Básica 19:20 - 21:20", "Electrónica Analógica y Digital 21:20 - 22:00", "Electrónica Analógica y Digital 22:15 - 23:35"],        // Jueves
  5: ["Fundamentos de Economía y Contabilidad 19:20 - 20:40", "Ingeniería de requerimientos 20:40 - 22:00", "Estructura de datos y algoritmos 22:15 - 23:35"]                 // Viernes
};

// Obtener lista del HTML
const lista = document.getElementById("listaMaterias");

// Verificar si hay materias hoy
if (materias[hoy]) {
  materias[hoy].forEach(materia => {
    const li = document.createElement("li");
    li.textContent = materia;
    lista.appendChild(li);
  });
} else {
  lista.innerHTML = "<li>No tenés clases hoy 😎</li>";
}