import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import SectionReveal from "@/components/SectionReveal";

const Home = () => (
  <div className="relative">
    {/* Hero */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest/10 border border-forest/20 mb-8">
            <Zap size={14} className="text-forest" />
            <span className="text-xs tracking-widest text-forest uppercase font-heading">
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
          <span className="text-gradient-forest">Empowering</span>
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
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-forest text-primary-foreground font-semibold hover:shadow-[0_0_30px_hsl(161_96%_14%/0.3)] transition-all duration-300"
          >
            Join Now
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-forest/40 text-forest font-semibold hover:bg-forest/10 transition-all duration-300"
          >
            Explore
          </Link>
        </motion.div>
      </div>
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
            <div className="text-center p-6 rounded-2xl bg-forest/10 border border-forest/20 hover:glow-forest transition-all duration-500 group">
              <div className="font-heading text-3xl md:text-4xl font-bold text-forest group-hover:scale-110 transition-transform duration-300">
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
            Why <span className="text-gradient-forest">ICSS ARC</span>?
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
              <div className="p-8 rounded-2xl bg-forest/10 border border-forest/20 hover:glow-forest-strong hover:-translate-y-2 transition-all duration-500 h-full">
                <div className="w-10 h-10 rounded-lg bg-forest/15 flex items-center justify-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-forest animate-pulse" />
                </div>
                <h3 className="font-heading text-lg font-bold text-forest mb-3">{item.title}</h3>
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
