"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { carsData, brands, types, years } from "@/lib/cars-data"
import { BatteryIcon, ZapIcon, GaugeIcon, ArrowRightIcon } from "@/components/icons"

export default function CatalogPage() {
  const [selectedBrand, setSelectedBrand] = useState<string>("all")
  const [selectedType, setSelectedType] = useState<string>("all")
  const [selectedYear, setSelectedYear] = useState<string>("all")
  const [priceRange, setPriceRange] = useState<number[]>([0, 5000000])
  const [sortBy, setSortBy] = useState<string>("price-asc")

  const maxPrice = Math.max(...carsData.map((car) => car.price))

  const filteredAndSortedCars = useMemo(() => {
    const filtered = carsData.filter((car) => {
      const brandMatch = selectedBrand === "all" || car.brand === selectedBrand
      const typeMatch = selectedType === "all" || car.type === selectedType
      const yearMatch = selectedYear === "all" || car.year.toString() === selectedYear
      const priceMatch = car.price >= priceRange[0] && car.price <= priceRange[1]
      return brandMatch && typeMatch && yearMatch && priceMatch
    })

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price
        case "price-desc":
          return b.price - a.price
        case "year-desc":
          return b.year - a.year
        case "range-desc":
          return b.range - a.range
        default:
          return 0
      }
    })

    return filtered
  }, [selectedBrand, selectedType, selectedYear, priceRange, sortBy])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU").format(price) + " сом"
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Каталог электромобилей
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите свой идеальный электромобиль из нашего ассортимента премиальных моделей
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-6">Фильтры</h2>

                {/* Brand Filter */}
                <div className="mb-6">
                  <label className="text-sm font-medium mb-2 block">Марка</label>
                  <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                    <SelectTrigger>
                      <SelectValue placeholder="Все марки" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все марки</SelectItem>
                      {brands.map((brand) => (
                        <SelectItem key={brand} value={brand}>
                          {brand}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Type Filter */}
                <div className="mb-6">
                  <label className="text-sm font-medium mb-2 block">Тип кузова</label>
                  <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Все типы" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все типы</SelectItem>
                      {types.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type === "sedan"
                            ? "Седан"
                            : type === "suv"
                              ? "Внедорожник"
                              : type === "crossover"
                                ? "Кроссовер"
                                : "Хэтчбек"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Year Filter */}
                <div className="mb-6">
                  <label className="text-sm font-medium mb-2 block">Год выпуска</label>
                  <Select value={selectedYear} onValueChange={setSelectedYear}>
                    <SelectTrigger>
                      <SelectValue placeholder="Все годы" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все годы</SelectItem>
                      {years.map((year) => (
                        <SelectItem key={year} value={year.toString()}>
                          {year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Range Filter */}
                <div className="mb-6">
                  <label className="text-sm font-medium mb-2 block">
                    Цена: {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}
                  </label>
                  <Slider
                    min={0}
                    max={maxPrice}
                    step={100000}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mt-4"
                  />
                </div>

                {/* Reset Filters */}
                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={() => {
                    setSelectedBrand("all")
                    setSelectedType("all")
                    setSelectedYear("all")
                    setPriceRange([0, maxPrice])
                  }}
                >
                  Сбросить фильтры
                </Button>
              </Card>
            </div>

            {/* Cars Grid */}
            <div className="lg:col-span-3">
              {/* Sort and Results Count */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <p className="text-muted-foreground">
                  Найдено автомобилей:{" "}
                  <span className="font-semibold text-foreground">{filteredAndSortedCars.length}</span>
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Сортировка:</span>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[200px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="price-asc">Цена: по возрастанию</SelectItem>
                      <SelectItem value="price-desc">Цена: по убыванию</SelectItem>
                      <SelectItem value="year-desc">Год: новые первые</SelectItem>
                      <SelectItem value="range-desc">Запас хода: больше первые</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Cars Grid */}
              {filteredAndSortedCars.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredAndSortedCars.map((car) => (
                    <Card key={car.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={car.image || "/placeholder.svg"}
                          alt={`${car.brand} ${car.model}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {!car.inStock && <Badge className="absolute top-4 right-4 bg-red-500">Под заказ</Badge>}
                        {car.inStock && <Badge className="absolute top-4 right-4 bg-green-500">В наличии</Badge>}
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-2xl font-bold mb-1">
                              {car.brand} {car.model}
                            </h3>
                            <p className="text-sm text-muted-foreground">{car.year} год</p>
                          </div>
                          <Badge variant="outline" className="capitalize">
                            {car.type === "sedan"
                              ? "Седан"
                              : car.type === "suv"
                                ? "SUV"
                                : car.type === "crossover"
                                  ? "Кроссовер"
                                  : "Хэтчбек"}
                          </Badge>
                        </div>

                        <div className="grid grid-cols-3 gap-4 mb-4">
                          <div className="flex items-center gap-2">
                            <BatteryIcon className="w-4 h-4 text-primary" />
                            <div>
                              <p className="text-xs text-muted-foreground">Батарея</p>
                              <p className="text-sm font-semibold">{car.batteryCapacity} кВт⋅ч</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <ZapIcon className="w-4 h-4 text-primary" />
                            <div>
                              <p className="text-xs text-muted-foreground">Запас</p>
                              <p className="text-sm font-semibold">{car.range} км</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <GaugeIcon className="w-4 h-4 text-primary" />
                            <div>
                              <p className="text-xs text-muted-foreground">0-100</p>
                              <p className="text-sm font-semibold">{car.acceleration}</p>
                            </div>
                          </div>
                        </div>

                        <div className="border-t border-border pt-4 mb-4">
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="text-sm text-muted-foreground">Цена</p>
                              <p className="text-2xl font-bold text-primary">{formatPrice(car.price)}</p>
                              <p className="text-xs text-muted-foreground">${car.priceUSD.toLocaleString()}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-muted-foreground">Доставка</p>
                              <p className="text-sm font-semibold">{car.deliveryDays}</p>
                            </div>
                          </div>
                        </div>

                        <Link href={`/catalog/${car.id}`}>
                          <Button className="w-full group/btn">
                            Подробнее
                            <ArrowRightIcon className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-xl text-muted-foreground mb-4">Автомобили не найдены</p>
                  <p className="text-sm text-muted-foreground mb-6">Попробуйте изменить параметры фильтрации</p>
                  <Button
                    onClick={() => {
                      setSelectedBrand("all")
                      setSelectedType("all")
                      setSelectedYear("all")
                      setPriceRange([0, maxPrice])
                    }}
                  >
                    Сбросить фильтры
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
