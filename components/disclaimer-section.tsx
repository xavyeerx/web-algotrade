import { AlertTriangle } from "lucide-react"

export function DisclaimerSection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border">
          <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center shrink-0">
            <AlertTriangle className="h-5 w-5 text-yellow-500" />
          </div>
          <div>
            <h3 className="font-semibold text-sm mb-2 flex items-center gap-2">⚠️ Disclaimer</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Algo Trade Screener bukan merupakan ajakan untuk membeli atau menjual saham. Semua rekomendasi bersifat
              informasi dan edukasi. Selalu lakukan analisis mandiri untuk memperkuat conviction Anda sebelum mengambil
              keputusan investasi. Stockpick yang diberikan tidak menjamin keuntungan 100% dan setiap keputusan trading
              sepenuhnya menjadi tanggung jawab masing-masing investor.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>© 2026 Algo Trade Screener. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
