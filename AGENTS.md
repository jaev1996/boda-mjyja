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
- URL del sitio: `https://jaev.github.io/boda-mjyja`
- Build config en `astro.config.mjs`: `site` apunta a GitHub Pages, carpeta `assets`

## Estructura

- Página única: `src/pages/index.astro` — importa ~12 componentes
- Componentes en `src/components/`
- Layout base en `src/layouts/BaseLayout.astro`
- Estilos globales en `src/styles/globals.css`
- Path alias `@/*` → `src/*` (definido en `tsconfig.json`)
- Google Fonts importadas en `globals.css`: Cormorant Garamond, Montserrat, Great Vibes

## Tema Tailwind

Colores personalizados: `wedding-cream`, `wedding-sand`, `wedding-bronze`, `wedding-accent`
Fuentes: `font-serif` (Cormorant Garamond), `font-sans` (Montserrat), `font-script` (Great Vibes)

## Configuración externa

- **Google Sheets** — el RSVP form envía datos a un Google Apps Script Web App. La URL está configurada en `GOOGLE_SHEETS_URL` dentro de `RsvpForm.astro`. Si cambia, actualizar ahí.

## Notas

- Las imágenes de assets van en `public/images/` (referenciadas como `/images/...`)
- Scroll animations con clase `fade-in` + IntersectionObserver (en `index.astro`)