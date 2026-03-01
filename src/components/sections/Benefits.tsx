
"use client";

import { CheckCircle2, Package, TrendingUp, Users } from "lucide-react";

const BENEFITS = [
  {
    title: "Método Paso a Paso",
    description: "De principiante a experta con más de 40 lecciones en video HD.",
    icon: TrendingUp
  },
  {
    title: "Lista de Proveedores",
    description: "Ahorra un 40% en materiales de alta calidad.",
    icon: Package
  },
  {
    title: "Mastery de Ventas",
    description: "Cómo vender en Instagram, Etsy y galerías locales.",
    icon: CheckCircle2
  },
  {
    title: "Comunidad VIP",
    description: "Apoyo constante de otras artistas exitosas.",
    icon: Users
  }
];

export function Benefits() {
  return (
    <section className="py-20 px-6 bg-primary/5">
      <div className="max-w-md mx-auto space-y-12">
        <h2 className="text-3xl font-black text-center leading-tight">
          ¿Por qué aprender conmigo? 💎
        </h2>
        
        <div className="space-y-8">
          {BENEFITS.map((benefit, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="w-12 h-12 shrink-0 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-1">
                <h3 className="font-black text-lg">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
