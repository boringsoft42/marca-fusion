/**
 * Tablú Product Catalog Data
 *
 * Product categories:
 * - home: Home organization
 * - habits: Daily habit tracking
 * - kids: Children's planners
 * - youth: Youth/teen planners
 * - university: University/academic
 * - entrepreneurs: Business/entrepreneurship
 * - corporate: Corporate solutions
 * - gifts: Special gift ideas
 */

export interface TabluProduct {
  id: string;
  name: string;
  category: string;
  categories: string[]; // Can belong to multiple categories
  description: string;
  sizes: string[];
  priceRange: string;
  imageUrl?: string;
  features: string[];
  material: 'acrylic' | 'magnetic' | 'both';
  tags: string[];
}

export const tabluCatalog: TabluProduct[] = [
  // Home Category
  {
    id: 'home-weekly-planner',
    name: 'Planificador Semanal Home',
    category: 'home',
    categories: ['home', 'all'],
    description: 'Organiza tu semana en casa con estilo. Perfecto para la cocina o home office.',
    sizes: ['Mini (A4)', 'Mediano (30x40cm)', 'Grande (40x60cm)'],
    priceRange: 'Bs. 150 - 350',
    features: ['Diseño minimalista', 'Sección de notas', 'Lista de compras integrada', 'Marcadores incluidos'],
    material: 'both',
    tags: ['semanal', 'minimalista', 'home'],
  },
  {
    id: 'home-monthly-planner',
    name: 'Planificador Mensual Home',
    category: 'home',
    categories: ['home', 'all'],
    description: 'Vista mensual completa para planificar todas tus actividades del hogar.',
    sizes: ['Mediano (30x40cm)', 'Grande (40x60cm)'],
    priceRange: 'Bs. 200 - 400',
    features: ['Vista mensual', 'Espacio para metas', 'Calendario perpetuo', 'Diseño elegante'],
    material: 'acrylic',
    tags: ['mensual', 'elegante', 'home'],
  },
  {
    id: 'home-meal-planner',
    name: 'Planificador de Comidas',
    category: 'home',
    categories: ['home', 'all'],
    description: 'Planifica tus menús semanales y lista de compras en un solo lugar.',
    sizes: ['Mini (A4)', 'Pequeño (20x30cm) Magnético'],
    priceRange: 'Bs. 120 - 200',
    features: ['Menú semanal', 'Lista de compras', 'Recetas favoritas', 'Magnético para refrigerador'],
    material: 'both',
    tags: ['comidas', 'cocina', 'magnético'],
  },

  // Habits Category
  {
    id: 'habits-daily-tracker',
    name: 'Rastreador de Hábitos Diarios',
    category: 'habits',
    categories: ['habits', 'all'],
    description: 'Construye hábitos positivos con seguimiento visual diario durante 30 días.',
    sizes: ['Mini (A4)', 'Mediano (30x40cm)'],
    priceRange: 'Bs. 140 - 280',
    features: ['30 días de seguimiento', 'Múltiples hábitos', 'Motivacional', 'Diseño colorido'],
    material: 'acrylic',
    tags: ['hábitos', 'diario', 'motivacional'],
  },
  {
    id: 'habits-fitness-tracker',
    name: 'Planificador Fitness & Wellness',
    category: 'habits',
    categories: ['habits', 'all'],
    description: 'Seguimiento de ejercicio, nutrición e hidratación para un estilo de vida saludable.',
    sizes: ['Mini (A4)', 'Mediano (30x40cm)'],
    priceRange: 'Bs. 160 - 300',
    features: ['Rutinas de ejercicio', 'Control de agua', 'Registro de comidas', 'Metas fitness'],
    material: 'acrylic',
    tags: ['fitness', 'salud', 'ejercicio'],
  },

  // Kids Category
  {
    id: 'kids-chore-chart',
    name: 'Tabla de Tareas para Niños',
    category: 'kids',
    categories: ['kids', 'all'],
    description: 'Convierte las tareas del hogar en un juego divertido con recompensas.',
    sizes: ['Mini (A4)', 'Pequeño (20x30cm) Magnético'],
    priceRange: 'Bs. 100 - 180',
    features: ['Diseño colorido', 'Sistema de estrellas', 'Recompensas', 'Fácil de borrar'],
    material: 'both',
    tags: ['niños', 'tareas', 'colorido'],
  },
  {
    id: 'kids-homework-planner',
    name: 'Organizador de Tareas Escolares',
    category: 'kids',
    categories: ['kids', 'all'],
    description: 'Ayuda a los niños a organizar sus tareas escolares y actividades extracurriculares.',
    sizes: ['Mini (A4)'],
    priceRange: 'Bs. 120 - 150',
    features: ['Calendario semanal', 'Lista de tareas', 'Horario de clases', 'Ilustraciones divertidas'],
    material: 'acrylic',
    tags: ['escolar', 'tareas', 'niños'],
  },

  // Youth Category
  {
    id: 'youth-daily-planner',
    name: 'Planificador Diario Juvenil',
    category: 'youth',
    categories: ['youth', 'all'],
    description: 'Estilo moderno para jóvenes que quieren organizar su día con creatividad.',
    sizes: ['Mini (A4)', 'Mediano (30x40cm)'],
    priceRange: 'Bs. 150 - 280',
    features: ['Diseño trendy', 'Sección de metas', 'Frases motivacionales', 'Espacio para creatividad'],
    material: 'acrylic',
    tags: ['juvenil', 'moderno', 'trendy'],
  },
  {
    id: 'youth-social-planner',
    name: 'Organizador Social & Eventos',
    category: 'youth',
    categories: ['youth', 'all'],
    description: 'Nunca te pierdas un evento, cumpleaños o salida con amigos.',
    sizes: ['Mini (A4)'],
    priceRange: 'Bs. 140 - 170',
    features: ['Calendario de eventos', 'Lista de cumpleaños', 'Recordatorios', 'Diseño vibrante'],
    material: 'acrylic',
    tags: ['social', 'eventos', 'amigos'],
  },

  // University Category
  {
    id: 'university-semester-planner',
    name: 'Planificador Semestral Universitario',
    category: 'university',
    categories: ['university', 'all'],
    description: 'Organiza todo tu semestre académico: clases, exámenes, proyectos y más.',
    sizes: ['Mediano (30x40cm)', 'Grande (40x60cm)'],
    priceRange: 'Bs. 250 - 450',
    features: ['Vista semestral', 'Horario de clases', 'Fechas de exámenes', 'Proyectos y entregas'],
    material: 'acrylic',
    tags: ['universidad', 'semestre', 'académico'],
  },
  {
    id: 'university-study-planner',
    name: 'Organizador de Estudio',
    category: 'university',
    categories: ['university', 'all'],
    description: 'Gestiona tu tiempo de estudio efectivamente con técnicas Pomodoro y objetivos.',
    sizes: ['Mini (A4)', 'Mediano (30x40cm)'],
    priceRange: 'Bs. 160 - 300',
    features: ['Técnica Pomodoro', 'Metas de estudio', 'Control de progreso', 'Minimalista'],
    material: 'acrylic',
    tags: ['estudio', 'pomodoro', 'universidad'],
  },

  // Entrepreneurs Category
  {
    id: 'entrepreneurs-business-planner',
    name: 'Planificador de Negocios',
    category: 'entrepreneurs',
    categories: ['entrepreneurs', 'all'],
    description: 'Gestiona tus proyectos emprendedores, metas financieras y networking.',
    sizes: ['Mediano (30x40cm)', 'Grande (40x60cm)'],
    priceRange: 'Bs. 280 - 500',
    features: ['Metas de negocio', 'Control financiero', 'Red de contactos', 'Proyectos'],
    material: 'acrylic',
    tags: ['negocios', 'emprendedor', 'proyectos'],
  },
  {
    id: 'entrepreneurs-content-calendar',
    name: 'Calendario de Contenido',
    category: 'entrepreneurs',
    categories: ['entrepreneurs', 'all'],
    description: 'Planifica tu estrategia de redes sociales y contenido digital mensualmente.',
    sizes: ['Grande (40x60cm)'],
    priceRange: 'Bs. 350 - 400',
    features: ['Vista mensual', 'Múltiples plataformas', 'Ideas de contenido', 'Métricas'],
    material: 'acrylic',
    tags: ['contenido', 'redes sociales', 'marketing'],
  },

  // Corporate Category
  {
    id: 'corporate-team-board',
    name: 'Tablero de Equipo Corporativo',
    category: 'corporate',
    categories: ['corporate', 'all'],
    description: 'Coordinación de equipos y proyectos para espacios de trabajo colaborativo.',
    sizes: ['Grande (40x60cm)', 'Extra Grande (60x90cm)'],
    priceRange: 'Bs. 450 - 800',
    features: ['Multi-equipo', 'Sprints y milestones', 'OKRs', 'Personalizable con logo'],
    material: 'both',
    tags: ['corporativo', 'equipos', 'proyectos'],
  },
  {
    id: 'corporate-meeting-board',
    name: 'Tablero de Reuniones',
    category: 'corporate',
    categories: ['corporate', 'all'],
    description: 'Agenda de reuniones, decisiones y acciones a seguir para salas de conferencia.',
    sizes: ['Grande (40x60cm)', 'Extra Grande (60x90cm)'],
    priceRange: 'Bs. 400 - 750',
    features: ['Agenda de reunión', 'Acuerdos', 'Acción items', 'Diseño profesional'],
    material: 'both',
    tags: ['reuniones', 'corporativo', 'profesional'],
  },

  // Gifts Category
  {
    id: 'gifts-gratitude-journal',
    name: 'Diario de Gratitud',
    category: 'gifts',
    categories: ['gifts', 'all'],
    description: 'El regalo perfecto para promover el bienestar y la reflexión diaria.',
    sizes: ['Mini (A4)'],
    priceRange: 'Bs. 130 - 160',
    features: ['Frases inspiradoras', 'Diseño elegante', 'Empaque de regalo', 'Tarjeta incluida'],
    material: 'acrylic',
    tags: ['regalo', 'gratitud', 'bienestar'],
  },
  {
    id: 'gifts-couple-planner',
    name: 'Planificador para Parejas',
    category: 'gifts',
    categories: ['gifts', 'all'],
    description: 'Organicen juntos sus actividades, citas y metas como pareja.',
    sizes: ['Mediano (30x40cm)', 'Pequeño (20x30cm) Magnético'],
    priceRange: 'Bs. 200 - 320',
    features: ['Vista compartida', 'Date night ideas', 'Metas de pareja', 'Diseño romántico'],
    material: 'both',
    tags: ['pareja', 'regalo', 'romántico'],
  },
  {
    id: 'gifts-birthday-countdown',
    name: 'Contador de Cumpleaños',
    category: 'gifts',
    categories: ['gifts', 'kids', 'all'],
    description: 'Para niños emocionados por su próximo cumpleaños. Regalo perfecto y divertido.',
    sizes: ['Mini (A4)', 'Pequeño (20x30cm) Magnético'],
    priceRange: 'Bs. 100 - 150',
    features: ['Cuenta regresiva', 'Colorido', 'Lista de deseos', 'Diversión garantizada'],
    material: 'both',
    tags: ['cumpleaños', 'niños', 'regalo'],
  },

  // Dark Style (cross-category)
  {
    id: 'dark-minimalist-planner',
    name: 'Planificador Minimalista Dark',
    category: 'home',
    categories: ['home', 'youth', 'entrepreneurs', 'all'],
    description: 'Elegante diseño oscuro para espacios modernos y profesionales.',
    sizes: ['Mini (A4)', 'Mediano (30x40cm)', 'Grande (40x60cm)'],
    priceRange: 'Bs. 180 - 400',
    features: ['Fondo oscuro', 'Letras doradas', 'Ultra moderno', 'Elegante'],
    material: 'acrylic',
    tags: ['dark', 'minimalista', 'elegante', 'moderno'],
  },
];

// Filter categories
export const filterCategories = [
  { id: 'all', label: 'Ver Todo' },
  { id: 'home', label: 'Home Office' },
  { id: 'kids', label: 'Niños' },
  { id: 'habits', label: 'Hábitos' },
  { id: 'university', label: 'Universidad' },
  { id: 'entrepreneurs', label: 'Emprendedores' },
  { id: 'corporate', label: 'Corporativo' },
  { id: 'gifts', label: 'Regalos' },
  { id: 'dark', label: 'Dark Style' },
];
