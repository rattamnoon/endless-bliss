import { motion } from "framer-motion";

interface SiteHeaderProps {
  title: string;
  subtitle: React.ReactNode;
}

export default function SiteHeader({ title, subtitle }: SiteHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 0.5 }}
      className="flex flex-col gap-4"
    >
      <h1 className="text-6xl font-bold text-wrap font-sans bg-gradient-to-r from-indigo-500 via-indigo-400 to-indigo-300 inline-block text-transparent bg-clip-text">
        {title}
      </h1>

      <div className="flex items-end justify-end gap-2">
        <h1 className="text-4xl font-bold text-wrap text-right font-sans bg-gradient-to-r from-indigo-300 via-indigo-400 to-indigo-500 inline-block text-transparent bg-clip-text">
          {subtitle}
        </h1>
        <h1 className="text-4xl font-bold text-wrap">🌻</h1>
      </div>
    </motion.div>
  );
}
