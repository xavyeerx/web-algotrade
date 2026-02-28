import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, MessageCircle, ArrowRight } from "lucide-react"

const features = [
  "Sinyal Stockpick Mingguan (10-15 saham)",
  "Analisis Teknikal, Money Flow, Sentimen",
  "Strategi Swing Trading Terukur",
  "Akses Grup Telegram Eksklusif",
  "Update Real-time & Komunitas",
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Mulai Trading <span className="text-primary">Lebih Cerdas</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Investasi terbaik adalah investasi untuk pengetahuan dan tools yang tepat
          </p>
        </div>

        <Card className="bg-gradient-to-br from-card via-card to-secondary border-2 border-primary/50 overflow-hidden">
          <div className="bg-primary/10 px-6 py-3 text-center">
            <span className="text-sm font-medium text-primary">🔥 PROMO TERBATAS</span>
          </div>
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-4">1 Bulan Akses Algo Trade Screener</h3>
              <div className="flex items-center justify-center gap-4 mb-2">
                <span className="text-2xl text-muted-foreground line-through">RP 100.000</span>
                <span className="text-sm bg-primary/20 text-primary px-3 py-1 rounded-full font-medium">HEMAT 60%</span>
              </div>
              <p className="text-5xl sm:text-6xl font-bold text-accent">RP 40.000</p>
            </div>

            <div className="space-y-4 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <Check className="h-3 w-3 text-accent" />
                  </div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg rounded-xl group"
              asChild
            >
              <a href="https://wa.me/6285710884081" target="_blank" rel="noopener noreferrer">
                Daftar Sekarang
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-center text-sm text-muted-foreground mb-4">Hubungi Admin:</p>
              <div className="flex justify-center">
                <a
                  href="https://wa.me/6285710884081"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span className="text-sm">Admin: +62 821-3870-6794</span>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
