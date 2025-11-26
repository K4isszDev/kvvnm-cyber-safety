"use client"

export default function Hero() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto text-center">
        <div className="space-y-6">
          {/* Main Title */}
          <div className="space-y-3">
            <div className="inline-block px-4 py-2 bg-accent/20 border border-accent/40 rounded-full mb-4">
              <p className="text-sm font-bold text-primary uppercase tracking-wide">Security Awareness</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Cyber Safety <span className="text-accent">Awareness Club</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn how to protect yourself in the digital world. Understand password security, hacking techniques, and
              best practices for staying safe online.
            </p>
          </div>

          {/* Hindi and School Info */}
          <div className="space-y-2 mt-8 pt-8 border-t border-border">
            <h3 className="text-xl font-bold text-primary">पीएम श्री केन्द्रीय विद्यालय, विजयनारायणम्</h3>
            <p className="text-sm text-muted-foreground">शिक्षा मंत्रालय, भारत सरकार के अधीन एक स्वायत्त निकाय</p>
            <p className="text-xs text-muted-foreground">UDISE: 33291106922 | School Code: 59029 | KV Code: 1809</p>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 p-4 bg-primary/5 border-2 border-primary/20 rounded-lg">
            <p className="text-xs text-muted-foreground font-medium">
              ⚠️ <strong>Disclaimer:</strong> This is NOT an official school website. It is a Cyber Safety Club
              educational initiative created for junior students to learn about cybersecurity. All information is for
              educational purposes only.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
