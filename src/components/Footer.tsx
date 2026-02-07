import { Link } from "react-router-dom";
import { GraduationCap, Phone, Mail, MapPin } from "lucide-react";
import { SCHOOL_INFO, NAV_ITEMS } from "@/config/constants";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-md bg-primary-foreground/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="leading-tight">
                <span className="font-heading font-semibold text-sm block">
                  {SCHOOL_INFO.name}
                </span>
                <span className="font-gujarati text-xs opacity-70">
                  {SCHOOL_INFO.mediumGujarati}
                </span>
              </div>
            </div>
            <p className="font-gujarati text-sm opacity-70 leading-relaxed">
              ગુણવત્તાયુક્ત શિક્ષણ અને સર્વાંગી વિકાસ માટે સમર્પિત સંસ્થા.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.slice(0, 4).map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  {item.labelEn}
                </Link>
              ))}
            </nav>
          </div>

          {/* More Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-4">Explore</h4>
            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.slice(4).map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  {item.labelEn}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm opacity-70">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span className="font-gujarati">{SCHOOL_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <span>{SCHOOL_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <span>{SCHOOL_INFO.email}</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs opacity-50">
          <span>© 2025 {SCHOOL_INFO.name}. All rights reserved.</span>
          <span className="font-gujarati">સેવાસી, વડોદરા</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
