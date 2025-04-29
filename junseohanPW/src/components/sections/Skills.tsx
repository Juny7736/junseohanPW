import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaInfinity } from "react-icons/fa";

interface Skill {
  name: string;
  percentage: number | string;
  color: string;
  customValue?: string;
}

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Pastel colors: Blush Pink — #FFC0CB, Lavender — #E6E6FA, Mint Green — #98FF98, Sky Blue — #87CEEB,
  // Peach — #FFDAB9, Lilac — #C8A2C8, Pastel Yellow — #FFFFB3, Coral — #FF7F50,
  // Turquoise — #40E0D0, Periwinkle — #CCCCFF, Soft

  const technicalSkills: Skill[] = [
    { name: "TypeScript/JavaScript", percentage: 100, color: "#FFC0CB" },
    { name: "React", percentage: 100, color: "#E6E6FA" },
    { name: "CSS/SCSS", percentage: 100, color: "#98FF98" },
    { name: "Next.js", percentage: 80, color: "#87CEEB" },
    { name: "UI/UX Design", percentage: 90, color: "#FFDAB9" },
    { name: "Python", percentage: 75, color: "#C8A2C8" },
    { name: "SQL", percentage: 75, color: "#FFFFB3" },
    { name: "C++", percentage: 90, color: "#FF7F50" },
  ];

  const softSkills: Skill[] = [
    { name: "Problem Solving", percentage: 90, color: "#40E0D0" },
    { name: "Communication", percentage: 90, color: "#CCCCFF" },
    { name: "Teamwork", percentage: 90, color: "#FFB347" },
    { name: "Time Management", percentage: 85, color: "#9FE2BF" },
  ];

  const bestSkills: (Skill & { customValue?: string })[] = [
    { name: "BIG SMILE", percentage: "∞", color: "#FFC107", customValue: "∞" },
    { name: "CHATGPT", percentage: "∞", color: "#8E4585", customValue: "∞" },
    {
      name: "CTRL+C & CTRL+V",
      percentage: "∞",
      color: "#008080",
      customValue: "∞",
    },
    {
      name: "WATER DRINKING EXPERT 💧",
      percentage: "∞",
      color: "#00B7EB",
      customValue: "∞",
    },
    {
      name: "ROCK-PAPER-SCISSORS CHAMP ✌️",
      percentage: "∞",
      color: "#FF69B4",
      customValue: "∞",
    },
    {
      name: "NAP CHAMPION 🛌",
      percentage: "∞",
      color: "#6A5ACD",
      customValue: "∞",
    },
    {
      name: "PROFESSIONAL SNACKER 🍿",
      percentage: "∞",
      color: "#FFA500",
      customValue: "∞",
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 bg-primary-50 dark:bg-primary-800/30"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium text-accent-500 bg-accent-50 dark:bg-accent-900/20 rounded-full mb-4">
            My Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-4">
            Expertise & Abilities
          </h2>
          <div className="w-20 h-1 bg-accent-500 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl font-bold mb-6 text-primary-800 dark:text-white"
            >
              Technical Skills
            </motion.h3>

            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-primary-700 dark:text-primary-200">
                      {skill.name}
                    </span>
                    <span className="text-primary-600 dark:text-primary-300">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="h-3 rounded-full bg-gray-200 dark:bg-primary-700">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: skill.color }}
                      initial={{ width: 0 }}
                      animate={
                        isInView
                          ? { width: `${skill.percentage}%` }
                          : { width: 0 }
                      }
                      transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Soft Skills and Best Skills */}
          <div>
            {/* Soft Skills */}
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl font-bold mb-6 text-primary-800 dark:text-white"
            >
              Soft Skills
            </motion.h3>

            <div className="space-y-6">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-primary-700 dark:text-primary-200">
                      {skill.name}
                    </span>
                    <span className="text-primary-600 dark:text-primary-300">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="h-3 rounded-full bg-gray-200 dark:bg-primary-700">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: skill.color }}
                      initial={{ width: 0 }}
                      animate={
                        isInView
                          ? { width: `${skill.percentage}%` }
                          : { width: 0 }
                      }
                      transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Best Skills */}
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-2xl font-bold mb-6 text-primary-800 dark:text-white mt-12"
            >
              My Personal Skills
            </motion.h3>

            <div className="space-y-6">
              {bestSkills.map((skill, index) => {
                const isInfiniteSkill = bestSkills.some(
                  (s) => s.name === skill.name
                );

                // Define gradient for infinite skills
                const gradient =
                  skill.name === "BIG SMILE"
                    ? "linear-gradient(90deg, #FFC107, #FFECB3, #FFC107)"
                    : skill.name === "CHATGPT"
                    ? "linear-gradient(90deg, #8E4585, #C68BBF, #8E4585)"
                    : skill.name === "CTRL+C & CTRL+V"
                    ? "linear-gradient(90deg, #008080, #66B2B2, #008080)"
                    : skill.name === "WATER DRINKING EXPERT 💧"
                    ? "linear-gradient(90deg, #00B7EB, #66D9FF, #00B7EB)"
                    : skill.name === "ROCK-PAPER-SCISSORS CHAMP ✌️"
                    ? "linear-gradient(90deg, #FF69B4, #FFB6C1, #FF69B4)"
                    : skill.name === "NAP CHAMPION 🛌"
                    ? "linear-gradient(90deg, #6A5ACD, #B0C4DE, #6A5ACD)"
                    : skill.name === "PROFESSIONAL SNACKER 🍿"
                    ? "linear-gradient(90deg, #FFA500, #FFD700, #FFA500)"
                    : undefined;

                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                    }
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span
                        className={`font-medium ${
                          isInfiniteSkill
                            ? "text-2xl font-extrabold animate-pulse"
                            : "text-primary-700 dark:text-primary-200"
                        }`}
                        style={
                          isInfiniteSkill
                            ? {
                                color: skill.color,
                                textShadow: `0 0 10px ${skill.color}`,
                              }
                            : {}
                        }
                      >
                        {skill.name}
                      </span>
                      <span
                        className={`flex items-center gap-1 ${
                          isInfiniteSkill
                            ? "text-xl font-bold"
                            : "text-primary-600 dark:text-primary-300"
                        }`}
                      >
                        {isInfiniteSkill ? (
                          <motion.div
                            className="flex items-center gap-2"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                          >
                            <span style={{ color: skill.color }}>INFINITE</span>
                            <span
                              style={{
                                fontWeight: "bold",
                                color: skill.color,
                                textShadow: `0 0 5px ${skill.color}`,
                              }}
                            >
                              {/* {skill.name} */}
                            </span>
                            <FaInfinity style={{ color: skill.color }} />
                          </motion.div>
                        ) : (
                          `${skill.percentage}%`
                        )}
                      </span>
                    </div>
                    <div className="h-3 rounded-full bg-gray-200 dark:bg-primary-700">
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          backgroundColor: !isInfiniteSkill
                            ? skill.color
                            : undefined,
                          backgroundImage: isInfiniteSkill
                            ? gradient
                            : undefined,
                          backgroundSize: isInfiniteSkill
                            ? "200% 100%"
                            : undefined,
                        }}
                        initial={{ width: 0 }}
                        animate={
                          isInView
                            ? {
                                width:
                                  skill.percentage === "∞"
                                    ? "100%"
                                    : `${skill.percentage}%`,
                                ...(isInfiniteSkill && {
                                  backgroundPosition: ["0% 50%", "200% 50%"],
                                }),
                              }
                            : { width: 0 }
                        }
                        transition={{
                          duration: 1,
                          delay: 0.4 + index * 0.1,
                          ...(isInfiniteSkill && {
                            backgroundPosition: {
                              repeat: Infinity,
                              duration: 2,
                            },
                          }),
                        }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Tools & Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-12"
            >
              <h3 className="text-2xl font-bold mb-6 text-primary-800 dark:text-white">
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Linux",
                  "Windows",
                  "MySQL",
                  "Git",
                  "VS Code",
                  "Figma",
                  "Tailwind CSS",
                  "Node.js",
                  "Vite",
                  "Postman",
                  "Supabase",
                ].map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 bg-white dark:bg-primary-700 rounded-full shadow-sm text-primary-600 dark:text-primary-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
