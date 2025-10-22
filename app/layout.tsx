import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Electrogid KG - Продажа электромобилей в Кыргызстане | Бишкек',
  description: '🚗 Электромобили от 6,500$ в Бишкеке. Продажа, обслуживание, установка ЗУ. Доставка 15-35 дней. Trade-in. Официальный дилер.',
  keywords: 'электромобили, электрокары, Кыргызстан, Бишкек, купить электромобиль, зарядные станции, Weltmeister',
  openGraph: {
    title: 'Electrogid KG - Электромобили в Кыргызстане',
    description: 'Продажа и обслуживание электромобилей в Бишкеке',
    images: ['/electrogid_img.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
