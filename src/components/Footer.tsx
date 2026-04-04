import { ArrowRight, Github, Instagram, Linkedin, Mail, MapPin, Phone, Shield, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const socials = [
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Github, href: "#" },
  { icon: Instagram, href: "#" },
];

const Footer = () => (
  <footer className="relative border-t border-forest/20 bg-forest py-12">
    <div className="container mx-auto px-6">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-5 h-5 text-golden" />
            <span className="font-heading text-sm font-bold tracking-wider text-golden">ICSS CAN</span>
          </div>
          <p className="text-sm text-primary-foreground/60 max-w-xs">
            Empowering the next generation of cybersecurity leaders through education and community.
          </p>
          <a
            href="/contact"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-golden hover:text-primary-foreground transition-colors duration-200"
          >
            Start a conversation
            <ArrowRight size={14} />
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="font-heading text-xs tracking-widest text-golden/80 uppercase mb-2">Quick Links</h4>
          {["Home", "About", "Ambassadors", "Contact"].map((label) => (
            <Link
              key={label}
              to={label === "Home" ? "/" : `/${label.toLowerCase()}`}
              className="text-sm text-primary-foreground/60 hover:text-golden transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-heading text-xs tracking-widest text-golden/80 uppercase mb-2">Contact</h4>
          <a href="mailto:info@icss.in" className="inline-flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-golden transition-colors duration-200">
            <Mail size={14} /> info@icss.in
          </a>
          <a href="#" className="inline-flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-golden transition-colors duration-200">
            <Phone size={14} /> +91 XXXX XXXXXX
          </a>
          <span className="inline-flex items-center gap-2 text-sm text-primary-foreground/60">
            <MapPin size={14} /> India (Global Operations)
          </span>
        </div>

        <div>
          <h4 className="font-heading text-xs tracking-widest text-golden/80 uppercase mb-4">Connect</h4>
          <p className="text-sm text-primary-foreground/60 mb-4">
            Follow ICSS CAN for updates, events, and community highlights.
          </p>
          <div className="flex gap-3">
            {socials.map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="p-2 rounded-lg border border-primary-foreground/20 hover:border-golden/60 hover:text-golden transition-all duration-300 text-primary-foreground/60"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} ICSS — Indian Cyber Security Solutions. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
