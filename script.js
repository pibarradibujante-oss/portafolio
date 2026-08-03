if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}
window.scrollTo(0, 0);

/* ===================================================
   1. TUS PIEZAS
   ...
/* ===================================================
   1. TUS PIEZAS
   -----------------------------------------------------
   Agrega una línea por cada trabajo que quieras mostrar.
   - src: ruta a tu imagen (colócala en la carpeta images/<categoria>/)
   - title: nombre corto de la pieza
   - category: "dibujo" | "ilustración" | "tatuajes" | "diseno-grafico"

   Mientras no pongas una imagen real, se mostrará un
   recuadro de marcador de posición automáticamente.
=================================================== */
const PIEZAS = [
  { src: "images/dibujos/Dibujo_1.webp",   title: "Nombre de la pieza", category: "dibujo" },
  { src: "images/dibujos/Dibujo_2.webp",   title: "Nombre de la pieza", category: "dibujo" },
  { src: "images/dibujos/Dibujo_3.webp",   title: "Nombre de la pieza", category: "dibujo" },
  { src: "images/dibujos/Dibujo_4.webp",   title: "Nombre de la pieza", category: "dibujo" },
  { src: "images/dibujos/Dibujo_5.webp",   title: "Nombre de la pieza", category: "dibujo" },
  { src: "images/dibujos/Dibujo_6.webp",   title: "Nombre de la pieza", category: "dibujo" },
  { src: "images/dibujos/Dibujo_7.webp",   title: "Nombre de la pieza", category: "dibujo" },
  { src: "images/dibujos/Dibujo_8.webp",   title: "Nombre de la pieza", category: "dibujo" },
  { src: "images/dibujos/Dibujo_9.webp",   title: "Nombre de la pieza", category: "dibujo" },
  { src: "images/dibujos/Dibujo_10.webp",  title: "Nombre de la pieza", category: "dibujo" },
  { src: "images/dibujos/Dibujo_11.webp",  title: "Nombre de la pieza", category: "dibujo" },
  { src: "images/dibujos/Dibujo_12.webp",  title: "Nombre de la pieza", category: "dibujo" },
  { src: "images/dibujos/Dibujo_13.webp",  title: "Nombre de la pieza", category: "dibujo" },
  { src: "images/dibujos/Dibujo_14.webp",  title: "Nombre de la pieza", category: "dibujo" },
  { src: "images/dibujos/Dibujo_15.webp",  title: "Nombre de la pieza", category: "dibujo" },
  { src: "images/ilustraciones/Ilustracion_1.webp",  title: "Nombre de la pieza", category: "ilustración" },
  { src: "images/ilustraciones/Ilustracion_2.webp",  title: "Nombre de la pieza", category: "ilustración" },
  { src: "images/ilustraciones/Ilustracion_3.webp",  title: "Nombre de la pieza", category: "ilustración" },
  { src: "images/ilustraciones/Ilustracion_4.webp",  title: "Nombre de la pieza", category: "ilustración" },
  { src: "images/ilustraciones/Ilustracion_5.webp",  title: "Nombre de la pieza", category: "ilustración" },
  { src: "images/ilustraciones/Ilustracion_6.webp",  title: "Nombre de la pieza", category: "ilustración" },
  { src: "images/ilustraciones/Ilustracion_7.webp",  title: "Nombre de la pieza", category: "ilustración" },
  { src: "images/ilustraciones/Ilustracion_8.webp",  title: "Nombre de la pieza", category: "ilustración" },
  { src: "images/ilustraciones/Ilustracion_9.webp",  title: "Nombre de la pieza", category: "ilustración" },
  { src: "images/ilustraciones/Ilustracion_10.webp", title: "Nombre de la pieza", category: "ilustración" },
  { src: "images/ilustraciones/Ilustracion_11.webp",  title: "Nombre de la pieza", category: "ilustración" },
  { src: "images/ilustraciones/Ilustracion_12.webp",  title: "Nombre de la pieza", category: "ilustración" },
  { src: "images/ilustraciones/Ilustracion_13.webp", title: "Nombre de la pieza", category: "ilustración" },
  { src: "images/ilustraciones/Ilustracion_14.webp", title: "Nombre de la pieza", category: "ilustración" },
  { src: "images/ilustraciones/Ilustracion_15.webp", title: "Nombre de la pieza", category: "ilustración" },
  { src: "images/tatuajes/Tatuaje_1.webp",        title: "Nombre de la pieza", category: "tatuajes" },
  { src: "images/tatuajes/Tatuaje_3.webp",        title: "Nombre de la pieza", category: "tatuajes" },
  { src: "images/tatuajes/Tatuaje_4.webp",        title: "Nombre de la pieza", category: "tatuajes" },
  { src: "images/tatuajes/Tatuaje_5.webp",        title: "Nombre de la pieza", category: "tatuajes" },
  { src: "images/tatuajes/Tatuaje_6.webp",        title: "Nombre de la pieza", category: "tatuajes" },
  { src: "images/tatuajes/Tatuaje_7.webp",        title: "Nombre de la pieza", category: "tatuajes" },
  { src: "images/tatuajes/Tatuaje_8.webp",        title: "Nombre de la pieza", category: "tatuajes" },
  { src: "images/tatuajes/Tatuaje_9.webp",        title: "Nombre de la pieza", category: "tatuajes" },
  { src: "images/tatuajes/Tatuaje_10.webp",        title: "Nombre de la pieza", category: "tatuajes" },
  { src: "images/tatuajes/Tatuaje_11.webp",        title: "Nombre de la pieza", category: "tatuajes" },
  { src: "images/tatuajes/Tatuaje_12.webp",        title: "Nombre de la pieza", category: "tatuajes" },
  { src: "images/tatuajes/Tatuaje_13.webp",        title: "Nombre de la pieza", category: "tatuajes" },
  { src: "images/tatuajes/Tatuaje_14.webp",        title: "Nombre de la pieza", category: "tatuajes" },
  { src: "images/tatuajes/Tatuaje_15.webp",        title: "Nombre de la pieza", category: "tatuajes" },
  { src: "images/tatuajes/Tatuaje_16.webp",        title: "Nombre de la pieza", category: "tatuajes" },
  { src: "images/tatuajes/Tatuaje_17.webp",        title: "Nombre de la pieza", category: "tatuajes" },
  { src: "images/tatuajes/Tatuaje_18.webp",        title: "Nombre de la pieza", category: "tatuajes" },
  { src: "images/tatuajes/Tatuaje_19.webp",        title: "Nombre de la pieza", category: "tatuajes" },
  { src: "images/tatuajes/Tatuaje_20.webp",        title: "Nombre de la pieza", category: "tatuajes" },
];

const CATEGORY_LABELS = {
  "dibujo": "Dibujo",
  "ilustración": "Ilustración",
  "tatuajes": "Tatuaje",
};

/* ===================================================
   2. RENDER DE LA GALERÍA
=================================================== */
const gallery = document.getElementById("gallery");
function shuffle(array){
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
function renderGallery(){
  gallery.innerHTML = "";
  PIEZAS.forEach((piece, index) => {
    const card = document.createElement("div");
    card.className = "piece";
    card.dataset.category = piece.category;
    card.dataset.index = index;

    card.innerHTML = `
      <img class="piece-img" src="${piece.src}" alt="${piece.title}" loading="lazy">

    `;

    const img = card.querySelector(".piece-img");
    img.addEventListener("error", () => {
      card.classList.add("is-placeholder");
      img.outerHTML = `<div class="piece-img">Coloca aquí<br>${piece.src}</div>`;
    });

    card.addEventListener("click", () => openLightbox(index));
    gallery.appendChild(card);
  });
}
shuffle(PIEZAS);
renderGallery();

/* ===================================================
   3. SECCIONES Y FILTROS
   -----------------------------------------------------
   "sobre-mi" es su propia sección (no filtra la galería).
   El resto de los botones muestran la galería filtrada
   por categoría.
=================================================== */
const aboutSection = document.getElementById("sobre-mi");
const workSection = document.getElementById("trabajo");
const filterButtons = document.querySelectorAll(".filter-btn");

function activateSection(filter, { scroll = true } = {}){
  filterButtons.forEach(b => b.classList.toggle("is-active", b.dataset.filter === filter));

  if (filter === "sobre-mi") {
    workSection.classList.add("is-hidden");
    aboutSection.classList.remove("is-hidden");
    if (scroll) window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  aboutSection.classList.add("is-hidden");
  workSection.classList.remove("is-hidden");

  document.querySelectorAll(".piece").forEach(card => {
    const match = filter === "todo" || card.dataset.category === filter;
    card.classList.toggle("is-hidden", !match);
  });

  if (scroll) {
    // Sube hasta el inicio de la galería (dejando espacio para el header fijo)
    const headerHeight = document.querySelector(".site-header").offsetHeight;
    const galleryTop = gallery.getBoundingClientRect().top + window.scrollY - headerHeight - 20;
    window.scrollTo({ top: galleryTop, behavior: "smooth" });
  }
}

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => activateSection(btn.dataset.filter));
});

document.getElementById("brand-home").addEventListener("click", () => activateSection("sobre-mi"));

// Estado inicial: "Sobre mí" como página principal
activateSection("sobre-mi", { scroll: false });
 
/* ===================================================
   4. LIGHTBOX
=================================================== */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = document.querySelector(".lightbox-close");
const lightboxPrev = document.querySelector(".lightbox-prev");
const lightboxNext = document.querySelector(".lightbox-next");

let currentIndex = 0;

function isCardHidden(index){
  const card = gallery.querySelector(`.piece[data-index="${index}"]`);
  return !card || card.classList.contains("is-hidden");
}

function showLightboxImage(){
  const piece = PIEZAS[currentIndex];
  lightboxImg.src = piece.src;
  lightboxImg.alt = piece.title;
}

function openLightbox(index){
  currentIndex = index;
  showLightboxImage();
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox(){
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function goNext(){
  let next = currentIndex;
  for (let i = 0; i < PIEZAS.length; i++) {
    next = (next + 1) % PIEZAS.length;
    if (!isCardHidden(next)) { currentIndex = next; break; }
  }
  showLightboxImage();
}

function goPrev(){
  let prev = currentIndex;
  for (let i = 0; i < PIEZAS.length; i++) {
    prev = (prev - 1 + PIEZAS.length) % PIEZAS.length;
    if (!isCardHidden(prev)) { currentIndex = prev; break; }
  }
  showLightboxImage();
}

lightboxClose.addEventListener("click", closeLightbox);
lightboxNext.addEventListener("click", goNext);
lightboxPrev.addEventListener("click", goPrev);
lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("is-open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") goNext();
  if (e.key === "ArrowLeft") goPrev();
});

/* ===================================================
   6. AÑO EN EL FOOTER
=================================================== */
document.getElementById("year").textContent = new Date().getFullYear();