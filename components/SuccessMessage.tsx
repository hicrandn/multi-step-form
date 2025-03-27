import { motion } from "framer-motion";
import { CheckIcon } from "@radix-ui/react-icons";

export default function SuccessMessage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001
        }
      }}
      className="flex flex-col items-center justify-center space-y-4 p-8 text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          delay: 0.2,
          duration: 0.5,
          type: "spring",
          damping: 10,
          stiffness: 100
        }}
        className="rounded-full bg-green-100 p-4"
      >
        <CheckIcon className="h-12 w-12 text-green-600" />
      </motion.div>
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-2xl font-bold text-gray-900"
      >
        Başarıyla Tamamlandı!
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-gray-600"
      >
        Form başarıyla gönderildi. En kısa sürede sizinle iletişime geçeceğiz.
      </motion.p>
    </motion.div>
  );
} 