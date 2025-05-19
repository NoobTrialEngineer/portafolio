import { personalInfo } from "@/lib/data";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-purple-500/10 py-6 bg-gradient-to-b from-background to-muted/20 backdrop-blur-sm">
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-sm text-muted-foreground text-center md:text-left mb-4 md:mb-0"
            whileHover={{ scale: 1.01 }}
          >
            &copy; {new Date().getFullYear()} {personalInfo.name}.
          </motion.p>
          
          <div className="relative group">
            <motion.img 
              src="/logo.png"
              alt="logo"
              className="w-16 h-16 p-0 cursor-pointer"
              style={{ transform: "scaleX(-1)" }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
            <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-white dark:bg-gray-800 text-black dark:text-white text-xs rounded-xl py-2 px-3 bottom-full mb-2 left-1/2 transform -translate-x-1/2 w-max shadow-md border border-gray-200 dark:border-gray-700 z-10">
              Proyecto realizado con la plantilla de <a href="https://github.com/rishikesh2003/my-portfolio" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Rishikesh S</a>
              <div className="absolute h-3 w-3 bg-white dark:bg-gray-800 transform rotate-45 left-1/2 -ml-1.5 top-full -mt-1.5 border-r border-b border-gray-200 dark:border-gray-700"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}