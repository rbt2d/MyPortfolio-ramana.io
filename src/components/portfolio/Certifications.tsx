import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Microsoft Certified: Azure AI Fundamentals",
      issuer: "Microsoft",
      level: "Fundamentals", 
      color: "text-blue-400",
      verificationLink: "https://www.linkedin.com/in/ramana-kumar-bingi/"
    },
    {
      title: "AWS Certified Developer – Associate",
      issuer: "Amazon Web Services", 
      level: "Associate",
      color: "text-green-400",
      verificationLink: "https://www.linkedin.com/in/ramana-kumar-bingi/"
    },
    {
      title: "AWS Certified DevOps Engineer – Professional",
      issuer: "Amazon Web Services",
      level: "Professional",
      color: "text-orange-400",
      verificationLink: "https://www.linkedin.com/in/ramana-kumar-bingi/"
    },
    {
      title: "Microsoft Certified: Azure Administrator Associate",
      issuer: "Microsoft",
      level: "Associate",
      color: "text-blue-400",
      verificationLink: "https://www.linkedin.com/in/ramana-kumar-bingi/"
    },
    {
      title: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      level: "Fundamentals",
      color: "text-blue-400",
      verificationLink: "https://www.linkedin.com/in/ramana-kumar-bingi/"
    },
    {
      title: "Microsoft Certified: Designing Microsoft Azure Infrastructure Solutions",
      issuer: "Microsoft",
      level: "Expert",
      color: "text-purple-400",
      verificationLink: "https://www.linkedin.com/in/ramana-kumar-bingi/"
    },
    {
      title: "Certified Professional Scrum Master",
      issuer: "Scrum.org",
      level: "Professional",
      color: "text-green-400",
      verificationLink: "https://www.linkedin.com/in/ramana-kumar-bingi/"
    }
  ];

  return (
    <section id="certifications" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Certifications</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="group p-8 border-2 border-border rounded-2xl hover:border-primary hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-500 bg-card cursor-default"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <Award className="h-7 w-7 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <Badge variant="outline" className="text-xs border-2 group-hover:border-primary/50 transition-colors">
                      {cert.level}
                    </Badge>
                  </div>
                  <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <a 
                href="https://www.linkedin.com/in/ramana-kumar-bingi/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                View All Certifications on LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;