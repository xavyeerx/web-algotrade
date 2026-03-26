"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, MessageCircle, ArrowRight, Crown, Flame, Star, Zap, Infinity } from "lucide-react"

const packages = [
  {
    name: "1 Bulan",
    price: "50.000",
    originalPrice: "100.000",
    discount: 50,
    icon: Zap,
    popular: false,
  },
  {
    name: "2 Bulan",
    price: "88.000",
    originalPrice: "200.000",
    discount: 56,
    icon: Flame,
    popular: false,
  },
  {
    name: "6 Bulan",
    price: "199.000",
    originalPrice: "600.000",
    discount: 67,
    icon: Star,
    popular: true,
  },
  {
    name: "1 Tahun",
    price: "299.000",
    originalPrice: "1.200.000",
    discount: 75,
    icon: Crown,
    popular: false,
  },
  {
    name: "Lifetime",
    price: "500.000",
    originalPrice: "2.000.000",
    discount: 75,
    icon: Infinity,
    popular: false,
  },
]

const features = [
  "Sinyal Stockpick Mingguan",
  "Analisis Teknikal & Sentimen",
  "Grup Telegram Eksklusif",
  "Modul Belajar Saham Pemula (Video)",
  "Modul Belajar Analisis Teknikal (Video)",
]

function getWhatsAppUrl(packageName: string) {
  const message = encodeURIComponent(
    `Halo kak, saya mau langganan paket ${packageName} Algo Trade Screener`
  )
  return `https://wa.me/6285710884081?text=${message}`
}

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Pilih <span className="text-primary">Paket Kamu</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Semua paket termasuk akses penuh ke fitur Algo Trade Screener
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {packages.map((pkg) => {
            const Icon = pkg.icon
            return (
              <Card
                key={pkg.name}
                className={`relative group transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 flex flex-col overflow-hidden
                  ${pkg.popular
                    ? "border-primary border-2 bg-gradient-to-b from-primary/10 via-card to-card shadow-lg shadow-primary/10"
                    : "border-border bg-card hover:border-primary/30"
                  }`}
              >
                {/* Popular Label */}
                {pkg.popular && (
                  <div className="bg-primary text-primary-foreground text-center py-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-widest">⭐ Paling Populer</span>
                  </div>
                )}

                <CardContent className={`flex flex-col flex-1 ${pkg.popular ? "p-5" : "p-5 pt-6"}`}>
                  {/* Header Row */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Icon className={`h-4 w-4 ${pkg.popular ? "text-primary" : "text-muted-foreground"}`} />
                      <span className="font-semibold text-sm">{pkg.name}</span>
                    </div>
                    <span className="text-[11px] font-bold bg-accent/15 text-accent px-2 py-0.5 rounded-full">
                      -{pkg.discount}%
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mb-5">
                    <p className="text-xs text-muted-foreground line-through">Rp {pkg.originalPrice}</p>
                    <p className={`text-2xl font-bold mt-0.5 ${pkg.popular ? "text-primary" : "text-accent"}`}>
                      Rp {pkg.price}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-border mb-4" />

                  {/* Features */}
                  <div className="space-y-2.5 mb-5 flex-1">
                    {features.map((f) => (
                      <div key={f} className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-accent shrink-0" />
                        <span className="text-xs text-muted-foreground">{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button
                    size="sm"
                    className={`w-full rounded-lg text-xs font-semibold group/btn
                      ${pkg.popular
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-md shadow-primary/25"
                        : "bg-secondary hover:bg-secondary/80 text-foreground"
                      }`}
                    asChild
                  >
                    <a href={getWhatsAppUrl(pkg.name)} target="_blank" rel="noopener noreferrer">
                      Pilih Paket
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Contact Admin */}
        <div className="mt-10 text-center">
          <a
            href="https://wa.me/6285710884081?text=Halo%20kak%2C%20saya%20mau%20tanya%20tentang%20Algo%20Trade%20Screener"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors text-sm"
          >
            <MessageCircle className="h-4 w-4" />
            Hubungi Admin
          </a>
        </div>
      </div>
    </section>
  )
}
