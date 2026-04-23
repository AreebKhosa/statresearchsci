import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, Phone, MapPin, CheckCircle, ArrowRight } from "lucide-react";

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your interest. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: InsertContactSubmission) => {
    contactMutation.mutate(data);
  };

  const collaborationOpportunities = [
    "Statistical consulting for research projects",
    "Keynote speaking at conferences", 
    "Joint research publications",
    "Data science training workshops"
  ];

  return (
    <section id="contact" className="pt-0 pb-16 md:pb-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-[#1d6fa4] opacity-[0.03] blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-[#15803d] opacity-[0.03] blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 fade-in">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-portfolio-secondary mb-3">
            Get in Touch
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-portfolio-primary leading-tight mb-5">
            Let's Collaborate
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Interested in statistical consulting, research collaboration, or speaking opportunities? Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-2 fade-in">
            <div className="space-y-6">
              <div 
                className="p-6 rounded-2xl border border-gray-100 bg-white transition-transform duration-300 hover:-translate-y-1"
                style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.03), 0 1px 4px rgba(0,0,0,0.02)" }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(29,111,164,0.1)", boxShadow: "0 4px 12px rgba(29,111,164,0.15)" }}>
                    <Mail className="h-5 w-5" style={{ color: "#1d6fa4" }} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Email</h3>
                    <a href="mailto:isrs.researchsci@gmail.com" className="text-lg font-bold text-gray-900 hover:text-portfolio-primary transition-colors">isrs.researchsci@gmail.com</a>
                  </div>
                </div>
              </div>

              <div 
                className="p-6 rounded-2xl border border-gray-100 bg-white transition-transform duration-300 hover:-translate-y-1"
                style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.03), 0 1px 4px rgba(0,0,0,0.02)" }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(21,128,61,0.1)", boxShadow: "0 4px 12px rgba(21,128,61,0.15)" }}>
                    <Phone className="h-5 w-5" style={{ color: "#15803d" }} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Phone</h3>
                    <div className="space-y-1">
                      <p className="text-lg font-bold text-gray-900">03343660481</p>
                      <p className="text-lg font-bold text-gray-900">03194071196</p>
                    </div>
                    <p className="text-xs font-medium text-gray-500 mt-2">Available for consultation calls</p>
                  </div>
                </div>
              </div>

              <div 
                className="p-6 rounded-2xl border border-gray-100 bg-white transition-transform duration-300 hover:-translate-y-1"
                style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.03), 0 1px 4px rgba(0,0,0,0.02)" }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(124,58,237,0.1)", boxShadow: "0 4px 12px rgba(124,58,237,0.15)" }}>
                    <MapPin className="h-5 w-5" style={{ color: "#7c3aed" }} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Location</h3>
                    <p className="text-lg font-bold text-gray-900">University of Sindh</p>
                    <p className="text-gray-600 mt-1">Jamshoro, Pakistan</p>
                    <p className="text-xs font-medium text-gray-500 mt-2">Available for remote collaboration</p>
                  </div>
                </div>
              </div>
            </div>

            <div 
              className="mt-8 p-8 rounded-2xl bg-gray-50 border border-gray-100"
            >
              <h3 className="text-lg font-bold text-portfolio-primary mb-6">Collaboration Opportunities</h3>
              <ul className="space-y-4">
                {collaborationOpportunities.map((opportunity, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#15803d] flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-gray-700 leading-snug">{opportunity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div 
            className="lg:col-span-3 bg-white p-8 sm:p-12 rounded-3xl border border-gray-100 fade-in"
            style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.06), 0 2px 10px rgba(0,0,0,0.03)" }}
          >
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Send a Message</h3>
              <p className="text-gray-500">Fill out the form below and I'll get back to you as soon as possible.</p>
            </div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-bold text-gray-700">Name <span className="text-red-500">*</span></FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your name" 
                            className="h-12 bg-gray-50 border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#1d6fa4]/20 focus:border-[#1d6fa4] transition-all"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-bold text-gray-700">Email <span className="text-red-500">*</span></FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="your.email@domain.com" 
                            className="h-12 bg-gray-50 border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#1d6fa4]/20 focus:border-[#1d6fa4] transition-all"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-bold text-gray-700">Subject <span className="text-red-500">*</span></FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-12 bg-gray-50 border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#1d6fa4]/20 focus:border-[#1d6fa4] transition-all">
                            <SelectValue placeholder="Select collaboration type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="consulting">Statistical Consulting</SelectItem>
                          <SelectItem value="research">Research Collaboration</SelectItem>
                          <SelectItem value="speaking">Speaking Opportunity</SelectItem>
                          <SelectItem value="training">Training Workshop</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-bold text-gray-700">Message <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <Textarea 
                          rows={6}
                          placeholder="Tell me about your project or collaboration idea..." 
                          className="bg-gray-50 border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#1d6fa4]/20 focus:border-[#1d6fa4] transition-all resize-none"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="pt-2">
                  <Button 
                    type="submit" 
                    disabled={contactMutation.isPending}
                    className="w-full bg-[#1d6fa4] hover:bg-[#0369a1] text-white h-14 rounded-xl font-bold text-lg transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-[#1d6fa4]/20 flex items-center justify-center gap-2"
                  >
                    {contactMutation.isPending ? "Sending..." : (
                      <>Send Message <ArrowRight className="h-5 w-5" /></>
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
