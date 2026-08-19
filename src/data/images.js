// Registro de ilustraciones procesadas (src/assets/img/*.png, color completo).
// Se importan como assets de Astro para que el build genere AVIF/WebP con
// srcset en los tamaños justos y reescalado de alta calidad (sharp).
const mods = import.meta.glob('../assets/img/*.png', { eager: true, import: 'default' });

export function img(key) {
  const m = mods[`../assets/img/${key}.png`];
  if (!m) throw new Error(`Imagen no encontrada: src/assets/img/${key}.png`);
  return m;
}
