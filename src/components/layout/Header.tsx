import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Attorneys", href: "/attorneys" },
  { name: "Practice Areas", href: "/practice-areas" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isLightHeroPage = location.pathname.startsWith("/attorneys/") && location.pathname !== "/attorneys";
  const isDarkHeroPage = !isLightHeroPage;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "glass-effect border-b border-border/50 py-3"
          : "bg-transparent py-5"
      )}
    >
      <nav className="container-wide" aria-label="Global">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className={cn(
              "font-serif text-2xl md:text-3xl font-semibold tracking-tight transition-colors duration-300",
              scrolled ? "text-foreground" : isDarkHeroPage ? "text-primary-foreground" : "text-foreground"
            )}>
              ACCE<span className="text-accent"> LAW</span>
              <span className="font-light text-lg md:text-xl ml-1 tracking-widest">CHAMBERS</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium tracking-wide transition-all duration-300 relative group",
                  location.pathname === item.href
                    ? "text-accent"
                    : scrolled 
                      ? "text-muted-foreground hover:text-foreground" 
                      : isDarkHeroPage 
                        ? "text-primary-foreground/70 hover:text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.name}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300",
                    location.pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex lg:items-center lg:gap-6">
            <a
              href="tel:+19786414537"
              className={cn(
                "flex items-center gap-2 text-sm transition-colors",
                scrolled 
                  ? "text-muted-foreground hover:text-accent" 
                  : isDarkHeroPage 
                    ? "text-primary-foreground/70 hover:text-primary-foreground"
                    : "text-muted-foreground hover:text-accent"
              )}
            >
              <Phone className="h-4 w-4" />
              +1 (978) 641-4537
            </a>
            <Button
              asChild
              className="bg-accent text-accent-foreground px-6 rounded-full"
            >
              <Link to="/contact" className="flex items-center gap-2">
                Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className={cn(
                "p-2 transition-colors",
                scrolled 
                  ? "text-muted-foreground hover:text-foreground" 
                  : isDarkHeroPage 
                    ? "text-primary-foreground/70 hover:text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
              )}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-500 ease-out bg-background rounded-lg mt-4",
            mobileMenuOpen ? "max-h-[500px] opacity-100 p-4" : "max-h-0 opacity-0 p-0"
          )}
        >
          <div className="space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block py-3 text-lg font-medium transition-colors",
                  location.pathname === item.href
                    ? "text-accent"
                    : "text-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 mt-4 border-t border-border space-y-4">
            <a
              href="tel:+19786414537"
              className="flex items-center gap-2 text-muted-foreground"
            >
              <Phone className="h-4 w-4" />
              +1 (978) 641-4537
            </a>
            <Button
              asChild
              className="w-full bg-accent text-accent-foreground rounded-full"
            >
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                Schedule Consultation
              </Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
