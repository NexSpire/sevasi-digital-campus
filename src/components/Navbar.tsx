import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Globe, ChevronRight } from "lucide-react";
import { NAV_ITEMS, SCHOOL_INFO } from "@/config/constants";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@/assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { lang, toggleLang, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "nav-glass border-b border-border/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="section-container flex items-center justify-between h-16 lg:h-[4.25rem]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logoImg}
            alt="Sevasi High School Logo"
            className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="leading-[1.2]">
            <span className="font-heading font-bold text-[0.9rem] text-foreground block tracking-tight">
              {SCHOOL_INFO.name}
            </span>
            <span className="font-gujarati text-[0.65rem] text-muted-foreground tracking-wide">
              {SCHOOL_INFO.nameGujarati}
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`nav-link ${isActive ? "active" : "text-muted-foreground"}`}
              >
                {lang === "gu" ? item.label : item.labelEn}
              </Link>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 h-9 px-3 rounded-lg text-xs font-medium border border-border/60 bg-card/50 hover:bg-muted/80 transition-all duration-200 text-muted-foreground hover:text-foreground"
            aria-label="Toggle language"
          >
            <Globe className="w-3.5 h-3.5" />
            <AnimatePresence mode="wait">
              <motion.span
                key={lang}
                initial={{ y: -8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 8, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="font-semibold"
              >
                {lang === "gu" ? "EN" : "ગુ"}
              </motion.span>
            </AnimatePresence>
          </button>

          {/* Desktop CTA */}
          <Link to="/admissions" className="hidden lg:block">
            <Button className="btn-standard bg-primary hover:bg-primary/90 font-heading text-xs font-semibold rounded-lg transition-all duration-200 hover:shadow-md">
              {t("પ્રવેશ પૂછપરછ", "Admissions")}
            </Button>
          </Link>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="h-10 w-10 rounded-lg hover:bg-muted/80">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-card p-0 border-l border-border/50">
              <div className="p-6 pb-4">
                <div className="flex items-center gap-3">
                  <img src={logoImg} alt="Logo" className="w-10 h-10 object-contain" />
                  <div className="leading-[1.2]">
                    <span className="font-heading font-bold text-sm block">
                      {SCHOOL_INFO.name}
                    </span>
                    <span className="font-gujarati text-[0.65rem] text-muted-foreground">
                      {SCHOOL_INFO.nameGujarati}
                    </span>
                  </div>
                </div>
              </div>

              <div className="h-px bg-border/50 mx-6" />

              <nav className="flex flex-col p-4 gap-0.5">
                {NAV_ITEMS.map((item, i) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.25 }}
                    >
                      <Link
                        to={item.href}
                        onClick={() => setOpen(false)}
                        className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 group ${
                          isActive
                            ? "text-primary bg-primary/5"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        }`}
                      >
                        <span>
                          {lang === "gu" ? item.label : item.labelEn}
                          {lang === "en" && (
                            <span className="font-gujarati text-xs text-muted-foreground/60 ml-2">
                              {item.label}
                            </span>
                          )}
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-50 group-hover:translate-x-0" />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="mt-auto p-6 pt-4">
                <Link to="/admissions" onClick={() => setOpen(false)}>
                  <Button className="w-full btn-standard bg-primary hover:bg-primary/90 font-heading font-semibold rounded-xl">
                    {t("પ્રવેશ પૂછપરછ", "Admissions Enquiry")}
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
