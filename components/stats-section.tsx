"use client"

import { useEffect, useRef, useState } from "react"
import { UsersIcon, FileTextIcon, AwardIcon, TrendingUpIcon } from "@/components/icons"

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    {
      icon: FileTextIcon,
      value: 638,
      label: "Публикаций",
      suffix: "",
    },
    {
      icon: UsersIcon,
      value: 28.8,
      label: "Подписчиков",
      suffix: "K",
    },
    {
      icon: AwardIcon,
      value: 4,
      label: "Лет на рынке",
      suffix: "+",
    },
    {
      icon: TrendingUpIcon,
      value: 100,
      label: "Довольных клиентов",
      suffix: "+",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              isVisible={isVisible}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCard({
  icon: Icon,
  value,
  label,
  suffix,
  isVisible,
  delay,
}: {
  icon: any
  value: number
  label: string
  suffix: string
  isVisible: boolean
  delay: number
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(current)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, value])

  return (
    <div
      className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <div className="text-4xl font-bold text-foreground mb-2">
        {count.toFixed(count < 10 ? 1 : 0)}
        {suffix}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  )
}
