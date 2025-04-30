export type Category =
  // | "web"
  "software development" | "full stack development";

export interface Project {
  title: string;
  description: string;
  image: string;
  category: Category;
  technologies: string[];
  demoLink: string;
  githubLink: string;
}

export const projects: Project[] = [
  {
    title: "Dormzy Student Housing",
    description:
      "Developed a full-functional website to help students easily find off-campus housing near their schools, streamlining their search process. 100+ Users!",
    image:
      "https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "full stack development",
    technologies: [
      "React",
      "TypeScript",
      "CSS",
      "Supabase",
      "Node.js",
      "Vite",
      "Git",
      "Figma",
    ],
    demoLink: "https://example.com/demo",
    githubLink: "https://github.com",
  },
  {
    title: "Quotograph Measurement Tool",
    description:
      "A redesign concept for a popular social media platform focusing on improved usability and accessibility.",
    image:
      "https://images.pexels.com/photos/3850227/pexels-photo-3850227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "software development",
    technologies: ["React", "JavaScript", "SCSS", "Python"],
    demoLink: "https://example.com/demo",
    githubLink: "https://github.com",
  },

  {
    title: "AI-powered interview TTS",
    description:
      "At DrawDream, developed an AI-powered interview practice toolto simulate real-time behavioral interviews for interviewers. Integrated browser tab audio capture to transcribe instructor questions into text, allowing interviewers to respond verbally without needing direct access to the app.",
    image:
      "https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "software development",
    technologies: ["React", "TypeScript", "CSS", "Supabase", "Rust", "Prisma"],
    demoLink: "https://example.com/demo",
    githubLink: "https://github.com",
  },
  {
    title: "Hamilton Water Polo Club",
    description:
      "Collaborated with a five-member development squad to revamp The Hamilton Aquatic Water Polo Club’s (HAWPC) website, enhancing both functionality and visual appeal.",
    image:
      "https://images.pexels.com/photos/6177645/pexels-photo-6177645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "full stack development",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Strapi",
      "Postman",
      "Figma",
      "Git",
    ],
    demoLink: "https://example.com/demo",
    githubLink: "https://github.com",
  },
  {
    title: "Korean GTA Housing",
    description:
      "A web platform for real estate listings with advanced search, filtering, and virtual tours.",
    image:
      "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "full stack development",
    technologies: [
      "React",
      "TypeScript",
      "CSS",
      "Supabase",
      "Node.js",
      "Vite",
      "Git",
      "Figma",
    ],
    demoLink: "https://example.com/demo",
    githubLink: "https://github.com",
  },
  {
    title: "Discord Bot",
    description:
      "A platform for food Bousiasts to discover, share, and collaborate on recipes with interactive features.",
    image:
      "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "software development",
    technologies: ["Python"],
    demoLink: "https://example.com/demo",
    githubLink: "https://github.com",
  },
];
