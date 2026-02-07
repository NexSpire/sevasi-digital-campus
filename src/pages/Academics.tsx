import AnimatedSection from "@/components/AnimatedSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

const Academics = () => {
  return (
    <div className="pt-20 pb-16 lg:pb-0">
      {/* Header */}
      <section className="bg-primary py-16 sm:py-20">
        <div className="section-container">
          <AnimatedSection>
            <p className="text-xs font-medium tracking-wider uppercase text-secondary mb-2">
              Academics
            </p>
            <h1 className="font-gujarati text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              શૈક્ષણિક માહિતી
            </h1>
            <p className="font-gujarati text-sm text-primary-foreground/70 max-w-xl leading-relaxed">
              અમારા અભ્યાસક્રમ, શિક્ષણ પદ્ધતિ અને મૂલ્યાંકન પ્રણાલી વિશે જાણો.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Curriculum Tabs */}
      <section className="section-padding bg-background">
        <div className="section-container max-w-3xl">
          <AnimatedSection>
            <p className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-2">
              Curriculum
            </p>
            <h2 className="font-gujarati text-2xl font-bold text-foreground mb-8">
              અભ્યાસક્રમ
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <Tabs defaultValue="primary" className="w-full">
              <TabsList className="w-full justify-start bg-muted/50 h-auto flex-wrap gap-1 p-1">
                <TabsTrigger value="primary" className="font-gujarati text-xs">પ્રાથમિક</TabsTrigger>
                <TabsTrigger value="upper" className="font-gujarati text-xs">ઉચ્ચ પ્રાથમિક</TabsTrigger>
                <TabsTrigger value="secondary" className="font-gujarati text-xs">માધ્યમિક</TabsTrigger>
                <TabsTrigger value="higher" className="font-gujarati text-xs">ઉચ્ચતર માધ્યમિક</TabsTrigger>
              </TabsList>

              <TabsContent value="primary" className="mt-6">
                <div className="font-gujarati text-sm text-muted-foreground leading-relaxed space-y-3">
                  <p className="font-medium text-foreground">ધોરણ 1 થી 5</p>
                  <p>ગુજરાતી, હિન્દી, અંગ્રેજી, ગણિત, પર્યાવરણ, ચિત્રકામ, સંગીત, અને શારીરિક શિક્ષણ.</p>
                  <p>પ્રવૃત્તિ આધારિત શિક્ષણ પદ્ધતિ દ્વારા મૂળભૂત ખ્યાલોને મજબૂત બનાવવામાં આવે છે.</p>
                </div>
              </TabsContent>

              <TabsContent value="upper" className="mt-6">
                <div className="font-gujarati text-sm text-muted-foreground leading-relaxed space-y-3">
                  <p className="font-medium text-foreground">ધોરણ 6 થી 8</p>
                  <p>ગુજરાતી, હિન્દી, અંગ્રેજી, ગણિત, વિજ્ઞાન, સામાજિક વિજ્ઞાન, સંસ્કૃત, અને કમ્પ્યુટર.</p>
                  <p>વિષયવસ્તુની ઊંડી સમજ અને વિશ્લેષણાત્મક વિચારસરણીનો વિકાસ.</p>
                </div>
              </TabsContent>

              <TabsContent value="secondary" className="mt-6">
                <div className="font-gujarati text-sm text-muted-foreground leading-relaxed space-y-3">
                  <p className="font-medium text-foreground">ધોરણ 9 અને 10</p>
                  <p>GSEB અભ્યાસક્રમ અનુસાર તમામ મુખ્ય વિષયો. બોર્ડ પરીક્ષાની તૈયારી માટે વિશેષ માર્ગદર્શન.</p>
                  <p>નિયમિત પરીક્ષાઓ, પ્રેક્ટિકલ, અને પ્રોજેક્ટ કાર્ય.</p>
                </div>
              </TabsContent>

              <TabsContent value="higher" className="mt-6">
                <div className="font-gujarati text-sm text-muted-foreground leading-relaxed space-y-3">
                  <p className="font-medium text-foreground">ધોરણ 11 અને 12</p>
                  <p>વિજ્ઞાન પ્રવાહ અને સામાન્ય પ્રવાહ ઉપલબ્ધ. GSEB બોર્ડ સાથે સંલગ્ન.</p>
                  <p>સ્પર્ધાત્મક પરીક્ષાઓ માટે વધારાની તૈયારી અને માર્ગદર્શન.</p>
                </div>
              </TabsContent>
            </Tabs>
          </AnimatedSection>
        </div>
      </section>

      <Separator />

      {/* Teaching & Assessment */}
      <section className="section-padding bg-card">
        <div className="section-container max-w-3xl">
          <AnimatedSection>
            <p className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-2">
              Methodology & Assessment
            </p>
            <h2 className="font-gujarati text-2xl font-bold text-foreground mb-8">
              શિક્ષણ પદ્ધતિ અને મૂલ્યાંકન
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="methodology">
                <AccordionTrigger className="font-gujarati text-sm font-medium">
                  શિક્ષણ પદ્ધતિ
                </AccordionTrigger>
                <AccordionContent className="font-gujarati text-sm text-muted-foreground leading-relaxed">
                  અમે પ્રવૃત્તિ આધારિત શિક્ષણ, જૂથ ચર્ચા, પ્રોજેક્ટ આધારિત
                  કાર્ય, અને ટેકનોલોજી સહાયિત શિક્ષણનો ઉપયોગ કરીએ છીએ.
                  વિદ્યાર્થીઓને માત્ર યાદ કરવા નહીં પણ સમજવા અને લાગુ કરવા
                  પ્રેરિત કરવામાં આવે છે.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="assessment">
                <AccordionTrigger className="font-gujarati text-sm font-medium">
                  મૂલ્યાંકન પ્રણાલી
                </AccordionTrigger>
                <AccordionContent className="font-gujarati text-sm text-muted-foreground leading-relaxed">
                  સતત અને વ્યાપક મૂલ્યાંકન (CCE) પદ્ધતિ. એકમ કસોટી,
                  સત્રાંત પરીક્ષા, પ્રોજેક્ટ, પ્રેક્ટિકલ, અને મૌખિક
                  મૂલ્યાંકન દ્વારા વિદ્યાર્થીઓના સર્વાંગી વિકાસનું
                  મૂલ્યાંકન.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="infrastructure">
                <AccordionTrigger className="font-gujarati text-sm font-medium">
                  માળખાકીય સુવિધાઓ
                </AccordionTrigger>
                <AccordionContent className="font-gujarati text-sm text-muted-foreground leading-relaxed">
                  આધુનિક વિજ્ઞાન પ્રયોગશાળા, કમ્પ્યુટર લેબ, સ્માર્ટ
                  ક્લાસરૂમ, સુસજ્જ ગ્રંથાલય, વિશાળ રમતગમત મેદાન, અને
                  સભાખંડ. વિદ્યાર્થીઓને શ્રેષ્ઠ શૈક્ષણિક વાતાવરણ મળે તેની
                  ખાતરી.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="extracurricular">
                <AccordionTrigger className="font-gujarati text-sm font-medium">
                  સહઅભ્યાસિક પ્રવૃત્તિઓ
                </AccordionTrigger>
                <AccordionContent className="font-gujarati text-sm text-muted-foreground leading-relaxed">
                  રમતગમત, સાંસ્કૃતિક કાર્યક્રમો, વિજ્ઞાન મેળો, વાંચન
                  સ્પર્ધા, વક્તૃત્વ સ્પર્ધા, અને સમાજસેવા પ્રવૃત્તિઓ દ્વારા
                  વિદ્યાર્થીઓના વ્યક્તિત્વ વિકાસ.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Academics;
