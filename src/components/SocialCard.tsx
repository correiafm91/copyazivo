
import { motion } from "framer-motion";
import { Youtube, Instagram, Mail } from "lucide-react";

interface SocialCardProps {
  type: "youtube" | "instagram" | "email";
  title: string;
  description: string;
  link: string;
  delay?: number;
}

const SocialCard = ({ type, title, description, link, delay = 0 }: SocialCardProps) => {
  const icons = {
    youtube: <Youtube className="w-8 h-8" color="#ea384c" />,
    instagram: <Instagram className="w-8 h-8" stroke="#e1306c" />,
    email: <Mail className="w-8 h-8" color="#4285F4" />,
  };

  return (
    <motion.a
      href={type === "email" ? `mailto:${link}` : link}
      target={type === "email" ? "_self" : "_blank"}
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay }}
      className="block w-full"
    >
      <div className="card-gradient p-6 rounded-xl hover:scale-105 transition-transform duration-300 border border-white/10">
        <div className="flex items-center gap-4 mb-4">
          {icons[type]}
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <p className="text-gray-300 text-sm md:text-base">{description}</p>
      </div>
    </motion.a>
  );
};

export default SocialCard;
