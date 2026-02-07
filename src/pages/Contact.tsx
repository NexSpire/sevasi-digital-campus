import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SCHOOL_INFO } from "@/config/constants";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "સંદેશ મોકલવામાં આવ્યો",
        description: "અમે ટૂંક સમયમાં આપનો સંપર્ક કરીશું.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="pt-20 pb-16 lg:pb-0">
      {/* Header */}
      <section className="bg-primary py-16 sm:py-20">
        <div className="section-container">
          <AnimatedSection>
            <p className="text-xs font-medium tracking-wider uppercase text-secondary mb-2">
              Contact
            </p>
            <h1 className="font-gujarati text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              સંપર્ક
            </h1>
            <p className="font-gujarati text-sm text-primary-foreground/70 max-w-xl leading-relaxed">
              કોઈપણ પ્રશ્ન માટે અમારો સંપર્ક કરો. અમે મદદ માટે તત્પર છીએ.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-4">
              <AnimatedSection>
                <h2 className="font-gujarati text-xl font-bold text-foreground mb-6">
                  સંપર્ક માહિતી
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Address</p>
                      <p className="font-gujarati text-sm text-muted-foreground">
                        {SCHOOL_INFO.address}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Phone</p>
                      <p className="text-sm text-muted-foreground">{SCHOOL_INFO.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Email</p>
                      <p className="text-sm text-muted-foreground">{SCHOOL_INFO.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Office Hours</p>
                      <p className="font-gujarati text-sm text-muted-foreground">
                        સોમ - શનિ: સવારે 8:00 - સાંજે 4:00
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Map */}
              <AnimatedSection delay={0.2}>
                <div className="mt-6 rounded-lg overflow-hidden border border-border">
                  <iframe
                    title="Sevasi High School Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14767.5!2d73.1!3d22.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc5e7!2sSevasi%2C%20Vadodara!5e0!3m2!1sen!2sin!4v1700000000000"
                    width="100%"
                    height="220"
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
                <Card className="border border-border shadow-sm">
                  <CardContent className="p-6 sm:p-8">
                    <h2 className="font-gujarati text-xl font-bold text-foreground mb-6">
                      સંદેશ મોકલો
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="font-gujarati text-sm">
                            નામ
                          </Label>
                          <Input
                            id="name"
                            required
                            placeholder="આપનું નામ"
                            className="h-11 font-gujarati"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="font-gujarati text-sm">
                            ફોન નંબર
                          </Label>
                          <Input
                            id="phone"
                            required
                            type="tel"
                            placeholder="+91"
                            className="h-11"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="font-gujarati text-sm">
                          ઈમેલ
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="email@example.com"
                          className="h-11"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject" className="font-gujarati text-sm">
                          વિષય
                        </Label>
                        <Input
                          id="subject"
                          required
                          placeholder="પ્રવેશ પૂછપરછ"
                          className="h-11 font-gujarati"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message" className="font-gujarati text-sm">
                          સંદેશ
                        </Label>
                        <Textarea
                          id="message"
                          required
                          rows={4}
                          placeholder="આપનો સંદેશ અહીં લખો..."
                          className="font-gujarati resize-none"
                        />
                      </div>
                      <Button
                        type="submit"
                        disabled={loading}
                        className="w-full h-12 font-heading font-semibold bg-primary hover:bg-primary/90"
                      >
                        {loading ? "મોકલી રહ્યા છે..." : "સંદેશ મોકલો"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
