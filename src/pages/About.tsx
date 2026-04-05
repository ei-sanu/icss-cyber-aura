import aboutOffice from "@/assets/about-office.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import SectionReveal from "@/components/SectionReveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { Cloud, Code, Cpu, Eye, FlaskConical, HeartHandshake, Lock, Network, ShieldCheck, Sparkles, Target, Trophy, Users } from "lucide-react";
import { useRef } from "react";

const timeline = [
  { year: "Stage 1", event: "ICSS foundation focused on practical cybersecurity services and strong delivery standards." },
  { year: "Stage 2", event: "Expanded into broader security consulting with deeper focus on assessment and testing." },
  { year: "Stage 3", event: "Introduced learning and development initiatives for students and early professionals." },
  { year: "Stage 4", event: "Strengthened community programs with consistent workshops and collaboration opportunities." },
  { year: "Stage 5", event: "Built the Cybersecurity Ambassador Network to scale awareness and leadership." },
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

const principles = [
  {
    icon: Target,
    title: "Mission",
    text: "Equip students and young professionals with practical cybersecurity knowledge they can use immediately.",
  },
  {
    icon: Eye,
    title: "Vision",
    text: "Build a nationwide ambassador network that makes security awareness visible, accessible, and continuous.",
  },
  {
    icon: HeartHandshake,
    title: "Approach",
    text: "Combine community, mentorship, and hands-on delivery so learning becomes a repeatable habit.",
  },
];

const outcomes = [
  "Campus workshops that are easy to run and scale",
  "Technical tracks with structured progression",
  "Leadership opportunities through ambassador roles",
  "A community that keeps members engaged after events",
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
            delivering cybersecurity services, training, and community initiatives for institutions and organizations.
          </p>
        </SectionReveal>
      </motion.section>

      {/* Principles */}
      <section className="max-w-6xl mx-auto mb-20 sm:mb-24 px-4">
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {principles.map((item, i) => (
            <SectionReveal key={item.title} delay={i * 0.12}>
              <div className="green-card p-6 sm:p-7 h-full hover:glow-forest transition-all duration-500">
                <item.icon className="w-7 h-7 text-golden mb-4" />
                <h2 className="font-heading text-2xl text-golden mb-2">{item.title}</h2>
                <p className="text-sm text-primary-foreground/70 leading-relaxed">{item.text}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

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
      </section>

      {/* What makes ICSS different */}
      <section className="max-w-6xl mx-auto mb-20 sm:mb-24 px-4">
        <SectionReveal>
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6 sm:gap-8 items-stretch">
            <div className="green-card p-6 sm:p-8 lg:p-10">
              <p className="text-xs tracking-[0.3em] uppercase text-golden/70 mb-3">Why people stay</p>
              <h2 className="font-heading text-3xl sm:text-4xl text-golden mb-4">A learning path with real follow-through</h2>
              <p className="text-primary-foreground/70 leading-relaxed mb-6">
                The ICSS ecosystem is designed to keep people moving from one milestone to the next. That means the content,
                mentorship, and community experience all work together instead of feeling like isolated one-off events.
              </p>
              <div className="space-y-3">
                {outcomes.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-golden/5 border border-golden/10 px-4 py-3">
                    <Sparkles className="w-4 h-4 text-golden mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-primary-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                {
                  icon: Users,
                  title: "Community first",
                  text: "Programs are shaped to support campus leaders, not just deliver presentations.",
                },
                {
                  icon: Trophy,
                  title: "Achievement focused",
                  text: "Members can demonstrate growth through events, credentials, and competition outcomes.",
                },
                {
                  icon: ShieldCheck,
                  title: "Security depth",
                  text: "Every track keeps the cybersecurity context visible and practical.",
                },
                {
                  icon: Lock,
                  title: "Modern coverage",
                  text: "Cloud, AI, networking, and testing topics are all included in the learning mix.",
                },
              ].map((item, i) => (
                <SectionReveal key={item.title} delay={i * 0.08}>
                  <div className="green-card p-5 sm:p-6 h-full hover:glow-forest-strong transition-all duration-500">
                    <item.icon className="w-6 h-6 text-golden mb-3" />
                    <h3 className="font-heading text-xl text-golden mb-2">{item.title}</h3>
                    <p className="text-sm text-primary-foreground/70 leading-relaxed">{item.text}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </SectionReveal>
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
              <div className={`relative flex items-start gap-4 sm:gap-6 mb-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}>
                <div className="hidden md:block flex-1" />
                <div className="relative z-10 flex-shrink-0">
                  <motion.div
                    className="w-10 h-10 rounded-full bg-forest flex items-center justify-center glow-forest"
                    whileHover={{ scale: 1.2 }}
                  >
                    <span className="text-xs font-heading text-lg text-golden">{item.year.slice(-1)}</span>
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

      {/* Closing CTA */}
      <section className="max-w-5xl mx-auto px-4 mt-20 sm:mt-24">
        <SectionReveal>
          <div className="green-card p-8 sm:p-10 text-center hover:glow-forest transition-all duration-500">
            <h2 className="font-heading text-3xl sm:text-4xl text-golden mb-3">Ready to build with ICSS CAN?</h2>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-6 leading-relaxed">
              Join the ambassador network, launch a chapter event, or explore one of the technical tracks that fits your next step.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="/ambassadors" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-golden text-forest font-heading text-lg tracking-wider">
                Meet Ambassadors
              </a>
              <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-golden/40 text-golden font-heading text-lg tracking-wider">
                Contact the Team
              </a>
            </div>
          </div>
        </SectionReveal>
      </section>
    </div>
  );
};

export default About;
