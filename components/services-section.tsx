"use client"

import { WrenchIcon, BatteryIcon, ShoppingCartIcon, RefreshCwIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"

export function ServicesSection() {
  const services = [
    {
      icon: ShoppingCartIcon,
      title: "Продажа электромобилей",
      description: "Широкий выбор новых и б/у электромобилей от ведущих производителей. Помощь в выборе и оформлении.",
      features: ["Гарантия качества", "Проверка перед продажей", "Помощь в оформлении"],
    },
    {
      icon: RefreshCwIcon,
      title: "Trade-in и рассрочка",
      description: "Обменяйте свой старый автомобиль на электромобиль. Гибкие условия рассрочки без переплат.",
      features: ["Выгодная оценка", "Быстрое оформление", "Без первоначального взноса"],
    },
    {
      icon: BatteryIcon,
      title: "Установка зарядных станций",
      description: "Профессиональная установка домашних и коммерческих зарядных станций для электромобилей.",
      features: ["Быстрая установка", "Гарантия 2 года", "Техподдержка 24/7"],
    },
    {
      icon: WrenchIcon,
      title: "Продажа комплектующих",
      description: "Оригинальные запчасти и аксессуары для электромобилей. Всегда в наличии на складе.",
      features: ["Оригинальные детали", "Доставка по городу", "Консультация специалистов"],
    },
  ]

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Наши услуги</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Полный спектр услуг для владельцев электромобилей
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button variant="outline" className="group/btn bg-transparent">
                  Узнать больше
                  <svg
                    className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
