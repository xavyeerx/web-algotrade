"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Calendar, Percent, CheckCircle2, X, ChevronLeft, ChevronRight, ImageIcon, MessageSquare } from "lucide-react"

interface FloatingProfitImage {
  stock: string
  profit: string
  image: string
}

interface TrackRecord {
  date: string
  stocks: number
  successRate: string
  profit: string
  description: string
  floatingProfitImages?: FloatingProfitImage[]
  callProofImage?: string
}

const trackRecords: TrackRecord[] = [
  {
    date: "5 Januari 2026",
    stocks: 7,
    successRate: "5 dari 7",
    profit: "19.84%",
    description:
      "Hari Minggu Algo Trade melakukan screening dan mendapatkan stockpick terbaik yang siap untuk pembelian pada Senin. Rata-rata floating profit dalam 3 hari.",
    callProofImage: "/floating-profit/5-januari-2026/call-proof.png",
    floatingProfitImages: [
      { stock: "TRIN", profit: "+30.63%", image: "/floating-profit/5-januari-2026/trin.png" },
      { stock: "TRUE", profit: "+49.78%", image: "/floating-profit/5-januari-2026/true.png" },
      { stock: "KPIG", profit: "+34.83%", image: "/floating-profit/5-januari-2026/kpig.png" },
      { stock: "ANTM", profit: "+19.03%", image: "/floating-profit/5-januari-2026/antm.png" },
      { stock: "MINA", profit: "+13.16%", image: "/floating-profit/5-januari-2026/mina.png" },
      { stock: "JPFA", profit: "-8.41%", image: "/floating-profit/5-januari-2026/jpfa.png" },
      { stock: "TNCA", profit: "-0.15%", image: "/floating-profit/5-januari-2026/tnca.png" },
    ],
  },
  {
    date: "6 Januari 2026",
    stocks: 5,
    successRate: "4 dari 5",
    profit: "12.39%",
    description:
      "Selasa jam 08.11 Algo Trade melakukan screening dan mendapatkan stockpick terbaik. Rata-rata floating profit dalam 2 hari.",
    callProofImage: "/floating-profit/6-januari-2026/call-proof.png",
    floatingProfitImages: [
      { stock: "OASA", profit: "+29.77%", image: "/floating-profit/6-januari-2026/oasa.png" },
      { stock: "INPC", profit: "+27.31%", image: "/floating-profit/6-januari-2026/inpc.png" },
      { stock: "BUVA", profit: "+7.48%", image: "/floating-profit/6-januari-2026/buva.png" },
      { stock: "VINS", profit: "+8.85%", image: "/floating-profit/6-januari-2026/vins.png" },
      { stock: "BBYB", profit: "-4.90%", image: "/floating-profit/6-januari-2026/bbyb.png" },
    ],
  },
]

export function TrackRecordSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentRecordImages, setCurrentRecordImages] = useState<FloatingProfitImage[]>([])
  const [callProofOpen, setCallProofOpen] = useState<string | null>(null)

  const openLightbox = (images: FloatingProfitImage[], index: number) => {
    setCurrentRecordImages(images)
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? currentRecordImages.length - 1 : prev - 1
    )
  }

  const goToNext = () => {
    setCurrentImageIndex((prev) => 
      prev === currentRecordImages.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <>
      <section id="track-record" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              History of <span className="text-accent">Stockpick</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Track record nyata dari rekomendasi Algo Trade Screener
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {trackRecords.map((record) => (
              <Card key={record.date} className="bg-gradient-to-br from-card to-secondary border-border overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6 border-b border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Calendar className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-semibold text-lg">{record.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{record.description}</p>
                  </div>

                  <div className="grid grid-cols-3 divide-x divide-border">
                    <div className="p-6 text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <TrendingUp className="h-4 w-4 text-accent" />
                      </div>
                      <p className="text-2xl font-bold text-accent">{record.stocks}</p>
                      <p className="text-xs text-muted-foreground">Saham</p>
                    </div>
                    <div className="p-6 text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <CheckCircle2 className="h-4 w-4 text-accent" />
                      </div>
                      <p className="text-2xl font-bold">{record.successRate}</p>
                      <p className="text-xs text-muted-foreground">Sudah Jalan</p>
                    </div>
                    <div className="p-6 text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Percent className="h-4 w-4 text-accent" />
                      </div>
                      <p className="text-2xl font-bold text-accent">{record.profit}</p>
                      <p className="text-xs text-muted-foreground">Avg Profit</p>
                    </div>
                  </div>

                  {/* Call Proof Section */}
                  {record.callProofImage && (
                    <div className="p-6 border-t border-border">
                      <div className="flex items-center gap-2 mb-4">
                        <MessageSquare className="h-4 w-4 text-accent" />
                        <span className="text-sm font-medium">Bukti Call (Watchlist)</span>
                      </div>
                      <button
                        onClick={() => setCallProofOpen(record.callProofImage!)}
                        className="group relative w-full max-w-sm aspect-[4/3] rounded-lg overflow-hidden bg-secondary hover:ring-2 hover:ring-accent transition-all"
                      >
                        <Image
                          src={record.callProofImage}
                          alt="Bukti Call Watchlist"
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                      </button>
                    </div>
                  )}

                  {/* Floating Profit Gallery */}
                  {record.floatingProfitImages && record.floatingProfitImages.length > 0 && (
                    <div className="p-6 border-t border-border">
                      <div className="flex items-center gap-2 mb-4">
                        <ImageIcon className="h-4 w-4 text-accent" />
                        <span className="text-sm font-medium">Bukti Floating Profit</span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {record.floatingProfitImages.map((img, index) => (
                          <button
                            key={img.stock}
                            onClick={() => openLightbox(record.floatingProfitImages!, index)}
                            className="group relative aspect-[16/10] rounded-lg overflow-hidden bg-secondary hover:ring-2 hover:ring-accent transition-all"
                          >
                            <Image
                              src={img.image}
                              alt={`${img.stock} floating profit`}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-2">
                              <p className="text-xs font-bold text-white">{img.stock}</p>
                              <p className="text-xs text-accent font-semibold">{img.profit}</p>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground italic">
              &ldquo;Setiap entry dilandasi dengan tesis, dan alasan yang jelas&rdquo;
            </p>
            <p className="text-xs text-muted-foreground mt-2">#lahir dari riset, bukan sekadar feeling</p>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && currentRecordImages.length > 0 && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="h-6 w-6 text-white" />
          </button>

          {/* Navigation Buttons */}
          {currentRecordImages.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                className="absolute left-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="h-8 w-8 text-white" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); goToNext(); }}
                className="absolute right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="h-8 w-8 text-white" />
              </button>
            </>
          )}

          {/* Image Container */}
          <div 
            className="relative max-w-4xl max-h-[80vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={currentRecordImages[currentImageIndex].image}
                alt={`${currentRecordImages[currentImageIndex].stock} floating profit`}
                fill
                className="object-contain"
              />
            </div>
            <div className="text-center mt-4">
              <p className="text-xl font-bold text-white">
                {currentRecordImages[currentImageIndex].stock}
              </p>
              <p className="text-2xl font-bold text-accent">
                {currentRecordImages[currentImageIndex].profit}
              </p>
              <p className="text-sm text-white/60 mt-2">
                {currentImageIndex + 1} / {currentRecordImages.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Call Proof Modal */}
      {callProofOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setCallProofOpen(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setCallProofOpen(null)}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="h-6 w-6 text-white" />
          </button>

          {/* Image Container */}
          <div 
            className="relative max-w-2xl max-h-[80vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={callProofOpen}
                alt="Bukti Call Watchlist"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-center mt-4">
              <p className="text-xl font-bold text-white">
                Bukti Call Watchlist
              </p>
              <p className="text-sm text-white/60 mt-2">
                Screenshot rekomendasi saham
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
