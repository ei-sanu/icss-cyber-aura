import { Link } from "react-router-dom";
import { Shield, Github, Linkedin, Twitter, Instagram } from "lucide-react";

const socials = [
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Github, href: "#" },
  { icon: Instagram, href: "#" },
];

const Footer = () => (
  <footer className="relative border-t border-border bg-forest-deep/50 py-12">
    <div className="container mx-auto px-6">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-5 h-5 text-golden" />
            <span className="font-heading text-sm font-bold tracking-wider text-golden">ICSS ARC</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            Empowering the next generation of cybersecurity leaders through education and community.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="font-heading text-xs tracking-widest text-golden/70 uppercase mb-2">Quick Links</h4>
          {["Home", "About", "Ambassadors", "Contact"].map((label) => (
            <Link
              key={label}
              to={label === "Home" ? "/" : `/${label.toLowerCase()}`}
              className="text-sm text-muted-foreground hover:text-golden transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </div>

        <div>
          <h4 className="font-heading text-xs tracking-widest text-golden/70 uppercase mb-4">Connect</h4>
          <div className="flex gap-3">
            {socials.map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="p-2 rounded-lg border border-border hover:border-golden/40 hover:text-golden hover:glow-golden transition-all duration-300 text-muted-foreground"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} ICSS — Indian Cyber Security Solutions. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
