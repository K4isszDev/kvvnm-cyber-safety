"use client"

import Link from "next/link"

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Password Strength Checker",
      description:
        "Interactive tool to test your password strength, learn how hackers crack passwords using different attack methods, and get suggestions for creating stronger passwords.",
      icon: "🔐",
      link: "/password-strength",
      features: ["Brute Force Attacks", "Dictionary Attacks", "Password Spraying", "Real-time Feedback"],
    },
    {
      id: 2,
      title: "Common Attack Types",
      description:
        "Learn about different hacking techniques and how they work. Understand the threats and how to protect yourself.",
      icon: "⚔️",
      link: "#",
      features: ["Phishing", "Malware", "Social Engineering", "Best Defenses"],
    },
    {
      id: 3,
      title: "Digital Safety Tips",
      description: "Best practices for staying safe online. Simple tips and tricks that every student should know.",
      icon: "🛡️",
      link: "#",
      features: ["Strong Passwords", "2FA Setup", "Safe Browsing", "Data Privacy"],
    },
  ]

  return (
    <section id="projects" className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-accent/20 border border-accent/40 rounded-full mb-4">
            <p className="text-sm font-bold text-primary uppercase tracking-wide">Learning Tools</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our <span className="text-accent">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interactive tools designed to make cybersecurity learning fun and engaging for junior students
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group p-8 bg-card border-2 border-primary/10 rounded-xl hover:border-accent/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{project.icon}</div>
              <h3 className="text-2xl font-bold text-primary mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-6">{project.description}</p>

              {/* Features List */}
              <div className="mb-6 space-y-2">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                    {feature}
                  </div>
                ))}
              </div>

              {/* Link Button */}
              {project.link !== "#" ? (
                <Link
                  href={project.link}
                  className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Start Learning →
                </Link>
              ) : (
                <button
                  disabled
                  className="inline-block px-6 py-2 bg-muted text-muted-foreground rounded-lg font-semibold cursor-not-allowed"
                >
                  Coming Soon
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
