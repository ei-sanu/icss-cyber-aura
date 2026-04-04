import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";
import { ShieldCheck, Cloud, Cpu, Code, Network, Lock, FlaskConical } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";
import aboutOffice from "@/assets/about-office.jpg";

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
  { icon: Cloud, name: "Cloud (AWS/Azure)" },
  { icon: FlaskConical, name: "Machine Learning" },
  { icon: Code, name: "Python" },
  { icon: Network, name: "CCNA Networking" },
  { icon: ShieldCheck, name: "Blockchain" },
];

const About = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <div className="pt-28 pb-20 px-4">
      {/* Hero */}
      <motion.section ref={heroRef} style={{ y: heroY }} className="max-w-5xl mx-auto text-center mb-16 sm:mb-20">
        <SectionReveal>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-forest text-golden mb-6">
            <span className="text-xs tracking-[0.2em] uppercase font-heading text-base">About ICSS</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl text-forest mb-6">
            Securing the Digital Frontier
          </h1>
          <p className="text-foreground/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Indian Cyber Security Solutions (ICSS) is a unit of GreenFellow IT Security Solutions Pvt Ltd,
            established in 2016, providing cutting-edge cybersecurity solutions to 200+ clients worldwide.
          </p>
        </SectionReveal>
      </motion.section>

      {/* Team & Office images section */}
      <section className="max-w-5xl mx-auto mb-20 sm:mb-24">
        <div className="grid md:grid-cols-2 gap-6">
          <SectionReveal delay={0}>
            <div className="overflow-hidden rounded-2xl relative group">
              <img
                src={aboutTeam}
                alt="ICSS Team"
                loading="lazy"
                width={1200}
                height={640}
                className="w-full h-64 sm:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="font-heading text-2xl text-golden">Our Team</h3>
                  <p className="text-primary-foreground/70 text-sm">Dedicated cybersecurity professionals</p>
                </div>
              </div>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <div className="overflow-hidden rounded-2xl relative group">
              <img
                src={aboutOffice}
                alt="ICSS Operations Center"
                loading="lazy"
                width={1200}
                height={640}
                className="w-full h-64 sm:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="font-heading text-2xl text-golden">Operations Center</h3>
                  <p className="text-primary-foreground/70 text-sm">State-of-the-art security monitoring</p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
        {/* Placeholder note for user's own images */}
        <p className="text-center text-foreground/40 text-xs mt-4 italic">
          You can replace these images with your own company photos
        </p>
      </section>

      {/* Timeline */}
      <section className="max-w-3xl mx-auto mb-20 sm:mb-24">
        <SectionReveal>
          <h2 className="font-heading text-3xl sm:text-5xl text-forest text-center mb-10 sm:mb-12">
            Our Journey
          </h2>
        </SectionReveal>

        <div className="relative">
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 bg-forest/30" />

          {timeline.map((item, i) => (
            <SectionReveal key={item.year} delay={i * 0.1}>
              <div className={`relative flex items-start gap-4 sm:gap-6 mb-8 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}>
                <div className="hidden md:block flex-1" />
                <div className="relative z-10 flex-shrink-0">
                  <motion.div
                    className="w-10 h-10 rounded-full bg-forest flex items-center justify-center glow-forest"
                    whileHover={{ scale: 1.2 }}
                  >
                    <span className="text-xs font-heading text-lg text-golden">{item.year.slice(2)}</span>
                  </motion.div>
                </div>
                <div className="flex-1 green-card p-4 sm:p-5 hover:glow-forest transition-all duration-500">
                  <div className="font-heading text-xl text-golden mb-1">{item.year}</div>
                  <p className="text-sm text-primary-foreground/70">{item.event}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* Training Programs */}
      <section className="max-w-5xl mx-auto mb-16 sm:mb-20">
        <SectionReveal>
          <h2 className="font-heading text-3xl sm:text-5xl text-forest text-center mb-4">
            Training Programs
          </h2>
          <p className="text-center text-foreground/60 mb-10 sm:mb-12">
            ICSS Training & Development offers world-class programs
          </p>
        </SectionReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
          {programs.map((p, i) => (
            <SectionReveal key={p.name} delay={i * 0.08}>
              <motion.div
                className="green-card p-4 sm:p-6 text-center hover:glow-forest-strong transition-all duration-500 group"
                whileHover={{ y: -5 }}
              >
                <p.icon className="w-7 h-7 sm:w-8 sm:h-8 text-golden mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-xs sm:text-sm font-medium text-primary-foreground/80">{p.name}</p>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* R&D */}
      <section className="max-w-3xl mx-auto text-center">
        <SectionReveal>
          <div className="green-card p-8 sm:p-10 hover:glow-forest transition-all duration-500">
            <h2 className="font-heading text-3xl sm:text-4xl text-golden mb-4">
              Research & Development
            </h2>
            <p className="text-primary-foreground/70 leading-relaxed text-sm sm:text-base">
              The ICSS R&D division is driven by innovation from young engineers, constantly pushing
              boundaries in vulnerability assessment, penetration testing, and next-gen security solutions.
            </p>
          </div>
        </SectionReveal>
      </section>
    </div>
  );
};

export default About;
