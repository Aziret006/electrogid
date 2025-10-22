export interface Car {
  id: string
  brand: string
  model: string
  year: number
  price: number
  priceUSD: number
  image: string
  images: string[]
  type: "sedan" | "suv" | "crossover" | "hatchback"
  batteryCapacity: number
  range: number
  acceleration: string
  topSpeed: number
  charging: string
  seats: number
  drive: string
  features: string[]
  description: string
  inStock: boolean
  deliveryDays: string
}

export const carsData: Car[] = [
  {
    id: "tesla-model-3-2024",
    brand: "Tesla",
    model: "Model 3",
    year: 2024,
    price: 3250000,
    priceUSD: 36500,
    image: "/tesla-model-3.jpg",
    images: ["/tesla-model-3.jpg", "/tesla-model-3.png"],
    type: "sedan",
    batteryCapacity: 60,
    range: 491,
    acceleration: "3.1 сек",
    topSpeed: 261,
    charging: "250 кВт",
    seats: 5,
    drive: "Полный привод",
    features: ["Автопилот", "Панорамная крыша", "Премиум аудиосистема", "Подогрев сидений", "Камеры 360°"],
    description:
      "Tesla Model 3 - самый популярный электромобиль в мире. Сочетает в себе высокую производительность, передовые технологии и доступную цену.",
    inStock: true,
    deliveryDays: "15-20 дней",
  },
  {
    id: "byd-han-2024",
    brand: "BYD",
    model: "Han",
    year: 2024,
    price: 2800000,
    priceUSD: 31500,
    image: "/byd-han-sedan.jpg",
    images: ["/byd-han-sedan.jpg", "/byd-han-sedan.png"],
    type: "sedan",
    batteryCapacity: 85.4,
    range: 605,
    acceleration: "3.9 сек",
    topSpeed: 180,
    charging: "120 кВт",
    seats: 5,
    drive: "Полный привод",
    features: [
      "Blade Battery",
      "Адаптивный круиз-контроль",
      "Массаж сидений",
      "Панорамная крыша",
      "Система помощи при парковке",
    ],
    description:
      "BYD Han - премиальный электрический седан с революционной технологией Blade Battery, обеспечивающей максимальную безопасность и запас хода.",
    inStock: true,
    deliveryDays: "20-25 дней",
  },
  {
    id: "volkswagen-id4-2024",
    brand: "Volkswagen",
    model: "ID.4",
    year: 2024,
    price: 3100000,
    priceUSD: 34800,
    image: "/volkswagen-id4-electric-suv.jpg",
    images: ["/volkswagen-id4-electric-suv.jpg", "/volkswagen-id-4-electric-suv.jpg"],
    type: "suv",
    batteryCapacity: 77,
    range: 520,
    acceleration: "6.2 сек",
    topSpeed: 180,
    charging: "125 кВт",
    seats: 5,
    drive: "Полный привод",
    features: [
      "IQ.DRIVE ассистенты",
      "Дополненная реальность",
      "Голосовое управление",
      "Беспроводная зарядка",
      "LED Matrix фары",
    ],
    description:
      "Volkswagen ID.4 - просторный электрический кроссовер с немецким качеством и передовыми технологиями для комфортных путешествий.",
    inStock: true,
    deliveryDays: "25-30 дней",
  },
  {
    id: "nissan-leaf-2024",
    brand: "Nissan",
    model: "Leaf",
    year: 2024,
    price: 1950000,
    priceUSD: 21900,
    image: "/nissan-leaf-electric-car.jpg",
    images: ["/nissan-leaf-electric-car.jpg", "/nissan-leaf-electric-car.png"],
    type: "hatchback",
    batteryCapacity: 62,
    range: 385,
    acceleration: "6.9 сек",
    topSpeed: 157,
    charging: "100 кВт",
    seats: 5,
    drive: "Передний привод",
    features: ["ProPILOT Assist", "e-Pedal", "Подогрев руля", "Система кругового обзора", "Apple CarPlay"],
    description:
      "Nissan Leaf - проверенный временем электромобиль с отличным соотношением цены и качества. Идеален для городской езды.",
    inStock: true,
    deliveryDays: "15-20 дней",
  },
  {
    id: "hyundai-ioniq5-2024",
    brand: "Hyundai",
    model: "IONIQ 5",
    year: 2024,
    price: 2950000,
    priceUSD: 33100,
    image: "/hyundai-ioniq-5-electric-crossover.jpg",
    images: ["/hyundai-ioniq-5-electric-crossover.jpg"],
    type: "crossover",
    batteryCapacity: 77.4,
    range: 481,
    acceleration: "5.2 сек",
    topSpeed: 185,
    charging: "350 кВт",
    seats: 5,
    drive: "Полный привод",
    features: [
      "Ультрабыстрая зарядка",
      "V2L функция",
      "Раздвижная консоль",
      "Релаксационные сиденья",
      "Дополненная реальность HUD",
    ],
    description:
      "Hyundai IONIQ 5 - футуристичный кроссовер с ультрабыстрой зарядкой и уникальным дизайном. Заряжается от 10% до 80% за 18 минут.",
    inStock: true,
    deliveryDays: "20-25 дней",
  },
  {
    id: "audi-etron-2024",
    brand: "Audi",
    model: "e-tron",
    year: 2024,
    price: 4200000,
    priceUSD: 47200,
    image: "/audi-etron-electric-suv.jpg",
    images: ["/audi-etron-electric-suv.jpg", "/audi-e-tron-electric-suv.jpg"],
    type: "suv",
    batteryCapacity: 95,
    range: 436,
    acceleration: "5.7 сек",
    topSpeed: 200,
    charging: "150 кВт",
    seats: 5,
    drive: "Полный привод",
    features: ["Виртуальные зеркала", "Пневмоподвеска", "Bang & Olufsen аудио", "Matrix LED фары", "Массаж сидений"],
    description:
      "Audi e-tron - премиальный электрический SUV с роскошным интерьером и передовыми технологиями. Воплощение немецкого качества.",
    inStock: false,
    deliveryDays: "30-35 дней",
  },
  {
    id: "tesla-model-y-2024",
    brand: "Tesla",
    model: "Model Y",
    year: 2024,
    price: 3650000,
    priceUSD: 41000,
    image: "/tesla-model-y-white-electric-suv.jpg",
    images: ["/tesla-model-y-white-electric-suv.jpg"],
    type: "suv",
    batteryCapacity: 75,
    range: 533,
    acceleration: "3.5 сек",
    topSpeed: 250,
    charging: "250 кВт",
    seats: 7,
    drive: "Полный привод",
    features: ["Автопилот", "7 мест", "Панорамная крыша", "Премиум аудио", "Сверхбыстрая зарядка"],
    description:
      "Tesla Model Y - самый безопасный кроссовер в своем классе. Просторный салон на 7 человек и впечатляющая динамика.",
    inStock: true,
    deliveryDays: "15-20 дней",
  },
  {
    id: "byd-atto3-2024",
    brand: "BYD",
    model: "Atto 3",
    year: 2024,
    price: 2350000,
    priceUSD: 26400,
    image: "/byd-atto-3-blue-electric-crossover.jpg",
    images: ["/byd-atto-3-blue-electric-crossover.jpg"],
    type: "crossover",
    batteryCapacity: 60.48,
    range: 420,
    acceleration: "7.3 сек",
    topSpeed: 160,
    charging: "80 кВт",
    seats: 5,
    drive: "Передний привод",
    features: [
      "Blade Battery",
      "Вращающийся экран",
      "Панорамная крыша",
      "Адаптивный круиз",
      "Система контроля слепых зон",
    ],
    description:
      "BYD Atto 3 - компактный кроссовер с уникальным дизайном интерьера и безопасной батареей Blade. Отличный выбор для города.",
    inStock: true,
    deliveryDays: "18-23 дней",
  },
]

export const brands = Array.from(new Set(carsData.map((car) => car.brand))).sort()
export const types = Array.from(new Set(carsData.map((car) => car.type)))
export const years = Array.from(new Set(carsData.map((car) => car.year))).sort((a, b) => b - a)
