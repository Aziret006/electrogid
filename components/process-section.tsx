"use client"

import { SearchIcon, FileCheckIcon, TruckIcon, KeyIcon } from "@/components/icons"

export function ProcessSection() {
  const steps = [
    {
      icon: SearchIcon,
      title: "Выбор автомобиля",
      description: "Подберем идеальный электромобиль под ваши требования и бюджет",
    },
    {
      icon: FileCheckIcon,
      title: "Оформление документов",
      description: "Берем на себя все вопросы с документацией и таможней",
    },
    {
      icon: TruckIcon,
      title: "Доставка",
      description: "Доставляем автомобиль в Кыргызстан за 15-35 дней",
    },
    {
      icon: KeyIcon,
      title: "Передача ключей",
      description: "Проводим полный инструктаж и передаем вам автомобиль",
    },
  ]

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Как мы работаем</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Простой и прозрачный процесс покупки электромобиля
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-20" />

            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="text-center">
                  {/* Icon Circle */}
                  <div className="relative inline-flex items-center justify-center w-32 h-32 mb-6">
                    {/* Outer Ring */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-20 animate-pulse" />

                    {/* Inner Circle */}
                    <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                      <step.icon className="w-12 h-12 text-white" />
                    </div>

                    {/* Step Number */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground text-balance">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
