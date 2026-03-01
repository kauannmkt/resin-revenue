
"use client";

import { Button } from "@/components/ui/button";
import { Sparkles, Palette, ArrowRight } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ScarcityTimer } from "@/components/ui/ScarcityTimer";

export function Hero({ onStartQuiz }: { onStartQuiz: () => void }) {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-resin');

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover opacity-10"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="flex justify-center animate-slide-up [animation-delay:100ms]">
            <ScarcityTimer />
          </div>

          <div className="space-y-4 animate-slide-up [animation-delay:200ms]">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight text-primary">
              Viviendo de <span className="text-foreground italic">Resina</span> ✨
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto">
              Transform your creativity into a high-profit business. Discover the secrets of professional resin art. 🎨
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up [animation-delay:300ms]">
            <Button 
              onClick={onStartQuiz}
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 py-7 rounded-full transition-all hover:scale-105 shadow-xl group"
            >
              Start My Profit Quiz
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Join 5,000+ Students</span>
            </div>
          </div>

          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 animate-slide-up [animation-delay:400ms]">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center">
                <Palette className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-medium">Expert Techniques</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center">
                <span className="text-xl">💰</span>
              </div>
              <span className="text-sm font-medium">Profit Mastery</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center">
                <span className="text-xl">🛠️</span>
              </div>
              <span className="text-sm font-medium">Supplies List</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center">
                <span className="text-xl">🤝</span>
              </div>
              <span className="text-sm font-medium">VIP Community</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
