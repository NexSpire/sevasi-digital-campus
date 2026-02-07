import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  { step: "૧", title: "પૂછપરછ", desc: "શાળા કાર્યાલય અથવા ઑનલાઇન ફોર્મ દ્વારા પૂછપરછ કરો." },
  { step: "૨", title: "ફોર્મ ભરો", desc: "પ્રવેશ ફોર્મ ભરો અને જરૂરી દસ્તાવેજો સાથે જમા કરો." },
  { step: "૩", title: "મુલાકાત", desc: "શાળાની મુલાકાત લો અને આચાર્ય સાથે ચર્ચા કરો." },
  { step: "૪", title: "પ્રવેશ", desc: "ફી ભરીને પ્રવેશ પ્રક્રિયા પૂર્ણ કરો." },
];

const documents = [
  "જન્મ પ્રમાણપત્ર",
  "છેલ્લી શાળાનું LC (લિવિંગ સર્ટિફિકેટ)",
  "આધાર કાર્ડ (વિદ્યાર્થી અને વાલી)",
  "જાતિ પ્રમાણપત્ર (લાગુ હોય તો)",
  "પાસપોર્ટ સાઈઝ ફોટા (4 નંગ)",
  "છેલ્લા વર્ષનું પરિણામ પત્રક",
];

const Admissions = () => {
  return (
    <div className="pt-20 pb-16 lg:pb-0">
      {/* Header */}
      <section className="bg-primary py-16 sm:py-20">
        <div className="section-container">
          <AnimatedSection>
            <p className="text-xs font-medium tracking-wider uppercase text-secondary mb-2">
              Admissions
            </p>
            <h1 className="font-gujarati text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              પ્રવેશ પ્રક્રિયા
            </h1>
            <p className="font-gujarati text-sm text-primary-foreground/70 max-w-xl leading-relaxed">
              સેવાસી હાઈ સ્કૂલમાં પ્રવેશ માટે નીચે આપેલી માહિતી વાંચો.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding bg-background">
        <div className="section-container max-w-3xl">
          <AnimatedSection>
            <h2 className="font-gujarati text-2xl font-bold text-foreground mb-8">
              પ્રવેશના પગલાં
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {steps.map((s, i) => (
              <AnimatedSection key={s.step} delay={i * 0.08}>
                <Card className="border border-border shadow-sm h-full">
                  <CardContent className="p-6">
                    <span className="font-gujarati text-2xl font-bold text-primary/20">
                      {s.step}
                    </span>
                    <h3 className="font-gujarati font-semibold text-foreground mt-2 mb-2">
                      {s.title}
                    </h3>
                    <p className="font-gujarati text-sm text-muted-foreground leading-relaxed">
                      {s.desc}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Documents */}
      <section className="section-padding bg-card">
        <div className="section-container max-w-3xl">
          <AnimatedSection>
            <h2 className="font-gujarati text-2xl font-bold text-foreground mb-8">
              જરૂરી દસ્તાવેજો
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="space-y-3">
              {documents.map((doc) => (
                <div key={doc} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="font-gujarati text-sm text-muted-foreground">
                    {doc}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="section-container text-center max-w-lg mx-auto">
          <AnimatedSection>
            <h2 className="font-gujarati text-2xl font-bold text-primary-foreground mb-4">
              પ્રવેશ માટે સંપર્ક કરો
            </h2>
            <p className="font-gujarati text-sm text-primary-foreground/70 mb-8">
              વધુ માહિતી માટે શાળા કાર્યાલયનો સંપર્ક કરો અથવા અમને મેસેજ મોકલો.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="h-12 px-8 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-heading font-semibold"
              >
                સંપર્ક કરો
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
