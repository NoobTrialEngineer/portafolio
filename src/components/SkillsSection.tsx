import React from "react";
import { skills } from "@/lib/data";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";
import { GlassCard } from "./ui/glass-card";

function SkillTag({ skill, index, logo }: { skill: string; index: number, logo: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.05 * index,
      }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="px-3 py-1 bg-muted/80 backdrop-blur-sm rounded-md text-sm border border-purple-500/10 shadow-sm"
    >
      <span className="inline-flex items-center">
      <img src={logo} alt={skill} className="w-4 h-4 mr-2" />{skill}  
      </span>
      
    </motion.div>
  );
}

function LogoComment({ comment }: { comment: string }) {
  return (
    <div className="hidden md:block md:ml-4 relative group self-center flex-shrink-0">
      <img
        src="/logo.png"
        alt="logo"
        className="w-16 h-16 cursor-pointer"
        style={{
          transform: "scaleX(-1)",
        }}
      />
      <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white dark:bg-gray-800 text-black dark:text-white text-xs rounded-xl py-2 px-3 pointer-events-none top-0 left-1/2 transform -translate-x-1/2 -translate-y-full mt-[-10px] w-max shadow-md border border-gray-200 dark:border-gray-700">
        {comment}
        <div className="absolute h-3 w-3 bg-white dark:bg-gray-800 transform rotate-45 left-1/2 -ml-1.5 bottom-[-6px] border-r border-b border-gray-200 dark:border-gray-700"></div>
      </div>
    </div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const skillCategoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function SkillsSection() {
  return (
    <section
      id="habilidades"
      className="py-12 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            🛠️ Habilidades
          </h2>
        </MotionWrapper>

        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={skillCategoryVariants}>
            <GlassCard className="p-4">
              <h3 className="text-lg font-medium mb-3 text-center md:text-left flex items-center">
                <span className="mr-2 text-xl">💻</span> Lenguajes de
                programación
              </h3>

              <div className="flex flex-wrap justify-between items-start">
                <div className="flex-1 flex flex-wrap gap-2">
                  {skills.programmingLanguages.map((skill, index) => (
                    <SkillTag key={skill.language} skill={skill.language} index={index} logo={skill.icon} />
                  ))}
                </div>

                <LogoComment comment="He usado estas pero mi favorita es Java!" />
              </div>
            </GlassCard>
          </motion.div>

          <motion.div variants={skillCategoryVariants}>
            <GlassCard className="p-4">
              <h3 className="text-lg font-medium mb-3 text-center md:text-left flex items-center">
                <span className="mr-2 text-xl">🎨</span> Desarrollo Frontend
              </h3>
              <div className="flex flex-wrap justify-between items-start">
                <div className="flex-1 flex flex-wrap gap-2">
                  {skills.frontendDevelopment.map((skill, index) => (
                    <SkillTag key={skill.language} skill={skill.language} index={index} logo={skill.icon}/>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div variants={skillCategoryVariants}>
            <GlassCard className="p-4">
              <h3 className="text-lg font-medium mb-3 text-center md:text-left flex items-center">
                <span className="mr-2 text-xl">⚙️</span> Desarrollo Backend
              </h3>
              <div className="flex flex-wrap justify-between items-start">
                <div className="flex-1 flex flex-wrap gap-2">
                {skills.backendDevelopment.map((skill, index) => (
                  <SkillTag key={skill.language} skill={skill.language} index={index} logo={skill.icon}/>
                ))}
              </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div variants={skillCategoryVariants}>
            <GlassCard className="p-4">
              <h3 className="text-lg font-medium mb-3 text-center md:text-left flex items-center">
                <span className="mr-2 text-xl">🗄️</span> Bases de datos
              </h3>
              <div className="flex flex-wrap justify-between items-start">
                <div className="flex-1 flex flex-wrap gap-2">
                {skills.databaseAndStorage.map((skill, index) => (
                  <SkillTag key={skill.language} skill={skill.language} index={index} logo={skill.icon}/>
                ))}
              </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div variants={skillCategoryVariants}>
            <GlassCard className="p-4">
              <h3 className="text-lg font-medium mb-3 text-center md:text-left flex items-center">
                <span className="mr-2 text-xl">☁️</span> Nube y DevOps
              </h3>
              <div className="flex flex-wrap justify-between items-start">
                <div className="flex-1 flex flex-wrap gap-2">
                {skills.cloudAndDevOps.map((skill, index) => (
                  <SkillTag key={skill.language} skill={skill.language} index={index} logo={skill.icon}/>
                ))}
              </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div variants={skillCategoryVariants}>
            <GlassCard className="p-4">
              <h3 className="text-lg font-medium mb-3 text-center md:text-left flex items-center">
                <span className="mr-2 text-xl">🧰</span> Herramientas y
                Servicios
              </h3>
              <div className="flex flex-wrap justify-between items-start">
                <div className="flex-1 flex flex-wrap gap-2">
                {skills.toolsAndServices.map((skill, index) => (
                  <SkillTag key={skill.language} skill={skill.language} index={index} logo={skill.icon}/>
                ))}
              </div>
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
