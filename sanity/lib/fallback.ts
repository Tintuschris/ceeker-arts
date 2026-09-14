/**
 * Fallback Data
 *
 * Used when Sanity is not configured or as default content.
 * Once Sanity is set up and content is added, these won't be used.
 */

export const fallbackProjects = [
  {
    _id: "1",
    title: "Iconic Getaways",
    slug: { current: "iconic-getaways" },
    category: "Branding",
    year: "2024",
    description:
      "A comprehensive brand identity project for a luxury travel company. We crafted a visual language that captures the essence of exclusivity and wanderlust, from logo design to complete brand guidelines.",
    services: ["Brand Strategy", "Visual Identity", "Collateral Design"],
    tools: ["Figma", "Illustrator", "Photoshop"],
    coverImage: { asset: { url: "/images/BG-2-ICONIC-GETAWAYS-BRANDING-C.jpg" } },
    images: [
      { asset: { url: "/images/BG-2-ICONIC-GETAWAYS-BRANDING-C.jpg" } },
      { asset: { url: "/images/Our-Creative-Works-01.jpg" } },
      { asset: { url: "/images/Our-Creative-Works-02.jpg" } },
    ],
    featured: true,
  },
  {
    _id: "2",
    title: "Revoc Toolkit",
    slug: { current: "revoc-toolkit" },
    category: "Design",
    year: "2024",
    description:
      "A design toolkit and brand system created for a tech startup. The project involved creating a cohesive visual identity that could scale across digital and print mediums.",
    services: ["UI/UX Design", "Graphic Design", "Brand Identity"],
    tools: ["Figma", "After Effects", "Illustrator"],
    coverImage: { asset: { url: "/images/BG-3-REVOC-TOOLKIT.jpg" } },
    images: [
      { asset: { url: "/images/BG-3-REVOC-TOOLKIT.jpg" } },
      { asset: { url: "/images/Our-Creative-Works-03.jpg" } },
      { asset: { url: "/images/Our-Creative-Works-04.jpg" } },
    ],
    featured: true,
  },
  {
    _id: "3",
    title: "CSA SRHR Playing Cards",
    slug: { current: "csa-srhr-playing-cards" },
    category: "Illustration",
    year: "2023",
    description:
      "An educational illustration project featuring custom playing card designs. Each card tells a story about sexual and reproductive health rights through vibrant, engaging illustrations.",
    services: ["Illustration", "Art Direction", "Print Design"],
    tools: ["Procreate", "Illustrator", "InDesign"],
    coverImage: { asset: { url: "/images/BG-4-CSA-SRHR-PLAYING-CARDS.jpg" } },
    images: [
      { asset: { url: "/images/BG-4-CSA-SRHR-PLAYING-CARDS.jpg" } },
      { asset: { url: "/images/Our-Creative-Works-05.jpg" } },
      { asset: { url: "/images/Our-Creative-Works-06.jpg" } },
    ],
    featured: true,
  },
  {
    _id: "4",
    title: "Creative Works 01",
    slug: { current: "creative-works-01" },
    category: "Design",
    year: "2024",
    description:
      "A creative design project showcasing bold visual experimentation and innovative design solutions.",
    services: ["Graphic Design", "Brand Identity"],
    tools: ["Figma", "Illustrator"],
    coverImage: { asset: { url: "/images/Our-Creative-Works-01.jpg" } },
    images: [
      { asset: { url: "/images/Our-Creative-Works-01.jpg" } },
      { asset: { url: "/images/Our-Creative-Works-02.jpg" } },
      { asset: { url: "/images/Our-Creative-Works-03.jpg" } },
    ],
    featured: false,
  },
  {
    _id: "5",
    title: "Creative Works 02",
    slug: { current: "creative-works-02" },
    category: "Design",
    year: "2024",
    description: "Visual identity and motion design for a creative project.",
    services: ["Visual Identity", "Motion Design"],
    tools: ["Figma", "After Effects"],
    coverImage: { asset: { url: "/images/Our-Creative-Works-02.jpg" } },
    images: [
      { asset: { url: "/images/Our-Creative-Works-02.jpg" } },
      { asset: { url: "/images/Our-Creative-Works-04.jpg" } },
      { asset: { url: "/images/Our-Creative-Works-05.jpg" } },
    ],
    featured: false,
  },
  {
    _id: "6",
    title: "Creative Works 03",
    slug: { current: "creative-works-03" },
    category: "Branding",
    year: "2023",
    description: "Brand strategy and collateral design for a creative studio.",
    services: ["Brand Strategy", "Collateral Design"],
    tools: ["Figma", "Illustrator"],
    coverImage: { asset: { url: "/images/Our-Creative-Works-03.jpg" } },
    images: [
      { asset: { url: "/images/Our-Creative-Works-03.jpg" } },
      { asset: { url: "/images/Our-Creative-Works-01.jpg" } },
      { asset: { url: "/images/Our-Creative-Works-06.jpg" } },
    ],
    featured: false,
  },
  {
    _id: "7",
    title: "Creative Works 04",
    slug: { current: "creative-works-04" },
    category: "Design",
    year: "2024",
    description: "UI/UX design and web design for a digital platform.",
    services: ["UI/UX Design", "Web Design"],
    tools: ["Figma", "Webflow"],
    coverImage: { asset: { url: "/images/Our-Creative-Works-04.jpg" } },
    images: [
      { asset: { url: "/images/Our-Creative-Works-04.jpg" } },
      { asset: { url: "/images/Our-Creative-Works-02.jpg" } },
      { asset: { url: "/images/Our-Creative-Works-03.jpg" } },
    ],
    featured: false,
  },
  {
    _id: "8",
    title: "Creative Works 05",
    slug: { current: "creative-works-05" },
    category: "Illustration",
    year: "2023",
    description: "Illustration and print design for a publishing project.",
    services: ["Illustration", "Print Design"],
    tools: ["Procreate", "InDesign"],
    coverImage: { asset: { url: "/images/Our-Creative-Works-05.jpg" } },
    images: [
      { asset: { url: "/images/Our-Creative-Works-05.jpg" } },
      { asset: { url: "/images/Our-Creative-Works-05-B.jpg" } },
      { asset: { url: "/images/Our-Creative-Works-06.jpg" } },
    ],
    featured: false,
  },
];

export const fallbackIllustrations = [
  {
    _id: "i1",
    title: "Creative Works 01",
    slug: { current: "creative-works-01" },
    category: "Editorial",
    primaryImage: { asset: { url: "/images/Our-Creative-Works-01.jpg" } },
    secondaryImages: [
      { asset: { url: "/images/Our-Creative-Works-02.jpg" } },
      { asset: { url: "/images/Our-Creative-Works-03.jpg" } },
    ],
  },
  {
    _id: "i2",
    title: "Creative Works 02",
    slug: { current: "creative-works-02" },
    category: "Brand",
    primaryImage: { asset: { url: "/images/Our-Creative-Works-02.jpg" } },
    secondaryImages: [
      { asset: { url: "/images/Our-Creative-Works-04.jpg" } },
      { asset: { url: "/images/Our-Creative-Works-05.jpg" } },
    ],
  },
  {
    _id: "i3",
    title: "Creative Works 03",
    slug: { current: "creative-works-03" },
    category: "Character",
    primaryImage: { asset: { url: "/images/Our-Creative-Works-03.jpg" } },
    secondaryImages: [
      { asset: { url: "/images/Our-Creative-Works-01.jpg" } },
      { asset: { url: "/images/Our-Creative-Works-06.jpg" } },
    ],
  },
  {
    _id: "i4",
    title: "Creative Works 04",
    slug: { current: "creative-works-04" },
    category: "Iconography",
    primaryImage: { asset: { url: "/images/Our-Creative-Works-04.jpg" } },
    secondaryImages: [
      { asset: { url: "/images/Our-Creative-Works-02.jpg" } },
      { asset: { url: "/images/Our-Creative-Works-03.jpg" } },
    ],
  },
  {
    _id: "i5",
    title: "Creative Works 05",
    slug: { current: "creative-works-05" },
    category: "Print",
    primaryImage: { asset: { url: "/images/Our-Creative-Works-05.jpg" } },
    secondaryImages: [
      { asset: { url: "/images/Our-Creative-Works-05-B.jpg" } },
      { asset: { url: "/images/Our-Creative-Works-06.jpg" } },
    ],
  },
  {
    _id: "i6",
    title: "Creative Works 06",
    slug: { current: "creative-works-06" },
    category: "Digital",
    primaryImage: { asset: { url: "/images/Our-Creative-Works-06.jpg" } },
    secondaryImages: [
      { asset: { url: "/images/Our-Creative-Works-01.jpg" } },
      { asset: { url: "/images/Our-Creative-Works-04.jpg" } },
    ],
  },
];

export const fallbackServices = [
  {
    _id: "s1",
    number: "01",
    title: "Brand Strategy",
    description:
      "We define your brand's essence, voice, and market positioning to create a strong foundation. Through research and strategy, we craft a unique identity that resonates with your audience.",
    image: { asset: { url: "/images/Our-Creative-Works-02.jpg" } },
    deliverables: ["Brand Audit", "Market Research", "Brand Guidelines", "Positioning Statement"],
  },
  {
    _id: "s2",
    number: "02",
    title: "Visual Identity",
    description:
      "A powerful brand starts with a memorable visual identity. We design distinctive logos, color palettes, typography, and brand guidelines that make your brand instantly recognizable.",
    image: { asset: { url: "/images/Our-Creative-Works-03.jpg" } },
    deliverables: ["Logo Design", "Color Palette", "Typography", "Brand Guidelines"],
  },
  {
    _id: "s3",
    number: "03",
    title: "Graphic Design",
    description:
      "Custom graphics that make your message stand out. Whether it's marketing materials, web visuals, or digital ads, every element is crafted to be eye-catching and aligned with your brand.",
    image: { asset: { url: "/images/Our-Creative-Works-04.jpg" } },
    deliverables: ["Marketing Materials", "Social Media Graphics", "Print Design", "Digital Ads"],
  },
  {
    _id: "s4",
    number: "04",
    title: "UI/UX Design",
    description:
      "I craft intuitive, user-friendly interfaces that balance form and function. Through thoughtful UX strategy and clean UI design, I help you build websites and apps that deliver a smooth experience.",
    image: { asset: { url: "/images/Our-Creative-Works-05.jpg" } },
    deliverables: ["User Research", "Wireframes", "Prototypes", "Design System"],
  },
  {
    _id: "s5",
    number: "05",
    title: "Illustration",
    description:
      "Custom illustrations that bring your brand to life. From editorial illustrations to character design and iconography, I create visuals that tell your story in a unique way.",
    image: { asset: { url: "/images/Our-Creative-Works-05-B.jpg" } },
    deliverables: ["Editorial Illustration", "Character Design", "Iconography", "Infographics"],
  },
  {
    _id: "s6",
    number: "06",
    title: "Motion Design",
    description:
      "Add movement and energy to your visuals with engaging motion graphics. From subtle website interactions to bold explainer videos, animation makes your content more memorable.",
    image: { asset: { url: "/images/Our-Creative-Works-06.jpg" } },
    deliverables: ["Logo Animation", "UI Animation", "Explainer Videos", "Social Content"],
  },
];

export const fallbackClients = [
  { _id: "c1", name: "TechCorp", quote: "Exceptional design work that exceeded our expectations.", role: "Technology Company" },
  { _id: "c2", name: "CreativeStudio", quote: "A true creative partner who understands vision.", role: "Creative Agency" },
  { _id: "c3", name: "GlobalBrand", quote: "Professional, innovative, and always delivered on time.", role: "Global Enterprise" },
  { _id: "c4", name: "StartupXYZ", quote: "Transformed our brand identity completely.", role: "Tech Startup" },
];

export const fallbackAbout = {
  _id: "about",
  headline: "You need a designer who gets it",
  bio: [
    "I'm Ceeker, a freelance web designer, illustrator, and creative director based in Lagos. I specialize in crafting bold digital experiences that blend creativity with strategy.",
    "My approach is simple: understand the vision, push creative boundaries, and deliver work that not only looks stunning but drives results. Every project is an opportunity to tell a unique story.",
    "With experience spanning brand identity, UI/UX design, illustration, and motion graphics, I bring a holistic perspective to every collaboration. Let's create something remarkable together.",
  ],
  skills: [
    "Brand Strategy",
    "Visual Identity",
    "UI/UX Design",
    "Graphic Design",
    "Illustration",
    "Motion Design",
    "Web Design",
    "Print Design",
  ],
  experience: 5,
  projectsCompleted: 50,
};
