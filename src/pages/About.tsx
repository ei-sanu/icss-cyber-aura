import { motion } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";
import { ShieldCheck, Cloud, Cpu, Code, Network, Lock, FlaskConical } from "lucide-react";

const timeline = [
  { year: "2016", event: "ICSS founded as a unit of GreenFellow IT Security Solutions Pvt Ltd" },
  { year: "2018", event: "Expanded to 50+ clients with VAPT specialization" },
  { year: "2020", event: "Launched Training & Development division" },
  { year: "2022", event: "200+ global clients milestone reached" },
  { year: "2024", event: "ICSS Ambassadors Program launched" },
];

const programs = [
  { icon: Lock, name: "Ethical Hacking" },
  { icon: Cpu, name: "IoT Security" },
  { icon: Cloud, name: "Cloud Computing (AWS/Azure)" },
  { icon: FlaskConical, name: "Machine Learning" },
  { icon: Code, name: "Python Programming" },
  { icon: Network, name: "CCNA Networking" },
  { icon: ShieldCheck, name: "Blockchain Security" },
];

const About = () => (
  <div className="pt-28 pb-20 px-6">
    {/* Hero */}
    <section className="max-w-4xl mx-auto text-center mb-20">
      <SectionReveal>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass neon-border mb-6">
          <span className="text-xs tracking-widest text-golden uppercase font-heading">About ICSS</span>
        </div>
        <h1 className="font-heading text-3xl md:text-5xl font-bold mb-6">
          Securing the <span className="text-gradient-golden">Digital Frontier</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          Indian Cyber Security Solutions (ICSS) is a unit of GreenFellow IT Security Solutions Pvt Ltd,
          established in 2016, providing cutting-edge cybersecurity solutions to 200+ clients worldwide.
        </p>
      </SectionReveal>
    </section>

    {/* Timeline */}
    <section className="max-w-3xl mx-auto mb-24">
      <SectionReveal>
        <h2 className="font-heading text-xl md:text-3xl font-bold text-center mb-12">
          Our <span className="text-gradient-golden">Journey</span>
        </h2>
      </SectionReveal>

      <div className="relative">
        <div className="absolute left-[22px] md:left-1/2 top-0 bottom-0 w-px bg-golden/20" />

        {timeline.map((item, i) => (
          <SectionReveal key={item.year} delay={i * 0.1}>
            <div className={`relative flex items-start gap-6 mb-10 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}>
              <div className="hidden md:block flex-1" />
              <div className="relative z-10 flex-shrink-0">
                <motion.div
                  className="w-11 h-11 rounded-full bg-background border-2 border-golden flex items-center justify-center glow-golden"
                  whileHover={{ scale: 1.2 }}
                >
                  <span className="text-xs font-heading font-bold text-golden">{item.year.slice(2)}</span>
                </motion.div>
              </div>
              <div className="flex-1 p-5 rounded-xl glass neon-border hover:glow-golden transition-all duration-500">
                <div className="font-heading text-sm font-bold text-golden mb-1">{item.year}</div>
                <p className="text-sm text-muted-foreground">{item.event}</p>
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>

    {/* Programs */}
    <section className="max-w-5xl mx-auto mb-20">
      <SectionReveal>
        <h2 className="font-heading text-xl md:text-3xl font-bold text-center mb-4">
          Training <span className="text-gradient-golden">Programs</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          ICSS Training & Development offers world-class programs
        </p>
      </SectionReveal>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {programs.map((p, i) => (
          <SectionReveal key={p.name} delay={i * 0.08}>
            <motion.div
              className="p-6 rounded-xl glass neon-border text-center hover:glow-golden-strong transition-all duration-500 group"
              whileHover={{ y: -5 }}
            >
              <p.icon className="w-8 h-8 text-golden mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-sm font-medium text-foreground/80">{p.name}</p>
            </motion.div>
          </SectionReveal>
        ))}
      </div>
    </section>

    {/* R&D */}
    <section className="max-w-3xl mx-auto text-center">
      <SectionReveal>
        <div className="p-10 rounded-2xl glass neon-border hover:glow-golden transition-all duration-500">
          <h2 className="font-heading text-xl md:text-2xl font-bold mb-4">
            Research & <span className="text-gradient-golden">Development</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            The ICSS R&D division is driven by innovation from young engineers, constantly pushing
            boundaries in vulnerability assessment, penetration testing, and next-gen security solutions.
          </p>
        </div>
      </SectionReveal>
    </section>
  </div>
);

export default About;
