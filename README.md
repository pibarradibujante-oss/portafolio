# Tu Portafolio — Guía rápida

## 1. Estructura del proyecto
```
portafolio/
├── index.html      → contenido de la página (textos, secciones)
├── style.css       → colores, tipografía, espaciados
├── script.js       → lista de tus piezas, filtros, galería
└── images/
    ├── dibujos/
    ├── ilustraciones/
    ├── tatuajes/
    └── diseno-grafico/
```

## 2. Abrir el proyecto en VS Code
1. Descomprime la carpeta `portafolio` donde quieras en tu computador.
2. Abre VS Code → **Archivo → Abrir carpeta...** → selecciona `portafolio`.
3. Instala la extensión **Live Server** (de Ritwick Dey) desde la pestaña de extensiones.
4. Clic derecho sobre `index.html` → **Open with Live Server**. Se abrirá tu página en el navegador y se actualiza sola cada vez que guardas un cambio.

## 3. Agregar tus imágenes
1. Copia tus imágenes dentro de la carpeta que corresponda, por ejemplo:
   `images/tatuajes/mi-tatuaje-1.jpg`
2. Abre `script.js` y edita la lista `PIEZAS` al inicio del archivo. Por cada trabajo:
   ```js
   { src: "images/tatuajes/mi-tatuaje-1.jpg", title: "Fénix brazo completo", category: "tatuajes" },
   ```
3. Agrega tantas líneas como piezas tengas. Mientras no exista la imagen, la página muestra automáticamente un recuadro de aviso — así sabes qué falta subir.

**Consejo:** usa imágenes en formato `.jpg` o `.webp`, no muy pesadas (idealmente menos de 1MB cada una) para que la página cargue rápido. Puedes comprimirlas gratis en [squoosh.app](https://squoosh.app).

## 4. Editar los textos
Todo el texto está en `index.html`:
- Tu nombre: busca `TU NOMBRE` (aparece en el logo y en el título grande).
- Sección "Sobre mí": reemplaza el texto de ejemplo por tu historia real.
- Sección "Contacto": cambia `tu@correo.com`, tu usuario de Instagram y tu número de WhatsApp.
- Título de la pestaña del navegador: la etiqueta `<title>` al inicio del archivo.

## 5. Cambiar colores (opcional)
Todos los colores están centralizados al inicio de `style.css`, dentro de `:root`. Cambia esos valores hexadecimales y se actualiza toda la página.

## 6. Publicar gratis en Vercel
1. Crea una cuenta gratis en [vercel.com](https://vercel.com) (puedes usar tu cuenta de GitHub, Google o email).
2. Sube tu carpeta `portafolio` a un repositorio de GitHub (gratis en [github.com](https://github.com)):
   - Crea un repositorio nuevo.
   - Arrastra los archivos de tu carpeta a la página del repositorio, o usa `git` desde la terminal de VS Code.
3. En Vercel: **Add New → Project** → selecciona tu repositorio de GitHub.
4. Como es HTML/CSS/JS simple, Vercel no necesita configuración especial: deja todo por defecto y da clic en **Deploy**.
5. En un par de minutos tendrás una URL pública gratis, tipo `tu-portafolio.vercel.app`.
6. Cada vez que hagas un cambio y lo subas a GitHub (`git push`), Vercel actualiza la página sola.

## 7. Dominio propio (opcional, más adelante)
Si algún día quieres algo como `tunombre.com` en vez de `tu-portafolio.vercel.app`, puedes comprar el dominio (unos $10-15 USD al año en Namecheap o similar) y conectarlo desde el panel de Vercel — el hosting sigue siendo gratis, solo pagas el dominio.
