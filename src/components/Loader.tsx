import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  isLoading: boolean;
}

const Loader = ({ isLoading }: LoaderProps) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
          style={{ backgroundColor: "hsl(47 100% 50%)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Rings */}
          <div className="relative w-40 h-40 mb-8">
            <div className="absolute inset-0 rounded-full border-2 border-forest/40 animate-spin-slow" />
            <div className="absolute inset-3 rounded-full border border-forest/60 animate-spin-reverse" />
            <div className="absolute inset-6 rounded-full border border-forest/30 animate-spin-slow" style={{ animationDuration: "4s" }} />
            
            {/* Center glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-forest/20 animate-pulse" />
            </div>

            {[0, 90, 180, 270].map((deg) => (
              <motion.div
                key={deg}
                className="absolute w-2 h-2 rounded-full bg-forest"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `rotate(${deg}deg) translateY(-70px)`,
                }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: deg / 360 }}
              />
            ))}
          </div>

          <motion.p
            className="font-heading text-sm tracking-[0.3em] text-forest uppercase"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Initializing Secure Interface...
          </motion.p>

          <motion.div className="mt-6 h-px w-48 overflow-hidden rounded-full bg-forest/20">
            <motion.div
              className="h-full bg-forest"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
