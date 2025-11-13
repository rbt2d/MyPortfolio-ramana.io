import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior DevOps Engineer",
      company: "Pax8",
      period: "June 2025 – Present",
      location: "Remote",
      achievements: [
        "Architected AWS DataZone data governance platform using Terraform and Terragrunt, implementing reusable IaC modules for domain management, environment blueprints, and IAM policies.",
        "Led comprehensive cost optimization analysis for AWS MSK enhanced monitoring across CloudWatch, Sumo Logic, and MSK services, identifying 75% credit capacity headroom and establishing automated tracking mechanisms to prevent budget overruns.",
        "Deployed comprehensive monitoring infrastructure using SumoLogic, CloudWatch, and Slack integration with automated health checks and threshold-based alerts, reducing incident detection time and enabling proactive issue resolution.",
        "Established FinOps cost tracking mechanisms using AWS Cost Explorer with tag-based filtering and automated anomaly detection for greater than 20% week-over-week cost spikes, implementing monthly stakeholder reporting processes.",
        "Improved infrastructure deployment consistency by 60% using Terragrunt configuration inheritance patterns and Atlantis for PR-based infrastructure management workflows.",
        "Mentored junior developers on performance debugging and AI-first coding practices, raising team-wide productivity."
      ],
      current: true
    },
    {
      title: "Senior Site Reliability Engineer",
      company: "AT&T",
      period: "January 2018 – June 2025",
      location: "Dallas, TX",
      achievements: [
        "Implemented end-to-end CI/CD pipelines using Jenkins and Azure DevOps, reducing deployment times by 40%.",
        "Led a team of 5 engineers in migrating 50+ on-premises applications to Azure, reducing operational costs by 30% and enhancing scalability.",
        "Optimized build processes, resulting in a 25% reduction in build failures using automated testing protocols and Docker containers.",
        "Deployed Infrastructure as Code (IaC) using Terraform, improving deployment consistency by 60%.",
        "Reduced error rates in production environments by 35% by setting up detailed monitoring dashboards using Azure Monitor, KQL, and Application Insights.",
        "Automated security compliance checks, increasing compliance efficiency by 50% and reducing manual check times by 20 hours monthly.",
        "Mentored junior engineers, increasing team skillset in Kubernetes and Azure DevOps."
      ],
      current: false
    },
    {
      title: "Java Developer",
      company: "UMKC",
      period: "August 2016 – August 2017",
      location: "Kansas City, MO",
      achievements: [
        "Built and implemented Java Spring Boot-based REST microservices, enhancing application modularity and scalability by 40%.",
        "Developed event-driven platforms using AWS Lambda Functions, SQS, and SNS, improving processing efficiency and reducing latency.",
        "Configured infrastructure on AWS using CloudFormation, ensuring consistent and repeatable deployments, reducing setup time.",
        "Configured DynamoDB tables with various indexing and capacity units, optimizing database performance and scalability by 20%.",
        "Implemented AWS SDK for Java to utilize DynamoDB for non-relational data storage, enhancing data handling and storage efficiency.",
        "Deployed custom CRON jobs as AWS Lambda Functions for scheduled reports, automating reporting processes and saving 10 hours of manual work weekly.",
        "Written Dockerfiles for deploying applications on AWS CloudFormation, ECS, and EC2 instances, streamlining deployment processes and improving application reliability."
      ],
      current: false
    },
    {
      title: "Java Engineer",
      company: "Blackbucks",
      period: "June 2015 – May 2016",
      location: "Hyderabad, India",
      achievements: [
        "Implemented MVC architecture using Spring MVC, improving application structure and maintainability, reducing development time by 25%.",
        "Created data models and generated Hibernate mappings and domain objects, enhancing data manipulation and retrieval efficiency.",
        "Developed Python scripts for automating regression tests, improving test efficiency and reducing testing time by 30%.",
        "Developed unit/integration test cases using JUnit 3.8, increasing test coverage and code reliability.",
        "Used Jira for tracking progress and followed Agile methodology, improving project management and task tracking efficiency.",
        "Implemented Jenkins for CI/CD, automating build and deployment processes, reducing manual effort.",
        "Utilized Log4J for efficient logging and debugging, enhancing application monitoring and issue resolution speed."
      ],
      current: false
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building high-performance systems and driving measurable business outcomes through innovative engineering solutions.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-gradient border border-border/50 smooth-transition hover:border-primary/30">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      {exp.current && (
                        <Badge variant="default" className="text-xs">
                          Current
                        </Badge>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-primary">{exp.company}</h3>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;