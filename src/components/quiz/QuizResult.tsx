
"use client";

import { Button } from "@/components/ui/button";
import { ShieldCheck, Zap, ArrowRight, Star, Clock, Gift, ShoppingCart, Lock } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const CHECKOUT_URL = "https://pay.hotmart.com/O104724868L?checkoutMode=10";

export function QuizResult() {
  const resinGrid = PlaceHolderImages.filter(img => img.id.startsWith('resin-grid-'));

  const handleBuyNow = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Purchase', {
        value: 9.90,
        currency: 'USD',
      });
    }
    window.location.href = CHECKOUT_URL;
  };

  return (
    <div className="animate-fade-in bg-white pb-20">
      {/* Sales Header */}
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

      {/* Offer Summary */}
      <div className="max-w-md mx-auto px-6 -mt-10">
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

      {/* Social Proof Gallery */}
      <div className="py-20 px-6 space-y-10">
        <h2 className="text-2xl md:text-3xl font-black text-center">Tus creaciones pronto serán así...</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {resinGrid.slice(0, 4).map((img, i) => (
            <div key={i} className="relative aspect-square rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
              <Image 
                src={img.imageUrl} 
                alt="Resultado" 
                fill 
                className="object-cover"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>

      {/* Final Urgency */}
      <div className="py-16 px-6 text-center space-y-10 bg-accent/30 border-y border-primary/10">
        <div className="max-w-2xl mx-auto space-y-4">
          <p className="text-red-600 font-black flex items-center justify-center gap-2 uppercase tracking-widest text-sm">
            <Clock className="w-5 h-5" /> Solo quedan 3 plazas disponibles
          </p>
          <h2 className="text-3xl md:text-4xl font-black">No pierdas esta oportunidad única</h2>
          <p className="text-muted-foreground font-medium">Empieza hoy tu propio negocio y alcanza tu independencia financiera con el arte en resina.</p>
        </div>
        
        <div className="max-w-md mx-auto space-y-4">
          <Button 
            onClick={handleBuyNow}
            className="w-full h-20 bg-primary hover:bg-primary/90 text-white text-xl font-black rounded-3xl shadow-xl"
          >
            SÍ, QUIERO EMPEZAR HOY
            <ArrowRight className="ml-2" />
          </Button>
          <p className="text-xs font-bold text-muted-foreground flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-green-600" /> Garantía de Satisfacción de 7 Días
          </p>
        </div>
      </div>
    </div>
  );
}
