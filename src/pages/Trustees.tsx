import AnimatedSection from "@/components/AnimatedSection";
import FloatingShapes from "@/components/FloatingShapes";
import { useLanguage } from "@/contexts/LanguageContext";
import { Crown, ScrollText, Clock, Users } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type TrusteeRole = "president" | "secretary";

interface Trustee {
  serial: number;
  nameGu: string;
  nameEn: string;
  roleGu: string;
  roleEn: string;
  tenureGu: string;
  tenureEn: string;
  trusteeRole: TrusteeRole;
}

// ─── Trustees Data ────────────────────────────────────────────────────────────

const TRUSTEES: Trustee[] = [
  {
    serial: 1,
    nameGu: "શ્રી ઈશ્વર ભાઈ જે. પટેલ",
    nameEn: "Shri Ishwarbhai J. Patel",
    roleGu: "પ્રમુખશ્રી",
    roleEn: "President",
    tenureGu: "૧૯૬૭ – ૧૯૮૭",
    tenureEn: "1967 – 1987",
    trusteeRole: "president",
  },
  {
    serial: 2,
    nameGu: "શ્રી રમણભાઈ આર. પટેલ",
    nameEn: "Shri Ramanbhai R. Patel",
    roleGu: "મંત્રીશ્રી",
    roleEn: "Secretary",
    tenureGu: "૧૯૬૭ – ૧૯૮૭",
    tenureEn: "1967 – 1987",
    trusteeRole: "secretary",
  },
  {
    serial: 3,
    nameGu: "શ્રી કાંતિ ભાઈ જી. પટેલ",
    nameEn: "Shri Kantibhai J. Patel",
    roleGu: "પ્રમુખશ્રી",
    roleEn: "President",
    tenureGu: "૧૯૮૭ – ૧૯૯૧",
    tenureEn: "1987 – 1991",
    trusteeRole: "president",
  },
  {
    serial: 4,
    nameGu: "શ્રી શૈલેષ એફ. પટેલ",
    nameEn: "Shri Shaileshbhai F. Patel",
    roleGu: "મંત્રીશ્રી",
    roleEn: "Secretary",
    tenureGu: "૧૯૮૭ – ૧૯૯૧",
    tenureEn: "1987 – 1991",
    trusteeRole: "secretary",
  },
  {
    serial: 5,
    nameGu: "શ્રી દિલીપ ભાઈ સી. પટેલ",
    nameEn: "Shri Dilipbhai C. Patel",
    roleGu: "પ્રમુખશ્રી",
    roleEn: "President",
    tenureGu: "૧૯૯૧ - હજી હાલની",
    tenureEn: "1991 - Present",
    trusteeRole: "president",
  },
  {
    serial: 6,
    nameGu: "શ્રી રાજુ ભાઈ કે. પટેલ",
    nameEn: "Shri Rajubhai K. Patel",
    roleGu: "મંત્રીશ્રી",
    roleEn: "Secretary",
    tenureGu: "૧૯૯૧ - હજી હાલની",
    tenureEn: "1991 - Present",
    trusteeRole: "secretary",
  },
];

const TRUSTEE_ERAS = [
  { tenureEn: "1967 – 1987", tenureGu: "૧૯૬૭ – ૧૯૮૭", labelEn: "Founding Era", labelGu: "સ્થાપના કાળ" },
  { tenureEn: "1987 – 1991", tenureGu: "૧૯૮૭ – ૧૯૯૧", labelEn: "Second Era", labelGu: "બીજો કાળ" },
  { tenureEn: "1991 - Present", tenureGu: "૧૯૯૧ - હજી હાલની", labelEn: "Third Era", labelGu: "ત્રીજો કાળ" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

const Trustees = () => {
  const { t, lang } = useLanguage();

  return (
    <div className="pt-20 lg:pt-0 pb-16 lg:pb-0">

      {/* ── Hero ── */}
      <section className="page-header py-20 sm:py-28 relative overflow-hidden">
        <FloatingShapes variant="dark" density="medium" />
        <div className="section-container relative z-10">
          <AnimatedSection>
            <span className="section-label text-primary-foreground/40 before:bg-secondary/60">
              {t("કેળવણી મંડળ", "Kelavani Mandal")}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-5 max-w-2xl">
              {t("ટ્રસ્ટી મંડળ", "Board of Trustees")}
            </h1>
            <p className="text-base sm:text-lg text-primary-foreground/60 max-w-xl leading-relaxed mb-10">
              {t(
                "સ્થાપના ૧૯૬૭ થી સેવાસી હાઈ સ્કૂલના ઇતિહાસ ઘડનારા પ્રમુખ-મંત્રીઓ — જેમના સમર્પણ અને નેતૃત્વે આ સંસ્થાને ઊભી કરી.",
                "Presidents and Secretaries who shaped Sevasi High School since its founding in 1967 — whose dedication and leadership built this institution."
              )}
            </p>

            {/* Stats strip */}
            <div className="flex flex-wrap gap-6 sm:gap-10">
              {[
                { icon: Users, value: `${TRUSTEES.length}`, labelGu: "કુલ ટ્રસ્ટી", labelEn: "Total Trustees" },
                { icon: Crown, value: "3", labelGu: "પ્રમુખ", labelEn: "Presidents" },
                { icon: ScrollText, value: "3", labelGu: "મંત્રી", labelEn: "Secretaries" },
                { icon: Clock, value: "3", labelGu: "કાર્યકાળ", labelEn: "Eras" },
              ].map((s) => (
                <div key={s.labelEn} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                    <s.icon className="w-5 h-5 text-primary-foreground/70" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary-foreground">{s.value}</p>
                    <p className="text-xs text-primary-foreground/50">{lang === "gu" ? s.labelGu : s.labelEn}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Trustees Timeline ── */}
      <section className="section-padding bg-background relative">
        <FloatingShapes variant="light" density="low" />
        <div className="section-container relative z-10">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="section-label">{t("ઇતિહાસ", "History")}</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                {t("કેળવણી મંડળના સૂત્રઘારો", "Trustees Through the Years")}
              </h2>
              <p className="text-base text-muted-foreground mt-3 max-w-lg mx-auto">
                {t(
                  "૧૯૬૭ ની સ્થાપનાથી આજ સુધી — પ્રત્યેક કાર્યકાળ, પ્રત્યેક સૂત્રઘાર",
                  "From the founding in 1967 to the present — every era, every leader"
                )}
              </p>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-3 mb-12 justify-center">
              <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
                <Crown className="w-3.5 h-3.5" />
                {t("પ્રમુખ (President)", "Pramukh — President")}
              </span>
              <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-100 text-rose-800 text-xs font-semibold">
                <ScrollText className="w-3.5 h-3.5" />
                {t("મંત્રી (Secretary)", "Mantri — Secretary")}
              </span>
            </div>
          </AnimatedSection>

          {/* Timeline */}
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-border/60 hidden sm:block" />
            <div className="flex flex-col gap-12">
              {TRUSTEE_ERAS.map((era, eraIdx) => {
                const eraMembers = TRUSTEES.filter((tr) => tr.tenureEn === era.tenureEn);
                return (
                  <AnimatedSection key={era.tenureEn} delay={eraIdx * 0.12}>
                    <div className="sm:pl-16 relative">
                      {/* Timeline dot */}
                      <div className="hidden sm:flex absolute left-0 top-1 w-10 h-10 rounded-full bg-primary items-center justify-center shadow-md">
                        <Clock className="w-4 h-4 text-primary-foreground" />
                      </div>

                      {/* Era heading */}
                      <div className="flex flex-wrap items-center gap-3 mb-5">
                        <span className="font-heading font-bold text-xl text-foreground">
                          {lang === "gu" ? era.tenureGu : era.tenureEn}
                        </span>
                        <span className="px-3 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide">
                          {lang === "gu" ? era.labelGu : era.labelEn}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {eraMembers.map((tr) => {
                          const isPresident = tr.trusteeRole === "president";
                          return (
                            <div
                              key={tr.serial}
                              className={`bg-card rounded-2xl border-2 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 overflow-hidden ${isPresident ? "border-emerald-200" : "border-rose-200"
                                }`}
                            >
                              <div className={`h-1.5 ${isPresident ? "bg-gradient-to-r from-emerald-400 to-teal-500" : "bg-gradient-to-r from-rose-400 to-pink-500"}`} />
                              <div className="p-5 flex items-start gap-4">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0 shadow-sm ${isPresident ? "bg-gradient-to-br from-emerald-400 to-teal-600" : "bg-gradient-to-br from-rose-400 to-pink-600"}`}>
                                  {isPresident ? <Crown className="w-5 h-5" /> : <ScrollText className="w-5 h-5" />}
                                </div>
                                <div className="min-w-0 flex-1">
                                  <p className="font-heading font-bold text-foreground leading-snug">
                                    {lang === "gu" ? tr.nameGu : tr.nameEn}
                                  </p>
                                  <p className="text-xs text-muted-foreground font-gujarati mt-0.5">
                                    {lang === "gu" ? tr.nameEn : tr.nameGu}
                                  </p>
                                  <div className="flex flex-wrap items-center gap-2 mt-2.5">
                                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${isPresident ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"}`}>
                                      {lang === "gu" ? tr.roleGu : tr.roleEn}
                                    </span>
                                    <span className="flex items-center gap-1 text-xs text-muted-foreground bg-muted/60 px-2.5 py-0.5 rounded-full">
                                      <Clock className="w-3 h-3" />
                                      {lang === "gu" ? tr.tenureGu : tr.tenureEn}
                                    </span>
                                  </div>
                                </div>
                                <span className="shrink-0 w-6 h-6 rounded-md bg-muted/60 flex items-center justify-center text-xs font-bold text-muted-foreground">
                                  {tr.serial}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Legacy Banner ── */}
      <section className="section-padding bg-muted/30 relative">
        <FloatingShapes variant="light" density="low" />
        <div className="section-container relative z-10">
          <AnimatedSection>
            <div className="card-modern p-8 sm:p-12 text-center max-w-2xl mx-auto">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <Crown className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-foreground mb-3">
                {t("ઉત્કૃષ્ટ વારસો", "A Legacy of Excellence")}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(
                  "૧૯૬૭ ની સ્થાપનાથી આ ટ્રસ્ટીઓએ સેવાસી હાઈ સ્કૂલને એક આદર્શ શૈક્ષણિક સંસ્થા તરીકે ઊભી કરી. તેમની દ્રઢ ઇચ્છાશક્તિ, નિ:સ્વાર્થ સેવા અને શૈક્ષણિક સંકલ્પે હજારો વિદ્યાર્થીઓના ભવિષ્ય ઘડ્યા.",
                  "Since the founding in 1967, these trustees built Sevasi High School into a model educational institution. Their firm resolve, selfless service, and educational commitment shaped the futures of thousands of students."
                )}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
};

export default Trustees;
