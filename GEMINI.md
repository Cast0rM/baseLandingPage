# Castor M. — Base Landing Page Template (GEMINI.md)

Este repositorio actúa como plantilla base y esqueleto rápido para nuevas landing pages de servicios en el ecosistema Castor M.

---

## 1. Identidad de Marca y Logo `castorm ▪`

- **Isotipo / Header**: `castorm` en minúsculas seguido de un bloque o dot sólido de **8x8px**: `castorm ▪`.
- **Favicon**: SVG cuadrado `#09090B`, monograma `cm` en `#FAFAFA` y bloque en color de acento del proyecto.
- **Paleta de Color Base**:
  - Fondo Primario: `#09090B` (Obsidian Dark)
  - Superficie: `#121215` / `#18181B`
  - Texto Primario: `#FAFAFA`
  - Texto Secundario: `#71717A`
  - **Dot / Acento**: Configurable según la temática de la landing page.
- **Tipografía**:
  - Titulares: `Bricolage Grotesque`.
  - Cuerpo: `Inter`.
  - Badges / Código: `JetBrains Mono`.

---

## 2. Estrategia de Ramas Git & CI/CD

- **Rama `develop` (Desarrollo & CI)**: Rama de desarrollo y pruebas. No despliega a producción.
- **Rama `main` (Producción & CD)**: Rama productiva con despliegue automático hacia el VPS.
  - **INCREMENTO DE VERSIÓN OBLIGATORIO**: Todo pase/merge a producción debe incrementar la versión en `package.json` (SemVer).

---

## 3. Docker & Despliegue Estándar

- Utiliza Dockerfile multi-stage con `node:22-alpine` y `nginx:alpine`.
- Red `castor-net` externa.
- Caché optimizada para assets estáticos y `index.html` sin caché.
