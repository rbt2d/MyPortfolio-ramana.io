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
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">My Experience</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-border pb-8 last:pb-0">
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
              
              {/* Content */}
              <div className="space-y-4">
                {/* Header */}
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <h3 className="text-2xl font-bold">{exp.company}</h3>
                    {exp.current && (
                      <Badge variant="default" className="text-xs">
                        Current
                      </Badge>
                    )}
                  </div>
                  <p className="text-lg font-semibold text-primary">{exp.title}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Achievements */}
                <ul className="space-y-2 pt-4">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;