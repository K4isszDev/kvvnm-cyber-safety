import Header from "@/components/header"
import Hero from "@/components/hero"
import ClubInfo from "@/components/club-info"
import ProjectsSection from "@/components/projects-section"
import Footer from "@/components/footer"

export const metadata = {
  title: "Cyber Safety Club - PM SHRI KV Vijayanarayanam",
  description: "Educational platform for cybersecurity awareness and digital safety learning",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ClubInfo />
      <ProjectsSection />
      <Footer />
    </main>
  )
}
