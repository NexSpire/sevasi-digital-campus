import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const MobileCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-card/95 backdrop-blur-sm border-t border-border p-3">
      <Link to="/admissions">
        <Button className="w-full h-12 font-heading font-semibold text-sm bg-primary hover:bg-primary/90">
          <Phone className="w-4 h-4 mr-2" />
          Admissions Enquiry — પ્રવેશ પૂછપરછ
        </Button>
      </Link>
    </div>
  );
};

export default MobileCTA;
