"use client"

import { useState, useMemo, useEffect } from "react"

interface PasswordAnalysis {
  strength: "weak" | "fair" | "good" | "strong"
  score: number
  timeToHack: string
  suggestions: string[]
  checklist: { [key: string]: boolean }
}

interface AttackSimulation {
  type: "brute-force" | "dictionary" | "password-spraying" | "gpu-accelerated"
  name: string
  description: string
  howItWorks: string
  timeToHack: string
  progress: number
  isActive: boolean
  icon: string
}

const StrengthBadge = ({ strength }: { strength: string }) => {
  const configs = {
    weak: {
      bg: "bg-red-500/20",
      border: "border-red-500/50",
      text: "text-red-600",
      label: "Weak Password",
      icon: "⚠️",
    },
    fair: {
      bg: "bg-yellow-500/20",
      border: "border-yellow-500/50",
      text: "text-yellow-600",
      label: "Fair Password",
      icon: "⚡",
    },
    good: {
      bg: "bg-blue-500/20",
      border: "border-blue-500/50",
      text: "text-blue-600",
      label: "Good Password",
      icon: "🛡️",
    },
    strong: {
      bg: "bg-green-500/20",
      border: "border-green-500/50",
      text: "text-green-600",
      label: "Strong Password",
      icon: "🔐",
    },
  }
  const config = configs[strength as keyof typeof configs]

  return (
    <div className={`inline-flex items-center gap-2 px-4 py-3 rounded-lg border-2 ${config.bg} ${config.border}`}>
      <span className={`text-2xl ${config.text}`}>{config.icon}</span>
      <span className={`font-bold text-sm uppercase tracking-wide ${config.text}`}>{config.label}</span>
    </div>
  )
}

const ChecklistItem = ({
  label,
  checked,
  hint,
}: {
  label: string
  checked: boolean
  hint: string
}) => (
  <div
    className={`flex items-start gap-3 p-3 rounded-lg border-2 transition-all ${
      checked ? "bg-green-500/10 border-green-500/30" : "bg-red-500/10 border-red-500/20"
    }`}
  >
    <div
      className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center mt-0.5 font-bold ${
        checked ? "bg-green-500/20 border-green-500/50 text-green-600" : "bg-red-500/20 border-red-500/30 text-red-500"
      }`}
    >
      {checked ? "✓" : "○"}
    </div>
    <div className="flex-1 min-w-0">
      <p className={`text-sm font-semibold ${checked ? "text-green-700" : "text-red-700"}`}>{label}</p>
      <p className="text-xs text-muted-foreground mt-0.5">{hint}</p>
    </div>
  </div>
)

const SuggestionCard = ({ suggestion, index }: { suggestion: string; index: number }) => (
  <div className="flex gap-3 p-4 bg-gradient-to-r from-accent/10 to-accent/5 border-l-4 border-accent rounded-lg hover:shadow-md transition-shadow">
    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/30 flex items-center justify-center">
      <span className="text-sm font-bold text-accent-foreground">{index + 1}</span>
    </div>
    <p className="text-sm text-foreground pt-1">{suggestion}</p>
  </div>
)

const AttackMethodCard = ({
  attack,
  isActive,
  onClick,
}: {
  attack: AttackSimulation
  isActive: boolean
  onClick: () => void
}) => (
  <button
    onClick={onClick}
    className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-300 ${
      isActive
        ? "border-accent/70 bg-accent/20 shadow-lg scale-105"
        : "border-primary/20 bg-card hover:border-accent/40 hover:bg-secondary/5"
    }`}
  >
    <div className="flex items-start gap-4">
      <div className="text-4xl">{attack.icon}</div>
      <div className="flex-1">
        <h4 className="text-lg font-bold text-primary mb-1">{attack.name}</h4>
        <p className="text-xs text-muted-foreground mb-3">{attack.description}</p>

        {/* Attack Details */}
        <div className="space-y-2 mb-3">
          <div className="text-xs">
            <span className="font-semibold text-primary">Expected Time:</span>{" "}
            <span className="text-accent font-bold">{attack.timeToHack}</span>
          </div>
          {isActive && <p className="text-xs text-foreground italic">{attack.howItWorks}</p>}
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-background/50 rounded-full h-2 overflow-hidden border border-border">
          <div
            className={`h-full transition-all duration-500 ${isActive ? "bg-accent" : "bg-primary/30"}`}
            style={{ width: `${isActive ? 100 : attack.progress}%` }}
          />
        </div>
      </div>
    </div>
  </button>
)

export default function PasswordStrengthChecker() {
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [activeAttack, setActiveAttack] = useState<string | null>(null)
  const [animatedCracks, setAnimatedCracks] = useState<string[]>([])

  useEffect(() => {
    if (!activeAttack || !password) {
      setAnimatedCracks([])
      return
    }

    const interval = setInterval(() => {
      const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"
      const randomAttempt = Array(password.length)
        .fill(0)
        .map(() => chars[Math.floor(Math.random() * chars.length)])
        .join("")

      setAnimatedCracks((prev) => [...prev.slice(-8), randomAttempt])
    }, 100)

    return () => clearInterval(interval)
  }, [activeAttack, password])

  const analyzePassword = (pwd: string): PasswordAnalysis => {
    let score = 0
    const checklist: { [key: string]: boolean } = {}
    const suggestions: string[] = []

    // Length Check
    checklist["8+ characters"] = pwd.length >= 8
    checklist["12+ characters"] = pwd.length >= 12
    if (pwd.length >= 8) score += 1
    if (pwd.length >= 12) score += 2
    else if (pwd.length > 0 && pwd.length < 8)
      suggestions.push("Aim for at least 12 characters - longer passwords are much harder to crack")

    // Lowercase Check
    checklist["lowercase (a-z)"] = /[a-z]/.test(pwd)
    if (/[a-z]/.test(pwd)) score += 1
    else if (pwd.length > 0) suggestions.push("Add lowercase letters (a, b, c, ... z)")

    // Uppercase Check
    checklist["UPPERCASE (A-Z)"] = /[A-Z]/.test(pwd)
    if (/[A-Z]/.test(pwd)) score += 1
    else if (pwd.length > 0) suggestions.push("Add UPPERCASE letters (A, B, C, ... Z)")

    // Numbers Check
    checklist["Numbers (0-9)"] = /[0-9]/.test(pwd)
    if (/[0-9]/.test(pwd)) score += 1
    else if (pwd.length > 0) suggestions.push("Mix in numbers (0, 1, 2, ... 9)")

    // Special Characters Check
    checklist["Special characters (!@#$)"] = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(pwd)
    if (/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(pwd)) score += 1
    else if (pwd.length > 0) suggestions.push("Add special characters like ! @ # $ % & *")

    // No Repeating Check
    checklist["No repeating characters"] = !/(.)\1{2,}/.test(pwd)
    if (!/(.)\1{2,}/.test(pwd)) score += 0.5
    else if (pwd.length > 0) suggestions.push("Avoid repeating characters like 'aaa' or '111'")

    // No Patterns Check
    checklist["No obvious patterns"] = !/(.{2,})\1/.test(pwd)
    if (!/(.{2,})\1/.test(pwd)) score += 0.5
    else if (pwd.length > 0) suggestions.push("Don't use repeating patterns like 'abab' or '1212'")

    // Calculate time to crack
    const cracksPerSecond = 1e9
    let totalCombinations = 0
    let timeInSeconds = 0

    if (pwd.length > 0) {
      const hasLower = /[a-z]/.test(pwd)
      const hasUpper = /[A-Z]/.test(pwd)
      const hasNumbers = /[0-9]/.test(pwd)
      const hasSpecial = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(pwd)

      let charsetSize = 0
      if (hasLower) charsetSize += 26
      if (hasUpper) charsetSize += 26
      if (hasNumbers) charsetSize += 10
      if (hasSpecial) charsetSize += 32

      totalCombinations = Math.pow(charsetSize, pwd.length)
      timeInSeconds = totalCombinations / (cracksPerSecond * 2)
    }

    const formatTime = (seconds: number): string => {
      if (seconds < 1) return "Less than 1 second"
      if (seconds < 60) return `${Math.round(seconds)} seconds`
      if (seconds < 3600) return `${Math.round(seconds / 60)} minutes`
      if (seconds < 86400) return `${Math.round(seconds / 3600)} hours`
      if (seconds < 31536000) return `${Math.round(seconds / 86400)} days`
      if (seconds < 31536000 * 100) return `${Math.round(seconds / 31536000)} years`
      return "Over 100 years"
    }

    let strength: "weak" | "fair" | "good" | "strong" = "weak"
    if (score >= 7) strength = "strong"
    else if (score >= 5) strength = "good"
    else if (score >= 3) strength = "fair"

    return {
      strength,
      score: Math.min(score, 8),
      timeToHack: formatTime(timeInSeconds),
      suggestions,
      checklist,
    }
  }

  const analysis = useMemo(() => analyzePassword(password), [password])

  const attacks: AttackSimulation[] = [
    {
      type: "brute-force",
      name: "🔨 Brute Force Attack",
      description: "Tries EVERY possible password combination",
      howItWorks:
        "The attacker's computer tries 'aaa', 'aab', 'aac'... until it finds the correct password. Like checking every combination on a lock! This is the most thorough method but slowest.",
      icon: "🔨",
      timeToHack: analysis.timeToHack,
      progress: 20,
      isActive: activeAttack === "brute-force",
    },
    {
      type: "dictionary",
      name: "📖 Dictionary Attack",
      description: "Uses common words and leaked passwords from the internet",
      howItWorks:
        "Attackers use a dictionary of millions of real passwords (from previous data breaches) and common words. They try 'password123', 'abc123', 'letmein' etc. ONLY works if YOUR password is already in this list!",
      icon: "📖",
      timeToHack: password.length <= 8 ? "Seconds (if found)" : "Not found in most dictionaries",
      progress: 35,
      isActive: activeAttack === "dictionary",
    },
    {
      type: "password-spraying",
      name: "💧 Password Spraying",
      description: "Tries the same passwords across many accounts",
      howItWorks:
        "Instead of targeting one account, attackers try common passwords like 'Password123!' on MANY accounts. Like trying one key on many locks! Takes seconds per account. Works best against websites without account lockout protection.",
      icon: "💧",
      timeToHack: "Seconds per account",
      progress: 50,
      isActive: activeAttack === "password-spraying",
    },
    {
      type: "gpu-accelerated",
      name: "🚀 GPU-Powered Brute Force",
      description: "Billions of attempts per second using powerful graphics cards",
      howItWorks:
        "Modern gaming GPUs can try billions of passwords every second! Even a 'strong' password with 12 characters might take months to crack. This is why password LENGTH (12+ characters) is so important - it makes the math impossible!",
      icon: "🚀",
      timeToHack: analysis.timeToHack,
      progress: 65,
      isActive: activeAttack === "gpu-accelerated",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-secondary/5 to-background">
      <div className="container mx-auto max-w-5xl">
        {/* Password Input Section */}
        <div className="mb-12 bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-accent/40 rounded-xl p-8">
          <label htmlFor="password" className="block text-lg font-bold text-primary mb-4">
            Test Your Password Here
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Type a password to test..."
              className="w-full px-5 py-4 text-lg bg-background border-2 border-accent/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/70 focus:border-accent/70 transition-all placeholder-muted-foreground"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors font-semibold"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <p className="text-xs text-muted-foreground mt-3 flex items-center gap-2">
            <span>🔒</span> Your password never leaves your browser - we don't store or save anything
          </p>
        </div>

        {password ? (
          <div className="space-y-12">
            {/* Strength Overview */}
            <div className="bg-card border-2 border-primary/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-8">Password Strength Analysis</h3>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Strength Badge */}
                <div className="flex items-center justify-center">
                  <StrengthBadge strength={analysis.strength} />
                </div>

                {/* Score and Time */}
                <div className="space-y-6">
                  {/* Complexity Score */}
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-bold text-primary uppercase tracking-wider">Complexity Score</span>
                      <span className="text-3xl font-bold text-accent">{Math.round(analysis.score)}/8</span>
                    </div>
                    <div className="w-full bg-background rounded-full h-5 overflow-hidden border-2 border-border">
                      <div
                        className={`h-full transition-all duration-500 ${
                          analysis.strength === "weak"
                            ? "bg-gradient-to-r from-red-500 to-red-600"
                            : analysis.strength === "fair"
                              ? "bg-gradient-to-r from-yellow-500 to-yellow-600"
                              : analysis.strength === "good"
                                ? "bg-gradient-to-r from-blue-500 to-blue-600"
                                : "bg-gradient-to-r from-green-500 to-green-600"
                        }`}
                        style={{ width: `${(analysis.score / 8) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Time to Crack */}
                  <div className="bg-primary/5 border-2 border-primary/20 p-4 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1 font-semibold uppercase">
                      Time to Crack with Brute Force
                    </p>
                    <p className="text-2xl font-bold text-primary">{analysis.timeToHack}</p>
                  </div>
                </div>
              </div>

              {/* Checklist */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-4">
                  Password Strength Checklist
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {Object.entries(analysis.checklist).map(([key, checked]) => (
                    <ChecklistItem
                      key={key}
                      label={key}
                      checked={checked as boolean}
                      hint={
                        key === "8+ characters"
                          ? "Minimum length for basic security"
                          : key === "12+ characters"
                            ? "Better protection against brute force"
                            : key === "lowercase (a-z)"
                              ? "Adds variety to password"
                              : key === "UPPERCASE (A-Z)"
                                ? "Increases character options"
                                : key === "Numbers (0-9)"
                                  ? "Makes dictionary attacks harder"
                                  : key === "Special characters (!@#$)"
                                    ? "Greatly increases possible combinations"
                                    : key === "No repeating characters"
                                      ? "Patterns are easy to crack"
                                      : "Avoid sequential patterns"
                      }
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Attack Methods Section */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-2">How Hackers Try to Crack Your Password</h3>
              <p className="text-muted-foreground mb-6">Click on each attack method to learn how it works</p>
              <div className="space-y-4">
                {attacks.map((attack) => (
                  <AttackMethodCard
                    key={attack.type}
                    attack={attack}
                    isActive={attack.isActive}
                    onClick={() => setActiveAttack(activeAttack === attack.type ? null : attack.type)}
                  />
                ))}
              </div>
            </div>

            {/* Attack Simulation Display */}
            {activeAttack && (
              <div className="border-2 border-primary/40 rounded-xl overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-primary/80 px-6 py-3 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400 animate-pulse"></div>
                  <p className="text-sm font-bold text-primary-foreground uppercase tracking-wider">
                    Attack Simulation Active
                  </p>
                </div>
                <div className="bg-black p-6 font-mono text-xs space-y-1 max-h-56 overflow-y-auto">
                  {animatedCracks.length === 0 && (
                    <div className="text-green-400 animate-pulse">Initializing attack sequence...</div>
                  )}
                  {animatedCracks.map((crack, idx) => (
                    <div key={idx} className="text-yellow-400">
                      <span className="text-red-400">
                        Attempt {animatedCracks.length - (animatedCracks.length - idx - 1)}:
                      </span>{" "}
                      {crack} <span className="text-red-500 font-bold">✗ WRONG</span>
                    </div>
                  ))}
                  {password && animatedCracks.length > 0 && (
                    <div className="text-green-500 font-bold border-t border-green-500/30 pt-2 mt-2 animate-pulse">
                      <span className="text-green-400">✓ PASSWORD CRACKED:</span> {password}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Suggestions */}
            {analysis.suggestions.length > 0 && (
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent/40 rounded-xl p-8">
                <h3 className="text-xl font-bold text-primary mb-6">Make Your Password Stronger</h3>
                <div className="space-y-3">
                  {analysis.suggestions.map((suggestion, idx) => (
                    <SuggestionCard key={idx} suggestion={suggestion} index={idx} />
                  ))}
                </div>
              </div>
            )}

            {/* Strong Password Tips */}
            {analysis.strength === "strong" && (
              <div className="bg-gradient-to-br from-green-500/20 to-green-400/10 border-2 border-green-500/50 rounded-xl p-8">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">🔐</div>
                  <div>
                    <h3 className="text-2xl font-bold text-green-700 mb-2">Excellent Password!</h3>
                    <p className="text-green-700 mb-4">
                      This is a very strong password. It would take years to crack with current technology!
                    </p>
                    <div className="space-y-2 text-sm text-green-700">
                      <p className="font-semibold">Use this pattern for:</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Email account (your most important account)</li>
                        <li>Online banking</li>
                        <li>School management system</li>
                        <li>Social media accounts</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">Enter a password above to see detailed security analysis</p>
          </div>
        )}
      </div>
    </section>
  )
}
