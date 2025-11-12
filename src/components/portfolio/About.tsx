import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-card/30">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about building robust, maintainable systems that drive measurable business outcomes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <User className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I am a results-driven DevOps Engineer with 10 years of experience in designing and implementing CI/CD pipelines, 
                  automating deployments, and managing cloud infrastructure. Proficient with tools like Jenkins, Docker, Kubernetes, 
                  and Terraform, and experienced in both Azure and AWS environments. Skilled in root-cause analysis, monitoring, and 
                  optimizing application performance with proven success in reducing deployment times by 40%, cutting operational costs 
                  by 30%, and improving deployment consistency by 60%. I thrive in fast-paced environments, leveraging AI-driven 
                  development workflows to reduce context switching and administrative overhead. Strong communicator with a proven 
                  track record of leading cross-functional teams to deliver high-quality solutions. My goal is to build robust, 
                  scalable infrastructure that drives business growth and operational excellence.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <GraduationCap className="h-6 w-6 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-6">Education</h3>
                <div className="space-y-6">
                  <Card className="card-gradient border border-border/50 smooth-transition hover:border-primary/30">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">M.S. Computer Science</h4>
                        <span className="text-sm text-muted-foreground">2018</span>
                      </div>
                      <p className="text-muted-foreground">University of Missouri – Kansas City</p>
                      <p className="text-xs text-muted-foreground mt-1">Kansas City, MO</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Relevant Coursework: Cloud Computing, DevOps Practices, Distributed Systems, 
                        Software Architecture, Performance Engineering
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;