"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPinIcon, PhoneIcon, MailIcon, MessageCircleIcon } from "@/components/icons"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Свяжитесь с нами</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Готовы ответить на все ваши вопросы об электромобилях
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Наши контакты</h3>

            <div className="space-y-6 mb-8">
              {/* Address */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPinIcon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Адрес</div>
                  <div className="text-sm text-muted-foreground">Кок Жар 51, Бишкек, Кыргызстан</div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <PhoneIcon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Телефон</div>
                  <a
                    href="tel:+996509090979"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    +996 509 090 979
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MailIcon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Email</div>
                  <a
                    href="mailto:info@electrogid.kg"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    info@electrogid.kg
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircleIcon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold mb-1">WhatsApp</div>
                  <a
                    href="https://wa.me/996509090979"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Написать в WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-border h-64">
              <img src="/bishkek-kyrgyzstan-map.jpg" alt="Map" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Отправить сообщение</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Ваше имя
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
                  Телефон
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
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Сообщение
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

              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                Отправить сообщение
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
