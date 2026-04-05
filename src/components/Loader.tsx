import { AnimatePresence, motion } from "framer-motion";

interface LoaderProps {
  isLoading: boolean;
}

const Loader = ({ isLoading }: LoaderProps) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,hsl(0_100%_41%/0.28),transparent_34%),linear-gradient(180deg,hsl(0_100%_28%),hsl(0_100%_18%))]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(0_0%_100%/0.08),transparent_45%)]" />
          <div className="absolute -top-20 -left-16 h-56 w-56 rounded-full bg-white/8 blur-3xl" />
          <div className="absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-forest-light/15 blur-3xl" />

          {/* Rings */}
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 mb-8 rounded-full bg-white/6 backdrop-blur-xl border border-white/10 shadow-[0_0_60px_hsl(0_0%_0%/0.18)]">
            <div className="absolute inset-0 rounded-full border-2 border-white/35 animate-spin-slow" />
            <div className="absolute inset-3 rounded-full border border-white/55 animate-spin-reverse" />
            <div className="absolute inset-6 rounded-full border border-white/25 animate-spin-slow" style={{ animationDuration: "4s" }} />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-white/30 animate-pulse" />
            </div>

            {[0, 90, 180, 270].map((deg) => (
              <motion.div
                key={deg}
                className="absolute w-2 h-2 rounded-full bg-white"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `rotate(${deg}deg) translateY(-60px)`,
                }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: deg / 360 }}
              />
            ))}
          </div>

          <motion.p
            className="font-heading text-xl sm:text-2xl tracking-[0.2em] text-white"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Initializing Secure Interface...
          </motion.p>

          <motion.div className="mt-6 h-0.5 w-40 sm:w-48 overflow-hidden rounded-full bg-white/20">
            <motion.div
              className="h-full bg-white"
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
