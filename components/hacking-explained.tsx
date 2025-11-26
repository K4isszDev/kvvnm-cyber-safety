"use client"

import { useState } from "react"

interface HackMethod {
  id: string
  title: string
  icon: string
  shortDesc: string
  fullDesc: string
  steps: string[]
  defense: string[]
  timeFrame: string
}

export default function HackingExplained() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const hackingMethods: HackMethod[] = [
    {
      id: "brute-force",
      title: "Brute Force Attack",
      icon: "🔨",
      shortDesc: "Tries every possible password combination",
      fullDesc:
        "A brute force attack systematically attempts every possible password combination starting from the simplest. Modern GPUs can perform billions of attempts per second, making weak passwords vulnerable within hours or days.",
      steps: [
        "Attacker acquires hash of password (from database leak)",
        "Sets up powerful GPU/computer cluster",
        "Generates all possible combinations (aaa, aab, aac...)",
        "Compares generated hashes with target hash",
        "Continues until finding a match",
      ],
      defense: [
        "Use strong, long passwords (16+ characters)",
        "Include mix of character types (upper, lower, numbers, symbols)",
        "Avoid common patterns and dictionary words",
        "Enable account lockout after failed attempts",
        "Use CAPTCHA challenges",
      ],
      timeFrame: "Hours to years (depends on password complexity)",
    },
    {
      id: "dictionary",
      title: "Dictionary Attack",
      icon: "📖",
      shortDesc: "Uses pre-compiled lists of common passwords and words",
      fullDesc:
        "Instead of trying every combination, dictionary attacks use pre-built lists of commonly used passwords, words, and patterns. They're faster than brute force because most people use predictable passwords.",
      steps: [
        "Load dictionary file (thousands to millions of words)",
        "Add common variations (password123, Pass@123)",
        "Add keyboard patterns (qwerty, asdfgh)",
        "Test each against the target password hash",
        "Often succeeds within minutes if password is common",
      ],
      defense: [
        "Never use dictionary words as passwords",
        "Avoid common password patterns (Name+Year, Season+Number)",
        "Don't use keyboard walks (qwerty, asdfgh)",
        "Use random combinations of unrelated words",
        "Mix character types to avoid common variations",
      ],
      timeFrame: "Minutes to hours",
    },
    {
      id: "rainbow-table",
      title: "Rainbow Table Attack",
      icon: "🌈",
      shortDesc: "Uses pre-computed tables of password hashes",
      fullDesc:
        "Rainbow tables are massive databases of pre-computed password hashes. Instead of computing hashes during the attack, hackers just look up the hash to find the original password instantly. However, 'salted' passwords are protected against this.",
      steps: [
        "Obtain rainbow table database (terabytes of data)",
        "Get hash from compromised database",
        "Search hash in the rainbow table",
        "Retrieve the original password instantly",
        "Works best against non-salted hashes",
      ],
      defense: [
        "Websites should use 'salted' hashing (modern standard)",
        "Long, random passwords make rainbow tables less effective",
        "Use unique character combinations",
        "Keep passwords updated regularly",
        "Avoid reusing passwords across sites",
      ],
      timeFrame: "Instantly (if hash is in table)",
    },
    {
      id: "phishing",
      title: "Phishing Attack",
      icon: "🎣",
      shortDesc: "Tricks users into revealing passwords directly",
      fullDesc:
        "Phishing doesn't try to crack passwords—it tricks you into giving them away. Attackers create fake login pages, emails, or messages that appear legitimate, stealing credentials when users enter them.",
      steps: [
        "Create convincing fake website or email",
        "Impersonate trusted service (bank, social media, email)",
        "Send email with urgent-sounding message",
        "User clicks link and enters credentials on fake page",
        "Attacker captures username and password",
      ],
      defense: [
        "Check sender email addresses carefully",
        "Hover over links to see actual URL before clicking",
        "Go directly to websites instead of clicking email links",
        "Look for HTTPS and padlock icon",
        "Never enter password on suspicious pages",
        "Enable two-factor authentication (2FA)",
      ],
      timeFrame: "Seconds to minutes (if user falls for it)",
    },
    {
      id: "social-eng",
      title: "Social Engineering",
      icon: "🎭",
      shortDesc: "Manipulates people into revealing confidential information",
      fullDesc:
        "Social engineering exploits human psychology rather than technical vulnerabilities. Attackers manipulate victims through deception, impersonation, or psychological pressure to divulge sensitive information.",
      steps: [
        "Research target person/organization online",
        "Build trust through conversation or impersonation",
        "Create sense of urgency or authority",
        "Manipulate victim into revealing password or access",
        "Exploit trust to gain unauthorized access",
      ],
      defense: [
        "Never share passwords with anyone, ever",
        "Verify identities independently (call official number)",
        "Be skeptical of urgent requests or threats",
        "Don't provide personal information to strangers",
        "Confirm requests through established channels",
        "Educate yourself about common manipulation tactics",
      ],
      timeFrame: "Varies (minutes to weeks)",
    },
    {
      id: "malware",
      title: "Malware/Keylogger",
      icon: "🦠",
      shortDesc: "Malicious software that records keystrokes or steals data",
      fullDesc:
        "Malware can track everything you type (keyloggers), capture screenshots, or monitor network traffic. Once installed, it silently steals passwords and sensitive information.",
      steps: [
        "Attacker creates malware program",
        "Distributes through email, websites, or downloads",
        "User unknowingly downloads and installs it",
        "Malware runs in background recording keystrokes",
        "Attacker receives captured passwords remotely",
      ],
      defense: [
        "Keep antivirus software updated and running",
        "Only download from official sources",
        "Don't open suspicious email attachments",
        "Keep operating system and apps updated",
        "Use reputable security software",
        "Avoid public WiFi for sensitive transactions",
      ],
      timeFrame: "Ongoing (continues stealing while installed)",
    },
  ]

  return (
    <section id="hacking" className="py-16 md:py-24 px-4 bg-secondary/5">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">How Hackers Attack Passwords</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Learn about different hacking techniques and how to defend against them
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {hackingMethods.map((method) => (
            <div
              key={method.id}
              onClick={() => setExpandedId(expandedId === method.id ? null : method.id)}
              className="bg-background border-2 border-border rounded-lg overflow-hidden hover:border-primary/30 transition-all cursor-pointer hover:shadow-lg"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl">{method.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-primary">{method.title}</h3>
                      <p className="text-xs text-accent mt-1">{method.timeFrame}</p>
                    </div>
                  </div>
                  <div
                    className="text-2xl transition-transform"
                    style={{
                      transform: expandedId === method.id ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    ▼
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4">{method.shortDesc}</p>

                {expandedId === method.id && (
                  <div className="border-t border-border pt-4 space-y-4 animate-in fade-in duration-300">
                    <div>
                      <p className="text-sm text-foreground mb-2">{method.fullDesc}</p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-primary mb-2">How It Works:</p>
                      <ol className="space-y-2">
                        {method.steps.map((step, idx) => (
                          <li key={idx} className="flex gap-3 text-xs text-muted-foreground">
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary font-bold flex-shrink-0">
                              {idx + 1}
                            </span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-green-600 mb-2">How to Defend:</p>
                      <ul className="space-y-2">
                        {method.defense.map((def, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <span className="text-green-600 mt-1">✓</span>
                            <span>{def}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-primary mb-6">Essential Security Practices</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Strong Passwords", desc: "16+ chars, mixed types, no patterns" },
              { title: "Two-Factor Auth", desc: "Adds extra security layer" },
              { title: "Stay Updated", desc: "Keep software and OS current" },
              { title: "Be Skeptical", desc: "Question unusual requests" },
            ].map((tip, idx) => (
              <div
                key={idx}
                className="bg-background p-4 rounded border border-border hover:border-primary/50 transition-colors"
              >
                <div className="text-2xl mb-2">{["🔐", "📱", "⚙️", "🤔"][idx]}</div>
                <p className="font-semibold text-primary text-sm">{tip.title}</p>
                <p className="text-xs text-muted-foreground mt-1">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
