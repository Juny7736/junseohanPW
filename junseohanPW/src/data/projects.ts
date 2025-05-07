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
      "Designed the Frontend and overall layout for a web platform aimed at helping students easily find off-campus housing near their schools, streamlining their search experience. I’m currently working on completing the development and deploying the site to make it fully functional and accessible for students to use.",
    image: "images/dormzy.png",
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
    demoLink: "https://dormzy.netlify.app/",
    githubLink: "https://github.com/Juny7736/DormzyRough",
  },
  {
    title: "AI-powered interview TTS",
    description:
      "At DrawDream, I built the frontend for an AI-powered interview practice tool simulating real-time behavioral interviews. Integrated browser tab audio capture for transcribing instructor questions, enabling voice-based responses. The backend is in progress—I’ll be completing it.",
    image: "images/drawdream.png",
    category: "software development",
    technologies: [
      "React",
      "TypeScript",
      "CSS",
      "Figma",
      "Supabase",
      "Rust",
      "Prisma",
    ],
    demoLink: "https://drawdreamai.netlify.app/",
    githubLink: "https://github.com/Juny7736/DrawDream",
  },
  {
    title: "Hamilton Water Polo Club",
    description:
      "Collaborated with a five-member development squad to revamp The Hamilton Aquatic Water Polo Club’s (HAWPC) website, enhancing both functionality and visual appeal.",
    image: "images/hamiltonWPC.png",
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
    demoLink: "https://hamiltonwaterpolo.ca/",
    githubLink: "n/a",
  },
  {
    title: "UEFA Champions League Tracker",
    description:
      "Developed the UEFA Champions League Tracker, a dynamic web application. Built using React, TypeScript, Tailwind CSS, Supabase, and Figma, it offers enhanced functionality and a modern, user-friendly interface. It is work in progress and the tracker will provide real-time updates and an engaging experience, showcasing full-stack development expertise.",
    image: "images/championsleague.png",
    category: "full stack development",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Figma"],
    demoLink: "https://championsleaguetracker.netlify.app/",
    githubLink: "https://github.com/Juny7736/championsleague",
  },
  {
    title: "Korean GTA Housing",
    description:
      "A web platform for real estate listings with advanced search, filtering, and virtual tours for Koreans living in GTA. The development is WORK IN PROGRESS.",
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
    demoLink: "n/a",
    githubLink: "n/a",
  },
  {
    title: "Discord Bot",
    description:
      "A platform for food Bousiasts to discover, share, and collaborate on recipes with interactive features.",
    image: "images/discordbot.png",
    category: "software development",
    technologies: ["Python"],
    demoLink: "n/a",
    githubLink: "https://github.com/Juny7736/DiscordBot",
  },
];
