import SectionReveal from "@/components/SectionReveal";
import { motion } from "framer-motion";
import { ArrowRight, Clock3, Globe, Mail, MapPin, MessageCircle, Phone, Send, ShieldCheck } from "lucide-react";
import { FormEvent, useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="pt-28 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl text-forest mb-4">
              Get in Touch
            </h1>
            <p className="text-foreground/60 max-w-xl mx-auto text-sm sm:text-base">
              Have questions or want to collaborate? Reach out to us.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.08}>
          <div className="grid md:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10">
            {[
              { icon: ShieldCheck, title: "Partnerships", text: "Schools, colleges, and companies" },
              { icon: MessageCircle, title: "Events", text: "Workshops and awareness sessions" },
              { icon: Clock3, title: "Support hours", text: "Mon to Sat, 10:00 AM to 6:00 PM" },
              { icon: Globe, title: "Coverage", text: "India-wide, with remote coordination" },
            ].map((item) => (
              <div key={item.title} className="green-card p-5 sm:p-6 hover:glow-forest transition-all duration-500">
                <item.icon className="w-6 h-6 text-golden mb-3" />
                <h2 className="font-heading text-xl text-golden mb-1">{item.title}</h2>
                <p className="text-sm text-primary-foreground/70 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-5 gap-6 sm:gap-8">
          <SectionReveal delay={0.1} className="md:col-span-3">
            <form onSubmit={handleSubmit} className="green-card p-6 sm:p-8 space-y-5 sm:space-y-6">
              {[
                { label: "Name", type: "text", placeholder: "Your name" },
                { label: "Email", type: "email", placeholder: "your@email.com" },
              ].map((field) => (
                <div key={field.label}>
                  <label className="text-xs font-heading text-base tracking-wider text-golden mb-2 block">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-forest-light/30 border border-primary-foreground/10 text-primary-foreground text-sm placeholder:text-primary-foreground/30 focus:outline-none focus:border-golden/50 focus:ring-1 focus:ring-golden/30 transition-all duration-300"
                  />
                </div>
              ))}
              <div>
                <label className="text-xs font-heading text-base tracking-wider text-golden mb-2 block">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Your message..."
                  required
                  className="w-full px-4 py-3 rounded-xl bg-forest-light/30 border border-primary-foreground/10 text-primary-foreground text-sm placeholder:text-primary-foreground/30 focus:outline-none focus:border-golden/50 focus:ring-1 focus:ring-golden/30 transition-all duration-300 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 rounded-full bg-golden text-forest font-heading text-xl tracking-wider flex items-center justify-center gap-2 hover:glow-golden transition-all duration-300"
              >
                {submitted ? "Sent! ✓" : (
                  <>Send Message <Send size={16} /></>
                )}
              </motion.button>
            </form>
          </SectionReveal>

          <SectionReveal delay={0.2} className="md:col-span-2">
            <div className="space-y-4 sm:space-y-6">
              {[
                { icon: Mail, label: "Email", value: "info@icss.in" },
                { icon: Phone, label: "Phone", value: "+91 XXXX XXXXXX" },
                { icon: MapPin, label: "Location", value: "India (Global Operations)" },
              ].map((item) => (
                <div key={item.label} className="green-card p-4 sm:p-5 hover:glow-forest transition-all duration-500 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-golden/15 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-golden" />
                  </div>
                  <div>
                    <div className="font-heading text-lg text-golden">{item.label}</div>
                    <div className="text-sm text-primary-foreground/60 mt-0.5">{item.value}</div>
                  </div>
                </div>
              ))}

              <div className="green-card p-5 sm:p-6 hover:glow-forest transition-all duration-500">
                <h2 className="font-heading text-2xl text-golden mb-3">What happens next</h2>
                <div className="space-y-3 text-sm text-primary-foreground/70 leading-relaxed">
                  <p>We review the message and route it to the right team.</p>
                  <p>You'll get a response with the next steps or a request for more detail.</p>
                  <p>For event and ambassador requests, we usually suggest a quick follow-up call.</p>
                </div>
                <a href="/about" className="mt-5 inline-flex items-center gap-2 text-golden font-heading text-lg tracking-wider">
                  Learn more about ICSS
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </div>
  );
};

export default Contact;
