import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Site Reliability Engineer",
      company: "AT&T",
      period: "January 2018 – Present",
      location: "Dallas, TX",
      achievements: [
        "Designed and maintained end-to-end CI/CD pipelines using Jenkins and Azure DevOps, automating testing and deployment processes, reducing deployment times by 40% and minimizing production errors by 35%.",
        "Implemented Infrastructure as Code using Terraform and Terragrunt, managing cloud resources across AWS and Azure, improving deployment consistency by 60% and enabling repeatable infrastructure provisioning.",
        "Architected AWS DataZone data governance platform using Terraform with reusable IaC modules for domain management, environment blueprints, and IAM policies, ensuring scalable and maintainable infrastructure.",
        "Optimized cloud resources by implementing cost-effective solutions, leading comprehensive cost analysis across AWS services, identifying 75% credit capacity headroom and establishing automated tracking mechanisms to prevent budget overruns.",
        "Proficiently managed Docker containers and Kubernetes clusters for application deployment, optimizing build processes and reducing build failures by 25% through automated testing protocols.",
        "Deployed comprehensive monitoring infrastructure using SumoLogic, CloudWatch, Prometheus, and Grafana with automated health checks and threshold-based alerts, reducing incident detection time and enabling proactive issue resolution.",
        "Implemented automated security compliance checks and vulnerability scanning, increasing compliance efficiency by 50% and reducing manual audit times by 20 hours monthly while ensuring secure code deployment practices.",
        "Collaborated with development, operations, and security teams to ensure smooth deployment workflows, troubleshoot system issues, and implement preventative measures for seamless operations.",
        "Fixed software performance errors, tracked system metrics, and implemented preventative measures to ensure smooth workflows and minimize downtime.",
        "Improved infrastructure deployment consistency using Terragrunt configuration inheritance patterns and Atlantis for PR-based infrastructure management workflows.",
        "Led migration of 50+ on-premises applications to Azure cloud infrastructure, reducing operational costs by 30% and enhancing scalability and performance.",
        "Mentored junior engineers on DevOps best practices, performance debugging, Kubernetes administration, and infrastructure automation, raising team-wide productivity and technical capabilities."
      ],
      current: true
    },
    {
      title: "Java Developer",
      company: "UMKC",
      period: "August 2016 – August 2017",
      location: "Kansas City, MO",
      achievements: [
        "Built and deployed Java Spring Boot microservices on AWS using CloudFormation for infrastructure management, ensuring consistent and repeatable deployments across environments.",
        "Configured and managed AWS infrastructure including Lambda, SQS, SNS, DynamoDB, ECS, and EC2 instances, implementing event-driven architectures to improve processing efficiency.",
        "Written Dockerfiles for containerizing applications and deploying on AWS ECS and EC2 instances, streamlining deployment processes and improving application reliability.",
        "Deployed custom scheduled jobs as AWS Lambda Functions, automating reporting processes and eliminating 10 hours of manual work weekly.",
        "Collaborated with cross-functional teams to troubleshoot deployment issues and optimize application performance in cloud environments."
      ],
      current: false
    },
    {
      title: "Java Engineer",
      company: "Blackbucks",
      period: "June 2015 – May 2016",
      location: "Hyderabad, India",
      achievements: [
        "Implemented CI/CD pipelines using Jenkins, automating build, testing, and deployment processes, reducing manual effort and accelerating release cycles.",
        "Developed Python scripts for automating regression tests and deployment tasks, improving operational efficiency and reducing testing time by 30%.",
        "Collaborated with development teams following Agile methodology, using Jira for project tracking and task management to ensure timely delivery.",
        "Utilized Log4J for application logging and monitoring, enhancing debugging capabilities and issue resolution speed.",
        "Developed comprehensive unit and integration test cases using JUnit, increasing test coverage and code reliability."
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