import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-32 pb-20">
      <div className="container-max">
        <div className="flex flex-col items-center text-center space-y-12 max-w-6xl mx-auto">
          {/* Main Title */}
          <div className="space-y-6">
            <h1 className="text-7xl lg:text-8xl font-bold tracking-tight">
              DEVOPS
            </h1>
            <h1 className="text-7xl lg:text-8xl font-bold tracking-tight">
              ENGINEER
            </h1>
          </div>

          {/* Profile Photo */}
          <div className="relative">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20">
              <img 
                src="/profile-photo.jpeg" 
                alt="Ramana Kumar Bingi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Description */}
          <div className="max-w-3xl space-y-6">
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Hi! I'm <span className="text-foreground font-semibold">Ramana Kumar Bingi</span>. 
              A passionate DevOps Engineer & Site Reliability Expert with <span className="text-foreground font-semibold">10+ years</span> of 
              experience crafting robust CI/CD pipelines and cloud infrastructure. I specialize in AWS, Azure, Kubernetes, and Terraform, 
              while also bringing strong automation expertise in Jenkins, Docker, and Infrastructure as Code.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-4xl pt-8">
            <div className="space-y-2">
              <h3 className="text-5xl font-bold">50+</h3>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Projects Deployed</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-5xl font-bold">60%</h3>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Deployment Efficiency</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-5xl font-bold">10+</h3>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Years Experience</p>
            </div>
          </div>

          {/* Tagline */}
          <div className="max-w-3xl pt-8">
            <p className="text-base lg:text-lg text-muted-foreground italic border-l-4 border-primary pl-6">
              I believe in infrastructure-as-code and creating reliable, scalable systems that empower 
              development teams while solving real-world problems through thoughtful DevOps engineering.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                ramanakumarbingi@gmail.com
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;