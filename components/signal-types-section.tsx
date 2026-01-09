import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Plus, Pause, X } from "lucide-react"

const signals = [
  {
    icon: TrendingUp,
    title: "STRONG BUY",
    description:
      "Berada di kondisi teknikal terbaik, didukung tren yang kuat dan minat beli yang dominan. Potensi kenaikan tinggi, ideal untuk entry swing.",
    color: "text-accent",
    bgColor: "bg-accent",
    borderColor: "border-accent/50",
  },
  {
    icon: Plus,
    title: "ACCUMULATE",
    description:
      "Mulai menunjukkan tanda penguatan, namun masih dalam fase persiapan. Cocok untuk akumulasi bertahap sambil menunggu momentum lanjutan.",
    color: "text-emerald-400",
    bgColor: "bg-emerald-500",
    borderColor: "border-emerald-500/50",
  },
  {
    icon: Pause,
    title: "HOLD",
    description:
      "Berada dalam tren yang sehat, namun peluang entry baru sudah terbatas. Lebih optimal untuk menahan posisi yang sudah dimiliki.",
    color: "text-yellow-400",
    bgColor: "bg-yellow-500",
    borderColor: "border-yellow-500/50",
  },
  {
    icon: X,
    title: "AVOID",
    description:
      "Berada di kondisi kurang ideal atau berisiko tinggi. Disarankan menghindari entry hingga struktur dan momentum membaik.",
    color: "text-primary",
    bgColor: "bg-primary",
    borderColor: "border-primary/50",
  },
]

export function SignalTypesSection() {
  return (
    <section id="signals" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Tipe <span className="text-primary">Sinyal Saham</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            4 kategori sinyal saham untuk membantu Anda mengambil keputusan trading saham yang tepat
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {signals.map((signal) => (
            <Card
              key={signal.title}
              className={`bg-card border-2 ${signal.borderColor} hover:scale-105 transition-transform duration-300`}
            >
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-xl ${signal.bgColor}/20 flex items-center justify-center mb-4`}>
                  <signal.icon className={`h-6 w-6 ${signal.color}`} />
                </div>
                <h3 className={`font-bold text-lg mb-3 ${signal.color}`}>{signal.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{signal.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
