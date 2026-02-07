import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { Trophy, Music, Calendar, Users, Medal, Palette } from "lucide-react";

const StudentLife = () => {
  const { t } = useLanguage();

  const activities = [
    {
      icon: Trophy,
      title: t("રમતગમત", "Sports"),
      desc: t(
        "વિવિધ રમતગમત સ્પર્ધાઓમાં ભાગ લઈ વિદ્યાર્થીઓ શારીરિક અને માનસિક ક્ષમતા વિકસાવે છે. જિલ્લા અને રાજ્ય સ્તરની સ્પર્ધાઓમાં સતત ઉત્તમ પ્રદર્શન.",
        "Students develop physical and mental capabilities through various sports competitions. Consistently excellent performance in district and state level competitions."
      ),
      items: [
        t("ક્રિકેટ", "Cricket"), t("કબડ્ડી", "Kabaddi"), t("ખો-ખો", "Kho-Kho"),
        t("એથ્લેટિક્સ", "Athletics"), t("યોગ", "Yoga"), t("વોલીબોલ", "Volleyball"),
      ],
    },
    {
      icon: Music,
      title: t("સાંસ્કૃતિક પ્રવૃત્તિઓ", "Cultural Activities"),
      desc: t(
        "વાર્ષિક ઉત્સવ, પ્રજાસત્તાક દિન, સ્વતંત્રતા દિન, અને અન્ય પ્રસંગોએ વિદ્યાર્થીઓ તેમની કલા રજૂ કરે છે. દરેક વિદ્યાર્થીને મંચ પર પ્રદર્શનની તક.",
        "Students showcase their talents on Annual Day, Republic Day, Independence Day, and other occasions. Every student gets an opportunity to perform on stage."
      ),
      items: [
        t("નૃત્ય", "Dance"), t("સંગીત", "Music"), t("નાટક", "Drama"),
        t("વક્તૃત્વ", "Elocution"), t("ચિત્રકલા", "Art"), t("હસ્તકલા", "Craft"),
      ],
    },
    {
      icon: Calendar,
      title: t("વાર્ષિક કાર્યક્રમો", "Annual Events"),
      desc: t(
        "વર્ષ દરમિયાન વિવિધ શૈક્ષણિક અને સાંસ્કૃતિક કાર્યક્રમોનું આયોજન. દરેક કાર્યક્રમ વિદ્યાર્થીઓના વ્યક્તિત્વ વિકાસમાં ભૂમિકા ભજવે છે.",
        "Various educational and cultural events organized throughout the year. Each event plays a role in student personality development."
      ),
      items: [
        t("વિજ્ઞાન મેળો", "Science Fair"), t("વાર્ષિકોત્સવ", "Annual Day"),
        t("શિક્ષક દિન", "Teachers' Day"), t("બાળ દિન", "Children's Day"),
        t("ગણિત ઓલિમ્પિયાડ", "Math Olympiad"), t("પુસ્તક મેળો", "Book Fair"),
      ],
    },
  ];

  const achievements = [
    { icon: Medal, title: t("જિલ્લા કક્ષા ક્રિકેટ ચેમ્પિયન", "District Level Cricket Champion"), year: "2024" },
    { icon: Trophy, title: t("રાજ્ય કક્ષા વિજ્ઞાન મેળો — પ્રથમ", "State Level Science Fair — First"), year: "2024" },
    { icon: Palette, title: t("ચિત્ર સ્પર્ધા — ગોલ્ડ મેડલ", "Art Competition — Gold Medal"), year: "2023" },
    { icon: Users, title: t("NCC — બેસ્ટ કેડેટ એવોર્ડ", "NCC — Best Cadet Award"), year: "2023" },
  ];

  return (
    <div className="pt-20 pb-16 lg:pb-0">
      {/* Header */}
      <section className="cta-surface py-20 sm:py-24">
        <div className="section-container relative z-10">
          <AnimatedSection>
            <span className="section-label text-primary-foreground/40 before:bg-primary-foreground/20">
              {t("વિદ્યાર્થી જીવન", "Student Life")}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-5">
              {t("વિદ્યાર્થી જીવન", "Life at Sevasi")}
            </h1>
            <p className="text-sm sm:text-base text-primary-foreground/60 max-w-xl leading-relaxed">
              {t(
                "શૈક્ષણિક ઉત્કૃષ્ટતાની સાથે રમતગમત, સાંસ્કૃતિક પ્રવૃત્તિઓ, અને સમાજસેવા દ્વારા સર્વાંગી વિકાસ.",
                "Holistic development through sports, cultural activities, and community service alongside academic excellence."
              )}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Activities */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="space-y-5">
            {activities.map((a, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="card-modern p-6 sm:p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/5 flex items-center justify-center">
                      <a.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                        {a.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                        {a.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {a.items.map((item) => (
                          <span
                            key={item}
                            className="text-xs bg-muted/80 px-3 py-1.5 rounded-lg text-muted-foreground font-medium"
                          >
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
      <section className="section-padding bg-muted/30">
        <div className="section-container">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="section-label">{t("સિદ્ધિઓ", "Achievements")}</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                {t("તાજેતરની સિદ્ધિઓ", "Recent Achievements")}
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {achievements.map((a, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="feature-item flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <a.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-sm text-foreground mb-0.5">{a.title}</p>
                    <p className="text-xs text-muted-foreground">{a.year}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentLife;
