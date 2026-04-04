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
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                    activeFilter === f
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
      </section>
    </div>
  );
};

export default Ambassadors;
