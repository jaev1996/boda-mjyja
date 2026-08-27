# boda-mjyja

Invitación de boda estática de una sola página (Astro 5 + Tailwind CSS, español).

## Comandos

```sh
pnpm dev        # servidor local
pnpm build      # genera dist/ para GitHub Pages
pnpm preview    # previsualiza build local
```

No hay lint, typecheck ni tests.

## CI/CD

- Rama `main` → GitHub Actions → build + deploy a GitHub Pages
- Node 22, pnpm 11
- URL del sitio: `https://jaev1996.github.io/boda-mjyja`
- Build config en `astro.config.mjs`: `site` apunta a GitHub Pages, `base: '/boda-mjyja'`, carpeta `assets`
- `astro.config.mjs` define `base: '/boda-mjyja'`; el build emite URLs con prefijo (`/boda-mjyja/assets/...`). El dev server corre en `/boda-mjyja/`

## Estructura

- Página única: `src/pages/index.astro` — importa ~11 componentes
- Componentes en `src/components/`
- Layout base en `src/layouts/BaseLayout.astro` — importa `src/styles/globals.css` (obligatorio, si no, el CSS manual no entra al bundle)
- `astro.config.mjs` usa `tailwind({ applyBaseStyles: false })` porque `globals.css` ya incluye las directivas `@tailwind`; el CSS propio va como reglas planas (fuera de `@layer`)
- Path alias `@/*` → `src/*` (definido en `tsconfig.json`)
- Google Fonts importadas en `globals.css`: Cormorant Garamond, Montserrat, Great Vibes
- Clases `.decor-line`, `.modal`, `.modal-content`, `.close-btn` y `.scrollbar-hide` son CSS manual en `globals.css`, no utilidades de Tailwind

## Tema Tailwind

Colores personalizados: `wedding-cream`, `wedding-sand`, `wedding-bronze`, `wedding-accent`, `wedding-gray` (#cbb6c0)
Fuentes: `font-serif` (Cormorant Garamond), `font-sans` (Montserrat), `font-script` (Great Vibes)

## Configuración externa

- **Google Sheets** — el RSVP form envía datos a un Google Apps Script Web App. La URL está configurada en `GOOGLE_SHEETS_URL` dentro de `RsvpForm.astro`. Si cambia, actualizar ahí.

## Notas

- Las imágenes van en `public/images/` y se referencian con `${import.meta.env.BASE_URL}/images/...` (obligatorio por el `base` de GitHub Pages). Actualmente: `pareja-boda.jpeg` (foto principal de la pareja, enmarcada en el Hero), `playa-atardecer.jpg` (imagen stock de Pexels descargada para el banner horizontal de SaveTheWeekend), `lidotel.jpg` (foto del hotel en la sección Hospedaje), `Fondo de agua.jpg` (fondo transparente del Hero), `palmera-jm.jpg` (monograma de palmera con iniciales en el Hero), `Palmeras.jpg` (foto de palmeras en SaveTheWeekend), `Cocteles.jpg` (foto de cocteles en CocktailSection), `ceremonia.jpg` (foto de ceremonia en WeddingSection), `Hotel de dia.png` / `Hotel de Noche.png` (fotos del hotel en Accommodation), `Dress Code 1.jpg` / `Dress Code 2.jpg` (imágenes de referencia de vestimenta, enlazadas desde Cocktail y Wedding)
- Scroll animations con clase `reveal` (elementos individuales) y `reveal-group` (revelado escalonado de tarjetas) + IntersectionObserver (en `index.astro`)