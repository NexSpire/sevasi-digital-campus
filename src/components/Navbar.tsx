import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Globe, ChevronRight, Phone, Mail, Clock } from "lucide-react";
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
    <>
      {/* ── Top Info Bar ── */}
      <div className="top-info-bar">
        <div className="section-container flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href={`tel:${SCHOOL_INFO.principal?.contact?.mobile_primary || ''}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3 h-3" />
              <span>{t("ફોન: 9662543201", "Phone: 9662543201")}</span>
            </a>
            <a href={`mailto:${SCHOOL_INFO.email}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3 h-3" />
              <span>{SCHOOL_INFO.email}</span>
            </a>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3 h-3" />
            <span>{t("સોમ-શનિ: ૭:૩૦ AM – ૫:૩૦ PM", "Mon-Sat: 7:30 AM – 5:30 PM")}</span>
          </div>
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed lg:sticky top-0 lg:top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          scrolled
            ? "nav-glass shadow-sm"
            : "bg-white/0 lg:bg-white/70 lg:backdrop-blur-md"
        }`}
      >
        <div className="section-container flex items-center justify-between h-16 lg:h-[4.5rem]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative">
              <img
                src={logoImg}
                alt="Sevasi High School Logo"
                className="w-11 h-11 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="leading-[1.15]">
              <span className="font-heading font-bold text-[1.05rem] text-foreground block tracking-tight">
                {SCHOOL_INFO.name}
              </span>
              <span className="font-gujarati text-[0.7rem] text-muted-foreground tracking-wide">
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
                  className={`nav-link ${isActive ? "active" : "text-muted-foreground hover:text-foreground"}`}
                >
                  {lang === "gu" ? item.label : item.labelEn}
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2.5">
            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className="lang-toggle"
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-muted-foreground" />
              <AnimatePresence mode="wait">
                <motion.span
                  key={lang}
                  initial={{ y: -8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 8, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="text-foreground"
                >
                  {lang === "gu" ? "EN" : "ગુ"}
                </motion.span>
              </AnimatePresence>
            </button>

            {/* Desktop CTA */}
            <Link to="/admissions" className="hidden lg:block">
              <Button className="btn-standard bg-primary hover:bg-primary/90 font-heading text-sm font-semibold rounded-xl transition-all duration-200 hover:shadow-md">
                {t("પ્રવેશ પૂછપરછ", "Admissions")}
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-muted/80">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] max-w-sm bg-card p-0 border-l border-border/50">
                {/* Drawer Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-center gap-3">
                    <img src={logoImg} alt="Logo" className="w-11 h-11 object-contain" />
                    <div className="leading-[1.15]">
                      <span className="font-heading font-bold text-base block">
                        {SCHOOL_INFO.name}
                      </span>
                      <span className="font-gujarati text-[0.7rem] text-muted-foreground">
                        {SCHOOL_INFO.nameGujarati}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-border/50 mx-6" />

                {/* Nav Links */}
                <nav className="flex flex-col p-4 gap-0.5">
                  {NAV_ITEMS.map((item, i) => {
                    const isActive = location.pathname === item.href;
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04, duration: 0.25 }}
                      >
                        <Link
                          to={item.href}
                          onClick={() => setOpen(false)}
                          className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-[0.95rem] font-medium transition-all duration-200 group ${
                            isActive
                              ? "text-primary bg-primary/[0.06] font-semibold"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                          }`}
                        >
                          <span>
                            {lang === "gu" ? item.label : item.labelEn}
                            {lang === "en" && (
                              <span className="font-gujarati text-xs text-muted-foreground/50 ml-2">
                                {item.label}
                              </span>
                            )}
                          </span>
                          <ChevronRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-40 group-hover:translate-x-0" />
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                {/* Drawer CTA */}
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
    </>
  );
};

export default Navbar;
