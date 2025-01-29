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
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl md:text-2xl text-gray-300"
      >
        Tudo sobre mim está aqui
      </motion.p>
    </div>
  );
};

export default WelcomeSection;