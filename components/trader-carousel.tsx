"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Users, Flame, TrendingUp, Award } from "lucide-react"
import { cn } from "@/lib/utils"

interface Trader {
  id: number
  name: string
  username: string
  avatar: string
  rating: number
  followers: number
  bio: string
  badges: string[]
  category: string
  accentColor: "green" | "red"
}

const traders: Trader[] = [
  {
    id: 1,
    name: "Max 🔥",
    username: "@CryptOtters_",
    avatar: "/placeholder.svg?height=120&width=120",
    rating: 5.0,
    followers: 1000,
    bio: "@realwbacademyfr @WB_group_ Still poor, but here for the Tech",
    badges: ["Fiable", "Trusted 100%"],
    category: "CRYPTO",
    accentColor: "green",
  },
  {
    id: 2,
    name: "Mohamed",
    username: "@LetalDanny",
    avatar: "/placeholder.svg?height=120&width=120",
    rating: 0.0,
    followers: 11,
    bio: "Simple & Létal",
    badges: ["Mytho", "Toxic"],
    category: "CRYPTO",
    accentColor: "red",
  },
  {
    id: 3,
    name: "Sarah",
    username: "@TradingQueen",
    avatar: "/placeholder.svg?height=120&width=120",
    rating: 4.9,
    followers: 1200,
    bio: "Expert en analyse technique et stratégies de trading",
    badges: ["Expert", "Verified"],
    category: "FOREX",
    accentColor: "green",
  },
  {
    id: 4,
    name: "Alex",
    username: "@MarketMaster",
    avatar: "/placeholder.svg?height=120&width=120",
    rating: 4.7,
    followers: 950,
    bio: "Spécialiste des marchés boursiers et crypto",
    badges: ["Pro", "Analyst"],
    category: "STOCKS",
    accentColor: "red",
  },
]

export function TraderCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % traders.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + traders.length) % traders.length)
    setIsAutoPlaying(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % traders.length)
    setIsAutoPlaying(false)
  }

  const getPrevIndex = () => (currentIndex - 1 + traders.length) % traders.length
  const getNextIndex = () => (currentIndex + 1) % traders.length

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4">
      <div className="text-center mb-10 space-y-3">
        <div className="inline-flex items-center gap-3">
          <Flame className="w-7 h-7 text-primary animate-pulse" />
          <h2 className="text-4xl font-black tracking-tight text-balance" style={{ fontFamily: "var(--font-display)" }}>
            MEILLEURS TRADERS
          </h2>
          <Flame className="w-7 h-7 text-accent animate-pulse" />
        </div>
        <p className="text-muted-foreground text-base font-medium tracking-wide">
          Suivez les meilleurs influenceurs de la communauté
        </p>
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          <TrendingUp className="w-4 h-4 text-primary" />
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
        </div>
      </div>

      <div className="relative rounded-3xl bg-gradient-to-br from-card/40 via-card/30 to-card/20 backdrop-blur-xl border border-border/40 p-6 overflow-hidden shadow-2xl">
        <div className="absolute inset-0 opacity-20">
          {/* Base animated grid */}
          <div
            className="absolute inset-0 animate-grid-glow"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,255,136,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.2) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>

          {/* Electric pulse lines - horizontal */}
          <div
            className="absolute inset-0 animate-electric-h"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(0,255,136,0.8) 50%, transparent 100%)",
              backgroundSize: "200px 1px",
              backgroundRepeat: "repeat-y",
              backgroundPosition: "0% 40px",
              height: "1px",
              top: "40px",
            }}
          ></div>
          <div
            className="absolute inset-0 animate-electric-h"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(255,23,68,0.8) 50%, transparent 100%)",
              backgroundSize: "200px 1px",
              backgroundRepeat: "repeat-y",
              backgroundPosition: "0% 80px",
              height: "1px",
              top: "80px",
              animationDelay: "1.5s",
            }}
          ></div>
          <div
            className="absolute inset-0 animate-electric-h"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(0,255,136,0.6) 50%, transparent 100%)",
              backgroundSize: "200px 1px",
              backgroundRepeat: "repeat-y",
              backgroundPosition: "0% 120px",
              height: "1px",
              top: "120px",
              animationDelay: "0.8s",
            }}
          ></div>

          {/* Electric pulse lines - vertical */}
          <div
            className="absolute inset-0 animate-electric-v"
            style={{
              background: "linear-gradient(180deg, transparent 0%, rgba(0,255,136,0.8) 50%, transparent 100%)",
              backgroundSize: "1px 200px",
              backgroundRepeat: "repeat-x",
              backgroundPosition: "40px 0%",
              width: "1px",
              left: "40px",
              animationDelay: "0.5s",
            }}
          ></div>
          <div
            className="absolute inset-0 animate-electric-v"
            style={{
              background: "linear-gradient(180deg, transparent 0%, rgba(255,23,68,0.8) 50%, transparent 100%)",
              backgroundSize: "1px 200px",
              backgroundRepeat: "repeat-x",
              backgroundPosition: "80px 0%",
              width: "1px",
              left: "80px",
              animationDelay: "2s",
            }}
          ></div>
          <div
            className="absolute inset-0 animate-electric-v"
            style={{
              background: "linear-gradient(180deg, transparent 0%, rgba(0,255,136,0.6) 50%, transparent 100%)",
              backgroundSize: "1px 200px",
              backgroundRepeat: "repeat-x",
              backgroundPosition: "120px 0%",
              width: "1px",
              left: "120px",
              animationDelay: "1.2s",
            }}
          ></div>

          {/* Glowing intersection points */}
          <div
            className="absolute w-1 h-1 rounded-full bg-primary shadow-[0_0_10px_rgba(0,255,136,0.8)] animate-pulse-glow"
            style={{ top: "40px", left: "40px", animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute w-1 h-1 rounded-full bg-accent shadow-[0_0_10px_rgba(255,23,68,0.8)] animate-pulse-glow"
            style={{ top: "80px", left: "80px", animationDelay: "2s" }}
          ></div>
          <div
            className="absolute w-1 h-1 rounded-full bg-primary shadow-[0_0_10px_rgba(0,255,136,0.8)] animate-pulse-glow"
            style={{ top: "120px", left: "120px", animationDelay: "1.2s" }}
          ></div>

          {/* Radial gradients for depth */}
          <div
            className="absolute inset-0 animate-pulse-slower"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, rgba(0,255,136,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,23,68,0.15) 0%, transparent 50%)",
            }}
          ></div>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-primary/30 animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 rounded-full bg-accent/30 animate-float-delayed"></div>
          <div className="absolute top-1/2 left-3/4 w-1 h-1 rounded-full bg-primary/20 animate-float-slow"></div>

          <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-primary/40 animate-pulse-glow"></div>
          <div
            className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 rounded-full bg-accent/40 animate-pulse-glow"
            style={{ animationDelay: "1s" }}
          ></div>

          <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full bg-primary/50 animate-orbit"></div>
          <div className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full bg-accent/50 animate-orbit-reverse"></div>

          <div className="absolute top-1/5 right-1/5 w-1 h-1 rounded-full bg-primary/60 animate-twinkle"></div>
          <div
            className="absolute bottom-1/3 right-2/3 w-1 h-1 rounded-full bg-accent/60 animate-twinkle"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div
            className="absolute top-2/3 left-1/5 w-0.5 h-0.5 rounded-full bg-primary/40 animate-twinkle"
            style={{ animationDelay: "2.5s" }}
          ></div>

          <div className="absolute top-1/6 left-2/3 w-2 h-2 rounded-full bg-primary/30 animate-float-diagonal"></div>
          <div className="absolute bottom-1/5 right-1/4 w-1.5 h-1.5 rounded-full bg-accent/30 animate-drift"></div>

          <div
            className="absolute top-1/4 right-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-md animate-pulse-glow"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute bottom-1/3 left-1/4 w-10 h-10 rounded-full bg-gradient-to-br from-accent/20 to-transparent blur-lg animate-pulse-glow"
            style={{ animationDelay: "2s" }}
          ></div>

          <svg className="absolute inset-0 w-full h-full opacity-20" style={{ animationDelay: "1s" }}>
            <line
              x1="20%"
              y1="30%"
              x2="80%"
              y2="70%"
              stroke="url(#gradient1)"
              strokeWidth="1"
              strokeDasharray="1000"
              className="animate-[line-draw_8s_ease-in-out_infinite]"
            />
            <line
              x1="70%"
              y1="20%"
              x2="30%"
              y2="80%"
              stroke="url(#gradient2)"
              strokeWidth="1"
              strokeDasharray="1000"
              className="animate-[line-draw_10s_ease-in-out_infinite]"
              style={{ animationDelay: "2s" }}
            />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(0,255,136,0.4)" />
                <stop offset="100%" stopColor="rgba(0,255,136,0)" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,23,68,0.4)" />
                <stop offset="100%" stopColor="rgba(255,23,68,0)" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative flex items-center justify-center gap-4 py-8 min-h-[420px]">
          <div
            onClick={goToPrevious}
            className="hidden md:block relative w-56 opacity-40 blur-sm scale-90 transition-all duration-500 hover:opacity-60 hover:blur-[2px] hover:scale-95 cursor-pointer"
          >
            <TraderCard trader={traders[getPrevIndex()]} index={getPrevIndex()} isPreview />
          </div>

          <div className="relative w-80 z-20 transition-all duration-700">
            <TraderCard trader={traders[currentIndex]} index={currentIndex} isActive />
          </div>

          <div
            onClick={goToNext}
            className="hidden md:block relative w-56 opacity-40 blur-sm scale-90 transition-all duration-500 hover:opacity-60 hover:blur-[2px] hover:scale-95 cursor-pointer"
          >
            <TraderCard trader={traders[getNextIndex()]} index={getNextIndex()} isPreview />
          </div>
        </div>

        <button
          onClick={goToPrevious}
          className="group absolute left-2 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-2xl bg-card/60 backdrop-blur-md border-2 border-border/50 hover:bg-card hover:border-primary/80 hover:scale-110 active:scale-95 transition-all duration-300 shadow-xl hover:shadow-primary/30 cursor-pointer"
        >
          <div className="absolute inset-0 rounded-2xl bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl bg-primary/40 transition-opacity duration-300"></div>
          <ChevronLeft className="relative w-6 h-6 mx-auto text-muted-foreground group-hover:text-primary transition-colors duration-300" />
        </button>

        <button
          onClick={goToNext}
          className="group absolute right-2 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-2xl bg-card/60 backdrop-blur-md border-2 border-border/50 hover:bg-card hover:border-accent/80 hover:scale-110 active:scale-95 transition-all duration-300 shadow-xl hover:shadow-accent/30 cursor-pointer"
        >
          <div className="absolute inset-0 rounded-2xl bg-accent/0 group-hover:bg-accent/10 transition-colors duration-300"></div>
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl bg-accent/40 transition-opacity duration-300"></div>
          <ChevronRight className="relative w-6 h-6 mx-auto text-muted-foreground group-hover:text-accent transition-colors duration-300" />
        </button>

        <div className="flex justify-center gap-2.5 mt-6">
          {traders.map((trader, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-500 shadow-lg",
                index === currentIndex
                  ? trader.accentColor === "green"
                    ? "w-10 bg-primary shadow-primary/50"
                    : "w-10 bg-accent shadow-accent/50"
                  : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50 hover:scale-125",
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function TraderCard({
  trader,
  index,
  isActive = false,
  isPreview = false,
}: { trader: Trader; index: number; isActive?: boolean; isPreview?: boolean }) {
  return (
    <div className="relative w-full">
      <div
        className={cn(
          "absolute inset-0 rounded-2xl p-[2px]",
          trader.accentColor === "green" ? "border-animated-green" : "border-animated-red",
        )}
      >
        <div className="w-full h-full bg-card rounded-2xl"></div>
      </div>

      <div
        className={cn(
          "relative rounded-2xl overflow-hidden bg-gradient-to-br from-card via-card to-card/80 backdrop-blur-xl",
          trader.accentColor === "green" ? "glow-green" : "glow-red",
          isPreview && "pointer-events-none",
        )}
      >
        <div
          className={cn(
            "absolute top-3 right-3 z-20 rounded-xl flex items-center justify-center font-black shadow-2xl border-2",
            isPreview ? "w-8 h-8 text-xs" : "w-10 h-10 text-sm",
            trader.accentColor === "green"
              ? "bg-primary text-primary-foreground border-primary/50"
              : "bg-accent text-accent-foreground border-accent/50",
          )}
          style={{ fontFamily: "var(--font-display)" }}
        >
          #{index + 1}
        </div>

        <div className={cn("relative overflow-hidden", isPreview ? "h-20" : "h-28")}>
          <div
            className={cn(
              "absolute inset-0",
              trader.accentColor === "green"
                ? "bg-gradient-to-br from-primary/30 via-primary/15 to-transparent"
                : "bg-gradient-to-br from-accent/30 via-accent/15 to-transparent",
            )}
          />
          <div className="absolute inset-0 shimmer-effect"></div>
          <div className={cn("absolute top-0 right-0 opacity-20", isPreview ? "w-20 h-20" : "w-28 h-28")}>
            <div
              className={cn(
                "absolute inset-0 rotate-45",
                trader.accentColor === "green" ? "bg-primary/30" : "bg-accent/30",
              )}
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
            ></div>
          </div>
        </div>

        <div className={cn("flex justify-center relative z-10", isPreview ? "-mt-10 mb-3" : "-mt-14 mb-4")}>
          <div className="relative">
            <div
              className={cn(
                "absolute inset-0 rounded-full blur-xl",
                trader.accentColor === "green" ? "bg-primary/50" : "bg-accent/50",
              )}
            ></div>
            <div
              className={cn(
                "relative rounded-full border-4 overflow-hidden bg-card shadow-2xl",
                isPreview ? "w-20 h-20" : "w-28 h-28",
                trader.accentColor === "green" ? "border-primary" : "border-accent",
              )}
            >
              <img src={trader.avatar || "/placeholder.svg"} alt={trader.name} className="w-full h-full object-cover" />
            </div>
            {!isPreview && (
              <div
                className={cn(
                  "absolute -bottom-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center border-2 border-card shadow-lg",
                  trader.accentColor === "green" ? "bg-primary" : "bg-accent",
                )}
              >
                <Award className="w-3.5 h-3.5 text-card" />
              </div>
            )}
          </div>
        </div>

        <div className={cn("space-y-3", isPreview ? "px-4 pb-4" : "px-5 pb-5")}>
          <div className="text-center space-y-0.5">
            <h3
              className={cn("font-black text-foreground tracking-tight", isPreview ? "text-lg" : "text-xl")}
              style={{ fontFamily: "var(--font-display)" }}
            >
              {trader.name}
            </h3>
            <p className={cn("text-muted-foreground font-semibold tracking-wide", isPreview ? "text-xs" : "text-sm")}>
              {trader.username}
            </p>
          </div>

          {!isPreview && (
            <>
              <p className="text-xs text-muted-foreground/80 text-center leading-relaxed min-h-[28px] font-medium px-1">
                {trader.bio}
              </p>

              <div className="flex items-center justify-center gap-2 flex-wrap">
                {trader.badges.map((badge) => (
                  <span
                    key={badge}
                    className="px-2.5 py-0.5 rounded-lg text-xs font-bold bg-muted/80 text-foreground border border-border/50 backdrop-blur-sm shadow-sm"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </>
          )}

          <div className={cn("flex items-center justify-center py-2", isPreview ? "gap-4" : "gap-6")}>
            <div className="flex flex-col items-center gap-0.5">
              <Star
                className={cn(
                  trader.accentColor === "green" ? "fill-primary text-primary" : "fill-accent text-accent",
                  isPreview ? "w-4 h-4" : "w-5 h-5",
                )}
              />
              <span
                className={cn("font-black tracking-tight", isPreview ? "text-base" : "text-lg")}
                style={{ fontFamily: "var(--font-display)" }}
              >
                {trader.rating.toFixed(1)}
              </span>
            </div>
            <div
              className={cn(
                "w-px",
                isPreview ? "h-8" : "h-10",
                trader.accentColor === "green" ? "bg-primary/30" : "bg-accent/30",
              )}
            ></div>
            <div className="flex flex-col items-center gap-0.5">
              <Users className={cn("text-muted-foreground", isPreview ? "w-4 h-4" : "w-5 h-5")} />
              <span
                className={cn("font-black", isPreview ? "text-sm" : "text-base")}
                style={{ fontFamily: "var(--font-display)" }}
              >
                {trader.followers}
              </span>
            </div>
          </div>

          {!isPreview && (
            <div className="flex justify-center pt-1">
              <div className="relative">
                <div
                  className={cn(
                    "absolute inset-0 rounded-full blur-md",
                    trader.accentColor === "green" ? "bg-primary/50" : "bg-accent/50",
                  )}
                ></div>
                <span
                  className={cn(
                    "relative px-5 py-1.5 rounded-full text-xs font-black tracking-wider shadow-lg",
                    trader.accentColor === "green"
                      ? "bg-primary text-primary-foreground"
                      : "bg-accent text-accent-foreground",
                  )}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {trader.category}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
