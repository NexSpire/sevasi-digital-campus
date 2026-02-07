import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BookOpen, Users, Award, Building, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { SCHOOL_INFO } from "@/config/constants";

const whyCards = [
  {
    icon: BookOpen,
    title: "ગુણવત્તાયુક્ત શિક્ષણ",
    titleEn: "Quality Education",
    desc: "અનુભવી શિક્ષકો દ્વારા વિદ્યાર્થીઓના સર્વાંગી વિકાસ પર ધ્યાન કેન્દ્રિત.",
  },
  {
    icon: Users,
    title: "અનુભવી શિક્ષકો",
    titleEn: "Experienced Faculty",
    desc: "દરેક વિષયમાં નિષ્ણાત અને સમર્પિત શિક્ષકોની ટીમ.",
  },
  {
    icon: Award,
    title: "ઉત્કૃષ્ટ પરિણામો",
    titleEn: "Excellent Results",
    desc: "બોર્ડ પરીક્ષાઓમાં સતત ઉત્તમ પરિણામોની પરંપરા.",
  },
  {
    icon: Building,
    title: "આધુનિક સુવિધાઓ",
    titleEn: "Modern Facilities",
    desc: "પ્રયોગશાળા, ગ્રંથાલય, અને રમતગમતના મેદાન સહિતની સુવિધાઓ.",
  },
];

const grades = [
  { range: "ધોરણ 1-5", label: "પ્રાથમિક", en: "Primary" },
  { range: "ધોરણ 6-8", label: "ઉચ્ચ પ્રાથમિક", en: "Upper Primary" },
  { range: "ધોરણ 9-10", label: "માધ્યમિક", en: "Secondary" },
  { range: "ધોરણ 11-12", label: "ઉચ્ચતર માધ્યમિક", en: "Higher Secondary" },
];

const facilities = [
  "વિજ્ઞાન પ્રયોગશાળા",
  "કમ્પ્યુટર લેબ",
  "ગ્રંથાલય",
  "રમતગમત મેદાન",
  "સ્માર્ટ ક્લાસરૂમ",
  "સભાખંડ",
];

const Index = () => {
  return (
    <div className="pb-16 lg:pb-0">
      {/* Hero Section */}
      <section className="relative bg-primary min-h-[85vh] sm:min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(215_78%_28%)_0%,_transparent_60%)]" />
        <div className="section-container relative z-10 py-24 sm:py-32">
          <AnimatedSection>
            <div className="max-w-2xl">
              <p className="text-sm font-medium tracking-wider uppercase text-secondary mb-4">
                {SCHOOL_INFO.location} · {SCHOOL_INFO.medium}
              </p>
              <h1 className="font-gujarati text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-6">
                શિક્ષણનો પાયો, ભવિષ્યની ઈમારત
              </h1>
              <p className="font-gujarati text-base sm:text-lg text-primary-foreground/70 leading-relaxed mb-8 max-w-lg">
                સેવાસી હાઈ સ્કૂલ — ગુજરાતી માધ્યમમાં ગુણવત્તાયુક્ત શિક્ષણ
                અને સર્વાંગી વિકાસ માટે વડોદરાની વિશ્વસનીય સંસ્થા.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/admissions">
                  <Button
                    size="lg"
                    className="h-12 px-6 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-heading font-semibold"
                  >
                    પ્રવેશ માટે પૂછપરછ
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 px-6 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/5 font-heading"
                  >
                    અમારા વિશે જાણો
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Sevasi */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-2">
                Why Choose Us
              </p>
              <h2 className="font-gujarati text-2xl sm:text-3xl font-bold text-foreground">
                શા માટે સેવાસી હાઈ સ્કૂલ?
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyCards.map((card, i) => (
              <AnimatedSection key={card.titleEn} delay={i * 0.1}>
                <Card className="border border-border shadow-sm hover:shadow-md transition-shadow duration-200 h-full">
                  <CardContent className="p-6">
                    <card.icon className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-gujarati font-semibold text-foreground mb-1">
                      {card.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-2">
                      {card.titleEn}
                    </p>
                    <p className="font-gujarati text-sm text-muted-foreground leading-relaxed">
                      {card.desc}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Academics Overview */}
      <section className="section-padding bg-card">
        <div className="section-container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-2">
                Academics
              </p>
              <h2 className="font-gujarati text-2xl sm:text-3xl font-bold text-foreground">
                અભ્યાસક્રમ માળખું
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {grades.map((grade, i) => (
              <AnimatedSection key={grade.en} delay={i * 0.08}>
                <div className="border border-border rounded-lg p-5 sm:p-6 text-center bg-background hover:border-primary/20 transition-colors">
                  <p className="font-gujarati font-bold text-lg text-primary mb-1">
                    {grade.range}
                  </p>
                  <p className="font-gujarati text-sm text-foreground mb-0.5">
                    {grade.label}
                  </p>
                  <p className="text-xs text-muted-foreground">{grade.en}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="mt-8 text-center">
              <Link to="/academics">
                <Button variant="outline" className="font-heading">
                  View Full Curriculum
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Facilities */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-2">
                Facilities
              </p>
              <h2 className="font-gujarati text-2xl sm:text-3xl font-bold text-foreground">
                સુવિધાઓ
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {facilities.map((f, i) => (
              <AnimatedSection key={f} delay={i * 0.06}>
                <div className="border border-border rounded-lg p-4 sm:p-5 bg-card text-center">
                  <p className="font-gujarati text-sm font-medium text-foreground">
                    {f}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions CTA */}
      <section className="bg-primary">
        <div className="section-container py-16 sm:py-20">
          <AnimatedSection>
            <div className="text-center max-w-lg mx-auto">
              <h2 className="font-gujarati text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
                પ્રવેશ પ્રક્રિયા ચાલુ છે
              </h2>
              <p className="font-gujarati text-sm text-primary-foreground/70 mb-8 leading-relaxed">
                આપના બાળકના ઉજ્જવળ ભવિષ્ય માટે આજે જ સેવાસી હાઈ સ્કૂલમાં પ્રવેશ માટે સંપર્ક કરો.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/admissions">
                  <Button
                    size="lg"
                    className="h-12 px-8 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-heading font-semibold"
                  >
                    Apply Now — અરજી કરો
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/5 font-heading"
                  >
                    સંપર્ક કરો
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Index;
