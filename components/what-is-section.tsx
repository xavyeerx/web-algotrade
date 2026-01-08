import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, BarChart3, Zap } from "lucide-react"

export function WhatIsSection() {
  return (
    <section id="what-is" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Apa itu <span className="text-primary">Algo Trade Screener?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Algo Trade Screener adalah sinyal trading premium bagi trader yang ingin mendapatkan screening saham-saham
            pilihan melalui analisis algoritma trading berbasis data dan coding, bukan sekadar opini, feeling, atau
            tebakan pasar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <p className="text-muted-foreground leading-relaxed">
                Di dalam Algo Trade Screener, setiap saham yang dibagikan telah melewati
                <span className="text-accent font-medium"> screening ketat </span>
                untuk mencari saham yang breakout tren bullish, didukung oleh money flow, volume, dan momentum, sehingga
                memiliki potensi melanjutkan kenaikan untuk swing trade mingguan.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <p className="text-muted-foreground leading-relaxed">
                Setiap minggunya akan ada
                <span className="text-accent font-medium"> Stockpick 10-15 saham </span>
                dengan Potensi Upside Tinggi dan sudah terbukti memberikan hasil yang konsisten bagi para member yang
                mengikuti rekomendasi kami.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-card to-secondary border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Teknikal</h3>
              <p className="text-sm text-muted-foreground">
                Analisis candlestick patterns dan indikator teknikal terkini
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-card to-secondary border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Flow</h3>
              <p className="text-sm text-muted-foreground">Deteksi money flow dan akumulasi market maker</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-card to-secondary border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 rounded-xl bg-chart-3/10 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-7 w-7 text-chart-3" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Sentimen</h3>
              <p className="text-sm text-muted-foreground">Analisis sentimen pasar untuk timing entry optimal</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
