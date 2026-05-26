import { useState } from "react";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll be in touch shortly.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-primary text-primary-foreground pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
        </div>
        <div className="container-wide relative">
          <div className="max-w-2xl">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-6">
              Get in Touch
            </p>
            <h1 className="heading-display text-primary-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-body-lg text-primary-foreground/70">
              We're here to help. Reach out to schedule a consultation or 
              learn more about how we can assist with your legal needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <ScrollReveal direction="left">
                <h2 className="heading-card text-foreground mb-8 sm:mb-10">
                  Contact Information
                </h2>
                <div className="space-y-6 sm:space-y-8">
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="p-3 sm:p-4 bg-accent/10 rounded-xl shrink-0">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-2">Address</h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        Level 5/101 Sussex Street<br />
                        Sydney NSW 2000, Australia
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="p-3 sm:p-4 bg-accent/10 rounded-xl shrink-0">
                      <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-2">Phone</h3>
                      <a
                        href="tel:+19786414537"
                        className="text-sm sm:text-base text-muted-foreground"
                      >
                        +1 (978) 641-4537
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="p-3 sm:p-4 bg-accent/10 rounded-xl shrink-0">
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-2">Email</h3>
                      <a
                        href="mailto:info@accelawchambers.com"
                        className="text-sm sm:text-base text-muted-foreground"
                      >
                        info@accelawchambers.com
                      </a>
                      <br />
                      <a
                        href="mailto:ACCECHAMBER@OUTLOOK.COM"
                        className="text-sm sm:text-base text-muted-foreground"
                      >
                        accechamber@outlook.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="p-3 sm:p-4 bg-accent/10 rounded-xl shrink-0">
                      <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-2">Hours</h3>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        Monday - Friday<br />
                        9:00 - 17:00 AEST
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ScrollReveal direction="right">
                <div className="card-elegant p-8 sm:p-10 md:p-14 rounded-2xl">
                  <h2 className="heading-card text-foreground mb-3">
                    Schedule a Consultation
                  </h2>
                  <p className="text-sm sm:text-base text-muted-foreground mb-8 sm:mb-10">
                    Fill out the form below and a member of our team will 
                    contact you within one business day.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                      <div className="space-y-2 sm:space-y-3">
                        <Label htmlFor="firstName" className="text-sm font-medium">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          required
                          className="h-12 sm:h-14 rounded-xl bg-secondary/50 border-border/50"
                        />
                      </div>
                      <div className="space-y-2 sm:space-y-3">
                        <Label htmlFor="lastName" className="text-sm font-medium">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          required
                          className="h-12 sm:h-14 rounded-xl bg-secondary/50 border-border/50"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                      <div className="space-y-2 sm:space-y-3">
                        <Label htmlFor="email" className="text-sm font-medium">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="h-12 sm:h-14 rounded-xl bg-secondary/50 border-border/50"
                        />
                      </div>
                      <div className="space-y-2 sm:space-y-3">
                        <Label htmlFor="phone" className="text-sm font-medium">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          className="h-12 sm:h-14 rounded-xl bg-secondary/50 border-border/50"
                        />
                      </div>
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      <Label htmlFor="subject" className="text-sm font-medium">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        required
                        className="h-12 sm:h-14 rounded-xl bg-secondary/50 border-border/50"
                      />
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      <Label htmlFor="message" className="text-sm font-medium">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        className="resize-none rounded-xl bg-secondary/50 border-border/50"
                        placeholder="Please describe how we can assist you..."
                      />
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      * Required fields. Your information will be kept confidential.
                    </p>
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto bg-primary text-primary-foreground rounded-full px-8"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] sm:h-[500px] bg-secondary flex items-center justify-center border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-muted" />
        <ScrollReveal className="text-center relative z-10 px-4">
          <div className="inline-flex p-4 sm:p-6 bg-accent/10 rounded-2xl mb-4 sm:mb-6">
            <MapPin className="h-8 w-8 sm:h-12 sm:w-12 text-accent" />
          </div>
           <p className="text-lg sm:text-xl text-foreground font-serif mb-2">
             Level 5/101 Sussex Street
           </p>
           <p className="text-sm sm:text-base text-muted-foreground">
             Sydney NSW 2000, Australia
           </p>
        </ScrollReveal>
      </section>
    </Layout>
  );
}
