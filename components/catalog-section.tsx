"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon, BatteryIcon, GaugeIcon, CalendarIcon } from "@/components/icons"
import { carsData } from "@/lib/cars-data"

export function CatalogSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const featuredCars = carsData.slice(0, 6)

  return (
    <section id="catalog" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Наш каталог электромобилей</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Широкий выбор электромобилей от ведущих производителей
          </p>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredCars.map((car, index) => (
            <div
              key={car.id}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={car.image || "/placeholder.svg"}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />

                {/* Price Badge */}
                <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-primary text-white font-bold">
                  ${car.priceUSD.toLocaleString()}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {car.brand} {car.model}
                </h3>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50">
                    <BatteryIcon className="w-5 h-5 text-primary mb-1" />
                    <span className="text-xs text-muted-foreground">Запас хода</span>
                    <span className="text-sm font-bold">{car.range} км</span>
                  </div>
                  <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50">
                    <GaugeIcon className="w-5 h-5 text-primary mb-1" />
                    <span className="text-xs text-muted-foreground">Макс. скорость</span>
                    <span className="text-sm font-bold">{car.topSpeed} км/ч</span>
                  </div>
                  <div className="flex flex-col items-center p-3 rounded-lg bg-muted/50">
                    <CalendarIcon className="w-5 h-5 text-primary mb-1" />
                    <span className="text-xs text-muted-foreground">Год</span>
                    <span className="text-sm font-bold">{car.year}</span>
                  </div>
                </div>

                <Link href={`/catalog/${car.id}`}>
                  <Button className="w-full group/btn" variant={hoveredCard === index ? "default" : "outline"}>
                    Подробнее
                    <ArrowRightIcon className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/catalog">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Посмотреть все модели
              <ArrowRightIcon className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
