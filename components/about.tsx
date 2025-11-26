"use client"

export default function About() {
  const features = [
    {
      icon: "🎓",
      title: "Learn & Understand",
      description: "Understand the fundamentals of cybersecurity and digital safety",
    },
    {
      icon: "🔒",
      title: "Password Security",
      description: "Test password strength and learn what makes passwords secure",
    },
    {
      icon: "⚠️",
      title: "Know the Threats",
      description: "Learn about common hacking techniques like brute force attacks",
    },
    {
      icon: "💡",
      title: "Best Practices",
      description: "Get practical tips to protect yourself online every day",
    },
  ]

  return (
    <section id="about" className="py-16 md:py-24 px-4 bg-secondary/5">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Cyber Safety Matters</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            In today's connected world, protecting your digital identity is as important as protecting your physical
            safety. Our club helps you understand and implement cybersecurity best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 bg-background border border-border rounded-lg hover:border-primary/30 transition-colors group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{feature.icon}</div>
              <h3 className="font-semibold text-primary mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
