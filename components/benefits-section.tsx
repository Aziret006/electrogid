"use client"

import { DollarSignIcon, TruckIcon, AwardIcon, RepeatIcon, ZapIcon, PackageIcon } from "@/components/icons"

export function BenefitsSection() {
  const benefits = [
    {
      icon: DollarSignIcon,
      title: "Машины в наличии",
      description: "От 6,5 тыс.$",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: TruckIcon,
      title: "Быстрая доставка",
      description: "От 15-35 дней",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: AwardIcon,
      title: "Опыт работы",
      description: "Более 4 лет на рынке",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: RepeatIcon,
      title: "Trade-in",
      description: "Рассрочка",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: ZapIcon,
      title: "Установка зарядных",
      description: "Устройств",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: PackageIcon,
      title: "Продажа",
      description: "Комплектующих",
      color: "from-indigo-500 to-purple-500",
    },
  ]

  return (
    <section id="benefits" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Почему выбирают нас</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Мы предлагаем полный спектр услуг для владельцев электромобилей
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${benefit.color} mb-6 transition-transform group-hover:scale-110 group-hover:rotate-6`}
              >
                <benefit.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-2 text-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>

              {/* Hover Arrow */}
              <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
