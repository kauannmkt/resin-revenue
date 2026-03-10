
"use client";

import { CheckCircle2, Package, TrendingUp, Users, Target, Gem } from "lucide-react";

const BENEFITS = [
  {
    title: "Creación desde Cero",
    description: "Aprende paso a paso cómo preparar la resina, evitar burbujas y lograr acabados perfectos.",
    icon: Gem
  },
  {
    title: "Materiales y Proveedores",
    description: "Lista VIP de dónde comprar los mejores materiales al precio más bajo.",
    icon: Package
  },
  {
    title: "Venta en Redes Sociales",
    description: "Cómo vender en Instagram y Facebook usando solo tu celular.",
    icon: TrendingUp
  },
  {
    title: "Dónde conseguir Clientes",
    description: "Estrategias probadas para encontrar personas interesadas en tus piezas.",
    icon: Target
  },
  {
    title: "Ganar Dinero desde Casa",
    description: "Plan de acción para generar tus primeros $1,000 dólares mensuales.",
    icon: CheckCircle2
  },
  {
    title: "Comunidad de Apoyo",
    description: "Acceso al grupo privado de alumnas para resolver dudas.",
    icon: Users
  }
];

export function Benefits() {
  return (
    <section className="py-24 px-6 bg-primary/5">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-black leading-tight">
            Lo que aprenderás en este curso 💎
          </h2>
          <p className="text-muted-foreground font-medium max-w-2xl mx-auto">
            Un entrenamiento completo diseñado para que pases de principiante a experta en tiempo récord.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-shadow border border-primary/5 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="font-black text-xl">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-medium">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
