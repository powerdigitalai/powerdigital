export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  idealFor: string;
  iconName: 'Globe' | 'Sparkles' | 'Share2' | 'TrendingUp';
  whatsappMessage: string;
}

export interface DifferentiatorPillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  impact: string;
  iconName: 'Cpu' | 'Brain' | 'Target' | 'Bot';
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const BRAND = {
  name: 'Power Digital',
  tagline: 'Growth Partner para Marcas Personales y Emprendedores',
  logoUrl: 'https://res.cloudinary.com/k00aazys/image/upload/v1790649797/PowerDigitalTransparenteHorizontal.png',
  whatsappNumber: '+51920260690',
  whatsappCleanNumber: '51920260690',
  email: 'info@powerdigital.pe',
  social: {
    instagram: 'https://instagram.com/powerdigital.ai',
    instagramHandle: '@powerdigital.ai',
    tiktok: 'https://tiktok.com/@powerdigital.ai',
    tiktokHandle: '@powerdigital.ai',
  },
  colors: {
    primary: '#4361EE',
    gold: '#DEB660',
    bg: '#F8F9FA',
  },
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'landings-web',
    number: '01',
    title: 'Landings Web de Alta Conversión',
    tagline: 'Páginas diseñadas con neuroarquitectura para convertir visitantes en clientes.',
    description:
      'Desarrollamos páginas de aterrizaje ultrarrápidas, adaptadas a dispositivos móviles y estructuradas con ingeniería de software y neuromarketing para maximizar el porcentaje de conversión de tus campañas y redes.',
    deliverables: [
      'Estructura de copy basada en marcos de persuasión y PNL',
      'Desarrollo responsivo ultra veloz con arquitectura moderna',
      'Integración directa con WhatsApp y pasarelas o formularios',
      'Medición de eventos y analítica de conversión en tiempo real',
    ],
    idealFor: 'Emprendedores y marcas personales lanzando ofertas, cursos o servicios.',
    iconName: 'Globe',
    whatsappMessage: 'Hola Power Digital, me gustaría consultar por el servicio de Landings Web de alta conversión.',
  },
  {
    id: 'videos-ia',
    number: '02',
    title: 'Videos con Inteligencia Artificial',
    tagline: 'Producción audiovisual ágil, dinámica y de alto impacto visual.',
    description:
      'Aprovechamos herramientas de IA generativa y flujos de edición avanzada para crear reels, TikToks y piezas publicitarias con retención garantizada, reduciendo radicalmente los tiempos y costos tradicionales de rodaje.',
    deliverables: [
      'Guiones estratégicos calibrados para retención en primeros 3 segundos',
      'Edición dinámica con subtítulos cinemáticos, ritmo y efectos visuales',
      'Generación de assets visuales y animaciones mediante modelos de IA',
      'Adaptación multiformato para reels, TikTok y pauta publicitaria',
    ],
    idealFor: 'Creadores y emprendedores que necesitan volumen de video con estándar premium.',
    iconName: 'Sparkles',
    whatsappMessage: 'Hola Power Digital, deseo información sobre la producción de Videos con Inteligencia Artificial.',
  },
  {
    id: 'redes-sociales',
    number: '03',
    title: 'Estrategia en Redes Sociales',
    tagline: 'Construcción de autoridad, comunidad cualificada y captación orgánica.',
    description:
      'Gestionamos tu presencia en Instagram y TikTok no como un escaparate estático, sino como un motor activo de atracción que educa, conecta emocionalmente y dirige tráfico caliente hacia tus canales de venta.',
    deliverables: [
      'Auditoría y posicionamiento de narrativa para tu marca personal',
      'Calendario editorial mensual con ganchos psicológicos validados',
      'Diseño gráfico con identidad coherente y estética contemporánea',
      'Monitoreo de métricas clave de engagement y generación de leads',
    ],
    idealFor: 'Profesionales y fundadores que buscan liderar su nicho sin improvisar.',
    iconName: 'Share2',
    whatsappMessage: 'Hola Power Digital, me interesa potenciar mis Redes Sociales con su metodología.',
  },
  {
    id: 'growth-partner',
    number: '04',
    title: 'Acompañamiento Growth Partner',
    tagline: 'Un socio estratégico enfocado en el crecimiento sostenible de tu marca.',
    description:
      'Más que una agencia proveedora, operamos como tu departamento de crecimiento externo. Alineamos ingeniería de datos, experimentación continua y marketing para escalar tu facturación de forma predecible.',
    deliverables: [
      'Sesiones estratégicas periódicas de diagnóstico y optimización',
      'Mapeo completo del embudo de adquisición, activación y retención',
      'Diseño y testeo de hipótesis de crecimiento con menor coste de adquisición',
      'Soporte continuo vía WhatsApp prioritario para toma de decisiones',
    ],
    idealFor: 'Marcas personales y negocios en etapa de escalamiento activo.',
    iconName: 'TrendingUp',
    whatsappMessage: 'Hola Power Digital, quiero conocer los detalles del Acompañamiento Growth Partner.',
  },
];

export const DIFFERENTIATOR_PILLARS: DifferentiatorPillar[] = [
  {
    number: '01',
    title: 'Ingeniería de Sistemas',
    subtitle: 'Arquitectura de procesos, automatización y datos',
    description:
      'Aplicamos rigor técnico en cada etapa: embudos sin fisuras, medición precisa de métricas clave y automatizaciones que eliminan tareas repetitivas y cuellos de botella.',
    impact: 'Menos fricción operativa y datos certeros para decidir.',
    iconName: 'Cpu',
  },
  {
    number: '02',
    title: 'Programación Neurolingüística (PNL)',
    subtitle: 'Estructuras de comunicación que conectan con valores',
    description:
      'Cada mensaje y guion se diseña utilizando patrones lingüísticos que resuenan con los mapas mentales de tu audiencia, generando afinidad auténtica y confianza inmediata.',
    impact: 'Mensajes que se entienden, se sienten y generan acción.',
    iconName: 'Brain',
  },
  {
    number: '03',
    title: 'Neuromarketing',
    subtitle: 'Diseño enfocado en la toma de decisiones subconsciente',
    description:
      'Optimizamos la jerarquía visual, los estímulos cromáticos y los puntos de contacto para reducir la carga cognitiva del usuario y facilitar la decisión de compra.',
    impact: 'Mayor tasa de retención y conversión en cada canal.',
    iconName: 'Target',
  },
  {
    number: '04',
    title: 'Inteligencia Artificial',
    subtitle: 'Eficiencia extrema que democratiza la calidad premium',
    description:
      'Integramos modelos de IA de última generación en investigación, redacción de hipótesis, edición de video y optimización, logrando resultados de gran agencia a una fracción del costo.',
    impact: 'Calidad de nivel superior a un costo accesible.',
    iconName: 'Bot',
  },
];

export const COMPARISON_POINTS = [
  {
    criterion: 'Enfoque de trabajo',
    traditional: 'Proveedor de tareas aisladas sin visión global del negocio',
    powerDigital: 'Growth Partner comprometido con el crecimiento integral de tu marca',
  },
  {
    criterion: 'Costos y presupuesto',
    traditional: 'Estructuras pesadas con altos honorarios por procesos manuales',
    powerDigital: 'Procesos optimizados con IA que entregan igual o mayor calidad a menor costo',
  },
  {
    criterion: 'Base metodológica',
    traditional: 'Tendencias superficiales y fórmulas genéricas de moda',
    powerDigital: 'Sinergia científica: Ingeniería de Sistemas + PNL + Neuromarketing + IA',
  },
  {
    criterion: 'Velocidad de ejecución',
    traditional: 'Semanas de reuniones y aprobaciones burocráticas',
    powerDigital: 'Iteraciones ágiles basadas en datos y comunicación directa',
  },
  {
    criterion: 'Trato y cercanía',
    traditional: 'Atención dispersa delegada en intermediarios',
    powerDigital: 'Acompañamiento cercano, transparente y adaptado a tu realidad',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: '¿Qué significa ser un "Growth Partner"?',
    answer:
      'Un Growth Partner no es un proveedor pasivo que solo entrega piezas de diseño. Trabajamos hombro a hombro contigo analizando la estrategia, el contenido, la conversión y la tecnología de tu negocio para que cada acción tenga impacto directo en el crecimiento de tu marca.',
  },
  {
    question: '¿Por qué pueden ofrecer menor precio manteniendo la misma o mejor calidad?',
    answer:
      'Gracias a la combinación de ingeniería de sistemas e inteligencia artificial, automatizamos flujos de trabajo que a una agencia tradicional le toman decenas de horas manuales. Eliminamos sobrecostos innecesarios y trasladamos ese ahorro directamente a ti, invirtiendo el tiempo humano en estrategia profunda y creatividad.',
  },
  {
    question: '¿A quiénes ayudan específicamente?',
    answer:
      'Nos enfocamos en dos perfiles clave: marcas personales (consultores, creadores, profesionales independientes, coaches) y emprendedores o fundadores de negocios que desean una presencia sólida y rentable en redes sociales y entornos digitales.',
  },
  {
    question: '¿Cómo se integran la PNL y el neuromarketing en los videos y landings?',
    answer:
      'La PNL guía la construcción de los argumentos y ganchos de comunicación, adaptando el tono a los disparadores psicológicos del cliente ideal. El neuromarketing define la disposición visual, el contraste y la jerarquía de estímulos para captar la atención en los primeros segundos y facilitar la decisión de compra sin fricción.',
  },
  {
    question: '¿Cómo iniciamos el trabajo juntos?',
    answer:
      'El primer paso es escribirnos por WhatsApp o agendar una videollamada de diagnóstico. Evaluamos el estado actual de tu marca, definimos prioridades y te presentamos una propuesta clara y accionable adaptada a tus objetivos.',
  },
];
