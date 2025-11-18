import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ramanakumarbingi@gmail.com",
      href: "mailto:ramanakumarbingi@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (816) 299-5454",
      href: "tel:+18162995454"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dallas, TX",
      href: null
    },
    {
      icon: Github,
      label: "GitHub",
      value: "rbt2d",
      href: "https://github.com/rbt2d"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "ramana-kumar-bingi",
      href: "https://www.linkedin.com/in/ramana-kumar-bingi/"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container-max">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold">Have a project in mind?</h2>
          <div>
            <a 
              href="mailto:ramanakumarbingi@gmail.com"
              className="text-2xl lg:text-3xl font-semibold text-primary hover:underline"
            >
              ramanakumarbingi@gmail.com
            </a>
          </div>
          
          {/* Contact Links */}
          <div className="flex justify-center gap-6 pt-8">
            <a 
              href="mailto:ramanakumarbingi@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>Email</span>
            </a>
            <a 
              href="tel:+18162995454"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>Phone</span>
            </a>
            <a 
              href="https://github.com/rbt2d"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/ramana-kumar-bingi/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;