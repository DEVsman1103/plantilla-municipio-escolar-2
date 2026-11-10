// Interacciones básicas: menú móvil, acordeón de propuestas y efectos al hacer scroll.
// No necesitas editar este archivo para personalizar la página.
document.documentElement.classList.add("js");

// ---------- Menú móvil ----------
const menuBoton = document.querySelector(".menu-boton");
const nav = document.getElementById("menu-principal");

function cerrarMenu() {
  menuBoton.setAttribute("aria-expanded", "false");
  nav.classList.remove("abierto");
}

menuBoton.addEventListener("click", () => {
  const abierto = menuBoton.getAttribute("aria-expanded") === "true";
  menuBoton.setAttribute("aria-expanded", String(!abierto));
  nav.classList.toggle("abierto", !abierto);
});

nav.addEventListener("click", (e) => {
  if (e.target.closest("a")) cerrarMenu();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && nav.classList.contains("abierto")) {
    cerrarMenu();
    menuBoton.focus();
  }
});

// ---------- Acordeón de propuestas ----------
document.querySelectorAll(".propuesta__boton").forEach((boton) => {
  const panel = document.getElementById(boton.getAttribute("aria-controls"));
  boton.addEventListener("click", () => {
    const abierto = boton.getAttribute("aria-expanded") === "true";
    boton.setAttribute("aria-expanded", String(!abierto));
    panel.dataset.abierto = String(!abierto);
    panel.inert = abierto;
  });
  panel.inert = boton.getAttribute("aria-expanded") !== "true";
});

// ---------- Efecto al hacer scroll ----------
const elementos = document.querySelectorAll(".revelar");
if ("IntersectionObserver" in window) {
  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visible");
          observador.unobserve(entrada.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  elementos.forEach((el) => observador.observe(el));
} else {
  elementos.forEach((el) => el.classList.add("visible"));
}

// Año automático en el pie
const anio = document.getElementById("anio");
if (anio) anio.textContent = new Date().getFullYear();
