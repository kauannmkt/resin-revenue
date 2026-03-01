
"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const TESTIMONIALS = [
  {
    name: "Maria García",
    role: "Artista de Joyas",
    quote: "Empecé sin experiencia. ¡En 3 semanas vendí mi primera colección por $800!",
    image: "student-1"
  },
  {
    name: "Carlos Ruiz",
    role: "Diseño de Muebles",
    quote: "El módulo de mesas oceánicas cambió mi negocio para siempre.",
    image: "student-2"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-md mx-auto space-y-10">
        <h2 className="text-3xl font-black text-center leading-tight">
          Historias de Éxito 🌟
        </h2>

        <div className="space-y-6">
          {TESTIMONIALS.map((t, index) => (
            <div key={index} className="bg-accent p-6 rounded-[2rem] space-y-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="italic font-medium leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-black/5">
                <div className="font-black text-primary text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">— {t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
