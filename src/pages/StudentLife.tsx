import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import FloatingShapes from "@/components/FloatingShapes";
import { useLanguage } from "@/contexts/LanguageContext";
import { SCHOOL_INFO_PARTIAL_DATA } from "@/config/constants";
import { Trophy, Music, Calendar, Users, Medal, Palette, Flag, BookOpen, Heart, Star, Clock } from "lucide-react";

// ─── Bell-schedule data ───────────────────────────────────────────────────────

type BellRow = { labelGu: string; labelEn: string; time: string; minGu: string; minEn: string; isBreak?: boolean };

const PRIMARY_WEEKDAY: BellRow[] = [
  { labelGu: "શાળા પ્રવેશ",   labelEn: "School Entry",  time: "7:30",  minGu: "",       minEn: "",        isBreak: false },
  { labelGu: "પ્રાર્થના",      labelEn: "Prayer",        time: "7:30 – 7:40",  minGu: "10 મિ.", minEn: "10 min" },
  { labelGu: "કાલાંશ ૧",      labelEn: "Period 1",       time: "7:40 – 8:15",  minGu: "35 મિ.", minEn: "35 min" },
  { labelGu: "કાલાંશ ૨",      labelEn: "Period 2",       time: "8:15 – 8:50",  minGu: "35 મિ.", minEn: "35 min" },
  { labelGu: "કાલાંશ ૩",      labelEn: "Period 3",       time: "8:50 – 9:25",  minGu: "35 મિ.", minEn: "35 min" },
  { labelGu: "રીશેષ",         labelEn: "Recess",         time: "9:25 – 9:40",  minGu: "15 મિ.", minEn: "15 min", isBreak: true },
  { labelGu: "કાલાંશ ૪",      labelEn: "Period 4",       time: "9:40 – 10:15", minGu: "35 મિ.", minEn: "35 min" },
  { labelGu: "કાલાંશ ૫",      labelEn: "Period 5",       time: "10:15 – 10:50",minGu: "35 મિ.", minEn: "35 min" },
  { labelGu: "કાલાંશ ૬",      labelEn: "Period 6",       time: "10:50 – 11:25",minGu: "35 મિ.", minEn: "35 min" },
  { labelGu: "છૂટવાનો સમય",   labelEn: "Dismissal",      time: "11:30", minGu: "",       minEn: "",        isBreak: false },
];

const PRIMARY_SATURDAY: BellRow[] = [
  { labelGu: "પ્રાર્થના",     labelEn: "Prayer",    time: "11:30 – 11:40", minGu: "10 મિ.", minEn: "10 min" },
  { labelGu: "કાલાંશ ૧",     labelEn: "Period 1",   time: "11:40 – 12:15", minGu: "35 મિ.", minEn: "35 min" },
  { labelGu: "કાલાંશ ૨",     labelEn: "Period 2",   time: "12:15 – 12:50", minGu: "35 મિ.", minEn: "35 min" },
  { labelGu: "રીશેષ",        labelEn: "Recess",     time: "12:50 – 1:05",  minGu: "15 મિ.", minEn: "15 min", isBreak: true },
  { labelGu: "કાલાંશ ૩",     labelEn: "Period 3",   time: "1:05 – 1:40",   minGu: "35 મિ.", minEn: "35 min" },
  { labelGu: "કાલાંશ ૪",     labelEn: "Period 4",   time: "1:40 – 2:10",   minGu: "30 મિ.", minEn: "30 min" },
  { labelGu: "છૂટવાનો સમય",  labelEn: "Dismissal",  time: "2:30",  minGu: "",       minEn: "" },
];

const SECONDARY_WEEKDAY: BellRow[] = [
  { labelGu: "પ્રાર્થના",     labelEn: "Prayer",       time: "11:45 – 11:55", minGu: "10 મિ.", minEn: "10 min" },
  { labelGu: "કાલાંશ ૧",     labelEn: "Period 1",      time: "11:55 – 12:30", minGu: "35 મિ.", minEn: "35 min" },
  { labelGu: "કાલાંશ ૨",     labelEn: "Period 2",      time: "12:30 – 01:05", minGu: "35 મિ.", minEn: "35 min" },
  { labelGu: "કાલાંશ ૩",     labelEn: "Period 3",      time: "01:05 – 01:40", minGu: "35 મિ.", minEn: "35 min" },
  { labelGu: "ભોજન વિરામ",   labelEn: "Lunch Break",   time: "01:40 – 02:10", minGu: "30 મિ.", minEn: "30 min", isBreak: true },
  { labelGu: "કાલાંશ ૪",     labelEn: "Period 4",      time: "02:10 – 02:45", minGu: "35 મિ.", minEn: "35 min" },
  { labelGu: "કાલાંશ ૫",     labelEn: "Period 5",      time: "02:45 – 03:20", minGu: "35 મિ.", minEn: "35 min" },
  { labelGu: "કાલાંશ ૬",     labelEn: "Period 6",      time: "03:20 – 03:50", minGu: "35 મિ.", minEn: "35 min" },
  { labelGu: "રીશેષ",        labelEn: "Recess",        time: "03:50 – 04:00", minGu: "10 મિ.", minEn: "10 min", isBreak: true },
  { labelGu: "કાલાંશ ૭",     labelEn: "Period 7",      time: "04:00 – 04:30", minGu: "30 મિ.", minEn: "30 min" },
  { labelGu: "કાલાંશ ૮",     labelEn: "Period 8",      time: "04:30 – 05:00", minGu: "30 મિ.", minEn: "30 min" },
];

const SECONDARY_SATURDAY: BellRow[] = [
  { labelGu: "પ્રાર્થના",    labelEn: "Prayer",    time: "07:50 – 08:00", minGu: "10 મિ.", minEn: "10 min" },
  { labelGu: "કાલાંશ ૧",    labelEn: "Period 1",   time: "08:00 – 08:35", minGu: "35 મિ.", minEn: "35 min" },
  { labelGu: "કાલાંશ ૨",    labelEn: "Period 2",   time: "08:35 – 09:10", minGu: "35 મિ.", minEn: "35 min" },
  { labelGu: "કાલાંશ ૩",    labelEn: "Period 3",   time: "09:10 – 09:45", minGu: "35 મિ.", minEn: "35 min" },
  { labelGu: "રીશેષ",       labelEn: "Recess",     time: "09:45 – 10:05", minGu: "20 મિ.", minEn: "20 min", isBreak: true },
  { labelGu: "કાલાંશ ૪",    labelEn: "Period 4",   time: "10:05 – 10:35", minGu: "30 મિ.", minEn: "30 min" },
  { labelGu: "કાલાંશ ૫",    labelEn: "Period 5",   time: "10:35 – 11:10", minGu: "30 મિ.", minEn: "30 min" },
];

// ─── Component ────────────────────────────────────────────────────────────────

const StudentLife = () => {
  const { t, lang } = useLanguage();
  const [activeSection, setActiveSection] = useState<"primary" | "secondary">("primary");
  const [activeDay, setActiveDay]         = useState<"weekday" | "saturday">("weekday");
  const celebrationItems = t(
    SCHOOL_INFO_PARTIAL_DATA.activities_and_celebrations.gu.join("\n"),
    SCHOOL_INFO_PARTIAL_DATA.activities_and_celebrations.en.join("\n"),
  ).split("\n");

  const activities = [
    {
      icon: Trophy,
      title: t("રમતગમત", "Sports"),
      desc: t(
        "વિવિધ રમતગમત સ્પર્ધાઓમાં ભાગ લઈ વિદ્યાર્થીઓ શારીરિક અને માનસિક ક્ષમતા વિકસાવે છે. જિલ્લા અને રાજ્ય સ્તરની સ્પર્ધાઓમાં સતત ઉત્તમ પ્રદર્શન. દર વર્ષે આંતર-ગૃહ રમતગમત સ્પર્ધા (Inter-House Sports Competition), વાર્ષિક ક્રીડા મહોત્સવ (Annual Sports Day), અને SGFI ટુર્નામેન્ટમાં ભાગીદારી.",
        "Students develop physical and mental capabilities through various sports competitions. Consistently excellent performance in district and state level competitions. Annual Inter-House Sports Competition, Annual Sports Day, and participation in SGFI tournaments every year."
      ),
      items: [
        t("ક્રિકેટ", "Cricket"), t("કબડ્ડી", "Kabaddi"), t("ખો-ખો", "Kho-Kho"),
        t("એથ્લેટિક્સ", "Athletics"), t("યોગ", "Yoga"), t("વોલીબોલ", "Volleyball"),
        t("ચેસ", "Chess"), t("બેડમિન્ટન", "Badminton"),
      ],
    },
    {
      icon: Music,
      title: t("સાંસ્કૃતિક પ્રવૃત્તિઓ", "Cultural Activities"),
      desc: t(
        "વાર્ષિક ઉત્સવ, પ્રજાસત્તાક દિન, સ્વતંત્રતા દિન, ગુરુ પૂર્ણિમા, શિક્ષક દિન, બાળ દિન, અને અન્ય પ્રસંગોએ વિદ્યાર્થીઓ તેમની કલા રજૂ કરે છે. દરેક વિદ્યાર્થીને મંચ પર પ્રદર્શનની તક. નવરાત્રી ગરબા, જન્માષ્ટમી, અને ઉત્તરાયણ ઉજવણી. દીવાલ સામયિક, હસ્તલિખિત મેગેઝિન.",
        "Students showcase their talents on Annual Day, Republic Day, Independence Day, Guru Purnima, Teachers' Day, Children's Day, and other occasions. Every student gets stage performance opportunities. Navratri Garba, Janmashtami, and Uttarayan celebrations. Wall magazine, handwritten magazine."
      ),
      items: [
        t("ગરબા/રાસ", "Garba/Raas"), t("લોકનૃત્ય", "Folk Dance"), t("સંગીત", "Music"),
        t("નાટક", "Drama"), t("વક્તૃત્વ", "Elocution"), t("ચિત્રકલા", "Art"),
        t("રંગોળી", "Rangoli"), t("મહેંદી", "Mehndi"),
      ],
    },
    {
      icon: Calendar,
      title: t("વાર્ષિક કાર્યક્રમો", "Annual Events"),
      desc: t(
        "વર્ષ દરમિયાન શૈક્ષણિક અને સાંસ્કૃતિક કાર્યક્રમોનું આયોજન થાય છે. રાષ્ટ્રીય દિવસો અને પરંપરાગત ઉજવણીઓ દ્વારા વિદ્યાર્થીઓમાં નેતૃત્વ, દેશભક્તિ અને સામાજિક જાગૃતિ વિકસે છે.",
        "Educational and cultural events are conducted throughout the year. National days and traditional celebrations build leadership, patriotism, and social awareness in students."
      ),
      items: celebrationItems,
    },
    {
      icon: Flag,
      title: t("NCC / NSS / સ્કાઉટ-ગાઈડ", "NCC / NSS / Scout-Guide"),
      desc: t(
        "National Cadet Corps (NCC), National Service Scheme (NSS), અને Scout-Guide દ્વારા વિદ્યાર્થીઓમાં દેશભક્તિ, શિસ્ત, નેતૃત્વ, અને સમાજસેવાની ભાવના વિકસાવવામાં આવે છે. NCC કેડેટ્સ પ્રજાસત્તાક દિન પરેડમાં ભાગ લે છે. NSS કેમ્પ — ગ્રામ વિકાસ, સ્વચ્છતા, જાગૃતિ.",
        "National Cadet Corps (NCC), National Service Scheme (NSS), and Scout-Guide develop patriotism, discipline, leadership, and community service spirit in students. NCC cadets participate in Republic Day parades. NSS camps — village development, cleanliness, awareness."
      ),
      items: [
        t("NCC તાલીમ", "NCC Training"), t("NSS કેમ્પ", "NSS Camp"),
        t("સ્કાઉટ", "Scout"), t("ગાઈડ", "Guide"),
        t("પ્રજાસત્તાક પરેડ", "Republic Parade"), t("સ્વચ્છતા અભિયાન", "Cleanliness Drive"),
      ],
    },
    {
      icon: BookOpen,
      title: t("સાહિત્ય અને ભાષા", "Literature & Language"),
      desc: t(
        "ગુજરાતી, હિન્દી, અને અંગ્રેજી ભાષામાં વિવિધ સ્પર્ધાઓ. નિબંધ લેખન, કવિતા પઠન, વાર્તા લેખન, પત્ર લેખન, ભાષણ, ડિબેટ. દીવાલ સામયિક (Wall Magazine) — દર મહિને. વાર્ષિક હસ્તલિખિત મેગેઝિન — વિદ્યાર્થીઓના સર્જનાત્મક લેખન.",
        "Various competitions in Gujarati, Hindi, and English. Essay writing, poetry recitation, story writing, letter writing, speech, debate. Wall Magazine — every month. Annual handwritten magazine — creative writing by students."
      ),
      items: [
        t("નિબંધ", "Essay"), t("કવિતા", "Poetry"), t("ડિબેટ", "Debate"),
        t("વાર્તા", "Story"), t("ભાષણ", "Speech"), t("દીવાલ સામયિક", "Wall Magazine"),
      ],
    },
    {
      icon: Heart,
      title: t("સામાજિક પ્રવૃત્તિઓ", "Community Service"),
      desc: t(
        "વિદ્યાર્થીઓમાં સામાજિક જવાબદારીની ભાવના કેળવવા વિવિધ સેવા પ્રવૃત્તિઓ. રક્તદાન શિબિર (ધોરણ 11-12 માટે), વૃક્ષારોપણ, ગ્રામ મુલાકાત, વૃદ્ધાશ્રમ મુલાકાત, અને પર્યાવરણ જાગૃતિ ર ેલી. \"Earn & Learn\" — જરૂરિયાતમંદ વિદ્યાર્થીઓ માટે.",
        "Various service activities to develop social responsibility in students. Blood donation camp (for Grade 11-12), tree planting, village visits, old age home visits, and environmental awareness rallies. \"Earn & Learn\" — for students in need."
      ),
      items: [
        t("રક્તદાન", "Blood Donation"), t("વૃક્ષારોપણ", "Tree Planting"),
        t("સ્વચ્છતા", "Cleanliness"), t("ગ્રામ મુલાકાત", "Village Visit"),
        t("પર્યાવરણ", "Environment"), t("જાગૃતિ", "Awareness"),
      ],
    },
  ];

  const achievements = [
    { icon: Medal, title: t("જિલ્લા કક્ષા ક્રિકેટ ચેમ્પિયન — છેલ્લા 3 વર્ષથી સતત", "District Level Cricket Champion — consecutive for last 3 years"), year: "2022-24" },
    { icon: Trophy, title: t("રાજ્ય કક્ષા વિજ્ઞાન મેળો — પ્રથમ (ધોરણ 10 — ભૌતિકશાસ્ત્ર પ્રોજેક્ટ)", "State Level Science Fair — First (Grade 10 — Physics Project)"), year: "2024" },
    { icon: Palette, title: t("જિલ્લા ચિત્ર સ્પર્ધા — ગોલ્ડ મેડલ (3 વિદ્યાર્થીઓ)", "District Art Competition — Gold Medal (3 students)"), year: "2023" },
    { icon: Users, title: t("NCC — બેસ્ટ કેડેટ એવોર્ડ (ગુજરાત ડિરેક્ટોરેટ)", "NCC — Best Cadet Award (Gujarat Directorate)"), year: "2023" },
    { icon: Star, title: t("ગણિત ઓલિમ્પિયાડ — રાજ્ય કક્ષા 2nd (ધોરણ 8)", "Math Olympiad — State Level 2nd (Grade 8)"), year: "2024" },
    { icon: Trophy, title: t("GSEB બોર્ડ ધોરણ 10 — જિલ્લા ટોપ 10 માં 3 વિદ્યાર્થીઓ", "GSEB Board Grade 10 — 3 students in District Top 10"), year: "2024" },
    { icon: Medal, title: t("જિલ્લા કબડ્ડી — પ્રથમ (છોકરીઓ) અને દ્વિતીય (છોકરાઓ)", "District Kabaddi — First (Girls) and Second (Boys)"), year: "2023" },
    { icon: Flag, title: t("સ્વતંત્રતા દિન — જિલ્લા શ્રેષ્ઠ NCC ચુકાદી (March Past)", "Independence Day — District Best NCC March Past"), year: "2024" },
  ];

  return (
    <div className="pt-20 lg:pt-0 pb-16 lg:pb-0">
      {/* Header */}
      <section className="page-header py-20 sm:py-24 relative">
        <FloatingShapes variant="dark" density="medium" />
        <div className="section-container relative z-10">
          <AnimatedSection>
            <span className="section-label text-primary-foreground/40 before:bg-secondary/60">
              {t("વિદ્યાર્થી જીવન", "Student Life")}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-5">
              {t("વિદ્યાર્થી જીવન", "Life at Sevasi")}
            </h1>
            <p className="text-base sm:text-lg text-primary-foreground/60 max-w-xl leading-relaxed">
              {t(
                "શૈક્ષણિક ઉત્કૃષ્ટતાની સાથે રમતગમત, સાંસ્કૃતિક પ્રવૃત્તિઓ, NCC/NSS, સાહિત્ય, અને સમાજસેવા દ્વારા સર્વાંગી વિકાસ. દરેક વિદ્યાર્થીને ઓછામાં ઓછી 1 સહઅભ્યાસિક પ્રવૃત્તિમાં ભાગ લેવાનું ફરજિયાત. વર્ષમાં 20+ કાર્યક્રમોનું આયોજન.",
                "Holistic development through sports, cultural activities, NCC/NSS, literature, and community service alongside academic excellence. Every student must participate in at least 1 co-curricular activity. 20+ events organized per year."
              )}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Activities */}
      <section className="section-padding bg-background relative">
        <FloatingShapes variant="light" density="medium" />
        <div className="section-container relative z-10">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="section-label">{t("પ્રવૃત્તિઓ", "Activities")}</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                {t("સહઅભ્યાસિક પ્રવૃત્તિઓ", "Co-Curricular Activities")}
              </h2>
              <p className="text-base text-muted-foreground mt-3 max-w-lg mx-auto">
                {t(
                  "અમે માનીએ છીએ કે સંપૂર્ણ શિક્ષણ = અભ્યાસ + પ્રવૃત્તિઓ. રમતગમત, કલા, સાહિત્ય, સેવા — દરેક ક્ષેત્રમાં તક.",
                  "We believe complete education = academics + activities. Opportunities in sports, art, literature, service — every field."
                )}
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-5">
            {activities.map((a, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="card-modern p-6 sm:p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                      <a.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-bold text-xl text-foreground mb-2">{a.title}</h3>
                      <p className="text-base text-muted-foreground leading-relaxed mb-5">{a.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {a.items.map((item) => (
                          <span key={item} className="text-sm bg-muted/80 px-3 py-1.5 rounded-lg text-muted-foreground font-medium">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding bg-muted/30 relative">
        <FloatingShapes variant="light" density="low" />
        <div className="section-container relative z-10">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="section-label">{t("સિદ્ધિઓ", "Achievements")}</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                {t("તાજેતરની સિદ્ધિઓ", "Recent Achievements")}
              </h2>
              <p className="text-base text-muted-foreground mt-3 max-w-lg mx-auto">
                {t(
                  "છેલ્લા 3 વર્ષમાં અમારા વિદ્યાર્થીઓએ રમતગમત, શૈક્ષણિક, અને સાંસ્કૃતિક ક્ષેત્રોમાં જિલ્લા અને રાજ્ય સ્તરે ઉત્કૃષ્ટ સિદ્ધિઓ મેળવી છે.",
                  "In the last 3 years, our students have achieved outstanding results at district and state levels in sports, academic, and cultural fields."
                )}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {achievements.map((a, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <div className="feature-item flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <a.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-base text-foreground mb-0.5">{a.title}</p>
                    <p className="text-sm text-muted-foreground">{a.year}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Bell Schedule */}
      <section className="section-padding bg-background relative">
        <FloatingShapes variant="light" density="low" />
        <div className="section-container max-w-2xl relative z-10">
          <AnimatedSection>
            <div className="text-center mb-10">
              <span className="section-label">{t("ટકોરા પત્રક", "Bell Schedule")}</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                {t("એક દિવસ સેવાસી હાઈ સ્કૂલમાં", "A Day at Sevasi High School")}
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            {/* Section tabs — Primary / Secondary */}
            <div className="flex gap-2 mb-6 bg-muted/60 p-1 rounded-xl">
              {(["primary", "secondary"] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => { setActiveSection(s); setActiveDay("weekday"); }}
                  className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    activeSection === s
                      ? "bg-card shadow text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {s === "primary"
                    ? t("પ્રાથમિક (Primary)", "Primary School")
                    : t("માધ્યમિક (Secondary)", "Secondary School")}
                </button>
              ))}
            </div>

            {/* Day tabs — Weekday / Saturday */}
            <div className="flex gap-2 mb-5">
              {(["weekday", "saturday"] as const).map((d) => (
                <button
                  key={d}
                  onClick={() => setActiveDay(d)}
                  className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${
                    activeDay === d
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border/60 text-muted-foreground hover:text-foreground hover:border-border"
                  }`}
                >
                  <Clock className="w-3 h-3" />
                  {d === "weekday" ? t("સોમ–શુક્ર", "Mon–Fri") : t("શનિવાર", "Saturday")}
                </button>
              ))}
            </div>

            {/* Schedule table */}
            <div className="bg-card border border-border/60 rounded-2xl overflow-hidden shadow-sm">
              {/* Header */}
              <div className="grid grid-cols-[2rem_1fr_auto] gap-3 px-5 py-3 bg-primary/5 border-b border-border/40 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                <span>{t("ક્રમ", "No.")}</span>
                <span>{t("કાલાંશ", "Period")}</span>
                <span className="text-right">{t("સમય", "Time")}</span>
              </div>

              {/* Rows */}
              {(() => {
                const rows =
                  activeSection === "primary"
                    ? activeDay === "weekday" ? PRIMARY_WEEKDAY : PRIMARY_SATURDAY
                    : activeDay === "weekday" ? SECONDARY_WEEKDAY : SECONDARY_SATURDAY;

                return rows.map((row, i) => (
                  <div
                    key={i}
                    className={`grid grid-cols-[2rem_1fr_auto] gap-3 items-center px-5 py-3 border-b border-border/30 last:border-0 transition-colors ${
                      row.isBreak ? "bg-amber-50/60" : "hover:bg-muted/20"
                    }`}
                  >
                    <span className={`text-xs font-bold ${row.isBreak ? "text-amber-600" : "text-primary/60"}`}>
                      {row.minGu ? i + 1 : ""}
                    </span>
                    <div>
                      <p className={`text-sm font-semibold ${row.isBreak ? "text-amber-700" : "text-foreground"}`}>
                        {lang === "gu" ? row.labelGu : row.labelEn}
                      </p>
                      {row.minGu && (
                        <p className="text-[11px] text-muted-foreground mt-0.5">
                          {lang === "gu" ? row.minGu : row.minEn}
                        </p>
                      )}
                    </div>
                    <span className="font-mono text-xs font-semibold text-foreground/70 text-right whitespace-nowrap">
                      {row.time}
                    </span>
                  </div>
                ));
              })()}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default StudentLife;
