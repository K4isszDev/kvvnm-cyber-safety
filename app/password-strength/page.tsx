import PasswordStrengthChecker from "@/components/password-strength-checker"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Password Strength Checker - Cyber Safety Club",
  description: "Interactive password strength checker with hacking simulation and security tips for junior students",
}

export default function PasswordStrengthPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="py-12 md:py-16 px-4 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-accent/20 border border-accent/40 rounded-full mb-4">
            <p className="text-sm font-bold text-primary uppercase tracking-wide">Interactive Tool</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Password <span className="text-accent">Strength Checker</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Test your passwords and learn how hackers use different techniques to crack them. Discover how to create
            unbreakable passwords!
          </p>
        </div>
      </section>
      <PasswordStrengthChecker />
      <Footer />
    </main>
  )
}
