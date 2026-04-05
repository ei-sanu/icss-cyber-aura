import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";
import event4 from "@/assets/event-4.jpg";
import event5 from "@/assets/event-5.jpg";
import SectionReveal from "@/components/SectionReveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { Award, Calendar, MapPin, Megaphone, Route, ShieldCheck, Ticket } from "lucide-react";
import { useRef } from "react";

const events = [
  {
    title: "CyberSec Summit",
    date: "Flagship event",
    location: "New Delhi, India",
    description:
      "The flagship annual conference bringing together top cybersecurity professionals, ethical hackers, and industry leaders for keynotes, panels, and live demonstrations.",
    image: event1,
  },
  {
    title: "National Hackathon Championship",
    date: "Challenge format",
    location: "Bangalore, India",
    description:
      "A 48-hour intensive hackathon where teams compete to solve real-world cybersecurity challenges with mentorship from industry experts.",
    image: event2,
  },
  {
    title: "Cloud Security Workshop",
    date: "Hands-on format",
    location: "Mumbai, India",
    description:
      "Hands-on workshop covering AWS and Azure security best practices, cloud penetration testing, and compliance frameworks.",
    image: event3,
  },
  {
    title: "ICSS Awards Ceremony",
    date: "Recognition format",
    location: "Hyderabad, India",
    description:
      "Celebrating excellence in cybersecurity with awards for top ambassadors, breakthrough research, and outstanding community contributions.",
    image: event4,
  },
  {
    title: "CTF Championship Finals",
    date: "Competitive format",
    location: "Chennai, India",
    description:
      "The ultimate Capture The Flag competition finale featuring the top teams from across India battling for the national championship title.",
    image: event5,
  },
];

const eventFormats = [
  { icon: Megaphone, title: "Awareness drives", text: "Short, high-energy sessions that make security practical for students." },
  { icon: Ticket, title: "Workshops", text: "Hands-on labs for cloud security, ethical hacking, and incident response." },
  { icon: Award, title: "Competitions", text: "CTFs and challenges that reward teamwork, depth, and speed." },
  { icon: ShieldCheck, title: "Expert talks", text: "Panels and keynote sessions from security practitioners and founders." },
];

const eventStats = [
  { label: "Planning", value: "Structured" },
  { label: "Delivery", value: "Hands-on" },
  { label: "Collaboration", value: "Community" },
  { label: "Outcome", value: "Practical" },
];

const EventCard = ({
  event,
  index,
}: {
  event: (typeof events)[0];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1.05, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity, y }}
      className="relative mb-16 sm:mb-24 last:mb-0"
    >
      {/* Timeline connector */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-12 sm:-top-16 w-0.5 h-12 sm:h-16 bg-gradient-to-b from-transparent to-forest/50 hidden sm:block" />

      {/* Year dot */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 -top-3 w-6 h-6 rounded-full bg-golden glow-golden z-10 hidden sm:flex items-center justify-center"
        whileInView={{ scale: [0, 1.3, 1] }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-2 h-2 rounded-full bg-forest" />
      </motion.div>

      <div
        className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"
          } gap-6 items-center`}
      >
        {/* Image */}
        <motion.div
          className="w-full md:w-1/2 overflow-hidden rounded-2xl"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={event.image}
            alt={event.title}
            loading="lazy"
            width={1024}
            height={640}
            className="w-full h-48 sm:h-64 md:h-72 object-cover rounded-2xl hover:scale-110 transition-transform duration-700"
          />
        </motion.div>

        {/* Content */}
        <div className="w-full md:w-1/2">
          <div className="green-card p-6 sm:p-8 hover:glow-forest transition-all duration-500">
            <h3 className="font-heading text-2xl sm:text-3xl text-golden mb-3">
              {event.title}
            </h3>
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 text-xs text-primary-foreground/60">
                <Calendar size={14} className="text-golden" />
                {event.date}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-primary-foreground/60">
                <MapPin size={14} className="text-golden" />
                {event.location}
              </span>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              {event.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Events = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroScale = useTransform(heroScroll, [0, 1], [1, 0.8]);
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);

  return (
    <div className="relative">
      {/* Hero */}
      <motion.section
        ref={heroRef}
        style={{ scale: heroScale, opacity: heroOpacity }}
        className="relative min-h-[60vh] flex items-center justify-center px-4 pt-28 pb-12"
      >
        <div className="text-center max-w-3xl mx-auto">
          <SectionReveal>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-forest text-white border border-white/20 mb-6">
              <Calendar size={14} />
              <span className="text-xs tracking-[0.2em] uppercase font-heading text-base">
                Events & Milestones
              </span>
            </div>
            <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl text-forest mb-6">
              Our Event
              <br />
              <span className="text-forest/70">Roadmap</span>
            </h1>
            <p className="text-foreground/70 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Scroll through our journey of groundbreaking cybersecurity events,
              workshops, and competitions that shape the future of digital
              security.
            </p>
          </SectionReveal>
        </div>
      </motion.section>

      {/* Event stats */}
      <section className="px-4 pb-10 sm:pb-14">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {eventStats.map((stat, i) => (
            <SectionReveal key={stat.label} delay={i * 0.08}>
              <div className="green-card p-5 sm:p-6 text-center hover:glow-forest transition-all duration-500">
                <div className="font-heading text-3xl sm:text-4xl text-golden mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-primary-foreground/60">{stat.label}</div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* Event formats */}
      <section className="max-w-6xl mx-auto px-4 pb-16 sm:pb-20">
        <SectionReveal>
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="font-heading text-3xl sm:text-5xl text-forest mb-3">Event formats we run</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto text-sm sm:text-base">
              Every event is designed to leave attendees with a clear next step, not just a good day on stage.
            </p>
          </div>
        </SectionReveal>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
          {eventFormats.map((item, i) => (
            <SectionReveal key={item.title} delay={i * 0.1}>
              <div className="green-card p-5 sm:p-6 h-full hover:glow-forest-strong transition-all duration-500">
                <item.icon className="w-7 h-7 text-golden mb-4" />
                <h3 className="font-heading text-2xl text-golden mb-2">{item.title}</h3>
                <p className="text-sm text-primary-foreground/70 leading-relaxed">{item.text}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* Scroll indicator */}
      <div className="flex justify-center pb-8">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-forest/50"
        >
          <span className="text-xs font-body tracking-widest uppercase">
            Scroll to explore
          </span>
          <div className="w-5 h-8 rounded-full border-2 border-forest/30 flex justify-center pt-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-forest/50"
            />
          </div>
        </motion.div>
      </div>

      {/* Timeline roadmap */}
      <section className="max-w-5xl mx-auto px-4 pb-20 relative">
        {/* Central timeline line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-forest/10 via-forest/30 to-forest/10 hidden sm:block" />

        {events.map((event, i) => (
          <EventCard key={event.title} event={event} index={i} />
        ))}
      </section>

      {/* CTA */}
      <section className="pb-20 px-4">
        <SectionReveal>
          <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_auto] gap-4 sm:gap-6 items-center green-card p-8 sm:p-10 hover:glow-forest transition-all duration-500">
            <div>
              <h2 className="font-heading text-3xl sm:text-5xl text-golden mb-4">
                Want to host an event?
              </h2>
              <p className="text-primary-foreground/70 text-sm sm:text-base max-w-2xl leading-relaxed">
                Partner with ICSS to bring cybersecurity awareness to your campus or organization with a format that fits your audience.
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-golden text-forest font-heading text-lg tracking-wider hover:shadow-[0_0_30px_hsl(0_100%_41%/0.35)] transition-all duration-300 whitespace-nowrap"
            >
              Get in Touch
              <Route size={16} />
            </a>
          </div>
        </SectionReveal>
      </section>
    </div>
  );
};

export default Events;
