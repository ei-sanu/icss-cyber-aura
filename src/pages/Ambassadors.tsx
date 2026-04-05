import SectionReveal from "@/components/SectionReveal";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Github, GraduationCap, Linkedin, MapPinned, Search, Sparkles, Twitter, User, Users } from "lucide-react";
import { useState } from "react";

const ambassadors = [
  { name: "Somesh Ranjan Biswal", college: "Lovely Professional University", role: "Ambassador", skills: ["Pentesting", "OSINT"], region: "North" },
  { name: "Ankit Kumar", college: "Lovely Professional University", role: "Ambassador", skills: ["Cloud Security", "Python"], region: "North" },
  { name: "Karthik Karuppiah.s", college: "Lovely Professional University", role: "Ambassador", skills: ["Blockchain", "Forensics"], region: "South" },
  { name: "Prabhjot Singh", college: "Lovely Professional University", role: "Ambassador ", skills: ["Network Security", "CCNA"], region: "North" },
  { name: "shubham", college: "Lovely Professional University", role: "Ambassador", skills: ["Ethical Hacking", "VAPT"], region: "North" },
];

const filters = ["All", "North", "South", "East", "West"];

const highlights = [
  { icon: Users, title: "Peer leadership", text: "Ambassadors lead awareness sessions, help onboard new members, and keep chapters moving." },
  { icon: Sparkles, title: "Visible growth", text: "Members gain opportunities to present, mentor, and represent their campus publicly." },
  { icon: GraduationCap, title: "Learning by doing", text: "Every ambassador gets direct access to practical, project-based activities." },
  { icon: MapPinned, title: "Regional reach", text: "Coverage across regions keeps the community balanced and locally active." },
];

const Ambassadors = () => {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = ambassadors.filter((a) => {
    const matchesSearch =
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.skills.some((s) => s.toLowerCase().includes(search.toLowerCase()));
    const matchesFilter = activeFilter === "All" || a.region === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="pt-28 pb-20 px-4">
      <section className="max-w-6xl mx-auto">
        <SectionReveal>
          <div className="text-center mb-10 sm:mb-12">
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl text-forest mb-4">
              Our Ambassadors
            </h1>
            <p className="text-foreground/60 max-w-xl mx-auto text-sm sm:text-base">
              Meet the leaders driving cybersecurity awareness across campuses nationwide.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.08}>
          <div className="grid md:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12">
            {highlights.map((item, i) => (
              <div key={item.title} className="green-card p-5 sm:p-6 h-full hover:glow-forest transition-all duration-500">
                <item.icon className="w-6 h-6 text-golden mb-3" />
                <h2 className="font-heading text-xl text-golden mb-2">{item.title}</h2>
                <p className="text-sm text-primary-foreground/70 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8 sm:mb-10">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
              <input
                type="text"
                placeholder="Search by name or skill..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-full bg-forest/10 border-2 border-forest/30 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-forest transition-all duration-300"
              />
            </div>
            <div className="flex gap-2 flex-wrap justify-center">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${activeFilter === f
                    ? "bg-forest text-golden"
                    : "bg-forest/10 border-2 border-forest/20 text-foreground/60 hover:border-forest hover:text-forest"
                    }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </SectionReveal>

        <motion.div layout className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((a) => (
              <motion.div
                key={a.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -8 }}
                className="group green-card p-4 sm:p-6 hover:glow-forest-strong transition-all duration-500"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-golden/20 border-2 border-golden/40 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:border-golden group-hover:glow-golden transition-all duration-500">
                  <User className="w-5 h-5 sm:w-7 sm:h-7 text-golden/60 group-hover:text-golden transition-colors duration-300" />
                </div>

                <h3 className="font-heading text-base sm:text-xl text-center text-golden">
                  {a.name}
                </h3>
                <p className="text-[10px] sm:text-xs text-primary-foreground/50 text-center mt-1">{a.college}</p>
                <p className="text-[10px] sm:text-xs text-golden/80 text-center mt-0.5 font-semibold">{a.role}</p>

                <div className="flex flex-wrap gap-1 sm:gap-1.5 justify-center mt-3 sm:mt-4">
                  {a.skills.map((s) => (
                    <span key={s} className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] bg-golden/15 text-golden border border-golden/30">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 justify-center mt-4 sm:mt-5">
                  {[Github, Linkedin, Twitter].map((Icon, i) => (
                    <a key={i} href="#" className="text-primary-foreground/40 hover:text-golden transition-colors duration-200">
                      <Icon size={14} />
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-foreground/50 mt-12 font-heading text-xl">No ambassadors found.</p>
        )}

        <SectionReveal delay={0.12}>
          <div className="mt-16 sm:mt-20 grid lg:grid-cols-[1.1fr_0.9fr] gap-6 sm:gap-8 items-stretch">
            <div className="green-card p-6 sm:p-8 hover:glow-forest transition-all duration-500">
              <h2 className="font-heading text-3xl sm:text-4xl text-golden mb-3">What ambassadors actually do</h2>
              <p className="text-primary-foreground/70 leading-relaxed mb-5">
                The role goes beyond a title. Ambassadors help host sessions, support event promotion, welcome new students,
                and turn cybersecurity into something visible on campus.
              </p>
              <div className="space-y-3">
                {[
                  "Run meetups and awareness drives",
                  "Represent ICSS at college events",
                  "Support peers with starter resources",
                  "Share feedback to improve programs",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-primary-foreground/80">
                    <ChevronRight className="w-4 h-4 text-golden flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              {[
                { title: "Open to learners", text: "Ambassador programs are designed for people who want to grow into leadership, not just experts." },
                { title: "Built for campuses", text: "The structure fits student schedules, local clubs, and chapter-based outreach." },
                { title: "Growth over hype", text: "The emphasis stays on delivery, consistency, and measurable community impact." },
              ].map((item) => (
                <div key={item.title} className="green-card p-5 sm:p-6 hover:glow-forest-strong transition-all duration-500">
                  <h3 className="font-heading text-2xl text-golden mb-2">{item.title}</h3>
                  <p className="text-sm text-primary-foreground/70 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </section>
    </div>
  );
};

export default Ambassadors;
