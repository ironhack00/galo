# GALO Marketing — Sitio web

Sitio institucional **100 % estático** de GALO Marketing, consultora de marketing
en Puerto Rico, Misiones. Construido con [Astro](https://astro.build).

## Stack

- **Astro 4** — genera HTML estático, cero JS por defecto (solo el mínimo para el
  menú mobile y el carrusel). Ideal para SEO y performance (Lighthouse ~100).
- **CSS moderno** con variables y estilos scoped por componente. Sin frameworks
  de UI: diseño a medida, fiel a la maqueta.
- **Tipografías**: Fredoka (títulos) + Poppins (texto), vía Google Fonts.

## Comandos

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo → http://localhost:4321
npm run build    # genera el sitio estático en /dist
npm run preview  # previsualiza /dist localmente
```

## Deploy (subir como estático)

`npm run build` deja todo listo en la carpeta **`dist/`**. Se sube tal cual a
cualquier hosting estático:

- **Netlify / Vercel**: conectar el repo y usar `build command: npm run build`,
  `publish directory: dist`. (O arrastrar la carpeta `dist/` a Netlify Drop.)
- **GitHub Pages / cPanel / S3**: subir el contenido de `dist/`.

## Estructura

```
public/
  favicon.svg
  assets/
    img/     ← ilustraciones 3D, fondos y foto del fundador (PNG estáticos)
    icons/   ← íconos SVG (redes, servicios, triángulo, gaviota)
src/
  data/site.js          ← TODO el contenido (textos, servicios, blogs, contacto)
  layouts/Base.astro    ← <head>, header, footer, WhatsApp, SEO/OpenGraph
  components/            ← Header, Footer, Hero, ServiceCard, secciones, etc.
  pages/
    index.astro                 ← Home (hero + servicios + fundador + contacto)
    nosotros.astro              ← Pilares + significado de marca + fundador
    blogs.astro                 ← Listado de artículos
    contacto.astro              ← Página de contacto
    servicios/[slug].astro      ← 6 páginas de servicio (generadas)
    blog/[slug].astro           ← detalle de artículo (generado)
    404.astro
```

## Editar contenido

Casi todo se edita en **`src/data/site.js`**: datos de contacto, redes, servicios,
pilares, blogs y textos del fundador. Las imágenes viven en `public/assets/` y se
sirven sin procesar (estáticas).

## Notas

- El **formulario de contacto** abre WhatsApp con la consulta pre-armada (no
  requiere backend). Para recibirlo por email se puede conectar a Formspree,
  Netlify Forms o similar cambiando el `<form>` en `ContactSection.astro`.
- El **mapa** es un embed de Google Maps (sin API key).

_Desarrollo: GGF._
