import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  BookOpen, Users, Award, Building, ArrowRight, GraduationCap,
  FlaskConical, BookOpenCheck, Monitor, Shield, Heart, Lightbulb,
  Globe2, Clock, Star, CheckCircle, Microscope, Wifi, TreePine
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import FloatingShapes from "@/components/FloatingShapes";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-school.jpeg";

const Index = () => {
  const { t } = useLanguage();

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
        "Focused on holistic student development through experienced faculty. Modern teaching methodologies aligned with GSEB curriculum. Individual attention is given based on each student's learning ability and pace. Our teachers regularly participate in training programs to implement the latest pedagogical techniques."
      ),
    },
    {
      icon: Users,
      title: t("અનુભવી શિક્ષકો", "Experienced Faculty"),
      desc: t(
        "દરેક વિષયમાં નિષ્ણાત અને સમર્પિત શિક્ષકોની ટીમ. નિયમિત તાલીમ દ્વારા અદ્યતન શિક્ષણ પદ્ધતિઓનો ઉપયોગ. અમારા ૧૨૦+ શિક્ષકોમાંથી ૬૦% થી વધુ M.Ed. ડિગ્રી ધરાવે છે. શિક્ષક-વિદ્યાર્થી ગુણોત્તર 1:20 છે જે વ્યક્તિગત ધ્યાન સુનિશ્ચિત કરે છે.",
        "A dedicated team of subject matter experts. Continuously trained in the latest pedagogical methods. Over 60% of our 120+ faculty hold M.Ed. degrees. Our teacher-student ratio of 1:20 ensures personalized attention for every child."
      ),
    },
    {
      icon: Award,
      title: t("ઉત્કૃષ્ટ પરિણામો", "Excellent Results"),
      desc: t(
        "બોર્ડ પરીક્ષાઓમાં સતત ઉત્તમ પરિણામોની પરંપરા. દર વર્ષે 98% થી વધુ વિદ્યાર્થીઓ ઉત્તીર્ણ. છેલ્લા 10 વર્ષમાં 50+ વિદ્યાર્થીઓએ A1 ગ્રેડ મેળવ્યો છે. NEET અને JEE જેવી સ્પર્ધાત્મક પરીક્ષાઓમાં પણ અમારા વિદ્યાર્થીઓ ઉત્તમ પ્રદર્શન કરે છે.",
        "A legacy of outstanding board exam results. Over 98% pass rate year after year. In the last 10 years, 50+ students have achieved A1 grades. Our students also excel in competitive exams like NEET and JEE."
      ),
    },
    {
      icon: Building,
      title: t("આધુનિક સુવિધાઓ", "Modern Facilities"),
      desc: t(
        "પ્રયોગશાળા, ગ્રંથાલય, સ્માર્ટ ક્લાસરૂમ, અને વિશાળ રમતગમતના મેદાન સહિતની સુવિધાઓ. CCTV નિગરાણી, RO શુદ્ધ પાણી, અને ફર્સ્ટ એઇડ સુવિધા સાથે સલામત વાતાવરણ. દરેક ક્લાસરૂમ ડિજિટલ બોર્ડ અને પ્રોજેક્ટરથી સજ્જ છે.",
        "Labs, library, smart classrooms, and expansive sports grounds. A safe environment with CCTV surveillance, RO purified water, and first aid facilities. Every classroom is equipped with digital boards and projectors."
      ),
    },
    {
      icon: Shield,
      title: t("સુરક્ષિત વાતાવરણ", "Safe Environment"),
      desc: t(
        "વિદ્યાર્થીઓની સુરક્ષા અમારી સર્વોચ્ચ પ્રાથમિકતા છે. ૨૪/૭ CCTV નિગરાણી, ગેટ પર સુરક્ષા ગાર્ડ, અને વિઝિટર મેનેજમેન્ટ સિસ્ટમ. દરેક ફ્લોર પર અગ્નિશામક સાધનો, નિયમિત ફાયર ડ્રિલ, અને આપાતકાલીન પ્લાન.",
        "Student safety is our top priority. 24/7 CCTV surveillance, security guards at gates, and visitor management system. Fire extinguishers on every floor, regular fire drills, and emergency response plans."
      ),
    },
    {
      icon: Heart,
      title: t("મૂલ્ય આધારિત શિક્ષણ", "Value-Based Education"),
      desc: t(
        "માત્ર પુસ્તકિયું જ્ઞાન નહીં, પરંતુ નૈતિક મૂલ્યો, સંસ્કાર, અને સામાજિક જવાબદારીનું શિક્ષણ. પ્રાર્થના સભા, નૈતિક શિક્ષણ કાલાંશ, અને સમાજસેવા પ્રવૃત્તિઓ દ્વારા ચારિત્ર્ય નિર્માણ. દરેક વિદ્યાર્થીને એક સારો માણસ બનાવવાનો અમારો ઉદ્દેશ્ય.",
        "Not just textbook knowledge, but education in moral values, culture, and social responsibility. Character building through prayer assemblies, moral education periods, and community service activities. Our goal: to shape every student into a good human being."
      ),
    },
    {
      icon: Lightbulb,
      title: t("નવીનતા અને સર્જનાત્મકતા", "Innovation & Creativity"),
      desc: t(
        "વિજ્ઞાન મેળો, ગણિત ઓલિમ્પિયાડ, અને પ્રોજેક્ટ આધારિત શિક્ષણ દ્વારા વિદ્યાર્થીઓની સર્જનાત્મકતાનો વિકાસ. STEM પ્રવૃત્તિઓ, રોબોટિક્સ ક્લબ, અને કોડિંગ વર્કશોપ દ્વારા ટેકનોલોજી સાથે જોડાણ.",
        "Fostering creativity through science fairs, math olympiads, and project-based learning. Connecting with technology through STEM activities, robotics club, and coding workshops."
      ),
    },
    {
      icon: Globe2,
      title: t("સ્પર્ધાત્મક તૈયારી", "Competitive Readiness"),
      desc: t(
        "ધોરણ 10 અને 12 પછી NEET, JEE, અને અન્ય સ્પર્ધાત્મક પરીક્ષાઓ માટે વિશેષ માર્ગદર્શન. કારકિર્દી કાઉન્સેલિંગ, મોક ટેસ્ટ, અને નિષ્ણાતો દ્વારા સેમિનાર. વિદ્યાર્થીઓને રાષ્ટ્રીય અને આંતરરાષ્ટ્રીય સ્તરે સ્પર્ધાત્મક બનાવવા.",
        "Special guidance for NEET, JEE, and other competitive exams after Grade 10 and 12. Career counseling, mock tests, and seminars by experts. Preparing students to compete at national and international levels."
      ),
    },
  ];

  const grades = [
    {
      range: t("ધોરણ 1-5", "Grade 1-5"),
      label: t("પ્રાથમિક", "Primary"),
      desc: t(
        "મૂળભૂત ખ્યાલો, ભાષા કૌશલ્ય, અને ગણિતનો પાયો. પ્રવૃત્તિ આધારિત શિક્ષણ દ્વારા રમતમાં શીખવું. ચિત્રકામ, સંગીત, અને શારીરિક શિક્ષણ.",
        "Foundation concepts, language skills, and mathematical basics. Learning through play with activity-based education. Drawing, music, and physical education."
      ),
    },
    {
      range: t("ધોરણ 6-8", "Grade 6-8"),
      label: t("ઉચ્ચ પ્રાથમિક", "Upper Primary"),
      desc: t(
        "વિષયવસ્તુની ઊંડી સમજ, વિશ્લેષણાત્મક વિચારસરણી, અને પ્રોજેક્ટ આધારિત કાર્ય. વિજ્ઞાન, ગણિત, સામાજિક વિજ્ઞાન, અને કમ્પ્યુટર.",
        "Deeper subject understanding, analytical thinking, and project-based work. Science, Mathematics, Social Science, and Computer Studies."
      ),
    },
    {
      range: t("ધોરણ 9-10", "Grade 9-10"),
      label: t("માધ્યમિક", "Secondary"),
      desc: t(
        "GSEB બોર્ડ પરીક્ષા તૈયારી, નિયમિત ટેસ્ટ, પ્રેક્ટિકલ, અને પ્રોજેક્ટ કાર્ય. વિશેષ રિવિઝન સેશન અને મોક ટેસ્ટ.",
        "GSEB board exam preparation, regular tests, practicals, and project work. Special revision sessions and mock tests."
      ),
    },
    {
      range: t("ધોરણ 11-12", "Grade 11-12"),
      label: t("ઉચ્ચતર માધ્યમિક", "Higher Secondary"),
      desc: t(
        "વિજ્ઞાન પ્રવાહ (PCB/PCM) અને સામાન્ય પ્રવાહ. NEET/JEE માર્ગદર્શન, કારકિર્દી કાઉન્સેલિંગ, અને કોલેજ પ્રવેશ સહાય.",
        "Science stream (PCB/PCM) and General stream. NEET/JEE guidance, career counseling, and college admission support."
      ),
    },
  ];

  const facilities = [
    { icon: FlaskConical, name: t("વિજ્ઞાન પ્રયોગશાળા", "Science Lab"), desc: t("ભૌતિક, રસાયણ, અને જીવ વિજ્ઞાન માટે અલગ-અલગ આધુનિક પ્રયોગશાળા. GSEB અભ્યાસક્રમ અનુસાર તમામ પ્રેક્ટિકલ સાધનો.", "Separate modern labs for Physics, Chemistry, and Biology. All practical equipment as per GSEB curriculum.") },
    { icon: Monitor, name: t("કમ્પ્યુટર લેબ", "Computer Lab"), desc: t("૪૦+ કમ્પ્યુટર, હાઇ-સ્પીડ ઇન્ટરનેટ, અને લાઇસન્સ્ડ સોફ્ટવેર. MS Office, ટાઇપિંગ, અને બેઝિક કોડિંગ શિક્ષણ.", "40+ computers, high-speed internet, and licensed software. MS Office, typing, and basic coding education.") },
    { icon: BookOpenCheck, name: t("ગ્રંથાલય", "Library"), desc: t("૧૫,૦૦૦+ પુસ્તકો, સામયિકો, અને ડિજિટલ સંસાધનો. ગુજરાતી, હિન્દી, અને અંગ્રેજી સાહિત્ય. શાંત વાચન ખંડ.", "15,000+ books, periodicals, and digital resources. Gujarati, Hindi, and English literature. Quiet reading room.") },
    { icon: GraduationCap, name: t("સ્માર્ટ ક્લાસરૂમ", "Smart Classrooms"), desc: t("LED પ્રોજેક્ટર, ડિજિટલ બોર્ડ, અને ઑડિઓ-વિઝ્યુઅલ સાધનો. ઇન્ટરેક્ટિવ શિક્ષણ અને ડિજિટલ કન્ટેન્ટ.", "LED projectors, digital boards, and audio-visual equipment. Interactive teaching and digital content.") },
    { icon: Award, name: t("રમતગમત મેદાન", "Sports Ground"), desc: t("ક્રિકેટ, ફૂટબોલ, કબડ્ડી, ખો-ખો, અને એથ્લેટિક્સ માટે વિશાળ મેદાન. યોગ અને PT સત્રો માટે અલગ વિસ્તાર.", "Expansive ground for cricket, football, kabaddi, kho-kho, and athletics. Separate area for yoga and PT sessions.") },
    { icon: Building, name: t("સભાખંડ", "Auditorium"), desc: t("૫૦૦+ બેઠક ક્ષમતા. વાર્ષિકોત્સવ, સેમિનાર, PTM, અને સાંસ્કૃતિક કાર્યક્રમો. સાઉન્ડ સિસ્ટમ અને સ્ટેજ લાઇટિંગ.", "500+ seating capacity. Annual day, seminars, PTMs, and cultural events. Sound system and stage lighting.") },
    { icon: Microscope, name: t("ગણિત લેબ", "Math Lab"), desc: t("ગણિતના ખ્યાલોને હાથે-કામે સમજવા માટે મોડેલ અને સાધનો. ભૂમિતિ, બીજગણિત, અને આંકડાશાસ્ત્ર માટે પ્રેક્ટિકલ.", "Models and tools to understand math concepts hands-on. Practicals for geometry, algebra, and statistics.") },
    { icon: Wifi, name: t("Wi-Fi કેમ્પસ", "Wi-Fi Campus"), desc: t("સંપૂર્ણ કેમ્પસ હાઇ-સ્પીડ Wi-Fi સાથે જોડાયેલ. ડિજિટલ લર્નિંગ પ્લેટફોર્મ અને ઑનલાઇન સંસાધનો માટે ઉપયોગ.", "Entire campus connected with high-speed Wi-Fi. Used for digital learning platforms and online resources.") },
    { icon: TreePine, name: t("ગ્રીન કેમ્પસ", "Green Campus"), desc: t("વૃક્ષારોપણ, બગીચો, અને પર્યાવરણ જાગૃતિ. ઇકો-ફ્રેન્ડલી પ્રેક્ટિસ, રેઇનવોટર હાર્વેસ્ટિંગ, અને વેસ્ટ મેનેજમેન્ટ.", "Tree plantation, garden, and environmental awareness. Eco-friendly practices, rainwater harvesting, and waste management.") },
  ];

  const testimonials = [
    {
      quote: t(
        "સેવાસી હાઈ સ્કૂલે મારા બાળકના વ્યક્તિત્વ વિકાસમાં ખૂબ જ મહત્વની ભૂમિકા ભજવી છે. શિક્ષકો ખૂબ જ સમર્પિત છે અને દરેક બાળક પર વ્યક્તિગત ધ્યાન આપે છે.",
        "Sevasi High School has played a vital role in my child's personality development. The teachers are truly dedicated and give individual attention to every child."
      ),
      name: t("રાજેશભાઈ પટેલ", "Rajeshbhai Patel"),
      role: t("વાલી", "Parent"),
    },
    {
      quote: t(
        "ગુજરાતી માધ્યમમાં આટલી સારી ગુણવત્તાનું શિક્ષણ મળવું ખૂબ જ દુર્લભ છે. અમે ખૂબ સંતુષ્ટ છીએ. મારા બંને બાળકો અહીં ભણે છે અને બંનેના પરિણામો ઉત્તમ આવે છે.",
        "Finding such quality education in Gujarati medium is rare. We are extremely satisfied. Both my children study here and both get excellent results."
      ),
      name: t("મીનાબેન શાહ", "Meenaben Shah"),
      role: t("વાલી", "Parent"),
    },
    {
      quote: t(
        "બોર્ડ પરીક્ષામાં મળેલી સફળતા માટે હું મારી શાળાનો આભારી છું. શિક્ષકોનું માર્ગદર્શન અમૂલ્ય હતું. આજે હું ડૉક્ટર છું તે ફક્ત આ શાળાના શિક્ષણને કારણે.",
        "I owe my board exam success to my school. The guidance from teachers was invaluable. I'm a doctor today thanks to this school's education."
      ),
      name: t("અર્જુન ઠાકર", "Arjun Thakar"),
      role: t("ભૂતપૂર્વ વિદ્યાર્થી, ડૉક્ટર", "Alumni, Doctor"),
    },
    {
      quote: t(
        "શાળાનું વાતાવરણ ખૂબ જ શિસ્તબદ્ધ અને પ્રેરણાદાયક છે. બાળકો ખુશ થઈને શાળાએ જાય છે. રમતગમત અને સાંસ્કૃતિક પ્રવૃત્તિઓ બાળકોના સર્વાંગી વિકાસમાં ઘણી મદદ કરે છે.",
        "The school environment is very disciplined and inspiring. Children go to school happily. Sports and cultural activities contribute greatly to children's holistic development."
      ),
      name: t("કાવ્યાબેન જોશી", "Kavyaben Joshi"),
      role: t("વાલી", "Parent"),
    },
  ];

  const highlights = [
    { icon: Clock, text: t("૧૯૬૭ થી — ૫૭+ વર્ષનો ગૌરવશાળી ઈતિહાસ", "Since 1967 — 57+ years of glorious history") },
    { icon: Star, text: t("૩.૯ સ્ટાર રેટિંગ — ૨૨ રિવ્યૂ પર આધારિત", "3.9 Star Rating — based on 22 reviews") },
    { icon: CheckCircle, text: t("રાજ્ય બોર્ડ (GSEB) સાથે સંલગ્ન — માન્ય સંસ્થા", "State Board (GSEB) affiliated — recognized institution") },
    { icon: Users, text: t("સોમ-શનિ: ૭AM-૬PM | રવિવાર: બંધ", "Mon-Sat: 7AM-6PM | Sunday: Closed") },
  ];

  return (
    <div className="pb-16 lg:pb-0">
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Sevasi High School Campus" className="w-full h-full object-cover" />
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
              <p className="text-base sm:text-lg text-white/60 leading-relaxed mb-4 max-w-lg">
                {t(
                  "સેવાસી હાઈ સ્કૂલ, સેવાસી, વડોદરા — ૧૯૬૭ થી ગુજરાતી માધ્યમમાં ગુણવત્તાયુક્ત શિક્ષણ અને સર્વાંગી વિકાસ માટે વિશ્વસનીય સંસ્થા. ૩.૯ સ્ટાર રેટિંગ.",
                  "Sevasi High School in Sewasi, Vadodara — A prestigious institution providing quality Gujarati medium education and holistic development since 1967. Rated 3.9 stars."
                )}
              </p>
              <p className="text-sm text-white/40 leading-relaxed mb-8 max-w-lg">
                {t(
                  "પ્રાથમિક, માધ્યમિક, ઉચ્ચતર માધ્યમિક — ધોરણ ૧ થી ૧૨ — રાજ્ય બોર્ડ (GSEB) સાથે સંલગ્ન. વિજ્ઞાન અને સામાન્ય પ્રવાહ ઉપલબ્ધ. સોમ-શનિ: ૭AM-૬PM.",
                  "Primary, Secondary, Higher Secondary — Grade 1 to 12 — State Board (GSEB) affiliated. Science and General streams available. Mon-Sat: 7AM-6PM."
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
                <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.4 }} className="card-modern p-5 sm:p-6 text-center">
                  <p className="stat-number mb-1">{s.num}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Highlights strip */}
      <section className="py-10 bg-background relative">
        <FloatingShapes variant="light" density="low" />
        <div className="section-container relative z-10">
          <AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {highlights.map((h, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/[0.03] border border-primary/[0.06]">
                  <h.icon className="w-4 h-4 text-primary/60 shrink-0" />
                  <span className="text-sm text-foreground font-medium">{h.text}</span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Sevasi */}
      <section className="section-padding bg-background relative">
        <FloatingShapes variant="light" density="medium" />
        <div className="section-container relative z-10">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="section-label">{t("શા માટે અમે", "Why Us")}</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                {t("શા માટે સેવાસી હાઈ સ્કૂલ?", "Why Sevasi High School?")}
              </h2>
              <p className="text-sm text-muted-foreground mt-3 max-w-lg mx-auto leading-relaxed">
                {t(
                  "૫૫+ વર્ષના અનુભવ, સમર્પિત શિક્ષકો, અને આધુનિક સુવિધાઓ સાથે અમે ગુજરાતી માધ્યમમાં શ્રેષ્ઠ શિક્ષણ આપીએ છીએ. અમારા ૨૫,૦૦૦+ ભૂતપૂર્વ વિદ્યાર્થીઓ વિવિધ ક્ષેત્રોમાં દેશ-વિદેશમાં પ્રગતિ કરી રહ્યા છે.",
                  "With 55+ years of experience, dedicated faculty, and modern facilities, we deliver excellence in Gujarati medium education. Our 25,000+ alumni are making progress across various fields nationally and internationally."
                )}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
            {whyCards.map((card, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <div className="feature-item h-full flex gap-5">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-primary/5 flex items-center justify-center">
                    <card.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-2 text-[0.95rem]">{card.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Academics Overview */}
      <section className="section-padding bg-muted/30 relative">
        <FloatingShapes variant="light" density="low" />
        <div className="section-container relative z-10">
          <AnimatedSection>
            <div className="text-center mb-6">
              <span className="section-label">{t("અભ્યાસક્રમ", "Academics")}</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                {t("અભ્યાસક્રમ માળખું", "Curriculum Structure")}
              </h2>
              <p className="text-sm text-muted-foreground mt-3 max-w-lg mx-auto leading-relaxed">
                {t(
                  "GSEB (ગુજરાત માધ્યમિક અને ઉચ્ચતર માધ્યમિક શિક્ષણ બોર્ડ) સાથે સંલગ્ન. પ્રાથમિક થી ઉચ્ચતર માધ્યમિક સુધી — દરેક સ્તરે વિદ્યાર્થી-કેન્દ્રિત અભિગમ.",
                  "Affiliated with GSEB (Gujarat Secondary & Higher Secondary Education Board). Primary to Higher Secondary — a student-centric approach at every level."
                )}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {grades.map((grade, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="card-modern p-6 text-center h-full">
                  <p className="stat-number text-3xl mb-2">{grade.range}</p>
                  <p className="font-heading font-semibold text-foreground text-sm mb-2">{grade.label}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{grade.desc}</p>
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
      <section className="section-padding bg-background relative">
        <FloatingShapes variant="light" density="medium" />
        <div className="section-container relative z-10">
          <AnimatedSection>
            <div className="text-center mb-6">
              <span className="section-label">{t("સુવિધાઓ", "Facilities")}</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                {t("અમારી સુવિધાઓ", "Our Facilities")}
              </h2>
              <p className="text-sm text-muted-foreground mt-3 max-w-lg mx-auto leading-relaxed">
                {t(
                  "વિદ્યાર્થીઓના શૈક્ષણિક અને સર્વાંગી વિકાસ માટે અત્યાધુનિક સુવિધાઓ. દરેક સુવિધા GSEB ધોરણો અનુસાર અને તેનાથી ઉપર.",
                  "State-of-the-art facilities for students' academic and holistic development. Every facility meets and exceeds GSEB standards."
                )}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {facilities.map((f, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="feature-item h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 shrink-0 rounded-xl bg-primary/5 flex items-center justify-center">
                      <f.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-sm text-foreground mb-1.5">{f.name}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-muted/30 relative">
        <FloatingShapes variant="light" density="low" />
        <div className="section-container relative z-10">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="section-label">{t("પ્રતિભાવ", "Testimonials")}</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                {t("વાલીઓ અને વિદ્યાર્થીઓના અનુભવો", "What Parents & Students Say")}
              </h2>
              <p className="text-sm text-muted-foreground mt-3 max-w-md mx-auto">
                {t(
                  "અમારા વાલીઓ અને ભૂતપૂર્વ વિદ્યાર્થીઓના અનુભવો જ અમારી સૌથી મોટી ઓળખ છે.",
                  "The experiences of our parents and alumni are our greatest identity."
                )}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
            {testimonials.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="card-modern p-6 sm:p-7 h-full flex flex-col">
                  <div className="text-3xl text-primary/20 font-heading font-bold mb-3">"</div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">{item.quote}</p>
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
      <section className="cta-surface relative">
        <FloatingShapes variant="dark" density="medium" />
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
                  "આપના બાળકના ઉજ્જવળ ભવિષ્ય માટે આજે જ સેવાસી હાઈ સ્કૂલમાં પ્રવેશ માટે સંપર્ક કરો. ધોરણ ૧ થી ૧૨ — વિજ્ઞાન અને સામાન્ય પ્રવાહ ઉપલબ્ધ.",
                  "Contact us today to enroll your child for a brighter future at Sevasi High School. Grade 1 to 12 — Science and General streams available."
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
