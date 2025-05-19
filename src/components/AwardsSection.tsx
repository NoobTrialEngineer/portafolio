import React from "react";
import { Calendar, BookOpen, Clock } from "lucide-react";
import MotionWrapper from "./MotionWrapper";
import { GlassCard } from "./ui/glass-card";
import { motion } from "framer-motion";

// Datos de aprendizaje actual
const learningItems = [
  {
    id: 1,
    title: "Desarrollo de aplicaciones con Astro",
    description: "Estoy profundizando en Astro para crear sitios web más rápidos y eficientes. Me fascina su enfoque de Islands Architecture y cómo permite integrar múltiples frameworks de UI en un mismo proyecto.",
    date: "Mayo 2025",
    imageUrl: "/learning/astro.png", 
    tags: ["Astro", "Frontend", "Performance"]
  },
  {
    id: 2,
    title: "Intregración continua con Jenkins",
    description: "Aprendiendo a configurar y utilizar Jenkins para la integración continua y entrega continua (CI/CD) en mis proyectos. Buscando optimizar el flujo de trabajo de desarrollo.",
    date: "Mayo 2025",
    imageUrl: "/learning/jenkins.jpg", 
    tags: ["Jenkins", "DevOps", "CI/CD"]
  }
];

// Animaciones para los elementos
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

export default function AwardsSection() {
  return (
    <section
      id="aprendiendo"
      className="py-12 bg-gradient-to-b from-background to-muted/10"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            📚 Aprendiendo actualmente
          </h2>
        </MotionWrapper>

        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {learningItems.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <GlassCard className="p-5 overflow-hidden">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/4">
                    <div className="bg-muted/30 rounded-lg overflow-hidden aspect-square flex items-center justify-center">
                      {item.imageUrl ? (
                        <img 
                          src={item.imageUrl} 
                          alt={item.title} 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <BookOpen className="w-16 h-16 opacity-50" />
                      )}
                    </div>
                  </div>
                  
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                    
                    <p className="text-muted-foreground mb-4">
                      {item.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="px-2 py-1 bg-primary/10 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{item.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}