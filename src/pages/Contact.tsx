import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import FloatingShapes from "@/components/FloatingShapes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { SCHOOL_INFO } from "@/config/constants";
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

  const contactInfo = [
    { icon: MapPin, label: t("સરનામું", "Address"), value: t(SCHOOL_INFO.address, SCHOOL_INFO.addressEn) },
    { icon: Phone, label: t("ફોન", "Phone"), value: SCHOOL_INFO.phone },
    { icon: Mail, label: t("ઈમેલ", "Email"), value: SCHOOL_INFO.email },
    { icon: Clock, label: t("કાર્યાલય સમય", "Office Hours"), value: t("સોમ - શનિ: સવારે ૭:૦૦ - સાંજે ૬:૦૦ | રવિવાર: બંધ", "Mon - Sat: 7:00 AM - 6:00 PM | Sunday: Closed") },
    { icon: MessageCircle, label: t("WhatsApp", "WhatsApp"), value: SCHOOL_INFO.phone },
  ];

  return (
    <div className="pt-20 pb-16 lg:pb-0">
      {/* Header */}
      <section className="cta-surface py-20 sm:py-24 relative">
        <FloatingShapes variant="dark" density="medium" />
        <div className="section-container relative z-10">
          <AnimatedSection>
            <span className="section-label text-primary-foreground/40 before:bg-primary-foreground/20">
              {t("સંપર્ક", "Contact")}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-5">
              {t("અમારો સંપર્ક કરો", "Get In Touch")}
            </h1>
            <p className="text-sm sm:text-base text-primary-foreground/60 max-w-xl leading-relaxed">
              {t(
                "પ્રવેશ, શૈક્ષણિક, ફી, શાળા મુલાકાત, અથવા કોઈપણ પ્રશ્ન માટે અમારો સંપર્ક કરો. ફોન, ઈમેલ, WhatsApp, અથવા રૂબરૂ — અમે મદદ માટે તત્પર છીએ. અમે 24 કલાકમાં જવાબ આપીશું.",
                "Contact us for admissions, academics, fees, school visits, or any other queries. Via phone, email, WhatsApp, or in-person — we're here to help. We'll respond within 24 hours."
              )}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-background relative">
        <FloatingShapes variant="light" density="medium" />
        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <h2 className="font-heading text-xl font-bold text-foreground mb-3">
                  {t("સંપર્ક માહિતી", "Contact Information")}
                </h2>
                <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                  {t(
                    "કાર્યાલય સમય: સોમવાર થી શનિવાર, સવારે ૭:૦૦ થી સાંજે ૬:૦૦. રવિવાર અને જાહેર રજાઓ બંધ. ચુકવણી: ચેક / ડિમાન્ડ ડ્રાફ્ટ, રોકડ. તાકીદ માટે WhatsApp પર સંદેશ મોકલો.",
                    "Office hours: Monday to Saturday, 7:00 AM to 6:00 PM. Closed on Sundays and public holidays. Payment modes: Cheque / Demand Draft, Cash. For urgent matters, send a WhatsApp message."
                  )}
                </p>
              </AnimatedSection>

              <div className="space-y-5">
                {contactInfo.map((item, i) => (
                  <AnimatedSection key={i} delay={i * 0.08}>
                    <div className="flex items-start gap-4 group">
                      <div className="w-10 h-10 shrink-0 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <item.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-heading font-semibold text-muted-foreground/60 uppercase tracking-wider mb-1">{item.label}</p>
                        <p className="text-sm text-foreground">{item.value}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              {/* Map */}
              <AnimatedSection delay={0.3}>
                <div className="mt-8 rounded-xl overflow-hidden border border-border/60">
                  <iframe
                    title="Sevasi High School Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14767.5!2d73.1!3d22.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc5e7!2sSevasi%2C%20Vadodara!5e0!3m2!1sen!2sin!4v1700000000000"
                    width="100%"
                    height="240"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </AnimatedSection>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <div className="card-modern p-6 sm:p-8">
                  <h2 className="font-heading text-xl font-bold text-foreground mb-3">
                    {t("સંદેશ મોકલો", "Send a Message")}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                    {t(
                      "નીચેનું ફોર્મ ભરો. અમે 24 કલાકમાં આપનો જવાબ આપીશું. * ચિહ્ન ફરજિયાત ફીલ્ડ દર્શાવે છે.",
                      "Fill the form below. We'll respond within 24 hours. * indicates required fields."
                    )}
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-xs font-heading font-semibold">
                          {t("નામ", "Name")} *
                        </Label>
                        <Input id="name" required placeholder={t("આપનું નામ", "Your name")} className="h-11 rounded-lg" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-xs font-heading font-semibold">
                          {t("ફોન નંબર", "Phone Number")} *
                        </Label>
                        <Input id="phone" required type="tel" placeholder="+91" className="h-11 rounded-lg" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-xs font-heading font-semibold">
                          {t("ઈમેલ", "Email")}
                        </Label>
                        <Input id="email" type="email" placeholder="email@example.com" className="h-11 rounded-lg" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="grade" className="text-xs font-heading font-semibold">
                          {t("ધોરણ (પ્રવેશ માટે)", "Grade (for admission)")}
                        </Label>
                        <Input id="grade" placeholder={t("ધોરણ 1-12", "Grade 1-12")} className="h-11 rounded-lg" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-xs font-heading font-semibold">
                        {t("વિષય", "Subject")} *
                      </Label>
                      <Input id="subject" required placeholder={t("પ્રવેશ પૂછપરછ / ફી માહિતી / શાળા મુલાકાત / અન્ય", "Admission Enquiry / Fee Info / School Visit / Other")} className="h-11 rounded-lg" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-xs font-heading font-semibold">
                        {t("સંદેશ", "Message")} *
                      </Label>
                      <Textarea id="message" required rows={5} placeholder={t("આપનો સંદેશ અહીં લખો. પ્રવેશ પૂછપરછ માટે બાળકનું નામ, ઉંમર, અને હાલનું ધોરણ જણાવો.", "Write your message here. For admission enquiry, mention child's name, age, and current grade.")} className="rounded-lg resize-none" />
                    </div>
                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full btn-standard-lg font-heading font-semibold bg-primary hover:bg-primary/90 rounded-xl transition-all duration-300 hover:shadow-md"
                    >
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
