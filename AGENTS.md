# boda-mjyja

Invitación de boda estática de una sola página (Astro 5 + Tailwind CSS, español).

## Comandos

```sh
pnpm dev        # servidor local (corre en /boda-mjyja/)
pnpm build      # genera dist/ para GitHub Pages
pnpm preview    # previsualiza build local
```

No hay lint, typecheck ni tests.

## CI/CD

- Rama `main` → GitHub Actions → build + deploy a GitHub Pages
- Node 22, pnpm 11
- URL del sitio: `https://jaev1996.github.io/boda-mjyja`
- `astro.config.mjs` define `site`, `base: '/boda-mjyja'` y `build.assets: 'assets'`; el build emite URLs con prefijo (`/boda-mjyja/assets/...`)

## Estructura

- Página única: `src/pages/index.astro` — importa 11 componentes (Hero, SaveTheWeekend, CocktailSection, WeddingSection, FlightsSection, Accommodation, GiftRegistry, GiftModal, InstagramSection, RsvpForm, Footer). El orden de import define el orden de las secciones; para añadir una sección: crear el componente e importarlo en `index.astro`
- Componentes en `src/components/`
- Layout base en `src/layouts/BaseLayout.astro` — importa `src/styles/globals.css` (obligatorio, si no, el CSS manual no entra al bundle)
- `astro.config.mjs` usa `tailwind({ applyBaseStyles: false })` porque `globals.css` ya incluye las directivas `@tailwind`; el CSS propio va como reglas planas (fuera de `@layer`)
- Path alias `@/*` → `src/*` (definido en `tsconfig.json`)
- Google Fonts importadas en `globals.css`: Cormorant Garamond, Montserrat, Great Vibes
- Clases `.decor-line`, `.modal`, `.modal-content`, `.close-btn`, `.scrollbar-hide`, `.monogram-oval` y `.photo-frame` son CSS manual en `globals.css`, no utilidades de Tailwind. `.photo-frame` (en `src/components/PhotoFrame.astro`) redondea y desvanece los bordes de las fotos al fondo; usarlo para fotos anchas en lugar de `<img>` directo

## Tema Tailwind

Colores personalizados: `wedding-cream`, `wedding-sand`, `wedding-bronze`, `wedding-accent`, `wedding-gray` (#cbb6c0)
Fuentes: `font-serif` (Cormorant Garamond), `font-sans` (Montserrat), `font-script` (Great Vibes)

## Configuración externa

- **Google Sheets** — el RSVP form envía datos a un Google Apps Script Web App. La URL está configurada en `GOOGLE_SHEETS_URL` dentro de `RsvpForm.astro`. Si cambia, actualizar ahí.

## Notas

- Las imágenes van en `public/images/` y se referencian con `${import.meta.env.BASE_URL}/images/...` (obligatorio por el `base` de GitHub Pages). En uso: `playa-atardecer.jpg` y `Palmeras.jpg` (SaveTheWeekend), `Fondo de agua.jpg` y `palmera-jm.jpg` (Hero), `Cocteles.jpg` (CocktailSection), `ceremonia.jpg` (WeddingSection), `Hotel de dia.png` (Accommodation), `Dress Code 1.jpg` / `Dress Code 2.jpg` (enlaces desde Cocktail y Wedding). Sin referencia en el código (huérfanas, candidatas a borrar): `pareja-boda.jpeg`, `lidotel.jpg`, `Hotel de Noche.png`, `j+m.jpeg`
- Scroll animations: `.reveal` inicia oculto y se revela al añadir `.in-view` vía IntersectionObserver (en `index.astro`, que observa solo `.reveal`). `.reveal-group` solo aplica el retardo escalonado a sus hijos que también tengan `.reveal` — cada tarjeta necesita su propia clase `.reveal`