"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';
import { ScarcityTimer } from "@/components/ui/ScarcityTimer";
import { Button } from "@/components/ui/button";
import { QuizSection } from "@/components/sections/QuizSection";
import { ArrowRight, Sparkles, Lock, Star } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Home() {
  const [showQuiz, setShowQuiz] = useState(false);
  const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  const startQuiz = () => {
    setShowQuiz(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialProofImages = [
    PlaceHolderImages.find(img => img.id === 'student-success-1'),
    PlaceHolderImages.find(img => img.id === 'student-success-2'),
    PlaceHolderImages.find(img => img.id === 'student-success-3'),
  ].filter(Boolean);

  return (
    <main className="min-h-screen bg-white text-foreground selection:bg-primary/20 flex flex-col">
      {/* Top Banner Urgency */}
      <ScarcityTimer />

      {!showQuiz ? (
        <div className="flex-1 flex flex-col items-center px-6 py-10 md:py-16 text-center relative overflow-hidden">
          <div className="max-w-md mx-auto space-y-8 relative z-10 flex flex-col items-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] animate-fade-in">
              <Sparkles className="w-3 h-3" />
              Nueva Tendencia 2026
            </div>
            
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl font-black leading-[1.1] tracking-tight text-balance">
                Aprende a crear <span className="text-primary">piezas de resina</span> y genera ingresos desde casa aunque empieces desde cero
              </h1>
              
              <p className="text-base text-muted-foreground font-medium text-balance">
                Un método paso a paso que ya ayudó a más de <span className="text-foreground font-bold">3.000 mujeres</span> a comenzar su propio negocio con resina.
              </p>
            </div>

            {/* CTA Section */}
            <div className="w-full pt-2 space-y-4">
              <Button 
                onClick={startQuiz}
                size="lg"
                className="w-full h-16 text-lg font-black bg-primary hover:bg-primary/90 text-white rounded-3xl shadow-xl transition-all active:scale-95 group"
              >
                Acceder al curso ahora
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <div className="flex flex-col items-center gap-1">
                <p className="text-[10px] font-bold text-muted-foreground flex items-center justify-center gap-2 uppercase tracking-wider">
                  <Lock className="w-3 h-3" /> Compra 100% segura y acceso inmediato
                </p>
              </div>
            </div>

            {/* Social Proof Carousel */}
            <div className="w-full pt-8 space-y-4">
              <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Resultados de nuestras alumnas</p>
              <Carousel 
                className="w-full" 
                opts={{ loop: true }}
                plugins={[autoplay.current]}
              >
                <CarouselContent>
                  {socialProofImages.map((img, idx) => (
                    <CarouselItem key={idx}>
                      <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg border-4 border-accent bg-accent/5 mx-1 flex items-center justify-center">
                        {img && (
                          <Image 
                            src={img.imageUrl} 
                            alt={`Resultado ${idx + 1}`} 
                            fill 
                            className="object-contain p-2"
                            unoptimized
                          />
                        )}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              <div className="flex items-center justify-center gap-1 opacity-60">
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-primary text-primary" />)}
                </div>
                <span className="text-[10px] font-black uppercase text-primary tracking-tighter">4.9/5 (3.2k reviews)</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div id="quiz-area" className="animate-fade-in flex-1">
          <QuizSection />
        </div>
      )}

      {/* Simplified Footer */}
      <footer className="py-6 px-6 border-t bg-white text-center mt-auto">
        <p className="font-black text-primary/40 uppercase tracking-[0.2em] text-[10px]">Viviendo de Resina</p>
      </footer>
    </main>
  );
}
