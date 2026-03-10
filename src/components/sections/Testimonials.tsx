
"use client";

import { Star, MapPin } from "lucide-react";
import Image from "next/image";

const TESTIMONIALS = [
  {
    name: "Lucía Fernández",
    role: "Alumna desde Madrid",
    quote: "Pensé que sería difícil, pero en pocas semanas ya vendí mis primeras piezas. ¡El curso es increíble y Martina explica todo súper claro!",
    image: "https://picsum.photos/seed/lucia/200/200"
  },
  {
    name: "Carmen Rodríguez",
    role: "Alumna desde Bogotá",
    quote: "La lista de proveedores me ahorró muchísimo dinero. Ya tengo mi propia tienda en Instagram y estoy recibiendo pedidos todos los días.",
    image: "https://picsum.photos/seed/carmen/200/200"
  },
  {
    name: "Sofía Méndez",
    role: "Alumna desde Ciudad de México",
    quote: "Gracias a los bonos de marketing aprendí a tomar fotos profesionales. Mis amigas no creen que yo misma hice estas joyas de resina.",
    image: "https://picsum.photos/seed/sofia/200/200"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-black leading-tight">
            Historias de Éxito Real 🌟
          </h2>
          <p className="text-muted-foreground font-medium max-w-2xl mx-auto">
            Más de 3.000 alumnas ya están transformando sus vidas con este método.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <div key={index} className="bg-accent/50 p-8 rounded-[2.5rem] space-y-6 flex flex-col justify-between border border-primary/5">
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="italic font-medium leading-relaxed text-foreground/80">"{t.quote}"</p>
              </div>
              
              <div className="flex items-center gap-4 pt-6 border-t border-black/5">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                  <Image src={t.image} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <div className="font-black text-primary text-sm">{t.name}</div>
                  <div className="text-[10px] text-muted-foreground flex items-center gap-1 font-bold">
                    <MapPin className="w-3 h-3" /> {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
