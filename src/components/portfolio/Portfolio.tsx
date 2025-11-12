import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Award, Zap, Brain } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "AWS DataZone Data Governance Platform",
      company: "Pax8",
      year: "2025",
      description: "Architected AWS DataZone data governance platform using Terraform and Terragrunt, implementing reusable IaC modules for domain management, environment blueprints, and IAM policies. Improved infrastructure deployment consistency by 60% using Terragrunt configuration inheritance patterns and Atlantis for PR-based infrastructure management workflows.",
      technologies: ["AWS DataZone", "Terraform", "Terragrunt", "IaC", "Atlantis", "IAM"],
      featured: true,
      icon: Award
    },
    {
      title: "AI-Driven MCP Server Integration",
      company: "Pax8",
      year: "2025", 
      description: "Pioneered AI-driven development workflows by implementing MCP server integration between Cursor IDE and JIRA, enabling developers to create EPICs and Stories directly from development environment. Reduced context switching and administrative overhead, significantly improving developer productivity and workflow efficiency.",
      technologies: ["Cursor IDE", "MCP Server", "JIRA", "AI-assisted Development", "Workflow Automation"],
      featured: true,
      icon: Brain
    },
    {
      title: "Azure Cloud Migration & Infrastructure",
      company: "AT&T",
      year: "2018-2025",
      description: "Led a team of 5 engineers in migrating 50+ on-premises applications to Azure, reducing operational costs by 30% and enhancing scalability. Implemented end-to-end CI/CD pipelines using Jenkins and Azure DevOps, reducing deployment times by 40%. Deployed Infrastructure as Code using Terraform, improving deployment consistency by 60%.",
      technologies: ["Azure", "Jenkins", "Azure DevOps", "Terraform", "CI/CD", "Cloud Migration"],
      featured: true,
      icon: Zap
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-card/30">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Key Achievements & Technical Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing impactful engineering solutions that drive measurable business outcomes and technical innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={index}
                className={`card-gradient border smooth-transition hover:scale-105 ${
                  project.featured 
                    ? "border-primary/50 shadow-lg shadow-primary/20" 
                    : "border-border/50 hover:border-primary/30"
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      {project.featured && (
                        <Badge variant="default" className="mb-3 text-xs">
                          Featured Project
                        </Badge>
                      )}
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <span className="text-xs text-muted-foreground">{project.company} • {project.year}</span>
                        </div>
                      </div>
                      <CardTitle className="text-lg leading-tight">
                        {project.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Card className="card-gradient border border-border/50 p-8 max-w-2xl mx-auto">
            <div className="space-y-4">
              <Github className="h-16 w-16 text-primary mx-auto" />
              <h3 className="text-2xl font-semibold">More Projects</h3>
              <p className="text-muted-foreground">
                Explore my complete portfolio of DevOps automation, cloud infrastructure, and CI/CD pipeline projects.
              </p>
              <Button size="lg" className="glow-effect" asChild>
                <a 
                  href="https://github.com/rbt2d" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Visit GitHub
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;