
import { motion } from "framer-motion";

const WelcomeSection = () => {
  return (
    <div className="text-center space-y-4 mb-16">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-bold text-white"
      >
        Bem vindo.
      </motion.h1>
    </div>
  );
};

export default WelcomeSection;
