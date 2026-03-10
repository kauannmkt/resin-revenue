
"use client";

import { Gift, BookOpen, Smartphone, ShoppingBag } from "lucide-react";

const BONUSES = [
  {
    title: "Lista VIP de Proveedores",
    description: "Ahorra un 40% en tus materiales con nuestra lista exclusiva de proveedores recomendados.",
    icon: ShoppingBag,
    value: "$47.00"
  },
  {
    title: "Productos Best-Seller",
    description: "Descubre cuáles son las 10 piezas que más se venden hoy para ir a lo seguro.",
    icon: BookOpen,
    value: "$27.00"
  },
  {
    title: "Marketing para Artesanas",
    description: "Estrategias paso a paso para vender tus piezas en Instagram y Facebook Ads.",
    icon: Smartphone,
    value: "$37.00"
  }
];

export function BonusSection() {
  return (
    <section className="py-24 px-6 bg-accent">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <div className="inline-block bg-primary text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
            Regalo Especial 🎁
          </div>
          <h2 className="text-3xl md:text-5xl font-black leading-tight">
            Bonos exclusivos incluidos
          </h2>
          <p className="text-muted-foreground font-medium">
            Si te inscribes hoy, recibirás estos 3 bonos adicionales totalmente GRATIS.
          </p>
        </div>

        <div className="space-y-4">
          {BONUSES.map((bonus, index) => (
            <div key={index} className="bg-white p-6 md:p-8 rounded-[2rem] flex flex-col md:flex-row items-center gap-6 shadow-sm border-2 border-primary/10 transition-transform hover:scale-[1.01]">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                <bonus.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1 text-center md:text-left space-y-1">
                <h3 className="font-black text-xl">{bonus.title}</h3>
                <p className="text-muted-foreground text-sm font-medium leading-relaxed">{bonus.description}</p>
              </div>
              <div className="text-center md:text-right">
                <p className="text-[10px] font-black uppercase text-muted-foreground line-through">VALOR {bonus.value}</p>
                <p className="text-primary font-black text-lg">¡GRATIS!</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
