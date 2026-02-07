import AnimatedSection from "@/components/AnimatedSection";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="pt-20 pb-16 lg:pb-0">
      {/* Header */}
      <section className="bg-primary py-16 sm:py-20">
        <div className="section-container">
          <AnimatedSection>
            <p className="text-xs font-medium tracking-wider uppercase text-secondary mb-2">
              About Us
            </p>
            <h1 className="font-gujarati text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              અમારા વિશે
            </h1>
            <p className="font-gujarati text-sm text-primary-foreground/70 max-w-xl leading-relaxed">
              સેવાસી હાઈ સ્કૂલ વડોદરામાં ગુજરાતી માધ્યમ શિક્ષણ ક્ષેત્રે એક વિશ્વસનીય નામ છે.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatedSection>
              <Card className="border border-border shadow-sm h-full">
                <CardContent className="p-6 sm:p-8">
                  <p className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-2">
                    Vision — દ્રષ્ટિ
                  </p>
                  <h2 className="font-gujarati text-xl font-bold text-foreground mb-4">
                    અમારી દ્રષ્ટિ
                  </h2>
                  <p className="font-gujarati text-sm text-muted-foreground leading-relaxed">
                    દરેક વિદ્યાર્થીને જ્ઞાન, સંસ્કાર અને આત્મવિશ્વાસથી સજ્જ કરી
                    સમાજના જવાબદાર નાગરિક તરીકે તૈયાર કરવા. અમારો ઉદ્દેશ્ય
                    માત્ર પુસ્તકિયું જ્ઞાન નહીં, પરંતુ જીવનલક્ષી શિક્ષણ આપવાનો છે.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <Card className="border border-border shadow-sm h-full">
                <CardContent className="p-6 sm:p-8">
                  <p className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-2">
                    Mission — ધ્યેય
                  </p>
                  <h2 className="font-gujarati text-xl font-bold text-foreground mb-4">
                    અમારું ધ્યેય
                  </h2>
                  <p className="font-gujarati text-sm text-muted-foreground leading-relaxed">
                    ગુજરાતી માધ્યમમાં ઉત્તમ શૈક્ષણિક વાતાવરણ પ્રદાન કરવું,
                    વિદ્યાર્થીઓની સર્જનાત્મકતા અને વિચારશક્તિનો વિકાસ કરવો,
                    અને તેમને રાષ્ટ્રીય તથા આંતરરાષ્ટ્રીય સ્તરે સ્પર્ધાત્મક
                    બનાવવા.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-card">
        <div className="section-container max-w-3xl">
          <AnimatedSection>
            <p className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-2">
              Our Philosophy
            </p>
            <h2 className="font-gujarati text-2xl font-bold text-foreground mb-6">
              શાળાનું તત્વજ્ઞાન
            </h2>
            <div className="font-gujarati text-sm text-muted-foreground leading-relaxed space-y-4">
              <p>
                સેવાસી હાઈ સ્કૂલમાં અમે માનીએ છીએ કે શિક્ષણ માત્ર પરીક્ષાના
                પરિણામો પૂરતું મર્યાદિત નથી. અમારો અભિગમ સર્વાંગી વિકાસ પર
                કેન્દ્રિત છે — જેમાં શૈક્ષણિક ઉત્કૃષ્ટતા, નૈતિક મૂલ્યો,
                શારીરિક તંદુરસ્તી અને સામાજિક જવાબદારીનો સમાવેશ થાય છે.
              </p>
              <p>
                અમે દરેક બાળકની વ્યક્તિગત ક્ષમતાઓને ઓળખી તેને યોગ્ય દિશા
                આપવામાં વિશ્વાસ ધરાવીએ છીએ. અમારા શિક્ષકો વિદ્યાર્થીઓના
                માર્ગદર્શક અને પ્રેરણાસ્ત્રોત છે.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="section-padding bg-background">
        <div className="section-container max-w-3xl">
          <AnimatedSection>
            <p className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-2">
              Principal's Message
            </p>
            <h2 className="font-gujarati text-2xl font-bold text-foreground mb-6">
              આચાર્યનો સંદેશ
            </h2>
            <Separator className="mb-6" />
            <blockquote className="font-gujarati text-sm text-muted-foreground leading-relaxed border-l-2 border-primary pl-6 space-y-4">
              <p>
                "વિદ્યાર્થીમિત્રો અને વાલીઓ, સેવાસી હાઈ સ્કૂલના પરિવારમાં
                આપનું સ્વાગત છે. અમારી શાળા વર્ષોથી ગુજરાતી માધ્યમમાં
                ગુણવત્તાયુક્ત શિક્ષણ આપવા પ્રતિબદ્ધ છે."
              </p>
              <p>
                "અમારો પ્રયાસ દરેક વિદ્યાર્થીને એક સારા માણસ, એક સારા
                નાગરિક અને એક સારા વ્યાવસાયિક તરીકે તૈયાર કરવાનો છે.
                આપના સહકાર અને વિશ્વાસ માટે આભાર."
              </p>
            </blockquote>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default About;
