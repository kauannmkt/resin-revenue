"use client";

import { useState } from 'react';
import Image from 'next/image';
import { ScarcityTimer } from "@/components/ui/ScarcityTimer";
import { Button } from "@/components/ui/button";
import { QuizSection } from "@/components/sections/QuizSection";
import { Benefits } from "@/components/sections/Benefits";
import { Testimonials } from "@/components/sections/Testimonials";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const CHECKOUT_URL = "https://seguroamplopay.com/checkout/cmm3zk4xf08ju1rlkljkvomzg?offer=5LYS90G";

export default function Home() {
  const [showQuiz, setShowQuiz] = useState(false);

  const startQuiz = () => {
    setShowQuiz(true);
    setTimeout(() => {
      const element = document.getElementById('quiz-area');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleBuyNow = () => {
    // Disparar evento de compra do Meta Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Purchase', {
        value: 142.52,
        currency: 'USD',
      });
    }
    window.location.href = CHECKOUT_URL;
  };

  const martinaImage = PlaceHolderImages.find(img => img.id === 'martina-perez');

  return (
    <main className="min-h-screen bg-white text-foreground selection:bg-primary/20">
      {/* Top Banner */}
      <ScarcityTimer />

      {!showQuiz ? (
        <div className="flex flex-col">
          {/* Hero Section */}
          <section className="bg-gradient-to-b from-primary to-primary/90 text-white pt-16 pb-12 px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-black leading-tight mb-8 uppercase">
              LA GRAN TENDENCIA de 2026:<br />
              <span className="text-secondary italic">ARTE EN RESINA</span>
            </h1>

            <div className="max-w-md mx-auto space-y-6 text-xl leading-relaxed font-medium">
              <p>Hola, ¿cómo estás?</p>
              <p>
                Me llamo <span className="font-bold border-b-2 border-secondary">Martina Pérez</span> y trabajo con artesanía desde 2019.
              </p>
              <p>
                Descubrí una forma <span className="text-secondary font-black">NUEVA y SENCILLA</span> de GANAR MÁS de <span className="bg-secondary text-white px-2 rounded">US$ 3.500 al mes</span> creando piezas con resina, ¡incluso sin experiencia!
              </p>
            </div>
          </section>

          {/* Martina Profile */}
          <section className="py-12 px-6 text-center space-y-8 bg-white">
            <div className="max-w-sm mx-auto space-y-4">
              <div className="relative w-full aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-primary/5 bg-accent/10 transition-transform hover:scale-[1.02]">
                {martinaImage && (
                  <Image 
                    src={martinaImage.imageUrl} 
                    alt="Martina Pérez" 
                    fill 
                    className="object-cover"
                    unoptimized={martinaImage.imageUrl.includes('imgur.com')}
                    data-ai-hint={martinaImage.imageHint}
                  />
                )}
              </div>
              <p className="text-2xl font-black italic text-primary">Martina Pérez</p>
            </div>

            <div className="max-w-md mx-auto space-y-8">
              <p className="text-2xl font-bold leading-tight px-4">
                ¡Y lo mejor! Te voy a enseñar ahora mismo cómo tú también puedes hacerlo y vivir de esto!
              </p>
              
              <div className="space-y-4">
                <p className="text-muted-foreground font-medium">
                  Haz clic en el botón de abajo para empezar.
                </p>
                
                <Button 
                  onClick={startQuiz}
                  className="w-full h-24 text-2xl font-black bg-primary hover:bg-primary/90 text-white rounded-[2.5rem] shadow-2xl animate-bounce"
                >
                  ¡Quiero descubrir cómo!
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </div>
              
              <p className="flex items-center justify-center gap-2 text-base font-bold text-muted-foreground">
                <Sparkles className="w-5 h-5 text-primary" />
                ¡Únete a +5.000 alumnas!
              </p>
            </div>
          </section>

          <Benefits />
          <Testimonials />

          {/* Final Conversion Section */}
          <section className="py-24 px-6 bg-accent/30 text-center space-y-12">
            <div className="max-w-md mx-auto space-y-8">
              <div className="inline-block bg-red-100 text-red-600 px-6 py-2 rounded-full text-sm font-black uppercase tracking-wider">
                SOLO QUEDAN 3 PLAZAS DISPONIBLES
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl font-black leading-tight">
                  Empieza hoy por solo <span className="text-primary text-5xl block mt-2">$9.90</span>
                </h2>
                <p className="text-lg text-muted-foreground font-medium">
                  Acceso inmediato a todos los módulos, lista de proveedores y comunidad VIP.
                </p>
              </div>
              
              <Button 
                onClick={handleBuyNow}
                size="lg"
                className="w-full py-12 text-3xl font-black bg-secondary hover:bg-secondary/90 text-white rounded-[2.5rem] shadow-xl"
              >
                OBTENER MI ACCESO
              </Button>
              
              <div className="flex flex-col items-center justify-center gap-4 text-sm font-bold opacity-70">
                <span className="flex items-center gap-2 bg-white/50 px-4 py-2 rounded-full">
                  <ShieldCheck className="w-5 h-5 text-green-600" /> Garantía de 7 días
                </span>
              </div>
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
          © 2024 Todos los derechos reservados.
        </p>
      </footer>
    </main>
  );
}
