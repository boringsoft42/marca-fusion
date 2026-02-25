/**
 * Tablú Catalog Structure
 *
 * Defines the hierarchical structure of product categories and subcategories
 * based on the /public/Productos para Catálogo directory structure
 */

export interface Subcategory {
  id: string;
  name: string;
  folderPath: string;
  images: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  folderPath: string;
  subcategories: Subcategory[];
}

/**
 * Complete catalog structure
 * Images are loaded dynamically from the folder paths
 */
export const catalogStructure: Category[] = [
  {
    id: 'colecciones-especiales',
    name: 'Colecciones Especiales',
    slug: 'colecciones-especiales',
    description: 'Diseños temáticos únicos con personajes y estilos especiales',
    folderPath: '/Productos para Catálogo/COLECCIONES ESPECIALES',
    subcategories: [
      {
        id: 'aurora-plantas',
        name: 'Aurora Plantas',
        folderPath: '/Productos para Catálogo/COLECCIONES ESPECIALES/Aurora Plantas 60x40 70x45 80x60',
        images: [] // Will be populated dynamically
      },
      {
        id: 'barbie',
        name: 'Barbie',
        folderPath: '/Productos para Catálogo/COLECCIONES ESPECIALES/Barbie 60x40 70x45 80x60',
        images: []
      },
      {
        id: 'snoopy',
        name: 'Snoopy',
        folderPath: '/Productos para Catálogo/COLECCIONES ESPECIALES/Snoopy 60x40 70x45 80x60',
        images: []
      },
      {
        id: 'stitch',
        name: 'Stitch',
        folderPath: '/Productos para Catálogo/COLECCIONES ESPECIALES/Stitch 60x40 70x45 80x60',
        images: []
      }
    ]
  },
  {
    id: 'dark-style',
    name: 'Dark Style',
    slug: 'dark-style',
    description: 'Diseños elegantes y minimalistas en tonos oscuros',
    folderPath: '/Productos para Catálogo/DARK STYLE',
    subcategories: [
      {
        id: 'dark-60x40',
        name: 'Dark Style 60x40',
        folderPath: '/Productos para Catálogo/DARK STYLE/60X40',
        images: []
      },
      {
        id: 'dark-80x60',
        name: 'Dark Style 80x60',
        folderPath: '/Productos para Catálogo/DARK STYLE/80X60',
        images: []
      }
    ]
  },
  {
    id: 'hogar-rutinas',
    name: 'Hogar y Rutinas',
    slug: 'hogar-rutinas',
    description: 'Organiza tu hogar y rutinas diarias',
    folderPath: '/Productos para Catálogo/HOGAR Y RUTINAS',
    subcategories: [
      {
        id: 'imantados',
        name: 'Imantados 30x20 40x30',
        folderPath: '/Productos para Catálogo/HOGAR Y RUTINAS/Imantados 30x20 40x30',
        images: []
      },
      {
        id: 'mi-menu',
        name: 'Mi Menú para pared',
        folderPath: '/Productos para Catálogo/HOGAR Y RUTINAS/Mi Menú para pared 40x30 60x40',
        images: []
      }
    ]
  },
  {
    id: 'home-office',
    name: 'Home Office',
    slug: 'home-office',
    description: 'Ideal para tu espacio de trabajo en casa',
    folderPath: '/Productos para Catálogo/HOME OFFICE',
    subcategories: [
      {
        id: 'mandalas',
        name: 'Mandalas',
        folderPath: '/Productos para Catálogo/HOME OFFICE/MANDALAS 60X40 70X45 80X60',
        images: []
      },
      {
        id: 'mariposas',
        name: 'Mariposas',
        folderPath: '/Productos para Catálogo/HOME OFFICE/MARIPOSAS 60X40 70X45 80X60',
        images: []
      }
    ]
  },
  {
    id: 'ninos-jovenes',
    name: 'Niños y Jóvenes',
    slug: 'ninos-jovenes',
    description: 'Diseños divertidos y educativos para los más pequeños',
    folderPath: '/Productos para Catálogo/NIÑOS Y JÓVENES',
    subcategories: [
      {
        id: 'actividades-recompensas',
        name: 'Actividades y Recompensas',
        folderPath: '/Productos para Catálogo/NIÑOS Y JÓVENES/Actividades Recomensas 40x30 60x40 80x60',
        images: []
      },
      {
        id: 'horario-escolar',
        name: 'Horario Escolar',
        folderPath: '/Productos para Catálogo/NIÑOS Y JÓVENES/Horario Escolar 70x45',
        images: []
      },
      {
        id: 'rutinas-40x30',
        name: 'Rutinas 40x30',
        folderPath: '/Productos para Catálogo/NIÑOS Y JÓVENES/Rutinas 40x30',
        images: []
      },
      {
        id: 'rutinas-60x40',
        name: 'Rutinas 60x40 70x45 80x60',
        folderPath: '/Productos para Catálogo/NIÑOS Y JÓVENES/Rutinas 60x40 70x45 80x60',
        images: []
      }
    ]
  },
  {
    id: 'packs',
    name: 'Packs',
    slug: 'packs',
    description: 'Packs especiales con diseños combinados',
    folderPath: '/Productos para Catálogo/PACKS',
    subcategories: []
  },
  {
    id: 'para-el-dia',
    name: 'Para el Día a Día',
    slug: 'para-el-dia',
    description: 'Organizadores diarios prácticos y versátiles',
    folderPath: '/Productos para Catálogo/PARA EL DÍA A DÍA',
    subcategories: [
      {
        id: 'mi-dia',
        name: 'Mi Día 30x20',
        folderPath: '/Productos para Catálogo/PARA EL DÍA A DÍA/MI DÍA 30X20',
        images: []
      },
      {
        id: 'to-do-list',
        name: 'To Do List 30x20',
        folderPath: '/Productos para Catálogo/PARA EL DÍA A DÍA/TO DO LIST 30X20',
        images: []
      }
    ]
  },
  {
    id: 'accesorios',
    name: 'Accesorios',
    slug: 'accesorios',
    description: 'Complementos perfectos para tus planners',
    folderPath: '/Productos para Catálogo/ACCESORIOS',
    subcategories: [
      {
        id: 'referencias',
        name: 'Referencias de títulos, info y precios',
        folderPath: '/Productos para Catálogo/ACCESORIOS/Referencias de títulos, info y precios',
        images: []
      }
    ]
  }
];

/**
 * Helper function to get all images from a folder path
 * This should be used server-side or with a build-time script
 */
export function getImagesFromFolder(folderPath: string): string[] {
  // This will be implemented with fs.readdirSync in server components
  // or via a build script
  return [];
}

/**
 * Get category by slug
 */
export function getCategoryBySlug(slug: string): Category | undefined {
  return catalogStructure.find(cat => cat.slug === slug);
}

/**
 * Get subcategory by ID within a category
 */
export function getSubcategory(categorySlug: string, subcategoryId: string): Subcategory | undefined {
  const category = getCategoryBySlug(categorySlug);
  return category?.subcategories.find(sub => sub.id === subcategoryId);
}
