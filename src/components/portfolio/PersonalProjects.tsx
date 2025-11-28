import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const PersonalProjects = () => {
  const projects = [
    {
      title: "LinkedIn Companies Finder",
      description: "Advanced LinkedIn company discovery tool for targeted job applications. Identifies companies hiring for specific roles and exports comprehensive data for strategic job searching.",
      technologies: ["Python", "LinkedIn API", "Data Analysis", "Pandas"],
      github: "https://github.com/rbt2d/linkedin-job-scraper",
      highlights: [
        "Company hiring insights",
        "Role-based filtering",
        "Strategic job search data",
        "Automated data export"
      ]
    },
    {
      title: "Live Trading Monitor",
      description: "Real-time stock trading monitor with technical analysis and instant day trading signals. Scrapes live stock data and generates BUY/SELL signals based on RSI, MACD, Bollinger Bands, and Moving Averages.",
      technologies: ["Python", "Technical Analysis", "Real-time Data", "Trading Algorithms"],
      github: "https://github.com/rbt2d/live-trading-monitor",
      highlights: [
        "Real-time stock analysis",
        "Technical indicator calculations",
        "Automated trading signals",
        "Entry/exit point recommendations"
      ]
    },
    {
      title: "Rental Investment Analyzer",
      description: "Comprehensive real estate investment analysis tool that identifies optimal zip codes for rental properties by analyzing population data, rental supply/demand, and market trends using Census API.",
      technologies: ["Python", "Census API", "Data Analytics", "Real Estate"],
      github: "https://github.com/rbt2d/rental-investment-analyzer",
      highlights: [
        "Census data integration",
        "Market trend analysis",
        "Investment scoring algorithm",
        "Demographic insights"
      ]
    },
    {
      title: "Flight Tracker",
      description: "Real-time flight tracking application built using Antigravity IDE. Provides live flight status, route information, and tracking capabilities with an intuitive user interface.",
      technologies: ["Antigravity IDE", "Flight APIs", "Real-time Tracking", "Web Development"],
      github: "https://github.com/rbt2d/flight-tracker",
      highlights: [
        "Live flight tracking",
        "Route visualization",
        "Status notifications",
        "Modern UI/UX"
      ]
    }
  ];

  return (
    <section id="personal-projects" className="section-padding bg-muted/30">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">PERSONAL PROJECTS</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Side projects showcasing automation, data analysis, and problem-solving skills
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/50"
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </div>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                      aria-label="View on GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Key Highlights */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Features
                  </h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-0.5">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIdx) => (
                      <Badge 
                        key={techIdx} 
                        variant="secondary"
                        className="text-xs group-hover:border-primary/30 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button size="lg" variant="outline" asChild>
            <a href="https://github.com/rbt2d" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PersonalProjects;

