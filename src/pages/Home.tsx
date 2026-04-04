import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Zap, Shield, Lock, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import SectionReveal from "@/components/SectionReveal";

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const statsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: statsProgress } = useScroll({ target: statsRef, offset: ["start end", "center center"] });
  const statsY = useTransform(statsProgress, [0, 1], [60, 0]);

  return (
    <div className="relative">
      {/* Hero with parallax */}
      <motion.section
        ref={heroRef}
        style={{ y: heroY, scale: heroScale, opacity: heroOpacity }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden px-4"
      >
        <div className="relative z-10 text-center max-w-4xl mx-auto pt-24 pb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-forest text-golden mb-8">
              <Zap size={14} />
              <span className="text-xs tracking-[0.2em] uppercase font-heading text-base">
                Cybersecurity Ambassador Network
              </span>
            </div>
          </motion.div>

          <motion.h1
            className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wide leading-[0.95]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-forest">Empowering</span>
            <br />
            <span className="text-forest/80">Cyber Security</span>
            <br />
            <span className="text-forest">Leaders</span>
          </motion.h1>

          <motion.p
            className="mt-6 text-base sm:text-lg text-foreground/70 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Join the ICSS Ambassadors Network and become part of the next generation defending the digital frontier.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link
              to="/ambassadors"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-forest text-golden font-heading text-xl tracking-wider hover:shadow-[0_0_30px_hsl(161_96%_14%/0.4)] transition-all duration-300"
            >
              Join Now
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-forest text-forest font-heading text-xl tracking-wider hover:bg-forest hover:text-golden transition-all duration-300"
            >
              Explore
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats with scroll animation */}
      <motion.section ref={statsRef} style={{ y: statsY }} className="py-16 sm:py-20 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { value: "200+", label: "Global Clients", icon: Globe },
            { value: "2016", label: "Established", icon: Shield },
            { value: "50+", label: "Ambassadors", icon: Zap },
            { value: "7+", label: "Programs", icon: Lock },
          ].map((stat, i) => (
            <SectionReveal key={stat.label} delay={i * 0.1}>
              <div className="green-card p-5 sm:p-6 text-center hover:scale-105 hover:glow-forest transition-all duration-500 group">
                <stat.icon className="w-6 h-6 text-golden mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <div className="font-heading text-3xl sm:text-4xl md:text-5xl text-golden">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs sm:text-sm text-primary-foreground/60">{stat.label}</div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </motion.section>

      {/* Highlights */}
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionReveal>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-center text-forest mb-12 sm:mb-16">
              Why ICSS ARC?
            </h2>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                title: "Learn & Grow",
                desc: "Access world-class training in ethical hacking, cloud computing, and emerging technologies.",
                icon: "📚",
              },
              {
                title: "Lead & Represent",
                desc: "Become a campus ambassador and lead cybersecurity awareness initiatives across India.",
                icon: "🚀",
              },
              {
                title: "Connect & Collaborate",
                desc: "Join a network of passionate cybersecurity enthusiasts and industry professionals.",
                icon: "🤝",
              },
            ].map((item, i) => (
              <SectionReveal key={item.title} delay={i * 0.15}>
                <motion.div
                  className="green-card p-6 sm:p-8 hover:glow-forest-strong transition-all duration-500 h-full"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="font-heading text-2xl sm:text-3xl text-golden mb-3">{item.title}</h3>
                  <p className="text-sm text-primary-foreground/70 leading-relaxed">{item.desc}</p>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
