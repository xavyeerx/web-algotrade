import { Card, CardContent } from "@/components/ui/card"
import { Shield, Target, PieChart, CalendarClock, Quote } from "lucide-react"

const mitigations = [
  {
    icon: Shield,
    title: "Stop Loss yang Disiplin",
    description: "Selalu gunakan stop loss untuk membatasi kerugian maksimal per transaksi",
  },
  {
    icon: PieChart,
    title: "Position Sizing yang Cerdas",
    description: "Jangan all-in, alokasikan porsi yang tepat untuk setiap posisi",
  },
  {
    icon: CalendarClock,
    title: "Entry Planning (Cicil Beli)",
    description: "Masuk bertahap untuk mendapatkan harga rata-rata yang lebih baik",
  },
]

export function RiskManagementSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Risks & <span className="text-primary">Management</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Volatilitas tinggi membuka peluang keuntungan besar, namun juga risiko loss yang sama besarnya
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <Card className="bg-card border-border h-full">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl">Volatility</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Volatilitas tinggi membuka peluang keuntungan besar, namun juga risiko loss yang sama besarnya. Dengan
                  data dan technical analysis yang solid, kita bisa membaca momentum pasar dan mengambil edge dari
                  pergerakan yang ekstrem tersebut.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
              <Shield className="h-5 w-5 text-accent" />3 Pilar Mitigasi Risiko
            </h3>
            {mitigations.map((item, index) => (
              <Card key={item.title} className="bg-card border-border">
                <CardContent className="p-4 flex items-start gap-4">
                  <span className="text-2xl font-bold text-primary/30">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="mt-12 bg-gradient-to-r from-card to-secondary border-border">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <Quote className="h-8 w-8 text-primary shrink-0" />
              <div>
                <p className="text-lg italic text-foreground mb-4">
                  &ldquo;Cara membangun return jangka panjang adalah dengan melindungi modal dan memaksimalkan potensi
                  profit.&rdquo;
                </p>
                <p className="text-sm text-muted-foreground font-medium">— STANLEY DRUCKENMILLER</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
