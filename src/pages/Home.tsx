import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import CyberBackground from "@/components/CyberBackground";
import SectionReveal from "@/components/SectionReveal";

const Home = () => (
  <div className="relative">
    {/* Hero */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-forest-deep via-background to-background" />
      <CyberBackground />
      <div className="absolute inset-0 cyber-grid opacity-10" />

      {/* Floating shapes */}
      <motion.div
        className="absolute top-1/4 left-[10%] w-32 h-32 rounded-full border border-golden/10"
        animate={{ y: [-20, 20, -20], rotate: [0, 180, 360] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-[15%] w-20 h-20 rounded-lg border border-forest-light/20 rotate-45"
        animate={{ y: [10, -15, 10] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass neon-border mb-8">
            <Zap size={14} className="text-golden" />
            <span className="text-xs tracking-widest text-golden uppercase font-heading">
              Cybersecurity Ambassador Network
            </span>
          </div>
        </motion.div>

        <motion.h1
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="text-gradient-golden">Empowering</span>
          <br />
          <span className="text-foreground">Cyber Security Leaders</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
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
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-golden text-primary-foreground font-semibold hover:shadow-[0_0_30px_hsl(47_100%_50%/0.4)] transition-all duration-300"
          >
            Join Now
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full neon-border text-golden font-semibold hover:bg-golden/10 transition-all duration-300"
          >
            Explore
          </Link>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>

    {/* Stats */}
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { value: "200+", label: "Global Clients" },
          { value: "2016", label: "Established" },
          { value: "50+", label: "Ambassadors" },
          { value: "7+", label: "Programs" },
        ].map((stat, i) => (
          <SectionReveal key={stat.label} delay={i * 0.1}>
            <div className="text-center p-6 rounded-2xl glass neon-border hover:glow-golden transition-all duration-500 group">
              <div className="font-heading text-3xl md:text-4xl font-bold text-golden group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>

    {/* Highlights */}
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-center mb-16">
            Why <span className="text-gradient-golden">ICSS ARC</span>?
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Learn & Grow",
              desc: "Access world-class training in ethical hacking, cloud computing, and emerging technologies.",
            },
            {
              title: "Lead & Represent",
              desc: "Become a campus ambassador and lead cybersecurity awareness initiatives across India.",
            },
            {
              title: "Connect & Collaborate",
              desc: "Join a network of passionate cybersecurity enthusiasts and industry professionals.",
            },
          ].map((item, i) => (
            <SectionReveal key={item.title} delay={i * 0.15}>
              <div className="p-8 rounded-2xl glass neon-border hover:glow-golden-strong hover:-translate-y-2 transition-all duration-500 h-full">
                <div className="w-10 h-10 rounded-lg bg-golden/10 flex items-center justify-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-golden animate-pulse-glow" />
                </div>
                <h3 className="font-heading text-lg font-bold text-golden mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Home;
