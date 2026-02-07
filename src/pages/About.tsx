import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Target, Eye, BookOpen, Users } from "lucide-react";

const About = () => {
  const { t } = useLanguage();

  const milestones = [
    { year: "1985", event: t("શાળાની સ્થાપના", "School established") },
    { year: "1995", event: t("ઉચ્ચ પ્રાથમિક વિભાગ શરૂ", "Upper primary section launched") },
    { year: "2005", event: t("માધ્યમિક વિભાગ શરૂ", "Secondary section launched") },
    { year: "2012", event: t("ઉચ્ચતર માધ્યમિક વિભાગ શરૂ", "Higher secondary section launched") },
    { year: "2018", event: t("સ્માર્ટ ક્લાસરૂમ શરૂ", "Smart classrooms introduced") },
    { year: "2024", event: t("નવી કમ્પ્યુટર લેબ", "New computer lab inaugurated") },
  ];

  const values = [
    { icon: Target, title: t("શિસ્ત", "Discipline"), desc: t("સ્વ-શિસ્ત અને જવાબદારીનું મૂલ્ય", "Values of self-discipline and responsibility") },
    { icon: Eye, title: t("ઈમાનદારી", "Integrity"), desc: t("સત્ય અને નૈતિકતાનું પાલન", "Adherence to truth and ethics") },
    { icon: BookOpen, title: t("જ્ઞાન", "Knowledge"), desc: t("આજીવન શિક્ષણની ભાવના", "Spirit of lifelong learning") },
    { icon: Users, title: t("સેવા", "Service"), desc: t("સમાજ પ્રત્યે જવાબદારી", "Responsibility towards society") },
  ];

  return (
    <div className="pt-20 pb-16 lg:pb-0">
      {/* Header */}
      <section className="cta-surface py-20 sm:py-24">
        <div className="section-container relative z-10">
          <AnimatedSection>
            <span className="section-label text-primary-foreground/40 before:bg-primary-foreground/20">
              {t("અમારા વિશે", "About Us")}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-5">
              {t("અમારી ઓળખ", "Who We Are")}
            </h1>
            <p className="text-sm sm:text-base text-primary-foreground/60 max-w-xl leading-relaxed">
              {t(
                "સેવાસી હાઈ સ્કૂલ ૧૯૮૫ થી વડોદરામાં ગુજરાતી માધ્યમ શિક્ષણ ક્ષેત્રે એક વિશ્વસનીય નામ છે. હજારો વિદ્યાર્થીઓને ગુણવત્તાયુક્ત શિક્ષણ આપવાનો અમારો ગૌરવશાળી ઈતિહાસ છે.",
                "Since 1985, Sevasi High School has been a trusted name in Gujarati medium education in Vadodara. We take pride in our legacy of providing quality education to thousands of students."
              )}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <AnimatedSection>
              <div className="card-modern p-7 sm:p-8 h-full">
                <div className="w-11 h-11 rounded-xl bg-primary/5 flex items-center justify-center mb-5">
                  <Eye className="w-5 h-5 text-primary" />
                </div>
                <span className="section-label">{t("દ્રષ્ટિ", "Vision")}</span>
                <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                  {t("અમારી દ્રષ્ટિ", "Our Vision")}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(
                    "દરેક વિદ્યાર્થીને જ્ઞાન, સંસ્કાર અને આત્મવિશ્વાસથી સજ્જ કરી સમાજના જવાબદાર નાગરિક તરીકે તૈયાર કરવા. અમારો ઉદ્દેશ્ય માત્ર પુસ્તકિયું જ્ઞાન નહીં, પરંતુ જીવનલક્ષી શિક્ષણ આપવાનો છે. દરેક બાળક વિશ્વાસ સાથે પોતાના સપનાં સાકાર કરી શકે તે અમારું ધ્યેય છે.",
                    "To equip every student with knowledge, values, and confidence to become responsible citizens. Our purpose extends beyond textbook learning to life-oriented education. We aim for every child to realize their dreams with confidence."
                  )}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="card-modern p-7 sm:p-8 h-full">
                <div className="w-11 h-11 rounded-xl bg-primary/5 flex items-center justify-center mb-5">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <span className="section-label">{t("ધ્યેય", "Mission")}</span>
                <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                  {t("અમારું ધ્યેય", "Our Mission")}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(
                    "ગુજરાતી માધ્યમમાં ઉત્તમ શૈક્ષણિક વાતાવરણ પ્રદાન કરવું, વિદ્યાર્થીઓની સર્જનાત્મકતા અને વિચારશક્તિનો વિકાસ કરવો, અને તેમને રાષ્ટ્રીય તથા આંતરરાષ્ટ્રીય સ્તરે સ્પર્ધાત્મક બનાવવા. અમે દરેક વિદ્યાર્થીની અનન્ય ક્ષમતાઓને ઓળખી તેને યોગ્ય દિશા આપવામાં માનીએ છીએ.",
                    "To provide an excellent academic environment in Gujarati medium, develop students' creativity and critical thinking, and prepare them for national and international competitiveness. We believe in recognizing each student's unique abilities and guiding them in the right direction."
                  )}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-muted/30">
        <div className="section-container">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="section-label">{t("મૂલ્યો", "Values")}</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                {t("અમારા મૂળ મૂલ્યો", "Our Core Values")}
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="feature-item text-center py-8 h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mx-auto mb-4">
                    <v.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">{v.title}</h3>
                  <p className="text-xs text-muted-foreground">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-background">
        <div className="section-container max-w-2xl">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="section-label">{t("ઈતિહાસ", "History")}</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                {t("અમારી સફર", "Our Journey")}
              </h2>
            </div>
          </AnimatedSection>

          <div className="space-y-0">
            {milestones.map((m, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="flex gap-6 items-start group">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-primary/20 group-hover:bg-primary transition-colors duration-300 shrink-0 mt-1.5" />
                    {i < milestones.length - 1 && <div className="w-px h-12 bg-border" />}
                  </div>
                  <div className="pb-8">
                    <p className="font-heading font-bold text-primary text-sm">{m.year}</p>
                    <p className="text-sm text-muted-foreground">{m.event}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="section-padding bg-muted/30">
        <div className="section-container max-w-3xl">
          <AnimatedSection>
            <span className="section-label">{t("આચાર્યનો સંદેશ", "Principal's Message")}</span>
            <h2 className="text-2xl font-bold text-foreground mb-8">
              {t("આચાર્યશ્રીનો સંદેશ", "Message from the Principal")}
            </h2>
            <div className="card-modern p-7 sm:p-8">
              <blockquote className="text-sm text-muted-foreground leading-[1.8] space-y-4 border-l-2 border-primary/20 pl-6">
                <p>
                  {t(
                    "\"વિદ્યાર્થીમિત્રો અને વાલીઓ, સેવાસી હાઈ સ્કૂલના પરિવારમાં આપનું હાર્દિક સ્વાગત છે. અમારી શાળા ૧૯૮૫ થી ગુજરાતી માધ્યમમાં ગુણવત્તાયુક્ત શિક્ષણ આપવા પ્રતિબદ્ધ છે.\"",
                    "\"Dear students and parents, a heartfelt welcome to the Sevasi High School family. Our school has been committed to providing quality education in Gujarati medium since 1985.\""
                  )}
                </p>
                <p>
                  {t(
                    "\"અમારો પ્રયાસ દરેક વિદ્યાર્થીને એક સારા માણસ, એક સારા નાગરિક અને એક સારા વ્યાવસાયિક તરીકે તૈયાર કરવાનો છે. શિક્ષણ માત્ર પુસ્તકો સુધી સીમિત નથી — તે જીવન જીવવાની કળા છે.\"",
                    "\"Our endeavor is to prepare every student as a good person, a good citizen, and a good professional. Education is not limited to books — it is the art of living.\""
                  )}
                </p>
                <p>
                  {t(
                    "\"આપના સહકાર અને વિશ્વાસ માટે અમે સદા આભારી છીએ. સાથે મળીને આપણે આપના બાળકોનું ઉજ્જવળ ભવિષ્ય ઘડીશું.\"",
                    "\"We are always grateful for your cooperation and trust. Together, we shall build a bright future for your children.\""
                  )}
                </p>
              </blockquote>
              <div className="mt-6 pt-4 border-t border-border/50">
                <p className="font-heading font-semibold text-sm text-foreground">
                  {t("શ્રી રમેશભાઈ દેસાઈ", "Shri Rameshbhai Desai")}
                </p>
                <p className="text-xs text-muted-foreground">{t("આચાર્ય, સેવાસી હાઈ સ્કૂલ", "Principal, Sevasi High School")}</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default About;
