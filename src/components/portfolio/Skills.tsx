import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "cloud platforms",
      skills: ["Azure", "AWS", "Google Cloud Platform"]
    },
    {
      title: "devops tools",
      skills: ["Jenkins", "ArgoCD", "Kubernetes", "Docker", "Terraform", "Ansible", "Puppet"]
    },
    {
      title: "programming",
      skills: ["Python", "Bash", "PowerShell", "JavaScript", "YAML", "JSON"]
    },
    {
      title: "monitoring",
      skills: ["Prometheus", "Grafana", "SumoLogic", "ELK Stack", "Datadog", "Splunk", "Azure Monitor"]
    },
    {
      title: "databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Oracle", "SQL Server", "Cosmos DB", "Cassandra"]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">My Stack</h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="outline" 
                    className="px-6 py-3 text-base font-medium hover:bg-primary hover:text-primary-foreground transition-all cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;