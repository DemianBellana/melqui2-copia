export const portfolioData = {
  personal: {
    name: "Melisa Quiroga",
    role: "Creative Direction",
    tagline: "Video Editor & Content Creator crafting emotional visuals, cinematic storytelling and modern digital experiences.",
    bio: [
      "I create modern audiovisual experiences combining cinematic editing, emotional storytelling and editorial aesthetics.",
      "My work focuses on creating impactful content that feels artistic, immersive and visually unforgettable.",
      "Every frame is designed with rhythm, atmosphere and strong visual identity."
    ]
  },
  hero: {
    mainVideo: "/videos/reel.mp4",
    sideVideo: "/videos/hero-side.mp4",
    title: {
      first: "Melisa",
      last: "Quiroga"
    },
    subtitle: "Cinematic Portfolio"
  },
  reels: {
    title: "Reels crafted with rhythm, motion and cinematic emotion.",
    description: "Dynamic cuts, visual storytelling and premium pacing designed for impactful social media experiences.",
    showcaseVideo: "/videos/reels-showcase.mp4",
    tag: "Featured Editing",
    label: "Main Reel",
    cta: "Play Reel"
  },
  videoWork: {
    tag: "Video Work",
    title: "Creative visual direction across multiple cinematic formats.",
    items: [
      {
        title: "Social Media",
        description: "Premium cinematic editing with modern storytelling and elegant visual composition.",
        image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1400&auto=format&fit=crop"
      },
      {
        title: "Storytelling",
        description: "Premium cinematic editing with modern storytelling and elegant visual composition.",
        image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1400&auto=format&fit=crop"
      },
      {
        title: "Drone",
        description: "Premium cinematic editing with modern storytelling and elegant visual composition.",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop"
      },
      {
        title: "Talking Head",
        description: "Premium cinematic editing with modern storytelling and elegant visual composition.",
        image: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?q=80&w=1400&auto=format&fit=crop"
      }
    ]
  },
  photography: {
    tag: "Photography",
    title: "Editorial moments through still cinematic frames.",
    categories: ['Lifestyle', 'Sports', 'Travel', 'Portraits'],
    images: [
      '1500534314209-a25ddb2bd429',
      '1494790108377-be9c29b29330',
      '1515886657613-9f3515b0c78f',
      '1524504388940-b1c1722653e1',
      '1516321318423-f06f85e504b3',
      '1504593811423-6dd665756598',
    ].map(id => `https://images.unsplash.com/photo-${id}?q=80&w=1200&auto=format&fit=crop`)
  },
  experience: [
    {
      year: "2024 - Present",
      role: "Lead Video Editor",
      company: "Cinematic Studio",
      description: "Directing visual storytelling and high-end commercial editing."
    },
    {
      year: "2022 - 2024",
      role: "Content Creator",
      company: "Freelance",
      description: "Crafting digital experiences for luxury brands worldwide."
    }
  ],
  socials: ['Instagram', 'TikTok', 'WhatsApp', 'Behance', 'Email']
};
