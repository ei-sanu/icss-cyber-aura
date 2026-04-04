import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="pt-28 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <div className="text-center mb-16">
            <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              Get in <span className="text-gradient-forest">Touch</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Have questions or want to collaborate? Reach out to us.
            </p>
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-5 gap-8">
          <SectionReveal delay={0.1} className="md:col-span-3">
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-forest/10 border border-forest/20 space-y-6">
              {[
                { label: "Name", type: "text", placeholder: "Your name" },
                { label: "Email", type: "email", placeholder: "your@email.com" },
              ].map((field) => (
                <div key={field.label}>
                  <label className="text-xs font-heading tracking-wider text-forest uppercase mb-2 block">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-forest/20 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-forest/50 focus:ring-1 focus:ring-forest/30 transition-all duration-300"
                  />
                </div>
              ))}
              <div>
                <label className="text-xs font-heading tracking-wider text-forest uppercase mb-2 block">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Your message..."
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-forest/20 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-forest/50 focus:ring-1 focus:ring-forest/30 transition-all duration-300 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 rounded-full bg-forest text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:shadow-[0_0_30px_hsl(161_96%_14%/0.3)] transition-all duration-300"
              >
                {submitted ? "Sent! ✓" : (
                  <>Send Message <Send size={16} /></>
                )}
              </motion.button>
            </form>
          </SectionReveal>

          <SectionReveal delay={0.2} className="md:col-span-2">
            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "info@icss.in" },
                { icon: Phone, label: "Phone", value: "+91 XXXX XXXXXX" },
                { icon: MapPin, label: "Location", value: "India (Global Operations)" },
              ].map((item) => (
                <div key={item.label} className="p-5 rounded-xl bg-forest/10 border border-forest/20 hover:glow-forest transition-all duration-500 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-forest/15 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-forest" />
                  </div>
                  <div>
                    <div className="text-xs font-heading tracking-wider text-forest uppercase">{item.label}</div>
                    <div className="text-sm text-foreground/80 mt-1">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </div>
  );
};

export default Contact;
