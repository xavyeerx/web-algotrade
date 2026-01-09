"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, BarChart3, Zap } from "lucide-react"
import { CandlestickChart } from "@/components/candlestick-chart"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      <div className="absolute inset-0 opacity-30">
        <CandlestickChart />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-sm text-accent font-medium">Sinyal Trading Saham Premium</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-balance">
            Daftar dan Join <span className="text-primary">Sekarang</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            1 BULAN AKSES ALGO TRADE SCREENER
          </p>

          {/* Price */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-2xl text-muted-foreground line-through">RP 100.000</span>
            <span className="text-5xl sm:text-6xl font-bold text-accent">RP 40.000</span>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-xl group"
              asChild
            >
              <a href="https://wa.me/6282138706794" target="_blank" rel="noopener noreferrer">
                Daftar Sekarang
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 pt-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <TrendingUp className="h-5 w-5 text-accent" />
              <span>Teknikal</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <BarChart3 className="h-5 w-5 text-accent" />
              <span>Flow</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Zap className="h-5 w-5 text-accent" />
              <span>Sentimen</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
