import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-32 pb-20 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none"></div>
      
      <div className="container-max relative z-10">
        <div className="flex flex-col items-center text-center space-y-12 max-w-6xl mx-auto">
          {/* Main Title */}
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-7xl lg:text-9xl font-bold tracking-tight bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
              DEVOPS
            </h1>
            <h1 className="text-7xl lg:text-9xl font-bold tracking-tight bg-gradient-to-r from-primary via-foreground to-foreground bg-clip-text text-transparent">
              ENGINEER
            </h1>
          </div>

          {/* Profile Photo */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
            <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20 hover:scale-105 transition-transform duration-500">
              <img 
                src="/profile-photo.jpeg" 
                alt="Ramana Kumar Bingi"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-4xl pt-8 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}>
            <div className="space-y-3 hover-lift cursor-default p-6 rounded-2xl hover:bg-primary/5 transition-all">
              <h3 className="text-6xl font-bold text-gradient">50+</h3>
              <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Projects Deployed</p>
            </div>
            <div className="space-y-3 hover-lift cursor-default p-6 rounded-2xl hover:bg-primary/5 transition-all">
              <h3 className="text-6xl font-bold text-gradient">60%</h3>
              <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Deployment Efficiency</p>
            </div>
            <div className="space-y-3 hover-lift cursor-default p-6 rounded-2xl hover:bg-primary/5 transition-all">
              <h3 className="text-6xl font-bold text-gradient">10+</h3>
              <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Years Experience</p>
            </div>
          </div>

          {/* Tagline */}
          <div className="max-w-3xl pt-8 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'backwards' }}>
            <p className="text-base lg:text-lg text-muted-foreground italic border-l-4 border-primary pl-6 py-2 hover:border-primary/60 transition-colors">
              I believe in infrastructure-as-code and creating reliable, scalable systems that empower 
              development teams while solving real-world problems through thoughtful DevOps engineering.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'backwards' }}>
            <Button size="lg" className="text-lg px-8 py-7 glow-effect hover:scale-105 transition-all duration-300 font-semibold" asChild>
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