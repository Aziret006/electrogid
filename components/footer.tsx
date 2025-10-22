import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/icons"

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold text-white">EG</span>
              </div>
              <div>
                <div className="text-lg font-bold">ELECTRO GID</div>
                <div className="text-xs text-muted-foreground">Электромобили</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">Продажа и обслуживание электромобилей в Кыргызстане</p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/electrogid.kg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
              >
                <YoutubeIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Быстрые ссылки</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#hero" className="text-muted-foreground hover:text-primary transition-colors">
                  Главная
                </a>
              </li>
              <li>
                <a href="#catalog" className="text-muted-foreground hover:text-primary transition-colors">
                  Каталог
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Продажа электромобилей</li>
              <li className="text-muted-foreground">Trade-in</li>
              <li className="text-muted-foreground">Установка зарядных станций</li>
              <li className="text-muted-foreground">Продажа комплектующих</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Кок Жар 51, Бишкек</li>
              <li>
                <a href="tel:+996509090979" className="text-muted-foreground hover:text-primary transition-colors">
                  +996 509 090 979
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@electrogid.kg"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@electrogid.kg
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/996509090979"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 ELECTRO GID. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
