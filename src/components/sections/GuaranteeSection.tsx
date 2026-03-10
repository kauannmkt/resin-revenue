
"use client";

import { ShieldCheck } from "lucide-react";
import Image from "next/image";

export function GuaranteeSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-accent/30 rounded-[3rem] p-10 md:p-16 border-2 border-dashed border-primary/20 flex flex-col md:flex-row items-center gap-12">
          <div className="relative w-48 h-48 shrink-0">
            <Image 
              src="https://i.imgur.com/icac9Wd.png" 
              alt="Garantía" 
              fill 
              className="object-contain"
              unoptimized
            />
          </div>
          
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-3xl font-black leading-tight">Garantía Incondicional de 7 Días</h2>
            <p className="text-muted-foreground font-medium leading-relaxed">
              Quiero que estés 100% segura de tu inversión. Si al entrar al curso sientes que no es para ti, puedes solicitar la devolución completa de tu dinero dentro de los primeros 7 días. Sin preguntas, sin complicaciones.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-primary font-black">
              <ShieldCheck className="w-6 h-6" />
              Riesgo Cero para Ti
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
