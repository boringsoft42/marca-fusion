/**
 * Generate Catalog Data
 *
 * This script scans the /public/Productos para Catálogo directory
 * and generates a JSON file with all product images organized by category and subcategory
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const catalogBasePath = path.join(__dirname, '../public/Productos para Catálogo');
const outputPath = path.join(__dirname, '../src/data/catalog-data.json');

// Helper function to get all image files from a directory
function getImagesFromDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    console.warn(`Directory not found: ${dirPath}`);
    return [];
  }

  try {
    const files = fs.readdirSync(dirPath);
    return files
      .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
      .map(file => {
        // Return the public URL path
        const relativePath = path.relative(path.join(__dirname, '../public'), path.join(dirPath, file));
        return '/' + relativePath.replace(/\\/g, '/');
      })
      .sort();
  } catch (error) {
    console.error(`Error reading directory ${dirPath}:`, error);
    return [];
  }
}

// Get all subdirectories in a directory
function getSubdirectories(dirPath) {
  if (!fs.existsSync(dirPath)) {
    return [];
  }

  try {
    return fs.readdirSync(dirPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);
  } catch (error) {
    console.error(`Error reading subdirectories from ${dirPath}:`, error);
    return [];
  }
}

// Catalog structure definition with cover images
const catalogStructure = [
  {
    id: 'colecciones-especiales',
    name: 'Colecciones Especiales',
    slug: 'colecciones-especiales',
    description: 'Diseños temáticos únicos con personajes y estilos especiales',
    folder: 'COLECCIONES ESPECIALES',
    coverImage: '/Productos para Catálogo/COLECCIONES ESPECIALES/Snoopy 60x40 70x45 80x60/WhatsApp Image 2026-01-07 at 14.47.00 (3).jpeg',
  },
  {
    id: 'dark-style',
    name: 'Dark Style',
    slug: 'dark-style',
    description: 'Diseños elegantes y minimalistas en tonos oscuros',
    folder: 'DARK STYLE',
    coverImage: '/Productos para Catálogo/DARK STYLE/60X40/Captura de pantalla 2026-01-06 164358.png',
  },
  {
    id: 'hogar-rutinas',
    name: 'Hogar y Rutinas',
    slug: 'hogar-rutinas',
    description: 'Organiza tu hogar y rutinas diarias',
    folder: 'HOGAR Y RUTINAS',
    coverImage: '/Productos para Catálogo/HOGAR Y RUTINAS/Mi Menú para pared 40x30 60x40/WhatsApp Image 2026-01-07 at 14.46.58 (1).jpeg',
  },
  {
    id: 'home-office',
    name: 'Home Office',
    slug: 'home-office',
    description: 'Ideal para tu espacio de trabajo en casa',
    folder: 'HOME OFFICE',
    coverImage: '/Productos para Catálogo/HOME OFFICE/MANDALAS 60X40 70X45 80X60/WhatsApp Image 2026-01-07 at 14.47.14 (2).jpeg',
  },
  {
    id: 'ninos-jovenes',
    name: 'Niños y Jóvenes',
    slug: 'ninos-jovenes',
    description: 'Diseños divertidos y educativos para los más pequeños',
    folder: 'NIÑOS Y JÓVENES',
    coverImage: '/Productos para Catálogo/NIÑOS Y JÓVENES/Rutinas 40x30/WhatsApp Image 2026-01-07 at 14.47.09 (1).jpeg',
  },
  {
    id: 'packs',
    name: 'Packs',
    slug: 'packs',
    description: 'Packs especiales con diseños combinados',
    folder: 'PACKS',
    coverImage: '/Productos para Catálogo/PACKS/WhatsApp Image 2026-01-07 at 14.47.06 (1).jpeg',
  },
  {
    id: 'para-el-dia',
    name: 'Para el Día a Día',
    slug: 'para-el-dia',
    description: 'Organizadores diarios prácticos y versátiles',
    folder: 'PARA EL DÍA A DÍA',
    coverImage: '/Productos para Catálogo/PARA EL DÍA A DÍA/MI DÍA 30X20/Captura de pantalla 2026-01-07 153016.png',
  },
  {
    id: 'accesorios',
    name: 'Accesorios',
    slug: 'accesorios',
    description: 'Complementos perfectos para tus planners',
    folder: 'ACCESORIOS',
    coverImage: '/Productos para Catálogo/ACCESORIOS/Marcador Tablú (2).jpeg',
  }
];

// Generate catalog data
function generateCatalog() {
  console.log('🔍 Scanning catalog directories...\n');

  const catalog = catalogStructure.map(category => {
    const categoryPath = path.join(catalogBasePath, category.folder);

    console.log(`📁 Processing: ${category.name}`);

    // Get subcategories (subdirectories)
    const subdirs = getSubdirectories(categoryPath);

    const subcategories = subdirs.map(subdir => {
      const subcategoryPath = path.join(categoryPath, subdir);
      const images = getImagesFromDir(subcategoryPath);

      console.log(`  ├─ ${subdir}: ${images.length} images`);

      return {
        id: subdir.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
        name: subdir,
        folderPath: path.relative(path.join(__dirname, '../public'), subcategoryPath).replace(/\\/g, '/'),
        images
      };
    });

    // Also get images directly in the category folder (if any)
    const categoryImages = getImagesFromDir(categoryPath);

    if (categoryImages.length > 0) {
      console.log(`  ├─ (root): ${categoryImages.length} images`);
    }

    const totalImages = subcategories.reduce((sum, sub) => sum + sub.images.length, 0) + categoryImages.length;
    console.log(`  └─ Total: ${totalImages} images\n`);

    return {
      ...category,
      coverImage: category.coverImage, // Use predefined cover image
      subcategories,
      directImages: categoryImages, // Images directly in the category folder
      totalImages
    };
  });

  // Write to JSON file
  fs.writeFileSync(outputPath, JSON.stringify(catalog, null, 2), 'utf-8');

  const totalCategories = catalog.length;
  const totalSubcategories = catalog.reduce((sum, cat) => sum + cat.subcategories.length, 0);
  const totalImages = catalog.reduce((sum, cat) => sum + cat.totalImages, 0);

  console.log('✅ Catalog generated successfully!');
  console.log(`📊 Summary:`);
  console.log(`   - Categories: ${totalCategories}`);
  console.log(`   - Subcategories: ${totalSubcategories}`);
  console.log(`   - Total Images: ${totalImages}`);
  console.log(`📝 Output: ${outputPath}\n`);
}

// Run the script
try {
  generateCatalog();
} catch (error) {
  console.error('❌ Error generating catalog:', error);
  process.exit(1);
}
