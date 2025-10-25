import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Mt trading kg - Продажа электромобилей в Кыргызстане | Бишкек',
  description: '🚗 Автомобили от 6,500$ в Бишкеке. Продажа, обслуживание, установка ЗУ. Доставка 15-35 дней. Trade-in. Официальный дилер.',
  keywords: 'Автомобили, электрокары, Кыргызстан, Бишкек, купить , зарядные станции, Weltmeister',
  openGraph: {
    title: 'Mt trading kg - Автомобили в Кыргызстане',
    description: 'Продажа и обслуживание Автомобилилей в Бишкеке',
    images: ['/mtrading.jpg'],
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
