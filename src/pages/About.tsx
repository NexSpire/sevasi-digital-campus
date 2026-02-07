import AnimatedSection from "@/components/AnimatedSection";
import FloatingShapes from "@/components/FloatingShapes";
import { useLanguage } from "@/contexts/LanguageContext";
import { Target, Eye, BookOpen, Users, Shield, Heart, Lightbulb, Star } from "lucide-react";

const About = () => {
  const { t } = useLanguage();

  const milestones = [
    { year: "1967", event: t("શાળાની સ્થાપના — પ્રાથમિક વિભાગ સાથે શરૂઆત", "School established — started with primary section") },
    { year: "1975", event: t("ઉચ્ચ પ્રાથમિક વિભાગ (ધોરણ 6-8) શરૂ", "Upper primary section (Grade 6-8) launched") },
    { year: "1985", event: t("માધ્યમિક વિભાગ (ધોરણ 9-10) શરૂ — GSEB સાથે સંલગ્ન", "Secondary section (Grade 9-10) launched — affiliated with GSEB") },
    { year: "1995", event: t("નવું મકાન બંધાયું — વિજ્ઞાન પ્રયોગશાળા શરૂ", "New building constructed — science lab launched") },
    { year: "2005", event: t("ઉચ્ચતર માધ્યમિક વિભાગ (ધોરણ 11-12) શરૂ — વિજ્ઞાન પ્રવાહ", "Higher secondary (Grade 11-12) launched — science stream") },
    { year: "2010", event: t("કમ્પ્યુટર લેબ — ૪૦+ કમ્પ્યુટર. ડિજિટલ શિક્ષણની શરૂઆત", "Computer lab with 40+ computers. Digital education begins") },
    { year: "2015", event: t("સ્માર્ટ ક્લાસરૂમ — LED પ્રોજેક્ટર અને ડિજિટલ બોર્ડ", "Smart classrooms — LED projectors and digital boards") },
    { year: "2018", event: t("સામાન્ય પ્રવાહ શરૂ — વધુ વિદ્યાર્થીઓને તક", "General stream launched — more opportunities for students") },
    { year: "2022", event: t("Wi-Fi કેમ્પસ, CCTV, અને RO વોટર સિસ્ટમ", "Wi-Fi campus, CCTV, and RO water system") },
    { year: "2024", event: t("નવી ગણિત લેબ, રોબોટિક્સ ક્લબ, અને ગ્રીન કેમ્પસ પ્રોજેક્ટ", "New math lab, robotics club, and green campus project") },
  ];

  const values = [
    { icon: Shield, title: t("શિસ્ત", "Discipline"), desc: t("સ્વ-શિસ્ત, સમયપાલન, અને જવાબદારીનું મૂલ્ય. દરેક વિદ્યાર્થી નિયમિત, સંગઠિત, અને જવાબદાર બને તે અમારું ધ્યેય. શાળાના નિયમો અને આચારસંહિતા દ્વારા ચારિત્ર્ય ઘડતર.", "Values of self-discipline, punctuality, and responsibility. Our goal is for every student to become regular, organized, and responsible. Character building through school rules and code of conduct.") },
    { icon: Heart, title: t("ઈમાનદારી", "Integrity"), desc: t("સત્ય, પ્રામાણિકતા, અને નૈતિકતાનું પાલન. દરેક કાર્યમાં ઈમાનદારી, પારદર્શિતા, અને ન્યાયનો આગ્રહ. વિદ્યાર્થીઓ, શિક્ષકો, અને વાલીઓ વચ્ચે વિશ્વાસનો સંબંધ.", "Adherence to truth, honesty, and ethics. Insistence on honesty, transparency, and justice in every action. Trust-based relationship between students, teachers, and parents.") },
    { icon: BookOpen, title: t("જ્ઞાન", "Knowledge"), desc: t("આજીવન શિક્ષણની ભાવના. માત્ર પરીક્ષા માટે નહીં, જીવન માટે શિક્ષણ. જિજ્ઞાસા, સર્જનાત્મકતા, અને વિવેચનાત્મક વિચારસરણીનો વિકાસ. વિજ્ઞાન, ટેકનોલોજી, કલા, અને સાહિત્ય — દરેક ક્ષેત્રમાં રુચિ કેળવવી.", "Spirit of lifelong learning. Education not just for exams, but for life. Developing curiosity, creativity, and critical thinking. Cultivating interest in science, technology, art, and literature.") },
    { icon: Users, title: t("સેવા", "Service"), desc: t("સમાજ પ્રત્યે જવાબદારી અને કૃતજ્ઞતા. રક્તદાન શિબિર, વૃક્ષારોપણ, સ્વચ્છતા અભિયાન, અને ગ્રામ મુલાકાત દ્વારા સામાજિક જવાબદારીનું શિક્ષણ. NSS, NCC, અને સ્કાઉટ-ગાઈડ પ્રવૃત્તિઓ.", "Responsibility and gratitude towards society. Teaching social responsibility through blood donation camps, tree planting, cleanliness drives, and village visits. NSS, NCC, and Scout-Guide activities.") },
    { icon: Lightbulb, title: t("નવીનતા", "Innovation"), desc: t("નવા વિચારો, ટેકનોલોજી, અને પદ્ધતિઓ અપનાવવાની તત્પરતા. STEM, રોબોટિક્સ, કોડિંગ, અને ડિજિટલ લિટરસી દ્વારા ૨૧મી સદીના કૌશલ્યો વિકસાવવા.", "Readiness to adopt new ideas, technology, and methods. Developing 21st-century skills through STEM, robotics, coding, and digital literacy.") },
    { icon: Star, title: t("ઉત્કૃષ્ટતા", "Excellence"), desc: t("દરેક કાર્યમાં શ્રેષ્ઠતાનો પ્રયાસ. શૈક્ષણિક, રમતગમત, સાંસ્કૃતિક — દરેક ક્ષેત્રમાં ઉત્તમ પ્રદર્શન. મધ્યમતા નહીં, ઉત્કૃષ્ટતા અમારું ધોરણ.", "Striving for excellence in everything. Outstanding performance in academics, sports, cultural — every field. Not mediocrity, but excellence is our standard.") },
  ];

  return (
    <div className="pt-20 pb-16 lg:pb-0">
      {/* Header */}
      <section className="cta-surface py-20 sm:py-24 relative">
        <FloatingShapes variant="dark" density="medium" />
        <div className="section-container relative z-10">
          <AnimatedSection>
            <span className="section-label text-primary-foreground/40 before:bg-primary-foreground/20">
              {t("અમારા વિશે", "About Us")}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-5">
              {t("અમારી ઓળખ", "Who We Are")}
            </h1>
             <p className="text-sm sm:text-base text-primary-foreground/60 max-w-xl leading-relaxed">
              {t(
                "સેવાસી હાઈ સ્કૂલ, સેવાસી, વડોદરા — ૧૯૬૭ થી ગુજરાતી માધ્યમ શિક્ષણ ક્ષેત્રે એક પ્રતિષ્ઠિત સંસ્થા. ૩.૯ સ્ટાર રેટિંગ (૨૨ રિવ્યૂ). પ્રાથમિક, માધ્યમિક, ઉચ્ચતર માધ્યમિક — રાજ્ય બોર્ડ (GSEB) સાથે સંલગ્ન. સોમ-શનિ: ૭AM-૬PM.",
                "Sevasi High School in Sewasi, Vadodara — a prestigious educational institution established in 1967. Rated 3.9 stars (22 reviews). Primary, Secondary, Higher Secondary — State Board (GSEB) affiliated. Mon-Sat: 7AM-6PM."
              )}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* School Philosophy */}
      <section className="section-padding bg-background relative">
        <FloatingShapes variant="light" density="low" />
        <div className="section-container relative z-10">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <span className="section-label">{t("શિક્ષણ ફિલોસોફી", "Our Philosophy")}</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                {t("વિદ્યા પરા દેવતા", "Vidya Para Devata")}
              </h2>
              <p className="text-sm text-muted-foreground leading-[1.9] mb-4">
                {t(
                  "\"વિદ્યા પરા દેવતા\" — જ્ઞાન એ સર્વોચ્ચ દેવતા છે. આ સૂત્ર અમારી શાળાના પાયામાં છે. અમે માનીએ છીએ કે સાચું શિક્ષણ માત્ર પુસ્તકિયું જ્ઞાન નથી — તે જીવન જીવવાની કળા છે, સમસ્યાઓ ઉકેલવાની ક્ષમતા છે, અને સમાજ પ્રત્યે જવાબદારીનું ભાન છે.",
                  "\"Vidya Para Devata\" — Knowledge is the supreme deity. This motto is the foundation of our school. We believe true education is not just textbook knowledge — it is the art of living, the ability to solve problems, and awareness of responsibility towards society."
                )}
              </p>
              <p className="text-sm text-muted-foreground leading-[1.9] mb-4">
                {t(
                  "અમારી શાળામાં દરેક વિદ્યાર્થીને એક અનન્ય વ્યક્તિ તરીકે જોવામાં આવે છે. દરેકની ક્ષમતા, રુચિ, અને સપનાં અલગ છે — અને અમે દરેકને તેમનો માર્ગ શોધવામાં મદદ કરીએ છીએ. અમારા શિક્ષકો માત્ર ભણાવતા નથી — તેઓ માર્ગદર્શક, પ્રેરક, અને મિત્ર છે.",
                  "At our school, every student is seen as a unique individual. Everyone has different abilities, interests, and dreams — and we help each one find their path. Our teachers don't just teach — they are guides, motivators, and friends."
                )}
              </p>
              <p className="text-sm text-muted-foreground leading-[1.9]">
                {t(
                  "ગુજરાતી ભાષામાં શિક્ષણ એ અમારું ગૌરવ છે. માતૃભાષામાં શિક્ષણ વિદ્યાર્થીઓની સમજ, અભિવ્યક્તિ, અને આત્મવિશ્વાસ વધારે છે. અમે ગુજરાતી ભાષા અને સંસ્કૃતિ સાથે આધુનિક જ્ઞાન અને ટેકનોલોજીનો સમન્વય કરીએ છીએ.",
                  "Education in Gujarati language is our pride. Mother tongue education enhances students' understanding, expression, and confidence. We integrate Gujarati language and culture with modern knowledge and technology."
                )}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-muted/30 relative">
        <FloatingShapes variant="light" density="medium" />
        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <AnimatedSection>
              <div className="card-modern p-7 sm:p-8 h-full">
                <div className="w-11 h-11 rounded-xl bg-primary/5 flex items-center justify-center mb-5">
                  <Eye className="w-5 h-5 text-primary" />
                </div>
                <span className="section-label">{t("દ્રષ્ટિ", "Vision")}</span>
                <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                  {t("અમારી દ્રષ્ટિ", "Our Vision")}
                </h2>
                <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    {t(
                      "દરેક વિદ્યાર્થીને જ્ઞાન, સંસ્કાર અને આત્મવિશ્વાસથી સજ્જ કરી સમાજના જવાબદાર નાગરિક તરીકે તૈયાર કરવા.",
                      "To equip every student with knowledge, values, and confidence to become responsible citizens of society."
                    )}
                  </p>
                  <p>
                    {t(
                      "અમારો ઉદ્દેશ્ય માત્ર પુસ્તકિયું જ્ઞાન નહીં, પરંતુ જીવનલક્ષી શિક્ષણ આપવાનો છે. દરેક બાળક વિશ્વાસ સાથે પોતાના સપનાં સાકાર કરી શકે તે અમારું ધ્યેય છે.",
                      "Our purpose extends beyond textbook learning to life-oriented education. We aim for every child to realize their dreams with confidence."
                    )}
                  </p>
                  <p>
                    {t(
                      "ગુજરાતી માધ્યમમાં વિશ્વસ્તરીય શિક્ષણ — તે અમારું સ્વપ્ન છે. ભાષા કોઈ અવરોધ નથી — તે શક્તિ છે. અમે ગુજરાતી ભાષામાં વિજ્ઞાન, ટેકનોલોજી, અને આધુનિક જ્ઞાન આપીને સાબિત કરવા માગીએ છીએ.",
                      "World-class education in Gujarati medium — that is our dream. Language is not a barrier — it is a strength. We aim to prove this by delivering science, technology, and modern knowledge in Gujarati."
                    )}
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="card-modern p-7 sm:p-8 h-full">
                <div className="w-11 h-11 rounded-xl bg-primary/5 flex items-center justify-center mb-5">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <span className="section-label">{t("ધ્યેય", "Mission")}</span>
                <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                  {t("અમારું ધ્યેય", "Our Mission")}
                </h2>
                <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    {t(
                      "ગુજરાતી માધ્યમમાં ઉત્તમ શૈક્ષણિક વાતાવરણ પ્રદાન કરવું. વિદ્યાર્થીઓની સર્જનાત્મકતા અને વિચારશક્તિનો વિકાસ કરવો.",
                      "To provide an excellent academic environment in Gujarati medium. To develop students' creativity and critical thinking."
                    )}
                  </p>
                  <p>
                    {t(
                      "તેમને રાષ્ટ્રીય તથા આંતરરાષ્ટ્રીય સ્તરે સ્પર્ધાત્મક બનાવવા. દરેક વિદ્યાર્થીની અનન્ય ક્ષમતાઓને ઓળખી તેને યોગ્ય દિશા આપવી.",
                      "To make them competitive at national and international levels. To recognize each student's unique abilities and guide them in the right direction."
                    )}
                  </p>
                  <p>
                    {t(
                      "આધુનિક ટેકનોલોજી, અનુભવી શિક્ષકો, અને મૂલ્ય આધારિત શિક્ષણ દ્વારા — સેવાસી હાઈ સ્કૂલ દરેક વિદ્યાર્થીને જીવનમાં સફળ થવા માટે તૈયાર કરે છે. અમે માત્ર ડિગ્રી નથી આપતા — અમે ભવિષ્ય ઘડીએ છીએ.",
                      "Through modern technology, experienced teachers, and value-based education — Sevasi High School prepares every student for success in life. We don't just award degrees — we shape futures."
                    )}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-background relative">
        <FloatingShapes variant="light" density="medium" />
        <div className="section-container relative z-10">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="section-label">{t("મૂલ્યો", "Values")}</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                {t("અમારા મૂળ મૂલ્યો", "Our Core Values")}
              </h2>
              <p className="text-sm text-muted-foreground mt-3 max-w-lg mx-auto">
                {t(
                  "આ મૂલ્યો અમારી શાળાના પાયામાં છે. દરેક શિક્ષક, વિદ્યાર્થી, અને કર્મચારી આ મૂલ્યોને જીવે છે અને પ્રસારિત કરે છે.",
                  "These values form the foundation of our school. Every teacher, student, and staff member lives and propagates these values."
                )}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((v, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <div className="feature-item h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 shrink-0 rounded-xl bg-primary/5 flex items-center justify-center">
                      <v.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-2">{v.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-muted/30 relative">
        <FloatingShapes variant="light" density="low" />
        <div className="section-container max-w-2xl relative z-10">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="section-label">{t("ઈતિહાસ", "History")}</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                {t("અમારી સફર", "Our Journey")}
              </h2>
              <p className="text-sm text-muted-foreground mt-3 max-w-md mx-auto">
                {t(
                  "૧૯૬૭ થી ૨૦૨૪ — ૫૫+ વર્ષની સફરમાં અમે સતત વિકાસ, નવીનતા, અને ઉત્કૃષ્ટતાના માર્ગે આગળ વધ્યા છીએ.",
                  "From 1967 to 2024 — in our 55+ year journey, we have consistently moved forward on the path of development, innovation, and excellence."
                )}
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-0">
            {milestones.map((m, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <div className="flex gap-6 items-start group">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-primary/20 group-hover:bg-primary transition-colors duration-300 shrink-0 mt-1.5" />
                    {i < milestones.length - 1 && <div className="w-px h-12 bg-border" />}
                  </div>
                  <div className="pb-8">
                    <p className="font-heading font-bold text-primary text-sm">{m.year}</p>
                    <p className="text-sm text-muted-foreground">{m.event}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="section-padding bg-background relative">
        <FloatingShapes variant="light" density="low" />
        <div className="section-container max-w-3xl relative z-10">
          <AnimatedSection>
            <span className="section-label">{t("આચાર્યનો સંદેશ", "Principal's Message")}</span>
            <h2 className="text-2xl font-bold text-foreground mb-8">
              {t("આચાર્યશ્રીનો સંદેશ", "Message from the Principal")}
            </h2>
            <div className="card-modern p-7 sm:p-8">
              <blockquote className="text-sm text-muted-foreground leading-[1.9] space-y-4 border-l-2 border-primary/20 pl-6">
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
              </blockquote>
              <div className="mt-6 pt-4 border-t border-border/50">
                <p className="font-heading font-semibold text-sm text-foreground">
                  <span className="text-foreground font-semibold">Lorem ipsum.</span>
                </p>
                <p className="text-xs text-muted-foreground">{t("આચાર્ય, સેવાસી હાઈ સ્કૂલ", "Principal, Sevasi High School")}</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default About;
