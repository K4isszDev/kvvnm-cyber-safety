"use client"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t-2 border-primary/20 bg-primary/5 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* School Info */}
          <div>
            <h4 className="font-bold text-primary mb-4">PM SHRI KV Vijayanarayanam</h4>
            <p className="text-sm text-muted-foreground space-y-1">
              <div>Code: 1809</div>
              <div>CBSE Affiliation: 1900026</div>
              <div>UDISE: 33291106922</div>
            </p>
          </div>

          {/* About Club */}
          <div>
            <h4 className="font-bold text-primary mb-4">Cyber Safety Club</h4>
            <p className="text-sm text-muted-foreground">
              Dedicated to spreading awareness about cybersecurity and digital safety among junior students through
              interactive learning tools.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-primary mb-4">Features</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>Interactive Password Checker</li>
              <li>Attack Method Learning</li>
              <li>Security Best Practices</li>
              <li>Educational Resources</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/10 pt-8">
          {/* Disclaimer */}
          <div className="bg-secondary/5 border-2 border-primary/20 rounded-lg p-4 mb-6">
            <p className="text-xs text-muted-foreground">
              <strong>Disclaimer:</strong> This website is not an official PM SHRI KV Vijayanarayanam website. It is
              created by the school's Cyber Safety Club for educational purposes only. The information provided is for
              learning about cybersecurity concepts. Users are responsible for using this knowledge ethically and
              legally. Never attempt to access systems or accounts without proper authorization.
            </p>
          </div>

          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Created by <strong>Cyber Security Club</strong> | © {currentYear} | Educational Initiative
            </p>
            <p className="text-xs text-muted-foreground">By Cyber Security Club</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
