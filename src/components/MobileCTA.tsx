import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const MobileCTA = () => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.4, ease: "easeOut" }}
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden nav-glass p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
    >
      <div className="flex gap-2">
        <a href="tel:9662543201" className="shrink-0">
          <Button
            variant="outline"
            size="icon"
            className="h-12 w-12 rounded-xl border-primary/20 bg-primary/5 hover:bg-primary/10"
          >
            <Phone className="w-4.5 h-4.5 text-primary" />
          </Button>
        </a>
        <Link to="/admissions" className="flex-1">
          <Button className="w-full h-12 font-heading font-semibold bg-primary hover:bg-primary/90 rounded-xl shadow-lg text-sm">
            {t("પ્રવેશ પૂછપરછ", "Admissions Enquiry")}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default MobileCTA;
