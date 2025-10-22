"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { MenuIcon, XIcon } from "@/components/icons"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Главная", href: "/" },
    { label: "Каталог", href: "/catalog" },
    { label: "О нас", href: "/about" },
    { label: "Услуги", href: "/services" },
    { label: "Контакты", href: "/contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-primary/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 bg-linear-to-br from-primary via-primary/80 to-accent rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,245,255,0.5)]">
              <span className="text-2xl font-bold text-background">EG</span>
              <div className="absolute inset-0 rounded-lg bg-primary/20 blur-md group-hover:blur-lg transition-all duration-300" />
            </div>
            <div className="hidden md:block">
              <div className="text-xl font-bold text-foreground tracking-tight">ELECTRO GID</div>
              <div className="text-xs text-primary font-medium">Электромобили</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  pathname === item.href ? "text-primary" : "text-foreground/80 hover:text-primary"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-linear-to-r from-primary to-accent transition-all duration-300 ${
                    pathname === item.href ? "w-full shadow-[0_0_8px_rgba(0,245,255,0.6)]" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 bg-transparent"
            >
              Войти
            </Button>
            <Link href="/contact">
              <Button
                size="sm"
                className="bg-linear-to-r from-primary to-accent hover:shadow-[0_0_20px_rgba(0,245,255,0.4)] transition-all duration-300 font-medium"
              >
                Связаться
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background py-4 border-t border-primary/20 animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-medium transition-colors duration-300 py-2 ${
                    pathname === item.href ? "text-primary" : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-primary/20">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary/30 hover:border-primary hover:bg-primary/10 bg-transparent"
                >
                  Войти
                </Button>
                <Link href="/contact">
                  <Button
                    size="sm"
                    className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-[0_0_20px_rgba(0,245,255,0.4)] transition-all duration-300"
                  >
                    Связаться
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
