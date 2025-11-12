import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-32">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="text-gradient">
                  Ramana Kumar Bingi
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground">
                Senior DevOps Engineer & Site Reliability Expert
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                10 years of experience designing CI/CD pipelines, automating deployments, 
                and managing cloud infrastructure with AWS, Azure, and Kubernetes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="glow-effect" asChild>
                <a href="#portfolio">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/Ramana_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  View Resume
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://github.com/rbt2d" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary to-accent p-1">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                  <img 
                    src="/profile-photo.jpeg" 
                    alt="Ramana Kumar Bingi - DevOps Engineer"
                    className="w-72 h-72 rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;