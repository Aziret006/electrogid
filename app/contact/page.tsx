"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from "@/components/icons"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    alert("Спасибо за обращение! Мы свяжемся с вами в ближайшее время.")
    setFormData({ name: "", phone: "", email: "", message: "" })
  }

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: "Телефон",
      details: ["+996 509 090 979", "+996 XXX XXX XXX"],
      action: "tel:+996509090979",
    },
    {
      icon: MailIcon,
      title: "Email",
      details: ["info@Mtradingkg.kg", "support@Mttrading.kg"],
      action: "mailto:info@Mttrading.kg",
    },
    {
      icon: MapPinIcon,
      title: "Адрес",
      details: ["Кок Жар 51", "Бишкек, Кыргызстан"],
      action: "https://maps.google.com/?q=Кок+Жар+51+Бишкек",
    },
    {
      icon: ClockIcon,
      title: "Режим работы",
      details: ["Пн-Пт: 9:00 - 19:00", "Сб-Вс: 10:00 - 18:00"],
      action: null,
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
              <Badge className="mb-4">Контакты</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Свяжитесь с нами
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Мы всегда рады ответить на ваши вопросы и помочь с выбором электромобиля
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-3">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground mb-1">
                      {detail}
                    </p>
                  ))}
                  {info.action && (
                    <a
                      href={info.action}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline mt-2 inline-block"
                    >
                      Связаться
                    </a>
                  )}
                </Card>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">Отправить сообщение</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Ваше имя *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Введите ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Телефон *
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+996 XXX XXX XXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Сообщение *
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Расскажите, чем мы можем вам помочь..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Отправить сообщение
                  </Button>
                </form>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">Наше местоположение</h2>
                <div className="aspect-video rounded-lg overflow-hidden mb-6 border border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.0234567890123!2d74.6!3d42.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDUyJzEzLjIiTiA3NMKwMzYnMDAuMCJF!5e0!3m2!1sru!2skg!4v1234567890123!5m2!1sru!2skg"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Карта местоположения Mt trading kg "
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Как нас найти</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Мы находимся в центре Бишкека по адресу Кок Жар 51. Удобная парковка и легкий доступ на
                      общественном транспорте.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Ориентиры</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Рядом с торговым центром</li>
                      <li>• 5 минут от центра города</li>
                      <li>• Остановка общественного транспорта в 100м</li>
                    </ul>
                  </div>
                  <a href="https://maps.google.com/?q=Кок+Жар+51+Бишкек" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full bg-transparent">
                      Открыть в Google Maps
                    </Button>
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* WhatsApp CTA */}
        <section className="py-16 bg-gradient-to-r from-green-500/10 to-emerald-500/10">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Нужна быстрая консультация?</h2>
              <p className="text-muted-foreground mb-8">
                Напишите нам в WhatsApp и получите ответ в течение нескольких минут
              </p>
              <a href="https://wa.me/996509090979" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-green-500 hover:bg-green-600">
                  <PhoneIcon className="w-5 h-5 mr-2" />
                  Написать в WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
