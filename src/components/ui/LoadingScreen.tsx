import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary-900 to-primary-800"
    >
      <div className="relative">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-32 h-32 rounded-full border-4 border-primary-500 relative flex items-center justify-center"
        >
          <motion.div
            animate={{ 
              rotate: 360,
              borderColor: ['#3B4D71', '#FF6B6B', '#3B4D71']
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0 rounded-full border-4 border-t-accent-500"
          />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white font-medium"
          >
            Loading
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary-500 to-accent-500"
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;