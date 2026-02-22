// Catálogo completo de productos Marca Fusión
// Basado en la estructura de /public/Productos para Catálogo

export interface Producto {
  id: string;
  nombre: string;
  slug: string;
  categoria: string;
  subcategoria?: string;
  tamaños: string[];
  imagenes: string[];
  descripcion?: string;
}

export interface Categoria {
  id: string;
  nombre: string;
  slug: string;
  descripcion: string;
  color: string; // Color del botón/card
  imagen: string; // Imagen de portada
  productos: Producto[];
}

export const categorias: Categoria[] = [
  {
    id: 'colecciones-especiales',
    nombre: 'Colecciones Especiales',
    slug: 'colecciones-especiales',
    descripcion: 'Diseños temáticos únicos con personajes y estilos especiales',
    color: 'bg-yellow-500 hover:bg-yellow-600',
    imagen: '/Productos para Catálogo/COLECCIONES ESPECIALES/Snoopy 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.00 (3).jpeg',
    productos: [
      {
        id: 'aurora-plantas',
        nombre: 'Aurora Plantas',
        slug: 'aurora-plantas',
        categoria: 'colecciones-especiales',
        tamaños: ['60x40', '70x45', '80x60'],
        imagenes: [
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
        ],
        descripcion: 'Planner inspirado en la naturaleza con diseños de plantas y aurora',
      },
      {
        id: 'barbie',
        nombre: 'Barbie',
        slug: 'barbie',
        categoria: 'colecciones-especiales',
        tamaños: ['60x40', '70x45', '80x60'],
        imagenes: [
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
        ],
        descripcion: 'Colección temática de Barbie para organización con estilo',
      },
      {
        id: 'snoopy',
        nombre: 'Snoopy',
        slug: 'snoopy',
        categoria: 'colecciones-especiales',
        tamaños: ['60x40', '70x45', '80x60'],
        imagenes: [
          '/Productos para Catálogo/COLECCIONES ESPECIALES/Snoopy 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.00 (3).jpeg',
          '/Productos para Catálogo/COLECCIONES ESPECIALES/Snoopy 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.01 (1).jpeg',
          '/Productos para Catálogo/COLECCIONES ESPECIALES/Snoopy 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.01 (2).jpeg',
          '/Productos para Catálogo/COLECCIONES ESPECIALES/Snoopy 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.01 (3).jpeg',
          '/Productos para Catálogo/COLECCIONES ESPECIALES/Snoopy 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.01 (4).jpeg',
          '/Productos para Catálogo/COLECCIONES ESPECIALES/Snoopy 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.01.jpeg',
        ],
        descripcion: 'Planner con el adorable Snoopy y sus amigos',
      },
      {
        id: 'stitch',
        nombre: 'Stitch',
        slug: 'stitch',
        categoria: 'colecciones-especiales',
        tamaños: ['60x40', '70x45', '80x60'],
        imagenes: [
          '/Productos para Catálogo/COLECCIONES ESPECIALES/Stitch 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.02 (1).jpeg',
          '/Productos para Catálogo/COLECCIONES ESPECIALES/Stitch 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.02 (2).jpeg',
          '/Productos para Catálogo/COLECCIONES ESPECIALES/Stitch 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.02 (3).jpeg',
          '/Productos para Catálogo/COLECCIONES ESPECIALES/Stitch 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.02 (4).jpeg',
          '/Productos para Catálogo/COLECCIONES ESPECIALES/Stitch 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.02.jpeg',
          '/Productos para Catálogo/COLECCIONES ESPECIALES/Stitch 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.03 (1).jpeg',
          '/Productos para Catálogo/COLECCIONES ESPECIALES/Stitch 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.03.jpeg',
        ],
        descripcion: 'Colección con el tierno y travieso Stitch',
      },
    ],
  },
  {
    id: 'dark-style',
    nombre: 'Dark Style',
    slug: 'dark-style',
    descripcion: 'Diseños elegantes y minimalistas en tonos oscuros',
    color: 'bg-purple-900 hover:bg-purple-950',
    imagen: '/Productos para Catálogo/DARK STYLE/60X40/Captura de pantalla 2026-01-06 164358.png',
    productos: [
      {
        id: 'dark-style-60x40',
        nombre: 'Dark Style',
        slug: 'dark-style-60x40',
        categoria: 'dark-style',
        subcategoria: '60x40',
        tamaños: ['60x40'],
        imagenes: [
          '/Productos para Catálogo/DARK STYLE/60X40/Captura de pantalla 2026-01-06 164358.png',
          '/Productos para Catálogo/DARK STYLE/60X40/Captura de pantalla 2026-01-07 152108.png',
          '/Productos para Catálogo/DARK STYLE/60X40/Captura de pantalla 2026-01-07 152120.png',
          '/Productos para Catálogo/DARK STYLE/60X40/Captura de pantalla 2026-01-07 152130.png',
          '/Productos para Catálogo/DARK STYLE/60X40/Captura de pantalla 2026-01-07 152139.png',
          '/Productos para Catálogo/DARK STYLE/60X40/Captura de pantalla 2026-01-07 152151.png',
          '/Productos para Catálogo/DARK STYLE/60X40/Captura de pantalla 2026-01-07 152200.png',
          '/Productos para Catálogo/DARK STYLE/60X40/Captura de pantalla 2026-01-07 152209.png',
        ],
        descripcion: 'Planner estilo oscuro elegante - tamaño 60x40cm',
      },
      {
        id: 'dark-style-80x60',
        nombre: 'Dark Style',
        slug: 'dark-style-80x60',
        categoria: 'dark-style',
        subcategoria: '80x60',
        tamaños: ['80x60'],
        imagenes: [
          '/Productos para Catálogo/DARK STYLE/80X60/Captura de pantalla 2026-01-07 152329.png',
          '/Productos para Catálogo/DARK STYLE/80X60/Captura de pantalla 2026-01-07 152340.png',
          '/Productos para Catálogo/DARK STYLE/80X60/Captura de pantalla 2026-01-07 152349.png',
          '/Productos para Catálogo/DARK STYLE/80X60/Captura de pantalla 2026-01-07 152358.png',
          '/Productos para Catálogo/DARK STYLE/80X60/Captura de pantalla 2026-01-07 152407.png',
          '/Productos para Catálogo/DARK STYLE/80X60/Captura de pantalla 2026-01-07 152424.png',
          '/Productos para Catálogo/DARK STYLE/80X60/Captura de pantalla 2026-01-07 152441.png',
          '/Productos para Catálogo/DARK STYLE/80X60/Captura de pantalla 2026-01-07 152452.png',
        ],
        descripcion: 'Planner estilo oscuro elegante - tamaño 80x60cm',
      },
    ],
  },
  {
    id: 'hogar-y-rutinas',
    nombre: 'Hogar y Rutinas',
    slug: 'hogar-y-rutinas',
    descripcion: 'Organiza tu hogar y rutinas diarias',
    color: 'bg-green-500 hover:bg-green-600',
    imagen: '/Productos para Catálogo/HOGAR Y RUTINAS/Mi Menú para pared 40x30 60x40/WhatsApp Image 2026-01-07 at 14.46.58 (1).jpeg',
    productos: [
      {
        id: 'imantados',
        nombre: 'Imantados',
        slug: 'imantados',
        categoria: 'hogar-y-rutinas',
        tamaños: ['30x20', '40x30'],
        imagenes: [
          '/Productos para Catálogo/HOGAR Y RUTINAS/Imantados 30x20 40x30/WhatsApp Image 2026-01-07 at 14.46.59 (4).jpeg',
          '/Productos para Catálogo/HOGAR Y RUTINAS/Imantados 30x20 40x30/WhatsApp Image 2026-01-07 at 14.47.00 (1).jpeg',
          '/Productos para Catálogo/HOGAR Y RUTINAS/Imantados 30x20 40x30/WhatsApp Image 2026-01-07 at 14.47.00 (2).jpeg',
          '/Productos para Catálogo/HOGAR Y RUTINAS/Imantados 30x20 40x30/WhatsApp Image 2026-01-07 at 14.47.00.jpeg',
        ],
        descripcion: 'Planners imantados para refrigerador',
      },
      {
        id: 'mi-menu-semanal',
        nombre: 'Mi Menú Semanal',
        slug: 'mi-menu-semanal',
        categoria: 'hogar-y-rutinas',
        tamaños: ['40x30', '60x40'],
        imagenes: [
          '/Productos para Catálogo/HOGAR Y RUTINAS/Mi Menú para pared 40x30 60x40/WhatsApp Image 2026-01-07 at 14.46.58 (1).jpeg',
          '/Productos para Catálogo/HOGAR Y RUTINAS/Mi Menú para pared 40x30 60x40/WhatsApp Image 2026-01-07 at 14.46.59 (1).jpeg',
          '/Productos para Catálogo/HOGAR Y RUTINAS/Mi Menú para pared 40x30 60x40/WhatsApp Image 2026-01-07 at 14.46.59 (2).jpeg',
          '/Productos para Catálogo/HOGAR Y RUTINAS/Mi Menú para pared 40x30 60x40/WhatsApp Image 2026-01-07 at 14.46.59 (5).jpeg',
          '/Productos para Catálogo/HOGAR Y RUTINAS/Mi Menú para pared 40x30 60x40/WhatsApp Image 2026-01-07 at 14.46.59 (8).jpeg',
        ],
        descripcion: 'Planifica tu menú semanal para toda la familia',
      },
    ],
  },
  {
    id: 'home-office',
    nombre: 'Home Office',
    slug: 'home-office',
    descripcion: 'Ideal para tu espacio de trabajo en casa',
    color: 'bg-blue-500 hover:bg-blue-600',
    imagen: '/Productos para Catálogo/HOME OFFICE/MANDALAS 60X40 70X45 80X60/WhatsApp Image 2026-01-07 at 14.47.14 (2).jpeg',
    productos: [
      {
        id: 'mandalas',
        nombre: 'Mandalas',
        slug: 'mandalas',
        categoria: 'home-office',
        tamaños: ['60x40', '70x45', '80x60'],
        imagenes: [
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
        ],
        descripcion: 'Diseños con mandalas para un ambiente relajante',
      },
      {
        id: 'mariposas',
        nombre: 'Mariposas',
        slug: 'mariposas',
        categoria: 'home-office',
        tamaños: ['60x40', '70x45', '80x60'],
        imagenes: [
          '/Productos para Catálogo/HOME OFFICE/MARIPOSAS 60X40 70X45 80X60/WhatsApp Image 2026-01-07 at 14.47.03 (2).jpeg',
          '/Productos para Catálogo/HOME OFFICE/MARIPOSAS 60X40 70X45 80X60/WhatsApp Image 2026-01-07 at 14.47.16 (1).jpeg',
          '/Productos para Catálogo/HOME OFFICE/MARIPOSAS 60X40 70X45 80X60/WhatsApp Image 2026-01-07 at 14.47.16 (2).jpeg',
          '/Productos para Catálogo/HOME OFFICE/MARIPOSAS 60X40 70X45 80X60/WhatsApp Image 2026-01-07 at 14.47.16 (3).jpeg',
          '/Productos para Catálogo/HOME OFFICE/MARIPOSAS 60X40 70X45 80X60/WhatsApp Image 2026-01-07 at 14.47.16 (4).jpeg',
          '/Productos para Catálogo/HOME OFFICE/MARIPOSAS 60X40 70X45 80X60/WhatsApp Image 2026-01-07 at 14.47.16.jpeg',
          '/Productos para Catálogo/HOME OFFICE/MARIPOSAS 60X40 70X45 80X60/WhatsApp Image 2026-01-07 at 14.47.17.jpeg',
        ],
        descripcion: 'Diseños delicados con mariposas',
      },
    ],
  },
  {
    id: 'ninos-y-jovenes',
    nombre: 'Niños y Jóvenes',
    slug: 'ninos-y-jovenes',
    descripcion: 'Planners especiales para niños y adolescentes',
    color: 'bg-purple-500 hover:bg-purple-600',
    imagen: '/Productos para Catálogo/NIÑOS Y JÓVENES/Rutinas 40x30/WhatsApp Image 2026-01-07 at 14.47.09 (1).jpeg',
    productos: [
      {
        id: 'actividades-recompensas',
        nombre: 'Actividades y Recompensas',
        slug: 'actividades-recompensas',
        categoria: 'ninos-y-jovenes',
        tamaños: ['40x30', '60x40', '80x60'],
        imagenes: [
          '/Productos para Catálogo/NIÑOS Y JÓVENES/Actividades Recomensas 40x30 60x40 80x60/Captura de pantalla 2026-01-06 164529.png',
          '/Productos para Catálogo/NIÑOS Y JÓVENES/Actividades Recomensas 40x30 60x40 80x60/Captura de pantalla 2026-01-07 150436.png',
          '/Productos para Catálogo/NIÑOS Y JÓVENES/Actividades Recomensas 40x30 60x40 80x60/Captura de pantalla 2026-01-07 150451.png',
          '/Productos para Catálogo/NIÑOS Y JÓVENES/Actividades Recomensas 40x30 60x40 80x60/Captura de pantalla 2026-01-07 150502.png',
          '/Productos para Catálogo/NIÑOS Y JÓVENES/Actividades Recomensas 40x30 60x40 80x60/Captura de pantalla 2026-01-07 150513.png',
          '/Productos para Catálogo/NIÑOS Y JÓVENES/Actividades Recomensas 40x30 60x40 80x60/Captura de pantalla 2026-01-07 150525.png',
          '/Productos para Catálogo/NIÑOS Y JÓVENES/Actividades Recomensas 40x30 60x40 80x60/Captura de pantalla 2026-01-07 150539.png',
          '/Productos para Catálogo/NIÑOS Y JÓVENES/Actividades Recomensas 40x30 60x40 80x60/Captura de pantalla 2026-01-07 150552.png',
          '/Productos para Catálogo/NIÑOS Y JÓVENES/Actividades Recomensas 40x30 60x40 80x60/Captura de pantalla 2026-01-07 150609.png',
        ],
        descripcion: 'Sistema de actividades y recompensas para niños',
      },
      {
        id: 'horario-escolar',
        nombre: 'Horario Escolar',
        slug: 'horario-escolar',
        categoria: 'ninos-y-jovenes',
        tamaños: ['70x45'],
        imagenes: [
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
        ],
        descripcion: 'Organiza el horario escolar semanal',
      },
      {
        id: 'rutinas-pequenas',
        nombre: 'Rutinas',
        slug: 'rutinas-pequenas',
        categoria: 'ninos-y-jovenes',
        subcategoria: '40x30',
        tamaños: ['40x30'],
        imagenes: [
          '/Productos para Catálogo/NIÑOS Y JÓVENES/Rutinas 40x30/WhatsApp Image 2026-01-07 at 14.47.09 (1).jpeg',
          '/Productos para Catálogo/NIÑOS Y JÓVENES/Rutinas 40x30/WhatsApp Image 2026-01-07 at 14.47.09 (2).jpeg',
          '/Productos para Catálogo/NIÑOS Y JÓVENES/Rutinas 40x30/WhatsApp Image 2026-01-07 at 14.47.09 (3).jpeg',
          '/Productos para Catálogo/NIÑOS Y JÓVENES/Rutinas 40x30/WhatsApp Image 2026-01-07 at 14.47.09 (4).jpeg',
          '/Productos para Catálogo/NIÑOS Y JÓVENES/Rutinas 40x30/WhatsApp Image 2026-01-07 at 14.47.10 (1).jpeg',
          '/Productos para Catálogo/NIÑOS Y JÓVENES/Rutinas 40x30/WhatsApp Image 2026-01-07 at 14.47.10.jpeg',
        ],
        descripcion: 'Rutinas diarias para niños - tamaño 40x30cm',
      },
      {
        id: 'rutinas-grandes',
        nombre: 'Rutinas',
        slug: 'rutinas-grandes',
        categoria: 'ninos-y-jovenes',
        subcategoria: '60x40 70x45 80x60',
        tamaños: ['60x40', '70x45', '80x60'],
        imagenes: [
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
        descripcion: 'Rutinas diarias para niños - tamaños múltiples',
      },
    ],
  },
  {
    id: 'packs',
    nombre: 'Packs',
    slug: 'packs',
    descripcion: 'Combos especiales de productos',
    color: 'bg-pink-500 hover:bg-pink-600',
    imagen: '/Productos para Catálogo/PACKS/WhatsApp Image 2026-01-07 at 14.47.06 (1).jpeg',
    productos: [
      {
        id: 'pack-combo',
        nombre: 'Pack Combo',
        slug: 'pack-combo',
        categoria: 'packs',
        tamaños: ['Varios'],
        imagenes: [
          '/Productos para Catálogo/PACKS/WhatsApp Image 2026-01-07 at 14.47.06 (1).jpeg',
          '/Productos para Catálogo/PACKS/WhatsApp Image 2026-01-07 at 14.47.06 (2).jpeg',
          '/Productos para Catálogo/PACKS/WhatsApp Image 2026-01-07 at 14.47.06 (3).jpeg',
          '/Productos para Catálogo/PACKS/WhatsApp Image 2026-01-07 at 14.47.06 (4).jpeg',
          '/Productos para Catálogo/PACKS/WhatsApp Image 2026-01-07 at 14.47.07 (1).jpeg',
          '/Productos para Catálogo/PACKS/WhatsApp Image 2026-01-07 at 14.47.07.jpeg',
        ],
        descripcion: 'Combos de productos con descuento especial',
      },
    ],
  },
  {
    id: 'para-el-dia-a-dia',
    nombre: 'Para el Día a Día',
    slug: 'para-el-dia-a-dia',
    descripcion: 'Planners para organizar tu día a día',
    color: 'bg-orange-500 hover:bg-orange-600',
    imagen: '/Productos para Catálogo/PARA EL DÍA A DÍA/MI DÍA 30X20/Captura de pantalla 2026-01-07 153016.png',
    productos: [
      {
        id: 'mi-dia',
        nombre: 'Mi Día',
        slug: 'mi-dia',
        categoria: 'para-el-dia-a-dia',
        tamaños: ['30x20'],
        imagenes: [
          '/Productos para Catálogo/PARA EL DÍA A DÍA/MI DÍA 30X20/Captura de pantalla 2026-01-07 153016.png',
          '/Productos para Catálogo/PARA EL DÍA A DÍA/MI DÍA 30X20/Captura de pantalla 2026-01-07 153030.png',
          '/Productos para Catálogo/PARA EL DÍA A DÍA/MI DÍA 30X20/Captura de pantalla 2026-01-07 153041.png',
          '/Productos para Catálogo/PARA EL DÍA A DÍA/MI DÍA 30X20/Captura de pantalla 2026-01-07 153051.png',
        ],
        descripcion: 'Planificador diario compacto',
      },
      {
        id: 'to-do-list',
        nombre: 'To Do List',
        slug: 'to-do-list',
        categoria: 'para-el-dia-a-dia',
        tamaños: ['30x20'],
        imagenes: [
          '/Productos para Catálogo/PARA EL DÍA A DÍA/TO DO LIST 30X20/Captura de pantalla 2026-01-06 164607.png',
          '/Productos para Catálogo/PARA EL DÍA A DÍA/TO DO LIST 30X20/Captura de pantalla 2026-01-07 152644.png',
          '/Productos para Catálogo/PARA EL DÍA A DÍA/TO DO LIST 30X20/Captura de pantalla 2026-01-07 152652.png',
          '/Productos para Catálogo/PARA EL DÍA A DÍA/TO DO LIST 30X20/Captura de pantalla 2026-01-07 152701.png',
          '/Productos para Catálogo/PARA EL DÍA A DÍA/TO DO LIST 30X20/Captura de pantalla 2026-01-07 152722.png',
          '/Productos para Catálogo/PARA EL DÍA A DÍA/TO DO LIST 30X20/Captura de pantalla 2026-01-07 152734.png',
          '/Productos para Catálogo/PARA EL DÍA A DÍA/TO DO LIST 30X20/Captura de pantalla 2026-01-07 152746.png',
        ],
        descripcion: 'Lista de tareas diarias',
      },
    ],
  },
  {
    id: 'accesorios',
    nombre: 'Accesorios',
    slug: 'accesorios',
    descripcion: 'Marcadores, borrad ores y accesorios para tus planners',
    color: 'bg-red-500 hover:bg-red-600',
    imagen: '/Productos para Catálogo/ACCESORIOS/Marcador Tablú (2).jpeg',
    productos: [
      {
        id: 'marcadores-y-accesorios',
        nombre: 'Marcadores y Accesorios',
        slug: 'marcadores-y-accesorios',
        categoria: 'accesorios',
        tamaños: ['Único'],
        imagenes: [
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
        descripcion: 'Marcadores, borradores y más accesorios para tus tableros',
      },
    ],
  },
];

// Helper functions
export function getCategoriaBySlug(slug: string): Categoria | undefined {
  return categorias.find((cat) => cat.slug === slug);
}

export function getProductoBySlug(
  categoriaSlug: string,
  productoSlug: string
): Producto | undefined {
  const categoria = getCategoriaBySlug(categoriaSlug);
  return categoria?.productos.find((prod) => prod.slug === productoSlug);
}

export function getAllProductos(): Producto[] {
  return categorias.flatMap((cat) => cat.productos);
}
