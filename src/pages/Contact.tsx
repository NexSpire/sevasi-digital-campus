import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import FloatingShapes from "@/components/FloatingShapes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Globe, Send, MessageCircle } from "lucide-react";
import { SCHOOL_INFO, SCHOOL_INFO_PARTIAL_DATA } from "@/config/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: t("સંદેશ મોકલવામાં આવ્યો", "Message Sent"),
        description: t("અમે ટૂંક સમયમાં આપનો સંપર્ક કરીશું.", "We will contact you shortly."),
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  const contactCards = [
    { icon: MapPin, label: t("સરનામું", "Address"), value: t(SCHOOL_INFO.address, SCHOOL_INFO.addressEn), color: "bg-blue-100 text-blue-600" },
    { icon: Mail, label: t("ઈમેલ", "Email"), value: SCHOOL_INFO.email, color: "bg-amber-100 text-amber-600" },
    { icon: Globe, label: t("વેબસાઇટ", "Website"), value: SCHOOL_INFO.website, color: "bg-emerald-100 text-emerald-600" },
    {
      icon: Clock,
      label: t("કાર્યાલય સમય", "Office Hours"),
      value: t(
        `સોમ–શુક્ર: ${SCHOOL_INFO.officeHours.weekdaysGujarati}\nશનિ: ${SCHOOL_INFO.officeHours.saturdayGujarati}\nરવિવાર: ${SCHOOL_INFO.officeHours.sundayGujarati}`,
        `Mon–Fri: ${SCHOOL_INFO.officeHours.weekdays}\nSat: ${SCHOOL_INFO.officeHours.saturday}\nSun: ${SCHOOL_INFO.officeHours.sunday}`,
      ),
      color: "bg-violet-100 text-violet-600",
    },
  ];

  return (
    <div className="pt-20 lg:pt-0 pb-16 lg:pb-0">
      {/* Header */}
      <section className="page-header py-20 sm:py-24 relative">
        <FloatingShapes variant="dark" density="medium" />
        <div className="section-container relative z-10">
          <AnimatedSection>
            <span className="section-label text-primary-foreground/40 before:bg-secondary/60">
              {t("સંપર્ક", "Contact")}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-5">
              {t("અમારો સંપર્ક કરો", "Get In Touch")}
            </h1>
            <p className="text-sm sm:text-base text-primary-foreground/50 max-w-xl leading-relaxed">
              {t(
                "પ્રવેશ, શૈક્ષણિક, ફી, શાળા મુલાકાત, અથવા કોઈપણ પ્રશ્ન માટે — ફોન, ઈમેલ, અથવા રૂબરૂ — અમે મદદ માટે તત્પર છીએ.",
                "For admissions, academics, fees, school visits, or any queries — via phone, email, or in-person — we're here to help."
              )}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-8 sm:py-10 bg-background">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactCards.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="card-modern p-5 h-full">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${item.color}`}>
                    <item.icon className="w-4.5 h-4.5" />
                  </div>
                  <p className="text-xs font-heading font-semibold text-muted-foreground/60 uppercase tracking-wider mb-1.5">{item.label}</p>
                  <p className="text-sm text-foreground leading-relaxed whitespace-pre-line">{item.value}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background relative">
        <FloatingShapes variant="light" density="medium" />
        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Left: Map + WhatsApp */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatedSection>
                <h2 className="font-heading text-xl font-bold text-foreground mb-2">
                  {t("શાળા સ્થાન", "School Location")}
                </h2>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  {t(
                    `${SCHOOL_INFO.address}. કુલ શિક્ષણ સમય: ${SCHOOL_INFO_PARTIAL_DATA.timings.weekly_hours.teaching.gu}.`,
                    `${SCHOOL_INFO.addressEn}. Total teaching hours: ${SCHOOL_INFO_PARTIAL_DATA.timings.weekly_hours.teaching.en}.`
                  )}
                </p>
              </AnimatedSection>

              {/* Map */}
              <AnimatedSection delay={0.15}>
                <div className="rounded-2xl overflow-hidden border border-border/50 shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7381.883973228874!2d73.11584732586566!3d22.318033689693532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc88a55555555%3A0x7544a645a194af90!2sSevasi%20High%20School!5e0!3m2!1sen!2sus!4v1775825826805!5m2!1sen!2sus"
                    className="w-full h-[280px] sm:h-[320px]"
                    style={{ border: 0 }}
                    loading="lazy"
                    title="Sevasi High School Location"
                  />
                </div>
              </AnimatedSection>

              {/* WhatsApp CTA */}
              <AnimatedSection delay={0.25}>
                <a
                  href="https://wa.me/919662543201?text=Hello%2C%20I%20want%20to%20enquire%20about%20admissions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-50 border border-emerald-100 hover:bg-emerald-100/60 transition-all duration-200 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-emerald-500 flex items-center justify-center shrink-0 shadow-sm">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-sm text-foreground">{t("WhatsApp પર સંપર્ક કરો", "Chat on WhatsApp")}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{t("તાત્કાલિક જવાબ મેળવો", "Get instant response")}</p>
                  </div>
                </a>
              </AnimatedSection>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <div className="card-modern p-6 sm:p-8">
                  <h2 className="font-heading text-xl font-bold text-foreground mb-2">
                    {t("સંદેશ મોકલો", "Send a Message")}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-7 leading-relaxed">
                    {t(
                      "નીચેનું ફોર્મ ભરો. અમે 24 કલાકમાં જવાબ આપીશું. * ફરજિયાત છે.",
                      "Fill the form below. We'll respond within 24 hours. * indicates required."
                    )}
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-xs font-heading font-semibold">
                          {t("નામ", "Name")} *
                        </Label>
                        <Input id="name" required placeholder={t("આપનું નામ", "Your name")} className="h-11 rounded-xl text-sm" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-xs font-heading font-semibold">
                          {t("ફોન નંબર", "Phone Number")} *
                        </Label>
                        <Input id="phone" required type="tel" placeholder="+91" className="h-11 rounded-xl text-sm" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-xs font-heading font-semibold">
                          {t("ઈમેલ", "Email")}
                        </Label>
                        <Input id="email" type="email" placeholder="email@example.com" className="h-11 rounded-xl text-sm" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="grade" className="text-xs font-heading font-semibold">
                          {t("ધોરણ (પ્રવેશ માટે)", "Grade (for admission)")}
                        </Label>
                        <Input id="grade" placeholder={t("ધોરણ 1-12", "Grade 1-12")} className="h-11 rounded-xl text-sm" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-xs font-heading font-semibold">
                        {t("વિષય", "Subject")} *
                      </Label>
                      <Input id="subject" required placeholder={t("પ્રવેશ / ફી / મુલાકાત / અન્ય", "Admission / Fee / Visit / Other")} className="h-11 rounded-xl text-sm" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-xs font-heading font-semibold">
                        {t("સંદેશ", "Message")} *
                      </Label>
                      <Textarea id="message" required rows={4} placeholder={t("આપનો સંદેશ અહીં લખો.", "Write your message here.")} className="rounded-xl resize-none text-sm" />
                    </div>
                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full btn-standard-lg font-heading font-semibold bg-primary hover:bg-primary/90 rounded-xl transition-all duration-300 hover:shadow-md text-sm"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      {loading ? t("મોકલી રહ્યા છે...", "Sending...") : t("સંદેશ મોકલો", "Send Message")}
                    </Button>
                  </form>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
