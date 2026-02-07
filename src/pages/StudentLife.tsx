import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Music, Calendar } from "lucide-react";

const activities = [
  {
    icon: Trophy,
    title: "રમતગમત",
    titleEn: "Sports",
    items: ["ક્રિકેટ", "કબડ્ડી", "ખો-ખો", "એથ્લેટિક્સ", "યોગ"],
    desc: "વિવિધ રમતગમત સ્પર્ધાઓમાં ભાગ લઈ વિદ્યાર્થીઓ શારીરિક અને માનસિક ક્ષમતા વિકસાવે છે.",
  },
  {
    icon: Music,
    title: "સાંસ્કૃતિક પ્રવૃત્તિઓ",
    titleEn: "Cultural Activities",
    items: ["નૃત્ય", "સંગીત", "નાટક", "વક્તૃત્વ", "ચિત્રકલા"],
    desc: "વાર્ષિક ઉત્સવ, પ્રજાસત્તાક દિન, અને અન્ય પ્રસંગોએ વિદ્યાર્થીઓ તેમની કલા રજૂ કરે છે.",
  },
  {
    icon: Calendar,
    title: "વાર્ષિક કાર્યક્રમો",
    titleEn: "Annual Events",
    items: ["વિજ્ઞાન મેળો", "વાર્ષિકોત્સવ", "શિક્ષક દિન", "બાળ દિન", "સ્વતંત્રતા દિન"],
    desc: "વર્ષ દરમિયાન વિવિધ શૈક્ષણિક અને સાંસ્કૃતિક કાર્યક્રમોનું આયોજન.",
  },
];

const StudentLife = () => {
  return (
    <div className="pt-20 pb-16 lg:pb-0">
      {/* Header */}
      <section className="bg-primary py-16 sm:py-20">
        <div className="section-container">
          <AnimatedSection>
            <p className="text-xs font-medium tracking-wider uppercase text-secondary mb-2">
              Student Life
            </p>
            <h1 className="font-gujarati text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              વિદ્યાર્થી જીવન
            </h1>
            <p className="font-gujarati text-sm text-primary-foreground/70 max-w-xl leading-relaxed">
              શૈક્ષણિક ઉત્કૃષ્ટતાની સાથે સર્વાંગી વિકાસ માટેની પ્રવૃત્તિઓ.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Activities */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activities.map((a, i) => (
              <AnimatedSection key={a.titleEn} delay={i * 0.1}>
                <Card className="border border-border shadow-sm h-full">
                  <CardContent className="p-6">
                    <a.icon className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-gujarati font-semibold text-foreground mb-1">
                      {a.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-4">{a.titleEn}</p>
                    <p className="font-gujarati text-sm text-muted-foreground leading-relaxed mb-4">
                      {a.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {a.items.map((item) => (
                        <span
                          key={item}
                          className="font-gujarati text-xs bg-muted px-2.5 py-1 rounded-sm text-muted-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentLife;
