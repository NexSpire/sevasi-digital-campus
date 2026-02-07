import { Link } from "react-router-dom";
import { GraduationCap, Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { SCHOOL_INFO, NAV_ITEMS } from "@/config/constants";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { lang, t } = useLanguage();

  return (
    <footer className="cta-surface text-primary-foreground">
      <div className="section-container relative z-10 py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="leading-[1.2]">
                <span className="font-heading font-bold text-sm block">
                  {SCHOOL_INFO.name}
                </span>
                <span className="font-gujarati text-[0.65rem] opacity-60">
                  {SCHOOL_INFO.nameGujarati}
                </span>
              </div>
            </div>
            <p className="font-gujarati text-sm opacity-60 leading-relaxed max-w-xs">
              {t(
                "ગુણવત્તાયુક્ત શિક્ષણ અને સર્વાંગી વિકાસ માટે સમર્પિત સંસ્થા. ૧૯૮૫ થી વડોદરાના વિદ્યાર્થીઓને ઉત્તમ શિક્ષણ આપી રહ્યા છીએ.",
                "An institution dedicated to quality education and holistic development. Serving Vadodara's students with excellence since 1985."
              )}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-xs tracking-wider uppercase opacity-40 mb-5">
              {t("ઝડપી લિંક", "Quick Links")}
            </h4>
            <nav className="flex flex-col gap-2.5">
              {NAV_ITEMS.slice(0, 4).map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-sm opacity-60 hover:opacity-100 transition-all duration-200 flex items-center gap-1 group"
                >
                  {lang === "gu" ? item.label : item.labelEn}
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 translate-y-0.5 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
                </Link>
              ))}
            </nav>
          </div>

          {/* More Links */}
          <div>
            <h4 className="font-heading font-semibold text-xs tracking-wider uppercase opacity-40 mb-5">
              {t("વિશેષ", "Explore")}
            </h4>
            <nav className="flex flex-col gap-2.5">
              {NAV_ITEMS.slice(4).map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-sm opacity-60 hover:opacity-100 transition-all duration-200 flex items-center gap-1 group"
                >
                  {lang === "gu" ? item.label : item.labelEn}
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 translate-y-0.5 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-xs tracking-wider uppercase opacity-40 mb-5">
              {t("સંપર્ક", "Contact")}
            </h4>
            <div className="flex flex-col gap-3.5 text-sm opacity-60">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 opacity-70" />
                <span className="font-gujarati">{SCHOOL_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 shrink-0 opacity-70" />
                <span>{SCHOOL_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 shrink-0 opacity-70" />
                <span className="text-xs">{SCHOOL_INFO.email}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px bg-primary-foreground/10 my-10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs opacity-40">
          <span>© 2025 {SCHOOL_INFO.name}. All rights reserved.</span>
          <span className="font-gujarati">{t("સેવાસી, વડોદરા", "Sevasi, Vadodara")}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
