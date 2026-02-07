import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import FloatingShapes from "@/components/FloatingShapes";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { CheckCircle, ArrowRight, FileText, Users, School, CreditCard, Clock, Phone, HelpCircle } from "lucide-react";

const Admissions = () => {
  const { t } = useLanguage();

  const steps = [
    { icon: FileText, step: "01", title: t("પૂછપરછ", "Enquiry"), desc: t("શાળા કાર્યાલય અથવા ઑનલાઇન ફોર્મ દ્વારા પૂછપરછ કરો. ફોન (0265-XXXXXXX), ઈમેલ, WhatsApp, અથવા રૂબરૂ મુલાકાત. અમારી ટીમ 24 કલાકમાં જવાબ આપશે. શાળાનું બ્રોશર અને ફી માળખું ઉપલબ્ધ.", "Enquire through school office or online form. Via phone (0265-XXXXXXX), email, WhatsApp, or in-person visit. Our team will respond within 24 hours. School brochure and fee structure available.") },
    { icon: Users, step: "02", title: t("ફોર્મ ભરો", "Fill Form"), desc: t("પ્રવેશ ફોર્મ ભરો અને જરૂરી દસ્તાવેજો સાથે જમા કરો. ઑનલાઇન અને ઑફલાઇન બંને વિકલ્પ. ફોર્મ ફી: ₹100. ફોર્મ કાર્યાલય સમય (સોમ-શનિ, 8AM-4PM) દરમિયાન જમા કરો.", "Fill the admission form and submit with required documents. Both online and offline options. Form fee: ₹100. Submit during office hours (Mon-Sat, 8AM-4PM).") },
    { icon: School, step: "03", title: t("મુલાકાત અને ઇન્ટરવ્યૂ", "Visit & Interview"), desc: t("શાળાની મુલાકાત લો — ક્લાસરૂમ, લેબ, ગ્રંથાલય, મેદાન જુઓ. આચાર્ય સાથે 15-20 મિનિટની ચર્ચા. વિદ્યાર્થી સાથે સરળ ઇન્ટરેક્ટિવ સેશન (ધોરણ 2+). શાળાનું વાતાવરણ, શિસ્ત, અને સુરક્ષા જાણો.", "Visit the school — see classrooms, labs, library, grounds. 15-20 minute discussion with the principal. Simple interactive session with student (Grade 2+). Experience the school environment, discipline, and safety.") },
    { icon: CreditCard, step: "04", title: t("પ્રવેશ અને ફી", "Admission & Fee"), desc: t("ફી ભરીને પ્રવેશ પ્રક્રિયા પૂર્ણ કરો. EMI સુવિધા ઉપલબ્ધ (3-6 હપ્તા). ગણવેશ, પુસ્તકો, અને ID કાર્ડ શાળામાંથી ઉપલબ્ધ. ઓરિએન્ટેશન પ્રોગ્રામ — વાલી અને વિદ્યાર્થી બંને માટે. બસ રૂટ માહિતી (જો ઉપલબ્ધ હોય).", "Complete admission by paying fees. EMI facility available (3-6 installments). Uniform, books, and ID card available from school. Orientation program — for both parents and students. Bus route information (if available).") },
  ];

  const documents = [
    t("જન્મ પ્રમાણપત્ર (ઓરિજિનલ + 2 ફોટોકોપી) — નગરપાલિકા/ગ્રામ પંચાયત દ્વારા", "Birth certificate (Original + 2 photocopies) — issued by Municipality/Gram Panchayat"),
    t("છેલ્લી શાળાનું LC (લિવિંગ સર્ટિફિકેટ) — ઓરિજિનલ (ધોરણ 2 થી ઉપર)", "Transfer Certificate (LC) from previous school — Original (Grade 2 and above)"),
    t("આધાર કાર્ડ — વિદ્યાર્થી અને બંને વાલી (ઓરિજિનલ + ફોટોકોપી)", "Aadhaar Card — Student and both parents (Original + Photocopy)"),
    t("જાતિ પ્રમાણપત્ર (SC/ST/OBC — લાગુ હોય તો) — તલાટી/મામલતદાર દ્વારા", "Caste certificate (SC/ST/OBC — if applicable) — issued by Talati/Mamlatdar"),
    t("પાસપોર્ટ સાઈઝ ફોટા — 6 નંગ (સફેદ બેકગ્રાઉન્ડ, તાજેતરના)", "Passport size photos — 6 nos (white background, recent)"),
    t("છેલ્લા વર્ષનું પરિણામ પત્રક / માર્કશીટ (ઓરિજિનલ + ફોટોકોપી)", "Previous year's result / mark sheet (Original + Photocopy)"),
    t("રહેઠાણનો પુરાવો — લાઈટ બિલ / રેશન કાર્ડ / ભાડા કરાર", "Address proof — Electricity bill / Ration card / Rent agreement"),
    t("EWS/BPL પ્રમાણપત્ર (લાગુ હોય તો) — ફી માફી/છૂટ માટે", "EWS/BPL certificate (if applicable) — for fee waiver/discount"),
    t("મેડિકલ ફિટનેસ સર્ટિફિકેટ — સરકારી ડૉક્ટર દ્વારા", "Medical fitness certificate — by government doctor"),
  ];

  const eligibility = [
    { grade: t("ધોરણ 1", "Grade 1"), age: t("5.5+ વર્ષ (જૂન 1 સુધી) — જન્મ પ્રમાણપત્ર ફરજિયાત", "5.5+ years (as of June 1) — Birth certificate mandatory") },
    { grade: t("ધોરણ 2-5", "Grade 2-5"), age: t("પાછલા ધોરણ ઉત્તીર્ણ — LC ફરજિયાત", "Passed previous grade — LC mandatory") },
    { grade: t("ધોરણ 6-8", "Grade 6-8"), age: t("પાછલા ધોરણ ઉત્તીર્ણ — LC + માર્કશીટ", "Passed previous grade — LC + Mark sheet") },
    { grade: t("ધોરણ 9", "Grade 9"), age: t("ધોરણ 8 ઉત્તીર્ણ (GSEB) — LC + માર્કશીટ + આધાર", "Grade 8 passed (GSEB) — LC + Mark sheet + Aadhaar") },
    { grade: t("ધોરણ 11 (વિજ્ઞાન)", "Grade 11 (Science)"), age: t("ધોરણ 10 — ઓછામાં ઓછા 50% (GSEB) — ગણિત + વિજ્ઞાનમાં B ગ્રેડ", "Grade 10 — minimum 50% (GSEB) — B grade in Math + Science") },
    { grade: t("ધોરણ 11 (સામાન્ય)", "Grade 11 (General)"), age: t("ધોરણ 10 ઉત્તીર્ણ (GSEB) — કોઈ ન્યૂનતમ ટકાવારી જરૂરી નથી", "Grade 10 passed (GSEB) — no minimum percentage required") },
  ];

  const faqs = [
    {
      q: t("શાળાનું માધ્યમ કયું છે?", "What is the medium of instruction?"),
      a: t("ગુજરાતી માધ્યમ. બધા વિષયો ગુજરાતી ભાષામાં ભણાવવામાં આવે છે. અંગ્રેજી અલગ વિષય તરીકે ધોરણ 1 થી શીખવાય છે.", "Gujarati medium. All subjects are taught in Gujarati. English is taught as a separate subject from Grade 1."),
    },
    {
      q: t("ફી EMI (હપ્તા) માં ભરી શકાય?", "Can fees be paid in EMI (installments)?"),
      a: t("હા, 3-6 હપ્તામાં ફી ભરી શકાય છે. વિગતો માટે કાર્યાલયનો સંપર્ક કરો. SC/ST/OBC અને EWS વિદ્યાર્થીઓ માટે ફી છૂટ ઉપલબ્ધ.", "Yes, fees can be paid in 3-6 installments. Contact office for details. Fee concession available for SC/ST/OBC and EWS students."),
    },
    {
      q: t("શાળા બસ સુવિધા છે?", "Is school bus facility available?"),
      a: t("અમુક વિસ્તારો માટે ખાનગી બસ વ્યવસ્થા ઉપલબ્ધ છે. રૂટ અને ફીની માહિતી કાર્યાલયમાંથી મળશે.", "Private bus arrangement available for some areas. Route and fee information available from office."),
    },
    {
      q: t("અન્ય શાળામાંથી ટ્રાન્સફર લઈ શકાય?", "Can transfer be done from another school?"),
      a: t("હા, GSEB માન્ય શાળામાંથી ટ્રાન્સફર શક્ય છે. LC અને છેલ્લા વર્ષની માર્કશીટ જરૂરી. ટ્રાન્સફર સત્ર શરૂઆતમાં (જૂન-જુલાઈ) પ્રાધાન્ય.", "Yes, transfer possible from GSEB recognized school. LC and last year's mark sheet required. Transfer preferred at start of session (June-July)."),
    },
  ];

  return (
    <div className="pt-20 pb-16 lg:pb-0">
      {/* Header */}
      <section className="cta-surface py-20 sm:py-24 relative">
        <FloatingShapes variant="dark" density="medium" />
        <div className="section-container relative z-10">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/10 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              <span className="text-xs font-medium text-primary-foreground/80">
                {t("૨૦૨૫-૨૬ પ્રવેશ ચાલુ", "2025-26 Admissions Open")}
              </span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-5">
              {t("પ્રવેશ પ્રક્રિયા", "Admission Process")}
            </h1>
            <p className="text-sm sm:text-base text-primary-foreground/60 max-w-xl leading-relaxed">
              {t(
                "સેવાસી હાઈ સ્કૂલમાં ધોરણ ૧ થી ૧૨ માટે પ્રવેશ ખુલ્લો છે. સરળ, પારદર્શક, અને ન્યાયી પ્રવેશ પ્રક્રિયા. દરેક વિદ્યાર્થીને સમાન તક. SC/ST/OBC/EWS વિદ્યાર્થીઓ માટે ફી છૂટ ઉપલબ્ધ.",
                "Admissions open for Grade 1 to 12 at Sevasi High School. Simple, transparent, and fair admission process. Equal opportunity for every student. Fee concession available for SC/ST/OBC/EWS students."
              )}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Important dates */}
      <section className="py-10 bg-background relative">
        <div className="section-container">
          <AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="card-modern p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">{t("ફોર્મ ઉપલબ્ધ", "Forms Available")}</p>
                  <p className="font-heading font-semibold text-sm text-foreground">{t("માર્ચ ૧ થી", "From March 1")}</p>
                </div>
              </div>
              <div className="card-modern p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">{t("છેલ્લી તારીખ", "Last Date")}</p>
                  <p className="font-heading font-semibold text-sm text-foreground">{t("મે ૩૧", "May 31")}</p>
                </div>
              </div>
              <div className="card-modern p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">{t("હેલ્પલાઇન", "Helpline")}</p>
                  <p className="font-heading font-semibold text-sm text-foreground">0265-XXXXXXX</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding bg-background relative">
        <FloatingShapes variant="light" density="low" />
        <div className="section-container max-w-4xl relative z-10">
          <AnimatedSection>
            <span className="section-label">{t("પ્રક્રિયા", "Process")}</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              {t("પ્રવેશના પગલાં", "Admission Steps")}
            </h2>
            <p className="text-sm text-muted-foreground mb-12 max-w-xl leading-relaxed">
              {t(
                "ચાર સરળ પગલાંમાં પ્રવેશ પ્રક્રિયા પૂર્ણ કરો. શરૂઆતથી અંત સુધી અમે માર્ગદર્શન આપીશું.",
                "Complete the admission process in four simple steps. We'll guide you from start to finish."
              )}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
            {steps.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="card-modern p-6 sm:p-7 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 shrink-0 rounded-xl bg-primary/5 flex items-center justify-center">
                      <s.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs font-heading font-bold text-primary/30">{s.step}</span>
                      <h3 className="font-heading font-semibold text-foreground mt-0.5 mb-2">{s.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="section-padding bg-muted/30 relative">
        <FloatingShapes variant="light" density="low" />
        <div className="section-container max-w-3xl relative z-10">
          <AnimatedSection>
            <span className="section-label">{t("પાત્રતા", "Eligibility")}</span>
            <h2 className="text-2xl font-bold text-foreground mb-3">
              {t("પાત્રતા માપદંડ", "Eligibility Criteria")}
            </h2>
            <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
              {t(
                "દરેક ધોરણ માટે ઉંમર અને શૈક્ષણિક લાયકાતના માપદંડ નીચે આપેલા છે. વિશેષ કિસ્સામાં આચાર્યશ્રી સાથે ચર્ચા કરો.",
                "Age and academic eligibility criteria for each grade are listed below. For special cases, discuss with the principal."
              )}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="card-modern overflow-hidden">
              <div className="grid grid-cols-2 gap-px bg-border/50">
                <div className="bg-primary/5 p-4">
                  <p className="text-xs font-heading font-semibold text-primary">{t("ધોરણ", "Grade")}</p>
                </div>
                <div className="bg-primary/5 p-4">
                  <p className="text-xs font-heading font-semibold text-primary">{t("લાયકાત", "Requirement")}</p>
                </div>
                {eligibility.map((e, i) => (
                  <div key={i} className="contents">
                    <div className="bg-card p-4 border-t border-border/30">
                      <p className="text-sm font-medium text-foreground">{e.grade}</p>
                    </div>
                    <div className="bg-card p-4 border-t border-border/30">
                      <p className="text-sm text-muted-foreground">{e.age}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Documents */}
      <section className="section-padding bg-background relative">
        <FloatingShapes variant="light" density="medium" />
        <div className="section-container max-w-3xl relative z-10">
          <AnimatedSection>
            <span className="section-label">{t("દસ્તાવેજો", "Documents")}</span>
            <h2 className="text-2xl font-bold text-foreground mb-3">
              {t("જરૂરી દસ્તાવેજો", "Required Documents")}
            </h2>
            <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
              {t(
                "પ્રવેશ સમયે નીચેના દસ્તાવેજો ફરજિયાત છે. ઓરિજિનલ અને ફોટોકોપી બંને લાવો. ચકાસણી પછી ઓરિજિનલ પરત કરવામાં આવશે.",
                "The following documents are mandatory at admission. Bring both originals and photocopies. Originals will be returned after verification."
              )}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="card-modern p-6 sm:p-7">
              <div className="space-y-3.5">
                {documents.map((doc, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <CheckCircle className="w-4 h-4 text-primary/60 mt-0.5 shrink-0 group-hover:text-primary transition-colors" />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-muted/30 relative">
        <FloatingShapes variant="light" density="low" />
        <div className="section-container max-w-3xl relative z-10">
          <AnimatedSection>
            <span className="section-label">{t("FAQ", "FAQ")}</span>
            <h2 className="text-2xl font-bold text-foreground mb-8">
              {t("વારંવાર પૂછાતા પ્રશ્નો", "Frequently Asked Questions")}
            </h2>
          </AnimatedSection>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="card-modern p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <HelpCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <p className="font-heading font-semibold text-sm text-foreground">{faq.q}</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-7">{faq.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-surface relative">
        <FloatingShapes variant="dark" density="medium" />
        <div className="section-container py-20 sm:py-24 relative z-10 text-center max-w-lg mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
              {t("પ્રવેશ માટે સંપર્ક કરો", "Contact for Admissions")}
            </h2>
            <p className="text-sm text-primary-foreground/60 mb-10 leading-relaxed">
              {t(
                "વધુ માહિતી, ફી માળખું, અથવા શાળા મુલાકાત માટે અમારો સંપર્ક કરો. અમે મદદ માટે તત્પર છીએ. કાર્યાલય સમય: સોમ-શનિ, 8AM-4PM.",
                "Contact us for more information, fee structure, or school visit. We're here to help. Office hours: Mon-Sat, 8AM-4PM."
              )}
            </p>
            <Link to="/contact">
              <Button className="btn-standard-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 font-heading font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                {t("સંપર્ક કરો", "Contact Us")}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
