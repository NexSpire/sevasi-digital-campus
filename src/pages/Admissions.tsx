import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { CheckCircle, ArrowRight, FileText, Users, School, CreditCard } from "lucide-react";

const Admissions = () => {
  const { t } = useLanguage();

  const steps = [
    { icon: FileText, step: "01", title: t("પૂછપરછ", "Enquiry"), desc: t("શાળા કાર્યાલય અથવા ઑનલાઇન ફોર્મ દ્વારા પૂછપરછ કરો. ફોન, ઈમેલ, અથવા રૂબરૂ મુલાકાત.", "Enquire through school office or online form. Via phone, email, or in-person visit.") },
    { icon: Users, step: "02", title: t("ફોર્મ ભરો", "Fill Form"), desc: t("પ્રવેશ ફોર્મ ભરો અને જરૂરી દસ્તાવેજો સાથે જમા કરો. ઑનલાઇન અને ઑફલાઇન બંને વિકલ્પ ઉપલબ્ધ.", "Fill the admission form and submit with required documents. Both online and offline options available.") },
    { icon: School, step: "03", title: t("મુલાકાત", "Visit"), desc: t("શાળાની મુલાકાત લો, સુવિધાઓ જુઓ, અને આચાર્ય સાથે ચર્ચા કરો. શાળાનું વાતાવરણ જાણો.", "Visit the school, see facilities, and discuss with the principal. Experience the school environment.") },
    { icon: CreditCard, step: "04", title: t("પ્રવેશ", "Admission"), desc: t("ફી ભરીને પ્રવેશ પ્રક્રિયા પૂર્ણ કરો. EMI સુવિધા ઉપલબ્ધ. ગણવેશ અને પુસ્તકોની માહિતી મળશે.", "Complete the admission by paying fees. EMI facility available. Uniform and book information will be provided.") },
  ];

  const documents = [
    t("જન્મ પ્રમાણપત્ર (ઓરિજિનલ + ફોટોકોપી)", "Birth certificate (Original + Photocopy)"),
    t("છેલ્લી શાળાનું LC (લિવિંગ સર્ટિફિકેટ)", "Transfer Certificate (LC) from previous school"),
    t("આધાર કાર્ડ — વિદ્યાર્થી અને વાલી", "Aadhaar Card — Student and Parent"),
    t("જાતિ પ્રમાણપત્ર (લાગુ હોય તો)", "Caste certificate (if applicable)"),
    t("પાસપોર્ટ સાઈઝ ફોટા — 4 નંગ", "Passport size photos — 4 nos"),
    t("છેલ્લા વર્ષનું પરિણામ પત્રક", "Previous year's mark sheet"),
    t("રહેઠાણનો પુરાવો (લાઈટ બિલ / રેશન કાર્ડ)", "Address proof (Electricity bill / Ration card)"),
  ];

  const eligibility = [
    { grade: t("ધોરણ 1", "Grade 1"), age: t("5.5+ વર્ષ (જૂન 1 સુધી)", "5.5+ years (as of June 1)") },
    { grade: t("ધોરણ 2-8", "Grade 2-8"), age: t("પાછલા ધોરણ ઉત્તીર્ણ", "Passed previous grade") },
    { grade: t("ધોરણ 9", "Grade 9"), age: t("ધોરણ 8 ઉત્તીર્ણ (GSEB)", "Grade 8 passed (GSEB)") },
    { grade: t("ધોરણ 11", "Grade 11"), age: t("ધોરણ 10 ઉત્તીર્ણ (GSEB)", "Grade 10 passed (GSEB)") },
  ];

  return (
    <div className="pt-20 pb-16 lg:pb-0">
      {/* Header */}
      <section className="cta-surface py-20 sm:py-24">
        <div className="section-container relative z-10">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/10 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              <span className="text-xs font-medium text-primary-foreground/80">
                {t("૨૦૨૫-૨૬ પ્રવેશ ચાલુ", "2025-26 Admissions Open")}
              </span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-5">
              {t("પ્રવેશ પ્રક્રિયા", "Admission Process")}
            </h1>
            <p className="text-sm sm:text-base text-primary-foreground/60 max-w-xl leading-relaxed">
              {t(
                "સેવાસી હાઈ સ્કૂલમાં પ્રવેશ માટે સરળ અને પારદર્શક પ્રક્રિયા. દરેક વિદ્યાર્થીને સમાન તક.",
                "Simple and transparent admission process at Sevasi High School. Equal opportunity for every student."
              )}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding bg-background">
        <div className="section-container max-w-4xl">
          <AnimatedSection>
            <span className="section-label">{t("પ્રક્રિયા", "Process")}</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-12">
              {t("પ્રવેશના પગલાં", "Admission Steps")}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
            {steps.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="card-modern p-6 sm:p-7 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 shrink-0 rounded-xl bg-primary/5 flex items-center justify-center">
                      <s.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs font-heading font-bold text-primary/30">{s.step}</span>
                      <h3 className="font-heading font-semibold text-foreground mt-0.5 mb-2">
                        {s.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="section-padding bg-muted/30">
        <div className="section-container max-w-3xl">
          <AnimatedSection>
            <span className="section-label">{t("પાત્રતા", "Eligibility")}</span>
            <h2 className="text-2xl font-bold text-foreground mb-8">
              {t("પાત્રતા માપદંડ", "Eligibility Criteria")}
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="card-modern overflow-hidden">
              <div className="grid grid-cols-2 gap-px bg-border/50">
                <div className="bg-primary/5 p-4">
                  <p className="text-xs font-heading font-semibold text-primary">{t("ધોરણ", "Grade")}</p>
                </div>
                <div className="bg-primary/5 p-4">
                  <p className="text-xs font-heading font-semibold text-primary">{t("લાયકાત", "Requirement")}</p>
                </div>
                {eligibility.map((e, i) => (
                  <>
                    <div key={`g-${i}`} className="bg-card p-4">
                      <p className="text-sm font-medium text-foreground">{e.grade}</p>
                    </div>
                    <div key={`a-${i}`} className="bg-card p-4">
                      <p className="text-sm text-muted-foreground">{e.age}</p>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Documents */}
      <section className="section-padding bg-background">
        <div className="section-container max-w-3xl">
          <AnimatedSection>
            <span className="section-label">{t("દસ્તાવેજો", "Documents")}</span>
            <h2 className="text-2xl font-bold text-foreground mb-8">
              {t("જરૂરી દસ્તાવેજો", "Required Documents")}
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="card-modern p-6 sm:p-7">
              <div className="space-y-3.5">
                {documents.map((doc, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <CheckCircle className="w-4 h-4 text-primary/60 mt-0.5 shrink-0 group-hover:text-primary transition-colors" />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {doc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-surface">
        <div className="section-container py-20 sm:py-24 relative z-10 text-center max-w-lg mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
              {t("પ્રવેશ માટે સંપર્ક કરો", "Contact for Admissions")}
            </h2>
            <p className="text-sm text-primary-foreground/60 mb-10">
              {t(
                "વધુ માહિતી માટે શાળા કાર્યાલયનો સંપર્ક કરો. અમે મદદ માટે તત્પર છીએ.",
                "Contact the school office for more information. We're here to help."
              )}
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="h-13 px-8 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-heading font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {t("સંપર્ક કરો", "Contact Us")}
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
