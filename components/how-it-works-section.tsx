import { Card, CardContent } from "@/components/ui/card"
import { Filter, TrendingUp, DollarSign, Clock } from "lucide-react"

const steps = [
  {
    icon: Filter,
    title: "Market Context Filtering",
    description:
      "Screener akan membaca kondisi market secara keseluruhan untuk memastikan saham yang dipilih memiliki peluang pergerakan naik dan mendekati harga support/belum tinggi.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: TrendingUp,
    title: "Smart Trend Identification",
    description:
      "Screener akan mengidentifikasi saham yang sedang memasuki fase tren naik, menunjukkan perubahan struktur harga yang positif, dan memiliki potensi lanjutan pergerakan.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: DollarSign,
    title: "Money Flow Detection",
    description:
      "Screener akan menangkap momen saat market maker mulai masuk ke sebuah saham, pergerakan kuat yang didorong oleh minat beli dan akumulasi market yang solid.",
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
  },
  {
    icon: Clock,
    title: "Entry Timing Optimization",
    description:
      "Screener menyeleksi saham yang berada di timing terbaik untuk masuk, mempertimbangkan keseimbangan antara peluang dan risiko untuk menghindari entry yang salah.",
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Bagaimana <span className="text-primary">Screener Bekerja?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            4 langkah sistematis untuk menemukan saham dengan probabilitas tinggi
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card
              key={step.title}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl ${step.bgColor} flex items-center justify-center`}>
                    <step.icon className={`h-6 w-6 ${step.color}`} />
                  </div>
                  <span className="text-4xl font-bold text-muted-foreground/30 group-hover:text-primary/30 transition-colors">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
