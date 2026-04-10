import AnimatedSection from "@/components/AnimatedSection";
import FloatingShapes from "@/components/FloatingShapes";
import { useLanguage } from "@/contexts/LanguageContext";
import { SCHOOL_INFO, SCHOOL_INFO_PARTIAL_DATA } from "@/config/constants";
import { Target, Eye, BookOpen, Users, Shield, Heart, Lightbulb, Star, Quote } from "lucide-react";

const About = () => {
  const { t } = useLanguage();

  const milestones = [
    { year: "1967", event: t("શાળાની સ્થાપના — પ્રાથમિક વિભાગથી શરૂઆત", "School established — started with primary section") },
    { year: "1975", event: t("ઉચ્ચ પ્રાથમિક વિભાગ (ધોરણ 6-8) શરૂ થયો", "Upper primary section (Grade 6-8) launched") },
    { year: "1985", event: t("માધ્યમિક વિભાગ (ધોરણ 9-10) શરૂ — GSEB સાથે સંલગ્ન", "Secondary section (Grade 9-10) launched — affiliated with GSEB") },
    { year: "1995", event: t("નવું મકાન બન્યું — વિજ્ઞાન પ્રયોગશાળાની શરૂઆત", "New building constructed — science lab launched") },
    { year: "2005", event: t("ઉચ્ચતર માધ્યમિક વિભાગ (ધોરણ 11-12) શરૂ — વિજ્ઞાન પ્રવાહ", "Higher secondary (Grade 11-12) launched — science stream") },
    { year: "2010", event: t("૪૦થી વધુ કમ્પ્યુટરો સાથે કમ્પ્યુટર લેબ — ડિજિટલ શિક્ષણની શરૂઆત", "Computer lab with 40+ computers. Digital education begins") },
    { year: "2015", event: t("સ્માર્ટ ક્લાસરૂમ — LED પ્રોજેક્ટર અને ડિજિટલ બોર્ડ", "Smart classrooms — LED projectors and digital boards") },
    { year: "2018", event: t("સામાન્ય પ્રવાહ શરૂ — વધુ વિદ્યાર્થીઓને તક", "General stream launched — more opportunities for students") },
    { year: "2022", event: t("Wi-Fi કેમ્પસ, CCTV અને RO પાણીની સુવિધા", "Wi-Fi campus, CCTV, and RO water system") },
    { year: "2024", event: t("નવી ગણિત લેબ, રોબોટિક્સ ક્લબ અને ગ્રીન કેમ્પસ પ્રોજેક્ટ", "New math lab, robotics club, and green campus project") },
  ];

  const values = [
    {
      icon: Shield,
      title: t("શિસ્ત", "Discipline"),
      desc: t(
        "સ્વ-શિસ્ત, સમયપાલન અને જવાબદારી જેવા મૂલ્યોનું સંવર્ધન. દરેક વિદ્યાર્થી નિયમિત, સુવ્યવસ્થિત અને જવાબદાર બને તે અમારું ધ્યેય છે. શાળાના નિયમો અને આચારસંહિતા દ્વારા વ્યક્તિત્વ નિર્માણ થાય છે.",
        "Values of self-discipline, punctuality, and responsibility..."
      )
    },
    {
      icon: Heart,
      title: t("ઈમાનદારી", "Integrity"),
      desc: t(
        "સત્ય, પ્રામાણિકતા અને નૈતિકતાનો આધાર. દરેક કાર્યમાં પારદર્શિતા અને ન્યાયનું પાલન. વિદ્યાર્થીઓ, શિક્ષકો અને વાલીઓ વચ્ચે વિશ્વાસપૂર્ણ સંબંધ બનાવવો.",
        "Adherence to truth, honesty, and ethics..."
      )
    },
    {
      icon: BookOpen,
      title: t("જ્ઞાન", "Knowledge"),
      desc: t(
        "આજીવન શિક્ષણની ભાવના વિકસાવવી. શિક્ષણ માત્ર પરીક્ષા માટે નહીં, પરંતુ જીવન માટે છે. જિજ્ઞાસા, સર્જનાત્મકતા અને તર્કશક્તિનો વિકાસ કરવો.",
        "Spirit of lifelong learning..."
      )
    },
    {
      icon: Users,
      title: t("સેવા", "Service"),
      desc: t(
        "સમાજ પ્રત્યે જવાબદારી અને કૃતજ્ઞતા વિકસાવવી. રક્તદાન શિબિર, વૃક્ષારોપણ અને સ્વચ્છતા અભિયાન દ્વારા સામાજિક જાગૃતિ લાવવી.",
        "Responsibility and gratitude towards society..."
      )
    },
    {
      icon: Lightbulb,
      title: t("નવાચાર", "Innovation"),
      desc: t(
        "નવા વિચારો અને ટેકનોલોજી અપનાવવાની તૈયારી. STEM, રોબોટિક્સ અને ડિજિટલ કૌશલ્યો દ્વારા આધુનિક યુગ માટે વિદ્યાર્થીઓને તૈયાર કરવું.",
        "Readiness to adopt new ideas..."
      )
    },
    {
      icon: Star,
      title: t("ઉત્કૃષ્ટતા", "Excellence"),
      desc: t(
        "દરેક ક્ષેત્રમાં શ્રેષ્ઠતા હાંસલ કરવાનો પ્રયાસ. શૈક્ષણિક, રમતગમત અને સાંસ્કૃતિક પ્રવૃત્તિઓમાં ઉત્તમ પ્રદર્શન માટે પ્રેરણા આપવી.",
        "Striving for excellence in everything..."
      )
    }
  ];
  const visionPoints = t(
    SCHOOL_INFO_PARTIAL_DATA.vision.gu.join("\n"),
    SCHOOL_INFO_PARTIAL_DATA.vision.en.join("\n"),
  ).split("\n");

  const missionPoints = t(
    SCHOOL_INFO_PARTIAL_DATA.mission.gu.join("\n"),
    SCHOOL_INFO_PARTIAL_DATA.mission.en.join("\n"),
  ).split("\n");

  const schoolSongStanzas = [
    "અમારી આ શાળા, મધુર સપનાં સિધ્ધ કરતી\nરૂપે રંગે સાડી, અમ હૃદયમાં વ્હાલ ભરતી",
    "રમાડી રીઝવી, સકલ શિશુનો થાક હરતી\nસદા સૌની સાથી, પ્રગટ કરતી જ્ઞાન ઉમદા",
    "સેવાસી હાઈસ્કૂલમાં, સુમધુર વહે જ્ઞાનસરિતા\nપિયાસું ઝંખે સૌ, સકળ શિશુશાળા અજબ આ",
    "પ્રભાવે આ મોટી છે, અમ હૃદય ઉલ્લાસ ભરતી\nપ્રકાશે એ સૌમાં, સકલ શિશુનાં સ્વપ્ન ઉમદા",
    "શિવોની આ પુરી, સકલ જગનું શિવ કરશે\nકૃપા જ્યારે થાશે, અમ ઉપર મા તુજની",
    "ઝંખે કિર્તી તારી, ગુરૂકૃપા સદા શિવપુરીમાં\nસદા સંસ્કારોથી સુમધુર શિખિ નૃત્ય કરશે.",
  ];

  return (
    <div className="pt-20 lg:pt-0 pb-16 lg:pb-0">

      {/* ── Hero ── */}
      <section className="page-header py-20 sm:py-28 relative overflow-hidden">
        <FloatingShapes variant="dark" density="medium" />
        <div className="section-container relative z-10">
          <AnimatedSection>
            <span className="section-label text-primary-foreground/40 before:bg-secondary/60">
              {t("અમારા વિશે", "About Us")}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-5 max-w-2xl">
              {t("અમારી ઓળખ", "Who We Are")}
            </h1>
            <p className="text-base sm:text-lg text-primary-foreground/60 max-w-xl leading-relaxed mb-12">
              {t(
                `${SCHOOL_INFO_PARTIAL_DATA.school.description.gu} સમય: ${SCHOOL_INFO.officeHours.weekdaysGujarati}, શનિ: ${SCHOOL_INFO.officeHours.saturdayGujarati}.`,
                `${SCHOOL_INFO_PARTIAL_DATA.school.description.en} Timings: ${SCHOOL_INFO.officeHours.weekdays}, Sat: ${SCHOOL_INFO.officeHours.saturday}.`
              )}
            </p>
            {/* Key stats strip */}
            <div className="flex flex-wrap gap-8">
              {[
                { value: "1967", label: t("સ્થાપના", "Founded") },
                { value: "55+",  label: t("વર્ષ",   "Years") },
                { value: "25,000+", label: t("વિદ્યાર્થીઓ", "Students") },
                { value: "Nursery–12", label: t("ધોરણ", "Grades") },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl sm:text-3xl font-bold text-primary-foreground">{s.value}</p>
                  <p className="text-xs text-primary-foreground/50 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section className="section-padding bg-background relative">
        <FloatingShapes variant="light" density="low" />
        <div className="section-container relative z-10">
          <AnimatedSection>
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-10">
                <span className="section-label">{t("શિક્ષણ ફિલોસોફી", "Our Philosophy")}</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                  {t("અમારો શૈક્ષણિક દ્રષ્ટિકોણ", "Our Educational Outlook")}
                </h2>
              </div>

              {/* Motto highlight */}
              <div className="relative bg-primary/5 border border-primary/20 rounded-2xl px-8 py-7 mb-8 text-center">
                <Quote className="w-8 h-8 text-primary/30 mx-auto mb-3" />
                <p className="text-xl sm:text-2xl font-bold text-foreground leading-snug">
                  {t("\"વિદ્યા પરમ દેવતા\"", "\"Vidya Parama Devata\"")}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  {t("જ્ઞાન સર્વોચ્ચ છે — આ સૂત્ર અમારી શાળાનો આધારસ્તંભ છે.", "Knowledge is supreme — this motto is the cornerstone of our school.")}
                </p>
              </div>

              <div className="space-y-4 text-base text-muted-foreground leading-[1.9]">
                <p>
                  {t(
                    "\"વિદ્યા પરા દેવતા\" — જ્ઞાન એ સર્વોચ્ચ દેવતા છે. આ સૂત્ર અમારી શાળાના પાયામાં છે. અમે માનીએ છીએ કે સાચું શિક્ષણ માત્ર પુસ્તકિયું જ્ઞાન નથી — તે જીવન જીવવાની કળા છે, સમસ્યાઓ ઉકેલવાની ક્ષમતા છે, અને સમાજ પ્રત્યે જવાબદારીનું ભાન છે.",
                    "\"Vidya Para Devata\" — Knowledge is the supreme deity. This motto is the foundation of our school. We believe true education is not just textbook knowledge — it is the art of living, the ability to solve problems, and awareness of responsibility towards society."
                  )}
                </p>
                <p>
                  {t(
                    "અમારી શાળામાં દરેક વિદ્યાર્થીને એક અનન્ય વ્યક્તિ તરીકે જોવામાં આવે છે. દરેકની ક્ષમતા, રુચિ, અને સપનાં અલગ છે — અને અમે દરેકને તેમનો માર્ગ શોધવામાં મદદ કરીએ છીએ. અમારા શિક્ષકો માત્ર ભણાવતા નથી — તેઓ માર્ગદર્શક, પ્રેરક, અને મિત્ર છે.",
                    "At our school, every student is seen as a unique individual. Everyone has different abilities, interests, and dreams — and we help each one find their path. Our teachers don't just teach — they are guides, motivators, and friends."
                  )}
                </p>
                <p>
                  {t(
                    "ગુજરાતી ભાષામાં શિક્ષણ એ અમારું ગૌરવ છે. માતૃભાષામાં શિક્ષણ વિદ્યાર્થીઓની સમજ, અભિવ્યક્તિ, અને આત્મવિશ્વાસ વધારે છે. અમે ગુજરાતી ભાષા અને સંસ્કૃતિ સાથે આધુનિક જ્ઞાન અને ટેકનોલોજીનો સમન્વય કરીએ છીએ.",
                    "Education in Gujarati language is our pride. Mother tongue education enhances students' understanding, expression, and confidence. We integrate Gujarati language and culture with modern knowledge and technology."
                  )}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="section-padding bg-muted/40 relative">
        <FloatingShapes variant="light" density="medium" />
        <div className="section-container relative z-10">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="section-label">{t("ધ્યેય", "Direction")}</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                {t("દ્રષ્ટિ અને ધ્યેય", "Vision & Mission")}
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Vision */}
            <AnimatedSection>
              <div className="bg-card border border-border/60 rounded-2xl overflow-hidden shadow-sm h-full flex flex-col">
                <div className="flex items-center gap-4 px-7 py-5 bg-blue-50 border-b border-blue-100">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                    <Eye className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-blue-500 uppercase tracking-widest mb-0.5">{t("દ્રષ્ટિ", "Vision")}</p>
                    <h3 className="font-heading text-xl font-bold text-foreground">{t("અમારી દ્રષ્ટિ", "Our Vision")}</h3>
                  </div>
                </div>
                <div className="px-7 py-6 space-y-3 flex-1">
                  {visionPoints.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      </div>
                      <p className="text-sm text-foreground/80 leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Mission */}
            <AnimatedSection delay={0.1}>
              <div className="bg-card border border-border/60 rounded-2xl overflow-hidden shadow-sm h-full flex flex-col">
                <div className="flex items-center gap-4 px-7 py-5 bg-emerald-50 border-b border-emerald-100">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                    <Target className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-0.5">{t("ધ્યેય", "Mission")}</p>
                    <h3 className="font-heading text-xl font-bold text-foreground">{t("અમારું ધ્યેય", "Our Mission")}</h3>
                  </div>
                </div>
                <div className="px-7 py-6 space-y-3 flex-1">
                  {missionPoints.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      </div>
                      <p className="text-sm text-foreground/80 leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="section-padding bg-background relative">
        <FloatingShapes variant="light" density="medium" />
        <div className="section-container relative z-10">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="section-label">{t("મૂલ્યો", "Values")}</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                {t("અમારા મૂળ મૂલ્યો", "Our Core Values")}
              </h2>
              <p className="text-base text-muted-foreground mt-3 max-w-lg mx-auto">
                {t(
                  "આ મૂલ્યો અમારી શાળાના પાયામાં છે. દરેક શિક્ષક, વિદ્યાર્થી, અને કર્મચારી આ મૂલ્યોને જીવે છે અને પ્રસારિત કરે છે.",
                  "These values form the foundation of our school. Every teacher, student, and staff member lives and propagates these values."
                )}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { ...values[0], accent: "bg-blue-50 border-blue-100",    icon_bg: "bg-blue-100",    icon_text: "text-blue-600",    dot: "bg-blue-500"    },
              { ...values[1], accent: "bg-rose-50 border-rose-100",    icon_bg: "bg-rose-100",    icon_text: "text-rose-600",    dot: "bg-rose-500"    },
              { ...values[2], accent: "bg-amber-50 border-amber-100",  icon_bg: "bg-amber-100",   icon_text: "text-amber-600",   dot: "bg-amber-500"   },
              { ...values[3], accent: "bg-emerald-50 border-emerald-100", icon_bg: "bg-emerald-100", icon_text: "text-emerald-600", dot: "bg-emerald-500" },
              { ...values[4], accent: "bg-violet-50 border-violet-100", icon_bg: "bg-violet-100", icon_text: "text-violet-600",  dot: "bg-violet-500"  },
              { ...values[5], accent: "bg-orange-50 border-orange-100", icon_bg: "bg-orange-100", icon_text: "text-orange-600",  dot: "bg-orange-500"  },
            ].map((v, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <div className={`rounded-2xl border p-6 h-full hover:shadow-md transition-shadow duration-300 ${v.accent}`}>
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${v.icon_bg}`}>
                    <v.icon className={`w-5 h-5 ${v.icon_text}`} />
                  </div>
                  <h3 className="font-heading text-base font-bold text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── School Song ── */}
      <section className="section-padding bg-muted/40 relative">
        <FloatingShapes variant="light" density="low" />
        <div className="section-container relative z-10">
          <AnimatedSection>
            <div className="text-center mb-10">
              <span className="section-label">{t("શાળા ગીત", "School Song")}</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                {t("અમારું શાળા ગીત", "Our School Song")}
              </h2>
              <p className="text-base text-muted-foreground mt-3 max-w-2xl mx-auto leading-relaxed">
                {t(
                  "આ ગીત અમારી શાળાની આત્મા, સંસ્કાર અને જ્ઞાનયાત્રાનું પ્રતિબિંબ છે.",
                  "This song reflects our school's spirit, values, and journey of knowledge."
                )}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.06}>
            <div className="max-w-2xl mx-auto">
              {/* Card wrapper */}
              <div className="bg-card border border-border/60 rounded-2xl overflow-hidden shadow-sm">

                {/* Header */}
                <div className="flex items-center gap-4 px-7 py-5 border-b border-border/40 bg-primary/5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Quote className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground">
                      {t("સેવાસી હાઈ સ્કૂલ — શાળા ગીત", "Sevasi High School — School Song")}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t("પ્રેરણા, જ્ઞાન અને સંસ્કારનો સ્વર", "A melody of inspiration, learning, and values")}
                    </p>
                  </div>
                </div>

                {/* Lyrics */}
                <div className="px-8 py-10 text-center">
                  {schoolSongStanzas.map((stanza, i) => (
                    <div key={i}>
                      <p className="font-gujarati text-base sm:text-lg leading-[2.2] text-foreground/85 whitespace-pre-line">
                        {stanza}
                      </p>
                      {i < schoolSongStanzas.length - 1 && (
                        <div className="flex items-center justify-center gap-2 my-6">
                          <span className="w-8 h-px bg-border/60" />
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                          <span className="w-8 h-px bg-border/60" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Journey / Timeline ── */}
      <section className="section-padding bg-background relative">
        <FloatingShapes variant="light" density="low" />
        <div className="section-container max-w-7xl relative z-10">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="section-label">{t("ઈતિહાસ", "History")}</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                {t("અમારી સફર", "Our Journey")}
              </h2>
              <p className="text-base text-muted-foreground mt-3 max-w-md mx-auto">
                {t(
                  "૧૯૬૭ થી ૨૦૨૪ — ૫૫+ વર્ષની સફરમાં અમે સતત વિકાસ, નવીનતા, અને ઉત્કૃષ્ટતાના માર્ગે આગળ વધ્યા છીએ.",
                  "From 1967 to 2024 — in our 55+ year journey, we have consistently moved forward on the path of development, innovation, and excellence."
                )}
              </p>
            </div>
          </AnimatedSection>

          <div className="relative">
            {/* vertical centre line */}
            <div className="absolute left-[72px] sm:left-1/2 top-0 bottom-0 w-px bg-border/60 -translate-x-1/2" />

            <div className="space-y-6">
              {milestones.map((m, i) => (
                <AnimatedSection key={i} delay={i * 0.05}>
                  <div className={`relative flex gap-6 items-start ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                    {/* year badge — always centred on the line */}
                    <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 z-10">
                      <div className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full shadow-sm whitespace-nowrap">
                        {m.year}
                      </div>
                    </div>

                    {/* mobile layout */}
                    <div className="flex sm:hidden items-start gap-4 w-full pl-2">
                      <div className="relative flex flex-col items-center shrink-0">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center z-10">
                          <span className="text-[9px] font-bold text-primary-foreground leading-none">{m.year.slice(2)}</span>
                        </div>
                        {i < milestones.length - 1 && <div className="w-px flex-1 bg-border mt-2" style={{ minHeight: 32 }} />}
                      </div>
                      <div className="bg-card border border-border/60 rounded-xl px-4 py-3 flex-1 shadow-sm">
                        <p className="text-xs font-bold text-primary mb-0.5">{m.year}</p>
                        <p className="text-sm text-foreground/80 leading-relaxed">{m.event}</p>
                      </div>
                    </div>

                    {/* desktop layout — content on alternating sides */}
                    <div className={`hidden sm:flex ${i % 2 === 0 ? "w-[calc(50%-28px)] justify-end pr-8" : "w-[calc(50%-28px)] pl-8"} ${i % 2 !== 0 ? "sm:ml-[calc(50%+28px)]" : ""}`}>
                      <div className="bg-card border border-border/60 rounded-xl px-5 py-4 shadow-sm max-w-xs">
                        <p className="text-xs font-bold text-primary mb-1">{m.year}</p>
                        <p className="text-sm text-foreground/80 leading-relaxed">{m.event}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Principal's Message ── */}
      <section className="section-padding bg-muted/40 relative">
        <FloatingShapes variant="light" density="low" />
        <div className="section-container max-w-7xl relative z-10">
          <AnimatedSection>
            <div className="text-center mb-10">
              <span className="section-label">{t("આચાર્યનો સંદેશ", "Principal's Message")}</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                {t("આચાર્યશ્રીનો સંદેશ", "Message from the Principal")}
              </h2>
            </div>

            <div className="bg-card border border-border/60 rounded-2xl overflow-hidden shadow-sm">
              {/* Large decorative quote */}
              <div className="relative px-8 sm:px-12 pt-10 pb-2">
                <Quote className="absolute top-6 left-8 w-10 h-10 text-primary/15" />
                <div className="space-y-5 text-base text-foreground/80 leading-[1.95] pt-4">
                  <p>
                    {t(
                      "\"વિદ્યાર્થીમિત્રો અને વાલીઓ, સેવાસી હાઈ સ્કૂલના પરિવારમાં આપનું હાર્દિક સ્વાગત છે. અમારી શાળા ૧૯૬૭ થી ગુજરાતી માધ્યમમાં ગુણવત્તાયુક્ત શિક્ષણ આપવા પ્રતિબદ્ધ છે.\"",
                      "\"Dear students and parents, a heartfelt welcome to the Sevasi High School family. Our school has been committed to providing quality education in Gujarati medium since 1967.\""
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
                      "\"છેલ્લા ૫૫+ વર્ષમાં અમે ૨૫,૦૦૦+ વિદ્યાર્થીઓને શિક્ષિત કર્યા છે. આ વિદ્યાર્થીઓ આજે ડૉક્ટર, એન્જિનિયર, શિક્ષક, વકીલ, વ્યાપારી — દરેક ક્ષેત્રમાં પ્રગતિ કરી રહ્યા છે. તે અમારું સૌથી મોટું ગૌરવ છે.\"",
                      "\"In the last 55+ years, we have educated 25,000+ students. These students are now progressing as doctors, engineers, teachers, lawyers, businesspeople — in every field. That is our greatest pride.\""
                    )}
                  </p>
                  <p>
                    {t(
                      "\"આપના સહકાર અને વિશ્વાસ માટે અમે સદા આભારી છીએ. સાથે મળીને આપના બાળકોનું ઉજ્જવળ ભવિષ્ય ઘડીશું. જય સરસ્વતી!\"",
                      "\"We are always grateful for your cooperation and trust. Together, we shall build a bright future for your children. Jai Saraswati!\""
                    )}
                  </p>
                </div>
              </div>
              {/* Signature strip */}
              <div className="flex items-center gap-4 mx-8 sm:mx-12 mt-6 mb-8 pt-5 border-t border-border/50">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-heading font-bold text-base text-foreground">
                    {t(SCHOOL_INFO_PARTIAL_DATA.principal.name.gu, SCHOOL_INFO_PARTIAL_DATA.principal.name.en)}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {t(
                      `${SCHOOL_INFO_PARTIAL_DATA.principal.designation.gu}, ${SCHOOL_INFO_PARTIAL_DATA.school.name.gu}`,
                      `${SCHOOL_INFO_PARTIAL_DATA.principal.designation.en}, ${SCHOOL_INFO_PARTIAL_DATA.school.name.en}`,
                    )}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
};

export default About;
