
"use client";

import { Button } from "@/components/ui/button";
import { ShieldCheck, Zap, ArrowRight, Star, Clock, ShoppingCart, Lock, MapPin, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Benefits } from "@/components/sections/Benefits";
import { BonusSection } from "@/components/sections/BonusSection";
import { GuaranteeSection } from "@/components/sections/GuaranteeSection";
import { Testimonials } from "@/components/sections/Testimonials";

const CHECKOUT_URL = "https://pay.hotmart.com/O104724868L?checkoutMode=10";

export function QuizResult() {
  const resinGrid = PlaceHolderImages.filter(img => img.id.startsWith('resin-grid-'));
  const instructorImg = PlaceHolderImages.find(img => img.id === 'martina-perez');

  const handleBuyNow = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Purchase', {
        value: 142.52,
        currency: 'USD',
      });
    }
    window.location.href = CHECKOUT_URL;
  };

  return (
    <div className="animate-fade-in bg-white pb-20">
      {/* Sales Header - Approval Message */}
      <div className="bg-primary text-white py-16 px-6 text-center space-y-6">
        <div className="inline-block bg-white/20 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
          Perfil Aprobado ✅
        </div>
        <h1 className="text-3xl md:text-5xl font-black leading-tight">
          ¡ESTÁS LISTA PARA EMPEZAR TU NEGOCIO! 🚀
        </h1>
        <p className="text-lg opacity-90 font-medium max-w-2xl mx-auto">
          Basado en tus respuestas, tienes el perfil ideal para tener éxito con el método "Viviendo de Resina".
        </p>
      </div>

      {/* Offer Summary Card */}
      <div className="max-w-md mx-auto px-6 -mt-10 mb-20">
        <div className="bg-white border-4 border-primary rounded-[3rem] p-8 shadow-2xl space-y-8 relative z-10">
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-center">Todo lo que recibirás:</h2>
            <ul className="space-y-4">
              {[
                "Curso en Video HD (De cero a experta)",
                "Lista VIP de Proveedores (+40% ahorro)",
                "Módulo de Ventas por Instagram",
                "Comunidad Exclusiva de Alumnas",
                "Certificado de Finalización"
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <Star className="w-3 h-3 text-white fill-white" />
                  </div>
                  <span className="font-bold text-sm leading-tight">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-8 border-t border-accent text-center space-y-6">
            <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-xs font-black animate-pulse uppercase tracking-wider">
              ⚠️ Oferta disponible solo hoy
            </div>
            <div className="space-y-1">
              <p className="text-muted-foreground line-through text-xl">$97.00</p>
              <p className="text-6xl font-black text-primary">$9.90</p>
            </div>
            <div className="space-y-4">
              <Button 
                onClick={handleBuyNow}
                className="w-full h-20 bg-secondary hover:bg-secondary/90 text-white text-xl font-black rounded-3xl shadow-xl transition-all hover:scale-105 group"
              >
                ¡QUIERO EL ACCESO AHORA!
                <ShoppingCart className="ml-2 w-6 h-6 group-hover:scale-110 transition-transform" />
              </Button>
              <div className="flex items-center justify-center gap-4 text-[10px] font-black uppercase opacity-60">
                <span className="flex items-center gap-1"><Lock className="w-3 h-3" /> Pago Seguro</span>
                <span className="flex items-center gap-1"><Zap className="w-3 h-3" /> Acceso Instantáneo</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Biography Section */}
      <section className="py-20 px-6 bg-accent/30 overflow-hidden">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="relative w-64 h-80 shrink-0 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
            {instructorImg && (
              <Image 
                src={instructorImg.imageUrl} 
                alt="Martina Pérez" 
                fill 
                className="object-cover"
                unoptimized
              />
            )}
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-black">Conoce a Martina Pérez</h2>
              <p className="text-primary font-black uppercase tracking-widest text-sm">Tu mentora y guía</p>
            </div>
            <p className="text-muted-foreground font-medium leading-relaxed">
              Martina es una experta artesana que ha transformado su pasión por la resina en un negocio próspero. Después de años perfeccionando técnicas y cometiendo errores, creó el método "Viviendo de Resina" para ayudar a otras mujeres a alcanzar su independencia financiera sin pasar por las mismas dificultades.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full text-xs font-bold shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-primary" /> +3,000 Alumnas
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full text-xs font-bold shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-primary" /> Experta en Resina
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Results Gallery */}
      <div className="py-24 px-6 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-black">Resultados que Impactan</h2>
          <p className="text-muted-foreground font-medium">Mira lo que nuestras alumnas están creando después de solo unos días de práctica.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {resinGrid.map((img, i) => (
            <div key={i} className="relative aspect-square rounded-[2rem] overflow-hidden shadow-lg group">
              <Image 
                src={img.imageUrl} 
                alt="Resultado de alumna" 
                fill 
                className="object-cover transition-transform group-hover:scale-110"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white/90 p-2 rounded-full">
                  <Star className="w-5 h-5 text-primary fill-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic Sections Moved from Landing */}
      <Benefits />
      <Testimonials />
      <BonusSection />
      <GuaranteeSection />

      {/* Final Urgency & Final CTA */}
      <div className="py-20 px-6 text-center space-y-12 bg-primary text-white">
        <div className="max-w-2xl mx-auto space-y-4">
          <p className="font-black flex items-center justify-center gap-2 uppercase tracking-widest text-sm text-secondary">
            <Clock className="w-5 h-5" /> ÚLTIMA OPORTUNIDAD
          </p>
          <h2 className="text-3xl md:text-5xl font-black">¿Estás lista para cambiar tu vida hoy?</h2>
          <p className="opacity-80 font-medium text-lg">Únete a nuestra comunidad y comienza a facturar con tus propias manos.</p>
        </div>
        
        <div className="max-w-md mx-auto space-y-6">
          <Button 
            onClick={handleBuyNow}
            className="w-full h-24 bg-secondary hover:bg-secondary/90 text-white text-2xl font-black rounded-[2.5rem] shadow-2xl transition-transform hover:scale-105"
          >
            SÍ, QUIERO EL ACCESO ✅
            <ArrowRight className="ml-2 w-7 h-7" />
          </Button>
          <div className="flex flex-col items-center gap-2 opacity-70">
            <p className="text-sm font-bold flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" /> Garantía de Satisfacción de 7 Días
            </p>
            <p className="text-[10px] uppercase font-black tracking-widest">Compra Protegida por Hotmart</p>
          </div>
        </div>
      </div>
    </div>
  );
}
