"use client"

import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-primary/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-8">
          {/* Logo and School Info */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="relative w-14 h-14 flex-shrink-0">
              <img
                src="https://cdnbbsr.s3waas.gov.in/s3kv0252e06722e50b20dae5701e6a57fb/uploads/2023/04/2023042118.svg"
                alt="KVS Logo"
                className="object-contain w-full h-full"
              />
            </div>
            <div>
              <h1 className="text-base font-bold text-primary leading-tight">PM SHRI KV</h1>
              <p className="text-xs text-muted-foreground">Cyber Safety Club</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link
              href="/#projects"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Projects
            </Link>
            <Link href="/#members" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Team
            </Link>
          </nav>

          {/* School Details */}
          <div className="hidden lg:block text-right text-xs text-muted-foreground">
            <p className="font-semibold text-primary">KV Code: 1809</p>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`h-0.5 w-full bg-primary transition-transform ${
                  mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`h-0.5 w-full bg-primary transition-opacity ${mobileMenuOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`h-0.5 w-full bg-primary transition-transform ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3 border-t border-primary/10 pt-4">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-secondary rounded transition-colors"
            >
              Home
            </Link>
            <Link
              href="/#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-secondary rounded transition-colors"
            >
              About
            </Link>
            <Link
              href="/#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-secondary rounded transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/#members"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-secondary rounded transition-colors"
            >
              Team
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
