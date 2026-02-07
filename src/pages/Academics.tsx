import AnimatedSection from "@/components/AnimatedSection";
import FloatingShapes from "@/components/FloatingShapes";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
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
        "ગુજરાતી (મૂળ ભાષા), હિન્દી (રાષ્ટ્રભાષા), અંગ્રેજી (તૃતીય ભાષા), ગણિત (મૂળભૂત સંખ્યા ખ્યાલો, ભૂમિતિ, માપ), પર્યાવરણ (વિજ્ઞાન + સામાજિક વિજ્ઞાનનો પાયો), ચિત્રકામ અને હસ્તકલા, સંગીત (દેશભક્તિ ગીત, પ્રાર્થના), શારીરિક શિક્ષણ (PT, યોગ, રમતો), અને નૈતિક શિક્ષણ.",
        "Gujarati (Mother tongue), Hindi (National language), English (Third language), Mathematics (Basic number concepts, geometry, measurement), Environmental Studies (Foundation of Science + Social Science), Drawing and Craft, Music (Patriotic songs, prayers), Physical Education (PT, Yoga, games), and Moral Education."
      ),
      approach: t(
        "પ્રવૃત્તિ આધારિત શિક્ષણ પદ્ધતિ દ્વારા મૂળભૂત ખ્યાલોને મજબૂત બનાવવામાં આવે છે. ક્રિયાત્મક શિક્ષણ અને રમત દ્વારા શીખવવાની પદ્ધતિ. TLM (Teaching Learning Material) — રંગીન ચાર્ટ, મોડેલ, ફ્લેશ કાર્ડ, પઝલ, અને બ્લોક્સ. વાર્તા કહેવા, ભૂમિકા-ભજવણી, અને જૂથ પ્રવૃત્તિઓ. દરેક વર્ગમાં 30-35 વિદ્યાર્થીઓ — વ્યક્તિગત ધ્યાન શક્ય.",
        "Activity-based learning methodology strengthens fundamental concepts. Learning through practical activities and play-based methods. TLM (Teaching Learning Material) — colorful charts, models, flash cards, puzzles, and blocks. Storytelling, role-playing, and group activities. 30-35 students per class — individual attention possible."
      ),
    },
    {
      key: "upper",
      label: t("ઉચ્ચ પ્રાથમિક", "Upper Primary"),
      grade: t("ધોરણ 6 થી 8", "Grade 6 to 8"),
      subjects: t(
        "ગુજરાતી (વ્યાકરણ, નિબંધ, પત્રલેખન), હિન્દી, અંગ્રેજી (Grammar, Composition, Reading), ગણિત (બીજગણિત, ભૂમિતિ, આંકડાશાસ્ત્ર), વિજ્ઞાન (ભૌતિક, રસાયણ, જીવ વિજ્ઞાનના પાયા), સામાજિક વિજ્ઞાન (ઈતિહાસ, ભૂગોળ, નાગરિકશાસ્ત્ર), સંસ્કૃત (ચોથી ભાષા), અને કમ્પ્યુટર (MS Office, ટાઇપિંગ, ઇન્ટરનેટ બેઝિક્સ).",
        "Gujarati (Grammar, Essay, Letter writing), Hindi, English (Grammar, Composition, Reading), Mathematics (Algebra, Geometry, Statistics), Science (Basics of Physics, Chemistry, Biology), Social Science (History, Geography, Civics), Sanskrit (Fourth language), and Computer (MS Office, Typing, Internet Basics)."
      ),
      approach: t(
        "વિષયવસ્તુની ઊંડી સમજ અને વિશ્લેષણાત્મક વિચારસરણીનો વિકાસ. પ્રોજેક્ટ આધારિત કાર્ય (દર સત્રમાં ઓછામાં ઓછા 2 પ્રોજેક્ટ), જૂથ ચર્ચા, પ્રયોગો, ક્ષેત્ર મુલાકાત, અને ડિજિટલ કન્ટેન્ટ. CCE (Continuous Comprehensive Evaluation) — યુનિટ ટેસ્ટ, ઓરલ, પ્રેક્ટિકલ, અને સત્રાંત પરીક્ષા. વિજ્ઞાન મેળો, ગણિત ઓલિમ્પિયાડ, ક્વિઝ સ્પર્ધા, અને વક્તૃત્વ.",
        "Deeper understanding and analytical thinking development. Project-based work (minimum 2 projects per semester), group discussions, experiments, field visits, and digital content. CCE (Continuous Comprehensive Evaluation) — unit tests, oral, practical, and semester exams. Science fair, Math Olympiad, Quiz competitions, and Elocution."
      ),
    },
    {
      key: "secondary",
      label: t("માધ્યમિક", "Secondary"),
      grade: t("ધોરણ 9 અને 10", "Grade 9 and 10"),
      subjects: t(
        "GSEB અભ્યાસક્રમ — ગુજરાતી (પ્રથમ ભાષા), અંગ્રેજી (દ્વિતીય ભાષા), ગણિત (બીજગણિત, ભૂમિતિ, ત્રિકોણમિતિ, આંકડાશાસ્ત્ર), વિજ્ઞાન અને ટેકનોલોજી (ભૌતિક, રસાયણ, જીવ વિજ્ઞાન + ટેકનોલોજી), સામાજિક વિજ્ઞાન (ઈતિહાસ, ભૂગોળ, અર્થશાસ્ત્ર, નાગરિકશાસ્ત્ર). બોર્ડ પરીક્ષા: 80 માર્ક્સ થિયરી + 20 માર્ક્સ ઇન્ટરનલ.",
        "GSEB Curriculum — Gujarati (First language), English (Second language), Mathematics (Algebra, Geometry, Trigonometry, Statistics), Science & Technology (Physics, Chemistry, Biology + Technology), Social Science (History, Geography, Economics, Civics). Board exam: 80 marks theory + 20 marks internal."
      ),
      approach: t(
        "બોર્ડ પરીક્ષાની તૈયારી માટે વિશેષ માર્ગદર્શન. દર અઠવાડિયે ટેસ્ટ (Weekly Test), માસિક પરીક્ષા (Monthly Exam), અને પ્રિલિમ પરીક્ષા. પાછલા 10 વર્ષના પ્રશ્નપત્રોનો અભ્યાસ. પ્રેક્ટિકલ પરીક્ષા માટે વિશેષ તૈયારી. નબળા વિદ્યાર્થીઓ માટે વધારાના ટ્યુશન (રીમીડિયલ ક્લાસ). ટોપર્સ માટે NTSE, NMMS તૈયારી.",
        "Special guidance for board exam preparation. Weekly tests, monthly exams, and preliminary exams. Study of last 10 years' question papers. Special preparation for practical exams. Extra tuition (remedial classes) for weak students. NTSE, NMMS preparation for toppers."
      ),
    },
    {
      key: "higher",
      label: t("ઉચ્ચતર માધ્યમિક", "Higher Sec."),
      grade: t("ધોરણ 11 અને 12", "Grade 11 and 12"),
      subjects: t(
        "વિજ્ઞાન પ્રવાહ: ભૌતિકશાસ્ત્ર, રસાયણશાસ્ત્ર, જીવવિજ્ઞાન (PCB) અથવા ગણિત (PCM), અંગ્રેજી. સામાન્ય પ્રવાહ: અર્થશાસ્ત્ર, વાણિજ્ય, આંકડાશાસ્ત્ર, મનોવિજ્ઞાન. GSEB બોર્ડ — 100 માર્ક્સ થિયરી + 30 માર્ક્સ પ્રેક્ટિકલ.",
        "Science stream: Physics, Chemistry, Biology (PCB) or Mathematics (PCM), English. General stream: Economics, Commerce, Statistics, Psychology. GSEB Board — 100 marks theory + 30 marks practical."
      ),
      approach: t(
        "NEET (મેડિકલ) અને JEE (એન્જિનિયરિંગ) માટે વધારાની તૈયારી. MCQ પ્રેક્ટિસ, મોક ટેસ્ટ, અને ઓનલાઇન ટેસ્ટ સિરીઝ. કારકિર્દી માર્ગદર્શન — કયા કોર્સમાં જવું, કઈ કોલેજ, કઈ પરીક્ષાઓ. ભૂતપૂર્વ વિદ્યાર્થીઓ (ડૉક્ટર, એન્જિનિયર) દ્વારા પ્રેરણા સેશન. કોલેજ એડમિશન ગાઇડન્સ, સ્કોલરશિપ માહિતી.",
        "Extra preparation for NEET (Medical) and JEE (Engineering). MCQ practice, mock tests, and online test series. Career guidance — which course, which college, which exams. Inspiration sessions by alumni (doctors, engineers). College admission guidance, scholarship information."
      ),
    },
  ];

  const accordionItems = [
    {
      value: "methodology",
      title: t("શિક્ષણ પદ્ધતિ", "Teaching Methodology"),
      content: t(
        "અમે બહુવિધ શિક્ષણ પદ્ધતિઓનો ઉપયોગ કરીએ છીએ:\n\n• પ્રવૃત્તિ આધારિત શિક્ષણ (Activity Based Learning) — કરીને શીખવું\n• જૂથ ચર્ચા અને સહયોગી શિક્ષણ (Collaborative Learning)\n• પ્રોજેક્ટ આધારિત કાર્ય (Project Based Learning) — દર સત્રમાં 2-3 પ્રોજેક્ટ\n• ટેકનોલોજી સહાયિત શિક્ષણ — સ્માર્ટ ક્લાસરૂમ, ડિજિટલ કન્ટેન્ટ, વિડિયો\n• ફ્લિપ્ડ ક્લાસરૂમ — ઘરે વિડિયો જોવો, વર્ગમાં ચર્ચા\n• ડિફરેન્શિયેટેડ ઇન્સ્ટ્રક્શન — હોશિયાર અને નબળા બંને માટે અલગ અભિગમ\n• રિયલ-વર્લ્ડ કનેક્શન — દરેક ખ્યાલને રોજિંદા જીવન સાથે જોડવો\n• પીઅર ટીચિંગ — વિદ્યાર્થીઓ એકબીજાને ભણાવે",
        "We use multiple teaching methodologies:\n\n• Activity Based Learning — learning by doing\n• Group discussions and Collaborative Learning\n• Project Based Learning — 2-3 projects per semester\n• Technology-assisted teaching — smart classrooms, digital content, videos\n• Flipped Classroom — watch videos at home, discuss in class\n• Differentiated Instruction — separate approach for advanced and struggling students\n• Real-world Connection — connecting every concept to daily life\n• Peer Teaching — students teaching each other"
      ),
    },
    {
      value: "assessment",
      title: t("મૂલ્યાંકન પ્રણાલી", "Assessment System"),
      content: t(
        "સતત અને વ્યાપક મૂલ્યાંકન (CCE) પદ્ધતિ:\n\n• સાપ્તાહિક ટેસ્ટ (Weekly Test) — દર શુક્રવારે\n• એકમ કસોટી (Unit Test) — દર મહિને\n• સત્રાંત પરીક્ષા (Semester Exam) — દર 6 મહિને\n• પ્રિલિમ પરીક્ષા (Prelim) — ધોરણ 10, 12 માટે બોર્ડ પહેલાં\n• પ્રોજેક્ટ મૂલ્યાંકન — દર સત્રમાં\n• પ્રેક્ટિકલ પરીક્ષા — વિજ્ઞાન, કમ્પ્યુટર\n• મૌખિક મૂલ્યાંકન (Oral) — ભાષા, વિજ્ઞાન\n• સ્વ-મૂલ્યાંકન અને પીઅર મૂલ્યાંકન\n\nPTM (Parent-Teacher Meeting) — દર 2 મહિને. વાલીઓને SMS/WhatsApp દ્વારા પ્રગતિ અને ઉપસ્થિતિની માહિતી.",
        "Continuous and Comprehensive Evaluation (CCE) system:\n\n• Weekly Test — every Friday\n• Unit Test — every month\n• Semester Exam — every 6 months\n• Prelim Exam — before board for Grade 10, 12\n• Project Assessment — every semester\n• Practical Exam — Science, Computer\n• Oral Assessment — Languages, Science\n• Self-assessment and Peer assessment\n\nPTM (Parent-Teacher Meeting) — every 2 months. Parents informed about progress and attendance via SMS/WhatsApp."
      ),
    },
    {
      value: "infrastructure",
      title: t("માળખાકીય સુવિધાઓ", "Infrastructure"),
      content: t(
        "• વિજ્ઞાન પ્રયોગશાળા — ભૌતિક, રસાયણ, જીવ વિજ્ઞાન માટે અલગ-અલગ. GSEB+ સ્તરના સાધનો.\n• કમ્પ્યુટર લેબ — ૪૦+ કમ્પ્યુટર, હાઇ-સ્પીડ ઇન્ટરનેટ, UPS બેકઅપ\n• ગ્રંથાલય — ૧૫,૦૦૦+ પુસ્તકો, 50+ સામયિકો, ડિજિટલ કેટેલોગ\n• સ્માર્ટ ક્લાસરૂમ — LED પ્રોજેક્ટર, ડિજિટલ બોર્ડ, ઑડિઓ-વિઝ્યુઅલ\n• ગણિત લેબ — 3D મોડેલ, ભૂમિતિ કિટ, ગણતરી સાધનો\n• Wi-Fi કેમ્પસ — સંપૂર્ણ કેમ્પસ કવરેજ\n• ૫૦૦+ ક્ષમતાનો સભાખંડ — AC, સાઉન્ડ સિસ્ટમ, સ્ટેજ\n• વિશાળ રમતગમત મેદાન — ક્રિકેટ, ફૂટબોલ, કબડ્ડી, ખો-ખો\n• CCTV — ૫૦+ કેમેરા, 24/7 નિગરાણી\n• RO શુદ્ધ પાણી — દરેક ફ્લોર પર\n• ફર્સ્ટ એઇડ રૂમ — પ્રશિક્ષિત નર્સ",
        "• Science Labs — Separate for Physics, Chemistry, Biology. GSEB+ level equipment.\n• Computer Lab — 40+ computers, high-speed internet, UPS backup\n• Library — 15,000+ books, 50+ periodicals, digital catalog\n• Smart Classrooms — LED projectors, digital boards, audio-visual\n• Math Lab — 3D models, geometry kits, calculation tools\n• Wi-Fi Campus — complete campus coverage\n• 500+ capacity Auditorium — AC, sound system, stage\n• Expansive Sports Ground — cricket, football, kabaddi, kho-kho\n• CCTV — 50+ cameras, 24/7 monitoring\n• RO Purified Water — on every floor\n• First Aid Room — trained nurse"
      ),
    },
    {
      value: "extracurricular",
      title: t("સહઅભ્યાસિક પ્રવૃત્તિઓ", "Co-Curricular Activities"),
      content: t(
        "અમે માનીએ છીએ કે શિક્ષણ = અભ્યાસ + પ્રવૃત્તિઓ. દરેક વિદ્યાર્થીને ઓછામાં ઓછી 1 સહઅભ્યાસિક પ્રવૃત્તિમાં ભાગ લેવાનું ફરજિયાત:\n\n🏏 રમતગમત: ક્રિકેટ, કબડ્ડી, ખો-ખો, એથ્લેટિક્સ, વોલીબોલ, ચેસ, યોગ\n🎭 સાંસ્કૃતિક: નૃત્ય (ગરબા, રાસ, લોકનૃત્ય), સંગીત, નાટક, ફેન્સી ડ્રેસ\n🔬 શૈક્ષણિક: વિજ્ઞાન મેળો, ગણિત ઓલિમ્પિયાડ, ક્વિઝ, ડિબેટ, વક્તૃત્વ\n🎨 કલાત્મક: ચિત્રકલા, હસ્તકલા, રંગોળી, મહેંદી\n🇮🇳 રાષ્ટ્રીય: NCC, NSS, સ્કાઉટ-ગાઈડ\n🌱 સામાજિક: રક્તદાન, વૃક્ષારોપણ, સ્વચ્છતા, ગ્રામ મુલાકાત\n📚 સાહિત્ય: નિબંધ સ્પર્ધા, કવિતા પઠન, વાર્તા લેખન, દીવાલ સામયિક",
        "We believe Education = Academics + Activities. Every student must participate in at least 1 co-curricular activity:\n\n🏏 Sports: Cricket, Kabaddi, Kho-Kho, Athletics, Volleyball, Chess, Yoga\n🎭 Cultural: Dance (Garba, Raas, Folk dance), Music, Drama, Fancy Dress\n🔬 Academic: Science Fair, Math Olympiad, Quiz, Debate, Elocution\n🎨 Artistic: Drawing, Craft, Rangoli, Mehndi\n🇮🇳 National: NCC, NSS, Scout-Guide\n🌱 Social: Blood donation, Tree planting, Cleanliness, Village visits\n📚 Literary: Essay competition, Poetry recitation, Story writing, Wall magazine"
      ),
    },
    {
      value: "career",
      title: t("કારકિર્દી માર્ગદર્શન", "Career Guidance"),
      content: t(
        "ધોરણ 10 અને 12 ના વિદ્યાર્થીઓ માટે વ્યાપક કારકિર્દી માર્ગદર્શન:\n\n• કારકિર્દી કાઉન્સેલિંગ સેલ — અઠવાડિક સેશન\n• વિવિધ ક્ષેત્રોના નિષ્ણાતો (ડૉક્ટર, એન્જિનિયર, CA, વકીલ) દ્વારા સેમિનાર\n• ભૂતપૂર્વ વિદ્યાર્થીઓ સાથે ઇન્ટરેક્ટિવ સેશન\n• NEET, JEE, GUJCET, CET ની પ્રારંભિક તૈયારી\n• કોલેજ એડમિશન પ્રક્રિયા — ACPC, મેરિટ, મેનેજમેન્ટ\n• સ્કોલરશિપ માહિતી — SC/ST/OBC, મેરિટ, EWS\n• એપ્ટિટ્યુડ ટેસ્ટ — વિદ્યાર્થીઓની ક્ષમતા અને રુચિ ઓળખવા\n• ડિપ્લોમા, ITI, B.Ed, D.El.Ed — વૈકલ્પિક કારકિર્દી માર્ગ\n• વાલી-શિક્ષક-વિદ્યાર્થી ત્રિપક્ષીય ચર્ચા",
        "Comprehensive career guidance for Grade 10 and 12 students:\n\n• Career Counseling Cell — weekly sessions\n• Seminars by experts from various fields (Doctors, Engineers, CAs, Lawyers)\n• Interactive sessions with alumni\n• Early preparation for NEET, JEE, GUJCET, CET\n• College admission process — ACPC, Merit, Management\n• Scholarship information — SC/ST/OBC, Merit, EWS\n• Aptitude tests — to identify students' abilities and interests\n• Diploma, ITI, B.Ed, D.El.Ed — alternative career paths\n• Parent-Teacher-Student tripartite discussions"
      ),
    },
    {
      value: "special",
      title: t("વિશેષ કાર્યક્રમો", "Special Programs"),
      content: t(
        "• રીમીડિયલ ક્લાસ — નબળા વિદ્યાર્થીઓ માટે વધારાના કાલાંશ (શાળા સમય પછી)\n• એન્રિચમેન્ટ ક્લાસ — હોશિયાર વિદ્યાર્થીઓ માટે એડવાન્સ ટોપિક\n• વાંચન સપ્તાહ — દર વર્ષે ગ્રંથાલય સપ્તાહ ઉજવણી\n• વિજ્ઞાન સપ્તાહ — પ્રયોગો, ડેમો, અને વિજ્ઞાન મેળો\n• ગણિત દિવસ — રામાનુજન જન્મ દિવસ ઉજવણી\n• પર્યાવરણ દિવસ — વૃક્ષારોપણ, જાગૃતિ રેલી\n• બંધારણ દિવસ — લોકશાહી મૂલ્યો\n• રાષ્ટ્રીય દિવસો — 15 ઓગસ્ટ, 26 જાન્યુઆરી, ગાંધી જયંતી",
        "• Remedial Classes — extra periods for struggling students (after school hours)\n• Enrichment Classes — advanced topics for gifted students\n• Reading Week — annual library week celebration\n• Science Week — experiments, demos, and science fair\n• Mathematics Day — Ramanujan birthday celebration\n• Environment Day — tree planting, awareness rally\n• Constitution Day — democratic values\n• National Days — August 15, January 26, Gandhi Jayanti"
      ),
    },
  ];

  return (
    <div className="pt-20 pb-16 lg:pb-0">
      {/* Header */}
      <section className="cta-surface py-20 sm:py-24 relative">
        <FloatingShapes variant="dark" density="medium" />
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
                "GSEB (ગુજરાત માધ્યમિક અને ઉચ્ચતર માધ્યમિક શિક્ષણ બોર્ડ) સાથે સંલગ્ન. પ્રાથમિક થી ઉચ્ચતર માધ્યમિક — ધોરણ ૧ થી ૧૨. વિજ્ઞાન (PCB/PCM) અને સામાન્ય પ્રવાહ ઉપલબ્ધ. આધુનિક શિક્ષણ પદ્ધતિ, સ્માર્ટ ક્લાસરૂમ, અને CCE આધારિત મૂલ્યાંકન.",
                "Affiliated with GSEB (Gujarat Secondary & Higher Secondary Education Board). Primary to Higher Secondary — Grade 1 to 12. Science (PCB/PCM) and General streams available. Modern teaching methodology, smart classrooms, and CCE-based assessment."
              )}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Curriculum Tabs */}
      <section className="section-padding bg-background relative">
        <FloatingShapes variant="light" density="low" />
        <div className="section-container max-w-3xl relative z-10">
          <AnimatedSection>
            <span className="section-label">{t("અભ્યાસક્રમ", "Curriculum")}</span>
            <h2 className="text-2xl font-bold text-foreground mb-3">
              {t("ધોરણ પ્રમાણે અભ્યાસક્રમ", "Grade-wise Curriculum")}
            </h2>
            <p className="text-sm text-muted-foreground mb-10 leading-relaxed max-w-xl">
              {t(
                "દરેક સ્તરે GSEB અભ્યાસક્રમ અનુસાર વિષયો, સાથે વધારાની સહઅભ્યાસિક પ્રવૃત્તિઓ. વિદ્યાર્થી-કેન્દ્રિત અભિગમ અને વ્યક્તિગત ધ્યાન.",
                "Subjects as per GSEB curriculum at every level, along with additional co-curricular activities. Student-centric approach and individual attention."
              )}
            </p>
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
                      <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{s.approach}</p>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </AnimatedSection>
        </div>
      </section>

      {/* Details Accordion */}
      <section className="section-padding bg-muted/30 relative">
        <FloatingShapes variant="light" density="medium" />
        <div className="section-container max-w-3xl relative z-10">
          <AnimatedSection>
            <span className="section-label">{t("વિગતો", "Details")}</span>
            <h2 className="text-2xl font-bold text-foreground mb-3">
              {t("શિક્ષણ પદ્ધતિ અને વધુ", "Teaching Methodology & More")}
            </h2>
            <p className="text-sm text-muted-foreground mb-10 leading-relaxed max-w-xl">
              {t(
                "અમારી શિક્ષણ પદ્ધતિ, મૂલ્યાંકન પ્રણાલી, માળખાકીય સુવિધાઓ, સહઅભ્યાસિક પ્રવૃત્તિઓ, અને વિશેષ કાર્યક્રમો વિશે વિગતવાર માહિતી.",
                "Detailed information about our teaching methodology, assessment system, infrastructure, co-curricular activities, and special programs."
              )}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <Accordion type="single" collapsible className="w-full space-y-2">
              {accordionItems.map((item) => (
                <AccordionItem key={item.value} value={item.value} className="card-modern border-border/60 rounded-xl px-1 data-[state=open]:shadow-md transition-shadow duration-300">
                  <AccordionTrigger className="text-sm font-heading font-semibold px-5 py-4 hover:no-underline">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed px-5 pb-5 whitespace-pre-line">
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
