import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const MobileCTA = () => {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden nav-glass border-t border-border/50 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <Link to="/admissions">
        <Button className="w-full h-12 font-heading font-semibold text-sm bg-primary hover:bg-primary/90 rounded-xl shadow-lg">
          <Phone className="w-4 h-4 mr-2" />
          {t("પ્રવેશ પૂછપરછ", "Admissions Enquiry")}
        </Button>
      </Link>
    </div>
  );
};

export default MobileCTA;
