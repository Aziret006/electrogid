import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  CarIcon,
  ZapIcon,
  WrenchIcon,
  ShieldIcon,
  TruckIcon,
  CreditCardIcon,
  HeadphonesIcon,
  CheckIcon,
} from "@/components/icons"

export default function ServicesPage() {
  const services = [
    {
      title: "Продажа электромобилей",
      description: "Широкий выбор новых и проверенных электромобилей от ведущих мировых производителей",
      icon: CarIcon,
      features: ["Автомобили от $6,500", "Более 15 моделей в наличии", "Гарантия качества", "Помощь в выборе"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Доставка под ключ",
      description: "Организуем доставку вашего автомобиля из-за рубежа с полным сопровождением",
      icon: TruckIcon,
      features: [
        "Доставка 15-35 дней",
        "Таможенное оформление",
        "Страхование груза",
        "Отслеживание в реальном времени",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Trade-in",
      description: "Обменяйте свой старый автомобиль на новый электромобиль с выгодой",
      icon: CreditCardIcon,
      features: ["Честная оценка", "Быстрое оформление", "Максимальная выгода", "Принимаем любые автомобили"],
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Установка зарядных станций",
      description: "Профессиональная установка домашних и коммерческих зарядных станций",
      icon: ZapIcon,
      features: [
        "Быстрые и медленные зарядки",
        "Монтаж под ключ",
        "Гарантия на оборудование",
        "Консультация по выбору",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Сервисное обслуживание",
      description: "Полный спектр услуг по обслуживанию и ремонту электромобилей",
      icon: WrenchIcon,
      features: ["Диагностика батареи", "Обновление ПО", "Замена комплектующих", "Регулярное ТО"],
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Гарантийное обслуживание",
      description: "Расширенная гарантия и страхование для вашего спокойствия",
      icon: ShieldIcon,
      features: ["Гарантия на батарею", "Страхование автомобиля", "Техподдержка 24/7", "Бесплатная эвакуация"],
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "Консультации",
      description: "Экспертные консультации по выбору и эксплуатации электромобилей",
      icon: HeadphonesIcon,
      features: ["Подбор модели", "Расчет экономии", "Обучение владельцев", "Поддержка после покупки"],
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Продажа комплектующих",
      description: "Оригинальные запчасти и аксессуары для электромобилей",
      icon: CheckIcon,
      features: ["Зарядные кабели", "Аксессуары для салона", "Защитные покрытия", "Оригинальные запчасти"],
      color: "from-teal-500 to-cyan-500",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4">Наши услуги</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Полный спектр услуг для владельцев электромобилей
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                От покупки до обслуживания - мы предоставляем все необходимое для комфортного владения электромобилем
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="p-8 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
                >
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 rounded-bl-full`}
                  />

                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-white transition-colors bg-transparent"
                    >
                      Узнать подробнее
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Готовы начать?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Свяжитесь с нами для получения консультации или записи на обслуживание
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/catalog">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Смотреть каталог
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    Связаться с нами
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
