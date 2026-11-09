
# Relevo — Web

Proyecto desarrollado para la asignatura Proyectos III de U-tad.

Relevo es una propuesta de aplicación web orientada a pequeños negocios que necesitan organizar los horarios de sus trabajadores y gestionar cambios de turno de una forma sencilla.

## Propuesta de valor

Relevo ayuda a responsables de pequeños negocios a organizar los horarios y las sustituciones de sus trabajadores, reduciendo las confusiones y facilitando la coordinación del equipo.

**Eslogan:** Tu tiempo merece horarios claros.​

## Caso de uso

Para el Sprint 2 hemos elegido como caso de referencia un gimnasio con clases de boxeo.

La situación que queremos representar es la necesidad de reorganizar una clase cuando un monitor no puede asistir y hay que buscar un sustituto.

El objetivo es mostrar cómo Relevo podría facilitar la organización de estos cambios.

## Tecnologías

- React
- JavaScript
- Vite
- CSS

## Ejecutar el proyecto

Instalar dependencias:

```bash
npm install
```

Iniciar el servidor de desarrollo:

```bash
npm run dev
```

Comprobar la compilación:

```bash
npm run build
```

## Organización del trabajo

### Unai — Primera parte

Responsable de preparar la estructura y desarrollar las primeras secciones.

- Configuración de React y Vite.
- Organización de archivos y componentes.
- Estilos generales y colores de Relevo.
- Header y navegación.
- Hero con propuesta de valor.
- Sección del problema.
- Diseño adaptable a diferentes pantallas.

Componentes principales:
- `Header.jsx`
- `Hero.jsx`
- `HeroPreview.jsx`
- `ProblemSection.jsx`

Los textos de estas secciones se centralizan en `src/content/siteContent.js`.

### Álvaro — Segunda parte

Responsable de completar la página con las siguientes secciones:

- Solución: explicar cómo Relevo resolvería el problema.
- Beneficios: mostrar las ventajas para responsables y trabajadores.
- Vídeo conceptual: integrar el vídeo de un minuto preparado por el equipo.
- CTA: llamada a la acción final dirigida a posibles usuarios.
- Integración de sus componentes con el diseño existente.

## Trabajo pendiente

### Contenido y diseño
- [ ] Confirmar los detalles del caso real con Guillermo.
- [ ] Validar los textos definitivos con el equipo.
- [ ] Incorporar imágenes del gimnasio con permiso de uso.
- [x] Añadir las secciones de Solución y Beneficios.
- [ ] Sustituir el espacio reservado por el vídeo conceptual.
- [x] Añadir la sección de llamada a la acción final.

### Integración y pruebas
- [ ] Comprobar la navegación entre todas las secciones.
- [ ] Revisar la visualización en móvil, tablet y ordenador.
- [ ] Verificar que no haya errores de compilación.
- [ ] Publicar la web en Vercel.
- [ ] Comprobar el enlace público y el vídeo integrado.
- [ ] Recoger las revisiones del equipo.

## Alcance del Sprint 2

La entrega consiste en una web one-page orientada a usuarios reales.

El backend es opcional y las funcionalidades pueden representarse de manera conceptual. No se presenta esta página como una aplicación completa de gestión de turnos.

El MVP propuesto para futuras fases se centra en consultar horarios, modificar turnos y comunicar los cambios a los trabajadores afectados.

## Equipo

Grupo 7 — Proyectos III.

Web: Unai y Álvaro.

Vídeo conceptual: Kevin y Kevin Fernández.

La web se completará de forma conjunta para su entrega en el Sprint 2.
