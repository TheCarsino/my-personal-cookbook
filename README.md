# Recetario de la semana

Sitio estático con el plan de comidas de 4 semanas: menú de lunes a viernes, día por día, domingo de cocina, listas de compras con casillas, recetas y despensa. Hecho con [Astro](https://astro.build), sin frameworks de interfaz y con fuentes instaladas localmente (sin peticiones a CDNs externos).

## Requisitos

- Node.js 22.12 o superior
- npm

## Correr en local

```bash
npm install
npm run dev
```

Abre http://localhost:4321.

## Compilar

```bash
npm run build      # genera el sitio en dist/
npm run preview    # sirve dist/ para revisarlo
```

## Publicar en Vercel

1. Sube esta carpeta a un repositorio de GitHub, GitLab o Bitbucket.
2. En Vercel, elige **Add New > Project** e importa el repositorio.
3. Vercel detecta el framework **Astro** automáticamente.
4. Comando de build: `npm run build`. Carpeta de salida: `dist`.
5. Pulsa **Deploy**.

No hace falta `vercel.json` ni variables de entorno.

## Estructura

```
src/
  data/plan.json        datos del plan (semanas, recetas, despensa)
  lib/plan.ts           tipos, colores por semana y categoría, utilidades
  layouts/Base.astro    cabecera, navegación, pie y script de listas
  components/           Illus (ilustraciones SVG), Icon, Checklist, WeekBoard, PrintButton
  pages/
    index.astro         resumen de las 4 semanas
    semana/[n].astro    /semana/1 a /semana/4
    recetas/index.astro grilla con filtro por categoría
    recetas/[slug].astro una página por receta
    despensa.astro      imprescindibles, compra mensual, mezclas, toppings, duración
  styles/global.css
```

## Actualizar los datos

`src/data/plan.json` se genera con el exportador de Python a partir de los datos originales del plan:

```bash
python3 /home/claude/build/export_json.py
```

(el script lee `data.py` de su misma carpeta y escribe en `src/data/plan.json`). Después, `npm run build`.

## Listas de compras

Las casillas se guardan en el `localStorage` del navegador con el prefijo `recetario-v3:` (una clave por lista). Cada lista tiene su botón **Reiniciar lista**. Si el navegador bloquea el almacenamiento, las casillas siguen funcionando pero no se recuerdan.

## Imprimir

Las páginas de semana y de receta tienen el botón **Guardar como PDF**, que abre el diálogo de impresión con un estilo limpio sin navegación.
