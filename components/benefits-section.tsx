import { Card, CardContent } from "@/components/ui/card"
import { Send, BarChart3, Target, Users, BookOpen } from "lucide-react"

const benefits = [
  {
    icon: Send,
    title: "Sinyal Stockpick Mingguan",
    description:
      "Dapatkan 10-15 rekomendasi saham pilihan setiap minggu untuk swing trade hasil screening algoritma Tradingview.",
  },
  {
    icon: BarChart3,
    title: "Analisis Teknikal, Money Flow, dan Sentimen",
    description:
      "Setiap rekomendasi dilengkapi analisis lengkap meliputi candlestick patterns, indikator teknikal, valuasi fundamental, dan sentimen pasar.",
  },
  {
    icon: Target,
    title: "Strategi Swing Trading Terukur",
    description:
      "Fokus pada time horizon 3-7 hari hingga beberapa minggu dengan entry dan stoploss tren yang jelas berdasarkan algoritma.",
  },
  {
    icon: Users,
    title: "Akses Grup Telegram Eksklusif",
    description:
      "Update stockpick rekomendasi, insight breakdown analisis, dan komunitas saham untuk diskusi dan networking.",
  },
  {
    icon: BookOpen,
    title: "Transparansi dan Edukasi",
    description:
      "Penjelasan logika di balik setiap rekomendasi untuk meningkatkan pemahaman dan kemampuan analisis Anda.",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Apa yang Anda <span className="text-primary">Dapatkan?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            5 keuntungan utama bergabung dengan Algo Trade Screener
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={benefit.title}
              className={`bg-card border-border hover:border-primary/50 transition-all duration-300 ${
                index === benefits.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-3">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
