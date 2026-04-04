import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { testimonialStore } from "@/lib/testimonials";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import AnimatedSection from "@/components/AnimatedSection";
import FloatingShapes from "@/components/FloatingShapes";
import { MessageSquare, User, Mail, Phone, Briefcase, CheckCircle, ArrowLeft } from "lucide-react";

const SubmitTestimonial = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    quote: "",
  });

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!form.name.trim()) {
      errs.name = t("નામ ફરજિયાત છે", "Name is required");
    } else if (form.name.trim().length < 2) {
      errs.name = t("નામ ઓછામાં ઓછું 2 અક્ષરનું હોવું જોઈએ", "Name must be at least 2 characters");
    }

    const hasEmail = form.email.trim().length > 0;
    const hasPhone = form.phone.trim().length > 0;

    if (!hasEmail && !hasPhone) {
      const msg = t("ઈમેલ અથવા ફોન નંબર ફરજિયાત છે", "Email or phone number is required");
      errs.email = msg;
      errs.phone = msg;
    }

    if (hasEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errs.email = t("માન્ય ઈમેલ દાખલ કરો", "Please enter a valid email address");
    }

    if (hasPhone && !/^[+]?[\d\s-]{7,15}$/.test(form.phone.trim())) {
      errs.phone = t("માન્ય ફોન નંબર દાખલ કરો", "Please enter a valid phone number");
    }

    if (!form.quote.trim()) {
      errs.quote = t("પ્રતિભાવ ફરજિયાત છે", "Testimonial is required");
    } else if (form.quote.trim().length < 20) {
      errs.quote = t("પ્રતિભાવ ઓછામાં ઓછો 20 અક્ષરનો હોવો જોઈએ", "Testimonial must be at least 20 characters");
    } else if (form.quote.trim().length > 1000) {
      errs.quote = t("પ્રતિભાવ 1000 અક્ષરથી વધુ ન હોવો જોઈએ", "Testimonial must not exceed 1000 characters");
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        if (field === "email" || field === "phone") {
          delete copy.email;
          delete copy.phone;
        }
        return copy;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setTimeout(() => {
      testimonialStore.create({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        role: form.role.trim(),
        quote: form.quote.trim(),
      });
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  if (submitted) {
    return (
      <div className="pt-20 pb-16 lg:pb-0">
        <section className="section-padding bg-background relative">
          <FloatingShapes variant="light" density="low" />
          <div className="section-container relative z-10 max-w-xl mx-auto text-center">
            <AnimatedSection>
              <div className="card-modern p-8 sm:p-12">
                <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="font-heading text-3xl font-bold text-foreground mb-3">
                  {t("આભાર!", "Thank You!")}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {t(
                    "તમારો પ્રતિભાવ સફળતાપૂર્વક મોકલવામાં આવ્યો છે. સમીક્ષા પછી તે વેબસાઇટ પર પ્રદર્શિત થશે.",
                    "Your testimonial has been submitted successfully. It will be displayed on the website after review."
                  )}
                </p>
                <Link to="/">
                  <Button className="btn-standard font-heading font-semibold rounded-xl">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    {t("મુખ્ય પેજ પર પાછા જાઓ", "Back to Home")}
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-16 lg:pb-0">
      {/* Header */}
      <section className="cta-surface py-20 sm:py-24 relative">
        <FloatingShapes variant="dark" density="medium" />
        <div className="section-container relative z-10">
          <AnimatedSection>
            <span className="section-label text-primary-foreground/40 before:bg-primary-foreground/20">
              {t("પ્રતિભાવ", "Testimonial")}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-5">
              {t("તમારો અનુભવ શેર કરો", "Share Your Experience")}
            </h1>
            <p className="text-lg sm:text-xl text-primary-foreground/60 max-w-xl leading-relaxed">
              {t(
                "સેવાસી હાઈ સ્કૂલ સાથેના તમારા અનુભવ વિશે જણાવો. તમારો પ્રતિભાવ અન્ય વાલીઓ અને વિદ્યાર્થીઓને મદદ કરશે.",
                "Tell us about your experience with Sevasi High School. Your feedback will help other parents and students."
              )}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding bg-background relative">
        <FloatingShapes variant="light" density="low" />
        <div className="section-container relative z-10 max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="card-modern p-6 sm:p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6 pb-5 border-b border-border/60">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground">
                    {t("પ્રતિભાવ ફોર્મ", "Testimonial Form")}
                  </h2>
                  <p className="text-base text-muted-foreground">
                    {t("* ચિહ્ન ફરજિયાત ફીલ્ડ દર્શાવે છે", "Fields marked * are required")}
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base font-heading font-semibold flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    {t("નામ", "Full Name")} *
                  </Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder={t("આપનું પૂરું નામ", "Your full name")}
                    className={`h-12 rounded-xl text-base ${errors.name ? "border-destructive" : ""}`}
                  />
                  {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base font-heading font-semibold flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary" />
                      {t("ઈમેલ", "Email")} *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="email@example.com"
                      className={`h-12 rounded-xl text-base ${errors.email ? "border-destructive" : ""}`}
                    />
                    {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-base font-heading font-semibold flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary" />
                      {t("ફોન", "Phone")} *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="+91 98765 43210"
                      className={`h-12 rounded-xl text-base ${errors.phone ? "border-destructive" : ""}`}
                    />
                    {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground -mt-2">
                  {t("ઈમેલ અથવા ફોન નંબરમાંથી ઓછામાં ઓછું એક ફરજિયાત છે", "At least one of email or phone number is required")}
                </p>

                {/* Role */}
                <div className="space-y-2">
                  <Label htmlFor="role" className="text-base font-heading font-semibold flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-primary" />
                    {t("ભૂમિકા / સંબંધ", "Role / Relation")}
                  </Label>
                  <Input
                    id="role"
                    value={form.role}
                    onChange={(e) => handleChange("role", e.target.value)}
                    placeholder={t("દા.ત. વાલી, ભૂતપૂર્વ વિદ્યાર્થી, શિક્ષક", "e.g. Parent, Alumni, Teacher")}
                    className="h-12 rounded-xl text-base"
                  />
                </div>

                {/* Testimonial */}
                <div className="space-y-2">
                  <Label htmlFor="quote" className="text-base font-heading font-semibold flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-primary" />
                    {t("તમારો અનુભવ / પ્રતિભાવ", "Your Experience / Testimonial")} *
                  </Label>
                  <Textarea
                    id="quote"
                    value={form.quote}
                    onChange={(e) => handleChange("quote", e.target.value)}
                    rows={5}
                    placeholder={t(
                      "સેવાસી હાઈ સ્કૂલ સાથેના તમારા અનુભવ વિશે લખો...",
                      "Write about your experience with Sevasi High School..."
                    )}
                    className={`rounded-xl text-base resize-none ${errors.quote ? "border-destructive" : ""}`}
                  />
                  <div className="flex justify-between">
                    {errors.quote && <p className="text-sm text-destructive">{errors.quote}</p>}
                    <p className="text-sm text-muted-foreground ml-auto">{form.quote.length}/1000</p>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 font-heading font-semibold text-base bg-primary hover:bg-primary/90 rounded-xl transition-all duration-300 hover:shadow-md"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      {t("મોકલી રહ્યા છે...", "Submitting...")}
                    </span>
                  ) : (
                    t("પ્રતિભાવ મોકલો", "Submit Testimonial")
                  )}
                </Button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default SubmitTestimonial;
