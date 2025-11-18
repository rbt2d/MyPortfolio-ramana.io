const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-full max-w-md aspect-square rounded-2xl overflow-hidden">
                <img 
                  src="/profile-photo.jpeg" 
                  alt="Ramana Kumar Bingi"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-lg shadow-lg">
                This is me.
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold">
                Hi, I'm <span className="text-primary">Ramana Kumar Bingi</span>.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a DevOps Engineer & Site Reliability Expert passionate about creating reliable, scalable 
                cloud infrastructure. I specialize in AWS, Azure, Kubernetes, and Terraform, while also bringing 
                strong automation capabilities with Jenkins, Docker, and CI/CD pipelines.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With experience at companies like Pax8 and AT&T, I've architected and deployed infrastructure that 
                improved deployment consistency by 60% and reduced operational costs by 30%. My expertise spans 
                cloud architecture, Infrastructure as Code, monitoring and observability, and creating seamless 
                DevOps workflows across development and operations teams.
              </p>
            </div>

            {/* Education */}
            <div className="pt-4 border-t border-border">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div className="space-y-2">
                <h4 className="font-semibold text-lg">M.S. Computer Science</h4>
                <p className="text-muted-foreground">University of Missouri – Kansas City</p>
                <p className="text-sm text-muted-foreground">Kansas City, MO • Graduated 2017</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;