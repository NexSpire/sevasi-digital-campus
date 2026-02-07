import AnimatedSection from "@/components/AnimatedSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

const Academics = () => {
  const { t } = useLanguage();

  const subjects = [
    {
      key: "primary",
      label: t("પ્રાથમિક", "Primary"),
      grade: t("ધોરણ 1 થી 5", "Grade 1 to 5"),
      subjects: t(
        "ગુજરાતી, હિન્દી, અંગ્રેજી, ગણિત, પર્યાવરણ, ચિત્રકામ, સંગીત, અને શારીરિક શિક્ષણ.",
        "Gujarati, Hindi, English, Mathematics, Environmental Studies, Drawing, Music, and Physical Education."
      ),
      approach: t(
        "પ્રવૃત્તિ આધારિત શિક્ષણ પદ્ધતિ દ્વારા મૂળભૂત ખ્યાલોને મજબૂત બનાવવામાં આવે છે. ક્રિયાત્મક શિક્ષણ અને રમત દ્વારા શીખવવાની પદ્ધતિ.",
        "Activity-based learning methodology strengthens fundamental concepts. Learning through practical activities and play-based methods."
      ),
    },
    {
      key: "upper",
      label: t("ઉચ્ચ પ્રાથમિક", "Upper Primary"),
      grade: t("ધોરણ 6 થી 8", "Grade 6 to 8"),
      subjects: t(
        "ગુજરાતી, હિન્દી, અંગ્રેજી, ગણિત, વિજ્ઞાન, સામાજિક વિજ્ઞાન, સંસ્કૃત, અને કમ્પ્યુટર.",
        "Gujarati, Hindi, English, Mathematics, Science, Social Science, Sanskrit, and Computer Studies."
      ),
      approach: t(
        "વિષયવસ્તુની ઊંડી સમજ અને વિશ્લેષણાત્મક વિચારસરણીનો વિકાસ. પ્રોજેક્ટ આધારિત કાર્ય અને જૂથ ચર્ચા.",
        "Developing deeper understanding and analytical thinking. Project-based work and group discussions."
      ),
    },
    {
      key: "secondary",
      label: t("માધ્યમિક", "Secondary"),
      grade: t("ધોરણ 9 અને 10", "Grade 9 and 10"),
      subjects: t(
        "GSEB અભ્યાસક્રમ અનુસાર તમામ મુખ્ય વિષયો. વિજ્ઞાન, ગણિત, સામાજિક વિજ્ઞાન, ભાષાઓ.",
        "All core subjects as per GSEB curriculum. Science, Mathematics, Social Science, Languages."
      ),
      approach: t(
        "બોર્ડ પરીક્ષાની તૈયારી માટે વિશેષ માર્ગદર્શન. નિયમિત પરીક્ષાઓ, પ્રેક્ટિકલ, અને પ્રોજેક્ટ કાર્ય. દર અઠવાડિયે ટેસ્ટ અને રિવિઝન.",
        "Special guidance for board exam preparation. Regular exams, practicals, and project work. Weekly tests and revision sessions."
      ),
    },
    {
      key: "higher",
      label: t("ઉચ્ચતર માધ્યમિક", "Higher Sec."),
      grade: t("ધોરણ 11 અને 12", "Grade 11 and 12"),
      subjects: t(
        "વિજ્ઞાન પ્રવાહ (ભૌતિક, રસાયણ, જીવ, ગણિત) અને સામાન્ય પ્રવાહ. GSEB બોર્ડ સાથે સંલગ્ન.",
        "Science stream (Physics, Chemistry, Biology, Maths) and General stream. Affiliated with GSEB Board."
      ),
      approach: t(
        "સ્પર્ધાત્મક પરીક્ષાઓ (NEET, JEE) માટે વધારાની તૈયારી અને માર્ગદર્શન. કારકિર્દી માર્ગદર્શન કાર્યક્રમ.",
        "Additional preparation and guidance for competitive exams (NEET, JEE). Career counseling programs."
      ),
    },
  ];

  const accordionItems = [
    {
      value: "methodology",
      title: t("શિક્ષણ પદ્ધતિ", "Teaching Methodology"),
      content: t(
        "અમે પ્રવૃત્તિ આધારિત શિક્ષણ, જૂથ ચર્ચા, પ્રોજેક્ટ આધારિત કાર્ય, અને ટેકનોલોજી સહાયિત શિક્ષણનો ઉપયોગ કરીએ છીએ. સ્માર્ટ ક્લાસરૂમ, ડિજિટલ કન્ટેન્ટ, અને ઇન્ટરેક્ટિવ સેશન દ્વારા વિદ્યાર્થીઓને માત્ર યાદ કરવા નહીં પણ સમજવા અને લાગુ કરવા પ્રેરિત કરવામાં આવે છે. દરેક વિષયમાં રિયલ-વર્લ્ડ એપ્લિકેશન દ્વારા શીખવવામાં આવે છે.",
        "We use activity-based learning, group discussions, project-based work, and technology-assisted teaching. Through smart classrooms, digital content, and interactive sessions, students are motivated to understand and apply rather than just memorize. Each subject is taught through real-world applications."
      ),
    },
    {
      value: "assessment",
      title: t("મૂલ્યાંકન પ્રણાલી", "Assessment System"),
      content: t(
        "સતત અને વ્યાપક મૂલ્યાંકન (CCE) પદ્ધતિ. એકમ કસોટી, સત્રાંત પરીક્ષા, પ્રોજેક્ટ, પ્રેક્ટિકલ, અને મૌખિક મૂલ્યાંકન દ્વારા વિદ્યાર્થીઓના સર્વાંગી વિકાસનું મૂલ્યાંકન. નિયમિત PTM (વાલી-શિક્ષક મુલાકાત) દ્વારા વાલીઓને પ્રગતિ વિશે જાણ.",
        "Continuous and Comprehensive Evaluation (CCE) system. Assessment through unit tests, semester exams, projects, practicals, and oral evaluation. Regular PTMs (Parent-Teacher Meetings) to inform parents about progress."
      ),
    },
    {
      value: "infrastructure",
      title: t("માળખાકીય સુવિધાઓ", "Infrastructure"),
      content: t(
        "આધુનિક વિજ્ઞાન પ્રયોગશાળા (ભૌતિક, રસાયણ, જીવ વિજ્ઞાન), 40+ કમ્પ્યુટર સાથે કમ્પ્યુટર લેબ, 15,000+ પુસ્તકો સાથે ગ્રંથાલય, LED પ્રોજેક્ટર સાથે સ્માર્ટ ક્લાસરૂમ, વિશાળ રમતગમત મેદાન, 500+ ક્ષમતા ધરાવતો સભાખંડ, અને CCTV સુરક્ષા.",
        "Modern science labs (Physics, Chemistry, Biology), computer lab with 40+ computers, library with 15,000+ books, smart classrooms with LED projectors, expansive sports grounds, auditorium with 500+ capacity, and CCTV security."
      ),
    },
    {
      value: "extracurricular",
      title: t("સહઅભ્યાસિક પ્રવૃત્તિઓ", "Co-Curricular Activities"),
      content: t(
        "રમતગમત (ક્રિકેટ, કબડ્ડી, ખો-ખો, એથ્લેટિક્સ), સાંસ્કૃતિક કાર્યક્રમો (નૃત્ય, સંગીત, નાટક), વિજ્ઞાન મેળો, ગણિત ઓલિમ્પિયાડ, વક્તૃત્વ અને નિબંધ સ્પર્ધા, NCC/NSS, અને સમાજસેવા પ્રવૃત્તિઓ.",
        "Sports (Cricket, Kabaddi, Kho-Kho, Athletics), Cultural events (Dance, Music, Drama), Science fair, Math Olympiad, Elocution and Essay competitions, NCC/NSS, and community service activities."
      ),
    },
    {
      value: "career",
      title: t("કારકિર્દી માર્ગદર્શન", "Career Guidance"),
      content: t(
        "ધોરણ 10 અને 12 ના વિદ્યાર્થીઓ માટે વ્યાવસાયિક માર્ગદર્શન કાર્યક્રમ. વિવિધ ક્ષેત્રોના નિષ્ણાતો દ્વારા સેમિનાર, કોલેજ પ્રવેશ માર્ગદર્શન, અને સ્પર્ધાત્મક પરીક્ષાની તૈયારી.",
        "Career counseling programs for Grade 10 and 12 students. Seminars by experts from various fields, college admission guidance, and competitive exam preparation support."
      ),
    },
  ];

  return (
    <div className="pt-20 pb-16 lg:pb-0">
      {/* Header */}
      <section className="cta-surface py-20 sm:py-24">
        <div className="section-container relative z-10">
          <AnimatedSection>
            <span className="section-label text-primary-foreground/40 before:bg-primary-foreground/20">
              {t("શૈક્ષણિક", "Academics")}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-5">
              {t("શૈક્ષણિક માહિતી", "Academic Information")}
            </h1>
            <p className="text-sm sm:text-base text-primary-foreground/60 max-w-xl leading-relaxed">
              {t(
                "GSEB સાથે સંલગ્ન, પ્રાથમિક થી ઉચ્ચતર માધ્યમિક સુધીનો સંપૂર્ણ અભ્યાસક્રમ. આધુનિક શિક્ષણ પદ્ધતિ અને સર્વાંગી મૂલ્યાંકન.",
                "Affiliated with GSEB, comprehensive curriculum from primary to higher secondary. Modern teaching methodology and holistic assessment."
              )}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Curriculum Tabs */}
      <section className="section-padding bg-background">
        <div className="section-container max-w-3xl">
          <AnimatedSection>
            <span className="section-label">{t("અભ્યાસક્રમ", "Curriculum")}</span>
            <h2 className="text-2xl font-bold text-foreground mb-10">
              {t("ધોરણ પ્રમાણે અભ્યાસક્રમ", "Grade-wise Curriculum")}
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <Tabs defaultValue="primary" className="w-full">
              <TabsList className="w-full justify-start bg-muted/50 h-auto flex-wrap gap-1 p-1.5 rounded-xl">
                {subjects.map((s) => (
                  <TabsTrigger key={s.key} value={s.key} className="text-xs rounded-lg px-4 py-2 data-[state=active]:bg-card data-[state=active]:shadow-sm">
                    {s.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {subjects.map((s) => (
                <TabsContent key={s.key} value={s.key} className="mt-8">
                  <div className="space-y-5">
                    <div>
                      <p className="font-heading font-bold text-foreground mb-1">{s.grade}</p>
                      <div className="h-px bg-border/50 my-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground/60 mb-2">
                        {t("વિષયો", "Subjects")}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{s.subjects}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground/60 mb-2">
                        {t("અભિગમ", "Approach")}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{s.approach}</p>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </AnimatedSection>
        </div>
      </section>

      {/* Details Accordion */}
      <section className="section-padding bg-muted/30">
        <div className="section-container max-w-3xl">
          <AnimatedSection>
            <span className="section-label">{t("વિગતો", "Details")}</span>
            <h2 className="text-2xl font-bold text-foreground mb-10">
              {t("શિક્ષણ પદ્ધતિ અને વધુ", "Teaching Methodology & More")}
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <Accordion type="single" collapsible className="w-full space-y-2">
              {accordionItems.map((item) => (
                <AccordionItem key={item.value} value={item.value} className="card-modern border-border/60 rounded-xl px-1 data-[state=open]:shadow-md transition-shadow duration-300">
                  <AccordionTrigger className="text-sm font-heading font-semibold px-5 py-4 hover:no-underline">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed px-5 pb-5">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Academics;
