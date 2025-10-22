"use client"

import { use } from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { carsData } from "@/lib/cars-data"
import {
  BatteryIcon,
  ZapIcon,
  GaugeIcon,
  TruckIcon,
  CheckIcon,
  PhoneIcon,
  ArrowRightIcon,
  CalendarIcon,
  UsersIcon,
} from "@/components/icons"
import { useState } from "react"

export default function CarDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const car = carsData.find((c) => c.id === id)
  const [selectedImage, setSelectedImage] = useState(0)

  if (!car) {
    notFound()
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU").format(price) + " сом"
  }

  const relatedCars = carsData
    .filter((c) => c.id !== car.id && (c.brand === car.brand || c.type === car.type))
    .slice(0, 3)

  const specs = [
    { label: "Батарея", value: `${car.batteryCapacity} кВт⋅ч`, icon: BatteryIcon },
    { label: "Запас хода", value: `${car.range} км`, icon: ZapIcon },
    { label: "Разгон 0-100", value: car.acceleration, icon: GaugeIcon },
    { label: "Макс. скорость", value: `${car.topSpeed} км/ч`, icon: GaugeIcon },
    { label: "Зарядка", value: car.charging, icon: ZapIcon },
    { label: "Количество мест", value: car.seats.toString(), icon: UsersIcon },
    { label: "Привод", value: car.drive, icon: CheckIcon },
    { label: "Год выпуска", value: car.year.toString(), icon: CalendarIcon },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        {/* Breadcrumbs */}
        <div className="container mx-auto px-4 mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Главная
            </Link>
            <span>/</span>
            <Link href="/catalog" className="hover:text-primary transition-colors">
              Каталог
            </Link>
            <span>/</span>
            <span className="text-foreground">
              {car.brand} {car.model}
            </span>
          </div>
        </div>

        {/* Car Details */}
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Image Gallery */}
            <div>
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 bg-muted">
                <img
                  src={car.images[selectedImage] || car.image}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-full object-cover"
                />
                {!car.inStock && <Badge className="absolute top-4 right-4 bg-red-500 text-white">Под заказ</Badge>}
                {car.inStock && <Badge className="absolute top-4 right-4 bg-green-500 text-white">В наличии</Badge>}
              </div>
              <div className="grid grid-cols-4 gap-4">
                {car.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index ? "border-primary" : "border-transparent hover:border-muted-foreground"
                    }`}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${car.brand} ${car.model} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Car Info */}
            <div>
              <div className="mb-6">
                <Badge variant="outline" className="mb-4 capitalize">
                  {car.type === "sedan"
                    ? "Седан"
                    : car.type === "suv"
                      ? "Внедорожник"
                      : car.type === "crossover"
                        ? "Кроссовер"
                        : "Хэтчбек"}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  {car.brand} {car.model}
                </h1>
                <p className="text-xl text-muted-foreground">{car.year} год выпуска</p>
              </div>

              <div className="mb-8">
                <p className="text-muted-foreground leading-relaxed">{car.description}</p>
              </div>

              <Card className="p-6 mb-8 bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Цена</p>
                    <p className="text-4xl font-bold text-primary">{formatPrice(car.price)}</p>
                    <p className="text-sm text-muted-foreground">${car.priceUSD.toLocaleString()}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground mb-1">Доставка</p>
                    <p className="text-xl font-semibold flex items-center gap-2">
                      <TruckIcon className="w-5 h-5 text-primary" />
                      {car.deliveryDays}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/contact" className="flex-1">
                    <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                      Оформить заказ
                      <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <a href="https://wa.me/996509090979" target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button size="lg" variant="outline" className="w-full bg-transparent">
                      <PhoneIcon className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                  </a>
                </div>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                {specs.slice(0, 4).map((spec, index) => (
                  <Card key={index} className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <spec.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{spec.label}</p>
                        <p className="font-semibold">{spec.value}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Detailed Information Tabs */}
          <Tabs defaultValue="specs" className="mb-16">
            <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto">
              <TabsTrigger value="specs">Характеристики</TabsTrigger>
              <TabsTrigger value="features">Комплектация</TabsTrigger>
              <TabsTrigger value="delivery">Доставка</TabsTrigger>
            </TabsList>

            <TabsContent value="specs" className="mt-8">
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">Технические характеристики</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {specs.map((spec, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-muted/30">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <spec.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{spec.label}</p>
                        <p className="text-lg font-semibold">{spec.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="features" className="mt-8">
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">Комплектация и особенности</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {car.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                      <CheckIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="delivery" className="mt-8">
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">Условия доставки</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <TruckIcon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Срок доставки</h3>
                      <p className="text-muted-foreground">
                        Доставка автомобиля занимает {car.deliveryDays}. Мы организуем полное сопровождение от момента
                        заказа до получения ключей.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <CheckIcon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Что включено</h3>
                      <ul className="text-muted-foreground space-y-2">
                        <li>• Таможенное оформление</li>
                        <li>• Страхование груза</li>
                        <li>• Доставка до Бишкека</li>
                        <li>• Регистрация в ГИБДД</li>
                        <li>• Техническая проверка</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <PhoneIcon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Отслеживание</h3>
                      <p className="text-muted-foreground">
                        Вы сможете отслеживать местоположение вашего автомобиля в режиме реального времени и получать
                        регулярные обновления о статусе доставки.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Related Cars */}
          {relatedCars.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold mb-8">Похожие автомобили</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedCars.map((relatedCar) => (
                  <Card key={relatedCar.id} className="overflow-hidden group hover:shadow-xl transition-all">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={relatedCar.image || "/placeholder.svg"}
                        alt={`${relatedCar.brand} ${relatedCar.model}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">
                        {relatedCar.brand} {relatedCar.model}
                      </h3>
                      <p className="text-2xl font-bold text-primary mb-4">{formatPrice(relatedCar.price)}</p>
                      <Link href={`/catalog/${relatedCar.id}`}>
                        <Button variant="outline" className="w-full bg-transparent">
                          Подробнее
                        </Button>
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
