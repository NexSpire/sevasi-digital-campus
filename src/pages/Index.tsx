import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Users,
  Award,
  Building,
  ArrowRight,
  GraduationCap,
  FlaskConical,
  BookOpenCheck,
  Monitor,
  Shield,
  Heart,
  Lightbulb,
  Globe2,
  Clock,
  Star,
  CheckCircle,
  Microscope,
  Wifi,
  TreePine,
  PenLine,
  ChevronDown,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import FloatingShapes from "@/components/FloatingShapes";
import { useLanguage } from "@/contexts/LanguageContext";
import { SCHOOL_INFO, SCHOOL_INFO_PARTIAL_DATA, SCHOOL_ACADEMICS_DATA } from "@/config/constants";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-school.jpeg";
import { testimonialStore, type Testimonial } from "@/lib/testimonials";

const Index = () => {
  const { t } = useLanguage();
  const classCounts = SCHOOL_ACADEMICS_DATA.classes;
  const [visibleTestimonials, setVisibleTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    setVisibleTestimonials(testimonialStore.getVisible());
  }, []);

  const stats = [
    { num: "57+", label: t("વર્ષનો અનુભવ (૧૯૬૭ થી)", "Years of Excellence (Est. 1967)"), icon: Clock },
    { num: "2500+", label: t("વિદ્યાર્થીઓ", "Students"), icon: Users },
    { num: "3.9★", label: t("રેટિંગ (૨૨ રિવ્યૂ)", "Rating (22 Reviews)"), icon: Star },
    { num: "98%", label: t("બોર્ડ પરિણામ", "Board Results"), icon: Award },
  ];

  const whyCards = [
    {
      icon: BookOpen,
      title: t("ગુણવત્તાયુક્ત શિક્ષણ", "Quality Education"),
      desc: t(
        "અનુભવી શિક્ષકો દ્વારા વિદ્યાર્થીઓના સર્વાંગી વિકાસ પર ધ્યાન કેન્દ્રિત. GSEB અભ્યાસક્રમ સાથે આધુનિક શિક્ષણ પદ્ધતિઓ.",
        "Focused on holistic student development through experienced faculty. Modern teaching methodologies aligned with GSEB curriculum.",
      ),
      color: "blue",
    },
    {
      icon: Users,
      title: t("અનુભવી શિક્ષકો", "Experienced Faculty"),
      desc: t(
        "દરેક વિષયમાં નિષ્ણાત અને સમર્પિત શિક્ષકોની ટીમ. ૧૨૦+ શિક્ષકોમાંથી ૬૦% M.Ed. ધરાવે છે.",
        "A dedicated team of subject matter experts. Over 60% of our 120+ faculty hold M.Ed. degrees.",
      ),
      color: "emerald",
    },
    {
      icon: Award,
      title: t("ઉત્કૃષ્ટ પરિણામો", "Excellent Results"),
      desc: t(
        "બોર્ડ પરીક્ષાઓમાં સતત ઉત્તમ પરિણામોની પરંપરા. દર વર્ષે 98% થી વધુ વિદ્યાર્થીઓ ઉત્તીર્ણ.",
        "A legacy of outstanding board exam results. Over 98% pass rate year after year.",
      ),
      color: "amber",
    },
    {
      icon: Building,
      title: t("આધુનિક સુવિધાઓ", "Modern Facilities"),
      desc: t(
        "પ્રયોગશાળા, ગ્રંથાલય, સ્માર્ટ ક્લાસરૂમ, રમતગમતના મેદાન, CCTV, RO પાણી.",
        "Labs, library, smart classrooms, sports grounds, CCTV, RO purified water.",
      ),
      color: "slate",
    },
    {
      icon: Shield,
      title: t("સુરક્ષિત વાતાવરણ", "Safe Environment"),
      desc: t(
        "૨૪/૭ CCTV, સુરક્ષા ગાર્ડ, વિઝિટર મેનેજમેન્ટ, અગ્નિશામક સાધનો.",
        "24/7 CCTV, security guards, visitor management, fire safety equipment.",
      ),
      color: "violet",
    },
    {
      icon: Heart,
      title: t("મૂલ્ય આધારિત શિક્ષણ", "Value-Based Education"),
      desc: t(
        "નૈતિક મૂલ્યો, સંસ્કાર, અને સામાજિક જવાબદારીનું શિક્ષણ. ચારિત્ર્ય નિર્માણ.",
        "Education in moral values, culture, and social responsibility. Character building.",
      ),
      color: "rose",
    },
  ];

  const colorMap: Record<string, { accent: string; iconBg: string; iconC: string }> = {
    blue: { accent: "bg-blue-50/80 border-blue-100", iconBg: "bg-blue-100", iconC: "text-blue-600" },
    emerald: { accent: "bg-emerald-50/80 border-emerald-100", iconBg: "bg-emerald-100", iconC: "text-emerald-600" },
    amber: { accent: "bg-amber-50/80 border-amber-100", iconBg: "bg-amber-100", iconC: "text-amber-600" },
    slate: { accent: "bg-slate-50/80 border-slate-200", iconBg: "bg-slate-100", iconC: "text-slate-600" },
    violet: { accent: "bg-violet-50/80 border-violet-100", iconBg: "bg-violet-100", iconC: "text-violet-600" },
    rose: { accent: "bg-rose-50/80 border-rose-100", iconBg: "bg-rose-100", iconC: "text-rose-600" },
  };

  const grades = [
    {
      range: String(classCounts.pre_primary),
      label: t("પ્રિ-પ્રાથમિક વર્ગો", "Pre-Primary Classes"),
      desc: t(
        "આરંભિક અધ્યયન, ભાષા અને વ્યવહારિક વિકાસ પર ધ્યાન.",
        "Early-stage foundational learning with language and behavioral development focus.",
      ),
    },
    {
      range: String(classCounts.primary),
      label: t("પ્રાથમિક વર્ગો", "Primary Classes"),
      desc: t(
        "ગુજરાતી માધ્યમ સાથે મૂળભૂત શૈક્ષણિક પાયો મજબૂત કરાય છે.",
        "Core foundational academics delivered in Gujarati medium.",
      ),
    },
    {
      range: String(classCounts.secondary),
      label: t("માધ્યમિક વર્ગો", "Secondary Classes"),
      desc: t(
        "શૈક્ષણિક કૌશલ્ય અને પરીક્ષા તૈયારી માટે રચાયેલ સંરચના.",
        "Structured for stronger academic outcomes and exam readiness.",
      ),
    },
    {
      range: String(classCounts.higher_secondary),
      label: t("ઉચ્ચતર માધ્યમિક વર્ગો", "Higher Secondary Classes"),
      desc: t(
        "વિજ્ઞાન અને સામાન્ય પ્રવાહ સાથે આગળના અભ્યાસ માટે માર્ગદર્શન.",
        "Science and General streams with guidance for higher studies.",
      ),
    },
  ];

  const facilities = [
    { icon: FlaskConical, name: t("વિજ્ઞાન પ્રયોગશાળા", "Science Lab"), desc: t("ભૌતિક, રસાયણ, જીવ વિજ્ઞાન માટે આધુનિક પ્રયોગશાળા.", "Separate modern labs for Physics, Chemistry, and Biology.") },
    { icon: Monitor, name: t("કમ્પ્યુટર લેબ", "Computer Lab"), desc: t("૪૦+ કમ્પ્યુટર, હાઇ-સ્પીડ ઇન્ટરનેટ.", "40+ computers, high-speed internet.") },
    { icon: BookOpenCheck, name: t("ગ્રંથાલય", "Library"), desc: t("૧૫,૦૦૦+ પુસ્તકો, શાંત વાચન ખંડ.", "15,000+ books, quiet reading room.") },
    { icon: GraduationCap, name: t("સ્માર્ટ ક્લાસરૂમ", "Smart Classrooms"), desc: t("LED પ્રોજેક્ટર, ડિજિટલ બોર્ડ.", "LED projectors, digital boards.") },
    { icon: Award, name: t("રમતગમત મેદાન", "Sports Ground"), desc: t("ક્રિકેટ, ફૂટબોલ, કબડ્ડી, એથ્લેટિક્સ.", "Cricket, football, kabaddi, athletics.") },
    { icon: Building, name: t("સભાખંડ", "Auditorium"), desc: t("૫૦૦+ બેઠક ક્ષમતા, સાઉન્ડ સિસ્ટમ.", "500+ seating capacity, sound system.") },
    { icon: Microscope, name: t("ગણિત લેબ", "Math Lab"), desc: t("ગણિતના ખ્યાલોને હાથે-કામે સમજવા.", "Hands-on understanding of math concepts.") },
    { icon: Wifi, name: t("Wi-Fi કેમ્પસ", "Wi-Fi Campus"), desc: t("સંપૂર્ણ કેમ્પસ Wi-Fi.", "Entire campus connected.") },
    { icon: TreePine, name: t("ગ્રીન કેમ્પસ", "Green Campus"), desc: t("વૃક્ષારોપણ, રેઇનવોટર હાર્વેસ્ટિંગ.", "Tree plantation, rainwater harvesting.") },
  ];

  const facilityColors = [
    { iconBg: "bg-rose-100", iconC: "text-rose-600" },
    { iconBg: "bg-blue-100", iconC: "text-blue-600" },
    { iconBg: "bg-violet-100", iconC: "text-violet-600" },
    { iconBg: "bg-emerald-100", iconC: "text-emerald-600" },
    { iconBg: "bg-amber-100", iconC: "text-amber-600" },
    { iconBg: "bg-slate-100", iconC: "text-slate-600" },
    { iconBg: "bg-orange-100", iconC: "text-orange-600" },
    { iconBg: "bg-cyan-100", iconC: "text-cyan-600" },
    { iconBg: "bg-green-100", iconC: "text-green-600" },
  ];

  const highlights = [
    { icon: Clock, text: t("૧૯૬૭ થી — ૫૭+ વર્ષનો ગૌરવશાળી ઈતિહાસ", "Since 1967 — 57+ years of glorious history") },
    { icon: Star, text: t("૩.૯ સ્ટાર રેટિંગ — ૨૨ રિવ્યૂ પર આધારિત", "3.9 Star Rating — based on 22 reviews") },
    { icon: CheckCircle, text: t("રાજ્ય બોર્ડ (GSEB) સાથે સંલગ્ન — માન્ય સંસ્થા", "State Board (GSEB) affiliated — recognized institution") },
    { icon: Users, text: t("સમય વિભાગ પ્રમાણે અલગ — સંપર્ક પેજ જુઓ", "Section-wise timings available — see Contact page") },
  ];

  return (
    <div className="pb-16 lg:pb-0">

      {/* ── Hero ── */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Sevasi High School Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(218_72%_8%_/_0.94)] via-[hsl(218_72%_12%_/_0.88)] to-[hsl(218_72%_18%_/_0.72)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,_hsl(218_72%_30%_/_0.25)_0%,_transparent_50%)]" />
        </div>
        <FloatingShapes variant="dark" density="high" />

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />

        <div className="section-container relative z-10 py-32 sm:py-40">
          <div className="max-w-2xl">
            <AnimatedSection>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.08] border border-white/[0.12] backdrop-blur-sm mb-7"
              >
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span className="text-sm font-medium tracking-wide text-white/80">
                  {t("પ્રવેશ ચાલુ છે • 2025-26", "Admissions Open • 2025-26")}
                </span>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="font-gujarati text-4xl sm:text-5xl lg:text-[3.75rem] font-bold text-white leading-[1.12] mb-6" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}>
                {t(
                  SCHOOL_INFO_PARTIAL_DATA.school.tagline.gu,
                  SCHOOL_INFO_PARTIAL_DATA.school.tagline.en,
                )}
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-lg sm:text-xl text-white/55 leading-relaxed mb-5 max-w-lg">
                {t(
                  SCHOOL_INFO_PARTIAL_DATA.school.description.gu,
                  SCHOOL_INFO_PARTIAL_DATA.school.description.en,
                )}
              </p>
           
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/admissions">
                  <Button className="btn-standard-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 font-heading font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm">
                    {t("પ્રવેશ માટે પૂછપરછ", "Enquire for Admission")}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline">
                    {t("અમારા વિશે જાણો", "Learn About Us")}
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-medium">
            {t("સ્ક્રોલ કરો", "Scroll")}
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-4 h-4 text-white/30" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="relative z-10 -mt-20">
        <div className="section-container">
          <AnimatedSection>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="bg-card/95 backdrop-blur-md border border-border/50 rounded-2xl p-5 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/[0.06] flex items-center justify-center mx-auto mb-3">
                    <s.icon className="w-5 h-5 text-primary/60" />
                  </div>
                  <p className="stat-number mb-1.5">{s.num}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium leading-snug">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Highlights strip ── */}
      <section className="py-10 sm:py-12 bg-background relative">
        <FloatingShapes variant="light" density="low" />
        <div className="section-container relative z-10">
          <AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-primary/[0.03] border border-primary/[0.06] hover:bg-primary/[0.06] hover:border-primary/[0.1] transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-xl bg-primary/[0.08] flex items-center justify-center shrink-0">
                    <h.icon className="w-4 h-4 text-primary/70" />
                  </div>
                  <span className="text-sm text-foreground/80 font-medium leading-snug">
                    {h.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Why Sevasi ── */}
      <section className="section-padding bg-muted/30 relative">
        <FloatingShapes variant="light" density="medium" />
        <div className="section-container relative z-10">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="section-label">{t("શા માટે અમે", "Why Us")}</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                {t("શા માટે સેવાસી હાઈ સ્કૂલ?", "Why Sevasi High School?")}
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground mt-3 max-w-xl mx-auto leading-relaxed">
                {t(
                  "૫૫+ વર્ષના અનુભવ, સમર્પિત શિક્ષકો, અને આધુનિક સુવિધાઓ સાથે ગુજરાતી માધ્યમમાં શ્રેષ્ઠ શિક્ષણ.",
                  "55+ years of experience, dedicated faculty, and modern facilities for excellence in Gujarati medium education.",
                )}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyCards.map((card, i) => {
              const colors = colorMap[card.color];
              return (
                <AnimatedSection key={i} delay={i * 0.06}>
                  <div className={`rounded-2xl border p-6 h-full flex gap-4 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 ${colors.accent}`}>
                    <div className={`w-11 h-11 shrink-0 rounded-xl flex items-center justify-center ${colors.iconBg}`}>
                      <card.icon className={`w-5 h-5 ${colors.iconC}`} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-1.5 text-[0.95rem]">
                        {card.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Academics Overview ── */}
      <section className="section-padding bg-background relative">
        <FloatingShapes variant="light" density="low" />
        <div className="section-container relative z-10">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="section-label">{t("અભ્યાસક્રમ", "Academics")}</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                {t("અભ્યાસક્રમ માળખું", "Curriculum Structure")}
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground mt-3 max-w-lg mx-auto leading-relaxed">
                {t(
                  `${SCHOOL_INFO_PARTIAL_DATA.basic_info.school_type.gu}. માધ્યમ: ${SCHOOL_INFO_PARTIAL_DATA.academics.teaching_medium.gu}.`,
                  `${SCHOOL_INFO_PARTIAL_DATA.basic_info.school_type.en}. Medium: ${SCHOOL_INFO_PARTIAL_DATA.academics.teaching_medium.en}.`,
                )}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { ...grades[0], stripe: "bg-rose-500",   badge: "bg-rose-100 text-rose-700"   },
              { ...grades[1], stripe: "bg-emerald-500", badge: "bg-emerald-100 text-emerald-700" },
              { ...grades[2], stripe: "bg-violet-500", badge: "bg-violet-100 text-violet-700" },
              { ...grades[3], stripe: "bg-amber-500",  badge: "bg-amber-100 text-amber-700"  },
            ].map((grade, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="bg-card border border-border/50 rounded-2xl overflow-hidden shadow-sm h-full flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className={`h-1.5 w-full ${grade.stripe}`} />
                  <div className="p-6 text-center flex-1 flex flex-col">
                    <p className={`text-4xl font-bold mb-3 inline-block mx-auto px-4 py-1.5 rounded-xl ${grade.badge}`}>
                      {grade.range}
                    </p>
                    <p className="font-heading font-semibold text-foreground text-[0.95rem] mb-2">
                      {grade.label}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-auto">
                      {grade.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="mt-10 text-center">
              <Link to="/academics">
                <Button
                  variant="outline"
                  className="btn-standard font-heading rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  {t("સંપૂર્ણ અભ્યાસક્રમ જુઓ", "View Full Curriculum")}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Facilities ── */}
      <section className="section-padding bg-muted/30 relative">
        <FloatingShapes variant="light" density="medium" />
        <div className="section-container relative z-10">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="section-label">{t("સુવિધાઓ", "Facilities")}</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                {t("અમારી સુવિધાઓ", "Our Facilities")}
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground mt-3 max-w-lg mx-auto leading-relaxed">
                {t(
                  "વિદ્યાર્થીઓના શૈક્ષણિક અને સર્વાંગી વિકાસ માટે અત્યાધુનિક સુવિધાઓ.",
                  "State-of-the-art facilities for students' academic and holistic development.",
                )}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {facilities.map((f, i) => {
              const fc = facilityColors[i];
              return (
                <AnimatedSection key={i} delay={i * 0.05}>
                  <div className="bg-card border border-border/50 rounded-2xl p-5 h-full flex gap-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                    <div className={`w-11 h-11 shrink-0 rounded-xl flex items-center justify-center ${fc.iconBg}`}>
                      <f.icon className={`w-5 h-5 ${fc.iconC}`} />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-[0.95rem] text-foreground mb-1">
                        {f.name}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      {visibleTestimonials.length > 0 && (
        <section className="section-padding bg-background relative">
          <FloatingShapes variant="light" density="low" />
          <div className="section-container relative z-10">
            <AnimatedSection>
              <div className="text-center mb-14">
                <span className="section-label">{t("પ્રતિભાવ", "Testimonials")}</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                  {t(
                    "વાલીઓ અને વિદ્યાર્થીઓના અનુભવો",
                    "What Parents & Students Say",
                  )}
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground mt-3 max-w-md mx-auto">
                  {t(
                    "અમારા વાલીઓ અને ભૂતપૂર્વ વિદ્યાર્થીઓના અનુભવો જ અમારી સૌથી મોટી ઓળખ છે.",
                    "The experiences of our parents and alumni are our greatest identity.",
                  )}
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
              {visibleTestimonials.map((item, i) => (
                <AnimatedSection key={item.id} delay={i * 0.08}>
                  <div className="bg-card border border-border/50 rounded-2xl overflow-hidden shadow-sm h-full flex flex-col hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                    <div className="px-7 pt-7 pb-5 flex-1">
                      <div className="text-5xl text-primary/10 font-heading font-bold leading-none mb-3 select-none">"</div>
                      <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                        {item.quote}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 border-t border-border/40 px-7 py-4">
                      <div className="w-9 h-9 rounded-full bg-primary/[0.08] flex items-center justify-center shrink-0">
                        <span className="text-sm font-bold text-primary">
                          {item.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-heading font-semibold text-sm text-foreground">
                          {item.name}
                        </p>
                        {item.role && (
                          <p className="text-xs text-muted-foreground">{item.role}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={0.3}>
              <div className="mt-10 text-center">
                <Link to="/testimonials/submit">
                  <Button
                    variant="outline"
                    className="btn-standard font-heading rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <PenLine className="w-4 h-4 mr-2" />
                    {t("તમારો અનુભવ શેર કરો", "Share Your Experience")}
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* ── Admissions CTA ── */}
      <section className="cta-surface relative">
        <FloatingShapes variant="dark" density="medium" />
        <div className="section-container py-20 sm:py-28 relative z-10">
          <AnimatedSection>
            <div className="text-center max-w-lg mx-auto">
              <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.08] border border-white/[0.12] backdrop-blur-sm mb-7">
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span className="text-sm font-medium text-white/80">
                  {t("૨૦૨૫-૨૬ પ્રવેશ", "2025-26 Admissions")}
                </span>
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
                {t("પ્રવેશ પ્રક્રિયા ચાલુ છે", "Admissions Are Now Open")}
              </h2>
              <p className="text-sm sm:text-base text-white/50 mb-10 leading-relaxed">
                {t(
                  "આપના બાળકના ઉજ્જવળ ભવિષ્ય માટે આજે જ સેવાસી હાઈ સ્કૂલમાં પ્રવેશ માટે સંપર્ક કરો.",
                  "Contact us today to enroll your child for a brighter future at Sevasi High School.",
                )}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/admissions">
                  <Button className="btn-standard-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 font-heading font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm">
                    {t("અરજી કરો", "Apply Now")}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    variant="ghost"
                    className="btn-standard-lg border border-white/15 text-white hover:bg-white/5 font-heading rounded-xl text-sm"
                  >
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
