import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Award, Building, ArrowRight, GraduationCap, FlaskConical, BookOpenCheck, Monitor } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-school.jpeg";

const Index = () => {
  const { t } = useLanguage();

  const stats = [
    { num: "55+", label: t("વર્ષનો અનુભવ", "Years of Excellence") },
    { num: "2500+", label: t("વિદ્યાર્થીઓ", "Students") },
    { num: "120+", label: t("શિક્ષકો", "Faculty Members") },
    { num: "98%", label: t("બોર્ડ પરિણામ", "Board Results") },
  ];

  const whyCards = [
    {
      icon: BookOpen,
      title: t("ગુણવત્તાયુક્ત શિક્ષણ", "Quality Education"),
      desc: t(
        "અનુભવી શિક્ષકો દ્વારા વિદ્યાર્થીઓના સર્વાંગી વિકાસ પર ધ્યાન કેન્દ્રિત. GSEB અભ્યાસક્રમ સાથે આધુનિક શિક્ષણ પદ્ધતિઓ.",
        "Focused on holistic student development through experienced faculty. Modern teaching methodologies aligned with GSEB curriculum."
      ),
    },
    {
      icon: Users,
      title: t("અનુભવી શિક્ષકો", "Experienced Faculty"),
      desc: t(
        "દરેક વિષયમાં નિષ્ણાત અને સમર્પિત શિક્ષકોની ટીમ. નિયમિત તાલીમ દ્વારા અદ્યતન શિક્ષણ પદ્ધતિઓનો ઉપયોગ.",
        "A dedicated team of subject matter experts. Continuously trained in the latest pedagogical methods."
      ),
    },
    {
      icon: Award,
      title: t("ઉત્કૃષ્ટ પરિણામો", "Excellent Results"),
      desc: t(
        "બોર્ડ પરીક્ષાઓમાં સતત ઉત્તમ પરિણામોની પરંપરા. દર વર્ષે 98% થી વધુ વિદ્યાર્થીઓ ઉત્તીર્ણ.",
        "A legacy of outstanding board exam results. Over 98% pass rate year after year."
      ),
    },
    {
      icon: Building,
      title: t("આધુનિક સુવિધાઓ", "Modern Facilities"),
      desc: t(
        "પ્રયોગશાળા, ગ્રંથાલય, સ્માર્ટ ક્લાસરૂમ, અને વિશાળ રમતગમતના મેદાન સહિતની સુવિધાઓ.",
        "Labs, library, smart classrooms, and expansive sports grounds to support comprehensive learning."
      ),
    },
  ];

  const grades = [
    { range: t("ધોરણ 1-5", "Grade 1-5"), label: t("પ્રાથમિક", "Primary"), desc: t("મૂળભૂત ખ્યાલો અને કૌશલ્ય", "Foundation concepts & skills") },
    { range: t("ધોરણ 6-8", "Grade 6-8"), label: t("ઉચ્ચ પ્રાથમિક", "Upper Primary"), desc: t("વિષયવસ્તુની ઊંડી સમજ", "Deeper subject understanding") },
    { range: t("ધોરણ 9-10", "Grade 9-10"), label: t("માધ્યમિક", "Secondary"), desc: t("બોર્ડ પરીક્ષા તૈયારી", "Board exam preparation") },
    { range: t("ધોરણ 11-12", "Grade 11-12"), label: t("ઉચ્ચતર માધ્યમિક", "Higher Secondary"), desc: t("વિજ્ઞાન / સામાન્ય પ્રવાહ", "Science / General stream") },
  ];

  const facilities = [
    { icon: FlaskConical, name: t("વિજ્ઞાન પ્રયોગશાળા", "Science Lab") },
    { icon: Monitor, name: t("કમ્પ્યુટર લેબ", "Computer Lab") },
    { icon: BookOpenCheck, name: t("ગ્રંથાલય", "Library") },
    { icon: GraduationCap, name: t("સ્માર્ટ ક્લાસરૂમ", "Smart Classrooms") },
    { icon: Award, name: t("રમતગમત મેદાન", "Sports Ground") },
    { icon: Building, name: t("સભાખંડ", "Auditorium") },
  ];

  const testimonials = [
    {
      quote: t(
        "સેવાસી હાઈ સ્કૂલે મારા બાળકના વ્યક્તિત્વ વિકાસમાં ખૂબ જ મહત્વની ભૂમિકા ભજવી છે. શિક્ષકો ખૂબ જ સમર્પિત છે.",
        "Sevasi High School has played a vital role in my child's personality development. The teachers are truly dedicated."
      ),
      name: t("રાજેશભાઈ પટેલ", "Rajeshbhai Patel"),
      role: t("વાલી", "Parent"),
    },
    {
      quote: t(
        "ગુજરાતી માધ્યમમાં આટલી સારી ગુણવત્તાનું શિક્ષણ મળવું ખૂબ જ દુર્લભ છે. અમે ખૂબ સંતુષ્ટ છીએ.",
        "Finding such quality education in Gujarati medium is rare. We are extremely satisfied with the school."
      ),
      name: t("મીનાબેન શાહ", "Meenaben Shah"),
      role: t("વાલી", "Parent"),
    },
    {
      quote: t(
        "બોર્ડ પરીક્ષામાં મળેલી સફળતા માટે હું મારી શાળાનો આભારી છું. શિક્ષકોનું માર્ગદર્શન અમૂલ્ય હતું.",
        "I owe my board exam success to my school. The guidance from teachers was invaluable."
      ),
      name: t("અર્જુન ઠાકર", "Arjun Thakar"),
      role: t("ભૂતપૂર્વ વિદ્યાર્થી", "Alumni"),
    },
  ];

  return (
    <div className="pb-16 lg:pb-0">
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Hero background image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Sevasi High School Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(215_78%_12%_/_0.92)] via-[hsl(215_78%_16%_/_0.85)] to-[hsl(215_78%_20%_/_0.7)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,_hsl(215_78%_30%_/_0.3)_0%,_transparent_50%)]" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        <div className="section-container relative z-10 py-28 sm:py-36">
          <div className="max-w-2xl">
            <AnimatedSection>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 mb-6"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                <span className="text-xs font-medium tracking-wide text-white/80">
                  {t("પ્રવેશ ચાલુ છે • 2025-26", "Admissions Open • 2025-26")}
                </span>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="font-gujarati text-3xl sm:text-4xl lg:text-[3.25rem] font-bold text-white leading-[1.15] mb-5">
                {t("શિક્ષણનો પાયો, ભવિષ્યની ઈમારત", "Foundation of Education, Architecture of Future")}
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-base sm:text-lg text-white/60 leading-relaxed mb-8 max-w-lg">
                {t(
                  "સેવાસી હાઈ સ્કૂલ — ૧૯૬૭ થી વડોદરામાં ગુજરાતી માધ્યમમાં ગુણવત્તાયુક્ત શિક્ષણ અને સર્વાંગી વિકાસ માટે વિશ્વસનીય સંસ્થા.",
                  "Sevasi High School — A trusted institution in Vadodara providing quality Gujarati medium education and holistic development since 1967."
                )}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/admissions">
                  <Button className="btn-standard-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 font-heading font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    {t("પ્રવેશ માટે પૂછપરછ", "Enquire for Admission")}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" className="btn-standard-lg border-white/15 text-white hover:bg-white/5 font-heading rounded-xl">
                    {t("અમારા વિશે જાણો", "Learn About Us")}
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-10 -mt-16">
        <div className="section-container">
          <AnimatedSection>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="card-modern p-5 sm:p-6 text-center"
                >
                  <p className="stat-number mb-1">{s.num}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Sevasi */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="section-label">{t("શા માટે અમે", "Why Us")}</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                {t("શા માટે સેવાસી હાઈ સ્કૂલ?", "Why Sevasi High School?")}
              </h2>
              <p className="text-sm text-muted-foreground mt-3 max-w-md mx-auto">
                {t(
                  "વર્ષોના અનુભવ, સમર્પિત શિક્ષકો, અને આધુનિક સુવિધાઓ સાથે અમે શ્રેષ્ઠ શિક્ષણ આપીએ છીએ.",
                  "With years of experience, dedicated faculty, and modern facilities, we deliver excellence in education."
                )}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
            {whyCards.map((card, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="feature-item h-full flex gap-5">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-primary/5 flex items-center justify-center">
                    <card.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-2 text-[0.95rem]">
                      {card.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Academics Overview */}
      <section className="section-padding bg-muted/30">
        <div className="section-container">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="section-label">{t("અભ્યાસક્રમ", "Academics")}</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                {t("અભ્યાસક્રમ માળખું", "Curriculum Structure")}
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {grades.map((grade, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="card-modern p-6 text-center h-full">
                  <p className="stat-number text-3xl mb-2">{grade.range}</p>
                  <p className="font-heading font-semibold text-foreground text-sm mb-1">{grade.label}</p>
                  <p className="text-xs text-muted-foreground">{grade.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="mt-10 text-center">
              <Link to="/academics">
                <Button variant="outline" className="btn-standard font-heading rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  {t("સંપૂર્ણ અભ્યાસક્રમ જુઓ", "View Full Curriculum")}
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
            <div className="text-center mb-14">
              <span className="section-label">{t("સુવિધાઓ", "Facilities")}</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                {t("અમારી સુવિધાઓ", "Our Facilities")}
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {facilities.map((f, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <div className="feature-item text-center py-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mx-auto mb-4">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-heading font-semibold text-sm text-foreground">{f.name}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-muted/30">
        <div className="section-container">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="section-label">{t("પ્રતિભાવ", "Testimonials")}</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                {t("વાલીઓ અને વિદ્યાર્થીઓના અનુભવો", "What Parents & Students Say")}
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
            {testimonials.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="card-modern p-6 sm:p-7 h-full flex flex-col">
                  <div className="text-3xl text-primary/20 font-heading font-bold mb-3">"</div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
                    {item.quote}
                  </p>
                  <div className="border-t border-border/50 pt-4">
                    <p className="font-heading font-semibold text-sm text-foreground">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.role}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions CTA */}
      <section className="cta-surface">
        <div className="section-container py-20 sm:py-24 relative z-10">
          <AnimatedSection>
            <div className="text-center max-w-lg mx-auto">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                <span className="text-xs font-medium text-white/80">
                  {t("૨૦૨૫-૨૬ પ્રવેશ", "2025-26 Admissions")}
                </span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                {t("પ્રવેશ પ્રક્રિયા ચાલુ છે", "Admissions Are Now Open")}
              </h2>
              <p className="text-sm text-white/60 mb-10 leading-relaxed">
                {t(
                  "આપના બાળકના ઉજ્જવળ ભવિષ્ય માટે આજે જ સેવાસી હાઈ સ્કૂલમાં પ્રવેશ માટે સંપર્ક કરો.",
                  "Contact us today to enroll your child for a brighter future at Sevasi High School."
                )}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/admissions">
                  <Button className="btn-standard-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 font-heading font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    {t("અરજી કરો", "Apply Now")}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="btn-standard-lg border-white/15 text-white hover:bg-white/5 font-heading rounded-xl">
                    {t("સંપર્ક કરો", "Contact Us")}
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
