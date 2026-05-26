import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";

const navigation = {
  practice: [
    { name: "Corporate Law", href: "/practice-areas" },
    { name: "Litigation", href: "/practice-areas" },
    { name: "Real Estate", href: "/practice-areas" },
    { name: "Intellectual Property", href: "/practice-areas" },
  ],
  firm: [
    { name: "About Us", href: "/about" },
    { name: "Our Attorneys", href: "/attorneys" },
    { name: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <span className="font-serif text-3xl font-semibold tracking-tight">
              ACCE<span className="text-accent"> LAW</span>
              <span className="font-light text-xl ml-1 tracking-widest">CHAMBERS</span>
            </span>
            <p className="mt-6 text-sm text-primary-foreground/70 leading-relaxed max-w-xs">
              A distinguished law firm delivering exceptional legal services 
              with integrity, expertise, and unwavering commitment to our clients' success.
            </p>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-6">Practice Areas</h3>
            <ul className="space-y-4">
              {navigation.practice.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors inline-flex items-center gap-1 group"
                  >
                    {item.name}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* The Firm */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-6">The Firm</h3>
            <ul className="space-y-4">
              {navigation.firm.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors inline-flex items-center gap-1 group"
                  >
                    {item.name}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-6">Contact</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/70">
                  Level 5/101 Sussex Street<br />
                  Sydney NSW 2000, Australia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <a
                  href="tel:+19786414537"
                  className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  +1 (978) 641-4537
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a
                  href="mailto:info@accelawchambers.com"
                  className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  info@accelawchambers.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-accent shrink-0" />
                <span className="text-sm text-primary-foreground/70">
                  Mon - Fri: 9:00 - 17:00 AEST
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/50">
              © {new Date().getFullYear()} Acce Law Chambers. All rights reserved.
            </p>
            <div className="flex gap-8">
              <Link
                to="/privacy"
                className="text-sm text-primary-foreground/50 hover:text-accent transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-primary-foreground/50 hover:text-accent transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
