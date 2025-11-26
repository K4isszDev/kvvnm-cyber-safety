"use client"

export default function ClubInfo() {
  const teamMembers = [
    { role: "Mentor", name: "Sindhuja K", subject: "Computer Science" },
    { role: "Club Leader", name: "Name", class: "Class 11-A" },
    { role: "Co-Leader", name: "Name", class: "Class 11-A" },
  ]

  const members = [
    "28 Active Members from Class 11 (2025-26 batch)",
    "Passionate about cybersecurity and digital safety",
    "Dedicated to educating junior students",
  ]

  return (
    <section id="about" className="py-16 md:py-24 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Club Overview */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-accent/20 border border-accent/40 rounded-full">
              <p className="text-sm font-bold text-primary uppercase tracking-wide">Club Information</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Cyber Safety <span className="text-accent">Awareness Club</span>
            </h2>
          </div>

          {/* Club Details Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Founded Info */}
            <div className="p-6 bg-background border-2 border-accent/30 rounded-xl hover:border-accent/60 transition-colors">
              <div className="inline-block p-3 bg-accent/10 rounded-lg mb-4">
                <span className="text-2xl">📅</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">When We Started</h3>
              <p className="text-muted-foreground mb-3">
                The club was established to create awareness among junior students about the importance of cybersecurity
                in today's digital age.
              </p>
              <p className="text-sm font-semibold text-primary">Established: 2025</p>
            </div>

            {/* Members Count */}
            <div className="p-6 bg-background border-2 border-accent/30 rounded-xl hover:border-accent/60 transition-colors">
              <div className="inline-block p-3 bg-accent/10 rounded-lg mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Our Team</h3>
              <p className="text-muted-foreground mb-3">
                We have 28 active members from Class 11 (2025-26 batch), all passionate about cybersecurity education.
              </p>
              <p className="text-sm font-semibold text-primary">Members: 28</p>
            </div>

            {/* Why We Started */}
            <div className="p-6 bg-background border-2 border-accent/30 rounded-xl hover:border-accent/60 transition-colors md:col-span-2">
              <div className="inline-block p-3 bg-accent/10 rounded-lg mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Why This Club Matters</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">→</span>
                  <span>Students spend most of their time online - they need to understand digital risks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">→</span>
                  <span>Cybersecurity skills are essential for future careers in technology</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">→</span>
                  <span>Prevention is better than cure - learning early prevents cyber attacks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">→</span>
                  <span>Interactive learning makes complex security concepts easy to understand</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Team Section */}
          <div id="members" className="space-y-6">
            <h3 className="text-2xl font-bold text-primary">Leadership Team</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {teamMembers.map((member, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-background border-l-4 border-accent rounded-lg hover:shadow-lg transition-shadow"
                >
                  <p className="text-xs font-bold text-accent uppercase tracking-wider mb-2">{member.role}</p>
                  <p className="text-lg font-bold text-primary mb-1">{member.name}</p>
                  <p className="text-sm text-muted-foreground">{member.subject || member.class}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What We Do */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary">What We Do</h3>
            <div className="space-y-4">
              {[
                {
                  title: "Educational Workshops",
                  desc: "Regular sessions on cybersecurity topics for junior students",
                },
                {
                  title: "Interactive Tools",
                  desc: "Hands-on tools like password strength checker and attack simulations",
                },
                { title: "Awareness Campaigns", desc: "Posters, newsletters, and awareness drives across the school" },
                { title: "Mentorship", desc: "Peer mentoring and guidance on digital safety" },
              ].map((activity, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 p-4 bg-secondary/5 rounded-lg border border-border hover:border-accent/50 transition-colors"
                >
                  <div className="text-2xl flex-shrink-0 text-accent">✓</div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">{activity.title}</h4>
                    <p className="text-sm text-muted-foreground">{activity.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
