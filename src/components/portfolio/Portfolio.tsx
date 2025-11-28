import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "AWS DataZone Data Governance",
      company: "AT&T",
      year: "2018-Present",
      technologies: ["Terraform", "Terragrunt", "AWS"]
    },
    {
      title: "Cloud Cost Optimization",
      company: "AT&T",
      year: "2018-Present",
      technologies: ["AWS Cost Explorer", "CloudWatch", "Monitoring"]
    },
    {
      title: "Azure Cloud Migration",
      company: "AT&T",
      year: "2018-Present",
      technologies: ["Azure", "Jenkins", "Terraform"]
    },
    {
      title: "CI/CD Pipeline Automation",
      company: "AT&T",
      year: "2018-Present",
      technologies: ["Jenkins", "Azure DevOps", "Docker"]
    },
    {
      title: "Infrastructure as Code",
      company: "AT&T",
      year: "2018-Present",
      technologies: ["Terraform", "Terragrunt", "Atlantis"]
    },
    {
      title: "AWS Serverless Platform",
      company: "UMKC",
      year: "2016-2017",
      technologies: ["Lambda", "DynamoDB", "CloudFormation"]
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-muted/30">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">SELECTED PROJECTS</h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative p-8 border-2 border-border rounded-2xl hover:border-primary hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500 cursor-pointer bg-card hover:bg-primary/5"
            >
              <div className="space-y-4">
                {/* Project Number */}
                <div className="text-sm font-mono text-primary font-bold group-hover:scale-110 transition-transform">
                  _{String(index + 1).padStart(2, '0')}.
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Company & Year */}
                <p className="text-sm text-muted-foreground font-medium">
                  {project.company} • {project.year}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline"
                      className="text-xs group-hover:border-primary/50 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 space-y-6">
          <h3 className="text-2xl font-bold">Want to see more?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="https://github.com/rbt2d" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View GitHub Profile
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/Ramana_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
