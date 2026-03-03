"use client";

import { Button } from "@/components/ui/button";
import { ShieldCheck, Zap, ArrowRight, Star, Clock, Gift, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const CHECKOUT_URL = "https://pay.hotmart.com/O104724868L?checkoutMode=10";

export function QuizResult() {
  const resinGrid = PlaceHolderImages.filter(img => img.id.startsWith('resin-grid-'));

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

  return (
    <div className="animate-fade-in bg-white pb-20">
      {/* Sales Header */}
      <div className="bg-primary text-white py-12 px-6 text-center space-y-4">
        <h1 className="text-3xl font-black leading-tight">
          ¡ESTÁS LISTA PARA EMPEZAR! 🚀
        </h1>
        <p className="text-lg opacity-90 font-medium">
          Accede ahora al método completo "Viviendo de Resina"
        </p>
      </div>

      {/* Offer Summary */}
      <div className="max-w-md mx-auto px-6 -mt-6">
        <div className="bg-white border-4 border-primary rounded-[3rem] p-8 shadow-2xl space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-black text-center">Lo que recibirás hoy:</h2>
            <ul className="space-y-3">
              {[
                "Curso completo en Video HD (Paso a paso)",
                "Lista VIP de Proveedores (Ahorra 40%)",
                "Módulo de Ventas en Instagram y Etsy",
                "Comunidad exclusiva de Alumnas",
                "Soporte individual vía WhatsApp"
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <Star className="w-3 h-3 text-white fill-white" />
                  </div>
                  <span className="font-bold text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 border-t border-accent text-center space-y-4">
            <div className="inline-block bg-red-100 text-red-600 px-4 py-1 rounded-full text-xs font-black animate-pulse">
              OFERTA POR TIEMPO LIMITADO
            </div>
            <div className="space-y-1">
              <p className="text-muted-foreground line-through text-lg">$97.00</p>
              <p className="text-5xl font-black text-primary">$9.90</p>
            </div>
            <Button 
              onClick={handleBuyNow}
              className="w-full h-20 bg-secondary hover:bg-secondary/90 text-white text-xl font-black rounded-3xl shadow-xl group"
            >
              ¡QUIERO EL ACCESO AHORA!
              <ShoppingCart className="ml-2 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="py-16 px-6 space-y-10">
        <h2 className="text-2xl font-black text-center">Tus creaciones pronto serán así...</h2>
        <div className="grid grid-cols-2 gap-3">
          {resinGrid.slice(0, 4).map((img, i) => (
            <div key={i} className="relative aspect-square rounded-2xl overflow-hidden shadow-md">
              <Image 
                src={img.imageUrl} 
                alt="Referencia de pieza de resina" 
                fill 
                className="object-cover"
                unoptimized={img.imageUrl.includes('imgur.com')}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bonus Section */}
      <div className="bg-accent py-16 px-6 space-y-8">
        <h2 className="text-2xl font-black text-center">Bono Exclusivo 🎁</h2>
        <div className="bg-white p-6 rounded-3xl space-y-4 shadow-sm border-2 border-primary/20">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
            <Gift className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-black leading-tight">Guía de Marketing Digital para Artesanas</h3>
          <p className="text-muted-foreground text-sm font-medium">
            Aprende a tomar fotos profesionales de tus piezas y a venderlas a clientes en todo el país usando solo tu celular.
          </p>
          <p className="text-primary font-bold">¡GRATIS solo por hoy!</p>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-16 px-6 text-center space-y-8">
        <div className="space-y-2">
          <p className="text-red-600 font-black flex items-center justify-center gap-2">
            <Clock className="w-4 h-4" /> SOLO QUEDAN 3 PLAZAS DISPONIBLES
          </p>
          <h2 className="text-3xl font-black">Empieza hoy tu negocio de éxito</h2>
        </div>
        
        <Button 
          onClick={handleBuyNow}
          className="w-full h-20 bg-primary hover:bg-primary/90 text-white text-xl font-black rounded-3xl shadow-xl"
        >
          OBTENER MI ACCESO INMEDIATO
          <ArrowRight className="ml-2" />
        </Button>

        <div className="flex items-center justify-center gap-6 text-[10px] font-black uppercase opacity-60">
          <span className="flex items-center gap-1"><Zap className="w-4 h-4" /> Acceso de por vida</span>
          <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4" /> Garantía 7 días</span>
        </div>
      </div>
    </div>
  );
}
