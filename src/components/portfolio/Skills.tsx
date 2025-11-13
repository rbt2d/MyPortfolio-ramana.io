import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Monitor, 
  Cloud, 
  Database, 
  Settings
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: Cloud,
      skills: ["Azure", "AWS", "Google Cloud Platform (GCP)"],
      color: "text-primary"
    },
    {
      title: "DevOps Tools",
      icon: Settings,
      skills: ["Jenkins", "ArgoCD", "Kubernetes", "Docker", "Terraform", "Ansible", "Puppet"],
      color: "text-accent"
    },
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "Bash", "PowerShell", "JavaScript", "YAML", "JSON"],
      color: "text-primary"
    },
    {
      title: "Monitoring & Logging",
      icon: Monitor,
      skills: ["Prometheus", "Grafana", "SumoLogic", "ELK Stack", "New Relic", "Datadog", "Splunk", "KQL", "Azure Monitor", "App Insights"],
      color: "text-accent"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["Oracle 12c/11g", "MySQL 5.x", "SQL Server 12.0", "Cassandra", "Cosmos DB", "MongoDB", "PostgreSQL"],
      color: "text-primary"
    }
  ];

  return (
    <section id="skills" className="section-padding bg-card/30">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building high-performance distributed systems and data platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="card-gradient border border-border/50 smooth-transition hover:border-primary/30 hover:scale-105"
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <IconComponent className={`h-8 w-8 ${category.color}`} />
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="text-xs smooth-transition hover:bg-primary/20"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;