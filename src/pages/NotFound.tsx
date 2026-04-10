import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, BookOpen, Phone, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        {/* Large 404 */}
        <div className="relative mb-8">
          <span className="text-[8rem] sm:text-[10rem] font-heading font-extrabold leading-none text-primary/[0.06] select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-2xl bg-primary/[0.06] flex items-center justify-center">
              <BookOpen className="w-10 h-10 text-primary/30" />
            </div>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-3">
          {t("પૃષ્ઠ મળ્યું નથી", "Page Not Found")}
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground mb-8 leading-relaxed max-w-sm mx-auto">
          {t(
            "તમે શોધી રહ્યા છો તે પૃષ્ઠ અસ્તિત્વમાં નથી અથવા ખસેડવામાં આવ્યું છે.",
            "The page you're looking for doesn't exist or has been moved."
          )}
        </p>

        {/* Quick Links */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <Link to="/">
            <Button className="btn-standard bg-primary hover:bg-primary/90 font-heading font-semibold rounded-xl text-sm">
              <Home className="w-4 h-4 mr-2" />
              {t("હોમ પેજ", "Go Home")}
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" className="btn-standard font-heading rounded-xl text-sm">
              <Phone className="w-4 h-4 mr-2" />
              {t("સંપર્ક", "Contact Us")}
            </Button>
          </Link>
        </div>

        {/* Back link */}
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-3 h-3" />
          {t("પાછળ જાઓ", "Go Back")}
        </button>
      </motion.div>
    </div>
  );
};

export default NotFound;
