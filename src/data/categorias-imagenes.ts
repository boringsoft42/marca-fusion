// Sistema simplificado: Categorías con TODAS sus imágenes
// Cada categoría muestra todas las imágenes de su carpeta

export interface CategoriaConImagenes {
  id: string;
  nombre: string;
  slug: string;
  descripcion: string;
  color: string;
  imagenPortada: string;
  todasLasImagenes: string[];
}

export const categoriasConImagenes: CategoriaConImagenes[] = [
  {
    id: 'colecciones-especiales',
    nombre: 'Colecciones Especiales',
    slug: 'colecciones-especiales',
    descripcion: 'Diseños temáticos únicos con personajes y estilos especiales',
    color: 'bg-yellow-500 hover:bg-yellow-600',
    imagenPortada: '/Productos para Catálogo/COLECCIONES ESPECIALES/Snoopy 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.00 (3).jpeg',
    todasLasImagenes: [
      // Aurora Plantas
      '/Productos para Catálogo/COLECCIONES ESPECIALES/Aurora Plantas 60x40 70x45 80x60/Captura de pantalla 2026-01-06 164455.png',
      '/Productos para Catálogo/COLECCIONES ESPECIALES/Aurora Plantas 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.03 (3).jpeg',
      '/Productos para Catálogo/COLECCIONES ESPECIALES/Aurora Plantas 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.03 (4).jpeg',
      '/Productos para Catálogo/COLECCIONES ESPECIALES/Aurora Plantas 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.03 (5).jpeg',
      '/Productos para Catálogo/COLECCIONES ESPECIALES/Aurora Plantas 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.04 (1).jpeg',
      '/Productos para Catálogo/COLECCIONES ESPECIALES/Aurora Plantas 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.04.jpeg',
      '/Productos para Catálogo/COLECCIONES ESPECIALES/Aurora Plantas 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.05 (1).jpeg',
      '/Productos para Catálogo/COLECCIONES ESPECIALES/Aurora Plantas 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.05 (2).jpeg',
      '/Productos para Catálogo/COLECCIONES ESPECIALES/Aurora Plantas 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.05 (3).jpeg',
      '/Productos para Catálogo/COLECCIONES ESPECIALES/Aurora Plantas 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.05 (4).jpeg',
      '/Productos para Catálogo/COLECCIONES ESPECIALES/Aurora Plantas 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.05 (5).jpeg',
      // Barbie
      '/Productos para Catálogo/COLECCIONES ESPECIALES/Barbie 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.07 (2).jpeg',
      '/Productos para Catálogo/COLECCIONES ESPECIALES/Barbie 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.07 (3).jpeg',
      '/Productos para Catálogo/COLECCIONES ESPECIALES/Barbie 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.07 (4).jpeg',
      '/Productos para Catálogo/COLECCIONES ESPECIALES/Barbie 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.07 (6).jpeg',
      '/Productos para Catálogo/COLECCIONES ESPECIALES/Barbie 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.08 (1).jpeg',
      '/Productos para Catálogo/COLECCIONES ESPECIALES/Barbie 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.08 (2).jpeg',
      '/Productos para Catálogo/COLECCIONES ESPECIALES/Barbie 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.08 (3).jpeg',
      '/Productos para Catálogo/COLECCIONES ESPECIALES/Barbie 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.08 (4).jpeg',
      '/Productos para Catálogo/COLECCIONES ESPECIALES/Barbie 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.08 (5).jpeg',
      '/Productos para Catálogo/COLECCIONES ESPECIALES/Barbie 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.09.jpeg',
      // Snoopy
      '/Productos para Catálogo/COLECCIONES ESPECIALES/Snoopy 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.00 (3).jpeg',
      '/Productos para Catálogo/COLECCIONES ESPECIALES/Snoopy 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.01 (1).jpeg',
      '/Productos para Catálogo/COLECCIONES ESPECIALES/Snoopy 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.01 (2).jpeg',
      '/Productos para Catálogo/COLECCIONES ESPECIALES/Snoopy 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.01 (3).jpeg',
      '/Productos para Catálogo/COLECCIONES ESPECIALES/Snoopy 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.01 (4).jpeg',
      '/Productos para Catálogo/COLECCIONES ESPECIALES/Snoopy 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.01.jpeg',
      // Stitch
      '/Productos para Catálogo/COLECCIONES ESPECIALES/Stitch 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.02 (1).jpeg',
      '/Productos para Catálogo/COLECCIONES ESPECIALES/Stitch 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.02 (2).jpeg',
      '/Productos para Catálogo/COLECCIONES ESPECIALES/Stitch 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.02 (3).jpeg',
      '/Productos para Catálogo/COLECCIONES ESPECIALES/Stitch 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.02 (4).jpeg',
      '/Productos para Catálogo/COLECCIONES ESPECIALES/Stitch 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.02.jpeg',
      '/Productos para Catálogo/COLECCIONES ESPECIALES/Stitch 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.03 (1).jpeg',
      '/Productos para Catálogo/COLECCIONES ESPECIALES/Stitch 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.03.jpeg',
    ],
  },
  {
    id: 'dark-style',
    nombre: 'Dark Style',
    slug: 'dark-style',
    descripcion: 'Diseños elegantes y minimalistas en tonos oscuros',
    color: 'bg-purple-900 hover:bg-purple-950',
    imagenPortada: '/Productos para Catálogo/DARK STYLE/60X40/Captura de pantalla 2026-01-06 164358.png',
    todasLasImagenes: [
      // 60X40
      '/Productos para Catálogo/DARK STYLE/60X40/Captura de pantalla 2026-01-06 164358.png',
      '/Productos para Catálogo/DARK STYLE/60X40/Captura de pantalla 2026-01-07 152108.png',
      '/Productos para Catálogo/DARK STYLE/60X40/Captura de pantalla 2026-01-07 152120.png',
      '/Productos para Catálogo/DARK STYLE/60X40/Captura de pantalla 2026-01-07 152130.png',
      '/Productos para Catálogo/DARK STYLE/60X40/Captura de pantalla 2026-01-07 152139.png',
      '/Productos para Catálogo/DARK STYLE/60X40/Captura de pantalla 2026-01-07 152151.png',
      '/Productos para Catálogo/DARK STYLE/60X40/Captura de pantalla 2026-01-07 152200.png',
      '/Productos para Catálogo/DARK STYLE/60X40/Captura de pantalla 2026-01-07 152209.png',
      // 80X60
      '/Productos para Catálogo/DARK STYLE/80X60/Captura de pantalla 2026-01-07 152329.png',
      '/Productos para Catálogo/DARK STYLE/80X60/Captura de pantalla 2026-01-07 152340.png',
      '/Productos para Catálogo/DARK STYLE/80X60/Captura de pantalla 2026-01-07 152349.png',
      '/Productos para Catálogo/DARK STYLE/80X60/Captura de pantalla 2026-01-07 152358.png',
      '/Productos para Catálogo/DARK STYLE/80X60/Captura de pantalla 2026-01-07 152407.png',
      '/Productos para Catálogo/DARK STYLE/80X60/Captura de pantalla 2026-01-07 152424.png',
      '/Productos para Catálogo/DARK STYLE/80X60/Captura de pantalla 2026-01-07 152441.png',
      '/Productos para Catálogo/DARK STYLE/80X60/Captura de pantalla 2026-01-07 152452.png',
    ],
  },
  {
    id: 'hogar-y-rutinas',
    nombre: 'Hogar y Rutinas',
    slug: 'hogar-y-rutinas',
    descripcion: 'Organiza tu hogar y rutinas diarias',
    color: 'bg-green-500 hover:bg-green-600',
    imagenPortada: '/Productos para Catálogo/HOGAR Y RUTINAS/Mi Menú para pared 40x30 60x40/WhatsApp Image 2026-01-07 at 14.46.58 (1).jpeg',
    todasLasImagenes: [
      // Imantados
      '/Productos para Catálogo/HOGAR Y RUTINAS/Imantados 30x20 40x30/WhatsApp Image 2026-01-07 at 14.46.59 (4).jpeg',
      '/Productos para Catálogo/HOGAR Y RUTINAS/Imantados 30x20 40x30/WhatsApp Image 2026-01-07 at 14.47.00 (1).jpeg',
      '/Productos para Catálogo/HOGAR Y RUTINAS/Imantados 30x20 40x30/WhatsApp Image 2026-01-07 at 14.47.00 (2).jpeg',
      '/Productos para Catálogo/HOGAR Y RUTINAS/Imantados 30x20 40x30/WhatsApp Image 2026-01-07 at 14.47.00.jpeg',
      // Mi Menú
      '/Productos para Catálogo/HOGAR Y RUTINAS/Mi Menú para pared 40x30 60x40/WhatsApp Image 2026-01-07 at 14.46.58 (1).jpeg',
      '/Productos para Catálogo/HOGAR Y RUTINAS/Mi Menú para pared 40x30 60x40/WhatsApp Image 2026-01-07 at 14.46.59 (1).jpeg',
      '/Productos para Catálogo/HOGAR Y RUTINAS/Mi Menú para pared 40x30 60x40/WhatsApp Image 2026-01-07 at 14.46.59 (2).jpeg',
      '/Productos para Catálogo/HOGAR Y RUTINAS/Mi Menú para pared 40x30 60x40/WhatsApp Image 2026-01-07 at 14.46.59 (5).jpeg',
      '/Productos para Catálogo/HOGAR Y RUTINAS/Mi Menú para pared 40x30 60x40/WhatsApp Image 2026-01-07 at 14.46.59 (8).jpeg',
    ],
  },
  {
    id: 'home-office',
    nombre: 'Home Office',
    slug: 'home-office',
    descripcion: 'Ideal para tu espacio de trabajo en casa',
    color: 'bg-blue-500 hover:bg-blue-600',
    imagenPortada: '/Productos para Catálogo/HOME OFFICE/MANDALAS 60X40 70X45 80X60/WhatsApp Image 2026-01-07 at 14.47.14 (2).jpeg',
    todasLasImagenes: [
      // Mandalas
      '/Productos para Catálogo/HOME OFFICE/MANDALAS 60X40 70X45 80X60/WhatsApp Image 2026-01-07 at 14.47.14 (2).jpeg',
      '/Productos para Catálogo/HOME OFFICE/MANDALAS 60X40 70X45 80X60/WhatsApp Image 2026-01-07 at 14.47.14 (3).jpeg',
      '/Productos para Catálogo/HOME OFFICE/MANDALAS 60X40 70X45 80X60/WhatsApp Image 2026-01-07 at 14.47.14 (4).jpeg',
      '/Productos para Catálogo/HOME OFFICE/MANDALAS 60X40 70X45 80X60/WhatsApp Image 2026-01-07 at 14.47.14 (5).jpeg',
      '/Productos para Catálogo/HOME OFFICE/MANDALAS 60X40 70X45 80X60/WhatsApp Image 2026-01-07 at 14.47.15 (1).jpeg',
      '/Productos para Catálogo/HOME OFFICE/MANDALAS 60X40 70X45 80X60/WhatsApp Image 2026-01-07 at 14.47.15 (2).jpeg',
      '/Productos para Catálogo/HOME OFFICE/MANDALAS 60X40 70X45 80X60/WhatsApp Image 2026-01-07 at 14.47.15 (3).jpeg',
      '/Productos para Catálogo/HOME OFFICE/MANDALAS 60X40 70X45 80X60/WhatsApp Image 2026-01-07 at 14.47.15 (4).jpeg',
      '/Productos para Catálogo/HOME OFFICE/MANDALAS 60X40 70X45 80X60/WhatsApp Image 2026-01-07 at 14.47.15 (5).jpeg',
      '/Productos para Catálogo/HOME OFFICE/MANDALAS 60X40 70X45 80X60/WhatsApp Image 2026-01-07 at 14.47.15 (6).jpeg',
      '/Productos para Catálogo/HOME OFFICE/MANDALAS 60X40 70X45 80X60/WhatsApp Image 2026-01-07 at 14.47.15 (7).jpeg',
      '/Productos para Catálogo/HOME OFFICE/MANDALAS 60X40 70X45 80X60/WhatsApp Image 2026-01-07 at 14.47.15.jpeg',
      // Mariposas
      '/Productos para Catálogo/HOME OFFICE/MARIPOSAS 60X40 70X45 80X60/WhatsApp Image 2026-01-07 at 14.47.03 (2).jpeg',
      '/Productos para Catálogo/HOME OFFICE/MARIPOSAS 60X40 70X45 80X60/WhatsApp Image 2026-01-07 at 14.47.16 (1).jpeg',
      '/Productos para Catálogo/HOME OFFICE/MARIPOSAS 60X40 70X45 80X60/WhatsApp Image 2026-01-07 at 14.47.16 (2).jpeg',
      '/Productos para Catálogo/HOME OFFICE/MARIPOSAS 60X40 70X45 80X60/WhatsApp Image 2026-01-07 at 14.47.16 (3).jpeg',
      '/Productos para Catálogo/HOME OFFICE/MARIPOSAS 60X40 70X45 80X60/WhatsApp Image 2026-01-07 at 14.47.16 (4).jpeg',
      '/Productos para Catálogo/HOME OFFICE/MARIPOSAS 60X40 70X45 80X60/WhatsApp Image 2026-01-07 at 14.47.16.jpeg',
      '/Productos para Catálogo/HOME OFFICE/MARIPOSAS 60X40 70X45 80X60/WhatsApp Image 2026-01-07 at 14.47.17.jpeg',
    ],
  },
  {
    id: 'ninos-y-jovenes',
    nombre: 'Niños y Jóvenes',
    slug: 'ninos-y-jovenes',
    descripcion: 'Planners especiales para niños y adolescentes',
    color: 'bg-purple-500 hover:bg-purple-600',
    imagenPortada: '/Productos para Catálogo/NIÑOS Y JÓVENES/Rutinas 40x30/WhatsApp Image 2026-01-07 at 14.47.09 (1).jpeg',
    todasLasImagenes: [
      // Actividades Recompensas
      '/Productos para Catálogo/NIÑOS Y JÓVENES/Actividades Recomensas 40x30 60x40 80x60/Captura de pantalla 2026-01-06 164529.png',
      '/Productos para Catálogo/NIÑOS Y JÓVENES/Actividades Recomensas 40x30 60x40 80x60/Captura de pantalla 2026-01-07 150436.png',
      '/Productos para Catálogo/NIÑOS Y JÓVENES/Actividades Recomensas 40x30 60x40 80x60/Captura de pantalla 2026-01-07 150451.png',
      '/Productos para Catálogo/NIÑOS Y JÓVENES/Actividades Recomensas 40x30 60x40 80x60/Captura de pantalla 2026-01-07 150502.png',
      '/Productos para Catálogo/NIÑOS Y JÓVENES/Actividades Recomensas 40x30 60x40 80x60/Captura de pantalla 2026-01-07 150513.png',
      '/Productos para Catálogo/NIÑOS Y JÓVENES/Actividades Recomensas 40x30 60x40 80x60/Captura de pantalla 2026-01-07 150525.png',
      '/Productos para Catálogo/NIÑOS Y JÓVENES/Actividades Recomensas 40x30 60x40 80x60/Captura de pantalla 2026-01-07 150539.png',
      '/Productos para Catálogo/NIÑOS Y JÓVENES/Actividades Recomensas 40x30 60x40 80x60/Captura de pantalla 2026-01-07 150552.png',
      '/Productos para Catálogo/NIÑOS Y JÓVENES/Actividades Recomensas 40x30 60x40 80x60/Captura de pantalla 2026-01-07 150609.png',
      // Horario Escolar
      '/Productos para Catálogo/NIÑOS Y JÓVENES/Horario Escolar 70x45/WhatsApp Image 2026-01-07 at 14.47.12 (3).jpeg',
      '/Productos para Catálogo/NIÑOS Y JÓVENES/Horario Escolar 70x45/WhatsApp Image 2026-01-07 at 14.47.12 (4).jpeg',
      '/Productos para Catálogo/NIÑOS Y JÓVENES/Horario Escolar 70x45/WhatsApp Image 2026-01-07 at 14.47.12 (5).jpeg',
      '/Productos para Catálogo/NIÑOS Y JÓVENES/Horario Escolar 70x45/WhatsApp Image 2026-01-07 at 14.47.12 (6).jpeg',
      '/Productos para Catálogo/NIÑOS Y JÓVENES/Horario Escolar 70x45/WhatsApp Image 2026-01-07 at 14.47.13 (3).jpeg',
      '/Productos para Catálogo/NIÑOS Y JÓVENES/Horario Escolar 70x45/WhatsApp Image 2026-01-07 at 14.47.13 (4).jpeg',
      '/Productos para Catálogo/NIÑOS Y JÓVENES/Horario Escolar 70x45/WhatsApp Image 2026-01-07 at 14.47.13 (5).jpeg',
      '/Productos para Catálogo/NIÑOS Y JÓVENES/Horario Escolar 70x45/WhatsApp Image 2026-01-07 at 14.47.13 (6).jpeg',
      '/Productos para Catálogo/NIÑOS Y JÓVENES/Horario Escolar 70x45/WhatsApp Image 2026-01-07 at 14.47.13.jpeg',
      '/Productos para Catálogo/NIÑOS Y JÓVENES/Horario Escolar 70x45/WhatsApp Image 2026-01-07 at 14.47.14.jpeg',
      // Rutinas 40x30
      '/Productos para Catálogo/NIÑOS Y JÓVENES/Rutinas 40x30/WhatsApp Image 2026-01-07 at 14.47.09 (1).jpeg',
      '/Productos para Catálogo/NIÑOS Y JÓVENES/Rutinas 40x30/WhatsApp Image 2026-01-07 at 14.47.09 (2).jpeg',
      '/Productos para Catálogo/NIÑOS Y JÓVENES/Rutinas 40x30/WhatsApp Image 2026-01-07 at 14.47.09 (3).jpeg',
      '/Productos para Catálogo/NIÑOS Y JÓVENES/Rutinas 40x30/WhatsApp Image 2026-01-07 at 14.47.09 (4).jpeg',
      '/Productos para Catálogo/NIÑOS Y JÓVENES/Rutinas 40x30/WhatsApp Image 2026-01-07 at 14.47.10 (1).jpeg',
      '/Productos para Catálogo/NIÑOS Y JÓVENES/Rutinas 40x30/WhatsApp Image 2026-01-07 at 14.47.10.jpeg',
      // Rutinas grandes
      '/Productos para Catálogo/NIÑOS Y JÓVENES/Rutinas 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.10 (2).jpeg',
      '/Productos para Catálogo/NIÑOS Y JÓVENES/Rutinas 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.10 (3).jpeg',
      '/Productos para Catálogo/NIÑOS Y JÓVENES/Rutinas 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.10 (5).jpeg',
      '/Productos para Catálogo/NIÑOS Y JÓVENES/Rutinas 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.11 (1).jpeg',
      '/Productos para Catálogo/NIÑOS Y JÓVENES/Rutinas 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.11 (2).jpeg',
      '/Productos para Catálogo/NIÑOS Y JÓVENES/Rutinas 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.11 (3).jpeg',
      '/Productos para Catálogo/NIÑOS Y JÓVENES/Rutinas 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.11 (4).jpeg',
      '/Productos para Catálogo/NIÑOS Y JÓVENES/Rutinas 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.11.jpeg',
      '/Productos para Catálogo/NIÑOS Y JÓVENES/Rutinas 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.12 (1).jpeg',
      '/Productos para Catálogo/NIÑOS Y JÓVENES/Rutinas 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.12 (2).jpeg',
    ],
  },
  {
    id: 'packs',
    nombre: 'Packs',
    slug: 'packs',
    descripcion: 'Combos especiales de productos',
    color: 'bg-pink-500 hover:bg-pink-600',
    imagenPortada: '/Productos para Catálogo/PACKS/WhatsApp Image 2026-01-07 at 14.47.06 (1).jpeg',
    todasLasImagenes: [
      '/Productos para Catálogo/PACKS/WhatsApp Image 2026-01-07 at 14.47.06 (1).jpeg',
      '/Productos para Catálogo/PACKS/WhatsApp Image 2026-01-07 at 14.47.06 (2).jpeg',
      '/Productos para Catálogo/PACKS/WhatsApp Image 2026-01-07 at 14.47.06 (3).jpeg',
      '/Productos para Catálogo/PACKS/WhatsApp Image 2026-01-07 at 14.47.06 (4).jpeg',
      '/Productos para Catálogo/PACKS/WhatsApp Image 2026-01-07 at 14.47.07 (1).jpeg',
      '/Productos para Catálogo/PACKS/WhatsApp Image 2026-01-07 at 14.47.07.jpeg',
    ],
  },
  {
    id: 'para-el-dia-a-dia',
    nombre: 'Para el Día a Día',
    slug: 'para-el-dia-a-dia',
    descripcion: 'Planners para organizar tu día a día',
    color: 'bg-orange-500 hover:bg-orange-600',
    imagenPortada: '/Productos para Catálogo/PARA EL DÍA A DÍA/MI DÍA 30X20/Captura de pantalla 2026-01-07 153016.png',
    todasLasImagenes: [
      // Mi Día
      '/Productos para Catálogo/PARA EL DÍA A DÍA/MI DÍA 30X20/Captura de pantalla 2026-01-07 153016.png',
      '/Productos para Catálogo/PARA EL DÍA A DÍA/MI DÍA 30X20/Captura de pantalla 2026-01-07 153030.png',
      '/Productos para Catálogo/PARA EL DÍA A DÍA/MI DÍA 30X20/Captura de pantalla 2026-01-07 153041.png',
      '/Productos para Catálogo/PARA EL DÍA A DÍA/MI DÍA 30X20/Captura de pantalla 2026-01-07 153051.png',
      // To Do List
      '/Productos para Catálogo/PARA EL DÍA A DÍA/TO DO LIST 30X20/Captura de pantalla 2026-01-07 152644.png',
      '/Productos para Catálogo/PARA EL DÍA A DÍA/TO DO LIST 30X20/Captura de pantalla 2026-01-06 164607.png',
      '/Productos para Catálogo/PARA EL DÍA A DÍA/TO DO LIST 30X20/Captura de pantalla 2026-01-07 152652.png',
      '/Productos para Catálogo/PARA EL DÍA A DÍA/TO DO LIST 30X20/Captura de pantalla 2026-01-07 152701.png',
      '/Productos para Catálogo/PARA EL DÍA A DÍA/TO DO LIST 30X20/Captura de pantalla 2026-01-07 152722.png',
      '/Productos para Catálogo/PARA EL DÍA A DÍA/TO DO LIST 30X20/Captura de pantalla 2026-01-07 152734.png',
      '/Productos para Catálogo/PARA EL DÍA A DÍA/TO DO LIST 30X20/Captura de pantalla 2026-01-07 152746.png',
    ],
  },
  {
    id: 'accesorios',
    nombre: 'Accesorios',
    slug: 'accesorios',
    descripcion: 'Marcadores, borradores y accesorios para tus planners',
    color: 'bg-red-500 hover:bg-red-600',
    imagenPortada: '/Productos para Catálogo/ACCESORIOS/Marcador Tablú (2).jpeg',
    todasLasImagenes: [
      '/Productos para Catálogo/ACCESORIOS/Marcador Tablú (2).jpeg',
      '/Productos para Catálogo/ACCESORIOS/WhatsApp Image 2026-01-06 at 17.47.29 (1).jpeg',
      '/Productos para Catálogo/ACCESORIOS/WhatsApp Image 2026-01-06 at 17.47.29 (2).jpeg',
      '/Productos para Catálogo/ACCESORIOS/WhatsApp Image 2026-01-06 at 17.47.29 (3).jpeg',
      '/Productos para Catálogo/ACCESORIOS/WhatsApp Image 2026-01-06 at 17.47.29.jpeg',
      '/Productos para Catálogo/ACCESORIOS/WhatsApp Image 2026-01-06 at 17.47.30 (1).jpeg',
      '/Productos para Catálogo/ACCESORIOS/WhatsApp Image 2026-01-06 at 17.47.30 (2).jpeg',
      '/Productos para Catálogo/ACCESORIOS/WhatsApp Image 2026-01-06 at 17.47.30.jpeg',
      '/Productos para Catálogo/ACCESORIOS/WhatsApp Image 2026-01-06 at 17.47.31 (1).jpeg',
      '/Productos para Catálogo/ACCESORIOS/WhatsApp Image 2026-01-06 at 17.47.31.jpeg',
      '/Productos para Catálogo/ACCESORIOS/WhatsApp Image 202Notas6-01-06 at 17.47.30.jpeg',
    ],
  },
];

// Helper function
export function getCategoriaConImagenesBySlug(slug: string): CategoriaConImagenes | undefined {
  return categoriasConImagenes.find((cat) => cat.slug === slug);
}
