# Plantilla de campaña · Municipio escolar

Plantilla reutilizable para la página de campaña de una lista al municipio escolar.
Hecha solo con **HTML, CSS y JavaScript** (sin frameworks, sin CDNs, sin instalar nada).
La candidata de ejemplo (**Camila Torres, Lista 3**) es ficticia: es el contenido de
muestra que reemplazas con el de tu campaña.

## Cómo usarla

1. Abre `index.html` en el navegador: ahí funciona todo, sin servidor ni internet.
2. Busca los comentarios `EDITA` en `index.html`: marcan cada texto por cambiar.
3. Las fotos marcadas con `FOTO` son ilustraciones provisorias: reemplázalas por tus fotos.
4. Borra el aviso superior cuando ya hayas reemplazado el contenido de ejemplo.

## Qué cambiar para tu campaña

| Qué | Dónde |
| --- | --- |
| Número de lista y nombre | `index.html` (marca del menú, héroe, cédula y «Cómo votar») |
| Eslogan y presentación | `index.html`, bloque HÉROE |
| Propuestas (título, regiduría, bullets y «Cómo») | `index.html`, sección PROPUESTAS — copia un `<li class="propuesta">` para agregar más (cambia sus ids `p1`, `p2`…) |
| Equipo (plancha) | `index.html`, sección PLANCHA — cargos, nombres y grados |
| Galería de actividades | `index.html`, sección GALERÍA — reemplaza cada `<svg>` marcado con FOTO por tus fotos (`<img>`) |
| Pasos para votar | `index.html`, sección CÓMO VOTAR |
| Colegio del pie | `index.html` (el año `<span id="anio">` se actualiza solo) |
| Colores, fuentes y radio de la página | variables al inicio de `styles.css` (`--papel`, `--tinta`, `--verde`, `--sol`, `--gris`) |

## Reemplazar las fotos

Los retratos y la galería usan `<svg>` marcados con el comentario `FOTO`.
Reemplaza cada uno por tu foto real y borra el `<span class="sintetico">` si existe:

```html
<img src="img/tu-foto.jpg" alt="Descripción de la foto">
```

Crea una carpeta `img/` junto a `index.html` y guarda ahí tus fotos.

## Estructura

```
index.html    estructura de la página + comentarios EDITA / FOTO
styles.css    paleta y tipografía (arriba) + componentes
script.js     menú móvil, acordeón de propuestas y efecto de scroll (no requiere edición)
```

## Publicarla en GitHub Pages

1. Sube este repositorio a tu cuenta de GitHub.
2. En el repo: **Settings → Pages → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**.
3. En un minuto la página vive en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`.

## Notas

- Los contrastes cumplen AA y el movimiento se apaga con `prefers-reduced-motion`.
- Usa fuentes del sistema: no carga nada desde internet y funciona sin conexión.
- El contenido de muestra es ficticio y está etiquetado como tal; no representa a
  persona ni candidatura real.
