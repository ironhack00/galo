// ============================================================================
//  Contenido central del sitio GALO Marketing.
//  Toda la copy y los datos viven acá para mantener las páginas DRY.
// ============================================================================

export const site = {
  name: 'GALO Marketing',
  tagline: 'Consultora de Marketing',
  domain: 'galomarketing.com.ar',
  email: 'info@galomarketing.com.ar',
  phone: '+54 9 3764 39-7618',
  phoneRaw: '5493764397618', // para WhatsApp / tel:
  address: 'Av. Carlos Culmey N° 43. Puerto Rico, Misiones.',
  mapQuery: 'Av. Carlos Culmey 43, Puerto Rico, Misiones, Argentina',
  social: {
    instagram: 'https://www.instagram.com/galo.marketing',
    facebook: 'https://www.facebook.com/galo.marketing',
  },
  founder: {
    name: 'Nicolás Enrique',
    role: 'Fundador',
    intro:
      'Licenciado en Comercialización con 8 años de experiencia en el apasionante mundo del marketing.',
    bio: [
      'Mi recorrido profesional abarca desde los primeros pasos como pasante en una prestigiosa consultora de marketing de Posadas, hasta roles clave como ejecutivo de cuentas, donde adquirí una visión integral del sector.',
      'Tuve el honor de ser parte del equipo ganador del programa Naves 2017, lo que fortaleció mi capacidad para desarrollar proyectos innovadores y estratégicos. Además, fui responsable de establecer y liderar el área de marketing en una importante empresa industrial de Misiones, un desafío que consolidó mi expertise en gestión y comunicación.',
      'Hoy, como fundador de "Galo Marketing", fusiono creatividad, visión estratégica y pasión por ayudar a las marcas a alcanzar su máximo potencial. Soy un soñador comprometido con la excelencia, siempre buscando soluciones que marquen la diferencia.',
    ],
  },
};

export const nav = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Nosotros', href: '/nosotros/' },
  { label: 'Blogs', href: '/blogs/' },
  { label: 'Contacto', href: '/contacto/' },
];

// --- Slides del hero (carrusel) ----------------------------------------------
export const heroSlides = [
  {
    eyebrow: 'Somos una',
    title: 'Consultora de Marketing',
    text: 'Con un enfoque preciso: escucharte, entender tus necesidades y ofrecerte soluciones a medida.',
    img: '/assets/img/hero-1.png',
    alt: 'Ilustración 3D de un cohete despegando desde un monitor con métricas de marketing',
  },
  {
    eyebrow: 'En GALO Marketing combinamos',
    title: 'Creatividad, Planificación & Estrategia',
    text: 'Para transformar ideas en acciones efectivas.',
    img: '/assets/img/hero-2.png',
    alt: 'Ilustración 3D de un engranaje verde junto a una lista de tareas verificada',
  },
  {
    eyebrow: '',
    title: 'Hagamos que las cosas pasen',
    text: 'Contáctanos y empecemos a crear estrategias que generan impacto.',
    img: '/assets/img/hero-3.png',
    alt: 'Ilustración 3D de un plan estratégico con una lámpara de idea',
  },
];

// --- Servicios ---------------------------------------------------------------
// icons: íconos SVG de beneficios (blanco + amarillo) que acompañan cada punto.
export const services = [
  {
    slug: 'plan-de-marketing',
    title: 'Plan de marketing',
    short: 'Creamos estrategias personalizadas para impulsar tu negocio.',
    img: '/assets/img/serv-1.png',
    lead: 'Creamos estrategias personalizadas para impulsar tu negocio, definiendo objetivos claros y acciones concretas.',
    listTitle: 'Nos enfocamos en que cada plan sea:',
    points: [
      { icon: '/assets/icons/serv-1-1.svg', text: 'Plan realista' },
      { icon: '/assets/icons/serv-1-2.svg', text: 'Totalmente medible' },
      { icon: '/assets/icons/serv-1-3.svg', text: 'Resultados efectivos' },
    ],
  },
  {
    slug: 'medios-digitales',
    title: 'Planificación y asesoramiento en medios digitales',
    short: 'Te guiamos en el uso eficiente de plataformas digitales.',
    img: '/assets/img/serv-2.png',
    lead: 'Te guiamos en el uso eficiente de plataformas digitales. Desde redes sociales hasta campañas publicitarias online.',
    listTitle: 'Diseñamos estrategias que:',
    points: [
      { icon: '/assets/icons/serv-2-1.svg', text: 'Conectan con tu público' },
      { icon: '/assets/icons/serv-2-2.svg', text: 'Maximizan la visibilidad' },
      { icon: '/assets/icons/serv-2-3.svg', text: 'Retorno de inversión' },
    ],
  },
  {
    slug: 'medios-tradicionales',
    title: 'Planificación y asesoramiento en medios tradicionales',
    short: 'Potenciamos tu presencia en medios convencionales.',
    img: '/assets/img/serv-3.png',
    lead: 'Potenciamos tu presencia en medios convencionales como radio, televisión y prensa gráfica.',
    listTitle: 'Te asesoramos en la elección de:',
    points: [
      { icon: '/assets/icons/serv-3-1.svg', text: 'Canales más efectivos' },
      { icon: '/assets/icons/serv-3-2.svg', text: 'Mensajes impactantes' },
      { icon: '/assets/icons/serv-3-3.svg', text: 'Conectar con tu público' },
    ],
  },
  {
    slug: 'investigacion-de-mercado',
    title: 'Investigación y análisis de la competencia',
    short: 'Realizamos estudios detallados del mercado.',
    img: '/assets/img/serv-4.png',
    lead: 'Realizamos estudios detallados del mercado y tu competencia para identificar oportunidades, fortalezas y áreas de mejora.',
    listTitle: 'Esta información te permitirá:',
    points: [
      { icon: '/assets/icons/serv-4-1.svg', text: 'Detectar debilidades y fortalezas' },
      { icon: '/assets/icons/serv-4-2.svg', text: 'Áreas de mejora' },
      { icon: '/assets/icons/serv-4-3.svg', text: 'Mantener ventaja competitiva' },
    ],
  },
  {
    slug: 'eventos-y-marca',
    title: 'Asesoría en eventos y comunicadores de marca',
    short: 'Te acompañamos en la planificación de eventos y acciones que posicionen tu marca.',
    img: '/assets/img/serv-5.png',
    lead: 'Te acompañamos en la planificación de eventos y acciones que posicionen tu marca. Además, te asesoramos en la selección de comunicadores y embajadores que conecten de manera auténtica y efectiva con tu público objetivo.',
    listTitle: 'Trabajamos en:',
    points: [
      { icon: '/assets/icons/serv-5-1.svg', text: 'Planificación de eventos' },
      { icon: '/assets/icons/serv-5-2.svg', text: 'Posicionamiento de marca' },
      { icon: '/assets/icons/serv-5-3.svg', text: 'Selección de embajadores' },
    ],
  },
  {
    slug: 'diseno-web',
    title: 'Diseño Web',
    short: 'Sitios web funcionales y atractivos que se adaptan a tu negocio.',
    img: '/assets/img/serv-6.png',
    lead: 'Desarrollamos sitios web funcionales y atractivos que se adaptan a las necesidades de tu negocio.',
    listTitle: 'Nos enfocamos en brindar:',
    points: [
      { icon: '/assets/icons/serv-6-1.svg', text: 'Experiencia de usuario intuitiva' },
      { icon: '/assets/icons/serv-6-2.svg', text: 'Optimizado para diferentes dispositivos' },
      { icon: '/assets/icons/serv-6-3.svg', text: 'Pensado para convertir visitas en resultados' },
    ],
  },
];

// --- Pilares (Nosotros) ------------------------------------------------------
export const pillars = [
  {
    n: '1',
    title: 'Creatividad',
    text: 'No es solo generar ideas originales; es encontrar soluciones innovadoras que conecten con el público y resalten la esencia de cada negocio.',
  },
  {
    n: '2',
    title: 'Planificación',
    text: 'Creemos que las ideas más brillantes solo tienen éxito cuando están respaldadas por una sólida planificación. Desde la definición de objetivos hasta la ejecución detallada, nos aseguramos de que cada acción esté alineada con una visión clara y alcanzable.',
  },
  {
    n: '3',
    title: 'Estrategia',
    text: 'Es el corazón de todo lo que hacemos. Analizamos datos, estudiamos el mercado y entendemos a tus clientes para crear planes que maximicen resultados.',
  },
];

// --- Significado de la marca -------------------------------------------------
export const brandMeaning = [
  {
    icon: '/assets/icons/triangulo.svg',
    title: 'El Triángulo',
    text: 'Figura que representa los pilares de la marca: creatividad, planificación y estrategia, sosteniéndose entre sí.',
  },
  {
    icon: '/assets/icons/gaviota.svg',
    title: 'La Gaviota',
    text: 'Inspirada en "Juan Salvador Gaviota", que persigue la excelencia y la libertad de ir más allá de lo convencional.',
  },
];

// --- Blogs -------------------------------------------------------------------
export const blogs = [
  {
    slug: 'marketing-de-guerrilla',
    category: 'Marketing Digital',
    title: 'Conclusión final sobre el Marketing de guerrilla',
    subtitle: 'Monografía de Grado 2023 – Nicolás Enrique',
    excerpt:
      'El marketing atraviesa un cambio de paradigma: de vender productos a generar acciones de valor. Un análisis del marketing de guerrilla y su oportunidad en el mercado de Posadas.',
    body: [
      { t: 'p', c: 'El marketing actualmente, está atravesando un cambio de paradigma. Antes se encargaba de identificar la necesidad del mercado, para luego elaborar productos y servicios para satisfacer dichas necesidades o deseos a cambio de una retribución monetaria para la empresa. Ahora el marketing se está enfocando en generar acciones de valor, para que los clientes y usuarios perciban el producto o servicio como algo único. Y además, de establecer relaciones sólidas y duraderas con el mercado objetivo.' },
      { t: 'p', c: 'Dentro de las 4 variables del marketing (precio, promoción, plaza y publicidad), la publicidad es una de las más importantes, porque su función es posicionar la marca en la mente del público y estimular la acción de compra del consumidor.' },
      { t: 'p', c: 'Hoy en día, las acciones publicitarias han saturado los medios tradicionales y al consumidor. Es necesario empezar a simplificar el mensaje y dirigirlo hacia un segmento de mercado o público objetivo, de forma creativa y directa para llamar la atención. El consumidor está más informado, exigente, y no se deja convencer fácilmente. Ahora busca interactividad y relacionamiento con la marca, para compartir sus experiencias en las redes sociales. Este relacionamiento solamente se obtiene a través de acciones publicitarias directas que tengan el poder de sorprender a todos aquellos que la vivencien. Las acciones publicitarias que cumplen esos requisitos son las denominadas BTL.' },
      { t: 'p', c: 'En la ciudad de Posadas, las bases del marketing y la publicidad tradicional se han profesionalizado y mejorado notablemente en las medianas y grandes empresas, gracias a la incorporación del área de marketing o por el asesoramiento brindado por agencias de publicidad y consultoras de marketing. Respecto a las acciones de BTL, han empezado a tener mayor relevancia para los empresarios y por ende, han empezado a invertir más y de mejor manera en patrocinio, eventos y acciones en el punto de venta.' },
      { t: 'p', c: 'El marketing de guerrilla es un instrumento preciso, acorde a las necesidades y a la situación del mercado. A continuación exponemos cuatro factores que describen el contexto actual, los cuales también forman el escenario perfecto para estrategias más creativas y novedosas:' },
      { t: 'ul', c: [
        'El bombardeo publicitario en medios tradicionales debido a la cantidad de empresas y comercios que compiten entre sí.',
        'El deseo de generar nuevas formas de comunicar, que permita disminuir el presupuesto.',
        'La necesidad de romper el molde de los esquemas tradicionales, los cuales aburren y saturan al público.',
        'El deseo por parte del cliente de establecer una relación con la marca y los productos, para luego exponer su experiencia en redes sociales.',
      ] },
      { t: 'p', c: 'Para concluir, puedo decir que una gran parte del mercado necesita ejecutar acciones de marketing de guerrilla para diferenciarse y posicionarse, pero tiene desconfianza o no está capacitado en el tema. Creemos que muchas agencias y profesionales de la región, con el solo hecho de profundizarse en la temática y analizar en detalle la situación del mercado objetivo, pueden sorprender y posicionar marcas con acciones originales y directas.' },
      { t: 'p', c: 'La combinación de espacio público y publicidad permite percibir una comunicación sencilla, creativa, de bajo costo y divertida, a la cual todos reaccionan de manera positiva.' },
    ],
  },
];
