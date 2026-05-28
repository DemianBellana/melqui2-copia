export const portfolioData = {
  personal: {
    name: "Melisa Quiroga",
    role: "Dirección Creativa",
    tagline: "Editor de Video y Creador de Contenido creando piezas visuales emocionales, narrativa cinemática y experiencias digitales modernas.",
    bio: [
      "Creo experiencias audiovisuales modernas combinando edición cinemática, narrativa emocional y estética editorial.",
      "Mi trabajo se centra en crear contenido impactante que se sienta artístico, inmersivo y visualmente inolvidable.",
      "Cada fotograma está diseñado con ritmo, atmósfera y una fuerte identidad visual."
    ]
  },
  hero: {
    mainVideo: "/videos/reel.mp4",
    sideVideo: "/videos/hero-side.mp4",
    title: {
      first: "Melisa",
      last: "Quiroga"
    },
    subtitle: "Portafolio Cinemático"
  },
  reels: {
    title: "Reels creados con ritmo, movimiento y emoción cinemática.",
    description: "Cortes dinámicos, narrativa visual y ritmo premium diseñados para experiencias impactantes en redes sociales.",
    showcaseVideo: "/videos/reels-showcase.mp4",
    tag: "Edición Destacada",
    label: "Reel Principal",
    cta: "Reproducir Reel"
  },
  videoWork: {
    tag: "Trabajo de Video",
    title: "Dirección visual creativa a través de múltiples formatos cinemáticos.",
    items: [
      {
        title: "Redes Sociales",
        description: "Edición cinemática premium con narrativa moderna y composición visual elegante.",
        image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1400&auto=format&fit=crop"
      },
      {
        title: "Narrativa",
        description: "Edición cinemática premium con narrativa moderna y composición visual elegante.",
        image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1400&auto=format&fit=crop"
      },
      {
        title: "Dron",
        description: "Edición cinemática premium con narrativa moderna y composición visual elegante.",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop"
      },
      {
        title: "Entrevistas",
        description: "Edición cinemática premium con narrativa moderna y composición visual elegante.",
        image: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?q=80&w=1400&auto=format&fit=crop"
      }
    ]
  },
  photography: {
    tag: "Fotografía",
    title: "Momentos editoriales a través de fotogramas cinemáticos fijos.",
    categories: ['Estilo de Vida', 'Deportes', 'Viajes', 'Retratos'],
    images: [
      '1500534314209-a25ddb2bd429',
      '1494790108377-be9c29b29330',
      '1515886657613-9f3515b0c78f',
      '1524504388940-b1c1722653e1',
      '1516321318423-f06f85e504b3',
      '1504593811423-6dd665756598',
      '1539109136881-3be0616acf4b',
      '1469334031218-e382a71b716b',
    ].map(id => `https://images.unsplash.com/photo-${id}?q=80&w=1200&auto=format&fit=crop`)
  },
  experience: [
    {
      year: "2024 - Presente",
      role: "Editor de Video Principal",
      company: "Estudio Cinemático",
      description: "Dirigiendo narrativa visual y edición comercial de alta gama."
    },
    {
      year: "2022 - 2024",
      role: "Creador de Contenido",
      company: "Freelance",
      description: "Creando experiencias digitales para marcas de lujo en todo el mundo."
    }
  ],
  socials: ['Instagram', 'TikTok', 'WhatsApp', 'Behance', 'Email']
};