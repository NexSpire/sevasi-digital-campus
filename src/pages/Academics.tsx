import AnimatedSection from "@/components/AnimatedSection";
import FloatingShapes from "@/components/FloatingShapes";
import { useLanguage } from "@/contexts/LanguageContext";
import { SCHOOL_INFO_PARTIAL_DATA } from "@/config/constants";
import {
  BookOpen, FlaskConical, Library, Trophy,
  ClipboardCheck, Compass, Star, Users,
  CheckCircle2, Building2,
} from "lucide-react";

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 96;
  window.scrollTo({ top, behavior: "smooth" });
};

const Academics = () => {
  const { t } = useLanguage();
  const classCounts = SCHOOL_INFO_PARTIAL_DATA.academics.classes;

  const levels = [
    {
      accent: "bg-rose-50 border-rose-200",
      badge: "bg-rose-100 text-rose-700",
      badgeBorder: "border-rose-200",
      dot: "bg-rose-500",
      numBg: "bg-rose-500",
      key: "pre_primary",
      label: t("પ્રિ-પ્રાથમિક", "Pre-Primary"),
      grade: t("નર્સરી · LKG · UKG", "Nursery · LKG · UKG"),
      description: t(
        "ખેલ આધારિત શિક્ષણ દ્વારા ઉત્સુકતા, સ્વ-અભિવ્યક્તિ અને ભાષા-ગણિતના પ્રાથમિક કૌશલ્યોનો વિકાસ.",
        "A play-based foundation focusing on curiosity, self-expression, and early literacy and numeracy."
      ),
      exam: t(
        "આંતરિક મૂલ્યાંકન — શિક્ષક નિરીક્ષણ, ચેકલિસ્ટ અને પોર્ટફોલિયો",
        "Internal — Teacher Observation, Checklist & Portfolio"
      ),
      subjects: [
        t("ગીત, કવિતા અને સામૂહિક રમતો", "Songs, Rhymes & Group Play"),
        t("ભાષા — સાંભળવાની અને બોલવાની કૌશલ્ય", "Language — Listening & Speaking Skills"),
        t("ગણિત — 1 થી 100, આકારો અને રંગો", "Numeracy — 1–100, Shapes & Colours"),
        t("પર્યાવરણ જ્ઞાન અને તહેવારો", "Environmental Awareness & Festivals"),
        t("ચિત્રકામ, રંગકામ અને હસ્તકલા", "Drawing, Colouring & Craft"),
        t("સંગીત, શારીરિક શિક્ષણ અને યોગ", "Music, Physical Education & Yoga"),
        t("સ્વ-સંભાળ અને સારા સ્વભાવ", "Self-Care & Good-Habit Formation"),
      ],
      points: [
        t("મોન્ટેસોરી આધારિત પ્રવૃત્તિ કોર્નર્સ અને TLM સામગ્રી", "Montessori-inspired activity corners with TLM materials"),
        t("20–25 વિદ્યાર્થીઓના નાના જૂથો", "Small groups of 20–25 students"),
        t("વાર્તા અને અનુભવ આધારિત શિક્ષણ", "Story-based experiential learning"),
        t("ત્રિમાસિક PTM અને ઘરઆધારિત માર્ગદર્શન", "Quarterly PTM with home-activity guidance"),
        t("આઉટડોર રમતો અને સેન્સરી પ્રવૃત્તિઓ", "Outdoor play and sensory activities"),
      ],
    },

    {
      key: "primary",
      accent: "bg-emerald-50 border-emerald-200",
      badge: "bg-emerald-100 text-emerald-700",
      badgeBorder: "border-emerald-200",
      dot: "bg-emerald-500",
      numBg: "bg-emerald-500",
      label: t("પ્રાથમિક", "Primary"),
      grade: t("ધોરણ 1 – 5", "Grade 1 – 5"),
      description: t(
        "ભાષા, ગણિત અને પર્યાવરણ અભ્યાસમાં મજબૂત આધાર પ્રવૃત્તિ આધારિત શિક્ષણ દ્વારા.",
        "Strong foundations in language, mathematics and environmental studies through activity-based learning."
      ),
      exam: t(
        "CCE — રચનાત્મક અને સમાપન મૂલ્યાંકન",
        "CCE — Formative + Summative Assessment"
      ),
      subjects: [
        t("ગુજરાતી — માતૃભાષા", "Gujarati — Mother Tongue"),
        t("હિન્દી — રાષ્ટ્રીય ભાષા", "Hindi — National Language"),
        t("અંગ્રેજી — ત્રીજી ભાષા", "English — Third Language"),
        t("ગણિત — સંખ્યાઓ અને જ્યોમેટ્રી", "Mathematics — Numbers & Geometry"),
        t("પર્યાવરણ અભ્યાસ", "Environmental Studies"),
        t("કલા અને હસ્તકલા", "Art & Craft"),
        t("સંગીત અને શારીરિક શિક્ષણ", "Music & Physical Education"),
        t("નૈતિક શિક્ષણ", "Moral Education"),
      ],
      points: [
        t("TLM અને પ્રવૃત્તિ આધારિત શિક્ષણ", "TLM-based interactive learning"),
        t("વાર્તા અને રોલ-પ્લે પ્રવૃત્તિઓ", "Storytelling and role-play"),
        t("30–35 વિદ્યાર્થીઓ પ્રતિ વર્ગ", "30–35 students per class"),
        t("પ્રવૃત્તિ આધારિત અભ્યાસ", "Activity-based learning"),
        t("સહકાર આધારિત શિક્ષણ", "Collaborative learning"),
      ],
    },

    {
      key: "upper",
      accent: "bg-blue-50 border-blue-200",
      badge: "bg-blue-100 text-blue-700",
      badgeBorder: "border-blue-200",
      dot: "bg-blue-500",
      numBg: "bg-blue-500",
      label: t("ઉચ્ચ પ્રાથમિક", "Upper Primary"),
      grade: t("ધોરણ 6 – 8", "Grade 6 – 8"),
      description: t(
        "વિષયમાં ઊંડાણ સાથે વિશ્લેષણાત્મક વિચાર અને પ્રોજેક્ટ આધારિત અભ્યાસ.",
        "Deeper subject understanding with analytical thinking and project-based learning."
      ),
      exam: t(
        "CCE — યુનિટ ટેસ્ટ, પ્રોજેક્ટ અને સેમેસ્ટર પરીક્ષા",
        "CCE — Unit Tests, Projects & Semester Exams"
      ),
      subjects: [
        t("ગુજરાતી — વ્યાકરણ અને લેખન", "Gujarati — Grammar & Writing"),
        t("હિન્દી અને અંગ્રેજી", "Hindi & English"),
        t("ગણિત — બીજગણિત અને જ્યોમેટ્રી", "Mathematics — Algebra & Geometry"),
        t("વિજ્ઞાન", "Science"),
        t("સામાજિક વિજ્ઞાન", "Social Science"),
        t("સંસ્કૃત", "Sanskrit"),
        t("કમ્પ્યુટર", "Computer"),
      ],
      points: [
        t("દર સેમેસ્ટર પ્રોજેક્ટ કાર્ય", "Project work each semester"),
        t("નિયમિત મૂલ્યાંકન", "Regular assessment"),
        t("સાયન્સ ફેર અને સ્પર્ધાઓ", "Science fairs and competitions"),
        t("પ્રયોગ અને ફિલ્ડ વિઝિટ", "Experiments and field visits"),
        t("ચર્ચા અને વિશ્લેષણ", "Discussions and analysis"),
      ],
    },

    {
      key: "secondary",
      accent: "bg-violet-50 border-violet-200",
      badge: "bg-violet-100 text-violet-700",
      badgeBorder: "border-violet-200",
      dot: "bg-violet-500",
      numBg: "bg-violet-500",
      label: t("માધ્યમિક", "Secondary"),
      grade: t("ધોરણ 9 – 10", "Grade 9 – 10"),
      description: t(
        "GSEB બોર્ડ માટે કેન્દ્રિત તૈયારી સાથે સંકલિત અભ્યાસક્રમ.",
        "Focused preparation for GSEB board with structured curriculum."
      ),
      exam: t(
        "GSEB બોર્ડ — 80 ગુણ લેખિત + 20 આંતરિક",
        "GSEB Board — 80 marks Theory + 20 Internal"
      ),
      subjects: [
        t("ગુજરાતી", "Gujarati"),
        t("અંગ્રેજી", "English"),
        t("ગણિત", "Mathematics"),
        t("વિજ્ઞાન અને ટેક્નોલોજી", "Science & Technology"),
        t("સામાજિક વિજ્ઞાન", "Social Science"),
      ],
      points: [
        t("સાપ્તાહિક ટેસ્ટ અને માસિક પરીક્ષા", "Weekly & monthly tests"),
        t("પાછલા પ્રશ્નપત્રો", "Previous year papers"),
        t("પ્રાયોગિક તૈયારી", "Practical preparation"),
        t("સ્પર્ધાત્મક પરીક્ષા માર્ગદર્શન", "Competitive exam guidance"),
        t("રિમેડિયલ ક્લાસીસ", "Remedial classes"),
      ],
    },

    {
      key: "higher",
      accent: "bg-amber-50 border-amber-200",
      badge: "bg-amber-100 text-amber-700",
      badgeBorder: "border-amber-200",
      dot: "bg-amber-500",
      numBg: "bg-amber-500",
      label: t("ઉચ્ચતર માધ્યમિક", "Higher Secondary"),
      grade: t("ધોરણ 11 – 12", "Grade 11 – 12"),
      description: t(
        "વિજ્ઞાન અને કોમર્સ પ્રવાહ સાથે કારકિર્દી કેન્દ્રિત અભ્યાસ.",
        "Stream-based education with strong career focus."
      ),
      exam: t(
        "GSEB બોર્ડ — 100 ગુણ લેખિત + 30 પ્રાયોગિક",
        "GSEB Board — 100 Theory + 30 Practical"
      ),
      subjects: [
        t("વિજ્ઞાન પ્રવાહ — PCB / PCM", "Science Stream — PCB / PCM"),
        t("કોમર્સ પ્રવાહ", "Commerce Stream"),
        t("અંગ્રેજી", "English"),
        t("મનોવિજ્ઞાન", "Psychology"),
      ],
      points: [
        t("NEET, JEE, GUJCET તૈયારી", "NEET, JEE, GUJCET coaching"),
        t("મોક ટેસ્ટ", "Mock tests"),
        t("એલ્યુમ્ની સત્રો", "Alumni sessions"),
        t("કોલેજ માર્ગદર્શન", "College guidance"),
        t("કેરિયર કાઉન્સેલિંગ", "Career counselling"),
      ],
    },
  ];
  const methodology = [
    {
      icon: BookOpen,
      color: "text-blue-600 bg-blue-50", 
      title: t("શિક્ષણ પદ્ધતિ", "Teaching Methodology"),
      desc: t(
        "વિદ્યાર્થી કેન્દ્રિત અને આધુનિક શિક્ષણ પદ્ધતિઓ.",
        "Student-centric modern teaching approaches."
      ),
      items: [
        t("પ્રવૃત્તિ આધારિત શિક્ષણ", "Activity-based learning"),
        t("જૂથ અભ્યાસ", "Collaborative learning"),
        t("પ્રોજેક્ટ આધારિત અભ્યાસ", "Project-based learning"),
        t("સ્માર્ટ ક્લાસરૂમ", "Smart classrooms"),
        t("ફ્લિપ્ડ ક્લાસરૂમ", "Flipped classroom"),
        t("વ્યક્તિગત શિક્ષણ", "Personalized learning"),
      ],
    },

    {
      icon: ClipboardCheck,
      title: t("મૂલ્યાંકન પદ્ધતિ", "Assessment System"),
      desc: t(
        "સતત અને વ્યાપક મૂલ્યાંકન પદ્ધતિ.",
        "Continuous and comprehensive evaluation system."
      ),
      items: [
        t("સાપ્તાહિક ટેસ્ટ", "Weekly tests"),
        t("માસિક અને સેમેસ્ટર પરીક્ષા", "Monthly & semester exams"),
        t("પ્રાયોગિક અને મૌખિક મૂલ્યાંકન", "Practical & oral assessment"),
        t("સ્વ-મૂલ્યાંકન", "Self-assessment"),
        t("PTM અને પ્રગતિ અપડેટ", "PTM & progress updates"),
        t("પ્રિલિમ પરીક્ષા", "Preliminary exams"),
      ],
    },

    {
      icon: Compass,
      title: t("કેરિયર માર્ગદર્શન", "Career Guidance"),
      desc: t(
        "વિદ્યાર્થીઓ માટે ભવિષ્યની યોગ્ય દિશા.",
        "Guidance for informed career decisions."
      ),
      items: [
        t("કાઉન્સેલિંગ સત્રો", "Counselling sessions"),
        t("સ્પર્ધાત્મક પરીક્ષા માર્ગદર્શન", "Entrance exam coaching"),
        t("એક્સપર્ટ સેમિનાર", "Expert seminars"),
        t("સ્કોલરશિપ માર્ગદર્શન", "Scholarship guidance"),
        t("એપ્ટિટ્યુડ ટેસ્ટ", "Aptitude testing"),
        t("પેરેન્ટ-ટીચર-સ્ટુડન્ટ મીટિંગ", "Tripartite meetings"),
      ],
    },
  ];
  const facilities = [
    {
      icon: FlaskConical,
      color: "text-rose-600 bg-rose-50",
      title: t("વિજ્ઞાન લેબ્સ", "Science Labs"),
      items: [
        t("અલગ ફિઝિક્સ, કેમિસ્ટ્રી અને બાયોલોજી લેબ", "Separate Physics, Chemistry & Biology labs"),
        t("ગણિત લેબ", "Mathematics lab"),
        t("કમ્પ્યુટર લેબ", "Computer lab"),
        t("સ્માર્ટ ક્લાસરૂમ", "Smart classrooms"),
      ],
    },

    {
      icon: Library,
      title: t("લાઇબ્રેરી અને ડિજિટલ", "Library & Digital"),
      items: [
        t("15,000+ પુસ્તકો", "15,000+ books"),
        t("Wi-Fi કેમ્પસ", "Wi-Fi campus"),
        t("ડિજિટલ બોર્ડ", "Digital boards"),
        t("UPS બેકઅપ", "UPS backup"),
      ],
    },

    {
      icon: Building2,
      title: t("કેમ્પસ અને સુરક્ષા", "Campus & Safety"),
      items: [
        t("ઓડિટોરિયમ", "Auditorium"),
        t("સ્પોર્ટ્સ ગ્રાઉન્ડ", "Sports ground"),
        t("CCTV સુરક્ષા", "CCTV security"),
        t("RO પાણી અને ફર્સ્ટ એડ", "RO water & first-aid"),
      ],
    },
  ];
  return (
    <div className="pt-20 pb-16 lg:pb-0">

      {/* ── Hero ── */}
      <section className="cta-surface py-20 sm:py-28 relative overflow-hidden">
        <FloatingShapes variant="dark" density="medium" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <span className="section-label text-primary-foreground/40 before:bg-primary-foreground/20">
              {t("શૈક્ષણિક", "Academics")}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-5 max-w-3xl">
              {t("શૈક્ષણિક ઉત્કૃષ્ટતા અને અભ્યાસક્રમ", "Academic Excellence & Curriculum")}
            </h1>
            <p className="text-base sm:text-lg text-primary-foreground/65 max-w-2xl leading-relaxed">
              {t(
                `${SCHOOL_INFO_PARTIAL_DATA.basic_info.school_type.gu}. માધ્યમ: ${SCHOOL_INFO_PARTIAL_DATA.academics.teaching_medium.gu}. ${SCHOOL_INFO_PARTIAL_DATA.academics.focus.gu}.`,
                `${SCHOOL_INFO_PARTIAL_DATA.basic_info.school_type.en}. Medium: ${SCHOOL_INFO_PARTIAL_DATA.academics.teaching_medium.en}. ${SCHOOL_INFO_PARTIAL_DATA.academics.focus.en}.`
              )}
            </p>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
              {[
                { label: t("GSEB બોર્ડ",  "GSEB Board"),       sub: t("ધો. 10 & 12",  "Grade 10 & 12")    },
                { label: t("ગુ. માધ્યમ",   "Gujarati Medium"),  sub: t("ધો. 1–12",      "Grade 1–12")       },
                { label: t("Co-Education", "Co-Education"),     sub: t("Boys & Girls",  "Boys & Girls")      },
                { label: t("Morning Shift","Morning Shift"),    sub: t("7:30 – 1:00 PM","7:30 AM – 1:00 PM") },
              ].map((f) => (
                <div key={f.label} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-primary-foreground">{f.label}</p>
                    <p className="text-xs text-primary-foreground/50">{f.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Quick-nav stat cards ── */}
      <section className="py-10 bg-background border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { value: classCounts.pre_primary,      label: t("પ્રિ-પ્રાથ.",   "Pre-Primary"),     sub: t("Nursery – UKG", "Nursery – UKG"),  target: "section-pre_primary",  accent: "hover:border-rose-400/60 hover:bg-rose-50/50",    num: "group-hover:text-rose-600"    },
                { value: classCounts.primary,          label: t("પ્રા.+ઉ.પ.",   "Primary"),          sub: t("ધો. 1 – 8",    "Grade 1 – 8"),     target: "section-primary",      accent: "hover:border-emerald-400/60 hover:bg-emerald-50/50", num: "group-hover:text-emerald-600" },
                { value: classCounts.secondary,        label: t("માધ્ય.",        "Secondary"),         sub: t("ધો. 9 – 10",   "Grade 9 – 10"),    target: "section-secondary",    accent: "hover:border-violet-400/60 hover:bg-violet-50/50",  num: "group-hover:text-violet-600"  },
                { value: classCounts.higher_secondary, label: t("ઉ.માધ.",        "Higher Secondary"),  sub: t("ધો. 11 – 12",  "Grade 11 – 12"),   target: "section-higher",       accent: "hover:border-amber-400/60 hover:bg-amber-50/50",    num: "group-hover:text-amber-600"   },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.target)}
                  className={`card-modern p-5 sm:p-6 text-center group cursor-pointer transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl w-full ${item.accent}`}
                >
                  <p className={`stat-number mb-1 transition-colors duration-300 ${item.num}`}>{item.value}</p>
                  <p className="text-sm sm:text-base font-semibold text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.sub}</p>
                  <span className="mt-3 inline-block text-xs font-medium text-primary/0 group-hover:text-primary/70 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                    {t("જુઓ ↓", "Explore ↓")}
                  </span>
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Grade-wise Curriculum ── */}
      <section className="section-padding bg-background relative">
        <FloatingShapes variant="light" density="low" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <span className="section-label">{t("અભ્યાસક્રમ", "Curriculum")}</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
              {t("ધોરણ-વિભાજિત અભ્યાસક્રમ", "Grade-wise Curriculum Overview")}
            </h2>
            <p className="text-base text-muted-foreground mb-12 max-w-2xl leading-relaxed">
              {t(
                "દરેક ધોરણ GSEB અભ્યાસક્રમ અનુસાર ચાલે છે.",
                "Each level follows the GSEB curriculum enriched with co-curricular activities, modern teaching aids and a student-centric learning environment."
              )}
            </p>
          </AnimatedSection>

          <div className="space-y-5">
            {levels.map((lvl, i) => (
              <AnimatedSection key={lvl.key} delay={i * 0.06}>
                <div
                  id={`section-${lvl.key}`}
                  className="rounded-2xl border border-border/60 overflow-hidden scroll-mt-28 bg-card shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  {/* coloured top stripe */}
                  <div className={`h-1.5 w-full ${lvl.numBg}`} />

                  {/* header */}
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 px-6 sm:px-8 pt-5 pb-5 border-b border-border/40">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-white font-bold text-base ${lvl.numBg}`}>
                      {i + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-heading text-xl font-bold text-foreground">{lvl.label}</h3>
                        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${lvl.badge} ${lvl.badgeBorder}`}>
                          {lvl.grade}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{lvl.description}</p>
                    </div>
                    <div className={`shrink-0 rounded-xl px-4 py-2.5 border text-right ${lvl.accent}`}>
                      <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground/70 mb-0.5">
                        {t("આકારણી", "Assessment")}
                      </p>
                      <p className="text-sm font-semibold text-foreground leading-snug">{lvl.exam}</p>
                    </div>
                  </div>

                  {/* body */}
                  <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-border/40">
                    <div className="p-6 sm:p-8">
                      <p className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-muted-foreground/70 mb-5">
                        <span className={`inline-block w-2 h-2 rounded-full ${lvl.dot}`} />
                        {t("વિષયો", "Subjects Offered")}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {lvl.subjects.map((sub) => (
                          <span key={sub} className={`text-sm px-3 py-1.5 rounded-lg font-medium border ${lvl.badge} ${lvl.badgeBorder}`}>
                            {sub}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="p-6 sm:p-8">
                      <p className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-muted-foreground/70 mb-5">
                        <span className={`inline-block w-2 h-2 rounded-full ${lvl.dot}`} />
                        {t("શ.પ. અને ઉ.", "Pedagogy & Approach")}
                      </p>
                      <ul className="space-y-3">
                        {lvl.points.map((pt) => (
                          <li key={pt} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                            <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${lvl.dot.replace("bg-", "text-")}`} />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Teaching, Assessment & Career ── */}
      <section className="section-padding bg-muted/40 relative">
        <FloatingShapes variant="light" density="low" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <span className="section-label">{t("શ.પ.", "Pedagogy")}</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
              {t("શિક્ષણ, મૂલ્યાંકન અને કારકિર્દી સહાય", "Teaching, Assessment & Career Support")}
            </h2>
            <p className="text-base text-muted-foreground mb-12 max-w-2xl leading-relaxed">
              {t(
                "Our evidence-based methodologies, transparent assessment system and dedicated career guidance ensure every student achieves their full potential.",
                "Our evidence-based methodologies, transparent assessment system and dedicated career guidance ensure every student achieves their full potential."
              )}
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {methodology.map((m, i) => {
              const Icon = m.icon;
              return (
                <AnimatedSection key={m.title} delay={i * 0.08}>
                  <div className="bg-card border border-border/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                    <div className={`px-6 pt-6 pb-5 border-b border-border/40 flex items-start gap-4 ${m.color ? m.color.split(" ")[1] + "/10" : "bg-primary/5"}`}>
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${m.color || "text-primary bg-primary/10"}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-heading text-base font-bold text-foreground leading-tight">{m.title}</h3>
                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{m.desc}</p>
                      </div>
                    </div>
                    <ul className="p-6 space-y-2.5 flex-1">
                      {m.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/80 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-primary/60 mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Facilities, Co-curricular & Community ── */}
      <section className="section-padding bg-background relative">
        <FloatingShapes variant="light" density="medium" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <span className="section-label">{t("સ.", "Facilities")}</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
              {t("ઇન્ફ્રાસ્ટ્રક્ચર, સહ-અભ્યાસક્રમ અને કેમ્પસ લાઇફ", "Infrastructure, Co-Curricular & Campus Life")}
            </h2>
            <p className="text-base text-muted-foreground mb-12 max-w-2xl leading-relaxed">
              {t(
                "World-class labs, a well-stocked library, a safe campus and a vibrant co-curricular programme to develop every student holistically.",
                "World-class labs, a well-stocked library, a safe campus and a vibrant co-curricular programme to develop every student holistically."
              )}
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {facilities.map((f, i) => {
              const Icon = f.icon;
              return (
                <AnimatedSection key={f.title} delay={i * 0.06}>
                  <div className="bg-card border border-border/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                    <div className="px-6 pt-6 pb-4 border-b border-border/40 flex items-center gap-3">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${f.color || "text-primary bg-primary/10"}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-heading text-base font-bold text-foreground">{f.title}</h3>
                    </div>
                    <ul className="p-6 space-y-3 flex-1">
                      {f.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Academics;
