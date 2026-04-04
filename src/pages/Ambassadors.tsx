import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Github, Linkedin, Twitter, User } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";

const ambassadors = [
  { name: "Arjun Sharma", college: "IIT Delhi", role: "Lead Ambassador", skills: ["Pentesting", "OSINT"], region: "North" },
  { name: "Priya Patel", college: "NIT Trichy", role: "Tech Lead", skills: ["Cloud Security", "Python"], region: "South" },
  { name: "Rahul Verma", college: "BITS Pilani", role: "Ambassador", skills: ["Blockchain", "Forensics"], region: "West" },
  { name: "Sneha Reddy", college: "IIIT Hyderabad", role: "Ambassador", skills: ["IoT", "ML Security"], region: "South" },
  { name: "Vikram Singh", college: "DTU Delhi", role: "Campus Lead", skills: ["Network Security", "CCNA"], region: "North" },
  { name: "Ananya Das", college: "Jadavpur University", role: "Ambassador", skills: ["Ethical Hacking", "VAPT"], region: "East" },
  { name: "Karan Mehta", college: "VJTI Mumbai", role: "Ambassador", skills: ["Cloud", "DevSecOps"], region: "West" },
  { name: "Divya Nair", college: "CEG Anna Univ", role: "Tech Lead", skills: ["Web Security", "Python"], region: "South" },
];

const filters = ["All", "North", "South", "East", "West"];

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
    <div className="pt-28 pb-20 px-6">
      <section className="max-w-6xl mx-auto">
        <SectionReveal>
          <div className="text-center mb-12">
            <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              Our <span className="text-gradient-golden">Ambassadors</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Meet the leaders driving cybersecurity awareness across campuses nationwide.
            </p>
          </div>
        </SectionReveal>

        {/* Search & Filters */}
        <SectionReveal delay={0.1}>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-10">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by name or skill..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-full glass neon-border bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-golden/50 transition-all duration-300"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                    activeFilter === f
                      ? "bg-golden text-primary-foreground glow-golden"
                      : "glass neon-border text-muted-foreground hover:text-golden"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                className="group p-6 rounded-2xl glass neon-border hover:glow-golden-strong transition-all duration-500"
              >
                {/* Avatar */}
                <div className="w-16 h-16 rounded-full bg-golden/10 border border-golden/30 flex items-center justify-center mx-auto mb-4 group-hover:border-golden group-hover:glow-golden transition-all duration-500">
                  <User className="w-7 h-7 text-golden/60 group-hover:text-golden transition-colors duration-300" />
                </div>

                <h3 className="font-heading text-sm font-bold text-center text-foreground group-hover:text-golden transition-colors duration-300">
                  {a.name}
                </h3>
                <p className="text-xs text-muted-foreground text-center mt-1">{a.college}</p>
                <p className="text-xs text-golden/70 text-center mt-1 font-semibold">{a.role}</p>

                <div className="flex flex-wrap gap-1.5 justify-center mt-4">
                  {a.skills.map((s) => (
                    <span key={s} className="px-2 py-0.5 rounded-full text-[10px] bg-golden/10 text-golden border border-golden/20">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 justify-center mt-5">
                  {[Github, Linkedin, Twitter].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="text-muted-foreground hover:text-golden transition-colors duration-200"
                    >
                      <Icon size={14} />
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground mt-12">No ambassadors found.</p>
        )}
      </section>
    </div>
  );
};

export default Ambassadors;
