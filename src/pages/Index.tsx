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
    { num: "57+", label: t("વર્ષનો અનુભવ (૧૯૬૭ થી)", "Years of Excellence (Est. 1967)") },
    { num: "2500+", label: t("વિદ્યાર્થીઓ", "Students") },
    { num: "3.9★", label: t("રેટિંગ (૨૨ રિવ્યૂ)", "Rating (22 Reviews)") },
    { num: "98%", label: t("બોર્ડ પરિણામ", "Board Results") },
  ];

  const whyCards = [
    {
      icon: BookOpen,
      title: t("ગુણવત્તાયુક્ત શિક્ષણ", "Quality Education"),
      desc: t(
        "અનુભવી શિક્ષકો દ્વારા વિદ્યાર્થીઓના સર્વાંગી વિકાસ પર ધ્યાન કેન્દ્રિત. GSEB અભ્યાસક્રમ સાથે આધુનિક શિક્ષણ પદ્ધતિઓ. દરેક વિદ્યાર્થીની શીખવાની ક્ષમતા અને ગતિ અનુસાર વ્યક્તિગત ધ્યાન આપવામાં આવે છે. અમારા શિક્ષકો નિયમિત રૂપે તાલીમ કાર્યક્રમોમાં ભાગ લે છે જેથી નવીનતમ શિક્ષણ પદ્ધતિઓનો ઉપયોગ થાય.",
        "Focused on holistic student development through experienced faculty. Modern teaching methodologies aligned with GSEB curriculum. Individual attention is given based on each student's learning ability and pace. Our teachers regularly participate in training programs to implement the latest pedagogical techniques.",
      ),
    },
    {
      icon: Users,
      title: t("અનુભવી શિક્ષકો", "Experienced Faculty"),
      desc: t(
        "દરેક વિષયમાં નિષ્ણાત અને સમર્પિત શિક્ષકોની ટીમ. નિયમિત તાલીમ દ્વારા અદ્યતન શિક્ષણ પદ્ધતિઓનો ઉપયોગ. અમારા ૧૨૦+ શિક્ષકોમાંથી ૬૦% થી વધુ M.Ed. ડિગ્રી ધરાવે છે. શિક્ષક-વિદ્યાર્થી ગુણોત્તર 1:20 છે જે વ્યક્તિગત ધ્યાન સુનિશ્ચિત કરે છે.",
        "A dedicated team of subject matter experts. Continuously trained in the latest pedagogical methods. Over 60% of our 120+ faculty hold M.Ed. degrees. Our teacher-student ratio of 1:20 ensures personalized attention for every child.",
      ),
    },
    {
      icon: Award,
      title: t("ઉત્કૃષ્ટ પરિણામો", "Excellent Results"),
      desc: t(
        "બોર્ડ પરીક્ષાઓમાં સતત ઉત્તમ પરિણામોની પરંપરા. દર વર્ષે 98% થી વધુ વિદ્યાર્થીઓ ઉત્તીર્ણ. છેલ્લા 10 વર્ષમાં 50+ વિદ્યાર્થીઓએ A1 ગ્રેડ મેળવ્યો છે. NEET અને JEE જેવી સ્પર્ધાત્મક પરીક્ષાઓમાં પણ અમારા વિદ્યાર્થીઓ ઉત્તમ પ્રદર્શન કરે છે.",
        "A legacy of outstanding board exam results. Over 98% pass rate year after year. In the last 10 years, 50+ students have achieved A1 grades. Our students also excel in competitive exams like NEET and JEE.",
      ),
    },
    {
      icon: Building,
      title: t("આધુનિક સુવિધાઓ", "Modern Facilities"),
      desc: t(
        "પ્રયોગશાળા, ગ્રંથાલય, સ્માર્ટ ક્લાસરૂમ, અને વિશાળ રમતગમતના મેદાન સહિતની સુવિધાઓ. CCTV નિગરાણી, RO શુદ્ધ પાણી, અને ફર્સ્ટ એઇડ સુવિધા સાથે સલામત વાતાવરણ. દરેક ક્લાસરૂમ ડિજિટલ બોર્ડ અને પ્રોજેક્ટરથી સજ્જ છે.",
        "Labs, library, smart classrooms, and expansive sports grounds. A safe environment with CCTV surveillance, RO purified water, and first aid facilities. Every classroom is equipped with digital boards and projectors.",
      ),
    },
    {
      icon: Shield,
      title: t("સુરક્ષિત વાતાવરણ", "Safe Environment"),
      desc: t(
        "વિદ્યાર્થીઓની સુરક્ષા અમારી સર્વોચ્ચ પ્રાથમિકતા છે. ૨૪/૭ CCTV નિગરાણી, ગેટ પર સુરક્ષા ગાર્ડ, અને વિઝિટર મેનેજમેન્ટ સિસ્ટમ. દરેક ફ્લોર પર અગ્નિશામક સાધનો, નિયમિત ફાયર ડ્રિલ, અને આપાતકાલીન પ્લાન.",
        "Student safety is our top priority. 24/7 CCTV surveillance, security guards at gates, and visitor management system. Fire extinguishers on every floor, regular fire drills, and emergency response plans.",
      ),
    },
    {
      icon: Heart,
      title: t("મૂલ્ય આધારિત શિક્ષણ", "Value-Based Education"),
      desc: t(
        "માત્ર પુસ્તકિયું જ્ઞાન નહીં, પરંતુ નૈતિક મૂલ્યો, સંસ્કાર, અને સામાજિક જવાબદારીનું શિક્ષણ. પ્રાર્થના સભા, નૈતિક શિક્ષણ કાલાંશ, અને સમાજસેવા પ્રવૃત્તિઓ દ્વારા ચારિત્ર્ય નિર્માણ. દરેક વિદ્યાર્થીને એક સારો માણસ બનાવવાનો અમારો ઉદ્દેશ્ય.",
        "Not just textbook knowledge, but education in moral values, culture, and social responsibility. Character building through prayer assemblies, moral education periods, and community service activities. Our goal: to shape every student into a good human being.",
      ),
    },
    {
      icon: Lightbulb,
      title: t("નવીનતા અને સર્જનાત્મકતા", "Innovation & Creativity"),
      desc: t(
        "વિજ્ઞાન મેળો, ગણિત ઓલિમ્પિયાડ, અને પ્રોજેક્ટ આધારિત શિક્ષણ દ્વારા વિદ્યાર્થીઓની સર્જનાત્મકતાનો વિકાસ. STEM પ્રવૃત્તિઓ, રોબોટિક્સ ક્લબ, અને કોડિંગ વર્કશોપ દ્વારા ટેકનોલોજી સાથે જોડાણ.",
        "Fostering creativity through science fairs, math olympiads, and project-based learning. Connecting with technology through STEM activities, robotics club, and coding workshops.",
      ),
    },
    {
      icon: Globe2,
      title: t("સ્પર્ધાત્મક તૈયારી", "Competitive Readiness"),
      desc: t(
        "ધોરણ 10 અને 12 પછી NEET, JEE, અને અન્ય સ્પર્ધાત્મક પરીક્ષાઓ માટે વિશેષ માર્ગદર્શન. કારકિર્દી કાઉન્સેલિંગ, મોક ટેસ્ટ, અને નિષ્ણાતો દ્વારા સેમિનાર. વિદ્યાર્થીઓને રાષ્ટ્રીય અને આંતરરાષ્ટ્રીય સ્તરે સ્પર્ધાત્મક બનાવવા.",
        "Special guidance for NEET, JEE, and other competitive exams after Grade 10 and 12. Career counseling, mock tests, and seminars by experts. Preparing students to compete at national and international levels.",
      ),
    },
  ];

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
    {
      icon: FlaskConical,
      name: t("વિજ્ઞાન પ્રયોગશાળા", "Science Lab"),
      desc: t(
        "ભૌતિક, રસાયણ, અને જીવ વિજ્ઞાન માટે અલગ-અલગ આધુનિક પ્રયોગશાળા. GSEB અભ્યાસક્રમ અનુસાર તમામ પ્રેક્ટિકલ સાધનો.",
        "Separate modern labs for Physics, Chemistry, and Biology. All practical equipment as per GSEB curriculum.",
      ),
    },
    {
      icon: Monitor,
      name: t("કમ્પ્યુટર લેબ", "Computer Lab"),
      desc: t(
        "૪૦+ કમ્પ્યુટર, હાઇ-સ્પીડ ઇન્ટરનેટ, અને લાઇસન્સ્ડ સોફ્ટવેર. MS Office, ટાઇપિંગ, અને બેઝિક કોડિંગ શિક્ષણ.",
        "40+ computers, high-speed internet, and licensed software. MS Office, typing, and basic coding education.",
      ),
    },
    {
      icon: BookOpenCheck,
      name: t("ગ્રંથાલય", "Library"),
      desc: t(
        "૧૫,૦૦૦+ પુસ્તકો, સામયિકો, અને ડિજિટલ સંસાધનો. ગુજરાતી, હિન્દી, અને અંગ્રેજી સાહિત્ય. શાંત વાચન ખંડ.",
        "15,000+ books, periodicals, and digital resources. Gujarati, Hindi, and English literature. Quiet reading room.",
      ),
    },
    {
      icon: GraduationCap,
      name: t("સ્માર્ટ ક્લાસરૂમ", "Smart Classrooms"),
      desc: t(
        "LED પ્રોજેક્ટર, ડિજિટલ બોર્ડ, અને ઑડિઓ-વિઝ્યુઅલ સાધનો. ઇન્ટરેક્ટિવ શિક્ષણ અને ડિજિટલ કન્ટેન્ટ.",
        "LED projectors, digital boards, and audio-visual equipment. Interactive teaching and digital content.",
      ),
    },
    {
      icon: Award,
      name: t("રમતગમત મેદાન", "Sports Ground"),
      desc: t(
        "ક્રિકેટ, ફૂટબોલ, કબડ્ડી, ખો-ખો, અને એથ્લેટિક્સ માટે વિશાળ મેદાન. યોગ અને PT સત્રો માટે અલગ વિસ્તાર.",
        "Expansive ground for cricket, football, kabaddi, kho-kho, and athletics. Separate area for yoga and PT sessions.",
      ),
    },
    {
      icon: Building,
      name: t("સભાખંડ", "Auditorium"),
      desc: t(
        "૫૦૦+ બેઠક ક્ષમતા. વાર્ષિકોત્સવ, સેમિનાર, PTM, અને સાંસ્કૃતિક કાર્યક્રમો. સાઉન્ડ સિસ્ટમ અને સ્ટેજ લાઇટિંગ.",
        "500+ seating capacity. Annual day, seminars, PTMs, and cultural events. Sound system and stage lighting.",
      ),
    },
    {
      icon: Microscope,
      name: t("ગણિત લેબ", "Math Lab"),
      desc: t(
        "ગણિતના ખ્યાલોને હાથે-કામે સમજવા માટે મોડેલ અને સાધનો. ભૂમિતિ, બીજગણિત, અને આંકડાશાસ્ત્ર માટે પ્રેક્ટિકલ.",
        "Models and tools to understand math concepts hands-on. Practicals for geometry, algebra, and statistics.",
      ),
    },
    {
      icon: Wifi,
      name: t("Wi-Fi કેમ્પસ", "Wi-Fi Campus"),
      desc: t(
        "સંપૂર્ણ કેમ્પસ હાઇ-સ્પીડ Wi-Fi સાથે જોડાયેલ. ડિજિટલ લર્નિંગ પ્લેટફોર્મ અને ઑનલાઇન સંસાધનો માટે ઉપયોગ.",
        "Entire campus connected with high-speed Wi-Fi. Used for digital learning platforms and online resources.",
      ),
    },
    {
      icon: TreePine,
      name: t("ગ્રીન કેમ્પસ", "Green Campus"),
      desc: t(
        "વૃક્ષારોપણ, બગીચો, અને પર્યાવરણ જાગૃતિ. ઇકો-ફ્રેન્ડલી પ્રેક્ટિસ, રેઇનવોટર હાર્વેસ્ટિંગ, અને વેસ્ટ મેનેજમેન્ટ.",
        "Tree plantation, garden, and environmental awareness. Eco-friendly practices, rainwater harvesting, and waste management.",
      ),
    },
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
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Sevasi High School Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(215_78%_12%_/_0.92)] via-[hsl(215_78%_16%_/_0.85)] to-[hsl(215_78%_20%_/_0.7)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,_hsl(215_78%_30%_/_0.3)_0%,_transparent_50%)]" />
        </div>
        <FloatingShapes variant="dark" density="high" />
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
                <span className="text-sm font-medium tracking-wide text-white/80">
                  {t("પ્રવેશ ચાલુ છે • 2025-26", "Admissions Open • 2025-26")}
                </span>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="font-gujarati text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.15] mb-5">
                {t(
                  SCHOOL_INFO_PARTIAL_DATA.school.tagline.gu,
                  SCHOOL_INFO_PARTIAL_DATA.school.tagline.en,
                )}
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-lg sm:text-xl text-white/60 leading-relaxed mb-4 max-w-lg">
                {t(
                  SCHOOL_INFO_PARTIAL_DATA.school.description.gu,
                  SCHOOL_INFO_PARTIAL_DATA.school.description.en,
                )}
              </p>
              <p className="text-base text-white/40 leading-relaxed mb-8 max-w-lg">
                {t(
                  `${SCHOOL_INFO_PARTIAL_DATA.basic_info.school_type.gu}. સંપર્ક: ${SCHOOL_INFO.phone}.`,
                  `${SCHOOL_INFO_PARTIAL_DATA.basic_info.school_type.en}. Contact: ${SCHOOL_INFO.phone}.`
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
                  <Button variant="outline">
                    {t("અમારા વિશે જાણો", "Learn About Us")}
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
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
                  className="bg-card border border-border/60 rounded-2xl p-5 sm:p-6 text-center shadow-md"
                >
                  <p className="stat-number mb-1">{s.num}</p>
                  <p className="text-sm sm:text-base text-muted-foreground font-medium leading-snug">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Highlights strip ── */}
      <section className="py-10 bg-background relative">
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
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-primary/[0.04] border border-primary/[0.08] hover:bg-primary/[0.07] transition-colors duration-200"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <h.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm text-foreground font-medium leading-snug">
                    {h.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Why Sevasi ── */}
      <section className="section-padding bg-muted/40 relative">
        <FloatingShapes variant="light" density="medium" />
        <div className="section-container relative z-10">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="section-label">{t("શા માટે અમે", "Why Us")}</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                {t("શા માટે સેવાસી હાઈ સ્કૂલ?", "Why Sevasi High School?")}
              </h2>
              <p className="text-base text-muted-foreground mt-3 max-w-lg mx-auto leading-relaxed">
                {t(
                  "૫૫+ વર્ષના અનુભવ, સમર્પિત શિક્ષકો, અને આધુનિક સુવિધાઓ સાથે અમે ગુજરાતી માધ્યમમાં શ્રેષ્ઠ શિક્ષણ આપીએ છીએ. અમારા ૨૫,૦૦૦+ ભૂતપૂર્વ વિદ્યાર્થીઓ વિવિધ ક્ષેત્રોમાં દેશ-વિદેશમાં પ્રગતિ કરી રહ્યા છે.",
                  "With 55+ years of experience, dedicated faculty, and modern facilities, we deliver excellence in Gujarati medium education. Our 25,000+ alumni are making progress across various fields nationally and internationally.",
                )}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
            {[
              { ...whyCards[0], accent: "bg-blue-50 border-blue-100",    icon_bg: "bg-blue-100",    icon_c: "text-blue-600"    },
              { ...whyCards[1], accent: "bg-emerald-50 border-emerald-100", icon_bg: "bg-emerald-100", icon_c: "text-emerald-600" },
              { ...whyCards[2], accent: "bg-amber-50 border-amber-100",  icon_bg: "bg-amber-100",   icon_c: "text-amber-600"   },
              { ...whyCards[3], accent: "bg-slate-50 border-slate-200",  icon_bg: "bg-slate-100",   icon_c: "text-slate-600"   },
              { ...whyCards[4], accent: "bg-violet-50 border-violet-100", icon_bg: "bg-violet-100", icon_c: "text-violet-600"  },
              { ...whyCards[5], accent: "bg-rose-50 border-rose-100",    icon_bg: "bg-rose-100",    icon_c: "text-rose-600"    },
              { ...whyCards[6], accent: "bg-orange-50 border-orange-100", icon_bg: "bg-orange-100", icon_c: "text-orange-600"  },
              { ...whyCards[7], accent: "bg-teal-50 border-teal-100",    icon_bg: "bg-teal-100",    icon_c: "text-teal-600"    },
            ].map((card, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <div className={`rounded-2xl border p-6 h-full flex gap-4 hover:shadow-md transition-shadow duration-300 ${card.accent}`}>
                  <div className={`w-11 h-11 shrink-0 rounded-xl flex items-center justify-center ${card.icon_bg}`}>
                    <card.icon className={`w-5 h-5 ${card.icon_c}`} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1.5 text-base">
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
              <p className="text-base text-muted-foreground mt-3 max-w-lg mx-auto leading-relaxed">
                {t(
                  `${SCHOOL_INFO_PARTIAL_DATA.basic_info.school_type.gu}. માધ્યમ: ${SCHOOL_INFO_PARTIAL_DATA.academics.teaching_medium.gu}. ${SCHOOL_INFO_PARTIAL_DATA.academics.focus.gu}.`,
                  `${SCHOOL_INFO_PARTIAL_DATA.basic_info.school_type.en}. Medium: ${SCHOOL_INFO_PARTIAL_DATA.academics.teaching_medium.en}. ${SCHOOL_INFO_PARTIAL_DATA.academics.focus.en}.`,
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
                <div className="bg-card border border-border/60 rounded-2xl overflow-hidden shadow-sm h-full flex flex-col hover:shadow-md transition-shadow duration-300">
                  <div className={`h-1.5 w-full ${grade.stripe}`} />
                  <div className="p-6 text-center flex-1 flex flex-col">
                    <p className={`text-4xl font-bold mb-3 inline-block mx-auto px-4 py-1.5 rounded-xl ${grade.badge}`}>
                      {grade.range}
                    </p>
                    <p className="font-heading font-semibold text-foreground text-base mb-2">
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
      <section className="section-padding bg-muted/40 relative">
        <FloatingShapes variant="light" density="medium" />
        <div className="section-container relative z-10">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="section-label">{t("સુવિધાઓ", "Facilities")}</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                {t("અમારી સુવિધાઓ", "Our Facilities")}
              </h2>
              <p className="text-base text-muted-foreground mt-3 max-w-lg mx-auto leading-relaxed">
                {t(
                  "વિદ્યાર્થીઓના શૈક્ષણિક અને સર્વાંગી વિકાસ માટે અત્યાધુનિક સુવિધાઓ. દરેક સુવિધા GSEB ધોરણો અનુસાર અને તેનાથી ઉપર.",
                  "State-of-the-art facilities for students' academic and holistic development. Every facility meets and exceeds GSEB standards.",
                )}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { ...facilities[0], icon_bg: "bg-rose-100",    icon_c: "text-rose-600"    },
              { ...facilities[1], icon_bg: "bg-blue-100",    icon_c: "text-blue-600"    },
              { ...facilities[2], icon_bg: "bg-violet-100",  icon_c: "text-violet-600"  },
              { ...facilities[3], icon_bg: "bg-emerald-100", icon_c: "text-emerald-600" },
              { ...facilities[4], icon_bg: "bg-amber-100",   icon_c: "text-amber-600"   },
              { ...facilities[5], icon_bg: "bg-slate-100",   icon_c: "text-slate-600"   },
              { ...facilities[6], icon_bg: "bg-orange-100",  icon_c: "text-orange-600"  },
              { ...facilities[7], icon_bg: "bg-cyan-100",    icon_c: "text-cyan-600"    },
              { ...facilities[8], icon_bg: "bg-green-100",   icon_c: "text-green-600"   },
            ].map((f, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="bg-card border border-border/60 rounded-2xl p-5 h-full flex gap-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className={`w-11 h-11 shrink-0 rounded-xl flex items-center justify-center ${f.icon_bg}`}>
                    <f.icon className={`w-5 h-5 ${f.icon_c}`} />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-base text-foreground mb-1.5">
                      {f.name}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
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
                <p className="text-base text-muted-foreground mt-3 max-w-md mx-auto">
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
                  <div className="bg-card border border-border/60 rounded-2xl overflow-hidden shadow-sm h-full flex flex-col hover:shadow-md transition-shadow duration-300">
                    <div className="px-7 pt-7 pb-5 flex-1">
                      <div className="text-5xl text-primary/15 font-heading font-bold leading-none mb-3 select-none">"</div>
                      <p className="text-base text-foreground/80 leading-relaxed">
                        {item.quote}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 border-t border-border/50 px-7 py-4">
                      <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
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
        <div className="section-container py-20 sm:py-24 relative z-10">
          <AnimatedSection>
            <div className="text-center max-w-lg mx-auto">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                <span className="text-sm font-medium text-white/80">
                  {t("૨૦૨૫-૨૬ પ્રવેશ", "2025-26 Admissions")}
                </span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {t("પ્રવેશ પ્રક્રિયા ચાલુ છે", "Admissions Are Now Open")}
              </h2>
              <p className="text-base text-white/60 mb-10 leading-relaxed">
                {t(
                  "આપના બાળકના ઉજ્જવળ ભવિષ્ય માટે આજે જ સેવાસી હાઈ સ્કૂલમાં પ્રવેશ માટે સંપર્ક કરો. ધોરણ ૧ થી ૧૨ — વિજ્ઞાન અને સામાન્ય પ્રવાહ ઉપલબ્ધ.",
                  "Contact us today to enroll your child for a brighter future at Sevasi High School. Grade 1 to 12 — Science and General streams available.",
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
                  <Button
                    variant="ghost"
                    className="btn-standard-lg border-white/15 text-white hover:bg-white/5 font-heading rounded-xl"
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
