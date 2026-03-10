
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { ScarcityTimer } from "@/components/ui/ScarcityTimer";
import { Button } from "@/components/ui/button";
import { QuizSection } from "@/components/sections/QuizSection";
import { Benefits } from "@/components/sections/Benefits";
import { Testimonials } from "@/components/sections/Testimonials";
import { BonusSection } from "@/components/sections/BonusSection";
import { GuaranteeSection } from "@/components/sections/GuaranteeSection";
import { ArrowRight, Sparkles, ShieldCheck, Lock, Zap, Star } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const CHECKOUT_URL = "https://pay.hotmart.com/O104724868L?checkoutMode=10";

export default function Home() {
  const [showQuiz, setShowQuiz] = useState(false);

  const startQuiz = () => {
    setShowQuiz(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBuyNow = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout', {
        value: 9.90,
        currency: 'USD',
      });
    }
    window.location.href = CHECKOUT_URL;
  };

  const martinaImage = PlaceHolderImages.find(img => img.id === 'martina-perez');
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-resin');

  return (
    <main className="min-h-screen bg-white text-foreground selection:bg-primary/20">
      {/* Top Banner Urgency */}
      <ScarcityTimer />

      {!showQuiz ? (
        <div className="flex flex-col">
          {/* Hero Section Optimized */}
          <section className="relative pt-12 pb-20 px-6 overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
              {heroImage && (
                <Image 
                  src={heroImage.imageUrl} 
                  alt="Background" 
                  fill 
                  className="object-cover"
                />
              )}
            </div>
            
            <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider animate-fade-in">
                <Sparkles className="w-4 h-4" />
                Nueva Tendencia 2026
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
                Aprende a crear <span className="text-primary italic">piezas de resina</span> y genera ingresos desde casa aunque empieces desde cero
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
                Un método paso a paso que ya ayudó a más de <span className="text-foreground font-bold">3.000 mujeres</span> a comenzar su propio negocio con resina.
              </p>

              <div className="pt-4 space-y-4">
                <Button 
                  onClick={startQuiz}
                  size="lg"
                  className="w-full max-w-md h-20 text-xl font-black bg-primary hover:bg-primary/90 text-white rounded-3xl shadow-2xl shadow-primary/20 transition-all hover:scale-[1.02] group"
                >
                  Acceder al curso ahora
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-xs font-bold text-muted-foreground flex items-center justify-center gap-2">
                  <Lock className="w-3 h-3" /> Compra 100% segura y acceso inmediato
                </p>
              </div>
            </div>
          </section>

          {/* Social Proof Bar */}
          <section className="bg-accent/30 py-6 border-y border-primary/5">
            <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div className="space-y-1">
                <div className="flex justify-center md:justify-start gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
                </div>
                <p className="text-sm font-black uppercase tracking-widest text-primary">+3.000 alumnas activas</p>
              </div>
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-accent relative overflow-hidden">
                    <Image src={`https://picsum.photos/seed/${i}/100/100`} alt="Alumna" fill />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-primary flex items-center justify-center text-[10px] text-white font-bold">
                  +3k
                </div>
              </div>
            </div>
          </section>

          {/* Martina Profile Short */}
          <section className="py-20 px-6 bg-white">
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-accent">
                {martinaImage && (
                  <Image 
                    src={martinaImage.imageUrl} 
                    alt="Martina Pérez" 
                    fill 
                    className="object-cover"
                    unoptimized
                  />
                )}
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-black leading-tight">
                  Hola, soy <span className="text-primary">Martina Pérez</span>
                </h2>
                <div className="space-y-4 text-muted-foreground font-medium leading-relaxed">
                  <p>Descubrí el arte en resina en 2019 y transformó mi vida por completo.</p>
                  <p>Hoy, mi misión es enseñarte cómo tú también puedes crear piezas hermosas y venderlas por <span className="text-foreground font-bold">más de US$ 3.500 al mes</span> sin salir de tu casa.</p>
                </div>
                <Button 
                  onClick={startQuiz}
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/5 font-black px-8 py-6 rounded-2xl"
                >
                  Conocer mi historia
                </Button>
              </div>
            </div>
          </section>

          <Benefits />
          <Testimonials />
          <BonusSection />
          <GuaranteeSection />

          {/* Final CTA High Urgency */}
          <section className="py-24 px-6 bg-primary text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
            
            <div className="max-w-2xl mx-auto space-y-10 relative z-10">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-black leading-tight">
                  Empieza hoy tu camino para ganar dinero con resina
                </h2>
                <p className="text-lg opacity-80 font-medium">
                  Únete ahora y obtén acceso inmediato a todos los módulos y bonos exclusivos.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-[2.5rem] p-8 space-y-6 border border-white/20">
                <div className="flex justify-center items-baseline gap-2">
                  <span className="text-2xl line-through opacity-50 font-bold">$97.00</span>
                  <span className="text-6xl font-black">$9.90</span>
                </div>
                
                <Button 
                  onClick={handleBuyNow}
                  size="lg"
                  className="w-full h-20 text-2xl font-black bg-secondary hover:bg-secondary/90 text-white rounded-3xl shadow-xl transition-all hover:scale-105"
                >
                  ¡Quiero empezar ahora!
                </Button>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                  {[
                    { icon: ShieldCheck, text: "Pago Seguro" },
                    { icon: Zap, text: "Acceso Instantáneo" },
                    { icon: Lock, text: "SSL Protegido" },
                    { icon: ShieldCheck, text: "Garantía 7 días" }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center gap-1">
                      <item.icon className="w-4 h-4 opacity-70" />
                      <span className="text-[10px] font-black uppercase tracking-tighter opacity-70">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <p className="text-red-300 font-black animate-pulse text-sm">
                ⚠️ OFERTA DISPONIBLE SOLO POR HOY
              </p>
            </div>
          </section>
        </div>
      ) : (
        <div id="quiz-area" className="animate-fade-in">
          <QuizSection />
        </div>
      )}

      {/* Footer */}
      <footer className="py-16 px-6 border-t bg-white text-center space-y-6">
        <p className="font-black text-primary uppercase tracking-[0.2em] text-sm">Viviendo de Resina</p>
        <div className="flex justify-center gap-6 text-[10px] text-muted-foreground uppercase font-bold tracking-widest">
          <span>Términos de Uso</span>
          <span>•</span>
          <span>Política de Privacidad</span>
        </div>
        <p className="text-[10px] text-muted-foreground font-medium">
          © 2024 Martina Pérez - Todos los derechos reservados.
        </p>
      </footer>
    </main>
  );
}
