"use client"

import { useEffect, useRef } from "react"

export function CandlestickChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const candlesticks: { x: number; open: number; close: number; high: number; low: number; rising: boolean }[] = []
    const numCandles = 30

    for (let i = 0; i < numCandles; i++) {
      const open = Math.random() * 200 + 200
      const close = open + (Math.random() - 0.5) * 100
      const high = Math.max(open, close) + Math.random() * 30
      const low = Math.min(open, close) - Math.random() * 30
      candlesticks.push({
        x: (i / numCandles) * canvas.width + 50,
        open,
        close,
        high,
        low,
        rising: close > open,
      })
    }

    let offset = 0

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      candlesticks.forEach((candle, i) => {
        const x = candle.x + offset
        const wrappedX = (((x % (canvas.width + 100)) + canvas.width + 100) % (canvas.width + 100)) - 50

        const bodyWidth = 15
        const bodyTop = Math.min(candle.open, candle.close) + canvas.height / 2 - 200
        const bodyHeight = Math.abs(candle.close - candle.open)

        ctx.strokeStyle = candle.rising ? "rgba(34, 197, 94, 0.3)" : "rgba(239, 68, 68, 0.3)"
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(wrappedX, candle.low + canvas.height / 2 - 200)
        ctx.lineTo(wrappedX, candle.high + canvas.height / 2 - 200)
        ctx.stroke()

        ctx.fillStyle = candle.rising ? "rgba(34, 197, 94, 0.2)" : "rgba(239, 68, 68, 0.2)"
        ctx.fillRect(wrappedX - bodyWidth / 2, bodyTop, bodyWidth, Math.max(bodyHeight, 2))
      })

      offset -= 0.3
      requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0" />
}
