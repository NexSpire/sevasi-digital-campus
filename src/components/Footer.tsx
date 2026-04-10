import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUpRight, ExternalLink } from "lucide-react";
import { SCHOOL_INFO, NAV_ITEMS } from "@/config/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import logoImg from "@/assets/logo.png";

const Footer = () => {
  const { lang, t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="cta-surface text-primary-foreground">
      <div className="section-container relative z-10 py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img src={logoImg} alt="Logo" className="w-11 h-11 object-contain brightness-0 invert opacity-80" />
              <div className="leading-[1.15]">
                <span className="font-heading font-bold text-base block">
                  {SCHOOL_INFO.name}
                </span>
                <span className="font-gujarati text-[0.7rem] opacity-50">
                  {SCHOOL_INFO.nameGujarati}
                </span>
              </div>
            </div>
            <p className="text-sm opacity-50 leading-relaxed max-w-xs mb-6">
              {t(
                "ગુણવત્તાયુક્ત શિક્ષણ અને સર્વાંગી વિકાસ માટે સમર્પિત સંસ્થા. ૧૯૬૭ થી વડોદરાના વિદ્યાર્થીઓને ઉત્તમ શિક્ષણ આપી રહ્યા છીએ.",
                "An institution dedicated to quality education and holistic development. Serving Vadodara's students with excellence since 1967."
              )}
            </p>
            {/* Quick Contact */}
            <div className="flex flex-col gap-2">
              <a
                href={`tel:9662543201`}
                className="inline-flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>9662543201</span>
              </a>
              <a
                href={`mailto:${SCHOOL_INFO.email}`}
                className="inline-flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{SCHOOL_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-xs tracking-[0.15em] uppercase opacity-40 mb-5">
              {t("ઝડપી લિંક", "Quick Links")}
            </h4>
            <nav className="flex flex-col gap-2.5">
              {NAV_ITEMS.slice(0, 4).map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-sm opacity-55 hover:opacity-100 transition-all duration-200 flex items-center gap-1 group"
                >
                  {lang === "gu" ? item.label : item.labelEn}
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 translate-y-0.5 transition-all duration-200 group-hover:opacity-70 group-hover:translate-x-0 group-hover:translate-y-0" />
                </Link>
              ))}
            </nav>
          </div>

          {/* More Links */}
          <div>
            <h4 className="font-heading font-semibold text-xs tracking-[0.15em] uppercase opacity-40 mb-5">
              {t("વિશેષ", "Explore")}
            </h4>
            <nav className="flex flex-col gap-2.5">
              {NAV_ITEMS.slice(4).map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-sm opacity-55 hover:opacity-100 transition-all duration-200 flex items-center gap-1 group"
                >
                  {lang === "gu" ? item.label : item.labelEn}
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 translate-y-0.5 transition-all duration-200 group-hover:opacity-70 group-hover:translate-x-0 group-hover:translate-y-0" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-heading font-semibold text-xs tracking-[0.15em] uppercase opacity-40 mb-5">
              {t("સ્થાન", "Location")}
            </h4>
            <div className="flex items-start gap-2.5 text-sm opacity-55 mb-4">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <span className="font-gujarati leading-relaxed">{SCHOOL_INFO.address}</span>
            </div>
            <a
              href="https://maps.google.com/?q=Sevasi+High+School+Vadodara"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium opacity-50 hover:opacity-100 transition-opacity border border-white/15 rounded-lg px-3 py-1.5"
            >
              <ExternalLink className="w-3 h-3" />
              {t("Google Maps પર જુઓ", "View on Google Maps")}
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-primary-foreground/10 my-10" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs opacity-35">
          <span>© {currentYear} {SCHOOL_INFO.name}. {t("સ્થાપના: ૧૯૬૭", "Est. 1967")}. All rights reserved.</span>
          <span>
            {t("સેવાસી, વડોદરા", "Sewasi, Vadodara")}
            <span className="mx-2">·</span>
            Crafted by <a href="https://nexspire.in" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity font-semibold">NexSpire</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
