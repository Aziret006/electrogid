import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckIcon, ZapIcon, ShieldIcon, UsersIcon } from "@/components/icons"

export default function AboutPage() {
  const stats = [
    { label: "Лет на рынке", value: "4+", icon: CheckIcon },
    { label: "Довольных клиентов", value: "500+", icon: UsersIcon },
    { label: "Моделей в наличии", value: "15+", icon: ZapIcon },
    { label: "Гарантия качества", value: "100%", icon: ShieldIcon },
  ]

  const values = [
    {
      title: "Качество",
      description: "Мы работаем только с проверенными поставщиками и предлагаем автомобили высочайшего качества",
      icon: ShieldIcon,
    },
    {
      title: "Прозрачность",
      description: "Честные цены, полная информация о каждом автомобиле и прозрачные условия сделки",
      icon: CheckIcon,
    },
    {
      title: "Инновации",
      description: "Мы следим за последними технологиями и предлагаем самые современные Автомобили",
      icon: ZapIcon,
    },
    {
      title: "Клиентоориентированность",
      description: "Индивидуальный подход к каждому клиенту и поддержка на всех этапах покупки",
      icon: UsersIcon,
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
              <Badge className="mb-4">О компании</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Mt trading kg - Ваш проводник в мир электромобилей
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Мы специализируемся на продаже и обслуживании электромобилей в Кыргызстане. Наша миссия - сделать
                экологичный транспорт доступным для каждого.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                  <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Наша история</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Mt trading kg была основана в 2020 году группой энтузиастов, которые верили в будущее электрического
                  транспорта. Мы начинали с небольшого офиса и нескольких автомобилей, но наша страсть к инновациям и
                  качественному сервису помогла нам вырасти в одну из ведущих компаний по продаже электромобилей в
                  Кыргызстане.
                </p>
                <p>
                  За более чем 4 года работы мы помогли сотням клиентов перейти на экологичный транспорт. Мы гордимся
                  тем, что каждый проданный нами автомобиль - это вклад в чистое будущее нашей страны.
                </p>
                <p>
                  Сегодня Mt trading kg - это не просто автосалон. Это полноценная экосистема для владельцев
                  электромобилей: от продажи и доставки до установки зарядных станций и сервисного обслуживания.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Наши ценности</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Наша команда</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Команда Mt trading kg состоит из профессионалов с многолетним опытом в автомобильной индустрии. Мы
                постоянно обучаемся и следим за новейшими технологиями, чтобы предоставлять нашим клиентам лучший
                сервис.
              </p>
              <p className="text-muted-foreground">
                Каждый член нашей команды разделяет нашу страсть к электромобилям и стремление сделать мир чище и лучше.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
